(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Ud(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Hd = { exports: {} },
  ls = {},
  Wd = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wi = Symbol.for("react.element"),
  U0 = Symbol.for("react.portal"),
  H0 = Symbol.for("react.fragment"),
  W0 = Symbol.for("react.strict_mode"),
  Y0 = Symbol.for("react.profiler"),
  G0 = Symbol.for("react.provider"),
  X0 = Symbol.for("react.context"),
  K0 = Symbol.for("react.forward_ref"),
  Q0 = Symbol.for("react.suspense"),
  Z0 = Symbol.for("react.memo"),
  q0 = Symbol.for("react.lazy"),
  rc = Symbol.iterator;
function J0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (rc && e[rc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gd = Object.assign,
  Xd = {};
function cr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xd),
    (this.updater = n || Yd);
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kd() {}
Kd.prototype = cr.prototype;
function ja(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xd),
    (this.updater = n || Yd);
}
var La = (ja.prototype = new Kd());
La.constructor = ja;
Gd(La, cr.prototype);
La.isPureReactComponent = !0;
var ic = Array.isArray,
  Qd = Object.prototype.hasOwnProperty,
  Va = { current: null },
  Zd = { key: !0, ref: !0, __self: !0, __source: !0 };
function qd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Qd.call(t, r) && !Zd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: wi,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Va.current,
  };
}
function eg(e, t) {
  return {
    $$typeof: wi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Na(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wi;
}
function tg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var oc = /\/+/g;
function Ls(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? tg("" + e.key)
    : t.toString(36);
}
function ro(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case wi:
          case U0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Ls(s, 0) : r),
      ic(i)
        ? ((n = ""),
          e != null && (n = e.replace(oc, "$&/") + "/"),
          ro(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Na(i) &&
            (i = eg(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(oc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ic(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Ls(o, l);
      s += ro(o, t, n, a, i);
    }
  else if (((a = J0(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Ls(o, l++)), (s += ro(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Li(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ro(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function ng(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ke = { current: null },
  io = { transition: null },
  rg = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: io,
    ReactCurrentOwner: Va,
  };
z.Children = {
  map: Li,
  forEach: function (e, t, n) {
    Li(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Li(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Li(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Na(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = cr;
z.Fragment = H0;
z.Profiler = Y0;
z.PureComponent = ja;
z.StrictMode = W0;
z.Suspense = Q0;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Gd({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Va.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Qd.call(t, a) &&
        !Zd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: wi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: X0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: G0, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = qd;
z.createFactory = function (e) {
  var t = qd.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: K0, render: e };
};
z.isValidElement = Na;
z.lazy = function (e) {
  return { $$typeof: q0, _payload: { _status: -1, _result: e }, _init: ng };
};
z.memo = function (e, t) {
  return { $$typeof: Z0, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = io.transition;
  io.transition = {};
  try {
    e();
  } finally {
    io.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ke.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
z.useId = function () {
  return ke.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ke.current.useRef(e);
};
z.useState = function (e) {
  return ke.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ke.current.useTransition();
};
z.version = "18.2.0";
Wd.exports = z;
var A = Wd.exports;
const U = Ud(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ig = A,
  og = Symbol.for("react.element"),
  sg = Symbol.for("react.fragment"),
  lg = Object.prototype.hasOwnProperty,
  ag = ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ug = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) lg.call(t, r) && !ug.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: og,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ag.current,
  };
}
ls.Fragment = sg;
ls.jsx = Jd;
ls.jsxs = Jd;
Hd.exports = ls;
var x = Hd.exports,
  vl = {},
  eh = { exports: {} },
  ze = {},
  th = { exports: {} },
  nh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, j) {
    var D = M.length;
    M.push(j);
    e: for (; 0 < D; ) {
      var V = (D - 1) >>> 1,
        F = M[V];
      if (0 < i(F, j)) (M[V] = j), (M[D] = F), (D = V);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var j = M[0],
      D = M.pop();
    if (D !== j) {
      M[0] = D;
      e: for (var V = 0, F = M.length, rn = F >>> 1; V < rn; ) {
        var st = 2 * (V + 1) - 1,
          _n = M[st],
          Le = st + 1,
          on = M[Le];
        if (0 > i(_n, D))
          Le < F && 0 > i(on, _n)
            ? ((M[V] = on), (M[Le] = D), (V = Le))
            : ((M[V] = _n), (M[st] = D), (V = st));
        else if (Le < F && 0 > i(on, D)) (M[V] = on), (M[Le] = D), (V = Le);
        else break e;
      }
    }
    return j;
  }
  function i(M, j) {
    var D = M.sortIndex - j.sortIndex;
    return D !== 0 ? D : M.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    v = !1,
    y = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(M) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= M)
        r(u), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(u);
    }
  }
  function w(M) {
    if (((y = !1), p(M), !v))
      if (n(a) !== null) (v = !0), H(S);
      else {
        var j = n(u);
        j !== null && Ce(w, j.startTime - M);
      }
  }
  function S(M, j) {
    (v = !1), y && ((y = !1), g(P), (P = -1)), (m = !0);
    var D = d;
    try {
      for (
        p(j), f = n(a);
        f !== null && (!(f.expirationTime > j) || (M && !Q()));

      ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var F = V(f.expirationTime <= j);
          (j = e.unstable_now()),
            typeof F == "function" ? (f.callback = F) : f === n(a) && r(a),
            p(j);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var rn = !0;
      else {
        var st = n(u);
        st !== null && Ce(w, st.startTime - j), (rn = !1);
      }
      return rn;
    } finally {
      (f = null), (d = D), (m = !1);
    }
  }
  var T = !1,
    k = null,
    P = -1,
    _ = 5,
    L = -1;
  function Q() {
    return !(e.unstable_now() - L < _);
  }
  function O() {
    if (k !== null) {
      var M = e.unstable_now();
      L = M;
      var j = !0;
      try {
        j = k(!0, M);
      } finally {
        j ? se() : ((T = !1), (k = null));
      }
    } else T = !1;
  }
  var se;
  if (typeof h == "function")
    se = function () {
      h(O);
    };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(),
      Xe = Y.port2;
    (Y.port1.onmessage = O),
      (se = function () {
        Xe.postMessage(null);
      });
  } else
    se = function () {
      C(O, 0);
    };
  function H(M) {
    (k = M), T || ((T = !0), se());
  }
  function Ce(M, j) {
    P = C(function () {
      M(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || m || ((v = !0), H(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var D = d;
      d = j;
      try {
        return M();
      } finally {
        d = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, j) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var D = d;
      d = M;
      try {
        return j();
      } finally {
        d = D;
      }
    }),
    (e.unstable_scheduleCallback = function (M, j, D) {
      var V = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? V + D : V))
          : (D = V),
        M)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = D + F),
        (M = {
          id: c++,
          callback: j,
          priorityLevel: M,
          startTime: D,
          expirationTime: F,
          sortIndex: -1,
        }),
        D > V
          ? ((M.sortIndex = D),
            t(u, M),
            n(a) === null &&
              M === n(u) &&
              (y ? (g(P), (P = -1)) : (y = !0), Ce(w, D - V)))
          : ((M.sortIndex = F), t(a, M), v || m || ((v = !0), H(S))),
        M
      );
    }),
    (e.unstable_shouldYield = Q),
    (e.unstable_wrapCallback = function (M) {
      var j = d;
      return function () {
        var D = d;
        d = j;
        try {
          return M.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    });
})(nh);
th.exports = nh;
var cg = th.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rh = A,
  De = cg;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ih = new Set(),
  ei = {};
function An(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (ei[e] = t, e = 0; e < t.length; e++) ih.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yl = Object.prototype.hasOwnProperty,
  fg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  sc = {},
  lc = {};
function dg(e) {
  return yl.call(lc, e)
    ? !0
    : yl.call(sc, e)
    ? !1
    : fg.test(e)
    ? (lc[e] = !0)
    : ((sc[e] = !0), !1);
}
function hg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function pg(e, t, n, r) {
  if (t === null || typeof t > "u" || hg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Te(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Oa = /[\-:]([a-z])/g;
function Da(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oa, Da);
    me[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oa, Da);
    me[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Oa, Da);
  me[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ra(e, t, n, r) {
  var i = me.hasOwnProperty(t) ? me[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (pg(t, n, i, r) && (n = null),
    r || i === null
      ? dg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Vi = Symbol.for("react.element"),
  Vn = Symbol.for("react.portal"),
  Nn = Symbol.for("react.fragment"),
  za = Symbol.for("react.strict_mode"),
  xl = Symbol.for("react.profiler"),
  oh = Symbol.for("react.provider"),
  sh = Symbol.for("react.context"),
  Ia = Symbol.for("react.forward_ref"),
  wl = Symbol.for("react.suspense"),
  Sl = Symbol.for("react.suspense_list"),
  Fa = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  lh = Symbol.for("react.offscreen"),
  ac = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ac && e[ac]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Vs;
function br(e) {
  if (Vs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vs = (t && t[1]) || "";
    }
  return (
    `
` +
    Vs +
    e
  );
}
var Ns = !1;
function Os(e, t) {
  if (!e || Ns) return "";
  Ns = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Ns = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? br(e) : "";
}
function mg(e) {
  switch (e.tag) {
    case 5:
      return br(e.type);
    case 16:
      return br("Lazy");
    case 13:
      return br("Suspense");
    case 19:
      return br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Os(e.type, !1)), e;
    case 11:
      return (e = Os(e.type.render, !1)), e;
    case 1:
      return (e = Os(e.type, !0)), e;
    default:
      return "";
  }
}
function Cl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case Vn:
      return "Portal";
    case xl:
      return "Profiler";
    case za:
      return "StrictMode";
    case wl:
      return "Suspense";
    case Sl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sh:
        return (e.displayName || "Context") + ".Consumer";
      case oh:
        return (e._context.displayName || "Context") + ".Provider";
      case Ia:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fa:
        return (
          (t = e.displayName || null), t !== null ? t : Cl(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return Cl(e(t));
        } catch {}
    }
  return null;
}
function gg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Cl(t);
    case 8:
      return t === za ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ah(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vg(e) {
  var t = ah(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ni(e) {
  e._valueTracker || (e._valueTracker = vg(e));
}
function uh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ah(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Po(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pl(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function uc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ch(e, t) {
  (t = t.checked), t != null && Ra(e, "checked", t, !1);
}
function El(e, t) {
  ch(e, t);
  var n = Kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? kl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && kl(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function cc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function kl(e, t, n) {
  (t !== "number" || Po(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;
function Kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Tl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function fc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (_r(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function fh(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function dc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Al(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? dh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Oi,
  hh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Oi = Oi || document.createElement("div"),
          Oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Oi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ti(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yg = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function (e) {
  yg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]);
  });
});
function ph(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zr.hasOwnProperty(e) && zr[e])
    ? ("" + t).trim()
    : t + "px";
}
function mh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ph(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var xg = te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ml(e, t) {
  if (t) {
    if (xg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function bl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _l = null;
function Ba(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jl = null,
  Qn = null,
  Zn = null;
function hc(e) {
  if ((e = Pi(e))) {
    if (typeof jl != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = ds(t)), jl(e.stateNode, e.type, t));
  }
}
function gh(e) {
  Qn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Qn = e);
}
function vh() {
  if (Qn) {
    var e = Qn,
      t = Zn;
    if (((Zn = Qn = null), hc(e), t)) for (e = 0; e < t.length; e++) hc(t[e]);
  }
}
function yh(e, t) {
  return e(t);
}
function xh() {}
var Ds = !1;
function wh(e, t, n) {
  if (Ds) return e(t, n);
  Ds = !0;
  try {
    return yh(e, t, n);
  } finally {
    (Ds = !1), (Qn !== null || Zn !== null) && (xh(), vh());
  }
}
function ni(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ds(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Ll = !1;
if (Pt)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        Ll = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    Ll = !1;
  }
function wg(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ir = !1,
  Eo = null,
  ko = !1,
  Vl = null,
  Sg = {
    onError: function (e) {
      (Ir = !0), (Eo = e);
    },
  };
function Cg(e, t, n, r, i, o, s, l, a) {
  (Ir = !1), (Eo = null), wg.apply(Sg, arguments);
}
function Pg(e, t, n, r, i, o, s, l, a) {
  if ((Cg.apply(this, arguments), Ir)) {
    if (Ir) {
      var u = Eo;
      (Ir = !1), (Eo = null);
    } else throw Error(E(198));
    ko || ((ko = !0), (Vl = u));
  }
}
function Mn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Sh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function pc(e) {
  if (Mn(e) !== e) throw Error(E(188));
}
function Eg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return pc(i), e;
        if (o === r) return pc(i), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Ch(e) {
  return (e = Eg(e)), e !== null ? Ph(e) : null;
}
function Ph(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ph(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Eh = De.unstable_scheduleCallback,
  mc = De.unstable_cancelCallback,
  kg = De.unstable_shouldYield,
  Tg = De.unstable_requestPaint,
  ie = De.unstable_now,
  Ag = De.unstable_getCurrentPriorityLevel,
  $a = De.unstable_ImmediatePriority,
  kh = De.unstable_UserBlockingPriority,
  To = De.unstable_NormalPriority,
  Mg = De.unstable_LowPriority,
  Th = De.unstable_IdlePriority,
  as = null,
  ct = null;
function bg(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(as, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : Lg,
  _g = Math.log,
  jg = Math.LN2;
function Lg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_g(e) / jg) | 0)) | 0;
}
var Di = 64,
  Ri = 4194304;
function jr(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ao(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = jr(l)) : ((o &= s), o !== 0 && (r = jr(o)));
  } else (s = n & ~i), s !== 0 ? (r = jr(s)) : o !== 0 && (r = jr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Vg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Ng(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - tt(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = Vg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Nl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ah() {
  var e = Di;
  return (Di <<= 1), !(Di & 4194240) && (Di = 64), e;
}
function Rs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Si(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function Og(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - tt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ua(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function Mh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bh,
  Ha,
  _h,
  jh,
  Lh,
  Ol = !1,
  zi = [],
  Ft = null,
  Bt = null,
  $t = null,
  ri = new Map(),
  ii = new Map(),
  Dt = [],
  Dg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function gc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ft = null;
      break;
    case "dragenter":
    case "dragleave":
      Bt = null;
      break;
    case "mouseover":
    case "mouseout":
      $t = null;
      break;
    case "pointerover":
    case "pointerout":
      ri.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ii.delete(t.pointerId);
  }
}
function vr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Pi(t)), t !== null && Ha(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Rg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ft = vr(Ft, e, t, n, r, i)), !0;
    case "dragenter":
      return (Bt = vr(Bt, e, t, n, r, i)), !0;
    case "mouseover":
      return ($t = vr($t, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ri.set(o, vr(ri.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), ii.set(o, vr(ii.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Vh(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Sh(n)), t !== null)) {
          (e.blockedOn = t),
            Lh(e.priority, function () {
              _h(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function oo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_l = r), n.target.dispatchEvent(r), (_l = null);
    } else return (t = Pi(n)), t !== null && Ha(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vc(e, t, n) {
  oo(e) && n.delete(t);
}
function zg() {
  (Ol = !1),
    Ft !== null && oo(Ft) && (Ft = null),
    Bt !== null && oo(Bt) && (Bt = null),
    $t !== null && oo($t) && ($t = null),
    ri.forEach(vc),
    ii.forEach(vc);
}
function yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ol ||
      ((Ol = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, zg)));
}
function oi(e) {
  function t(i) {
    return yr(i, e);
  }
  if (0 < zi.length) {
    yr(zi[0], e);
    for (var n = 1; n < zi.length; n++) {
      var r = zi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ft !== null && yr(Ft, e),
      Bt !== null && yr(Bt, e),
      $t !== null && yr($t, e),
      ri.forEach(t),
      ii.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    Vh(n), n.blockedOn === null && Dt.shift();
}
var qn = At.ReactCurrentBatchConfig,
  Mo = !0;
function Ig(e, t, n, r) {
  var i = B,
    o = qn.transition;
  qn.transition = null;
  try {
    (B = 1), Wa(e, t, n, r);
  } finally {
    (B = i), (qn.transition = o);
  }
}
function Fg(e, t, n, r) {
  var i = B,
    o = qn.transition;
  qn.transition = null;
  try {
    (B = 4), Wa(e, t, n, r);
  } finally {
    (B = i), (qn.transition = o);
  }
}
function Wa(e, t, n, r) {
  if (Mo) {
    var i = Dl(e, t, n, r);
    if (i === null) Gs(e, t, r, bo, n), gc(e, r);
    else if (Rg(i, e, t, n, r)) r.stopPropagation();
    else if ((gc(e, r), t & 4 && -1 < Dg.indexOf(e))) {
      for (; i !== null; ) {
        var o = Pi(i);
        if (
          (o !== null && bh(o),
          (o = Dl(e, t, n, r)),
          o === null && Gs(e, t, r, bo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Gs(e, t, r, null, n);
  }
}
var bo = null;
function Dl(e, t, n, r) {
  if (((bo = null), (e = Ba(r)), (e = dn(e)), e !== null))
    if (((t = Mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Sh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bo = e), null;
}
function Nh(e) {
  switch (e) {
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
      switch (Ag()) {
        case $a:
          return 1;
        case kh:
          return 4;
        case To:
        case Mg:
          return 16;
        case Th:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null,
  Ya = null,
  so = null;
function Oh() {
  if (so) return so;
  var e,
    t = Ya,
    n = t.length,
    r,
    i = "value" in zt ? zt.value : zt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (so = i.slice(e, 1 < r ? 1 - r : void 0));
}
function lo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ii() {
  return !0;
}
function yc() {
  return !1;
}
function Ie(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ii
        : yc),
      (this.isPropagationStopped = yc),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ii));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ii));
      },
      persist: function () {},
      isPersistent: Ii,
    }),
    t
  );
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ga = Ie(fr),
  Ci = te({}, fr, { view: 0, detail: 0 }),
  Bg = Ie(Ci),
  zs,
  Is,
  xr,
  us = te({}, Ci, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xr &&
            (xr && e.type === "mousemove"
              ? ((zs = e.screenX - xr.screenX), (Is = e.screenY - xr.screenY))
              : (Is = zs = 0),
            (xr = e)),
          zs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Is;
    },
  }),
  xc = Ie(us),
  $g = te({}, us, { dataTransfer: 0 }),
  Ug = Ie($g),
  Hg = te({}, Ci, { relatedTarget: 0 }),
  Fs = Ie(Hg),
  Wg = te({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yg = Ie(Wg),
  Gg = te({}, fr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Xg = Ie(Gg),
  Kg = te({}, fr, { data: 0 }),
  wc = Ie(Kg),
  Qg = {
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
    MozPrintableKey: "Unidentified",
  },
  Zg = {
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
    224: "Meta",
  },
  qg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qg[e]) ? !!t[e] : !1;
}
function Xa() {
  return Jg;
}
var ev = te({}, Ci, {
    key: function (e) {
      if (e.key) {
        var t = Qg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Zg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xa,
    charCode: function (e) {
      return e.type === "keypress" ? lo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? lo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  tv = Ie(ev),
  nv = te({}, us, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Sc = Ie(nv),
  rv = te({}, Ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xa,
  }),
  iv = Ie(rv),
  ov = te({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sv = Ie(ov),
  lv = te({}, us, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  av = Ie(lv),
  uv = [9, 13, 27, 32],
  Ka = Pt && "CompositionEvent" in window,
  Fr = null;
Pt && "documentMode" in document && (Fr = document.documentMode);
var cv = Pt && "TextEvent" in window && !Fr,
  Dh = Pt && (!Ka || (Fr && 8 < Fr && 11 >= Fr)),
  Cc = " ",
  Pc = !1;
function Rh(e, t) {
  switch (e) {
    case "keyup":
      return uv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function zh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function fv(e, t) {
  switch (e) {
    case "compositionend":
      return zh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Pc = !0), Cc);
    case "textInput":
      return (e = t.data), e === Cc && Pc ? null : e;
    default:
      return null;
  }
}
function dv(e, t) {
  if (On)
    return e === "compositionend" || (!Ka && Rh(e, t))
      ? ((e = Oh()), (so = Ya = zt = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Dh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hv[e.type] : t === "textarea";
}
function Ih(e, t, n, r) {
  gh(r),
    (t = _o(t, "onChange")),
    0 < t.length &&
      ((n = new Ga("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Br = null,
  si = null;
function pv(e) {
  Qh(e, 0);
}
function cs(e) {
  var t = zn(e);
  if (uh(t)) return e;
}
function mv(e, t) {
  if (e === "change") return t;
}
var Fh = !1;
if (Pt) {
  var Bs;
  if (Pt) {
    var $s = "oninput" in document;
    if (!$s) {
      var kc = document.createElement("div");
      kc.setAttribute("oninput", "return;"),
        ($s = typeof kc.oninput == "function");
    }
    Bs = $s;
  } else Bs = !1;
  Fh = Bs && (!document.documentMode || 9 < document.documentMode);
}
function Tc() {
  Br && (Br.detachEvent("onpropertychange", Bh), (si = Br = null));
}
function Bh(e) {
  if (e.propertyName === "value" && cs(si)) {
    var t = [];
    Ih(t, si, e, Ba(e)), wh(pv, t);
  }
}
function gv(e, t, n) {
  e === "focusin"
    ? (Tc(), (Br = t), (si = n), Br.attachEvent("onpropertychange", Bh))
    : e === "focusout" && Tc();
}
function vv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cs(si);
}
function yv(e, t) {
  if (e === "click") return cs(t);
}
function xv(e, t) {
  if (e === "input" || e === "change") return cs(t);
}
function wv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == "function" ? Object.is : wv;
function li(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yl.call(t, i) || !rt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ac(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mc(e, t) {
  var n = Ac(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ac(n);
  }
}
function $h(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? $h(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Uh() {
  for (var e = window, t = Po(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Po(e.document);
  }
  return t;
}
function Qa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Sv(e) {
  var t = Uh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    $h(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Qa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Mc(n, o));
        var s = Mc(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Cv = Pt && "documentMode" in document && 11 >= document.documentMode,
  Dn = null,
  Rl = null,
  $r = null,
  zl = !1;
function bc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zl ||
    Dn == null ||
    Dn !== Po(r) ||
    ((r = Dn),
    "selectionStart" in r && Qa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    ($r && li($r, r)) ||
      (($r = r),
      (r = _o(Rl, "onSelect")),
      0 < r.length &&
        ((t = new Ga("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Dn))));
}
function Fi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Rn = {
    animationend: Fi("Animation", "AnimationEnd"),
    animationiteration: Fi("Animation", "AnimationIteration"),
    animationstart: Fi("Animation", "AnimationStart"),
    transitionend: Fi("Transition", "TransitionEnd"),
  },
  Us = {},
  Hh = {};
Pt &&
  ((Hh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Rn.animationend.animation,
    delete Rn.animationiteration.animation,
    delete Rn.animationstart.animation),
  "TransitionEvent" in window || delete Rn.transitionend.transition);
function fs(e) {
  if (Us[e]) return Us[e];
  if (!Rn[e]) return e;
  var t = Rn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hh) return (Us[e] = t[n]);
  return e;
}
var Wh = fs("animationend"),
  Yh = fs("animationiteration"),
  Gh = fs("animationstart"),
  Xh = fs("transitionend"),
  Kh = new Map(),
  _c =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jt(e, t) {
  Kh.set(e, t), An(t, [e]);
}
for (var Hs = 0; Hs < _c.length; Hs++) {
  var Ws = _c[Hs],
    Pv = Ws.toLowerCase(),
    Ev = Ws[0].toUpperCase() + Ws.slice(1);
  Jt(Pv, "on" + Ev);
}
Jt(Wh, "onAnimationEnd");
Jt(Yh, "onAnimationIteration");
Jt(Gh, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(Xh, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
An(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
An(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Lr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  kv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));
function jc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Pg(r, t, void 0, e), (e.currentTarget = null);
}
function Qh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          jc(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          jc(i, l, u), (o = a);
        }
    }
  }
  if (ko) throw ((e = Vl), (ko = !1), (Vl = null), e);
}
function X(e, t) {
  var n = t[Ul];
  n === void 0 && (n = t[Ul] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zh(t, e, 2, !1), n.add(r));
}
function Ys(e, t, n) {
  var r = 0;
  t && (r |= 4), Zh(n, e, r, t);
}
var Bi = "_reactListening" + Math.random().toString(36).slice(2);
function ai(e) {
  if (!e[Bi]) {
    (e[Bi] = !0),
      ih.forEach(function (n) {
        n !== "selectionchange" && (kv.has(n) || Ys(n, !1, e), Ys(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bi] || ((t[Bi] = !0), Ys("selectionchange", !1, t));
  }
}
function Zh(e, t, n, r) {
  switch (Nh(t)) {
    case 1:
      var i = Ig;
      break;
    case 4:
      i = Fg;
      break;
    default:
      i = Wa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ll ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Gs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = dn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  wh(function () {
    var u = o,
      c = Ba(n),
      f = [];
    e: {
      var d = Kh.get(e);
      if (d !== void 0) {
        var m = Ga,
          v = e;
        switch (e) {
          case "keypress":
            if (lo(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = tv;
            break;
          case "focusin":
            (v = "focus"), (m = Fs);
            break;
          case "focusout":
            (v = "blur"), (m = Fs);
            break;
          case "beforeblur":
          case "afterblur":
            m = Fs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = xc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Ug;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = iv;
            break;
          case Wh:
          case Yh:
          case Gh:
            m = Yg;
            break;
          case Xh:
            m = sv;
            break;
          case "scroll":
            m = Bg;
            break;
          case "wheel":
            m = av;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Xg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Sc;
        }
        var y = (t & 4) !== 0,
          C = !y && e === "scroll",
          g = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              g !== null && ((w = ni(h, g)), w != null && y.push(ui(h, w, p)))),
            C)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((d = new m(d, v, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== _l &&
            (v = n.relatedTarget || n.fromElement) &&
            (dn(v) || v[Et]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((v = n.relatedTarget || n.toElement),
              (m = u),
              (v = v ? dn(v) : null),
              v !== null &&
                ((C = Mn(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((m = null), (v = u)),
          m !== v)
        ) {
          if (
            ((y = xc),
            (w = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Sc),
              (w = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (C = m == null ? d : zn(m)),
            (p = v == null ? d : zn(v)),
            (d = new y(w, h + "leave", m, n, c)),
            (d.target = C),
            (d.relatedTarget = p),
            (w = null),
            dn(c) === u &&
              ((y = new y(g, h + "enter", v, n, c)),
              (y.target = p),
              (y.relatedTarget = C),
              (w = y)),
            (C = w),
            m && v)
          )
            t: {
              for (y = m, g = v, h = 0, p = y; p; p = jn(p)) h++;
              for (p = 0, w = g; w; w = jn(w)) p++;
              for (; 0 < h - p; ) (y = jn(y)), h--;
              for (; 0 < p - h; ) (g = jn(g)), p--;
              for (; h--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = jn(y)), (g = jn(g));
              }
              y = null;
            }
          else y = null;
          m !== null && Lc(f, d, m, y, !1),
            v !== null && C !== null && Lc(f, C, v, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? zn(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var S = mv;
        else if (Ec(d))
          if (Fh) S = xv;
          else {
            S = vv;
            var T = gv;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = yv);
        if (S && (S = S(e, u))) {
          Ih(f, S, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            kl(d, "number", d.value);
      }
      switch (((T = u ? zn(u) : window), e)) {
        case "focusin":
          (Ec(T) || T.contentEditable === "true") &&
            ((Dn = T), (Rl = u), ($r = null));
          break;
        case "focusout":
          $r = Rl = Dn = null;
          break;
        case "mousedown":
          zl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zl = !1), bc(f, n, c);
          break;
        case "selectionchange":
          if (Cv) break;
        case "keydown":
        case "keyup":
          bc(f, n, c);
      }
      var k;
      if (Ka)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        On
          ? Rh(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Dh &&
          n.locale !== "ko" &&
          (On || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && On && (k = Oh())
            : ((zt = c),
              (Ya = "value" in zt ? zt.value : zt.textContent),
              (On = !0))),
        (T = _o(u, P)),
        0 < T.length &&
          ((P = new wc(P, e, null, n, c)),
          f.push({ event: P, listeners: T }),
          k ? (P.data = k) : ((k = zh(n)), k !== null && (P.data = k)))),
        (k = cv ? fv(e, n) : dv(e, n)) &&
          ((u = _o(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new wc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Qh(f, t);
  });
}
function ui(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _o(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ni(e, n)),
      o != null && r.unshift(ui(e, o, i)),
      (o = ni(e, t)),
      o != null && r.push(ui(e, o, i))),
      (e = e.return);
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Lc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = ni(n, o)), a != null && s.unshift(ui(n, a, l)))
        : i || ((a = ni(n, o)), a != null && s.push(ui(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Tv = /\r\n?/g,
  Av = /\u0000|\uFFFD/g;
function Vc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Tv,
      `
`
    )
    .replace(Av, "");
}
function $i(e, t, n) {
  if (((t = Vc(t)), Vc(e) !== t && n)) throw Error(E(425));
}
function jo() {}
var Il = null,
  Fl = null;
function Bl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $l = typeof setTimeout == "function" ? setTimeout : void 0,
  Mv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nc = typeof Promise == "function" ? Promise : void 0,
  bv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nc < "u"
      ? function (e) {
          return Nc.resolve(null).then(e).catch(_v);
        }
      : $l;
function _v(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), oi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  oi(t);
}
function Ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Oc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dr = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + dr,
  ci = "__reactProps$" + dr,
  Et = "__reactContainer$" + dr,
  Ul = "__reactEvents$" + dr,
  jv = "__reactListeners$" + dr,
  Lv = "__reactHandles$" + dr;
function dn(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Et] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Oc(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = Oc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Pi(e) {
  return (
    (e = e[ut] || e[Et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function ds(e) {
  return e[ci] || null;
}
var Hl = [],
  In = -1;
function en(e) {
  return { current: e };
}
function K(e) {
  0 > In || ((e.current = Hl[In]), (Hl[In] = null), In--);
}
function W(e, t) {
  In++, (Hl[In] = e.current), (e.current = t);
}
var Qt = {},
  we = en(Qt),
  be = en(!1),
  Cn = Qt;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function _e(e) {
  return (e = e.childContextTypes), e != null;
}
function Lo() {
  K(be), K(we);
}
function Dc(e, t, n) {
  if (we.current !== Qt) throw Error(E(168));
  W(we, t), W(be, n);
}
function qh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, gg(e) || "Unknown", i));
  return te({}, n, r);
}
function Vo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qt),
    (Cn = we.current),
    W(we, e),
    W(be, be.current),
    !0
  );
}
function Rc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = qh(e, t, Cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(be),
      K(we),
      W(we, e))
    : K(be),
    W(be, n);
}
var mt = null,
  hs = !1,
  Ks = !1;
function Jh(e) {
  mt === null ? (mt = [e]) : mt.push(e);
}
function Vv(e) {
  (hs = !0), Jh(e);
}
function tn() {
  if (!Ks && mt !== null) {
    Ks = !0;
    var e = 0,
      t = B;
    try {
      var n = mt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (mt = null), (hs = !1);
    } catch (i) {
      throw (mt !== null && (mt = mt.slice(e + 1)), Eh($a, tn), i);
    } finally {
      (B = t), (Ks = !1);
    }
  }
  return null;
}
var Fn = [],
  Bn = 0,
  No = null,
  Oo = 0,
  $e = [],
  Ue = 0,
  Pn = null,
  gt = 1,
  vt = "";
function an(e, t) {
  (Fn[Bn++] = Oo), (Fn[Bn++] = No), (No = e), (Oo = t);
}
function ep(e, t, n) {
  ($e[Ue++] = gt), ($e[Ue++] = vt), ($e[Ue++] = Pn), (Pn = e);
  var r = gt;
  e = vt;
  var i = 32 - tt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - tt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (gt = (1 << (32 - tt(t) + i)) | (n << i) | r),
      (vt = o + e);
  } else (gt = (1 << o) | (n << i) | r), (vt = e);
}
function Za(e) {
  e.return !== null && (an(e, 1), ep(e, 1, 0));
}
function qa(e) {
  for (; e === No; )
    (No = Fn[--Bn]), (Fn[Bn] = null), (Oo = Fn[--Bn]), (Fn[Bn] = null);
  for (; e === Pn; )
    (Pn = $e[--Ue]),
      ($e[Ue] = null),
      (vt = $e[--Ue]),
      ($e[Ue] = null),
      (gt = $e[--Ue]),
      ($e[Ue] = null);
}
var Oe = null,
  Ne = null,
  Z = !1,
  qe = null;
function tp(e, t) {
  var n = He(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function zc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (Ne = Ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pn !== null ? { id: gt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yl(e) {
  if (Z) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!zc(e, t)) {
        if (Wl(e)) throw Error(E(418));
        t = Ut(n.nextSibling);
        var r = Oe;
        t && zc(e, t)
          ? tp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Oe = e));
      }
    } else {
      if (Wl(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Oe = e);
    }
  }
}
function Ic(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function Ui(e) {
  if (e !== Oe) return !1;
  if (!Z) return Ic(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bl(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (Wl(e)) throw (np(), Error(E(418)));
    for (; t; ) tp(e, t), (t = Ut(t.nextSibling));
  }
  if ((Ic(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = Ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = Oe ? Ut(e.stateNode.nextSibling) : null;
  return !0;
}
function np() {
  for (var e = Ne; e; ) e = Ut(e.nextSibling);
}
function rr() {
  (Ne = Oe = null), (Z = !1);
}
function Ja(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var Nv = At.ReactCurrentBatchConfig;
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Do = en(null),
  Ro = null,
  $n = null,
  eu = null;
function tu() {
  eu = $n = Ro = null;
}
function nu(e) {
  var t = Do.current;
  K(Do), (e._currentValue = t);
}
function Gl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jn(e, t) {
  (Ro = e),
    (eu = $n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function Ye(e) {
  var t = e._currentValue;
  if (eu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
      if (Ro === null) throw Error(E(308));
      ($n = e), (Ro.dependencies = { lanes: 0, firstContext: e });
    } else $n = $n.next = e;
  return t;
}
var hn = null;
function ru(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function rp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ru(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    kt(e, r)
  );
}
function kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Nt = !1;
function iu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ip(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      kt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ru(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    kt(e, n)
  );
}
function ao(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ua(e, n);
  }
}
function Fc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function zo(e, t, n, r) {
  var i = e.updateQueue;
  Nt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            y = l;
          switch (((d = t), (m = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(m, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == "function" ? v.call(m, f, d) : v),
                d == null)
              )
                break e;
              f = te({}, f, d);
              break e;
            case 2:
              Nt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (a = f)) : (c = c.next = m),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (kn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Bc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var op = new rh.Component().refs;
function Xl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ps = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Yt(e),
      o = xt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, i)),
      t !== null && (nt(t, e, i, r), ao(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Yt(e),
      o = xt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, i)),
      t !== null && (nt(t, e, i, r), ao(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = Yt(e),
      i = xt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ht(e, i, r)),
      t !== null && (nt(t, e, r, n), ao(t, e, r));
  },
};
function $c(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !li(n, r) || !li(i, o)
      : !0
  );
}
function sp(e, t, n) {
  var r = !1,
    i = Qt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ye(o))
      : ((i = _e(t) ? Cn : we.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nr(e, i) : Qt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ps),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Uc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ps.enqueueReplaceState(t, t.state, null);
}
function Kl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = op), iu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ye(o))
    : ((o = _e(t) ? Cn : we.current), (i.context = nr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Xl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ps.enqueueReplaceState(i, i.state, null),
      zo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === op && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Hi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Hc(e) {
  var t = e._init;
  return t(e._payload);
}
function lp(e) {
  function t(g, h) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [h]), (g.flags |= 16)) : p.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function i(g, h) {
    return (g = Gt(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, h, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((g.flags |= 2), h) : p)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, p, w) {
    return h === null || h.tag !== 6
      ? ((h = nl(p, g.mode, w)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function a(g, h, p, w) {
    var S = p.type;
    return S === Nn
      ? c(g, h, p.props.children, w, p.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Vt &&
            Hc(S) === h.type))
      ? ((w = i(h, p.props)), (w.ref = wr(g, h, p)), (w.return = g), w)
      : ((w = mo(p.type, p.key, p.props, null, g.mode, w)),
        (w.ref = wr(g, h, p)),
        (w.return = g),
        w);
  }
  function u(g, h, p, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = rl(p, g.mode, w)), (h.return = g), h)
      : ((h = i(h, p.children || [])), (h.return = g), h);
  }
  function c(g, h, p, w, S) {
    return h === null || h.tag !== 7
      ? ((h = xn(p, g.mode, w, S)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function f(g, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = nl("" + h, g.mode, p)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Vi:
          return (
            (p = mo(h.type, h.key, h.props, null, g.mode, p)),
            (p.ref = wr(g, null, h)),
            (p.return = g),
            p
          );
        case Vn:
          return (h = rl(h, g.mode, p)), (h.return = g), h;
        case Vt:
          var w = h._init;
          return f(g, w(h._payload), p);
      }
      if (_r(h) || mr(h))
        return (h = xn(h, g.mode, p, null)), (h.return = g), h;
      Hi(g, h);
    }
    return null;
  }
  function d(g, h, p, w) {
    var S = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : l(g, h, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Vi:
          return p.key === S ? a(g, h, p, w) : null;
        case Vn:
          return p.key === S ? u(g, h, p, w) : null;
        case Vt:
          return (S = p._init), d(g, h, S(p._payload), w);
      }
      if (_r(p) || mr(p)) return S !== null ? null : c(g, h, p, w, null);
      Hi(g, p);
    }
    return null;
  }
  function m(g, h, p, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (g = g.get(p) || null), l(h, g, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Vi:
          return (g = g.get(w.key === null ? p : w.key) || null), a(h, g, w, S);
        case Vn:
          return (g = g.get(w.key === null ? p : w.key) || null), u(h, g, w, S);
        case Vt:
          var T = w._init;
          return m(g, h, p, T(w._payload), S);
      }
      if (_r(w) || mr(w)) return (g = g.get(p) || null), c(h, g, w, S, null);
      Hi(h, w);
    }
    return null;
  }
  function v(g, h, p, w) {
    for (
      var S = null, T = null, k = h, P = (h = 0), _ = null;
      k !== null && P < p.length;
      P++
    ) {
      k.index > P ? ((_ = k), (k = null)) : (_ = k.sibling);
      var L = d(g, k, p[P], w);
      if (L === null) {
        k === null && (k = _);
        break;
      }
      e && k && L.alternate === null && t(g, k),
        (h = o(L, h, P)),
        T === null ? (S = L) : (T.sibling = L),
        (T = L),
        (k = _);
    }
    if (P === p.length) return n(g, k), Z && an(g, P), S;
    if (k === null) {
      for (; P < p.length; P++)
        (k = f(g, p[P], w)),
          k !== null &&
            ((h = o(k, h, P)), T === null ? (S = k) : (T.sibling = k), (T = k));
      return Z && an(g, P), S;
    }
    for (k = r(g, k); P < p.length; P++)
      (_ = m(k, g, P, p[P], w)),
        _ !== null &&
          (e && _.alternate !== null && k.delete(_.key === null ? P : _.key),
          (h = o(_, h, P)),
          T === null ? (S = _) : (T.sibling = _),
          (T = _));
    return (
      e &&
        k.forEach(function (Q) {
          return t(g, Q);
        }),
      Z && an(g, P),
      S
    );
  }
  function y(g, h, p, w) {
    var S = mr(p);
    if (typeof S != "function") throw Error(E(150));
    if (((p = S.call(p)), p == null)) throw Error(E(151));
    for (
      var T = (S = null), k = h, P = (h = 0), _ = null, L = p.next();
      k !== null && !L.done;
      P++, L = p.next()
    ) {
      k.index > P ? ((_ = k), (k = null)) : (_ = k.sibling);
      var Q = d(g, k, L.value, w);
      if (Q === null) {
        k === null && (k = _);
        break;
      }
      e && k && Q.alternate === null && t(g, k),
        (h = o(Q, h, P)),
        T === null ? (S = Q) : (T.sibling = Q),
        (T = Q),
        (k = _);
    }
    if (L.done) return n(g, k), Z && an(g, P), S;
    if (k === null) {
      for (; !L.done; P++, L = p.next())
        (L = f(g, L.value, w)),
          L !== null &&
            ((h = o(L, h, P)), T === null ? (S = L) : (T.sibling = L), (T = L));
      return Z && an(g, P), S;
    }
    for (k = r(g, k); !L.done; P++, L = p.next())
      (L = m(k, g, P, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && k.delete(L.key === null ? P : L.key),
          (h = o(L, h, P)),
          T === null ? (S = L) : (T.sibling = L),
          (T = L));
    return (
      e &&
        k.forEach(function (O) {
          return t(g, O);
        }),
      Z && an(g, P),
      S
    );
  }
  function C(g, h, p, w) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Nn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Vi:
          e: {
            for (var S = p.key, T = h; T !== null; ) {
              if (T.key === S) {
                if (((S = p.type), S === Nn)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (h = i(T, p.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  T.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Vt &&
                    Hc(S) === T.type)
                ) {
                  n(g, T.sibling),
                    (h = i(T, p.props)),
                    (h.ref = wr(g, T, p)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            p.type === Nn
              ? ((h = xn(p.props.children, g.mode, w, p.key)),
                (h.return = g),
                (g = h))
              : ((w = mo(p.type, p.key, p.props, null, g.mode, w)),
                (w.ref = wr(g, h, p)),
                (w.return = g),
                (g = w));
          }
          return s(g);
        case Vn:
          e: {
            for (T = p.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(g, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = rl(p, g.mode, w)), (h.return = g), (g = h);
          }
          return s(g);
        case Vt:
          return (T = p._init), C(g, h, T(p._payload), w);
      }
      if (_r(p)) return v(g, h, p, w);
      if (mr(p)) return y(g, h, p, w);
      Hi(g, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = i(h, p)), (h.return = g), (g = h))
          : (n(g, h), (h = nl(p, g.mode, w)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return C;
}
var ir = lp(!0),
  ap = lp(!1),
  Ei = {},
  ft = en(Ei),
  fi = en(Ei),
  di = en(Ei);
function pn(e) {
  if (e === Ei) throw Error(E(174));
  return e;
}
function ou(e, t) {
  switch ((W(di, t), W(fi, e), W(ft, Ei), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Al(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Al(t, e));
  }
  K(ft), W(ft, t);
}
function or() {
  K(ft), K(fi), K(di);
}
function up(e) {
  pn(di.current);
  var t = pn(ft.current),
    n = Al(t, e.type);
  t !== n && (W(fi, e), W(ft, n));
}
function su(e) {
  fi.current === e && (K(ft), K(fi));
}
var q = en(0);
function Io(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Qs = [];
function lu() {
  for (var e = 0; e < Qs.length; e++)
    Qs[e]._workInProgressVersionPrimary = null;
  Qs.length = 0;
}
var uo = At.ReactCurrentDispatcher,
  Zs = At.ReactCurrentBatchConfig,
  En = 0,
  ee = null,
  ae = null,
  fe = null,
  Fo = !1,
  Ur = !1,
  hi = 0,
  Ov = 0;
function ge() {
  throw Error(E(321));
}
function au(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function uu(e, t, n, r, i, o) {
  if (
    ((En = o),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (uo.current = e === null || e.memoizedState === null ? Iv : Fv),
    (e = n(r, i)),
    Ur)
  ) {
    o = 0;
    do {
      if (((Ur = !1), (hi = 0), 25 <= o)) throw Error(E(301));
      (o += 1),
        (fe = ae = null),
        (t.updateQueue = null),
        (uo.current = Bv),
        (e = n(r, i));
    } while (Ur);
  }
  if (
    ((uo.current = Bo),
    (t = ae !== null && ae.next !== null),
    (En = 0),
    (fe = ae = ee = null),
    (Fo = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function cu() {
  var e = hi !== 0;
  return (hi = 0), e;
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (ee.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function Ge() {
  if (ae === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = fe === null ? ee.memoizedState : fe.next;
  if (t !== null) (fe = t), (ae = e);
  else {
    if (e === null) throw Error(E(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      fe === null ? (ee.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function pi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qs(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ae,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((En & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (ee.lanes |= c),
          (kn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      rt(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ee.lanes |= o), (kn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Js(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    rt(o, t.memoizedState) || (Me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function cp() {}
function fp(e, t) {
  var n = ee,
    r = Ge(),
    i = t(),
    o = !rt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Me = !0)),
    (r = r.queue),
    fu(pp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      mi(9, hp.bind(null, n, r, i, t), void 0, null),
      de === null)
    )
      throw Error(E(349));
    En & 30 || dp(n, t, i);
  }
  return i;
}
function dp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), mp(t) && gp(e);
}
function pp(e, t, n) {
  return n(function () {
    mp(t) && gp(e);
  });
}
function mp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function gp(e) {
  var t = kt(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function Wc(e) {
  var t = at();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zv.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function mi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vp() {
  return Ge().memoizedState;
}
function co(e, t, n, r) {
  var i = at();
  (ee.flags |= e),
    (i.memoizedState = mi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ms(e, t, n, r) {
  var i = Ge();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ae !== null) {
    var s = ae.memoizedState;
    if (((o = s.destroy), r !== null && au(r, s.deps))) {
      i.memoizedState = mi(t, n, o, r);
      return;
    }
  }
  (ee.flags |= e), (i.memoizedState = mi(1 | t, n, o, r));
}
function Yc(e, t) {
  return co(8390656, 8, e, t);
}
function fu(e, t) {
  return ms(2048, 8, e, t);
}
function yp(e, t) {
  return ms(4, 2, e, t);
}
function xp(e, t) {
  return ms(4, 4, e, t);
}
function wp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Sp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ms(4, 4, wp.bind(null, t, e), n)
  );
}
function du() {}
function Cp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && au(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && au(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ep(e, t, n) {
  return En & 21
    ? (rt(n, t) || ((n = Ah()), (ee.lanes |= n), (kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function Dv(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zs.transition;
  Zs.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (Zs.transition = r);
  }
}
function kp() {
  return Ge().memoizedState;
}
function Rv(e, t, n) {
  var r = Yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Tp(e))
  )
    Ap(t, n);
  else if (((n = rp(e, t, n, r)), n !== null)) {
    var i = Ee();
    nt(n, e, r, i), Mp(n, t, r);
  }
}
function zv(e, t, n) {
  var r = Yt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tp(e)) Ap(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), rt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), ru(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = rp(e, t, i, r)),
      n !== null && ((i = Ee()), nt(n, e, r, i), Mp(n, t, r));
  }
}
function Tp(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function Ap(e, t) {
  Ur = Fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Mp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ua(e, n);
  }
}
var Bo = {
    readContext: Ye,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  Iv = {
    readContext: Ye,
    useCallback: function (e, t) {
      return (at().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ye,
    useEffect: Yc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        co(4194308, 4, wp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Rv.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wc,
    useDebugValue: du,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = Wc(!1),
        t = e[0];
      return (e = Dv.bind(null, e[1])), (at().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        i = at();
      if (Z) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(E(349));
        En & 30 || dp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Yc(pp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        mi(9, hp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = de.identifierPrefix;
      if (Z) {
        var n = vt,
          r = gt;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = hi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ov++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Fv = {
    readContext: Ye,
    useCallback: Cp,
    useContext: Ye,
    useEffect: fu,
    useImperativeHandle: Sp,
    useInsertionEffect: yp,
    useLayoutEffect: xp,
    useMemo: Pp,
    useReducer: qs,
    useRef: vp,
    useState: function () {
      return qs(pi);
    },
    useDebugValue: du,
    useDeferredValue: function (e) {
      var t = Ge();
      return Ep(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = qs(pi)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: cp,
    useSyncExternalStore: fp,
    useId: kp,
    unstable_isNewReconciler: !1,
  },
  Bv = {
    readContext: Ye,
    useCallback: Cp,
    useContext: Ye,
    useEffect: fu,
    useImperativeHandle: Sp,
    useInsertionEffect: yp,
    useLayoutEffect: xp,
    useMemo: Pp,
    useReducer: Js,
    useRef: vp,
    useState: function () {
      return Js(pi);
    },
    useDebugValue: du,
    useDeferredValue: function (e) {
      var t = Ge();
      return ae === null ? (t.memoizedState = e) : Ep(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Js(pi)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: cp,
    useSyncExternalStore: fp,
    useId: kp,
    unstable_isNewReconciler: !1,
  };
function sr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += mg(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function el(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $v = typeof WeakMap == "function" ? WeakMap : Map;
function bp(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Uo || ((Uo = !0), (sa = r)), Ql(e, t);
    }),
    n
  );
}
function _p(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ql(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ql(e, t),
          typeof r != "function" &&
            (Wt === null ? (Wt = new Set([this])) : Wt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Gc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $v();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = ny.bind(null, e, t, n)), t.then(e, e));
}
function Xc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Kc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xt(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Uv = At.ReactCurrentOwner,
  Me = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? ap(t, null, n, r) : ir(t, e.child, n, r);
}
function Qc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Jn(t, i),
    (r = uu(e, t, n, r, o, i)),
    (n = cu()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (Z && n && Za(t), (t.flags |= 1), Pe(e, t, r, i), t.child)
  );
}
function Zc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !wu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), jp(e, t, o, r, i))
      : ((e = mo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : li), n(s, r) && e.ref === t.ref)
    )
      return Tt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Gt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (li(o, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), Tt(e, t, i);
  }
  return Zl(e, t, n, r, i);
}
function Lp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(Hn, Ve),
        (Ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(Hn, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        W(Hn, Ve),
        (Ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(Hn, Ve),
      (Ve |= r);
  return Pe(e, t, i, n), t.child;
}
function Vp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zl(e, t, n, r, i) {
  var o = _e(n) ? Cn : we.current;
  return (
    (o = nr(t, o)),
    Jn(t, i),
    (n = uu(e, t, n, r, o, i)),
    (r = cu()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (Z && r && Za(t), (t.flags |= 1), Pe(e, t, n, i), t.child)
  );
}
function qc(e, t, n, r, i) {
  if (_e(n)) {
    var o = !0;
    Vo(t);
  } else o = !1;
  if ((Jn(t, i), t.stateNode === null))
    fo(e, t), sp(t, n, r), Kl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ye(u))
      : ((u = _e(n) ? Cn : we.current), (u = nr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Uc(t, s, r, u)),
      (Nt = !1);
    var d = t.memoizedState;
    (s.state = d),
      zo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || be.current || Nt
        ? (typeof c == "function" && (Xl(t, n, c, r), (a = t.memoizedState)),
          (l = Nt || $c(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      ip(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Qe(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ye(a))
        : ((a = _e(n) ? Cn : we.current), (a = nr(t, a)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && Uc(t, s, r, a)),
      (Nt = !1),
      (d = t.memoizedState),
      (s.state = d),
      zo(t, r, s, i);
    var v = t.memoizedState;
    l !== f || d !== v || be.current || Nt
      ? (typeof m == "function" && (Xl(t, n, m, r), (v = t.memoizedState)),
        (u = Nt || $c(t, n, u, r, d, v, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ql(e, t, n, r, o, i);
}
function ql(e, t, n, r, i, o) {
  Vp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Rc(t, n, !1), Tt(e, t, o);
  (r = t.stateNode), (Uv.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ir(t, e.child, null, o)), (t.child = ir(t, null, l, o)))
      : Pe(e, t, l, o),
    (t.memoizedState = r.state),
    i && Rc(t, n, !0),
    t.child
  );
}
function Np(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Dc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Dc(e, t.context, !1),
    ou(e, t.containerInfo);
}
function Jc(e, t, n, r, i) {
  return rr(), Ja(i), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ea(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Op(e, t, n) {
  var r = t.pendingProps,
    i = q.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    W(q, i & 1),
    e === null)
  )
    return (
      Yl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = ys(s, r, 0, null)),
              (e = xn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ea(n)),
              (t.memoizedState = Jl),
              e)
            : hu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Hv(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Gt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Gt(l, o)) : ((o = xn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ea(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Gt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function hu(e, t) {
  return (
    (t = ys({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wi(e, t, n, r) {
  return (
    r !== null && Ja(r),
    ir(t, e.child, null, n),
    (e = hu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Hv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = el(Error(E(422)))), Wi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = ys({ mode: "visible", children: r.children }, i, 0, null)),
        (o = xn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ir(t, e.child, null, s),
        (t.child.memoizedState = ea(s)),
        (t.memoizedState = Jl),
        o);
  if (!(t.mode & 1)) return Wi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(E(419))), (r = el(o, r, void 0)), Wi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Me || l)) {
    if (((r = de), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), kt(e, i), nt(r, e, i, -1));
    }
    return xu(), (r = el(Error(E(421)))), Wi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ry.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ne = Ut(i.nextSibling)),
      (Oe = t),
      (Z = !0),
      (qe = null),
      e !== null &&
        (($e[Ue++] = gt),
        ($e[Ue++] = vt),
        ($e[Ue++] = Pn),
        (gt = e.id),
        (vt = e.overflow),
        (Pn = t)),
      (t = hu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ef(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gl(e.return, t, n);
}
function tl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Dp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Pe(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ef(e, n, t);
        else if (e.tag === 19) ef(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Io(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          tl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Io(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        tl(t, !0, n, null, o);
        break;
      case "together":
        tl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wv(e, t, n) {
  switch (t.tag) {
    case 3:
      Np(t), rr();
      break;
    case 5:
      up(t);
      break;
    case 1:
      _e(t.type) && Vo(t);
      break;
    case 4:
      ou(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      W(Do, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Op(e, t, n)
          : (W(q, q.current & 1),
            (e = Tt(e, t, n)),
            e !== null ? e.sibling : null);
      W(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        W(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Lp(e, t, n);
  }
  return Tt(e, t, n);
}
var Rp, ta, zp, Ip;
Rp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ta = function () {};
zp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), pn(ft.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Pl(e, i)), (r = Pl(e, r)), (o = []);
        break;
      case "select":
        (i = te({}, i, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Tl(e, i)), (r = Tl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = jo);
    }
    Ml(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ei.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ei.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && X("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ip = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Yv(e, t, n) {
  var r = t.pendingProps;
  switch ((qa(t), t.tag)) {
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
      return ve(t), null;
    case 1:
      return _e(t.type) && Lo(), ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        or(),
        K(be),
        K(we),
        lu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ui(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (ua(qe), (qe = null)))),
        ta(e, t),
        ve(t),
        null
      );
    case 5:
      su(t);
      var i = pn(di.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        zp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ve(t), null;
        }
        if (((e = pn(ft.current)), Ui(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ut] = t), (r[ci] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Lr.length; i++) X(Lr[i], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              uc(r, o), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              fc(r, o), X("invalid", r);
          }
          Ml(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      $i(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      $i(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : ei.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              Ni(r), cc(r, o, !0);
              break;
            case "textarea":
              Ni(r), dc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = jo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = dh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ut] = t),
            (e[ci] = r),
            Rp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = bl(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Lr.length; i++) X(Lr[i], e);
                i = r;
                break;
              case "source":
                X("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (i = r);
                break;
              case "details":
                X("toggle", e), (i = r);
                break;
              case "input":
                uc(e, r), (i = Pl(e, r)), X("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = te({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                fc(e, r), (i = Tl(e, r)), X("invalid", e);
                break;
              default:
                i = r;
            }
            Ml(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? mh(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && hh(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ti(e, a)
                    : typeof a == "number" && ti(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ei.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && X("scroll", e)
                      : a != null && Ra(e, o, a, s));
              }
            switch (n) {
              case "input":
                Ni(e), cc(e, r, !1);
                break;
              case "textarea":
                Ni(e), dc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Kn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = jo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) Ip(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = pn(di.current)), pn(ft.current), Ui(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (o = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                $i(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $i(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        (K(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Ne !== null && t.mode & 1 && !(t.flags & 128))
          np(), rr(), (t.flags |= 98560), (o = !1);
        else if (((o = Ui(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(E(317));
            o[ut] = t;
          } else
            rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (o = !1);
        } else qe !== null && (ua(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ue === 0 && (ue = 3) : xu())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        or(), ta(e, t), e === null && ai(t.stateNode.containerInfo), ve(t), null
      );
    case 10:
      return nu(t.type._context), ve(t), null;
    case 17:
      return _e(t.type) && Lo(), ve(t), null;
    case 19:
      if ((K(q), (o = t.memoizedState), o === null)) return ve(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Sr(o, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Io(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Sr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ie() > lr &&
            ((t.flags |= 128), (r = !0), Sr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Io(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Z)
            )
              return ve(t), null;
          } else
            2 * ie() - o.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ie()),
          (t.sibling = null),
          (n = q.current),
          W(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        yu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ve & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Gv(e, t) {
  switch ((qa(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && Lo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        or(),
        K(be),
        K(we),
        lu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return su(t), null;
    case 13:
      if ((K(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(q), null;
    case 4:
      return or(), null;
    case 10:
      return nu(t.type._context), null;
    case 22:
    case 23:
      return yu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yi = !1,
  xe = !1,
  Xv = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function na(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var tf = !1;
function Kv(e, t) {
  if (((Il = Mo), (e = Uh()), Qa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fl = { focusedElem: e, selectionRange: n }, Mo = !1, b = t; b !== null; )
    if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (b = e);
    else
      for (; b !== null; ) {
        t = b;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    C = v.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Qe(t.type, y),
                      C
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (w) {
          ne(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (b = e);
          break;
        }
        b = t.return;
      }
  return (v = tf), (tf = !1), v;
}
function Hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && na(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function gs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ra(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Fp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Fp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[ci], delete t[Ul], delete t[jv], delete t[Lv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Bp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function nf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = jo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling);
}
function oa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oa(e, t, n), e = e.sibling; e !== null; ) oa(e, t, n), (e = e.sibling);
}
var he = null,
  Ze = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) $p(e, t, n), (n = n.sibling);
}
function $p(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(as, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || Un(n, t);
    case 6:
      var r = he,
        i = Ze;
      (he = null),
        Mt(e, t, n),
        (he = r),
        (Ze = i),
        he !== null &&
          (Ze
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (Ze
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xs(e.parentNode, n)
              : e.nodeType === 1 && Xs(e, n),
            oi(e))
          : Xs(he, n.stateNode));
      break;
    case 4:
      (r = he),
        (i = Ze),
        (he = n.stateNode.containerInfo),
        (Ze = !0),
        Mt(e, t, n),
        (he = r),
        (Ze = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && na(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (Un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ne(n, t, l);
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), Mt(e, t, n), (xe = r))
        : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function rf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xv()),
      t.forEach(function (r) {
        var i = iy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (he = l.stateNode), (Ze = !1);
              break e;
            case 3:
              (he = l.stateNode.containerInfo), (Ze = !0);
              break e;
            case 4:
              (he = l.stateNode.containerInfo), (Ze = !0);
              break e;
          }
          l = l.return;
        }
        if (he === null) throw Error(E(160));
        $p(o, s, i), (he = null), (Ze = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        ne(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Up(t, e), (t = t.sibling);
}
function Up(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), lt(e), r & 4)) {
        try {
          Hr(3, e, e.return), gs(3, e);
        } catch (y) {
          ne(e, e.return, y);
        }
        try {
          Hr(5, e, e.return);
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 1:
      Ke(t, e), lt(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        lt(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ti(i, "");
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && ch(i, o),
              bl(l, s);
            var u = bl(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? mh(i, f)
                : c === "dangerouslySetInnerHTML"
                ? hh(i, f)
                : c === "children"
                ? ti(i, f)
                : Ra(i, c, f, u);
            }
            switch (l) {
              case "input":
                El(i, o);
                break;
              case "textarea":
                fh(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? Kn(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Kn(i, !!o.multiple, o.defaultValue, !0)
                      : Kn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ci] = o;
          } catch (y) {
            ne(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          oi(t.containerInfo);
        } catch (y) {
          ne(e, e.return, y);
        }
      break;
    case 4:
      Ke(t, e), lt(e);
      break;
    case 13:
      Ke(t, e),
        lt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (gu = ie())),
        r & 4 && rf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (u = xe) || c), Ke(t, e), (xe = u)) : Ke(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (b = e, c = e.child; c !== null; ) {
            for (f = b = c; b !== null; ) {
              switch (((d = b), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hr(4, d, d.return);
                  break;
                case 1:
                  Un(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      ne(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Un(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    sf(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (b = m)) : sf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = ph("display", s)));
              } catch (y) {
                ne(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                ne(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), lt(e), r & 4 && rf(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ti(i, ""), (r.flags &= -33));
          var o = nf(e);
          oa(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = nf(e);
          ia(e, l, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qv(e, t, n) {
  (b = e), Hp(e);
}
function Hp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; b !== null; ) {
    var i = b,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Yi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || xe;
        l = Yi;
        var u = xe;
        if (((Yi = s), (xe = a) && !u))
          for (b = i; b !== null; )
            (s = b),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? lf(i)
                : a !== null
                ? ((a.return = s), (b = a))
                : lf(i);
        for (; o !== null; ) (b = o), Hp(o), (o = o.sibling);
        (b = i), (Yi = l), (xe = u);
      }
      of(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (b = o)) : of(e);
  }
}
function of(e) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || gs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Bc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && oi(f);
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
              throw Error(E(163));
          }
        xe || (t.flags & 512 && ra(t));
      } catch (d) {
        ne(t, t.return, d);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function sf(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function lf(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gs(4, t);
          } catch (a) {
            ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ne(t, i, a);
            }
          }
          var o = t.return;
          try {
            ra(t);
          } catch (a) {
            ne(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ra(t);
          } catch (a) {
            ne(t, s, a);
          }
      }
    } catch (a) {
      ne(t, t.return, a);
    }
    if (t === e) {
      b = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (b = l);
      break;
    }
    b = t.return;
  }
}
var Zv = Math.ceil,
  $o = At.ReactCurrentDispatcher,
  pu = At.ReactCurrentOwner,
  We = At.ReactCurrentBatchConfig,
  I = 0,
  de = null,
  le = null,
  pe = 0,
  Ve = 0,
  Hn = en(0),
  ue = 0,
  gi = null,
  kn = 0,
  vs = 0,
  mu = 0,
  Wr = null,
  Ae = null,
  gu = 0,
  lr = 1 / 0,
  pt = null,
  Uo = !1,
  sa = null,
  Wt = null,
  Gi = !1,
  It = null,
  Ho = 0,
  Yr = 0,
  la = null,
  ho = -1,
  po = 0;
function Ee() {
  return I & 6 ? ie() : ho !== -1 ? ho : (ho = ie());
}
function Yt(e) {
  return e.mode & 1
    ? I & 2 && pe !== 0
      ? pe & -pe
      : Nv.transition !== null
      ? (po === 0 && (po = Ah()), po)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nh(e.type))),
        e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < Yr) throw ((Yr = 0), (la = null), Error(E(185)));
  Si(e, n, r),
    (!(I & 2) || e !== de) &&
      (e === de && (!(I & 2) && (vs |= n), ue === 4 && Rt(e, pe)),
      je(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((lr = ie() + 500), hs && tn()));
}
function je(e, t) {
  var n = e.callbackNode;
  Ng(e, t);
  var r = Ao(e, e === de ? pe : 0);
  if (r === 0)
    n !== null && mc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && mc(n), t === 1))
      e.tag === 0 ? Vv(af.bind(null, e)) : Jh(af.bind(null, e)),
        bv(function () {
          !(I & 6) && tn();
        }),
        (n = null);
    else {
      switch (Mh(r)) {
        case 1:
          n = $a;
          break;
        case 4:
          n = kh;
          break;
        case 16:
          n = To;
          break;
        case 536870912:
          n = Th;
          break;
        default:
          n = To;
      }
      n = qp(n, Wp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wp(e, t) {
  if (((ho = -1), (po = 0), I & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (er() && e.callbackNode !== n) return null;
  var r = Ao(e, e === de ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wo(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = Gp();
    (de !== e || pe !== t) && ((pt = null), (lr = ie() + 500), yn(e, t));
    do
      try {
        ey();
        break;
      } catch (l) {
        Yp(e, l);
      }
    while (!0);
    tu(),
      ($o.current = o),
      (I = i),
      le !== null ? (t = 0) : ((de = null), (pe = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Nl(e)), i !== 0 && ((r = i), (t = aa(e, i)))), t === 1)
    )
      throw ((n = gi), yn(e, 0), Rt(e, r), je(e, ie()), n);
    if (t === 6) Rt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !qv(i) &&
          ((t = Wo(e, r)),
          t === 2 && ((o = Nl(e)), o !== 0 && ((r = o), (t = aa(e, o)))),
          t === 1))
      )
        throw ((n = gi), yn(e, 0), Rt(e, r), je(e, ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          un(e, Ae, pt);
          break;
        case 3:
          if (
            (Rt(e, r), (r & 130023424) === r && ((t = gu + 500 - ie()), 10 < t))
          ) {
            if (Ao(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = $l(un.bind(null, e, Ae, pt), t);
            break;
          }
          un(e, Ae, pt);
          break;
        case 4:
          if ((Rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - tt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Zv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $l(un.bind(null, e, Ae, pt), r);
            break;
          }
          un(e, Ae, pt);
          break;
        case 5:
          un(e, Ae, pt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return je(e, ie()), e.callbackNode === n ? Wp.bind(null, e) : null;
}
function aa(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    (e = Wo(e, t)),
    e !== 2 && ((t = Ae), (Ae = n), t !== null && ua(t)),
    e
  );
}
function ua(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function qv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!rt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Rt(e, t) {
  for (
    t &= ~mu,
      t &= ~vs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function af(e) {
  if (I & 6) throw Error(E(327));
  er();
  var t = Ao(e, 0);
  if (!(t & 1)) return je(e, ie()), null;
  var n = Wo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Nl(e);
    r !== 0 && ((t = r), (n = aa(e, r)));
  }
  if (n === 1) throw ((n = gi), yn(e, 0), Rt(e, t), je(e, ie()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, Ae, pt),
    je(e, ie()),
    null
  );
}
function vu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((lr = ie() + 500), hs && tn());
  }
}
function Tn(e) {
  It !== null && It.tag === 0 && !(I & 6) && er();
  var t = I;
  I |= 1;
  var n = We.transition,
    r = B;
  try {
    if (((We.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (We.transition = n), (I = t), !(I & 6) && tn();
  }
}
function yu() {
  (Ve = Hn.current), K(Hn);
}
function yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Mv(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((qa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Lo();
          break;
        case 3:
          or(), K(be), K(we), lu();
          break;
        case 5:
          su(r);
          break;
        case 4:
          or();
          break;
        case 13:
          K(q);
          break;
        case 19:
          K(q);
          break;
        case 10:
          nu(r.type._context);
          break;
        case 22:
        case 23:
          yu();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (le = e = Gt(e.current, null)),
    (pe = Ve = t),
    (ue = 0),
    (gi = null),
    (mu = vs = kn = 0),
    (Ae = Wr = null),
    hn !== null)
  ) {
    for (t = 0; t < hn.length; t++)
      if (((n = hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    hn = null;
  }
  return e;
}
function Yp(e, t) {
  do {
    var n = le;
    try {
      if ((tu(), (uo.current = Bo), Fo)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Fo = !1;
      }
      if (
        ((En = 0),
        (fe = ae = ee = null),
        (Ur = !1),
        (hi = 0),
        (pu.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (gi = t), (le = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = pe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Xc(s);
          if (m !== null) {
            (m.flags &= -257),
              Kc(m, s, l, o, t),
              m.mode & 1 && Gc(o, u, t),
              (t = m),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Gc(o, u, t), xu();
              break e;
            }
            a = Error(E(426));
          }
        } else if (Z && l.mode & 1) {
          var C = Xc(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Kc(C, s, l, o, t),
              Ja(sr(a, l));
            break e;
          }
        }
        (o = a = sr(a, l)),
          ue !== 4 && (ue = 2),
          Wr === null ? (Wr = [o]) : Wr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = bp(o, a, t);
              Fc(o, g);
              break e;
            case 1:
              l = a;
              var h = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Wt === null || !Wt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = _p(o, l, t);
                Fc(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Kp(n);
    } catch (S) {
      (t = S), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Gp() {
  var e = $o.current;
  return ($o.current = Bo), e === null ? Bo : e;
}
function xu() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    de === null || (!(kn & 268435455) && !(vs & 268435455)) || Rt(de, pe);
}
function Wo(e, t) {
  var n = I;
  I |= 2;
  var r = Gp();
  (de !== e || pe !== t) && ((pt = null), yn(e, t));
  do
    try {
      Jv();
      break;
    } catch (i) {
      Yp(e, i);
    }
  while (!0);
  if ((tu(), (I = n), ($o.current = r), le !== null)) throw Error(E(261));
  return (de = null), (pe = 0), ue;
}
function Jv() {
  for (; le !== null; ) Xp(le);
}
function ey() {
  for (; le !== null && !kg(); ) Xp(le);
}
function Xp(e) {
  var t = Zp(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Kp(e) : (le = t),
    (pu.current = null);
}
function Kp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gv(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (le = null);
        return;
      }
    } else if (((n = Yv(n, t, Ve)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function un(e, t, n) {
  var r = B,
    i = We.transition;
  try {
    (We.transition = null), (B = 1), ty(e, t, n, r);
  } finally {
    (We.transition = i), (B = r);
  }
  return null;
}
function ty(e, t, n, r) {
  do er();
  while (It !== null);
  if (I & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Og(e, o),
    e === de && ((le = de = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gi ||
      ((Gi = !0),
      qp(To, function () {
        return er(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = We.transition), (We.transition = null);
    var s = B;
    B = 1;
    var l = I;
    (I |= 4),
      (pu.current = null),
      Kv(e, n),
      Up(n, e),
      Sv(Fl),
      (Mo = !!Il),
      (Fl = Il = null),
      (e.current = n),
      Qv(n),
      Tg(),
      (I = l),
      (B = s),
      (We.transition = o);
  } else e.current = n;
  if (
    (Gi && ((Gi = !1), (It = e), (Ho = i)),
    (o = e.pendingLanes),
    o === 0 && (Wt = null),
    bg(n.stateNode),
    je(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Uo) throw ((Uo = !1), (e = sa), (sa = null), e);
  return (
    Ho & 1 && e.tag !== 0 && er(),
    (o = e.pendingLanes),
    o & 1 ? (e === la ? Yr++ : ((Yr = 0), (la = e))) : (Yr = 0),
    tn(),
    null
  );
}
function er() {
  if (It !== null) {
    var e = Mh(Ho),
      t = We.transition,
      n = B;
    try {
      if (((We.transition = null), (B = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (Ho = 0), I & 6)) throw Error(E(331));
        var i = I;
        for (I |= 4, b = e.current; b !== null; ) {
          var o = b,
            s = o.child;
          if (b.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (b = u; b !== null; ) {
                  var c = b;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (b = f);
                  else
                    for (; b !== null; ) {
                      c = b;
                      var d = c.sibling,
                        m = c.return;
                      if ((Fp(c), c === u)) {
                        b = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (b = d);
                        break;
                      }
                      b = m;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var C = y.sibling;
                    (y.sibling = null), (y = C);
                  } while (y !== null);
                }
              }
              b = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (b = s);
          else
            e: for (; b !== null; ) {
              if (((o = b), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hr(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (b = g);
                break e;
              }
              b = o.return;
            }
        }
        var h = e.current;
        for (b = h; b !== null; ) {
          s = b;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (b = p);
          else
            e: for (s = h; b !== null; ) {
              if (((l = b), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gs(9, l);
                  }
                } catch (S) {
                  ne(l, l.return, S);
                }
              if (l === s) {
                b = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (b = w);
                break e;
              }
              b = l.return;
            }
        }
        if (
          ((I = i), tn(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(as, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (We.transition = t);
    }
  }
  return !1;
}
function uf(e, t, n) {
  (t = sr(n, t)),
    (t = bp(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Ee()),
    e !== null && (Si(e, 1, t), je(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) uf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        uf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Wt === null || !Wt.has(r)))
        ) {
          (e = sr(n, e)),
            (e = _p(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Ee()),
            t !== null && (Si(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ny(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (pe & n) === n &&
      (ue === 4 || (ue === 3 && (pe & 130023424) === pe && 500 > ie() - gu)
        ? yn(e, 0)
        : (mu |= n)),
    je(e, t);
}
function Qp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ri), (Ri <<= 1), !(Ri & 130023424) && (Ri = 4194304))
      : (t = 1));
  var n = Ee();
  (e = kt(e, t)), e !== null && (Si(e, t, n), je(e, n));
}
function ry(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Qp(e, n);
}
function iy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Qp(e, n);
}
var Zp;
Zp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || be.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), Wv(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), Z && t.flags & 1048576 && ep(t, Oo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fo(e, t), (e = t.pendingProps);
      var i = nr(t, we.current);
      Jn(t, n), (i = uu(null, t, r, e, i, n));
      var o = cu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((o = !0), Vo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            iu(t),
            (i.updater = ps),
            (t.stateNode = i),
            (i._reactInternals = t),
            Kl(t, r, e, n),
            (t = ql(null, t, r, !0, o, n)))
          : ((t.tag = 0), Z && o && Za(t), Pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = sy(r)),
          (e = Qe(r, e)),
          i)
        ) {
          case 0:
            t = Zl(null, t, r, e, n);
            break e;
          case 1:
            t = qc(null, t, r, e, n);
            break e;
          case 11:
            t = Qc(null, t, r, e, n);
            break e;
          case 14:
            t = Zc(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Zl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        qc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Np(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          ip(e, t),
          zo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = sr(Error(E(423)), t)), (t = Jc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = sr(Error(E(424)), t)), (t = Jc(e, t, r, n, i));
            break e;
          } else
            for (
              Ne = Ut(t.stateNode.containerInfo.firstChild),
                Oe = t,
                Z = !0,
                qe = null,
                n = ap(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rr(), r === i)) {
            t = Tt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        up(t),
        e === null && Yl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Bl(r, i) ? (s = null) : o !== null && Bl(r, o) && (t.flags |= 32),
        Vp(e, t),
        Pe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Yl(t), null;
    case 13:
      return Op(e, t, n);
    case 4:
      return (
        ou(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ir(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Qc(e, t, r, i, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          W(Do, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (rt(o.value, s)) {
            if (o.children === i.children && !be.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = xt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Gl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(E(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Gl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (i = Ye(i)),
        (r = r(i)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Qe(r, t.pendingProps)),
        (i = Qe(r.type, i)),
        Zc(e, t, r, i, n)
      );
    case 15:
      return jp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        fo(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), Vo(t)) : (e = !1),
        Jn(t, n),
        sp(t, r, i),
        Kl(t, r, i, n),
        ql(null, t, r, !0, e, n)
      );
    case 19:
      return Dp(e, t, n);
    case 22:
      return Lp(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function qp(e, t) {
  return Eh(e, t);
}
function oy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function He(e, t, n, r) {
  return new oy(e, t, n, r);
}
function wu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sy(e) {
  if (typeof e == "function") return wu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ia)) return 11;
    if (e === Fa) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function mo(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) wu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Nn:
        return xn(n.children, i, o, t);
      case za:
        (s = 8), (i |= 8);
        break;
      case xl:
        return (
          (e = He(12, n, t, i | 2)), (e.elementType = xl), (e.lanes = o), e
        );
      case wl:
        return (e = He(13, n, t, i)), (e.elementType = wl), (e.lanes = o), e;
      case Sl:
        return (e = He(19, n, t, i)), (e.elementType = Sl), (e.lanes = o), e;
      case lh:
        return ys(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case oh:
              s = 10;
              break e;
            case sh:
              s = 9;
              break e;
            case Ia:
              s = 11;
              break e;
            case Fa:
              s = 14;
              break e;
            case Vt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = He(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function xn(e, t, n, r) {
  return (e = He(7, e, r, t)), (e.lanes = n), e;
}
function ys(e, t, n, r) {
  return (
    (e = He(22, e, r, t)),
    (e.elementType = lh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function nl(e, t, n) {
  return (e = He(6, e, null, t)), (e.lanes = n), e;
}
function rl(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ly(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Rs(0)),
    (this.expirationTimes = Rs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Rs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Su(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new ly(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = He(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    iu(o),
    e
  );
}
function ay(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jp(e) {
  if (!e) return Qt;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return qh(e, n, t);
  }
  return t;
}
function em(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Su(n, r, !0, e, i, o, s, l, a)),
    (e.context = Jp(null)),
    (n = e.current),
    (r = Ee()),
    (i = Yt(n)),
    (o = xt(r, i)),
    (o.callback = t ?? null),
    Ht(n, o, i),
    (e.current.lanes = i),
    Si(e, i, r),
    je(e, r),
    e
  );
}
function xs(e, t, n, r) {
  var i = t.current,
    o = Ee(),
    s = Yt(i);
  return (
    (n = Jp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(i, t, s)),
    e !== null && (nt(e, i, s, o), ao(e, i, s)),
    s
  );
}
function Yo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Cu(e, t) {
  cf(e, t), (e = e.alternate) && cf(e, t);
}
function uy() {
  return null;
}
var tm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Pu(e) {
  this._internalRoot = e;
}
ws.prototype.render = Pu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  xs(e, t, null, null);
};
ws.prototype.unmount = Pu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function () {
      xs(null, e, null, null);
    }),
      (t[Et] = null);
  }
};
function ws(e) {
  this._internalRoot = e;
}
ws.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = jh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && Vh(e);
  }
};
function Eu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ss(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ff() {}
function cy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Yo(s);
        o.call(u);
      };
    }
    var s = em(t, r, e, 0, null, !1, !1, "", ff);
    return (
      (e._reactRootContainer = s),
      (e[Et] = s.current),
      ai(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Yo(a);
      l.call(u);
    };
  }
  var a = Su(e, 0, !1, null, null, !1, !1, "", ff);
  return (
    (e._reactRootContainer = a),
    (e[Et] = a.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      xs(t, a, n, r);
    }),
    a
  );
}
function Cs(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Yo(s);
        l.call(a);
      };
    }
    xs(t, s, e, i);
  } else s = cy(n, t, e, i, r);
  return Yo(s);
}
bh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 &&
          (Ua(t, n | 1), je(t, ie()), !(I & 6) && ((lr = ie() + 500), tn()));
      }
      break;
    case 13:
      Tn(function () {
        var r = kt(e, 1);
        if (r !== null) {
          var i = Ee();
          nt(r, e, 1, i);
        }
      }),
        Cu(e, 1);
  }
};
Ha = function (e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      nt(t, e, 134217728, n);
    }
    Cu(e, 134217728);
  }
};
_h = function (e) {
  if (e.tag === 13) {
    var t = Yt(e),
      n = kt(e, t);
    if (n !== null) {
      var r = Ee();
      nt(n, e, t, r);
    }
    Cu(e, t);
  }
};
jh = function () {
  return B;
};
Lh = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
jl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((El(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ds(r);
            if (!i) throw Error(E(90));
            uh(r), El(r, i);
          }
        }
      }
      break;
    case "textarea":
      fh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
  }
};
yh = vu;
xh = Tn;
var fy = { usingClientEntryPoint: !1, Events: [Pi, zn, ds, gh, vh, vu] },
  Cr = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  dy = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ch(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || uy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xi.isDisabled && Xi.supportsFiber)
    try {
      (as = Xi.inject(dy)), (ct = Xi);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Eu(t)) throw Error(E(200));
  return ay(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!Eu(e)) throw Error(E(299));
  var n = !1,
    r = "",
    i = tm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Su(e, 1, !1, null, null, n, !1, r, i)),
    (e[Et] = t.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    new Pu(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Ch(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return Tn(e);
};
ze.hydrate = function (e, t, n) {
  if (!Ss(t)) throw Error(E(200));
  return Cs(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!Eu(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = tm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = em(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Et] = t.current),
    ai(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ws(t);
};
ze.render = function (e, t, n) {
  if (!Ss(t)) throw Error(E(200));
  return Cs(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!Ss(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Tn(function () {
        Cs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Et] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = vu;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ss(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Cs(e, t, n, !1, r);
};
ze.version = "18.2.0-next-9e3b772b8-20220608";
function nm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nm);
    } catch (e) {
      console.error(e);
    }
}
nm(), (eh.exports = ze);
var hy = eh.exports,
  df = hy;
(vl.createRoot = df.createRoot), (vl.hydrateRoot = df.hydrateRoot);
function rm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = rm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function py() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = rm(e)) && (r && (r += " "), (r += t));
  return r;
}
const ku = "-";
function my(e) {
  const t = vy(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function i(s) {
    const l = s.split(ku);
    return l[0] === "" && l.length !== 1 && l.shift(), im(l, t) || gy(s);
  }
  function o(s, l) {
    const a = n[s] || [];
    return l && r[s] ? [...a, ...r[s]] : a;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: o };
}
function im(e, t) {
  var s;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    i = r ? im(e.slice(1), r) : void 0;
  if (i) return i;
  if (t.validators.length === 0) return;
  const o = e.join(ku);
  return (s = t.validators.find(({ validator: l }) => l(o))) == null
    ? void 0
    : s.classGroupId;
}
const hf = /^\[(.+)\]$/;
function gy(e) {
  if (hf.test(e)) {
    const t = hf.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function vy(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    xy(Object.entries(e.classGroups), n).forEach(([o, s]) => {
      ca(s, r, o, t);
    }),
    r
  );
}
function ca(e, t, n, r) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : pf(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (yy(i)) {
        ca(i(r), t, n, r);
        return;
      }
      t.validators.push({ validator: i, classGroupId: n });
      return;
    }
    Object.entries(i).forEach(([o, s]) => {
      ca(s, pf(t, o), n, r);
    });
  });
}
function pf(e, t) {
  let n = e;
  return (
    t.split(ku).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function yy(e) {
  return e.isThemeGetter;
}
function xy(e, t) {
  return t
    ? e.map(([n, r]) => {
        const i = r.map((o) =>
          typeof o == "string"
            ? t + o
            : typeof o == "object"
            ? Object.fromEntries(Object.entries(o).map(([s, l]) => [t + s, l]))
            : o
        );
        return [n, i];
      })
    : e;
}
function wy(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function i(o, s) {
    n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(o) {
      let s = n.get(o);
      if (s !== void 0) return s;
      if ((s = r.get(o)) !== void 0) return i(o, s), s;
    },
    set(o, s) {
      n.has(o) ? n.set(o, s) : i(o, s);
    },
  };
}
const om = "!";
function Sy(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    i = t.length;
  return function (s) {
    const l = [];
    let a = 0,
      u = 0,
      c;
    for (let y = 0; y < s.length; y++) {
      let C = s[y];
      if (a === 0) {
        if (C === r && (n || s.slice(y, y + i) === t)) {
          l.push(s.slice(u, y)), (u = y + i);
          continue;
        }
        if (C === "/") {
          c = y;
          continue;
        }
      }
      C === "[" ? a++ : C === "]" && a--;
    }
    const f = l.length === 0 ? s : s.substring(u),
      d = f.startsWith(om),
      m = d ? f.substring(1) : f,
      v = c && c > u ? c - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: d,
      baseClassName: m,
      maybePostfixModifierPosition: v,
    };
  };
}
function Cy(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function Py(e) {
  return { cache: wy(e.cacheSize), splitModifiers: Sy(e), ...my(e) };
}
const Ey = /\s+/;
function ky(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: i,
    } = t,
    o = new Set();
  return e
    .trim()
    .split(Ey)
    .map((s) => {
      const {
        modifiers: l,
        hasImportantModifier: a,
        baseClassName: u,
        maybePostfixModifierPosition: c,
      } = n(s);
      let f = r(c ? u.substring(0, c) : u),
        d = !!c;
      if (!f) {
        if (!c) return { isTailwindClass: !1, originalClassName: s };
        if (((f = r(u)), !f))
          return { isTailwindClass: !1, originalClassName: s };
        d = !1;
      }
      const m = Cy(l).join(":");
      return {
        isTailwindClass: !0,
        modifierId: a ? m + om : m,
        classGroupId: f,
        originalClassName: s,
        hasPostfixModifier: d,
      };
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0;
      const { modifierId: l, classGroupId: a, hasPostfixModifier: u } = s,
        c = l + a;
      return o.has(c)
        ? !1
        : (o.add(c), i(a, u).forEach((f) => o.add(l + f)), !0);
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(" ");
}
function Ty() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = sm(t)) && (r && (r += " "), (r += n));
  return r;
}
function sm(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = sm(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function Ay(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(a) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = Py(u)), (r = n.cache.get), (i = n.cache.set), (o = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = ky(a, n);
    return i(a, c), c;
  }
  return function () {
    return o(Ty.apply(null, arguments));
  };
}
function G(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const lm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  My = /^\d+\/\d+$/,
  by = new Set(["px", "full", "screen"]),
  _y = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  jy =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ly = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Vy = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ny =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ht(e) {
  return mn(e) || by.has(e) || My.test(e);
}
function bt(e) {
  return hr(e, "length", $y);
}
function mn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ki(e) {
  return hr(e, "number", mn);
}
function Pr(e) {
  return !!e && Number.isInteger(Number(e));
}
function Oy(e) {
  return e.endsWith("%") && mn(e.slice(0, -1));
}
function R(e) {
  return lm.test(e);
}
function _t(e) {
  return _y.test(e);
}
const Dy = new Set(["length", "size", "percentage"]);
function Ry(e) {
  return hr(e, Dy, am);
}
function zy(e) {
  return hr(e, "position", am);
}
const Iy = new Set(["image", "url"]);
function Fy(e) {
  return hr(e, Iy, Hy);
}
function By(e) {
  return hr(e, "", Uy);
}
function Er() {
  return !0;
}
function hr(e, t, n) {
  const r = lm.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function $y(e) {
  return jy.test(e) && !Ly.test(e);
}
function am() {
  return !1;
}
function Uy(e) {
  return Vy.test(e);
}
function Hy(e) {
  return Ny.test(e);
}
function Wy() {
  const e = G("colors"),
    t = G("spacing"),
    n = G("blur"),
    r = G("brightness"),
    i = G("borderColor"),
    o = G("borderRadius"),
    s = G("borderSpacing"),
    l = G("borderWidth"),
    a = G("contrast"),
    u = G("grayscale"),
    c = G("hueRotate"),
    f = G("invert"),
    d = G("gap"),
    m = G("gradientColorStops"),
    v = G("gradientColorStopPositions"),
    y = G("inset"),
    C = G("margin"),
    g = G("opacity"),
    h = G("padding"),
    p = G("saturate"),
    w = G("scale"),
    S = G("sepia"),
    T = G("skew"),
    k = G("space"),
    P = G("translate"),
    _ = () => ["auto", "contain", "none"],
    L = () => ["auto", "hidden", "clip", "visible", "scroll"],
    Q = () => ["auto", R, t],
    O = () => [R, t],
    se = () => ["", ht, bt],
    Y = () => ["auto", mn, R],
    Xe = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    H = () => ["solid", "dashed", "dotted", "double", "none"],
    Ce = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
      "plus-lighter",
    ],
    M = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    j = () => ["", "0", R],
    D = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    V = () => [mn, Ki],
    F = () => [mn, R];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Er],
      spacing: [ht, bt],
      blur: ["none", "", _t, R],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", _t, R],
      borderSpacing: O(),
      borderWidth: se(),
      contrast: V(),
      grayscale: j(),
      hueRotate: F(),
      invert: j(),
      gap: O(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Oy, bt],
      inset: Q(),
      margin: Q(),
      opacity: V(),
      padding: O(),
      saturate: V(),
      scale: V(),
      sepia: j(),
      skew: F(),
      space: O(),
      translate: O(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", R] }],
      container: ["container"],
      columns: [{ columns: [_t] }],
      "break-after": [{ "break-after": D() }],
      "break-before": [{ "break-before": D() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...Xe(), R] }],
      overflow: [{ overflow: L() }],
      "overflow-x": [{ "overflow-x": L() }],
      "overflow-y": [{ "overflow-y": L() }],
      overscroll: [{ overscroll: _() }],
      "overscroll-x": [{ "overscroll-x": _() }],
      "overscroll-y": [{ "overscroll-y": _() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [y] }],
      "inset-x": [{ "inset-x": [y] }],
      "inset-y": [{ "inset-y": [y] }],
      start: [{ start: [y] }],
      end: [{ end: [y] }],
      top: [{ top: [y] }],
      right: [{ right: [y] }],
      bottom: [{ bottom: [y] }],
      left: [{ left: [y] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Pr, R] }],
      basis: [{ basis: Q() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", R] }],
      grow: [{ grow: j() }],
      shrink: [{ shrink: j() }],
      order: [{ order: ["first", "last", "none", Pr, R] }],
      "grid-cols": [{ "grid-cols": [Er] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Pr, R] }, R] }],
      "col-start": [{ "col-start": Y() }],
      "col-end": [{ "col-end": Y() }],
      "grid-rows": [{ "grid-rows": [Er] }],
      "row-start-end": [{ row: ["auto", { span: [Pr, R] }, R] }],
      "row-start": [{ "row-start": Y() }],
      "row-end": [{ "row-end": Y() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", R] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", R] }],
      gap: [{ gap: [d] }],
      "gap-x": [{ "gap-x": [d] }],
      "gap-y": [{ "gap-y": [d] }],
      "justify-content": [{ justify: ["normal", ...M()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...M(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...M(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [h] }],
      px: [{ px: [h] }],
      py: [{ py: [h] }],
      ps: [{ ps: [h] }],
      pe: [{ pe: [h] }],
      pt: [{ pt: [h] }],
      pr: [{ pr: [h] }],
      pb: [{ pb: [h] }],
      pl: [{ pl: [h] }],
      m: [{ m: [C] }],
      mx: [{ mx: [C] }],
      my: [{ my: [C] }],
      ms: [{ ms: [C] }],
      me: [{ me: [C] }],
      mt: [{ mt: [C] }],
      mr: [{ mr: [C] }],
      mb: [{ mb: [C] }],
      ml: [{ ml: [C] }],
      "space-x": [{ "space-x": [k] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [k] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", R, t] }],
      "min-w": [{ "min-w": [R, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            R,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [_t] },
            _t,
          ],
        },
      ],
      h: [{ h: [R, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [R, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [R, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [R, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", _t, bt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Ki,
          ],
        },
      ],
      "font-family": [{ font: [Er] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            R,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", mn, Ki] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            ht,
            R,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", R] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", R] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [g] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [g] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", ht, bt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", ht, R] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: O() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            R,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", R] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [g] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...Xe(), zy] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Ry] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Fy,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [v] }],
      "gradient-via-pos": [{ via: [v] }],
      "gradient-to-pos": [{ to: [v] }],
      "gradient-from": [{ from: [m] }],
      "gradient-via": [{ via: [m] }],
      "gradient-to": [{ to: [m] }],
      rounded: [{ rounded: [o] }],
      "rounded-s": [{ "rounded-s": [o] }],
      "rounded-e": [{ "rounded-e": [o] }],
      "rounded-t": [{ "rounded-t": [o] }],
      "rounded-r": [{ "rounded-r": [o] }],
      "rounded-b": [{ "rounded-b": [o] }],
      "rounded-l": [{ "rounded-l": [o] }],
      "rounded-ss": [{ "rounded-ss": [o] }],
      "rounded-se": [{ "rounded-se": [o] }],
      "rounded-ee": [{ "rounded-ee": [o] }],
      "rounded-es": [{ "rounded-es": [o] }],
      "rounded-tl": [{ "rounded-tl": [o] }],
      "rounded-tr": [{ "rounded-tr": [o] }],
      "rounded-br": [{ "rounded-br": [o] }],
      "rounded-bl": [{ "rounded-bl": [o] }],
      "border-w": [{ border: [l] }],
      "border-w-x": [{ "border-x": [l] }],
      "border-w-y": [{ "border-y": [l] }],
      "border-w-s": [{ "border-s": [l] }],
      "border-w-e": [{ "border-e": [l] }],
      "border-w-t": [{ "border-t": [l] }],
      "border-w-r": [{ "border-r": [l] }],
      "border-w-b": [{ "border-b": [l] }],
      "border-w-l": [{ "border-l": [l] }],
      "border-opacity": [{ "border-opacity": [g] }],
      "border-style": [{ border: [...H(), "hidden"] }],
      "divide-x": [{ "divide-x": [l] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [l] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [g] }],
      "divide-style": [{ divide: H() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: ["", ...H()] }],
      "outline-offset": [{ "outline-offset": [ht, R] }],
      "outline-w": [{ outline: [ht, bt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: se() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [g] }],
      "ring-offset-w": [{ "ring-offset": [ht, bt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", _t, By] }],
      "shadow-color": [{ shadow: [Er] }],
      opacity: [{ opacity: [g] }],
      "mix-blend": [{ "mix-blend": Ce() }],
      "bg-blend": [{ "bg-blend": Ce() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [a] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", _t, R] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [p] }],
      sepia: [{ sepia: [S] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [a] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [g] }],
      "backdrop-saturate": [{ "backdrop-saturate": [p] }],
      "backdrop-sepia": [{ "backdrop-sepia": [S] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            R,
          ],
        },
      ],
      duration: [{ duration: F() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", R] }],
      delay: [{ delay: F() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", R] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [w] }],
      "scale-x": [{ "scale-x": [w] }],
      "scale-y": [{ "scale-y": [w] }],
      rotate: [{ rotate: [Pr, R] }],
      "translate-x": [{ "translate-x": [P] }],
      "translate-y": [{ "translate-y": [P] }],
      "skew-x": [{ "skew-x": [T] }],
      "skew-y": [{ "skew-y": [T] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            R,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            R,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": O() }],
      "scroll-mx": [{ "scroll-mx": O() }],
      "scroll-my": [{ "scroll-my": O() }],
      "scroll-ms": [{ "scroll-ms": O() }],
      "scroll-me": [{ "scroll-me": O() }],
      "scroll-mt": [{ "scroll-mt": O() }],
      "scroll-mr": [{ "scroll-mr": O() }],
      "scroll-mb": [{ "scroll-mb": O() }],
      "scroll-ml": [{ "scroll-ml": O() }],
      "scroll-p": [{ "scroll-p": O() }],
      "scroll-px": [{ "scroll-px": O() }],
      "scroll-py": [{ "scroll-py": O() }],
      "scroll-ps": [{ "scroll-ps": O() }],
      "scroll-pe": [{ "scroll-pe": O() }],
      "scroll-pt": [{ "scroll-pt": O() }],
      "scroll-pr": [{ "scroll-pr": O() }],
      "scroll-pb": [{ "scroll-pb": O() }],
      "scroll-pl": [{ "scroll-pl": O() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", R] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [ht, bt, Ki] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const Yy = Ay(Wy);
function ki(...e) {
  return Yy(py(e));
}
const Gy = ({ className: e, fill: t }) =>
    x.jsxs("svg", {
      className: ki(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        e
      ),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 3787 2842",
      fill: "none",
      children: [
        x.jsx("g", {
          filter: "url(#filter)",
          children: x.jsx("ellipse", {
            cx: "1924.71",
            cy: "273.501",
            rx: "1924.71",
            ry: "273.501",
            transform:
              "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",
            fill: t || "white",
            fillOpacity: "0.21",
          }),
        }),
        x.jsx("defs", {
          children: x.jsxs("filter", {
            id: "filter",
            x: "0.860352",
            y: "0.838989",
            width: "3785.16",
            height: "2840.26",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              x.jsx("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              x.jsx("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape",
              }),
              x.jsx("feGaussianBlur", {
                stdDeviation: "151",
                result: "effect1_foregroundBlur_1065_8",
              }),
            ],
          }),
        }),
      ],
    }),
  Xy = ({ className: e, fill: t }) =>
    x.jsxs("svg", {
      className: ki(
        " animate-spotlightRight pointer-events-none absolute ml-[200px] z-[1]  h-[169%] w-[138%] right-12 lg:w-[84%] opacity-0 rotate-90",
        e
      ),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 3787 2842",
      fill: "none",
      children: [
        x.jsx("g", {
          filter: "url(#filter)",
          children: x.jsx("ellipse", {
            cx: "1924.71",
            cy: "273.501",
            rx: "1924.71",
            ry: "273.501",
            transform:
              "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",
            fill: t || "white",
            fillOpacity: "0.21",
          }),
        }),
        x.jsx("defs", {
          children: x.jsxs("filter", {
            id: "filter",
            x: "0.860352",
            y: "0.838989",
            width: "3785.16",
            height: "2840.26",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              x.jsx("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix",
              }),
              x.jsx("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape",
              }),
              x.jsx("feGaussianBlur", {
                stdDeviation: "151",
                result: "effect1_foregroundBlur_1065_8",
              }),
            ],
          }),
        }),
      ],
    }),
  Vr = 1e3,
  go = Vr * 60,
  um = go * 60,
  Ky = um * 24;
function Qy(e, t = Vr) {
  const [n, r] = A.useState(new Date(e) - Date.now());
  return (
    A.useEffect(() => {
      const i = setInterval(() => {
        r((o) => o - t);
      }, t);
      return () => {
        clearInterval(i);
      };
    }, [t]),
    A.useEffect(() => {
      r(new Date(e) - Date.now());
    }, [e]),
    {
      days: Math.floor(n / Ky),
      hours: Math.floor((n / um) % 24),
      minutes:
        Math.floor((n / go) % 60) < 10
          ? String(Math.floor((n / go) % 60)).padStart(2, "0")
          : Math.floor((n / go) % 60),
      seconds:
        Math.floor((n / Vr) % 60) < 10
          ? String(Math.floor((n / Vr) % 60)).padStart(2, "0")
          : Math.floor((n / Vr) % 60),
    }
  );
}
var Zy = 4,
  qy = 0.001,
  Jy = 1e-7,
  e1 = 10,
  Nr = 11,
  Qi = 1 / (Nr - 1),
  t1 = typeof Float32Array == "function";
function cm(e, t) {
  return 1 - 3 * t + 3 * e;
}
function fm(e, t) {
  return 3 * t - 6 * e;
}
function dm(e) {
  return 3 * e;
}
function Go(e, t, n) {
  return ((cm(t, n) * e + fm(t, n)) * e + dm(t)) * e;
}
function hm(e, t, n) {
  return 3 * cm(t, n) * e * e + 2 * fm(t, n) * e + dm(t);
}
function n1(e, t, n, r, i) {
  var o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Go(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > Jy && ++l < e1);
  return s;
}
function r1(e, t, n, r) {
  for (var i = 0; i < Zy; ++i) {
    var o = hm(t, n, r);
    if (o === 0) return t;
    var s = Go(t, n, r) - e;
    t -= s / o;
  }
  return t;
}
function i1(e) {
  return e;
}
var o1 = function (t, n, r, i) {
  if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  if (t === n && r === i) return i1;
  for (var o = t1 ? new Float32Array(Nr) : new Array(Nr), s = 0; s < Nr; ++s)
    o[s] = Go(s * Qi, t, r);
  function l(a) {
    for (var u = 0, c = 1, f = Nr - 1; c !== f && o[c] <= a; ++c) u += Qi;
    --c;
    var d = (a - o[c]) / (o[c + 1] - o[c]),
      m = u + d * Qi,
      v = hm(m, t, r);
    return v >= qy ? r1(a, m, t, r) : v === 0 ? m : n1(a, u, u + Qi, t, r);
  }
  return function (u) {
    return u === 0 ? 0 : u === 1 ? 1 : Go(l(u), n, i);
  };
};
const mf = Ud(o1);
var Tu = function (t) {
  (this.startX = t.startX),
    (this.startY = t.startY),
    (this.endX = t.endX),
    (this.endY = t.endY),
    (this.totalX = this.endX - this.startX),
    (this.totalY = this.endY - this.startY),
    (this.startMultiplierX = t.startMultiplierX || 1),
    (this.endMultiplierX = t.endMultiplierX || 1),
    (this.startMultiplierY = t.startMultiplierY || 1),
    (this.endMultiplierY = t.endMultiplierY || 1);
};
function Xt() {
  return (
    (Xt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Xt.apply(this, arguments)
  );
}
var Xo;
(function (e) {
  (e.speed = "speed"),
    (e.translateX = "translateX"),
    (e.translateY = "translateY"),
    (e.rotate = "rotate"),
    (e.rotateX = "rotateX"),
    (e.rotateY = "rotateY"),
    (e.rotateZ = "rotateZ"),
    (e.scale = "scale"),
    (e.scaleX = "scaleX"),
    (e.scaleY = "scaleY"),
    (e.scaleZ = "scaleZ"),
    (e.opacity = "opacity");
})(Xo || (Xo = {}));
var gn;
(function (e) {
  (e.px = "px"), (e["%"] = "%"), (e.vh = "vh"), (e.vw = "vw");
})(gn || (gn = {}));
var Gr;
(function (e) {
  (e.deg = "deg"), (e.turn = "turn"), (e.rad = "rad");
})(Gr || (Gr = {}));
var fa;
(function (e) {
  e[""] = "";
})(fa || (fa = {}));
var it;
(function (e) {
  (e.vertical = "vertical"), (e.horizontal = "horizontal");
})(it || (it = {}));
var gf;
(function (e) {
  (e.ease = "ease"),
    (e.easeIn = "easeIn"),
    (e.easeOut = "easeOut"),
    (e.easeInOut = "easeInOut"),
    (e.easeInQuad = "easeInQuad"),
    (e.easeInCubic = "easeInCubic"),
    (e.easeInQuart = "easeInQuart"),
    (e.easeInQuint = "easeInQuint"),
    (e.easeInSine = "easeInSine"),
    (e.easeInExpo = "easeInExpo"),
    (e.easeInCirc = "easeInCirc"),
    (e.easeOutQuad = "easeOutQuad"),
    (e.easeOutCubic = "easeOutCubic"),
    (e.easeOutQuart = "easeOutQuart"),
    (e.easeOutQuint = "easeOutQuint"),
    (e.easeOutSine = "easeOutSine"),
    (e.easeOutExpo = "easeOutExpo"),
    (e.easeOutCirc = "easeOutCirc"),
    (e.easeInOutQuad = "easeInOutQuad"),
    (e.easeInOutCubic = "easeInOutCubic"),
    (e.easeInOutQuart = "easeInOutQuart"),
    (e.easeInOutQuint = "easeInOutQuint"),
    (e.easeInOutSine = "easeInOutSine"),
    (e.easeInOutExpo = "easeInOutExpo"),
    (e.easeInOutCirc = "easeInOutCirc"),
    (e.easeInBack = "easeInBack"),
    (e.easeOutBack = "easeOutBack"),
    (e.easeInOutBack = "easeInOutBack");
})(gf || (gf = {}));
var vf = 0;
function s1() {
  return ++vf, vf;
}
var l1 = (function () {
    function e(n) {
      var r = n.el.getBoundingClientRect();
      if (n.view.scrollContainer) {
        var i = n.view.scrollContainer.getBoundingClientRect();
        r = Xt({}, r, {
          top: r.top - i.top,
          right: r.right - i.left,
          bottom: r.bottom - i.top,
          left: r.left - i.left,
        });
      }
      (this.height = n.el.offsetHeight),
        (this.width = n.el.offsetWidth),
        (this.left = r.left),
        (this.right = r.right),
        (this.top = r.top),
        (this.bottom = r.bottom),
        n.rootMargin && this._setRectWithRootMargin(n.rootMargin);
    }
    var t = e.prototype;
    return (
      (t._setRectWithRootMargin = function (r) {
        var i = r.top + r.bottom,
          o = r.left + r.right;
        (this.top -= r.top),
          (this.right += r.right),
          (this.bottom += r.bottom),
          (this.left -= r.left),
          (this.height += i),
          (this.width += o);
      }),
      e
    );
  })(),
  a1 = [fa[""], gn.px, gn["%"], gn.vh, gn.vw, Gr.deg, Gr.turn, Gr.rad];
function Zi(e, t) {
  t === void 0 && (t = gn["%"]);
  var n = { value: 0, unit: t };
  if (typeof e > "u") return n;
  var r = typeof e == "number" || typeof e == "string";
  if (!r)
    throw new Error(
      "Invalid value provided. Must provide a value as a string or number"
    );
  (e = String(e)),
    (n.value = parseFloat(e)),
    (n.unit = e.match(/[\d.\-+]*\s*(.*)/)[1] || t);
  var i = a1.includes(n.unit);
  if (!i) throw new Error("Invalid unit provided.");
  return n;
}
var yf = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInOutExpo: [1, 0, 0, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};
function pm(e) {
  if (Array.isArray(e)) return mf(e[0], e[1], e[2], e[3]);
  if (typeof e == "string" && typeof yf[e] < "u") {
    var t = yf[e];
    return mf(t[0], t[1], t[2], t[3]);
  }
}
var u1 = Object.values(Xo),
  c1 = {
    speed: "px",
    translateX: "%",
    translateY: "%",
    rotate: "deg",
    rotateX: "deg",
    rotateY: "deg",
    rotateZ: "deg",
    scale: "",
    scaleX: "",
    scaleY: "",
    scaleZ: "",
    opacity: "",
  };
function xf(e, t) {
  var n = {};
  return (
    u1.forEach(function (r) {
      var i = c1[r];
      if (typeof (e == null ? void 0 : e[r]) == "number") {
        var o = e == null ? void 0 : e[r],
          s = (o || 0) * 10 + "px",
          l = (o || 0) * -10 + "px",
          a = Zi(s),
          u = Zi(l),
          c = { start: a.value, end: u.value, unit: a.unit };
        t === it.vertical && (n.translateY = c),
          t === it.horizontal && (n.translateX = c);
      }
      if (Array.isArray(e == null ? void 0 : e[r])) {
        var f = e == null ? void 0 : e[r];
        if (typeof f[0] < "u" && typeof f[1] < "u") {
          var d = Zi(f == null ? void 0 : f[0], i),
            m = Zi(f == null ? void 0 : f[1], i),
            v = pm(f == null ? void 0 : f[2]);
          if (
            ((n[r] = { start: d.value, end: m.value, unit: d.unit, easing: v }),
            d.unit !== m.unit)
          )
            throw new Error(
              "Must provide matching units for the min and max offset values of each axis."
            );
        }
      }
    }),
    n
  );
}
function wf(e, t, n, r) {
  var i = n - e,
    o = i / t;
  return r && (o = r(o)), o;
}
function f1(e, t, n) {
  var r = n >= e && n <= t;
  return r;
}
function d1(e, t, n, r, i) {
  return ((n - t) * (e - r)) / (i - r) + t;
}
function mm(e, t) {
  var n = d1(
    typeof e.easing == "function" ? e.easing(t) : t,
    (e == null ? void 0 : e.start) || 0,
    (e == null ? void 0 : e.end) || 0,
    0,
    1
  );
  return { value: n, unit: e == null ? void 0 : e.unit };
}
var h1 = Object.values(Xo).filter(function (e) {
  return e !== "opacity";
});
function p1(e, t) {
  var n = Object.keys(t),
    r = n.includes("opacity"),
    i = "transform" + (r ? ",opacity" : "");
  e.style.willChange = i;
}
function m1(e, t, n) {
  if (n) {
    var r = v1(e, t),
      i = g1(e, t);
    (n.style.transform = r), (n.style.opacity = i);
  }
}
function g1(e, t) {
  var n = e.opacity && mm(e.opacity, t);
  if (typeof n > "u" || typeof n.value > "u" || typeof n.unit > "u") return "";
  var r = "" + n.value;
  return r;
}
function v1(e, t) {
  var n = h1.reduce(function (r, i) {
    var o = e[i] && mm(e[i], t);
    if (typeof o > "u" || typeof o.value > "u" || typeof o.unit > "u") return r;
    var s = i + "(" + o.value + o.unit + ")";
    return r + s;
  }, "");
  return n;
}
function vo(e) {
  var t = e.el;
  t && ((t.style.transform = ""), (t.style.opacity = ""));
}
function y1(e, t, n, r) {
  var i = e.top - t.height,
    o = e.left - t.width,
    s = e.bottom,
    l = e.right;
  (o += n.x),
    (l += n.x),
    (i += n.y),
    (s += n.y),
    r &&
      (n.y + e.top < t.height && (i = 0),
      n.x + e.left < t.width && (o = 0),
      s > t.scrollHeight - t.height && (s = t.scrollHeight - t.height),
      l > t.scrollWidth - t.width && (l = t.scrollWidth - t.width));
  var a = new Tu({ startX: o, startY: i, endX: l, endY: s });
  return a;
}
function Ln(e, t, n) {
  var r = t > e,
    i = (Math.abs(e) + Math.abs(t)) * (r ? -1 : 1),
    o = n + i,
    s = Math.max(n / o, 1);
  return s;
}
function Sf(e, t) {
  var n = e.start,
    r = e.end,
    i = e.unit;
  if (i === "%") {
    var o = t / 100;
    (n = n * o), (r = r * o);
  }
  if (i === "vw") {
    var s = n / 100,
      l = r / 100;
    (n = window.innerWidth * s), (r = window.innerWidth * l);
  }
  if (i === "vh") {
    var a = n / 100,
      u = r / 100;
    (n = window.innerHeight * a), (r = window.innerHeight * u);
  }
  return { start: n, end: r };
}
var Cf = { start: 0, end: 0, unit: "" };
function x1(e, t, n, r, i, o) {
  var s = n.translateX || Cf,
    l = n.translateY || Cf,
    a = Sf(s, e.width),
    u = a.start,
    c = a.end,
    f = Sf(l, e.height),
    d = f.start,
    m = f.end,
    v = e.top - t.height,
    y = e.left - t.width,
    C = e.bottom,
    g = e.right,
    h = 1,
    p = 1;
  i === it.vertical && ((h = Ln(d, m, t.height + e.height)), (p = h));
  var w = 1,
    S = 1;
  if (
    (i === it.horizontal && ((w = Ln(u, c, t.width + e.width)), (S = w)),
    d < 0 && (v = v + d * h),
    m > 0 && (C = C + m * p),
    u < 0 && (y = y + u * w),
    c > 0 && (g = g + c * S),
    (y += r.x),
    (g += r.x),
    (v += r.y),
    (C += r.y),
    o)
  ) {
    var T = r.y + e.top < t.height,
      k = r.x + e.left < t.width,
      P = r.y + e.bottom > t.scrollHeight - t.height,
      _ = r.x + e.right > t.scrollWidth - t.height;
    if (
      (T && P && ((h = 1), (p = 1), (v = 0), (C = t.scrollHeight - t.height)),
      k && _ && ((w = 1), (S = 1), (y = 0), (g = t.scrollWidth - t.width)),
      !T && P)
    ) {
      (v = e.top - t.height + r.y), (C = t.scrollHeight - t.height);
      var L = C - v;
      (h = Ln(d, m, L)), (p = 1), d < 0 && (v = v + d * h);
    }
    if (!k && _) {
      (y = e.left - t.width + r.x), (g = t.scrollWidth - t.width);
      var Q = g - y;
      (w = Ln(u, c, Q)), (S = 1), u < 0 && (y = y + u * w);
    }
    if (T && !P) {
      (v = 0), (C = e.bottom + r.y);
      var O = C - v;
      (h = 1), (p = Ln(d, m, O)), m > 0 && (C = C + m * p);
    }
    if (k && !_) {
      (y = 0), (g = e.right + r.x);
      var se = g - y;
      (w = 1), (S = Ln(u, c, se)), c > 0 && (g = g + c * S);
    }
  }
  var Y = new Tu({
    startX: y,
    startY: v,
    endX: g,
    endY: C,
    startMultiplierX: w,
    endMultiplierX: S,
    startMultiplierY: h,
    endMultiplierY: p,
  });
  return Y;
}
function w1(e, t) {
  var n = Xt({}, e);
  return (
    n.translateX &&
      (n.translateX = Xt({}, e.translateX, {
        start: n.translateX.start * t.startMultiplierX,
        end: n.translateX.end * t.endMultiplierX,
      })),
    n.translateY &&
      (n.translateY = Xt({}, e.translateY, {
        start: n.translateY.start * t.startMultiplierY,
        end: n.translateY.end * t.endMultiplierY,
      })),
    n
  );
}
function S1(e, t, n) {
  return e.rootMargin || e.targetElement || e.shouldDisableScalingTranslations
    ? !1
    : !!(
        (t.translateX && n === it.horizontal) ||
        (t.translateY && n === it.vertical)
      );
}
var Pf = function (t, n, r) {
    return Math.min(Math.max(t, n), r);
  },
  C1 = (function () {
    function e(n) {
      (this.el = n.el),
        (this.props = n.props),
        (this.scrollAxis = n.scrollAxis),
        (this.disabledParallaxController = n.disabledParallaxController || !1),
        (this.id = s1()),
        (this.effects = xf(this.props, this.scrollAxis)),
        (this.isInView = null),
        (this.progress = 0),
        this._setElementEasing(n.props.easing),
        p1(n.el, this.effects);
    }
    var t = e.prototype;
    return (
      (t.updateProps = function (r) {
        return (
          (this.props = Xt({}, this.props, r)),
          (this.effects = xf(r, this.scrollAxis)),
          this._setElementEasing(r.easing),
          this
        );
      }),
      (t.setCachedAttributes = function (r, i) {
        vo(this),
          (this.rect = new l1({
            el: this.props.targetElement || this.el,
            rootMargin: this.props.rootMargin,
            view: r,
          }));
        var o = S1(this.props, this.effects, this.scrollAxis);
        return typeof this.props.startScroll == "number" &&
          typeof this.props.endScroll == "number"
          ? ((this.limits = new Tu({
              startX: this.props.startScroll,
              startY: this.props.startScroll,
              endX: this.props.endScroll,
              endY: this.props.endScroll,
            })),
            this._setElementStyles(),
            this)
          : (o
              ? ((this.limits = x1(
                  this.rect,
                  r,
                  this.effects,
                  i,
                  this.scrollAxis,
                  this.props.shouldAlwaysCompleteAnimation
                )),
                (this.scaledEffects = w1(this.effects, this.limits)))
              : (this.limits = y1(
                  this.rect,
                  r,
                  i,
                  this.props.shouldAlwaysCompleteAnimation
                )),
            this._setElementStyles(),
            this);
      }),
      (t._updateElementIsInView = function (r) {
        var i = this.isInView === null;
        r !== this.isInView &&
          (r
            ? this.props.onEnter && this.props.onEnter(this)
            : i ||
              (this._setFinalProgress(),
              this._setElementStyles(),
              this.props.onExit && this.props.onExit(this))),
          (this.isInView = r);
      }),
      (t._setFinalProgress = function () {
        var r = Pf(Math.round(this.progress), 0, 1);
        this._updateElementProgress(r);
      }),
      (t._setElementStyles = function () {
        if (!(this.props.disabled || this.disabledParallaxController)) {
          var r = this.scaledEffects || this.effects;
          m1(r, this.progress, this.el);
        }
      }),
      (t._updateElementProgress = function (r) {
        (this.progress = r),
          this.props.onProgressChange &&
            this.props.onProgressChange(this.progress),
          this.props.onChange && this.props.onChange(this);
      }),
      (t._setElementEasing = function (r) {
        this.easing = pm(r);
      }),
      (t.updateElementOptions = function (r) {
        (this.scrollAxis = r.scrollAxis),
          (this.disabledParallaxController =
            r.disabledParallaxController || !1);
      }),
      (t.updatePosition = function (r) {
        if (!this.limits) return this;
        var i = this.scrollAxis === it.vertical,
          o = this.isInView === null,
          s = i ? this.limits.startY : this.limits.startX,
          l = i ? this.limits.endY : this.limits.endX,
          a = i ? this.limits.totalY : this.limits.totalX,
          u = i ? r.y : r.x,
          c = f1(s, l, u);
        if ((this._updateElementIsInView(c), c)) {
          var f = wf(s, a, u, this.easing);
          this._updateElementProgress(f), this._setElementStyles();
        } else
          o &&
            ((this.progress = Pf(Math.round(wf(s, a, u, this.easing)), 0, 1)),
            this._setElementStyles());
        return this;
      }),
      e
    );
  })(),
  Ef = (function () {
    function e(n) {
      (this.scrollContainer = n.scrollContainer),
        (this.width = n.width),
        (this.height = n.height),
        (this.scrollHeight = n.scrollHeight),
        (this.scrollWidth = n.scrollWidth);
    }
    var t = e.prototype;
    return (
      (t.hasChanged = function (r) {
        return (
          r.width !== this.width ||
          r.height !== this.height ||
          r.scrollWidth !== this.scrollWidth ||
          r.scrollHeight !== this.scrollHeight
        );
      }),
      (t.setSize = function (r) {
        return (
          (this.width = r.width),
          (this.height = r.height),
          (this.scrollHeight = r.scrollHeight),
          (this.scrollWidth = r.scrollWidth),
          this
        );
      }),
      e
    );
  })(),
  P1 = (function () {
    function e(n, r) {
      (this.x = n), (this.y = r), (this.dx = 0), (this.dy = 0);
    }
    var t = e.prototype;
    return (
      (t.setScroll = function (r, i) {
        return (
          (this.dx = r - this.x),
          (this.dy = i - this.y),
          (this.x = r),
          (this.y = i),
          this
        );
      }),
      e
    );
  })();
function E1() {
  var e = !1;
  try {
    var t = Object.defineProperty({}, "passive", {
      get: function () {
        return (e = !0), !0;
      },
    });
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t);
  } catch {}
  return e;
}
var gm = (function () {
  function e(n) {
    var r = n.scrollAxis,
      i = r === void 0 ? it.vertical : r,
      o = n.scrollContainer,
      s = n.disabled,
      l = s === void 0 ? !1 : s;
    (this.disabled = l),
      (this.scrollAxis = i),
      (this.elements = []),
      (this._hasScrollContainer = !!o),
      (this.viewEl = o ?? window);
    var a = this._getScrollPosition(),
      u = a[0],
      c = a[1];
    (this.scroll = new P1(u, c)),
      (this.view = new Ef({
        width: 0,
        height: 0,
        scrollWidth: 0,
        scrollHeight: 0,
        scrollContainer: this._hasScrollContainer ? o : void 0,
      })),
      (this._ticking = !1),
      (this._supportsPassive = E1()),
      this._bindAllMethods(),
      !this.disabled &&
        (this._addListeners(this.viewEl),
        this._addResizeObserver(),
        this._setViewSize());
  }
  e.init = function (r) {
    var i = typeof window < "u";
    if (!i)
      throw new Error(
        "Looks like ParallaxController.init() was called on the server. This method must be called on the client."
      );
    return new e(r);
  };
  var t = e.prototype;
  return (
    (t._bindAllMethods = function () {
      var r = this;
      [
        "_addListeners",
        "_removeListeners",
        "_getScrollPosition",
        "_handleScroll",
        "_handleUpdateCache",
        "_updateAllElements",
        "_updateElementPosition",
        "_setViewSize",
        "_addResizeObserver",
        "_checkIfViewHasChanged",
        "_getViewParams",
        "getElements",
        "createElement",
        "removeElementById",
        "resetElementStyles",
        "updateElementPropsById",
        "update",
        "updateScrollContainer",
        "destroy",
      ].forEach(function (i) {
        r[i] = r[i].bind(r);
      });
    }),
    (t._addListeners = function (r) {
      r.addEventListener(
        "scroll",
        this._handleScroll,
        this._supportsPassive ? { passive: !0 } : !1
      ),
        window.addEventListener("resize", this._handleUpdateCache, !1),
        window.addEventListener("blur", this._handleUpdateCache, !1),
        window.addEventListener("focus", this._handleUpdateCache, !1),
        window.addEventListener("load", this._handleUpdateCache, !1);
    }),
    (t._removeListeners = function (r) {
      var i;
      r.removeEventListener("scroll", this._handleScroll, !1),
        window.removeEventListener("resize", this._handleUpdateCache, !1),
        window.removeEventListener("blur", this._handleUpdateCache, !1),
        window.removeEventListener("focus", this._handleUpdateCache, !1),
        window.removeEventListener("load", this._handleUpdateCache, !1),
        (i = this._resizeObserver) == null || i.disconnect();
    }),
    (t._addResizeObserver = function () {
      var r = this;
      try {
        var i = this._hasScrollContainer
          ? this.viewEl
          : document.documentElement;
        (this._resizeObserver = new ResizeObserver(function () {
          return r.update();
        })),
          this._resizeObserver.observe(i);
      } catch {
        console.warn(
          "Failed to create the resize observer in the ParallaxContoller"
        );
      }
    }),
    (t._getScrollPosition = function () {
      var r = this._hasScrollContainer
          ? this.viewEl.scrollLeft
          : window.pageXOffset,
        i = this._hasScrollContainer
          ? this.viewEl.scrollTop
          : window.pageYOffset;
      return [r, i];
    }),
    (t._handleScroll = function () {
      var r,
        i = this._getScrollPosition(),
        o = i[0],
        s = i[1];
      this.scroll.setScroll(o, s),
        !this._ticking &&
          ((r = this.elements) == null ? void 0 : r.length) > 0 &&
          ((this._ticking = !0),
          window.requestAnimationFrame(this._updateAllElements));
    }),
    (t._handleUpdateCache = function () {
      this._setViewSize(), this._updateAllElements({ updateCache: !0 });
    }),
    (t._updateAllElements = function (r) {
      var i = this,
        o = r === void 0 ? {} : r,
        s = o.updateCache;
      this.elements &&
        this.elements.forEach(function (l) {
          s && l.setCachedAttributes(i.view, i.scroll),
            i._updateElementPosition(l);
        }),
        (this._ticking = !1);
    }),
    (t._updateElementPosition = function (r) {
      r.props.disabled || this.disabled || r.updatePosition(this.scroll);
    }),
    (t._getViewParams = function () {
      if (this._hasScrollContainer) {
        var r = this.viewEl.offsetWidth,
          i = this.viewEl.offsetHeight,
          o = this.viewEl.scrollHeight,
          s = this.viewEl.scrollWidth;
        return this.view.setSize({
          width: r,
          height: i,
          scrollHeight: o,
          scrollWidth: s,
        });
      }
      var l = document.documentElement,
        a = window.innerWidth || l.clientWidth,
        u = window.innerHeight || l.clientHeight,
        c = l.scrollHeight,
        f = l.scrollWidth;
      return { width: a, height: u, scrollHeight: c, scrollWidth: f };
    }),
    (t._setViewSize = function () {
      return this.view.setSize(this._getViewParams());
    }),
    (t._checkIfViewHasChanged = function () {
      return this.view.hasChanged(this._getViewParams());
    }),
    (t.getElements = function () {
      return this.elements;
    }),
    (t.createElement = function (r) {
      var i = new C1(
        Xt({}, r, {
          scrollAxis: this.scrollAxis,
          disabledParallaxController: this.disabled,
        })
      );
      return (
        i.setCachedAttributes(this.view, this.scroll),
        (this.elements = this.elements ? [].concat(this.elements, [i]) : [i]),
        this._updateElementPosition(i),
        this._checkIfViewHasChanged() && this.update(),
        i
      );
    }),
    (t.removeElementById = function (r) {
      this.elements &&
        (this.elements = this.elements.filter(function (i) {
          return i.id !== r;
        }));
    }),
    (t.updateElementPropsById = function (r, i) {
      this.elements &&
        (this.elements = this.elements.map(function (o) {
          return o.id === r ? o.updateProps(i) : o;
        })),
        this.update();
    }),
    (t.resetElementStyles = function (r) {
      vo(r);
    }),
    (t.update = function () {
      var r = this._getScrollPosition(),
        i = r[0],
        o = r[1];
      this.scroll.setScroll(i, o),
        this._setViewSize(),
        this._updateAllElements({ updateCache: !0 });
    }),
    (t.updateScrollContainer = function (r) {
      this._removeListeners(this.viewEl),
        (this.viewEl = r),
        (this._hasScrollContainer = !!r),
        (this.view = new Ef({
          width: 0,
          height: 0,
          scrollWidth: 0,
          scrollHeight: 0,
          scrollContainer: r,
        })),
        this._setViewSize(),
        this._addListeners(this.viewEl),
        this._updateAllElements({ updateCache: !0 });
    }),
    (t.disableParallaxController = function () {
      (this.disabled = !0),
        this._removeListeners(this.viewEl),
        this.elements &&
          this.elements.forEach(function (r) {
            return vo(r);
          });
    }),
    (t.enableParallaxController = function () {
      var r = this;
      (this.disabled = !1),
        this.elements &&
          this.elements.forEach(function (i) {
            return i.updateElementOptions({
              disabledParallaxController: !1,
              scrollAxis: r.scrollAxis,
            });
          }),
        this._addListeners(this.viewEl),
        this._addResizeObserver(),
        this._setViewSize();
    }),
    (t.disableAllElements = function () {
      console.warn("deprecated: use disableParallaxController() instead"),
        this.elements &&
          (this.elements = this.elements.map(function (r) {
            return r.updateProps({ disabled: !0 });
          })),
        this.update();
    }),
    (t.enableAllElements = function () {
      console.warn("deprecated: use enableParallaxController() instead"),
        this.elements &&
          (this.elements = this.elements.map(function (r) {
            return r.updateProps({ disabled: !1 });
          })),
        this.update();
    }),
    (t.destroy = function () {
      this._removeListeners(this.viewEl),
        this.elements &&
          this.elements.forEach(function (r) {
            return vo(r);
          }),
        (this.elements = void 0);
    }),
    e
  );
})();
function k1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function T1(e) {
  return (
    Object.keys(e).forEach(function (t) {
      return e[t] === void 0 && delete e[t];
    }),
    e
  );
}
var A1 = [
  "disabled",
  "easing",
  "endScroll",
  "onChange",
  "onEnter",
  "onExit",
  "onProgressChange",
  "opacity",
  "rootMargin",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "shouldAlwaysCompleteAnimation",
  "shouldDisableScalingTranslations",
  "speed",
  "startScroll",
  "targetElement",
  "translateX",
  "translateY",
];
function M1(e) {
  var t = e.disabled,
    n = e.easing,
    r = e.endScroll,
    i = e.onChange,
    o = e.onEnter,
    s = e.onExit,
    l = e.onProgressChange,
    a = e.opacity,
    u = e.rootMargin,
    c = e.rotate,
    f = e.rotateX,
    d = e.rotateY,
    m = e.rotateZ,
    v = e.scale,
    y = e.scaleX,
    C = e.scaleY,
    g = e.scaleZ,
    h = e.shouldAlwaysCompleteAnimation,
    p = e.shouldDisableScalingTranslations,
    w = e.speed,
    S = e.startScroll,
    T = e.targetElement,
    k = e.translateX,
    P = e.translateY,
    _ = k1(e, A1),
    L = T1({
      disabled: t,
      easing: n,
      endScroll: r,
      onChange: i,
      onEnter: o,
      onExit: s,
      onProgressChange: l,
      opacity: a,
      rootMargin: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      rotateZ: m,
      scale: v,
      scaleX: y,
      scaleY: C,
      scaleZ: g,
      shouldAlwaysCompleteAnimation: h,
      shouldDisableScalingTranslations: p,
      speed: w,
      startScroll: S,
      targetElement: T,
      translateX: k,
      translateY: P,
    });
  return { parallaxProps: L, rest: _ };
}
function b1(e) {
  A.useEffect(
    function () {
      var t = typeof window > "u",
        n = e instanceof gm;
      if (!t && !e && !n)
        throw new Error(
          "Must wrap your application's <Parallax /> components in a <ParallaxProvider />."
        );
    },
    [e]
  );
}
var vm = U.createContext(null);
function _1() {
  var e = A.useContext(vm),
    t = typeof window > "u";
  if (t) return null;
  if (!e)
    throw new Error(
      "Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>"
    );
  return e;
}
function j1(e) {
  var t = _1(),
    n = A.useRef(null),
    r = M1(e),
    i = r.parallaxProps;
  b1(t);
  var o = A.useState(),
    s = o[0],
    l = o[1];
  return (
    A.useEffect(function () {
      var a;
      if (n.current instanceof HTMLElement) {
        var u = { el: n.current, props: i };
        (a = t == null ? void 0 : t.createElement(u)), l(a);
      } else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");
      return function () {
        a && (t == null || t.removeElementById(a.id));
      };
    }, []),
    A.useEffect(
      function () {
        s &&
          (e.disabled && (t == null || t.resetElementStyles(s)),
          t == null || t.updateElementPropsById(s.id, i));
      },
      [
        e.disabled,
        e.easing,
        e.endScroll,
        e.onChange,
        e.onEnter,
        e.onExit,
        e.onProgressChange,
        e.opacity,
        e.rootMargin,
        e.rotate,
        e.rotateX,
        e.rotateY,
        e.rotateZ,
        e.scale,
        e.scaleX,
        e.scaleY,
        e.scaleZ,
        e.shouldAlwaysCompleteAnimation,
        e.shouldDisableScalingTranslations,
        e.speed,
        e.startScroll,
        e.targetElement,
        e.translateX,
        e.translateY,
      ]
    ),
    { ref: n, controller: t, element: s }
  );
}
var L1 = function (t) {
  var n = typeof window > "u";
  return n ? null : gm.init(t);
};
function V1(e) {
  var t = A.useRef(null);
  return (
    t.current ||
      (t.current = L1({
        scrollAxis: e.scrollAxis || it.vertical,
        scrollContainer: e.scrollContainer,
        disabled: e.isDisabled,
      })),
    A.useEffect(
      function () {
        e.scrollContainer &&
          t.current &&
          t.current.updateScrollContainer(e.scrollContainer);
      },
      [e.scrollContainer, t.current]
    ),
    A.useEffect(
      function () {
        e.isDisabled && t.current && t.current.disableParallaxController(),
          !e.isDisabled && t.current && t.current.enableParallaxController();
      },
      [e.isDisabled, t.current]
    ),
    A.useEffect(function () {
      return function () {
        t != null && t.current && (t == null || t.current.destroy());
      };
    }, []),
    U.createElement(vm.Provider, { value: t.current }, e.children)
  );
}
const Au = A.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ps = A.createContext({}),
  Mu = A.createContext(null),
  Es = typeof document < "u",
  bu = Es ? A.useLayoutEffect : A.useEffect,
  ym = A.createContext({ strict: !1 }),
  _u = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  N1 = "framerAppearId",
  xm = "data-" + _u(N1),
  wm = { skipAnimations: !1, useManualTiming: !1 };
class kf {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function O1(e) {
  let t = new kf(),
    n = new kf(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            s.has(c) && (l.schedule(c), e()), c(a);
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const qi = ["prepare", "read", "update", "preRender", "render", "postRender"],
  D1 = 40;
function Sm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = qi.reduce((f, d) => ((f[d] = O1(() => (n = !0))), f), {}),
    s = (f) => {
      o[f].process(i);
    },
    l = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, D1), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        qi.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: qi.reduce((f, d) => {
      const m = o[d];
      return (f[d] = (v, y = !1, C = !1) => (n || a(), m.schedule(v, y, C))), f;
    }, {}),
    cancel: (f) => qi.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
const { schedule: ju, cancel: V5 } = Sm(queueMicrotask, !1);
function R1(e, t, n, r) {
  const { visualElement: i } = A.useContext(Ps),
    o = A.useContext(ym),
    s = A.useContext(Mu),
    l = A.useContext(Au).reducedMotion,
    a = A.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  A.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = A.useRef(!!(n[xm] && !window.HandoffComplete));
  return (
    bu(() => {
      u &&
        (ju.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    A.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function Wn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function z1(e, t, n) {
  return A.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Wn(n) && (n.current = r));
    },
    [t]
  );
}
function vi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ks(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Lu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Vu = ["initial", ...Lu];
function Ts(e) {
  return ks(e.animate) || Vu.some((t) => vi(e[t]));
}
function Cm(e) {
  return !!(Ts(e) || e.variants);
}
function I1(e, t) {
  if (Ts(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || vi(n) ? n : void 0,
      animate: vi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function F1(e) {
  const { initial: t, animate: n } = I1(e, A.useContext(Ps));
  return A.useMemo(() => ({ initial: t, animate: n }), [Tf(t), Tf(n)]);
}
function Tf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Af = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  yi = {};
for (const e in Af) yi[e] = { isEnabled: (t) => Af[e].some((n) => !!t[n]) };
function B1(e) {
  for (const t in e) yi[t] = { ...yi[t], ...e[t] };
}
const Pm = A.createContext({}),
  Em = A.createContext({}),
  $1 = Symbol.for("motionComponentSymbol");
function U1({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && B1(e);
  function o(l, a) {
    let u;
    const c = { ...A.useContext(Au), ...l, layoutId: H1(l) },
      { isStatic: f } = c,
      d = F1(l),
      m = r(l, f);
    if (!f && Es) {
      d.visualElement = R1(i, m, c, t);
      const v = A.useContext(Em),
        y = A.useContext(ym).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, y, e, v));
    }
    return A.createElement(
      Ps.Provider,
      { value: d },
      u && d.visualElement
        ? A.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, z1(m, d.visualElement, a), m, f, d.visualElement)
    );
  }
  const s = A.forwardRef(o);
  return (s[$1] = i), s;
}
function H1({ layoutId: e }) {
  const t = A.useContext(Pm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function W1(e) {
  function t(r, i = {}) {
    return U1(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const Y1 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Nu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Y1.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Ko = {};
function G1(e) {
  Object.assign(Ko, e);
}
const Ti = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  bn = new Set(Ti);
function km(e, { layout: t, layoutId: n }) {
  return (
    bn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ko[e] || e === "opacity"))
  );
}
const Se = (e) => !!(e && e.getVelocity),
  X1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  K1 = Ti.length;
function Q1(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < K1; s++) {
    const l = Ti[s];
    if (e[l] !== void 0) {
      const a = X1[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const Tm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Am = Tm("--"),
  Z1 = Tm("var(--"),
  Qo = (e) => (Z1(e) ? q1.test(e.split("/*")[0].trim()) : !1),
  q1 =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,
  J1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Zt = (e, t, n) => (n > t ? t : n < e ? e : n),
  pr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Xr = { ...pr, transform: (e) => Zt(0, 1, e) },
  Ji = { ...pr, default: 1 },
  Kr = (e) => Math.round(e * 1e5) / 1e5,
  Ou = /(-)?([\d]*\.?[\d])+/g,
  ex =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  tx =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ai(e) {
  return typeof e == "string";
}
const Mi = (e) => ({
    test: (t) => Ai(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  jt = Mi("deg"),
  dt = Mi("%"),
  N = Mi("px"),
  nx = Mi("vh"),
  rx = Mi("vw"),
  Mf = {
    ...dt,
    parse: (e) => dt.parse(e) / 100,
    transform: (e) => dt.transform(e * 100),
  },
  bf = { ...pr, transform: Math.round },
  Mm = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    size: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    rotate: jt,
    rotateX: jt,
    rotateY: jt,
    rotateZ: jt,
    scale: Ji,
    scaleX: Ji,
    scaleY: Ji,
    scaleZ: Ji,
    skew: jt,
    skewX: jt,
    skewY: jt,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Xr,
    originX: Mf,
    originY: Mf,
    originZ: N,
    zIndex: bf,
    fillOpacity: Xr,
    strokeOpacity: Xr,
    numOctaves: bf,
  };
function Du(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Am(f)) {
      o[f] = d;
      continue;
    }
    const m = Mm[f],
      v = J1(d, m);
    if (bn.has(f)) {
      if (((a = !0), (s[f] = v), !c)) continue;
      d !== (m.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = v)) : (i[f] = v);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = Q1(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = l;
    i.transformOrigin = `${f} ${d} ${m}`;
  }
}
const Ru = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function bm(e, t, n) {
  for (const r in t) !Se(t[r]) && !km(r, n) && (e[r] = t[r]);
}
function ix({ transformTemplate: e }, t, n) {
  return A.useMemo(() => {
    const r = Ru();
    return (
      Du(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function ox(e, t, n) {
  const r = e.style || {},
    i = {};
  return bm(i, r, e), Object.assign(i, ix(e, t, n)), i;
}
function sx(e, t, n) {
  const r = {},
    i = ox(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const lx = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Zo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    lx.has(e)
  );
}
let _m = (e) => !Zo(e);
function ax(e) {
  e && (_m = (t) => (t.startsWith("on") ? !Zo(t) : e(t)));
}
try {
  ax(require("@emotion/is-prop-valid").default);
} catch {}
function ux(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((_m(i) ||
        (n === !0 && Zo(i)) ||
        (!t && !Zo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function _f(e, t, n) {
  return typeof e == "string" ? e : N.transform(t + n * e);
}
function cx(e, t, n) {
  const r = _f(t, e.x, e.width),
    i = _f(n, e.y, e.height);
  return `${r} ${i}`;
}
const fx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  dx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function hx(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? fx : dx;
  e[o.offset] = N.transform(-r);
  const s = N.transform(t),
    l = N.transform(n);
  e[o.array] = `${s} ${l}`;
}
function zu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((Du(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: v, dimensions: y } = e;
  m.transform && (y && (v.transform = m.transform), delete m.transform),
    y &&
      (i !== void 0 || o !== void 0 || v.transform) &&
      (v.transformOrigin = cx(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && hx(m, s, l, a, !1);
}
const jm = () => ({ ...Ru(), attrs: {} }),
  Iu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function px(e, t, n, r) {
  const i = A.useMemo(() => {
    const o = jm();
    return (
      zu(o, t, { enableHardwareAcceleration: !1 }, Iu(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    bm(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function mx(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Nu(n) ? px : sx)(r, o, s, n),
      u = ux(r, typeof n == "string", e),
      c = n !== A.Fragment ? { ...u, ...a, ref: i } : {},
      { children: f } = r,
      d = A.useMemo(() => (Se(f) ? f.get() : f), [f]);
    return A.createElement(n, { ...c, children: d });
  };
}
function Lm(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Vm = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Nm(e, t, n, r) {
  Lm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Vm.has(i) ? i : _u(i), t.attrs[i]);
}
function Fu(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Se(n[i]) || (t.style && Se(t.style[i])) || km(i, e)) && (r[i] = n[i]);
  return r;
}
function Om(e, t) {
  const n = Fu(e, t);
  for (const r in e)
    if (Se(e[r]) || Se(t[r])) {
      const i =
        Ti.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function Bu(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function As(e) {
  const t = A.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const qo = (e) => Array.isArray(e),
  gx = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  vx = (e) => (qo(e) ? e[e.length - 1] || 0 : e);
function yo(e) {
  const t = Se(e) ? e.get() : e;
  return gx(t) ? t.toValue() : t;
}
function yx(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: xx(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const Dm = (e) => (t, n) => {
  const r = A.useContext(Ps),
    i = A.useContext(Mu),
    o = () => yx(e, t, r, i);
  return n ? o() : As(o);
};
function xx(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = yo(o[d]);
  let { initial: s, animate: l } = e;
  const a = Ts(e),
    u = Cm(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !ks(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const v = Bu(e, m);
        if (!v) return;
        const { transitionEnd: y, transition: C, ...g } = v;
        for (const h in g) {
          let p = g[h];
          if (Array.isArray(p)) {
            const w = c ? p.length - 1 : 0;
            p = p[w];
          }
          p !== null && (i[h] = p);
        }
        for (const h in y) i[h] = y[h];
      }),
    i
  );
}
const oe = (e) => e,
  {
    schedule: $,
    cancel: ot,
    state: ce,
    steps: il,
  } = Sm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : oe, !0),
  wx = {
    useVisualState: Dm({
      scrapeMotionValuesFromProps: Om,
      createRenderState: jm,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        $.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          $.render(() => {
            zu(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Iu(t.tagName),
              e.transformTemplate
            ),
              Nm(t, n);
          });
      },
    }),
  },
  Sx = {
    useVisualState: Dm({
      scrapeMotionValuesFromProps: Fu,
      createRenderState: Ru,
    }),
  };
function Cx(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Nu(e) ? wx : Sx),
    preloadedFeatures: n,
    useRender: mx(t),
    createVisualElement: r,
    Component: e,
  };
}
function yt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Rm = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ms(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const Px = (e) => (t) => Rm(t) && e(t, Ms(t));
function wt(e, t, n, r) {
  return yt(e, t, Px(n), r);
}
const Ex = (e, t) => (n) => t(e(n)),
  St = (...e) => e.reduce(Ex);
function zm(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const jf = zm("dragHorizontal"),
  Lf = zm("dragVertical");
function Im(e) {
  let t = !1;
  if (e === "y") t = Lf();
  else if (e === "x") t = jf();
  else {
    const n = jf(),
      r = Lf();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Fm() {
  const e = Im(!0);
  return e ? (e(), !1) : !0;
}
class nn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Vf(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.pointerType === "touch" || Fm()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && $.update(() => l[r](o, s));
    };
  return wt(e.current, n, i, { passive: !e.getProps()[r] });
}
class kx extends nn {
  mount() {
    this.unmount = St(Vf(this.node, !0), Vf(this.node, !1));
  }
  unmount() {}
}
class Tx extends nn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = St(
      yt(this.node.current, "focus", () => this.onFocus()),
      yt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Bm = (e, t) => (t ? (e === t ? !0 : Bm(e, t.parentElement)) : !1);
function ol(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ms(n));
}
class Ax extends nn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = oe),
      (this.removeEndListeners = oe),
      (this.removeAccessibleListeners = oe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = wt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: f,
              } = this.node.getProps();
              $.update(() => {
                !f && !Bm(this.node.current, l.target)
                  ? c && c(l, a)
                  : u && u(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = wt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = St(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                ol("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && $.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = yt(this.node.current, "keyup", s)),
              ol("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = yt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && ol("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = yt(this.node.current, "blur", r);
        this.removeAccessibleListeners = St(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && $.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Fm()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && $.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = wt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = yt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = St(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const da = new WeakMap(),
  sl = new WeakMap(),
  Mx = (e) => {
    const t = da.get(e.target);
    t && t(e);
  },
  bx = (e) => {
    e.forEach(Mx);
  };
function _x({ root: e, ...t }) {
  const n = e || document;
  sl.has(n) || sl.set(n, {});
  const r = sl.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(bx, { root: e, ...t })), r[i];
}
function jx(e, t, n) {
  const r = _x(t);
  return (
    da.set(e, n),
    r.observe(e),
    () => {
      da.delete(e), r.unobserve(e);
    }
  );
}
const Lx = { some: 0, all: 1 };
class Vx extends nn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Lx[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return jx(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Nx(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Nx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Ox = {
  inView: { Feature: Vx },
  tap: { Feature: Ax },
  focus: { Feature: Tx },
  hover: { Feature: kx },
};
function $m(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Dx(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Rx(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function bs(e, t, n) {
  const r = e.getProps();
  return Bu(r, t, n !== void 0 ? n : r.custom, Dx(e), Rx(e));
}
let zx = oe,
  _s = oe;
const wn = (e) => e * 1e3,
  Ct = (e) => e / 1e3,
  Ix = { current: !1 },
  Um = (e) => Array.isArray(e) && typeof e[0] == "number";
function Hm(e) {
  return !!(
    !e ||
    (typeof e == "string" && Wm[e]) ||
    Um(e) ||
    (Array.isArray(e) && e.every(Hm))
  );
}
const Or = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Wm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Or([0, 0.65, 0.55, 1]),
    circOut: Or([0.55, 0, 1, 0.45]),
    backIn: Or([0.31, 0.01, 0.66, -0.59]),
    backOut: Or([0.33, 1.53, 0.69, 0.99]),
  };
function Ym(e) {
  if (e) return Um(e) ? Or(e) : Array.isArray(e) ? e.map(Ym) : Wm[e];
}
function Fx(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Ym(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Bx(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Gm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  $x = 1e-7,
  Ux = 12;
function Hx(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Gm(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > $x && ++l < Ux);
  return s;
}
function bi(e, t, n, r) {
  if (e === t && n === r) return oe;
  const i = (o) => Hx(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Gm(i(o), t, r));
}
const Wx = bi(0.42, 0, 1, 1),
  Yx = bi(0, 0, 0.58, 1),
  Xm = bi(0.42, 0, 0.58, 1),
  Gx = (e) => Array.isArray(e) && typeof e[0] != "number",
  Km = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Qm = (e) => (t) => 1 - e(1 - t),
  $u = (e) => 1 - Math.sin(Math.acos(e)),
  Zm = Qm($u),
  Xx = Km($u),
  qm = bi(0.33, 1.53, 0.69, 0.99),
  Uu = Qm(qm),
  Kx = Km(Uu),
  Qx = (e) =>
    (e *= 2) < 1 ? 0.5 * Uu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Zx = {
    linear: oe,
    easeIn: Wx,
    easeInOut: Xm,
    easeOut: Yx,
    circIn: $u,
    circInOut: Xx,
    circOut: Zm,
    backIn: Uu,
    backInOut: Kx,
    backOut: qm,
    anticipate: Qx,
  },
  Nf = (e) => {
    if (Array.isArray(e)) {
      _s(e.length === 4);
      const [t, n, r, i] = e;
      return bi(t, n, r, i);
    } else if (typeof e == "string") return Zx[e];
    return e;
  },
  ar = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  J = (e, t, n) => e + (t - e) * n;
function ll(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function qx({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = ll(a, l, e + 1 / 3)), (o = ll(a, l, e)), (s = ll(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Hu = (e, t) => (n) =>
    !!(
      (Ai(n) && tx.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Jm = (e, t, n) => (r) => {
    if (!Ai(r)) return r;
    const [i, o, s, l] = r.match(Ou);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  Jx = (e) => Zt(0, 255, e),
  al = { ...pr, transform: (e) => Math.round(Jx(e)) },
  vn = {
    test: Hu("rgb", "red"),
    parse: Jm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      al.transform(e) +
      ", " +
      al.transform(t) +
      ", " +
      al.transform(n) +
      ", " +
      Kr(Xr.transform(r)) +
      ")",
  };
function ew(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ha = { test: Hu("#"), parse: ew, transform: vn.transform },
  Yn = {
    test: Hu("hsl", "hue"),
    parse: Jm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      dt.transform(Kr(t)) +
      ", " +
      dt.transform(Kr(n)) +
      ", " +
      Kr(Xr.transform(r)) +
      ")",
  },
  ul = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  tw = [ha, vn, Yn],
  nw = (e) => tw.find((t) => t.test(e));
function Of(e) {
  const t = nw(e);
  let n = t.parse(e);
  return t === Yn && (n = qx(n)), n;
}
const Df = (e, t) => {
    const n = Of(e),
      r = Of(t),
      i = { ...n };
    return (o) => (
      (i.red = ul(n.red, r.red, o)),
      (i.green = ul(n.green, r.green, o)),
      (i.blue = ul(n.blue, r.blue, o)),
      (i.alpha = J(n.alpha, r.alpha, o)),
      vn.transform(i)
    );
  },
  ye = {
    test: (e) => vn.test(e) || ha.test(e) || Yn.test(e),
    parse: (e) =>
      vn.test(e) ? vn.parse(e) : Yn.test(e) ? Yn.parse(e) : ha.parse(e),
    transform: (e) =>
      Ai(e) ? e : e.hasOwnProperty("red") ? vn.transform(e) : Yn.transform(e),
  };
function rw(e) {
  var t, n;
  return (
    isNaN(e) &&
    Ai(e) &&
    (((t = e.match(Ou)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(ex)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const e0 = "number",
  t0 = "color",
  iw = "var",
  ow = "var(",
  Rf = "${}",
  zf =
    /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;
function Jo(e) {
  const t = e.toString(),
    n = t.match(zf) || [],
    r = [],
    i = { color: [], number: [], var: [] },
    o = [];
  for (let a = 0; a < n.length; a++) {
    const u = n[a];
    ye.test(u)
      ? (i.color.push(a), o.push(t0), r.push(ye.parse(u)))
      : u.startsWith(ow)
      ? (i.var.push(a), o.push(iw), r.push(u))
      : (i.number.push(a), o.push(e0), r.push(parseFloat(u)));
  }
  const l = t.replace(zf, Rf).split(Rf);
  return { values: r, split: l, indexes: i, types: o };
}
function n0(e) {
  return Jo(e).values;
}
function r0(e) {
  const { split: t, types: n } = Jo(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const l = n[s];
        l === e0
          ? (o += Kr(i[s]))
          : l === t0
          ? (o += ye.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const sw = (e) => (typeof e == "number" ? 0 : e);
function lw(e) {
  const t = n0(e);
  return r0(e)(t.map(sw));
}
const qt = {
  test: rw,
  parse: n0,
  createTransformer: r0,
  getAnimatableNone: lw,
};
function pa(e, t) {
  return (n) => (n > 0 ? t : e);
}
function aw(e, t) {
  return (n) => J(e, t, n);
}
function Wu(e) {
  return typeof e == "number"
    ? aw
    : typeof e == "string"
    ? Qo(e)
      ? pa
      : ye.test(e)
      ? Df
      : fw
    : Array.isArray(e)
    ? i0
    : typeof e == "object"
    ? ye.test(e)
      ? Df
      : uw
    : pa;
}
function i0(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Wu(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function uw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Wu(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function cw(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][i[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[o] = a), i[s]++;
  }
  return r;
}
const fw = (e, t) => {
  const n = qt.createTransformer(t),
    r = Jo(e),
    i = Jo(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? St(i0(cw(r, i), i.values), n)
    : pa(e, t);
};
function o0(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? J(e, t, n)
    : Wu(e)(e, t);
}
function dw(e, t, n) {
  const r = [],
    i = n || o0,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || oe : t;
      l = St(a, l);
    }
    r.push(l);
  }
  return r;
}
function Yu(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((_s(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = dw(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = ar(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Zt(e[0], e[o - 1], u)) : a;
}
function hw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ar(0, t, r);
    e.push(J(n, 1, i));
  }
}
function s0(e) {
  const t = [0];
  return hw(t, e.length - 1), t;
}
function pw(e, t) {
  return e.map((n) => n * t);
}
function mw(e, t) {
  return e.map(() => t || Xm).splice(0, e.length - 1);
}
function es({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Gx(r) ? r.map(Nf) : Nf(r),
    o = { done: !1, value: t[0] },
    s = pw(n && n.length === t.length ? n : s0(t), e),
    l = Yu(s, t, { ease: Array.isArray(i) ? i : mw(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function Gu(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const gw = 5;
function l0(e, t, n) {
  const r = Math.max(t - gw, 0);
  return Gu(n - e(r), t - r);
}
const cl = 0.001,
  vw = 0.01,
  yw = 10,
  xw = 0.05,
  ww = 1;
function Sw({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = Zt(xw, ww, s)),
    (e = Zt(vw, yw, Ct(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            m = ma(u, s),
            v = Math.exp(-f);
          return cl - (d / m) * v;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            y = ma(Math.pow(u, 2), s);
          return ((-i(u) + cl > 0 ? -1 : 1) * ((d - m) * v)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -cl + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = Pw(i, o, l);
  if (((e = wn(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Cw = 12;
function Pw(e, t, n) {
  let r = n;
  for (let i = 1; i < Cw; i++) r = r - e(r) / t(r);
  return r;
}
function ma(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Ew = ["duration", "bounce"],
  kw = ["stiffness", "damping", "mass"];
function If(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Tw(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!If(e, kw) && If(e, Ew)) {
    const n = Sw(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function a0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = Tw({ ...r, velocity: -Ct(r.velocity || 0) }),
    m = f || 0,
    v = a / (2 * Math.sqrt(l * u)),
    y = o - i,
    C = Ct(Math.sqrt(l / u)),
    g = Math.abs(y) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let h;
  if (v < 1) {
    const p = ma(C, v);
    h = (w) => {
      const S = Math.exp(-v * C * w);
      return (
        o - S * (((m + v * C * y) / p) * Math.sin(p * w) + y * Math.cos(p * w))
      );
    };
  } else if (v === 1) h = (p) => o - Math.exp(-C * p) * (y + (m + C * y) * p);
  else {
    const p = C * Math.sqrt(v * v - 1);
    h = (w) => {
      const S = Math.exp(-v * C * w),
        T = Math.min(p * w, 300);
      return (
        o - (S * ((m + v * C * y) * Math.sinh(T) + p * y * Math.cosh(T))) / p
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (p) => {
      const w = h(p);
      if (d) s.done = p >= c;
      else {
        let S = m;
        p !== 0 && (v < 1 ? (S = l0(h, p, w)) : (S = 0));
        const T = Math.abs(S) <= n,
          k = Math.abs(o - w) <= t;
        s.done = T && k;
      }
      return (s.value = s.done ? o : w), s;
    },
  };
}
function Ff({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
    v = (P) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - P) < Math.abs(a - P)
        ? l
        : a;
  let y = n * t;
  const C = f + y,
    g = s === void 0 ? C : s(C);
  g !== C && (y = g - f);
  const h = (P) => -y * Math.exp(-P / r),
    p = (P) => g + h(P),
    w = (P) => {
      const _ = h(P),
        L = p(P);
      (d.done = Math.abs(_) <= u), (d.value = d.done ? g : L);
    };
  let S, T;
  const k = (P) => {
    m(d.value) &&
      ((S = P),
      (T = a0({
        keyframes: [d.value, v(d.value)],
        velocity: l0(p, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let _ = !1;
        return (
          !T && S === void 0 && ((_ = !0), w(P), k(P)),
          S !== void 0 && P > S ? T.next(P - S) : (!_ && w(P), d)
        );
      },
    }
  );
}
let xo;
function Aw() {
  xo = void 0;
}
const Sn = {
    now: () => (
      xo === void 0 &&
        Sn.set(
          ce.isProcessing || wm.useManualTiming
            ? ce.timestamp
            : performance.now()
        ),
      xo
    ),
    set: (e) => {
      (xo = e), queueMicrotask(Aw);
    },
  },
  Mw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => $.update(t, !0),
      stop: () => ot(t),
      now: () => (ce.isProcessing ? ce.timestamp : Sn.now()),
    };
  },
  Bf = 2e4;
function $f(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Bf; ) (t += n), (r = e.next(t));
  return t >= Bf ? 1 / 0 : t;
}
const bw = { decay: Ff, inertia: Ff, tween: es, keyframes: es, spring: a0 },
  _w = (e) => e / 100;
function ts({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = Mw,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let m = 1,
    v = !1,
    y,
    C;
  const g = () => {
    C = new Promise((V) => {
      y = V;
    });
  };
  g();
  let h;
  const p = bw[i] || es;
  let w;
  p !== es &&
    typeof r[0] != "number" &&
    ((w = St(_w, o0(r[0], r[1]))), (r = [0, 100]));
  const S = p({ ...d, keyframes: r });
  let T;
  l === "mirror" &&
    (T = p({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let k = "idle",
    P = null,
    _ = null,
    L = null;
  S.calculatedDuration === null && o && (S.calculatedDuration = $f(S));
  const { calculatedDuration: Q } = S;
  let O = 1 / 0,
    se = 1 / 0;
  Q !== null && ((O = Q + s), (se = O * (o + 1) - s));
  let Y = 0;
  const Xe = (V) => {
      if (_ === null) return;
      m > 0 && (_ = Math.min(_, V)),
        m < 0 && (_ = Math.min(V - se / m, _)),
        P !== null ? (Y = P) : (Y = Math.round(V - _) * m);
      const F = Y - t * (m >= 0 ? 1 : -1),
        rn = m >= 0 ? F < 0 : F > se;
      (Y = Math.max(F, 0)), k === "finished" && P === null && (Y = se);
      let st = Y,
        _n = S;
      if (o) {
        const js = Math.min(Y, se) / O;
        let ji = Math.floor(js),
          sn = js % 1;
        !sn && js >= 1 && (sn = 1),
          sn === 1 && ji--,
          (ji = Math.min(ji, o + 1)),
          !!(ji % 2) &&
            (l === "reverse"
              ? ((sn = 1 - sn), s && (sn -= s / O))
              : l === "mirror" && (_n = T)),
          (st = Zt(0, 1, sn) * O);
      }
      const Le = rn ? { done: !1, value: r[0] } : _n.next(st);
      w && (Le.value = w(Le.value));
      let { done: on } = Le;
      !rn && Q !== null && (on = m >= 0 ? Y >= se : Y <= 0);
      const $0 = P === null && (k === "finished" || (k === "running" && on));
      return f && f(Le.value), $0 && M(), Le;
    },
    H = () => {
      h && h.stop(), (h = void 0);
    },
    Ce = () => {
      (k = "idle"), H(), y(), g(), (_ = L = null);
    },
    M = () => {
      (k = "finished"), c && c(), H(), y();
    },
    j = () => {
      if (v) return;
      h || (h = n(Xe));
      const V = h.now();
      a && a(),
        P !== null ? (_ = V - P) : (!_ || k === "finished") && (_ = V),
        k === "finished" && g(),
        (L = _),
        (P = null),
        (k = "running"),
        h.start();
    };
  e && j();
  const D = {
    then(V, F) {
      return C.then(V, F);
    },
    get time() {
      return Ct(Y);
    },
    set time(V) {
      (V = wn(V)),
        (Y = V),
        P !== null || !h || m === 0 ? (P = V) : (_ = h.now() - V / m);
    },
    get duration() {
      const V = S.calculatedDuration === null ? $f(S) : S.calculatedDuration;
      return Ct(V);
    },
    get speed() {
      return m;
    },
    set speed(V) {
      V === m || !h || ((m = V), (D.time = Ct(Y)));
    },
    get state() {
      return k;
    },
    play: j,
    pause: () => {
      (k = "paused"), (P = Y);
    },
    stop: () => {
      (v = !0), k !== "idle" && ((k = "idle"), u && u(), Ce());
    },
    cancel: () => {
      L !== null && Xe(L), Ce();
    },
    complete: () => {
      k = "finished";
    },
    sample: (V) => ((_ = 0), Xe(V)),
  };
  return D;
}
function jw(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Lw = jw(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Vw = new Set(["opacity", "clipPath", "filter", "transform"]),
  eo = 10,
  Nw = 2e4,
  Ow = (e, t) => t.type === "spring" || e === "backgroundColor" || !Hm(t.ease);
function Dw(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      Lw() &&
      Vw.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a,
    u = !1;
  const c = () => {
    a = new Promise((p) => {
      l = p;
    });
  };
  c();
  let { keyframes: f, duration: d = 300, ease: m, times: v } = i;
  if (Ow(t, i)) {
    const p = ts({ ...i, repeat: 0, delay: 0 });
    let w = { done: !1, value: f[0] };
    const S = [];
    let T = 0;
    for (; !w.done && T < Nw; ) (w = p.sample(T)), S.push(w.value), (T += eo);
    (v = void 0), (f = S), (d = T - eo), (m = "linear");
  }
  const y = Fx(e.owner.current, t, f, { ...i, duration: d, ease: m, times: v }),
    C = () => {
      (u = !1), y.cancel();
    },
    g = () => {
      (u = !0), $.update(C), l(), c();
    };
  return (
    (y.onfinish = () => {
      u || (e.set(Bx(f, i)), r && r(), g());
    }),
    {
      then(p, w) {
        return a.then(p, w);
      },
      attachTimeline(p) {
        return (y.timeline = p), (y.onfinish = null), oe;
      },
      get time() {
        return Ct(y.currentTime || 0);
      },
      set time(p) {
        y.currentTime = wn(p);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(p) {
        y.playbackRate = p;
      },
      get duration() {
        return Ct(d);
      },
      play: () => {
        s || (y.play(), ot(C));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: p } = y;
        if (p) {
          const w = ts({ ...i, autoplay: !1 });
          e.setWithVelocity(w.sample(p - eo).value, w.sample(p).value, eo);
        }
        g();
      },
      complete: () => {
        u || y.finish();
      },
      cancel: g,
    }
  );
}
function Rw({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: oe,
      pause: oe,
      stop: oe,
      then: (o) => (o(), Promise.resolve()),
      cancel: oe,
      complete: oe,
    }
  );
  return t
    ? ts({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const zw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Iw = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Fw = { type: "keyframes", duration: 0.8 },
  Bw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  $w = (e, { keyframes: t }) =>
    t.length > 2
      ? Fw
      : bn.has(e)
      ? e.startsWith("scale")
        ? Iw(t[1])
        : zw
      : Bw,
  ga = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (qt.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Uw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Hw(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Ou) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Uw.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Ww = /([a-z-]*)\(.*?\)/g,
  va = {
    ...qt,
    getAnimatableNone: (e) => {
      const t = e.match(Ww);
      return t ? t.map(Hw).join(" ") : e;
    },
  },
  Yw = {
    ...Mm,
    color: ye,
    backgroundColor: ye,
    outlineColor: ye,
    fill: ye,
    stroke: ye,
    borderColor: ye,
    borderTopColor: ye,
    borderRightColor: ye,
    borderBottomColor: ye,
    borderLeftColor: ye,
    filter: va,
    WebkitFilter: va,
  },
  Xu = (e) => Yw[e];
function u0(e, t) {
  let n = Xu(e);
  return (
    n !== va && (n = qt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const c0 = (e) => /^0[^.\s]+$/.test(e);
function Gw(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || c0(e);
}
function Xw(e, t, n, r) {
  const i = ga(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      Gw(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = u0(t, l);
    }
  return o;
}
function Kw({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Ku(e, t) {
  return e[t] || e.default || e;
}
const Qu =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Ku(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - wn(s);
    const a = Xw(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = ga(e, u),
      d = ga(e, c);
    let m = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (v) => {
        t.set(v), o.onUpdate && o.onUpdate(v);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (Kw(o) || (m = { ...m, ...$w(e, m) }),
      m.duration && (m.duration = wn(m.duration)),
      m.repeatDelay && (m.repeatDelay = wn(m.repeatDelay)),
      !f || !d || Ix.current || o.type === !1 || wm.skipAnimations)
    )
      return Rw(m);
    if (
      !r.isHandoff &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const v = Dw(t, e, m);
      if (v) return v;
    }
    return ts(m);
  };
function ns(e) {
  return !!(Se(e) && e.add);
}
const f0 = (e) => /^\-?\d*\.?\d+$/.test(e);
function Zu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function qu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ju {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Zu(this.subscriptions, t), () => qu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Uf = 30,
  Qw = (e) => !isNaN(parseFloat(e)),
  Qr = { current: void 0 };
class Zw {
  constructor(t, n = {}) {
    (this.version = "11.0.8"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = Sn.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = Qw(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = Sn.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ju());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            $.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return Qr.current && Qr.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Sn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Uf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Uf);
    return Gu(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Je(e, t) {
  return new Zw(e, t);
}
const d0 = (e) => (t) => t.test(e),
  qw = { test: (e) => e === "auto", parse: (e) => e },
  h0 = [pr, N, dt, jt, rx, nx, qw],
  kr = (e) => h0.find(d0(e)),
  Jw = [...h0, ye, qt],
  e2 = (e) => Jw.find(d0(e));
function t2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Je(n));
}
function n2(e, t) {
  const n = bs(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = vx(o[s]);
    t2(e, s, l);
  }
}
function r2(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && (f0(c) || c0(c))
            ? (c = parseFloat(c))
            : !e2(c) && qt.test(u) && (c = u0(a, u)),
          e.addValue(a, Je(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function i2(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function o2(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = i2(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function s2({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function l2(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function p0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      m = l[f];
    if (!d || m === void 0 || (c && s2(c, f))) continue;
    const v = { delay: n, elapsed: 0, ...Ku(o || {}, f) };
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[xm];
      if (g) {
        const h = window.HandoffAppearAnimations(g, f, d, $);
        h !== null && ((v.elapsed = h), (v.isHandoff = !0));
      }
    }
    let y = !v.isHandoff && !l2(d, m);
    if (
      (v.type === "spring" && (d.getVelocity() || v.velocity) && (y = !1),
      d.animation && (y = !1),
      y)
    )
      continue;
    d.start(Qu(f, d, m, e.shouldReduceMotion && bn.has(f) ? { type: !1 } : v));
    const C = d.animation;
    ns(a) && (a.add(f), C.then(() => a.remove(f))), u.push(C);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && n2(e, s);
      }),
    u
  );
}
function ya(e, t, n = {}) {
  const r = bs(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(p0(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return a2(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function a2(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(u2)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            ya(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function u2(e, t) {
  return e.sortNodePosition(t);
}
function c2(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => ya(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = ya(e, t, n);
  else {
    const i = typeof t == "function" ? bs(e, t, n.custom) : t;
    r = Promise.all(p0(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const f2 = [...Lu].reverse(),
  d2 = Lu.length;
function h2(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => c2(e, n, r)));
}
function p2(e) {
  let t = h2(e);
  const n = g2();
  let r = !0;
  const i = (a, u) => {
    const c = bs(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...m } = c;
      a = { ...a, ...m, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let v = {},
      y = 1 / 0;
    for (let g = 0; g < d2; g++) {
      const h = f2[g],
        p = n[h],
        w = c[h] !== void 0 ? c[h] : f[h],
        S = vi(w),
        T = h === u ? p.isActive : null;
      T === !1 && (y = g);
      let k = w === f[h] && w !== c[h] && S;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (p.protectedKeys = { ...v }),
        (!p.isActive && T === null) ||
          (!w && !p.prevProp) ||
          ks(w) ||
          typeof w == "boolean")
      )
        continue;
      let _ =
          m2(p.prevProp, w) ||
          (h === u && p.isActive && !k && S) ||
          (g > y && S),
        L = !1;
      const Q = Array.isArray(w) ? w : [w];
      let O = Q.reduce(i, {});
      T === !1 && (O = {});
      const { prevResolvedValues: se = {} } = p,
        Y = { ...se, ...O },
        Xe = (H) => {
          (_ = !0),
            m.has(H) && ((L = !0), m.delete(H)),
            (p.needsAnimating[H] = !0);
        };
      for (const H in Y) {
        const Ce = O[H],
          M = se[H];
        if (v.hasOwnProperty(H)) continue;
        let j = !1;
        qo(Ce) && qo(M) ? (j = !$m(Ce, M)) : (j = Ce !== M),
          j
            ? Ce !== void 0
              ? Xe(H)
              : m.add(H)
            : Ce !== void 0 && m.has(H)
            ? Xe(H)
            : (p.protectedKeys[H] = !0);
      }
      (p.prevProp = w),
        (p.prevResolvedValues = O),
        p.isActive && (v = { ...v, ...O }),
        r && e.blockInitialAnimation && (_ = !1),
        _ &&
          (!k || L) &&
          d.push(
            ...Q.map((H) => ({ animation: H, options: { type: h, ...a } }))
          );
    }
    if (m.size) {
      const g = {};
      m.forEach((h) => {
        const p = e.getBaseTarget(h);
        p !== void 0 && (g[h] = p);
      }),
        d.push({ animation: g });
    }
    let C = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (C = !1),
      (r = !1),
      C ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((m) => {
        var v;
        return (v = m.animationState) === null || v === void 0
          ? void 0
          : v.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function m2(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !$m(t, e) : !1;
}
function ln(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function g2() {
  return {
    animate: ln(!0),
    whileInView: ln(),
    whileHover: ln(),
    whileTap: ln(),
    whileDrag: ln(),
    whileFocus: ln(),
    exit: ln(),
  };
}
class v2 extends nn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = p2(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), ks(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let y2 = 0;
class x2 extends nn {
  constructor() {
    super(...arguments), (this.id = y2++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const w2 = { animation: { Feature: v2 }, exit: { Feature: x2 } },
  Hf = (e, t) => Math.abs(e - t);
function S2(e, t) {
  const n = Hf(e.x, t.x),
    r = Hf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class m0 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = dl(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          m = S2(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !m) return;
        const { point: v } = f,
          { timestamp: y } = ce;
        this.history.push({ ...v, timestamp: y });
        const { onStart: C, onMove: g } = this.handlers;
        d ||
          (C && C(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = fl(d, this.transformPagePoint)),
          $.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: m, onSessionEnd: v, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const C = dl(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : fl(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(f, C), v && v(f, C);
      }),
      !Rm(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Ms(t),
      l = fl(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = ce;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, dl(l, this.history)),
      (this.removeListeners = St(
        wt(this.contextWindow, "pointermove", this.handlePointerMove),
        wt(this.contextWindow, "pointerup", this.handlePointerUp),
        wt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ot(this.updatePoint);
  }
}
function fl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Wf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function dl({ point: e }, t) {
  return {
    point: e,
    delta: Wf(e, g0(t)),
    offset: Wf(e, C2(t)),
    velocity: P2(t, 0.1),
  };
}
function C2(e) {
  return e[0];
}
function g0(e) {
  return e[e.length - 1];
}
function P2(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = g0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > wn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Ct(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Re(e) {
  return e.max - e.min;
}
function xa(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Yf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = J(t.min, t.max, e.origin)),
    (e.scale = Re(n) / Re(t)),
    (xa(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = J(n.min, n.max, e.origin) - e.originPoint),
    (xa(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Zr(e, t, n, r) {
  Yf(e.x, t.x, n.x, r ? r.originX : void 0),
    Yf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Gf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Re(t));
}
function E2(e, t, n) {
  Gf(e.x, t.x, n.x), Gf(e.y, t.y, n.y);
}
function Xf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Re(t));
}
function qr(e, t, n) {
  Xf(e.x, t.x, n.x), Xf(e.y, t.y, n.y);
}
function k2(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? J(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? J(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Kf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function T2(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Kf(e.x, n, i), y: Kf(e.y, t, r) };
}
function Qf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function A2(e, t) {
  return { x: Qf(e.x, t.x), y: Qf(e.y, t.y) };
}
function M2(e, t) {
  let n = 0.5;
  const r = Re(e),
    i = Re(t);
  return (
    i > r
      ? (n = ar(t.min, t.max - r, e.min))
      : r > i && (n = ar(e.min, e.max - i, t.min)),
    Zt(0, 1, n)
  );
}
function b2(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const wa = 0.35;
function _2(e = wa) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = wa),
    { x: Zf(e, "left", "right"), y: Zf(e, "top", "bottom") }
  );
}
function Zf(e, t, n) {
  return { min: qf(e, t), max: qf(e, n) };
}
function qf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Jf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Gn = () => ({ x: Jf(), y: Jf() }),
  ed = () => ({ min: 0, max: 0 }),
  re = () => ({ x: ed(), y: ed() });
function Be(e) {
  return [e("x"), e("y")];
}
function v0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function j2({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function L2(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function hl(e) {
  return e === void 0 || e === 1;
}
function Sa({ scale: e, scaleX: t, scaleY: n }) {
  return !hl(e) || !hl(t) || !hl(n);
}
function cn(e) {
  return Sa(e) || y0(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function y0(e) {
  return td(e.x) || td(e.y);
}
function td(e) {
  return e && e !== "0%";
}
function rs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function nd(e, t, n, r, i) {
  return i !== void 0 && (e = rs(e, i, r)), rs(e, n, r) + t;
}
function Ca(e, t = 0, n = 1, r, i) {
  (e.min = nd(e.min, t, n, r, i)), (e.max = nd(e.max, t, n, r, i));
}
function x0(e, { x: t, y: n }) {
  Ca(e.x, t.translate, t.scale, t.originPoint),
    Ca(e.y, n.translate, n.scale, n.originPoint);
}
function V2(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Xn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), x0(e, s)),
      r && cn(o.latestValues) && Xn(e, o.latestValues));
  }
  (t.x = rd(t.x)), (t.y = rd(t.y));
}
function rd(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Ot(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function id(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = J(e.min, e.max, o);
  Ca(e, t[n], t[r], s, t.scale);
}
const N2 = ["x", "scaleX", "originX"],
  O2 = ["y", "scaleY", "originY"];
function Xn(e, t) {
  id(e.x, t, N2), id(e.y, t, O2);
}
function w0(e, t) {
  return v0(L2(e.getBoundingClientRect(), t));
}
function D2(e, t, n) {
  const r = w0(e, n),
    { scroll: i } = t;
  return i && (Ot(r.x, i.offset.x), Ot(r.y, i.offset.y)), r;
}
const S0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  R2 = new WeakMap();
class z2 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = re()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ms(c, "page").point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: m, onDragStart: v } = this.getProps();
        if (
          d &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Im(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Be((C) => {
            let g = this.getAxisMotionValue(C).get() || 0;
            if (dt.test(g)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const p = h.layout.layoutBox[C];
                p && (g = Re(p) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[C] = g;
          }),
          v && $.update(() => v(c, f), !1, !0);
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: m,
          onDirectionLock: v,
          onDrag: y,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: C } = f;
        if (m && this.currentDirection === null) {
          (this.currentDirection = I2(C)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, C),
          this.updateAxis("y", f.point, C),
          this.visualElement.render(),
          y && y(c, f);
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        Be((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new m0(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: S0(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && $.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !to(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = k2(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Wn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = T2(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = _2(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Be((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = b2(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Wn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = D2(r, i.root, this.visualElement.getTransformPagePoint());
    let s = A2(i.layout.layoutBox, o);
    if (n) {
      const l = n(j2(s));
      (this.hasMutatedConstraints = !!l), l && (s = v0(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = Be((c) => {
        if (!to(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Qu(t, r, 0, n));
  }
  stopAnimation() {
    Be((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Be((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Be((n) => {
      const { drag: r } = this.getProps();
      if (!to(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - J(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Wn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Be((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = M2({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Be((s) => {
        if (!to(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(J(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    R2.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = wt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Wn(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = yt(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Be((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = wa,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function to(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function I2(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class F2 extends nn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = oe),
      (this.removeListeners = oe),
      (this.controls = new z2(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || oe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const od = (e) => (t, n) => {
  e && $.update(() => e(t, n));
};
class B2 extends nn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = oe);
  }
  onPointerDown(t) {
    this.session = new m0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: S0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: od(t),
      onStart: od(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && $.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = wt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function $2() {
  const e = A.useContext(Mu);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = A.useId();
  return A.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const wo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function sd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Tr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (N.test(e)) e = parseFloat(e);
        else return e;
      const n = sd(e, t.target.x),
        r = sd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  U2 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = qt.parse(e);
      if (i.length > 5) return r;
      const o = qt.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = J(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class H2 extends U.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    G1(W2),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (wo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              $.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      ju.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function C0(e) {
  const [t, n] = $2(),
    r = A.useContext(Pm);
  return U.createElement(H2, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: A.useContext(Em),
    isPresent: t,
    safeToRemove: n,
  });
}
const W2 = {
    borderRadius: {
      ...Tr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Tr,
    borderTopRightRadius: Tr,
    borderBottomLeftRadius: Tr,
    borderBottomRightRadius: Tr,
    boxShadow: U2,
  },
  P0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Y2 = P0.length,
  ld = (e) => (typeof e == "string" ? parseFloat(e) : e),
  ad = (e) => typeof e == "number" || N.test(e);
function G2(e, t, n, r, i, o) {
  i
    ? ((e.opacity = J(0, n.opacity !== void 0 ? n.opacity : 1, X2(r))),
      (e.opacityExit = J(t.opacity !== void 0 ? t.opacity : 1, 0, K2(r))))
    : o &&
      (e.opacity = J(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < Y2; s++) {
    const l = `border${P0[s]}Radius`;
    let a = ud(t, l),
      u = ud(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || ad(a) === ad(u)
        ? ((e[l] = Math.max(J(ld(a), ld(u), r), 0)),
          (dt.test(u) || dt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = J(t.rotate || 0, n.rotate || 0, r));
}
function ud(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const X2 = E0(0, 0.5, Zm),
  K2 = E0(0.5, 0.95, oe);
function E0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ar(e, t, r)));
}
function cd(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Fe(e, t) {
  cd(e.x, t.x), cd(e.y, t.y);
}
function fd(e, t, n, r, i) {
  return (
    (e -= t), (e = rs(e, 1 / n, r)), i !== void 0 && (e = rs(e, 1 / i, r)), e
  );
}
function Q2(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (dt.test(t) &&
      ((t = parseFloat(t)), (t = J(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = J(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = fd(e.min, t, n, l, i)),
    (e.max = fd(e.max, t, n, l, i));
}
function dd(e, t, [n, r, i], o, s) {
  Q2(e, t[n], t[r], t[i], t.scale, o, s);
}
const Z2 = ["x", "scaleX", "originX"],
  q2 = ["y", "scaleY", "originY"];
function hd(e, t, n, r) {
  dd(e.x, t, Z2, n ? n.x : void 0, r ? r.x : void 0),
    dd(e.y, t, q2, n ? n.y : void 0, r ? r.y : void 0);
}
function pd(e) {
  return e.translate === 0 && e.scale === 1;
}
function k0(e) {
  return pd(e.x) && pd(e.y);
}
function J2(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function T0(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function md(e) {
  return Re(e.x) / Re(e.y);
}
class eS {
  constructor() {
    this.members = [];
  }
  add(t) {
    Zu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (qu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function gd(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const tS = (e, t) => e.depth - t.depth;
class nS {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Zu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    qu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(tS),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function rS(e, t) {
  const n = Sn.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (ot(r), e(o - t));
    };
  return $.read(r, !0), () => ot(r);
}
function iS(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function oS(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function sS(e, t, n) {
  const r = Se(e) ? e : Je(e);
  return r.start(Qu("", r, t, n)), r.animation;
}
const vd = ["", "X", "Y", "Z"],
  lS = { visibility: "hidden" },
  yd = 1e3;
let aS = 0;
const fn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function A0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = aS++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (fn.totalNodes =
              fn.resolvedTargetDeltas =
              fn.recalculatedProjection =
                0),
            this.nodes.forEach(fS),
            this.nodes.forEach(gS),
            this.nodes.forEach(vS),
            this.nodes.forEach(dS),
            iS(fn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new nS());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ju()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = oS(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = rS(d, 250)),
            wo.hasAnimatedSinceResize &&
              ((wo.hasAnimatedSinceResize = !1), this.nodes.forEach(wd));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || CS,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: g } =
                  c.getProps(),
                h = !this.targetLayout || !T0(this.targetLayout, v) || m,
                p = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, p);
                const w = { ...Ku(y, "layout"), onPlay: C, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                d || wd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        ot(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(yS),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(xd);
        return;
      }
      this.isUpdating || this.nodes.forEach(pS),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(mS),
        this.nodes.forEach(uS),
        this.nodes.forEach(cS),
        this.clearAllSnapshots();
      const l = Sn.now();
      (ce.delta = Zt(0, 1e3 / 60, l - ce.timestamp)),
        (ce.timestamp = l),
        (ce.isProcessing = !0),
        il.update.process(ce),
        il.preRender.process(ce),
        il.render.process(ce),
        (ce.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ju.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(hS), this.sharedNodes.forEach(xS);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        $.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      $.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = re()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !k0(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || cn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        PS(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return re();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Ot(l.x, a.offset.x), Ot(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = re();
      Fe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Fe(l, s);
            const { scroll: d } = this.root;
            d && (Ot(l.x, -d.offset.x), Ot(l.y, -d.offset.y));
          }
          Ot(l.x, c.offset.x), Ot(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = re();
      Fe(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Xn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          cn(c.latestValues) && Xn(a, c.latestValues);
      }
      return cn(this.latestValues) && Xn(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = re();
      Fe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !cn(u.latestValues)) continue;
        Sa(u.latestValues) && u.updateSnapshot();
        const c = re(),
          f = u.measurePageBox();
        Fe(c, f),
          hd(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return cn(this.latestValues) && hd(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ce.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = re()),
              (this.relativeTargetOrigin = re()),
              qr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Fe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = re()), (this.targetWithTransforms = re())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                E2(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Fe(this.target, this.layout.layoutBox),
                x0(this.target, this.targetDelta))
              : Fe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = re()),
                (this.relativeTargetOrigin = re()),
                qr(this.relativeTargetOrigin, this.target, m.target),
                Fe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          fn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Sa(this.parent.latestValues) ||
          y0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ce.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Fe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      V2(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = re()));
      const { target: v } = l;
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = Gn()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Gn()),
        (this.projectionDeltaWithTransform = Gn()));
      const y = this.projectionTransform;
      Zr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = gd(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        fn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = Gn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = re(),
        m = a ? a.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = m !== v,
        C = this.getStack(),
        g = !C || C.members.length <= 1,
        h = !!(y && !g && this.options.crossfade === !0 && !this.path.some(SS));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Sd(f.x, s.x, S),
          Sd(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            wS(this.relativeTarget, this.relativeTargetOrigin, d, S),
            p && J2(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = re()),
            Fe(p, this.relativeTarget)),
          y &&
            ((this.animationValues = c), G2(c, u, this.latestValues, S, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (ot(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = $.update(() => {
          (wo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = sS(0, yd, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(yd),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          M0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || re();
          const f = Re(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Re(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        Fe(l, a),
          Xn(l, c),
          Zr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new eS()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < vd.length; c++) {
        const f = "rotate" + vd[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return lS;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = yo(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = yo(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !cn(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = gd(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: m, y: v } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const y in Ko) {
        if (d[y] === void 0) continue;
        const { correct: C, applyTo: g } = Ko[y],
          h = u.transform === "none" ? d[y] : C(d[y], f);
        if (g) {
          const p = g.length;
          for (let w = 0; w < p; w++) u[g[w]] = h;
        } else u[y] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? yo(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(xd),
        this.root.sharedNodes.clear();
    }
  };
}
function uS(e) {
  e.updateLayout();
}
function cS(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? Be((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Re(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : M0(o, n.layoutBox, r) &&
        Be((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Re(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const l = Gn();
    Zr(l, r, n.layoutBox);
    const a = Gn();
    s ? Zr(a, e.applyTransform(i, !0), n.measuredBox) : Zr(a, r, n.layoutBox);
    const u = !k0(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const v = re();
          qr(v, n.layoutBox, d.layoutBox);
          const y = re();
          qr(y, r, m.layoutBox),
            T0(v, y) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function fS(e) {
  fn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function dS(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function hS(e) {
  e.clearSnapshot();
}
function xd(e) {
  e.clearMeasurements();
}
function pS(e) {
  e.isLayoutDirty = !1;
}
function mS(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function wd(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function gS(e) {
  e.resolveTargetDelta();
}
function vS(e) {
  e.calcProjection();
}
function yS(e) {
  e.resetRotation();
}
function xS(e) {
  e.removeLeadSnapshot();
}
function Sd(e, t, n) {
  (e.translate = J(t.translate, 0, n)),
    (e.scale = J(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Cd(e, t, n, r) {
  (e.min = J(t.min, n.min, r)), (e.max = J(t.max, n.max, r));
}
function wS(e, t, n, r) {
  Cd(e.x, t.x, n.x, r), Cd(e.y, t.y, n.y, r);
}
function SS(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const CS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Pd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Ed = Pd("applewebkit/") && !Pd("chrome/") ? Math.round : oe;
function kd(e) {
  (e.min = Ed(e.min)), (e.max = Ed(e.max));
}
function PS(e) {
  kd(e.x), kd(e.y);
}
function M0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !xa(md(t), md(n), 0.2))
  );
}
const ES = A0({
    attachResizeListener: (e, t) => yt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  pl = { current: void 0 },
  b0 = A0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!pl.current) {
        const e = new ES({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (pl.current = e);
      }
      return pl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  kS = {
    pan: { Feature: B2 },
    drag: { Feature: F2, ProjectionNode: b0, MeasureLayout: C0 },
  },
  TS = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function AS(e) {
  const t = TS.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Pa(e, t, n = 1) {
  const [r, i] = AS(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return f0(s) ? parseFloat(s) : s;
  } else return Qo(i) ? Pa(i, t, n + 1) : i;
}
function MS(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Qo(o)) return;
      const s = Pa(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Qo(o)) continue;
    const s = Pa(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const bS = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  _0 = (e) => bS.has(e),
  _S = (e) => Object.keys(e).some(_0),
  Td = (e) => e === pr || e === N,
  Ad = (e, t) => parseFloat(e.split(", ")[t]),
  Md =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Ad(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Ad(o[1], e) : 0;
      }
    },
  jS = new Set(["x", "y", "z"]),
  LS = Ti.filter((e) => !jS.has(e));
function VS(e) {
  const t = [];
  return (
    LS.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const ur = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Md(4, 13),
  y: Md(5, 14),
};
ur.translateX = ur.x;
ur.translateY = ur.y;
const NS = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = ur[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = ur[u](a, o));
      }),
      e
    );
  },
  OS = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(_0);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = kr(c);
        const d = t[a];
        let m;
        if (qo(d)) {
          const v = d.length,
            y = d[0] === null ? 1 : 0;
          (c = d[y]), (f = kr(c));
          for (let C = y; C < v && d[C] !== null; C++)
            m ? _s(kr(d[C]) === m) : (m = kr(d[C]));
        } else m = kr(d);
        if (f !== m)
          if (Td(f) && Td(m)) {
            const v = u.get();
            typeof v == "string" && u.set(parseFloat(v)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && m === N && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            m != null &&
            m.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = VS(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = NS(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Es && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function DS(e, t, n, r) {
  return _S(t) ? OS(e, t, n, r) : { target: t, transitionEnd: r };
}
const RS = (e, t, n, r) => {
    const i = MS(e, t, r);
    return (t = i.target), (r = i.transitionEnd), DS(e, t, n, r);
  },
  Ea = { current: null },
  j0 = { current: !1 };
function zS() {
  if (((j0.current = !0), !!Es))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ea.current = e.matches);
      e.addListener(t), t();
    } else Ea.current = !1;
}
function IS(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Se(o)) e.addValue(i, o), ns(r) && r.add(i);
    else if (Se(s)) e.addValue(i, Je(o, { owner: e })), ns(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, Je(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const bd = new WeakMap(),
  L0 = Object.keys(yi),
  FS = L0.length,
  _d = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  BS = Vu.length;
class $S {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => $.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Ts(n)),
      (this.isVariantNode = Cm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && Se(d) && (d.set(l[f], !1), ns(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      bd.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      j0.current || zS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ea.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    bd.delete(this.current),
      this.projection && this.projection.unmount(),
      ot(this.notifyUpdate),
      ot(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = bn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && $.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let a = 0; a < FS; a++) {
      const u = L0[a],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: m,
        } = yi[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          m && (l = m));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && Wn(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: m,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : re();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < _d.length; r++) {
      const i = _d[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = IS(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < BS; r++) {
      const i = Vu[r],
        o = this.props[i];
      (vi(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Je(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Bu(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Se(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ju()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class V0 extends $S {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    i
  ) {
    const o = o2(r, t || {}, this);
    if (i) {
      r2(this, r, o);
      const s = RS(this, r, o, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function US(e) {
  return window.getComputedStyle(e);
}
class HS extends V0 {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (bn.has(n)) {
      const r = Xu(n);
      return (r && r.default) || 0;
    } else {
      const r = US(t),
        i = (Am(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return w0(t, n);
  }
  build(t, n, r, i) {
    Du(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Fu(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Se(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Lm(t, n, r, i);
  }
}
class WS extends V0 {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (bn.has(n)) {
      const r = Xu(n);
      return (r && r.default) || 0;
    }
    return (n = Vm.has(n) ? n : _u(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return re();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Om(t, n);
  }
  build(t, n, r, i) {
    zu(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Nm(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Iu(t.tagName)), super.mount(t);
  }
}
const YS = (e, t) =>
    Nu(e)
      ? new WS(t, { enableHardwareAcceleration: !1 })
      : new HS(t, { enableHardwareAcceleration: !0 }),
  GS = { layout: { ProjectionNode: b0, MeasureLayout: C0 } },
  XS = { ...w2, ...Ox, ...kS, ...GS },
  et = W1((e, t) => Cx(e, t, XS, YS));
function ka(e) {
  const t = As(() => Je(e)),
    { isStatic: n } = A.useContext(Au);
  if (n) {
    const [, r] = A.useState(e);
    A.useEffect(() => t.on("change", r), []);
  }
  return t;
}
const KS = (e) => e && typeof e == "object" && e.mix,
  QS = (e) => (KS(e) ? e.mix : void 0);
function ZS(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    l = Yu(i, o, { mixer: QS(o[0]), ...s });
  return t ? l(r) : l;
}
function ec(e, t) {
  const n = ka(t()),
    r = () => n.set(t());
  return (
    r(),
    bu(() => {
      const i = () => $.update(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), ot(r);
      };
    }),
    n
  );
}
function qS(e) {
  (Qr.current = []), e();
  const t = ec(Qr.current, e);
  return (Qr.current = void 0), t;
}
function Ta(e, t, n, r) {
  if (typeof e == "function") return qS(e);
  const i = typeof t == "function" ? t : ZS(t, n, r);
  return Array.isArray(e) ? jd(e, i) : jd([e], ([o]) => i(o));
}
function jd(e, t) {
  const n = As(() => []);
  return ec(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function JS(e, ...t) {
  const n = e.length;
  function r() {
    let i = "";
    for (let o = 0; o < n; o++) {
      i += e[o];
      const s = t[o];
      s && (i += Se(s) ? s.get() : s);
    }
    return i;
  }
  return ec(t.filter(Se), r);
}
function e3(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t && (_s(!!t.current), (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
const So = new WeakMap();
let Lt;
function t3(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function n3({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = So.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return t3(e, n);
        },
      });
    });
}
function r3(e) {
  e.forEach(n3);
}
function i3() {
  typeof ResizeObserver > "u" || (Lt = new ResizeObserver(r3));
}
function o3(e, t) {
  Lt || i3();
  const n = e3(e);
  return (
    n.forEach((r) => {
      let i = So.get(r);
      i || ((i = new Set()), So.set(r, i)),
        i.add(t),
        Lt == null || Lt.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = So.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || Lt == null || Lt.unobserve(r);
      });
    }
  );
}
const Co = new Set();
let Jr;
function s3() {
  (Jr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    Co.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Jr);
}
function l3(e) {
  return (
    Co.add(e),
    Jr || s3(),
    () => {
      Co.delete(e), !Co.size && Jr && (Jr = void 0);
    }
  );
}
function a3(e, t) {
  return typeof e == "function" ? l3(e) : o3(e, t);
}
const u3 = 50,
  Ld = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  c3 = () => ({ time: 0, x: Ld(), y: Ld() }),
  f3 = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Vd(e, t, n, r) {
  const i = n[t],
    { length: o, position: s } = f3[t],
    l = i.current,
    a = n.time;
  (i.current = e["scroll" + s]),
    (i.scrollLength = e["scroll" + o] - e["client" + o]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = ar(0, i.scrollLength, i.current));
  const u = r - a;
  i.velocity = u > u3 ? 0 : Gu(i.current - l, u);
}
function d3(e, t, n) {
  Vd(e, "x", t, n), Vd(e, "y", t, n), (t.time = n);
}
function h3(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        l = r.parentNode;
      for (; !s; ) l.tagName === "svg" && (s = l), (l = r.parentNode);
      r = s;
    } else break;
  return n;
}
const p3 = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Aa = { start: 0, center: 0.5, end: 1 };
function Nd(e, t, n = 0) {
  let r = 0;
  if ((Aa[e] !== void 0 && (e = Aa[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const m3 = [0, 0];
function g3(e, t, n, r) {
  let i = Array.isArray(e) ? e : m3,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Aa[e] ? e : "0"])),
    (o = Nd(i[0], n, r)),
    (s = Nd(i[1], t)),
    o - s
  );
}
const v3 = { x: 0, y: 0 };
function y3(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function x3(e, t, n) {
  let { offset: r = p3.All } = n;
  const { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    l = i !== e ? h3(i, e) : v3,
    a = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : y3(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let c = !t[o].interpolate;
  const f = r.length;
  for (let d = 0; d < f; d++) {
    const m = g3(r[d], u[s], a[s], l[o]);
    !c && m !== t[o].interpolatorOffsets[d] && (c = !0), (t[o].offset[d] = m);
  }
  c &&
    ((t[o].interpolate = Yu(t[o].offset, s0(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function w3(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function S3(e, t, n, r = {}) {
  return {
    measure: () => w3(e, r.target, n),
    update: (i) => {
      d3(e, n, i), (r.offset || r.target) && x3(e, n, r);
    },
    notify: () => t(n),
  };
}
const Ar = new WeakMap(),
  Od = new WeakMap(),
  ml = new WeakMap(),
  Dd = (e) => (e === document.documentElement ? window : e);
function C3(e, { container: t = document.documentElement, ...n } = {}) {
  let r = ml.get(t);
  r || ((r = new Set()), ml.set(t, r));
  const i = c3(),
    o = S3(t, e, i, n);
  if ((r.add(o), !Ar.has(t))) {
    const l = () => {
        for (const d of r) d.measure();
      },
      a = () => {
        for (const d of r) d.update(ce.timestamp);
      },
      u = () => {
        for (const d of r) d.notify();
      },
      c = () => {
        $.read(l, !1, !0), $.read(a, !1, !0), $.update(u, !1, !0);
      };
    Ar.set(t, c);
    const f = Dd(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && Od.set(t, a3(t, c)),
      f.addEventListener("scroll", c, { passive: !0 });
  }
  const s = Ar.get(t);
  return (
    $.read(s, !1, !0),
    () => {
      var l;
      ot(s);
      const a = ml.get(t);
      if (!a || (a.delete(o), a.size)) return;
      const u = Ar.get(t);
      Ar.delete(t),
        u &&
          (Dd(t).removeEventListener("scroll", u),
          (l = Od.get(t)) === null || l === void 0 || l(),
          window.removeEventListener("resize", u));
    }
  );
}
function Rd(e, t) {
  zx(!!(!t || t.current));
}
const P3 = () => ({
  scrollX: Je(0),
  scrollY: Je(0),
  scrollXProgress: Je(0),
  scrollYProgress: Je(0),
});
function tc({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = As(P3);
  return (
    (n ? bu : A.useEffect)(
      () => (
        Rd("target", t),
        Rd("container", e),
        C3(
          ({ x: s, y: l }) => {
            i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(l.current),
              i.scrollYProgress.set(l.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
const Dr = A.forwardRef(({ className: e, value: t, type: n }, r) => {
  const [o, s] = A.useState(!1);
  let l = ka(0),
    a = ka(0);
  function u({ currentTarget: c, clientX: f, clientY: d }) {
    let { left: m, top: v } = c.getBoundingClientRect();
    l.set(f - m), a.set(d - v);
  }
  return x.jsx("div", {
    className: "w-full bg-zinc-800 rounded-xl",
    children: x.jsx(et.div, {
      style: {
        background: JS`
        radial-gradient(
          ${o ? "100px" : "0px"} circle at ${l}px ${a}px,
          var(--purple-700),
          transparent 90%
        )
      `,
      },
      onMouseMove: u,
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      className: "p-[2px] rounded-lg transition duration-300 group/input",
      children: x.jsxs("div", {
        className: ki(
          `flex  w-full border-none  text-white shadow-input rounded-md px-4 py-3   file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           cursor-pointer
           bg-zinc-800

           text-xl md:text-7xl font-bold
           flex-col gap-4 items-center
           `,
          e
        ),
        ref: r,
        children: [
          t,
          x.jsx("p", {
            className: "uppercase text-[10px] md:text-sm",
            children: n,
          }),
        ],
      }),
    }),
  });
});
Dr.displayName = "Input";
const E3 = ({ hours: e, days: t, minutes: n, seconds: r }) =>
  x.jsxs("div", {
    className: "countdown flex gap-4 items-center mt-12",
    children: [
      x.jsx(Dr, { className: "", value: t, type: "days" }),
      x.jsx(Dr, { className: "", value: e, type: "hours" }),
      x.jsx(Dr, { className: "", value: n, type: "minutes" }),
      x.jsx(Dr, { className: "", value: r, type: "seconds" }),
    ],
  });
function k3() {
  const e = j1({
      onProgressChange: (o) => {
        e.ref.current &&
          e.ref.current.style.setProperty("--progress", o.toString());
      },
    }),
    { days: t, hours: n, minutes: r, seconds: i } = Qy("2024-03-20T23:59:59");
  return x.jsxs("div", {
    className:
      "min-h-screen w-full bg-slate-900  bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center ",
    children: [
      x.jsx(Gy, {
        className: "-top-40 left-0 md:left-60 md:-top-20 z-[12]",
        fill: "#faeacd",
      }),
      x.jsx(Xy, { className: "-top-40 -right-60 z-[12]", fill: "#faeacd" }),
      x.jsx("div", {
        className:
          "absolute w-full h-full min-h-screen bg-black  z-[10] overflow-hidden",
        children: x.jsx("video", {
          src: "./assets/announcement.mp4",
          autoPlay: !0,
          muted: !0,
          loop: !0,
          className: "min-h-screen z-[-10] opacity-50 object-cover ",
        }),
      }),
      x.jsx("div", {
        className:
          "absolute pointer-events-none inset-0 flex items-center  justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
      }),
      x.jsxs("p", {
        ref: e.ref,
        style: { letterSpacing: "calc(30px * var(--progress))" },
        className:
          "heroHeading mt-12 text-3xl md:text-8xl font-bold relative z-20 py-8 text-center font-sans bg-clip-text text-transparent tracking-wide leading-12  bg-gradient-to-b from-neutral-200 to-neutral-500 ",
        children: [
          "ENTHUZIA",
          x.jsx("br", {}),
          " ",
          x.jsx("span", {
            className: "italic font-light mt-12 ",
            children: "2024",
          }),
        ],
      }),
      x.jsx("div", {
        className: "text-white z-[20]",
        children: x.jsx(E3, { hours: n, minutes: r, seconds: i, days: t }),
      }),
    ],
  });
}
const T3 = () =>
    x.jsx("div", {
      className: "  snap-center  overflow-x-hidden",
      children: x.jsx(k3, {}),
    }),
  A3 = () => {
    const e = A.useRef(null),
      { scrollYProgress: t } = tc({
        target: e,
        offset: ["start 0.9", "start 0.25"],
      });
    return x.jsx(et.p, {
      className:
        "text-white text-md md:text-2xl leading-regular font-extralight tracking-loose",
      ref: e,
      style: { opacity: t },
      children:
        "Enthuzia is the annual socio-cultural fest conducted by the Indian Institute of Science, Education & Research, Bhopal. It is the most prominent fest organised in Central India. The prime focus of the fest is to guarantee enjoyment & learning opportunities through fun, exciting activities. The fest is a 3-day celebration of arts, culture & coming together of diverse communities. Exciting events & entertaining talent displays make Enthuzia a truly reveling experience for all attending audiences.",
    });
  },
  M3 = () => {
    const e = [
        "./assets/gridgallery/rahgir.jpg",
        "./assets/gridgallery/sunburn.jpg",
        "./assets/gridgallery/dj.png",
        "./assets/gridgallery/crowd.png",
        "./assets/gridgallery/frid.jpg",
        "./assets/gridgallery/rava.jpg",
        "./assets/gridgallery/friddle.png",
      ],
      t = A.useRef(null),
      { scrollYProgress: n } = tc({
        target: t,
        offset: ["start center", "end end"],
      }),
      r = A.useRef(null);
    return x.jsxs(et.div, {
      ref: r,
      initial: { opacity: 0 },
      transition: { duration: 0.6, delay: 0.4 },
      whileInView: { opacity: 1 },
      className:
        "snap-start relative overflow-x-hidden mt-24 md:mt-12 bg-dot-purple-500/[0.3]",
      id: "about",
      children: [
        x.jsx("div", {
          className:
            "absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
        }),
        x.jsx(et.div, {
          ref: r,
          initial: { opacity: 0 },
          transition: { duration: 0.6, delay: 0.4 },
          whileInView: { opacity: 1 },
          children: x.jsx("h1", {
            className:
              "text-[80px] text-center md:text-[160px] md:text-start opacity-30 font-sans flex items-center -z-1",
            children: x.jsx("p", {
              className: "text-stroke font-bold",
              children: "Abóut Us",
            }),
          }),
        }),
        x.jsxs("div", {
          className: " w-full flex flex-col md:flex-row justify-evenly",
          children: [
            x.jsx("div", {
              className:
                " w-full md:w-[50%]  aspect-square px-6 md:px-12 md:-mt-8 z-10",
              children: x.jsx("div", {
                className:
                  "grid auto-rows-[120px] md:auto-rows-[192px] grid-cols-3 md:gap-4",
                ref: t,
                children: e.map((i, o) => {
                  const s = o / 7,
                    l = s + 1 / 7;
                  return x.jsx(
                    b3,
                    { image: i, i: o, range: [s, l], progress: n },
                    o
                  );
                }),
              }),
            }),
            x.jsxs("div", {
              className: "md:w-[50%] md:p-24 px-4",
              children: [
                x.jsx(A3, {}),
                x.jsx("a", {
                  href: "/brochure.pdf",
                  children: x.jsxs("button", {
                    className:
                      "mt-8 px-8 py-2 rounded-full relative bg-zinc-900 hover:bg-violet-950 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600",
                    children: [
                      x.jsx("div", {
                        className:
                          "absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-violet-500 to-transparent",
                      }),
                      x.jsx("span", {
                        className: "relative z-20",
                        children: "Explore Brochure",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  b3 = ({ image: e, i: t, range: n, progress: r }) => {
    const i = Ta(r, n, [0, 1]);
    return x.jsx(
      et.div,
      {
        style: { opacity: i },
        className: `z-10 row-span-1 rounded-xl border border-neutral-700    ${
          t === 3 || t === 6 ? "col-span-2" : ""
        }`,
        children: x.jsx("img", {
          className:
            "w-full h-full aspect-square   shadow-lg object-cover rounded-xl",
          src: e,
        }),
      },
      e
    );
  },
  _3 = ({ images: e, className: t }) => {
    const n = A.useRef(null),
      r = A.useRef(null),
      { scrollYProgress: i } = tc({ target: n, offset: ["0 1", "1.33 1"] });
    Ta(i, [0, 1], [0.5, 1]), Ta(i, [0, 1], [0.6, 1]);
    const o = Math.ceil(e.length / 3),
      s = e.slice(0, o),
      l = e.slice(o, 2 * o),
      a = e.slice(2 * o);
    return x.jsx("div", {
      className: "h-full md:mt-24 z-1 ",
      children: x.jsx("div", {
        className: ki("h-full  items-start overflow-y-auto w-full z-1", t),
        children: x.jsxs("div", {
          className:
            "grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 items-start z-1 max-w-8xl mx-auto gap-10 py-40 px-10",
          ref: r,
          children: [
            x.jsx("div", {
              className: "grid gap-10 ",
              children: s.map((u, c) =>
                x.jsx(
                  et.div,
                  {
                    children: x.jsx(et.div, {
                      src: u,
                      className:
                        "relative hover:scale-110 transition-all h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:bg-zinc-700 bg-zinc-600  ",
                      alt: "thumbnail",
                      children: x.jsxs("button", {
                        className:
                          "relative top-2 left-2 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                        children: [
                          x.jsx("span", {
                            className:
                              "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
                          }),
                          x.jsx("span", {
                            className:
                              "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl",
                            children: "Register here.",
                          }),
                        ],
                      }),
                    }),
                  },
                  "grid-1" + c
                )
              ),
            }),
            x.jsx("div", {
              className: "grid gap-10 md:mt-12",
              children: l.map((u, c) =>
                x.jsx(
                  et.div,
                  {
                    children: x.jsx("div", {
                      src: u,
                      className:
                        "relative hover:scale-110 transition-all h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:bg-zinc-700 bg-zinc-600  ",
                      alt: "thumbnail",
                      children: x.jsxs("button", {
                        className:
                          "relative top-2 left-2 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                        children: [
                          x.jsx("span", {
                            className:
                              "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
                          }),
                          x.jsx("span", {
                            className:
                              "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl",
                            children: "Register here.",
                          }),
                        ],
                      }),
                    }),
                  },
                  "grid-2" + c
                )
              ),
            }),
            x.jsx("div", {
              className: "grid gap-10 ",
              children: a.map((u, c) =>
                x.jsx(
                  et.div,
                  {
                    children: x.jsx("div", {
                      src: u,
                      className:
                        "relative hover:scale-110 transition-all h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:bg-zinc-700 bg-zinc-600 ",
                      alt: "thumbnail",
                      children: x.jsxs("button", {
                        className:
                          "relative top-2 left-2 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                        children: [
                          x.jsx("span", {
                            className:
                              "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
                          }),
                          x.jsx("span", {
                            className:
                              "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl",
                            children: "Register here.",
                          }),
                        ],
                      }),
                    }),
                  },
                  "grid-3" + c
                )
              ),
            }),
          ],
        }),
      }),
    });
  },
  j3 = () =>
    x.jsx("div", {
      className:
        "md:snap-start overflow-x-hidden bg-dot-purple-500/[0.2] md:mt-12 mt-24",
      id: "events",
      children: x.jsxs("div", {
        className: "w-full relative",
        children: [
          x.jsx("h1", {
            className:
              "text-[100px] font-bold text-center md:text-right top-0 md:text-[160px] opacity-30 font-sans text-stroke -z-1  ",
            children: "Evènts🎤",
          }),
          x.jsx(_3, { images: L3, className: "-mt-24 md:-mt-48 z-1" }),
        ],
      }),
    }),
  L3 = [
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  ],
  V3 = () =>
    x.jsx("div", {
      className: " md:snap-start overflow-x-hidden bg-dot-purple-500/[0.2]",
      id: "merch",
      children: x.jsxs("div", {
        className: "w-full relative",
        children: [
          x.jsx("h1", {
            className:
              "select-none font-bold text-[80px] text-center md:text-left  top-0 md:text-[160px] opacity-30 font-sans text-stroke -z-1 ",
            children: "Merchándise",
          }),
          x.jsx("p", {
            className:
              "text-[80px] text-center md:text-center text-white font-bold  top-0 md:text-[80px] opacity-30 font-sans",
            children: " Coming Soon....",
          }),
          x.jsx(N3, {}),
        ],
      }),
    }),
  N3 = () =>
    x.jsx("div", {
      className: "flex justify-between gap-12 p-12 md:flex-row flex-col",
      children: "` ",
    }),
  O3 = () => {
    const e = [
      "./assets/gridgallery/rahgir.jpg",
      "./assets/gridgallery/sunburn.jpg",
      "./assets/gridgallery/dj.png",
      "./assets/gridgallery/crowd.png",
      "./assets/gridgallery/frid.jpg",
      "./assets/gridgallery/rava.jpg",
      "./assets/gridgallery/friddle.png",
      "./assets/gridgallery/friddle.png",
    ];
    return x.jsxs("div", {
      className:
        "md:snap-start flex flex-col items-center justify-center  bg-dot-purple-500/[0.2]",
      id: "sponsors",
      children: [
        x.jsx("div", {
          className: "relative w-full ",
          children: x.jsx("h1", {
            className:
              "text-[80px] font-bold right-12 mr-12 text-center md:text-right top-0 md:text-[160px] opacity-30 font-sans text-stroke -z-1",
            children: "Sponsors🤝",
          }),
        }),
        x.jsx("div", {
          className:
            "grid grid-cols-1 md:grid-cols-4  p-12 gap-6 w-full place-items-center justify-center",
          children: e.map((t, n) =>
            x.jsx(
              "div",
              {
                className:
                  "relative w-full min-h-[200px] object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:bg-gray-200/10 bg-gray-200/20 ",
                alt: "thumbnail",
              },
              t
            )
          ),
        }),
      ],
    });
  };
var N0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  zd = U.createContext && U.createContext(N0),
  D3 = ["attr", "size", "title"];
function R3(e, t) {
  if (e == null) return {};
  var n = z3(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function z3(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function is() {
  return (
    (is = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    is.apply(this, arguments)
  );
}
function Id(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Id(Object(n), !0).forEach(function (r) {
          I3(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Id(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function I3(e, t, n) {
  return (
    (t = F3(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function F3(e) {
  var t = B3(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function B3(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O0(e) {
  return (
    e &&
    e.map((t, n) => U.createElement(t.tag, os({ key: n }, t.attr), O0(t.child)))
  );
}
function _i(e) {
  return (t) =>
    U.createElement($3, is({ attr: os({}, e.attr) }, t), O0(e.child));
}
function $3(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      s = R3(e, D3),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      U.createElement(
        "svg",
        is(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: a,
            style: os(os({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && U.createElement("title", null, o),
        e.children
      )
    );
  };
  return zd !== void 0
    ? U.createElement(zd.Consumer, null, (n) => t(n))
    : t(N0);
}
function U3(e) {
  return _i({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17.3183118,0.0772036939 C18.5358869,0.132773211 19.3775594,0.311686093 20.156489,0.614412318 C20.9357539,0.917263935 21.5259307,1.30117806 22.1124276,1.88767349 C22.6988355,2.47414659 23.0827129,3.06422396 23.3856819,3.84361655 C23.688357,4.62263666 23.8672302,5.46418415 23.9227984,6.68172489 C23.9916356,8.19170553 24,8.72394829 24,11.9999742 C24,15.2760524 23.9916355,15.808302 23.9227954,17.3182896 C23.8672306,18.5358038 23.6883589,19.3773584 23.3855877,20.1566258 C23.0826716,20.9358162 22.6987642,21.5259396 22.1124276,22.1122749 C21.5259871,22.6987804 20.9357958,23.0827198 20.1563742,23.3856323 C19.3772192,23.6883583 18.5357324,23.8672318 17.3183209,23.9227442 C15.8086874,23.9916325 15.2765626,24 12,24 C8.72343739,24 8.19131258,23.9916325 6.68172382,23.9227463 C5.46426077,23.8672314 4.62270711,23.6883498 3.84342369,23.3855738 C3.0641689,23.0827004 2.47399369,22.6987612 1.88762592,22.1123283 C1.30117312,21.525877 0.91721975,20.9357071 0.614318116,20.1563835 C0.311643016,19.3773633 0.132769821,18.5358159 0.0772038909,17.3183251 C0.0083529426,15.8092887 0,15.2774634 0,11.9999742 C0,8.7225328 0.00835296697,8.19071076 0.0772047368,6.68165632 C0.132769821,5.46418415 0.311643016,4.62263666 0.614362729,3.84350174 C0.91719061,3.06430165 1.30113536,2.4741608 1.88757245,1.88772514 C2.47399369,1.30123879 3.0641689,0.917299613 3.84345255,0.614414972 C4.62236201,0.311696581 5.46409415,0.132773979 6.68163888,0.0772035898 C8.19074867,0.00835221992 8.72252573,0 12,0 C15.2774788,0 15.8092594,0.00835235053 17.3183118,0.0772036939 Z M12,2.66666667 C8.75959504,2.66666667 8.26400713,2.67445049 6.80319929,2.74109814 C5.87614637,2.78341009 5.31952221,2.90172878 4.80947575,3.09995521 C4.37397765,3.26922052 4.09725505,3.44924273 3.77324172,3.77329203 C3.44916209,4.09737087 3.26913181,4.37408574 3.09996253,4.80937168 C2.90169965,5.31965737 2.78340891,5.87618164 2.74109927,6.80321713 C2.67445122,8.26397158 2.66666667,8.75960374 2.66666667,11.9999742 C2.66666667,15.2403924 2.67445121,15.7360281 2.74109842,17.1967643 C2.78340891,18.1238184 2.90169965,18.6803426 3.09990404,19.1904778 C3.26914133,19.6259017 3.44919889,19.9026659 3.77329519,20.2267614 C4.09725505,20.5507573 4.37397765,20.7307795 4.80932525,20.8999863 C5.31971515,21.0982887 5.87621193,21.2165784 6.80323907,21.2588497 C8.26460439,21.3255353 8.76051223,21.3333333 12,21.3333333 C15.2394878,21.3333333 15.7353956,21.3255353 17.1968056,21.2588476 C18.123775,21.216579 18.6802056,21.0982995 19.1905083,20.9000309 C19.6260288,20.7307713 19.9027426,20.5507596 20.2267583,20.226708 C20.5507492,19.9027179 20.7308046,19.6259456 20.9000375,19.1906283 C21.0983009,18.6803412 21.2165908,18.1238118 21.2588986,17.196779 C21.3255376,15.7350718 21.3333333,15.2390126 21.3333333,11.9999742 C21.3333333,8.76098665 21.3255376,8.26493375 21.2589016,6.80323567 C21.2165911,5.87618164 21.0983004,5.31965737 20.9001178,4.80957831 C20.7308131,4.37403932 20.550774,4.09729207 20.2267583,3.77324038 C19.9027658,3.44924868 19.6260264,3.26922777 19.1905015,3.09996643 C18.6803988,2.90171817 18.1238378,2.78341062 17.1967608,2.74109868 C15.7359966,2.67445057 15.2404012,2.66666667 12,2.66666667 Z M12,18.2222222 C8.56356156,18.2222222 5.77777778,15.4364384 5.77777778,12 C5.77777778,8.56356156 8.56356156,5.77777778 12,5.77777778 C15.4364384,5.77777778 18.2222222,8.56356156 18.2222222,12 C18.2222222,15.4364384 15.4364384,18.2222222 12,18.2222222 Z M12,15.5555556 C13.9636791,15.5555556 15.5555556,13.9636791 15.5555556,12 C15.5555556,10.0363209 13.9636791,8.44444444 12,8.44444444 C10.0363209,8.44444444 8.44444444,10.0363209 8.44444444,12 C8.44444444,13.9636791 10.0363209,15.5555556 12,15.5555556 Z M18.2222222,7.11111111 C17.4858426,7.11111111 16.8888889,6.51415744 16.8888889,5.77777778 C16.8888889,5.04139811 17.4858426,4.44444444 18.2222222,4.44444444 C18.9586019,4.44444444 19.5555556,5.04139811 19.5555556,5.77777778 C19.5555556,6.51415744 18.9586019,7.11111111 18.2222222,7.11111111 Z",
        },
        child: [],
      },
    ],
  })(e);
}
function H3(e) {
  return _i({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(e);
}
function W3(e) {
  return _i({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function Y3(e) {
  return _i({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
        },
        child: [],
      },
    ],
  })(e);
}
function G3(e) {
  return _i({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z",
        },
        child: [],
      },
    ],
  })(e);
}
const X3 = () =>
    x.jsxs("div", {
      className: "md:snap-start overflow-x-hidden bg-dot-purple-500/[0.2] ",
      children: [
        x.jsx("div", {
          className: "w-full relative ",
          children: x.jsx("h1", {
            className:
              " md:text-right text-[80px] font-bold text-center md:text-[150px]  opacity-30 font-sans text-stroke -z-1",
            id: "contact",
            children: "Contact Us📞",
          }),
        }),
        x.jsx("div", {
          className:
            " w-full flex flex-col  md:bg-[url('./assets/contact.png')] min-h-[600px] md:grid md:grid-col-6  gap-4  justify-between",
          children: x.jsx("div", {
            className:
              "    bg-gradient-to-b md:bg-gradient-to-r from-zinc-950  md:from-50%   md:col-span-5",
            children: x.jsx("footer", {
              children: x.jsx("div", {
                className: "container h-full  bg-dot-purple-500/[0.2] ",
                children: x.jsxs("div", {
                  className: "row",
                  children: [
                    x.jsx("div", {
                      className: "col-md-4 px-12 md:px-36",
                      children: x.jsxs("div", {
                        className: "footer-box text-white",
                        children: [
                          x.jsx("h3", {
                            className:
                              " font-bold text-md md:text-4xl mb-2 leading-regular tracking-loose",
                            children: "Event Coordinator",
                          }),
                          x.jsx("p", {
                            className:
                              " md:text-2xl mb-2 leading-regular font-semibold mt-2 ",
                            children: x.jsx("li", { children: "Mohit Wadhwa" }),
                          }),
                          x.jsxs("p", {
                            className:
                              " md:text-md mb-2 leading-regular font-extralight flex gap-2 items-center",
                            children: [" ", x.jsx(G3, {}), "  +91 88729 43974"],
                          }),
                        ],
                      }),
                    }),
                    x.jsx("div", {
                      className: "col-md-4 px-12 md:px-36",
                      children: x.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row  gap-6 text-white",
                        children: [
                          "Follow Us On:",
                          x.jsxs("div", {
                            className: "flex gap-4 items-center",
                            children: [
                              x.jsx("a", {
                                href: "mailto:enthuzia@iiserb.ac.in/",
                                className: "flex ",
                                children: x.jsx(Y3, {
                                  color: "white",
                                  size: "20",
                                }),
                              }),
                              x.jsx("a", {
                                href: "https://www.instagram.com/enthuzia/",
                                className: "flex ",
                                children: x.jsx(U3, {
                                  color: "white",
                                  size: "20",
                                }),
                              }),
                              x.jsx("a", {
                                href: "https://www.facebook.com/Enthuzia/",
                                className: "flex",
                                children: x.jsx(H3, {
                                  color: "white",
                                  size: "20",
                                }),
                              }),
                              x.jsx("a", {
                                href: "https://www.linkedin.com/company/enthuzia-iiser-bhopal",
                                className: "flex",
                                children: x.jsx(W3, {
                                  color: "white",
                                  size: "20",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        }),
      ],
    }),
  K3 = () =>
    x.jsx("div", {
      className: "row md:snap-start",
      children: x.jsx("div", {
        className: "col-md-12 text-center color-white ",
        children: x.jsxs("p", {
          className:
            "text-white text-md md:text-1xl p-4  leading-regular ont-extralight ",
          children: [
            "© Enthuzia 2024 | IISER BHOPAL ",
            x.jsx("br", {}),
            " Designed and Developed by  ",
            x.jsx("a", {
              className: "underline cursor-pointer",
              target: "_blank",
              href: "https://portfolio-shaileshkachhi.netlify.app/",
              children: "Shailesh Kachhi",
            }),
            " & ",
            x.jsx("a", {
              className: "underline cursor-pointer",
              target: "_blank",
              href: "https://github.com/TanishqSharma2022",
              children: " Tanishq Sharma",
            }),
          ],
        }),
      }),
    });
function Q3() {
  return x.jsx("div", {
    className: "relative w-full flex items-center justify-center",
    children: x.jsx(Z3, { className: "top-2" }),
  });
}
function Z3({ className: e }) {
  const [t, n] = A.useState(!1);
  return x.jsx("div", {
    className: ki("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", e),
    children: x.jsxs("nav", {
      onMouseLeave: () => n(null),
      className:
        "relative text-[10px] md:text-sm items-center rounded-full border font-extralight bg-black/30 border-white/[0.2] text-white shadow-input flex justify-center space-x-4 md:space-x-6 md:px-6 md:py-6 py-3 px-4 ",
      children: [
        x.jsx("img", {
          src: "./assets/logo.png",
          className: "h-6 w-6 aspect-square",
        }),
        x.jsxs("button", {
          className:
            " md:px-4 md:py-2  rounded-full relative bg-slate-800/60 text-white text-[10px] md:text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 ",
          children: [
            x.jsx("div", {
              className:
                "absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-2xl  bg-gradient-to-r from-transparent via-purple-500 to-transparent",
            }),
            x.jsx("span", {
              className: "relative z-20",
              children: x.jsx("a", {
                href: "/",
                className: "hover:-mt-1 transition-all",
                children: "Home",
              }),
            }),
          ],
        }),
        x.jsx("a", {
          href: "#about",
          className: "hover:-mt-1 transition-all",
          children: "About",
        }),
        x.jsx("a", {
          href: "#events",
          className: "hover:-mt-1 transition-all",
          children: "Events",
        }),
        x.jsx("a", {
          href: "#merch",
          className: "hover:-mt-1 transition-all",
          children: "Merch",
        }),
        x.jsx("a", {
          href: "#sponsors",
          className: "hover:-mt-1 transition-all",
          children: "Sponsors",
        }),
        x.jsx("a", {
          href: "#contact",
          className: "hover:-mt-1 transition-all",
          children: "Contact",
        }),
      ],
    }),
  });
}
const q3 = () => {
    const e = A.useRef(null);
    return x.jsx("div", {
      className: "snap-start overflow-x-hidden bg-dot-purple-500/[0.2]",
      children: x.jsxs(et.div, {
        ref: e,
        initial: { opacity: 0 },
        transition: { duration: 1 },
        whileInView: { opacity: 1 },
        className: "w-full relative",
        children: [
          x.jsx("h1", {
            className:
              "select-none text-[80px] text-center md:text-left  top-0 md:text-[160px] opacity-30 font-sans font-bold text-stroke -z-1 ",
            children: "Pást Ártists🎙️",
          }),
          x.jsx("p", {
            className:
              "text-[80px] text-center md:text-left text-white  top-0 md:text-[160px] opacity-30 font-sans",
            children: " ",
          }),
          x.jsx("div", {
            className:
              "w-full p-12 grid grid-cols-1 md:grid-cols-4 justify-between place-items-center gap-8",
            children: Array(8)
              .fill()
              .map((t, n) =>
                x.jsx(et.div, {
                  ref: e,
                  initial: { opacity: 0 },
                  transition: { duration: 1, delay: n * 0.1 },
                  whileInView: { opacity: 1 },
                  className: " w-full h-full",
                  children: x.jsx(J3, {}),
                })
              ),
          }),
        ],
      }),
    });
  },
  J3 = () =>
    x.jsx("div", {
      className:
        "hover:scale-110 transition-all relative w-full min-h-[200px] object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 hover:bg-gray-200/10 bg-gray-200/20 ",
      alt: "thumbnail",
    });
function e5() {
  return x.jsxs("div", {
    className: "snap-y snap-mandatory min-h-[5000px] relative  bg-zinc-950",
    children: [
      x.jsx("div", {
        className:
          " absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]",
      }),
      x.jsx(Q3, {}),
      x.jsx(T3, {}),
      x.jsx(M3, {}),
      x.jsx(j3, {}),
      x.jsx(V3, {}),
      x.jsx(O3, {}),
      x.jsx(q3, {}),
      x.jsx(X3, {}),
      x.jsx(K3, {}),
    ],
  });
}
const ss = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  D0 = U.createContext(ss),
  t5 = U.createContext(!1);
let n5 = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  gl = new WeakMap();
function r5(e = !1) {
  let t = A.useContext(D0),
    n = A.useRef(null);
  if (n.current === null && !e) {
    var r, i;
    let o =
      (i = U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      i === void 0 ||
      (r = i.ReactCurrentOwner) === null ||
      r === void 0
        ? void 0
        : r.current;
    if (o) {
      let s = gl.get(o);
      s == null
        ? gl.set(o, { id: t.current, state: o.memoizedState })
        : o.memoizedState !== s.state && ((t.current = s.id), gl.delete(o));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function i5(e) {
  let t = A.useContext(D0);
  t === ss &&
    !n5 &&
    console.warn(
      "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
    );
  let n = r5(!!e),
    r = `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function o5(e) {
  let t = U.useId(),
    [n] = A.useState(R0()),
    r = n ? "react-aria" : `react-aria${ss.prefix}`;
  return e || `${r}-${t}`;
}
U.useId;
function s5() {
  return !1;
}
function l5() {
  return !0;
}
function a5(e) {
  return () => {};
}
function R0() {
  return typeof U.useSyncExternalStore == "function"
    ? U.useSyncExternalStore(a5, s5, l5)
    : A.useContext(t5);
}
typeof document < "u" && U.useLayoutEffect;
function u5(e) {
  if (c5()) e.focus({ preventScroll: !0 });
  else {
    let t = f5(e);
    e.focus(), d5(t);
  }
}
let no = null;
function c5() {
  if (no == null) {
    no = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return (no = !0), !0;
        },
      });
    } catch {}
  }
  return no;
}
function f5(e) {
  let t = e.parentNode,
    n = [],
    r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
      n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
      (t = t.parentNode);
  return (
    r instanceof HTMLElement &&
      n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }),
    n
  );
}
function d5(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    (t.scrollTop = n), (t.scrollLeft = r);
}
function nc(e) {
  var t;
  return typeof window > "u" || window.navigator == null
    ? !1
    : ((t = window.navigator.userAgentData) === null || t === void 0
        ? void 0
        : t.brands.some((n) => e.test(n.brand))) ||
        e.test(window.navigator.userAgent);
}
function z0(e) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1;
}
function Ma() {
  return z0(/^Mac/i);
}
function h5() {
  return z0(/^iPad/i) || (Ma() && navigator.maxTouchPoints > 1);
}
function p5() {
  return nc(/AppleWebKit/i) && !m5();
}
function m5() {
  return nc(/Chrome/i);
}
function g5() {
  return nc(/Firefox/i);
}
const v5 = A.createContext({ isNative: !0, open: w5 });
function y5(e) {
  let { children: t, navigate: n } = e,
    r = A.useMemo(
      () => ({
        isNative: !1,
        open: (i, o) => {
          I0(i, (s) => {
            x5(s, o) ? n(s.pathname + s.search + s.hash) : xi(s, o);
          });
        },
      }),
      [n]
    );
  return U.createElement(v5.Provider, { value: r }, t);
}
function x5(e, t) {
  let n = e.getAttribute("target");
  return (
    (!n || n === "_self") &&
    e.origin === location.origin &&
    !e.hasAttribute("download") &&
    !t.metaKey &&
    !t.ctrlKey &&
    !t.altKey &&
    !t.shiftKey
  );
}
function xi(e, t, n = !0) {
  var r, i;
  let { metaKey: o, ctrlKey: s, altKey: l, shiftKey: a } = t;
  g5() &&
    !(
      (i = window.event) === null ||
      i === void 0 ||
      (r = i.type) === null ||
      r === void 0
    ) &&
    r.startsWith("key") &&
    e.target === "_blank" &&
    (Ma() ? (o = !0) : (s = !0));
  let u =
    p5() && Ma() && !h5()
      ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: o,
          ctrlKey: s,
          altKey: l,
          shiftKey: a,
        })
      : new MouseEvent("click", {
          metaKey: o,
          ctrlKey: s,
          altKey: l,
          shiftKey: a,
          bubbles: !0,
          cancelable: !0,
        });
  (xi.isOpening = n), u5(e), e.dispatchEvent(u), (xi.isOpening = !1);
}
xi.isOpening = !1;
function I0(e, t) {
  if (e instanceof HTMLAnchorElement) t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    (n.href = e.getAttribute("data-href")),
      e.hasAttribute("data-target") &&
        (n.target = e.getAttribute("data-target")),
      e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")),
      e.hasAttribute("data-download") &&
        (n.download = e.getAttribute("data-download")),
      e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")),
      e.hasAttribute("data-referrer-policy") &&
        (n.referrerPolicy = e.getAttribute("data-referrer-policy")),
      e.appendChild(n),
      t(n),
      e.removeChild(n);
  }
}
function w5(e, t) {
  I0(e, (n) => xi(n, t));
}
let Mr = new Map(),
  Fd = new Set();
function Bd() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
      if (!e(r) || !r.target) return;
      let i = Mr.get(r.target);
      i ||
        ((i = new Set()),
        Mr.set(r.target, i),
        r.target.addEventListener("transitioncancel", n, { once: !0 })),
        i.add(r.propertyName);
    },
    n = (r) => {
      if (!e(r) || !r.target) return;
      let i = Mr.get(r.target);
      if (
        i &&
        (i.delete(r.propertyName),
        i.size === 0 &&
          (r.target.removeEventListener("transitioncancel", n),
          Mr.delete(r.target)),
        Mr.size === 0)
      ) {
        for (let o of Fd) o();
        Fd.clear();
      }
    };
  document.body.addEventListener("transitionrun", t),
    document.body.addEventListener("transitionend", n);
}
typeof document < "u" &&
  (document.readyState !== "loading"
    ? Bd()
    : document.addEventListener("DOMContentLoaded", Bd));
const S5 = new Set([
    "Arab",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr",
  ]),
  C5 = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi",
  ]);
function F0(e) {
  if (Intl.Locale) {
    let n = new Intl.Locale(e).maximize(),
      r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r) return r.direction === "rtl";
    if (n.script) return S5.has(n.script);
  }
  let t = e.split("-")[0];
  return C5.has(t);
}
const P5 = Symbol.for("react-aria.i18n.locale");
function B0() {
  let e =
    (typeof window < "u" && window[P5]) ||
    (typeof navigator < "u" &&
      (navigator.language || navigator.userLanguage)) ||
    "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch {
    e = "en-US";
  }
  return { locale: e, direction: F0(e) ? "rtl" : "ltr" };
}
let ba = B0(),
  Rr = new Set();
function $d() {
  ba = B0();
  for (let e of Rr) e(ba);
}
function E5() {
  let e = R0(),
    [t, n] = A.useState(ba);
  return (
    A.useEffect(
      () => (
        Rr.size === 0 && window.addEventListener("languagechange", $d),
        Rr.add(n),
        () => {
          Rr.delete(n),
            Rr.size === 0 && window.removeEventListener("languagechange", $d);
        }
      ),
      []
    ),
    e ? { locale: "en-US", direction: "ltr" } : t
  );
}
const k5 = U.createContext(null);
function T5(e) {
  let { locale: t, children: n } = e,
    r = E5(),
    i = t ? { locale: t, direction: F0(t) ? "rtl" : "ltr" } : r;
  return U.createElement(k5.Provider, { value: i }, n);
}
const _a = U.createContext(null);
function A5(e) {
  let { children: t } = e,
    n = A.useContext(_a),
    [r, i] = A.useState(0),
    o = A.useMemo(
      () => ({
        parent: n,
        modalCount: r,
        addModal() {
          i((s) => s + 1), n && n.addModal();
        },
        removeModal() {
          i((s) => s - 1), n && n.removeModal();
        },
      }),
      [n, r]
    );
  return U.createElement(_a.Provider, { value: o }, t);
}
function M5() {
  let e = A.useContext(_a);
  return {
    modalProviderProps: { "aria-hidden": e && e.modalCount > 0 ? !0 : null },
  };
}
function b5(e) {
  let { modalProviderProps: t } = M5();
  return U.createElement("div", { "data-overlay-container": !0, ...e, ...t });
}
function _5(e) {
  return U.createElement(A5, null, U.createElement(b5, e));
}
var j5 = ({ children: e, locale: t = "en-US", navigate: n, ...r }) => {
  let i = e;
  return (
    n && (i = x.jsx(y5, { navigate: n, children: i })),
    x.jsx(T5, { locale: t, children: x.jsx(_5, { ...r, children: i }) })
  );
};
vl.createRoot(document.getElementById("root")).render(
  x.jsx(U.StrictMode, {
    children: x.jsx(V1, { children: x.jsx(j5, { children: x.jsx(e5, {}) }) }),
  })
);
