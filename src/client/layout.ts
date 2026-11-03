/**
 * Dagre layout for the GitChat flow.
 *
 * React Flow owns rendering and interaction; Dagre owns the tree layout. The
 * graph is a layered top-down tree, so forks fan out below the turn they
 * branch from without any custom geometry.
 */
import * as dagre from '@dagrejs/dagre'

/** One node size passed to the layout. */
export interface LayoutNode {
  id: string
  width: number
  height: number
}

/** One directed relationship passed to the layout. */
export interface LayoutEdge {
  source: string
  target: string
}

/** Top-left position of one laid-out node. */
export interface LayoutPosition {
  x: number
  y: number
  width: number
  height: number
}

/**
 * Lay out a tree and return top-left positions keyed by node id.
 * @param nodes - nodes with their rendered sizes.
 * @param edges - parent -> child edges.
 * @returns one position per input node.
 */
export function layoutTree(
  nodes: readonly LayoutNode[],
  edges: readonly LayoutEdge[],
): Map<string, LayoutPosition> {
  const positions = new Map<string, LayoutPosition>()
  if (nodes.length === 0) return positions

  const graph = new dagre.graphlib.Graph()
  graph.setGraph({
    rankdir: 'TB',
    ranksep: 64,
    nodesep: 38,
    marginx: 32,
    marginy: 32,
    ranker: 'network-simplex',
    acyclicer: 'greedy',
  })
  graph.setDefaultEdgeLabel(() => ({}))

  for (const node of nodes) {
    graph.setNode(node.id, { width: node.width, height: node.height })
  }
  for (const edge of edges) {
    // Dagre tolerates edges whose endpoints are outside the graph poorly;
    // the builder guarantees endpoints, but a defensive check keeps a clipped
    // graph renderable.
    if (!graph.hasNode(edge.source) || !graph.hasNode(edge.target)) continue
    graph.setEdge(edge.source, edge.target)
  }

  dagre.layout(graph)

  for (const node of nodes) {
    const laidOut = graph.node(node.id) as (dagre.Node & { x: number; y: number }) | undefined
    if (laidOut === undefined) {
      positions.set(node.id, { x: 0, y: 0, width: node.width, height: node.height })
      continue
    }
    positions.set(node.id, {
      x: laidOut.x - node.width / 2,
      y: laidOut.y - node.height / 2,
      width: node.width,
      height: node.height,
    })
  }
  return positions
}
