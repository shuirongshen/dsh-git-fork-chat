// src/host/mount-once.ts
var MOUNTED = Symbol.for("dsh-gitchat.mounted");
var WAITERS = Symbol.for("dsh-gitchat.mounted.waiters");
function mountOnce(name, fn) {
  const wrapped = (ctx) => {
    const registry = globalThis;
    const mounted = registry[MOUNTED] ??= /* @__PURE__ */ new Set();
    if (mounted.has(name)) {
      const waiters = registry[WAITERS] ??= /* @__PURE__ */ new Map();
      const queue = waiters.get(name) ?? [];
      let alive = true;
      queue.push(() => {
        if (alive) wrapped(ctx);
      });
      waiters.set(name, queue);
      ctx?.effect?.(() => () => {
        alive = false;
      });
      return;
    }
    mounted.add(name);
    ctx?.effect?.(() => () => {
      mounted.delete(name);
      const queue = registry[WAITERS]?.get(name);
      if (queue === void 0 || queue.length === 0) return;
      registry[WAITERS]?.delete(name);
      for (const waiter of queue) queueMicrotask(waiter);
    });
    fn(ctx);
  };
  return wrapped;
}

// src/host/routes.ts
import { mkdir, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

// src/host/lineage.ts
function isForkChild(record) {
  return record.header.parentSession !== void 0 && record.header.origin !== "subagent";
}
function forkChildrenByParent(records) {
  const children = /* @__PURE__ */ new Map();
  for (const record of records) {
    if (!isForkChild(record)) continue;
    const parent = record.header.parentSession;
    const list = children.get(parent) ?? [];
    list.push(record);
    children.set(parent, list);
  }
  for (const list of children.values()) {
    list.sort((a, b) => a.header.createdAt - b.header.createdAt || a.header.id.localeCompare(b.header.id));
  }
  return children;
}
function recordsById(records) {
  const byId = /* @__PURE__ */ new Map();
  for (const record of records) byId.set(record.header.id, record);
  return byId;
}
function topAncestor(records, sessionId) {
  const byId = recordsById(records);
  const seen = /* @__PURE__ */ new Set();
  let current = byId.get(sessionId)?.header;
  if (current === void 0) return void 0;
  while (current.parentSession !== void 0 && !seen.has(current.parentSession)) {
    seen.add(current.id);
    const parent = byId.get(current.parentSession)?.header;
    if (parent === void 0) return current;
    current = parent;
  }
  return current;
}
function displayCurrentSessionId(records, sessionId) {
  const byId = recordsById(records);
  const seen = /* @__PURE__ */ new Set();
  let header = byId.get(sessionId)?.header;
  while (header !== void 0 && header.origin === "subagent" && header.parentSession !== void 0 && !seen.has(header.id)) {
    seen.add(header.id);
    header = byId.get(header.parentSession)?.header;
  }
  return header?.id ?? sessionId;
}
function collectForkSubtree(records, sessionId) {
  const byId = recordsById(records);
  const children = forkChildrenByParent(records);
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  const visit = (id) => {
    if (seen.has(id)) return;
    const record = byId.get(id);
    if (record === void 0) return;
    seen.add(id);
    out.push(record);
    for (const child of children.get(id) ?? []) visit(child.header.id);
  };
  visit(sessionId);
  return out;
}
function descendantCounts(records) {
  const children = forkChildrenByParent(records);
  const memo = /* @__PURE__ */ new Map();
  const visit = (id, stack) => {
    const cached = memo.get(id);
    if (cached !== void 0) return cached;
    if (stack.has(id)) return 0;
    stack.add(id);
    let count = 0;
    for (const child of children.get(id) ?? []) {
      count += 1 + visit(child.header.id, stack);
    }
    stack.delete(id);
    memo.set(id, count);
    return count;
  };
  for (const record of records) visit(record.header.id, /* @__PURE__ */ new Set());
  return memo;
}
function visibleSessionIds(records, rootId, archivedSessionIds, includeArchived, maxSessions) {
  const byId = recordsById(records);
  const children = forkChildrenByParent(records);
  const ids = [];
  let truncated = false;
  const visit = (id) => {
    const record = byId.get(id);
    if (record === void 0) return;
    if (archivedSessionIds.has(id) && !includeArchived) return;
    if (ids.length >= maxSessions) {
      truncated = true;
      return;
    }
    ids.push(id);
    for (const child of children.get(id) ?? []) visit(child.header.id);
  };
  visit(rootId);
  return { ids, truncated };
}
function shortSessionId(sessionId) {
  const tail = sessionId.replace(/^session-/, "");
  return tail.length > 8 ? tail.slice(0, 8) : tail;
}

// src/host/tree.ts
var MAX_MESSAGE_CHARS = 2e4;
var MAX_SESSIONS = 80;
var MAX_TURNS = 800;
var MAX_NODES = 900;
var GitChatTreeError = class extends Error {
  code;
  constructor(code, message) {
    super(message);
    this.name = "GitChatTreeError";
    this.code = code;
  }
};
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function extractText(content) {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  const parts = [];
  for (const block of content) {
    if (typeof block === "string") {
      parts.push(block);
      continue;
    }
    if (!isRecord(block)) continue;
    if (block.type === "text" && typeof block.text === "string") parts.push(block.text);
  }
  return parts.join("\n").trim();
}
function isHumanUserMessage(data) {
  const source = data.source;
  if (isRecord(source) && source.kind === "user") return true;
  if (data.role !== "user") return false;
  if (isRecord(source) && source.kind !== void 0) return false;
  const text = extractText(data.content);
  if (text === "") return false;
  if (text.includes("<system-reminder>")) return false;
  if (text.startsWith("Current runtime context.")) return false;
  return true;
}
function statusOfReason(reason) {
  if (!isRecord(reason)) return { status: "completed" };
  const kind = typeof reason.kind === "string" ? reason.kind : "completed";
  if (kind === "completed") return { status: "completed" };
  if (kind === "error") {
    const error = isRecord(reason.error) ? reason.error : void 0;
    const message = typeof error?.message === "string" ? error.message : "\u6A21\u578B\u8C03\u7528\u5931\u8D25";
    return { status: "error", detail: clipDetail(message) };
  }
  if (kind === "blocked") return { status: "blocked" };
  if (kind === "interrupted" || kind === "aborted" || kind === "cancelled" || kind === "canceled") {
    return { status: "interrupted" };
  }
  return { status: "completed" };
}
function clipDetail(text) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > 240 ? `${clean.slice(0, 237)}\u2026` : clean;
}
function clipMessage(text) {
  const normalized = text.replace(/\r\n/g, "\n").trim();
  if (normalized.length <= MAX_MESSAGE_CHARS) return { text: normalized, truncated: false };
  return { text: `${normalized.slice(0, MAX_MESSAGE_CHARS)}
\u2026`, truncated: true };
}
function parseSession(observation) {
  const header = observation.session;
  const inheritedEventCount = Number.isFinite(observation.inheritedEventCount) ? Math.max(0, Math.trunc(observation.inheritedEventCount)) : 0;
  const events = [...observation.events].sort((a, b) => a.seq - b.seq);
  const turns = [];
  const byTurn = /* @__PURE__ */ new Map();
  let current = null;
  let title = "";
  let provider;
  let model;
  for (const event of events) {
    const data = isRecord(event.data) ? event.data : {};
    switch (event.type) {
      case "turn/start": {
        const turn = typeof data.turn === "number" ? data.turn : turns.length + 1;
        current = {
          turn,
          startSeq: event.seq,
          endSeq: null,
          lastSeq: event.seq,
          user: "",
          assistant: "",
          assistantSeq: null,
          status: "running",
          time: event.time,
          toolCalls: 0,
          inherited: event.seq < inheritedEventCount
        };
        turns.push(current);
        byTurn.set(turn, current);
        break;
      }
      case "turn/end": {
        const turn = typeof data.turn === "number" ? data.turn : current?.turn;
        const target = turn === void 0 ? current : byTurn.get(turn) ?? current;
        if (target !== null && target !== void 0) {
          const outcome = statusOfReason(data.reason);
          target.endSeq = event.seq;
          target.lastSeq = Math.max(target.lastSeq, event.seq);
          target.status = outcome.status;
          if (outcome.detail !== void 0) target.statusDetail = outcome.detail;
          current = null;
        }
        break;
      }
      case "user/message": {
        if (current === null || !isHumanUserMessage(data)) break;
        const text = extractText(data.content);
        if (text === "") break;
        current.user = current.user === "" ? text : `${current.user}

${text}`;
        current.lastSeq = Math.max(current.lastSeq, event.seq);
        break;
      }
      case "assistant/message": {
        if (current === null) break;
        const text = extractText(isRecord(data.message) ? data.message.content : void 0);
        if (text !== "") {
          current.assistant = text;
          current.assistantSeq = event.seq;
        }
        if (data.interrupted === true) current.status = "interrupted";
        current.lastSeq = Math.max(current.lastSeq, event.seq);
        break;
      }
      case "tool/call": {
        if (current !== null) {
          current.toolCalls += 1;
          current.lastSeq = Math.max(current.lastSeq, event.seq);
        }
        break;
      }
      case "assistant/attempt":
      case "tool/result":
      case "step/start":
      case "step/end":
      case "developer/message":
      case "system/message":
      case "request/header":
      case "request/context": {
        if (current !== null) current.lastSeq = Math.max(current.lastSeq, event.seq);
        break;
      }
      case "session/title": {
        if (typeof data.title === "string" && data.title.trim() !== "") title = data.title.trim();
        break;
      }
      case "session/end-seed": {
        break;
      }
      default:
        break;
    }
    if (event.type === "request/context") {
      if (typeof data.provider === "string") provider = data.provider;
      if (typeof data.model === "string") model = data.model;
    } else if (event.type === "request/header" && isRecord(data.header)) {
      const config = isRecord(data.header.config) ? data.header.config : void 0;
      if (typeof config?.provider === "string") provider = config.provider;
      if (typeof config?.model === "string") model = config.model;
    } else if (event.type === "session/title" && typeof data.title === "string" && data.title.trim() !== "") {
      title = data.title.trim();
    }
  }
  const ownTurns = turns.filter((turn) => turn.startSeq >= inheritedEventCount);
  return {
    header,
    inheritedEventCount,
    turns,
    ownTurns,
    title,
    ...provider === void 0 ? {} : { provider },
    ...model === void 0 ? {} : { model }
  };
}
function failedSession(header, error) {
  return {
    header,
    inheritedEventCount: 0,
    turns: [],
    ownTurns: [],
    title: shortSessionId(header.id),
    error
  };
}
function titleOf(parsed, header) {
  const title = parsed?.title?.trim();
  if (title !== void 0 && title !== "") return title;
  return shortSessionId(header.id);
}
function resolveBoundaryNode(boundarySeq, parentSessionId, parsed, nodes, rootNodeId) {
  if (boundarySeq < 0 || parentSessionId === void 0) return rootNodeId;
  const seen = /* @__PURE__ */ new Set();
  let currentId = parentSessionId;
  while (currentId !== void 0 && !seen.has(currentId)) {
    seen.add(currentId);
    const owner = parsed.get(currentId);
    if (owner === void 0) return rootNodeId;
    if (boundarySeq < owner.inheritedEventCount) {
      currentId = owner.header.parentSession;
      continue;
    }
    for (const turn of owner.turns) {
      if (boundarySeq < turn.startSeq) break;
      if (boundarySeq <= turn.lastSeq) {
        const nodeId = `turn:${currentId}:${turn.turn}`;
        if (nodes.has(nodeId)) return nodeId;
        return rootNodeId;
      }
    }
    return rootNodeId;
  }
  return rootNodeId;
}
function buildGitChatTree(input) {
  const { records, observations, includeArchived, archivedSessionIds } = input;
  const byId = recordsById(records);
  const currentSessionId = displayCurrentSessionId(records, input.currentSessionId);
  const root = topAncestor(records, currentSessionId);
  if (root === void 0) {
    throw new GitChatTreeError("gitchat/session-not-found", `session "${input.currentSessionId}" is not known to the session query service`);
  }
  const rootId = root.id;
  const archivedSet = new Set(archivedSessionIds);
  const effectiveIncludeArchived = includeArchived || archivedSet.has(currentSessionId);
  const children = forkChildrenByParent(records);
  const descendants = descendantCounts(records);
  const included = [];
  let truncated = false;
  const visit = (sessionId) => {
    const record = byId.get(sessionId);
    if (record === void 0) return;
    const archived = archivedSet.has(sessionId);
    if (archived && !effectiveIncludeArchived) return;
    if (included.length >= MAX_SESSIONS) {
      truncated = true;
      return;
    }
    included.push(record);
    for (const child of children.get(sessionId) ?? []) visit(child.header.id);
  };
  visit(rootId);
  const parsed = /* @__PURE__ */ new Map();
  for (const record of included) {
    const entry = observations.get(record.header.id);
    if (entry?.error !== void 0) {
      parsed.set(record.header.id, failedSession(record.header, entry.error));
      continue;
    }
    if (entry?.observation === void 0) {
      parsed.set(record.header.id, failedSession(record.header, "session log was not loaded"));
      continue;
    }
    try {
      parsed.set(record.header.id, parseSession(entry.observation));
    } catch (error) {
      parsed.set(record.header.id, failedSession(record.header, error instanceof Error ? error.message : String(error)));
    }
  }
  const rootParsed = parsed.get(rootId);
  if (rootParsed?.error !== void 0) {
    throw new GitChatTreeError("gitchat/root-unreadable", `root session "${rootId}" could not be read: ${rootParsed.error}`);
  }
  const nodeById = /* @__PURE__ */ new Map();
  const nodes = [];
  let turnNodes = 0;
  const addNode = (node) => {
    if (nodeById.has(node.id)) return true;
    if (nodes.length >= MAX_NODES) {
      truncated = true;
      return false;
    }
    nodeById.set(node.id, node);
    nodes.push(node);
    if (node.kind === "turn") turnNodes += 1;
    return true;
  };
  const rootTitle = titleOf(rootParsed, root);
  addNode({
    id: `root:${rootId}`,
    kind: "root",
    parentId: null,
    sessionId: rootId,
    sessionTitle: rootTitle,
    turn: null,
    user: "",
    assistant: "",
    status: archivedSet.has(rootId) ? "unknown" : "completed",
    time: root.createdAt,
    startSeq: null,
    endSeq: null,
    forkSeq: null,
    assistantSeq: null,
    toolCalls: 0,
    archived: archivedSet.has(rootId),
    current: rootId === currentSessionId,
    childSessionIds: [],
    label: rootTitle
  });
  const addTurnNode = (record, turn, parentId, sessionTitle) => {
    if (turnNodes >= MAX_TURNS) {
      truncated = true;
      return null;
    }
    const user = clipMessage(turn.user);
    const assistant = clipMessage(turn.assistant);
    const node = {
      id: `turn:${record.header.id}:${turn.turn}`,
      kind: "turn",
      parentId,
      sessionId: record.header.id,
      sessionTitle,
      turn: turn.turn,
      user: user.text,
      assistant: assistant.text,
      status: turn.status,
      time: turn.time,
      startSeq: turn.startSeq,
      endSeq: turn.endSeq,
      // Only a closed turn has an unambiguous inclusive fork boundary. A live
      // turn stays branchable from Chat itself, not from the graph.
      forkSeq: turn.endSeq,
      assistantSeq: turn.assistantSeq,
      toolCalls: turn.toolCalls,
      archived: archivedSet.has(record.header.id),
      current: record.header.id === currentSessionId,
      childSessionIds: [],
      textTruncated: user.truncated || assistant.truncated
    };
    if (turn.statusDetail !== void 0) node.statusDetail = turn.statusDetail;
    return addNode(node) ? node.id : null;
  };
  for (const record of included) {
    const session = parsed.get(record.header.id);
    if (session === void 0) continue;
    const sessionTitle = titleOf(session, record.header);
    const isRoot = record.header.id === rootId;
    let parentId = `root:${rootId}`;
    if (!isRoot) {
      const boundarySeq = session.inheritedEventCount - 1;
      parentId = resolveBoundaryNode(boundarySeq, record.header.parentSession, parsed, nodeById, `root:${rootId}`);
    }
    if (session.error !== void 0) {
      const branchId = `branch:${record.header.id}`;
      addNode({
        id: branchId,
        kind: "branch",
        parentId,
        sessionId: record.header.id,
        sessionTitle,
        turn: null,
        user: "",
        assistant: `\u4F1A\u8BDD\u8BFB\u53D6\u5931\u8D25\uFF1A${session.error}`,
        status: "error",
        statusDetail: clipDetail(session.error),
        time: record.header.createdAt,
        startSeq: null,
        endSeq: null,
        forkSeq: session.inheritedEventCount > 0 ? session.inheritedEventCount - 1 : null,
        assistantSeq: null,
        toolCalls: 0,
        archived: archivedSet.has(record.header.id),
        current: record.header.id === currentSessionId,
        childSessionIds: [],
        label: "\u8BFB\u53D6\u5931\u8D25"
      });
      continue;
    }
    if (!isRoot && session.ownTurns.length === 0) {
      addNode({
        id: `branch:${record.header.id}`,
        kind: "branch",
        parentId,
        sessionId: record.header.id,
        sessionTitle,
        turn: null,
        user: "",
        assistant: "",
        status: "unknown",
        time: record.header.createdAt,
        startSeq: null,
        endSeq: null,
        forkSeq: session.inheritedEventCount > 0 ? session.inheritedEventCount - 1 : null,
        assistantSeq: null,
        toolCalls: 0,
        archived: archivedSet.has(record.header.id),
        current: record.header.id === currentSessionId,
        childSessionIds: [],
        label: "\u7A7A\u5206\u652F"
      });
      continue;
    }
    const turns = isRoot ? session.turns : session.ownTurns;
    for (const turn of turns) {
      const created = addTurnNode(record, turn, parentId, sessionTitle);
      if (created !== null) parentId = created;
    }
  }
  const edges = [];
  const rootNodeId = `root:${rootId}`;
  for (const node of nodes) {
    if (node.parentId === null) continue;
    const parent = nodeById.get(node.parentId) ?? nodeById.get(rootNodeId);
    if (parent === void 0) continue;
    const kind = parent.sessionId === node.sessionId ? "chain" : "fork";
    edges.push({
      id: `edge:${parent.id}->${node.id}`,
      source: parent.id,
      target: node.id,
      kind,
      archived: node.archived
    });
    if (kind === "fork" && !parent.childSessionIds.includes(node.sessionId)) {
      parent.childSessionIds.push(node.sessionId);
    }
  }
  const sessions = included.map((record) => {
    const session = parsed.get(record.header.id);
    const summary = {
      sessionId: record.header.id,
      title: titleOf(session, record.header),
      parentSessionId: record.header.parentSession ?? null,
      createdAt: record.header.createdAt,
      archived: archivedSet.has(record.header.id),
      current: record.header.id === currentSessionId,
      turnCount: session?.turns.length ?? 0,
      ownTurnCount: session?.ownTurns.length ?? 0,
      forkSeq: session !== void 0 && session.inheritedEventCount > 0 ? session.inheritedEventCount - 1 : null,
      descendantCount: descendants.get(record.header.id) ?? 0
    };
    if (record.header.cwd !== void 0) summary.cwd = record.header.cwd;
    if (record.header.agentPreset !== void 0) summary.agentPreset = record.header.agentPreset;
    if (session?.provider !== void 0) summary.provider = session.provider;
    if (session?.model !== void 0) summary.model = session.model;
    if (session?.error !== void 0) summary.error = session.error;
    return summary;
  });
  return {
    version: 1,
    rootId,
    currentSessionId,
    generatedAt: input.generatedAt ?? Date.now(),
    includeArchived: effectiveIncludeArchived,
    truncated,
    nodes,
    edges,
    sessions,
    stats: {
      sessions: sessions.length,
      turns: turnNodes,
      branches: edges.filter((edge) => edge.kind === "fork").length,
      archivedBranches: sessions.filter((session) => session.archived && session.sessionId !== rootId).length
    }
  };
}

// src/host/http.ts
var MAX_BODY_BYTES = 64 * 1024;
var JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "referrer-policy": "no-referrer",
  "x-content-type-options": "nosniff"
};
async function readJsonBody(request, maxBytes = MAX_BODY_BYTES) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > maxBytes) {
      request.destroy();
      return null;
    }
    chunks.push(buffer);
  }
  if (size === 0) return null;
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return null;
  }
}
function writeJson(response, status, body, headers = {}) {
  const payload = JSON.stringify(body);
  response.writeHead(status, { ...JSON_HEADERS, "content-length": Buffer.byteLength(payload), ...headers });
  response.end(payload);
}
function writeError(response, error, status = 200) {
  writeJson(response, status, { ok: false, error });
}
function requestPath(request) {
  return new URL(request.url ?? "/", "http://gitchat.local").pathname;
}
function isLoopback(request) {
  const address = request.socket?.remoteAddress;
  if (address === void 0 || address === "") return true;
  const normalized = address.startsWith("::ffff:") ? address.slice("::ffff:".length) : address;
  return normalized === "::1" || normalized === "127.0.0.1" || normalized.startsWith("127.");
}
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function stringField(body, field) {
  if (!isRecord2(body)) return null;
  const value = body[field];
  return typeof value === "string" && value.trim() !== "" ? value.trim() : null;
}
function booleanField(body, field) {
  return isRecord2(body) && body[field] === true;
}

// src/host/routes.ts
var PACKAGE_NAME = "dsh-gitchat";
var PACKAGE_VERSION = "0.1.0";
var CACHE_TTL_MS = 1500;
var READ_CONCURRENCY = 4;
var RouteError = class extends Error {
  code;
  status;
  constructor(code, message, status = 200) {
    super(message);
    this.name = "RouteError";
    this.code = code;
    this.status = status;
  }
};
async function mapLimit(items, limit, fn) {
  const output = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    while (true) {
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      output[index] = await fn(items[index], index);
    }
  });
  await Promise.all(workers);
  return output;
}
function messageOf(error) {
  if (error instanceof Error) return error.message;
  return String(error);
}
function dshHome() {
  const configured = process.env.DSH_HOME?.trim();
  return configured !== void 0 && configured !== "" ? configured : join(homedir(), ".dsh");
}
function safeStem(value) {
  const cleaned = value.replace(/[<>:"/\\|?*\u0000-\u001f]/g, "_").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^[-_.]+|[-_.]+$/g, "").slice(0, 56);
  return cleaned === "" ? "tree" : cleaned;
}
var GitChatService = class _GitChatService {
  constructor(ctx) {
    this.ctx = ctx;
  }
  cache = /* @__PURE__ */ new Map();
  /** Invalidate every cached tree. */
  invalidate() {
    this.cache.clear();
  }
  /** Read and validate the records once per operation. */
  async records() {
    const records = await this.ctx.sessionQuery.listSessions();
    return [...records];
  }
  /** Find one known session or throw a stable error. */
  static requireSession(records, sessionId) {
    const record = records.find((candidate) => candidate.header.id === sessionId);
    if (record === void 0) {
      throw new RouteError("gitchat/session-not-found", `session "${sessionId}" is not known to DSH`);
    }
    return record;
  }
  /** Build or reuse one read model. */
  async loadTree(sessionId, includeArchived, fresh = false) {
    const records = await this.records();
    const target = _GitChatService.requireSession(records, sessionId);
    const archivedSet = new Set(this.ctx.workspaceRegistry.archivedSessionIds);
    const currentId = displayCurrentSessionId(records, sessionId);
    let effectiveInclude = includeArchived || archivedSet.has(currentId);
    const root = topAncestor(records, currentId);
    if (root === void 0) {
      throw new RouteError("gitchat/session-not-found", `session "${sessionId}" has no readable lineage`);
    }
    let roster = visibleSessionIds(records, root.id, archivedSet, effectiveInclude, MAX_SESSIONS);
    if (!roster.ids.includes(currentId)) {
      effectiveInclude = true;
      roster = visibleSessionIds(records, root.id, archivedSet, true, MAX_SESSIONS);
    }
    const cacheKey = `${currentId}|${root.id}|${effectiveInclude ? "all" : "visible"}`;
    if (!fresh) {
      const cached = this.cache.get(cacheKey);
      if (cached !== void 0 && Date.now() - cached.at < CACHE_TTL_MS) return cached.tree;
    }
    const pairs = await mapLimit(
      roster.ids,
      READ_CONCURRENCY,
      async (id) => {
        try {
          const observation = await this.ctx.sessionQuery.readSession(id);
          return [id, { observation }];
        } catch (error) {
          return [id, { error: messageOf(error) }];
        }
      }
    );
    const observations = new Map(pairs);
    const tree = buildGitChatTree({
      records,
      observations,
      currentSessionId: target.header.id,
      includeArchived: effectiveInclude,
      archivedSessionIds: [...archivedSet],
      generatedAt: Date.now()
    });
    this.cache.set(cacheKey, { at: Date.now(), tree });
    return tree;
  }
  /** Archive a fork subtree; rollback already-archived sessions on failure. */
  async archive(sessionId, force) {
    const records = await this.records();
    const target = _GitChatService.requireSession(records, sessionId);
    if (target.header.origin === "subagent") {
      throw new RouteError("gitchat/subagent-branch", "\u5B50\u4EE3\u7406\u4F1A\u8BDD\u4E0D\u662F\u5BF9\u8BDD\u5206\u652F\uFF0C\u4E0D\u80FD\u4ECE GitChat \u5F52\u6863");
    }
    if (target.header.parentSession === void 0) {
      throw new RouteError("gitchat/root-session", "\u6839\u4F1A\u8BDD\u4E0D\u80FD\u5F52\u6863\uFF1B\u8BF7\u9009\u62E9\u4E00\u4E2A\u5206\u652F\u8282\u70B9");
    }
    const subtree = collectForkSubtree(records, sessionId);
    const archived = new Set(this.ctx.workspaceRegistry.archivedSessionIds);
    const skipped = subtree.filter((record) => archived.has(record.header.id)).map((record) => record.header.id);
    const pending = subtree.filter((record) => !archived.has(record.header.id));
    if (pending.length === 0) {
      return { rootSessionId: sessionId, archivedSessions: [], skipped, count: 0 };
    }
    const done = [];
    try {
      for (const record of pending) {
        await this.ctx.workspaceRegistry.archiveSession(record.header.id, force ? { stopActivity: true } : void 0);
        done.push(record.header.id);
      }
    } catch (error) {
      for (const id of done.reverse()) {
        try {
          await this.ctx.workspaceRegistry.unarchiveSession(id);
        } catch {
        }
      }
      throw new RouteError(
        "gitchat/archive-failed",
        `\u5F52\u6863\u5206\u652F\u5931\u8D25\uFF1A${messageOf(error)}\u3002\u5DF2\u56DE\u6EDA\u672C\u6B21\u5DF2\u5F52\u6863\u7684 ${done.length} \u4E2A\u4F1A\u8BDD\u3002`
      );
    }
    this.invalidate();
    return {
      rootSessionId: sessionId,
      archivedSessions: done,
      skipped,
      count: done.length
    };
  }
  /** Restore one archived session. */
  async unarchive(sessionId) {
    const records = await this.records();
    _GitChatService.requireSession(records, sessionId);
    await this.ctx.workspaceRegistry.unarchiveSession(sessionId);
    this.invalidate();
    return { sessionId, unarchived: true };
  }
  /** Write a full JSON snapshot under ~/.dsh/plugin-data/dsh-gitchat/exports. */
  async save(sessionId) {
    const tree = await this.loadTree(sessionId, true, true);
    const rootTitle = tree.sessions.find((session) => session.sessionId === tree.rootId)?.title ?? tree.rootId;
    const exportsDir = join(dshHome(), "plugin-data", PACKAGE_NAME, "exports");
    await mkdir(exportsDir, { recursive: true });
    const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
    const file = join(exportsDir, `gitchat-${safeStem(rootTitle)}-${stamp}.json`);
    const json = JSON.stringify(tree, null, 2);
    await writeFile(file, json, "utf8");
    return {
      path: file,
      bytes: Buffer.byteLength(json),
      generatedAt: tree.generatedAt,
      sessions: tree.stats.sessions,
      turns: tree.stats.turns
    };
  }
};
async function dispatch(service, path, body) {
  switch (path) {
    case "/gitchat/tree": {
      const sessionId = stringField(body, "sessionId");
      if (sessionId === null) throw new RouteError("gitchat/bad-request", "\u7F3A\u5C11 sessionId");
      return service.loadTree(sessionId, booleanField(body, "includeArchived"));
    }
    case "/gitchat/archive": {
      const sessionId = stringField(body, "sessionId");
      if (sessionId === null) throw new RouteError("gitchat/bad-request", "\u7F3A\u5C11 sessionId");
      return service.archive(sessionId, booleanField(body, "force"));
    }
    case "/gitchat/unarchive": {
      const sessionId = stringField(body, "sessionId");
      if (sessionId === null) throw new RouteError("gitchat/bad-request", "\u7F3A\u5C11 sessionId");
      return service.unarchive(sessionId);
    }
    case "/gitchat/save": {
      const sessionId = stringField(body, "sessionId");
      if (sessionId === null) throw new RouteError("gitchat/bad-request", "\u7F3A\u5C11 sessionId");
      return service.save(sessionId);
    }
    default:
      throw new RouteError("gitchat/not-found", `unknown GitChat route "${path}"`, 404);
  }
}
function toRouteError(error) {
  if (error instanceof RouteError) return { code: error.code, message: error.message, status: error.status };
  if (error instanceof GitChatTreeError) return { code: error.code, message: error.message, status: 200 };
  return { code: "gitchat/internal", message: messageOf(error), status: 500 };
}
function registerGitChatRoutes(ctx) {
  const service = new GitChatService(ctx);
  const handler = (request, response) => {
    void (async () => {
      if (!isLoopback(request)) {
        writeError(response, { code: "gitchat/forbidden", message: "GitChat routes are loopback-only" }, 403);
        return;
      }
      const path = requestPath(request);
      if (request.method === "GET" && path === "/gitchat/ping") {
        writeJson(response, 200, {
          ok: true,
          value: { name: PACKAGE_NAME, version: PACKAGE_VERSION, now: Date.now() }
        });
        return;
      }
      if (request.method !== "POST") {
        writeError(response, { code: "gitchat/method-not-allowed", message: "use POST" }, 405);
        return;
      }
      try {
        const body = await readJsonBody(request);
        if (body === null) throw new RouteError("gitchat/bad-request", "\u8BF7\u6C42\u4F53\u5FC5\u987B\u662F 64 KiB \u4EE5\u5185\u7684 JSON");
        const value = await dispatch(service, path, body);
        writeJson(response, 200, { ok: true, value });
      } catch (error) {
        const routeError = toRouteError(error);
        writeError(response, { code: routeError.code, message: routeError.message }, routeError.status);
      }
    })();
  };
  const dispose = ctx.webServer.register({ kind: "prefix", path: "/gitchat", handler });
  return () => {
    service.invalidate();
    dispose();
  };
}

// src/host/index.ts
var inject = ["webServer", "sessionQuery", "workspaceRegistry"];
var apply = mountOnce("dsh-gitchat", (ctx) => {
  ctx.effect(() => registerGitChatRoutes(ctx), "dsh-gitchat: /gitchat routes");
});
export {
  apply,
  inject
};
