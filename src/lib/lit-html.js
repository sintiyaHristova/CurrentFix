/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;
const i = window,
  s = i.trustedTypes,
  e = s ? s.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
  o = `lit$${(Math.random() + "").slice(9)}$`,
  n = "?" + o,
  l = `<${n}>`,
  h = document,
  r = (t = "") => h.createComment(t),
  d = (t) => null === t || ("object" != typeof t && "function" != typeof t),
  u = Array.isArray,
  c = (t) =>
    u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]),
  v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  a = /-->/g,
  f = />/g,
  _ = RegExp(
    ">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)",
    "g"
  ),
  m = /'/g,
  p = /"/g,
  $ = /^(?:script|style|textarea|title)$/i,
  g =
    (t) =>
    (i, ...s) => ({ _$litType$: t, strings: i, values: s }),
  y = g(1),
  w = g(2),
  x = Symbol.for("lit-noChange"),
  b = Symbol.for("lit-nothing"),
  T = new WeakMap(),
  A = h.createTreeWalker(h, 129, null, !1),
  E = (t, i) => {
    const s = t.length - 1,
      n = [];
    let h,
      r = 2 === i ? "<svg>" : "",
      d = v;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let e,
        u,
        c = -1,
        g = 0;
      for (; g < s.length && ((d.lastIndex = g), (u = d.exec(s)), null !== u); )
        (g = d.lastIndex),
          d === v
            ? "!--" === u[1]
              ? (d = a)
              : void 0 !== u[1]
              ? (d = f)
              : void 0 !== u[2]
              ? ($.test(u[2]) && (h = RegExp("</" + u[2], "g")), (d = _))
              : void 0 !== u[3] && (d = _)
            : d === _
            ? ">" === u[0]
              ? ((d = null != h ? h : v), (c = -1))
              : void 0 === u[1]
              ? (c = -2)
              : ((c = d.lastIndex - u[2].length),
                (e = u[1]),
                (d = void 0 === u[3] ? _ : '"' === u[3] ? p : m))
            : d === p || d === m
            ? (d = _)
            : d === a || d === f
            ? (d = v)
            : ((d = _), (h = void 0));
      const y = d === _ && t[i + 1].startsWith("/>") ? " " : "";
      r +=
        d === v
          ? s + l
          : c >= 0
          ? (n.push(e), s.slice(0, c) + "$lit$" + s.slice(c) + o + y)
          : s + o + (-2 === c ? (n.push(void 0), i) : y);
    }
    const u = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e ? e.createHTML(u) : u, n];
  };
class C {
  constructor({ strings: t, _$litType$: i }, e) {
    let l;
    this.parts = [];
    let h = 0,
      d = 0;
    const u = t.length - 1,
      c = this.parts,
      [v, a] = E(t, i);
    if (
      ((this.el = C.createElement(v, e)),
      (A.currentNode = this.el.content),
      2 === i)
    ) {
      const t = this.el.content,
        i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }
    for (; null !== (l = A.nextNode()) && c.length < u; ) {
      if (1 === l.nodeType) {
        if (l.hasAttributes()) {
          const t = [];
          for (const i of l.getAttributeNames())
            if (i.endsWith("$lit$") || i.startsWith(o)) {
              const s = a[d++];
              if ((t.push(i), void 0 !== s)) {
                const t = l.getAttribute(s.toLowerCase() + "$lit$").split(o),
                  i = /([.?@])?(.*)/.exec(s);
                c.push({
                  type: 1,
                  index: h,
                  name: i[2],
                  strings: t,
                  ctor:
                    "." === i[1] ? M : "?" === i[1] ? k : "@" === i[1] ? H : S,
                });
              } else c.push({ type: 6, index: h });
            }
          for (const i of t) l.removeAttribute(i);
        }
        if ($.test(l.tagName)) {
          const t = l.textContent.split(o),
            i = t.length - 1;
          if (i > 0) {
            l.textContent = s ? s.emptyScript : "";
            for (let s = 0; s < i; s++)
              l.append(t[s], r()),
                A.nextNode(),
                c.push({ type: 2, index: ++h });
            l.append(t[i], r());
          }
        }
      } else if (8 === l.nodeType)
        if (l.data === n) c.push({ type: 2, index: h });
        else {
          let t = -1;
          for (; -1 !== (t = l.data.indexOf(o, t + 1)); )
            c.push({ type: 7, index: h }), (t += o.length - 1);
        }
      h++;
    }
  }
  static createElement(t, i) {
    const s = h.createElement("template");
    return (s.innerHTML = t), s;
  }
}
function P(t, i, s = t, e) {
  var o, n, l, h;
  if (i === x) return i;
  let r =
    void 0 !== e
      ? null === (o = s._$Co) || void 0 === o
        ? void 0
        : o[e]
      : s._$Cl;
  const u = d(i) ? void 0 : i._$litDirective$;
  return (
    (null == r ? void 0 : r.constructor) !== u &&
      (null === (n = null == r ? void 0 : r._$AO) ||
        void 0 === n ||
        n.call(r, !1),
      void 0 === u ? (r = void 0) : ((r = new u(t)), r._$AT(t, s, e)),
      void 0 !== e
        ? ((null !== (l = (h = s)._$Co) && void 0 !== l ? l : (h._$Co = []))[
            e
          ] = r)
        : (s._$Cl = r)),
    void 0 !== r && (i = P(t, r._$AS(t, i.values), r, e)),
    i
  );
}
class V {
  constructor(t, i) {
    (this.u = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = i);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t) {
    var i;
    const {
        el: { content: s },
        parts: e,
      } = this._$AD,
      o = (
        null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i
          ? i
          : h
      ).importNode(s, !0);
    A.currentNode = o;
    let n = A.nextNode(),
      l = 0,
      r = 0,
      d = e[0];
    for (; void 0 !== d; ) {
      if (l === d.index) {
        let i;
        2 === d.type
          ? (i = new N(n, n.nextSibling, this, t))
          : 1 === d.type
          ? (i = new d.ctor(n, d.name, d.strings, this, t))
          : 6 === d.type && (i = new I(n, this, t)),
          this.u.push(i),
          (d = e[++r]);
      }
      l !== (null == d ? void 0 : d.index) && ((n = A.nextNode()), l++);
    }
    return o;
  }
  p(t) {
    let i = 0;
    for (const s of this.u)
      void 0 !== s &&
        (void 0 !== s.strings
          ? (s._$AI(t, s, i), (i += s.strings.length - 2))
          : s._$AI(t[i])),
        i++;
  }
}
class N {
  constructor(t, i, s, e) {
    var o;
    (this.type = 2),
      (this._$AH = b),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = i),
      (this._$AM = s),
      (this.options = e),
      (this._$Cm =
        null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o);
  }
  get _$AU() {
    var t, i;
    return null !==
      (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
      void 0 !== i
      ? i
      : this._$Cm;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    (t = P(this, t, i)),
      d(t)
        ? t === b || null == t || "" === t
          ? (this._$AH !== b && this._$AR(), (this._$AH = b))
          : t !== this._$AH && t !== x && this.g(t)
        : void 0 !== t._$litType$
        ? this.$(t)
        : void 0 !== t.nodeType
        ? this.T(t)
        : c(t)
        ? this.k(t)
        : this.g(t);
  }
  O(t, i = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, i);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
  }
  g(t) {
    this._$AH !== b && d(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(h.createTextNode(t)),
      (this._$AH = t);
  }
  $(t) {
    var i;
    const { values: s, _$litType$: e } = t,
      o =
        "number" == typeof e
          ? this._$AC(t)
          : (void 0 === e.el && (e.el = C.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o)
      this._$AH.p(s);
    else {
      const t = new V(o, this),
        i = t.v(this.options);
      t.p(s), this.T(i), (this._$AH = t);
    }
  }
  _$AC(t) {
    let i = T.get(t.strings);
    return void 0 === i && T.set(t.strings, (i = new C(t))), i;
  }
  k(t) {
    u(this._$AH) || ((this._$AH = []), this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const o of t)
      e === i.length
        ? i.push((s = new N(this.O(r()), this.O(r()), this, this.options)))
        : (s = i[e]),
        s._$AI(o),
        e++;
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), (i.length = e));
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for (
      null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i);
      t && t !== this._$AB;

    ) {
      const i = t.nextSibling;
      t.remove(), (t = i);
    }
  }
  setConnected(t) {
    var i;
    void 0 === this._$AM &&
      ((this._$Cm = t),
      null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }
}
class S {
  constructor(t, i, s, e, o) {
    (this.type = 1),
      (this._$AH = b),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = i),
      (this._$AM = e),
      (this.options = o),
      s.length > 2 || "" !== s[0] || "" !== s[1]
        ? ((this._$AH = Array(s.length - 1).fill(new String())),
          (this.strings = s))
        : (this._$AH = b);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, i = this, s, e) {
    const o = this.strings;
    let n = !1;
    if (void 0 === o)
      (t = P(this, t, i, 0)),
        (n = !d(t) || (t !== this._$AH && t !== x)),
        n && (this._$AH = t);
    else {
      const e = t;
      let l, h;
      for (t = o[0], l = 0; l < o.length - 1; l++)
        (h = P(this, e[s + l], i, l)),
          h === x && (h = this._$AH[l]),
          n || (n = !d(h) || h !== this._$AH[l]),
          h === b ? (t = b) : t !== b && (t += (null != h ? h : "") + o[l + 1]),
          (this._$AH[l] = h);
    }
    n && !e && this.j(t);
  }
  j(t) {
    t === b
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != t ? t : "");
  }
}
class M extends S {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === b ? void 0 : t;
  }
}
const R = s ? s.emptyScript : "";
class k extends S {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    t && t !== b
      ? this.element.setAttribute(this.name, R)
      : this.element.removeAttribute(this.name);
  }
}
class H extends S {
  constructor(t, i, s, e, o) {
    super(t, i, s, e, o), (this.type = 5);
  }
  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : b) === x)
      return;
    const e = this._$AH,
      o =
        (t === b && e !== b) ||
        t.capture !== e.capture ||
        t.once !== e.once ||
        t.passive !== e.passive,
      n = t !== b && (e === b || o);
    o && this.element.removeEventListener(this.name, this, e),
      n && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var i, s;
    "function" == typeof this._$AH
      ? this._$AH.call(
          null !==
            (s =
              null === (i = this.options) || void 0 === i ? void 0 : i.host) &&
            void 0 !== s
            ? s
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class I {
  constructor(t, i, s) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = i),
      (this.options = s);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    P(this, t);
  }
}
const L = {
    P: "$lit$",
    A: o,
    M: n,
    C: 1,
    L: E,
    R: V,
    D: c,
    V: P,
    I: N,
    H: S,
    N: k,
    U: H,
    B: M,
    F: I,
  },
  z = i.litHtmlPolyfillSupport;
null == z || z(C, N),
  (null !== (t = i.litHtmlVersions) && void 0 !== t
    ? t
    : (i.litHtmlVersions = [])
  ).push("2.4.0");
const Z = (t, i, s) => {
  var e, o;
  const n =
    null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let l = n._$litPart$;
  if (void 0 === l) {
    const t =
      null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o
        ? o
        : null;
    n._$litPart$ = l = new N(
      i.insertBefore(r(), t),
      t,
      void 0,
      null != s ? s : {}
    );
  }
  return l._$AI(t), l;
};
export {
  L as _$LH,
  y as html,
  x as noChange,
  b as nothing,
  Z as render,
  w as svg,
};
//# sourceMappingURL=lit-html.js.map
