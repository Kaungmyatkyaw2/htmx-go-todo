/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function st(o, e) {
  var t = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(o);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function z(o) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? st(Object(t), !0).forEach(function(n) {
      Mt(o, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : st(Object(t)).forEach(function(n) {
      Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return o;
}
function Me(o) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Me = function(e) {
    return typeof e;
  } : Me = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Me(o);
}
function Mt(o, e, t) {
  return e in o ? Object.defineProperty(o, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[e] = t, o;
}
function q() {
  return q = Object.assign || function(o) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (o[n] = t[n]);
    }
    return o;
  }, q.apply(this, arguments);
}
function Ft(o, e) {
  if (o == null) return {};
  var t = {}, n = Object.keys(o), i, r;
  for (r = 0; r < n.length; r++)
    i = n[r], !(e.indexOf(i) >= 0) && (t[i] = o[i]);
  return t;
}
function Rt(o, e) {
  if (o == null) return {};
  var t = Ft(o, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o);
    for (i = 0; i < r.length; i++)
      n = r[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(o, n) && (t[n] = o[n]);
  }
  return t;
}
var Xt = "1.15.6";
function U(o) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(o);
}
var V = U(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ce = U(/Edge/i), ut = U(/firefox/i), we = U(/safari/i) && !U(/chrome/i) && !U(/android/i), ot = U(/iP(ad|od|hone)/i), vt = U(/chrome/i) && U(/android/i), bt = {
  capture: !1,
  passive: !1
};
function v(o, e, t) {
  o.addEventListener(e, t, !V && bt);
}
function m(o, e, t) {
  o.removeEventListener(e, t, !V && bt);
}
function ke(o, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), o)
      try {
        if (o.matches)
          return o.matches(e);
        if (o.msMatchesSelector)
          return o.msMatchesSelector(e);
        if (o.webkitMatchesSelector)
          return o.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Et(o) {
  return o.host && o !== document && o.host.nodeType ? o.host : o.parentNode;
}
function W(o, e, t, n) {
  if (o) {
    t = t || document;
    do {
      if (e != null && (e[0] === ">" ? o.parentNode === t && ke(o, e) : ke(o, e)) || n && o === t)
        return o;
      if (o === t) break;
    } while (o = Et(o));
  }
  return null;
}
var ft = /\s+/g;
function R(o, e, t) {
  if (o && e)
    if (o.classList)
      o.classList[t ? "add" : "remove"](e);
    else {
      var n = (" " + o.className + " ").replace(ft, " ").replace(" " + e + " ", " ");
      o.className = (n + (t ? " " + e : "")).replace(ft, " ");
    }
}
function h(o, e, t) {
  var n = o && o.style;
  if (n) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(o, "") : o.currentStyle && (t = o.currentStyle), e === void 0 ? t : t[e];
    !(e in n) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), n[e] = t + (typeof t == "string" ? "" : "px");
  }
}
function de(o, e) {
  var t = "";
  if (typeof o == "string")
    t = o;
  else
    do {
      var n = h(o, "transform");
      n && n !== "none" && (t = n + " " + t);
    } while (!e && (o = o.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(t);
}
function yt(o, e, t) {
  if (o) {
    var n = o.getElementsByTagName(e), i = 0, r = n.length;
    if (t)
      for (; i < r; i++)
        t(n[i], i);
    return n;
  }
  return [];
}
function L() {
  var o = document.scrollingElement;
  return o || document.documentElement;
}
function C(o, e, t, n, i) {
  if (!(!o.getBoundingClientRect && o !== window)) {
    var r, a, l, s, u, c, d;
    if (o !== window && o.parentNode && o !== L() ? (r = o.getBoundingClientRect(), a = r.top, l = r.left, s = r.bottom, u = r.right, c = r.height, d = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, c = window.innerHeight, d = window.innerWidth), (e || t) && o !== window && (i = i || o.parentNode, !V))
      do
        if (i && i.getBoundingClientRect && (h(i, "transform") !== "none" || t && h(i, "position") !== "static")) {
          var b = i.getBoundingClientRect();
          a -= b.top + parseInt(h(i, "border-top-width")), l -= b.left + parseInt(h(i, "border-left-width")), s = a + r.height, u = l + r.width;
          break;
        }
      while (i = i.parentNode);
    if (n && o !== window) {
      var w = de(i || o), E = w && w.a, y = w && w.d;
      w && (a /= y, l /= E, d /= E, c /= y, s = a + c, u = l + d);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: d,
      height: c
    };
  }
}
function dt(o, e, t) {
  for (var n = ee(o, !0), i = C(o)[e]; n; ) {
    var r = C(n)[t], a = void 0;
    if (a = i >= r, !a) return n;
    if (n === L()) break;
    n = ee(n, !1);
  }
  return !1;
}
function ce(o, e, t, n) {
  for (var i = 0, r = 0, a = o.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== p.ghost && (n || a[r] !== p.dragged) && W(a[r], t.draggable, o, !1)) {
      if (i === e)
        return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function it(o, e) {
  for (var t = o.lastElementChild; t && (t === p.ghost || h(t, "display") === "none" || e && !ke(t, e)); )
    t = t.previousElementSibling;
  return t || null;
}
function Y(o, e) {
  var t = 0;
  if (!o || !o.parentNode)
    return -1;
  for (; o = o.previousElementSibling; )
    o.nodeName.toUpperCase() !== "TEMPLATE" && o !== p.clone && (!e || ke(o, e)) && t++;
  return t;
}
function ct(o) {
  var e = 0, t = 0, n = L();
  if (o)
    do {
      var i = de(o), r = i.a, a = i.d;
      e += o.scrollLeft * r, t += o.scrollTop * a;
    } while (o !== n && (o = o.parentNode));
  return [e, t];
}
function Yt(o, e) {
  for (var t in o)
    if (o.hasOwnProperty(t)) {
      for (var n in e)
        if (e.hasOwnProperty(n) && e[n] === o[t][n]) return Number(t);
    }
  return -1;
}
function ee(o, e) {
  if (!o || !o.getBoundingClientRect) return L();
  var t = o, n = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var i = h(t);
      if (t.clientWidth < t.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body) return L();
        if (n || e) return t;
        n = !0;
      }
    }
  while (t = t.parentNode);
  return L();
}
function kt(o, e) {
  if (o && e)
    for (var t in e)
      e.hasOwnProperty(t) && (o[t] = e[t]);
  return o;
}
function ze(o, e) {
  return Math.round(o.top) === Math.round(e.top) && Math.round(o.left) === Math.round(e.left) && Math.round(o.height) === Math.round(e.height) && Math.round(o.width) === Math.round(e.width);
}
var _e;
function wt(o, e) {
  return function() {
    if (!_e) {
      var t = arguments, n = this;
      t.length === 1 ? o.call(n, t[0]) : o.apply(n, t), _e = setTimeout(function() {
        _e = void 0;
      }, e);
    }
  };
}
function Bt() {
  clearTimeout(_e), _e = void 0;
}
function _t(o, e, t) {
  o.scrollLeft += e, o.scrollTop += t;
}
function Dt(o) {
  var e = window.Polymer, t = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(o).cloneNode(!0) : t ? t(o).clone(!0)[0] : o.cloneNode(!0);
}
function St(o, e, t) {
  var n = {};
  return Array.from(o.children).forEach(function(i) {
    var r, a, l, s;
    if (!(!W(i, e.draggable, o, !1) || i.animated || i === t)) {
      var u = C(i);
      n.left = Math.min((r = n.left) !== null && r !== void 0 ? r : 1 / 0, u.left), n.top = Math.min((a = n.top) !== null && a !== void 0 ? a : 1 / 0, u.top), n.right = Math.max((l = n.right) !== null && l !== void 0 ? l : -1 / 0, u.right), n.bottom = Math.max((s = n.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var N = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Ht() {
  var o = [], e;
  return {
    captureAnimationState: function() {
      if (o = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(h(i, "display") === "none" || i === p.ghost)) {
            o.push({
              target: i,
              rect: C(i)
            });
            var r = z({}, o[o.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = de(i, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(n) {
      o.push(n);
    },
    removeAnimationState: function(n) {
      o.splice(Yt(o, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof n == "function" && n();
        return;
      }
      var r = !1, a = 0;
      o.forEach(function(l) {
        var s = 0, u = l.target, c = u.fromRect, d = C(u), b = u.prevFromRect, w = u.prevToRect, E = l.rect, y = de(u, !0);
        y && (d.top -= y.f, d.left -= y.e), u.toRect = d, u.thisAnimationDuration && ze(b, d) && !ze(c, d) && // Make sure animatingRect is on line between toRect & fromRect
        (E.top - d.top) / (E.left - d.left) === (c.top - d.top) / (c.left - d.left) && (s = Gt(E, b, w, i.options)), ze(d, c) || (u.prevFromRect = c, u.prevToRect = d, s || (s = i.options.animation), i.animate(u, E, d, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(e), r ? e = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), o = [];
    },
    animate: function(n, i, r, a) {
      if (a) {
        h(n, "transition", ""), h(n, "transform", "");
        var l = de(this.el), s = l && l.a, u = l && l.d, c = (i.left - r.left) / (s || 1), d = (i.top - r.top) / (u || 1);
        n.animatingX = !!c, n.animatingY = !!d, h(n, "transform", "translate3d(" + c + "px," + d + "px,0)"), this.forRepaintDummy = Wt(n), h(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          h(n, "transition", ""), h(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function Wt(o) {
  return o.offsetWidth;
}
function Gt(o, e, t, n) {
  return Math.sqrt(Math.pow(e.top - o.top, 2) + Math.pow(e.left - o.left, 2)) / Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) * n.animation;
}
var le = [], je = {
  initializeByDefault: !0
}, Oe = {
  mount: function(e) {
    for (var t in je)
      je.hasOwnProperty(t) && !(t in e) && (e[t] = je[t]);
    le.forEach(function(n) {
      if (n.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), le.push(e);
  },
  pluginEvent: function(e, t, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = e + "Global";
    le.forEach(function(a) {
      t[a.pluginName] && (t[a.pluginName][r] && t[a.pluginName][r](z({
        sortable: t
      }, n)), t.options[a.pluginName] && t[a.pluginName][e] && t[a.pluginName][e](z({
        sortable: t
      }, n)));
    });
  },
  initializePlugins: function(e, t, n, i) {
    le.forEach(function(l) {
      var s = l.pluginName;
      if (!(!e.options[s] && !l.initializeByDefault)) {
        var u = new l(e, t, e.options);
        u.sortable = e, u.options = e.options, e[s] = u, q(n, u.defaults);
      }
    });
    for (var r in e.options)
      if (e.options.hasOwnProperty(r)) {
        var a = this.modifyOption(e, r, e.options[r]);
        typeof a < "u" && (e.options[r] = a);
      }
  },
  getEventProperties: function(e, t) {
    var n = {};
    return le.forEach(function(i) {
      typeof i.eventProperties == "function" && q(n, i.eventProperties.call(t[i.pluginName], e));
    }), n;
  },
  modifyOption: function(e, t, n) {
    var i;
    return le.forEach(function(r) {
      e[r.pluginName] && r.optionListeners && typeof r.optionListeners[t] == "function" && (i = r.optionListeners[t].call(e[r.pluginName], n));
    }), i;
  }
};
function Lt(o) {
  var e = o.sortable, t = o.rootEl, n = o.name, i = o.targetEl, r = o.cloneEl, a = o.toEl, l = o.fromEl, s = o.oldIndex, u = o.newIndex, c = o.oldDraggableIndex, d = o.newDraggableIndex, b = o.originalEvent, w = o.putSortable, E = o.extraEventProperties;
  if (e = e || t && t[N], !!e) {
    var y, k = e.options, j = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !V && !Ce ? y = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (y = document.createEvent("Event"), y.initEvent(n, !0, !0)), y.to = a || t, y.from = l || t, y.item = i || t, y.clone = r, y.oldIndex = s, y.newIndex = u, y.oldDraggableIndex = c, y.newDraggableIndex = d, y.originalEvent = b, y.pullMode = w ? w.lastPutMode : void 0;
    var A = z(z({}, E), Oe.getEventProperties(n, e));
    for (var B in A)
      y[B] = A[B];
    t && t.dispatchEvent(y), k[j] && k[j].call(e, y);
  }
}
var zt = ["evt"], x = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, r = Rt(n, zt);
  Oe.pluginEvent.bind(p)(e, t, z({
    dragEl: f,
    parentEl: S,
    ghostEl: g,
    rootEl: _,
    nextEl: ae,
    lastDownEl: Fe,
    cloneEl: D,
    cloneHidden: J,
    dragStarted: be,
    putSortable: O,
    activeSortable: p.active,
    originalEvent: i,
    oldIndex: fe,
    oldDraggableIndex: De,
    newIndex: X,
    newDraggableIndex: Q,
    hideGhostForTarget: It,
    unhideGhostForTarget: At,
    cloneNowHidden: function() {
      J = !0;
    },
    cloneNowShown: function() {
      J = !1;
    },
    dispatchSortableEvent: function(l) {
      P({
        sortable: t,
        name: l,
        originalEvent: i
      });
    }
  }, r));
};
function P(o) {
  Lt(z({
    putSortable: O,
    cloneEl: D,
    targetEl: f,
    rootEl: _,
    oldIndex: fe,
    oldDraggableIndex: De,
    newIndex: X,
    newDraggableIndex: Q
  }, o));
}
var f, S, g, _, ae, Fe, D, J, fe, X, De, Q, Ae, O, ue = !1, Be = !1, He = [], ie, H, $e, Ue, ht, pt, be, se, Se, Te = !1, Pe = !1, Re, I, qe = [], Je = !1, We = [], Le = typeof document < "u", xe = ot, gt = Ce || V ? "cssFloat" : "float", jt = Le && !vt && !ot && "draggable" in document.createElement("div"), Tt = function() {
  if (Le) {
    if (V)
      return !1;
    var o = document.createElement("x");
    return o.style.cssText = "pointer-events:auto", o.style.pointerEvents === "auto";
  }
}(), Ct = function(e, t) {
  var n = h(e), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), r = ce(e, 0, t), a = ce(e, 1, t), l = r && h(r), s = a && h(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + C(r).width, c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + C(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var d = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === d) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= i && n[gt] === "none" || a && n[gt] === "none" && u + c > i) ? "vertical" : "horizontal";
}, $t = function(e, t, n) {
  var i = n ? e.left : e.top, r = n ? e.right : e.bottom, a = n ? e.width : e.height, l = n ? t.left : t.top, s = n ? t.right : t.bottom, u = n ? t.width : t.height;
  return i === l || r === s || i + a / 2 === l + u / 2;
}, Ut = function(e, t) {
  var n;
  return He.some(function(i) {
    var r = i[N].options.emptyInsertThreshold;
    if (!(!r || it(i))) {
      var a = C(i), l = e >= a.left - r && e <= a.right + r, s = t >= a.top - r && t <= a.bottom + r;
      if (l && s)
        return n = i;
    }
  }), n;
}, Ot = function(e) {
  function t(r, a) {
    return function(l, s, u, c) {
      var d = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (r == null && (a || d))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return t(r(l, s, u, c), a)(l, s, u, c);
      var b = (a ? l : s).options.group.name;
      return r === !0 || typeof r == "string" && r === b || r.join && r.indexOf(b) > -1;
    };
  }
  var n = {}, i = e.group;
  (!i || Me(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = t(i.pull, !0), n.checkPut = t(i.put), n.revertClone = i.revertClone, e.group = n;
}, It = function() {
  !Tt && g && h(g, "display", "none");
}, At = function() {
  !Tt && g && h(g, "display", "");
};
Le && !vt && document.addEventListener("click", function(o) {
  if (Be)
    return o.preventDefault(), o.stopPropagation && o.stopPropagation(), o.stopImmediatePropagation && o.stopImmediatePropagation(), Be = !1, !1;
}, !0);
var re = function(e) {
  if (f) {
    e = e.touches ? e.touches[0] : e;
    var t = Ut(e.clientX, e.clientY);
    if (t) {
      var n = {};
      for (var i in e)
        e.hasOwnProperty(i) && (n[i] = e[i]);
      n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[N]._onDragOver(n);
    }
  }
}, qt = function(e) {
  f && f.parentNode[N]._isOutsideThisEl(e.target);
};
function p(o, e) {
  if (!(o && o.nodeType && o.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));
  this.el = o, this.options = e = q({}, e), o[N] = this;
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(o.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Ct(o, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && (!we || ot),
    emptyInsertThreshold: 5
  };
  Oe.initializePlugins(this, o, t);
  for (var n in t)
    !(n in e) && (e[n] = t[n]);
  Ot(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : jt, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? v(o, "pointerdown", this._onTapStart) : (v(o, "mousedown", this._onTapStart), v(o, "touchstart", this._onTapStart)), this.nativeDraggable && (v(o, "dragover", this), v(o, "dragenter", this)), He.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), q(this, Ht());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (se = null);
  },
  _getDirection: function(e, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, f) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var t = this, n = this.el, i = this.options, r = i.preventOnFilter, a = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (l || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, c = i.filter;
      if (nn(n), !f && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && we && s && s.tagName.toUpperCase() === "SELECT") && (s = W(s, i.draggable, n, !1), !(s && s.animated) && Fe !== s)) {
        if (fe = Y(s), De = Y(s, i.draggable), typeof c == "function") {
          if (c.call(this, e, s, this)) {
            P({
              sortable: t,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: n,
              fromEl: n
            }), x("filter", t, {
              evt: e
            }), r && e.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(d) {
          if (d = W(u, d.trim(), n, !1), d)
            return P({
              sortable: t,
              rootEl: d,
              name: "filter",
              targetEl: s,
              fromEl: n,
              toEl: n
            }), x("filter", t, {
              evt: e
            }), !0;
        }), c)) {
          r && e.preventDefault();
          return;
        }
        i.handle && !W(u, i.handle, n, !1) || this._prepareDragStart(e, l, s);
      }
    }
  },
  _prepareDragStart: function(e, t, n) {
    var i = this, r = i.el, a = i.options, l = r.ownerDocument, s;
    if (n && !f && n.parentNode === r) {
      var u = C(n);
      if (_ = r, f = n, S = f.parentNode, ae = f.nextSibling, Fe = n, Ae = a.group, p.dragged = f, ie = {
        target: f,
        clientX: (t || e).clientX,
        clientY: (t || e).clientY
      }, ht = ie.clientX - u.left, pt = ie.clientY - u.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, f.style["will-change"] = "all", s = function() {
        if (x("delayEnded", i, {
          evt: e
        }), p.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !ut && i.nativeDraggable && (f.draggable = !0), i._triggerDragStart(e, t), P({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), R(f, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(c) {
        yt(f, c.trim(), Ve);
      }), v(l, "dragover", re), v(l, "mousemove", re), v(l, "touchmove", re), a.supportPointer ? (v(l, "pointerup", i._onDrop), !this.nativeDraggable && v(l, "pointercancel", i._onDrop)) : (v(l, "mouseup", i._onDrop), v(l, "touchend", i._onDrop), v(l, "touchcancel", i._onDrop)), ut && this.nativeDraggable && (this.options.touchStartThreshold = 4, f.draggable = !0), x("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Ce || V))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        a.supportPointer ? (v(l, "pointerup", i._disableDelayedDrag), v(l, "pointercancel", i._disableDelayedDrag)) : (v(l, "mouseup", i._disableDelayedDrag), v(l, "touchend", i._disableDelayedDrag), v(l, "touchcancel", i._disableDelayedDrag)), v(l, "mousemove", i._delayedDragTouchMoveHandler), v(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && v(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    f && Ve(f), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    m(e, "mouseup", this._disableDelayedDrag), m(e, "touchend", this._disableDelayedDrag), m(e, "touchcancel", this._disableDelayedDrag), m(e, "pointerup", this._disableDelayedDrag), m(e, "pointercancel", this._disableDelayedDrag), m(e, "mousemove", this._delayedDragTouchMoveHandler), m(e, "touchmove", this._delayedDragTouchMoveHandler), m(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, t) {
    t = t || e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? v(document, "pointermove", this._onTouchMove) : t ? v(document, "touchmove", this._onTouchMove) : v(document, "mousemove", this._onTouchMove) : (v(f, "dragend", this), v(_, "dragstart", this._onDragStart));
    try {
      document.selection ? Xe(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, t) {
    if (ue = !1, _ && f) {
      x("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && v(document, "dragover", qt);
      var n = this.options;
      !e && R(f, n.dragClass, !1), R(f, n.ghostClass, !0), p.active = this, e && this._appendGhost(), P({
        sortable: this,
        name: "start",
        originalEvent: t
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (H) {
      this._lastX = H.clientX, this._lastY = H.clientY, It();
      for (var e = document.elementFromPoint(H.clientX, H.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(H.clientX, H.clientY), e !== t); )
        t = e;
      if (f.parentNode[N]._isOutsideThisEl(e), t)
        do {
          if (t[N]) {
            var n = void 0;
            if (n = t[N]._onDragOver({
              clientX: H.clientX,
              clientY: H.clientY,
              target: e,
              rootEl: t
            }), n && !this.options.dragoverBubble)
              break;
          }
          e = t;
        } while (t = Et(t));
      At();
    }
  },
  _onTouchMove: function(e) {
    if (ie) {
      var t = this.options, n = t.fallbackTolerance, i = t.fallbackOffset, r = e.touches ? e.touches[0] : e, a = g && de(g, !0), l = g && a && a.a, s = g && a && a.d, u = xe && I && ct(I), c = (r.clientX - ie.clientX + i.x) / (l || 1) + (u ? u[0] - qe[0] : 0) / (l || 1), d = (r.clientY - ie.clientY + i.y) / (s || 1) + (u ? u[1] - qe[1] : 0) / (s || 1);
      if (!p.active && !ue) {
        if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n)
          return;
        this._onDragStart(e, !0);
      }
      if (g) {
        a ? (a.e += c - ($e || 0), a.f += d - (Ue || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: d
        };
        var b = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(g, "webkitTransform", b), h(g, "mozTransform", b), h(g, "msTransform", b), h(g, "transform", b), $e = c, Ue = d, H = r;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!g) {
      var e = this.options.fallbackOnBody ? document.body : _, t = C(f, !0, xe, !0, e), n = this.options;
      if (xe) {
        for (I = e; h(I, "position") === "static" && h(I, "transform") === "none" && I !== document; )
          I = I.parentNode;
        I !== document.body && I !== document.documentElement ? (I === document && (I = L()), t.top += I.scrollTop, t.left += I.scrollLeft) : I = L(), qe = ct(I);
      }
      g = f.cloneNode(!0), R(g, n.ghostClass, !1), R(g, n.fallbackClass, !0), R(g, n.dragClass, !0), h(g, "transition", ""), h(g, "transform", ""), h(g, "box-sizing", "border-box"), h(g, "margin", 0), h(g, "top", t.top), h(g, "left", t.left), h(g, "width", t.width), h(g, "height", t.height), h(g, "opacity", "0.8"), h(g, "position", xe ? "absolute" : "fixed"), h(g, "zIndex", "100000"), h(g, "pointerEvents", "none"), p.ghost = g, e.appendChild(g), h(g, "transform-origin", ht / parseInt(g.style.width) * 100 + "% " + pt / parseInt(g.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, t) {
    var n = this, i = e.dataTransfer, r = n.options;
    if (x("dragStart", this, {
      evt: e
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    x("setupClone", this), p.eventCanceled || (D = Dt(f), D.removeAttribute("id"), D.draggable = !1, D.style["will-change"] = "", this._hideClone(), R(D, this.options.chosenClass, !1), p.clone = D), n.cloneId = Xe(function() {
      x("clone", n), !p.eventCanceled && (n.options.removeCloneOnHide || _.insertBefore(D, f), n._hideClone(), P({
        sortable: n,
        name: "clone"
      }));
    }), !t && R(f, r.dragClass, !0), t ? (Be = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (m(document, "mouseup", n._onDrop), m(document, "touchend", n._onDrop), m(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(n, i, f)), v(document, "drop", n), h(f, "transform", "translateZ(0)")), ue = !0, n._dragStartId = Xe(n._dragStarted.bind(n, t, e)), v(document, "selectstart", n), be = !0, window.getSelection().removeAllRanges(), we && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var t = this.el, n = e.target, i, r, a, l = this.options, s = l.group, u = p.active, c = Ae === s, d = l.sort, b = O || u, w, E = this, y = !1;
    if (Je) return;
    function k(ve, xt) {
      x(ve, E, z({
        evt: e,
        isOwner: c,
        axis: w ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: r,
        canSort: d,
        fromSortable: b,
        target: n,
        completed: A,
        onMove: function(lt, Nt) {
          return Ne(_, t, f, i, lt, C(lt), e, Nt);
        },
        changed: B
      }, xt));
    }
    function j() {
      k("dragOverAnimationCapture"), E.captureAnimationState(), E !== b && b.captureAnimationState();
    }
    function A(ve) {
      return k("dragOverCompleted", {
        insertion: ve
      }), ve && (c ? u._hideClone() : u._showClone(E), E !== b && (R(f, O ? O.options.ghostClass : u.options.ghostClass, !1), R(f, l.ghostClass, !0)), O !== E && E !== p.active ? O = E : E === p.active && O && (O = null), b === E && (E._ignoreWhileAnimating = n), E.animateAll(function() {
        k("dragOverAnimationComplete"), E._ignoreWhileAnimating = null;
      }), E !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (n === f && !f.animated || n === t && !n.animated) && (se = null), !l.dragoverBubble && !e.rootEl && n !== document && (f.parentNode[N]._isOutsideThisEl(e.target), !ve && re(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), y = !0;
    }
    function B() {
      X = Y(f), Q = Y(f, l.draggable), P({
        sortable: E,
        name: "change",
        toEl: t,
        newIndex: X,
        newDraggableIndex: Q,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), n = W(n, l.draggable, t, !0), k("dragOver"), p.eventCanceled) return y;
    if (f.contains(e.target) || n.animated && n.animatingX && n.animatingY || E._ignoreWhileAnimating === n)
      return A(!1);
    if (Be = !1, u && !l.disabled && (c ? d || (a = S !== _) : O === this || (this.lastPutMode = Ae.checkPull(this, u, f, e)) && s.checkPut(this, u, f, e))) {
      if (w = this._getDirection(e, n) === "vertical", i = C(f), k("dragOverValid"), p.eventCanceled) return y;
      if (a)
        return S = _, j(), this._hideClone(), k("revert"), p.eventCanceled || (ae ? _.insertBefore(f, ae) : _.appendChild(f)), A(!0);
      var M = it(t, l.draggable);
      if (!M || Qt(e, w, this) && !M.animated) {
        if (M === f)
          return A(!1);
        if (M && t === e.target && (n = M), n && (r = C(n)), Ne(_, t, f, i, n, r, e, !!n) !== !1)
          return j(), M && M.nextSibling ? t.insertBefore(f, M.nextSibling) : t.appendChild(f), S = t, B(), A(!0);
      } else if (M && Zt(e, w, this)) {
        var te = ce(t, 0, l, !0);
        if (te === f)
          return A(!1);
        if (n = te, r = C(n), Ne(_, t, f, i, n, r, e, !1) !== !1)
          return j(), t.insertBefore(f, te), S = t, B(), A(!0);
      } else if (n.parentNode === t) {
        r = C(n);
        var G = 0, ne, he = f.parentNode !== t, F = !$t(f.animated && f.toRect || i, n.animated && n.toRect || r, w), pe = w ? "top" : "left", K = dt(n, "top", "top") || dt(f, "top", "top"), ge = K ? K.scrollTop : void 0;
        se !== n && (ne = r[pe], Te = !1, Pe = !F && l.invertSwap || he), G = Jt(e, n, r, w, F ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Pe, se === n);
        var $;
        if (G !== 0) {
          var oe = Y(f);
          do
            oe -= G, $ = S.children[oe];
          while ($ && (h($, "display") === "none" || $ === g));
        }
        if (G === 0 || $ === n)
          return A(!1);
        se = n, Se = G;
        var me = n.nextElementSibling, Z = !1;
        Z = G === 1;
        var Ie = Ne(_, t, f, i, n, r, e, Z);
        if (Ie !== !1)
          return (Ie === 1 || Ie === -1) && (Z = Ie === 1), Je = !0, setTimeout(Kt, 30), j(), Z && !me ? t.appendChild(f) : n.parentNode.insertBefore(f, Z ? me : n), K && _t(K, 0, ge - K.scrollTop), S = f.parentNode, ne !== void 0 && !Pe && (Re = Math.abs(ne - C(n)[pe])), B(), A(!0);
      }
      if (t.contains(f))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    m(document, "mousemove", this._onTouchMove), m(document, "touchmove", this._onTouchMove), m(document, "pointermove", this._onTouchMove), m(document, "dragover", re), m(document, "mousemove", re), m(document, "touchmove", re);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    m(e, "mouseup", this._onDrop), m(e, "touchend", this._onDrop), m(e, "pointerup", this._onDrop), m(e, "pointercancel", this._onDrop), m(e, "touchcancel", this._onDrop), m(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var t = this.el, n = this.options;
    if (X = Y(f), Q = Y(f, n.draggable), x("drop", this, {
      evt: e
    }), S = f && f.parentNode, X = Y(f), Q = Y(f, n.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    ue = !1, Pe = !1, Te = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), et(this.cloneId), et(this._dragStartId), this.nativeDraggable && (m(document, "drop", this), m(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), we && h(document.body, "user-select", ""), h(f, "transform", ""), e && (be && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), (_ === S || O && O.lastPutMode !== "clone") && D && D.parentNode && D.parentNode.removeChild(D), f && (this.nativeDraggable && m(f, "dragend", this), Ve(f), f.style["will-change"] = "", be && !ue && R(f, O ? O.options.ghostClass : this.options.ghostClass, !1), R(f, this.options.chosenClass, !1), P({
      sortable: this,
      name: "unchoose",
      toEl: S,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), _ !== S ? (X >= 0 && (P({
      rootEl: S,
      name: "add",
      toEl: S,
      fromEl: _,
      originalEvent: e
    }), P({
      sortable: this,
      name: "remove",
      toEl: S,
      originalEvent: e
    }), P({
      rootEl: S,
      name: "sort",
      toEl: S,
      fromEl: _,
      originalEvent: e
    }), P({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: e
    })), O && O.save()) : X !== fe && X >= 0 && (P({
      sortable: this,
      name: "update",
      toEl: S,
      originalEvent: e
    }), P({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: e
    })), p.active && ((X == null || X === -1) && (X = fe, Q = De), P({
      sortable: this,
      name: "end",
      toEl: S,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    x("nulling", this), _ = f = S = g = ae = D = Fe = J = ie = H = be = X = Q = fe = De = se = Se = O = Ae = p.dragged = p.ghost = p.clone = p.active = null, We.forEach(function(e) {
      e.checked = !0;
    }), We.length = $e = Ue = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        f && (this._onDragOver(e), Vt(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], t, n = this.el.children, i = 0, r = n.length, a = this.options; i < r; i++)
      t = n[i], W(t, a.draggable, this.el, !1) && e.push(t.getAttribute(a.dataIdAttr) || tn(t));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, t) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(r, a) {
      var l = i.children[a];
      W(l, this.options.draggable, i, !1) && (n[r] = l);
    }, this), t && this.captureAnimationState(), e.forEach(function(r) {
      n[r] && (i.removeChild(n[r]), i.appendChild(n[r]));
    }), t && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, t) {
    return W(e, t || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, t) {
    var n = this.options;
    if (t === void 0)
      return n[e];
    var i = Oe.modifyOption(this, e, t);
    typeof i < "u" ? n[e] = i : n[e] = t, e === "group" && Ot(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    x("destroy", this);
    var e = this.el;
    e[N] = null, m(e, "mousedown", this._onTapStart), m(e, "touchstart", this._onTapStart), m(e, "pointerdown", this._onTapStart), this.nativeDraggable && (m(e, "dragover", this), m(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(t) {
      t.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), He.splice(He.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!J) {
      if (x("hideClone", this), p.eventCanceled) return;
      h(D, "display", "none"), this.options.removeCloneOnHide && D.parentNode && D.parentNode.removeChild(D), J = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (J) {
      if (x("showClone", this), p.eventCanceled) return;
      f.parentNode == _ && !this.options.group.revertClone ? _.insertBefore(D, f) : ae ? _.insertBefore(D, ae) : _.appendChild(D), this.options.group.revertClone && this.animate(f, D), h(D, "display", ""), J = !1;
    }
  }
};
function Vt(o) {
  o.dataTransfer && (o.dataTransfer.dropEffect = "move"), o.cancelable && o.preventDefault();
}
function Ne(o, e, t, n, i, r, a, l) {
  var s, u = o[N], c = u.options.onMove, d;
  return window.CustomEvent && !V && !Ce ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = e, s.from = o, s.dragged = t, s.draggedRect = n, s.related = i || e, s.relatedRect = r || C(e), s.willInsertAfter = l, s.originalEvent = a, o.dispatchEvent(s), c && (d = c.call(u, s, a)), d;
}
function Ve(o) {
  o.draggable = !1;
}
function Kt() {
  Je = !1;
}
function Zt(o, e, t) {
  var n = C(ce(t.el, 0, t.options, !0)), i = St(t.el, t.options, g), r = 10;
  return e ? o.clientX < i.left - r || o.clientY < n.top && o.clientX < n.right : o.clientY < i.top - r || o.clientY < n.bottom && o.clientX < n.left;
}
function Qt(o, e, t) {
  var n = C(it(t.el, t.options.draggable)), i = St(t.el, t.options, g), r = 10;
  return e ? o.clientX > i.right + r || o.clientY > n.bottom && o.clientX > n.left : o.clientY > i.bottom + r || o.clientX > n.right && o.clientY > n.top;
}
function Jt(o, e, t, n, i, r, a, l) {
  var s = n ? o.clientY : o.clientX, u = n ? t.height : t.width, c = n ? t.top : t.left, d = n ? t.bottom : t.right, b = !1;
  if (!a) {
    if (l && Re < u * i) {
      if (!Te && (Se === 1 ? s > c + u * r / 2 : s < d - u * r / 2) && (Te = !0), Te)
        b = !0;
      else if (Se === 1 ? s < c + Re : s > d - Re)
        return -Se;
    } else if (s > c + u * (1 - i) / 2 && s < d - u * (1 - i) / 2)
      return en(e);
  }
  return b = b || a, b && (s < c + u * r / 2 || s > d - u * r / 2) ? s > c + u / 2 ? 1 : -1 : 0;
}
function en(o) {
  return Y(f) < Y(o) ? 1 : -1;
}
function tn(o) {
  for (var e = o.tagName + o.className + o.src + o.href + o.textContent, t = e.length, n = 0; t--; )
    n += e.charCodeAt(t);
  return n.toString(36);
}
function nn(o) {
  We.length = 0;
  for (var e = o.getElementsByTagName("input"), t = e.length; t--; ) {
    var n = e[t];
    n.checked && We.push(n);
  }
}
function Xe(o) {
  return setTimeout(o, 0);
}
function et(o) {
  return clearTimeout(o);
}
Le && v(document, "touchmove", function(o) {
  (p.active || ue) && o.cancelable && o.preventDefault();
});
p.utils = {
  on: v,
  off: m,
  css: h,
  find: yt,
  is: function(e, t) {
    return !!W(e, t, e, !1);
  },
  extend: kt,
  throttle: wt,
  closest: W,
  toggleClass: R,
  clone: Dt,
  index: Y,
  nextTick: Xe,
  cancelNextTick: et,
  detectDirection: Ct,
  getChild: ce,
  expando: N
};
p.get = function(o) {
  return o[N];
};
p.mount = function() {
  for (var o = arguments.length, e = new Array(o), t = 0; t < o; t++)
    e[t] = arguments[t];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (p.utils = z(z({}, p.utils), n.utils)), Oe.mount(n);
  });
};
p.create = function(o, e) {
  return new p(o, e);
};
p.version = Xt;
var T = [], Ee, tt, nt = !1, Ke, Ze, Ge, ye;
function on() {
  function o() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return o.prototype = {
    dragStarted: function(t) {
      var n = t.originalEvent;
      this.sortable.nativeDraggable ? v(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? v(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? v(document, "touchmove", this._handleFallbackAutoScroll) : v(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(t) {
      var n = t.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? m(document, "dragover", this._handleAutoScroll) : (m(document, "pointermove", this._handleFallbackAutoScroll), m(document, "touchmove", this._handleFallbackAutoScroll), m(document, "mousemove", this._handleFallbackAutoScroll)), mt(), Ye(), Bt();
    },
    nulling: function() {
      Ge = tt = Ee = nt = ye = Ke = Ze = null, T.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, !0);
    },
    _handleAutoScroll: function(t, n) {
      var i = this, r = (t.touches ? t.touches[0] : t).clientX, a = (t.touches ? t.touches[0] : t).clientY, l = document.elementFromPoint(r, a);
      if (Ge = t, n || this.options.forceAutoScrollFallback || Ce || V || we) {
        Qe(t, this.options, l, n);
        var s = ee(l, !0);
        nt && (!ye || r !== Ke || a !== Ze) && (ye && mt(), ye = setInterval(function() {
          var u = ee(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, Ye()), Qe(t, i.options, u, n);
        }, 10), Ke = r, Ze = a);
      } else {
        if (!this.options.bubbleScroll || ee(l, !0) === L()) {
          Ye();
          return;
        }
        Qe(t, this.options, ee(l, !1), !1);
      }
    }
  }, q(o, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ye() {
  T.forEach(function(o) {
    clearInterval(o.pid);
  }), T = [];
}
function mt() {
  clearInterval(ye);
}
var Qe = wt(function(o, e, t, n) {
  if (e.scroll) {
    var i = (o.touches ? o.touches[0] : o).clientX, r = (o.touches ? o.touches[0] : o).clientY, a = e.scrollSensitivity, l = e.scrollSpeed, s = L(), u = !1, c;
    tt !== t && (tt = t, Ye(), Ee = e.scroll, c = e.scrollFn, Ee === !0 && (Ee = ee(t, !0)));
    var d = 0, b = Ee;
    do {
      var w = b, E = C(w), y = E.top, k = E.bottom, j = E.left, A = E.right, B = E.width, M = E.height, te = void 0, G = void 0, ne = w.scrollWidth, he = w.scrollHeight, F = h(w), pe = w.scrollLeft, K = w.scrollTop;
      w === s ? (te = B < ne && (F.overflowX === "auto" || F.overflowX === "scroll" || F.overflowX === "visible"), G = M < he && (F.overflowY === "auto" || F.overflowY === "scroll" || F.overflowY === "visible")) : (te = B < ne && (F.overflowX === "auto" || F.overflowX === "scroll"), G = M < he && (F.overflowY === "auto" || F.overflowY === "scroll"));
      var ge = te && (Math.abs(A - i) <= a && pe + B < ne) - (Math.abs(j - i) <= a && !!pe), $ = G && (Math.abs(k - r) <= a && K + M < he) - (Math.abs(y - r) <= a && !!K);
      if (!T[d])
        for (var oe = 0; oe <= d; oe++)
          T[oe] || (T[oe] = {});
      (T[d].vx != ge || T[d].vy != $ || T[d].el !== w) && (T[d].el = w, T[d].vx = ge, T[d].vy = $, clearInterval(T[d].pid), (ge != 0 || $ != 0) && (u = !0, T[d].pid = setInterval((function() {
        n && this.layer === 0 && p.active._onTouchMove(Ge);
        var me = T[this.layer].vy ? T[this.layer].vy * l : 0, Z = T[this.layer].vx ? T[this.layer].vx * l : 0;
        typeof c == "function" && c.call(p.dragged.parentNode[N], Z, me, o, Ge, T[this.layer].el) !== "continue" || _t(T[this.layer].el, Z, me);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && b !== s && (b = ee(b, !1)));
    nt = u;
  }
}, 30), Pt = function(e) {
  var t = e.originalEvent, n = e.putSortable, i = e.dragEl, r = e.activeSortable, a = e.dispatchSortableEvent, l = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (t) {
    var u = n || r;
    l();
    var c = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, d = document.elementFromPoint(c.clientX, c.clientY);
    s(), u && !u.el.contains(d) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function rt() {
}
rt.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function(e) {
    var t = e.dragEl, n = e.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = ce(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(t, i) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Pt
};
q(rt, {
  pluginName: "revertOnSpill"
});
function at() {
}
at.prototype = {
  onSpill: function(e) {
    var t = e.dragEl, n = e.putSortable, i = n || this.sortable;
    i.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), i.animateAll();
  },
  drop: Pt
};
q(at, {
  pluginName: "removeOnSpill"
});
p.mount(new on());
p.mount(at, rt);
htmx.onLoad(function(o) {
  const e = o.querySelectorAll("#items");
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    new p(n, {
      draggable: ".draggable",
      handle: ".handle"
    });
  }
});
