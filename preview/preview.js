"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = Symbol.for("react.element");
      var n = Symbol.for("react.portal");
      var p = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r = Symbol.for("react.profiler");
      var t2 = Symbol.for("react.provider");
      var u = Symbol.for("react.context");
      var v = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, e) {
        var d, c = {}, k = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
      }
      function N(a, b) {
        return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a)) for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
        else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
        else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b, e) {
        if (null == a) return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a2) {
          return b.call(e, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a, b, e) {
        S(a, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.act = X;
      exports.cloneElement = function(a, b, e) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t2, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l;
      var p;
      var q;
      var r = [];
      var t2 = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t2); null !== b; ) {
          if (null === b.callback) k(t2);
          else if (b.startTime <= a) k(t2), b.sortIndex = b.expirationTime, f(r, b);
          else break;
          b = h(t2);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A) if (null !== h(r)) A = true, I(J);
        else {
          var b = h(t2);
          null !== b && K(H, b.startTime - a);
        }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b);
            } else k(r);
            v = h(r);
          }
          if (null !== v) var w = true;
          else {
            var m = h(t2);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t2, a), null === h(r) && a === h(t2) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a, b) {
        ha(a, b);
        ha(a + "Capture", b);
      }
      function ha(a, b) {
        ea[a] = b;
        for (a = 0; a < b.length; a++) da.add(b[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a) {
        if (ja.call(ma, a)) return true;
        if (ja.call(la, a)) return false;
        if (ka.test(a)) return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v(a, b, c, d, e, f, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra,
          sa
        );
        z[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta(a, b, c, d) {
        var e = z.hasOwnProperty(b) ? z[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A = Object.assign;
      var La;
      function Ma(a) {
        if (void 0 === La) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La = b && b[1] || "";
        }
        return "\n" + La + a;
      }
      var Na = false;
      function Oa(a, b) {
        if (!a || Na) return "";
        Na = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l) {
              var d = l;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l) {
              d = l;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e[g] !== f[h]) {
                    var k = "\n" + e[g].replace(" at new ", " at ");
                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                    return k;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
          case Ha:
            b = a._payload;
            a = a._init;
            try {
              return Qa(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a) {
        var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya(a, b) {
        var c = b.checked;
        return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa(b.value), d = b.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b || a[e].disabled || (b = a[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
        return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa(c) };
      }
      function ib(a, b) {
        var c = Sa(b.value), d = Sa(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      })(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b.firstChild; ) a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
      }
      var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib) return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e, f, g, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e, f, g, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b) throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (null === e) break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c) return Xb(e), a;
              if (f === d) return Xb(e), b;
              f = f.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc2 = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
        } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function vc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
          var g = 31 - oc(f), h = 1 << g, k = e[g];
          if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
          } else k <= b && (a.expiredLanes |= h);
          f &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Ac(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e = 31 - oc(c), f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function Cc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a;
      }
      function Uc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Vc(a) {
        var b = Wc(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc(a) && c.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad(b2, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function gd(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e = Yc(a, b, c, d);
          if (null === e) hd(a, b, d, id2, c), Sc(a, d);
          else if (Uc(e, a, b, c, d)) d.stopPropagation();
          else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e; ) {
              var f = Cb(e);
              null !== f && Ec(f);
              f = Yc(a, b, c, d);
              null === f && hd(a, b, d, id2, c);
              if (f === e) break;
              e = f;
            }
            null !== e && d.stopPropagation();
          } else hd(a, b, d, null, c);
        }
      }
      var id2 = null;
      function Yc(a, b, c, d) {
        id2 = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        id2 = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
        return md = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e, f, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
          this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A({}, ud, { key: function(a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie = false;
      function je(a, b) {
        switch (a) {
          case "compositionend":
            return he(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe = true;
            return ee;
          case "textInput":
            return a = b.data, a === ee && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b) {
        if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
      }
      function ne(a, b, c, d) {
        Eb(d);
        b = oe(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe = null;
      var qe = null;
      function re(a) {
        se(a, 0);
      }
      function te(a) {
        var b = ue(a);
        if (Wa(b)) return a;
      }
      function ve(a, b) {
        if ("change" === a) return b;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a) {
        if ("value" === a.propertyName && te(qe)) {
          var b = [];
          ne(b, qe, a, xb(a));
          Jb(re, b);
        }
      }
      function Ce(a, b, c) {
        "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
      }
      function De(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
      }
      function Ee(a, b) {
        if ("click" === a) return te(b);
      }
      function Fe(a, b) {
        if ("input" === a || "change" === a) return te(b);
      }
      function Ge(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a, b) {
        if (He(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!ja.call(b, e) || !He(a[e], b[e])) return false;
        }
        return true;
      }
      function Je(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke(a, b) {
        var c = Je(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je(c);
        }
      }
      function Le(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me() {
        for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa(a.document);
        }
        return b;
      }
      function Ne(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe(a) {
        var b = Me(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c.textContent.length, f = Math.min(d.start, e);
              d = void 0 === d.end ? f : Math.min(d.end, e);
              !a.extend && f > d && (e = d, d = f, f = e);
              e = Ke(c, f);
              var g = Ke(
                c,
                d
              );
              e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
      }
      function Ve(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a) {
        if (Xe[a]) return Xe[a];
        if (!We[a]) return a;
        var b = We[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
        return a;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k = h.instance, l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
      }
      function hd(a, b, c, d, e) {
        var f = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k = g.tag;
              if (5 === k || 6 === k) {
                d = f = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f, e2 = xb(c), g2 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k2 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t2 = 0 !== (b & 4), J = !t2 && "scroll" === a, x = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
              t2 = [];
              for (var w = d2, u; null !== w; ) {
                u = w;
                var F = u.stateNode;
                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t2.push(tf(w, F, u))));
                if (J) break;
                w = w.return;
              }
              0 < t2.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t2 }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k2 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
              if (k2 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k2 = null, n = d2;
                if (k2 !== n) {
                  t2 = Bd;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t2 = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u = null == n ? h2 : ue(n);
                  h2 = new t2(F, w + "leave", k2, c, e2);
                  h2.target = J;
                  h2.relatedTarget = u;
                  F = null;
                  Wc(e2) === d2 && (t2 = new t2(x, w + "enter", n, c, e2), t2.target = u, t2.relatedTarget = J, F = t2);
                  J = F;
                  if (k2 && n) b: {
                    t2 = k2;
                    x = n;
                    w = 0;
                    for (u = t2; u; u = vf(u)) w++;
                    u = 0;
                    for (F = x; F; F = vf(F)) u++;
                    for (; 0 < w - u; ) t2 = vf(t2), w--;
                    for (; 0 < u - w; ) x = vf(x), u--;
                    for (; w--; ) {
                      if (t2 === x || null !== x && t2 === x.alternate) break b;
                      t2 = vf(t2);
                      x = vf(x);
                    }
                    t2 = null;
                  }
                  else t2 = null;
                  null !== k2 && wf(g2, h2, k2, t2, false);
                  null !== n && null !== J && wf(g2, J, n, t2, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
              else if (me(h2)) if (we) na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
              else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a, d2))) {
                ne(g2, na, c, e2);
                break a;
              }
              xa && xa(a, h2, d2);
              "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue(d2) : window;
            switch (a) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g2, c, e2);
                break;
              case "selectionchange":
                if (Pe) break;
              case "keydown":
              case "keyup":
                Ue(g2, c, e2);
            }
            var $a;
            if (ae) b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e = a, f = e.stateNode;
          5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k = h.alternate, l = h.stateNode;
          if (null !== k && k === d) break;
          5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e = c.nextSibling;
          a.removeChild(c);
          if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b = a[Of];
        if (b) return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c) e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a, b, c) {
        if (H.current !== Vf) throw Error(p(168));
        G(H, b);
        G(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
        return A({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
        G(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - oc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          rg = 1 << 32 - oc(b) + e | c << e | d;
          sg = f + a;
        } else rg = 1 << f | c << e | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a)) throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I) return Fg(a), I = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a2) {
              var b2 = e.refs;
              null === a2 ? delete b2[f] : b2[f] = a2;
            };
            b._stringRef = f;
            return b;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Og(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = Pg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          var f2 = c2.type;
          if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f2) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va:
                return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
              case wa:
                return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha:
                var d2 = b2._init;
                return q(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Mg(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va:
                return c2.key === e2 ? k(a2, b2, c2, d2) : null;
              case wa:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
              case Ha:
                return e2 = c2._init, r(
                  a2,
                  b2,
                  e2(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
              case wa:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
              case Ha:
                var f2 = d2._init;
                return y(a2, b2, c2, f2(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n(e2, g2, h2, k2) {
          for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n2 = r(e2, u, h2[w], k2);
            if (null === n2) {
              null === u && (u = x);
              break;
            }
            a && u && null === n2.alternate && b(e2, u);
            g2 = f(n2, g2, w);
            null === m2 ? l2 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x;
          }
          if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
          if (null === u) {
            for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
            I && tg(e2, w);
            return l2;
          }
          for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
          a && u.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function t2(e2, g2, h2, k2) {
          var l2 = Ka(h2);
          if ("function" !== typeof l2) throw Error(p(150));
          h2 = l2.call(h2);
          if (null == h2) throw Error(p(151));
          for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
            m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
            var t3 = r(e2, m2, n2.value, k2);
            if (null === t3) {
              null === m2 && (m2 = x);
              break;
            }
            a && m2 && null === t3.alternate && b(e2, m2);
            g2 = f(t3, g2, w);
            null === u ? l2 = t3 : u.sibling = t3;
            u = t3;
            m2 = x;
          }
          if (n2.done) return c(
            e2,
            m2
          ), I && tg(e2, w), l2;
          if (null === m2) {
            for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
            I && tg(e2, w);
            return l2;
          }
          for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function J(a2, d2, f2, h2) {
          "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
          if ("object" === typeof f2 && null !== f2) {
            switch (f2.$$typeof) {
              case va:
                a: {
                  for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === ya) {
                        if (7 === l2.tag) {
                          c(a2, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = Lg(a2, l2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else b(a2, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa:
                a: {
                  for (l2 = f2.key; null !== d2; ) {
                    if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f2.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha:
                return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
            }
            if (eb(f2)) return n(a2, d2, f2, h2);
            if (Ka(f2)) return t2(a2, d2, f2, h2);
            Mg(a2, f2);
          }
          return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b = Wg.current;
        E(Wg);
        a._currentValue = b;
      }
      function bh(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b, c, d) {
        var e = b.interleaved;
        null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
        b.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return ih(a, c);
        }
        e = d.interleaved;
        null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return ih(a, c);
      }
      function oh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f ? e = f = g : f = f.next = g;
              c = c.next;
            } while (null !== c);
            null === f ? e = f = b : f = f.next = b;
          } else e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function qh(a, b, c, d) {
        var e = a.updateQueue;
        jh = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var q = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a, t2 = h;
                r = b;
                y = c;
                switch (t2.tag) {
                  case 1:
                    n = t2.payload;
                    if ("function" === typeof n) {
                      q = n.call(y, q, r);
                      break a;
                    }
                    q = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t2.payload;
                    r = "function" === typeof n ? n.call(y, q, r) : n;
                    if (null === r || void 0 === r) break a;
                    q = A({}, q, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
            } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) if (h = e.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
          } while (1);
          null === m && (k = q);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else null === f && (e.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q;
        }
      }
      function sh(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error(p(191, e));
            e.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b) {
        G(wh, b);
        G(vh, a);
        G(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E(uh);
        G(uh, b);
      }
      function zh2() {
        E(uh);
        E(vh);
        E(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = lb(b, a.type);
        b !== c && (G(vh, a), G(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E(uh), E(vh));
      }
      var L = Uf(0);
      function Ch(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M = null;
      var N = null;
      var O = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e, f) {
        Hh = f;
        M = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e);
        if (Jh) {
          f = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f) throw Error(p(301));
            f += 1;
            O = N = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N && null !== N.next;
        Hh = 0;
        O = N = M = null;
        Ih = false;
        if (b) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
        return O;
      }
      function Uh() {
        if (null === N) {
          var a = M.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N.next;
        var b = null === O ? M.memoizedState : O.next;
        if (null !== b) O = b, N = a;
        else {
          if (null === a) throw Error(p(310));
          N = a;
          a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
          null === O ? M.memoizedState = O = a : O = O.next = a;
        }
        return O;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N, e = d.baseQueue, f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null, k = null, l = f;
          do {
            var m = l.lane;
            if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var q = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = q, g = d) : k = k.next = q;
              M.lanes |= m;
              rh |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          He(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e = a;
          do
            f = e.lane, M.lanes |= f, rh |= f, e = e.next;
          while (e !== a);
        } else null === e && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          He(f, b.memoizedState) || (dh = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function Yh() {
      }
      function Zh(a, b) {
        var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
        f && (d.memoizedState = e, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e, b), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b, e);
        }
        return e;
      }
      function di(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei(b) && fi(a);
      }
      function ai(a, b, c) {
        return c(function() {
          ei(b) && fi(a);
        });
      }
      function ei(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b = ih(a, 1);
        null !== b && gi(b, a, 1, -1);
      }
      function hi(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ii.bind(null, M, a);
        return [b.memoizedState, a];
      }
      function bi(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a, b, c, d) {
        var e = Th();
        M.flags |= a;
        e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b, c, d) {
        var e = Uh();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== N) {
          var g = N.memoizedState;
          f = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e.memoizedState = bi(b, c, f, d);
            return;
          }
        }
        M.flags |= a;
        e.memoizedState = bi(1 | b, c, f, d);
      }
      function mi(a, b) {
        return ki(8390656, 8, a, b);
      }
      function $h(a, b) {
        return li(2048, 8, a, b);
      }
      function ni(a, b) {
        return li(4, 2, a, b);
      }
      function oi(a, b) {
        return li(4, 4, a, b);
      }
      function pi(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function qi(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi.bind(null, b, a), c);
      }
      function ri() {
      }
      function si(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ti(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function ui(a, b, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
        return b;
      }
      function vi(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a, b, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, c);
        else if (c = hh(a, b, c, d), null !== c) {
          var e = R();
          gi(c, a, d, e);
          Bi(c, b, d);
        }
      }
      function ii(a, b, c) {
        var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, e);
        else {
          var f = a.alternate;
          if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = true;
            e.eagerState = h;
            if (He(h, g)) {
              var k = b.interleaved;
              null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
              b.interleaved = e;
              return;
            }
          } catch (l) {
          } finally {
          }
          c = hh(a, b, e, d);
          null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
        }
      }
      function zi(a) {
        var b = a.alternate;
        return a === M || null !== b && b === M;
      }
      function Ai(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Bi(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ki(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ki(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = M, e = Th();
        if (I) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        mi(ai.bind(
          null,
          d,
          f,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b = Q.identifierPrefix;
        if (I) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a) {
          var b = Uh();
          return ui(b, N.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b = Uh().memoizedState;
          return [a, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a) {
        var b = Uh();
        return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b) {
        if (a && a.defaultProps) {
          b = A({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function Di(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f = mh(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f = mh(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = R(), d = yi(a), e = mh(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = nh(a, e, d);
        null !== b && (gi(b, a, d, c), oh(b, a, d));
      } };
      function Fi(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
      }
      function Gi(a, b, c) {
        var d = false, e = Vf;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Hi(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
      }
      function Ii(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = {};
        kh(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e, digest: null };
      }
      function Ki(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Li(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b);
        };
        return c;
      }
      function Qi(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function() {
            return d(e);
          };
          c.callback = function() {
            Li(a, b);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
          Li(a, b);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
      }
      function Ui(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b, c, d, e) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a, b, c, d) {
        b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
      }
      function Yi(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        ch(b, e);
        d = Nh(a, b, c, d, f, e);
        c = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        I && c && vg(b);
        b.flags |= 1;
        Xi(a, b, d, e);
        return b.child;
      }
      function $i(a, b, c, d, e) {
        if (null === a) {
          var f = c.type;
          if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
          a = Rg(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if (0 === (a.lanes & e)) {
          var g = f.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie;
          if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
        }
        b.flags |= 1;
        a = Pg(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e) {
        if (null !== a) {
          var f = a.memoizedProps;
          if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
          else return b.lanes = a.lanes, Zi(a, b, e);
        }
        return cj(a, b, c, d, e);
      }
      function dj(a, b, c) {
        var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f ? f.baseLanes : c;
          G(ej, fj);
          fj |= d;
        }
        else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
        Xi(a, b, e, c);
        return b.child;
      }
      function gj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e) {
        var f = Zf(c) ? Xf : H.current;
        f = Yf(b, f);
        ch(b, e);
        c = Nh(a, b, c, d, f, e);
        d = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        I && d && vg(b);
        b.flags |= 1;
        Xi(a, b, c, e);
        return b.child;
      }
      function hj(a, b, c, d, e) {
        if (Zf(c)) {
          var f = true;
          cg(b);
        } else f = false;
        ch(b, e);
        if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
          var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
          jh = false;
          var r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          k = b.memoizedState;
          h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          lh(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : Ci(b.type, h);
          g.props = l;
          q = b.pendingProps;
          r = g.context;
          k = c.contextType;
          "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
          jh = false;
          r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          var n = b.memoizedState;
          h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a, b, c, d, f, e);
      }
      function jj(a, b, c, d, e, f) {
        gj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
        d = b.stateNode;
        Wi.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
        b.memoizedState = d.state;
        e && dg(b, c, true);
        return b.child;
      }
      function kj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function lj(a, b, c, d, e) {
        Ig();
        Jg(e);
        b.flags |= 256;
        Xi(a, b, c, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b, c) {
        var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h) f = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e |= 1;
        G(L, e & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
        }
        e = a.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
        if (f) {
          f = d.fallback;
          g = b.mode;
          e = a.child;
          h = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
          f.return = b;
          d.return = b;
          d.sibling = f;
          b.child = d;
          d = f;
          f = b.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f.memoizedState = g;
          f.childLanes = a.childLanes & ~c;
          b.memoizedState = mj;
          return d;
        }
        f = a.child;
        a = f.sibling;
        d = Pg(f, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a, b) {
        b = pj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        null !== d && Jg(d);
        Ug(b, a.child, null, c);
        a = qj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function rj(a, b, c, d, e, f, g) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f = d.fallback;
          e = b.mode;
          d = pj({ mode: "visible", children: d.children }, e, 0, null);
          f = Tg(f, e, g, null);
          f.flags |= 2;
          d.return = b;
          f.return = b;
          d.sibling = f;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a.child, null, g);
          b.child.memoizedState = nj(g);
          b.memoizedState = mj;
          return f;
        }
        if (0 === (b.mode & 1)) return sj(a, b, g, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f = Error(p(419));
          d = Ki(f, d, void 0);
          return sj(a, b, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (dh || h) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a, b, g, d);
        }
        if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
        a = f.treeContext;
        yg = Lf(e.nextSibling);
        xg = b;
        I = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        bh(a.return, b, c);
      }
      function wj(a, b, c, d, e) {
        var f = a.memoizedState;
        null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function xj(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        Xi(a, b, d.children, c);
        d = L.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag) vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G(L, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            wj(b, false, e, c, f);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            wj(b, true, c, null, f);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        rh |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = Pg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function yj(a, b, c) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(Wg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
              G(L, L.current & 1);
              a = Zi(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G(L, L.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b, c);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(L, L.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi(a, b, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f = null;
          switch (c) {
            case "input":
              e = Ya(a, e);
              d = Ya(a, d);
              f = [];
              break;
            case "select":
              e = A({}, e, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = gb(a, e);
              d = gb(a, d);
              f = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
            var h = e[l];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
            } else c || (f || (f = []), f.push(
              l,
              c
            )), c = k;
            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l) b.flags |= 4;
        }
      };
      Cj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Dj(a, b) {
        if (!I) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Ej(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            zh2();
            E(Wf);
            E(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b);
            S(b);
            return null;
          case 5:
            Bh(b);
            var e = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p(166));
                S(b);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za(d, f);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f), D("invalid", d);
                }
                ub(c, f);
                e = null;
                for (var g in f) if (f.hasOwnProperty(g)) {
                  var h = f[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va(d);
                    db(d, f, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = Bf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                zj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++) D(lf[e], a);
                      e = d;
                      break;
                    case "source":
                      D("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Za(a, d);
                      e = Ya(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e = A({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  ub(c, e);
                  h = e;
                  for (f in h) if (h.hasOwnProperty(f)) {
                    var k = h[f];
                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                  }
                  switch (c) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f = d.value;
                      null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E(L);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
              else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f) throw Error(p(318));
                  f = b.memoizedState;
                  f = null !== f ? f.dehydrated : null;
                  if (!f) throw Error(p(317));
                  f[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f = false;
              } else null !== zg && (Fj(zg), zg = null), f = true;
              if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return zh2(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return ah(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E(L);
            f = b.memoizedState;
            if (null === f) return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) if (d) Dj(f, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G(L, L.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
              } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
              f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Ij(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh2(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E(L);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E(L), null;
          case 4:
            return zh2(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W(a, b, d);
        }
        else c.current = null;
      }
      function Mj(a, b, c) {
        try {
          c();
        } catch (d) {
          W(a, b, d);
        }
      }
      var Nj = false;
      function Oj(a, b) {
        Cf = dd;
        a = Me();
        if (Ne(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e = d.anchorOffset, f = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f.nodeType;
              } catch (F) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                  q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                  3 === q.nodeType && (g += q.nodeValue.length);
                  if (null === (y = q.firstChild)) break;
                  r = q;
                  q = y;
                }
                for (; ; ) {
                  if (q === a) break b;
                  r === c && ++l === e && (h = g);
                  r === f && ++m === d && (k = g);
                  if (null !== (y = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y;
              }
              c = -1 === h || -1 === k ? null : { start: h, end: k };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
        else for (; null !== V; ) {
          b = V;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t2 = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J);
                  x.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F) {
            W(b, b.return, F);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V = a;
            break;
          }
          V = b.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Mj(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Qj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Rj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Sj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Sj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
      }
      var X = null;
      var Xj = false;
      function Yj(a, b, c) {
        for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
      }
      function Zj(a, b, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            U || Lj(c, b);
          case 6:
            var d = X, e = Xj;
            X = null;
            Yj(a, b, c);
            X = d;
            Xj = e;
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
          case 18:
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
            break;
          case 4:
            d = X;
            e = Xj;
            X = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b, c);
            X = d;
            Xj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                e = e.next;
              } while (e !== d);
            }
            Yj(a, b, c);
            break;
          case 1:
            if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W(c, b, h);
            }
            Yj(a, b, c);
            break;
          case 21:
            Yj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
            break;
          default:
            Yj(a, b, c);
        }
      }
      function ak(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e = c[d];
          try {
            var f = a, g = b, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X) throw Error(p(160));
            Zj(f, g, e);
            X = null;
            Xj = false;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
          } catch (l) {
            W(e, b, l);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
      }
      function dk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t2) {
                W(a, a.return, t2);
              }
              try {
                Pj(5, a, a.return);
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
            break;
          case 1:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e = a.stateNode;
              try {
                ob(e, "");
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
              var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
              a.updateQueue = null;
              if (null !== k) try {
                "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                vb(h, g);
                var l = vb(h, f);
                for (g = 0; g < k.length; g += 2) {
                  var m = k[g], q = k[g + 1];
                  "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                }
                switch (h) {
                  case "input":
                    bb(e, f);
                    break;
                  case "textarea":
                    ib(e, f);
                    break;
                  case "select":
                    var r = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f.multiple;
                    var y = f.value;
                    null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                      e,
                      !!f.multiple,
                      f.defaultValue,
                      true
                    ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
                }
                e[Pf] = f;
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
            break;
          case 6:
            ck(b, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e = a.stateNode;
              f = a.memoizedProps;
              try {
                e.nodeValue = f;
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
            break;
          case 3:
            ck(b, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t2) {
              W(a, a.return, t2);
            }
            break;
          case 4:
            ck(b, a);
            ek(a);
            break;
          case 13:
            ck(b, a);
            ek(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
            ek(a);
            if (d & 8192) {
              l = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                for (q = V = m; null !== V; ) {
                  r = V;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                        } catch (t2) {
                          W(d, c, t2);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V = y) : gk(q);
                }
                m = m.sibling;
              }
              a: for (m = null, q = a; ; ) {
                if (5 === q.tag) {
                  if (null === m) {
                    m = q;
                    try {
                      e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                    } catch (t2) {
                      W(a, a.return, t2);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m) try {
                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                  } catch (t2) {
                    W(a, a.return, t2);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a) break a;
                  m === q && (m = null);
                  q = q.return;
                }
                m === q && (m = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f = Uj(a);
                Wj(a, f, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a);
                Vj(a, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k) {
            W(a, a.return, k);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function hk(a, b, c) {
        V = a;
        ik(a, b, c);
      }
      function ik(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e = V, f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Jj;
            if (!g) {
              var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Jj;
              var l = U;
              Jj = g;
              if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
              for (; null !== f; ) V = f, ik(f, b, c), f = f.sibling;
              V = e;
              Jj = h;
              U = l;
            }
            kk(a, b, c);
          } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b = V;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f = b.updateQueue;
                  null !== f && sh(b, f, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    sh(b, g, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h;
                    var k = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c.focus();
                        break;
                      case "img":
                        k.src && (c.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l = b.alternate;
                    if (null !== l) {
                      var m = l.memoizedState;
                      if (null !== m) {
                        var q = m.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U || b.flags & 512 && Rj(b);
            } catch (r) {
              W(b, b.return, r);
            }
          }
          if (b === a) {
            V = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function gk(a) {
        for (; null !== V; ) {
          var b = V;
          if (b === a) {
            V = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function jk(a) {
        for (; null !== V; ) {
          var b = V;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Qj(4, b);
                } catch (k) {
                  W(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, g, k);
                }
            }
          } catch (k) {
            W(b, b.return, k);
          }
          if (b === a) {
            V = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V = h;
            break;
          }
          V = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K = 0;
      var Q = null;
      var Y = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R() {
        return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi(a, b, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
      }
      function Dk(a, b) {
        var c = a.callbackNode;
        wc(a, b);
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc(c);
          if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Gk(a, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
        else {
          b = d;
          var e = K;
          K |= 2;
          var f = Jk();
          if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            }
          while (1);
          $g();
          mk.current = f;
          K = e;
          null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
          if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          if (6 === b) Ck(a, d);
          else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                  if (0 !== uc(a, 0)) break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    R();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
        a = Ik(a, b);
        2 !== a && (b = tk, tk = c, null !== b && Fj(b));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e = c[d], f = e.getSnapshot;
              e = e.value;
              try {
                if (!He(f(), e)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a, b) {
        b &= ~rk;
        b &= ~qk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K & 6)) throw Error(p(327));
        Hk();
        var b = uc(a, 0);
        if (0 === (b & 1)) return Dk(a, B()), null;
        var c = Ik(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Pk(a, tk, uk);
        Dk(a, B());
        return null;
      }
      function Qk(a, b) {
        var c = K;
        K |= 1;
        try {
          return a(b);
        } finally {
          K = c, 0 === K && (Gj = B() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b = K;
        K |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E(ej);
      }
      function Kk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y) for (c = Y.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh2();
              E(Wf);
              E(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh2();
              break;
            case 13:
              E(L);
              break;
            case 19:
              E(L);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q = a;
        Y = a = Pg(a.current, null);
        Z = fj = b;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
              var g = f.next;
              f.next = e;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b) {
        do {
          var c = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O = N = M = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T = 1;
              pk = b;
              Y = null;
              break;
            }
            a: {
              var f = a, g = c.return, h = c, k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m = h, q = m.tag;
                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ui(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi(y, g, h, f, b);
                  y.mode & 1 && Si(f, l, b);
                  b = y;
                  k = l;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t2 = /* @__PURE__ */ new Set();
                    t2.add(k);
                    b.updateQueue = t2;
                  } else n.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si(f, l, b);
                    tj();
                    break a;
                  }
                  k = Error(p(426));
                }
              } else if (I && h.mode & 1) {
                var J = Ui(g);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi(J, g, h, f, b);
                  Jg(Ji(k, h));
                  break a;
                }
              }
              f = k = Ji(k, h);
              4 !== T && (T = 2);
              null === sk ? sk = [f] : sk.push(f);
              f = g;
              do {
                switch (f.tag) {
                  case 3:
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var x = Ni(f, k, b);
                    ph(f, x);
                    break a;
                  case 1:
                    h = k;
                    var w = f.type, u = f.stateNode;
                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f.flags |= 65536;
                      b &= -b;
                      f.lanes |= b;
                      var F = Qi(f, h, b);
                      ph(f, F);
                      break a;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Sk(c);
          } catch (na) {
            b = na;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a, b) {
        var c = K;
        K |= 2;
        var d = Jk();
        if (Q !== a || Z !== b) uk = null, Kk(a, b);
        do
          try {
            Tk();
            break;
          } catch (e) {
            Mk(a, e);
          }
        while (1);
        $g();
        K = c;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q = null;
        Z = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc2(); ) Uk(Y);
      }
      function Uk(a) {
        var b = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b ? Sk(a) : Y = b;
        nk.current = null;
      }
      function Sk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Ej(c, b, fj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Ij(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Pk(a, b, c) {
        var d = C, e = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b, c, d);
        } finally {
          ok.transition = e, C = d;
        }
        return null;
      }
      function Wk(a, b, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = c.lanes | c.childLanes;
        Bc(a, f);
        a === Q && (Y = Q = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f) {
          f = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h = K;
          K |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e);
          dc();
          K = h;
          C = g;
          ok.transition = f;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e);
        f = a.pendingLanes;
        0 === f && (Ri = null);
        mc(c.stateNode, d);
        Dk(a, B());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Oi) throw Oi = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f = a.pendingLanes;
        0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p(331));
              var e = K;
              K |= 4;
              for (V = a.current; null !== V; ) {
                var f = V, g = f.child;
                if (0 !== (V.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (V = l; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f);
                        }
                        var q = m.child;
                        if (null !== q) q.return = m, V = q;
                        else for (; null !== V; ) {
                          m = V;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V = r;
                            break;
                          }
                          V = y;
                        }
                      }
                    }
                    var n = f.alternate;
                    if (null !== n) {
                      var t2 = n.child;
                      if (null !== t2) {
                        n.child = null;
                        do {
                          var J = t2.sibling;
                          t2.sibling = null;
                          t2 = J;
                        } while (null !== t2);
                      }
                    }
                    V = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
                else b: for (; null !== V; ) {
                  f = V;
                  if (0 !== (f.flags & 2048)) switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f, f.return);
                  }
                  var x = f.sibling;
                  if (null !== x) {
                    x.return = f.return;
                    V = x;
                    break b;
                  }
                  V = f.return;
                }
              }
              var w = a.current;
              for (V = w; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F = h.sibling;
                  if (null !== F) {
                    F.return = h.return;
                    V = F;
                    break b;
                  }
                  V = h.return;
                }
              }
              K = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a, b, c) {
        b = Ji(c, b);
        b = Ni(a, b, 1);
        a = nh(a, b, 1);
        b = R();
        null !== a && (Ac(a, 1, b), Dk(a, b));
      }
      function W(a, b, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a = Ji(c, a);
              a = Qi(b, a, 1);
              b = nh(b, a, 1);
              a = R();
              null !== b && (Ac(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = R();
        a.pingedLanes |= a.suspendedLanes & c;
        Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b);
      }
      function Yk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R();
        a = ih(a, b);
        null !== a && (Ac(a, b, c), Dk(a, c));
      }
      function uj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Yk(a, c);
      }
      function bk(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a, b);
            a = b.pendingProps;
            var e = Yf(b, H.current);
            ch(b, c);
            e = Nh(null, b, d, a, e, c);
            var f = Sh();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a, b);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = Zk(d);
              a = Ci(d, a);
              switch (e) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = hj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i(null, b, d, Ci(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
          case 3:
            a: {
              kj(b);
              if (null === a) throw Error(p(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              lh(a, b);
              qh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                e = Ji(Error(p(423)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else if (d !== e) {
                e = Ji(Error(p(424)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e) {
                  b = Zi(a, b, c);
                  break a;
                }
                Xi(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return oj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
          case 7:
            return Xi(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              G(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f) if (He(f.value, g)) {
                if (f.children === e.children && !Wf.current) {
                  b = Zi(a, b, c);
                  break a;
                }
              } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                var h = f.dependencies;
                if (null !== h) {
                  g = f.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f.tag) {
                        k = mh(-1, c & -c);
                        k.tag = 2;
                        var l = f.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m ? k.next = k : (k.next = m.next, m.next = k);
                          l.pending = k;
                        }
                      }
                      f.lanes |= c;
                      k = f.alternate;
                      null !== k && (k.lanes |= c);
                      bh(
                        f.return,
                        c,
                        b
                      );
                      h.lanes |= c;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                else if (18 === f.tag) {
                  g = f.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b);
                  g = f.sibling;
                } else g = f.child;
                if (null !== g) g.return = f;
                else for (g = f; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (null !== f) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
                f = g;
              }
              Xi(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
          case 19:
            return xj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Fk(a, b) {
        return ac(a, b);
      }
      function $k(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new $k(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da) return 11;
          if (a === Ga) return 14;
        }
        return 2;
      }
      function Pg(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya:
            return Tg(c.children, e, f, b);
          case za:
            g = 8;
            e |= 8;
            break;
          case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
          case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
          case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
          case Ia:
            return pj(c, e, f, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b = Bg(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function Tg(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function pj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Sg(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function al(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a, b, c, d, e, f, g, h, k) {
        a = new al(a, b, c, h, k);
        1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
        f = Bg(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f);
        return a;
      }
      function cl(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function dl(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b);
        }
        return b;
      }
      function el(a, b, c, d, e, f, g, h, k) {
        a = bl(c, d, true, a, e, f, g, h, k);
        a.context = dl(null);
        c = a.current;
        d = R();
        e = yi(c);
        f = mh(d, e);
        f.callback = void 0 !== b && null !== b ? b : null;
        nh(c, f, e);
        a.current.lanes = e;
        Ac(a, e, d);
        Dk(a, d);
        return a;
      }
      function fl(a, b, c, d) {
        var e = b.current, f = R(), g = yi(e);
        c = dl(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = mh(f, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = nh(e, b, g);
        null !== a && (gi(a, e, g, f), oh(a, e, g));
        return g;
      }
      function gl(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function il(a, b) {
        hl(a, b);
        (a = a.alternate) && hl(a, b);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll(a) {
        this._internalRoot = a;
      }
      ml.prototype.render = ll.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p(409));
        fl(a, b, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Rk(function() {
            fl(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function ml(a) {
        this._internalRoot = a;
      }
      ml.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl() {
      }
      function ql(a, b, c, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f = d;
            d = function() {
              var a2 = gl(g);
              f.call(a2);
            };
          }
          var g = el(b, d, a, 0, null, false, false, "", pl);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e = a.lastChild; ) a.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = gl(k);
            h.call(a2);
          };
        }
        var k = bl(a, 0, false, null, null, false, false, "", pl);
        a._reactRootContainer = k;
        a[uf] = k.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl(b, k, c, d);
        });
        return k;
      }
      function rl(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a2 = gl(g);
              h.call(a2);
            };
          }
          fl(b, g, a, e);
        } else g = ql(c, b, a, e, d);
        return gl(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc(b.pendingLanes);
              0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a, 1);
              if (null !== b2) {
                var c2 = R();
                gi(b2, a, 1, c2);
              }
            }), il(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b = ih(a, 134217728);
          if (null !== b) {
            var c = R();
            gi(b, a, 134217728, c);
          }
          il(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = yi(a), c = ih(a, b);
          if (null !== c) {
            var d = R();
            gi(c, a, b, d);
          }
          il(a, b);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Db(d);
                  if (!e) throw Error(p(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b)) throw Error(p(200));
        return cl(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!nl(a)) throw Error(p(299));
        var c = false, d = "", e = kl;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = bl(a, 1, false, null, null, c, false, d, e);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!nl(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
        a[uf] = b.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
          c,
          e
        );
        return new ml(b);
      };
      exports.render = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!ol(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl(a, b, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f = require_react();
      var k = Symbol.for("react.element");
      var l = Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q(c, a, g) {
        var b, d = {}, e = null, h = null;
        void 0 !== g && (e = "" + g);
        void 0 !== a.key && (e = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
      }
      exports.Fragment = l;
      exports.jsx = q;
      exports.jsxs = q;
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
  var require_use_sync_external_store_shim_production = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(exports) {
      "use strict";
      var React = require_react();
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = "function" === typeof Object.is ? Object.is : is;
      var useState5 = React.useState;
      var useEffect5 = React.useEffect;
      var useLayoutEffect2 = React.useLayoutEffect;
      var useDebugValue2 = React.useDebugValue;
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        var value = getSnapshot(), _useState = useState5({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
        useLayoutEffect2(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect5(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue2(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    }
  });

  // node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_use_sync_external_store_shim_production();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
  var require_with_selector_production = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js"(exports) {
      "use strict";
      var React = require_react();
      var shim = require_shim();
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = "function" === typeof Object.is ? Object.is : is;
      var useSyncExternalStore = shim.useSyncExternalStore;
      var useRef4 = React.useRef;
      var useEffect5 = React.useEffect;
      var useMemo3 = React.useMemo;
      var useDebugValue2 = React.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef4(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo3(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect5(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue2(value);
        return value;
      };
    }
  });

  // node_modules/use-sync-external-store/shim/with-selector.js
  var require_with_selector = __commonJS({
    "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_with_selector_production();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/graph.js
  var require_graph = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/graph.js"(exports, module) {
      "use strict";
      var DEFAULT_EDGE_NAME = "\0";
      var GRAPH_NODE = "\0";
      var EDGE_KEY_DELIM = "";
      var Graph = class {
        _isDirected = true;
        _isMultigraph = false;
        _isCompound = false;
        // Label for the graph itself
        _label;
        // Defaults to be set when creating a new node
        _defaultNodeLabelFn = () => void 0;
        // Defaults to be set when creating a new edge
        _defaultEdgeLabelFn = () => void 0;
        // v -> label
        _nodes = {};
        // v -> edgeObj
        _in = {};
        // u -> v -> Number
        _preds = {};
        // v -> edgeObj
        _out = {};
        // v -> w -> Number
        _sucs = {};
        // e -> edgeObj
        _edgeObjs = {};
        // e -> label
        _edgeLabels = {};
        /* Number of nodes in the graph. Should only be changed by the implementation. */
        _nodeCount = 0;
        /* Number of edges in the graph. Should only be changed by the implementation. */
        _edgeCount = 0;
        _parent;
        _children;
        constructor(opts) {
          if (opts) {
            this._isDirected = Object.hasOwn(opts, "directed") ? opts.directed : true;
            this._isMultigraph = Object.hasOwn(opts, "multigraph") ? opts.multigraph : false;
            this._isCompound = Object.hasOwn(opts, "compound") ? opts.compound : false;
          }
          if (this._isCompound) {
            this._parent = {};
            this._children = {};
            this._children[GRAPH_NODE] = {};
          }
        }
        /* === Graph functions ========= */
        /**
         * Whether graph was created with 'directed' flag set to true or not.
         */
        isDirected() {
          return this._isDirected;
        }
        /**
         * Whether graph was created with 'multigraph' flag set to true or not.
         */
        isMultigraph() {
          return this._isMultigraph;
        }
        /**
         * Whether graph was created with 'compound' flag set to true or not.
         */
        isCompound() {
          return this._isCompound;
        }
        /**
         * Sets the label of the graph.
         */
        setGraph(label) {
          this._label = label;
          return this;
        }
        /**
         * Gets the graph label.
         */
        graph() {
          return this._label;
        }
        /* === Node functions ========== */
        /**
         * Sets the default node label. If newDefault is a function, it will be
         * invoked ach time when setting a label for a node. Otherwise, this label
         * will be assigned as default label in case if no label was specified while
         * setting a node.
         * Complexity: O(1).
         */
        setDefaultNodeLabel(newDefault) {
          this._defaultNodeLabelFn = newDefault;
          if (typeof newDefault !== "function") {
            this._defaultNodeLabelFn = () => newDefault;
          }
          return this;
        }
        /**
         * Gets the number of nodes in the graph.
         * Complexity: O(1).
         */
        nodeCount() {
          return this._nodeCount;
        }
        /**
         * Gets all nodes of the graph. Note, the in case of compound graph subnodes are
         * not included in list.
         * Complexity: O(1).
         */
        nodes() {
          return Object.keys(this._nodes);
        }
        /**
         * Gets list of nodes without in-edges.
         * Complexity: O(|V|).
         */
        sources() {
          var self = this;
          return this.nodes().filter((v) => Object.keys(self._in[v]).length === 0);
        }
        /**
         * Gets list of nodes without out-edges.
         * Complexity: O(|V|).
         */
        sinks() {
          var self = this;
          return this.nodes().filter((v) => Object.keys(self._out[v]).length === 0);
        }
        /**
         * Invokes setNode method for each node in names list.
         * Complexity: O(|names|).
         */
        setNodes(vs, value) {
          var args = arguments;
          var self = this;
          vs.forEach(function(v) {
            if (args.length > 1) {
              self.setNode(v, value);
            } else {
              self.setNode(v);
            }
          });
          return this;
        }
        /**
         * Creates or updates the value for the node v in the graph. If label is supplied
         * it is set as the value for the node. If label is not supplied and the node was
         * created by this call then the default node label will be assigned.
         * Complexity: O(1).
         */
        setNode(v, value) {
          if (Object.hasOwn(this._nodes, v)) {
            if (arguments.length > 1) {
              this._nodes[v] = value;
            }
            return this;
          }
          this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
          if (this._isCompound) {
            this._parent[v] = GRAPH_NODE;
            this._children[v] = {};
            this._children[GRAPH_NODE][v] = true;
          }
          this._in[v] = {};
          this._preds[v] = {};
          this._out[v] = {};
          this._sucs[v] = {};
          ++this._nodeCount;
          return this;
        }
        /**
         * Gets the label of node with specified name.
         * Complexity: O(|V|).
         */
        node(v) {
          return this._nodes[v];
        }
        /**
         * Detects whether graph has a node with specified name or not.
         */
        hasNode(v) {
          return Object.hasOwn(this._nodes, v);
        }
        /**
         * Remove the node with the name from the graph or do nothing if the node is not in
         * the graph. If the node was removed this function also removes any incident
         * edges.
         * Complexity: O(1).
         */
        removeNode(v) {
          var self = this;
          if (Object.hasOwn(this._nodes, v)) {
            var removeEdge = (e) => self.removeEdge(self._edgeObjs[e]);
            delete this._nodes[v];
            if (this._isCompound) {
              this._removeFromParentsChildList(v);
              delete this._parent[v];
              this.children(v).forEach(function(child) {
                self.setParent(child);
              });
              delete this._children[v];
            }
            Object.keys(this._in[v]).forEach(removeEdge);
            delete this._in[v];
            delete this._preds[v];
            Object.keys(this._out[v]).forEach(removeEdge);
            delete this._out[v];
            delete this._sucs[v];
            --this._nodeCount;
          }
          return this;
        }
        /**
         * Sets node p as a parent for node v if it is defined, or removes the
         * parent for v if p is undefined. Method throws an exception in case of
         * invoking it in context of noncompound graph.
         * Average-case complexity: O(1).
         */
        setParent(v, parent) {
          if (!this._isCompound) {
            throw new Error("Cannot set parent in a non-compound graph");
          }
          if (parent === void 0) {
            parent = GRAPH_NODE;
          } else {
            parent += "";
            for (var ancestor = parent; ancestor !== void 0; ancestor = this.parent(ancestor)) {
              if (ancestor === v) {
                throw new Error("Setting " + parent + " as parent of " + v + " would create a cycle");
              }
            }
            this.setNode(parent);
          }
          this.setNode(v);
          this._removeFromParentsChildList(v);
          this._parent[v] = parent;
          this._children[parent][v] = true;
          return this;
        }
        _removeFromParentsChildList(v) {
          delete this._children[this._parent[v]][v];
        }
        /**
         * Gets parent node for node v.
         * Complexity: O(1).
         */
        parent(v) {
          if (this._isCompound) {
            var parent = this._parent[v];
            if (parent !== GRAPH_NODE) {
              return parent;
            }
          }
        }
        /**
         * Gets list of direct children of node v.
         * Complexity: O(1).
         */
        children(v = GRAPH_NODE) {
          if (this._isCompound) {
            var children2 = this._children[v];
            if (children2) {
              return Object.keys(children2);
            }
          } else if (v === GRAPH_NODE) {
            return this.nodes();
          } else if (this.hasNode(v)) {
            return [];
          }
        }
        /**
         * Return all nodes that are predecessors of the specified node or undefined if node v is not in
         * the graph. Behavior is undefined for undirected graphs - use neighbors instead.
         * Complexity: O(|V|).
         */
        predecessors(v) {
          var predsV = this._preds[v];
          if (predsV) {
            return Object.keys(predsV);
          }
        }
        /**
         * Return all nodes that are successors of the specified node or undefined if node v is not in
         * the graph. Behavior is undefined for undirected graphs - use neighbors instead.
         * Complexity: O(|V|).
         */
        successors(v) {
          var sucsV = this._sucs[v];
          if (sucsV) {
            return Object.keys(sucsV);
          }
        }
        /**
         * Return all nodes that are predecessors or successors of the specified node or undefined if
         * node v is not in the graph.
         * Complexity: O(|V|).
         */
        neighbors(v) {
          var preds = this.predecessors(v);
          if (preds) {
            const union = new Set(preds);
            for (var succ of this.successors(v)) {
              union.add(succ);
            }
            return Array.from(union.values());
          }
        }
        isLeaf(v) {
          var neighbors;
          if (this.isDirected()) {
            neighbors = this.successors(v);
          } else {
            neighbors = this.neighbors(v);
          }
          return neighbors.length === 0;
        }
        /**
         * Creates new graph with nodes filtered via filter. Edges incident to rejected node
         * are also removed. In case of compound graph, if parent is rejected by filter,
         * than all its children are rejected too.
         * Average-case complexity: O(|E|+|V|).
         */
        filterNodes(filter2) {
          var copy = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          copy.setGraph(this.graph());
          var self = this;
          Object.entries(this._nodes).forEach(function([v, value]) {
            if (filter2(v)) {
              copy.setNode(v, value);
            }
          });
          Object.values(this._edgeObjs).forEach(function(e) {
            if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
              copy.setEdge(e, self.edge(e));
            }
          });
          var parents = {};
          function findParent(v) {
            var parent = self.parent(v);
            if (parent === void 0 || copy.hasNode(parent)) {
              parents[v] = parent;
              return parent;
            } else if (parent in parents) {
              return parents[parent];
            } else {
              return findParent(parent);
            }
          }
          if (this._isCompound) {
            copy.nodes().forEach((v) => copy.setParent(v, findParent(v)));
          }
          return copy;
        }
        /* === Edge functions ========== */
        /**
         * Sets the default edge label or factory function. This label will be
         * assigned as default label in case if no label was specified while setting
         * an edge or this function will be invoked each time when setting an edge
         * with no label specified and returned value * will be used as a label for edge.
         * Complexity: O(1).
         */
        setDefaultEdgeLabel(newDefault) {
          this._defaultEdgeLabelFn = newDefault;
          if (typeof newDefault !== "function") {
            this._defaultEdgeLabelFn = () => newDefault;
          }
          return this;
        }
        /**
         * Gets the number of edges in the graph.
         * Complexity: O(1).
         */
        edgeCount() {
          return this._edgeCount;
        }
        /**
         * Gets edges of the graph. In case of compound graph subgraphs are not considered.
         * Complexity: O(|E|).
         */
        edges() {
          return Object.values(this._edgeObjs);
        }
        /**
         * Establish an edges path over the nodes in nodes list. If some edge is already
         * exists, it will update its label, otherwise it will create an edge between pair
         * of nodes with label provided or default label if no label provided.
         * Complexity: O(|nodes|).
         */
        setPath(vs, value) {
          var self = this;
          var args = arguments;
          vs.reduce(function(v, w) {
            if (args.length > 1) {
              self.setEdge(v, w, value);
            } else {
              self.setEdge(v, w);
            }
            return w;
          });
          return this;
        }
        /**
         * Creates or updates the label for the edge (v, w) with the optionally supplied
         * name. If label is supplied it is set as the value for the edge. If label is not
         * supplied and the edge was created by this call then the default edge label will
         * be assigned. The name parameter is only useful with multigraphs.
         */
        setEdge() {
          var v, w, name, value;
          var valueSpecified = false;
          var arg0 = arguments[0];
          if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
            v = arg0.v;
            w = arg0.w;
            name = arg0.name;
            if (arguments.length === 2) {
              value = arguments[1];
              valueSpecified = true;
            }
          } else {
            v = arg0;
            w = arguments[1];
            name = arguments[3];
            if (arguments.length > 2) {
              value = arguments[2];
              valueSpecified = true;
            }
          }
          v = "" + v;
          w = "" + w;
          if (name !== void 0) {
            name = "" + name;
          }
          var e = edgeArgsToId(this._isDirected, v, w, name);
          if (Object.hasOwn(this._edgeLabels, e)) {
            if (valueSpecified) {
              this._edgeLabels[e] = value;
            }
            return this;
          }
          if (name !== void 0 && !this._isMultigraph) {
            throw new Error("Cannot set a named edge when isMultigraph = false");
          }
          this.setNode(v);
          this.setNode(w);
          this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
          var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
          v = edgeObj.v;
          w = edgeObj.w;
          Object.freeze(edgeObj);
          this._edgeObjs[e] = edgeObj;
          incrementOrInitEntry(this._preds[w], v);
          incrementOrInitEntry(this._sucs[v], w);
          this._in[w][e] = edgeObj;
          this._out[v][e] = edgeObj;
          this._edgeCount++;
          return this;
        }
        /**
         * Gets the label for the specified edge.
         * Complexity: O(1).
         */
        edge(v, w, name) {
          var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
          return this._edgeLabels[e];
        }
        /**
         * Gets the label for the specified edge and converts it to an object.
         * Complexity: O(1)
         */
        edgeAsObj() {
          const edge = this.edge(...arguments);
          if (typeof edge !== "object") {
            return { label: edge };
          }
          return edge;
        }
        /**
         * Detects whether the graph contains specified edge or not. No subgraphs are considered.
         * Complexity: O(1).
         */
        hasEdge(v, w, name) {
          var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
          return Object.hasOwn(this._edgeLabels, e);
        }
        /**
         * Removes the specified edge from the graph. No subgraphs are considered.
         * Complexity: O(1).
         */
        removeEdge(v, w, name) {
          var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
          var edge = this._edgeObjs[e];
          if (edge) {
            v = edge.v;
            w = edge.w;
            delete this._edgeLabels[e];
            delete this._edgeObjs[e];
            decrementOrRemoveEntry(this._preds[w], v);
            decrementOrRemoveEntry(this._sucs[v], w);
            delete this._in[w][e];
            delete this._out[v][e];
            this._edgeCount--;
          }
          return this;
        }
        /**
         * Return all edges that point to the node v. Optionally filters those edges down to just those
         * coming from node u. Behavior is undefined for undirected graphs - use nodeEdges instead.
         * Complexity: O(|E|).
         */
        inEdges(v, u) {
          var inV = this._in[v];
          if (inV) {
            var edges = Object.values(inV);
            if (!u) {
              return edges;
            }
            return edges.filter((edge) => edge.v === u);
          }
        }
        /**
         * Return all edges that are pointed at by node v. Optionally filters those edges down to just
         * those point to w. Behavior is undefined for undirected graphs - use nodeEdges instead.
         * Complexity: O(|E|).
         */
        outEdges(v, w) {
          var outV = this._out[v];
          if (outV) {
            var edges = Object.values(outV);
            if (!w) {
              return edges;
            }
            return edges.filter((edge) => edge.w === w);
          }
        }
        /**
         * Returns all edges to or from node v regardless of direction. Optionally filters those edges
         * down to just those between nodes v and w regardless of direction.
         * Complexity: O(|E|).
         */
        nodeEdges(v, w) {
          var inEdges = this.inEdges(v, w);
          if (inEdges) {
            return inEdges.concat(this.outEdges(v, w));
          }
        }
      };
      function incrementOrInitEntry(map, k) {
        if (map[k]) {
          map[k]++;
        } else {
          map[k] = 1;
        }
      }
      function decrementOrRemoveEntry(map, k) {
        if (!--map[k]) {
          delete map[k];
        }
      }
      function edgeArgsToId(isDirected, v_, w_, name) {
        var v = "" + v_;
        var w = "" + w_;
        if (!isDirected && v > w) {
          var tmp = v;
          v = w;
          w = tmp;
        }
        return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (name === void 0 ? DEFAULT_EDGE_NAME : name);
      }
      function edgeArgsToObj(isDirected, v_, w_, name) {
        var v = "" + v_;
        var w = "" + w_;
        if (!isDirected && v > w) {
          var tmp = v;
          v = w;
          w = tmp;
        }
        var edgeObj = { v, w };
        if (name) {
          edgeObj.name = name;
        }
        return edgeObj;
      }
      function edgeObjToId(isDirected, edgeObj) {
        return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
      }
      module.exports = Graph;
    }
  });

  // node_modules/@dagrejs/graphlib/lib/version.js
  var require_version = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/version.js"(exports, module) {
      module.exports = "2.2.4";
    }
  });

  // node_modules/@dagrejs/graphlib/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/index.js"(exports, module) {
      module.exports = {
        Graph: require_graph(),
        version: require_version()
      };
    }
  });

  // node_modules/@dagrejs/graphlib/lib/json.js
  var require_json = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/json.js"(exports, module) {
      var Graph = require_graph();
      module.exports = {
        write,
        read
      };
      function write(g) {
        var json = {
          options: {
            directed: g.isDirected(),
            multigraph: g.isMultigraph(),
            compound: g.isCompound()
          },
          nodes: writeNodes(g),
          edges: writeEdges(g)
        };
        if (g.graph() !== void 0) {
          json.value = structuredClone(g.graph());
        }
        return json;
      }
      function writeNodes(g) {
        return g.nodes().map(function(v) {
          var nodeValue = g.node(v);
          var parent = g.parent(v);
          var node = { v };
          if (nodeValue !== void 0) {
            node.value = nodeValue;
          }
          if (parent !== void 0) {
            node.parent = parent;
          }
          return node;
        });
      }
      function writeEdges(g) {
        return g.edges().map(function(e) {
          var edgeValue = g.edge(e);
          var edge = { v: e.v, w: e.w };
          if (e.name !== void 0) {
            edge.name = e.name;
          }
          if (edgeValue !== void 0) {
            edge.value = edgeValue;
          }
          return edge;
        });
      }
      function read(json) {
        var g = new Graph(json.options).setGraph(json.value);
        json.nodes.forEach(function(entry) {
          g.setNode(entry.v, entry.value);
          if (entry.parent) {
            g.setParent(entry.v, entry.parent);
          }
        });
        json.edges.forEach(function(entry) {
          g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
        });
        return g;
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/components.js
  var require_components = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/components.js"(exports, module) {
      module.exports = components;
      function components(g) {
        var visited = {};
        var cmpts = [];
        var cmpt;
        function dfs(v) {
          if (Object.hasOwn(visited, v)) return;
          visited[v] = true;
          cmpt.push(v);
          g.successors(v).forEach(dfs);
          g.predecessors(v).forEach(dfs);
        }
        g.nodes().forEach(function(v) {
          cmpt = [];
          dfs(v);
          if (cmpt.length) {
            cmpts.push(cmpt);
          }
        });
        return cmpts;
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/data/priority-queue.js
  var require_priority_queue = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/data/priority-queue.js"(exports, module) {
      var PriorityQueue = class {
        _arr = [];
        _keyIndices = {};
        /**
         * Returns the number of elements in the queue. Takes `O(1)` time.
         */
        size() {
          return this._arr.length;
        }
        /**
         * Returns the keys that are in the queue. Takes `O(n)` time.
         */
        keys() {
          return this._arr.map(function(x) {
            return x.key;
          });
        }
        /**
         * Returns `true` if **key** is in the queue and `false` if not.
         */
        has(key) {
          return Object.hasOwn(this._keyIndices, key);
        }
        /**
         * Returns the priority for **key**. If **key** is not present in the queue
         * then this function returns `undefined`. Takes `O(1)` time.
         *
         * @param {Object} key
         */
        priority(key) {
          var index2 = this._keyIndices[key];
          if (index2 !== void 0) {
            return this._arr[index2].priority;
          }
        }
        /**
         * Returns the key for the minimum element in this queue. If the queue is
         * empty this function throws an Error. Takes `O(1)` time.
         */
        min() {
          if (this.size() === 0) {
            throw new Error("Queue underflow");
          }
          return this._arr[0].key;
        }
        /**
         * Inserts a new key into the priority queue. If the key already exists in
         * the queue this function returns `false`; otherwise it will return `true`.
         * Takes `O(n)` time.
         *
         * @param {Object} key the key to add
         * @param {Number} priority the initial priority for the key
         */
        add(key, priority) {
          var keyIndices = this._keyIndices;
          key = String(key);
          if (!Object.hasOwn(keyIndices, key)) {
            var arr = this._arr;
            var index2 = arr.length;
            keyIndices[key] = index2;
            arr.push({ key, priority });
            this._decrease(index2);
            return true;
          }
          return false;
        }
        /**
         * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
         */
        removeMin() {
          this._swap(0, this._arr.length - 1);
          var min = this._arr.pop();
          delete this._keyIndices[min.key];
          this._heapify(0);
          return min.key;
        }
        /**
         * Decreases the priority for **key** to **priority**. If the new priority is
         * greater than the previous priority, this function will throw an Error.
         *
         * @param {Object} key the key for which to raise priority
         * @param {Number} priority the new priority for the key
         */
        decrease(key, priority) {
          var index2 = this._keyIndices[key];
          if (priority > this._arr[index2].priority) {
            throw new Error("New priority is greater than current priority. Key: " + key + " Old: " + this._arr[index2].priority + " New: " + priority);
          }
          this._arr[index2].priority = priority;
          this._decrease(index2);
        }
        _heapify(i) {
          var arr = this._arr;
          var l = 2 * i;
          var r = l + 1;
          var largest = i;
          if (l < arr.length) {
            largest = arr[l].priority < arr[largest].priority ? l : largest;
            if (r < arr.length) {
              largest = arr[r].priority < arr[largest].priority ? r : largest;
            }
            if (largest !== i) {
              this._swap(i, largest);
              this._heapify(largest);
            }
          }
        }
        _decrease(index2) {
          var arr = this._arr;
          var priority = arr[index2].priority;
          var parent;
          while (index2 !== 0) {
            parent = index2 >> 1;
            if (arr[parent].priority < priority) {
              break;
            }
            this._swap(index2, parent);
            index2 = parent;
          }
        }
        _swap(i, j) {
          var arr = this._arr;
          var keyIndices = this._keyIndices;
          var origArrI = arr[i];
          var origArrJ = arr[j];
          arr[i] = origArrJ;
          arr[j] = origArrI;
          keyIndices[origArrJ.key] = i;
          keyIndices[origArrI.key] = j;
        }
      };
      module.exports = PriorityQueue;
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/dijkstra.js
  var require_dijkstra = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/dijkstra.js"(exports, module) {
      var PriorityQueue = require_priority_queue();
      module.exports = dijkstra;
      var DEFAULT_WEIGHT_FUNC = () => 1;
      function dijkstra(g, source, weightFn, edgeFn) {
        return runDijkstra(
          g,
          String(source),
          weightFn || DEFAULT_WEIGHT_FUNC,
          edgeFn || function(v) {
            return g.outEdges(v);
          }
        );
      }
      function runDijkstra(g, source, weightFn, edgeFn) {
        var results = {};
        var pq = new PriorityQueue();
        var v, vEntry;
        var updateNeighbors = function(edge) {
          var w = edge.v !== v ? edge.v : edge.w;
          var wEntry = results[w];
          var weight = weightFn(edge);
          var distance2 = vEntry.distance + weight;
          if (weight < 0) {
            throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + edge + " Weight: " + weight);
          }
          if (distance2 < wEntry.distance) {
            wEntry.distance = distance2;
            wEntry.predecessor = v;
            pq.decrease(w, distance2);
          }
        };
        g.nodes().forEach(function(v2) {
          var distance2 = v2 === source ? 0 : Number.POSITIVE_INFINITY;
          results[v2] = { distance: distance2 };
          pq.add(v2, distance2);
        });
        while (pq.size() > 0) {
          v = pq.removeMin();
          vEntry = results[v];
          if (vEntry.distance === Number.POSITIVE_INFINITY) {
            break;
          }
          edgeFn(v).forEach(updateNeighbors);
        }
        return results;
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/dijkstra-all.js
  var require_dijkstra_all = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/dijkstra-all.js"(exports, module) {
      var dijkstra = require_dijkstra();
      module.exports = dijkstraAll;
      function dijkstraAll(g, weightFunc, edgeFunc) {
        return g.nodes().reduce(function(acc, v) {
          acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
          return acc;
        }, {});
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/tarjan.js
  var require_tarjan = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/tarjan.js"(exports, module) {
      module.exports = tarjan;
      function tarjan(g) {
        var index2 = 0;
        var stack = [];
        var visited = {};
        var results = [];
        function dfs(v) {
          var entry = visited[v] = {
            onStack: true,
            lowlink: index2,
            index: index2++
          };
          stack.push(v);
          g.successors(v).forEach(function(w2) {
            if (!Object.hasOwn(visited, w2)) {
              dfs(w2);
              entry.lowlink = Math.min(entry.lowlink, visited[w2].lowlink);
            } else if (visited[w2].onStack) {
              entry.lowlink = Math.min(entry.lowlink, visited[w2].index);
            }
          });
          if (entry.lowlink === entry.index) {
            var cmpt = [];
            var w;
            do {
              w = stack.pop();
              visited[w].onStack = false;
              cmpt.push(w);
            } while (v !== w);
            results.push(cmpt);
          }
        }
        g.nodes().forEach(function(v) {
          if (!Object.hasOwn(visited, v)) {
            dfs(v);
          }
        });
        return results;
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/find-cycles.js
  var require_find_cycles = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/find-cycles.js"(exports, module) {
      var tarjan = require_tarjan();
      module.exports = findCycles;
      function findCycles(g) {
        return tarjan(g).filter(function(cmpt) {
          return cmpt.length > 1 || cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]);
        });
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/floyd-warshall.js
  var require_floyd_warshall = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/floyd-warshall.js"(exports, module) {
      module.exports = floydWarshall;
      var DEFAULT_WEIGHT_FUNC = () => 1;
      function floydWarshall(g, weightFn, edgeFn) {
        return runFloydWarshall(
          g,
          weightFn || DEFAULT_WEIGHT_FUNC,
          edgeFn || function(v) {
            return g.outEdges(v);
          }
        );
      }
      function runFloydWarshall(g, weightFn, edgeFn) {
        var results = {};
        var nodes = g.nodes();
        nodes.forEach(function(v) {
          results[v] = {};
          results[v][v] = { distance: 0 };
          nodes.forEach(function(w) {
            if (v !== w) {
              results[v][w] = { distance: Number.POSITIVE_INFINITY };
            }
          });
          edgeFn(v).forEach(function(edge) {
            var w = edge.v === v ? edge.w : edge.v;
            var d = weightFn(edge);
            results[v][w] = { distance: d, predecessor: v };
          });
        });
        nodes.forEach(function(k) {
          var rowK = results[k];
          nodes.forEach(function(i) {
            var rowI = results[i];
            nodes.forEach(function(j) {
              var ik = rowI[k];
              var kj = rowK[j];
              var ij = rowI[j];
              var altDistance = ik.distance + kj.distance;
              if (altDistance < ij.distance) {
                ij.distance = altDistance;
                ij.predecessor = kj.predecessor;
              }
            });
          });
        });
        return results;
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/topsort.js
  var require_topsort = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/topsort.js"(exports, module) {
      function topsort(g) {
        var visited = {};
        var stack = {};
        var results = [];
        function visit(node) {
          if (Object.hasOwn(stack, node)) {
            throw new CycleException();
          }
          if (!Object.hasOwn(visited, node)) {
            stack[node] = true;
            visited[node] = true;
            g.predecessors(node).forEach(visit);
            delete stack[node];
            results.push(node);
          }
        }
        g.sinks().forEach(visit);
        if (Object.keys(visited).length !== g.nodeCount()) {
          throw new CycleException();
        }
        return results;
      }
      var CycleException = class extends Error {
        constructor() {
          super(...arguments);
        }
      };
      module.exports = topsort;
      topsort.CycleException = CycleException;
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/is-acyclic.js
  var require_is_acyclic = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/is-acyclic.js"(exports, module) {
      var topsort = require_topsort();
      module.exports = isAcyclic;
      function isAcyclic(g) {
        try {
          topsort(g);
        } catch (e) {
          if (e instanceof topsort.CycleException) {
            return false;
          }
          throw e;
        }
        return true;
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/dfs.js
  var require_dfs = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/dfs.js"(exports, module) {
      module.exports = dfs;
      function dfs(g, vs, order) {
        if (!Array.isArray(vs)) {
          vs = [vs];
        }
        var navigation = g.isDirected() ? (v) => g.successors(v) : (v) => g.neighbors(v);
        var orderFunc = order === "post" ? postOrderDfs : preOrderDfs;
        var acc = [];
        var visited = {};
        vs.forEach((v) => {
          if (!g.hasNode(v)) {
            throw new Error("Graph does not have node: " + v);
          }
          orderFunc(v, navigation, visited, acc);
        });
        return acc;
      }
      function postOrderDfs(v, navigation, visited, acc) {
        var stack = [[v, false]];
        while (stack.length > 0) {
          var curr = stack.pop();
          if (curr[1]) {
            acc.push(curr[0]);
          } else {
            if (!Object.hasOwn(visited, curr[0])) {
              visited[curr[0]] = true;
              stack.push([curr[0], true]);
              forEachRight(navigation(curr[0]), (w) => stack.push([w, false]));
            }
          }
        }
      }
      function preOrderDfs(v, navigation, visited, acc) {
        var stack = [v];
        while (stack.length > 0) {
          var curr = stack.pop();
          if (!Object.hasOwn(visited, curr)) {
            visited[curr] = true;
            acc.push(curr);
            forEachRight(navigation(curr), (w) => stack.push(w));
          }
        }
      }
      function forEachRight(array2, iteratee) {
        var length = array2.length;
        while (length--) {
          iteratee(array2[length], length, array2);
        }
        return array2;
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/postorder.js
  var require_postorder = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/postorder.js"(exports, module) {
      var dfs = require_dfs();
      module.exports = postorder;
      function postorder(g, vs) {
        return dfs(g, vs, "post");
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/preorder.js
  var require_preorder = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/preorder.js"(exports, module) {
      var dfs = require_dfs();
      module.exports = preorder;
      function preorder(g, vs) {
        return dfs(g, vs, "pre");
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/prim.js
  var require_prim = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/prim.js"(exports, module) {
      var Graph = require_graph();
      var PriorityQueue = require_priority_queue();
      module.exports = prim;
      function prim(g, weightFunc) {
        var result = new Graph();
        var parents = {};
        var pq = new PriorityQueue();
        var v;
        function updateNeighbors(edge) {
          var w = edge.v === v ? edge.w : edge.v;
          var pri = pq.priority(w);
          if (pri !== void 0) {
            var edgeWeight = weightFunc(edge);
            if (edgeWeight < pri) {
              parents[w] = v;
              pq.decrease(w, edgeWeight);
            }
          }
        }
        if (g.nodeCount() === 0) {
          return result;
        }
        g.nodes().forEach(function(v2) {
          pq.add(v2, Number.POSITIVE_INFINITY);
          result.setNode(v2);
        });
        pq.decrease(g.nodes()[0], 0);
        var init2 = false;
        while (pq.size() > 0) {
          v = pq.removeMin();
          if (Object.hasOwn(parents, v)) {
            result.setEdge(v, parents[v]);
          } else if (init2) {
            throw new Error("Input graph is not connected: " + g);
          } else {
            init2 = true;
          }
          g.nodeEdges(v).forEach(updateNeighbors);
        }
        return result;
      }
    }
  });

  // node_modules/@dagrejs/graphlib/lib/alg/index.js
  var require_alg = __commonJS({
    "node_modules/@dagrejs/graphlib/lib/alg/index.js"(exports, module) {
      module.exports = {
        components: require_components(),
        dijkstra: require_dijkstra(),
        dijkstraAll: require_dijkstra_all(),
        findCycles: require_find_cycles(),
        floydWarshall: require_floyd_warshall(),
        isAcyclic: require_is_acyclic(),
        postorder: require_postorder(),
        preorder: require_preorder(),
        prim: require_prim(),
        tarjan: require_tarjan(),
        topsort: require_topsort()
      };
    }
  });

  // node_modules/@dagrejs/graphlib/index.js
  var require_graphlib = __commonJS({
    "node_modules/@dagrejs/graphlib/index.js"(exports, module) {
      var lib = require_lib();
      module.exports = {
        Graph: lib.Graph,
        json: require_json(),
        alg: require_alg(),
        version: lib.version
      };
    }
  });

  // node_modules/@dagrejs/dagre/lib/data/list.js
  var require_list = __commonJS({
    "node_modules/@dagrejs/dagre/lib/data/list.js"(exports, module) {
      var List = class {
        constructor() {
          let sentinel = {};
          sentinel._next = sentinel._prev = sentinel;
          this._sentinel = sentinel;
        }
        dequeue() {
          let sentinel = this._sentinel;
          let entry = sentinel._prev;
          if (entry !== sentinel) {
            unlink(entry);
            return entry;
          }
        }
        enqueue(entry) {
          let sentinel = this._sentinel;
          if (entry._prev && entry._next) {
            unlink(entry);
          }
          entry._next = sentinel._next;
          sentinel._next._prev = entry;
          sentinel._next = entry;
          entry._prev = sentinel;
        }
        toString() {
          let strs = [];
          let sentinel = this._sentinel;
          let curr = sentinel._prev;
          while (curr !== sentinel) {
            strs.push(JSON.stringify(curr, filterOutLinks));
            curr = curr._prev;
          }
          return "[" + strs.join(", ") + "]";
        }
      };
      function unlink(entry) {
        entry._prev._next = entry._next;
        entry._next._prev = entry._prev;
        delete entry._next;
        delete entry._prev;
      }
      function filterOutLinks(k, v) {
        if (k !== "_next" && k !== "_prev") {
          return v;
        }
      }
      module.exports = List;
    }
  });

  // node_modules/@dagrejs/dagre/lib/greedy-fas.js
  var require_greedy_fas = __commonJS({
    "node_modules/@dagrejs/dagre/lib/greedy-fas.js"(exports, module) {
      var Graph = require_graphlib().Graph;
      var List = require_list();
      module.exports = greedyFAS;
      var DEFAULT_WEIGHT_FN = () => 1;
      function greedyFAS(g, weightFn) {
        if (g.nodeCount() <= 1) {
          return [];
        }
        let state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
        let results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);
        return results.flatMap((e) => g.outEdges(e.v, e.w));
      }
      function doGreedyFAS(g, buckets, zeroIdx) {
        let results = [];
        let sources = buckets[buckets.length - 1];
        let sinks = buckets[0];
        let entry;
        while (g.nodeCount()) {
          while (entry = sinks.dequeue()) {
            removeNode(g, buckets, zeroIdx, entry);
          }
          while (entry = sources.dequeue()) {
            removeNode(g, buckets, zeroIdx, entry);
          }
          if (g.nodeCount()) {
            for (let i = buckets.length - 2; i > 0; --i) {
              entry = buckets[i].dequeue();
              if (entry) {
                results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
                break;
              }
            }
          }
        }
        return results;
      }
      function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
        let results = collectPredecessors ? [] : void 0;
        g.inEdges(entry.v).forEach((edge) => {
          let weight = g.edge(edge);
          let uEntry = g.node(edge.v);
          if (collectPredecessors) {
            results.push({ v: edge.v, w: edge.w });
          }
          uEntry.out -= weight;
          assignBucket(buckets, zeroIdx, uEntry);
        });
        g.outEdges(entry.v).forEach((edge) => {
          let weight = g.edge(edge);
          let w = edge.w;
          let wEntry = g.node(w);
          wEntry["in"] -= weight;
          assignBucket(buckets, zeroIdx, wEntry);
        });
        g.removeNode(entry.v);
        return results;
      }
      function buildState(g, weightFn) {
        let fasGraph = new Graph();
        let maxIn = 0;
        let maxOut = 0;
        g.nodes().forEach((v) => {
          fasGraph.setNode(v, { v, "in": 0, out: 0 });
        });
        g.edges().forEach((e) => {
          let prevWeight = fasGraph.edge(e.v, e.w) || 0;
          let weight = weightFn(e);
          let edgeWeight = prevWeight + weight;
          fasGraph.setEdge(e.v, e.w, edgeWeight);
          maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
          maxIn = Math.max(maxIn, fasGraph.node(e.w)["in"] += weight);
        });
        let buckets = range(maxOut + maxIn + 3).map(() => new List());
        let zeroIdx = maxIn + 1;
        fasGraph.nodes().forEach((v) => {
          assignBucket(buckets, zeroIdx, fasGraph.node(v));
        });
        return { graph: fasGraph, buckets, zeroIdx };
      }
      function assignBucket(buckets, zeroIdx, entry) {
        if (!entry.out) {
          buckets[0].enqueue(entry);
        } else if (!entry["in"]) {
          buckets[buckets.length - 1].enqueue(entry);
        } else {
          buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
        }
      }
      function range(limit) {
        const range2 = [];
        for (let i = 0; i < limit; i++) {
          range2.push(i);
        }
        return range2;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/util.js
  var require_util = __commonJS({
    "node_modules/@dagrejs/dagre/lib/util.js"(exports, module) {
      "use strict";
      var Graph = require_graphlib().Graph;
      module.exports = {
        addBorderNode,
        addDummyNode,
        applyWithChunking,
        asNonCompoundGraph,
        buildLayerMatrix,
        intersectRect,
        mapValues,
        maxRank,
        normalizeRanks,
        notime,
        partition,
        pick,
        predecessorWeights,
        range,
        removeEmptyRanks,
        simplify,
        successorWeights,
        time,
        uniqueId,
        zipObject
      };
      function addDummyNode(g, type, attrs, name) {
        var v = name;
        while (g.hasNode(v)) {
          v = uniqueId(name);
        }
        attrs.dummy = type;
        g.setNode(v, attrs);
        return v;
      }
      function simplify(g) {
        let simplified = new Graph().setGraph(g.graph());
        g.nodes().forEach((v) => simplified.setNode(v, g.node(v)));
        g.edges().forEach((e) => {
          let simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 };
          let label = g.edge(e);
          simplified.setEdge(e.v, e.w, {
            weight: simpleLabel.weight + label.weight,
            minlen: Math.max(simpleLabel.minlen, label.minlen)
          });
        });
        return simplified;
      }
      function asNonCompoundGraph(g) {
        let simplified = new Graph({ multigraph: g.isMultigraph() }).setGraph(g.graph());
        g.nodes().forEach((v) => {
          if (!g.children(v).length) {
            simplified.setNode(v, g.node(v));
          }
        });
        g.edges().forEach((e) => {
          simplified.setEdge(e, g.edge(e));
        });
        return simplified;
      }
      function successorWeights(g) {
        let weightMap = g.nodes().map((v) => {
          let sucs = {};
          g.outEdges(v).forEach((e) => {
            sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
          });
          return sucs;
        });
        return zipObject(g.nodes(), weightMap);
      }
      function predecessorWeights(g) {
        let weightMap = g.nodes().map((v) => {
          let preds = {};
          g.inEdges(v).forEach((e) => {
            preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
          });
          return preds;
        });
        return zipObject(g.nodes(), weightMap);
      }
      function intersectRect(rect, point) {
        let x = rect.x;
        let y = rect.y;
        let dx = point.x - x;
        let dy = point.y - y;
        let w = rect.width / 2;
        let h = rect.height / 2;
        if (!dx && !dy) {
          throw new Error("Not possible to find intersection inside of the rectangle");
        }
        let sx, sy;
        if (Math.abs(dy) * w > Math.abs(dx) * h) {
          if (dy < 0) {
            h = -h;
          }
          sx = h * dx / dy;
          sy = h;
        } else {
          if (dx < 0) {
            w = -w;
          }
          sx = w;
          sy = w * dy / dx;
        }
        return { x: x + sx, y: y + sy };
      }
      function buildLayerMatrix(g) {
        let layering = range(maxRank(g) + 1).map(() => []);
        g.nodes().forEach((v) => {
          let node = g.node(v);
          let rank = node.rank;
          if (rank !== void 0) {
            layering[rank][node.order] = v;
          }
        });
        return layering;
      }
      function normalizeRanks(g) {
        let nodeRanks = g.nodes().map((v) => {
          let rank = g.node(v).rank;
          if (rank === void 0) {
            return Number.MAX_VALUE;
          }
          return rank;
        });
        let min = applyWithChunking(Math.min, nodeRanks);
        g.nodes().forEach((v) => {
          let node = g.node(v);
          if (Object.hasOwn(node, "rank")) {
            node.rank -= min;
          }
        });
      }
      function removeEmptyRanks(g) {
        let nodeRanks = g.nodes().map((v) => g.node(v).rank);
        let offset = applyWithChunking(Math.min, nodeRanks);
        let layers = [];
        g.nodes().forEach((v) => {
          let rank = g.node(v).rank - offset;
          if (!layers[rank]) {
            layers[rank] = [];
          }
          layers[rank].push(v);
        });
        let delta = 0;
        let nodeRankFactor = g.graph().nodeRankFactor;
        Array.from(layers).forEach((vs, i) => {
          if (vs === void 0 && i % nodeRankFactor !== 0) {
            --delta;
          } else if (vs !== void 0 && delta) {
            vs.forEach((v) => g.node(v).rank += delta);
          }
        });
      }
      function addBorderNode(g, prefix, rank, order) {
        let node = {
          width: 0,
          height: 0
        };
        if (arguments.length >= 4) {
          node.rank = rank;
          node.order = order;
        }
        return addDummyNode(g, "border", node, prefix);
      }
      function splitToChunks(array2, chunkSize = CHUNKING_THRESHOLD) {
        const chunks = [];
        for (let i = 0; i < array2.length; i += chunkSize) {
          const chunk = array2.slice(i, i + chunkSize);
          chunks.push(chunk);
        }
        return chunks;
      }
      var CHUNKING_THRESHOLD = 65535;
      function applyWithChunking(fn, argsArray) {
        if (argsArray.length > CHUNKING_THRESHOLD) {
          const chunks = splitToChunks(argsArray);
          return fn.apply(null, chunks.map((chunk) => fn.apply(null, chunk)));
        } else {
          return fn.apply(null, argsArray);
        }
      }
      function maxRank(g) {
        const nodes = g.nodes();
        const nodeRanks = nodes.map((v) => {
          let rank = g.node(v).rank;
          if (rank === void 0) {
            return Number.MIN_VALUE;
          }
          return rank;
        });
        return applyWithChunking(Math.max, nodeRanks);
      }
      function partition(collection, fn) {
        let result = { lhs: [], rhs: [] };
        collection.forEach((value) => {
          if (fn(value)) {
            result.lhs.push(value);
          } else {
            result.rhs.push(value);
          }
        });
        return result;
      }
      function time(name, fn) {
        let start2 = Date.now();
        try {
          return fn();
        } finally {
          console.log(name + " time: " + (Date.now() - start2) + "ms");
        }
      }
      function notime(name, fn) {
        return fn();
      }
      var idCounter = 0;
      function uniqueId(prefix) {
        var id2 = ++idCounter;
        return prefix + ("" + id2);
      }
      function range(start2, limit, step = 1) {
        if (limit == null) {
          limit = start2;
          start2 = 0;
        }
        let endCon = (i) => i < limit;
        if (step < 0) {
          endCon = (i) => limit < i;
        }
        const range2 = [];
        for (let i = start2; endCon(i); i += step) {
          range2.push(i);
        }
        return range2;
      }
      function pick(source, keys) {
        const dest = {};
        for (const key of keys) {
          if (source[key] !== void 0) {
            dest[key] = source[key];
          }
        }
        return dest;
      }
      function mapValues(obj, funcOrProp) {
        let func = funcOrProp;
        if (typeof funcOrProp === "string") {
          func = (val) => val[funcOrProp];
        }
        return Object.entries(obj).reduce((acc, [k, v]) => {
          acc[k] = func(v, k);
          return acc;
        }, {});
      }
      function zipObject(props, values) {
        return props.reduce((acc, key, i) => {
          acc[key] = values[i];
          return acc;
        }, {});
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/acyclic.js
  var require_acyclic = __commonJS({
    "node_modules/@dagrejs/dagre/lib/acyclic.js"(exports, module) {
      "use strict";
      var greedyFAS = require_greedy_fas();
      var uniqueId = require_util().uniqueId;
      module.exports = {
        run,
        undo
      };
      function run(g) {
        let fas = g.graph().acyclicer === "greedy" ? greedyFAS(g, weightFn(g)) : dfsFAS(g);
        fas.forEach((e) => {
          let label = g.edge(e);
          g.removeEdge(e);
          label.forwardName = e.name;
          label.reversed = true;
          g.setEdge(e.w, e.v, label, uniqueId("rev"));
        });
        function weightFn(g2) {
          return (e) => {
            return g2.edge(e).weight;
          };
        }
      }
      function dfsFAS(g) {
        let fas = [];
        let stack = {};
        let visited = {};
        function dfs(v) {
          if (Object.hasOwn(visited, v)) {
            return;
          }
          visited[v] = true;
          stack[v] = true;
          g.outEdges(v).forEach((e) => {
            if (Object.hasOwn(stack, e.w)) {
              fas.push(e);
            } else {
              dfs(e.w);
            }
          });
          delete stack[v];
        }
        g.nodes().forEach(dfs);
        return fas;
      }
      function undo(g) {
        g.edges().forEach((e) => {
          let label = g.edge(e);
          if (label.reversed) {
            g.removeEdge(e);
            let forwardName = label.forwardName;
            delete label.reversed;
            delete label.forwardName;
            g.setEdge(e.w, e.v, label, forwardName);
          }
        });
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/normalize.js
  var require_normalize = __commonJS({
    "node_modules/@dagrejs/dagre/lib/normalize.js"(exports, module) {
      "use strict";
      var util = require_util();
      module.exports = {
        run,
        undo
      };
      function run(g) {
        g.graph().dummyChains = [];
        g.edges().forEach((edge) => normalizeEdge(g, edge));
      }
      function normalizeEdge(g, e) {
        let v = e.v;
        let vRank = g.node(v).rank;
        let w = e.w;
        let wRank = g.node(w).rank;
        let name = e.name;
        let edgeLabel = g.edge(e);
        let labelRank = edgeLabel.labelRank;
        if (wRank === vRank + 1) return;
        g.removeEdge(e);
        let dummy, attrs, i;
        for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
          edgeLabel.points = [];
          attrs = {
            width: 0,
            height: 0,
            edgeLabel,
            edgeObj: e,
            rank: vRank
          };
          dummy = util.addDummyNode(g, "edge", attrs, "_d");
          if (vRank === labelRank) {
            attrs.width = edgeLabel.width;
            attrs.height = edgeLabel.height;
            attrs.dummy = "edge-label";
            attrs.labelpos = edgeLabel.labelpos;
          }
          g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
          if (i === 0) {
            g.graph().dummyChains.push(dummy);
          }
          v = dummy;
        }
        g.setEdge(v, w, { weight: edgeLabel.weight }, name);
      }
      function undo(g) {
        g.graph().dummyChains.forEach((v) => {
          let node = g.node(v);
          let origLabel = node.edgeLabel;
          let w;
          g.setEdge(node.edgeObj, origLabel);
          while (node.dummy) {
            w = g.successors(v)[0];
            g.removeNode(v);
            origLabel.points.push({ x: node.x, y: node.y });
            if (node.dummy === "edge-label") {
              origLabel.x = node.x;
              origLabel.y = node.y;
              origLabel.width = node.width;
              origLabel.height = node.height;
            }
            v = w;
            node = g.node(v);
          }
        });
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/rank/util.js
  var require_util2 = __commonJS({
    "node_modules/@dagrejs/dagre/lib/rank/util.js"(exports, module) {
      "use strict";
      var { applyWithChunking } = require_util();
      module.exports = {
        longestPath,
        slack
      };
      function longestPath(g) {
        var visited = {};
        function dfs(v) {
          var label = g.node(v);
          if (Object.hasOwn(visited, v)) {
            return label.rank;
          }
          visited[v] = true;
          let outEdgesMinLens = g.outEdges(v).map((e) => {
            if (e == null) {
              return Number.POSITIVE_INFINITY;
            }
            return dfs(e.w) - g.edge(e).minlen;
          });
          var rank = applyWithChunking(Math.min, outEdgesMinLens);
          if (rank === Number.POSITIVE_INFINITY) {
            rank = 0;
          }
          return label.rank = rank;
        }
        g.sources().forEach(dfs);
      }
      function slack(g, e) {
        return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/rank/feasible-tree.js
  var require_feasible_tree = __commonJS({
    "node_modules/@dagrejs/dagre/lib/rank/feasible-tree.js"(exports, module) {
      "use strict";
      var Graph = require_graphlib().Graph;
      var slack = require_util2().slack;
      module.exports = feasibleTree;
      function feasibleTree(g) {
        var t2 = new Graph({ directed: false });
        var start2 = g.nodes()[0];
        var size = g.nodeCount();
        t2.setNode(start2, {});
        var edge, delta;
        while (tightTree(t2, g) < size) {
          edge = findMinSlackEdge(t2, g);
          delta = t2.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
          shiftRanks(t2, g, delta);
        }
        return t2;
      }
      function tightTree(t2, g) {
        function dfs(v) {
          g.nodeEdges(v).forEach((e) => {
            var edgeV = e.v, w = v === edgeV ? e.w : edgeV;
            if (!t2.hasNode(w) && !slack(g, e)) {
              t2.setNode(w, {});
              t2.setEdge(v, w, {});
              dfs(w);
            }
          });
        }
        t2.nodes().forEach(dfs);
        return t2.nodeCount();
      }
      function findMinSlackEdge(t2, g) {
        const edges = g.edges();
        return edges.reduce((acc, edge) => {
          let edgeSlack = Number.POSITIVE_INFINITY;
          if (t2.hasNode(edge.v) !== t2.hasNode(edge.w)) {
            edgeSlack = slack(g, edge);
          }
          if (edgeSlack < acc[0]) {
            return [edgeSlack, edge];
          }
          return acc;
        }, [Number.POSITIVE_INFINITY, null])[1];
      }
      function shiftRanks(t2, g, delta) {
        t2.nodes().forEach((v) => g.node(v).rank += delta);
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/rank/network-simplex.js
  var require_network_simplex = __commonJS({
    "node_modules/@dagrejs/dagre/lib/rank/network-simplex.js"(exports, module) {
      "use strict";
      var feasibleTree = require_feasible_tree();
      var slack = require_util2().slack;
      var initRank = require_util2().longestPath;
      var preorder = require_graphlib().alg.preorder;
      var postorder = require_graphlib().alg.postorder;
      var simplify = require_util().simplify;
      module.exports = networkSimplex;
      networkSimplex.initLowLimValues = initLowLimValues;
      networkSimplex.initCutValues = initCutValues;
      networkSimplex.calcCutValue = calcCutValue;
      networkSimplex.leaveEdge = leaveEdge;
      networkSimplex.enterEdge = enterEdge;
      networkSimplex.exchangeEdges = exchangeEdges;
      function networkSimplex(g) {
        g = simplify(g);
        initRank(g);
        var t2 = feasibleTree(g);
        initLowLimValues(t2);
        initCutValues(t2, g);
        var e, f;
        while (e = leaveEdge(t2)) {
          f = enterEdge(t2, g, e);
          exchangeEdges(t2, g, e, f);
        }
      }
      function initCutValues(t2, g) {
        var vs = postorder(t2, t2.nodes());
        vs = vs.slice(0, vs.length - 1);
        vs.forEach((v) => assignCutValue(t2, g, v));
      }
      function assignCutValue(t2, g, child) {
        var childLab = t2.node(child);
        var parent = childLab.parent;
        t2.edge(child, parent).cutvalue = calcCutValue(t2, g, child);
      }
      function calcCutValue(t2, g, child) {
        var childLab = t2.node(child);
        var parent = childLab.parent;
        var childIsTail = true;
        var graphEdge = g.edge(child, parent);
        var cutValue = 0;
        if (!graphEdge) {
          childIsTail = false;
          graphEdge = g.edge(parent, child);
        }
        cutValue = graphEdge.weight;
        g.nodeEdges(child).forEach((e) => {
          var isOutEdge = e.v === child, other = isOutEdge ? e.w : e.v;
          if (other !== parent) {
            var pointsToHead = isOutEdge === childIsTail, otherWeight = g.edge(e).weight;
            cutValue += pointsToHead ? otherWeight : -otherWeight;
            if (isTreeEdge(t2, child, other)) {
              var otherCutValue = t2.edge(child, other).cutvalue;
              cutValue += pointsToHead ? -otherCutValue : otherCutValue;
            }
          }
        });
        return cutValue;
      }
      function initLowLimValues(tree, root2) {
        if (arguments.length < 2) {
          root2 = tree.nodes()[0];
        }
        dfsAssignLowLim(tree, {}, 1, root2);
      }
      function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
        var low = nextLim;
        var label = tree.node(v);
        visited[v] = true;
        tree.neighbors(v).forEach((w) => {
          if (!Object.hasOwn(visited, w)) {
            nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
          }
        });
        label.low = low;
        label.lim = nextLim++;
        if (parent) {
          label.parent = parent;
        } else {
          delete label.parent;
        }
        return nextLim;
      }
      function leaveEdge(tree) {
        return tree.edges().find((e) => tree.edge(e).cutvalue < 0);
      }
      function enterEdge(t2, g, edge) {
        var v = edge.v;
        var w = edge.w;
        if (!g.hasEdge(v, w)) {
          v = edge.w;
          w = edge.v;
        }
        var vLabel = t2.node(v);
        var wLabel = t2.node(w);
        var tailLabel = vLabel;
        var flip = false;
        if (vLabel.lim > wLabel.lim) {
          tailLabel = wLabel;
          flip = true;
        }
        var candidates = g.edges().filter((edge2) => {
          return flip === isDescendant(t2, t2.node(edge2.v), tailLabel) && flip !== isDescendant(t2, t2.node(edge2.w), tailLabel);
        });
        return candidates.reduce((acc, edge2) => {
          if (slack(g, edge2) < slack(g, acc)) {
            return edge2;
          }
          return acc;
        });
      }
      function exchangeEdges(t2, g, e, f) {
        var v = e.v;
        var w = e.w;
        t2.removeEdge(v, w);
        t2.setEdge(f.v, f.w, {});
        initLowLimValues(t2);
        initCutValues(t2, g);
        updateRanks(t2, g);
      }
      function updateRanks(t2, g) {
        var root2 = t2.nodes().find((v) => !g.node(v).parent);
        var vs = preorder(t2, root2);
        vs = vs.slice(1);
        vs.forEach((v) => {
          var parent = t2.node(v).parent, edge = g.edge(v, parent), flipped = false;
          if (!edge) {
            edge = g.edge(parent, v);
            flipped = true;
          }
          g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
        });
      }
      function isTreeEdge(tree, u, v) {
        return tree.hasEdge(u, v);
      }
      function isDescendant(tree, vLabel, rootLabel) {
        return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/rank/index.js
  var require_rank = __commonJS({
    "node_modules/@dagrejs/dagre/lib/rank/index.js"(exports, module) {
      "use strict";
      var rankUtil = require_util2();
      var longestPath = rankUtil.longestPath;
      var feasibleTree = require_feasible_tree();
      var networkSimplex = require_network_simplex();
      module.exports = rank;
      function rank(g) {
        var ranker = g.graph().ranker;
        if (ranker instanceof Function) {
          return ranker(g);
        }
        switch (g.graph().ranker) {
          case "network-simplex":
            networkSimplexRanker(g);
            break;
          case "tight-tree":
            tightTreeRanker(g);
            break;
          case "longest-path":
            longestPathRanker(g);
            break;
          case "none":
            break;
          default:
            networkSimplexRanker(g);
        }
      }
      var longestPathRanker = longestPath;
      function tightTreeRanker(g) {
        longestPath(g);
        feasibleTree(g);
      }
      function networkSimplexRanker(g) {
        networkSimplex(g);
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/parent-dummy-chains.js
  var require_parent_dummy_chains = __commonJS({
    "node_modules/@dagrejs/dagre/lib/parent-dummy-chains.js"(exports, module) {
      module.exports = parentDummyChains;
      function parentDummyChains(g) {
        let postorderNums = postorder(g);
        g.graph().dummyChains.forEach((v) => {
          let node = g.node(v);
          let edgeObj = node.edgeObj;
          let pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
          let path = pathData.path;
          let lca = pathData.lca;
          let pathIdx = 0;
          let pathV = path[pathIdx];
          let ascending2 = true;
          while (v !== edgeObj.w) {
            node = g.node(v);
            if (ascending2) {
              while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank) {
                pathIdx++;
              }
              if (pathV === lca) {
                ascending2 = false;
              }
            }
            if (!ascending2) {
              while (pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node.rank) {
                pathIdx++;
              }
              pathV = path[pathIdx];
            }
            g.setParent(v, pathV);
            v = g.successors(v)[0];
          }
        });
      }
      function findPath(g, postorderNums, v, w) {
        let vPath = [];
        let wPath = [];
        let low = Math.min(postorderNums[v].low, postorderNums[w].low);
        let lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
        let parent;
        let lca;
        parent = v;
        do {
          parent = g.parent(parent);
          vPath.push(parent);
        } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
        lca = parent;
        parent = w;
        while ((parent = g.parent(parent)) !== lca) {
          wPath.push(parent);
        }
        return { path: vPath.concat(wPath.reverse()), lca };
      }
      function postorder(g) {
        let result = {};
        let lim = 0;
        function dfs(v) {
          let low = lim;
          g.children(v).forEach(dfs);
          result[v] = { low, lim: lim++ };
        }
        g.children().forEach(dfs);
        return result;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/nesting-graph.js
  var require_nesting_graph = __commonJS({
    "node_modules/@dagrejs/dagre/lib/nesting-graph.js"(exports, module) {
      var util = require_util();
      module.exports = {
        run,
        cleanup
      };
      function run(g) {
        let root2 = util.addDummyNode(g, "root", {}, "_root");
        let depths = treeDepths(g);
        let depthsArr = Object.values(depths);
        let height = util.applyWithChunking(Math.max, depthsArr) - 1;
        let nodeSep = 2 * height + 1;
        g.graph().nestingRoot = root2;
        g.edges().forEach((e) => g.edge(e).minlen *= nodeSep);
        let weight = sumWeights(g) + 1;
        g.children().forEach((child) => dfs(g, root2, nodeSep, weight, height, depths, child));
        g.graph().nodeRankFactor = nodeSep;
      }
      function dfs(g, root2, nodeSep, weight, height, depths, v) {
        let children2 = g.children(v);
        if (!children2.length) {
          if (v !== root2) {
            g.setEdge(root2, v, { weight: 0, minlen: nodeSep });
          }
          return;
        }
        let top = util.addBorderNode(g, "_bt");
        let bottom = util.addBorderNode(g, "_bb");
        let label = g.node(v);
        g.setParent(top, v);
        label.borderTop = top;
        g.setParent(bottom, v);
        label.borderBottom = bottom;
        children2.forEach((child) => {
          dfs(g, root2, nodeSep, weight, height, depths, child);
          let childNode = g.node(child);
          let childTop = childNode.borderTop ? childNode.borderTop : child;
          let childBottom = childNode.borderBottom ? childNode.borderBottom : child;
          let thisWeight = childNode.borderTop ? weight : 2 * weight;
          let minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
          g.setEdge(top, childTop, {
            weight: thisWeight,
            minlen,
            nestingEdge: true
          });
          g.setEdge(childBottom, bottom, {
            weight: thisWeight,
            minlen,
            nestingEdge: true
          });
        });
        if (!g.parent(v)) {
          g.setEdge(root2, top, { weight: 0, minlen: height + depths[v] });
        }
      }
      function treeDepths(g) {
        var depths = {};
        function dfs2(v, depth) {
          var children2 = g.children(v);
          if (children2 && children2.length) {
            children2.forEach((child) => dfs2(child, depth + 1));
          }
          depths[v] = depth;
        }
        g.children().forEach((v) => dfs2(v, 1));
        return depths;
      }
      function sumWeights(g) {
        return g.edges().reduce((acc, e) => acc + g.edge(e).weight, 0);
      }
      function cleanup(g) {
        var graphLabel = g.graph();
        g.removeNode(graphLabel.nestingRoot);
        delete graphLabel.nestingRoot;
        g.edges().forEach((e) => {
          var edge = g.edge(e);
          if (edge.nestingEdge) {
            g.removeEdge(e);
          }
        });
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/add-border-segments.js
  var require_add_border_segments = __commonJS({
    "node_modules/@dagrejs/dagre/lib/add-border-segments.js"(exports, module) {
      var util = require_util();
      module.exports = addBorderSegments;
      function addBorderSegments(g) {
        function dfs(v) {
          let children2 = g.children(v);
          let node = g.node(v);
          if (children2.length) {
            children2.forEach(dfs);
          }
          if (Object.hasOwn(node, "minRank")) {
            node.borderLeft = [];
            node.borderRight = [];
            for (let rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank) {
              addBorderNode(g, "borderLeft", "_bl", v, node, rank);
              addBorderNode(g, "borderRight", "_br", v, node, rank);
            }
          }
        }
        g.children().forEach(dfs);
      }
      function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
        let label = { width: 0, height: 0, rank, borderType: prop };
        let prev = sgNode[prop][rank - 1];
        let curr = util.addDummyNode(g, "border", label, prefix);
        sgNode[prop][rank] = curr;
        g.setParent(curr, sg);
        if (prev) {
          g.setEdge(prev, curr, { weight: 1 });
        }
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/coordinate-system.js
  var require_coordinate_system = __commonJS({
    "node_modules/@dagrejs/dagre/lib/coordinate-system.js"(exports, module) {
      "use strict";
      module.exports = {
        adjust,
        undo
      };
      function adjust(g) {
        let rankDir = g.graph().rankdir.toLowerCase();
        if (rankDir === "lr" || rankDir === "rl") {
          swapWidthHeight(g);
        }
      }
      function undo(g) {
        let rankDir = g.graph().rankdir.toLowerCase();
        if (rankDir === "bt" || rankDir === "rl") {
          reverseY(g);
        }
        if (rankDir === "lr" || rankDir === "rl") {
          swapXY(g);
          swapWidthHeight(g);
        }
      }
      function swapWidthHeight(g) {
        g.nodes().forEach((v) => swapWidthHeightOne(g.node(v)));
        g.edges().forEach((e) => swapWidthHeightOne(g.edge(e)));
      }
      function swapWidthHeightOne(attrs) {
        let w = attrs.width;
        attrs.width = attrs.height;
        attrs.height = w;
      }
      function reverseY(g) {
        g.nodes().forEach((v) => reverseYOne(g.node(v)));
        g.edges().forEach((e) => {
          let edge = g.edge(e);
          edge.points.forEach(reverseYOne);
          if (Object.hasOwn(edge, "y")) {
            reverseYOne(edge);
          }
        });
      }
      function reverseYOne(attrs) {
        attrs.y = -attrs.y;
      }
      function swapXY(g) {
        g.nodes().forEach((v) => swapXYOne(g.node(v)));
        g.edges().forEach((e) => {
          let edge = g.edge(e);
          edge.points.forEach(swapXYOne);
          if (Object.hasOwn(edge, "x")) {
            swapXYOne(edge);
          }
        });
      }
      function swapXYOne(attrs) {
        let x = attrs.x;
        attrs.x = attrs.y;
        attrs.y = x;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/order/init-order.js
  var require_init_order = __commonJS({
    "node_modules/@dagrejs/dagre/lib/order/init-order.js"(exports, module) {
      "use strict";
      var util = require_util();
      module.exports = initOrder;
      function initOrder(g) {
        let visited = {};
        let simpleNodes = g.nodes().filter((v) => !g.children(v).length);
        let simpleNodesRanks = simpleNodes.map((v) => g.node(v).rank);
        let maxRank = util.applyWithChunking(Math.max, simpleNodesRanks);
        let layers = util.range(maxRank + 1).map(() => []);
        function dfs(v) {
          if (visited[v]) return;
          visited[v] = true;
          let node = g.node(v);
          layers[node.rank].push(v);
          g.successors(v).forEach(dfs);
        }
        let orderedVs = simpleNodes.sort((a, b) => g.node(a).rank - g.node(b).rank);
        orderedVs.forEach(dfs);
        return layers;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/order/cross-count.js
  var require_cross_count = __commonJS({
    "node_modules/@dagrejs/dagre/lib/order/cross-count.js"(exports, module) {
      "use strict";
      var zipObject = require_util().zipObject;
      module.exports = crossCount;
      function crossCount(g, layering) {
        let cc2 = 0;
        for (let i = 1; i < layering.length; ++i) {
          cc2 += twoLayerCrossCount(g, layering[i - 1], layering[i]);
        }
        return cc2;
      }
      function twoLayerCrossCount(g, northLayer, southLayer) {
        let southPos = zipObject(southLayer, southLayer.map((v, i) => i));
        let southEntries = northLayer.flatMap((v) => {
          return g.outEdges(v).map((e) => {
            return { pos: southPos[e.w], weight: g.edge(e).weight };
          }).sort((a, b) => a.pos - b.pos);
        });
        let firstIndex = 1;
        while (firstIndex < southLayer.length) firstIndex <<= 1;
        let treeSize = 2 * firstIndex - 1;
        firstIndex -= 1;
        let tree = new Array(treeSize).fill(0);
        let cc2 = 0;
        southEntries.forEach((entry) => {
          let index2 = entry.pos + firstIndex;
          tree[index2] += entry.weight;
          let weightSum = 0;
          while (index2 > 0) {
            if (index2 % 2) {
              weightSum += tree[index2 + 1];
            }
            index2 = index2 - 1 >> 1;
            tree[index2] += entry.weight;
          }
          cc2 += entry.weight * weightSum;
        });
        return cc2;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/order/barycenter.js
  var require_barycenter = __commonJS({
    "node_modules/@dagrejs/dagre/lib/order/barycenter.js"(exports, module) {
      module.exports = barycenter;
      function barycenter(g, movable = []) {
        return movable.map((v) => {
          let inV = g.inEdges(v);
          if (!inV.length) {
            return { v };
          } else {
            let result = inV.reduce((acc, e) => {
              let edge = g.edge(e), nodeU = g.node(e.v);
              return {
                sum: acc.sum + edge.weight * nodeU.order,
                weight: acc.weight + edge.weight
              };
            }, { sum: 0, weight: 0 });
            return {
              v,
              barycenter: result.sum / result.weight,
              weight: result.weight
            };
          }
        });
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/order/resolve-conflicts.js
  var require_resolve_conflicts = __commonJS({
    "node_modules/@dagrejs/dagre/lib/order/resolve-conflicts.js"(exports, module) {
      "use strict";
      var util = require_util();
      module.exports = resolveConflicts;
      function resolveConflicts(entries, cg) {
        let mappedEntries = {};
        entries.forEach((entry, i) => {
          let tmp = mappedEntries[entry.v] = {
            indegree: 0,
            "in": [],
            out: [],
            vs: [entry.v],
            i
          };
          if (entry.barycenter !== void 0) {
            tmp.barycenter = entry.barycenter;
            tmp.weight = entry.weight;
          }
        });
        cg.edges().forEach((e) => {
          let entryV = mappedEntries[e.v];
          let entryW = mappedEntries[e.w];
          if (entryV !== void 0 && entryW !== void 0) {
            entryW.indegree++;
            entryV.out.push(mappedEntries[e.w]);
          }
        });
        let sourceSet = Object.values(mappedEntries).filter((entry) => !entry.indegree);
        return doResolveConflicts(sourceSet);
      }
      function doResolveConflicts(sourceSet) {
        let entries = [];
        function handleIn(vEntry) {
          return (uEntry) => {
            if (uEntry.merged) {
              return;
            }
            if (uEntry.barycenter === void 0 || vEntry.barycenter === void 0 || uEntry.barycenter >= vEntry.barycenter) {
              mergeEntries(vEntry, uEntry);
            }
          };
        }
        function handleOut(vEntry) {
          return (wEntry) => {
            wEntry["in"].push(vEntry);
            if (--wEntry.indegree === 0) {
              sourceSet.push(wEntry);
            }
          };
        }
        while (sourceSet.length) {
          let entry = sourceSet.pop();
          entries.push(entry);
          entry["in"].reverse().forEach(handleIn(entry));
          entry.out.forEach(handleOut(entry));
        }
        return entries.filter((entry) => !entry.merged).map((entry) => {
          return util.pick(entry, ["vs", "i", "barycenter", "weight"]);
        });
      }
      function mergeEntries(target, source) {
        let sum = 0;
        let weight = 0;
        if (target.weight) {
          sum += target.barycenter * target.weight;
          weight += target.weight;
        }
        if (source.weight) {
          sum += source.barycenter * source.weight;
          weight += source.weight;
        }
        target.vs = source.vs.concat(target.vs);
        target.barycenter = sum / weight;
        target.weight = weight;
        target.i = Math.min(source.i, target.i);
        source.merged = true;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/order/sort.js
  var require_sort = __commonJS({
    "node_modules/@dagrejs/dagre/lib/order/sort.js"(exports, module) {
      var util = require_util();
      module.exports = sort;
      function sort(entries, biasRight) {
        let parts = util.partition(entries, (entry) => {
          return Object.hasOwn(entry, "barycenter");
        });
        let sortable = parts.lhs, unsortable = parts.rhs.sort((a, b) => b.i - a.i), vs = [], sum = 0, weight = 0, vsIndex = 0;
        sortable.sort(compareWithBias(!!biasRight));
        vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
        sortable.forEach((entry) => {
          vsIndex += entry.vs.length;
          vs.push(entry.vs);
          sum += entry.barycenter * entry.weight;
          weight += entry.weight;
          vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
        });
        let result = { vs: vs.flat(true) };
        if (weight) {
          result.barycenter = sum / weight;
          result.weight = weight;
        }
        return result;
      }
      function consumeUnsortable(vs, unsortable, index2) {
        let last;
        while (unsortable.length && (last = unsortable[unsortable.length - 1]).i <= index2) {
          unsortable.pop();
          vs.push(last.vs);
          index2++;
        }
        return index2;
      }
      function compareWithBias(bias) {
        return (entryV, entryW) => {
          if (entryV.barycenter < entryW.barycenter) {
            return -1;
          } else if (entryV.barycenter > entryW.barycenter) {
            return 1;
          }
          return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
        };
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/order/sort-subgraph.js
  var require_sort_subgraph = __commonJS({
    "node_modules/@dagrejs/dagre/lib/order/sort-subgraph.js"(exports, module) {
      var barycenter = require_barycenter();
      var resolveConflicts = require_resolve_conflicts();
      var sort = require_sort();
      module.exports = sortSubgraph;
      function sortSubgraph(g, v, cg, biasRight) {
        let movable = g.children(v);
        let node = g.node(v);
        let bl = node ? node.borderLeft : void 0;
        let br = node ? node.borderRight : void 0;
        let subgraphs = {};
        if (bl) {
          movable = movable.filter((w) => w !== bl && w !== br);
        }
        let barycenters = barycenter(g, movable);
        barycenters.forEach((entry) => {
          if (g.children(entry.v).length) {
            let subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
            subgraphs[entry.v] = subgraphResult;
            if (Object.hasOwn(subgraphResult, "barycenter")) {
              mergeBarycenters(entry, subgraphResult);
            }
          }
        });
        let entries = resolveConflicts(barycenters, cg);
        expandSubgraphs(entries, subgraphs);
        let result = sort(entries, biasRight);
        if (bl) {
          result.vs = [bl, result.vs, br].flat(true);
          if (g.predecessors(bl).length) {
            let blPred = g.node(g.predecessors(bl)[0]), brPred = g.node(g.predecessors(br)[0]);
            if (!Object.hasOwn(result, "barycenter")) {
              result.barycenter = 0;
              result.weight = 0;
            }
            result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
            result.weight += 2;
          }
        }
        return result;
      }
      function expandSubgraphs(entries, subgraphs) {
        entries.forEach((entry) => {
          entry.vs = entry.vs.flatMap((v) => {
            if (subgraphs[v]) {
              return subgraphs[v].vs;
            }
            return v;
          });
        });
      }
      function mergeBarycenters(target, other) {
        if (target.barycenter !== void 0) {
          target.barycenter = (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
          target.weight += other.weight;
        } else {
          target.barycenter = other.barycenter;
          target.weight = other.weight;
        }
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/order/build-layer-graph.js
  var require_build_layer_graph = __commonJS({
    "node_modules/@dagrejs/dagre/lib/order/build-layer-graph.js"(exports, module) {
      var Graph = require_graphlib().Graph;
      var util = require_util();
      module.exports = buildLayerGraph;
      function buildLayerGraph(g, rank, relationship, nodesWithRank) {
        if (!nodesWithRank) {
          nodesWithRank = g.nodes();
        }
        let root2 = createRootNode(g), result = new Graph({ compound: true }).setGraph({ root: root2 }).setDefaultNodeLabel((v) => g.node(v));
        nodesWithRank.forEach((v) => {
          let node = g.node(v), parent = g.parent(v);
          if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
            result.setNode(v);
            result.setParent(v, parent || root2);
            g[relationship](v).forEach((e) => {
              let u = e.v === v ? e.w : e.v, edge = result.edge(u, v), weight = edge !== void 0 ? edge.weight : 0;
              result.setEdge(u, v, { weight: g.edge(e).weight + weight });
            });
            if (Object.hasOwn(node, "minRank")) {
              result.setNode(v, {
                borderLeft: node.borderLeft[rank],
                borderRight: node.borderRight[rank]
              });
            }
          }
        });
        return result;
      }
      function createRootNode(g) {
        var v;
        while (g.hasNode(v = util.uniqueId("_root"))) ;
        return v;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/order/add-subgraph-constraints.js
  var require_add_subgraph_constraints = __commonJS({
    "node_modules/@dagrejs/dagre/lib/order/add-subgraph-constraints.js"(exports, module) {
      module.exports = addSubgraphConstraints;
      function addSubgraphConstraints(g, cg, vs) {
        let prev = {}, rootPrev;
        vs.forEach((v) => {
          let child = g.parent(v), parent, prevChild;
          while (child) {
            parent = g.parent(child);
            if (parent) {
              prevChild = prev[parent];
              prev[parent] = child;
            } else {
              prevChild = rootPrev;
              rootPrev = child;
            }
            if (prevChild && prevChild !== child) {
              cg.setEdge(prevChild, child);
              return;
            }
            child = parent;
          }
        });
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/order/index.js
  var require_order = __commonJS({
    "node_modules/@dagrejs/dagre/lib/order/index.js"(exports, module) {
      "use strict";
      var initOrder = require_init_order();
      var crossCount = require_cross_count();
      var sortSubgraph = require_sort_subgraph();
      var buildLayerGraph = require_build_layer_graph();
      var addSubgraphConstraints = require_add_subgraph_constraints();
      var Graph = require_graphlib().Graph;
      var util = require_util();
      module.exports = order;
      function order(g, opts) {
        if (opts && typeof opts.customOrder === "function") {
          opts.customOrder(g, order);
          return;
        }
        let maxRank = util.maxRank(g), downLayerGraphs = buildLayerGraphs(g, util.range(1, maxRank + 1), "inEdges"), upLayerGraphs = buildLayerGraphs(g, util.range(maxRank - 1, -1, -1), "outEdges");
        let layering = initOrder(g);
        assignOrder(g, layering);
        if (opts && opts.disableOptimalOrderHeuristic) {
          return;
        }
        let bestCC = Number.POSITIVE_INFINITY, best;
        for (let i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
          sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
          layering = util.buildLayerMatrix(g);
          let cc2 = crossCount(g, layering);
          if (cc2 < bestCC) {
            lastBest = 0;
            best = Object.assign({}, layering);
            bestCC = cc2;
          }
        }
        assignOrder(g, best);
      }
      function buildLayerGraphs(g, ranks, relationship) {
        const nodesByRank = /* @__PURE__ */ new Map();
        const addNodeToRank = (rank, node) => {
          if (!nodesByRank.has(rank)) {
            nodesByRank.set(rank, []);
          }
          nodesByRank.get(rank).push(node);
        };
        for (const v of g.nodes()) {
          const node = g.node(v);
          if (typeof node.rank === "number") {
            addNodeToRank(node.rank, v);
          }
          if (typeof node.minRank === "number" && typeof node.maxRank === "number") {
            for (let r = node.minRank; r <= node.maxRank; r++) {
              if (r !== node.rank) {
                addNodeToRank(r, v);
              }
            }
          }
        }
        return ranks.map(function(rank) {
          return buildLayerGraph(g, rank, relationship, nodesByRank.get(rank) || []);
        });
      }
      function sweepLayerGraphs(layerGraphs, biasRight) {
        let cg = new Graph();
        layerGraphs.forEach(function(lg) {
          let root2 = lg.graph().root;
          let sorted = sortSubgraph(lg, root2, cg, biasRight);
          sorted.vs.forEach((v, i) => lg.node(v).order = i);
          addSubgraphConstraints(lg, cg, sorted.vs);
        });
      }
      function assignOrder(g, layering) {
        Object.values(layering).forEach((layer) => layer.forEach((v, i) => g.node(v).order = i));
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/position/bk.js
  var require_bk = __commonJS({
    "node_modules/@dagrejs/dagre/lib/position/bk.js"(exports, module) {
      "use strict";
      var Graph = require_graphlib().Graph;
      var util = require_util();
      module.exports = {
        positionX,
        findType1Conflicts,
        findType2Conflicts,
        addConflict,
        hasConflict,
        verticalAlignment,
        horizontalCompaction,
        alignCoordinates,
        findSmallestWidthAlignment,
        balance
      };
      function findType1Conflicts(g, layering) {
        let conflicts = {};
        function visitLayer(prevLayer, layer) {
          let k0 = 0, scanPos = 0, prevLayerLength = prevLayer.length, lastNode = layer[layer.length - 1];
          layer.forEach((v, i) => {
            let w = findOtherInnerSegmentNode(g, v), k1 = w ? g.node(w).order : prevLayerLength;
            if (w || v === lastNode) {
              layer.slice(scanPos, i + 1).forEach((scanNode) => {
                g.predecessors(scanNode).forEach((u) => {
                  let uLabel = g.node(u), uPos = uLabel.order;
                  if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) {
                    addConflict(conflicts, u, scanNode);
                  }
                });
              });
              scanPos = i + 1;
              k0 = k1;
            }
          });
          return layer;
        }
        layering.length && layering.reduce(visitLayer);
        return conflicts;
      }
      function findType2Conflicts(g, layering) {
        let conflicts = {};
        function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
          let v;
          util.range(southPos, southEnd).forEach((i) => {
            v = south[i];
            if (g.node(v).dummy) {
              g.predecessors(v).forEach((u) => {
                let uNode = g.node(u);
                if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
                  addConflict(conflicts, u, v);
                }
              });
            }
          });
        }
        function visitLayer(north, south) {
          let prevNorthPos = -1, nextNorthPos, southPos = 0;
          south.forEach((v, southLookahead) => {
            if (g.node(v).dummy === "border") {
              let predecessors = g.predecessors(v);
              if (predecessors.length) {
                nextNorthPos = g.node(predecessors[0]).order;
                scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
                southPos = southLookahead;
                prevNorthPos = nextNorthPos;
              }
            }
            scan(south, southPos, south.length, nextNorthPos, north.length);
          });
          return south;
        }
        layering.length && layering.reduce(visitLayer);
        return conflicts;
      }
      function findOtherInnerSegmentNode(g, v) {
        if (g.node(v).dummy) {
          return g.predecessors(v).find((u) => g.node(u).dummy);
        }
      }
      function addConflict(conflicts, v, w) {
        if (v > w) {
          let tmp = v;
          v = w;
          w = tmp;
        }
        let conflictsV = conflicts[v];
        if (!conflictsV) {
          conflicts[v] = conflictsV = {};
        }
        conflictsV[w] = true;
      }
      function hasConflict(conflicts, v, w) {
        if (v > w) {
          let tmp = v;
          v = w;
          w = tmp;
        }
        return !!conflicts[v] && Object.hasOwn(conflicts[v], w);
      }
      function verticalAlignment(g, layering, conflicts, neighborFn) {
        let root2 = {}, align = {}, pos = {};
        layering.forEach((layer) => {
          layer.forEach((v, order) => {
            root2[v] = v;
            align[v] = v;
            pos[v] = order;
          });
        });
        layering.forEach((layer) => {
          let prevIdx = -1;
          layer.forEach((v) => {
            let ws = neighborFn(v);
            if (ws.length) {
              ws = ws.sort((a, b) => pos[a] - pos[b]);
              let mp = (ws.length - 1) / 2;
              for (let i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
                let w = ws[i];
                if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
                  align[w] = v;
                  align[v] = root2[v] = root2[w];
                  prevIdx = pos[w];
                }
              }
            }
          });
        });
        return { root: root2, align };
      }
      function horizontalCompaction(g, layering, root2, align, reverseSep) {
        let xs = {}, blockG = buildBlockGraph(g, layering, root2, reverseSep), borderType = reverseSep ? "borderLeft" : "borderRight";
        function iterate(setXsFunc, nextNodesFunc) {
          let stack = blockG.nodes();
          let elem = stack.pop();
          let visited = {};
          while (elem) {
            if (visited[elem]) {
              setXsFunc(elem);
            } else {
              visited[elem] = true;
              stack.push(elem);
              stack = stack.concat(nextNodesFunc(elem));
            }
            elem = stack.pop();
          }
        }
        function pass1(elem) {
          xs[elem] = blockG.inEdges(elem).reduce((acc, e) => {
            return Math.max(acc, xs[e.v] + blockG.edge(e));
          }, 0);
        }
        function pass2(elem) {
          let min = blockG.outEdges(elem).reduce((acc, e) => {
            return Math.min(acc, xs[e.w] - blockG.edge(e));
          }, Number.POSITIVE_INFINITY);
          let node = g.node(elem);
          if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
            xs[elem] = Math.max(xs[elem], min);
          }
        }
        iterate(pass1, blockG.predecessors.bind(blockG));
        iterate(pass2, blockG.successors.bind(blockG));
        Object.keys(align).forEach((v) => xs[v] = xs[root2[v]]);
        return xs;
      }
      function buildBlockGraph(g, layering, root2, reverseSep) {
        let blockGraph = new Graph(), graphLabel = g.graph(), sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);
        layering.forEach((layer) => {
          let u;
          layer.forEach((v) => {
            let vRoot = root2[v];
            blockGraph.setNode(vRoot);
            if (u) {
              var uRoot = root2[u], prevMax = blockGraph.edge(uRoot, vRoot);
              blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
            }
            u = v;
          });
        });
        return blockGraph;
      }
      function findSmallestWidthAlignment(g, xss) {
        return Object.values(xss).reduce((currentMinAndXs, xs) => {
          let max = Number.NEGATIVE_INFINITY;
          let min = Number.POSITIVE_INFINITY;
          Object.entries(xs).forEach(([v, x]) => {
            let halfWidth = width(g, v) / 2;
            max = Math.max(x + halfWidth, max);
            min = Math.min(x - halfWidth, min);
          });
          const newMin = max - min;
          if (newMin < currentMinAndXs[0]) {
            currentMinAndXs = [newMin, xs];
          }
          return currentMinAndXs;
        }, [Number.POSITIVE_INFINITY, null])[1];
      }
      function alignCoordinates(xss, alignTo) {
        let alignToVals = Object.values(alignTo), alignToMin = util.applyWithChunking(Math.min, alignToVals), alignToMax = util.applyWithChunking(Math.max, alignToVals);
        ["u", "d"].forEach((vert) => {
          ["l", "r"].forEach((horiz) => {
            let alignment = vert + horiz, xs = xss[alignment];
            if (xs === alignTo) return;
            let xsVals = Object.values(xs);
            let delta = alignToMin - util.applyWithChunking(Math.min, xsVals);
            if (horiz !== "l") {
              delta = alignToMax - util.applyWithChunking(Math.max, xsVals);
            }
            if (delta) {
              xss[alignment] = util.mapValues(xs, (x) => x + delta);
            }
          });
        });
      }
      function balance(xss, align) {
        return util.mapValues(xss.ul, (num, v) => {
          if (align) {
            return xss[align.toLowerCase()][v];
          } else {
            let xs = Object.values(xss).map((xs2) => xs2[v]).sort((a, b) => a - b);
            return (xs[1] + xs[2]) / 2;
          }
        });
      }
      function positionX(g) {
        let layering = util.buildLayerMatrix(g);
        let conflicts = Object.assign(
          findType1Conflicts(g, layering),
          findType2Conflicts(g, layering)
        );
        let xss = {};
        let adjustedLayering;
        ["u", "d"].forEach((vert) => {
          adjustedLayering = vert === "u" ? layering : Object.values(layering).reverse();
          ["l", "r"].forEach((horiz) => {
            if (horiz === "r") {
              adjustedLayering = adjustedLayering.map((inner) => {
                return Object.values(inner).reverse();
              });
            }
            let neighborFn = (vert === "u" ? g.predecessors : g.successors).bind(g);
            let align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
            let xs = horizontalCompaction(
              g,
              adjustedLayering,
              align.root,
              align.align,
              horiz === "r"
            );
            if (horiz === "r") {
              xs = util.mapValues(xs, (x) => -x);
            }
            xss[vert + horiz] = xs;
          });
        });
        let smallestWidth = findSmallestWidthAlignment(g, xss);
        alignCoordinates(xss, smallestWidth);
        return balance(xss, g.graph().align);
      }
      function sep(nodeSep, edgeSep, reverseSep) {
        return (g, v, w) => {
          let vLabel = g.node(v);
          let wLabel = g.node(w);
          let sum = 0;
          let delta;
          sum += vLabel.width / 2;
          if (Object.hasOwn(vLabel, "labelpos")) {
            switch (vLabel.labelpos.toLowerCase()) {
              case "l":
                delta = -vLabel.width / 2;
                break;
              case "r":
                delta = vLabel.width / 2;
                break;
            }
          }
          if (delta) {
            sum += reverseSep ? delta : -delta;
          }
          delta = 0;
          sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
          sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
          sum += wLabel.width / 2;
          if (Object.hasOwn(wLabel, "labelpos")) {
            switch (wLabel.labelpos.toLowerCase()) {
              case "l":
                delta = wLabel.width / 2;
                break;
              case "r":
                delta = -wLabel.width / 2;
                break;
            }
          }
          if (delta) {
            sum += reverseSep ? delta : -delta;
          }
          delta = 0;
          return sum;
        };
      }
      function width(g, v) {
        return g.node(v).width;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/position/index.js
  var require_position = __commonJS({
    "node_modules/@dagrejs/dagre/lib/position/index.js"(exports, module) {
      "use strict";
      var util = require_util();
      var positionX = require_bk().positionX;
      module.exports = position;
      function position(g) {
        g = util.asNonCompoundGraph(g);
        positionY(g);
        Object.entries(positionX(g)).forEach(([v, x]) => g.node(v).x = x);
      }
      function positionY(g) {
        let layering = util.buildLayerMatrix(g);
        let rankSep = g.graph().ranksep;
        let prevY = 0;
        layering.forEach((layer) => {
          const maxHeight = layer.reduce((acc, v) => {
            const height = g.node(v).height;
            if (acc > height) {
              return acc;
            } else {
              return height;
            }
          }, 0);
          layer.forEach((v) => g.node(v).y = prevY + maxHeight / 2);
          prevY += maxHeight + rankSep;
        });
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/layout.js
  var require_layout = __commonJS({
    "node_modules/@dagrejs/dagre/lib/layout.js"(exports, module) {
      "use strict";
      var acyclic = require_acyclic();
      var normalize = require_normalize();
      var rank = require_rank();
      var normalizeRanks = require_util().normalizeRanks;
      var parentDummyChains = require_parent_dummy_chains();
      var removeEmptyRanks = require_util().removeEmptyRanks;
      var nestingGraph = require_nesting_graph();
      var addBorderSegments = require_add_border_segments();
      var coordinateSystem = require_coordinate_system();
      var order = require_order();
      var position = require_position();
      var util = require_util();
      var Graph = require_graphlib().Graph;
      module.exports = layout2;
      function layout2(g, opts) {
        let time = opts && opts.debugTiming ? util.time : util.notime;
        time("layout", () => {
          let layoutGraph = time("  buildLayoutGraph", () => buildLayoutGraph(g));
          time("  runLayout", () => runLayout(layoutGraph, time, opts));
          time("  updateInputGraph", () => updateInputGraph(g, layoutGraph));
        });
      }
      function runLayout(g, time, opts) {
        time("    makeSpaceForEdgeLabels", () => makeSpaceForEdgeLabels(g));
        time("    removeSelfEdges", () => removeSelfEdges(g));
        time("    acyclic", () => acyclic.run(g));
        time("    nestingGraph.run", () => nestingGraph.run(g));
        time("    rank", () => rank(util.asNonCompoundGraph(g)));
        time("    injectEdgeLabelProxies", () => injectEdgeLabelProxies(g));
        time("    removeEmptyRanks", () => removeEmptyRanks(g));
        time("    nestingGraph.cleanup", () => nestingGraph.cleanup(g));
        time("    normalizeRanks", () => normalizeRanks(g));
        time("    assignRankMinMax", () => assignRankMinMax(g));
        time("    removeEdgeLabelProxies", () => removeEdgeLabelProxies(g));
        time("    normalize.run", () => normalize.run(g));
        time("    parentDummyChains", () => parentDummyChains(g));
        time("    addBorderSegments", () => addBorderSegments(g));
        time("    order", () => order(g, opts));
        time("    insertSelfEdges", () => insertSelfEdges(g));
        time("    adjustCoordinateSystem", () => coordinateSystem.adjust(g));
        time("    position", () => position(g));
        time("    positionSelfEdges", () => positionSelfEdges(g));
        time("    removeBorderNodes", () => removeBorderNodes(g));
        time("    normalize.undo", () => normalize.undo(g));
        time("    fixupEdgeLabelCoords", () => fixupEdgeLabelCoords(g));
        time("    undoCoordinateSystem", () => coordinateSystem.undo(g));
        time("    translateGraph", () => translateGraph(g));
        time("    assignNodeIntersects", () => assignNodeIntersects(g));
        time("    reversePoints", () => reversePointsForReversedEdges(g));
        time("    acyclic.undo", () => acyclic.undo(g));
      }
      function updateInputGraph(inputGraph, layoutGraph) {
        inputGraph.nodes().forEach((v) => {
          let inputLabel = inputGraph.node(v);
          let layoutLabel = layoutGraph.node(v);
          if (inputLabel) {
            inputLabel.x = layoutLabel.x;
            inputLabel.y = layoutLabel.y;
            inputLabel.rank = layoutLabel.rank;
            if (layoutGraph.children(v).length) {
              inputLabel.width = layoutLabel.width;
              inputLabel.height = layoutLabel.height;
            }
          }
        });
        inputGraph.edges().forEach((e) => {
          let inputLabel = inputGraph.edge(e);
          let layoutLabel = layoutGraph.edge(e);
          inputLabel.points = layoutLabel.points;
          if (Object.hasOwn(layoutLabel, "x")) {
            inputLabel.x = layoutLabel.x;
            inputLabel.y = layoutLabel.y;
          }
        });
        inputGraph.graph().width = layoutGraph.graph().width;
        inputGraph.graph().height = layoutGraph.graph().height;
      }
      var graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
      var graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" };
      var graphAttrs = ["acyclicer", "ranker", "rankdir", "align"];
      var nodeNumAttrs = ["width", "height", "rank"];
      var nodeDefaults = { width: 0, height: 0 };
      var edgeNumAttrs = ["minlen", "weight", "width", "height", "labeloffset"];
      var edgeDefaults = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      };
      var edgeAttrs = ["labelpos"];
      function buildLayoutGraph(inputGraph) {
        let g = new Graph({ multigraph: true, compound: true });
        let graph = canonicalize(inputGraph.graph());
        g.setGraph(Object.assign(
          {},
          graphDefaults,
          selectNumberAttrs(graph, graphNumAttrs),
          util.pick(graph, graphAttrs)
        ));
        inputGraph.nodes().forEach((v) => {
          let node = canonicalize(inputGraph.node(v));
          const newNode = selectNumberAttrs(node, nodeNumAttrs);
          Object.keys(nodeDefaults).forEach((k) => {
            if (newNode[k] === void 0) {
              newNode[k] = nodeDefaults[k];
            }
          });
          g.setNode(v, newNode);
          g.setParent(v, inputGraph.parent(v));
        });
        inputGraph.edges().forEach((e) => {
          let edge = canonicalize(inputGraph.edge(e));
          g.setEdge(e, Object.assign(
            {},
            edgeDefaults,
            selectNumberAttrs(edge, edgeNumAttrs),
            util.pick(edge, edgeAttrs)
          ));
        });
        return g;
      }
      function makeSpaceForEdgeLabels(g) {
        let graph = g.graph();
        graph.ranksep /= 2;
        g.edges().forEach((e) => {
          let edge = g.edge(e);
          edge.minlen *= 2;
          if (edge.labelpos.toLowerCase() !== "c") {
            if (graph.rankdir === "TB" || graph.rankdir === "BT") {
              edge.width += edge.labeloffset;
            } else {
              edge.height += edge.labeloffset;
            }
          }
        });
      }
      function injectEdgeLabelProxies(g) {
        g.edges().forEach((e) => {
          let edge = g.edge(e);
          if (edge.width && edge.height) {
            let v = g.node(e.v);
            let w = g.node(e.w);
            let label = { rank: (w.rank - v.rank) / 2 + v.rank, e };
            util.addDummyNode(g, "edge-proxy", label, "_ep");
          }
        });
      }
      function assignRankMinMax(g) {
        let maxRank = 0;
        g.nodes().forEach((v) => {
          let node = g.node(v);
          if (node.borderTop) {
            node.minRank = g.node(node.borderTop).rank;
            node.maxRank = g.node(node.borderBottom).rank;
            maxRank = Math.max(maxRank, node.maxRank);
          }
        });
        g.graph().maxRank = maxRank;
      }
      function removeEdgeLabelProxies(g) {
        g.nodes().forEach((v) => {
          let node = g.node(v);
          if (node.dummy === "edge-proxy") {
            g.edge(node.e).labelRank = node.rank;
            g.removeNode(v);
          }
        });
      }
      function translateGraph(g) {
        let minX = Number.POSITIVE_INFINITY;
        let maxX = 0;
        let minY = Number.POSITIVE_INFINITY;
        let maxY = 0;
        let graphLabel = g.graph();
        let marginX = graphLabel.marginx || 0;
        let marginY = graphLabel.marginy || 0;
        function getExtremes(attrs) {
          let x = attrs.x;
          let y = attrs.y;
          let w = attrs.width;
          let h = attrs.height;
          minX = Math.min(minX, x - w / 2);
          maxX = Math.max(maxX, x + w / 2);
          minY = Math.min(minY, y - h / 2);
          maxY = Math.max(maxY, y + h / 2);
        }
        g.nodes().forEach((v) => getExtremes(g.node(v)));
        g.edges().forEach((e) => {
          let edge = g.edge(e);
          if (Object.hasOwn(edge, "x")) {
            getExtremes(edge);
          }
        });
        minX -= marginX;
        minY -= marginY;
        g.nodes().forEach((v) => {
          let node = g.node(v);
          node.x -= minX;
          node.y -= minY;
        });
        g.edges().forEach((e) => {
          let edge = g.edge(e);
          edge.points.forEach((p) => {
            p.x -= minX;
            p.y -= minY;
          });
          if (Object.hasOwn(edge, "x")) {
            edge.x -= minX;
          }
          if (Object.hasOwn(edge, "y")) {
            edge.y -= minY;
          }
        });
        graphLabel.width = maxX - minX + marginX;
        graphLabel.height = maxY - minY + marginY;
      }
      function assignNodeIntersects(g) {
        g.edges().forEach((e) => {
          let edge = g.edge(e);
          let nodeV = g.node(e.v);
          let nodeW = g.node(e.w);
          let p1, p2;
          if (!edge.points) {
            edge.points = [];
            p1 = nodeW;
            p2 = nodeV;
          } else {
            p1 = edge.points[0];
            p2 = edge.points[edge.points.length - 1];
          }
          edge.points.unshift(util.intersectRect(nodeV, p1));
          edge.points.push(util.intersectRect(nodeW, p2));
        });
      }
      function fixupEdgeLabelCoords(g) {
        g.edges().forEach((e) => {
          let edge = g.edge(e);
          if (Object.hasOwn(edge, "x")) {
            if (edge.labelpos === "l" || edge.labelpos === "r") {
              edge.width -= edge.labeloffset;
            }
            switch (edge.labelpos) {
              case "l":
                edge.x -= edge.width / 2 + edge.labeloffset;
                break;
              case "r":
                edge.x += edge.width / 2 + edge.labeloffset;
                break;
            }
          }
        });
      }
      function reversePointsForReversedEdges(g) {
        g.edges().forEach((e) => {
          let edge = g.edge(e);
          if (edge.reversed) {
            edge.points.reverse();
          }
        });
      }
      function removeBorderNodes(g) {
        g.nodes().forEach((v) => {
          if (g.children(v).length) {
            let node = g.node(v);
            let t2 = g.node(node.borderTop);
            let b = g.node(node.borderBottom);
            let l = g.node(node.borderLeft[node.borderLeft.length - 1]);
            let r = g.node(node.borderRight[node.borderRight.length - 1]);
            node.width = Math.abs(r.x - l.x);
            node.height = Math.abs(b.y - t2.y);
            node.x = l.x + node.width / 2;
            node.y = t2.y + node.height / 2;
          }
        });
        g.nodes().forEach((v) => {
          if (g.node(v).dummy === "border") {
            g.removeNode(v);
          }
        });
      }
      function removeSelfEdges(g) {
        g.edges().forEach((e) => {
          if (e.v === e.w) {
            var node = g.node(e.v);
            if (!node.selfEdges) {
              node.selfEdges = [];
            }
            node.selfEdges.push({ e, label: g.edge(e) });
            g.removeEdge(e);
          }
        });
      }
      function insertSelfEdges(g) {
        var layers = util.buildLayerMatrix(g);
        layers.forEach((layer) => {
          var orderShift = 0;
          layer.forEach((v, i) => {
            var node = g.node(v);
            node.order = i + orderShift;
            (node.selfEdges || []).forEach((selfEdge) => {
              util.addDummyNode(g, "selfedge", {
                width: selfEdge.label.width,
                height: selfEdge.label.height,
                rank: node.rank,
                order: i + ++orderShift,
                e: selfEdge.e,
                label: selfEdge.label
              }, "_se");
            });
            delete node.selfEdges;
          });
        });
      }
      function positionSelfEdges(g) {
        g.nodes().forEach((v) => {
          var node = g.node(v);
          if (node.dummy === "selfedge") {
            var selfNode = g.node(node.e.v);
            var x = selfNode.x + selfNode.width / 2;
            var y = selfNode.y;
            var dx = node.x - x;
            var dy = selfNode.height / 2;
            g.setEdge(node.e, node.label);
            g.removeNode(v);
            node.label.points = [
              { x: x + 2 * dx / 3, y: y - dy },
              { x: x + 5 * dx / 6, y: y - dy },
              { x: x + dx, y },
              { x: x + 5 * dx / 6, y: y + dy },
              { x: x + 2 * dx / 3, y: y + dy }
            ];
            node.label.x = node.x;
            node.label.y = node.y;
          }
        });
      }
      function selectNumberAttrs(obj, attrs) {
        return util.mapValues(util.pick(obj, attrs), Number);
      }
      function canonicalize(attrs) {
        var newAttrs = {};
        if (attrs) {
          Object.entries(attrs).forEach(([k, v]) => {
            if (typeof k === "string") {
              k = k.toLowerCase();
            }
            newAttrs[k] = v;
          });
        }
        return newAttrs;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/debug.js
  var require_debug = __commonJS({
    "node_modules/@dagrejs/dagre/lib/debug.js"(exports, module) {
      var util = require_util();
      var Graph = require_graphlib().Graph;
      module.exports = {
        debugOrdering
      };
      function debugOrdering(g) {
        let layerMatrix = util.buildLayerMatrix(g);
        let h = new Graph({ compound: true, multigraph: true }).setGraph({});
        g.nodes().forEach((v) => {
          h.setNode(v, { label: v });
          h.setParent(v, "layer" + g.node(v).rank);
        });
        g.edges().forEach((e) => h.setEdge(e.v, e.w, {}, e.name));
        layerMatrix.forEach((layer, i) => {
          let layerV = "layer" + i;
          h.setNode(layerV, { rank: "same" });
          layer.reduce((u, v) => {
            h.setEdge(u, v, { style: "invis" });
            return v;
          });
        });
        return h;
      }
    }
  });

  // node_modules/@dagrejs/dagre/lib/version.js
  var require_version2 = __commonJS({
    "node_modules/@dagrejs/dagre/lib/version.js"(exports, module) {
      module.exports = "1.1.8";
    }
  });

  // node_modules/@dagrejs/dagre/index.js
  var require_dagre = __commonJS({
    "node_modules/@dagrejs/dagre/index.js"(exports, module) {
      module.exports = {
        graphlib: require_graphlib(),
        layout: require_layout(),
        debug: require_debug(),
        util: {
          time: require_util().time,
          notime: require_util().notime
        },
        version: require_version2()
      };
    }
  });

  // preview/main.tsx
  var import_react6 = __toESM(require_react(), 1);
  var import_client = __toESM(require_client(), 1);

  // src/client/GitChatView.tsx
  var import_react4 = __toESM(require_react(), 1);
  var import_react_dom3 = __toESM(require_react_dom(), 1);

  // node_modules/@xyflow/react/dist/esm/index.js
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var import_react2 = __toESM(require_react());

  // node_modules/classcat/index.js
  function cc(names) {
    if (typeof names === "string" || typeof names === "number") return "" + names;
    let out = "";
    if (Array.isArray(names)) {
      for (let i = 0, tmp; i < names.length; i++) {
        if ((tmp = cc(names[i])) !== "") {
          out += (out && " ") + tmp;
        }
      }
    } else {
      for (let k in names) {
        if (names[k]) out += (out && " ") + k;
      }
    }
    return out;
  }

  // node_modules/d3-dispatch/src/dispatch.js
  var noop = { value: () => {
  } };
  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t2; i < n; ++i) {
      if (!(t2 = arguments[i] + "") || t2 in _ || /[\s.]/.test(t2)) throw new Error("illegal type: " + t2);
      _[t2] = [];
    }
    return new Dispatch(_);
  }
  function Dispatch(_) {
    this._ = _;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t2) {
      var name = "", i = t2.indexOf(".");
      if (i >= 0) name = t2.slice(i + 1), t2 = t2.slice(0, i);
      if (t2 && !types.hasOwnProperty(t2)) throw new Error("unknown type: " + t2);
      return { type: t2, name };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._, T = parseTypenames(typename + "", _), t2, i = -1, n = T.length;
      if (arguments.length < 2) {
        while (++i < n) if ((t2 = (typename = T[i]).type) && (t2 = get(_[t2], typename.name))) return t2;
        return;
      }
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t2 = (typename = T[i]).type) _[t2] = set(_[t2], typename.name, callback);
        else if (callback == null) for (t2 in _) _[t2] = set(_[t2], typename.name, null);
      }
      return this;
    },
    copy: function() {
      var copy = {}, _ = this._;
      for (var t2 in _) copy[t2] = _[t2].slice();
      return new Dispatch(copy);
    },
    call: function(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t2; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t2 = this._[type], i = 0, n = t2.length; i < n; ++i) t2[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t2 = this._[type], i = 0, n = t2.length; i < n; ++i) t2[i].value.apply(that, args);
    }
  };
  function get(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }
  function set(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null) type.push({ name, value: callback });
    return type;
  }
  var dispatch_default = dispatch;

  // node_modules/d3-selection/src/namespaces.js
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces_default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  // node_modules/d3-selection/src/namespace.js
  function namespace_default(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
  }

  // node_modules/d3-selection/src/creator.js
  function creatorInherit(name) {
    return function() {
      var document2 = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator_default(name) {
    var fullname = namespace_default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  // node_modules/d3-selection/src/selector.js
  function none() {
  }
  function selector_default(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  // node_modules/d3-selection/src/selection/select.js
  function select_default(select) {
    if (typeof select !== "function") select = selector_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/array.js
  function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
  }

  // node_modules/d3-selection/src/selectorAll.js
  function empty() {
    return [];
  }
  function selectorAll_default(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectAll.js
  function arrayAll(select) {
    return function() {
      return array(select.apply(this, arguments));
    };
  }
  function selectAll_default(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = selectorAll_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  }

  // node_modules/d3-selection/src/matcher.js
  function matcher_default(selector) {
    return function() {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectChild.js
  var find = Array.prototype.find;
  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selectChild_default(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  // node_modules/d3-selection/src/selection/selectChildren.js
  var filter = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function() {
      return filter.call(this.children, match);
    };
  }
  function selectChildren_default(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  // node_modules/d3-selection/src/selection/filter.js
  function filter_default(match) {
    if (typeof match !== "function") match = matcher_default(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/selection/sparse.js
  function sparse_default(update) {
    return new Array(update.length);
  }

  // node_modules/d3-selection/src/selection/enter.js
  function enter_default() {
    return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
  }
  function EnterNode(parent, datum2) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum2;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  // node_modules/d3-selection/src/constant.js
  function constant_default(x) {
    return function() {
      return x;
    };
  }

  // node_modules/d3-selection/src/selection/data.js
  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit[i] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function data_default(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = constant_default(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
          previous._next = next || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }
  function arraylike(data) {
    return typeof data === "object" && "length" in data ? data : Array.from(data);
  }

  // node_modules/d3-selection/src/selection/exit.js
  function exit_default() {
    return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
  }

  // node_modules/d3-selection/src/selection/join.js
  function join_default(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter) enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  // node_modules/d3-selection/src/selection/merge.js
  function merge_default(context) {
    var selection2 = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection(merges, this._parents);
  }

  // node_modules/d3-selection/src/selection/order.js
  function order_default() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/sort.js
  function sort_default(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  // node_modules/d3-selection/src/selection/call.js
  function call_default() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  // node_modules/d3-selection/src/selection/nodes.js
  function nodes_default() {
    return Array.from(this);
  }

  // node_modules/d3-selection/src/selection/node.js
  function node_default() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  }

  // node_modules/d3-selection/src/selection/size.js
  function size_default() {
    let size = 0;
    for (const node of this) ++size;
    return size;
  }

  // node_modules/d3-selection/src/selection/empty.js
  function empty_default() {
    return !this.node();
  }

  // node_modules/d3-selection/src/selection/each.js
  function each_default(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/attr.js
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);
      else this.setAttribute(name, v);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  function attr_default(name, value) {
    var fullname = namespace_default(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }

  // node_modules/d3-selection/src/window.js
  function window_default(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
  }

  // node_modules/d3-selection/src/selection/style.js
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v, priority);
    };
  }
  function style_default(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  // node_modules/d3-selection/src/selection/property.js
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];
      else this[name] = v;
    };
  }
  function property_default(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  // node_modules/d3-selection/src/selection/classed.js
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }
  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function classed_default(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  // node_modules/d3-selection/src/selection/text.js
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  function text_default(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }

  // node_modules/d3-selection/src/selection/html.js
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  function html_default(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  // node_modules/d3-selection/src/selection/raise.js
  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }
  function raise_default() {
    return this.each(raise);
  }

  // node_modules/d3-selection/src/selection/lower.js
  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function lower_default() {
    return this.each(lower);
  }

  // node_modules/d3-selection/src/selection/append.js
  function append_default(name) {
    var create2 = typeof name === "function" ? name : creator_default(name);
    return this.select(function() {
      return this.appendChild(create2.apply(this, arguments));
    });
  }

  // node_modules/d3-selection/src/selection/insert.js
  function constantNull() {
    return null;
  }
  function insert_default(name, before) {
    var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
    return this.select(function() {
      return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  // node_modules/d3-selection/src/selection/remove.js
  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  function remove_default() {
    return this.each(remove);
  }

  // node_modules/d3-selection/src/selection/clone.js
  function selection_cloneShallow() {
    var clone2 = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone2, this.nextSibling) : clone2;
  }
  function selection_cloneDeep() {
    var clone2 = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone2, this.nextSibling) : clone2;
  }
  function clone_default(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  // node_modules/d3-selection/src/selection/datum.js
  function datum_default(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  // node_modules/d3-selection/src/selection/on.js
  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames2(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t2) {
      var name = "", i = t2.indexOf(".");
      if (i >= 0) name = t2.slice(i + 1), t2 = t2.slice(0, i);
      return { type: t2, name };
    });
  }
  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;
      else delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o, listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = { type: typename.type, name: typename.name, value, listener, options };
      if (!on) this.__on = [o];
      else on.push(o);
    };
  }
  function on_default(typename, value, options) {
    var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t2;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t2 = typenames[i]).type === o.type && t2.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
    return this;
  }

  // node_modules/d3-selection/src/selection/dispatch.js
  function dispatchEvent(node, type, params) {
    var window2 = window_default(node), event = window2.CustomEvent;
    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window2.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type, params) {
    return function() {
      return dispatchEvent(this, type, params);
    };
  }
  function dispatchFunction(type, params) {
    return function() {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }
  function dispatch_default2(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
  }

  // node_modules/d3-selection/src/selection/iterator.js
  function* iterator_default() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) yield node;
      }
    }
  }

  // node_modules/d3-selection/src/selection/index.js
  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: select_default,
    selectAll: selectAll_default,
    selectChild: selectChild_default,
    selectChildren: selectChildren_default,
    filter: filter_default,
    data: data_default,
    enter: enter_default,
    exit: exit_default,
    join: join_default,
    merge: merge_default,
    selection: selection_selection,
    order: order_default,
    sort: sort_default,
    call: call_default,
    nodes: nodes_default,
    node: node_default,
    size: size_default,
    empty: empty_default,
    each: each_default,
    attr: attr_default,
    style: style_default,
    property: property_default,
    classed: classed_default,
    text: text_default,
    html: html_default,
    raise: raise_default,
    lower: lower_default,
    append: append_default,
    insert: insert_default,
    remove: remove_default,
    clone: clone_default,
    datum: datum_default,
    on: on_default,
    dispatch: dispatch_default2,
    [Symbol.iterator]: iterator_default
  };
  var selection_default = selection;

  // node_modules/d3-selection/src/select.js
  function select_default2(selector) {
    return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
  }

  // node_modules/d3-selection/src/sourceEvent.js
  function sourceEvent_default(event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent) event = sourceEvent;
    return event;
  }

  // node_modules/d3-selection/src/pointer.js
  function pointer_default(event, node) {
    event = sourceEvent_default(event);
    if (node === void 0) node = event.currentTarget;
    if (node) {
      var svg = node.ownerSVGElement || node;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = event.clientX, point.y = event.clientY;
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      if (node.getBoundingClientRect) {
        var rect = node.getBoundingClientRect();
        return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  }

  // node_modules/d3-drag/src/noevent.js
  var nonpassive = { passive: false };
  var nonpassivecapture = { capture: true, passive: false };
  function nopropagation(event) {
    event.stopImmediatePropagation();
  }
  function noevent_default(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-drag/src/nodrag.js
  function nodrag_default(view) {
    var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
    } else {
      root2.__noselect = root2.style.MozUserSelect;
      root2.style.MozUserSelect = "none";
    }
  }
  function yesdrag(view, noclick) {
    var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
    if (noclick) {
      selection2.on("click.drag", noevent_default, nonpassivecapture);
      setTimeout(function() {
        selection2.on("click.drag", null);
      }, 0);
    }
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", null);
    } else {
      root2.style.MozUserSelect = root2.__noselect;
      delete root2.__noselect;
    }
  }

  // node_modules/d3-drag/src/constant.js
  var constant_default2 = (x) => () => x;

  // node_modules/d3-drag/src/event.js
  function DragEvent(type, {
    sourceEvent,
    subject,
    target,
    identifier,
    active,
    x,
    y,
    dx,
    dy,
    dispatch: dispatch2
  }) {
    Object.defineProperties(this, {
      type: { value: type, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
      subject: { value: subject, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      identifier: { value: identifier, enumerable: true, configurable: true },
      active: { value: active, enumerable: true, configurable: true },
      x: { value: x, enumerable: true, configurable: true },
      y: { value: y, enumerable: true, configurable: true },
      dx: { value: dx, enumerable: true, configurable: true },
      dy: { value: dy, enumerable: true, configurable: true },
      _: { value: dispatch2 }
    });
  }
  DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };

  // node_modules/d3-drag/src/drag.js
  function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
  }
  function defaultContainer() {
    return this.parentNode;
  }
  function defaultSubject(event, d) {
    return d == null ? { x: event.x, y: event.y } : d;
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function drag_default() {
    var filter2 = defaultFilter, container2 = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag(selection2) {
      selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
      if (touchending || !filter2.call(this, event, d)) return;
      var gesture = beforestart(this, container2.call(this, event, d), event, d, "mouse");
      if (!gesture) return;
      select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
      nodrag_default(event.view);
      nopropagation(event);
      mousemoving = false;
      mousedownx = event.clientX;
      mousedowny = event.clientY;
      gesture("start", event);
    }
    function mousemoved(event) {
      noevent_default(event);
      if (!mousemoving) {
        var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag", event);
    }
    function mouseupped(event) {
      select_default2(event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(event.view, mousemoving);
      noevent_default(event);
      gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
      if (!filter2.call(this, event, d)) return;
      var touches = event.changedTouches, c = container2.call(this, event, d), n = touches.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
          nopropagation(event);
          gesture("start", event, touches[i]);
        }
      }
    }
    function touchmoved(event) {
      var touches = event.changedTouches, n = touches.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          noevent_default(event);
          gesture("drag", event, touches[i]);
        }
      }
    }
    function touchended(event) {
      var touches = event.changedTouches, n = touches.length, i, gesture;
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, 500);
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          nopropagation(event);
          gesture("end", event, touches[i]);
        }
      }
    }
    function beforestart(that, container3, event, d, identifier, touch) {
      var dispatch2 = listeners.copy(), p = pointer_default(touch || event, container3), dx, dy, s;
      if ((s = subject.call(that, new DragEvent("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch: dispatch2
      }), d)) == null) return;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return function gesture(type, event2, touch2) {
        var p0 = p, n;
        switch (type) {
          case "start":
            gestures[identifier] = gesture, n = active++;
            break;
          case "end":
            delete gestures[identifier], --active;
          // falls through
          case "drag":
            p = pointer_default(touch2 || event2, container3), n = active;
            break;
        }
        dispatch2.call(
          type,
          that,
          new DragEvent(type, {
            sourceEvent: event2,
            subject: s,
            target: drag,
            identifier,
            active: n,
            x: p[0] + dx,
            y: p[1] + dy,
            dx: p[0] - p0[0],
            dy: p[1] - p0[1],
            dispatch: dispatch2
          }),
          d
        );
      };
    }
    drag.filter = function(_) {
      return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default2(!!_), drag) : filter2;
    };
    drag.container = function(_) {
      return arguments.length ? (container2 = typeof _ === "function" ? _ : constant_default2(_), drag) : container2;
    };
    drag.subject = function(_) {
      return arguments.length ? (subject = typeof _ === "function" ? _ : constant_default2(_), drag) : subject;
    };
    drag.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default2(!!_), drag) : touchable;
    };
    drag.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag : value;
    };
    drag.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
  }

  // node_modules/d3-color/src/define.js
  function define_default(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  // node_modules/d3-color/src/color.js
  function Color() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex = /^#([0-9a-f]{3,8})$/;
  var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
  var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
  var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
  var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
  var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
  var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define_default(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
  }
  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define_default(Rgb, rgb, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }
  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }
  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl();
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }
  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  define_default(Hsl, hsl, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb() {
      var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
  }));
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }

  // node_modules/d3-interpolate/src/basis.js
  function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
  }
  function basis_default(values) {
    var n = values.length - 1;
    return function(t2) {
      var i = t2 <= 0 ? t2 = 0 : t2 >= 1 ? (t2 = 1, n - 1) : Math.floor(t2 * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
      return basis((t2 - i / n) * n, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/basisClosed.js
  function basisClosed_default(values) {
    var n = values.length;
    return function(t2) {
      var i = Math.floor(((t2 %= 1) < 0 ? ++t2 : t2) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
      return basis((t2 - i / n) * n, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/constant.js
  var constant_default3 = (x) => () => x;

  // node_modules/d3-interpolate/src/color.js
  function linear(a, d) {
    return function(t2) {
      return a + t2 * d;
    };
  }
  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t2) {
      return Math.pow(a + t2 * b, y);
    };
  }
  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant_default3(isNaN(a) ? b : a);
    };
  }
  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant_default3(isNaN(a) ? b : a);
  }

  // node_modules/d3-interpolate/src/rgb.js
  var rgb_default = (function rgbGamma(y) {
    var color2 = gamma(y);
    function rgb2(start2, end) {
      var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
      return function(t2) {
        start2.r = r(t2);
        start2.g = g(t2);
        start2.b = b(t2);
        start2.opacity = opacity(t2);
        return start2 + "";
      };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
  })(1);
  function rgbSpline(spline) {
    return function(colors) {
      var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
      for (i = 0; i < n; ++i) {
        color2 = rgb(colors[i]);
        r[i] = color2.r || 0;
        g[i] = color2.g || 0;
        b[i] = color2.b || 0;
      }
      r = spline(r);
      g = spline(g);
      b = spline(b);
      color2.opacity = 1;
      return function(t2) {
        color2.r = r(t2);
        color2.g = g(t2);
        color2.b = b(t2);
        return color2 + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis_default);
  var rgbBasisClosed = rgbSpline(basisClosed_default);

  // node_modules/d3-interpolate/src/numberArray.js
  function numberArray_default(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t2) {
      for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t2) + b[i] * t2;
      return c;
    };
  }
  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  // node_modules/d3-interpolate/src/array.js
  function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for (i = 0; i < na; ++i) x[i] = value_default(a[i], b[i]);
    for (; i < nb; ++i) c[i] = b[i];
    return function(t2) {
      for (i = 0; i < na; ++i) c[i] = x[i](t2);
      return c;
    };
  }

  // node_modules/d3-interpolate/src/date.js
  function date_default(a, b) {
    var d = /* @__PURE__ */ new Date();
    return a = +a, b = +b, function(t2) {
      return d.setTime(a * (1 - t2) + b * t2), d;
    };
  }

  // node_modules/d3-interpolate/src/number.js
  function number_default(a, b) {
    return a = +a, b = +b, function(t2) {
      return a * (1 - t2) + b * t2;
    };
  }

  // node_modules/d3-interpolate/src/object.js
  function object_default(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for (k in b) {
      if (k in a) {
        i[k] = value_default(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }
    return function(t2) {
      for (k in i) c[k] = i[k](t2);
      return c;
    };
  }

  // node_modules/d3-interpolate/src/string.js
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero(b) {
    return function() {
      return b;
    };
  }
  function one(b) {
    return function(t2) {
      return b(t2) + "";
    };
  }
  function string_default(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs;
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm;
        else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({ i, x: number_default(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t2) {
      for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t2);
      return s.join("");
    });
  }

  // node_modules/d3-interpolate/src/value.js
  function value_default(a, b) {
    var t2 = typeof b, c;
    return b == null || t2 === "boolean" ? constant_default3(b) : (t2 === "number" ? number_default : t2 === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
  }

  // node_modules/d3-interpolate/src/transform/decompose.js
  var degrees = 180 / Math.PI;
  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose_default(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX,
      scaleY
    };
  }

  // node_modules/d3-interpolate/src/transform/parse.js
  var svgNode;
  function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
  }
  function parseSvg(value) {
    if (value == null) return identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
    value = value.matrix;
    return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  // node_modules/d3-interpolate/src/transform/index.js
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360;
        else if (b - a > 180) a += 360;
        q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }
    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function(a, b) {
      var s = [], q = [];
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null;
      return function(t2) {
        var i = -1, n = q.length, o;
        while (++i < n) s[(o = q[i]).i] = o.x(t2);
        return s.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  // node_modules/d3-interpolate/src/zoom.js
  var epsilon2 = 1e-12;
  function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  var zoom_default = (function zoomRho(rho, rho2, rho4) {
    function zoom(p0, p1) {
      var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
      if (d2 < epsilon2) {
        S = Math.log(w1 / w0) / rho;
        i = function(t2) {
          return [
            ux0 + t2 * dx,
            uy0 + t2 * dy,
            w0 * Math.exp(rho * t2 * S)
          ];
        };
      } else {
        var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S = (r1 - r0) / rho;
        i = function(t2) {
          var s = t2 * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
          return [
            ux0 + u * dx,
            uy0 + u * dy,
            w0 * coshr0 / cosh(rho * s + r0)
          ];
        };
      }
      i.duration = S * 1e3 * rho / Math.SQRT2;
      return i;
    }
    zoom.rho = function(_) {
      var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
      return zoomRho(_1, _2, _4);
    };
    return zoom;
  })(Math.SQRT2, 2, 4);

  // node_modules/d3-timer/src/timer.js
  var frame = 0;
  var timeout = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t2 = new Timer();
    t2.restart(callback, delay, time);
    return t2;
  }
  function timerFlush() {
    now();
    ++frame;
    var t2 = taskHead, e;
    while (t2) {
      if ((e = clockNow - t2._time) >= 0) t2._call.call(void 0, e);
      t2 = t2._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now2 = clock.now(), delay = now2 - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
  }
  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }
  function sleep(time) {
    if (frame) return;
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow;
    if (delay > 24) {
      if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  // node_modules/d3-timer/src/timeout.js
  function timeout_default(callback, delay, time) {
    var t2 = new Timer();
    delay = delay == null ? 0 : +delay;
    t2.restart((elapsed) => {
      t2.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t2;
  }

  // node_modules/d3-transition/src/transition/schedule.js
  var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule_default(node, name, id2, index2, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id2 in schedules) return;
    create(node, id2, {
      name,
      index: index2,
      // For context during callback.
      group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }
  function set2(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }
  function get2(node, id2) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
    return schedule;
  }
  function create(node, id2, self) {
    var schedules = node.__transition, tween;
    schedules[id2] = self;
    self.timer = timer(schedule, 0, self.time);
    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start2, self.delay, self.time);
      if (self.delay <= elapsed) start2(elapsed - self.delay);
    }
    function start2(elapsed) {
      var i, j, n, o;
      if (self.state !== SCHEDULED) return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue;
        if (o.state === STARTED) return timeout_default(start2);
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        } else if (+i < id2) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }
      timeout_default(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return;
      self.state = STARTED;
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }
    function tick(elapsed) {
      var t2 = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
      while (++i < n) {
        tween[i].call(node, t2);
      }
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id2];
      for (var i in schedules) return;
      delete node.__transition;
    }
  }

  // node_modules/d3-transition/src/interrupt.js
  function interrupt_default(node, name) {
    var schedules = node.__transition, schedule, active, empty2 = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) {
        empty2 = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }
    if (empty2) delete node.__transition;
  }

  // node_modules/d3-transition/src/selection/interrupt.js
  function interrupt_default2(name) {
    return this.each(function() {
      interrupt_default(this, name);
    });
  }

  // node_modules/d3-transition/src/transition/tween.js
  function tweenRemove(id2, name) {
    var tween0, tween1;
    return function() {
      var schedule = set2(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id2, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error();
    return function() {
      var schedule = set2(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t2 = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t2;
            break;
          }
        }
        if (i === n) tween1.push(t2);
      }
      schedule.tween = tween1;
    };
  }
  function tween_default(name, value) {
    var id2 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get2(this.node(), id2).tween;
      for (var i = 0, n = tween.length, t2; i < n; ++i) {
        if ((t2 = tween[i]).name === name) {
          return t2.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
  }
  function tweenValue(transition2, name, value) {
    var id2 = transition2._id;
    transition2.each(function() {
      var schedule = set2(this, id2);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
      return get2(node, id2).value[name];
    };
  }

  // node_modules/d3-transition/src/transition/interpolate.js
  function interpolate_default(a, b) {
    var c;
    return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
  }

  // node_modules/d3-transition/src/transition/attr.js
  function attrRemove2(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS2(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS2(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS2(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attr_default2(name, value) {
    var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
  }

  // node_modules/d3-transition/src/transition/attrTween.js
  function attrInterpolate(name, i) {
    return function(t2) {
      this.setAttribute(name, i.call(this, t2));
    };
  }
  function attrInterpolateNS(fullname, i) {
    return function(t2) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t2));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween_default(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    var fullname = namespace_default(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  // node_modules/d3-transition/src/transition/delay.js
  function delayFunction(id2, value) {
    return function() {
      init(this, id2).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id2, value) {
    return value = +value, function() {
      init(this, id2).delay = value;
    };
  }
  function delay_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
  }

  // node_modules/d3-transition/src/transition/duration.js
  function durationFunction(id2, value) {
    return function() {
      set2(this, id2).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id2, value) {
    return value = +value, function() {
      set2(this, id2).duration = value;
    };
  }
  function duration_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
  }

  // node_modules/d3-transition/src/transition/ease.js
  function easeConstant(id2, value) {
    if (typeof value !== "function") throw new Error();
    return function() {
      set2(this, id2).ease = value;
    };
  }
  function ease_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
  }

  // node_modules/d3-transition/src/transition/easeVarying.js
  function easeVarying(id2, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (typeof v !== "function") throw new Error();
      set2(this, id2).ease = v;
    };
  }
  function easeVarying_default(value) {
    if (typeof value !== "function") throw new Error();
    return this.each(easeVarying(this._id, value));
  }

  // node_modules/d3-transition/src/transition/filter.js
  function filter_default2(match) {
    if (typeof match !== "function") match = matcher_default(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/merge.js
  function merge_default2(transition2) {
    if (transition2._id !== this._id) throw new Error();
    for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/on.js
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t2) {
      var i = t2.indexOf(".");
      if (i >= 0) t2 = t2.slice(0, i);
      return !t2 || t2 === "start";
    });
  }
  function onFunction(id2, name, listener) {
    var on0, on1, sit = start(name) ? init : set2;
    return function() {
      var schedule = sit(this, id2), on = schedule.on;
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function on_default2(name, listener) {
    var id2 = this._id;
    return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
  }

  // node_modules/d3-transition/src/transition/remove.js
  function removeFunction(id2) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id2) return;
      if (parent) parent.removeChild(this);
    };
  }
  function remove_default2() {
    return this.on("end.remove", removeFunction(this._id));
  }

  // node_modules/d3-transition/src/transition/select.js
  function select_default3(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function") select = selector_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selectAll.js
  function selectAll_default2(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function") select = selectorAll_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
            if (child = children2[k]) {
              schedule_default(child, name, id2, k, children2, inherit2);
            }
          }
          subgroups.push(children2);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selection.js
  var Selection2 = selection_default.prototype.constructor;
  function selection_default2() {
    return new Selection2(this._groups, this._parents);
  }

  // node_modules/d3-transition/src/transition/style.js
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove2(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id2, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
    return function() {
      var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }
  function style_default2(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
  }

  // node_modules/d3-transition/src/transition/styleTween.js
  function styleInterpolate(name, i, priority) {
    return function(t2) {
      this.style.setProperty(name, i.call(this, t2), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t2, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t2 = (i0 = i) && styleInterpolate(name, i, priority);
      return t2;
    }
    tween._value = value;
    return tween;
  }
  function styleTween_default(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  // node_modules/d3-transition/src/transition/text.js
  function textConstant2(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction2(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function text_default2(value) {
    return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
  }

  // node_modules/d3-transition/src/transition/textTween.js
  function textInterpolate(i) {
    return function(t2) {
      this.textContent = i.call(this, t2);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function textTween_default(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, textTween(value));
  }

  // node_modules/d3-transition/src/transition/transition.js
  function transition_default() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit2 = get2(node, id0);
          schedule_default(node, name, id1, i, group, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }

  // node_modules/d3-transition/src/transition/end.js
  function end_default() {
    var on0, on1, that = this, id2 = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = { value: reject }, end = { value: function() {
        if (--size === 0) resolve();
      } };
      that.each(function() {
        var schedule = set2(this, id2), on = schedule.on;
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });
      if (size === 0) resolve();
    });
  }

  // node_modules/d3-transition/src/transition/index.js
  var id = 0;
  function Transition(groups, parents, name, id2) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id2;
  }
  function transition(name) {
    return selection_default().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection_default.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: select_default3,
    selectAll: selectAll_default2,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: filter_default2,
    merge: merge_default2,
    selection: selection_default2,
    transition: transition_default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: on_default2,
    attr: attr_default2,
    attrTween: attrTween_default,
    style: style_default2,
    styleTween: styleTween_default,
    text: text_default2,
    textTween: textTween_default,
    remove: remove_default2,
    tween: tween_default,
    delay: delay_default,
    duration: duration_default,
    ease: ease_default,
    easeVarying: easeVarying_default,
    end: end_default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  // node_modules/d3-ease/src/cubic.js
  function cubicInOut(t2) {
    return ((t2 *= 2) <= 1 ? t2 * t2 * t2 : (t2 -= 2) * t2 * t2 + 2) / 2;
  }

  // node_modules/d3-transition/src/selection/transition.js
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id2) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id2])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id2} not found`);
      }
    }
    return timing;
  }
  function transition_default2(name) {
    var id2, timing;
    if (name instanceof Transition) {
      id2 = name._id, name = name._name;
    } else {
      id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
        }
      }
    }
    return new Transition(groups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/selection/index.js
  selection_default.prototype.interrupt = interrupt_default2;
  selection_default.prototype.transition = transition_default2;

  // node_modules/d3-zoom/src/constant.js
  var constant_default4 = (x) => () => x;

  // node_modules/d3-zoom/src/event.js
  function ZoomEvent(type, {
    sourceEvent,
    target,
    transform: transform2,
    dispatch: dispatch2
  }) {
    Object.defineProperties(this, {
      type: { value: type, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      transform: { value: transform2, enumerable: true, configurable: true },
      _: { value: dispatch2 }
    });
  }

  // node_modules/d3-zoom/src/transform.js
  function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function(x) {
      return x * this.k + this.x;
    },
    applyY: function(y) {
      return y * this.k + this.y;
    },
    invert: function(location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function(x) {
      return (x - this.x) / this.k;
    },
    invertY: function(y) {
      return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity2 = new Transform(1, 0, 0);
  transform.prototype = Transform.prototype;
  function transform(node) {
    while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
    return node.__zoom;
  }

  // node_modules/d3-zoom/src/noevent.js
  function nopropagation2(event) {
    event.stopImmediatePropagation();
  }
  function noevent_default2(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-zoom/src/zoom.js
  function defaultFilter2(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
  }
  function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
      e = e.ownerSVGElement || e;
      if (e.hasAttribute("viewBox")) {
        e = e.viewBox.baseVal;
        return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
      }
      return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
    }
    return [[0, 0], [e.clientWidth, e.clientHeight]];
  }
  function defaultTransform() {
    return this.__zoom || identity2;
  }
  function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
  }
  function defaultTouchable2() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function defaultConstrain(transform2, extent, translateExtent) {
    var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
    return transform2.translate(
      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
    );
  }
  function zoom_default2() {
    var filter2 = defaultFilter2, extent = defaultExtent, constrain = defaultConstrain, wheelDelta2 = defaultWheelDelta, touchable = defaultTouchable2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection2) {
      selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform2, point, event) {
      var selection2 = collection.selection ? collection.selection() : collection;
      selection2.property("__zoom", defaultTransform);
      if (collection !== selection2) {
        schedule(collection, transform2, point, event);
      } else {
        selection2.interrupt().each(function() {
          gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
        });
      }
    };
    zoom.scaleBy = function(selection2, k, p, event) {
      zoom.scaleTo(selection2, function() {
        var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return k0 * k1;
      }, p, event);
    };
    zoom.scaleTo = function(selection2, k, p, event) {
      zoom.transform(selection2, function() {
        var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
      }, p, event);
    };
    zoom.translateBy = function(selection2, x, y, event) {
      zoom.transform(selection2, function() {
        return constrain(this.__zoom.translate(
          typeof x === "function" ? x.apply(this, arguments) : x,
          typeof y === "function" ? y.apply(this, arguments) : y
        ), extent.apply(this, arguments), translateExtent);
      }, null, event);
    };
    zoom.translateTo = function(selection2, x, y, p, event) {
      zoom.transform(selection2, function() {
        var e = extent.apply(this, arguments), t2 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
        return constrain(identity2.translate(p0[0], p0[1]).scale(t2.k).translate(
          typeof x === "function" ? -x.apply(this, arguments) : -x,
          typeof y === "function" ? -y.apply(this, arguments) : -y
        ), e, translateExtent);
      }, p, event);
    };
    function scale(transform2, k) {
      k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
      return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
    }
    function translate(transform2, p0, p1) {
      var x = p0[0] - p1[0] * transform2.k, y = p0[1] - p1[1] * transform2.k;
      return x === transform2.x && y === transform2.y ? transform2 : new Transform(transform2.k, x, y);
    }
    function centroid(extent2) {
      return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
    }
    function schedule(transition2, transform2, point, event) {
      transition2.on("start.zoom", function() {
        gesture(this, arguments).event(event).start();
      }).on("interrupt.zoom end.zoom", function() {
        gesture(this, arguments).event(event).end();
      }).tween("zoom", function() {
        var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
        return function(t2) {
          if (t2 === 1) t2 = b;
          else {
            var l = i(t2), k = w / l[2];
            t2 = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
          }
          g.zoom(null, t2);
        };
      });
    }
    function gesture(that, args, clean) {
      return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = extent.apply(that, args);
      this.taps = 0;
    }
    Gesture.prototype = {
      event: function(event) {
        if (event) this.sourceEvent = event;
        return this;
      },
      start: function() {
        if (++this.active === 1) {
          this.that.__zooming = this;
          this.emit("start");
        }
        return this;
      },
      zoom: function(key, transform2) {
        if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
        this.that.__zoom = transform2;
        this.emit("zoom");
        return this;
      },
      end: function() {
        if (--this.active === 0) {
          delete this.that.__zooming;
          this.emit("end");
        }
        return this;
      },
      emit: function(type) {
        var d = select_default2(this.that).datum();
        listeners.call(
          type,
          this.that,
          new ZoomEvent(type, {
            sourceEvent: this.sourceEvent,
            target: zoom,
            type,
            transform: this.that.__zoom,
            dispatch: listeners
          }),
          d
        );
      }
    };
    function wheeled(event, ...args) {
      if (!filter2.apply(this, arguments)) return;
      var g = gesture(this, args).event(event), t2 = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t2.k * Math.pow(2, wheelDelta2.apply(this, arguments)))), p = pointer_default(event);
      if (g.wheel) {
        if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
          g.mouse[1] = t2.invert(g.mouse[0] = p);
        }
        clearTimeout(g.wheel);
      } else if (t2.k === k) return;
      else {
        g.mouse = [p, t2.invert(p)];
        interrupt_default(this);
        g.start();
      }
      noevent_default2(event);
      g.wheel = setTimeout(wheelidled, wheelDelay);
      g.zoom("mouse", constrain(translate(scale(t2, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
      function wheelidled() {
        g.wheel = null;
        g.end();
      }
    }
    function mousedowned(event, ...args) {
      if (touchending || !filter2.apply(this, arguments)) return;
      var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
      nodrag_default(event.view);
      nopropagation2(event);
      g.mouse = [p, this.__zoom.invert(p)];
      interrupt_default(this);
      g.start();
      function mousemoved(event2) {
        noevent_default2(event2);
        if (!g.moved) {
          var dx = event2.clientX - x0, dy = event2.clientY - y0;
          g.moved = dx * dx + dy * dy > clickDistance2;
        }
        g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
      }
      function mouseupped(event2) {
        v.on("mousemove.zoom mouseup.zoom", null);
        yesdrag(event2.view, g.moved);
        noevent_default2(event2);
        g.event(event2).end();
      }
    }
    function dblclicked(event, ...args) {
      if (!filter2.apply(this, arguments)) return;
      var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
      noevent_default2(event);
      if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
      else select_default2(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
      if (!filter2.apply(this, arguments)) return;
      var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t2, p;
      nopropagation2(event);
      for (i = 0; i < n; ++i) {
        t2 = touches[i], p = pointer_default(t2, this);
        p = [p, this.__zoom.invert(p), t2.identifier];
        if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
        else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
      }
      if (touchstarting) touchstarting = clearTimeout(touchstarting);
      if (started) {
        if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
        interrupt_default(this);
        g.start();
      }
    }
    function touchmoved(event, ...args) {
      if (!this.__zooming) return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t2, p, l;
      noevent_default2(event);
      for (i = 0; i < n; ++i) {
        t2 = touches[i], p = pointer_default(t2, this);
        if (g.touch0 && g.touch0[2] === t2.identifier) g.touch0[0] = p;
        else if (g.touch1 && g.touch1[2] === t2.identifier) g.touch1[0] = p;
      }
      t2 = g.that.__zoom;
      if (g.touch1) {
        var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t2 = scale(t2, Math.sqrt(dp / dl));
        p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
      else return;
      g.zoom("touch", constrain(translate(t2, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
      if (!this.__zooming) return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t2;
      nopropagation2(event);
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, touchDelay);
      for (i = 0; i < n; ++i) {
        t2 = touches[i];
        if (g.touch0 && g.touch0[2] === t2.identifier) delete g.touch0;
        else if (g.touch1 && g.touch1[2] === t2.identifier) delete g.touch1;
      }
      if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
      if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else {
        g.end();
        if (g.taps === 2) {
          t2 = pointer_default(t2, this);
          if (Math.hypot(touchfirst[0] - t2[0], touchfirst[1] - t2[1]) < tapDistance) {
            var p = select_default2(this).on("dblclick.zoom");
            if (p) p.apply(this, arguments);
          }
        }
      }
    }
    zoom.wheelDelta = function(_) {
      return arguments.length ? (wheelDelta2 = typeof _ === "function" ? _ : constant_default4(+_), zoom) : wheelDelta2;
    };
    zoom.filter = function(_) {
      return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : filter2;
    };
    zoom.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
      return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
    };
    zoom.scaleExtent = function(_) {
      return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
    };
    zoom.translateExtent = function(_) {
      return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
    };
    zoom.constrain = function(_) {
      return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
      return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
      return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
      return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
  }

  // node_modules/@xyflow/system/dist/esm/index.js
  var errorMessages = {
    error001: (lib = "react") => `Seems like you have not used ${lib === "svelte" ? "SvelteFlowProvider" : "ReactFlowProvider"} as an ancestor. Help: https://${lib}flow.dev/error#001`,
    error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
    error003: (nodeType) => `Node type "${nodeType}" not found. Using fallback type "default".`,
    error004: () => "The parent container needs a width and a height to render the graph.",
    error005: () => "Only child nodes can use a parent extent.",
    error006: () => "Can't create edge. An edge needs a source and a target.",
    error007: (id2) => `The old edge with id=${id2} does not exist.`,
    error009: (type) => `Marker type "${type}" doesn't exist.`,
    error008: (handleType, { id: id2, sourceHandle, targetHandle }) => `Couldn't create edge for ${handleType} handle id: "${handleType === "source" ? sourceHandle : targetHandle}", edge id: ${id2}.`,
    error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
    error011: (edgeType) => `Edge type "${edgeType}" not found. Using fallback type "default".`,
    error012: (id2) => `Node with id "${id2}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
    error013: (lib = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${lib}/dist/style.css' or base.css to make sure everything is working properly.`,
    error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
    error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
    error016: (id2) => `Edge with id "${id2}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`
  };
  var infiniteExtent = [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  ];
  var elementSelectionKeys = ["Enter", " ", "Escape"];
  var defaultAriaLabelConfig = {
    "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.ariaLiveMessage": ({ direction, x, y }) => `Moved selected node ${direction}. New position, x: ${x}, y: ${y}`,
    "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
    // Control elements
    "controls.ariaLabel": "Control Panel",
    "controls.zoomIn.ariaLabel": "Zoom In",
    "controls.zoomOut.ariaLabel": "Zoom Out",
    "controls.fitView.ariaLabel": "Fit View",
    "controls.interactive.ariaLabel": "Toggle Interactivity",
    // Mini map
    "minimap.ariaLabel": "Mini Map",
    // Handle
    "handle.ariaLabel": "Handle"
  };
  var ConnectionMode;
  (function(ConnectionMode2) {
    ConnectionMode2["Strict"] = "strict";
    ConnectionMode2["Loose"] = "loose";
  })(ConnectionMode || (ConnectionMode = {}));
  var PanOnScrollMode;
  (function(PanOnScrollMode2) {
    PanOnScrollMode2["Free"] = "free";
    PanOnScrollMode2["Vertical"] = "vertical";
    PanOnScrollMode2["Horizontal"] = "horizontal";
  })(PanOnScrollMode || (PanOnScrollMode = {}));
  var SelectionMode;
  (function(SelectionMode2) {
    SelectionMode2["Partial"] = "partial";
    SelectionMode2["Full"] = "full";
  })(SelectionMode || (SelectionMode = {}));
  var initialConnection = {
    inProgress: false,
    isValid: null,
    from: null,
    fromHandle: null,
    fromPosition: null,
    fromNode: null,
    to: null,
    toHandle: null,
    toPosition: null,
    toNode: null,
    pointer: null
  };
  var ConnectionLineType;
  (function(ConnectionLineType2) {
    ConnectionLineType2["Bezier"] = "default";
    ConnectionLineType2["Straight"] = "straight";
    ConnectionLineType2["Step"] = "step";
    ConnectionLineType2["SmoothStep"] = "smoothstep";
    ConnectionLineType2["SimpleBezier"] = "simplebezier";
  })(ConnectionLineType || (ConnectionLineType = {}));
  var MarkerType;
  (function(MarkerType2) {
    MarkerType2["Arrow"] = "arrow";
    MarkerType2["ArrowClosed"] = "arrowclosed";
  })(MarkerType || (MarkerType = {}));
  var Position;
  (function(Position2) {
    Position2["Left"] = "left";
    Position2["Top"] = "top";
    Position2["Right"] = "right";
    Position2["Bottom"] = "bottom";
  })(Position || (Position = {}));
  var oppositePosition = {
    [Position.Left]: Position.Right,
    [Position.Right]: Position.Left,
    [Position.Top]: Position.Bottom,
    [Position.Bottom]: Position.Top
  };
  var isEdgeBase = (element) => !!element && typeof element === "object" && "id" in element && "source" in element && "target" in element;
  var isNodeBase = (element) => !!element && typeof element === "object" && "id" in element && "position" in element && !("source" in element) && !("target" in element);
  var isInternalNodeBase = (element) => !!element && typeof element === "object" && "id" in element && "internals" in element && !("source" in element) && !("target" in element);
  var getNodePositionWithOrigin = (node, nodeOrigin = [0, 0]) => {
    const { width, height } = getNodeDimensions(node);
    const origin = node.origin ?? nodeOrigin;
    const offsetX = width * origin[0];
    const offsetY = height * origin[1];
    return {
      x: node.position.x - offsetX,
      y: node.position.y - offsetY
    };
  };
  var getNodesBounds = (nodes, params = { nodeOrigin: [0, 0] }) => {
    if (false) {
      console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows.");
    }
    if (nodes.length === 0) {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
    let hasNode = false;
    const box = nodes.reduce((currBox, nodeOrId) => {
      const isId = typeof nodeOrId === "string";
      let currentNode = !params.nodeLookup && !isId ? nodeOrId : void 0;
      if (params.nodeLookup) {
        currentNode = isId ? params.nodeLookup.get(nodeOrId) : !isInternalNodeBase(nodeOrId) ? params.nodeLookup.get(nodeOrId.id) : nodeOrId;
      }
      if (!currentNode) {
        return currBox;
      }
      hasNode = true;
      return getBoundsOfBoxes(currBox, nodeToBox(currentNode, params.nodeOrigin));
    }, { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity });
    return hasNode ? boxToRect(box) : { x: 0, y: 0, width: 0, height: 0 };
  };
  var getInternalNodesBounds = (nodeLookup, params = {}) => {
    let box = { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity };
    let hasVisibleNodes = false;
    nodeLookup.forEach((node) => {
      if (params.filter === void 0 || params.filter(node)) {
        box = getBoundsOfBoxes(box, nodeToBox(node));
        hasVisibleNodes = true;
      }
    });
    return hasVisibleNodes ? boxToRect(box) : { x: 0, y: 0, width: 0, height: 0 };
  };
  var getNodesInside = (nodes, rect, [tx, ty, tScale] = [0, 0, 1], partially = false, excludeNonSelectableNodes = false) => {
    const paneX = (rect.x - tx) / tScale;
    const paneY = (rect.y - ty) / tScale;
    const paneWidth = rect.width / tScale;
    const paneHeight = rect.height / tScale;
    const visibleNodes = [];
    for (const node of nodes.values()) {
      const { measured, selectable = true, hidden = false } = node;
      if (excludeNonSelectableNodes && !selectable || hidden) {
        continue;
      }
      const width = measured.width ?? node.width ?? node.initialWidth ?? 0;
      const height = measured.height ?? node.height ?? node.initialHeight ?? 0;
      const { x, y } = node.internals.positionAbsolute;
      const overlappingArea = getRectsOverlappingArea(paneX, paneY, paneWidth, paneHeight, x, y, width, height);
      const area = width * height;
      const partiallyVisible = partially && overlappingArea > 0;
      const forceInitialRender = !node.internals.handleBounds;
      const isVisible = forceInitialRender || partiallyVisible || overlappingArea >= area;
      if (isVisible || node.dragging) {
        visibleNodes.push(node);
      }
    }
    return visibleNodes;
  };
  var getConnectedEdges = (nodes, edges) => {
    const nodeIds = /* @__PURE__ */ new Set();
    nodes.forEach((node) => {
      nodeIds.add(node.id);
    });
    return edges.filter((edge) => nodeIds.has(edge.source) || nodeIds.has(edge.target));
  };
  function getFitViewNodes(nodeLookup, options) {
    const fitViewNodes = /* @__PURE__ */ new Map();
    const optionNodeIds = options?.nodes ? new Set(options.nodes.map((node) => node.id)) : null;
    nodeLookup.forEach((n) => {
      let isVisible;
      if (options?.includeHiddenNodes) {
        const { width, height } = getNodeDimensions(n);
        isVisible = width > 0 && height > 0;
      } else {
        isVisible = Boolean(n.measured.width && n.measured.height && !n.hidden);
      }
      if (isVisible && (!optionNodeIds || optionNodeIds.has(n.id))) {
        fitViewNodes.set(n.id, n);
      }
    });
    return fitViewNodes;
  }
  async function fitViewport({ nodes, width, height, panZoom, minZoom, maxZoom }, options) {
    if (nodes.size === 0) {
      return true;
    }
    const nodesToFit = getFitViewNodes(nodes, options);
    const bounds = getInternalNodesBounds(nodesToFit);
    const viewport = getViewportForBounds(bounds, width, height, options?.minZoom ?? minZoom, options?.maxZoom ?? maxZoom, options?.padding ?? 0.1);
    await panZoom.setViewport(viewport, {
      duration: options?.duration,
      ease: options?.ease,
      interpolate: options?.interpolate
    });
    return true;
  }
  function calculateNodePosition({ nodeId, nextPosition, nodeLookup, nodeOrigin = [0, 0], nodeExtent, onError }) {
    const node = nodeLookup.get(nodeId);
    const parentNode = node.parentId ? nodeLookup.get(node.parentId) : void 0;
    const { x: parentX, y: parentY } = parentNode ? parentNode.internals.positionAbsolute : { x: 0, y: 0 };
    const origin = node.origin ?? nodeOrigin;
    let extent = node.extent || nodeExtent;
    if (node.extent === "parent" && !node.expandParent) {
      if (!parentNode) {
        onError?.("005", errorMessages["error005"]());
      } else {
        const { width: parentWidth, height: parentHeight } = getNodeDimensions(parentNode);
        if (parentWidth && parentHeight) {
          extent = [
            [parentX, parentY],
            [parentX + parentWidth, parentY + parentHeight]
          ];
        }
      }
    } else if (parentNode && isCoordinateExtent(node.extent)) {
      extent = [
        [node.extent[0][0] + parentX, node.extent[0][1] + parentY],
        [node.extent[1][0] + parentX, node.extent[1][1] + parentY]
      ];
    }
    const positionAbsolute = isCoordinateExtent(extent) ? clampPosition(nextPosition, extent, node.measured) : nextPosition;
    if (node.measured.width === void 0 || node.measured.height === void 0) {
      onError?.("015", errorMessages["error015"]());
    }
    return {
      position: {
        x: positionAbsolute.x - parentX + (node.measured.width ?? 0) * origin[0],
        y: positionAbsolute.y - parentY + (node.measured.height ?? 0) * origin[1]
      },
      positionAbsolute
    };
  }
  async function getElementsToRemove({ nodesToRemove = [], edgesToRemove = [], nodes, edges, onBeforeDelete }) {
    const nodeIds = new Set(nodesToRemove.map((node) => node.id));
    const matchingNodes = [];
    for (const node of nodes) {
      if (node.deletable === false) {
        continue;
      }
      const isIncluded = nodeIds.has(node.id);
      const parentHit = !isIncluded && node.parentId && matchingNodes.find((n) => n.id === node.parentId);
      if (isIncluded || parentHit) {
        matchingNodes.push(node);
      }
    }
    const edgeIds = new Set(edgesToRemove.map((edge) => edge.id));
    const deletableEdges = edges.filter((edge) => edge.deletable !== false);
    const connectedEdges = getConnectedEdges(matchingNodes, deletableEdges);
    const matchingEdges = connectedEdges;
    for (const edge of deletableEdges) {
      const isIncluded = edgeIds.has(edge.id);
      if (isIncluded && !matchingEdges.find((e) => e.id === edge.id)) {
        matchingEdges.push(edge);
      }
    }
    if (!onBeforeDelete) {
      return {
        edges: matchingEdges,
        nodes: matchingNodes
      };
    }
    const onBeforeDeleteResult = await onBeforeDelete({
      nodes: matchingNodes,
      edges: matchingEdges
    });
    if (typeof onBeforeDeleteResult === "boolean") {
      return onBeforeDeleteResult ? { edges: matchingEdges, nodes: matchingNodes } : { edges: [], nodes: [] };
    }
    return onBeforeDeleteResult;
  }
  var clamp = (val, min = 0, max = 1) => Math.min(Math.max(val, min), max);
  var clampPosition = (position = { x: 0, y: 0 }, extent, dimensions) => ({
    x: clamp(position.x, extent[0][0], extent[1][0] - (dimensions?.width ?? 0)),
    y: clamp(position.y, extent[0][1], extent[1][1] - (dimensions?.height ?? 0))
  });
  function clampPositionToParent(childPosition, childDimensions, parent) {
    const { width: parentWidth, height: parentHeight } = getNodeDimensions(parent);
    const { x: parentX, y: parentY } = parent.internals.positionAbsolute;
    return clampPosition(childPosition, [
      [parentX, parentY],
      [parentX + parentWidth, parentY + parentHeight]
    ], childDimensions);
  }
  var calcAutoPanVelocity = (value, min, max) => {
    if (value < min) {
      return clamp(Math.abs(value - min), 1, min) / min;
    } else if (value > max) {
      return -clamp(Math.abs(value - max), 1, min) / min;
    }
    return 0;
  };
  var calcAutoPan = (pos, bounds, speed = 15, distance2 = 40) => {
    const xMovement = calcAutoPanVelocity(pos.x, distance2, bounds.width - distance2) * speed;
    const yMovement = calcAutoPanVelocity(pos.y, distance2, bounds.height - distance2) * speed;
    return [xMovement, yMovement];
  };
  var getBoundsOfBoxes = (box1, box2) => ({
    x: Math.min(box1.x, box2.x),
    y: Math.min(box1.y, box2.y),
    x2: Math.max(box1.x2, box2.x2),
    y2: Math.max(box1.y2, box2.y2)
  });
  var rectToBox = ({ x, y, width, height }) => ({
    x,
    y,
    x2: x + width,
    y2: y + height
  });
  var boxToRect = ({ x, y, x2, y2 }) => ({
    x,
    y,
    width: x2 - x,
    height: y2 - y
  });
  var nodeToRect = (node, nodeOrigin = [0, 0]) => {
    const { x, y } = isInternalNodeBase(node) ? node.internals.positionAbsolute : getNodePositionWithOrigin(node, nodeOrigin);
    return {
      x,
      y,
      width: node.measured?.width ?? node.width ?? node.initialWidth ?? 0,
      height: node.measured?.height ?? node.height ?? node.initialHeight ?? 0
    };
  };
  var nodeToBox = (node, nodeOrigin = [0, 0]) => {
    const { x, y } = isInternalNodeBase(node) ? node.internals.positionAbsolute : getNodePositionWithOrigin(node, nodeOrigin);
    return {
      x,
      y,
      x2: x + (node.measured?.width ?? node.width ?? node.initialWidth ?? 0),
      y2: y + (node.measured?.height ?? node.height ?? node.initialHeight ?? 0)
    };
  };
  var getBoundsOfRects = (rect1, rect2) => boxToRect(getBoundsOfBoxes(rectToBox(rect1), rectToBox(rect2)));
  var getRectsOverlappingArea = (aX, aY, aWidth, aHeight, bX, bY, bWidth, bHeight) => {
    const xOverlap = Math.max(0, Math.min(aX + aWidth, bX + bWidth) - Math.max(aX, bX));
    const yOverlap = Math.max(0, Math.min(aY + aHeight, bY + bHeight) - Math.max(aY, bY));
    return Math.ceil(xOverlap * yOverlap);
  };
  var getOverlappingArea = (rectA, rectB) => getRectsOverlappingArea(rectA.x, rectA.y, rectA.width, rectA.height, rectB.x, rectB.y, rectB.width, rectB.height);
  var isRectObject = (obj) => isNumeric(obj.width) && isNumeric(obj.height) && isNumeric(obj.x) && isNumeric(obj.y);
  var isNumeric = (n) => !isNaN(n) && isFinite(n);
  var createDevWarn = (lib, helpUrl) => (id2, message) => {
    if (false) {
      console.warn(`[${lib}]: ${message} Help: ${helpUrl}error#${id2}`);
    }
  };
  var snapPosition = (position, snapGrid = [1, 1]) => {
    return {
      x: snapGrid[0] * Math.round(position.x / snapGrid[0]),
      y: snapGrid[1] * Math.round(position.y / snapGrid[1])
    };
  };
  var pointToRendererPoint = ({ x, y }, [tx, ty, tScale], snapToGrid = false, snapGrid = [1, 1]) => {
    const position = {
      x: (x - tx) / tScale,
      y: (y - ty) / tScale
    };
    return snapToGrid ? snapPosition(position, snapGrid) : position;
  };
  var rendererPointToPoint = ({ x, y }, [tx, ty, tScale]) => {
    return {
      x: x * tScale + tx,
      y: y * tScale + ty
    };
  };
  function parsePadding(padding, viewport) {
    if (typeof padding === "number") {
      return Math.floor((viewport - viewport / (1 + padding)) * 0.5);
    }
    if (typeof padding === "string" && padding.endsWith("px")) {
      const paddingValue = parseFloat(padding);
      if (!Number.isNaN(paddingValue)) {
        return Math.floor(paddingValue);
      }
    }
    if (typeof padding === "string" && padding.endsWith("%")) {
      const paddingValue = parseFloat(padding);
      if (!Number.isNaN(paddingValue)) {
        return Math.floor(viewport * paddingValue * 0.01);
      }
    }
    console.error(`The padding value "${padding}" is invalid. Please provide a number or a string with a valid unit (px or %).`);
    return 0;
  }
  function parsePaddings(padding, width, height) {
    if (typeof padding === "string" || typeof padding === "number") {
      const paddingY = parsePadding(padding, height);
      const paddingX = parsePadding(padding, width);
      return {
        top: paddingY,
        right: paddingX,
        bottom: paddingY,
        left: paddingX,
        x: paddingX * 2,
        y: paddingY * 2
      };
    }
    if (typeof padding === "object") {
      const top = parsePadding(padding.top ?? padding.y ?? 0, height);
      const bottom = parsePadding(padding.bottom ?? padding.y ?? 0, height);
      const left = parsePadding(padding.left ?? padding.x ?? 0, width);
      const right = parsePadding(padding.right ?? padding.x ?? 0, width);
      return { top, right, bottom, left, x: left + right, y: top + bottom };
    }
    return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
  }
  function calculateAppliedPaddings(bounds, x, y, zoom, width, height) {
    const { x: left, y: top } = rendererPointToPoint(bounds, [x, y, zoom]);
    const { x: boundRight, y: boundBottom } = rendererPointToPoint({ x: bounds.x + bounds.width, y: bounds.y + bounds.height }, [x, y, zoom]);
    const right = width - boundRight;
    const bottom = height - boundBottom;
    return {
      left: Math.floor(left),
      top: Math.floor(top),
      right: Math.floor(right),
      bottom: Math.floor(bottom)
    };
  }
  var getViewportForBounds = (bounds, width, height, minZoom, maxZoom, padding) => {
    const p = parsePaddings(padding, width, height);
    const xZoom = (width - p.x) / bounds.width;
    const yZoom = (height - p.y) / bounds.height;
    const zoom = Math.min(xZoom, yZoom);
    const clampedZoom = clamp(zoom, minZoom, maxZoom);
    const boundsCenterX = bounds.x + bounds.width / 2;
    const boundsCenterY = bounds.y + bounds.height / 2;
    const x = width / 2 - boundsCenterX * clampedZoom;
    const y = height / 2 - boundsCenterY * clampedZoom;
    const newPadding = calculateAppliedPaddings(bounds, x, y, clampedZoom, width, height);
    const offset = {
      left: Math.min(newPadding.left - p.left, 0),
      top: Math.min(newPadding.top - p.top, 0),
      right: Math.min(newPadding.right - p.right, 0),
      bottom: Math.min(newPadding.bottom - p.bottom, 0)
    };
    return {
      x: x - offset.left + offset.right,
      y: y - offset.top + offset.bottom,
      zoom: clampedZoom
    };
  };
  var isMacOs = () => typeof navigator !== "undefined" && navigator?.userAgent?.indexOf("Mac") >= 0;
  function isCoordinateExtent(extent) {
    return extent !== void 0 && extent !== null && extent !== "parent";
  }
  function getNodeDimensions(node) {
    return {
      width: node.measured?.width ?? node.width ?? node.initialWidth ?? 0,
      height: node.measured?.height ?? node.height ?? node.initialHeight ?? 0
    };
  }
  function nodeHasDimensions(node) {
    return (node.measured?.width ?? node.width ?? node.initialWidth) !== void 0 && (node.measured?.height ?? node.height ?? node.initialHeight) !== void 0;
  }
  function evaluateAbsolutePosition(position, dimensions = { width: 0, height: 0 }, parentId, nodeLookup, nodeOrigin) {
    const positionAbsolute = { ...position };
    const parent = nodeLookup.get(parentId);
    if (parent) {
      const origin = parent.origin || nodeOrigin;
      positionAbsolute.x += parent.internals.positionAbsolute.x - (dimensions.width ?? 0) * origin[0];
      positionAbsolute.y += parent.internals.positionAbsolute.y - (dimensions.height ?? 0) * origin[1];
    }
    return positionAbsolute;
  }
  function areSetsEqual(a, b) {
    if (a.size !== b.size) {
      return false;
    }
    for (const item of a) {
      if (!b.has(item)) {
        return false;
      }
    }
    return true;
  }
  function withResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  }
  function mergeAriaLabelConfig(partial) {
    return { ...defaultAriaLabelConfig, ...partial || {} };
  }
  function isAttributionVisible(library) {
    if (typeof document === "undefined")
      return true;
    const pane = document.querySelector(`.${library}-flow__pane`);
    if (!pane || !pane.isConnected)
      return true;
    const paneStyle = getComputedStyle(pane);
    if (paneStyle.display === "none")
      return true;
    if (paneStyle.visibility === "hidden" || paneStyle.visibility === "collapse")
      return true;
    if (paneStyle.opacity === "0")
      return true;
    if (paneStyle.width === "0" && paneStyle.height === "0")
      return true;
    const paneRect = pane.getBoundingClientRect();
    if (paneRect.width === 0 && paneRect.height === 0)
      return true;
    const attr = document.querySelector(`.${library}-flow__attribution`);
    if (!attr || !attr.isConnected)
      return false;
    const style2 = getComputedStyle(attr);
    if (style2.display === "none")
      return false;
    if (style2.visibility === "hidden" || style2.visibility === "collapse")
      return false;
    if (style2.opacity === "0")
      return false;
    const rect = attr.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0)
      return false;
    return true;
  }
  var warningDisplayed = false;
  function handleAttributionWarning(library) {
    if (warningDisplayed || true) {
      return;
    }
    warningDisplayed = true;
    const framework = `${library.charAt(0).toUpperCase() + library.slice(1)} Flow`;
    setTimeout(() => {
      if (!isAttributionVisible(library)) {
        console.warn(`${framework}: It seems like you are hiding the attribution. Please only do this when you are subscribed to ${framework} Pro: https://${library}flow.dev/remove-attr
%cYou can ignore this warning if you are subscribed.`, "font-style: italic;");
      }
    }, 1e3);
  }
  function getConnectionStatus(isValid) {
    return isValid === null ? null : isValid ? "valid" : "invalid";
  }
  function getPointerPosition(event, { snapGrid = [0, 0], snapToGrid = false, transform: transform2, containerBounds }) {
    const { x, y } = getEventPosition(event);
    const pointerPos = pointToRendererPoint({ x: x - (containerBounds?.left ?? 0), y: y - (containerBounds?.top ?? 0) }, transform2);
    const { x: xSnapped, y: ySnapped } = snapToGrid ? snapPosition(pointerPos, snapGrid) : pointerPos;
    return {
      xSnapped,
      ySnapped,
      ...pointerPos
    };
  }
  var getDimensions = (node) => ({
    width: node.offsetWidth,
    height: node.offsetHeight
  });
  var getHostForElement = (element) => element?.getRootNode?.() || window?.document;
  var inputTags = ["INPUT", "SELECT", "TEXTAREA"];
  function isInputDOMNode(event) {
    const target = event.composedPath?.()?.[0] || event.target;
    if (target?.nodeType !== 1)
      return false;
    const isInput = inputTags.includes(target.nodeName) || target.hasAttribute("contenteditable");
    return isInput || !!target.closest(".nokey");
  }
  var isMouseEvent = (event) => "clientX" in event;
  var getEventPosition = (event, bounds) => {
    const isMouse = isMouseEvent(event);
    const evtX = isMouse ? event.clientX : event.touches?.[0].clientX;
    const evtY = isMouse ? event.clientY : event.touches?.[0].clientY;
    return {
      x: evtX - (bounds?.left ?? 0),
      y: evtY - (bounds?.top ?? 0)
    };
  };
  var getHandleBounds = (type, nodeElement, nodeBounds, zoom, nodeId) => {
    const handles = nodeElement.querySelectorAll(`.${type}`);
    if (!handles || !handles.length) {
      return null;
    }
    return Array.from(handles).map((handle) => {
      const handleBounds = handle.getBoundingClientRect();
      return {
        id: handle.getAttribute("data-handleid"),
        type,
        nodeId,
        position: handle.getAttribute("data-handlepos"),
        x: (handleBounds.left - nodeBounds.left) / zoom,
        y: (handleBounds.top - nodeBounds.top) / zoom,
        ...getDimensions(handle)
      };
    });
  };
  function getBezierEdgeCenter({ sourceX, sourceY, targetX, targetY, sourceControlX, sourceControlY, targetControlX, targetControlY }) {
    const centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
    const centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
    const offsetX = Math.abs(centerX - sourceX);
    const offsetY = Math.abs(centerY - sourceY);
    return [centerX, centerY, offsetX, offsetY];
  }
  function calculateControlOffset(distance2, curvature) {
    if (distance2 >= 0) {
      return 0.5 * distance2;
    }
    return curvature * 25 * Math.sqrt(-distance2);
  }
  function getControlWithCurvature({ pos, x1, y1, x2, y2, c }) {
    switch (pos) {
      case Position.Left:
        return [x1 - calculateControlOffset(x1 - x2, c), y1];
      case Position.Right:
        return [x1 + calculateControlOffset(x2 - x1, c), y1];
      case Position.Top:
        return [x1, y1 - calculateControlOffset(y1 - y2, c)];
      case Position.Bottom:
        return [x1, y1 + calculateControlOffset(y2 - y1, c)];
    }
  }
  function getBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, curvature = 0.25 }) {
    const [sourceControlX, sourceControlY] = getControlWithCurvature({
      pos: sourcePosition,
      x1: sourceX,
      y1: sourceY,
      x2: targetX,
      y2: targetY,
      c: curvature
    });
    const [targetControlX, targetControlY] = getControlWithCurvature({
      pos: targetPosition,
      x1: targetX,
      y1: targetY,
      x2: sourceX,
      y2: sourceY,
      c: curvature
    });
    const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourceControlX,
      sourceControlY,
      targetControlX,
      targetControlY
    });
    return [
      `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
      labelX,
      labelY,
      offsetX,
      offsetY
    ];
  }
  function getEdgeCenter({ sourceX, sourceY, targetX, targetY }) {
    const xOffset = Math.abs(targetX - sourceX) / 2;
    const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
    const yOffset = Math.abs(targetY - sourceY) / 2;
    const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
    return [centerX, centerY, xOffset, yOffset];
  }
  function getElevatedEdgeZIndex({ sourceNode, targetNode, selected: selected2 = false, zIndex = 0, elevateOnSelect = false, zIndexMode = "basic" }) {
    if (zIndexMode === "manual") {
      return zIndex;
    }
    const edgeZ = elevateOnSelect && selected2 ? zIndex + 1e3 : zIndex;
    const nodeZ = Math.max(sourceNode.parentId || elevateOnSelect && sourceNode.selected ? sourceNode.internals.z : 0, targetNode.parentId || elevateOnSelect && targetNode.selected ? targetNode.internals.z : 0);
    return edgeZ + nodeZ;
  }
  function isEdgeVisible({ sourceNode, targetNode, width, height, transform: transform2 }) {
    const edgeBox = getBoundsOfBoxes(nodeToBox(sourceNode), nodeToBox(targetNode));
    if (edgeBox.x === edgeBox.x2) {
      edgeBox.x2 += 1;
    }
    if (edgeBox.y === edgeBox.y2) {
      edgeBox.y2 += 1;
    }
    const viewRect = {
      x: -transform2[0] / transform2[2],
      y: -transform2[1] / transform2[2],
      width: width / transform2[2],
      height: height / transform2[2]
    };
    return getOverlappingArea(viewRect, boxToRect(edgeBox)) > 0;
  }
  var getEdgeId = ({ source, sourceHandle, target, targetHandle }) => `xy-edge__${source}${sourceHandle || ""}-${target}${targetHandle || ""}`;
  var connectionExists = (edge, edges) => {
    return edges.some((el) => el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle));
  };
  var addEdge = (edgeParams, edges, options = {}) => {
    if (!edgeParams.source || !edgeParams.target) {
      options.onError?.("006", errorMessages["error006"]());
      return edges;
    }
    const edgeIdGenerator = options.getEdgeId || getEdgeId;
    let edge;
    if (isEdgeBase(edgeParams)) {
      edge = { ...edgeParams };
    } else {
      edge = {
        ...edgeParams,
        id: edgeIdGenerator(edgeParams)
      };
    }
    if (connectionExists(edge, edges)) {
      return edges;
    }
    if (edge.sourceHandle === null) {
      delete edge.sourceHandle;
    }
    if (edge.targetHandle === null) {
      delete edge.targetHandle;
    }
    return edges.concat(edge);
  };
  function getStraightPath({ sourceX, sourceY, targetX, targetY }) {
    const [labelX, labelY, offsetX, offsetY] = getEdgeCenter({
      sourceX,
      sourceY,
      targetX,
      targetY
    });
    return [`M ${sourceX},${sourceY}L ${targetX},${targetY}`, labelX, labelY, offsetX, offsetY];
  }
  var handleDirections = {
    [Position.Left]: { x: -1, y: 0 },
    [Position.Right]: { x: 1, y: 0 },
    [Position.Top]: { x: 0, y: -1 },
    [Position.Bottom]: { x: 0, y: 1 }
  };
  var getDirection = ({ source, sourcePosition = Position.Bottom, target }) => {
    if (sourcePosition === Position.Left || sourcePosition === Position.Right) {
      return source.x < target.x ? { x: 1, y: 0 } : { x: -1, y: 0 };
    }
    return source.y < target.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
  };
  var distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  function getPoints({ source, sourcePosition = Position.Bottom, target, targetPosition = Position.Top, center, offset, stepPosition }) {
    const sourceDir = handleDirections[sourcePosition];
    const targetDir = handleDirections[targetPosition];
    const sourceGapped = { x: source.x + sourceDir.x * offset, y: source.y + sourceDir.y * offset };
    const targetGapped = { x: target.x + targetDir.x * offset, y: target.y + targetDir.y * offset };
    const dir = getDirection({
      source: sourceGapped,
      sourcePosition,
      target: targetGapped
    });
    const dirAccessor = dir.x !== 0 ? "x" : "y";
    const currDir = dir[dirAccessor];
    let points = [];
    let centerX, centerY;
    const sourceGapOffset = { x: 0, y: 0 };
    const targetGapOffset = { x: 0, y: 0 };
    const [, , defaultOffsetX, defaultOffsetY] = getEdgeCenter({
      sourceX: source.x,
      sourceY: source.y,
      targetX: target.x,
      targetY: target.y
    });
    if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
      if (dirAccessor === "x") {
        centerX = center.x ?? sourceGapped.x + (targetGapped.x - sourceGapped.x) * stepPosition;
        centerY = center.y ?? (sourceGapped.y + targetGapped.y) / 2;
      } else {
        centerX = center.x ?? (sourceGapped.x + targetGapped.x) / 2;
        centerY = center.y ?? sourceGapped.y + (targetGapped.y - sourceGapped.y) * stepPosition;
      }
      const verticalSplit = [
        { x: centerX, y: sourceGapped.y },
        { x: centerX, y: targetGapped.y }
      ];
      const horizontalSplit = [
        { x: sourceGapped.x, y: centerY },
        { x: targetGapped.x, y: centerY }
      ];
      if (sourceDir[dirAccessor] === currDir) {
        points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
      } else {
        points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
      }
    } else {
      const sourceTarget = [{ x: sourceGapped.x, y: targetGapped.y }];
      const targetSource = [{ x: targetGapped.x, y: sourceGapped.y }];
      if (dirAccessor === "x") {
        points = sourceDir.x === currDir ? targetSource : sourceTarget;
      } else {
        points = sourceDir.y === currDir ? sourceTarget : targetSource;
      }
      if (sourcePosition === targetPosition) {
        const diff = Math.abs(source[dirAccessor] - target[dirAccessor]);
        if (diff <= offset) {
          const gapOffset = Math.min(offset - 1, offset - diff);
          if (sourceDir[dirAccessor] === currDir) {
            sourceGapOffset[dirAccessor] = (sourceGapped[dirAccessor] > source[dirAccessor] ? -1 : 1) * gapOffset;
          } else {
            targetGapOffset[dirAccessor] = (targetGapped[dirAccessor] > target[dirAccessor] ? -1 : 1) * gapOffset;
          }
        }
      }
      if (sourcePosition !== targetPosition) {
        const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
        const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
        const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
        const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
        const flipSourceTarget = sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo);
        if (flipSourceTarget) {
          points = dirAccessor === "x" ? sourceTarget : targetSource;
        }
      }
      const sourceGapPoint = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
      const targetGapPoint = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
      const maxXDistance = Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x));
      const maxYDistance = Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y));
      if (maxXDistance >= maxYDistance) {
        centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
        centerY = points[0].y;
      } else {
        centerX = points[0].x;
        centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
      }
    }
    const gappedSource = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
    const gappedTarget = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
    const pathPoints = [
      source,
      // we only want to add the gapped source/target if they are different from the first/last point to avoid duplicates which can cause issues with the bends
      ...gappedSource.x !== points[0].x || gappedSource.y !== points[0].y ? [gappedSource] : [],
      ...points,
      ...gappedTarget.x !== points[points.length - 1].x || gappedTarget.y !== points[points.length - 1].y ? [gappedTarget] : [],
      target
    ];
    return [pathPoints, centerX, centerY, defaultOffsetX, defaultOffsetY];
  }
  function getBend(a, b, c, size) {
    const bendSize = Math.min(distance(a, b) / 2, distance(b, c) / 2, size);
    const { x, y } = b;
    if (a.x === x && x === c.x || a.y === y && y === c.y) {
      return `L${x} ${y}`;
    }
    if (a.y === y) {
      const xDir2 = a.x < c.x ? -1 : 1;
      const yDir2 = a.y < c.y ? 1 : -1;
      return `L ${x + bendSize * xDir2},${y}Q ${x},${y} ${x},${y + bendSize * yDir2}`;
    }
    const xDir = a.x < c.x ? 1 : -1;
    const yDir = a.y < c.y ? -1 : 1;
    return `L ${x},${y + bendSize * yDir}Q ${x},${y} ${x + bendSize * xDir},${y}`;
  }
  function getSmoothStepPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, borderRadius = 5, centerX, centerY, offset = 20, stepPosition = 0.5 }) {
    const [points, labelX, labelY, offsetX, offsetY] = getPoints({
      source: { x: sourceX, y: sourceY },
      sourcePosition,
      target: { x: targetX, y: targetY },
      targetPosition,
      center: { x: centerX, y: centerY },
      offset,
      stepPosition
    });
    let path = `M${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length - 1; i++) {
      path += getBend(points[i - 1], points[i], points[i + 1], borderRadius);
    }
    path += `L${points[points.length - 1].x} ${points[points.length - 1].y}`;
    return [path, labelX, labelY, offsetX, offsetY];
  }
  function isNodeInitialized(node) {
    return node && !!(node.internals.handleBounds || node.handles?.length) && !!(node.measured.width || node.width || node.initialWidth);
  }
  function getEdgePosition(params) {
    const { sourceNode, targetNode } = params;
    if (!isNodeInitialized(sourceNode) || !isNodeInitialized(targetNode)) {
      return null;
    }
    const sourceHandleBounds = sourceNode.internals.handleBounds || toHandleBounds(sourceNode.handles);
    const targetHandleBounds = targetNode.internals.handleBounds || toHandleBounds(targetNode.handles);
    const sourceHandle = getHandle$1(sourceHandleBounds?.source ?? [], params.sourceHandle);
    const targetHandle = getHandle$1(
      // when connection type is loose we can define all handles as sources and connect source -> source
      params.connectionMode === ConnectionMode.Strict ? targetHandleBounds?.target ?? [] : (targetHandleBounds?.target ?? []).concat(targetHandleBounds?.source ?? []),
      params.targetHandle
    );
    if (!sourceHandle || !targetHandle) {
      params.onError?.("008", errorMessages["error008"](!sourceHandle ? "source" : "target", {
        id: params.id,
        sourceHandle: params.sourceHandle,
        targetHandle: params.targetHandle
      }));
      return null;
    }
    const sourcePosition = sourceHandle?.position || Position.Bottom;
    const targetPosition = targetHandle?.position || Position.Top;
    const source = getHandlePosition(sourceNode, sourceHandle, sourcePosition);
    const target = getHandlePosition(targetNode, targetHandle, targetPosition);
    return {
      sourceX: source.x,
      sourceY: source.y,
      targetX: target.x,
      targetY: target.y,
      sourcePosition,
      targetPosition
    };
  }
  function toHandleBounds(handles) {
    if (!handles) {
      return null;
    }
    const source = [];
    const target = [];
    for (const handle of handles) {
      handle.width = handle.width ?? 1;
      handle.height = handle.height ?? 1;
      if (handle.type === "source") {
        source.push(handle);
      } else if (handle.type === "target") {
        target.push(handle);
      }
    }
    return {
      source,
      target
    };
  }
  function getHandlePosition(node, handle, fallbackPosition = Position.Left, center = false) {
    const x = (handle?.x ?? 0) + node.internals.positionAbsolute.x;
    const y = (handle?.y ?? 0) + node.internals.positionAbsolute.y;
    const { width, height } = handle ?? getNodeDimensions(node);
    if (center) {
      return { x: x + width / 2, y: y + height / 2 };
    }
    const position = handle?.position ?? fallbackPosition;
    switch (position) {
      case Position.Top:
        return { x: x + width / 2, y };
      case Position.Right:
        return { x: x + width, y: y + height / 2 };
      case Position.Bottom:
        return { x: x + width / 2, y: y + height };
      case Position.Left:
        return { x, y: y + height / 2 };
    }
  }
  function getHandle$1(bounds, handleId) {
    if (!bounds) {
      return null;
    }
    return (!handleId ? bounds[0] : bounds.find((d) => d.id === handleId)) || null;
  }
  function getMarkerId(marker, id2) {
    if (!marker) {
      return "";
    }
    if (typeof marker === "string") {
      return marker;
    }
    const idPrefix = id2 ? `${id2}__` : "";
    return `${idPrefix}${Object.keys(marker).sort().map((key) => `${key}=${marker[key]}`).join("&")}`;
  }
  function createMarkerIds(edges, { id: id2, defaultColor, defaultMarkerStart, defaultMarkerEnd }) {
    const ids = /* @__PURE__ */ new Set();
    return edges.reduce((markers, edge) => {
      [edge.markerStart || defaultMarkerStart, edge.markerEnd || defaultMarkerEnd].forEach((marker) => {
        if (marker && typeof marker === "object") {
          const markerId = getMarkerId(marker, id2);
          if (!ids.has(markerId)) {
            markers.push({ id: markerId, color: marker.color || defaultColor, ...marker });
            ids.add(markerId);
          }
        }
      });
      return markers;
    }, []).sort((a, b) => a.id.localeCompare(b.id));
  }
  var SELECTED_NODE_Z = 1e3;
  var ROOT_PARENT_Z_INCREMENT = 10;
  var defaultOptions = {
    nodeOrigin: [0, 0],
    nodeExtent: infiniteExtent,
    elevateNodesOnSelect: true,
    zIndexMode: "basic",
    defaults: {}
  };
  var adoptUserNodesDefaultOptions = {
    ...defaultOptions,
    checkEquality: true
  };
  function mergeObjects(base, incoming) {
    const result = { ...base };
    for (const key in incoming) {
      if (incoming[key] !== void 0) {
        result[key] = incoming[key];
      }
    }
    return result;
  }
  function updateAbsolutePositions(nodeLookup, parentLookup, options) {
    const _options = mergeObjects(defaultOptions, options);
    for (const node of nodeLookup.values()) {
      if (node.parentId) {
        updateChildNode(node, nodeLookup, parentLookup, _options);
      } else {
        const positionWithOrigin = getNodePositionWithOrigin(node, _options.nodeOrigin);
        const extent = isCoordinateExtent(node.extent) ? node.extent : _options.nodeExtent;
        const clampedPosition = clampPosition(positionWithOrigin, extent, getNodeDimensions(node));
        node.internals.positionAbsolute = clampedPosition;
      }
    }
  }
  function parseHandles(userNode, internalNode) {
    if (!userNode.handles) {
      return !userNode.measured ? void 0 : internalNode?.internals.handleBounds;
    }
    const source = [];
    const target = [];
    for (const handle of userNode.handles) {
      const handleBounds = {
        id: handle.id,
        width: handle.width ?? 1,
        height: handle.height ?? 1,
        nodeId: userNode.id,
        x: handle.x,
        y: handle.y,
        position: handle.position,
        type: handle.type
      };
      if (handle.type === "source") {
        source.push(handleBounds);
      } else if (handle.type === "target") {
        target.push(handleBounds);
      }
    }
    return {
      source,
      target
    };
  }
  function isManualZIndexMode(zIndexMode) {
    return zIndexMode === "manual";
  }
  function adoptUserNodes(nodes, nodeLookup, parentLookup, options = {}) {
    const _options = mergeObjects(adoptUserNodesDefaultOptions, options);
    const rootParentIndex = { i: 0 };
    const tmpLookup = new Map(nodeLookup);
    const selectedNodeZ = _options?.elevateNodesOnSelect && !isManualZIndexMode(_options.zIndexMode) ? SELECTED_NODE_Z : 0;
    let nodesInitialized = nodes.length > 0;
    let hasSelectedNodes = false;
    nodeLookup.clear();
    parentLookup.clear();
    for (const userNode of nodes) {
      let internalNode = tmpLookup.get(userNode.id);
      if (_options.checkEquality && userNode === internalNode?.internals.userNode) {
        nodeLookup.set(userNode.id, internalNode);
      } else {
        const positionWithOrigin = getNodePositionWithOrigin(userNode, _options.nodeOrigin);
        const extent = isCoordinateExtent(userNode.extent) ? userNode.extent : _options.nodeExtent;
        const clampedPosition = clampPosition(positionWithOrigin, extent, getNodeDimensions(userNode));
        internalNode = {
          ..._options.defaults,
          ...userNode,
          measured: {
            width: userNode.measured?.width,
            height: userNode.measured?.height
          },
          internals: {
            positionAbsolute: clampedPosition,
            // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
            handleBounds: parseHandles(userNode, internalNode),
            z: calculateZ(userNode, selectedNodeZ, _options.zIndexMode),
            userNode
          }
        };
        nodeLookup.set(userNode.id, internalNode);
      }
      if ((internalNode.measured === void 0 || internalNode.measured.width === void 0 || internalNode.measured.height === void 0) && !internalNode.hidden) {
        nodesInitialized = false;
      }
      if (userNode.parentId) {
        updateChildNode(internalNode, nodeLookup, parentLookup, options, rootParentIndex);
      }
      hasSelectedNodes ||= userNode.selected ?? false;
    }
    return { nodesInitialized, hasSelectedNodes };
  }
  function updateParentLookup(node, parentLookup) {
    if (!node.parentId) {
      return;
    }
    const childNodes = parentLookup.get(node.parentId);
    if (childNodes) {
      childNodes.set(node.id, node);
    } else {
      parentLookup.set(node.parentId, /* @__PURE__ */ new Map([[node.id, node]]));
    }
  }
  function updateChildNode(node, nodeLookup, parentLookup, options, rootParentIndex) {
    const { elevateNodesOnSelect, nodeOrigin, nodeExtent, zIndexMode } = mergeObjects(defaultOptions, options);
    const parentId = node.parentId;
    const parentNode = nodeLookup.get(parentId);
    if (!parentNode) {
      console.warn(`Parent node ${parentId} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
      return;
    }
    updateParentLookup(node, parentLookup);
    if (rootParentIndex && !parentNode.parentId && parentNode.internals.rootParentIndex === void 0 && zIndexMode === "auto") {
      parentNode.internals.rootParentIndex = ++rootParentIndex.i;
      parentNode.internals.z = parentNode.internals.z + rootParentIndex.i * ROOT_PARENT_Z_INCREMENT;
    }
    if (rootParentIndex && parentNode.internals.rootParentIndex !== void 0) {
      rootParentIndex.i = parentNode.internals.rootParentIndex;
    }
    const selectedNodeZ = elevateNodesOnSelect && !isManualZIndexMode(zIndexMode) ? SELECTED_NODE_Z : 0;
    const { x, y, z } = calculateChildXYZ(node, parentNode, nodeOrigin, nodeExtent, selectedNodeZ, zIndexMode);
    const { positionAbsolute } = node.internals;
    const positionChanged = x !== positionAbsolute.x || y !== positionAbsolute.y;
    if (positionChanged || z !== node.internals.z) {
      nodeLookup.set(node.id, {
        ...node,
        internals: {
          ...node.internals,
          positionAbsolute: positionChanged ? { x, y } : positionAbsolute,
          z
        }
      });
    }
  }
  function calculateZ(node, selectedNodeZ, zIndexMode) {
    const zIndex = isNumeric(node.zIndex) ? node.zIndex : 0;
    if (isManualZIndexMode(zIndexMode)) {
      return zIndex;
    }
    return zIndex + (node.selected ? selectedNodeZ : 0);
  }
  function calculateChildXYZ(childNode, parentNode, nodeOrigin, nodeExtent, selectedNodeZ, zIndexMode) {
    const { x: parentX, y: parentY } = parentNode.internals.positionAbsolute;
    const childDimensions = getNodeDimensions(childNode);
    const positionWithOrigin = getNodePositionWithOrigin(childNode, nodeOrigin);
    const clampedPosition = isCoordinateExtent(childNode.extent) ? clampPosition(positionWithOrigin, childNode.extent, childDimensions) : positionWithOrigin;
    let absolutePosition = clampPosition({ x: parentX + clampedPosition.x, y: parentY + clampedPosition.y }, nodeExtent, childDimensions);
    if (childNode.extent === "parent") {
      absolutePosition = clampPositionToParent(absolutePosition, childDimensions, parentNode);
    }
    const childZ = calculateZ(childNode, selectedNodeZ, zIndexMode);
    const parentZ = parentNode.internals.z ?? 0;
    return {
      x: absolutePosition.x,
      y: absolutePosition.y,
      z: parentZ >= childZ ? parentZ + 1 : childZ
    };
  }
  function handleExpandParent(children2, nodeLookup, parentLookup, nodeOrigin = [0, 0]) {
    const changes = [];
    const parentExpansions = /* @__PURE__ */ new Map();
    for (const child of children2) {
      const parent = nodeLookup.get(child.parentId);
      if (!parent) {
        continue;
      }
      const parentRect = parentExpansions.get(child.parentId)?.expandedRect ?? nodeToRect(parent);
      const expandedRect = getBoundsOfRects(parentRect, child.rect);
      parentExpansions.set(child.parentId, { expandedRect, parent });
    }
    if (parentExpansions.size > 0) {
      parentExpansions.forEach(({ expandedRect, parent }, parentId) => {
        const positionAbsolute = parent.internals.positionAbsolute;
        const dimensions = getNodeDimensions(parent);
        const origin = parent.origin ?? nodeOrigin;
        const xChange = expandedRect.x < positionAbsolute.x ? Math.round(Math.abs(positionAbsolute.x - expandedRect.x)) : 0;
        const yChange = expandedRect.y < positionAbsolute.y ? Math.round(Math.abs(positionAbsolute.y - expandedRect.y)) : 0;
        const newWidth = Math.max(dimensions.width, Math.round(expandedRect.width));
        const newHeight = Math.max(dimensions.height, Math.round(expandedRect.height));
        const widthChange = (newWidth - dimensions.width) * origin[0];
        const heightChange = (newHeight - dimensions.height) * origin[1];
        if (xChange > 0 || yChange > 0 || widthChange || heightChange) {
          changes.push({
            id: parentId,
            type: "position",
            position: {
              x: parent.position.x - xChange + widthChange,
              y: parent.position.y - yChange + heightChange
            }
          });
          parentLookup.get(parentId)?.forEach((childNode) => {
            if (!children2.some((child) => child.id === childNode.id)) {
              changes.push({
                id: childNode.id,
                type: "position",
                position: {
                  x: childNode.position.x + xChange,
                  y: childNode.position.y + yChange
                }
              });
            }
          });
        }
        if (dimensions.width < expandedRect.width || dimensions.height < expandedRect.height || xChange || yChange) {
          changes.push({
            id: parentId,
            type: "dimensions",
            setAttributes: true,
            dimensions: {
              width: newWidth + (xChange ? origin[0] * xChange - widthChange : 0),
              height: newHeight + (yChange ? origin[1] * yChange - heightChange : 0)
            }
          });
        }
      });
    }
    return changes;
  }
  function updateNodeInternals(updates, nodeLookup, parentLookup, domNode, nodeOrigin, nodeExtent, zIndexMode) {
    const viewportNode = domNode?.querySelector(".xyflow__viewport");
    let updatedInternals = false;
    if (!viewportNode) {
      return { changes: [], updatedInternals };
    }
    const changes = [];
    const style2 = window.getComputedStyle(viewportNode);
    const { m22: zoom } = new window.DOMMatrixReadOnly(style2.transform);
    const parentExpandChildren = [];
    for (const update of updates.values()) {
      const node = nodeLookup.get(update.id);
      if (!node) {
        continue;
      }
      if (node.hidden) {
        nodeLookup.set(node.id, {
          ...node,
          internals: {
            ...node.internals,
            handleBounds: void 0
          }
        });
        updatedInternals = true;
        continue;
      }
      const dimensions = getDimensions(update.nodeElement);
      const dimensionChanged = node.measured.width !== dimensions.width || node.measured.height !== dimensions.height;
      const doUpdate = !!(dimensions.width && dimensions.height && (dimensionChanged || !node.internals.handleBounds || update.force));
      if (doUpdate) {
        const nodeBounds = update.nodeElement.getBoundingClientRect();
        const extent = isCoordinateExtent(node.extent) ? node.extent : nodeExtent;
        let { positionAbsolute } = node.internals;
        if (node.parentId && node.extent === "parent") {
          const parentNode = nodeLookup.get(node.parentId);
          if (parentNode) {
            positionAbsolute = clampPositionToParent(positionAbsolute, dimensions, parentNode);
          }
        } else if (extent) {
          positionAbsolute = clampPosition(positionAbsolute, extent, dimensions);
        }
        const newNode = {
          ...node,
          measured: dimensions,
          internals: {
            ...node.internals,
            positionAbsolute,
            handleBounds: {
              source: getHandleBounds("source", update.nodeElement, nodeBounds, zoom, node.id),
              target: getHandleBounds("target", update.nodeElement, nodeBounds, zoom, node.id)
            }
          }
        };
        nodeLookup.set(node.id, newNode);
        if (node.parentId) {
          updateChildNode(newNode, nodeLookup, parentLookup, { nodeOrigin, zIndexMode });
        }
        updatedInternals = true;
        if (dimensionChanged) {
          changes.push({
            id: node.id,
            type: "dimensions",
            dimensions
          });
          if (node.expandParent && node.parentId) {
            parentExpandChildren.push({
              id: node.id,
              parentId: node.parentId,
              rect: nodeToRect(newNode, nodeOrigin)
            });
          }
        }
      }
    }
    if (parentExpandChildren.length > 0) {
      const parentExpandChanges = handleExpandParent(parentExpandChildren, nodeLookup, parentLookup, nodeOrigin);
      changes.push(...parentExpandChanges);
    }
    return { changes, updatedInternals };
  }
  async function panBy({ delta, panZoom, transform: transform2, translateExtent, width, height }) {
    if (!panZoom || !delta.x && !delta.y) {
      return false;
    }
    const nextViewport = await panZoom.setViewportConstrained({
      x: transform2[0] + delta.x,
      y: transform2[1] + delta.y,
      zoom: transform2[2]
    }, [
      [0, 0],
      [width, height]
    ], translateExtent);
    const transformChanged = !!nextViewport && (nextViewport.x !== transform2[0] || nextViewport.y !== transform2[1] || nextViewport.k !== transform2[2]);
    return transformChanged;
  }
  function addConnectionToLookup(type, connection, connectionKey, connectionLookup, nodeId, handleId) {
    let key = nodeId;
    const nodeMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
    connectionLookup.set(key, nodeMap.set(connectionKey, connection));
    key = `${nodeId}-${type}`;
    const typeMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
    connectionLookup.set(key, typeMap.set(connectionKey, connection));
    if (handleId) {
      key = `${nodeId}-${type}-${handleId}`;
      const handleMap = connectionLookup.get(key) || /* @__PURE__ */ new Map();
      connectionLookup.set(key, handleMap.set(connectionKey, connection));
    }
  }
  function updateConnectionLookup(connectionLookup, edgeLookup, edges) {
    connectionLookup.clear();
    edgeLookup.clear();
    for (const edge of edges) {
      const { source: sourceNode, target: targetNode, sourceHandle = null, targetHandle = null } = edge;
      const connection = { edgeId: edge.id, source: sourceNode, target: targetNode, sourceHandle, targetHandle };
      const sourceKey = `${sourceNode}-${sourceHandle}--${targetNode}-${targetHandle}`;
      const targetKey = `${targetNode}-${targetHandle}--${sourceNode}-${sourceHandle}`;
      addConnectionToLookup("source", connection, targetKey, connectionLookup, sourceNode, sourceHandle);
      addConnectionToLookup("target", connection, sourceKey, connectionLookup, targetNode, targetHandle);
      edgeLookup.set(edge.id, edge);
    }
  }
  function isParentSelected(node, nodeLookup) {
    if (!node.parentId) {
      return false;
    }
    const parentNode = nodeLookup.get(node.parentId);
    if (!parentNode) {
      return false;
    }
    if (parentNode.selected) {
      return true;
    }
    return isParentSelected(parentNode, nodeLookup);
  }
  function hasSelector(target, selector, domNode) {
    let current = target;
    do {
      if (current?.matches?.(selector))
        return true;
      if (current === domNode)
        return false;
      current = current?.parentElement;
    } while (current);
    return false;
  }
  function getDragItems(nodeLookup, nodesDraggable, mousePos, nodeId) {
    const dragItems = /* @__PURE__ */ new Map();
    for (const [id2, node] of nodeLookup) {
      if ((node.selected || node.id === nodeId) && (!node.parentId || !isParentSelected(node, nodeLookup)) && (node.draggable || nodesDraggable && typeof node.draggable === "undefined")) {
        const internalNode = nodeLookup.get(id2);
        if (internalNode) {
          dragItems.set(id2, {
            id: id2,
            position: internalNode.position || { x: 0, y: 0 },
            distance: {
              x: mousePos.x - internalNode.internals.positionAbsolute.x,
              y: mousePos.y - internalNode.internals.positionAbsolute.y
            },
            extent: internalNode.extent,
            parentId: internalNode.parentId,
            origin: internalNode.origin,
            expandParent: internalNode.expandParent,
            internals: {
              positionAbsolute: internalNode.internals.positionAbsolute || { x: 0, y: 0 }
            },
            measured: {
              width: internalNode.measured.width ?? 0,
              height: internalNode.measured.height ?? 0
            }
          });
        }
      }
    }
    return dragItems;
  }
  function getEventHandlerParams({ nodeId, dragItems, nodeLookup, dragging = true }) {
    const nodesFromDragItems = [];
    for (const [id2, dragItem] of dragItems) {
      const node2 = nodeLookup.get(id2)?.internals.userNode;
      if (node2) {
        nodesFromDragItems.push({
          ...node2,
          position: dragItem.position,
          dragging
        });
      }
    }
    if (!nodeId) {
      return [nodesFromDragItems[0], nodesFromDragItems];
    }
    const node = nodeLookup.get(nodeId)?.internals.userNode;
    return [
      !node ? nodesFromDragItems[0] : {
        ...node,
        position: dragItems.get(nodeId)?.position || node.position,
        dragging
      },
      nodesFromDragItems
    ];
  }
  function calculateSnapOffset({ dragItems, snapGrid, x, y }) {
    const refDragItem = dragItems.values().next().value;
    if (!refDragItem) {
      return null;
    }
    const refPos = {
      x: x - refDragItem.distance.x,
      y: y - refDragItem.distance.y
    };
    const refPosSnapped = snapPosition(refPos, snapGrid);
    return {
      x: refPosSnapped.x - refPos.x,
      y: refPosSnapped.y - refPos.y
    };
  }
  function XYDrag({ onNodeMouseDown, getStoreItems, onDragStart, onDrag, onDragStop }) {
    let lastPos = { x: null, y: null };
    let autoPanId = 0;
    let dragItems = /* @__PURE__ */ new Map();
    let autoPanStarted = false;
    let mousePosition = { x: 0, y: 0 };
    let containerBounds = null;
    let dragStarted = false;
    let d3Selection = null;
    let abortDrag = false;
    let nodePositionsChanged = false;
    let dragEvent = null;
    function update({ noDragClassName, handleSelector, domNode, isSelectable, nodeId, nodeClickDistance = 0 }) {
      d3Selection = select_default2(domNode);
      function updateNodes({ x, y }) {
        const { nodeLookup, nodeExtent, snapGrid, snapToGrid, nodeOrigin, onNodeDrag, onSelectionDrag, onError, updateNodePositions } = getStoreItems();
        lastPos = { x, y };
        let hasChange = false;
        const isMultiDrag = dragItems.size > 1;
        const nodesBox = isMultiDrag && nodeExtent ? rectToBox(getInternalNodesBounds(dragItems)) : null;
        const multiDragSnapOffset = isMultiDrag && snapToGrid ? calculateSnapOffset({
          dragItems,
          snapGrid,
          x,
          y
        }) : null;
        for (const [id2, dragItem] of dragItems) {
          if (!nodeLookup.has(id2)) {
            continue;
          }
          let nextPosition = { x: x - dragItem.distance.x, y: y - dragItem.distance.y };
          if (snapToGrid) {
            nextPosition = multiDragSnapOffset ? {
              x: Math.round(nextPosition.x + multiDragSnapOffset.x),
              y: Math.round(nextPosition.y + multiDragSnapOffset.y)
            } : snapPosition(nextPosition, snapGrid);
          }
          let adjustedNodeExtent = null;
          if (isMultiDrag && nodeExtent && !dragItem.extent && nodesBox) {
            const { positionAbsolute: positionAbsolute2 } = dragItem.internals;
            const x1 = positionAbsolute2.x - nodesBox.x + nodeExtent[0][0];
            const x2 = positionAbsolute2.x + dragItem.measured.width - nodesBox.x2 + nodeExtent[1][0];
            const y1 = positionAbsolute2.y - nodesBox.y + nodeExtent[0][1];
            const y2 = positionAbsolute2.y + dragItem.measured.height - nodesBox.y2 + nodeExtent[1][1];
            adjustedNodeExtent = [
              [x1, y1],
              [x2, y2]
            ];
          }
          const { position, positionAbsolute } = calculateNodePosition({
            nodeId: id2,
            nextPosition,
            nodeLookup,
            nodeExtent: adjustedNodeExtent ? adjustedNodeExtent : nodeExtent,
            nodeOrigin,
            onError
          });
          hasChange = hasChange || dragItem.position.x !== position.x || dragItem.position.y !== position.y;
          dragItem.position = position;
          dragItem.internals.positionAbsolute = positionAbsolute;
        }
        nodePositionsChanged = nodePositionsChanged || hasChange;
        if (!hasChange) {
          return;
        }
        updateNodePositions(dragItems, true);
        if (dragEvent && (onDrag || onNodeDrag || !nodeId && onSelectionDrag)) {
          const [currentNode, currentNodes] = getEventHandlerParams({
            nodeId,
            dragItems,
            nodeLookup
          });
          onDrag?.(dragEvent, dragItems, currentNode, currentNodes);
          onNodeDrag?.(dragEvent, currentNode, currentNodes);
          if (!nodeId) {
            onSelectionDrag?.(dragEvent, currentNodes);
          }
        }
      }
      async function autoPan() {
        if (!containerBounds) {
          return;
        }
        const { transform: transform2, panBy: panBy2, autoPanSpeed, autoPanOnNodeDrag } = getStoreItems();
        if (!autoPanOnNodeDrag) {
          autoPanStarted = false;
          cancelAnimationFrame(autoPanId);
          return;
        }
        const [xMovement, yMovement] = calcAutoPan(mousePosition, containerBounds, autoPanSpeed);
        if (xMovement !== 0 || yMovement !== 0) {
          lastPos.x = (lastPos.x ?? 0) - xMovement / transform2[2];
          lastPos.y = (lastPos.y ?? 0) - yMovement / transform2[2];
          if (await panBy2({ x: xMovement, y: yMovement })) {
            updateNodes(lastPos);
          }
        }
        autoPanId = requestAnimationFrame(autoPan);
      }
      function startDrag(event) {
        const { nodeLookup, multiSelectionActive, nodesDraggable, transform: transform2, snapGrid, snapToGrid, selectNodesOnDrag, onNodeDragStart, onSelectionDragStart, unselectNodesAndEdges } = getStoreItems();
        dragStarted = true;
        if ((!selectNodesOnDrag || !isSelectable) && !multiSelectionActive && nodeId) {
          if (!nodeLookup.get(nodeId)?.selected) {
            unselectNodesAndEdges();
          }
        }
        if (isSelectable && selectNodesOnDrag && nodeId) {
          onNodeMouseDown?.(nodeId);
        }
        const pointerPos = getPointerPosition(event.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
        lastPos = pointerPos;
        dragItems = getDragItems(nodeLookup, nodesDraggable, pointerPos, nodeId);
        if (dragItems.size > 0 && (onDragStart || onNodeDragStart || !nodeId && onSelectionDragStart)) {
          const [currentNode, currentNodes] = getEventHandlerParams({
            nodeId,
            dragItems,
            nodeLookup
          });
          onDragStart?.(event.sourceEvent, dragItems, currentNode, currentNodes);
          onNodeDragStart?.(event.sourceEvent, currentNode, currentNodes);
          if (!nodeId) {
            onSelectionDragStart?.(event.sourceEvent, currentNodes);
          }
        }
      }
      const d3DragInstance = drag_default().clickDistance(nodeClickDistance).on("start", (event) => {
        const { domNode: domNode2, nodeDragThreshold, transform: transform2, snapGrid, snapToGrid } = getStoreItems();
        containerBounds = domNode2?.getBoundingClientRect() || null;
        abortDrag = false;
        nodePositionsChanged = false;
        dragEvent = event.sourceEvent;
        if (nodeDragThreshold === 0) {
          startDrag(event);
        }
        const pointerPos = getPointerPosition(event.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
        lastPos = pointerPos;
        mousePosition = getEventPosition(event.sourceEvent, containerBounds);
      }).on("drag", (event) => {
        const { autoPanOnNodeDrag, transform: transform2, snapGrid, snapToGrid, nodeDragThreshold, nodeLookup } = getStoreItems();
        const pointerPos = getPointerPosition(event.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
        dragEvent = event.sourceEvent;
        if (event.sourceEvent.type === "touchmove" && event.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
        nodeId && !nodeLookup.has(nodeId)) {
          abortDrag = true;
        }
        if (abortDrag) {
          return;
        }
        if (!autoPanStarted && autoPanOnNodeDrag && dragStarted) {
          autoPanStarted = true;
          autoPan();
        }
        if (!dragStarted) {
          const currentMousePosition = getEventPosition(event.sourceEvent, containerBounds);
          const x = currentMousePosition.x - mousePosition.x;
          const y = currentMousePosition.y - mousePosition.y;
          const distance2 = Math.sqrt(x * x + y * y);
          if (distance2 > nodeDragThreshold) {
            startDrag(event);
          }
        }
        if ((lastPos.x !== pointerPos.xSnapped || lastPos.y !== pointerPos.ySnapped) && dragItems && dragStarted) {
          mousePosition = getEventPosition(event.sourceEvent, containerBounds);
          updateNodes(pointerPos);
        }
      }).on("end", (event) => {
        if (!dragStarted || abortDrag) {
          if (abortDrag && dragItems.size > 0) {
            getStoreItems().updateNodePositions(dragItems, false);
          }
          return;
        }
        autoPanStarted = false;
        dragStarted = false;
        cancelAnimationFrame(autoPanId);
        if (dragItems.size > 0) {
          const { nodeLookup, updateNodePositions, onNodeDragStop, onSelectionDragStop } = getStoreItems();
          if (nodePositionsChanged) {
            updateNodePositions(dragItems, false);
            nodePositionsChanged = false;
          }
          if (onDragStop || onNodeDragStop || !nodeId && onSelectionDragStop) {
            const [currentNode, currentNodes] = getEventHandlerParams({
              nodeId,
              dragItems,
              nodeLookup,
              dragging: false
            });
            onDragStop?.(event.sourceEvent, dragItems, currentNode, currentNodes);
            onNodeDragStop?.(event.sourceEvent, currentNode, currentNodes);
            if (!nodeId) {
              onSelectionDragStop?.(event.sourceEvent, currentNodes);
            }
          }
        }
      }).filter((event) => {
        const target = event.target;
        const isDraggable = !event.button && (!noDragClassName || !hasSelector(target, `.${noDragClassName}`, domNode)) && (!handleSelector || hasSelector(target, handleSelector, domNode));
        return isDraggable;
      });
      d3Selection.call(d3DragInstance);
    }
    function destroy() {
      d3Selection?.on(".drag", null);
    }
    return {
      update,
      destroy
    };
  }
  function getNodesWithinDistance(position, nodeLookup, distance2) {
    const nodes = [];
    const rect = {
      x: position.x - distance2,
      y: position.y - distance2,
      width: distance2 * 2,
      height: distance2 * 2
    };
    for (const node of nodeLookup.values()) {
      if (getOverlappingArea(rect, nodeToRect(node)) > 0) {
        nodes.push(node);
      }
    }
    return nodes;
  }
  var ADDITIONAL_DISTANCE = 250;
  function getClosestHandle(position, connectionRadius, nodeLookup, fromHandle) {
    let closestHandles = [];
    let minDistance = Infinity;
    const closeNodes = getNodesWithinDistance(position, nodeLookup, connectionRadius + ADDITIONAL_DISTANCE);
    for (const node of closeNodes) {
      const allHandles = [...node.internals.handleBounds?.source ?? [], ...node.internals.handleBounds?.target ?? []];
      for (const handle of allHandles) {
        if (fromHandle.nodeId === handle.nodeId && fromHandle.type === handle.type && fromHandle.id === handle.id) {
          continue;
        }
        const { x, y } = getHandlePosition(node, handle, handle.position, true);
        const distance2 = Math.sqrt(Math.pow(x - position.x, 2) + Math.pow(y - position.y, 2));
        if (distance2 > connectionRadius) {
          continue;
        }
        if (distance2 < minDistance) {
          closestHandles = [{ ...handle, x, y }];
          minDistance = distance2;
        } else if (distance2 === minDistance) {
          closestHandles.push({ ...handle, x, y });
        }
      }
    }
    if (!closestHandles.length) {
      return null;
    }
    if (closestHandles.length > 1) {
      const oppositeHandleType = fromHandle.type === "source" ? "target" : "source";
      return closestHandles.find((handle) => handle.type === oppositeHandleType) ?? closestHandles[0];
    }
    return closestHandles[0];
  }
  function getHandle(nodeId, handleType, handleId, nodeLookup, connectionMode, withAbsolutePosition = false) {
    const node = nodeLookup.get(nodeId);
    if (!node) {
      return null;
    }
    const handles = connectionMode === "strict" ? node.internals.handleBounds?.[handleType] : [...node.internals.handleBounds?.source ?? [], ...node.internals.handleBounds?.target ?? []];
    const handle = (handleId ? handles?.find((h) => h.id === handleId) : handles?.[0]) ?? null;
    return handle && withAbsolutePosition ? { ...handle, ...getHandlePosition(node, handle, handle.position, true) } : handle;
  }
  function getHandleType(edgeUpdaterType, handleDomNode) {
    if (edgeUpdaterType) {
      return edgeUpdaterType;
    } else if (handleDomNode?.classList.contains("target")) {
      return "target";
    } else if (handleDomNode?.classList.contains("source")) {
      return "source";
    }
    return null;
  }
  function isConnectionValid(isInsideConnectionRadius, isHandleValid) {
    let isValid = null;
    if (isHandleValid) {
      isValid = true;
    } else if (isInsideConnectionRadius && !isHandleValid) {
      isValid = false;
    }
    return isValid;
  }
  var alwaysValid = () => true;
  function onPointerDown(event, { connectionMode, connectionRadius, handleId, nodeId, edgeUpdaterType, isTarget, domNode, nodeLookup, lib, autoPanOnConnect, flowId, panBy: panBy2, cancelConnection, onConnectStart, onConnect, onConnectEnd, isValidConnection = alwaysValid, onReconnectEnd, updateConnection, getTransform, getFromHandle, autoPanSpeed, dragThreshold = 1, handleDomNode }) {
    const doc = getHostForElement(event.target);
    let autoPanId = 0;
    let closestHandle;
    const { x, y } = getEventPosition(event);
    const handleType = getHandleType(edgeUpdaterType, handleDomNode);
    const containerBounds = domNode?.getBoundingClientRect();
    let connectionStarted = false;
    if (!containerBounds || !handleType) {
      return;
    }
    const fromHandleInternal = getHandle(nodeId, handleType, handleId, nodeLookup, connectionMode);
    if (!fromHandleInternal) {
      return;
    }
    let position = getEventPosition(event, containerBounds);
    let autoPanStarted = false;
    let connection = null;
    let isValid = false;
    let resultHandleDomNode = null;
    function autoPan() {
      if (!autoPanOnConnect || !containerBounds) {
        return;
      }
      const [x2, y2] = calcAutoPan(position, containerBounds, autoPanSpeed);
      panBy2({ x: x2, y: y2 });
      autoPanId = requestAnimationFrame(autoPan);
    }
    const fromHandle = {
      ...fromHandleInternal,
      nodeId,
      type: handleType,
      position: fromHandleInternal.position
    };
    const fromInternalNode = nodeLookup.get(nodeId);
    const from = getHandlePosition(fromInternalNode, fromHandle, Position.Left, true);
    let previousConnection = {
      inProgress: true,
      isValid: null,
      from,
      fromHandle,
      fromPosition: fromHandle.position,
      fromNode: fromInternalNode,
      to: position,
      toHandle: null,
      toPosition: oppositePosition[fromHandle.position],
      toNode: null,
      pointer: position
    };
    function startConnection() {
      connectionStarted = true;
      updateConnection(previousConnection);
      onConnectStart?.(event, { nodeId, handleId, handleType });
    }
    if (dragThreshold === 0) {
      startConnection();
    }
    function onPointerMove(event2) {
      if (!connectionStarted) {
        const { x: evtX, y: evtY } = getEventPosition(event2);
        const dx = evtX - x;
        const dy = evtY - y;
        const nextConnectionStarted = dx * dx + dy * dy > dragThreshold * dragThreshold;
        if (!nextConnectionStarted) {
          return;
        }
        startConnection();
      }
      if (!getFromHandle() || !fromHandle) {
        onPointerUp(event2);
        return;
      }
      const transform2 = getTransform();
      position = getEventPosition(event2, containerBounds);
      closestHandle = getClosestHandle(pointToRendererPoint(position, transform2, false, [1, 1]), connectionRadius, nodeLookup, fromHandle);
      if (!autoPanStarted) {
        autoPan();
        autoPanStarted = true;
      }
      const result = isValidHandle(event2, {
        handle: closestHandle,
        connectionMode,
        fromNodeId: nodeId,
        fromHandleId: handleId,
        fromType: isTarget ? "target" : "source",
        isValidConnection,
        doc,
        lib,
        flowId,
        nodeLookup
      });
      resultHandleDomNode = result.handleDomNode;
      connection = result.connection;
      isValid = isConnectionValid(!!closestHandle, result.isValid);
      const fromInternalNode2 = nodeLookup.get(nodeId);
      const from2 = fromInternalNode2 ? getHandlePosition(fromInternalNode2, fromHandle, Position.Left, true) : previousConnection.from;
      const newConnection = {
        ...previousConnection,
        from: from2,
        isValid,
        to: result.toHandle && isValid ? rendererPointToPoint({ x: result.toHandle.x, y: result.toHandle.y }, transform2) : position,
        toHandle: result.toHandle,
        toPosition: isValid && result.toHandle ? result.toHandle.position : oppositePosition[fromHandle.position],
        toNode: result.toHandle ? nodeLookup.get(result.toHandle.nodeId) : null,
        pointer: position
      };
      updateConnection(newConnection);
      previousConnection = newConnection;
    }
    function onPointerUp(event2) {
      if ("touches" in event2 && event2.touches.length > 0) {
        return;
      }
      if (connectionStarted) {
        if ((closestHandle || resultHandleDomNode) && connection && isValid) {
          onConnect?.(connection);
        }
        const { inProgress, ...connectionState } = previousConnection;
        const finalConnectionState = {
          ...connectionState,
          toPosition: previousConnection.toHandle ? previousConnection.toPosition : null
        };
        onConnectEnd?.(event2, finalConnectionState);
        if (edgeUpdaterType) {
          onReconnectEnd?.(event2, finalConnectionState);
        }
      }
      cancelConnection();
      cancelAnimationFrame(autoPanId);
      autoPanStarted = false;
      isValid = false;
      connection = null;
      resultHandleDomNode = null;
      doc.removeEventListener("mousemove", onPointerMove);
      doc.removeEventListener("mouseup", onPointerUp);
      doc.removeEventListener("touchmove", onPointerMove);
      doc.removeEventListener("touchend", onPointerUp);
    }
    doc.addEventListener("mousemove", onPointerMove);
    doc.addEventListener("mouseup", onPointerUp);
    doc.addEventListener("touchmove", onPointerMove);
    doc.addEventListener("touchend", onPointerUp);
  }
  function isValidHandle(event, { handle, connectionMode, fromNodeId, fromHandleId, fromType, doc, lib, flowId, isValidConnection = alwaysValid, nodeLookup }) {
    const isTarget = fromType === "target";
    const handleDomNode = handle ? doc.querySelector(`.${lib}-flow__handle[data-id="${flowId}-${handle?.nodeId}-${handle?.id}-${handle?.type}"]`) : null;
    const { x, y } = getEventPosition(event);
    const handleBelow = doc.elementFromPoint(x, y);
    const handleToCheck = handleBelow?.classList.contains(`${lib}-flow__handle`) ? handleBelow : handleDomNode;
    const result = {
      handleDomNode: handleToCheck,
      isValid: false,
      connection: null,
      toHandle: null
    };
    if (handleToCheck) {
      const handleType = getHandleType(void 0, handleToCheck);
      const handleNodeId = handleToCheck.getAttribute("data-nodeid");
      const handleId = handleToCheck.getAttribute("data-handleid");
      const connectable = handleToCheck.classList.contains("connectable");
      const connectableEnd = handleToCheck.classList.contains("connectableend");
      if (!handleNodeId || !handleType) {
        return result;
      }
      const connection = {
        source: isTarget ? handleNodeId : fromNodeId,
        sourceHandle: isTarget ? handleId : fromHandleId,
        target: isTarget ? fromNodeId : handleNodeId,
        targetHandle: isTarget ? fromHandleId : handleId
      };
      result.connection = connection;
      const isConnectable = connectable && connectableEnd;
      const isValid = isConnectable && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId);
      result.isValid = isValid && isValidConnection(connection);
      result.toHandle = getHandle(handleNodeId, handleType, handleId, nodeLookup, connectionMode, true);
    }
    return result;
  }
  var XYHandle = {
    onPointerDown,
    isValid: isValidHandle
  };
  function XYMinimap({ domNode, panZoom, getTransform, getViewScale }) {
    const selection2 = select_default2(domNode);
    function update({ translateExtent, width, height, zoomStep = 1, pannable = true, zoomable = true, inversePan = false }) {
      const zoomHandler = (event) => {
        if (event.sourceEvent.type !== "wheel" || !panZoom) {
          return;
        }
        const transform2 = getTransform();
        const factor = event.sourceEvent.ctrlKey && isMacOs() ? 10 : 1;
        const pinchDelta = -event.sourceEvent.deltaY * (event.sourceEvent.deltaMode === 1 ? 0.05 : event.sourceEvent.deltaMode ? 1 : 2e-3) * zoomStep;
        const nextZoom = transform2[2] * Math.pow(2, pinchDelta * factor);
        panZoom.scaleTo(nextZoom);
      };
      let panStart = [0, 0];
      const panStartHandler = (event) => {
        if (event.sourceEvent.type === "mousedown" || event.sourceEvent.type === "touchstart") {
          panStart = [
            event.sourceEvent.clientX ?? event.sourceEvent.touches[0].clientX,
            event.sourceEvent.clientY ?? event.sourceEvent.touches[0].clientY
          ];
        }
      };
      const panHandler = (event) => {
        const transform2 = getTransform();
        if (event.sourceEvent.type !== "mousemove" && event.sourceEvent.type !== "touchmove" || !panZoom) {
          return;
        }
        const panCurrent = [
          event.sourceEvent.clientX ?? event.sourceEvent.touches[0].clientX,
          event.sourceEvent.clientY ?? event.sourceEvent.touches[0].clientY
        ];
        const panDelta = [panCurrent[0] - panStart[0], panCurrent[1] - panStart[1]];
        panStart = panCurrent;
        const moveScale = getViewScale() * Math.max(transform2[2], Math.log(transform2[2])) * (inversePan ? -1 : 1);
        const position = {
          x: transform2[0] - panDelta[0] * moveScale,
          y: transform2[1] - panDelta[1] * moveScale
        };
        const extent = [
          [0, 0],
          [width, height]
        ];
        panZoom.setViewportConstrained({
          x: position.x,
          y: position.y,
          zoom: transform2[2]
        }, extent, translateExtent);
      };
      const zoomAndPanHandler = zoom_default2().on("start", panStartHandler).on("zoom", pannable ? panHandler : null).on("zoom.wheel", zoomable ? zoomHandler : null);
      selection2.call(zoomAndPanHandler, {});
    }
    function destroy() {
      selection2.on("zoom", null);
    }
    return {
      update,
      destroy,
      pointer: pointer_default
    };
  }
  var transformToViewport = (transform2) => ({
    x: transform2.x,
    y: transform2.y,
    zoom: transform2.k
  });
  var viewportToTransform = ({ x, y, zoom }) => identity2.translate(x, y).scale(zoom);
  var isWrappedWithClass = (event, className) => event.target.closest(`.${className}`);
  var isRightClickPan = (panOnDrag, usedButton) => usedButton === 2 && Array.isArray(panOnDrag) && panOnDrag.includes(2);
  var defaultEase = (t2) => ((t2 *= 2) <= 1 ? t2 * t2 * t2 : (t2 -= 2) * t2 * t2 + 2) / 2;
  var getD3Transition = (selection2, duration = 0, ease = defaultEase, onEnd = () => {
  }) => {
    const hasDuration = typeof duration === "number" && duration > 0;
    if (!hasDuration) {
      onEnd();
    }
    return hasDuration ? selection2.transition().duration(duration).ease(ease).on("end", onEnd) : selection2;
  };
  var wheelDelta = (event) => {
    const factor = event.ctrlKey && isMacOs() ? 10 : 1;
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * factor;
  };
  function createPanOnScrollHandler({ zoomPanValues, noWheelClassName, d3Selection, d3Zoom, panOnScrollMode, panOnScrollSpeed, zoomOnPinch, onPanZoomStart, onPanZoom, onPanZoomEnd }) {
    return (event) => {
      if (isWrappedWithClass(event, noWheelClassName)) {
        if (event.ctrlKey) {
          event.preventDefault();
        }
        return false;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      const currentZoom = d3Selection.property("__zoom").k || 1;
      if (event.ctrlKey && zoomOnPinch) {
        const point = pointer_default(event);
        const pinchDelta = wheelDelta(event);
        const zoom = currentZoom * Math.pow(2, pinchDelta);
        d3Zoom.scaleTo(d3Selection, zoom, point, event);
        return;
      }
      const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
      let deltaX = panOnScrollMode === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
      let deltaY = panOnScrollMode === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
      if (!isMacOs() && event.shiftKey && panOnScrollMode !== PanOnScrollMode.Vertical) {
        deltaX = event.deltaY * deltaNormalize;
        deltaY = 0;
      }
      d3Zoom.translateBy(
        d3Selection,
        -(deltaX / currentZoom) * panOnScrollSpeed,
        -(deltaY / currentZoom) * panOnScrollSpeed,
        // @ts-ignore
        { internal: true }
      );
      const nextViewport = transformToViewport(d3Selection.property("__zoom"));
      clearTimeout(zoomPanValues.panScrollTimeout);
      if (!zoomPanValues.isPanScrolling) {
        zoomPanValues.isPanScrolling = true;
        onPanZoomStart?.(event, nextViewport);
      } else {
        onPanZoom?.(event, nextViewport);
      }
      zoomPanValues.panScrollTimeout = setTimeout(() => {
        onPanZoomEnd?.(event, nextViewport);
        zoomPanValues.isPanScrolling = false;
      }, 150);
    };
  }
  function createZoomOnScrollHandler({ noWheelClassName, preventScrolling, d3ZoomHandler }) {
    return function(event, d) {
      const isWheel = event.type === "wheel";
      const preventZoom = !preventScrolling && isWheel && !event.ctrlKey;
      const hasNoWheelClass = isWrappedWithClass(event, noWheelClassName);
      if (event.ctrlKey && isWheel && hasNoWheelClass) {
        event.preventDefault();
      }
      if (preventZoom || hasNoWheelClass) {
        return null;
      }
      event.preventDefault();
      d3ZoomHandler.call(this, event, d);
    };
  }
  function createPanZoomStartHandler({ zoomPanValues, onDraggingChange, onPanZoomStart }) {
    return (event) => {
      if (event.sourceEvent?.internal) {
        return;
      }
      const viewport = transformToViewport(event.transform);
      zoomPanValues.mouseButton = event.sourceEvent?.button || 0;
      zoomPanValues.isZoomingOrPanning = true;
      zoomPanValues.prevViewport = viewport;
      if (event.sourceEvent?.type === "mousedown") {
        onDraggingChange(true);
      }
      if (onPanZoomStart) {
        onPanZoomStart?.(event.sourceEvent, viewport);
      }
    };
  }
  function createPanZoomHandler({ zoomPanValues, panOnDrag, onPaneContextMenu, onTransformChange, onPanZoom }) {
    return (event) => {
      zoomPanValues.usedRightMouseButton = !!(onPaneContextMenu && isRightClickPan(panOnDrag, zoomPanValues.mouseButton ?? 0));
      if (!event.sourceEvent?.sync) {
        onTransformChange([event.transform.x, event.transform.y, event.transform.k]);
      }
      if (onPanZoom && !event.sourceEvent?.internal) {
        onPanZoom?.(event.sourceEvent, transformToViewport(event.transform));
      }
    };
  }
  function createPanZoomEndHandler({ zoomPanValues, panOnDrag, panOnScroll, onDraggingChange, onPanZoomEnd, onPaneContextMenu }) {
    return (event) => {
      if (event.sourceEvent?.internal) {
        return;
      }
      zoomPanValues.isZoomingOrPanning = false;
      if (onPaneContextMenu && isRightClickPan(panOnDrag, zoomPanValues.mouseButton ?? 0) && !zoomPanValues.usedRightMouseButton && event.sourceEvent) {
        onPaneContextMenu(event.sourceEvent);
      }
      zoomPanValues.usedRightMouseButton = false;
      onDraggingChange(false);
      if (onPanZoomEnd) {
        const viewport = transformToViewport(event.transform);
        zoomPanValues.prevViewport = viewport;
        clearTimeout(zoomPanValues.timerId);
        zoomPanValues.timerId = setTimeout(
          () => {
            onPanZoomEnd?.(event.sourceEvent, viewport);
          },
          // we need a setTimeout for panOnScroll to suppress multiple end events fired during scroll
          panOnScroll ? 150 : 0
        );
      }
    };
  }
  function createFilter({ panActivationKeyPressed, zoomActivationKeyPressed, zoomOnScroll, zoomOnPinch, panOnDrag, panOnScroll, zoomOnDoubleClick, userSelectionActive, noWheelClassName, noPanClassName, lib, connectionInProgress }) {
    return (event) => {
      const zoomScroll = zoomActivationKeyPressed || zoomOnScroll;
      const pinchZoom = zoomOnPinch && event.ctrlKey;
      const isWheelEvent = event.type === "wheel";
      if (event.button === 1 && event.type === "mousedown" && (isWrappedWithClass(event, `${lib}-flow__node`) || isWrappedWithClass(event, `${lib}-flow__edge`) || isWrappedWithClass(event, `${lib}-flow__selection`) || isWrappedWithClass(event, `${lib}-flow__nodesselection`))) {
        return true;
      }
      if (!panOnDrag && !zoomScroll && !panOnScroll && !zoomOnDoubleClick && !zoomOnPinch) {
        return false;
      }
      if (userSelectionActive) {
        return false;
      }
      if (connectionInProgress && !isWheelEvent) {
        return false;
      }
      if (isWrappedWithClass(event, noWheelClassName) && isWheelEvent) {
        return false;
      }
      if (isWrappedWithClass(event, noPanClassName) && (!isWheelEvent || panOnScroll && isWheelEvent && !zoomActivationKeyPressed)) {
        return false;
      }
      if (!zoomOnPinch && event.ctrlKey && isWheelEvent) {
        return false;
      }
      if (!zoomOnPinch && event.type === "touchstart" && event.touches?.length > 1) {
        event.preventDefault();
        return false;
      }
      if (!zoomScroll && !panOnScroll && !pinchZoom && isWheelEvent) {
        return false;
      }
      if (!panOnDrag && (event.type === "mousedown" || event.type === "touchstart")) {
        return false;
      }
      if (Array.isArray(panOnDrag) && !panOnDrag.includes(event.button) && event.type === "mousedown") {
        return false;
      }
      const buttonAllowed = Array.isArray(panOnDrag) && panOnDrag.includes(event.button) || !event.button || event.button <= 1;
      return (!event.ctrlKey || isWheelEvent || panActivationKeyPressed) && buttonAllowed;
    };
  }
  function XYPanZoom({ domNode, minZoom, maxZoom, translateExtent, viewport, onPanZoom, onPanZoomStart, onPanZoomEnd, onDraggingChange }) {
    const zoomPanValues = {
      isZoomingOrPanning: false,
      usedRightMouseButton: false,
      prevViewport: {},
      mouseButton: 0,
      timerId: void 0,
      panScrollTimeout: void 0,
      isPanScrolling: false
    };
    const bbox = domNode.getBoundingClientRect();
    let cachedExtent = [
      [0, 0],
      [bbox.width, bbox.height]
    ];
    const extentResizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        cachedExtent = [
          [0, 0],
          [entry.contentRect.width, entry.contentRect.height]
        ];
      }
    }) : null;
    extentResizeObserver?.observe(domNode);
    const d3ZoomInstance = zoom_default2().extent(() => cachedExtent).scaleExtent([minZoom, maxZoom]).translateExtent(translateExtent);
    const d3Selection = select_default2(domNode).call(d3ZoomInstance);
    setViewportConstrained({
      x: viewport.x,
      y: viewport.y,
      zoom: clamp(viewport.zoom, minZoom, maxZoom)
    }, [
      [0, 0],
      [bbox.width, bbox.height]
    ], translateExtent);
    const d3ZoomHandler = d3Selection.on("wheel.zoom");
    const d3DblClickZoomHandler = d3Selection.on("dblclick.zoom");
    d3ZoomInstance.wheelDelta(wheelDelta);
    async function setTransform(transform2, options) {
      if (d3Selection) {
        return new Promise((resolve) => {
          d3ZoomInstance?.interpolate(options?.interpolate === "linear" ? value_default : zoom_default).transform(getD3Transition(d3Selection, options?.duration, options?.ease, () => resolve(true)), transform2);
        });
      }
      return false;
    }
    function update({ noWheelClassName, noPanClassName, onPaneContextMenu, userSelectionActive, panOnScroll, panOnDrag, panOnScrollMode, panOnScrollSpeed, preventScrolling, zoomOnPinch, zoomOnScroll, zoomOnDoubleClick, panActivationKeyPressed = false, zoomActivationKeyPressed, lib, onTransformChange, connectionInProgress, paneClickDistance, selectionOnDrag }) {
      if (userSelectionActive && !zoomPanValues.isZoomingOrPanning) {
        destroy();
      }
      const isPanOnScroll = panOnScroll && !zoomActivationKeyPressed && !userSelectionActive;
      d3ZoomInstance.clickDistance(selectionOnDrag ? Infinity : !isNumeric(paneClickDistance) || paneClickDistance < 0 ? 0 : paneClickDistance);
      const wheelHandler = isPanOnScroll ? createPanOnScrollHandler({
        zoomPanValues,
        noWheelClassName,
        d3Selection,
        d3Zoom: d3ZoomInstance,
        panOnScrollMode,
        panOnScrollSpeed,
        zoomOnPinch,
        onPanZoomStart,
        onPanZoom,
        onPanZoomEnd
      }) : createZoomOnScrollHandler({
        noWheelClassName,
        preventScrolling,
        d3ZoomHandler
      });
      d3Selection.on("wheel.zoom", wheelHandler, { passive: false });
      const startHandler = createPanZoomStartHandler({
        zoomPanValues,
        onDraggingChange,
        onPanZoomStart
      });
      d3ZoomInstance.on("start", startHandler);
      const panZoomHandler = createPanZoomHandler({
        zoomPanValues,
        panOnDrag,
        onPaneContextMenu: !!onPaneContextMenu,
        onPanZoom,
        onTransformChange
      });
      d3ZoomInstance.on("zoom", panZoomHandler);
      const panZoomEndHandler = createPanZoomEndHandler({
        zoomPanValues,
        panOnDrag,
        panOnScroll,
        onPaneContextMenu,
        onPanZoomEnd,
        onDraggingChange
      });
      d3ZoomInstance.on("end", panZoomEndHandler);
      const filter2 = createFilter({
        panActivationKeyPressed,
        zoomActivationKeyPressed,
        panOnDrag,
        zoomOnScroll,
        panOnScroll,
        zoomOnDoubleClick,
        zoomOnPinch,
        userSelectionActive,
        noPanClassName,
        noWheelClassName,
        lib,
        connectionInProgress
      });
      d3ZoomInstance.filter(filter2);
      if (zoomOnDoubleClick) {
        d3Selection.on("dblclick.zoom", d3DblClickZoomHandler);
      } else {
        d3Selection.on("dblclick.zoom", null);
      }
    }
    function destroy() {
      d3ZoomInstance.on("zoom", null);
    }
    async function setViewportConstrained(viewport2, extent, translateExtent2) {
      const nextTransform = viewportToTransform(viewport2);
      const contrainedTransform = d3ZoomInstance?.constrain()(nextTransform, extent, translateExtent2);
      if (contrainedTransform) {
        await setTransform(contrainedTransform);
      }
      return contrainedTransform;
    }
    async function setViewport(viewport2, options) {
      const nextTransform = viewportToTransform(viewport2);
      await setTransform(nextTransform, options);
      return nextTransform;
    }
    function syncViewport(viewport2) {
      if (d3Selection) {
        const nextTransform = viewportToTransform(viewport2);
        const currentTransform = d3Selection.property("__zoom");
        if (currentTransform.k !== viewport2.zoom || currentTransform.x !== viewport2.x || currentTransform.y !== viewport2.y) {
          d3ZoomInstance?.transform(d3Selection, nextTransform, null, { sync: true });
        }
      }
    }
    function getViewport() {
      const transform2 = d3Selection ? transform(d3Selection.node()) : { x: 0, y: 0, k: 1 };
      return { x: transform2.x, y: transform2.y, zoom: transform2.k };
    }
    async function scaleTo(zoom, options) {
      if (d3Selection) {
        return new Promise((resolve) => {
          d3ZoomInstance?.interpolate(options?.interpolate === "linear" ? value_default : zoom_default).scaleTo(getD3Transition(d3Selection, options?.duration, options?.ease, () => resolve(true)), zoom);
        });
      }
      return false;
    }
    async function scaleBy(factor, options) {
      if (d3Selection) {
        return new Promise((resolve) => {
          d3ZoomInstance?.interpolate(options?.interpolate === "linear" ? value_default : zoom_default).scaleBy(getD3Transition(d3Selection, options?.duration, options?.ease, () => resolve(true)), factor);
        });
      }
      return false;
    }
    function setScaleExtent(scaleExtent) {
      d3ZoomInstance?.scaleExtent(scaleExtent);
    }
    function setTranslateExtent(translateExtent2) {
      d3ZoomInstance?.translateExtent(translateExtent2);
    }
    function setClickDistance(distance2) {
      const validDistance = !isNumeric(distance2) || distance2 < 0 ? 0 : distance2;
      d3ZoomInstance?.clickDistance(validDistance);
    }
    return {
      update,
      destroy,
      setViewport,
      setViewportConstrained,
      getViewport,
      scaleTo,
      scaleBy,
      setScaleExtent,
      setTranslateExtent,
      syncViewport,
      setClickDistance
    };
  }
  var ResizeControlVariant;
  (function(ResizeControlVariant2) {
    ResizeControlVariant2["Line"] = "line";
    ResizeControlVariant2["Handle"] = "handle";
  })(ResizeControlVariant || (ResizeControlVariant = {}));
  function getResizeDirection({ width, prevWidth, height, prevHeight, affectsX, affectsY }) {
    const deltaWidth = width - prevWidth;
    const deltaHeight = height - prevHeight;
    const direction = [deltaWidth > 0 ? 1 : deltaWidth < 0 ? -1 : 0, deltaHeight > 0 ? 1 : deltaHeight < 0 ? -1 : 0];
    if (deltaWidth && affectsX) {
      direction[0] = direction[0] * -1;
    }
    if (deltaHeight && affectsY) {
      direction[1] = direction[1] * -1;
    }
    return direction;
  }
  function getControlDirection(controlPosition) {
    const isHorizontal = controlPosition.includes("right") || controlPosition.includes("left");
    const isVertical = controlPosition.includes("bottom") || controlPosition.includes("top");
    const affectsX = controlPosition.includes("left");
    const affectsY = controlPosition.includes("top");
    return {
      isHorizontal,
      isVertical,
      affectsX,
      affectsY
    };
  }
  function getLowerExtentClamp(lowerExtent, lowerBound) {
    return Math.max(0, lowerBound - lowerExtent);
  }
  function getUpperExtentClamp(upperExtent, upperBound) {
    return Math.max(0, upperExtent - upperBound);
  }
  function getSizeClamp(size, minSize, maxSize) {
    return Math.max(0, minSize - size, size - maxSize);
  }
  function xor(a, b) {
    return a ? !b : b;
  }
  function getDimensionsAfterResize(startValues, controlDirection, pointerPosition, boundaries, keepAspectRatio, nodeOrigin, extent, childExtent) {
    let { affectsX, affectsY } = controlDirection;
    const { isHorizontal, isVertical } = controlDirection;
    const isDiagonal = isHorizontal && isVertical;
    const { xSnapped, ySnapped } = pointerPosition;
    const { minWidth, maxWidth, minHeight, maxHeight } = boundaries;
    const { x: startX, y: startY, width: startWidth, height: startHeight, aspectRatio } = startValues;
    let distX = Math.floor(isHorizontal ? xSnapped - startValues.pointerX : 0);
    let distY = Math.floor(isVertical ? ySnapped - startValues.pointerY : 0);
    const newWidth = startWidth + (affectsX ? -distX : distX);
    const newHeight = startHeight + (affectsY ? -distY : distY);
    const originOffsetX = -nodeOrigin[0] * startWidth;
    const originOffsetY = -nodeOrigin[1] * startHeight;
    let clampX = getSizeClamp(newWidth, minWidth, maxWidth);
    let clampY = getSizeClamp(newHeight, minHeight, maxHeight);
    if (extent) {
      let xExtentClamp = 0;
      let yExtentClamp = 0;
      if (affectsX && distX < 0) {
        xExtentClamp = getLowerExtentClamp(startX + distX + originOffsetX, extent[0][0]);
      } else if (!affectsX && distX > 0) {
        xExtentClamp = getUpperExtentClamp(startX + newWidth + originOffsetX, extent[1][0]);
      }
      if (affectsY && distY < 0) {
        yExtentClamp = getLowerExtentClamp(startY + distY + originOffsetY, extent[0][1]);
      } else if (!affectsY && distY > 0) {
        yExtentClamp = getUpperExtentClamp(startY + newHeight + originOffsetY, extent[1][1]);
      }
      clampX = Math.max(clampX, xExtentClamp);
      clampY = Math.max(clampY, yExtentClamp);
    }
    if (childExtent) {
      let xExtentClamp = 0;
      let yExtentClamp = 0;
      if (affectsX && distX > 0) {
        xExtentClamp = getUpperExtentClamp(startX + distX, childExtent[0][0]);
      } else if (!affectsX && distX < 0) {
        xExtentClamp = getLowerExtentClamp(startX + newWidth, childExtent[1][0]);
      }
      if (affectsY && distY > 0) {
        yExtentClamp = getUpperExtentClamp(startY + distY, childExtent[0][1]);
      } else if (!affectsY && distY < 0) {
        yExtentClamp = getLowerExtentClamp(startY + newHeight, childExtent[1][1]);
      }
      clampX = Math.max(clampX, xExtentClamp);
      clampY = Math.max(clampY, yExtentClamp);
    }
    if (keepAspectRatio) {
      if (isHorizontal) {
        const aspectHeightClamp = getSizeClamp(newWidth / aspectRatio, minHeight, maxHeight) * aspectRatio;
        clampX = Math.max(clampX, aspectHeightClamp);
        if (extent) {
          let aspectExtentClamp = 0;
          if (!affectsX && !affectsY || affectsX && !affectsY && isDiagonal) {
            aspectExtentClamp = getUpperExtentClamp(startY + originOffsetY + newWidth / aspectRatio, extent[1][1]) * aspectRatio;
          } else {
            aspectExtentClamp = getLowerExtentClamp(startY + originOffsetY + (affectsX ? distX : -distX) / aspectRatio, extent[0][1]) * aspectRatio;
          }
          clampX = Math.max(clampX, aspectExtentClamp);
        }
        if (childExtent) {
          let aspectExtentClamp = 0;
          if (!affectsX && !affectsY || affectsX && !affectsY && isDiagonal) {
            aspectExtentClamp = getLowerExtentClamp(startY + newWidth / aspectRatio, childExtent[1][1]) * aspectRatio;
          } else {
            aspectExtentClamp = getUpperExtentClamp(startY + (affectsX ? distX : -distX) / aspectRatio, childExtent[0][1]) * aspectRatio;
          }
          clampX = Math.max(clampX, aspectExtentClamp);
        }
      }
      if (isVertical) {
        const aspectWidthClamp = getSizeClamp(newHeight * aspectRatio, minWidth, maxWidth) / aspectRatio;
        clampY = Math.max(clampY, aspectWidthClamp);
        if (extent) {
          let aspectExtentClamp = 0;
          if (!affectsX && !affectsY || affectsY && !affectsX && isDiagonal) {
            aspectExtentClamp = getUpperExtentClamp(startX + newHeight * aspectRatio + originOffsetX, extent[1][0]) / aspectRatio;
          } else {
            aspectExtentClamp = getLowerExtentClamp(startX + (affectsY ? distY : -distY) * aspectRatio + originOffsetX, extent[0][0]) / aspectRatio;
          }
          clampY = Math.max(clampY, aspectExtentClamp);
        }
        if (childExtent) {
          let aspectExtentClamp = 0;
          if (!affectsX && !affectsY || affectsY && !affectsX && isDiagonal) {
            aspectExtentClamp = getLowerExtentClamp(startX + newHeight * aspectRatio, childExtent[1][0]) / aspectRatio;
          } else {
            aspectExtentClamp = getUpperExtentClamp(startX + (affectsY ? distY : -distY) * aspectRatio, childExtent[0][0]) / aspectRatio;
          }
          clampY = Math.max(clampY, aspectExtentClamp);
        }
      }
    }
    distY = distY + (distY < 0 ? clampY : -clampY);
    distX = distX + (distX < 0 ? clampX : -clampX);
    if (keepAspectRatio) {
      if (isDiagonal) {
        if (newWidth > newHeight * aspectRatio) {
          distY = (xor(affectsX, affectsY) ? -distX : distX) / aspectRatio;
        } else {
          distX = (xor(affectsX, affectsY) ? -distY : distY) * aspectRatio;
        }
      } else {
        if (isHorizontal) {
          distY = distX / aspectRatio;
          affectsY = affectsX;
        } else {
          distX = distY * aspectRatio;
          affectsX = affectsY;
        }
      }
    }
    const x = affectsX ? startX + distX : startX;
    const y = affectsY ? startY + distY : startY;
    return {
      width: startWidth + (affectsX ? -distX : distX),
      height: startHeight + (affectsY ? -distY : distY),
      x: nodeOrigin[0] * distX * (!affectsX ? 1 : -1) + x,
      y: nodeOrigin[1] * distY * (!affectsY ? 1 : -1) + y
    };
  }
  var initPrevValues = { width: 0, height: 0, x: 0, y: 0 };
  var initStartValues = {
    ...initPrevValues,
    pointerX: 0,
    pointerY: 0,
    aspectRatio: 1
  };
  function nodeToChildExtent(child, parent, nodeOrigin) {
    const x = parent.position.x + child.position.x;
    const y = parent.position.y + child.position.y;
    const width = child.measured.width ?? 0;
    const height = child.measured.height ?? 0;
    const originOffsetX = nodeOrigin[0] * width;
    const originOffsetY = nodeOrigin[1] * height;
    return [
      [x - originOffsetX, y - originOffsetY],
      [x + width - originOffsetX, y + height - originOffsetY]
    ];
  }
  function XYResizer({ domNode, nodeId, getStoreItems, onChange, onEnd }) {
    const selection2 = select_default2(domNode);
    let params = {
      controlDirection: getControlDirection("bottom-right"),
      boundaries: {
        minWidth: 0,
        minHeight: 0,
        maxWidth: Number.MAX_VALUE,
        maxHeight: Number.MAX_VALUE
      },
      resizeDirection: void 0,
      keepAspectRatio: false
    };
    function update({ controlPosition, boundaries, keepAspectRatio, resizeDirection, onResizeStart, onResize, onResizeEnd, shouldResize }) {
      let prevValues = { ...initPrevValues };
      let startValues = { ...initStartValues };
      params = {
        boundaries,
        resizeDirection,
        keepAspectRatio,
        controlDirection: getControlDirection(controlPosition)
      };
      let node = void 0;
      let containerBounds = null;
      let childNodes = [];
      let parentNode = void 0;
      let nodeExtent = void 0;
      let childExtent = void 0;
      const dragHandler = drag_default().on("start", (event) => {
        const { nodeLookup, transform: transform2, snapGrid, snapToGrid, nodeOrigin, paneDomNode } = getStoreItems();
        node = nodeLookup.get(nodeId);
        if (!node) {
          return;
        }
        containerBounds = paneDomNode?.getBoundingClientRect() ?? null;
        const { xSnapped, ySnapped } = getPointerPosition(event.sourceEvent, {
          transform: transform2,
          snapGrid,
          snapToGrid,
          containerBounds
        });
        prevValues = {
          width: node.measured.width ?? 0,
          height: node.measured.height ?? 0,
          x: node.position.x ?? 0,
          y: node.position.y ?? 0
        };
        startValues = {
          ...prevValues,
          pointerX: xSnapped,
          pointerY: ySnapped,
          aspectRatio: prevValues.width / prevValues.height
        };
        parentNode = void 0;
        nodeExtent = isCoordinateExtent(node.extent) ? node.extent : void 0;
        if (node.parentId && (node.extent === "parent" || node.expandParent)) {
          parentNode = nodeLookup.get(node.parentId);
        }
        if (parentNode && node.extent === "parent") {
          nodeExtent = [
            [0, 0],
            [parentNode.measured.width, parentNode.measured.height]
          ];
        }
        childNodes = [];
        childExtent = void 0;
        for (const [childId, child] of nodeLookup) {
          if (child.parentId === nodeId) {
            childNodes.push({
              id: childId,
              position: { ...child.position },
              extent: child.extent
            });
            if (child.extent === "parent" || child.expandParent) {
              const extent = nodeToChildExtent(child, node, child.origin ?? nodeOrigin);
              if (childExtent) {
                childExtent = [
                  [Math.min(extent[0][0], childExtent[0][0]), Math.min(extent[0][1], childExtent[0][1])],
                  [Math.max(extent[1][0], childExtent[1][0]), Math.max(extent[1][1], childExtent[1][1])]
                ];
              } else {
                childExtent = extent;
              }
            }
          }
        }
        onResizeStart?.(event, { ...prevValues });
      }).on("drag", (event) => {
        const { transform: transform2, snapGrid, snapToGrid, nodeOrigin: storeNodeOrigin } = getStoreItems();
        const pointerPosition = getPointerPosition(event.sourceEvent, {
          transform: transform2,
          snapGrid,
          snapToGrid,
          containerBounds
        });
        const childChanges = [];
        if (!node) {
          return;
        }
        const { x: prevX, y: prevY, width: prevWidth, height: prevHeight } = prevValues;
        const change = {};
        const nodeOrigin = node.origin ?? storeNodeOrigin;
        const { width, height, x, y } = getDimensionsAfterResize(startValues, params.controlDirection, pointerPosition, params.boundaries, params.keepAspectRatio, nodeOrigin, nodeExtent, childExtent);
        const isWidthChange = width !== prevWidth;
        const isHeightChange = height !== prevHeight;
        const isXPosChange = x !== prevX && isWidthChange;
        const isYPosChange = y !== prevY && isHeightChange;
        if (!isXPosChange && !isYPosChange && !isWidthChange && !isHeightChange) {
          return;
        }
        const lastValid = {
          prevValues: { ...prevValues },
          startX: startValues.x,
          startY: startValues.y,
          childNodes: childNodes.map((child) => ({
            ...child,
            position: { ...child.position }
          }))
        };
        if (isXPosChange || isYPosChange || nodeOrigin[0] === 1 || nodeOrigin[1] === 1) {
          change.x = isXPosChange ? x : prevValues.x;
          change.y = isYPosChange ? y : prevValues.y;
          prevValues.x = change.x;
          prevValues.y = change.y;
          if (childNodes.length > 0) {
            const xChange = x - prevX;
            const yChange = y - prevY;
            for (const childNode of childNodes) {
              childNode.position = {
                x: childNode.position.x - xChange + nodeOrigin[0] * (width - prevWidth),
                y: childNode.position.y - yChange + nodeOrigin[1] * (height - prevHeight)
              };
              childChanges.push(childNode);
            }
          }
        }
        if (isWidthChange || isHeightChange) {
          change.width = isWidthChange && (!params.resizeDirection || params.resizeDirection === "horizontal") ? width : prevValues.width;
          change.height = isHeightChange && (!params.resizeDirection || params.resizeDirection === "vertical") ? height : prevValues.height;
          prevValues.width = change.width;
          prevValues.height = change.height;
        }
        if (parentNode && node.expandParent) {
          const xLimit = nodeOrigin[0] * (change.width ?? 0);
          if (change.x && change.x < xLimit) {
            prevValues.x = xLimit;
            startValues.x = startValues.x - (change.x - xLimit);
          }
          const yLimit = nodeOrigin[1] * (change.height ?? 0);
          if (change.y && change.y < yLimit) {
            prevValues.y = yLimit;
            startValues.y = startValues.y - (change.y - yLimit);
          }
        }
        const direction = getResizeDirection({
          width: prevValues.width,
          prevWidth,
          height: prevValues.height,
          prevHeight,
          affectsX: params.controlDirection.affectsX,
          affectsY: params.controlDirection.affectsY
        });
        const nextValues = { ...prevValues, direction };
        const callResize = shouldResize?.(event, nextValues);
        if (callResize === false) {
          prevValues = lastValid.prevValues;
          startValues.x = lastValid.startX;
          startValues.y = lastValid.startY;
          childNodes.forEach((child, i) => {
            child.position = lastValid.childNodes[i].position;
          });
          return;
        }
        onResize?.(event, nextValues);
        onChange(change, childChanges);
      }).on("end", (event) => {
        onResizeEnd?.(event, { ...prevValues });
        onEnd?.({ ...prevValues });
      });
      selection2.call(dragHandler);
    }
    function destroy() {
      selection2.on(".drag", null);
    }
    return {
      update,
      destroy
    };
  }

  // node_modules/zustand/esm/traditional.mjs
  var import_react = __toESM(require_react(), 1);
  var import_with_selector = __toESM(require_with_selector(), 1);

  // node_modules/zustand/esm/vanilla.mjs
  var import_meta = {};
  var createStoreImpl = (createState) => {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (!Object.is(nextState, state)) {
        const previousState = state;
        state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    };
    const getState = () => state;
    const getInitialState2 = () => initialState;
    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const destroy = () => {
      if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production") {
        console.warn(
          "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
        );
      }
      listeners.clear();
    };
    const api = { setState, getState, getInitialState: getInitialState2, subscribe, destroy };
    const initialState = state = createState(setState, getState, api);
    return api;
  };
  var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

  // node_modules/zustand/esm/traditional.mjs
  var { useDebugValue } = import_react.default;
  var { useSyncExternalStoreWithSelector } = import_with_selector.default;
  var identity3 = (arg) => arg;
  function useStoreWithEqualityFn(api, selector = identity3, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(
      api.subscribe,
      api.getState,
      api.getServerState || api.getInitialState,
      selector,
      equalityFn
    );
    useDebugValue(slice);
    return slice;
  }
  var createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
    const api = createStore(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
  };
  var createWithEqualityFn = (createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;

  // node_modules/zustand/esm/shallow.mjs
  function shallow$1(objA, objB) {
    if (Object.is(objA, objB)) {
      return true;
    }
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
      return false;
    }
    if (objA instanceof Map && objB instanceof Map) {
      if (objA.size !== objB.size) return false;
      for (const [key, value] of objA) {
        if (!Object.is(value, objB.get(key))) {
          return false;
        }
      }
      return true;
    }
    if (objA instanceof Set && objB instanceof Set) {
      if (objA.size !== objB.size) return false;
      for (const value of objA) {
        if (!objB.has(value)) {
          return false;
        }
      }
      return true;
    }
    const keysA = Object.keys(objA);
    if (keysA.length !== Object.keys(objB).length) {
      return false;
    }
    for (const keyA of keysA) {
      if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
        return false;
      }
    }
    return true;
  }

  // node_modules/@xyflow/react/dist/esm/index.js
  var import_react_dom = __toESM(require_react_dom());
  var StoreContext = (0, import_react2.createContext)(null);
  var Provider$1 = StoreContext.Provider;
  var zustandErrorMessage = errorMessages["error001"]("react");
  function useStore(selector, equalityFn) {
    const store = (0, import_react2.useContext)(StoreContext);
    if (store === null) {
      throw new Error(zustandErrorMessage);
    }
    return useStoreWithEqualityFn(store, selector, equalityFn);
  }
  function useStoreApi() {
    const store = (0, import_react2.useContext)(StoreContext);
    if (store === null) {
      throw new Error(zustandErrorMessage);
    }
    return (0, import_react2.useMemo)(() => ({
      getState: store.getState,
      setState: store.setState,
      subscribe: store.subscribe
    }), [store]);
  }
  var style = { display: "none" };
  var ariaLiveStyle = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)"
  };
  var ARIA_NODE_DESC_KEY = "react-flow__node-desc";
  var ARIA_EDGE_DESC_KEY = "react-flow__edge-desc";
  var ARIA_LIVE_MESSAGE = "react-flow__aria-live";
  var ariaLiveSelector = (s) => s.ariaLiveMessage;
  var ariaLabelConfigSelector = (s) => s.ariaLabelConfig;
  function AriaLiveMessage({ rfId }) {
    const ariaLiveMessage = useStore(ariaLiveSelector);
    return (0, import_jsx_runtime.jsx)("div", { id: `${ARIA_LIVE_MESSAGE}-${rfId}`, "aria-live": "assertive", "aria-atomic": "true", style: ariaLiveStyle, children: ariaLiveMessage });
  }
  function A11yDescriptions({ rfId, disableKeyboardA11y }) {
    const ariaLabelConfig = useStore(ariaLabelConfigSelector);
    return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("div", { id: `${ARIA_NODE_DESC_KEY}-${rfId}`, style, children: disableKeyboardA11y ? ariaLabelConfig["node.a11yDescription.default"] : ariaLabelConfig["node.a11yDescription.keyboardDisabled"] }), (0, import_jsx_runtime.jsx)("div", { id: `${ARIA_EDGE_DESC_KEY}-${rfId}`, style, children: ariaLabelConfig["edge.a11yDescription.default"] }), !disableKeyboardA11y && (0, import_jsx_runtime.jsx)(AriaLiveMessage, { rfId })] });
  }
  var Panel = (0, import_react2.forwardRef)(({ position = "top-left", children: children2, className, style: style2, ...rest }, ref) => {
    const positionClasses = `${position}`.split("-");
    return (0, import_jsx_runtime.jsx)("div", { className: cc(["react-flow__panel", className, ...positionClasses]), style: style2, ref, ...rest, children: children2 });
  });
  Panel.displayName = "Panel";
  var link = `https://reactflow.dev${true ? "?utm_source=attribution" : "/attribution"}`;
  function Attribution({ proOptions, position = "bottom-right" }) {
    (0, import_react2.useEffect)(() => {
      if (true) {
        return;
      }
      handleAttributionWarning("react");
    }, []);
    if (proOptions?.hideAttribution) {
      return null;
    }
    return (0, import_jsx_runtime.jsx)(Panel, { position, className: "react-flow__attribution", "data-message": `Please only hide this attribution when you are subscribed to React Flow Pro: ${link}`, children: (0, import_jsx_runtime.jsx)("a", { href: link, target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
  }
  var selector$l = (s) => {
    const selectedNodes = [];
    const selectedEdges = [];
    for (const [, node] of s.nodeLookup) {
      if (node.selected) {
        selectedNodes.push(node.internals.userNode);
      }
    }
    for (const [, edge] of s.edgeLookup) {
      if (edge.selected) {
        selectedEdges.push(edge);
      }
    }
    return { selectedNodes, selectedEdges };
  };
  var selectId = (obj) => obj.id;
  function areEqual$1(a, b) {
    return shallow$1(a.selectedNodes.map(selectId), b.selectedNodes.map(selectId)) && shallow$1(a.selectedEdges.map(selectId), b.selectedEdges.map(selectId));
  }
  function SelectionListenerInner({ onSelectionChange }) {
    const store = useStoreApi();
    const { selectedNodes, selectedEdges } = useStore(selector$l, areEqual$1);
    (0, import_react2.useEffect)(() => {
      const params = { nodes: selectedNodes, edges: selectedEdges };
      onSelectionChange?.(params);
      store.getState().onSelectionChangeHandlers.forEach((fn) => fn(params));
    }, [selectedNodes, selectedEdges, onSelectionChange]);
    return null;
  }
  var changeSelector = (s) => !!s.onSelectionChangeHandlers;
  function SelectionListener({ onSelectionChange }) {
    const storeHasSelectionChangeHandlers = useStore(changeSelector);
    if (onSelectionChange || storeHasSelectionChangeHandlers) {
      return (0, import_jsx_runtime.jsx)(SelectionListenerInner, { onSelectionChange });
    }
    return null;
  }
  var defaultNodeOrigin = [0, 0];
  var defaultViewport = { x: 0, y: 0, zoom: 1 };
  var reactFlowFieldsToTrack = [
    "nodes",
    "edges",
    "defaultNodes",
    "defaultEdges",
    "onConnect",
    "onConnectStart",
    "onConnectEnd",
    "onClickConnectStart",
    "onClickConnectEnd",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "nodesFocusable",
    "edgesFocusable",
    "edgesReconnectable",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "minZoom",
    "maxZoom",
    "nodeExtent",
    "onNodesChange",
    "onEdgesChange",
    "elementsSelectable",
    "connectionMode",
    "snapGrid",
    "snapToGrid",
    "translateExtent",
    "connectOnClick",
    "defaultEdgeOptions",
    "fitView",
    "fitViewOptions",
    "onNodesDelete",
    "onEdgesDelete",
    "onDelete",
    "onNodeDrag",
    "onNodeDragStart",
    "onNodeDragStop",
    "onSelectionDrag",
    "onSelectionDragStart",
    "onSelectionDragStop",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "noPanClassName",
    "nodeOrigin",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onError",
    "connectionRadius",
    "isValidConnection",
    "selectNodesOnDrag",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "onBeforeDelete",
    "debug",
    "autoPanSpeed",
    "ariaLabelConfig",
    "zIndexMode"
  ];
  var fieldsToTrack = [...reactFlowFieldsToTrack, "rfId"];
  var selector$k = (s) => ({
    setNodes: s.setNodes,
    setEdges: s.setEdges,
    setMinZoom: s.setMinZoom,
    setMaxZoom: s.setMaxZoom,
    setTranslateExtent: s.setTranslateExtent,
    setNodeExtent: s.setNodeExtent,
    reset: s.reset,
    setDefaultNodesAndEdges: s.setDefaultNodesAndEdges
  });
  var initPrevValues2 = {
    /*
     * these are values that are also passed directly to other components
     * than the StoreUpdater. We can reduce the number of setStore calls
     * by setting the same values here as prev fields.
     */
    translateExtent: infiniteExtent,
    nodeOrigin: defaultNodeOrigin,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: true,
    noPanClassName: "nopan",
    rfId: "1"
  };
  function StoreUpdater(props) {
    const { setNodes, setEdges, setMinZoom, setMaxZoom, setTranslateExtent, setNodeExtent, reset, setDefaultNodesAndEdges } = useStore(selector$k, shallow$1);
    const store = useStoreApi();
    (0, import_react2.useEffect)(() => {
      setDefaultNodesAndEdges(props.defaultNodes, props.defaultEdges);
      return () => {
        previousFields.current = initPrevValues2;
        reset();
      };
    }, []);
    const previousFields = (0, import_react2.useRef)(initPrevValues2);
    (0, import_react2.useEffect)(
      () => {
        for (const fieldName of fieldsToTrack) {
          const fieldValue = props[fieldName];
          const previousFieldValue = previousFields.current[fieldName];
          if (fieldValue === previousFieldValue)
            continue;
          if (typeof props[fieldName] === "undefined")
            continue;
          if (fieldName === "nodes")
            setNodes(fieldValue);
          else if (fieldName === "edges")
            setEdges(fieldValue);
          else if (fieldName === "minZoom")
            setMinZoom(fieldValue);
          else if (fieldName === "maxZoom")
            setMaxZoom(fieldValue);
          else if (fieldName === "translateExtent")
            setTranslateExtent(fieldValue);
          else if (fieldName === "nodeExtent")
            setNodeExtent(fieldValue);
          else if (fieldName === "ariaLabelConfig")
            store.setState({ ariaLabelConfig: mergeAriaLabelConfig(fieldValue) });
          else if (fieldName === "fitView")
            store.setState({ fitViewQueued: fieldValue });
          else if (fieldName === "fitViewOptions")
            store.setState({ fitViewOptions: fieldValue });
          else
            store.setState({ [fieldName]: fieldValue });
        }
        previousFields.current = props;
      },
      // Only re-run the effect if one of the fields we track changes
      fieldsToTrack.map((fieldName) => props[fieldName])
    );
    return null;
  }
  function getMediaQuery() {
    if (typeof window === "undefined" || !window.matchMedia) {
      return null;
    }
    return window.matchMedia("(prefers-color-scheme: dark)");
  }
  function useColorModeClass(colorMode) {
    const [colorModeClass, setColorModeClass] = (0, import_react2.useState)(colorMode === "system" ? null : colorMode);
    (0, import_react2.useEffect)(() => {
      if (colorMode !== "system") {
        setColorModeClass(colorMode);
        return;
      }
      const mediaQuery = getMediaQuery();
      const updateColorModeClass = () => setColorModeClass(mediaQuery?.matches ? "dark" : "light");
      updateColorModeClass();
      mediaQuery?.addEventListener("change", updateColorModeClass);
      return () => {
        mediaQuery?.removeEventListener("change", updateColorModeClass);
      };
    }, [colorMode]);
    return colorModeClass !== null ? colorModeClass : getMediaQuery()?.matches ? "dark" : "light";
  }
  var defaultDoc = typeof document !== "undefined" ? document : null;
  function useKeyPress(keyCode = null, options = { target: defaultDoc, actInsideInputWithModifier: true }) {
    const [keyPressed, setKeyPressed] = (0, import_react2.useState)(false);
    const modifierPressed = (0, import_react2.useRef)(false);
    const pressedKeys = (0, import_react2.useRef)(/* @__PURE__ */ new Set([]));
    const [keyCodes, keysToWatch] = (0, import_react2.useMemo)(() => {
      if (keyCode !== null) {
        const keyCodeArr = Array.isArray(keyCode) ? keyCode : [keyCode];
        const keys = keyCodeArr.filter((kc) => typeof kc === "string").map((kc) => kc.replace(/\+/g, "\n").replace("\n\n", "\n+").split("\n"));
        const keysFlat = keys.reduce((res, item) => res.concat(...item), []);
        return [keys, keysFlat];
      }
      return [[], []];
    }, [keyCode]);
    (0, import_react2.useEffect)(() => {
      const target = options?.target ?? defaultDoc;
      const actInsideInputWithModifier = options?.actInsideInputWithModifier ?? true;
      if (keyCode !== null) {
        const downHandler = (event) => {
          modifierPressed.current = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
          const preventAction = (!modifierPressed.current || modifierPressed.current && !actInsideInputWithModifier) && isInputDOMNode(event);
          if (preventAction) {
            return false;
          }
          const keyOrCode = useKeyOrCode(event.code, keysToWatch);
          pressedKeys.current.add(event[keyOrCode]);
          if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
            const target2 = event.composedPath?.()?.[0] || event.target;
            const isInteractiveElement = target2?.nodeName === "BUTTON" || target2?.nodeName === "A";
            if (options.preventDefault !== false && (modifierPressed.current || !isInteractiveElement)) {
              event.preventDefault();
            }
            setKeyPressed(true);
          }
        };
        const upHandler = (event) => {
          const keyOrCode = useKeyOrCode(event.code, keysToWatch);
          if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
            setKeyPressed(false);
            pressedKeys.current.clear();
          } else {
            pressedKeys.current.delete(event[keyOrCode]);
          }
          if (event.key === "Meta") {
            pressedKeys.current.clear();
          }
          modifierPressed.current = false;
        };
        const resetHandler = () => {
          pressedKeys.current.clear();
          setKeyPressed(false);
        };
        target?.addEventListener("keydown", downHandler);
        target?.addEventListener("keyup", upHandler);
        window.addEventListener("blur", resetHandler);
        window.addEventListener("contextmenu", resetHandler);
        return () => {
          target?.removeEventListener("keydown", downHandler);
          target?.removeEventListener("keyup", upHandler);
          window.removeEventListener("blur", resetHandler);
          window.removeEventListener("contextmenu", resetHandler);
        };
      }
    }, [keyCode, setKeyPressed]);
    return keyPressed;
  }
  function isMatchingKey(keyCodes, pressedKeys, isUp) {
    return keyCodes.filter((keys) => isUp || keys.length === pressedKeys.size).some((keys) => keys.every((k) => pressedKeys.has(k)));
  }
  function useKeyOrCode(eventCode, keysToWatch) {
    return keysToWatch.includes(eventCode) ? "code" : "key";
  }
  var useViewportHelper = () => {
    const store = useStoreApi();
    return (0, import_react2.useMemo)(() => {
      return {
        zoomIn: async (options) => {
          const { panZoom } = store.getState();
          return panZoom ? panZoom.scaleBy(1.2, options) : false;
        },
        zoomOut: async (options) => {
          const { panZoom } = store.getState();
          return panZoom ? panZoom.scaleBy(1 / 1.2, options) : false;
        },
        zoomTo: async (zoomLevel, options) => {
          const { panZoom } = store.getState();
          return panZoom ? panZoom.scaleTo(zoomLevel, options) : false;
        },
        getZoom: () => store.getState().transform[2],
        setViewport: async (viewport, options) => {
          const { transform: [tX, tY, tZoom], panZoom } = store.getState();
          if (!panZoom) {
            return false;
          }
          await panZoom.setViewport({
            x: viewport.x ?? tX,
            y: viewport.y ?? tY,
            zoom: viewport.zoom ?? tZoom
          }, options);
          return true;
        },
        getViewport: () => {
          const [x, y, zoom] = store.getState().transform;
          return { x, y, zoom };
        },
        setCenter: async (x, y, options) => {
          return store.getState().setCenter(x, y, options);
        },
        fitBounds: async (bounds, options) => {
          const { width, height, minZoom, maxZoom, panZoom } = store.getState();
          const viewport = getViewportForBounds(bounds, width, height, minZoom, maxZoom, options?.padding ?? 0.1);
          if (!panZoom) {
            return false;
          }
          await panZoom.setViewport(viewport, {
            duration: options?.duration,
            ease: options?.ease,
            interpolate: options?.interpolate
          });
          return true;
        },
        screenToFlowPosition: (clientPosition, options = {}) => {
          const { transform: transform2, snapGrid, snapToGrid, domNode } = store.getState();
          if (!domNode) {
            return clientPosition;
          }
          const { x: domX, y: domY } = domNode.getBoundingClientRect();
          const correctedPosition = {
            x: clientPosition.x - domX,
            y: clientPosition.y - domY
          };
          const _snapGrid = options.snapGrid ?? snapGrid;
          const _snapToGrid = options.snapToGrid ?? snapToGrid;
          return pointToRendererPoint(correctedPosition, transform2, _snapToGrid, _snapGrid);
        },
        flowToScreenPosition: (flowPosition) => {
          const { transform: transform2, domNode } = store.getState();
          if (!domNode) {
            return flowPosition;
          }
          const { x: domX, y: domY } = domNode.getBoundingClientRect();
          const rendererPosition = rendererPointToPoint(flowPosition, transform2);
          return {
            x: rendererPosition.x + domX,
            y: rendererPosition.y + domY
          };
        }
      };
    }, []);
  };
  function applyChanges(changes, elements) {
    const updatedElements = [];
    const changesMap = /* @__PURE__ */ new Map();
    const addItemChanges = [];
    for (const change of changes) {
      if (change.type === "add") {
        addItemChanges.push(change);
        continue;
      } else if (change.type === "remove" || change.type === "replace") {
        changesMap.set(change.id, [change]);
      } else {
        const elementChanges = changesMap.get(change.id);
        if (elementChanges) {
          elementChanges.push(change);
        } else {
          changesMap.set(change.id, [change]);
        }
      }
    }
    for (const element of elements) {
      const changes2 = changesMap.get(element.id);
      if (!changes2) {
        updatedElements.push(element);
        continue;
      }
      if (changes2[0].type === "remove") {
        continue;
      }
      if (changes2[0].type === "replace") {
        updatedElements.push({ ...changes2[0].item });
        continue;
      }
      const updatedElement = { ...element };
      for (const change of changes2) {
        applyChange(change, updatedElement);
      }
      updatedElements.push(updatedElement);
    }
    if (addItemChanges.length) {
      addItemChanges.forEach((change) => {
        if (change.index !== void 0) {
          updatedElements.splice(change.index, 0, { ...change.item });
        } else {
          updatedElements.push({ ...change.item });
        }
      });
    }
    return updatedElements;
  }
  function applyChange(change, element) {
    switch (change.type) {
      case "select": {
        element.selected = change.selected;
        break;
      }
      case "position": {
        if (typeof change.position !== "undefined") {
          element.position = change.position;
        }
        if (typeof change.dragging !== "undefined") {
          element.dragging = change.dragging;
        }
        break;
      }
      case "dimensions": {
        if (typeof change.dimensions !== "undefined") {
          element.measured = {
            ...change.dimensions
          };
          if (change.setAttributes) {
            if (change.setAttributes === true || change.setAttributes === "width") {
              element.width = change.dimensions.width;
            }
            if (change.setAttributes === true || change.setAttributes === "height") {
              element.height = change.dimensions.height;
            }
          }
        }
        if (typeof change.resizing === "boolean") {
          element.resizing = change.resizing;
        }
        break;
      }
    }
  }
  function applyNodeChanges(changes, nodes) {
    return applyChanges(changes, nodes);
  }
  function applyEdgeChanges(changes, edges) {
    return applyChanges(changes, edges);
  }
  function createSelectionChange(id2, selected2) {
    return {
      id: id2,
      type: "select",
      selected: selected2
    };
  }
  function getSelectionChanges(items, selectedIds = /* @__PURE__ */ new Set(), mutateItem = false) {
    const changes = [];
    for (const [id2, item] of items) {
      const willBeSelected = selectedIds.has(id2);
      if (!(item.selected === void 0 && !willBeSelected) && item.selected !== willBeSelected) {
        if (mutateItem) {
          item.selected = willBeSelected;
        }
        changes.push(createSelectionChange(item.id, willBeSelected));
      }
    }
    return changes;
  }
  function getElementsDiffChanges({ items = [], lookup }) {
    const changes = [];
    const itemsLookup = new Map(items.map((item) => [item.id, item]));
    for (const [index2, item] of items.entries()) {
      const lookupItem = lookup.get(item.id);
      const storeItem = lookupItem?.internals?.userNode ?? lookupItem;
      if (storeItem !== void 0 && storeItem !== item) {
        changes.push({ id: item.id, item, type: "replace" });
      }
      if (storeItem === void 0) {
        changes.push({ item, type: "add", index: index2 });
      }
    }
    for (const [id2] of lookup) {
      const nextNode = itemsLookup.get(id2);
      if (nextNode === void 0) {
        changes.push({ id: id2, type: "remove" });
      }
    }
    return changes;
  }
  function elementToRemoveChange(item) {
    return {
      id: item.id,
      type: "remove"
    };
  }
  var defaultOnError = createDevWarn("React Flow", "https://reactflow.dev/");
  function addEdge2(edgeParams, edges, options = {}) {
    return addEdge(edgeParams, edges, {
      ...options,
      onError: options.onError ?? defaultOnError
    });
  }
  var isNode = (element) => isNodeBase(element);
  var isEdge = (element) => isEdgeBase(element);
  function fixedForwardRef(render) {
    return (0, import_react2.forwardRef)(render);
  }
  var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;
  function useQueue(runQueue) {
    const [serial, setSerial] = (0, import_react2.useState)(BigInt(0));
    const [queue] = (0, import_react2.useState)(() => createQueue(() => setSerial((n) => n + BigInt(1))));
    useIsomorphicLayoutEffect(() => {
      const queueItems = queue.get();
      if (queueItems.length) {
        runQueue(queueItems);
        queue.reset();
      }
    }, [serial]);
    return queue;
  }
  function createQueue(cb) {
    let queue = [];
    return {
      get: () => queue,
      reset: () => {
        queue = [];
      },
      push: (item) => {
        queue.push(item);
        cb();
      }
    };
  }
  var BatchContext = (0, import_react2.createContext)(null);
  function BatchProvider({ children: children2 }) {
    const store = useStoreApi();
    const nodeQueueHandler = (0, import_react2.useCallback)((queueItems) => {
      const { nodes = [], setNodes, hasDefaultNodes, onNodesChange, nodeLookup, fitViewQueued, onNodesChangeMiddlewareMap } = store.getState();
      let next = nodes;
      for (const payload of queueItems) {
        next = typeof payload === "function" ? payload(next) : payload;
      }
      let changes = getElementsDiffChanges({
        items: next,
        lookup: nodeLookup
      });
      for (const middleware of onNodesChangeMiddlewareMap.values()) {
        changes = middleware(changes);
      }
      if (hasDefaultNodes) {
        setNodes(next);
      }
      if (changes.length > 0) {
        onNodesChange?.(changes);
      } else if (fitViewQueued) {
        window.requestAnimationFrame(() => {
          const { fitViewQueued: fitViewQueued2, nodes: nodes2, setNodes: setNodes2 } = store.getState();
          if (fitViewQueued2) {
            setNodes2(nodes2);
          }
        });
      }
    }, []);
    const nodeQueue = useQueue(nodeQueueHandler);
    const edgeQueueHandler = (0, import_react2.useCallback)((queueItems) => {
      const { edges = [], setEdges, hasDefaultEdges, onEdgesChange, edgeLookup } = store.getState();
      let next = edges;
      for (const payload of queueItems) {
        next = typeof payload === "function" ? payload(next) : payload;
      }
      if (hasDefaultEdges) {
        setEdges(next);
      } else if (onEdgesChange) {
        onEdgesChange(getElementsDiffChanges({
          items: next,
          lookup: edgeLookup
        }));
      }
    }, []);
    const edgeQueue = useQueue(edgeQueueHandler);
    const value = (0, import_react2.useMemo)(() => ({ nodeQueue, edgeQueue }), []);
    return (0, import_jsx_runtime.jsx)(BatchContext.Provider, { value, children: children2 });
  }
  function useBatchContext() {
    const batchContext = (0, import_react2.useContext)(BatchContext);
    if (!batchContext) {
      throw new Error("useBatchContext must be used within a BatchProvider");
    }
    return batchContext;
  }
  var selector$j = (s) => !!s.panZoom;
  function useReactFlow() {
    const viewportHelper = useViewportHelper();
    const store = useStoreApi();
    const batchContext = useBatchContext();
    const viewportInitialized = useStore(selector$j);
    const generalHelper = (0, import_react2.useMemo)(() => {
      const getInternalNode = (id2) => store.getState().nodeLookup.get(id2);
      const setNodes = (payload) => {
        batchContext.nodeQueue.push(payload);
      };
      const setEdges = (payload) => {
        batchContext.edgeQueue.push(payload);
      };
      const getNodeRect = (node) => {
        const { nodeLookup, nodeOrigin } = store.getState();
        const nodeToUse = isNode(node) ? node : nodeLookup.get(node.id);
        const position = nodeToUse.parentId ? evaluateAbsolutePosition(nodeToUse.position, nodeToUse.measured, nodeToUse.parentId, nodeLookup, nodeOrigin) : nodeToUse.position;
        const nodeWithPosition = {
          ...nodeToUse,
          position,
          width: nodeToUse.measured?.width ?? nodeToUse.width,
          height: nodeToUse.measured?.height ?? nodeToUse.height
        };
        return nodeToRect(nodeWithPosition);
      };
      const updateNode = (id2, nodeUpdate, options = { replace: false }) => {
        setNodes((prevNodes) => prevNodes.map((node) => {
          if (node.id === id2) {
            const nextNode = typeof nodeUpdate === "function" ? nodeUpdate(node) : nodeUpdate;
            return options.replace && isNode(nextNode) ? nextNode : { ...node, ...nextNode };
          }
          return node;
        }));
      };
      const updateEdge = (id2, edgeUpdate, options = { replace: false }) => {
        setEdges((prevEdges) => prevEdges.map((edge) => {
          if (edge.id === id2) {
            const nextEdge = typeof edgeUpdate === "function" ? edgeUpdate(edge) : edgeUpdate;
            return options.replace && isEdge(nextEdge) ? nextEdge : { ...edge, ...nextEdge };
          }
          return edge;
        }));
      };
      return {
        getNodes: () => store.getState().nodes.map((n) => ({ ...n })),
        getNode: (id2) => getInternalNode(id2)?.internals.userNode,
        getInternalNode,
        getEdges: () => {
          const { edges = [] } = store.getState();
          return edges.map((e) => ({ ...e }));
        },
        getEdge: (id2) => store.getState().edgeLookup.get(id2),
        setNodes,
        setEdges,
        addNodes: (payload) => {
          const newNodes = Array.isArray(payload) ? payload : [payload];
          batchContext.nodeQueue.push((nodes) => [...nodes, ...newNodes]);
        },
        addEdges: (payload) => {
          const newEdges = Array.isArray(payload) ? payload : [payload];
          batchContext.edgeQueue.push((edges) => [...edges, ...newEdges]);
        },
        toObject: () => {
          const { nodes = [], edges = [], transform: transform2 } = store.getState();
          const [x, y, zoom] = transform2;
          return {
            nodes: nodes.map((n) => ({ ...n })),
            edges: edges.map((e) => ({ ...e })),
            viewport: {
              x,
              y,
              zoom
            }
          };
        },
        deleteElements: async ({ nodes: nodesToRemove = [], edges: edgesToRemove = [] }) => {
          const { nodes, edges, onNodesDelete, onEdgesDelete, triggerNodeChanges, triggerEdgeChanges, onDelete, onBeforeDelete } = store.getState();
          const { nodes: matchingNodes, edges: matchingEdges } = await getElementsToRemove({
            nodesToRemove,
            edgesToRemove,
            nodes,
            edges,
            onBeforeDelete
          });
          const hasMatchingEdges = matchingEdges.length > 0;
          const hasMatchingNodes = matchingNodes.length > 0;
          if (hasMatchingEdges) {
            const edgeChanges = matchingEdges.map(elementToRemoveChange);
            onEdgesDelete?.(matchingEdges);
            triggerEdgeChanges(edgeChanges);
          }
          if (hasMatchingNodes) {
            const nodeChanges = matchingNodes.map(elementToRemoveChange);
            onNodesDelete?.(matchingNodes);
            triggerNodeChanges(nodeChanges);
          }
          if (hasMatchingNodes || hasMatchingEdges) {
            onDelete?.({ nodes: matchingNodes, edges: matchingEdges });
          }
          return { deletedNodes: matchingNodes, deletedEdges: matchingEdges };
        },
        /**
         * Partial is defined as "the 2 nodes/areas are intersecting partially".
         * If a is contained in b or b is contained in a, they are both
         * considered fully intersecting.
         */
        getIntersectingNodes: (nodeOrRect, partially = true, nodes) => {
          const isRect = isRectObject(nodeOrRect);
          const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
          const hasNodesOption = nodes !== void 0;
          if (!nodeRect) {
            return [];
          }
          return (nodes || store.getState().nodes).filter((n) => {
            const internalNode = store.getState().nodeLookup.get(n.id);
            if (internalNode && !isRect && (n.id === nodeOrRect.id || !internalNode.internals.positionAbsolute)) {
              return false;
            }
            const currNodeRect = nodeToRect(hasNodesOption ? n : internalNode);
            const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
            const partiallyVisible = partially && overlappingArea > 0;
            return partiallyVisible || overlappingArea >= currNodeRect.width * currNodeRect.height || overlappingArea >= nodeRect.width * nodeRect.height;
          });
        },
        isNodeIntersecting: (nodeOrRect, area, partially = true) => {
          const isRect = isRectObject(nodeOrRect);
          const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
          if (!nodeRect) {
            return false;
          }
          const overlappingArea = getOverlappingArea(nodeRect, area);
          const partiallyVisible = partially && overlappingArea > 0;
          return partiallyVisible || overlappingArea >= area.width * area.height || overlappingArea >= nodeRect.width * nodeRect.height;
        },
        updateNode,
        updateNodeData: (id2, dataUpdate, options = { replace: false }) => {
          updateNode(id2, (node) => {
            const nextData = typeof dataUpdate === "function" ? dataUpdate(node) : dataUpdate;
            return options.replace ? { ...node, data: nextData } : { ...node, data: { ...node.data, ...nextData } };
          }, options);
        },
        updateEdge,
        updateEdgeData: (id2, dataUpdate, options = { replace: false }) => {
          updateEdge(id2, (edge) => {
            const nextData = typeof dataUpdate === "function" ? dataUpdate(edge) : dataUpdate;
            return options.replace ? { ...edge, data: nextData } : { ...edge, data: { ...edge.data, ...nextData } };
          }, options);
        },
        getNodesBounds: (nodes) => {
          const { nodeLookup, nodeOrigin } = store.getState();
          return getNodesBounds(nodes, { nodeLookup, nodeOrigin });
        },
        getHandleConnections: ({ type, id: id2, nodeId }) => Array.from(store.getState().connectionLookup.get(`${nodeId}-${type}${id2 ? `-${id2}` : ""}`)?.values() ?? []),
        getNodeConnections: ({ type, handleId, nodeId }) => Array.from(store.getState().connectionLookup.get(`${nodeId}${type ? handleId ? `-${type}-${handleId}` : `-${type}` : ""}`)?.values() ?? []),
        fitView: async (options) => {
          const fitViewResolver = store.getState().fitViewResolver ?? withResolvers();
          store.setState({ fitViewQueued: true, fitViewOptions: options, fitViewResolver });
          batchContext.nodeQueue.push((nodes) => [...nodes]);
          return fitViewResolver.promise;
        }
      };
    }, []);
    return (0, import_react2.useMemo)(() => {
      return {
        ...generalHelper,
        ...viewportHelper,
        viewportInitialized
      };
    }, [viewportInitialized]);
  }
  var selected = (item) => item.selected;
  var win$1 = typeof window !== "undefined" ? window : void 0;
  function useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode }) {
    const store = useStoreApi();
    const { deleteElements } = useReactFlow();
    const deleteKeyPressed = useKeyPress(deleteKeyCode, { actInsideInputWithModifier: false });
    const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode, { target: win$1 });
    (0, import_react2.useEffect)(() => {
      if (deleteKeyPressed) {
        const { edges, nodes } = store.getState();
        deleteElements({ nodes: nodes.filter(selected), edges: edges.filter(selected) });
        store.setState({ nodesSelectionActive: false });
      }
    }, [deleteKeyPressed]);
    (0, import_react2.useEffect)(() => {
      store.setState({ multiSelectionActive: multiSelectionKeyPressed });
    }, [multiSelectionKeyPressed]);
  }
  function useResizeHandler(domNode) {
    const store = useStoreApi();
    (0, import_react2.useEffect)(() => {
      const updateDimensions = () => {
        if (!domNode.current || !(domNode.current.checkVisibility?.() ?? true)) {
          return false;
        }
        const size = getDimensions(domNode.current);
        if (size.height === 0 || size.width === 0) {
          store.getState().onError?.("004", errorMessages["error004"]());
        }
        store.setState({ width: size.width || 500, height: size.height || 500 });
      };
      if (domNode.current) {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        const resizeObserver = new ResizeObserver(() => updateDimensions());
        resizeObserver.observe(domNode.current);
        return () => {
          window.removeEventListener("resize", updateDimensions);
          if (resizeObserver && domNode.current) {
            resizeObserver.unobserve(domNode.current);
          }
        };
      }
    }, []);
  }
  var containerStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };
  var selector$i = (s) => ({
    userSelectionActive: s.userSelectionActive,
    lib: s.lib,
    connectionInProgress: s.connection.inProgress
  });
  function ZoomPane({ onPaneContextMenu, zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panActivationKeyPressed, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, panOnDrag = true, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling = true, children: children2, noWheelClassName, noPanClassName, onViewportChange, isControlledViewport, paneClickDistance, selectionOnDrag }) {
    const store = useStoreApi();
    const zoomPane = (0, import_react2.useRef)(null);
    const { userSelectionActive, lib, connectionInProgress } = useStore(selector$i, shallow$1);
    const zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
    const panZoom = (0, import_react2.useRef)();
    useResizeHandler(zoomPane);
    const onTransformChange = (0, import_react2.useCallback)((transform2) => {
      onViewportChange?.({ x: transform2[0], y: transform2[1], zoom: transform2[2] });
      if (!isControlledViewport) {
        store.setState({ transform: transform2 });
      }
    }, [onViewportChange, isControlledViewport]);
    (0, import_react2.useEffect)(() => {
      if (zoomPane.current) {
        panZoom.current = XYPanZoom({
          domNode: zoomPane.current,
          minZoom,
          maxZoom,
          translateExtent,
          viewport: defaultViewport2,
          onDraggingChange: (paneDragging) => store.setState((prevState) => prevState.paneDragging === paneDragging ? prevState : { paneDragging }),
          onPanZoomStart: (event, vp) => {
            const { onViewportChangeStart, onMoveStart } = store.getState();
            onMoveStart?.(event, vp);
            onViewportChangeStart?.(vp);
          },
          onPanZoom: (event, vp) => {
            const { onViewportChange: onViewportChange2, onMove } = store.getState();
            onMove?.(event, vp);
            onViewportChange2?.(vp);
          },
          onPanZoomEnd: (event, vp) => {
            const { onViewportChangeEnd, onMoveEnd } = store.getState();
            onMoveEnd?.(event, vp);
            onViewportChangeEnd?.(vp);
          }
        });
        const { x, y, zoom } = panZoom.current.getViewport();
        store.setState({
          panZoom: panZoom.current,
          transform: [x, y, zoom],
          domNode: zoomPane.current.closest(".react-flow")
        });
        return () => {
          panZoom.current?.destroy();
        };
      }
    }, []);
    (0, import_react2.useEffect)(() => {
      panZoom.current?.update({
        onPaneContextMenu,
        zoomOnScroll,
        zoomOnPinch,
        panOnScroll,
        panActivationKeyPressed,
        panOnScrollSpeed,
        panOnScrollMode,
        zoomOnDoubleClick,
        panOnDrag,
        zoomActivationKeyPressed,
        preventScrolling,
        noPanClassName,
        userSelectionActive,
        noWheelClassName,
        lib,
        onTransformChange,
        connectionInProgress,
        selectionOnDrag,
        paneClickDistance
      });
    }, [
      onPaneContextMenu,
      zoomOnScroll,
      zoomOnPinch,
      panOnScroll,
      panActivationKeyPressed,
      panOnScrollSpeed,
      panOnScrollMode,
      zoomOnDoubleClick,
      panOnDrag,
      zoomActivationKeyPressed,
      preventScrolling,
      noPanClassName,
      userSelectionActive,
      noWheelClassName,
      lib,
      onTransformChange,
      connectionInProgress,
      selectionOnDrag,
      paneClickDistance
    ]);
    return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__renderer", ref: zoomPane, style: containerStyle, children: children2 });
  }
  var selector$h = (s) => ({
    userSelectionActive: s.userSelectionActive,
    userSelectionRect: s.userSelectionRect
  });
  function UserSelection() {
    const { userSelectionActive, userSelectionRect } = useStore(selector$h, shallow$1);
    const isActive = userSelectionActive && userSelectionRect;
    if (!isActive) {
      return null;
    }
    return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__selection react-flow__container", style: {
      width: userSelectionRect.width,
      height: userSelectionRect.height,
      transform: `translate(${userSelectionRect.x}px, ${userSelectionRect.y}px)`
    } });
  }
  var wrapHandler = (handler, containerRef) => {
    return (event) => {
      if (event.target !== containerRef.current) {
        return;
      }
      handler?.(event);
    };
  };
  var selector$g = (s) => ({
    userSelectionActive: s.userSelectionActive,
    elementsSelectable: s.elementsSelectable,
    dragging: s.paneDragging,
    panBy: s.panBy,
    autoPanSpeed: s.autoPanSpeed
  });
  function Pane({ isSelecting, selectionKeyPressed, selectionMode = SelectionMode.Full, panOnDrag, autoPanOnSelection, paneClickDistance, selectionOnDrag, onSelectionStart, onSelectionEnd, onPaneClick, onPaneContextMenu, onPaneScroll, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, children: children2 }) {
    const autoPanId = (0, import_react2.useRef)(0);
    const store = useStoreApi();
    const { userSelectionActive, elementsSelectable, dragging, panBy: panBy2, autoPanSpeed } = useStore(selector$g, shallow$1);
    const isSelectionEnabled = elementsSelectable && (isSelecting || userSelectionActive);
    const container2 = (0, import_react2.useRef)(null);
    const containerBounds = (0, import_react2.useRef)();
    const selectedNodeIds = (0, import_react2.useRef)(/* @__PURE__ */ new Set());
    const selectedEdgeIds = (0, import_react2.useRef)(/* @__PURE__ */ new Set());
    const connectionEndedOnPane = (0, import_react2.useRef)(false);
    const selectionInProgress = (0, import_react2.useRef)(false);
    const position = (0, import_react2.useRef)({ x: 0, y: 0 });
    const autoPanStarted = (0, import_react2.useRef)(false);
    const onClick = (event) => {
      if (selectionInProgress.current || connectionEndedOnPane.current || store.getState().connection.inProgress) {
        selectionInProgress.current = false;
        connectionEndedOnPane.current = false;
        return;
      }
      onPaneClick?.(event);
      store.getState().resetSelectedElements();
      store.setState({ nodesSelectionActive: false });
    };
    const onContextMenu = (event) => {
      if (Array.isArray(panOnDrag) && panOnDrag?.includes(2)) {
        event.preventDefault();
        return;
      }
      onPaneContextMenu?.(event);
    };
    const onWheel = onPaneScroll ? (event) => onPaneScroll(event) : void 0;
    const onClickCapture = (event) => {
      if (selectionInProgress.current) {
        event.stopPropagation();
        selectionInProgress.current = false;
      }
    };
    const onPointerDownCapture = (event) => {
      if (event.pointerType === "touch" && panOnDrag !== false && !selectionKeyPressed) {
        return;
      }
      const { domNode, transform: transform2 } = store.getState();
      containerBounds.current = domNode?.getBoundingClientRect();
      if (!containerBounds.current)
        return;
      const eventTargetIsContainer = event.target === container2.current;
      const isNoKeyEvent = !eventTargetIsContainer && !!event.target.closest(".nokey");
      const isSelectionActive = selectionOnDrag && eventTargetIsContainer || selectionKeyPressed;
      if (isNoKeyEvent || !isSelecting || !isSelectionActive || event.button !== 0 || !event.isPrimary) {
        return;
      }
      event.target?.setPointerCapture?.(event.pointerId);
      selectionInProgress.current = false;
      const { x, y } = getEventPosition(event.nativeEvent, containerBounds.current);
      const userSelectionStartPosition = pointToRendererPoint({ x, y }, transform2);
      store.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: userSelectionStartPosition.x,
          startY: userSelectionStartPosition.y,
          x,
          y
        }
      });
      if (!eventTargetIsContainer) {
        event.stopPropagation();
        event.preventDefault();
      }
    };
    function commitUserSelectionRect(mouseX, mouseY) {
      const { userSelectionRect } = store.getState();
      if (!userSelectionRect) {
        return;
      }
      const { transform: transform2, nodeLookup, edgeLookup, connectionLookup, triggerNodeChanges, triggerEdgeChanges, defaultEdgeOptions } = store.getState();
      const userStartPosition = { x: userSelectionRect.startX, y: userSelectionRect.startY };
      const { x: screenStartX, y: screenStartY } = rendererPointToPoint(userStartPosition, transform2);
      const nextUserSelectRect = {
        startX: userStartPosition.x,
        startY: userStartPosition.y,
        x: mouseX < screenStartX ? mouseX : screenStartX,
        y: mouseY < screenStartY ? mouseY : screenStartY,
        width: Math.abs(mouseX - screenStartX),
        height: Math.abs(mouseY - screenStartY)
      };
      const prevSelectedNodeIds = selectedNodeIds.current;
      const prevSelectedEdgeIds = selectedEdgeIds.current;
      selectedNodeIds.current = new Set(getNodesInside(nodeLookup, nextUserSelectRect, transform2, selectionMode === SelectionMode.Partial, true).map((node) => node.id));
      selectedEdgeIds.current = /* @__PURE__ */ new Set();
      const edgesSelectable = defaultEdgeOptions?.selectable ?? true;
      for (const nodeId of selectedNodeIds.current) {
        const connections = connectionLookup.get(nodeId);
        if (!connections)
          continue;
        for (const { edgeId } of connections.values()) {
          const edge = edgeLookup.get(edgeId);
          if (edge && (edge.selectable ?? edgesSelectable)) {
            selectedEdgeIds.current.add(edgeId);
          }
        }
      }
      if (!areSetsEqual(prevSelectedNodeIds, selectedNodeIds.current)) {
        const changes = getSelectionChanges(nodeLookup, selectedNodeIds.current, true);
        triggerNodeChanges(changes);
      }
      if (!areSetsEqual(prevSelectedEdgeIds, selectedEdgeIds.current)) {
        const changes = getSelectionChanges(edgeLookup, selectedEdgeIds.current);
        triggerEdgeChanges(changes);
      }
      store.setState({
        userSelectionRect: nextUserSelectRect,
        userSelectionActive: true,
        nodesSelectionActive: false
      });
    }
    function autoPan() {
      if (!autoPanOnSelection || !containerBounds.current) {
        return;
      }
      const [x, y] = calcAutoPan(position.current, containerBounds.current, autoPanSpeed);
      panBy2({ x, y }).then((panned) => {
        if (!selectionInProgress.current || !panned) {
          autoPanId.current = requestAnimationFrame(autoPan);
          return;
        }
        const { x: mx, y: my } = position.current;
        commitUserSelectionRect(mx, my);
        autoPanId.current = requestAnimationFrame(autoPan);
      });
    }
    const cleanupAutoPan = () => {
      cancelAnimationFrame(autoPanId.current);
      autoPanId.current = 0;
      autoPanStarted.current = false;
    };
    (0, import_react2.useEffect)(() => {
      return () => cleanupAutoPan();
    }, []);
    const onPointerMove = (event) => {
      const { userSelectionRect, transform: transform2, resetSelectedElements } = store.getState();
      if (!containerBounds.current || !userSelectionRect) {
        return;
      }
      const { x: mouseX, y: mouseY } = getEventPosition(event.nativeEvent, containerBounds.current);
      position.current = { x: mouseX, y: mouseY };
      const screenStart = rendererPointToPoint({ x: userSelectionRect.startX, y: userSelectionRect.startY }, transform2);
      if (!selectionInProgress.current) {
        const requiredDistance = selectionKeyPressed ? 0 : paneClickDistance;
        const distance2 = Math.hypot(mouseX - screenStart.x, mouseY - screenStart.y);
        if (distance2 <= requiredDistance) {
          return;
        }
        resetSelectedElements();
        onSelectionStart?.(event);
      }
      selectionInProgress.current = true;
      if (!autoPanStarted.current) {
        autoPan();
        autoPanStarted.current = true;
      }
      commitUserSelectionRect(mouseX, mouseY);
    };
    const onPointerUp = (event) => {
      if (!isSelectionEnabled) {
        if (event.target === container2.current && store.getState().connection.inProgress) {
          connectionEndedOnPane.current = true;
        }
        return;
      }
      if (event.button !== 0) {
        return;
      }
      event.target?.releasePointerCapture?.(event.pointerId);
      if (!userSelectionActive && event.target === container2.current && store.getState().userSelectionRect) {
        onClick?.(event);
      }
      store.setState({
        userSelectionActive: false,
        userSelectionRect: null
      });
      if (selectionInProgress.current) {
        onSelectionEnd?.(event);
        store.setState({
          nodesSelectionActive: selectedNodeIds.current.size > 0
        });
      }
      cleanupAutoPan();
    };
    const onPointerCancel = (event) => {
      event.target?.releasePointerCapture?.(event.pointerId);
      cleanupAutoPan();
    };
    const draggable = panOnDrag === true || Array.isArray(panOnDrag) && panOnDrag.includes(0);
    return (0, import_jsx_runtime.jsxs)("div", { className: cc(["react-flow__pane", { draggable, dragging, selection: isSelecting }]), onClick: isSelectionEnabled ? void 0 : wrapHandler(onClick, container2), onContextMenu: wrapHandler(onContextMenu, container2), onWheel: wrapHandler(onWheel, container2), onPointerEnter: isSelectionEnabled ? void 0 : onPaneMouseEnter, onPointerMove: isSelectionEnabled ? onPointerMove : onPaneMouseMove, onPointerUp, onPointerCancel: isSelectionEnabled ? onPointerCancel : void 0, onPointerDownCapture: isSelectionEnabled ? onPointerDownCapture : void 0, onClickCapture: isSelectionEnabled ? onClickCapture : void 0, onPointerLeave: onPaneMouseLeave, ref: container2, style: containerStyle, children: [children2, (0, import_jsx_runtime.jsx)(UserSelection, {})] });
  }
  function handleNodeClick({ id: id2, store, unselect = false, nodeRef }) {
    const { addSelectedNodes, unselectNodesAndEdges, multiSelectionActive, nodeLookup, onError } = store.getState();
    const node = nodeLookup.get(id2);
    if (!node) {
      onError?.("012", errorMessages["error012"](id2));
      return;
    }
    store.setState({ nodesSelectionActive: false });
    if (!node.selected) {
      addSelectedNodes([id2]);
    } else if (unselect || node.selected && multiSelectionActive) {
      unselectNodesAndEdges({ nodes: [node], edges: [] });
      requestAnimationFrame(() => nodeRef?.current?.blur());
    }
  }
  function useDrag({ nodeRef, disabled = false, noDragClassName, handleSelector, nodeId, isSelectable, nodeClickDistance }) {
    const store = useStoreApi();
    const [dragging, setDragging] = (0, import_react2.useState)(false);
    const xyDrag = (0, import_react2.useRef)();
    (0, import_react2.useEffect)(() => {
      if (disabled) {
        return;
      }
      xyDrag.current = XYDrag({
        getStoreItems: () => store.getState(),
        onNodeMouseDown: (id2) => {
          handleNodeClick({
            id: id2,
            store,
            nodeRef
          });
        },
        onDragStart: () => {
          setDragging(true);
        },
        onDragStop: () => {
          setDragging(false);
        }
      });
      return () => {
        xyDrag.current?.destroy();
        xyDrag.current = void 0;
      };
    }, [disabled, store, nodeRef]);
    (0, import_react2.useEffect)(() => {
      if (disabled || !nodeRef.current || !xyDrag.current) {
        return;
      }
      xyDrag.current.update({
        noDragClassName,
        handleSelector,
        domNode: nodeRef.current,
        isSelectable,
        nodeId,
        nodeClickDistance
      });
    }, [noDragClassName, handleSelector, disabled, isSelectable, nodeRef, nodeId, nodeClickDistance]);
    return dragging;
  }
  var selectedAndDraggable = (nodesDraggable) => (n) => n.selected && (n.draggable || nodesDraggable && typeof n.draggable === "undefined");
  function useMoveSelectedNodes() {
    const store = useStoreApi();
    const moveSelectedNodes = (0, import_react2.useCallback)((params) => {
      const { nodeExtent, snapToGrid, snapGrid, nodesDraggable, onError, updateNodePositions, nodeLookup, nodeOrigin } = store.getState();
      const nodeUpdates = /* @__PURE__ */ new Map();
      const isSelected = selectedAndDraggable(nodesDraggable);
      const xVelo = snapToGrid ? snapGrid[0] : 5;
      const yVelo = snapToGrid ? snapGrid[1] : 5;
      const xDiff = params.direction.x * xVelo * params.factor;
      const yDiff = params.direction.y * yVelo * params.factor;
      for (const [, node] of nodeLookup) {
        if (!isSelected(node)) {
          continue;
        }
        let nextPosition = {
          x: node.internals.positionAbsolute.x + xDiff,
          y: node.internals.positionAbsolute.y + yDiff
        };
        if (snapToGrid) {
          nextPosition = snapPosition(nextPosition, snapGrid);
        }
        const { position, positionAbsolute } = calculateNodePosition({
          nodeId: node.id,
          nextPosition,
          nodeLookup,
          nodeExtent,
          nodeOrigin,
          onError
        });
        node.position = position;
        node.internals.positionAbsolute = positionAbsolute;
        nodeUpdates.set(node.id, node);
      }
      updateNodePositions(nodeUpdates);
    }, []);
    return moveSelectedNodes;
  }
  var NodeIdContext = (0, import_react2.createContext)(null);
  var Provider = NodeIdContext.Provider;
  NodeIdContext.Consumer;
  var useNodeId = () => {
    const nodeId = (0, import_react2.useContext)(NodeIdContext);
    return nodeId;
  };
  var selector$f = (s) => ({
    connectOnClick: s.connectOnClick,
    noPanClassName: s.noPanClassName,
    rfId: s.rfId
  });
  var HandleConfigContext = (0, import_react2.createContext)(null);
  function HandleConfigProvider({ children: children2 }) {
    const config = useStore(selector$f, shallow$1);
    return (0, import_jsx_runtime.jsx)(HandleConfigContext.Provider, { value: config, children: children2 });
  }
  function useHandleConfig() {
    const config = (0, import_react2.useContext)(HandleConfigContext);
    if (!config) {
      throw new Error("useHandleConfig must be used within a HandleConfigProvider");
    }
    return config;
  }
  var idleConnectingState = {
    connectingFrom: false,
    connectingTo: false,
    clickConnecting: false,
    isPossibleEndHandle: true,
    connectionInProcess: false,
    clickConnectionInProcess: false,
    valid: false
  };
  var connectingSelector = (nodeId, handleId, type) => (state) => {
    const { connectionClickStartHandle: clickHandle, connectionMode, connection } = state;
    const { fromHandle, toHandle, isValid } = connection;
    if (!fromHandle && !clickHandle) {
      return idleConnectingState;
    }
    const connectingTo = toHandle?.nodeId === nodeId && toHandle?.id === handleId && toHandle?.type === type;
    return {
      connectingFrom: fromHandle?.nodeId === nodeId && fromHandle?.id === handleId && fromHandle?.type === type,
      connectingTo,
      clickConnecting: clickHandle?.nodeId === nodeId && clickHandle?.id === handleId && clickHandle?.type === type,
      isPossibleEndHandle: connectionMode === ConnectionMode.Strict ? fromHandle?.type !== type : nodeId !== fromHandle?.nodeId || handleId !== fromHandle?.id,
      connectionInProcess: !!fromHandle,
      clickConnectionInProcess: !!clickHandle,
      valid: connectingTo && isValid
    };
  };
  function HandleComponent({ type = "source", position = Position.Top, isValidConnection, isConnectable = true, isConnectableStart = true, isConnectableEnd = true, id: id2, onConnect, children: children2, className, onMouseDown, onTouchStart, ...rest }, ref) {
    const handleId = id2 || null;
    const isTarget = type === "target";
    const store = useStoreApi();
    const nodeId = useNodeId();
    const { connectOnClick, noPanClassName, rfId } = useHandleConfig();
    const { connectingFrom, connectingTo, clickConnecting, isPossibleEndHandle, connectionInProcess, clickConnectionInProcess, valid } = useStore(connectingSelector(nodeId, handleId, type), shallow$1);
    if (!nodeId) {
      store.getState().onError?.("010", errorMessages["error010"]());
    }
    const onConnectExtended = (params) => {
      const { defaultEdgeOptions, onConnect: onConnectAction, hasDefaultEdges } = store.getState();
      const edgeParams = {
        ...defaultEdgeOptions,
        ...params
      };
      if (hasDefaultEdges) {
        const { edges, setEdges, onError } = store.getState();
        setEdges(addEdge2(edgeParams, edges, { onError }));
      }
      onConnectAction?.(edgeParams);
      onConnect?.(edgeParams);
    };
    const onPointerDown2 = (event) => {
      if (!nodeId) {
        return;
      }
      const isMouseTriggered = isMouseEvent(event.nativeEvent);
      if (isConnectableStart && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
        const currentStore = store.getState();
        XYHandle.onPointerDown(event.nativeEvent, {
          handleDomNode: event.currentTarget,
          autoPanOnConnect: currentStore.autoPanOnConnect,
          connectionMode: currentStore.connectionMode,
          connectionRadius: currentStore.connectionRadius,
          domNode: currentStore.domNode,
          nodeLookup: currentStore.nodeLookup,
          lib: currentStore.lib,
          isTarget,
          handleId,
          nodeId,
          flowId: currentStore.rfId,
          panBy: currentStore.panBy,
          cancelConnection: currentStore.cancelConnection,
          onConnectStart: currentStore.onConnectStart,
          onConnectEnd: (...args) => store.getState().onConnectEnd?.(...args),
          updateConnection: currentStore.updateConnection,
          onConnect: onConnectExtended,
          isValidConnection: isValidConnection || ((...args) => store.getState().isValidConnection?.(...args) ?? true),
          getTransform: () => store.getState().transform,
          getFromHandle: () => store.getState().connection.fromHandle,
          autoPanSpeed: currentStore.autoPanSpeed,
          dragThreshold: currentStore.connectionDragThreshold
        });
      }
      if (isMouseTriggered) {
        onMouseDown?.(event);
      } else {
        onTouchStart?.(event);
      }
    };
    const onClick = (event) => {
      const { onClickConnectStart, onClickConnectEnd, connectionClickStartHandle, connectionMode, isValidConnection: isValidConnectionStore, lib, rfId: flowId, nodeLookup, connection: connectionState } = store.getState();
      if (!nodeId || !connectionClickStartHandle && !isConnectableStart) {
        return;
      }
      if (!connectionClickStartHandle) {
        onClickConnectStart?.(event.nativeEvent, { nodeId, handleId, handleType: type });
        store.setState({ connectionClickStartHandle: { nodeId, type, id: handleId } });
        return;
      }
      const doc = getHostForElement(event.target);
      const isValidConnectionHandler = isValidConnection || isValidConnectionStore;
      const { connection, isValid } = XYHandle.isValid(event.nativeEvent, {
        handle: {
          nodeId,
          id: handleId,
          type
        },
        connectionMode,
        fromNodeId: connectionClickStartHandle.nodeId,
        fromHandleId: connectionClickStartHandle.id || null,
        fromType: connectionClickStartHandle.type,
        isValidConnection: isValidConnectionHandler,
        flowId,
        doc,
        lib,
        nodeLookup
      });
      if (isValid && connection) {
        onConnectExtended(connection);
      }
      const connectionClone = structuredClone(connectionState);
      delete connectionClone.inProgress;
      connectionClone.toPosition = connectionClone.toHandle ? connectionClone.toHandle.position : null;
      onClickConnectEnd?.(event, connectionClone);
      store.setState({ connectionClickStartHandle: null });
    };
    return (0, import_jsx_runtime.jsx)("div", { "data-handleid": handleId, "data-nodeid": nodeId, "data-handlepos": position, "data-id": `${rfId}-${nodeId}-${handleId}-${type}`, className: cc([
      "react-flow__handle",
      `react-flow__handle-${position}`,
      "nodrag",
      noPanClassName,
      className,
      {
        source: !isTarget,
        target: isTarget,
        connectable: isConnectable,
        connectablestart: isConnectableStart,
        connectableend: isConnectableEnd,
        clickconnecting: clickConnecting,
        connectingfrom: connectingFrom,
        connectingto: connectingTo,
        valid,
        /*
         * shows where you can start a connection from
         * and where you can end it while connecting
         */
        connectionindicator: isConnectable && (!connectionInProcess || isPossibleEndHandle) && (connectionInProcess || clickConnectionInProcess ? isConnectableEnd : isConnectableStart)
      }
    ]), onMouseDown: onPointerDown2, onTouchStart: onPointerDown2, onClick: connectOnClick ? onClick : void 0, ref, ...rest, children: children2 });
  }
  var Handle = (0, import_react2.memo)(fixedForwardRef(HandleComponent));
  function InputNode({ data, isConnectable, sourcePosition = Position.Bottom }) {
    return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [data?.label, (0, import_jsx_runtime.jsx)(Handle, { type: "source", position: sourcePosition, isConnectable })] });
  }
  function DefaultNode({ data, isConnectable, targetPosition = Position.Top, sourcePosition = Position.Bottom }) {
    return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(Handle, { type: "target", position: targetPosition, isConnectable }), data?.label, (0, import_jsx_runtime.jsx)(Handle, { type: "source", position: sourcePosition, isConnectable })] });
  }
  function GroupNode() {
    return null;
  }
  function OutputNode({ data, isConnectable, targetPosition = Position.Top }) {
    return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(Handle, { type: "target", position: targetPosition, isConnectable }), data?.label] });
  }
  var arrowKeyDiffs = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 }
  };
  var builtinNodeTypes = {
    input: InputNode,
    default: DefaultNode,
    output: OutputNode,
    group: GroupNode
  };
  function getNodeInlineStyleDimensions(node) {
    if (node.internals.handleBounds === void 0) {
      return {
        width: node.width ?? node.initialWidth ?? node.style?.width,
        height: node.height ?? node.initialHeight ?? node.style?.height
      };
    }
    return {
      width: node.width ?? node.style?.width,
      height: node.height ?? node.style?.height
    };
  }
  var selector$e = (s) => {
    const { width, height, x, y } = getInternalNodesBounds(s.nodeLookup, {
      filter: (node) => !!node.selected
    });
    return {
      width: isNumeric(width) ? width : null,
      height: isNumeric(height) ? height : null,
      userSelectionActive: s.userSelectionActive,
      transformString: `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]}) translate(${x}px,${y}px)`
    };
  };
  function NodesSelection({ onSelectionContextMenu, noPanClassName, disableKeyboardA11y }) {
    const store = useStoreApi();
    const { width, height, transformString, userSelectionActive } = useStore(selector$e, shallow$1);
    const moveSelectedNodes = useMoveSelectedNodes();
    const nodeRef = (0, import_react2.useRef)(null);
    (0, import_react2.useEffect)(() => {
      if (!disableKeyboardA11y) {
        nodeRef.current?.focus({
          preventScroll: true
        });
      }
    }, [disableKeyboardA11y]);
    const shouldRender = !userSelectionActive && width !== null && height !== null;
    useDrag({
      nodeRef,
      disabled: !shouldRender
    });
    if (!shouldRender) {
      return null;
    }
    const onContextMenu = onSelectionContextMenu ? (event) => {
      const selectedNodes = store.getState().nodes.filter((n) => n.selected);
      onSelectionContextMenu(event, selectedNodes);
    } : void 0;
    const onKeyDown = (event) => {
      if (Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
        event.preventDefault();
        moveSelectedNodes({
          direction: arrowKeyDiffs[event.key],
          factor: event.shiftKey ? 4 : 1
        });
      }
    };
    return (0, import_jsx_runtime.jsx)("div", { className: cc(["react-flow__nodesselection", "react-flow__container", noPanClassName]), style: {
      transform: transformString
    }, children: (0, import_jsx_runtime.jsx)("div", { ref: nodeRef, className: "react-flow__nodesselection-rect", onContextMenu, tabIndex: disableKeyboardA11y ? void 0 : -1, onKeyDown: disableKeyboardA11y ? void 0 : onKeyDown, style: {
      width,
      height
    } }) });
  }
  var win = typeof window !== "undefined" ? window : void 0;
  var selector$d = (s) => {
    return { nodesSelectionActive: s.nodesSelectionActive, userSelectionActive: s.userSelectionActive };
  };
  function FlowRendererComponent({ children: children2, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, paneClickDistance, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll: _panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: _panOnDrag, autoPanOnSelection, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, preventScrolling, onSelectionContextMenu, noWheelClassName, noPanClassName, disableKeyboardA11y, onViewportChange, isControlledViewport }) {
    const { nodesSelectionActive, userSelectionActive } = useStore(selector$d, shallow$1);
    const selectionKeyPressed = useKeyPress(selectionKeyCode, { target: win });
    const panActivationKeyPressed = useKeyPress(panActivationKeyCode, { target: win });
    const panOnDrag = panActivationKeyPressed || _panOnDrag;
    const panOnScroll = panActivationKeyPressed || _panOnScroll;
    const _selectionOnDrag = selectionOnDrag && panOnDrag !== true;
    const isSelecting = selectionKeyPressed || userSelectionActive || _selectionOnDrag;
    useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode });
    return (0, import_jsx_runtime.jsx)(ZoomPane, { onPaneContextMenu, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll, panActivationKeyPressed, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: !selectionKeyPressed && panOnDrag, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling, noWheelClassName, noPanClassName, onViewportChange, isControlledViewport, paneClickDistance, selectionOnDrag: _selectionOnDrag, children: (0, import_jsx_runtime.jsxs)(Pane, { onSelectionStart, onSelectionEnd, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, panOnDrag, autoPanOnSelection, isSelecting: !!isSelecting, selectionMode, selectionKeyPressed, paneClickDistance, selectionOnDrag: _selectionOnDrag, children: [children2, nodesSelectionActive && (0, import_jsx_runtime.jsx)(NodesSelection, { onSelectionContextMenu, noPanClassName, disableKeyboardA11y })] }) });
  }
  FlowRendererComponent.displayName = "FlowRenderer";
  var FlowRenderer = (0, import_react2.memo)(FlowRendererComponent);
  var selector$c = (onlyRenderVisible) => (s) => {
    return onlyRenderVisible ? getNodesInside(s.nodeLookup, { x: 0, y: 0, width: s.width, height: s.height }, s.transform, true).map((node) => node.id) : Array.from(s.nodeLookup.keys());
  };
  function useVisibleNodeIds(onlyRenderVisible) {
    const nodeIds = useStore((0, import_react2.useCallback)(selector$c(onlyRenderVisible), [onlyRenderVisible]), shallow$1);
    return nodeIds;
  }
  var selector$b = (s) => s.updateNodeInternals;
  function useResizeObserver() {
    const updateNodeInternals2 = useStore(selector$b);
    const [resizeObserver] = (0, import_react2.useState)(() => {
      if (typeof ResizeObserver === "undefined") {
        return null;
      }
      return new ResizeObserver((entries) => {
        const updates = /* @__PURE__ */ new Map();
        entries.forEach((entry) => {
          const id2 = entry.target.getAttribute("data-id");
          updates.set(id2, {
            id: id2,
            nodeElement: entry.target,
            force: true
          });
        });
        updateNodeInternals2(updates);
      });
    });
    (0, import_react2.useEffect)(() => {
      return () => {
        resizeObserver?.disconnect();
      };
    }, [resizeObserver]);
    return resizeObserver;
  }
  function useNodeObserver({ node, nodeType, hasDimensions, resizeObserver }) {
    const store = useStoreApi();
    const nodeRef = (0, import_react2.useRef)(null);
    const observedNode = (0, import_react2.useRef)(null);
    const prevSourcePosition = (0, import_react2.useRef)(node.sourcePosition);
    const prevTargetPosition = (0, import_react2.useRef)(node.targetPosition);
    const prevType = (0, import_react2.useRef)(nodeType);
    const isInitialized = hasDimensions && !!node.internals.handleBounds;
    (0, import_react2.useEffect)(() => {
      if (nodeRef.current && !node.hidden && (!isInitialized || observedNode.current !== nodeRef.current)) {
        if (observedNode.current) {
          resizeObserver?.unobserve(observedNode.current);
        }
        resizeObserver?.observe(nodeRef.current);
        observedNode.current = nodeRef.current;
      }
    }, [isInitialized, node.hidden]);
    (0, import_react2.useEffect)(() => {
      return () => {
        if (observedNode.current) {
          resizeObserver?.unobserve(observedNode.current);
          observedNode.current = null;
        }
      };
    }, []);
    (0, import_react2.useEffect)(() => {
      if (nodeRef.current) {
        const typeChanged = prevType.current !== nodeType;
        const sourcePosChanged = prevSourcePosition.current !== node.sourcePosition;
        const targetPosChanged = prevTargetPosition.current !== node.targetPosition;
        if (typeChanged || sourcePosChanged || targetPosChanged) {
          prevType.current = nodeType;
          prevSourcePosition.current = node.sourcePosition;
          prevTargetPosition.current = node.targetPosition;
          store.getState().updateNodeInternals(/* @__PURE__ */ new Map([[node.id, { id: node.id, nodeElement: nodeRef.current, force: true }]]));
        }
      }
    }, [node.id, nodeType, node.sourcePosition, node.targetPosition]);
    return nodeRef;
  }
  function NodeWrapper({ id: id2, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onDoubleClick, nodesDraggable, elementsSelectable, nodesConnectable, nodesFocusable, resizeObserver, noDragClassName, noPanClassName, disableKeyboardA11y, rfId, nodeTypes, nodeClickDistance, onError }) {
    const { node, internals, isParent } = useStore((s) => {
      const node2 = s.nodeLookup.get(id2);
      const isParent2 = s.parentLookup.has(id2);
      return {
        node: node2,
        internals: node2.internals,
        isParent: isParent2
      };
    }, shallow$1);
    let nodeType = node.type || "default";
    let NodeComponent = nodeTypes?.[nodeType] || builtinNodeTypes[nodeType];
    if (NodeComponent === void 0) {
      onError?.("003", errorMessages["error003"](nodeType));
      nodeType = "default";
      NodeComponent = nodeTypes?.["default"] || builtinNodeTypes.default;
    }
    const isDraggable = !!(node.draggable || nodesDraggable && typeof node.draggable === "undefined");
    const isSelectable = !!(node.selectable || elementsSelectable && typeof node.selectable === "undefined");
    const isConnectable = !!(node.connectable || nodesConnectable && typeof node.connectable === "undefined");
    const isFocusable = !!(node.focusable || nodesFocusable && typeof node.focusable === "undefined");
    const store = useStoreApi();
    const hasDimensions = nodeHasDimensions(node);
    const nodeRef = useNodeObserver({ node, nodeType, hasDimensions, resizeObserver });
    const dragging = useDrag({
      nodeRef,
      disabled: node.hidden || !isDraggable,
      noDragClassName,
      handleSelector: node.dragHandle,
      nodeId: id2,
      isSelectable,
      nodeClickDistance
    });
    const moveSelectedNodes = useMoveSelectedNodes();
    if (node.hidden) {
      return null;
    }
    const nodeDimensions = getNodeDimensions(node);
    const inlineDimensions = getNodeInlineStyleDimensions(node);
    const hasPointerEvents = isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
    const onMouseEnterHandler = onMouseEnter ? (event) => onMouseEnter(event, { ...internals.userNode }) : void 0;
    const onMouseMoveHandler = onMouseMove ? (event) => onMouseMove(event, { ...internals.userNode }) : void 0;
    const onMouseLeaveHandler = onMouseLeave ? (event) => onMouseLeave(event, { ...internals.userNode }) : void 0;
    const onContextMenuHandler = onContextMenu ? (event) => onContextMenu(event, { ...internals.userNode }) : void 0;
    const onDoubleClickHandler = onDoubleClick ? (event) => onDoubleClick(event, { ...internals.userNode }) : void 0;
    const onSelectNodeHandler = (event) => {
      const { selectNodesOnDrag, nodeDragThreshold } = store.getState();
      if (isSelectable && (!selectNodesOnDrag || !isDraggable || nodeDragThreshold > 0)) {
        handleNodeClick({
          id: id2,
          store,
          nodeRef
        });
      }
      if (onClick) {
        onClick(event, { ...internals.userNode });
      }
    };
    const onKeyDown = (event) => {
      if (isInputDOMNode(event.nativeEvent) || disableKeyboardA11y) {
        return;
      }
      if (elementSelectionKeys.includes(event.key) && isSelectable) {
        const unselect = event.key === "Escape";
        handleNodeClick({
          id: id2,
          store,
          unselect,
          nodeRef
        });
      } else if (isDraggable && node.selected && Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
        event.preventDefault();
        const { ariaLabelConfig } = store.getState();
        store.setState({
          ariaLiveMessage: ariaLabelConfig["node.a11yDescription.ariaLiveMessage"]({
            direction: event.key.replace("Arrow", "").toLowerCase(),
            x: ~~internals.positionAbsolute.x,
            y: ~~internals.positionAbsolute.y
          })
        });
        moveSelectedNodes({
          direction: arrowKeyDiffs[event.key],
          factor: event.shiftKey ? 4 : 1
        });
      }
    };
    const onFocus = () => {
      if (disableKeyboardA11y || !nodeRef.current?.matches(":focus-visible")) {
        return;
      }
      const { transform: transform2, width, height, autoPanOnNodeFocus, setCenter } = store.getState();
      if (!autoPanOnNodeFocus) {
        return;
      }
      const withinViewport = getNodesInside(/* @__PURE__ */ new Map([[id2, node]]), { x: 0, y: 0, width, height }, transform2, true).length > 0;
      if (!withinViewport) {
        setCenter(node.position.x + nodeDimensions.width / 2, node.position.y + nodeDimensions.height / 2, {
          zoom: transform2[2]
        });
      }
    };
    return (0, import_jsx_runtime.jsx)("div", { className: cc([
      "react-flow__node",
      `react-flow__node-${nodeType}`,
      {
        // this is overwritable by passing `nopan` as a class name
        [noPanClassName]: isDraggable
      },
      node.className,
      {
        selected: node.selected,
        selectable: isSelectable,
        parent: isParent,
        draggable: isDraggable,
        dragging
      }
    ]), ref: nodeRef, style: {
      zIndex: internals.z,
      transform: `translate(${internals.positionAbsolute.x}px,${internals.positionAbsolute.y}px)`,
      pointerEvents: hasPointerEvents ? "all" : "none",
      visibility: hasDimensions ? "visible" : "hidden",
      ...node.style,
      ...inlineDimensions
    }, "data-id": id2, "data-testid": `rf__node-${id2}`, onMouseEnter: onMouseEnterHandler, onMouseMove: onMouseMoveHandler, onMouseLeave: onMouseLeaveHandler, onContextMenu: onContextMenuHandler, onClick: onSelectNodeHandler, onDoubleClick: onDoubleClickHandler, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, onFocus: isFocusable ? onFocus : void 0, role: node.ariaRole ?? (isFocusable ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": disableKeyboardA11y ? void 0 : `${ARIA_NODE_DESC_KEY}-${rfId}`, "aria-label": node.ariaLabel, ...node.domAttributes, children: (0, import_jsx_runtime.jsx)(Provider, { value: id2, children: (0, import_jsx_runtime.jsx)(NodeComponent, { id: id2, data: node.data, type: nodeType, positionAbsoluteX: internals.positionAbsolute.x, positionAbsoluteY: internals.positionAbsolute.y, selected: node.selected ?? false, selectable: isSelectable, draggable: isDraggable, deletable: node.deletable ?? true, isConnectable, sourcePosition: node.sourcePosition, targetPosition: node.targetPosition, dragging, dragHandle: node.dragHandle, zIndex: internals.z, parentId: node.parentId, ...nodeDimensions }) }) });
  }
  var NodeWrapper$1 = (0, import_react2.memo)(NodeWrapper);
  var selector$a = (s) => ({
    nodesConnectable: s.nodesConnectable,
    nodesFocusable: s.nodesFocusable,
    elementsSelectable: s.elementsSelectable,
    onError: s.onError
  });
  function NodeRendererComponent(props) {
    const { nodesConnectable, nodesFocusable, elementsSelectable, onError } = useStore(selector$a, shallow$1);
    const nodeIds = useVisibleNodeIds(props.onlyRenderVisibleElements);
    const resizeObserver = useResizeObserver();
    return (0, import_jsx_runtime.jsx)("div", { className: "react-flow__nodes", style: containerStyle, children: nodeIds.map((nodeId) => {
      return (
        /*
         * The split of responsibilities between NodeRenderer and
         * NodeComponentWrapper may appear weird. However, it’s designed to
         * minimize the cost of updates when individual nodes change.
         *
         * For example, when you’re dragging a single node, that node gets
         * updated multiple times per second. If `NodeRenderer` were to update
         * every time, it would have to re-run the `nodes.map()` loop every
         * time. This gets pricey with hundreds of nodes, especially if every
         * loop cycle does more than just rendering a JSX element!
         *
         * As a result of this choice, we took the following implementation
         * decisions:
         * - NodeRenderer subscribes *only* to node IDs – and therefore
         *   rerender *only* when visible nodes are added or removed.
         * - NodeRenderer performs all operations the result of which can be
         *   shared between nodes (such as creating the `ResizeObserver`
         *   instance, or subscribing to `selector`). This means extra prop
         *   drilling into `NodeComponentWrapper`, but it means we need to run
         *   these operations only once – instead of once per node.
         * - Any operations that you’d normally write inside `nodes.map` are
         *   moved into `NodeComponentWrapper`. This ensures they are
         *   memorized – so if `NodeRenderer` *has* to rerender, it only
         *   needs to regenerate the list of nodes, nothing else.
         */
        (0, import_jsx_runtime.jsx)(NodeWrapper$1, { id: nodeId, nodeTypes: props.nodeTypes, nodeExtent: props.nodeExtent, onClick: props.onNodeClick, onMouseEnter: props.onNodeMouseEnter, onMouseMove: props.onNodeMouseMove, onMouseLeave: props.onNodeMouseLeave, onContextMenu: props.onNodeContextMenu, onDoubleClick: props.onNodeDoubleClick, noDragClassName: props.noDragClassName, noPanClassName: props.noPanClassName, rfId: props.rfId, disableKeyboardA11y: props.disableKeyboardA11y, resizeObserver, nodesDraggable: props.nodesDraggable ?? true, nodesConnectable, nodesFocusable, elementsSelectable, nodeClickDistance: props.nodeClickDistance, onError }, nodeId)
      );
    }) });
  }
  NodeRendererComponent.displayName = "NodeRenderer";
  var NodeRenderer = (0, import_react2.memo)(NodeRendererComponent);
  function useVisibleEdgeIds(onlyRenderVisible) {
    const edgeIds = useStore((0, import_react2.useCallback)((s) => {
      if (!onlyRenderVisible) {
        return s.edges.map((edge) => edge.id);
      }
      const visibleEdgeIds = [];
      if (s.width && s.height) {
        for (const edge of s.edges) {
          const sourceNode = s.nodeLookup.get(edge.source);
          const targetNode = s.nodeLookup.get(edge.target);
          if (sourceNode && targetNode && isEdgeVisible({
            sourceNode,
            targetNode,
            width: s.width,
            height: s.height,
            transform: s.transform
          })) {
            visibleEdgeIds.push(edge.id);
          }
        }
      }
      return visibleEdgeIds;
    }, [onlyRenderVisible]), shallow$1);
    return edgeIds;
  }
  var ArrowSymbol = ({ color: color2 = "none", strokeWidth = 1 }) => {
    const style2 = {
      strokeWidth,
      ...color2 && { stroke: color2 }
    };
    return (0, import_jsx_runtime.jsx)("polyline", { className: "arrow", style: style2, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
  };
  var ArrowClosedSymbol = ({ color: color2 = "none", strokeWidth = 1 }) => {
    const style2 = {
      strokeWidth,
      ...color2 && { stroke: color2, fill: color2 }
    };
    return (0, import_jsx_runtime.jsx)("polyline", { className: "arrowclosed", style: style2, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
  };
  var MarkerSymbols = {
    [MarkerType.Arrow]: ArrowSymbol,
    [MarkerType.ArrowClosed]: ArrowClosedSymbol
  };
  function useMarkerSymbol(type) {
    const store = useStoreApi();
    const symbol = (0, import_react2.useMemo)(() => {
      const symbolExists = Object.prototype.hasOwnProperty.call(MarkerSymbols, type);
      if (!symbolExists) {
        store.getState().onError?.("009", errorMessages["error009"](type));
        return null;
      }
      return MarkerSymbols[type];
    }, [type]);
    return symbol;
  }
  var Marker = ({ id: id2, type, color: color2, width = 12.5, height = 12.5, markerUnits = "strokeWidth", strokeWidth, orient = "auto-start-reverse" }) => {
    const Symbol2 = useMarkerSymbol(type);
    if (!Symbol2) {
      return null;
    }
    return (0, import_jsx_runtime.jsx)("marker", { className: "react-flow__arrowhead", id: id2, markerWidth: `${width}`, markerHeight: `${height}`, viewBox: "-10 -10 20 20", markerUnits, orient, refX: "0", refY: "0", children: (0, import_jsx_runtime.jsx)(Symbol2, { color: color2, strokeWidth }) });
  };
  var MarkerDefinitions = ({ defaultColor, rfId }) => {
    const edges = useStore((s) => s.edges);
    const defaultEdgeOptions = useStore((s) => s.defaultEdgeOptions);
    const markers = (0, import_react2.useMemo)(() => {
      const markers2 = createMarkerIds(edges, {
        id: rfId,
        defaultColor,
        defaultMarkerStart: defaultEdgeOptions?.markerStart,
        defaultMarkerEnd: defaultEdgeOptions?.markerEnd
      });
      return markers2;
    }, [edges, defaultEdgeOptions, rfId, defaultColor]);
    if (!markers.length) {
      return null;
    }
    return (0, import_jsx_runtime.jsx)("svg", { className: "react-flow__marker", "aria-hidden": "true", children: (0, import_jsx_runtime.jsx)("defs", { children: markers.map((marker) => (0, import_jsx_runtime.jsx)(Marker, { id: marker.id, type: marker.type, color: marker.color, width: marker.width, height: marker.height, markerUnits: marker.markerUnits, strokeWidth: marker.strokeWidth, orient: marker.orient }, marker.id)) }) });
  };
  MarkerDefinitions.displayName = "MarkerDefinitions";
  var MarkerDefinitions$1 = (0, import_react2.memo)(MarkerDefinitions);
  function EdgeTextComponent({ x, y, label, labelStyle, labelShowBg = true, labelBgStyle, labelBgPadding = [2, 4], labelBgBorderRadius = 2, children: children2, className, ...rest }) {
    const [edgeTextBbox, setEdgeTextBbox] = (0, import_react2.useState)({ x: 1, y: 0, width: 0, height: 0 });
    const edgeTextClasses = cc(["react-flow__edge-textwrapper", className]);
    const edgeTextRef = (0, import_react2.useRef)(null);
    (0, import_react2.useEffect)(() => {
      if (edgeTextRef.current) {
        const textBbox = edgeTextRef.current.getBBox();
        setEdgeTextBbox({
          x: textBbox.x,
          y: textBbox.y,
          width: textBbox.width,
          height: textBbox.height
        });
      }
    }, [label]);
    if (!label) {
      return null;
    }
    return (0, import_jsx_runtime.jsxs)("g", { transform: `translate(${x - edgeTextBbox.width / 2} ${y - edgeTextBbox.height / 2})`, className: edgeTextClasses, visibility: edgeTextBbox.width ? "visible" : "hidden", ...rest, children: [labelShowBg && (0, import_jsx_runtime.jsx)("rect", { width: edgeTextBbox.width + 2 * labelBgPadding[0], x: -labelBgPadding[0], y: -labelBgPadding[1], height: edgeTextBbox.height + 2 * labelBgPadding[1], className: "react-flow__edge-textbg", style: labelBgStyle, rx: labelBgBorderRadius, ry: labelBgBorderRadius }), (0, import_jsx_runtime.jsx)("text", { className: "react-flow__edge-text", y: edgeTextBbox.height / 2, dy: "0.3em", ref: edgeTextRef, style: labelStyle, children: label }), children2] });
  }
  EdgeTextComponent.displayName = "EdgeText";
  var EdgeText = (0, import_react2.memo)(EdgeTextComponent);
  function BaseEdge({ path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, interactionWidth = 20, ...props }) {
    return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("path", { ...props, d: path, fill: "none", className: cc(["react-flow__edge-path", props.className]) }), interactionWidth ? (0, import_jsx_runtime.jsx)("path", { d: path, fill: "none", strokeOpacity: 0, strokeWidth: interactionWidth, className: "react-flow__edge-interaction" }) : null, label && isNumeric(labelX) && isNumeric(labelY) ? (0, import_jsx_runtime.jsx)(EdgeText, { x: labelX, y: labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius }) : null] });
  }
  function getControl({ pos, x1, y1, x2, y2 }) {
    if (pos === Position.Left || pos === Position.Right) {
      return [0.5 * (x1 + x2), y1];
    }
    return [x1, 0.5 * (y1 + y2)];
  }
  function getSimpleBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top }) {
    const [sourceControlX, sourceControlY] = getControl({
      pos: sourcePosition,
      x1: sourceX,
      y1: sourceY,
      x2: targetX,
      y2: targetY
    });
    const [targetControlX, targetControlY] = getControl({
      pos: targetPosition,
      x1: targetX,
      y1: targetY,
      x2: sourceX,
      y2: sourceY
    });
    const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourceControlX,
      sourceControlY,
      targetControlX,
      targetControlY
    });
    return [
      `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
      labelX,
      labelY,
      offsetX,
      offsetY
    ];
  }
  function createSimpleBezierEdge(params) {
    return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
      const [path, labelX, labelY] = getSimpleBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition
      });
      const _id = params.isInternal ? void 0 : id2;
      return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
    });
  }
  var SimpleBezierEdge = createSimpleBezierEdge({ isInternal: false });
  var SimpleBezierEdgeInternal = createSimpleBezierEdge({ isInternal: true });
  SimpleBezierEdge.displayName = "SimpleBezierEdge";
  SimpleBezierEdgeInternal.displayName = "SimpleBezierEdgeInternal";
  function createSmoothStepEdge(params) {
    return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, sourcePosition = Position.Bottom, targetPosition = Position.Top, markerEnd, markerStart, pathOptions, interactionWidth }) => {
      const [path, labelX, labelY] = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
        borderRadius: pathOptions?.borderRadius,
        offset: pathOptions?.offset,
        stepPosition: pathOptions?.stepPosition
      });
      const _id = params.isInternal ? void 0 : id2;
      return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
    });
  }
  var SmoothStepEdge = createSmoothStepEdge({ isInternal: false });
  var SmoothStepEdgeInternal = createSmoothStepEdge({ isInternal: true });
  SmoothStepEdge.displayName = "SmoothStepEdge";
  SmoothStepEdgeInternal.displayName = "SmoothStepEdgeInternal";
  function createStepEdge(params) {
    return (0, import_react2.memo)(({ id: id2, ...props }) => {
      const _id = params.isInternal ? void 0 : id2;
      return (0, import_jsx_runtime.jsx)(SmoothStepEdge, { ...props, id: _id, pathOptions: (0, import_react2.useMemo)(() => ({ borderRadius: 0, offset: props.pathOptions?.offset }), [props.pathOptions?.offset]) });
    });
  }
  var StepEdge = createStepEdge({ isInternal: false });
  var StepEdgeInternal = createStepEdge({ isInternal: true });
  StepEdge.displayName = "StepEdge";
  StepEdgeInternal.displayName = "StepEdgeInternal";
  function createStraightEdge(params) {
    return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
      const [path, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY });
      const _id = params.isInternal ? void 0 : id2;
      return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
    });
  }
  var StraightEdge = createStraightEdge({ isInternal: false });
  var StraightEdgeInternal = createStraightEdge({ isInternal: true });
  StraightEdge.displayName = "StraightEdge";
  StraightEdgeInternal.displayName = "StraightEdgeInternal";
  function createBezierEdge(params) {
    return (0, import_react2.memo)(({ id: id2, sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, pathOptions, interactionWidth }) => {
      const [path, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
        curvature: pathOptions?.curvature
      });
      const _id = params.isInternal ? void 0 : id2;
      return (0, import_jsx_runtime.jsx)(BaseEdge, { id: _id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
    });
  }
  var BezierEdge = createBezierEdge({ isInternal: false });
  var BezierEdgeInternal = createBezierEdge({ isInternal: true });
  BezierEdge.displayName = "BezierEdge";
  BezierEdgeInternal.displayName = "BezierEdgeInternal";
  var builtinEdgeTypes = {
    default: BezierEdgeInternal,
    straight: StraightEdgeInternal,
    step: StepEdgeInternal,
    smoothstep: SmoothStepEdgeInternal,
    simplebezier: SimpleBezierEdgeInternal
  };
  var nullPosition = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null,
    zIndex: void 0
  };
  var shiftX = (x, shift, position) => {
    if (position === Position.Left)
      return x - shift;
    if (position === Position.Right)
      return x + shift;
    return x;
  };
  var shiftY = (y, shift, position) => {
    if (position === Position.Top)
      return y - shift;
    if (position === Position.Bottom)
      return y + shift;
    return y;
  };
  var EdgeUpdaterClassName = "react-flow__edgeupdater";
  function EdgeAnchor({ position, centerX, centerY, radius = 10, onMouseDown, onMouseEnter, onMouseOut, type }) {
    return (0, import_jsx_runtime.jsx)("circle", { onMouseDown, onMouseEnter, onMouseOut, className: cc([EdgeUpdaterClassName, `${EdgeUpdaterClassName}-${type}`]), cx: shiftX(centerX, radius, position), cy: shiftY(centerY, radius, position), r: radius, stroke: "transparent", fill: "transparent" });
  }
  function EdgeUpdateAnchors({ isReconnectable, reconnectRadius, edge, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, onReconnect, onReconnectStart, onReconnectEnd, setReconnecting, setUpdateHover }) {
    const store = useStoreApi();
    const handleEdgeUpdater = (event, oppositeHandle) => {
      if (event.button !== 0) {
        return;
      }
      const { autoPanOnConnect, domNode, connectionMode, connectionRadius, lib, onConnectStart, cancelConnection, nodeLookup, rfId: flowId, panBy: panBy2, updateConnection } = store.getState();
      const isTarget = oppositeHandle.type === "target";
      const _onReconnectEnd = (evt, connectionState) => {
        setReconnecting(false);
        onReconnectEnd?.(evt, edge, oppositeHandle.type, connectionState);
      };
      const onConnectEdge = (connection) => onReconnect?.(edge, connection);
      const _onConnectStart = (_event, params) => {
        setReconnecting(true);
        onReconnectStart?.(event, edge, oppositeHandle.type);
        onConnectStart?.(_event, params);
      };
      XYHandle.onPointerDown(event.nativeEvent, {
        autoPanOnConnect,
        connectionMode,
        connectionRadius,
        domNode,
        handleId: oppositeHandle.id,
        nodeId: oppositeHandle.nodeId,
        nodeLookup,
        isTarget,
        edgeUpdaterType: oppositeHandle.type,
        lib,
        flowId,
        cancelConnection,
        panBy: panBy2,
        isValidConnection: (...args) => store.getState().isValidConnection?.(...args) ?? true,
        onConnect: onConnectEdge,
        onConnectStart: _onConnectStart,
        onConnectEnd: (...args) => store.getState().onConnectEnd?.(...args),
        onReconnectEnd: _onReconnectEnd,
        updateConnection,
        getTransform: () => store.getState().transform,
        getFromHandle: () => store.getState().connection.fromHandle,
        dragThreshold: store.getState().connectionDragThreshold,
        handleDomNode: event.currentTarget
      });
    };
    const onReconnectSourceMouseDown = (event) => handleEdgeUpdater(event, { nodeId: edge.target, id: edge.targetHandle ?? null, type: "target" });
    const onReconnectTargetMouseDown = (event) => handleEdgeUpdater(event, { nodeId: edge.source, id: edge.sourceHandle ?? null, type: "source" });
    const onReconnectMouseEnter = () => setUpdateHover(true);
    const onReconnectMouseOut = () => setUpdateHover(false);
    return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(isReconnectable === true || isReconnectable === "source") && (0, import_jsx_runtime.jsx)(EdgeAnchor, { position: sourcePosition, centerX: sourceX, centerY: sourceY, radius: reconnectRadius, onMouseDown: onReconnectSourceMouseDown, onMouseEnter: onReconnectMouseEnter, onMouseOut: onReconnectMouseOut, type: "source" }), (isReconnectable === true || isReconnectable === "target") && (0, import_jsx_runtime.jsx)(EdgeAnchor, { position: targetPosition, centerX: targetX, centerY: targetY, radius: reconnectRadius, onMouseDown: onReconnectTargetMouseDown, onMouseEnter: onReconnectMouseEnter, onMouseOut: onReconnectMouseOut, type: "target" })] });
  }
  function EdgeWrapper({ id: id2, edgesFocusable, edgesReconnectable, elementsSelectable, onClick, onDoubleClick, onContextMenu, onMouseEnter, onMouseMove, onMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, rfId, edgeTypes, noPanClassName, onError, disableKeyboardA11y }) {
    let edge = useStore((s) => s.edgeLookup.get(id2));
    const defaultEdgeOptions = useStore((s) => s.defaultEdgeOptions);
    edge = defaultEdgeOptions ? { ...defaultEdgeOptions, ...edge } : edge;
    let edgeType = edge.type || "default";
    let EdgeComponent = edgeTypes?.[edgeType] || builtinEdgeTypes[edgeType];
    if (EdgeComponent === void 0) {
      onError?.("011", errorMessages["error011"](edgeType));
      edgeType = "default";
      EdgeComponent = edgeTypes?.["default"] || builtinEdgeTypes.default;
    }
    const isFocusable = !!(edge.focusable || edgesFocusable && typeof edge.focusable === "undefined");
    const isReconnectable = typeof onReconnect !== "undefined" && (edge.reconnectable || edgesReconnectable && typeof edge.reconnectable === "undefined");
    const isSelectable = !!(edge.selectable || elementsSelectable && typeof edge.selectable === "undefined");
    const edgeRef = (0, import_react2.useRef)(null);
    const [updateHover, setUpdateHover] = (0, import_react2.useState)(false);
    const [reconnecting, setReconnecting] = (0, import_react2.useState)(false);
    const store = useStoreApi();
    const { zIndex = edge.zIndex, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = useStore((0, import_react2.useCallback)((store2) => {
      const sourceNode = store2.nodeLookup.get(edge.source);
      const targetNode = store2.nodeLookup.get(edge.target);
      if (!sourceNode || !targetNode) {
        return nullPosition;
      }
      const edgePosition = getEdgePosition({
        id: id2,
        sourceNode,
        targetNode,
        sourceHandle: edge.sourceHandle || null,
        targetHandle: edge.targetHandle || null,
        connectionMode: store2.connectionMode,
        onError
      });
      const zIndex2 = getElevatedEdgeZIndex({
        selected: edge.selected,
        zIndex: edge.zIndex,
        sourceNode,
        targetNode,
        elevateOnSelect: store2.elevateEdgesOnSelect,
        zIndexMode: store2.zIndexMode
      });
      return {
        ...edgePosition || nullPosition,
        zIndex: zIndex2
      };
    }, [edge.source, edge.target, edge.sourceHandle, edge.targetHandle, edge.selected, edge.zIndex, onError]), shallow$1);
    const markerStartUrl = (0, import_react2.useMemo)(() => edge.markerStart ? `url('#${getMarkerId(edge.markerStart, rfId)}')` : void 0, [edge.markerStart, rfId]);
    const markerEndUrl = (0, import_react2.useMemo)(() => edge.markerEnd ? `url('#${getMarkerId(edge.markerEnd, rfId)}')` : void 0, [edge.markerEnd, rfId]);
    if (edge.hidden || sourceX === null || sourceY === null || targetX === null || targetY === null) {
      return null;
    }
    const onEdgeClick = (event) => {
      const { addSelectedEdges, unselectNodesAndEdges, multiSelectionActive } = store.getState();
      if (isSelectable) {
        store.setState({ nodesSelectionActive: false });
        if (edge.selected && multiSelectionActive) {
          unselectNodesAndEdges({ nodes: [], edges: [edge] });
          edgeRef.current?.blur();
        } else {
          addSelectedEdges([id2]);
        }
      }
      if (onClick) {
        onClick(event, edge);
      }
    };
    const onEdgeDoubleClick = onDoubleClick ? (event) => {
      onDoubleClick(event, { ...edge });
    } : void 0;
    const onEdgeContextMenu = onContextMenu ? (event) => {
      onContextMenu(event, { ...edge });
    } : void 0;
    const onEdgeMouseEnter = onMouseEnter ? (event) => {
      onMouseEnter(event, { ...edge });
    } : void 0;
    const onEdgeMouseMove = onMouseMove ? (event) => {
      onMouseMove(event, { ...edge });
    } : void 0;
    const onEdgeMouseLeave = onMouseLeave ? (event) => {
      onMouseLeave(event, { ...edge });
    } : void 0;
    const onKeyDown = (event) => {
      if (!disableKeyboardA11y && elementSelectionKeys.includes(event.key) && isSelectable) {
        const { unselectNodesAndEdges, addSelectedEdges } = store.getState();
        const unselect = event.key === "Escape";
        if (unselect) {
          edgeRef.current?.blur();
          unselectNodesAndEdges({ edges: [edge] });
        } else {
          addSelectedEdges([id2]);
        }
      }
    };
    return (0, import_jsx_runtime.jsx)("svg", { style: { zIndex }, children: (0, import_jsx_runtime.jsxs)("g", { className: cc([
      "react-flow__edge",
      `react-flow__edge-${edgeType}`,
      edge.className,
      noPanClassName,
      {
        selected: edge.selected,
        animated: edge.animated,
        inactive: !isSelectable && !onClick,
        updating: updateHover,
        selectable: isSelectable
      }
    ]), onClick: onEdgeClick, onDoubleClick: onEdgeDoubleClick, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, role: edge.ariaRole ?? (isFocusable ? "group" : "img"), "aria-roledescription": "edge", "data-id": id2, "data-testid": `rf__edge-${id2}`, "aria-label": edge.ariaLabel === null ? void 0 : edge.ariaLabel || `Edge from ${edge.source} to ${edge.target}`, "aria-describedby": isFocusable ? `${ARIA_EDGE_DESC_KEY}-${rfId}` : void 0, ref: edgeRef, ...edge.domAttributes, children: [!reconnecting && (0, import_jsx_runtime.jsx)(EdgeComponent, { id: id2, source: edge.source, target: edge.target, type: edge.type, selected: edge.selected, animated: edge.animated, selectable: isSelectable, deletable: edge.deletable ?? true, label: edge.label, labelStyle: edge.labelStyle, labelShowBg: edge.labelShowBg, labelBgStyle: edge.labelBgStyle, labelBgPadding: edge.labelBgPadding, labelBgBorderRadius: edge.labelBgBorderRadius, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data: edge.data, style: edge.style, sourceHandleId: edge.sourceHandle, targetHandleId: edge.targetHandle, markerStart: markerStartUrl, markerEnd: markerEndUrl, pathOptions: "pathOptions" in edge ? edge.pathOptions : void 0, interactionWidth: edge.interactionWidth }), isReconnectable && (0, import_jsx_runtime.jsx)(EdgeUpdateAnchors, { edge, isReconnectable, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, setUpdateHover, setReconnecting })] }) });
  }
  var EdgeWrapper$1 = (0, import_react2.memo)(EdgeWrapper);
  var selector$9 = (s) => ({
    edgesFocusable: s.edgesFocusable,
    edgesReconnectable: s.edgesReconnectable,
    elementsSelectable: s.elementsSelectable,
    connectionMode: s.connectionMode,
    onError: s.onError
  });
  function EdgeRendererComponent({ defaultMarkerColor, onlyRenderVisibleElements, rfId, edgeTypes, noPanClassName, onReconnect, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeClick, reconnectRadius, onEdgeDoubleClick, onReconnectStart, onReconnectEnd, disableKeyboardA11y }) {
    const { edgesFocusable, edgesReconnectable, elementsSelectable, onError } = useStore(selector$9, shallow$1);
    const edgeIds = useVisibleEdgeIds(onlyRenderVisibleElements);
    return (0, import_jsx_runtime.jsxs)("div", { className: "react-flow__edges", children: [(0, import_jsx_runtime.jsx)(MarkerDefinitions$1, { defaultColor: defaultMarkerColor, rfId }), edgeIds.map((id2) => {
      return (0, import_jsx_runtime.jsx)(EdgeWrapper$1, { id: id2, edgesFocusable, edgesReconnectable, elementsSelectable, noPanClassName, onReconnect, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onClick: onEdgeClick, reconnectRadius, onDoubleClick: onEdgeDoubleClick, onReconnectStart, onReconnectEnd, rfId, onError, edgeTypes, disableKeyboardA11y }, id2);
    })] });
  }
  EdgeRendererComponent.displayName = "EdgeRenderer";
  var EdgeRenderer = (0, import_react2.memo)(EdgeRendererComponent);
  var toTransformString = (transform2) => `translate(${transform2[0]}px,${transform2[1]}px) scale(${transform2[2]})`;
  function Viewport({ children: children2 }) {
    const store = useStoreApi();
    const viewportRef = (0, import_react2.useRef)(null);
    const [initialTransform] = (0, import_react2.useState)(() => store.getState().transform);
    useIsomorphicLayoutEffect(() => {
      let prevTransform = null;
      const applyTransform = () => {
        const transform2 = store.getState().transform;
        if (prevTransform && transform2[0] === prevTransform[0] && transform2[1] === prevTransform[1] && transform2[2] === prevTransform[2]) {
          return;
        }
        prevTransform = transform2;
        if (viewportRef.current) {
          viewportRef.current.style.transform = toTransformString(transform2);
        }
      };
      applyTransform();
      return store.subscribe(applyTransform);
    }, [store]);
    return (0, import_jsx_runtime.jsx)("div", { ref: viewportRef, className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: toTransformString(initialTransform) }, children: children2 });
  }
  function useOnInitHandler(onInit) {
    const rfInstance = useReactFlow();
    const isInitialized = (0, import_react2.useRef)(false);
    (0, import_react2.useEffect)(() => {
      if (!isInitialized.current && rfInstance.viewportInitialized && onInit) {
        setTimeout(() => onInit(rfInstance), 1);
        isInitialized.current = true;
      }
    }, [onInit, rfInstance.viewportInitialized]);
  }
  var selector$8 = (state) => state.panZoom?.syncViewport;
  function useViewportSync(viewport) {
    const syncViewport = useStore(selector$8);
    const store = useStoreApi();
    (0, import_react2.useEffect)(() => {
      if (viewport) {
        syncViewport?.(viewport);
        store.setState({ transform: [viewport.x, viewport.y, viewport.zoom] });
      }
    }, [viewport, syncViewport]);
    return null;
  }
  function storeSelector$1(s) {
    return s.connection.inProgress ? { ...s.connection, to: pointToRendererPoint(s.connection.to, s.transform) } : { ...s.connection };
  }
  function getSelector(connectionSelector) {
    if (connectionSelector) {
      const combinedSelector = (s) => {
        const connection = storeSelector$1(s);
        return connectionSelector(connection);
      };
      return combinedSelector;
    }
    return storeSelector$1;
  }
  function useConnection(connectionSelector) {
    const combinedSelector = getSelector(connectionSelector);
    return useStore(combinedSelector, shallow$1);
  }
  var selector$7 = (s) => ({
    nodesConnectable: s.nodesConnectable,
    isValid: s.connection.isValid,
    inProgress: s.connection.inProgress,
    width: s.width,
    height: s.height
  });
  function ConnectionLineWrapper({ containerStyle: containerStyle2, style: style2, type, component }) {
    const { nodesConnectable, width, height, isValid, inProgress } = useStore(selector$7, shallow$1);
    const renderConnection = !!(width && nodesConnectable && inProgress);
    if (!renderConnection) {
      return null;
    }
    return (0, import_jsx_runtime.jsx)("svg", { style: containerStyle2, width, height, className: "react-flow__connectionline react-flow__container", children: (0, import_jsx_runtime.jsx)("g", { className: cc(["react-flow__connection", getConnectionStatus(isValid)]), children: (0, import_jsx_runtime.jsx)(ConnectionLine, { style: style2, type, CustomComponent: component, isValid }) }) });
  }
  var ConnectionLine = ({ style: style2, type = ConnectionLineType.Bezier, CustomComponent, isValid }) => {
    const { inProgress, from, fromNode, fromHandle, fromPosition, to, toNode, toHandle, toPosition, pointer } = useConnection();
    if (!inProgress) {
      return;
    }
    if (CustomComponent) {
      return (0, import_jsx_runtime.jsx)(CustomComponent, { connectionLineType: type, connectionLineStyle: style2, fromNode, fromHandle, fromX: from.x, fromY: from.y, toX: to.x, toY: to.y, fromPosition, toPosition, connectionStatus: getConnectionStatus(isValid), toNode, toHandle, pointer });
    }
    let path = "";
    const pathParams = {
      sourceX: from.x,
      sourceY: from.y,
      sourcePosition: fromPosition,
      targetX: to.x,
      targetY: to.y,
      targetPosition: toPosition
    };
    switch (type) {
      case ConnectionLineType.Bezier:
        [path] = getBezierPath(pathParams);
        break;
      case ConnectionLineType.SimpleBezier:
        [path] = getSimpleBezierPath(pathParams);
        break;
      case ConnectionLineType.Step:
        [path] = getSmoothStepPath({
          ...pathParams,
          borderRadius: 0
        });
        break;
      case ConnectionLineType.SmoothStep:
        [path] = getSmoothStepPath(pathParams);
        break;
      default:
        [path] = getStraightPath(pathParams);
    }
    return (0, import_jsx_runtime.jsx)("path", { d: path, fill: "none", className: "react-flow__connection-path", style: style2 });
  };
  ConnectionLine.displayName = "ConnectionLine";
  var emptyTypes = {};
  function useNodeOrEdgeTypesWarning(nodeOrEdgeTypes = emptyTypes) {
    const typesRef = (0, import_react2.useRef)(nodeOrEdgeTypes);
    const store = useStoreApi();
    (0, import_react2.useEffect)(() => {
      if (false) {
        const usedKeys = /* @__PURE__ */ new Set([...Object.keys(typesRef.current), ...Object.keys(nodeOrEdgeTypes)]);
        for (const key of usedKeys) {
          if (typesRef.current[key] !== nodeOrEdgeTypes[key]) {
            store.getState().onError?.("002", errorMessages["error002"]());
            break;
          }
        }
        typesRef.current = nodeOrEdgeTypes;
      }
    }, [nodeOrEdgeTypes]);
  }
  function useStylesLoadedWarning() {
    const store = useStoreApi();
    const checked = (0, import_react2.useRef)(false);
    (0, import_react2.useEffect)(() => {
      if (false) {
        if (!checked.current) {
          const pane = document.querySelector(".react-flow__pane");
          if (pane && !(window.getComputedStyle(pane).zIndex === "1")) {
            store.getState().onError?.("013", errorMessages["error013"]("react"));
          }
          checked.current = true;
        }
      }
    }, []);
  }
  function GraphViewComponent({ nodeTypes, edgeTypes, onInit, onNodeClick, onEdgeClick, onNodeDoubleClick, onEdgeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, deleteKeyCode, onlyRenderVisibleElements, elementsSelectable, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, preventScrolling, defaultMarkerColor, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, autoPanOnSelection, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance, nodeClickDistance, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y, nodeExtent, rfId, viewport, onViewportChange, nodesDraggable }) {
    useNodeOrEdgeTypesWarning(nodeTypes);
    useNodeOrEdgeTypesWarning(edgeTypes);
    useStylesLoadedWarning();
    useOnInitHandler(onInit);
    useViewportSync(viewport);
    return (0, import_jsx_runtime.jsx)(FlowRenderer, { onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, paneClickDistance, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, autoPanOnSelection, defaultViewport: defaultViewport2, translateExtent, minZoom, maxZoom, onSelectionContextMenu, preventScrolling, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y, onViewportChange, isControlledViewport: !!viewport, children: (0, import_jsx_runtime.jsxs)(Viewport, { children: [(0, import_jsx_runtime.jsx)(EdgeRenderer, { edgeTypes, onEdgeClick, onEdgeDoubleClick, onReconnect, onReconnectStart, onReconnectEnd, onlyRenderVisibleElements, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, defaultMarkerColor, noPanClassName, disableKeyboardA11y, rfId }), (0, import_jsx_runtime.jsx)(ConnectionLineWrapper, { style: connectionLineStyle, type: connectionLineType, component: connectionLineComponent, containerStyle: connectionLineContainerStyle }), (0, import_jsx_runtime.jsx)("div", { className: "react-flow__edgelabel-renderer" }), (0, import_jsx_runtime.jsx)(NodeRenderer, { nodeTypes, onNodeClick, onNodeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, nodeClickDistance, onlyRenderVisibleElements, noPanClassName, noDragClassName, disableKeyboardA11y, nodeExtent, rfId, nodesDraggable }), (0, import_jsx_runtime.jsx)("div", { className: "react-flow__viewport-portal" })] }) });
  }
  GraphViewComponent.displayName = "GraphView";
  var GraphView = (0, import_react2.memo)(GraphViewComponent);
  var devWarn = createDevWarn("React Flow", "https://reactflow.dev/");
  var getInitialState = ({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView, fitViewOptions, minZoom = 0.5, maxZoom = 2, nodeOrigin, nodeExtent, zIndexMode = "basic" } = {}) => {
    const nodeLookup = /* @__PURE__ */ new Map();
    const parentLookup = /* @__PURE__ */ new Map();
    const connectionLookup = /* @__PURE__ */ new Map();
    const edgeLookup = /* @__PURE__ */ new Map();
    const storeEdges = defaultEdges ?? edges ?? [];
    const storeNodes = defaultNodes ?? nodes ?? [];
    const storeNodeOrigin = nodeOrigin ?? [0, 0];
    const storeNodeExtent = nodeExtent ?? infiniteExtent;
    updateConnectionLookup(connectionLookup, edgeLookup, storeEdges);
    const { nodesInitialized } = adoptUserNodes(storeNodes, nodeLookup, parentLookup, {
      nodeOrigin: storeNodeOrigin,
      nodeExtent: storeNodeExtent,
      zIndexMode
    });
    let transform2 = [0, 0, 1];
    if (fitView && width && height) {
      const bounds = getInternalNodesBounds(nodeLookup, {
        filter: (node) => !!((node.width || node.initialWidth) && (node.height || node.initialHeight))
      });
      const { x, y, zoom } = getViewportForBounds(bounds, width, height, minZoom, maxZoom, fitViewOptions?.padding ?? 0.1);
      transform2 = [x, y, zoom];
    }
    return {
      rfId: "1",
      width: width ?? 0,
      height: height ?? 0,
      transform: transform2,
      nodes: storeNodes,
      nodesInitialized,
      nodeLookup,
      parentLookup,
      edges: storeEdges,
      edgeLookup,
      connectionLookup,
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: defaultNodes !== void 0,
      hasDefaultEdges: defaultEdges !== void 0,
      panZoom: null,
      minZoom,
      maxZoom,
      translateExtent: infiniteExtent,
      nodeExtent: storeNodeExtent,
      nodesSelectionActive: false,
      userSelectionActive: false,
      userSelectionRect: null,
      connectionMode: ConnectionMode.Strict,
      domNode: null,
      paneDragging: false,
      noPanClassName: "nopan",
      nodeOrigin: storeNodeOrigin,
      nodeDragThreshold: 1,
      connectionDragThreshold: 1,
      snapGrid: [15, 15],
      snapToGrid: false,
      nodesDraggable: true,
      nodesConnectable: true,
      nodesFocusable: true,
      edgesFocusable: true,
      edgesReconnectable: true,
      elementsSelectable: true,
      elevateNodesOnSelect: true,
      elevateEdgesOnSelect: true,
      selectNodesOnDrag: true,
      multiSelectionActive: false,
      fitViewQueued: fitView ?? false,
      fitViewOptions,
      fitViewResolver: null,
      connection: { ...initialConnection },
      connectionClickStartHandle: null,
      connectOnClick: true,
      ariaLiveMessage: "",
      autoPanOnConnect: true,
      autoPanOnNodeDrag: true,
      autoPanOnNodeFocus: true,
      autoPanSpeed: 15,
      connectionRadius: 20,
      onError: devWarn,
      isValidConnection: void 0,
      onSelectionChangeHandlers: [],
      lib: "react",
      debug: false,
      ariaLabelConfig: defaultAriaLabelConfig,
      zIndexMode,
      defaultEdgeOptions: void 0,
      onNodesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
      onEdgesChangeMiddlewareMap: /* @__PURE__ */ new Map(),
      onNodesDelete: void 0,
      onEdgesDelete: void 0,
      onDelete: void 0,
      onBeforeDelete: void 0,
      onViewportChangeStart: void 0,
      onViewportChange: void 0,
      onViewportChangeEnd: void 0,
      onNodeDragStart: void 0,
      onNodeDrag: void 0,
      onNodeDragStop: void 0,
      onSelectionDragStart: void 0,
      onSelectionDrag: void 0,
      onSelectionDragStop: void 0,
      onMoveStart: void 0,
      onMove: void 0,
      onMoveEnd: void 0,
      onConnect: void 0,
      onConnectStart: void 0,
      onConnectEnd: void 0,
      onClickConnectStart: void 0,
      onClickConnectEnd: void 0
    };
  };
  var createStore2 = ({ nodes, edges, defaultNodes, defaultEdges, width, height, fitView, fitViewOptions, minZoom, maxZoom, nodeOrigin, nodeExtent, zIndexMode }) => createWithEqualityFn((set3, get3) => {
    async function resolveFitView() {
      const { nodeLookup, panZoom, fitViewOptions: fitViewOptions2, fitViewResolver, width: width2, height: height2, minZoom: minZoom2, maxZoom: maxZoom2 } = get3();
      if (!panZoom) {
        return;
      }
      await fitViewport({
        nodes: nodeLookup,
        width: width2,
        height: height2,
        panZoom,
        minZoom: minZoom2,
        maxZoom: maxZoom2
      }, fitViewOptions2);
      fitViewResolver?.resolve(true);
      set3({ fitViewResolver: null });
    }
    return {
      ...getInitialState({
        nodes,
        edges,
        width,
        height,
        fitView,
        fitViewOptions,
        minZoom,
        maxZoom,
        nodeOrigin,
        nodeExtent,
        defaultNodes,
        defaultEdges,
        zIndexMode
      }),
      setNodes: (nodes2) => {
        const { nodeLookup, parentLookup, nodeOrigin: nodeOrigin2, nodeExtent: nodeExtent2, elevateNodesOnSelect, fitViewQueued, zIndexMode: zIndexMode2, nodesSelectionActive } = get3();
        const { nodesInitialized, hasSelectedNodes } = adoptUserNodes(nodes2, nodeLookup, parentLookup, {
          nodeOrigin: nodeOrigin2,
          nodeExtent: nodeExtent2,
          elevateNodesOnSelect,
          checkEquality: true,
          zIndexMode: zIndexMode2
        });
        const nextNodesSelectionActive = nodesSelectionActive && hasSelectedNodes;
        if (fitViewQueued && nodesInitialized) {
          resolveFitView();
          set3({
            nodes: nodes2,
            nodesInitialized,
            fitViewQueued: false,
            fitViewOptions: void 0,
            nodesSelectionActive: nextNodesSelectionActive
          });
        } else {
          set3({ nodes: nodes2, nodesInitialized, nodesSelectionActive: nextNodesSelectionActive });
        }
      },
      setEdges: (edges2) => {
        const { connectionLookup, edgeLookup } = get3();
        updateConnectionLookup(connectionLookup, edgeLookup, edges2);
        set3({ edges: edges2 });
      },
      setDefaultNodesAndEdges: (nodes2, edges2) => {
        if (nodes2) {
          const { setNodes } = get3();
          setNodes(nodes2);
          set3({ hasDefaultNodes: true });
        }
        if (edges2) {
          const { setEdges } = get3();
          setEdges(edges2);
          set3({ hasDefaultEdges: true });
        }
      },
      /*
       * Every node gets registered at a ResizeObserver. Whenever a node
       * changes its dimensions, this function is called to measure the
       * new dimensions and update the nodes.
       */
      updateNodeInternals: (updates) => {
        const { triggerNodeChanges, nodeLookup, parentLookup, domNode, nodeOrigin: nodeOrigin2, nodeExtent: nodeExtent2, debug, fitViewQueued, zIndexMode: zIndexMode2 } = get3();
        const { changes, updatedInternals } = updateNodeInternals(updates, nodeLookup, parentLookup, domNode, nodeOrigin2, nodeExtent2, zIndexMode2);
        if (!updatedInternals) {
          return;
        }
        updateAbsolutePositions(nodeLookup, parentLookup, { nodeOrigin: nodeOrigin2, nodeExtent: nodeExtent2, zIndexMode: zIndexMode2 });
        if (fitViewQueued) {
          resolveFitView();
          set3({ fitViewQueued: false, fitViewOptions: void 0 });
        } else {
          set3({});
        }
        if (changes?.length > 0) {
          if (debug) {
            console.log("React Flow: trigger node changes", changes);
          }
          triggerNodeChanges?.(changes);
        }
      },
      updateNodePositions: (nodeDragItems, dragging = false) => {
        const parentExpandChildren = [];
        let changes = [];
        const { nodeLookup, triggerNodeChanges, connection, updateConnection, onNodesChangeMiddlewareMap } = get3();
        for (const [id2, dragItem] of nodeDragItems) {
          const node = nodeLookup.get(id2);
          const expandParent = !!(node?.expandParent && node?.parentId && dragItem?.position);
          const change = {
            id: id2,
            type: "position",
            position: expandParent ? {
              x: Math.max(0, dragItem.position.x),
              y: Math.max(0, dragItem.position.y)
            } : dragItem.position,
            dragging
          };
          if (node && connection.inProgress && connection.fromNode.id === node.id) {
            const updatedFrom = getHandlePosition(node, connection.fromHandle, Position.Left, true);
            updateConnection({ ...connection, from: updatedFrom });
          }
          if (expandParent && node.parentId) {
            parentExpandChildren.push({
              id: id2,
              parentId: node.parentId,
              rect: {
                ...dragItem.internals.positionAbsolute,
                width: dragItem.measured.width ?? 0,
                height: dragItem.measured.height ?? 0
              }
            });
          }
          changes.push(change);
        }
        if (parentExpandChildren.length > 0) {
          const { parentLookup, nodeOrigin: nodeOrigin2 } = get3();
          const parentExpandChanges = handleExpandParent(parentExpandChildren, nodeLookup, parentLookup, nodeOrigin2);
          changes.push(...parentExpandChanges);
        }
        for (const middleware of onNodesChangeMiddlewareMap.values()) {
          changes = middleware(changes);
        }
        triggerNodeChanges(changes);
      },
      triggerNodeChanges: (changes) => {
        const { onNodesChange, setNodes, nodes: nodes2, hasDefaultNodes, debug } = get3();
        if (changes?.length) {
          if (hasDefaultNodes) {
            const updatedNodes = applyNodeChanges(changes, nodes2);
            setNodes(updatedNodes);
          }
          if (debug) {
            console.log("React Flow: trigger node changes", changes);
          }
          onNodesChange?.(changes);
        }
      },
      triggerEdgeChanges: (changes) => {
        const { onEdgesChange, setEdges, edges: edges2, hasDefaultEdges, debug } = get3();
        if (changes?.length) {
          if (hasDefaultEdges) {
            const updatedEdges = applyEdgeChanges(changes, edges2);
            setEdges(updatedEdges);
          }
          if (debug) {
            console.log("React Flow: trigger edge changes", changes);
          }
          onEdgesChange?.(changes);
        }
      },
      addSelectedNodes: (selectedNodeIds) => {
        const { multiSelectionActive, edgeLookup, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get3();
        if (multiSelectionActive) {
          const nodeChanges = selectedNodeIds.map((nodeId) => createSelectionChange(nodeId, true));
          triggerNodeChanges(nodeChanges);
          return;
        }
        triggerNodeChanges(getSelectionChanges(nodeLookup, /* @__PURE__ */ new Set([...selectedNodeIds]), true));
        triggerEdgeChanges(getSelectionChanges(edgeLookup));
      },
      addSelectedEdges: (selectedEdgeIds) => {
        const { multiSelectionActive, edgeLookup, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get3();
        if (multiSelectionActive) {
          const changedEdges = selectedEdgeIds.map((edgeId) => createSelectionChange(edgeId, true));
          triggerEdgeChanges(changedEdges);
          return;
        }
        triggerEdgeChanges(getSelectionChanges(edgeLookup, /* @__PURE__ */ new Set([...selectedEdgeIds])));
        triggerNodeChanges(getSelectionChanges(nodeLookup, /* @__PURE__ */ new Set(), true));
      },
      unselectNodesAndEdges: ({ nodes: nodes2, edges: edges2 } = {}) => {
        const { edges: storeEdges, nodes: storeNodes, nodeLookup, triggerNodeChanges, triggerEdgeChanges } = get3();
        const nodesToUnselect = nodes2 ? nodes2 : storeNodes;
        const edgesToUnselect = edges2 ? edges2 : storeEdges;
        const nodeChanges = [];
        for (const node of nodesToUnselect) {
          if (!node.selected) {
            continue;
          }
          const internalNode = nodeLookup.get(node.id);
          if (internalNode) {
            internalNode.selected = false;
          }
          nodeChanges.push(createSelectionChange(node.id, false));
        }
        const edgeChanges = [];
        for (const edge of edgesToUnselect) {
          if (!edge.selected) {
            continue;
          }
          edgeChanges.push(createSelectionChange(edge.id, false));
        }
        triggerNodeChanges(nodeChanges);
        triggerEdgeChanges(edgeChanges);
      },
      setMinZoom: (minZoom2) => {
        const { panZoom, maxZoom: maxZoom2 } = get3();
        panZoom?.setScaleExtent([minZoom2, maxZoom2]);
        set3({ minZoom: minZoom2 });
      },
      setMaxZoom: (maxZoom2) => {
        const { panZoom, minZoom: minZoom2 } = get3();
        panZoom?.setScaleExtent([minZoom2, maxZoom2]);
        set3({ maxZoom: maxZoom2 });
      },
      setTranslateExtent: (translateExtent) => {
        get3().panZoom?.setTranslateExtent(translateExtent);
        set3({ translateExtent });
      },
      resetSelectedElements: () => {
        const { edges: edges2, nodes: nodes2, triggerNodeChanges, triggerEdgeChanges, elementsSelectable } = get3();
        if (!elementsSelectable) {
          return;
        }
        const nodeChanges = nodes2.reduce((res, node) => node.selected ? [...res, createSelectionChange(node.id, false)] : res, []);
        const edgeChanges = edges2.reduce((res, edge) => edge.selected ? [...res, createSelectionChange(edge.id, false)] : res, []);
        triggerNodeChanges(nodeChanges);
        triggerEdgeChanges(edgeChanges);
      },
      setNodeExtent: (nextNodeExtent) => {
        const { nodes: nodes2, nodeLookup, parentLookup, nodeOrigin: nodeOrigin2, elevateNodesOnSelect, nodeExtent: nodeExtent2, zIndexMode: zIndexMode2 } = get3();
        if (nextNodeExtent[0][0] === nodeExtent2[0][0] && nextNodeExtent[0][1] === nodeExtent2[0][1] && nextNodeExtent[1][0] === nodeExtent2[1][0] && nextNodeExtent[1][1] === nodeExtent2[1][1]) {
          return;
        }
        adoptUserNodes(nodes2, nodeLookup, parentLookup, {
          nodeOrigin: nodeOrigin2,
          nodeExtent: nextNodeExtent,
          elevateNodesOnSelect,
          checkEquality: false,
          zIndexMode: zIndexMode2
        });
        set3({ nodeExtent: nextNodeExtent });
      },
      panBy: (delta) => {
        const { transform: transform2, width: width2, height: height2, panZoom, translateExtent } = get3();
        return panBy({ delta, panZoom, transform: transform2, translateExtent, width: width2, height: height2 });
      },
      setCenter: async (x, y, options) => {
        const { width: width2, height: height2, maxZoom: maxZoom2, panZoom } = get3();
        if (!panZoom) {
          return false;
        }
        const nextZoom = typeof options?.zoom !== "undefined" ? options.zoom : maxZoom2;
        await panZoom.setViewport({
          x: width2 / 2 - x * nextZoom,
          y: height2 / 2 - y * nextZoom,
          zoom: nextZoom
        }, { duration: options?.duration, ease: options?.ease, interpolate: options?.interpolate });
        return true;
      },
      cancelConnection: () => {
        set3({
          connection: { ...initialConnection }
        });
      },
      updateConnection: (connection) => {
        set3({ connection });
      },
      reset: () => set3({ ...getInitialState() })
    };
  }, Object.is);
  function ReactFlowProvider({ initialNodes: nodes, initialEdges: edges, defaultNodes, defaultEdges, initialWidth: width, initialHeight: height, initialMinZoom: minZoom, initialMaxZoom: maxZoom, initialFitViewOptions: fitViewOptions, fitView, nodeOrigin, nodeExtent, zIndexMode, children: children2 }) {
    const [store] = (0, import_react2.useState)(() => createStore2({
      nodes,
      edges,
      defaultNodes,
      defaultEdges,
      width,
      height,
      fitView,
      minZoom,
      maxZoom,
      fitViewOptions,
      nodeOrigin,
      nodeExtent,
      zIndexMode
    }));
    return (0, import_jsx_runtime.jsx)(Provider$1, { value: store, children: (0, import_jsx_runtime.jsx)(BatchProvider, { children: (0, import_jsx_runtime.jsx)(HandleConfigProvider, { children: children2 }) }) });
  }
  function Wrapper({ children: children2, nodes, edges, defaultNodes, defaultEdges, width, height, fitView, fitViewOptions, minZoom, maxZoom, nodeOrigin, nodeExtent, zIndexMode }) {
    const isWrapped = (0, import_react2.useContext)(StoreContext);
    if (isWrapped) {
      return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children2 });
    }
    return (0, import_jsx_runtime.jsx)(ReactFlowProvider, { initialNodes: nodes, initialEdges: edges, defaultNodes, defaultEdges, initialWidth: width, initialHeight: height, fitView, initialFitViewOptions: fitViewOptions, initialMinZoom: minZoom, initialMaxZoom: maxZoom, nodeOrigin, nodeExtent, zIndexMode, children: children2 });
  }
  var wrapperStyle = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    zIndex: 0
  };
  function ReactFlow({ nodes, edges, defaultNodes, defaultEdges, className, nodeTypes, edgeTypes, onNodeClick, onEdgeClick, onInit, onMove, onMoveStart, onMoveEnd, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, onNodeDragStart, onNodeDrag, onNodeDragStop, onNodesDelete, onEdgesDelete, onDelete, onSelectionChange, onSelectionDragStart, onSelectionDrag, onSelectionDragStop, onSelectionContextMenu, onSelectionStart, onSelectionEnd, onBeforeDelete, connectionMode, connectionLineType = ConnectionLineType.Bezier, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, deleteKeyCode = "Backspace", selectionKeyCode = "Shift", selectionOnDrag = false, selectionMode = SelectionMode.Full, panActivationKeyCode = "Space", multiSelectionKeyCode = isMacOs() ? "Meta" : "Control", zoomActivationKeyCode = isMacOs() ? "Meta" : "Control", snapToGrid, snapGrid, onlyRenderVisibleElements = false, selectNodesOnDrag, nodesDraggable, autoPanOnNodeFocus, nodesConnectable, nodesFocusable, nodeOrigin = defaultNodeOrigin, edgesFocusable, edgesReconnectable, elementsSelectable = true, defaultViewport: defaultViewport$1 = defaultViewport, minZoom = 0.5, maxZoom = 2, translateExtent = infiniteExtent, preventScrolling = true, nodeExtent, defaultMarkerColor = "#b1b1b7", zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, panOnDrag = true, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance = 1, nodeClickDistance = 0, children: children2, onReconnect, onReconnectStart, onReconnectEnd, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius = 10, onNodesChange, onEdgesChange, noDragClassName = "nodrag", noWheelClassName = "nowheel", noPanClassName = "nopan", fitView, fitViewOptions, connectOnClick, attributionPosition, proOptions, defaultEdgeOptions, elevateNodesOnSelect = true, elevateEdgesOnSelect = false, disableKeyboardA11y = false, autoPanOnConnect, autoPanOnNodeDrag, autoPanOnSelection = true, autoPanSpeed, connectionRadius, isValidConnection, onError, style: style2, id: id2, nodeDragThreshold, connectionDragThreshold, viewport, onViewportChange, width, height, colorMode = "light", debug, onScroll, ariaLabelConfig, zIndexMode = "basic", ...rest }, ref) {
    const rfId = id2 || "1";
    const colorModeClassName = useColorModeClass(colorMode);
    const wrapperOnScroll = (0, import_react2.useCallback)((e) => {
      e.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" });
      onScroll?.(e);
    }, [onScroll]);
    return (0, import_jsx_runtime.jsx)("div", { "data-testid": "rf__wrapper", ...rest, onScroll: wrapperOnScroll, style: { ...style2, ...wrapperStyle }, ref, className: cc(["react-flow", className, colorModeClassName]), id: id2, role: "application", children: (0, import_jsx_runtime.jsxs)(Wrapper, { nodes, edges, width, height, fitView, fitViewOptions, minZoom, maxZoom, nodeOrigin, nodeExtent, zIndexMode, children: [(0, import_jsx_runtime.jsx)(StoreUpdater, { nodes, edges, defaultNodes, defaultEdges, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, nodesDraggable, autoPanOnNodeFocus, nodesConnectable, nodesFocusable, edgesFocusable, edgesReconnectable, elementsSelectable, elevateNodesOnSelect, elevateEdgesOnSelect, minZoom, maxZoom, nodeExtent, onNodesChange, onEdgesChange, snapToGrid, snapGrid, connectionMode, translateExtent, connectOnClick, defaultEdgeOptions, fitView, fitViewOptions, onNodesDelete, onEdgesDelete, onDelete, onNodeDragStart, onNodeDrag, onNodeDragStop, onSelectionDrag, onSelectionDragStart, onSelectionDragStop, onMove, onMoveStart, onMoveEnd, noPanClassName, nodeOrigin, rfId, autoPanOnConnect, autoPanOnNodeDrag, autoPanSpeed, onError, connectionRadius, isValidConnection, selectNodesOnDrag, nodeDragThreshold, connectionDragThreshold, onBeforeDelete, debug, ariaLabelConfig, zIndexMode }), (0, import_jsx_runtime.jsx)(GraphView, { onInit, onNodeClick, onEdgeClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, nodeTypes, edgeTypes, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, deleteKeyCode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, onlyRenderVisibleElements, defaultViewport: defaultViewport$1, translateExtent, minZoom, maxZoom, preventScrolling, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, autoPanOnSelection, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, paneClickDistance, nodeClickDistance, onSelectionContextMenu, onSelectionStart, onSelectionEnd, onReconnect, onReconnectStart, onReconnectEnd, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, reconnectRadius, defaultMarkerColor, noDragClassName, noWheelClassName, noPanClassName, rfId, disableKeyboardA11y, nodeExtent, viewport, onViewportChange, nodesDraggable }), (0, import_jsx_runtime.jsx)(SelectionListener, { onSelectionChange }), children2, (0, import_jsx_runtime.jsx)(Attribution, { proOptions, position: attributionPosition }), (0, import_jsx_runtime.jsx)(A11yDescriptions, { rfId, disableKeyboardA11y })] }) });
  }
  var index = fixedForwardRef(ReactFlow);
  function useNodesState(initialNodes) {
    const [nodes, setNodes] = (0, import_react2.useState)(initialNodes);
    const onNodesChange = (0, import_react2.useCallback)((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
    return [nodes, setNodes, onNodesChange];
  }
  function useEdgesState(initialEdges) {
    const [edges, setEdges] = (0, import_react2.useState)(initialEdges);
    const onEdgesChange = (0, import_react2.useCallback)((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
    return [edges, setEdges, onEdgesChange];
  }
  var error014 = errorMessages["error014"]();
  function LinePattern({ dimensions, lineWidth, variant, className }) {
    return (0, import_jsx_runtime.jsx)("path", { strokeWidth: lineWidth, d: `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`, className: cc(["react-flow__background-pattern", variant, className]) });
  }
  function DotPattern({ radius, className }) {
    return (0, import_jsx_runtime.jsx)("circle", { cx: radius, cy: radius, r: radius, className: cc(["react-flow__background-pattern", "dots", className]) });
  }
  var BackgroundVariant;
  (function(BackgroundVariant2) {
    BackgroundVariant2["Lines"] = "lines";
    BackgroundVariant2["Dots"] = "dots";
    BackgroundVariant2["Cross"] = "cross";
  })(BackgroundVariant || (BackgroundVariant = {}));
  var defaultSize = {
    [BackgroundVariant.Dots]: 1,
    [BackgroundVariant.Lines]: 1,
    [BackgroundVariant.Cross]: 6
  };
  var selector$3 = (s) => ({ transform: s.transform, patternId: `pattern-${s.rfId}` });
  function BackgroundComponent({
    id: id2,
    variant = BackgroundVariant.Dots,
    // only used for dots and cross
    gap = 20,
    // only used for lines and cross
    size,
    lineWidth = 1,
    offset = 0,
    color: color2,
    bgColor,
    style: style2,
    className,
    patternClassName
  }) {
    const ref = (0, import_react2.useRef)(null);
    const { transform: transform2, patternId } = useStore(selector$3, shallow$1);
    const patternSize = size || defaultSize[variant];
    const isDots = variant === BackgroundVariant.Dots;
    const isCross = variant === BackgroundVariant.Cross;
    const gapXY = Array.isArray(gap) ? gap : [gap, gap];
    const scaledGap = [gapXY[0] * transform2[2] || 1, gapXY[1] * transform2[2] || 1];
    const scaledSize = patternSize * transform2[2];
    const offsetXY = Array.isArray(offset) ? offset : [offset, offset];
    const patternDimensions = isCross ? [scaledSize, scaledSize] : scaledGap;
    const scaledOffset = [
      offsetXY[0] * transform2[2] + patternDimensions[0] / 2,
      offsetXY[1] * transform2[2] + patternDimensions[1] / 2
    ];
    const _patternId = `${patternId}${id2 ? id2 : ""}`;
    return (0, import_jsx_runtime.jsxs)("svg", { className: cc(["react-flow__background", className]), style: {
      ...style2,
      ...containerStyle,
      "--xy-background-color-props": bgColor,
      "--xy-background-pattern-color-props": color2
    }, ref, "data-testid": "rf__background", children: [(0, import_jsx_runtime.jsx)("pattern", { id: _patternId, x: transform2[0] % scaledGap[0], y: transform2[1] % scaledGap[1], width: scaledGap[0], height: scaledGap[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${scaledOffset[0]},-${scaledOffset[1]})`, children: isDots ? (0, import_jsx_runtime.jsx)(DotPattern, { radius: scaledSize / 2, className: patternClassName }) : (0, import_jsx_runtime.jsx)(LinePattern, { dimensions: patternDimensions, lineWidth, variant, className: patternClassName }) }), (0, import_jsx_runtime.jsx)("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${_patternId})` })] });
  }
  BackgroundComponent.displayName = "Background";
  var Background = (0, import_react2.memo)(BackgroundComponent);
  function PlusIcon() {
    return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: (0, import_jsx_runtime.jsx)("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
  }
  function MinusIcon() {
    return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: (0, import_jsx_runtime.jsx)("path", { d: "M0 0h32v4.2H0z" }) });
  }
  function FitViewIcon() {
    return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: (0, import_jsx_runtime.jsx)("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
  }
  function LockIcon() {
    return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: (0, import_jsx_runtime.jsx)("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
  }
  function UnlockIcon() {
    return (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: (0, import_jsx_runtime.jsx)("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
  }
  function ControlButton({ children: children2, className, ...rest }) {
    return (0, import_jsx_runtime.jsx)("button", { type: "button", className: cc(["react-flow__controls-button", className]), ...rest, children: children2 });
  }
  var selector$2 = (s) => ({
    isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
    minZoomReached: s.transform[2] <= s.minZoom,
    maxZoomReached: s.transform[2] >= s.maxZoom,
    ariaLabelConfig: s.ariaLabelConfig
  });
  function ControlsComponent({ style: style2, showZoom = true, showFitView = true, showInteractive = true, fitViewOptions, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children: children2, position = "bottom-left", orientation = "vertical", "aria-label": ariaLabel }) {
    const store = useStoreApi();
    const { isInteractive, minZoomReached, maxZoomReached, ariaLabelConfig } = useStore(selector$2, shallow$1);
    const { zoomIn, zoomOut, fitView } = useReactFlow();
    const onZoomInHandler = () => {
      zoomIn();
      onZoomIn?.();
    };
    const onZoomOutHandler = () => {
      zoomOut();
      onZoomOut?.();
    };
    const onFitViewHandler = () => {
      fitView(fitViewOptions);
      onFitView?.();
    };
    const onToggleInteractivity = () => {
      store.setState({
        nodesDraggable: !isInteractive,
        nodesConnectable: !isInteractive,
        elementsSelectable: !isInteractive
      });
      onInteractiveChange?.(!isInteractive);
    };
    const orientationClass = orientation === "horizontal" ? "horizontal" : "vertical";
    return (0, import_jsx_runtime.jsxs)(Panel, { className: cc(["react-flow__controls", orientationClass, className]), position, style: style2, "data-testid": "rf__controls", "aria-label": ariaLabel ?? ariaLabelConfig["controls.ariaLabel"], children: [showZoom && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(ControlButton, { onClick: onZoomInHandler, className: "react-flow__controls-zoomin", title: ariaLabelConfig["controls.zoomIn.ariaLabel"], "aria-label": ariaLabelConfig["controls.zoomIn.ariaLabel"], disabled: maxZoomReached, children: (0, import_jsx_runtime.jsx)(PlusIcon, {}) }), (0, import_jsx_runtime.jsx)(ControlButton, { onClick: onZoomOutHandler, className: "react-flow__controls-zoomout", title: ariaLabelConfig["controls.zoomOut.ariaLabel"], "aria-label": ariaLabelConfig["controls.zoomOut.ariaLabel"], disabled: minZoomReached, children: (0, import_jsx_runtime.jsx)(MinusIcon, {}) })] }), showFitView && (0, import_jsx_runtime.jsx)(ControlButton, { className: "react-flow__controls-fitview", onClick: onFitViewHandler, title: ariaLabelConfig["controls.fitView.ariaLabel"], "aria-label": ariaLabelConfig["controls.fitView.ariaLabel"], children: (0, import_jsx_runtime.jsx)(FitViewIcon, {}) }), showInteractive && (0, import_jsx_runtime.jsx)(ControlButton, { className: "react-flow__controls-interactive", onClick: onToggleInteractivity, title: ariaLabelConfig["controls.interactive.ariaLabel"], "aria-label": ariaLabelConfig["controls.interactive.ariaLabel"], children: isInteractive ? (0, import_jsx_runtime.jsx)(UnlockIcon, {}) : (0, import_jsx_runtime.jsx)(LockIcon, {}) }), children2] });
  }
  ControlsComponent.displayName = "Controls";
  var Controls = (0, import_react2.memo)(ControlsComponent);
  function MiniMapNodeComponent({ id: id2, x, y, width, height, style: style2, color: color2, strokeColor, strokeWidth, className, borderRadius, shapeRendering, selected: selected2, onClick }) {
    const { background, backgroundColor } = style2 || {};
    const fill = color2 || background || backgroundColor;
    return (0, import_jsx_runtime.jsx)("rect", { className: cc(["react-flow__minimap-node", { selected: selected2 }, className]), x, y, rx: borderRadius, ry: borderRadius, width, height, style: {
      fill,
      stroke: strokeColor,
      strokeWidth
    }, shapeRendering, onClick: onClick ? (event) => onClick(event, id2) : void 0 });
  }
  var MiniMapNode = (0, import_react2.memo)(MiniMapNodeComponent);
  var selectorNodeIds = (s) => s.nodes.map((node) => node.id);
  var getAttrFunction = (func) => func instanceof Function ? func : () => func;
  function MiniMapNodes({
    nodeStrokeColor,
    nodeColor,
    nodeClassName = "",
    nodeBorderRadius = 5,
    nodeStrokeWidth,
    /*
     * We need to rename the prop to be `CapitalCase` so that JSX will render it as
     * a component properly.
     */
    nodeComponent: NodeComponent = MiniMapNode,
    onClick
  }) {
    const nodeIds = useStore(selectorNodeIds, shallow$1);
    const nodeColorFunc = getAttrFunction(nodeColor);
    const nodeStrokeColorFunc = getAttrFunction(nodeStrokeColor);
    const nodeClassNameFunc = getAttrFunction(nodeClassName);
    const shapeRendering = typeof window === "undefined" || !!window.chrome ? "crispEdges" : "geometricPrecision";
    return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: nodeIds.map((nodeId) => (
      /*
       * The split of responsibilities between MiniMapNodes and
       * NodeComponentWrapper may appear weird. However, it’s designed to
       * minimize the cost of updates when individual nodes change.
       *
       * For more details, see a similar commit in `NodeRenderer/index.tsx`.
       */
      (0, import_jsx_runtime.jsx)(NodeComponentWrapper, { id: nodeId, nodeColorFunc, nodeStrokeColorFunc, nodeClassNameFunc, nodeBorderRadius, nodeStrokeWidth, NodeComponent, onClick, shapeRendering }, nodeId)
    )) });
  }
  function NodeComponentWrapperInner({ id: id2, nodeColorFunc, nodeStrokeColorFunc, nodeClassNameFunc, nodeBorderRadius, nodeStrokeWidth, shapeRendering, NodeComponent, onClick }) {
    const { node, x, y, width, height } = useStore((s) => {
      const node2 = s.nodeLookup.get(id2);
      if (!node2) {
        return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
      }
      const userNode = node2.internals.userNode;
      const { x: x2, y: y2 } = node2.internals.positionAbsolute;
      const { width: width2, height: height2 } = getNodeDimensions(userNode);
      return {
        node: userNode,
        x: x2,
        y: y2,
        width: width2,
        height: height2
      };
    }, shallow$1);
    if (!node || node.hidden || !nodeHasDimensions(node)) {
      return null;
    }
    return (0, import_jsx_runtime.jsx)(NodeComponent, { x, y, width, height, style: node.style, selected: !!node.selected, className: nodeClassNameFunc(node), color: nodeColorFunc(node), borderRadius: nodeBorderRadius, strokeColor: nodeStrokeColorFunc(node), strokeWidth: nodeStrokeWidth, shapeRendering, onClick, id: node.id });
  }
  var NodeComponentWrapper = (0, import_react2.memo)(NodeComponentWrapperInner);
  var MiniMapNodes$1 = (0, import_react2.memo)(MiniMapNodes);
  var defaultWidth = 200;
  var defaultHeight = 150;
  var filterHidden = (node) => !node.hidden;
  var selector$1 = (s) => {
    const viewBB = {
      x: -s.transform[0] / s.transform[2],
      y: -s.transform[1] / s.transform[2],
      width: s.width / s.transform[2],
      height: s.height / s.transform[2]
    };
    let hasVisibleNode = false;
    for (const node of s.nodeLookup.values()) {
      if (!node.hidden) {
        hasVisibleNode = true;
        break;
      }
    }
    return {
      viewBB,
      boundingRect: hasVisibleNode ? getBoundsOfRects(getInternalNodesBounds(s.nodeLookup, { filter: filterHidden }), viewBB) : viewBB,
      rfId: s.rfId,
      panZoom: s.panZoom,
      translateExtent: s.translateExtent,
      flowWidth: s.width,
      flowHeight: s.height,
      ariaLabelConfig: s.ariaLabelConfig
    };
  };
  var rectEqual = (a, b) => a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
  var areEqual = (a, b) => rectEqual(a.viewBB, b.viewBB) && rectEqual(a.boundingRect, b.boundingRect) && a.rfId === b.rfId && a.panZoom === b.panZoom && a.translateExtent === b.translateExtent && a.flowWidth === b.flowWidth && a.flowHeight === b.flowHeight && a.ariaLabelConfig === b.ariaLabelConfig;
  var ARIA_LABEL_KEY = "react-flow__minimap-desc";
  function MiniMapComponent({
    style: style2,
    className,
    nodeStrokeColor,
    nodeColor,
    nodeClassName = "",
    nodeBorderRadius = 5,
    nodeStrokeWidth,
    /*
     * We need to rename the prop to be `CapitalCase` so that JSX will render it as
     * a component properly.
     */
    nodeComponent,
    bgColor,
    maskColor,
    maskStrokeColor,
    maskStrokeWidth,
    position = "bottom-right",
    onClick,
    onNodeClick,
    pannable = false,
    zoomable = false,
    ariaLabel,
    inversePan,
    zoomStep = 1,
    offsetScale = 5
  }) {
    const store = useStoreApi();
    const svg = (0, import_react2.useRef)(null);
    const { boundingRect, panZoom, viewBB, rfId, translateExtent, flowWidth, flowHeight, ariaLabelConfig } = useStore(selector$1, areEqual);
    const elementWidth = style2?.width ?? defaultWidth;
    const elementHeight = style2?.height ?? defaultHeight;
    const scaledWidth = boundingRect.width / elementWidth;
    const scaledHeight = boundingRect.height / elementHeight;
    const viewScale = Math.max(scaledWidth, scaledHeight);
    const viewWidth = viewScale * elementWidth;
    const viewHeight = viewScale * elementHeight;
    const offset = offsetScale * viewScale;
    const x = boundingRect.x - (viewWidth - boundingRect.width) / 2 - offset;
    const y = boundingRect.y - (viewHeight - boundingRect.height) / 2 - offset;
    const width = viewWidth + offset * 2;
    const height = viewHeight + offset * 2;
    const labelledBy = `${ARIA_LABEL_KEY}-${rfId}`;
    const viewScaleRef = (0, import_react2.useRef)(0);
    const minimapInstance = (0, import_react2.useRef)();
    viewScaleRef.current = viewScale;
    (0, import_react2.useEffect)(() => {
      const currentPanZoom = store.getState().panZoom;
      if (svg.current && currentPanZoom) {
        minimapInstance.current = XYMinimap({
          domNode: svg.current,
          panZoom: currentPanZoom,
          getTransform: () => store.getState().transform,
          getViewScale: () => viewScaleRef.current
        });
        return () => {
          minimapInstance.current?.destroy();
        };
      }
    }, [panZoom]);
    (0, import_react2.useEffect)(() => {
      minimapInstance.current?.update({
        translateExtent,
        width: flowWidth,
        height: flowHeight,
        inversePan,
        pannable,
        zoomStep,
        zoomable
      });
    }, [pannable, zoomable, inversePan, zoomStep, translateExtent, flowWidth, flowHeight]);
    const onSvgClick = onClick ? (event) => {
      const [x2, y2] = minimapInstance.current?.pointer(event) || [0, 0];
      onClick(event, { x: x2, y: y2 });
    } : void 0;
    const nodeClickHandler = (0, import_react2.useCallback)((event, nodeId) => {
      const node = store.getState().nodeLookup.get(nodeId).internals.userNode;
      onNodeClick?.(event, node);
    }, [onNodeClick]);
    const onSvgNodeClick = onNodeClick ? nodeClickHandler : void 0;
    const _ariaLabel = ariaLabel ?? ariaLabelConfig["minimap.ariaLabel"];
    return (0, import_jsx_runtime.jsx)(Panel, { position, style: {
      ...style2,
      "--xy-minimap-background-color-props": typeof bgColor === "string" ? bgColor : void 0,
      "--xy-minimap-mask-background-color-props": typeof maskColor === "string" ? maskColor : void 0,
      "--xy-minimap-mask-stroke-color-props": typeof maskStrokeColor === "string" ? maskStrokeColor : void 0,
      "--xy-minimap-mask-stroke-width-props": typeof maskStrokeWidth === "number" ? maskStrokeWidth * viewScale : void 0,
      "--xy-minimap-node-background-color-props": typeof nodeColor === "string" ? nodeColor : void 0,
      "--xy-minimap-node-stroke-color-props": typeof nodeStrokeColor === "string" ? nodeStrokeColor : void 0,
      "--xy-minimap-node-stroke-width-props": typeof nodeStrokeWidth === "number" ? nodeStrokeWidth : void 0
    }, className: cc(["react-flow__minimap", className]), "data-testid": "rf__minimap", children: (0, import_jsx_runtime.jsxs)("svg", { width: elementWidth, height: elementHeight, viewBox: `${x} ${y} ${width} ${height}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": labelledBy, ref: svg, onClick: onSvgClick, children: [_ariaLabel && (0, import_jsx_runtime.jsx)("title", { id: labelledBy, children: _ariaLabel }), (0, import_jsx_runtime.jsx)(MiniMapNodes$1, { onClick: onSvgNodeClick, nodeColor, nodeStrokeColor, nodeBorderRadius, nodeClassName, nodeStrokeWidth, nodeComponent }), (0, import_jsx_runtime.jsx)("path", { className: "react-flow__minimap-mask", d: `M${x - offset},${y - offset}h${width + offset * 2}v${height + offset * 2}h${-width - offset * 2}z
        M${viewBB.x},${viewBB.y}h${viewBB.width}v${viewBB.height}h${-viewBB.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
  }
  MiniMapComponent.displayName = "MiniMap";
  var MiniMap = (0, import_react2.memo)(MiniMapComponent);
  var scaleSelector = (calculateScale) => (store) => calculateScale ? `${Math.max(1 / store.transform[2], 1)}` : void 0;
  var defaultPositions = {
    [ResizeControlVariant.Line]: "right",
    [ResizeControlVariant.Handle]: "bottom-right"
  };
  function ResizeControl({ nodeId, position, variant = ResizeControlVariant.Handle, className, style: style2 = void 0, children: children2, color: color2, minWidth = 10, minHeight = 10, maxWidth = Number.MAX_VALUE, maxHeight = Number.MAX_VALUE, keepAspectRatio = false, resizeDirection, autoScale = true, shouldResize, onResizeStart, onResize, onResizeEnd }) {
    const contextNodeId = useNodeId();
    const id2 = typeof nodeId === "string" ? nodeId : contextNodeId;
    const store = useStoreApi();
    const resizeControlRef = (0, import_react2.useRef)(null);
    const isHandleControl = variant === ResizeControlVariant.Handle;
    const scale = useStore((0, import_react2.useCallback)(scaleSelector(isHandleControl && autoScale), [isHandleControl, autoScale]), shallow$1);
    const resizer = (0, import_react2.useRef)(null);
    const controlPosition = position ?? defaultPositions[variant];
    (0, import_react2.useEffect)(() => {
      if (!resizeControlRef.current || !id2) {
        return;
      }
      if (!resizer.current) {
        resizer.current = XYResizer({
          domNode: resizeControlRef.current,
          nodeId: id2,
          getStoreItems: () => {
            const { nodeLookup, transform: transform2, snapGrid, snapToGrid, nodeOrigin, domNode } = store.getState();
            return {
              nodeLookup,
              transform: transform2,
              snapGrid,
              snapToGrid,
              nodeOrigin,
              paneDomNode: domNode
            };
          },
          onChange: (change, childChanges) => {
            const { triggerNodeChanges, nodeLookup, parentLookup, nodeOrigin } = store.getState();
            const changes = [];
            const nextPosition = { x: change.x, y: change.y };
            const node = nodeLookup.get(id2);
            if (node && node.expandParent && node.parentId) {
              const origin = node.origin ?? nodeOrigin;
              const width = change.width ?? node.measured.width ?? 0;
              const height = change.height ?? node.measured.height ?? 0;
              const child = {
                id: node.id,
                parentId: node.parentId,
                rect: {
                  width,
                  height,
                  ...evaluateAbsolutePosition({
                    x: change.x ?? node.position.x,
                    y: change.y ?? node.position.y
                  }, { width, height }, node.parentId, nodeLookup, origin)
                }
              };
              const parentExpandChanges = handleExpandParent([child], nodeLookup, parentLookup, nodeOrigin);
              changes.push(...parentExpandChanges);
              nextPosition.x = change.x ? Math.max(origin[0] * width, change.x) : void 0;
              nextPosition.y = change.y ? Math.max(origin[1] * height, change.y) : void 0;
            }
            if (nextPosition.x !== void 0 && nextPosition.y !== void 0) {
              const positionChange = {
                id: id2,
                type: "position",
                position: { ...nextPosition }
              };
              changes.push(positionChange);
            }
            if (change.width !== void 0 && change.height !== void 0) {
              const setAttributes = !resizeDirection ? true : resizeDirection === "horizontal" ? "width" : "height";
              const dimensionChange = {
                id: id2,
                type: "dimensions",
                resizing: true,
                setAttributes,
                dimensions: {
                  width: change.width,
                  height: change.height
                }
              };
              changes.push(dimensionChange);
            }
            for (const childChange of childChanges) {
              const positionChange = {
                ...childChange,
                type: "position"
              };
              changes.push(positionChange);
            }
            triggerNodeChanges(changes);
          },
          onEnd: ({ width, height }) => {
            const dimensionChange = {
              id: id2,
              type: "dimensions",
              resizing: false,
              dimensions: {
                width,
                height
              }
            };
            store.getState().triggerNodeChanges([dimensionChange]);
          }
        });
      }
      resizer.current.update({
        controlPosition,
        boundaries: {
          minWidth,
          minHeight,
          maxWidth,
          maxHeight
        },
        keepAspectRatio,
        resizeDirection,
        onResizeStart,
        onResize,
        onResizeEnd,
        shouldResize
      });
      return () => {
        resizer.current?.destroy();
      };
    }, [
      controlPosition,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      keepAspectRatio,
      onResizeStart,
      onResize,
      onResizeEnd,
      shouldResize
    ]);
    const positionClassNames = controlPosition.split("-");
    return (0, import_jsx_runtime.jsx)("div", { className: cc(["react-flow__resize-control", "nodrag", ...positionClassNames, variant, className]), ref: resizeControlRef, style: {
      ...style2,
      scale,
      ...color2 && { [isHandleControl ? "backgroundColor" : "borderColor"]: color2 }
    }, children: children2 });
  }
  var NodeResizeControl = (0, import_react2.memo)(ResizeControl);

  // src/client/layout.ts
  var dagre = __toESM(require_dagre(), 1);
  function layoutTree(nodes, edges) {
    const positions = /* @__PURE__ */ new Map();
    if (nodes.length === 0) return positions;
    const graph = new dagre.graphlib.Graph();
    graph.setGraph({
      rankdir: "TB",
      ranksep: 64,
      nodesep: 38,
      marginx: 32,
      marginy: 32,
      ranker: "network-simplex",
      acyclicer: "greedy"
    });
    graph.setDefaultEdgeLabel(() => ({}));
    for (const node of nodes) {
      graph.setNode(node.id, { width: node.width, height: node.height });
    }
    for (const edge of edges) {
      if (!graph.hasNode(edge.source) || !graph.hasNode(edge.target)) continue;
      graph.setEdge(edge.source, edge.target);
    }
    dagre.layout(graph);
    for (const node of nodes) {
      const laidOut = graph.node(node.id);
      if (laidOut === void 0) {
        positions.set(node.id, { x: 0, y: 0, width: node.width, height: node.height });
        continue;
      }
      positions.set(node.id, {
        x: laidOut.x - node.width / 2,
        y: laidOut.y - node.height / 2,
        width: node.width,
        height: node.height
      });
    }
    return positions;
  }

  // src/client/Tooltip.tsx
  var import_react3 = __toESM(require_react(), 1);
  var import_react_dom2 = __toESM(require_react_dom(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function GcTooltip({ label, children: children2, block = false }) {
    const anchorRef = (0, import_react3.useRef)(null);
    const timerRef = (0, import_react3.useRef)(null);
    const [tip, setTip] = (0, import_react3.useState)(null);
    const clearTimer = (0, import_react3.useCallback)(() => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }, []);
    const hide = (0, import_react3.useCallback)(() => {
      clearTimer();
      setTip(null);
    }, [clearTimer]);
    const show = (0, import_react3.useCallback)(() => {
      clearTimer();
      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        const anchor = anchorRef.current;
        if (anchor === null) return;
        const rect = anchor.getBoundingClientRect();
        const placement = rect.top > 64 ? "top" : "bottom";
        const half = Math.min(140, Math.max(40, (window.innerWidth - 16) / 2));
        const x = Math.max(half + 8, Math.min(rect.left + rect.width / 2, window.innerWidth - half - 8));
        const y = placement === "top" ? rect.top - 8 : rect.bottom + 8;
        setTip({ x, y, placement });
      }, 90);
    }, [clearTimer]);
    (0, import_react3.useEffect)(() => () => clearTimer(), [clearTimer]);
    (0, import_react3.useEffect)(() => {
      if (tip === null) return;
      const dismiss = () => hide();
      window.addEventListener("scroll", dismiss, true);
      window.addEventListener("resize", dismiss);
      return () => {
        window.removeEventListener("scroll", dismiss, true);
        window.removeEventListener("resize", dismiss);
      };
    }, [tip, hide]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "span",
      {
        ref: anchorRef,
        className: `gc-tip-anchor${block ? " is-block" : ""}`,
        onMouseEnter: show,
        onMouseLeave: hide,
        onFocusCapture: show,
        onBlurCapture: hide,
        onClickCapture: hide,
        children: [
          children2,
          tip !== null && (0, import_react_dom2.createPortal)(
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                className: `gc-tooltip${tip.placement === "bottom" ? " is-bottom" : ""}`,
                style: { left: tip.x, top: tip.y },
                role: "tooltip",
                "aria-hidden": "true",
                children: label
              }
            ),
            document.body
          )
        ]
      }
    );
  }

  // src/client/icons.tsx
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function Svg({ size = 16, ...props }) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props
      }
    );
  }
  function BranchIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "6", cy: "5", r: "2.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "6", cy: "19", r: "2.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "18", cy: "9", r: "2.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6 7.2v9.6" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 11.2c0 3.1-2.4 4.8-6 5.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6 12.2c4.2 0 7.2 0 9.6-1.2" })
    ] });
  }
  function RefreshIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20 11a8 8 0 1 0-2.3 5.7" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20 4v7h-7" })
    ] });
  }
  function FitIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9 4H4v5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15 4h5v5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9 20H4v-5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15 20h5v-5" })
    ] });
  }
  function LayoutIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "8", y: "3", width: "8", height: "5", rx: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "2", y: "16", width: "7", height: "5", rx: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "15", y: "16", width: "7", height: "5", rx: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 8v4" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5.5 16v-2h13v2" })
    ] });
  }
  function ArchiveIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4 8.5h16v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-10Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3 4h18v4.5H3z" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M10 13h4" })
    ] });
  }
  function RestoreIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4 9.5h16v9A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-9Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3 5h18v4.5H3z" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 17v-5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m9.5 14.5 2.5-2.5 2.5 2.5" })
    ] });
  }
  function DownloadIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 3v12" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m7.5 10.5 4.5 4.5 4.5-4.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4 20h16" })
    ] });
  }
  function SaveIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4 4h12l4 4v12H4z" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8 4v5h8V4" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8 20v-6h8v6" })
    ] });
  }
  function OpenIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M14 4h6v6" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m20 4-9 9" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" })
    ] });
  }
  function CopyIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "8", y: "8", width: "11", height: "12", rx: "1.5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v10A1.5 1.5 0 0 0 5.5 17H8" })
    ] });
  }
  function CloseIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m6 6 12 12" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 6 6 18" })
    ] });
  }
  function ChevronIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m9 5 7 7-7 7" }) });
  }
  function WarningIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Svg, { ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 3.8 21 20H3z" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 9v5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 17.2v.1" })
    ] });
  }
  function CheckIcon(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Svg, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m5 12.5 4.5 4.5L19 7" }) });
  }
  function SpinnerIcon({ size = 16, className, ...props }) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Svg, { size, className: ["gc-spin", className].filter(Boolean).join(" "), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 3a9 9 0 1 0 9 9" }) });
  }
  function EmptyTreeIcon({ size = 120, className, ...props }) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 120 120",
        fill: "none",
        className,
        "aria-hidden": "true",
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M60 22v26M60 48c0 12-19 8-19 22v10M60 48c0 12 19 8 19 22v10", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", opacity: "0.45" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "60", cy: "18", r: "8", fill: "currentColor", opacity: "0.9" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "41", cy: "86", r: "7", fill: "none", stroke: "currentColor", strokeWidth: "2.4", opacity: "0.6" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "79", cy: "86", r: "7", fill: "none", stroke: "currentColor", strokeWidth: "2.4", opacity: "0.6" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M35 104h12M73 104h12", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", opacity: "0.3" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M52 40h16", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", opacity: "0.25" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M50 58h20", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", opacity: "0.2" })
        ]
      }
    );
  }

  // src/client/GitChatView.tsx
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var BRANCH_COLORS = [
    "#4d6bfe",
    "#0f9f8f",
    "#d97706",
    "#c026d3",
    "#0284c7",
    "#7c3aed",
    "#dc2626",
    "#15803d"
  ];
  var STATUS_CLASS = {
    completed: "is-completed",
    error: "is-error",
    interrupted: "is-interrupted",
    blocked: "is-blocked",
    running: "is-running",
    unknown: "is-unknown"
  };
  var STATUS_KEY = {
    completed: "status.completed",
    error: "status.error",
    interrupted: "status.interrupted",
    blocked: "status.blocked",
    running: "status.running",
    unknown: "status.unknown"
  };
  var TURN_SIZE = { width: 280, height: 124 };
  var ROOT_SIZE = { width: 280, height: 92 };
  var BRANCH_SIZE = { width: 280, height: 96 };
  var NODE_TYPES = { gitchat: GitChatNodeCard };
  function accentFor(node, rootId) {
    if (node.kind === "root" || node.sessionId === rootId) return "var(--gc-brand)";
    let hash = 2166136261;
    for (let index2 = 0; index2 < node.sessionId.length; index2 += 1) {
      hash ^= node.sessionId.charCodeAt(index2);
      hash = Math.imul(hash, 16777619);
    }
    return BRANCH_COLORS[(hash >>> 0) % BRANCH_COLORS.length];
  }
  function sizeFor(node) {
    if (node.kind === "root") return ROOT_SIZE;
    if (node.kind === "branch") return BRANCH_SIZE;
    return TURN_SIZE;
  }
  function formatShortTime(ms) {
    if (!Number.isFinite(ms)) return "";
    const date = new Date(ms);
    const pad = (value) => String(value).padStart(2, "0");
    return `${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }
  function formatFullTime(ms) {
    if (!Number.isFinite(ms)) return "—";
    try {
      return new Date(ms).toLocaleString();
    } catch {
      return String(ms);
    }
  }
  async function copyText(text) {
    if (navigator.clipboard?.writeText !== void 0) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    if (!ok) throw new Error("copy command was rejected");
  }
  function GitChatNodeCard({ data, selected: selected2 }) {
    const { node, accent, stats, t: t2, onSelect } = data;
    const statusClass = STATUS_CLASS[node.status];
    const label = node.kind === "root" ? t2("view.rootBranch") : node.kind === "branch" ? node.label ?? t2("detail.branch") : "";
    const aria = node.kind === "turn" ? t2("aria.node", { turn: node.turn ?? 0, text: node.user || t2("detail.noUser") }) : `${label} ${node.sessionTitle}`;
    const className = [
      "gc-node",
      `gc-node-kind-${node.kind}`,
      selected2 ? "is-selected" : "",
      node.current ? "is-current" : "",
      node.archived ? "is-archived" : "",
      node.kind === "branch" && node.status === "error" ? "is-error" : ""
    ].filter(Boolean).join(" ");
    const handleKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect(node.id);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className,
        style: { "--gc-accent": accent },
        "data-node-id": node.id,
        role: "button",
        tabIndex: 0,
        "aria-label": aria,
        onClick: (event) => {
          event.stopPropagation();
          onSelect(node.id);
        },
        onKeyDown: handleKeyDown,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Handle, { type: "target", position: Position.Top, isConnectable: false, className: "gc-handle" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-node-top", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-node-turn", children: node.kind === "root" ? "ROOT" : node.kind === "branch" ? "⑂" : `T${node.turn ?? "?"}` }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-node-title", title: node.sessionTitle, children: node.sessionTitle }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `gc-node-dot ${statusClass}`, title: t2(STATUS_KEY[node.status]) })
          ] }),
          node.kind === "root" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-node-root-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "gc-node-root-label", children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-node-root-meta", children: [
              t2("view.turnCount", { count: stats.turns }),
              " · ",
              t2("view.branchCount", { count: stats.branches })
            ] })
          ] }) : node.kind === "branch" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-node-branch-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "gc-node-branch-label", children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "gc-node-branch-hint", children: node.status === "error" ? node.assistant : node.forkSeq === null ? t2("detail.branch") : `#${node.forkSeq}` })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "gc-node-user", children: node.user || "—" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `gc-node-assistant ${node.assistant ? "" : "is-empty"}`, children: node.assistant || (node.status === "running" ? t2("status.running") : "—") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-node-foot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: formatShortTime(node.time) }),
            node.childSessionIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "gc-node-branches", children: [
              "⑂ ",
              node.childSessionIds.length
            ] }),
            node.archived && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-node-badge gc-node-badge-archived", children: t2("detail.archived") }),
            node.current && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-node-badge gc-node-badge-current", children: t2("detail.current") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Handle, { type: "source", position: Position.Bottom, isConnectable: false, className: "gc-handle" })
        ]
      }
    );
  }
  function GitChatCanvas({ tree, t: t2, selectedId, layoutNonce, onSelect }) {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const { fitView } = useReactFlow();
    const fitted = (0, import_react4.useRef)(false);
    const appliedNonce = (0, import_react4.useRef)(layoutNonce);
    const signatureRef = (0, import_react4.useRef)("");
    const flowEdges = (0, import_react4.useMemo)(() => {
      const byId = new Map(tree.nodes.map((node) => [node.id, node]));
      return tree.edges.map((edge) => {
        const target = byId.get(edge.target);
        const accent = target === void 0 ? "var(--gc-border-strong)" : accentFor(target, tree.rootId);
        return {
          id: edge.id,
          source: edge.source,
          target: edge.target,
          type: "smoothstep",
          animated: !edge.archived && target?.status === "running",
          className: edge.archived ? "is-archived" : void 0,
          style: {
            stroke: edge.archived ? "var(--gc-border-strong)" : accent,
            strokeWidth: edge.kind === "fork" ? 2 : 1.7,
            ...edge.archived ? { strokeDasharray: "5 4" } : {},
            opacity: edge.archived ? 0.65 : 0.9
          },
          selectable: false,
          focusable: false
        };
      });
    }, [tree]);
    (0, import_react4.useEffect)(() => {
      if (tree.nodes.length === 0) {
        setNodes([]);
        setEdges([]);
        return;
      }
      const sizes = new Map(tree.nodes.map((node) => [node.id, sizeFor(node)]));
      const positions = layoutTree(
        tree.nodes.map((node) => ({ id: node.id, ...sizeFor(node) })),
        tree.edges.map((edge) => ({ source: edge.source, target: edge.target }))
      );
      const signature = `${tree.nodes.map((node) => node.id).join("|")}::${tree.edges.map((edge) => edge.id).join("|")}`;
      const structuralChange = signatureRef.current !== signature;
      signatureRef.current = signature;
      const nonceChanged = appliedNonce.current !== layoutNonce;
      appliedNonce.current = layoutNonce;
      const relayout = structuralChange || nonceChanged;
      setNodes((current) => {
        const previous = new Map(current.map((node) => [node.id, node]));
        return tree.nodes.map((node) => {
          const size = sizes.get(node.id) ?? TURN_SIZE;
          const laidOut = positions.get(node.id);
          const existing = previous.get(node.id);
          const position = !relayout && existing !== void 0 ? existing.position : { x: laidOut?.x ?? 0, y: laidOut?.y ?? 0 };
          return {
            id: node.id,
            type: "gitchat",
            position,
            data: {
              node,
              accent: accentFor(node, tree.rootId),
              stats: tree.stats,
              t: t2,
              onSelect: (id2) => onSelect(id2)
            },
            selected: node.id === selectedId,
            style: { width: size.width },
            draggable: true,
            connectable: false,
            deletable: false
          };
        });
      });
      setEdges(flowEdges);
    }, [tree, t2, selectedId, layoutNonce, flowEdges, setNodes, setEdges, onSelect]);
    (0, import_react4.useEffect)(() => {
      if (fitted.current || tree.nodes.length === 0) return;
      fitted.current = true;
      const timer2 = window.setTimeout(() => {
        void fitView({ padding: 0.18, minZoom: 0.5, duration: 320 });
      }, 90);
      return () => window.clearTimeout(timer2);
    }, [tree, fitView]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      index,
      {
        nodes,
        edges,
        nodeTypes: NODE_TYPES,
        onNodesChange,
        onEdgesChange,
        onNodeClick: (_event, node) => onSelect(node.id),
        onPaneClick: () => onSelect(null),
        nodesConnectable: false,
        elementsSelectable: true,
        nodesDraggable: true,
        panOnScroll: true,
        zoomOnScroll: true,
        zoomOnPinch: true,
        minZoom: 0.12,
        maxZoom: 1.8,
        fitView: false,
        attributionPosition: "top-right",
        className: "gc-flow",
        "aria-label": t2("aria.nodeCount", { count: tree.nodes.length }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Background, { variant: BackgroundVariant.Dots, gap: 18, size: 1, color: "var(--gc-grid)" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Controls, { showInteractive: false }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            MiniMap,
            {
              pannable: true,
              zoomable: true,
              nodeBorderRadius: 4,
              maskColor: "color-mix(in srgb, var(--gc-bg) 62%, transparent)",
              nodeColor: (node) => {
                const data = node.data;
                return data.node.archived ? "var(--gc-border-strong)" : data.accent;
              }
            }
          )
        ]
      }
    );
  }
  function GitChatDetail({ node, tree, t: t2, busy, onClose, onFork, onOpen, onArchive, onRestore, onCopy }) {
    const summary = tree.sessions.find(
      (session) => session.sessionId === node.sessionId
    );
    const model = summary?.model === void 0 ? void 0 : summary.provider === void 0 ? summary.model : `${summary.provider}/${summary.model}`;
    const title = node.kind === "root" ? node.sessionTitle : node.kind === "branch" ? node.label ?? t2("detail.branch") : node.sessionTitle;
    const badge = node.kind === "root" ? t2("detail.root") : node.kind === "branch" ? t2("detail.branch") : t2("detail.turn", { turn: node.turn ?? 0 });
    const forkDisabled = node.kind !== "turn" || node.forkSeq === null || node.archived || node.status === "running" || busy !== null;
    const isRoot = node.sessionId === tree.rootId;
    const isBusy = busy !== null;
    const forkHint = node.archived ? t2("detail.forkArchived") : node.status === "running" ? t2("detail.forkRunning") : forkDisabled && !isBusy ? t2("detail.forkDisabled") : t2("detail.forkHint");
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-detail-content", "aria-label": title, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-detail-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-detail-title-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-turn-badge", children: badge }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { title, children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("detail.action.close"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              className: "gc-icon-btn gc-detail-close",
              onClick: onClose,
              "aria-label": t2("aria.closeDetail"),
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CloseIcon, {})
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-detail-chips", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: `gc-status ${STATUS_CLASS[node.status]}`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", {}),
            t2(STATUS_KEY[node.status])
          ] }),
          node.current && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-pill is-accent", children: t2("detail.current") }),
          node.archived && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-pill is-archived", children: t2("detail.archived") }),
          node.childSessionIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-pill", children: t2("detail.childBranches", { count: node.childSessionIds.length }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-detail-scroll", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-meta-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-key", children: t2("detail.meta.session") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-value", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("code", { children: node.sessionId }) }),
          model !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-key", children: t2("detail.meta.model") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-value", children: model })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-key", children: t2("detail.meta.time") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-value", children: formatFullTime(node.time) }),
          node.kind === "turn" && node.forkSeq !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-key", children: t2("detail.meta.forkSeq") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "gc-meta-value", children: [
              "#",
              node.forkSeq
            ] })
          ] }),
          node.toolCalls > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-key", children: t2("detail.meta.tools") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-value", children: node.toolCalls })
          ] }),
          summary?.cwd !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-key", children: t2("detail.meta.cwd") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-meta-value", children: summary.cwd })
          ] })
        ] }),
        node.kind === "turn" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "gc-section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "gc-section-head", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t2("detail.user") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `gc-message gc-message-user ${node.user ? "" : "gc-message-empty"}`, children: node.user || t2("detail.noUser") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "gc-section", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-section-head", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t2("detail.assistant") }),
              node.statusDetail !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-section-time", children: node.statusDetail })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `gc-message ${node.assistant ? "" : "gc-message-empty"}`, children: node.assistant || t2("detail.noAssistant") })
          ] }),
          node.textTruncated === true && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-hint", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WarningIcon, { size: 13 }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t2("detail.truncated") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-hint", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BranchIcon, { size: 13 }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: forkHint })
          ] })
        ] }),
        node.kind === "root" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-hint", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BranchIcon, { size: 13 }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t2("view.rootBranch") })
        ] }),
        node.kind === "branch" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "gc-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "gc-section-head", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t2("detail.branch") }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `gc-message ${node.status === "error" ? "" : "gc-message-empty"}`, children: node.assistant || t2("detail.forkHint") })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-detail-actions", children: [
        node.kind === "turn" && !node.archived && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: forkHint, block: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "button",
          {
            type: "button",
            className: "gc-btn gc-btn-primary gc-action-main",
            disabled: forkDisabled,
            onClick: () => onFork(node),
            children: [
              busy === "fork" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SpinnerIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BranchIcon, {}),
              busy === "fork" ? t2("detail.action.forking") : t2("detail.action.fork")
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("detail.tip.open"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", className: "gc-btn", onClick: () => onOpen(node), disabled: isBusy, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(OpenIcon, {}),
          t2("detail.action.open")
        ] }) }),
        !isRoot && !node.archived && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("detail.tip.archive"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", className: "gc-btn gc-btn-danger", onClick: () => onArchive(node), disabled: isBusy, children: [
          busy === "archive" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SpinnerIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ArchiveIcon, {}),
          busy === "archive" ? t2("detail.action.archiving") : t2("detail.action.archive")
        ] }) }),
        !isRoot && node.archived && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("detail.tip.restore"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", className: "gc-btn", onClick: () => onRestore(node), disabled: isBusy, children: [
          busy === "restore" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SpinnerIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(RestoreIcon, {}),
          t2("detail.action.restore")
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("detail.tip.copy"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            type: "button",
            className: "gc-btn gc-btn-ghost gc-action-icon",
            onClick: () => onCopy(node),
            "aria-label": t2("detail.action.copy"),
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CopyIcon, {})
          }
        ) })
      ] })
    ] });
  }
  function GitChatConfirm({ confirm, tree, t: t2, busy, onCancel, onConfirm }) {
    const summary = tree.sessions.find((session) => session.sessionId === confirm.node.sessionId);
    const count = 1 + (summary?.descendantCount ?? 0);
    const isArchive = confirm.kind === "archive";
    const title = isArchive ? t2("confirm.archive.title") : t2("confirm.restore.title");
    const body = isArchive ? t2("confirm.archive.body", { title: confirm.node.label ?? confirm.node.sessionTitle, count }) : t2("confirm.restore.body", { title: confirm.node.label ?? confirm.node.sessionTitle });
    const confirmLabel = isArchive ? t2("confirm.archive.confirm") : t2("confirm.restore.confirm");
    return (0, import_react_dom3.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "div",
        {
          className: "gc-modal-backdrop",
          role: "presentation",
          onMouseDown: (event) => {
            if (event.target === event.currentTarget && busy === null) onCancel();
          },
          onKeyDown: (event) => {
            if (event.key === "Escape" && busy === null) onCancel();
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "gc-confirm-title", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h3", { id: "gc-confirm-title", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WarningIcon, {}),
              title
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: body }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-modal-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: "gc-btn", onClick: onCancel, disabled: busy !== null, autoFocus: true, children: isArchive ? t2("confirm.archive.cancel") : t2("confirm.archive.cancel") }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "button",
                {
                  type: "button",
                  className: `gc-btn ${isArchive ? "gc-btn-danger" : "gc-btn-primary"}`,
                  onClick: onConfirm,
                  disabled: busy !== null,
                  children: [
                    busy === "archive" || busy === "restore" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SpinnerIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CheckIcon, {}),
                    confirmLabel
                  ]
                }
              )
            ] })
          ] })
        }
      ),
      document.body
    );
  }
  function GitChatEmpty({ t: t2 }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EmptyTreeIcon, { size: 118 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { children: t2("view.empty.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: t2("view.empty.body") })
    ] });
  }
  function GitChatLoading({ t: t2 }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-state", role: "status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SpinnerIcon, { size: 24 }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: t2("view.loading") })
    ] });
  }
  function GitChatErrorState({
    t: t2,
    message,
    onRetry
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-state", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-state-icon", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WarningIcon, { size: 20 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { children: t2("view.error.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: t2("error.load", { error: message }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "gc-state-actions", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("view.tip.retry"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", className: "gc-btn gc-btn-primary", onClick: onRetry, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(RefreshIcon, {}),
        t2("view.error.retry")
      ] }) }) })
    ] });
  }
  function GitChatSurface({ sessionId, controller: controller2, t: t2 }) {
    const [tree, setTree] = (0, import_react4.useState)(null);
    const [loading, setLoading] = (0, import_react4.useState)(true);
    const [refreshing, setRefreshing] = (0, import_react4.useState)(false);
    const [error, setError] = (0, import_react4.useState)(null);
    const [includeArchived, setIncludeArchived] = (0, import_react4.useState)(false);
    const [selectedId, setSelectedId] = (0, import_react4.useState)(null);
    const [busy, setBusy] = (0, import_react4.useState)(null);
    const [toast, setToast] = (0, import_react4.useState)(null);
    const [confirm, setConfirm] = (0, import_react4.useState)(null);
    const [layoutNonce, setLayoutNonce] = (0, import_react4.useState)(0);
    const [reloadNonce, setReloadNonce] = (0, import_react4.useState)(0);
    const { fitView } = useReactFlow();
    const abortRef = (0, import_react4.useRef)(null);
    const aliveRef = (0, import_react4.useRef)(true);
    const toastTimerRef = (0, import_react4.useRef)(null);
    const showToast = (0, import_react4.useCallback)((kind, text) => {
      if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current);
      setToast({ kind, text });
      toastTimerRef.current = window.setTimeout(() => {
        toastTimerRef.current = null;
        setToast(null);
      }, 5200);
    }, []);
    const load = (0, import_react4.useCallback)(
      async (archived, silent) => {
        abortRef.current?.abort();
        const controllerState = new AbortController();
        abortRef.current = controllerState;
        if (silent) setRefreshing(true);
        else setLoading(true);
        setError(null);
        try {
          const next = await controller2.loadTree(sessionId, archived, controllerState.signal);
          if (controllerState.signal.aborted) return false;
          setTree(next);
          if (next.includeArchived && !archived) setIncludeArchived(true);
          setSelectedId((current) => {
            if (current !== null && next.nodes.some((node) => node.id === current)) return current;
            const tip = [...next.nodes].reverse().find((node) => node.current && node.kind === "turn") ?? next.nodes.find((node) => node.current) ?? next.nodes[0];
            return tip?.id ?? null;
          });
          return true;
        } catch (reason) {
          if (controllerState.signal.aborted) return false;
          setError(reason instanceof Error ? reason.message : String(reason));
          return false;
        } finally {
          if (!controllerState.signal.aborted) {
            setLoading(false);
            setRefreshing(false);
          }
        }
      },
      [controller2, sessionId]
    );
    (0, import_react4.useEffect)(() => {
      aliveRef.current = true;
      return () => {
        aliveRef.current = false;
        abortRef.current?.abort();
        if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current);
      };
    }, []);
    (0, import_react4.useEffect)(() => {
      void load(includeArchived, false);
    }, [load, includeArchived, reloadNonce]);
    (0, import_react4.useEffect)(() => {
      if (tree === null) return;
      const hasRunning = tree.nodes.some((node) => node.status === "running");
      if (!hasRunning) return;
      const timer2 = window.setInterval(() => {
        if (document.visibilityState === "visible") void load(includeArchived, true);
      }, 7e3);
      return () => window.clearInterval(timer2);
    }, [tree, includeArchived, load]);
    const selected2 = (0, import_react4.useMemo)(
      () => tree === null || selectedId === null ? null : tree.nodes.find((node) => node.id === selectedId) ?? null,
      [tree, selectedId]
    );
    const rootSummary = tree?.sessions.find((session) => session.sessionId === tree.rootId);
    const rootTitle = rootSummary?.title ?? tree?.rootId ?? "";
    const currentArchived = tree?.sessions.some((session) => session.sessionId === tree.currentSessionId && session.archived) ?? false;
    const showEmpty = tree !== null && tree.nodes.length <= 1;
    const fit = (0, import_react4.useCallback)(() => {
      requestAnimationFrame(() => {
        void fitView({ padding: 0.18, minZoom: 0.5, duration: 280 });
      });
    }, [fitView]);
    const refresh = (0, import_react4.useCallback)(async () => {
      const ok = await load(includeArchived, true);
      if (ok) showToast("ok", t2("toast.refreshed"));
    }, [includeArchived, load, showToast, t2]);
    const relayout = (0, import_react4.useCallback)(() => {
      setLayoutNonce((value) => value + 1);
      window.setTimeout(fit, 120);
      showToast("ok", t2("toast.relayouted"));
    }, [fit, showToast, t2]);
    const openSession = (0, import_react4.useCallback)(
      (node) => {
        controller2.openSession(node.sessionId);
      },
      [controller2]
    );
    const forkNode = (0, import_react4.useCallback)(
      async (node) => {
        if (node.forkSeq === null || node.kind !== "turn" || busy !== null) return;
        setBusy("fork");
        try {
          await controller2.forkAt(node.sessionId, node.forkSeq);
          if (aliveRef.current) showToast("ok", t2("toast.forked"));
        } catch (reason) {
          if (aliveRef.current) {
            showToast("error", t2("error.generic", { error: reason instanceof Error ? reason.message : String(reason) }));
          }
        } finally {
          if (aliveRef.current) setBusy(null);
        }
      },
      [busy, controller2, showToast, t2]
    );
    const archiveNode = (0, import_react4.useCallback)(
      async (node) => {
        if (busy !== null) return;
        setConfirm(null);
        setBusy("archive");
        try {
          const result = await controller2.archiveBranch(node.sessionId, true);
          if (!aliveRef.current) return;
          showToast("ok", t2("toast.archived", { count: result.count }));
          setIncludeArchived(true);
          await load(true, true);
        } catch (reason) {
          if (aliveRef.current) {
            showToast("error", t2("error.generic", { error: reason instanceof Error ? reason.message : String(reason) }));
          }
        } finally {
          if (aliveRef.current) setBusy(null);
        }
      },
      [busy, controller2, load, showToast, t2]
    );
    const restoreNode = (0, import_react4.useCallback)(
      async (node) => {
        if (busy !== null) return;
        setConfirm(null);
        setBusy("restore");
        try {
          await controller2.unarchiveBranch(node.sessionId);
          if (!aliveRef.current) return;
          showToast("ok", t2("toast.restored"));
          await load(includeArchived, true);
        } catch (reason) {
          if (aliveRef.current) {
            showToast("error", t2("error.generic", { error: reason instanceof Error ? reason.message : String(reason) }));
          }
        } finally {
          if (aliveRef.current) setBusy(null);
        }
      },
      [busy, controller2, includeArchived, load, showToast, t2]
    );
    const copyNode = (0, import_react4.useCallback)(
      async (node) => {
        try {
          await copyText(JSON.stringify(node, null, 2));
          showToast("ok", t2("toast.copied"));
        } catch {
          showToast("error", t2("toast.copyFailed"));
        }
      },
      [showToast, t2]
    );
    const save = (0, import_react4.useCallback)(async () => {
      if (tree === null || busy !== null) return;
      setBusy("save");
      try {
        const result = await controller2.saveTree(tree);
        if (aliveRef.current) showToast("ok", t2("toast.saved", { path: result.path }));
      } catch (reason) {
        if (aliveRef.current) {
          showToast("error", t2("error.generic", { error: reason instanceof Error ? reason.message : String(reason) }));
        }
      } finally {
        if (aliveRef.current) setBusy(null);
      }
    }, [busy, controller2, showToast, t2, tree]);
    const exportJson = (0, import_react4.useCallback)(async () => {
      if (tree === null || busy !== null) return;
      setBusy("export");
      try {
        await controller2.downloadTree(tree);
        if (aliveRef.current) showToast("ok", t2("toast.exported"));
      } catch (reason) {
        if (aliveRef.current) {
          showToast("error", t2("error.generic", { error: reason instanceof Error ? reason.message : String(reason) }));
        }
      } finally {
        if (aliveRef.current) setBusy(null);
      }
    }, [busy, controller2, showToast, t2, tree]);
    const toggleArchived = (0, import_react4.useCallback)(() => {
      setIncludeArchived((value) => !value);
    }, []);
    const confirmAction = (0, import_react4.useCallback)(() => {
      if (confirm === null) return;
      if (confirm.kind === "archive") void archiveNode(confirm.node);
      else void restoreNode(confirm.node);
    }, [archiveNode, confirm, restoreNode]);
    const retry = (0, import_react4.useCallback)(() => {
      setReloadNonce((value) => value + 1);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "section",
      {
        className: "gc-root",
        "aria-label": t2("aria.nodeCount", { count: tree?.nodes.length ?? 0 }),
        "aria-busy": loading || refreshing || busy !== null,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { className: "gc-toolbar", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-brand", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-brand-icon", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BranchIcon, { size: 18 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-brand-text", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-brand-title", children: [
                  t2("view.title"),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-brand-tag", children: "TREE" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "gc-brand-subtitle", title: rootTitle, children: tree === null ? t2("view.loading") : `${rootTitle} · ${t2("view.subtitle", {
                  branches: tree.stats.branches,
                  turns: tree.stats.turns
                })}` })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-actions", children: [
              tree !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-stats", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "gc-stat", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BranchIcon, { size: 11 }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("strong", { children: tree.stats.branches }),
                  " ",
                  t2("view.branchesUnit")
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "gc-stat", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("strong", { children: tree.stats.turns }),
                  " ",
                  t2("view.turnsUnit")
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("view.tip.refresh"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "button",
                  className: "gc-icon-btn",
                  onClick: () => void refresh(),
                  disabled: loading || busy !== null,
                  "aria-label": t2("view.refresh"),
                  children: refreshing ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SpinnerIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(RefreshIcon, {})
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("view.tip.fit"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "button",
                  className: "gc-icon-btn",
                  onClick: fit,
                  disabled: tree === null,
                  "aria-label": t2("view.fit"),
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FitIcon, {})
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("view.tip.relayout"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "button",
                  className: "gc-icon-btn",
                  onClick: relayout,
                  disabled: tree === null,
                  "aria-label": t2("view.relayout"),
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LayoutIcon, {})
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("view.tip.archived"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "button",
                {
                  type: "button",
                  className: "gc-chip-btn",
                  "aria-pressed": includeArchived,
                  onClick: toggleArchived,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ArchiveIcon, { size: 14 }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-chip-text", children: includeArchived ? t2("view.hideArchived") : t2("view.showArchived") }),
                    (tree?.stats.archivedBranches ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-count", children: tree?.stats.archivedBranches })
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-divider" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("view.tip.export"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "button",
                {
                  type: "button",
                  className: "gc-btn",
                  onClick: () => void exportJson(),
                  disabled: tree === null || busy !== null,
                  children: [
                    busy === "export" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SpinnerIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DownloadIcon, {}),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-btn-label", children: busy === "export" ? t2("view.exporting") : t2("view.export") })
                  ]
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("view.tip.save"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "button",
                {
                  type: "button",
                  className: "gc-btn gc-btn-primary",
                  onClick: () => void save(),
                  disabled: tree === null || busy !== null,
                  children: [
                    busy === "save" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SpinnerIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SaveIcon, {}),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "gc-btn-label", children: busy === "save" ? t2("view.saving") : t2("view.save") })
                  ]
                }
              ) })
            ] })
          ] }),
          tree?.truncated === true && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-banner", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WarningIcon, { size: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t2("view.truncated") })
          ] }),
          currentArchived && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-banner", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ArchiveIcon, { size: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t2("view.archivedNotice") })
          ] }),
          error !== null && tree !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-banner", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WarningIcon, { size: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t2("error.load", { error }) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GcTooltip, { label: t2("view.tip.retry"), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: "gc-btn gc-btn-ghost", onClick: retry, children: t2("view.error.retry") }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-canvas", children: [
              tree !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                GitChatCanvas,
                {
                  tree,
                  t: t2,
                  selectedId,
                  layoutNonce,
                  onSelect: setSelectedId
                },
                `${tree.rootId}:${tree.currentSessionId}`
              ),
              loading && tree !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "gc-loading-bar" }),
              loading && tree === null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GitChatLoading, { t: t2 }),
              !loading && tree === null && error !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GitChatErrorState, { t: t2, message: error, onRetry: retry }),
              showEmpty && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GitChatEmpty, { t: t2 })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("aside", { className: `gc-detail ${selected2 === null ? "is-empty" : "is-open"}`, children: selected2 === null || tree === null ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "gc-detail-empty", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChevronIcon, { size: 30 }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { children: t2("detail.empty.title") }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: t2("detail.empty.body") })
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              GitChatDetail,
              {
                node: selected2,
                tree,
                t: t2,
                busy,
                onClose: () => setSelectedId(null),
                onFork: (node) => void forkNode(node),
                onOpen: openSession,
                onArchive: (node) => setConfirm({ kind: "archive", node }),
                onRestore: (node) => setConfirm({ kind: "restore", node }),
                onCopy: (node) => void copyNode(node)
              }
            ) })
          ] }),
          toast !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: `gc-toast ${toast.kind === "error" ? "is-error" : ""}`, role: "status", "aria-live": "polite", children: [
            toast.kind === "error" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WarningIcon, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CheckIcon, { size: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: toast.text })
          ] }),
          confirm !== null && tree !== null && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            GitChatConfirm,
            {
              confirm,
              tree,
              t: t2,
              busy,
              onCancel: () => setConfirm(null),
              onConfirm: confirmAction
            }
          )
        ]
      }
    );
  }
  function GitChatView(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ReactFlowProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GitChatSurface, { ...props }) });
  }

  // src/client/i18n.ts
  var zh = {
    "view.tab": "GitChat",
    "view.title": "GitChat 对话树",
    "view.subtitle": "{branches} 个分支 · {turns} 轮对话",
    "view.loading": "正在读取对话树…",
    "view.refresh": "刷新",
    "view.refreshing": "刷新中…",
    "view.fit": "适应画布",
    "view.relayout": "重新布局",
    "view.showArchived": "显示已归档",
    "view.hideArchived": "隐藏已归档",
    "view.export": "导出 JSON",
    "view.exporting": "导出中…",
    "view.save": "保存到磁盘",
    "view.saving": "保存中…",
    "view.tip.refresh": "重新读取会话树",
    "view.tip.fit": "缩放到适合当前画布",
    "view.tip.relayout": "重新计算节点布局（会丢弃手动拖拽位置）",
    "view.tip.archived": "显示或隐藏已归档分支",
    "view.tip.export": "下载包含归档分支的完整 JSON 快照",
    "view.tip.save": "保存完整树快照到 DSH plugin-data 目录",
    "view.tip.retry": "重新读取对话树",
    "view.savedAt": "更新于 {time}",
    "view.empty.title": "还没有可展示的对话",
    "view.empty.body": "在 Chat 中发送第一条消息，或从任意节点创建分支。",
    "view.error.title": "读取对话树失败",
    "view.error.retry": "重试",
    "view.truncated": "会话较多，只展示了一部分节点。",
    "view.archivedNotice": "当前会话已归档，已自动显示归档分支。",
    "view.archivedBranch": "已归档",
    "view.currentBranch": "当前分支",
    "view.rootBranch": "根会话",
    "view.branchCount": "{count} 个分支",
    "view.turnCount": "{count} 轮",
    "view.branchesUnit": "个分支",
    "view.turnsUnit": "轮",
    "view.legend.current": "当前",
    "view.legend.archived": "已归档",
    "view.legend.branch": "分支",
    "detail.empty.title": "选择一个节点",
    "detail.empty.body": "点击图中的节点查看消息、分叉或归档分支。",
    "detail.turn": "第 {turn} 轮",
    "detail.root": "根会话",
    "detail.branch": "空分支",
    "detail.user": "用户",
    "detail.assistant": "助手",
    "detail.noUser": "（没有可显示的用户消息）",
    "detail.noAssistant": "（这一轮还没有助手回复）",
    "detail.meta.session": "会话",
    "detail.meta.model": "模型",
    "detail.meta.status": "状态",
    "detail.meta.time": "时间",
    "detail.meta.forkSeq": "分叉点",
    "detail.meta.tools": "工具调用",
    "detail.meta.cwd": "工作目录",
    "detail.action.fork": "从此处分叉",
    "detail.action.forking": "正在分叉…",
    "detail.action.open": "打开会话",
    "detail.action.archive": "归档分支",
    "detail.action.archiving": "正在归档…",
    "detail.action.restore": "恢复分支",
    "detail.action.copy": "复制节点 JSON",
    "detail.action.close": "关闭详情",
    "detail.tip.open": "切换到该节点所属的会话",
    "detail.tip.archive": "归档该分支及其所有子分支；不会删除日志，可恢复",
    "detail.tip.restore": "把该分支恢复到会话树和侧栏",
    "detail.tip.copy": "复制当前节点的 JSON 快照",
    "detail.tip.fork": "复制从根到这一轮的全部上下文，并打开新的子会话",
    "detail.forkHint": "分叉会把从根到这一轮的全部上下文复制到新会话。",
    "detail.forkDisabled": "这一轮尚未结束，或该节点不支持分叉。",
    "detail.forkArchived": "该分支已归档，恢复后才能分叉。",
    "detail.forkRunning": "这一轮仍在运行，结束后才能分叉。",
    "detail.childBranches": "{count} 个直接分支",
    "detail.truncated": "内容过长，已截断显示。",
    "detail.archived": "已归档",
    "detail.current": "当前会话",
    "detail.sessionId": "会话 ID",
    "status.completed": "完成",
    "status.error": "失败",
    "status.interrupted": "已中断",
    "status.blocked": "已阻止",
    "status.running": "运行中",
    "status.unknown": "未开始",
    "confirm.archive.title": "归档分支？",
    "confirm.archive.body": "将归档「{title}」及其 {count} 个会话。归档不会删除磁盘上的会话日志，之后可以恢复。若分支正在运行，会先停止当前工作。",
    "confirm.archive.confirm": "归档分支",
    "confirm.archive.cancel": "取消",
    "confirm.restore.title": "恢复分支？",
    "confirm.restore.body": "将「{title}」恢复到对话树和会话列表。",
    "confirm.restore.confirm": "恢复",
    "toast.forked": "已创建分支并打开新会话",
    "toast.archived": "已归档 {count} 个会话",
    "toast.restored": "分支已恢复",
    "toast.copied": "节点 JSON 已复制",
    "toast.copyFailed": "复制失败，请手动选择文本",
    "toast.saved": "已保存到 {path}",
    "toast.exported": "JSON 已开始下载",
    "toast.refreshed": "对话树已刷新",
    "toast.relayouted": "已重新布局",
    "error.generic": "操作失败：{error}",
    "error.load": "无法读取对话树：{error}",
    "error.sessionNotFound": "找不到当前会话",
    "aria.node": "第 {turn} 轮：{text}",
    "aria.closeDetail": "关闭详情",
    "aria.nodeCount": "对话树，共 {count} 个节点"
  };

  // preview/mock.ts
  var T0 = Date.now() - 3 * 60 * 60 * 1e3;
  var SESSIONS = [
    {
      id: "session-root",
      title: "智能小车 · 电机抖动排查",
      model: "deepseek-flash",
      provider: "deepseek-account",
      turns: [
        {
          user: "小车低速时电机抖动很明显，帮我排查一下。",
          assistant: "先分成三类：电源/驱动、PWM 时序、速度环。建议先看 PWM 频率、死区时间和电流采样是否对齐，再决定改算法还是改硬件。"
        },
        {
          user: "PWM 现在 10kHz，死区 1us，电流采样 5ms 一次。",
          assistant: "10kHz 在低速时容易听到啸叫；把死区加到 1.5us，并让电流采样和 PWM 中心对齐，先排除采样毛刺。",
          toolCalls: 1
        },
        {
          user: "改成 20kHz 后抖动小了一点，但低速还是有顿挫。",
          assistant: "说明高频开关不是根因。下一步把速度环周期从 10ms 缩到 5ms，并检查编码器四倍频后的计数是否稳定。"
        },
        {
          user: "编码器是 500 线，四倍频后 2000 计数/圈。",
          assistant: "2000 计数在 5ms 周期下低速分辨率偏粗。可以试 M/T 法测速，或者把速度环改成 2ms，并给编码器 A/B 相加 RC 滤波。"
        }
      ]
    },
    {
      id: "session-hw",
      title: "硬件排查 · 死区与驱动",
      parent: "session-root",
      forkAtTurn: 2,
      model: "deepseek-flash",
      provider: "deepseek-account",
      turns: [
        {
          user: "先别改算法，我想量一下驱动波形。",
          assistant: "可以。先把电机悬空，用双通道看 A/B 相和 PWM 互补输出；重点看死区实际宽度、栅极电阻振铃，以及母线电压跌落。"
        },
        {
          user: "示波器上看死区只有 0.6us，和代码配置不一致。",
          assistant: "更像栅极电阻/米勒电容把实际死区吃掉了。先换 10Ω 栅极电阻，再加 1.5us 软件死区，然后复测低速顿挫。",
          toolCalls: 2
        }
      ]
    },
    {
      id: "session-encoder",
      title: "换编码器方案",
      parent: "session-root",
      forkAtTurn: 1,
      model: "deepseek-flash",
      provider: "deepseek-account",
      turns: [
        {
          user: "如果直接换磁编码器，值不值得？",
          assistant: "如果机械安装允许，磁编码器能显著改善低速分辨率。优先选 SPI/ABZ 输出、12bit 以上的型号，注意安装偏心误差。"
        },
        {
          user: "AS5600 的 I2C 读取延迟会不会影响速度环？",
          assistant: "会。I2C 400kHz 读一次约 0.2ms，建议用硬件定时器触发，并把读取放在速度环周期起点；预算紧可以只读角度寄存器。"
        }
      ]
    },
    {
      id: "session-encoder-b",
      title: "编码器 · 先改滤波",
      parent: "session-encoder",
      forkAtTurn: 1,
      model: "deepseek-flash",
      provider: "deepseek-account",
      turns: [
        {
          user: "先只改滤波电容，不换编码器。",
          assistant: "可以先在 A/B 相各加 1nF 到地，再把采样窗口移到 PWM 中心。若计数仍跳变，再考虑换磁编码器。",
          status: "error",
          statusDetail: "预览示例：驱动过流保护触发，分支在此中断"
        }
      ]
    },
    {
      id: "session-pwm",
      title: "提高 PWM 频率（已归档）",
      parent: "session-root",
      forkAtTurn: 3,
      archived: true,
      model: "deepseek-flash",
      provider: "deepseek-account",
      turns: [
        {
          user: "把 PWM 提到 40kHz 试试。",
          assistant: "40kHz 对 MOS 驱动和死区要求更高，先把栅极电阻降到 4.7Ω，并确认自举电容足够。这个分支先归档，等硬件改完再继续。"
        }
      ]
    },
    {
      id: "session-blank",
      title: "下一个实验",
      parent: "session-root",
      forkAtTurn: 4,
      model: "deepseek-flash",
      provider: "deepseek-account",
      turns: []
    }
  ];
  function clone(value) {
    return structuredClone(value);
  }
  function buildBaseTree() {
    const nodes = [];
    const edges = [];
    const summaries = [];
    const turnNodeByKey = /* @__PURE__ */ new Map();
    let seq = 0;
    const rootId = "session-root";
    const rootNode = {
      id: `root:${rootId}`,
      kind: "root",
      parentId: null,
      sessionId: rootId,
      sessionTitle: SESSIONS[0]?.title ?? "根会话",
      turn: null,
      user: "",
      assistant: "",
      status: "completed",
      time: T0,
      startSeq: null,
      endSeq: null,
      forkSeq: null,
      assistantSeq: null,
      toolCalls: 0,
      archived: false,
      current: false,
      childSessionIds: [],
      label: SESSIONS[0]?.title ?? "根会话"
    };
    nodes.push(rootNode);
    for (const spec of SESSIONS) {
      const isRoot = spec.id === rootId;
      const archived = spec.archived === true;
      const current = spec.id === "session-hw";
      let parentId = rootNode.id;
      if (!isRoot && spec.parent !== void 0 && spec.forkAtTurn !== void 0) {
        parentId = turnNodeByKey.get(`${spec.parent}:${spec.forkAtTurn}`)?.id ?? rootNode.id;
      }
      if (spec.turns.length === 0) {
        const parentNode = nodes.find((node) => node.id === parentId);
        const branch = {
          id: `branch:${spec.id}`,
          kind: "branch",
          parentId,
          sessionId: spec.id,
          sessionTitle: spec.title,
          turn: null,
          user: "",
          assistant: "",
          status: "unknown",
          time: T0 + seq * 6e4,
          startSeq: null,
          endSeq: null,
          forkSeq: parentNode?.forkSeq ?? null,
          assistantSeq: null,
          toolCalls: 0,
          archived,
          current,
          childSessionIds: [],
          label: "空分支"
        };
        nodes.push(branch);
        edges.push({
          id: `edge:${parentId}->${branch.id}`,
          source: parentId,
          target: branch.id,
          kind: "fork",
          archived
        });
      } else {
        spec.turns.forEach((turn, index2) => {
          const turnNo = index2 + 1;
          const startSeq = seq += 1;
          const assistantSeq = seq += 1;
          const endSeq = seq += 1;
          const node = {
            id: `turn:${spec.id}:${turnNo}`,
            kind: "turn",
            parentId,
            sessionId: spec.id,
            sessionTitle: spec.title,
            turn: turnNo,
            user: turn.user,
            assistant: turn.assistant,
            status: turn.status ?? "completed",
            time: T0 + seq * 6e4,
            startSeq,
            endSeq,
            forkSeq: endSeq,
            assistantSeq,
            toolCalls: turn.toolCalls ?? 0,
            archived,
            current,
            childSessionIds: []
          };
          if (turn.statusDetail !== void 0) node.statusDetail = turn.statusDetail;
          nodes.push(node);
          turnNodeByKey.set(`${spec.id}:${turnNo}`, node);
          edges.push({
            id: `edge:${parentId}->${node.id}`,
            source: parentId,
            target: node.id,
            kind: index2 === 0 && !isRoot ? "fork" : "chain",
            archived
          });
          parentId = node.id;
        });
      }
      summaries.push({
        sessionId: spec.id,
        title: spec.title,
        parentSessionId: spec.parent ?? null,
        cwd: "C:\\workspace\\demo",
        agentPreset: "standard",
        createdAt: T0 + seq * 6e4,
        archived,
        current,
        turnCount: spec.turns.length,
        ownTurnCount: spec.turns.length,
        forkSeq: isRoot ? null : spec.turns.length === 0 ? null : turnNodeByKey.get(`${spec.parent}:${spec.forkAtTurn}`)?.forkSeq ?? null,
        descendantCount: 0,
        ...spec.model === void 0 ? {} : { model: spec.model },
        ...spec.provider === void 0 ? {} : { provider: spec.provider }
      });
    }
    for (const edge of edges) {
      if (edge.kind !== "fork") continue;
      const source = nodes.find((node) => node.id === edge.source);
      const target = nodes.find((node) => node.id === edge.target);
      if (source !== void 0 && target !== void 0 && !source.childSessionIds.includes(target.sessionId)) {
        source.childSessionIds.push(target.sessionId);
      }
    }
    for (const summary of summaries) {
      summary.descendantCount = summaries.filter((candidate) => {
        let cursor = candidate.parentSessionId;
        while (cursor !== null) {
          if (cursor === summary.sessionId) return true;
          cursor = summaries.find((parent) => parent.sessionId === cursor)?.parentSessionId ?? null;
        }
        return false;
      }).length;
    }
    const tree = {
      version: 1,
      rootId,
      currentSessionId: "session-hw",
      generatedAt: Date.now(),
      includeArchived: true,
      truncated: false,
      nodes,
      edges,
      sessions: summaries,
      stats: {
        sessions: summaries.length,
        turns: nodes.filter((node) => node.kind === "turn").length,
        branches: edges.filter((edge) => edge.kind === "fork").length,
        archivedBranches: summaries.filter((summary) => summary.archived && summary.sessionId !== rootId).length
      }
    };
    return tree;
  }
  var fullTree = buildBaseTree();
  function visibleTree(includeArchived) {
    const tree = clone(fullTree);
    tree.generatedAt = Date.now();
    tree.includeArchived = includeArchived;
    if (includeArchived) return tree;
    const archivedSessions = new Set(
      tree.sessions.filter((session) => session.archived).map((session) => session.sessionId)
    );
    tree.sessions = tree.sessions.filter((session) => !archivedSessions.has(session.sessionId));
    tree.nodes = tree.nodes.filter((node) => !archivedSessions.has(node.sessionId));
    tree.edges = tree.edges.filter(
      (edge) => tree.nodes.some((node) => node.id === edge.source) && tree.nodes.some((node) => node.id === edge.target)
    );
    for (const node of tree.nodes) {
      node.childSessionIds = node.childSessionIds.filter((sessionId) => !archivedSessions.has(sessionId));
    }
    tree.stats = {
      sessions: tree.sessions.length,
      turns: tree.nodes.filter((node) => node.kind === "turn").length,
      branches: tree.edges.filter((edge) => edge.kind === "fork").length,
      archivedBranches: 0
    };
    return tree;
  }
  function subtree(sessionId) {
    const result = [];
    const visit = (id2) => {
      if (result.includes(id2)) return;
      result.push(id2);
      for (const session of fullTree.sessions) {
        if (session.parentSessionId === id2) visit(session.sessionId);
      }
    };
    visit(sessionId);
    return result;
  }
  var sleep2 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  function createMockController() {
    let forkCounter = 0;
    return {
      loadTree: async (_sessionId, includeArchived) => {
        await sleep2(160);
        return visibleTree(includeArchived);
      },
      openSession: (sessionId) => {
        ;
        window.__gitchat_last_open__ = sessionId;
      },
      forkAt: async (sessionId, atSeq) => {
        await sleep2(220);
        const parent = fullTree.nodes.find(
          (node) => node.sessionId === sessionId && node.kind === "turn" && node.forkSeq === atSeq
        );
        if (parent === void 0) throw new Error("preview: fork point not found");
        forkCounter += 1;
        const childId = `session-preview-${forkCounter}`;
        const turn = {
          id: `turn:${childId}:1`,
          kind: "turn",
          parentId: parent.id,
          sessionId: childId,
          sessionTitle: "预览新分支",
          turn: 1,
          user: "这是从预览里新建的分支。",
          assistant: "分支上下文继承了从根节点到所选轮次的全部消息；刷新后可以看到新节点。",
          status: "completed",
          time: Date.now(),
          startSeq: 900 + forkCounter,
          endSeq: 902 + forkCounter,
          forkSeq: 902 + forkCounter,
          assistantSeq: 901 + forkCounter,
          toolCalls: 0,
          archived: false,
          current: false,
          childSessionIds: []
        };
        fullTree.nodes.push(turn);
        fullTree.edges.push({
          id: `edge:${parent.id}->${turn.id}`,
          source: parent.id,
          target: turn.id,
          kind: "fork",
          archived: false
        });
        parent.childSessionIds.push(childId);
        fullTree.sessions.push({
          sessionId: childId,
          title: "预览新分支",
          parentSessionId: sessionId,
          cwd: "C:\\workspace\\demo",
          agentPreset: "standard",
          createdAt: Date.now(),
          archived: false,
          current: false,
          turnCount: 1,
          ownTurnCount: 1,
          forkSeq: atSeq,
          descendantCount: 0,
          model: "deepseek-flash",
          provider: "deepseek-account"
        });
        fullTree.stats = {
          sessions: fullTree.sessions.length,
          turns: fullTree.nodes.filter((node) => node.kind === "turn").length,
          branches: fullTree.edges.filter((edge) => edge.kind === "fork").length,
          archivedBranches: fullTree.sessions.filter((session) => session.archived && session.sessionId !== fullTree.rootId).length
        };
        return childId;
      },
      archiveBranch: async (sessionId, _force) => {
        await sleep2(180);
        const ids = subtree(sessionId);
        const skipped = ids.filter((id2) => fullTree.sessions.find((session) => session.sessionId === id2)?.archived === true);
        const archivedSessions = ids.filter((id2) => !skipped.includes(id2));
        for (const id2 of archivedSessions) {
          const session = fullTree.sessions.find((candidate) => candidate.sessionId === id2);
          if (session !== void 0) session.archived = true;
          for (const node of fullTree.nodes) if (node.sessionId === id2) node.archived = true;
        }
        fullTree.stats.archivedBranches = fullTree.sessions.filter(
          (session) => session.archived && session.sessionId !== fullTree.rootId
        ).length;
        return { rootSessionId: sessionId, archivedSessions, skipped, count: archivedSessions.length };
      },
      unarchiveBranch: async (sessionId) => {
        await sleep2(140);
        const session = fullTree.sessions.find((candidate) => candidate.sessionId === sessionId);
        if (session !== void 0) session.archived = false;
        for (const node of fullTree.nodes) if (node.sessionId === sessionId) node.archived = false;
        fullTree.stats.archivedBranches = fullTree.sessions.filter(
          (candidate) => candidate.archived && candidate.sessionId !== fullTree.rootId
        ).length;
      },
      saveTree: async (tree) => {
        await sleep2(220);
        return {
          path: `~/.dsh/plugin-data/dsh-gitchat/exports/gitchat-preview-${Date.now()}.json`,
          bytes: JSON.stringify(tree).length,
          generatedAt: Date.now(),
          sessions: tree.stats.sessions,
          turns: tree.stats.turns
        };
      },
      downloadTree: async (tree) => {
        const full = tree.includeArchived ? tree : visibleTree(true);
        window.__gitchat_last_download__ = full;
      }
    };
  }
  function previewTree() {
    return visibleTree(true);
  }

  // preview/main.tsx
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var t = (key, params) => {
    let text = zh[key] ?? key;
    if (params !== void 0) {
      for (const [name, value] of Object.entries(params)) {
        text = text.split(`{${name}}`).join(String(value));
      }
    }
    return text;
  };
  var initialTheme = new URLSearchParams(window.location.search).get("theme") === "dark" ? "dark" : "light";
  document.body.dataset.previewTheme = initialTheme;
  var controller = createMockController();
  function Preview() {
    const [theme, setTheme] = (0, import_react6.useState)(initialTheme);
    (0, import_react6.useEffect)(() => {
      document.body.dataset.previewTheme = theme;
    }, [theme]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(GitChatView, { sessionId: "session-hw", controller, t }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "button",
          className: "preview-theme-toggle",
          "data-testid": "preview-theme-toggle",
          onClick: () => setTheme((current) => current === "dark" ? "light" : "dark"),
          "aria-label": theme === "dark" ? "切换到浅色模式" : "切换到深色模式",
          children: theme === "dark" ? "☀ 浅色" : "☾ 深色"
        }
      )
    ] });
  }
  var container = document.getElementById("root");
  if (container === null) throw new Error("preview: #root is missing");
  (0, import_client.createRoot)(container).render(/* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Preview, {}));
  window.__gitchat_preview_tree__ = previewTree();
  window.__gitchat_preview_ready__ = true;
})();
