Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
    "use strict";
    if (null == this) throw new TypeError;
    var t = Object(this),
      i = t.length >>> 0;
    if (0 === i) return -1;
    var a = 0;
    if (arguments.length > 1 && (a = Number(arguments[1]), a != a ? a = 0 : 0 != a && 1 / 0 != a && a != -1 / 0 && (a = (a > 0 || -1) * Math.floor(Math.abs(a)))), a >= i) return -1;
    for (var n = a >= 0 ? a : Math.max(i - Math.abs(a), 0); i > n; n++)
      if (n in t && t[n] === e) return n;
    return -1
  }), Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
    var i, a;
    if (null == this) throw new TypeError("this is null or not defined");
    var n = Object(this),
      r = n.length >>> 0;
    if ("[object Function]" !== {}.toString.call(e)) throw new TypeError(e + " is not a function");
    for (t && (i = t), a = 0; r > a;) {
      var o;
      Object.prototype.hasOwnProperty.call(n, a) && (o = n[a], e.call(i, o, a, n)), a++
    }
  }), Array.prototype.some || (Array.prototype.some = function(e) {
    "use strict";
    if (void 0 === this || null === this) throw new TypeError;
    var t = Object(this),
      i = t.length >>> 0;
    if ("function" != typeof e) throw new TypeError;
    for (var a = arguments.length >= 2 ? arguments[1] : void 0, n = 0; i > n; n++)
      if (n in t && e.call(a, t[n], n, t)) return !0;
    return !1
  }),
  function(e, t, i) {
    "use strict";

    function a(e, t) {
      return t = t || Error,
        function() {
          var i, a, n = arguments[0],
            r = "[" + (e ? e + ":" : "") + n + "] ",
            o = arguments[1],
            s = arguments;
          for (i = r + o.replace(/\{\d+\}/g, function(e) {
              var t = +e.slice(1, -1);
              return t + 2 < s.length ? ht(s[t + 2]) : e
            }), i = i + "\nhttp://errors.angularjs.org/1.3.13/" + (e ? e + "/" : "") + n, a = 2; a < arguments.length; a++) i = i + (2 == a ? "?" : "&") + "p" + (a - 2) + "=" + encodeURIComponent(ht(arguments[a]));
          return new t(i)
        }
    }

    function n(e) {
      if (null == e || A(e)) return !1;
      var t = e.length;
      return e.nodeType === vn && t ? !0 : _(e) || cn(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, i) {
      var a, o;
      if (e)
        if (S(e))
          for (a in e) "prototype" == a || "length" == a || "name" == a || e.hasOwnProperty && !e.hasOwnProperty(a) || t.call(i, e[a], a, e);
        else if (cn(e) || n(e)) {
        var s = "object" != typeof e;
        for (a = 0, o = e.length; o > a; a++)(s || a in e) && t.call(i, e[a], a, e)
      } else if (e.forEach && e.forEach !== r) e.forEach(t, i, e);
      else
        for (a in e) e.hasOwnProperty(a) && t.call(i, e[a], a, e);
      return e
    }

    function o(e) {
      return Object.keys(e).sort()
    }

    function s(e, t, i) {
      for (var a = o(e), n = 0; n < a.length; n++) t.call(i, e[a[n]], a[n]);
      return a
    }

    function l(e) {
      return function(t, i) {
        e(i, t)
      }
    }

    function u() {
      return ++ln
    }

    function c(e, t) {
      t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function d(e) {
      for (var t = e.$$hashKey, i = 1, a = arguments.length; a > i; i++) {
        var n = arguments[i];
        if (n)
          for (var r = Object.keys(n), o = 0, s = r.length; s > o; o++) {
            var l = r[o];
            e[l] = n[l]
          }
      }
      return c(e, t), e
    }

    function h(e) {
      return parseInt(e, 10)
    }

    function m(e, t) {
      return d(Object.create(e), t)
    }

    function p() {}

    function f(e) {
      return e
    }

    function g(e) {
      return function() {
        return e
      }
    }

    function v(e) {
      return "undefined" == typeof e
    }

    function b(e) {
      return "undefined" != typeof e
    }

    function y(e) {
      return null !== e && "object" == typeof e
    }

    function _(e) {
      return "string" == typeof e
    }

    function k(e) {
      return "number" == typeof e
    }

    function w(e) {
      return "[object Date]" === rn.call(e)
    }

    function S(e) {
      return "function" == typeof e
    }

    function x(e) {
      return "[object RegExp]" === rn.call(e)
    }

    function A(e) {
      return e && e.window === e
    }

    function C(e) {
      return e && e.$evalAsync && e.$watch
    }

    function M(e) {
      return "[object File]" === rn.call(e)
    }

    function z(e) {
      return "[object FormData]" === rn.call(e)
    }

    function T(e) {
      return "[object Blob]" === rn.call(e)
    }

    function P(e) {
      return "boolean" == typeof e
    }

    function D(e) {
      return e && S(e.then)
    }

    function E(e) {
      return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function B(e) {
      var t, i = {},
        a = e.split(",");
      for (t = 0; t < a.length; t++) i[a[t]] = !0;
      return i
    }

    function $(e) {
      return Wa(e.nodeName || e[0] && e[0].nodeName)
    }

    function L(e, t) {
      var i = e.indexOf(t);
      return i >= 0 && e.splice(i, 1), t
    }

    function N(e, t, i, a) {
      if (A(e) || C(e)) throw on("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
      if (t) {
        if (e === t) throw on("cpi", "Can't copy! Source and destination are identical.");
        if (i = i || [], a = a || [], y(e)) {
          var n = i.indexOf(e);
          if (-1 !== n) return a[n];
          i.push(e), a.push(t)
        }
        var o;
        if (cn(e)) {
          t.length = 0;
          for (var s = 0; s < e.length; s++) o = N(e[s], null, i, a), y(e[s]) && (i.push(e[s]), a.push(o)), t.push(o)
        } else {
          var l = t.$$hashKey;
          cn(t) ? t.length = 0 : r(t, function(e, i) {
            delete t[i]
          });
          for (var u in e) e.hasOwnProperty(u) && (o = N(e[u], null, i, a), y(e[u]) && (i.push(e[u]), a.push(o)), t[u] = o);
          c(t, l)
        }
      } else if (t = e, e)
        if (cn(e)) t = N(e, [], i, a);
        else if (w(e)) t = new Date(e.getTime());
      else if (x(e)) t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex;
      else if (y(e)) {
        var d = Object.create(Object.getPrototypeOf(e));
        t = N(e, d, i, a)
      }
      return t
    }

    function R(e, t) {
      if (cn(e)) {
        t = t || [];
        for (var i = 0, a = e.length; a > i; i++) t[i] = e[i]
      } else if (y(e)) {
        t = t || {};
        for (var n in e)("$" !== n.charAt(0) || "$" !== n.charAt(1)) && (t[n] = e[n])
      }
      return t || e
    }

    function K(e, t) {
      if (e === t) return !0;
      if (null === e || null === t) return !1;
      if (e !== e && t !== t) return !0;
      var a, n, r, o = typeof e,
        s = typeof t;
      if (o == s && "object" == o) {
        if (!cn(e)) {
          if (w(e)) return w(t) ? K(e.getTime(), t.getTime()) : !1;
          if (x(e) && x(t)) return e.toString() == t.toString();
          if (C(e) || C(t) || A(e) || A(t) || cn(t)) return !1;
          r = {};
          for (n in e)
            if ("$" !== n.charAt(0) && !S(e[n])) {
              if (!K(e[n], t[n])) return !1;
              r[n] = !0
            }
          for (n in t)
            if (!r.hasOwnProperty(n) && "$" !== n.charAt(0) && t[n] !== i && !S(t[n])) return !1;
          return !0
        }
        if (!cn(t)) return !1;
        if ((a = e.length) == t.length) {
          for (n = 0; a > n; n++)
            if (!K(e[n], t[n])) return !1;
          return !0
        }
      }
      return !1
    }

    function H(e, t, i) {
      return e.concat(tn.call(t, i))
    }

    function j(e, t) {
      return tn.call(e, t || 0)
    }

    function I(e, t) {
      var i = arguments.length > 2 ? j(arguments, 2) : [];
      return !S(t) || t instanceof RegExp ? t : i.length ? function() {
        return arguments.length ? t.apply(e, H(i, arguments, 0)) : t.apply(e, i)
      } : function() {
        return arguments.length ? t.apply(e, arguments) : t.call(e)
      }
    }

    function F(e, a) {
      var n = a;
      return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? n = i : A(a) ? n = "$WINDOW" : a && t === a ? n = "$DOCUMENT" : C(a) && (n = "$SCOPE"), n
    }

    function G(e, t) {
      return "undefined" == typeof e ? i : (k(t) || (t = t ? 2 : null), JSON.stringify(e, F, t))
    }

    function O(e) {
      return _(e) ? JSON.parse(e) : e
    }

    function q(e) {
      e = Qa(e).clone();
      try {
        e.empty()
      } catch (t) {}
      var i = Qa("<div>").append(e).html();
      try {
        return e[0].nodeType === bn ? Wa(i) : i.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
          return "<" + Wa(t)
        })
      } catch (t) {
        return Wa(i)
      }
    }

    function W(e) {
      try {
        return decodeURIComponent(e)
      } catch (t) {}
    }

    function J(e) {
      var t, i, a = {};
      return r((e || "").split("&"), function(e) {
        if (e && (t = e.replace(/\+/g, "%20").split("="), i = W(t[0]), b(i))) {
          var n = b(t[1]) ? W(t[1]) : !0;
          Ja.call(a, i) ? cn(a[i]) ? a[i].push(n) : a[i] = [a[i], n] : a[i] = n
        }
      }), a
    }

    function V(e) {
      var t = [];
      return r(e, function(e, i) {
        cn(e) ? r(e, function(e) {
          t.push(Z(i, !0) + (e === !0 ? "" : "=" + Z(e, !0)))
        }) : t.push(Z(i, !0) + (e === !0 ? "" : "=" + Z(e, !0)))
      }), t.length ? t.join("&") : ""
    }

    function U(e) {
      return Z(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Z(e, t) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function Y(e, t) {
      var i, a, n = pn.length;
      for (e = Qa(e), a = 0; n > a; ++a)
        if (i = pn[a] + t, _(i = e.attr(i))) return i;
      return null
    }

    function Q(e, t) {
      var i, a, n = {};
      r(pn, function(t) {
        var n = t + "app";
        !i && e.hasAttribute && e.hasAttribute(n) && (i = e, a = e.getAttribute(n))
      }), r(pn, function(t) {
        var n, r = t + "app";
        !i && (n = e.querySelector("[" + r.replace(":", "\\:") + "]")) && (i = n, a = n.getAttribute(r))
      }), i && (n.strictDi = null !== Y(i, "strict-di"), t(i, a ? [a] : [], n))
    }

    function X(i, a, n) {
      y(n) || (n = {});
      var o = {
        strictDi: !1
      };
      n = d(o, n);
      var s = function() {
          if (i = Qa(i), i.injector()) {
            var e = i[0] === t ? "document" : q(i);
            throw on("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
          }
          a = a || [], a.unshift(["$provide", function(e) {
            e.value("$rootElement", i)
          }]), n.debugInfoEnabled && a.push(["$compileProvider", function(e) {
            e.debugInfoEnabled(!0)
          }]), a.unshift("ng");
          var r = Ot(a, n.strictDi);
          return r.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, i, a) {
            e.$apply(function() {
              t.data("$injector", a), i(t)(e)
            })
          }]), r
        },
        l = /^NG_ENABLE_DEBUG_INFO!/,
        u = /^NG_DEFER_BOOTSTRAP!/;
      return e && l.test(e.name) && (n.debugInfoEnabled = !0, e.name = e.name.replace(l, "")), e && !u.test(e.name) ? s() : (e.name = e.name.replace(u, ""), sn.resumeBootstrap = function(e) {
        return r(e, function(e) {
          a.push(e)
        }), s()
      }, void(S(sn.resumeDeferredBootstrap) && sn.resumeDeferredBootstrap()))
    }

    function et() {
      e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function tt(e) {
      var t = sn.element(e).injector();
      if (!t) throw on("test", "no injector found for element argument to getTestability");
      return t.get("$$testability")
    }

    function it(e, t) {
      return t = t || "_", e.replace(fn, function(e, i) {
        return (i ? t : "") + e.toLowerCase()
      })
    }

    function at() {
      var t;
      gn || (Xa = e.jQuery, Xa && Xa.fn.on ? (Qa = Xa, d(Xa.fn, {
        scope: Nn.scope,
        isolateScope: Nn.isolateScope,
        controller: Nn.controller,
        injector: Nn.injector,
        inheritedData: Nn.inheritedData
      }), t = Xa.cleanData, Xa.cleanData = function(e) {
        var i;
        if (un) un = !1;
        else
          for (var a, n = 0; null != (a = e[n]); n++) i = Xa._data(a, "events"), i && i.$destroy && Xa(a).triggerHandler("$destroy");
        t(e)
      }) : Qa = _t, sn.element = Qa, gn = !0)
    }

    function nt(e, t, i) {
      if (!e) throw on("areq", "Argument '{0}' is {1}", t || "?", i || "required");
      return e
    }

    function rt(e, t, i) {
      return i && cn(e) && (e = e[e.length - 1]), nt(S(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function ot(e, t) {
      if ("hasOwnProperty" === e) throw on("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function st(e, t, i) {
      if (!t) return e;
      for (var a, n = t.split("."), r = e, o = n.length, s = 0; o > s; s++) a = n[s], e && (e = (r = e)[a]);
      return !i && S(e) ? I(r, e) : e
    }

    function lt(e) {
      var t = e[0],
        i = e[e.length - 1],
        a = [t];
      do {
        if (t = t.nextSibling, !t) break;
        a.push(t)
      } while (t !== i);
      return Qa(a)
    }

    function ut() {
      return Object.create(null)
    }

    function ct(e) {
      function t(e, t, i) {
        return e[t] || (e[t] = i())
      }
      var i = a("$injector"),
        n = a("ng"),
        r = t(e, "angular", Object);
      return r.$$minErr = r.$$minErr || a, t(r, "module", function() {
        var e = {};
        return function(a, r, o) {
          var s = function(e, t) {
            if ("hasOwnProperty" === e) throw n("badname", "hasOwnProperty is not a valid {0} name", t)
          };
          return s(a, "module"), r && e.hasOwnProperty(a) && (e[a] = null), t(e, a, function() {
            function e(e, i, a, n) {
              return n || (n = t),
                function() {
                  return n[a || "push"]([e, i, arguments]), u
                }
            }
            if (!r) throw i("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", a);
            var t = [],
              n = [],
              s = [],
              l = e("$injector", "invoke", "push", n),
              u = {
                _invokeQueue: t,
                _configBlocks: n,
                _runBlocks: s,
                requires: r,
                name: a,
                provider: e("$provide", "provider"),
                factory: e("$provide", "factory"),
                service: e("$provide", "service"),
                value: e("$provide", "value"),
                constant: e("$provide", "constant", "unshift"),
                animation: e("$animateProvider", "register"),
                filter: e("$filterProvider", "register"),
                controller: e("$controllerProvider", "register"),
                directive: e("$compileProvider", "directive"),
                config: l,
                run: function(e) {
                  return s.push(e), this
                }
              };
            return o && l(o), u
          })
        }
      })
    }

    function dt(e) {
      var t = [];
      return JSON.stringify(e, function(e, i) {
        if (i = F(e, i), y(i)) {
          if (t.indexOf(i) >= 0) return "<<already seen>>";
          t.push(i)
        }
        return i
      })
    }

    function ht(e) {
      return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? dt(e) : e
    }

    function mt(t) {
      d(t, {
        bootstrap: X,
        copy: N,
        extend: d,
        equals: K,
        element: Qa,
        forEach: r,
        injector: Ot,
        noop: p,
        bind: I,
        toJson: G,
        fromJson: O,
        identity: f,
        isUndefined: v,
        isDefined: b,
        isString: _,
        isFunction: S,
        isObject: y,
        isNumber: k,
        isElement: E,
        isArray: cn,
        version: wn,
        isDate: w,
        lowercase: Wa,
        uppercase: Va,
        callbacks: {
          counter: 0
        },
        getTestability: tt,
        $$minErr: a,
        $$csp: mn,
        reloadWithDebugInfo: et
      }), en = ct(e);
      try {
        en("ngLocale")
      } catch (i) {
        en("ngLocale", []).provider("$locale", gi)
      }
      en("ng", ["ngLocale"], ["$provide", function(e) {
        e.provider({
          $$sanitizeUri: Vi
        }), e.provider("$compile", Yt).directive({
          a: zr,
          input: qr,
          textarea: qr,
          form: Br,
          script: Lo,
          select: Ko,
          style: jo,
          option: Ho,
          ngBind: Vr,
          ngBindHtml: Zr,
          ngBindTemplate: Ur,
          ngClass: Qr,
          ngClassEven: eo,
          ngClassOdd: Xr,
          ngCloak: to,
          ngController: io,
          ngForm: $r,
          ngHide: To,
          ngIf: ro,
          ngInclude: oo,
          ngInit: lo,
          ngNonBindable: So,
          ngPluralize: xo,
          ngRepeat: Ao,
          ngShow: zo,
          ngStyle: Po,
          ngSwitch: Do,
          ngSwitchWhen: Eo,
          ngSwitchDefault: Bo,
          ngOptions: Ro,
          ngTransclude: $o,
          ngModel: _o,
          ngList: uo,
          ngChange: Yr,
          pattern: Fo,
          ngPattern: Fo,
          required: Io,
          ngRequired: Io,
          minlength: Oo,
          ngMinlength: Oo,
          maxlength: Go,
          ngMaxlength: Go,
          ngValue: Jr,
          ngModelOptions: wo
        }).directive({
          ngInclude: so
        }).directive(Tr).directive(ao), e.provider({
          $anchorScroll: qt,
          $animate: Wn,
          $browser: Vt,
          $cacheFactory: Ut,
          $controller: ti,
          $document: ii,
          $exceptionHandler: ai,
          $filter: oa,
          $interpolate: pi,
          $interval: fi,
          $http: ci,
          $httpBackend: hi,
          $location: Pi,
          $log: Di,
          $parse: Fi,
          $rootScope: Ji,
          $q: Gi,
          $$q: Oi,
          $sce: Qi,
          $sceDelegate: Yi,
          $sniffer: Xi,
          $templateCache: Zt,
          $templateRequest: ea,
          $$testability: ta,
          $timeout: ia,
          $window: ra,
          $$rAF: Wi,
          $$asyncCallback: Wt,
          $$jqLite: Ht
        })
      }])
    }

    function pt() {
      return ++xn
    }

    function ft(e) {
      return e.replace(Mn, function(e, t, i, a) {
        return a ? i.toUpperCase() : i
      }).replace(zn, "Moz$1")
    }

    function gt(e) {
      return !En.test(e)
    }

    function vt(e) {
      var t = e.nodeType;
      return t === vn || !t || t === _n
    }

    function bt(e, t) {
      var i, a, n, o, s = t.createDocumentFragment(),
        l = [];
      if (gt(e)) l.push(t.createTextNode(e));
      else {
        for (i = i || s.appendChild(t.createElement("div")), a = (Bn.exec(e) || ["", ""])[1].toLowerCase(), n = Ln[a] || Ln._default, i.innerHTML = n[1] + e.replace($n, "<$1></$2>") + n[2], o = n[0]; o--;) i = i.lastChild;
        l = H(l, i.childNodes), i = s.firstChild, i.textContent = ""
      }
      return s.textContent = "", s.innerHTML = "", r(l, function(e) {
        s.appendChild(e)
      }), s
    }

    function yt(e, i) {
      i = i || t;
      var a;
      return (a = Dn.exec(e)) ? [i.createElement(a[1])] : (a = bt(e, i)) ? a.childNodes : []
    }

    function _t(e) {
      if (e instanceof _t) return e;
      var t;
      if (_(e) && (e = dn(e), t = !0), !(this instanceof _t)) {
        if (t && "<" != e.charAt(0)) throw Pn("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
        return new _t(e)
      }
      t ? Pt(this, yt(e)) : Pt(this, e)
    }

    function kt(e) {
      return e.cloneNode(!0)
    }

    function wt(e, t) {
      if (t || xt(e), e.querySelectorAll)
        for (var i = e.querySelectorAll("*"), a = 0, n = i.length; n > a; a++) xt(i[a])
    }

    function St(e, t, i, a) {
      if (b(a)) throw Pn("offargs", "jqLite#off() does not support the `selector` argument");
      var n = At(e),
        o = n && n.events,
        s = n && n.handle;
      if (s)
        if (t) r(t.split(" "), function(t) {
          if (b(i)) {
            var a = o[t];
            if (L(a || [], i), a && a.length > 0) return
          }
          Cn(e, t, s), delete o[t]
        });
        else
          for (t in o) "$destroy" !== t && Cn(e, t, s), delete o[t]
    }

    function xt(e, t) {
      var a = e.ng339,
        n = a && Sn[a];
      if (n) {
        if (t) return void delete n.data[t];
        n.handle && (n.events.$destroy && n.handle({}, "$destroy"), St(e)), delete Sn[a], e.ng339 = i
      }
    }

    function At(e, t) {
      var a = e.ng339,
        n = a && Sn[a];
      return t && !n && (e.ng339 = a = pt(), n = Sn[a] = {
        events: {},
        data: {},
        handle: i
      }), n
    }

    function Ct(e, t, i) {
      if (vt(e)) {
        var a = b(i),
          n = !a && t && !y(t),
          r = !t,
          o = At(e, !n),
          s = o && o.data;
        if (a) s[t] = i;
        else {
          if (r) return s;
          if (n) return s && s[t];
          d(s, t)
        }
      }
    }

    function Mt(e, t) {
      return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
    }

    function zt(e, t) {
      t && e.setAttribute && r(t.split(" "), function(t) {
        e.setAttribute("class", dn((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + dn(t) + " ", " ")))
      })
    }

    function Tt(e, t) {
      if (t && e.setAttribute) {
        var i = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
        r(t.split(" "), function(e) {
          e = dn(e), -1 === i.indexOf(" " + e + " ") && (i += e + " ")
        }), e.setAttribute("class", dn(i))
      }
    }

    function Pt(e, t) {
      if (t)
        if (t.nodeType) e[e.length++] = t;
        else {
          var i = t.length;
          if ("number" == typeof i && t.window !== t) {
            if (i)
              for (var a = 0; i > a; a++) e[e.length++] = t[a]
          } else e[e.length++] = t
        }
    }

    function Dt(e, t) {
      return Et(e, "$" + (t || "ngController") + "Controller")
    }

    function Et(e, t, a) {
      e.nodeType == _n && (e = e.documentElement);
      for (var n = cn(t) ? t : [t]; e;) {
        for (var r = 0, o = n.length; o > r; r++)
          if ((a = Qa.data(e, n[r])) !== i) return a;
        e = e.parentNode || e.nodeType === kn && e.host
      }
    }

    function Bt(e) {
      for (wt(e, !0); e.firstChild;) e.removeChild(e.firstChild)
    }

    function $t(e, t) {
      t || wt(e);
      var i = e.parentNode;
      i && i.removeChild(e)
    }

    function Lt(t, i) {
      i = i || e, "complete" === i.document.readyState ? i.setTimeout(t) : Qa(i).on("load", t)
    }

    function Nt(e, t) {
      var i = Rn[t.toLowerCase()];
      return i && Kn[$(e)] && i
    }

    function Rt(e, t) {
      var i = e.nodeName;
      return ("INPUT" === i || "TEXTAREA" === i) && Hn[t]
    }

    function Kt(e, t) {
      var i = function(i, a) {
        i.isDefaultPrevented = function() {
          return i.defaultPrevented
        };
        var n = t[a || i.type],
          r = n ? n.length : 0;
        if (r) {
          if (v(i.immediatePropagationStopped)) {
            var o = i.stopImmediatePropagation;
            i.stopImmediatePropagation = function() {
              i.immediatePropagationStopped = !0, i.stopPropagation && i.stopPropagation(), o && o.call(i)
            }
          }
          i.isImmediatePropagationStopped = function() {
            return i.immediatePropagationStopped === !0
          }, r > 1 && (n = R(n));
          for (var s = 0; r > s; s++) i.isImmediatePropagationStopped() || n[s].call(e, i)
        }
      };
      return i.elem = e, i
    }

    function Ht() {
      this.$get = function() {
        return d(_t, {
          hasClass: function(e, t) {
            return e.attr && (e = e[0]), Mt(e, t)
          },
          addClass: function(e, t) {
            return e.attr && (e = e[0]), Tt(e, t)
          },
          removeClass: function(e, t) {
            return e.attr && (e = e[0]), zt(e, t)
          }
        })
      }
    }

    function jt(e, t) {
      var i = e && e.$$hashKey;
      if (i) return "function" == typeof i && (i = e.$$hashKey()), i;
      var a = typeof e;
      return i = "function" == a || "object" == a && null !== e ? e.$$hashKey = a + ":" + (t || u)() : a + ":" + e
    }

    function It(e, t) {
      if (t) {
        var i = 0;
        this.nextUid = function() {
          return ++i
        }
      }
      r(e, this.put, this)
    }

    function Ft(e) {
      var t = e.toString().replace(Gn, ""),
        i = t.match(jn);
      return i ? "function(" + (i[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Gt(e, t, i) {
      var a, n, o, s;
      if ("function" == typeof e) {
        if (!(a = e.$inject)) {
          if (a = [], e.length) {
            if (t) throw _(i) && i || (i = e.name || Ft(e)), On("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", i);
            n = e.toString().replace(Gn, ""), o = n.match(jn), r(o[1].split(In), function(e) {
              e.replace(Fn, function(e, t, i) {
                a.push(i)
              })
            })
          }
          e.$inject = a
        }
      } else cn(e) ? (s = e.length - 1, rt(e[s], "fn"), a = e.slice(0, s)) : rt(e, "fn", !0);
      return a
    }

    function Ot(e, t) {
      function a(e) {
        return function(t, i) {
          return y(t) ? void r(t, l(e)) : e(t, i)
        }
      }

      function n(e, t) {
        if (ot(e, "service"), (S(t) || cn(t)) && (t = C.instantiate(t)), !t.$get) throw On("pget", "Provider '{0}' must define $get factory method.", e);
        return A[e + k] = t
      }

      function o(e, t) {
        return function() {
          var i = z.invoke(t, this);
          if (v(i)) throw On("undef", "Provider '{0}' must return a value from $get factory method.", e);
          return i
        }
      }

      function s(e, t, i) {
        return n(e, {
          $get: i !== !1 ? o(e, t) : t
        })
      }

      function u(e, t) {
        return s(e, ["$injector", function(e) {
          return e.instantiate(t)
        }])
      }

      function c(e, t) {
        return s(e, g(t), !1)
      }

      function d(e, t) {
        ot(e, "constant"), A[e] = t, M[e] = t
      }

      function h(e, t) {
        var i = C.get(e + k),
          a = i.$get;
        i.$get = function() {
          var e = z.invoke(a, i);
          return z.invoke(t, null, {
            $delegate: e
          })
        }
      }

      function m(e) {
        var t, i = [];
        return r(e, function(e) {
          function a(e) {
            var t, i;
            for (t = 0, i = e.length; i > t; t++) {
              var a = e[t],
                n = C.get(a[0]);
              n[a[1]].apply(n, a[2])
            }
          }
          if (!x.get(e)) {
            x.put(e, !0);
            try {
              _(e) ? (t = en(e), i = i.concat(m(t.requires)).concat(t._runBlocks), a(t._invokeQueue), a(t._configBlocks)) : S(e) ? i.push(C.invoke(e)) : cn(e) ? i.push(C.invoke(e)) : rt(e, "module")
            } catch (n) {
              throw cn(e) && (e = e[e.length - 1]), n.message && n.stack && -1 == n.stack.indexOf(n.message) && (n = n.message + "\n" + n.stack), On("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, n.stack || n.message || n)
            }
          }
        }), i
      }

      function f(e, i) {
        function a(t, a) {
          if (e.hasOwnProperty(t)) {
            if (e[t] === b) throw On("cdep", "Circular dependency found: {0}", t + " <- " + w.join(" <- "));
            return e[t]
          }
          try {
            return w.unshift(t), e[t] = b, e[t] = i(t, a)
          } catch (n) {
            throw e[t] === b && delete e[t], n
          } finally {
            w.shift()
          }
        }

        function n(e, i, n, r) {
          "string" == typeof n && (r = n, n = null);
          var o, s, l, u = [],
            c = Ot.$$annotate(e, t, r);
          for (s = 0, o = c.length; o > s; s++) {
            if (l = c[s], "string" != typeof l) throw On("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
            u.push(n && n.hasOwnProperty(l) ? n[l] : a(l, r))
          }
          return cn(e) && (e = e[o]), e.apply(i, u)
        }

        function r(e, t, i) {
          var a = Object.create((cn(e) ? e[e.length - 1] : e).prototype || null),
            r = n(e, a, t, i);
          return y(r) || S(r) ? r : a
        }
        return {
          invoke: n,
          instantiate: r,
          get: a,
          annotate: Ot.$$annotate,
          has: function(t) {
            return A.hasOwnProperty(t + k) || e.hasOwnProperty(t)
          }
        }
      }
      t = t === !0;
      var b = {},
        k = "Provider",
        w = [],
        x = new It([], !0),
        A = {
          $provide: {
            provider: a(n),
            factory: a(s),
            service: a(u),
            value: a(c),
            constant: a(d),
            decorator: h
          }
        },
        C = A.$injector = f(A, function(e, t) {
          throw sn.isString(t) && w.push(t), On("unpr", "Unknown provider: {0}", w.join(" <- "))
        }),
        M = {},
        z = M.$injector = f(M, function(e, t) {
          var a = C.get(e + k, t);
          return z.invoke(a.$get, a, i, e)
        });
      return r(m(e), function(e) {
        z.invoke(e || p)
      }), z
    }

    function qt() {
      var e = !0;
      this.disableAutoScrolling = function() {
        e = !1
      }, this.$get = ["$window", "$location", "$rootScope", function(t, i, a) {
        function n(e) {
          var t = null;
          return Array.prototype.some.call(e, function(e) {
            return "a" === $(e) ? (t = e, !0) : void 0
          }), t
        }

        function r() {
          var e = s.yOffset;
          if (S(e)) e = e();
          else if (E(e)) {
            var i = e[0],
              a = t.getComputedStyle(i);
            e = "fixed" !== a.position ? 0 : i.getBoundingClientRect().bottom
          } else k(e) || (e = 0);
          return e
        }

        function o(e) {
          if (e) {
            e.scrollIntoView();
            var i = r();
            if (i) {
              var a = e.getBoundingClientRect().top;
              t.scrollBy(0, a - i)
            }
          } else t.scrollTo(0, 0)
        }

        function s() {
          var e, t = i.hash();
          t ? (e = l.getElementById(t)) ? o(e) : (e = n(l.getElementsByName(t))) ? o(e) : "top" === t && o(null) : o(null)
        }
        var l = t.document;
        return e && a.$watch(function() {
          return i.hash()
        }, function(e, t) {
          (e !== t || "" !== e) && Lt(function() {
            a.$evalAsync(s)
          })
        }), s
      }]
    }

    function Wt() {
      this.$get = ["$$rAF", "$timeout", function(e, t) {
        return e.supported ? function(t) {
          return e(t)
        } : function(e) {
          return t(e, 0, !1)
        }
      }]
    }

    function Jt(e, t, a, n) {
      function o(e) {
        try {
          e.apply(null, j(arguments, 1))
        } finally {
          if (S--, 0 === S)
            for (; x.length;) try {
              x.pop()()
            } catch (t) {
              a.error(t)
            }
        }
      }

      function s(e) {
        var t = e.indexOf("#");
        return -1 === t ? "" : e.substr(t + 1)
      }

      function l(e, t) {
        ! function i() {
          r(C, function(e) {
            e()
          }), A = t(i, e)
        }()
      }

      function u() {
        c(), d()
      }

      function c() {
        M = e.history.state, M = v(M) ? null : M, K(M, $) && (M = $), $ = M
      }

      function d() {
        (T !== m.url() || z !== M) && (T = m.url(), z = M, r(E, function(e) {
          e(m.url(), M)
        }))
      }

      function h(e) {
        try {
          return decodeURIComponent(e)
        } catch (t) {
          return e
        }
      }
      var m = this,
        f = t[0],
        g = e.location,
        b = e.history,
        y = e.setTimeout,
        k = e.clearTimeout,
        w = {};
      m.isMock = !1;
      var S = 0,
        x = [];
      m.$$completeOutstandingRequest = o, m.$$incOutstandingRequestCount = function() {
        S++
      }, m.notifyWhenNoOutstandingRequests = function(e) {
        r(C, function(e) {
          e()
        }), 0 === S ? e() : x.push(e)
      };
      var A, C = [];
      m.addPollFn = function(e) {
        return v(A) && l(100, y), C.push(e), e
      };
      var M, z, T = g.href,
        P = t.find("base"),
        D = null;
      c(), z = M, m.url = function(t, i, a) {
        if (v(a) && (a = null), g !== e.location && (g = e.location), b !== e.history && (b = e.history), t) {
          var r = z === a;
          if (T === t && (!n.history || r)) return m;
          var o = T && ki(T) === ki(t);
          return T = t, z = a, !n.history || o && r ? (o || (D = t), i ? g.replace(t) : o ? g.hash = s(t) : g.href = t) : (b[i ? "replaceState" : "pushState"](a, "", t), c(), z = M), m
        }
        return D || g.href.replace(/%27/g, "'")
      }, m.state = function() {
        return M
      };
      var E = [],
        B = !1,
        $ = null;
      m.onUrlChange = function(t) {
        return B || (n.history && Qa(e).on("popstate", u), Qa(e).on("hashchange", u), B = !0), E.push(t), t
      }, m.$$checkUrlChange = d, m.baseHref = function() {
        var e = P.attr("href");
        return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
      };
      var L = {},
        N = "",
        R = m.baseHref();
      m.cookies = function(e, t) {
        var n, r, o, s, l;
        if (!e) {
          if (f.cookie !== N)
            for (N = f.cookie, r = N.split("; "), L = {}, s = 0; s < r.length; s++) o = r[s], l = o.indexOf("="), l > 0 && (e = h(o.substring(0, l)), L[e] === i && (L[e] = h(o.substring(l + 1))));
          return L
        }
        t === i ? f.cookie = encodeURIComponent(e) + "=;path=" + R + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : _(t) && (n = (f.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=" + R).length + 1, n > 4096 && a.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + n + " > 4096 bytes)!"))
      }, m.defer = function(e, t) {
        var i;
        return S++, i = y(function() {
          delete w[i], o(e)
        }, t || 0), w[i] = !0, i
      }, m.defer.cancel = function(e) {
        return w[e] ? (delete w[e], k(e), o(p), !0) : !1
      }
    }

    function Vt() {
      this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, i, a) {
        return new Jt(e, a, t, i)
      }]
    }

    function Ut() {
      this.$get = function() {
        function e(e, i) {
          function n(e) {
            e != h && (m ? m == e && (m = e.n) : m = e, r(e.n, e.p), r(e, h), h = e, h.n = null)
          }

          function r(e, t) {
            e != t && (e && (e.p = t), t && (t.n = e))
          }
          if (e in t) throw a("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
          var o = 0,
            s = d({}, i, {
              id: e
            }),
            l = {},
            u = i && i.capacity || Number.MAX_VALUE,
            c = {},
            h = null,
            m = null;
          return t[e] = {
            put: function(e, t) {
              if (u < Number.MAX_VALUE) {
                var i = c[e] || (c[e] = {
                  key: e
                });
                n(i)
              }
              if (!v(t)) return e in l || o++, l[e] = t, o > u && this.remove(m.key), t
            },
            get: function(e) {
              if (u < Number.MAX_VALUE) {
                var t = c[e];
                if (!t) return;
                n(t)
              }
              return l[e]
            },
            remove: function(e) {
              if (u < Number.MAX_VALUE) {
                var t = c[e];
                if (!t) return;
                t == h && (h = t.p), t == m && (m = t.n), r(t.n, t.p), delete c[e]
              }
              delete l[e], o--
            },
            removeAll: function() {
              l = {}, o = 0, c = {}, h = m = null
            },
            destroy: function() {
              l = null, s = null, c = null, delete t[e]
            },
            info: function() {
              return d({}, s, {
                size: o
              })
            }
          }
        }
        var t = {};
        return e.info = function() {
          var e = {};
          return r(t, function(t, i) {
            e[i] = t.info()
          }), e
        }, e.get = function(e) {
          return t[e]
        }, e
      }
    }

    function Zt() {
      this.$get = ["$cacheFactory", function(e) {
        return e("templates")
      }]
    }

    function Yt(e, a) {
      function n(e, t) {
        var i = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
          a = {};
        return r(e, function(e, n) {
          var r = e.match(i);
          if (!r) throw Jn("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, n, e);
          a[n] = {
            mode: r[1][0],
            collection: "*" === r[2],
            optional: "?" === r[3],
            attrName: r[4] || n
          }
        }), a
      }
      var o = {},
        s = "Directive",
        u = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        c = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        h = B("ngSrc,ngSrcset,src,srcset"),
        v = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        k = /^(on[a-z]+|formaction)$/;
      this.directive = function x(t, i) {
        return ot(t, "directive"), _(t) ? (nt(i, "directiveFactory"), o.hasOwnProperty(t) || (o[t] = [], e.factory(t + s, ["$injector", "$exceptionHandler", function(e, i) {
          var a = [];
          return r(o[t], function(r, o) {
            try {
              var s = e.invoke(r);
              S(s) ? s = {
                compile: g(s)
              } : !s.compile && s.link && (s.compile = g(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || t, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA", y(s.scope) && (s.$$isolateBindings = n(s.scope, s.name)), a.push(s)
            } catch (l) {
              i(l)
            }
          }), a
        }])), o[t].push(i)) : r(t, l(x)), this
      }, this.aHrefSanitizationWhitelist = function(e) {
        return b(e) ? (a.aHrefSanitizationWhitelist(e), this) : a.aHrefSanitizationWhitelist()
      }, this.imgSrcSanitizationWhitelist = function(e) {
        return b(e) ? (a.imgSrcSanitizationWhitelist(e), this) : a.imgSrcSanitizationWhitelist()
      };
      var w = !0;
      this.debugInfoEnabled = function(e) {
        return b(e) ? (w = e, this) : w
      }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, a, n, l, g, b, x, A, M, z, T) {
        function P(e, t) {
          try {
            e.addClass(t)
          } catch (i) {}
        }

        function D(e, t, i, a, n) {
          e instanceof Qa || (e = Qa(e)), r(e, function(t, i) {
            t.nodeType == bn && t.nodeValue.match(/\S+/) && (e[i] = Qa(t).wrap("<span></span>").parent()[0])
          });
          var o = B(e, t, e, i, a, n);
          D.$$addScopeClass(e);
          var s = null;
          return function(t, i, a) {
            nt(t, "scope"), a = a || {};
            var n = a.parentBoundTranscludeFn,
              r = a.transcludeControllers,
              l = a.futureParentElement;
            n && n.$$boundTransclude && (n = n.$$boundTransclude), s || (s = E(l));
            var u;
            if (u = "html" !== s ? Qa(Q(s, Qa("<div>").append(e).html())) : i ? Nn.clone.call(e) : e, r)
              for (var c in r) u.data("$" + c + "Controller", r[c].instance);
            return D.$$addScopeInfo(u, t), i && i(u, t), o && o(t, u, u, n), u
          }
        }

        function E(e) {
          var t = e && e[0];
          return t && "foreignobject" !== $(t) && t.toString().match(/SVG/) ? "svg" : "html"
        }

        function B(e, t, a, n, r, o) {
          function s(e, a, n, r) {
            var o, s, l, u, c, d, h, m, g;
            if (p) {
              var v = a.length;
              for (g = new Array(v), c = 0; c < f.length; c += 3) h = f[c], g[h] = a[h]
            } else g = a;
            for (c = 0, d = f.length; d > c;) l = g[f[c++]], o = f[c++], s = f[c++], o ? (o.scope ? (u = e.$new(), D.$$addScopeInfo(Qa(l), u)) : u = e, m = o.transcludeOnThisElement ? N(e, o.transclude, r, o.elementTranscludeOnThisElement) : !o.templateOnThisElement && r ? r : !r && t ? N(e, t) : null, o(s, u, l, n, m)) : s && s(e, l.childNodes, i, r)
          }
          for (var l, u, c, d, h, m, p, f = [], g = 0; g < e.length; g++) l = new ot, u = R(e[g], [], l, 0 === g ? n : i, r), c = u.length ? F(u, e[g], l, t, a, null, [], [], o) : null, c && c.scope && D.$$addScopeClass(l.$$element), h = c && c.terminal || !(d = e[g].childNodes) || !d.length ? null : B(d, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : t), (c || h) && (f.push(g, c, h), m = !0, p = p || c), o = null;
          return m ? s : null
        }

        function N(e, t, i) {
          var a = function(a, n, r, o, s) {
            return a || (a = e.$new(!1, s), a.$$transcluded = !0), t(a, n, {
              parentBoundTranscludeFn: i,
              transcludeControllers: r,
              futureParentElement: o
            })
          };
          return a
        }

        function R(e, t, i, a, n) {
          var r, o, s = e.nodeType,
            l = i.$attr;
          switch (s) {
            case vn:
              O(t, Qt($(e)), "E", a, n);
              for (var d, h, m, p, f, g, v = e.attributes, b = 0, k = v && v.length; k > b; b++) {
                var w = !1,
                  S = !1;
                d = v[b], h = d.name, f = dn(d.value), p = Qt(h), (g = dt.test(p)) && (h = h.replace(Vn, "").substr(8).replace(/_(.)/g, function(e, t) {
                  return t.toUpperCase()
                }));
                var x = p.replace(/(Start|End)$/, "");
                W(x) && p === x + "Start" && (w = h, S = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), m = Qt(h.toLowerCase()), l[m] = h, (g || !i.hasOwnProperty(m)) && (i[m] = f, Nt(e, m) && (i[m] = !0)), et(e, t, f, m, g), O(t, m, "A", a, n, w, S)
              }
              if (o = e.className, y(o) && (o = o.animVal), _(o) && "" !== o)
                for (; r = c.exec(o);) m = Qt(r[2]), O(t, m, "C", a, n) && (i[m] = dn(r[3])), o = o.substr(r.index + r[0].length);
              break;
            case bn:
              Y(t, e.nodeValue);
              break;
            case yn:
              try {
                r = u.exec(e.nodeValue), r && (m = Qt(r[1]), O(t, m, "M", a, n) && (i[m] = dn(r[2])))
              } catch (A) {}
          }
          return t.sort(U), t
        }

        function H(e, t, i) {
          var a = [],
            n = 0;
          if (t && e.hasAttribute && e.hasAttribute(t)) {
            do {
              if (!e) throw Jn("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, i);
              e.nodeType == vn && (e.hasAttribute(t) && n++, e.hasAttribute(i) && n--), a.push(e), e = e.nextSibling
            } while (n > 0)
          } else a.push(e);
          return Qa(a)
        }

        function I(e, t, i) {
          return function(a, n, r, o, s) {
            return n = H(n[0], t, i), e(a, n, r, o, s)
          }
        }

        function F(e, o, s, l, u, c, d, h, m) {
          function p(e, t, i, a) {
            e && (i && (e = I(e, i, a)), e.require = A.require, e.directiveName = M, ($ === A || A.$$isolateScope) && (e = at(e, {
              isolateScope: !0
            })), d.push(e)), t && (i && (t = I(t, i, a)), t.require = A.require, t.directiveName = M, ($ === A || A.$$isolateScope) && (t = at(t, {
              isolateScope: !0
            })), h.push(t))
          }

          function f(e, t, i, a) {
            var n, o, s = "data",
              l = !1,
              u = i;
            if (_(t)) {
              if (o = t.match(v), t = t.substring(o[0].length), o[3] && (o[1] ? o[3] = null : o[1] = o[3]), "^" === o[1] ? s = "inheritedData" : "^^" === o[1] && (s = "inheritedData", u = i.parent()), "?" === o[2] && (l = !0), n = null, a && "data" === s && (n = a[t]) && (n = n.instance), n = n || u[s]("$" + t + "Controller"), !n && !l) throw Jn("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", t, e);
              return n || null
            }
            return cn(t) && (n = [], r(t, function(t) {
              n.push(f(e, t, i, a))
            })), n
          }

          function k(e, t, n, l, u) {
            function c(e, t, a) {
              var n;
              return C(e) || (a = t, t = e, e = i), W && (n = k), a || (a = W ? S.parent() : S), u(e, t, n, a, T)
            }
            var m, p, v, y, _, k, w, S, A;
            if (o === n ? (A = s, S = s.$$element) : (S = Qa(n), A = new ot(S, s)), $ && (_ = t.$new(!0)), u && (w = c, w.$$boundTransclude = u), B && (x = {}, k = {}, r(B, function(e) {
                var i, a = {
                  $scope: e === $ || e.$$isolateScope ? _ : t,
                  $element: S,
                  $attrs: A,
                  $transclude: w
                };
                y = e.controller, "@" == y && (y = A[e.name]), i = b(y, a, !0, e.controllerAs), k[e.name] = i, W || S.data("$" + e.name + "Controller", i.instance), x[e.name] = i
              })), $) {
              D.$$addScopeInfo(S, _, !0, !(L && (L === $ || L === $.$$originalDirective))), D.$$addScopeClass(S, !0);
              var M = x && x[$.name],
                z = _;
              M && M.identifier && $.bindToController === !0 && (z = M.instance), r(_.$$isolateBindings = $.$$isolateBindings, function(e, i) {
                var n, r, o, s, l = e.attrName,
                  u = e.optional,
                  c = e.mode;
                switch (c) {
                  case "@":
                    A.$observe(l, function(e) {
                      z[i] = e
                    }), A.$$observers[l].$$scope = t, A[l] && (z[i] = a(A[l])(t));
                    break;
                  case "=":
                    if (u && !A[l]) return;
                    r = g(A[l]), s = r.literal ? K : function(e, t) {
                      return e === t || e !== e && t !== t
                    }, o = r.assign || function() {
                      throw n = z[i] = r(t), Jn("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", A[l], $.name)
                    }, n = z[i] = r(t);
                    var d = function(e) {
                      return s(e, z[i]) || (s(e, n) ? o(t, e = z[i]) : z[i] = e), n = e
                    };
                    d.$stateful = !0;
                    var h;
                    h = e.collection ? t.$watchCollection(A[l], d) : t.$watch(g(A[l], d), null, r.literal), _.$on("$destroy", h);
                    break;
                  case "&":
                    r = g(A[l]), z[i] = function(e) {
                      return r(t, e)
                    }
                }
              })
            }
            for (x && (r(x, function(e) {
                e()
              }), x = null), m = 0, p = d.length; p > m; m++) v = d[m], rt(v, v.isolateScope ? _ : t, S, A, v.require && f(v.directiveName, v.require, S, k), w);
            var T = t;
            for ($ && ($.template || null === $.templateUrl) && (T = _), e && e(T, n.childNodes, i, u), m = h.length - 1; m >= 0; m--) v = h[m], rt(v, v.isolateScope ? _ : t, S, A, v.require && f(v.directiveName, v.require, S, k), w)
          }
          m = m || {};
          for (var w, x, A, M, z, T, P, E = -Number.MAX_VALUE, B = m.controllerDirectives, $ = m.newIsolateScopeDirective, L = m.templateDirective, N = m.nonTlbTranscludeDirective, F = !1, O = !1, W = m.hasElementTranscludeDirective, U = s.$$element = Qa(o), Y = c, X = l, et = 0, it = e.length; it > et; et++) {
            A = e[et];
            var nt = A.$$start,
              st = A.$$end;
            if (nt && (U = H(o, nt, st)), z = i, E > A.priority) break;
            if ((P = A.scope) && (A.templateUrl || (y(P) ? (Z("new/isolated scope", $ || w, A, U), $ = A) : Z("new/isolated scope", $, A, U)), w = w || A), M = A.name, !A.templateUrl && A.controller && (P = A.controller, B = B || {}, Z("'" + M + "' controller", B[M], A, U), B[M] = A), (P = A.transclude) && (F = !0, A.$$tlb || (Z("transclusion", N, A, U), N = A), "element" == P ? (W = !0, E = A.priority, z = U, U = s.$$element = Qa(t.createComment(" " + M + ": " + s[M] + " ")), o = U[0], tt(u, j(z), o), X = D(z, l, E, Y && Y.name, {
                nonTlbTranscludeDirective: N
              })) : (z = Qa(kt(o)).contents(), U.empty(), X = D(z, l))), A.template)
              if (O = !0, Z("template", L, A, U), L = A, P = S(A.template) ? A.template(U, s) : A.template, P = ct(P), A.replace) {
                if (Y = A, z = gt(P) ? [] : ei(Q(A.templateNamespace, dn(P))), o = z[0], 1 != z.length || o.nodeType !== vn) throw Jn("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", M, "");
                tt(u, U, o);
                var lt = {
                    $attr: {}
                  },
                  ut = R(o, [], lt),
                  dt = e.splice(et + 1, e.length - (et + 1));
                $ && G(ut), e = e.concat(ut).concat(dt), J(s, lt), it = e.length
              } else U.html(P);
            if (A.templateUrl) O = !0, Z("template", L, A, U), L = A, A.replace && (Y = A), k = V(e.splice(et, e.length - et), U, s, u, F && X, d, h, {
              controllerDirectives: B,
              newIsolateScopeDirective: $,
              templateDirective: L,
              nonTlbTranscludeDirective: N
            }), it = e.length;
            else if (A.compile) try {
              T = A.compile(U, s, X), S(T) ? p(null, T, nt, st) : T && p(T.pre, T.post, nt, st)
            } catch (ht) {
              n(ht, q(U))
            }
            A.terminal && (k.terminal = !0, E = Math.max(E, A.priority))
          }
          return k.scope = w && w.scope === !0, k.transcludeOnThisElement = F, k.elementTranscludeOnThisElement = W, k.templateOnThisElement = O, k.transclude = X, m.hasElementTranscludeDirective = W, k
        }

        function G(e) {
          for (var t = 0, i = e.length; i > t; t++) e[t] = m(e[t], {
            $$isolateScope: !0
          })
        }

        function O(t, a, r, l, u, c, d) {
          if (a === u) return null;
          var h = null;
          if (o.hasOwnProperty(a))
            for (var p, f = e.get(a + s), g = 0, v = f.length; v > g; g++) try {
              p = f[g], (l === i || l > p.priority) && -1 != p.restrict.indexOf(r) && (c && (p = m(p, {
                $$start: c,
                $$end: d
              })), t.push(p), h = p)
            } catch (b) {
              n(b)
            }
          return h
        }

        function W(t) {
          if (o.hasOwnProperty(t))
            for (var i, a = e.get(t + s), n = 0, r = a.length; r > n; n++)
              if (i = a[n], i.multiElement) return !0;
          return !1
        }

        function J(e, t) {
          var i = t.$attr,
            a = e.$attr,
            n = e.$$element;
          r(e, function(a, n) {
            "$" != n.charAt(0) && (t[n] && t[n] !== a && (a += ("style" === n ? ";" : " ") + t[n]), e.$set(n, a, !0, i[n]))
          }), r(t, function(t, r) {
            "class" == r ? (P(n, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == r ? (n.attr("style", n.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == r.charAt(0) || e.hasOwnProperty(r) || (e[r] = t, a[r] = i[r])
          })
        }

        function V(e, t, i, a, n, o, s, u) {
          var c, d, h = [],
            p = t[0],
            f = e.shift(),
            g = m(f, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: f
            }),
            v = S(f.templateUrl) ? f.templateUrl(t, i) : f.templateUrl,
            b = f.templateNamespace;
          return t.empty(), l(M.getTrustedResourceUrl(v)).then(function(l) {
              var m, _, k, w;
              if (l = ct(l), f.replace) {
                if (k = gt(l) ? [] : ei(Q(b, dn(l))), m = k[0], 1 != k.length || m.nodeType !== vn) throw Jn("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", f.name, v);
                _ = {
                  $attr: {}
                }, tt(a, t, m);
                var S = R(m, [], _);
                y(f.scope) && G(S), e = S.concat(e), J(i, _)
              } else m = p, t.html(l);
              for (e.unshift(g), c = F(e, m, i, n, t, f, o, s, u), r(a, function(e, i) {
                  e == m && (a[i] = t[0])
                }), d = B(t[0].childNodes, n); h.length;) {
                var x = h.shift(),
                  A = h.shift(),
                  C = h.shift(),
                  M = h.shift(),
                  z = t[0];
                if (!x.$$destroyed) {
                  if (A !== p) {
                    var T = A.className;
                    u.hasElementTranscludeDirective && f.replace || (z = kt(m)), tt(C, Qa(A), z), P(Qa(z), T)
                  }
                  w = c.transcludeOnThisElement ? N(x, c.transclude, M) : M, c(d, x, z, a, w)
                }
              }
              h = null
            }),
            function(e, t, i, a, n) {
              var r = n;
              t.$$destroyed || (h ? h.push(t, i, a, r) : (c.transcludeOnThisElement && (r = N(t, c.transclude, n)), c(d, t, i, a, r)))
            }
        }

        function U(e, t) {
          var i = t.priority - e.priority;
          return 0 !== i ? i : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
        }

        function Z(e, t, i, a) {
          if (t) throw Jn("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", t.name, i.name, e, q(a))
        }

        function Y(e, t) {
          var i = a(t, !0);
          i && e.push({
            priority: 0,
            compile: function(e) {
              var t = e.parent(),
                a = !!t.length;
              return a && D.$$addBindingClass(t),
                function(e, t) {
                  var n = t.parent();
                  a || D.$$addBindingClass(n), D.$$addBindingInfo(n, i.expressions), e.$watch(i, function(e) {
                    t[0].nodeValue = e
                  })
                }
            }
          })
        }

        function Q(e, i) {
          switch (e = Wa(e || "html")) {
            case "svg":
            case "math":
              var a = t.createElement("div");
              return a.innerHTML = "<" + e + ">" + i + "</" + e + ">", a.childNodes[0].childNodes;
            default:
              return i
          }
        }

        function X(e, t) {
          if ("srcdoc" == t) return M.HTML;
          var i = $(e);
          return "xlinkHref" == t || "form" == i && "action" == t || "img" != i && ("src" == t || "ngSrc" == t) ? M.RESOURCE_URL : void 0
        }

        function et(e, t, i, n, r) {
          var o = X(e, n);
          r = h[n] || r;
          var s = a(i, !0, o, r);
          if (s) {
            if ("multiple" === n && "select" === $(e)) throw Jn("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", q(e));
            t.push({
              priority: 100,
              compile: function() {
                return {
                  pre: function(e, t, l) {
                    var u = l.$$observers || (l.$$observers = {});
                    if (k.test(n)) throw Jn("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                    var c = l[n];
                    c !== i && (s = c && a(c, !0, o, r), i = c), s && (l[n] = s(e), (u[n] || (u[n] = [])).$$inter = !0, (l.$$observers && l.$$observers[n].$$scope || e).$watch(s, function(e, t) {
                      "class" === n && e != t ? l.$updateClass(e, t) : l.$set(n, e)
                    }))
                  }
                }
              }
            })
          }
        }

        function tt(e, i, a) {
          var n, r, o = i[0],
            s = i.length,
            l = o.parentNode;
          if (e)
            for (n = 0, r = e.length; r > n; n++)
              if (e[n] == o) {
                e[n++] = a;
                for (var u = n, c = u + s - 1, d = e.length; d > u; u++, c++) d > c ? e[u] = e[c] : delete e[u];
                e.length -= s - 1, e.context === o && (e.context = a);
                break
              }
          l && l.replaceChild(a, o);
          var h = t.createDocumentFragment();
          h.appendChild(o), Qa(a).data(Qa(o).data()), Xa ? (un = !0, Xa.cleanData([o])) : delete Qa.cache[o[Qa.expando]];
          for (var m = 1, p = i.length; p > m; m++) {
            var f = i[m];
            Qa(f).remove(), h.appendChild(f), delete i[m]
          }
          i[0] = a, i.length = 1
        }

        function at(e, t) {
          return d(function() {
            return e.apply(null, arguments)
          }, e, t)
        }

        function rt(e, t, i, a, r, o) {
          try {
            e(t, i, a, r, o)
          } catch (s) {
            n(s, q(i))
          }
        }
        var ot = function(e, t) {
          if (t) {
            var i, a, n, r = Object.keys(t);
            for (i = 0, a = r.length; a > i; i++) n = r[i], this[n] = t[n]
          } else this.$attr = {};
          this.$$element = e
        };
        ot.prototype = {
          $normalize: Qt,
          $addClass: function(e) {
            e && e.length > 0 && z.addClass(this.$$element, e)
          },
          $removeClass: function(e) {
            e && e.length > 0 && z.removeClass(this.$$element, e)
          },
          $updateClass: function(e, t) {
            var i = Xt(e, t);
            i && i.length && z.addClass(this.$$element, i);
            var a = Xt(t, e);
            a && a.length && z.removeClass(this.$$element, a)
          },
          $set: function(e, t, a, o) {
            var s, l = this.$$element[0],
              u = Nt(l, e),
              c = Rt(l, e),
              d = e;
            if (u ? (this.$$element.prop(e, t), o = u) : c && (this[c] = t, d = c), this[e] = t, o ? this.$attr[e] = o : (o = this.$attr[e], o || (this.$attr[e] = o = it(e, "-"))), s = $(this.$$element), "a" === s && "href" === e || "img" === s && "src" === e) this[e] = t = T(t, "src" === e);
            else if ("img" === s && "srcset" === e) {
              for (var h = "", m = dn(t), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, f = /\s/.test(m) ? p : /(,)/, g = m.split(f), v = Math.floor(g.length / 2), b = 0; v > b; b++) {
                var y = 2 * b;
                h += T(dn(g[y]), !0), h += " " + dn(g[y + 1])
              }
              var _ = dn(g[2 * b]).split(/\s/);
              h += T(dn(_[0]), !0), 2 === _.length && (h += " " + dn(_[1])), this[e] = t = h
            }
            a !== !1 && (null === t || t === i ? this.$$element.removeAttr(o) : this.$$element.attr(o, t));
            var k = this.$$observers;
            k && r(k[d], function(e) {
              try {
                e(t)
              } catch (i) {
                n(i)
              }
            })
          },
          $observe: function(e, t) {
            var i = this,
              a = i.$$observers || (i.$$observers = ut()),
              n = a[e] || (a[e] = []);
            return n.push(t), x.$evalAsync(function() {
                !n.$$inter && i.hasOwnProperty(e) && t(i[e])
              }),
              function() {
                L(n, t)
              }
          }
        };
        var st = a.startSymbol(),
          lt = a.endSymbol(),
          ct = "{{" == st || "}}" == lt ? f : function(e) {
            return e.replace(/\{\{/g, st).replace(/}}/g, lt)
          },
          dt = /^ngAttr[A-Z]/;
        return D.$$addBindingInfo = w ? function(e, t) {
          var i = e.data("$binding") || [];
          cn(t) ? i = i.concat(t) : i.push(t), e.data("$binding", i)
        } : p, D.$$addBindingClass = w ? function(e) {
          P(e, "ng-binding")
        } : p, D.$$addScopeInfo = w ? function(e, t, i, a) {
          var n = i ? a ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
          e.data(n, t)
        } : p, D.$$addScopeClass = w ? function(e, t) {
          P(e, t ? "ng-isolate-scope" : "ng-scope")
        } : p, D
      }]
    }

    function Qt(e) {
      return ft(e.replace(Vn, ""))
    }

    function Xt(e, t) {
      var i = "",
        a = e.split(/\s+/),
        n = t.split(/\s+/);
      e: for (var r = 0; r < a.length; r++) {
        for (var o = a[r], s = 0; s < n.length; s++)
          if (o == n[s]) continue e;
        i += (i.length > 0 ? " " : "") + o
      }
      return i
    }

    function ei(e) {
      e = Qa(e);
      var t = e.length;
      if (1 >= t) return e;
      for (; t--;) {
        var i = e[t];
        i.nodeType === yn && an.call(e, t, 1)
      }
      return e
    }

    function ti() {
      var e = {},
        t = !1,
        n = /^(\S+)(\s+as\s+(\w+))?$/;
      this.register = function(t, i) {
        ot(t, "controller"), y(t) ? d(e, t) : e[t] = i
      }, this.allowGlobals = function() {
        t = !0
      }, this.$get = ["$injector", "$window", function(r, o) {
        function s(e, t, i, n) {
          if (!e || !y(e.$scope)) throw a("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", n, t);
          e.$scope[t] = i
        }
        return function(a, l, u, c) {
          var h, m, p, f;
          if (u = u === !0, c && _(c) && (f = c), _(a)) {
            if (m = a.match(n), !m) throw Un("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", a);
            p = m[1], f = f || m[3], a = e.hasOwnProperty(p) ? e[p] : st(l.$scope, p, !0) || (t ? st(o, p, !0) : i), rt(a, p, !0)
          }
          if (u) {
            var g = (cn(a) ? a[a.length - 1] : a).prototype;
            return h = Object.create(g || null), f && s(l, f, h, p || a.name), d(function() {
              return r.invoke(a, h, l, p), h
            }, {
              instance: h,
              identifier: f
            })
          }
          return h = r.instantiate(a, l, p), f && s(l, f, h, p || a.name), h
        }
      }]
    }

    function ii() {
      this.$get = ["$window", function(e) {
        return Qa(e.document)
      }]
    }

    function ai() {
      this.$get = ["$log", function(e) {
        return function() {
          e.error.apply(e, arguments)
        }
      }]
    }

    function ni(e, t) {
      if (_(e)) {
        var i = e.replace(er, "").trim();
        if (i) {
          var a = t("Content-Type");
          (a && 0 === a.indexOf(Zn) || ri(i)) && (e = O(i))
        }
      }
      return e
    }

    function ri(e) {
      var t = e.match(Qn);
      return t && Xn[t[0]].test(e)
    }

    function oi(e) {
      var t, i, a, n = ut();
      return e ? (r(e.split("\n"), function(e) {
        a = e.indexOf(":"), t = Wa(dn(e.substr(0, a))), i = dn(e.substr(a + 1)), t && (n[t] = n[t] ? n[t] + ", " + i : i)
      }), n) : n
    }

    function si(e) {
      var t = y(e) ? e : i;
      return function(i) {
        if (t || (t = oi(e)), i) {
          var a = t[Wa(i)];
          return void 0 === a && (a = null), a
        }
        return t
      }
    }

    function li(e, t, i, a) {
      return S(a) ? a(e, t, i) : (r(a, function(a) {
        e = a(e, t, i)
      }), e)
    }

    function ui(e) {
      return e >= 200 && 300 > e
    }

    function ci() {
      var e = this.defaults = {
          transformResponse: [ni],
          transformRequest: [function(e) {
            return !y(e) || M(e) || T(e) || z(e) ? e : G(e)
          }],
          headers: {
            common: {
              Accept: "application/json, text/plain, */*"
            },
            post: R(Yn),
            put: R(Yn),
            patch: R(Yn)
          },
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN"
        },
        t = !1;
      this.useApplyAsync = function(e) {
        return b(e) ? (t = !!e, this) : t
      };
      var n = this.interceptors = [];
      this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(o, l, u, c, h, m) {
        function p(t) {
          function n(e) {
            var t = d({}, e);
            return t.data = e.data ? li(e.data, e.headers, e.status, l.transformResponse) : e.data, ui(e.status) ? t : h.reject(t)
          }

          function o(e) {
            var t, i = {};
            return r(e, function(e, a) {
              S(e) ? (t = e(), null != t && (i[a] = t)) : i[a] = e
            }), i
          }

          function s(t) {
            var i, a, n, r = e.headers,
              s = d({}, t.headers);
            r = d({}, r.common, r[Wa(t.method)]);
            e: for (i in r) {
              a = Wa(i);
              for (n in s)
                if (Wa(n) === a) continue e;
              s[i] = r[i]
            }
            return o(s)
          }
          if (!sn.isObject(t)) throw a("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
          var l = d({
            method: "get",
            transformRequest: e.transformRequest,
            transformResponse: e.transformResponse
          }, t);
          l.headers = s(t), l.method = Va(l.method);
          var u = function(t) {
              var a = t.headers,
                o = li(t.data, si(a), i, t.transformRequest);
              return v(o) && r(a, function(e, t) {
                "content-type" === Wa(t) && delete a[t]
              }), v(t.withCredentials) && !v(e.withCredentials) && (t.withCredentials = e.withCredentials), k(t, o).then(n, n)
            },
            c = [u, i],
            m = h.when(l);
          for (r(C, function(e) {
              (e.request || e.requestError) && c.unshift(e.request, e.requestError), (e.response || e.responseError) && c.push(e.response, e.responseError)
            }); c.length;) {
            var p = c.shift(),
              f = c.shift();
            m = m.then(p, f)
          }
          return m.success = function(e) {
            return m.then(function(t) {
              e(t.data, t.status, t.headers, l)
            }), m
          }, m.error = function(e) {
            return m.then(null, function(t) {
              e(t.data, t.status, t.headers, l)
            }), m
          }, m
        }

        function f() {
          r(arguments, function(e) {
            p[e] = function(t, i) {
              return p(d(i || {}, {
                method: e,
                url: t
              }))
            }
          })
        }

        function g() {
          r(arguments, function(e) {
            p[e] = function(t, i, a) {
              return p(d(a || {}, {
                method: e,
                url: t,
                data: i
              }))
            }
          })
        }

        function k(a, n) {
          function r(e, i, a, n) {
            function r() {
              s(i, e, a, n)
            }
            m && (ui(e) ? m.put(w, [e, i, oi(a), n]) : m.remove(w)), t ? c.$applyAsync(r) : (r(), c.$$phase || c.$apply())
          }

          function s(e, t, i, n) {
            t = Math.max(t, 0), (ui(t) ? g.resolve : g.reject)({
              data: e,
              status: t,
              headers: si(i),
              config: a,
              statusText: n
            })
          }

          function u(e) {
            s(e.data, e.status, R(e.headers()), e.statusText)
          }

          function d() {
            var e = p.pendingRequests.indexOf(a); - 1 !== e && p.pendingRequests.splice(e, 1)
          }
          var m, f, g = h.defer(),
            _ = g.promise,
            k = a.headers,
            w = x(a.url, a.params);
          if (p.pendingRequests.push(a), _.then(d, d), !a.cache && !e.cache || a.cache === !1 || "GET" !== a.method && "JSONP" !== a.method || (m = y(a.cache) ? a.cache : y(e.cache) ? e.cache : A), m && (f = m.get(w), b(f) ? D(f) ? f.then(u, u) : cn(f) ? s(f[1], f[0], R(f[2]), f[3]) : s(f, 200, {}, "OK") : m.put(w, _)), v(f)) {
            var S = na(a.url) ? l.cookies()[a.xsrfCookieName || e.xsrfCookieName] : i;
            S && (k[a.xsrfHeaderName || e.xsrfHeaderName] = S), o(a.method, w, n, r, k, a.timeout, a.withCredentials, a.responseType)
          }
          return _
        }

        function x(e, t) {
          if (!t) return e;
          var i = [];
          return s(t, function(e, t) {
            null === e || v(e) || (cn(e) || (e = [e]), r(e, function(e) {
              y(e) && (e = w(e) ? e.toISOString() : G(e)), i.push(Z(t) + "=" + Z(e))
            }))
          }), i.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + i.join("&")), e
        }
        var A = u("$http"),
          C = [];
        return r(n, function(e) {
          C.unshift(_(e) ? m.get(e) : m.invoke(e))
        }), p.pendingRequests = [], f("get", "delete", "head", "jsonp"), g("post", "put", "patch"), p.defaults = e, p
      }]
    }

    function di() {
      return new e.XMLHttpRequest
    }

    function hi() {
      this.$get = ["$browser", "$window", "$document", function(e, t, i) {
        return mi(e, di, e.defer, t.angular.callbacks, i[0])
      }]
    }

    function mi(e, t, a, n, o) {
      function s(e, t, i) {
        var a = o.createElement("script"),
          r = null;
        return a.type = "text/javascript", a.src = e, a.async = !0, r = function(e) {
          Cn(a, "load", r), Cn(a, "error", r), o.body.removeChild(a), a = null;
          var s = -1,
            l = "unknown";
          e && ("load" !== e.type || n[t].called || (e = {
            type: "error"
          }), l = e.type, s = "error" === e.type ? 404 : 200), i && i(s, l)
        }, An(a, "load", r), An(a, "error", r), o.body.appendChild(a), r
      }
      return function(o, l, u, c, d, h, m, f) {
        function g() {
          _ && _(), k && k.abort()
        }

        function v(t, n, r, o, s) {
          x !== i && a.cancel(x), _ = k = null, t(n, r, o, s), e.$$completeOutstandingRequest(p)
        }
        if (e.$$incOutstandingRequestCount(), l = l || e.url(), "jsonp" == Wa(o)) {
          var y = "_" + (n.counter++).toString(36);
          n[y] = function(e) {
            n[y].data = e, n[y].called = !0
          };
          var _ = s(l.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function(e, t) {
            v(c, e, n[y].data, "", t), n[y] = p
          })
        } else {
          var k = t();
          k.open(o, l, !0), r(d, function(e, t) {
            b(e) && k.setRequestHeader(t, e)
          }), k.onload = function() {
            var e = k.statusText || "",
              t = "response" in k ? k.response : k.responseText,
              i = 1223 === k.status ? 204 : k.status;
            0 === i && (i = t ? 200 : "file" == aa(l).protocol ? 404 : 0), v(c, i, t, k.getAllResponseHeaders(), e)
          };
          var w = function() {
            v(c, -1, null, null, "")
          };
          if (k.onerror = w, k.onabort = w, m && (k.withCredentials = !0), f) try {
            k.responseType = f
          } catch (S) {
            if ("json" !== f) throw S
          }
          k.send(u || null)
        }
        if (h > 0) var x = a(g, h);
        else D(h) && h.then(g)
      }
    }

    function pi() {
      var e = "{{",
        t = "}}";
      this.startSymbol = function(t) {
        return t ? (e = t, this) : e
      }, this.endSymbol = function(e) {
        return e ? (t = e, this) : t
      }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(i, a, n) {
        function r(e) {
          return "\\\\\\" + e
        }

        function o(r, o, h, m) {
          function p(i) {
            return i.replace(u, e).replace(c, t)
          }

          function f(e) {
            try {
              return e = T(e), m && !b(e) ? e : P(e)
            } catch (t) {
              var i = tr("interr", "Can't interpolate: {0}\n{1}", r, t.toString());
              a(i)
            }
          }
          m = !!m;
          for (var g, y, _, k = 0, w = [], x = [], A = r.length, C = [], M = []; A > k;) {
            if (-1 == (g = r.indexOf(e, k)) || -1 == (y = r.indexOf(t, g + s))) {
              k !== A && C.push(p(r.substring(k)));
              break
            }
            k !== g && C.push(p(r.substring(k, g))), _ = r.substring(g + s, y), w.push(_), x.push(i(_, f)), k = y + l, M.push(C.length), C.push("")
          }
          if (h && C.length > 1) throw tr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", r);
          if (!o || w.length) {
            var z = function(e) {
                for (var t = 0, i = w.length; i > t; t++) {
                  if (m && v(e[t])) return;
                  C[M[t]] = e[t]
                }
                return C.join("")
              },
              T = function(e) {
                return h ? n.getTrusted(h, e) : n.valueOf(e)
              },
              P = function(e) {
                if (null == e) return "";
                switch (typeof e) {
                  case "string":
                    break;
                  case "number":
                    e = "" + e;
                    break;
                  default:
                    e = G(e)
                }
                return e
              };
            return d(function(e) {
              var t = 0,
                i = w.length,
                n = new Array(i);
              try {
                for (; i > t; t++) n[t] = x[t](e);
                return z(n)
              } catch (o) {
                var s = tr("interr", "Can't interpolate: {0}\n{1}", r, o.toString());
                a(s)
              }
            }, {
              exp: r,
              expressions: w,
              $$watchDelegate: function(e, t, i) {
                var a;
                return e.$watchGroup(x, function(i, n) {
                  var r = z(i);
                  S(t) && t.call(this, r, i !== n ? a : r, e), a = r
                }, i)
              }
            })
          }
        }
        var s = e.length,
          l = t.length,
          u = new RegExp(e.replace(/./g, r), "g"),
          c = new RegExp(t.replace(/./g, r), "g");
        return o.startSymbol = function() {
          return e
        }, o.endSymbol = function() {
          return t
        }, o
      }]
    }

    function fi() {
      this.$get = ["$rootScope", "$window", "$q", "$$q", function(e, t, i, a) {
        function n(n, o, s, l) {
          var u = t.setInterval,
            c = t.clearInterval,
            d = 0,
            h = b(l) && !l,
            m = (h ? a : i).defer(),
            p = m.promise;
          return s = b(s) ? s : 0, p.then(null, null, n), p.$$intervalId = u(function() {
            m.notify(d++), s > 0 && d >= s && (m.resolve(d), c(p.$$intervalId), delete r[p.$$intervalId]), h || e.$apply()
          }, o), r[p.$$intervalId] = m, p
        }
        var r = {};
        return n.cancel = function(e) {
          return e && e.$$intervalId in r ? (r[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete r[e.$$intervalId], !0) : !1
        }, n
      }]
    }

    function gi() {
      this.$get = function() {
        return {
          id: "en-us",
          NUMBER_FORMATS: {
            DECIMAL_SEP: ".",
            GROUP_SEP: ",",
            PATTERNS: [{
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: "",
              posSuf: "",
              negPre: "-",
              negSuf: "",
              gSize: 3,
              lgSize: 3
            }, {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: "\xa4",
              posSuf: "",
              negPre: "(\xa4",
              negSuf: ")",
              gSize: 3,
              lgSize: 3
            }],
            CURRENCY_SYM: "$"
          },
          DATETIME_FORMATS: {
            MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            AMPMS: ["AM", "PM"],
            medium: "MMM d, y h:mm:ss a",
            "short": "M/d/yy h:mm a",
            fullDate: "EEEE, MMMM d, y",
            longDate: "MMMM d, y",
            mediumDate: "MMM d, y",
            shortDate: "M/d/yy",
            mediumTime: "h:mm:ss a",
            shortTime: "h:mm a"
          },
          pluralCat: function(e) {
            return 1 === e ? "one" : "other"
          }
        }
      }
    }

    function vi(e) {
      for (var t = e.split("/"), i = t.length; i--;) t[i] = U(t[i]);
      return t.join("/")
    }

    function bi(e, t) {
      var i = aa(e);
      t.$$protocol = i.protocol, t.$$host = i.hostname, t.$$port = h(i.port) || ar[i.protocol] || null
    }

    function yi(e, t) {
      var i = "/" !== e.charAt(0);
      i && (e = "/" + e);
      var a = aa(e);
      t.$$path = decodeURIComponent(i && "/" === a.pathname.charAt(0) ? a.pathname.substring(1) : a.pathname), t.$$search = J(a.search), t.$$hash = decodeURIComponent(a.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function _i(e, t) {
      return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
    }

    function ki(e) {
      var t = e.indexOf("#");
      return -1 == t ? e : e.substr(0, t)
    }

    function wi(e) {
      return e.replace(/(#.+)|#$/, "$1")
    }

    function Si(e) {
      return e.substr(0, ki(e).lastIndexOf("/") + 1)
    }

    function xi(e) {
      return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
    }

    function Ai(e, t) {
      this.$$html5 = !0, t = t || "";
      var a = Si(e);
      bi(e, this), this.$$parse = function(e) {
        var t = _i(a, e);
        if (!_(t)) throw nr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, a);
        yi(t, this), this.$$path || (this.$$path = "/"), this.$$compose()
      }, this.$$compose = function() {
        var e = V(this.$$search),
          t = this.$$hash ? "#" + U(this.$$hash) : "";
        this.$$url = vi(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = a + this.$$url.substr(1)
      }, this.$$parseLinkUrl = function(n, r) {
        if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
        var o, s, l;
        return (o = _i(e, n)) !== i ? (s = o, l = (o = _i(t, o)) !== i ? a + (_i("/", o) || o) : e + s) : (o = _i(a, n)) !== i ? l = a + o : a == n + "/" && (l = a), l && this.$$parse(l), !!l
      }
    }

    function Ci(e, t) {
      var i = Si(e);
      bi(e, this), this.$$parse = function(a) {
        function n(e, t, i) {
          var a, n = /^\/[A-Z]:(\/.*)/;
          return 0 === t.indexOf(i) && (t = t.replace(i, "")), n.exec(t) ? e : (a = n.exec(e), a ? a[1] : e)
        }
        var r, o = _i(e, a) || _i(i, a);
        "#" === o.charAt(0) ? (r = _i(t, o), v(r) && (r = o)) : r = this.$$html5 ? o : "", yi(r, this), this.$$path = n(this.$$path, r, e), this.$$compose()
      }, this.$$compose = function() {
        var i = V(this.$$search),
          a = this.$$hash ? "#" + U(this.$$hash) : "";
        this.$$url = vi(this.$$path) + (i ? "?" + i : "") + a, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
      }, this.$$parseLinkUrl = function(t) {
        return ki(e) == ki(t) ? (this.$$parse(t), !0) : !1
      }
    }

    function Mi(e, t) {
      this.$$html5 = !0, Ci.apply(this, arguments);
      var i = Si(e);
      this.$$parseLinkUrl = function(a, n) {
        if (n && "#" === n[0]) return this.hash(n.slice(1)), !0;
        var r, o;
        return e == ki(a) ? r = a : (o = _i(i, a)) ? r = e + t + o : i === a + "/" && (r = i), r && this.$$parse(r), !!r
      }, this.$$compose = function() {
        var i = V(this.$$search),
          a = this.$$hash ? "#" + U(this.$$hash) : "";
        this.$$url = vi(this.$$path) + (i ? "?" + i : "") + a, this.$$absUrl = e + t + this.$$url
      }
    }

    function zi(e) {
      return function() {
        return this[e]
      }
    }

    function Ti(e, t) {
      return function(i) {
        return v(i) ? this[e] : (this[e] = t(i), this.$$compose(), this)
      }
    }

    function Pi() {
      var e = "",
        t = {
          enabled: !1,
          requireBase: !0,
          rewriteLinks: !0
        };
      this.hashPrefix = function(t) {
        return b(t) ? (e = t, this) : e
      }, this.html5Mode = function(e) {
        return P(e) ? (t.enabled = e, this) : y(e) ? (P(e.enabled) && (t.enabled = e.enabled), P(e.requireBase) && (t.requireBase = e.requireBase), P(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
      }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(i, a, n, r, o) {
        function s(e, t, i) {
          var n = u.url(),
            r = u.$$state;
          try {
            a.url(e, t, i), u.$$state = a.state()
          } catch (o) {
            throw u.url(n), u.$$state = r, o
          }
        }

        function l(e, t) {
          i.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t)
        }
        var u, c, d, h = a.baseHref(),
          m = a.url();
        if (t.enabled) {
          if (!h && t.requireBase) throw nr("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
          d = xi(m) + (h || "/"), c = n.history ? Ai : Mi
        } else d = ki(m), c = Ci;
        u = new c(d, "#" + e), u.$$parseLinkUrl(m, m), u.$$state = a.state();
        var p = /^\s*(javascript|mailto):/i;
        r.on("click", function(e) {
          if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
            for (var n = Qa(e.target);
              "a" !== $(n[0]);)
              if (n[0] === r[0] || !(n = n.parent())[0]) return;
            var s = n.prop("href"),
              l = n.attr("href") || n.attr("xlink:href");
            y(s) && "[object SVGAnimatedString]" === s.toString() && (s = aa(s.animVal).href), p.test(s) || !s || n.attr("target") || e.isDefaultPrevented() || u.$$parseLinkUrl(s, l) && (e.preventDefault(), u.absUrl() != a.url() && (i.$apply(), o.angular["ff-684208-preventDefault"] = !0))
          }
        }), wi(u.absUrl()) != wi(m) && a.url(u.absUrl(), !0);
        var f = !0;
        return a.onUrlChange(function(e, t) {
          i.$evalAsync(function() {
            var a, n = u.absUrl(),
              r = u.$$state;
            u.$$parse(e), u.$$state = t, a = i.$broadcast("$locationChangeStart", e, n, t, r).defaultPrevented, u.absUrl() === e && (a ? (u.$$parse(n), u.$$state = r, s(n, !1, r)) : (f = !1, l(n, r)))
          }), i.$$phase || i.$digest()
        }), i.$watch(function() {
          var e = wi(a.url()),
            t = wi(u.absUrl()),
            r = a.state(),
            o = u.$$replace,
            c = e !== t || u.$$html5 && n.history && r !== u.$$state;
          (f || c) && (f = !1, i.$evalAsync(function() {
            var t = u.absUrl(),
              a = i.$broadcast("$locationChangeStart", t, e, u.$$state, r).defaultPrevented;
            u.absUrl() === t && (a ? (u.$$parse(e), u.$$state = r) : (c && s(t, o, r === u.$$state ? null : u.$$state), l(e, r)))
          })), u.$$replace = !1
        }), u
      }]
    }

    function Di() {
      var e = !0,
        t = this;
      this.debugEnabled = function(t) {
        return b(t) ? (e = t, this) : e
      }, this.$get = ["$window", function(i) {
        function a(e) {
          return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
        }

        function n(e) {
          var t = i.console || {},
            n = t[e] || t.log || p,
            o = !1;
          try {
            o = !!n.apply
          } catch (s) {}
          return o ? function() {
            var e = [];
            return r(arguments, function(t) {
              e.push(a(t))
            }), n.apply(t, e)
          } : function(e, t) {
            n(e, null == t ? "" : t)
          }
        }
        return {
          log: n("log"),
          info: n("info"),
          warn: n("warn"),
          error: n("error"),
          debug: function() {
            var i = n("debug");
            return function() {
              e && i.apply(t, arguments)
            }
          }()
        }
      }]
    }

    function Ei(e, t) {
      if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw or("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
      return e
    }

    function Bi(e, t) {
      if (e) {
        if (e.constructor === e) throw or("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
        if (e.window === e) throw or("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
        if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw or("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
        if (e === Object) throw or("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
      }
      return e
    }

    function $i(e, t) {
      if (e) {
        if (e.constructor === e) throw or("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
        if (e === sr || e === lr || e === ur) throw or("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
      }
    }

    function Li(e) {
      return e.constant
    }

    function Ni(e, t, i, a, n) {
      Bi(e, n), Bi(t, n);
      for (var r, o = i.split("."), s = 0; o.length > 1; s++) {
        r = Ei(o.shift(), n);
        var l = 0 === s && t && t[r] || e[r];
        l || (l = {}, e[r] = l), e = Bi(l, n)
      }
      return r = Ei(o.shift(), n), Bi(e[r], n), e[r] = a, a
    }

    function Ri(e) {
      return "constructor" == e
    }

    function Ki(e, t, a, n, r, o, s) {
      Ei(e, o), Ei(t, o), Ei(a, o), Ei(n, o), Ei(r, o);
      var l = function(e) {
          return Bi(e, o)
        },
        u = s || Ri(e) ? l : f,
        c = s || Ri(t) ? l : f,
        d = s || Ri(a) ? l : f,
        h = s || Ri(n) ? l : f,
        m = s || Ri(r) ? l : f;
      return function(o, s) {
        var l = s && s.hasOwnProperty(e) ? s : o;
        return null == l ? l : (l = u(l[e]), t ? null == l ? i : (l = c(l[t]), a ? null == l ? i : (l = d(l[a]), n ? null == l ? i : (l = h(l[n]), r ? null == l ? i : l = m(l[r]) : l) : l) : l) : l)
      }
    }

    function Hi(e, t) {
      return function(i, a) {
        return e(i, a, Bi, t)
      }
    }

    function ji(e, t, a) {
      var n = t.expensiveChecks,
        o = n ? gr : fr,
        s = o[e];
      if (s) return s;
      var l = e.split("."),
        u = l.length;
      if (t.csp) s = 6 > u ? Ki(l[0], l[1], l[2], l[3], l[4], a, n) : function(e, t) {
        var r, o = 0;
        do r = Ki(l[o++], l[o++], l[o++], l[o++], l[o++], a, n)(e, t), t = i, e = r; while (u > o);
        return r
      };
      else {
        var c = "";
        n && (c += "s = eso(s, fe);\nl = eso(l, fe);\n");
        var d = n;
        r(l, function(e, t) {
          Ei(e, a);
          var i = (t ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + "." + e;
          (n || Ri(e)) && (i = "eso(" + i + ", fe)", d = !0), c += "if(s == null) return undefined;\ns=" + i + ";\n"
        }), c += "return s;";
        var h = new Function("s", "l", "eso", "fe", c);
        h.toString = g(c), d && (h = Hi(h, a)), s = h
      }
      return s.sharedGetter = !0, s.assign = function(t, i, a) {
        return Ni(t, a, e, i, e)
      }, o[e] = s, s
    }

    function Ii(e) {
      return S(e.valueOf) ? e.valueOf() : vr.call(e)
    }

    function Fi() {
      var e = ut(),
        t = ut();
      this.$get = ["$filter", "$sniffer", function(i, a) {
        function n(e) {
          var t = e;
          return e.sharedGetter && (t = function(t, i) {
            return e(t, i)
          }, t.literal = e.literal, t.constant = e.constant, t.assign = e.assign), t
        }

        function o(e, t) {
          for (var i = 0, a = e.length; a > i; i++) {
            var n = e[i];
            n.constant || (n.inputs ? o(n.inputs, t) : -1 === t.indexOf(n) && t.push(n))
          }
          return t
        }

        function s(e, t) {
          return null == e || null == t ? e === t : "object" == typeof e && (e = Ii(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
        }

        function l(e, t, i, a) {
          var n, r = a.$$inputs || (a.$$inputs = o(a.inputs, []));
          if (1 === r.length) {
            var l = s;
            return r = r[0], e.$watch(function(e) {
              var t = r(e);
              return s(t, l) || (n = a(e), l = t && Ii(t)), n
            }, t, i)
          }
          for (var u = [], c = 0, d = r.length; d > c; c++) u[c] = s;
          return e.$watch(function(e) {
            for (var t = !1, i = 0, o = r.length; o > i; i++) {
              var l = r[i](e);
              (t || (t = !s(l, u[i]))) && (u[i] = l && Ii(l))
            }
            return t && (n = a(e)), n
          }, t, i)
        }

        function u(e, t, i, a) {
          var n, r;
          return n = e.$watch(function(e) {
            return a(e)
          }, function(e, i, a) {
            r = e, S(t) && t.apply(this, arguments), b(e) && a.$$postDigest(function() {
              b(r) && n()
            })
          }, i)
        }

        function c(e, t, i, a) {
          function n(e) {
            var t = !0;
            return r(e, function(e) {
              b(e) || (t = !1)
            }), t
          }
          var o, s;
          return o = e.$watch(function(e) {
            return a(e)
          }, function(e, i, a) {
            s = e, S(t) && t.call(this, e, i, a), n(e) && a.$$postDigest(function() {
              n(s) && o()
            })
          }, i)
        }

        function d(e, t, i, a) {
          var n;
          return n = e.$watch(function(e) {
            return a(e)
          }, function() {
            S(t) && t.apply(this, arguments), n()
          }, i)
        }

        function h(e, t) {
          if (!t) return e;
          var i = e.$$watchDelegate,
            a = i !== c && i !== u,
            n = a ? function(i, a) {
              var n = e(i, a);
              return t(n, i, a)
            } : function(i, a) {
              var n = e(i, a),
                r = t(n, i, a);
              return b(n) ? r : n
            };
          return e.$$watchDelegate && e.$$watchDelegate !== l ? n.$$watchDelegate = e.$$watchDelegate : t.$stateful || (n.$$watchDelegate = l, n.inputs = [e]), n
        }
        var m = {
            csp: a.csp,
            expensiveChecks: !1
          },
          f = {
            csp: a.csp,
            expensiveChecks: !0
          };
        return function(a, r, o) {
          var s, g, v;
          switch (typeof a) {
            case "string":
              v = a = a.trim();
              var b = o ? t : e;
              if (s = b[v], !s) {
                ":" === a.charAt(0) && ":" === a.charAt(1) && (g = !0, a = a.substring(2));
                var y = o ? f : m,
                  _ = new mr(y),
                  k = new pr(_, i, y);
                s = k.parse(a), s.constant ? s.$$watchDelegate = d : g ? (s = n(s), s.$$watchDelegate = s.literal ? c : u) : s.inputs && (s.$$watchDelegate = l), b[v] = s
              }
              return h(s, r);
            case "function":
              return h(a, r);
            default:
              return h(p, r)
          }
        }
      }]
    }

    function Gi() {
      this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
        return qi(function(t) {
          e.$evalAsync(t)
        }, t)
      }]
    }

    function Oi() {
      this.$get = ["$browser", "$exceptionHandler", function(e, t) {
        return qi(function(t) {
          e.defer(t)
        }, t)
      }]
    }

    function qi(e, t) {
      function n(e, t, i) {
        function a(t) {
          return function(i) {
            n || (n = !0, t.call(e, i))
          }
        }
        var n = !1;
        return [a(t), a(i)]
      }

      function o() {
        this.$$state = {
          status: 0
        }
      }

      function s(e, t) {
        return function(i) {
          t.call(e, i)
        }
      }

      function l(e) {
        var a, n, r;
        r = e.pending, e.processScheduled = !1, e.pending = i;
        for (var o = 0, s = r.length; s > o; ++o) {
          n = r[o][0], a = r[o][e.status];
          try {
            S(a) ? n.resolve(a(e.value)) : 1 === e.status ? n.resolve(e.value) : n.reject(e.value)
          } catch (l) {
            n.reject(l), t(l)
          }
        }
      }

      function u(t) {
        !t.processScheduled && t.pending && (t.processScheduled = !0, e(function() {
          l(t)
        }))
      }

      function c() {
        this.promise = new o, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
      }

      function d(e) {
        var t = new c,
          i = 0,
          a = cn(e) ? [] : {};
        return r(e, function(e, n) {
          i++, v(e).then(function(e) {
            a.hasOwnProperty(n) || (a[n] = e, --i || t.resolve(a))
          }, function(e) {
            a.hasOwnProperty(n) || t.reject(e)
          })
        }), 0 === i && t.resolve(a), t.promise
      }
      var h = a("$q", TypeError),
        m = function() {
          return new c
        };
      o.prototype = {
        then: function(e, t, i) {
          var a = new c;
          return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([a, e, t, i]), this.$$state.status > 0 && u(this.$$state), a.promise
        },
        "catch": function(e) {
          return this.then(null, e)
        },
        "finally": function(e, t) {
          return this.then(function(t) {
            return g(t, !0, e)
          }, function(t) {
            return g(t, !1, e)
          }, t)
        }
      }, c.prototype = {
        resolve: function(e) {
          this.promise.$$state.status || (e === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
        },
        $$resolve: function(e) {
          var i, a;
          a = n(this, this.$$resolve, this.$$reject);
          try {
            (y(e) || S(e)) && (i = e && e.then), S(i) ? (this.promise.$$state.status = -1, i.call(e, a[0], a[1], this.notify)) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, u(this.promise.$$state))
          } catch (r) {
            a[1](r), t(r)
          }
        },
        reject: function(e) {
          this.promise.$$state.status || this.$$reject(e)
        },
        $$reject: function(e) {
          this.promise.$$state.value = e, this.promise.$$state.status = 2, u(this.promise.$$state)
        },
        notify: function(i) {
          var a = this.promise.$$state.pending;
          this.promise.$$state.status <= 0 && a && a.length && e(function() {
            for (var e, n, r = 0, o = a.length; o > r; r++) {
              n = a[r][0], e = a[r][3];
              try {
                n.notify(S(e) ? e(i) : i)
              } catch (s) {
                t(s)
              }
            }
          })
        }
      };
      var p = function(e) {
          var t = new c;
          return t.reject(e), t.promise
        },
        f = function(e, t) {
          var i = new c;
          return t ? i.resolve(e) : i.reject(e), i.promise
        },
        g = function(e, t, i) {
          var a = null;
          try {
            S(i) && (a = i())
          } catch (n) {
            return f(n, !1)
          }
          return D(a) ? a.then(function() {
            return f(e, t)
          }, function(e) {
            return f(e, !1)
          }) : f(e, t)
        },
        v = function(e, t, i, a) {
          var n = new c;
          return n.resolve(e), n.promise.then(t, i, a)
        },
        b = function _(e) {
          function t(e) {
            a.resolve(e)
          }

          function i(e) {
            a.reject(e)
          }
          if (!S(e)) throw h("norslvr", "Expected resolverFn, got '{0}'", e);
          if (!(this instanceof _)) return new _(e);
          var a = new c;
          return e(t, i), a.promise
        };
      return b.defer = m, b.reject = p, b.when = v, b.all = d, b
    }

    function Wi() {
      this.$get = ["$window", "$timeout", function(e, t) {
        var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
          a = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
          n = !!i,
          r = n ? function(e) {
            var t = i(e);
            return function() {
              a(t)
            }
          } : function(e) {
            var i = t(e, 16.66, !1);
            return function() {
              t.cancel(i)
            }
          };
        return r.supported = n, r
      }]
    }

    function Ji() {
      var e = 10,
        t = a("$rootScope"),
        i = null,
        o = null;
      this.digestTtl = function(t) {
        return arguments.length && (e = t), e
      }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(a, s, l, c) {
        function d() {
          this.$id = u(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
        }

        function h(e) {
          if (k.$$phase) throw t("inprog", "{0} already in progress", k.$$phase);
          k.$$phase = e
        }

        function m() {
          k.$$phase = null
        }

        function f(e, t, i) {
          do e.$$listenerCount[i] -= t, 0 === e.$$listenerCount[i] && delete e.$$listenerCount[i]; while (e = e.$parent)
        }

        function g() {}

        function b() {
          for (; A.length;) try {
            A.shift()()
          } catch (e) {
            s(e)
          }
          o = null
        }

        function _() {
          null === o && (o = c.defer(function() {
            k.$apply(b)
          }))
        }
        d.prototype = {
          constructor: d,
          $new: function(e, t) {
            function i() {
              a.$$destroyed = !0
            }
            var a;
            return t = t || this, e ? (a = new d, a.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
              this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = u(), this.$$ChildScope = null
            }, this.$$ChildScope.prototype = this), a = new this.$$ChildScope), a.$parent = t, a.$$prevSibling = t.$$childTail, t.$$childHead ? (t.$$childTail.$$nextSibling = a, t.$$childTail = a) : t.$$childHead = t.$$childTail = a, (e || t != this) && a.$on("$destroy", i), a
          },
          $watch: function(e, t, a) {
            var n = l(e);
            if (n.$$watchDelegate) return n.$$watchDelegate(this, t, a, n);
            var r = this,
              o = r.$$watchers,
              s = {
                fn: t,
                last: g,
                get: n,
                exp: e,
                eq: !!a
              };
            return i = null, S(t) || (s.fn = p), o || (o = r.$$watchers = []), o.unshift(s),
              function() {
                L(o, s), i = null
              }
          },
          $watchGroup: function(e, t) {
            function i() {
              l = !1, u ? (u = !1, t(n, n, s)) : t(n, a, s)
            }
            var a = new Array(e.length),
              n = new Array(e.length),
              o = [],
              s = this,
              l = !1,
              u = !0;
            if (!e.length) {
              var c = !0;
              return s.$evalAsync(function() {
                  c && t(n, n, s)
                }),
                function() {
                  c = !1
                }
            }
            return 1 === e.length ? this.$watch(e[0], function(e, i, r) {
              n[0] = e, a[0] = i, t(n, e === i ? n : a, r)
            }) : (r(e, function(e, t) {
              var r = s.$watch(e, function(e, r) {
                n[t] = e, a[t] = r, l || (l = !0, s.$evalAsync(i))
              });
              o.push(r)
            }), function() {
              for (; o.length;) o.shift()()
            })
          },
          $watchCollection: function(e, t) {
            function i(e) {
              r = e;
              var t, i, a, s, l;
              if (!v(r)) {
                if (y(r))
                  if (n(r)) {
                    o !== m && (o = m, g = o.length = 0, d++), t = r.length, g !== t && (d++, o.length = g = t);
                    for (var u = 0; t > u; u++) l = o[u], s = r[u], a = l !== l && s !== s, a || l === s || (d++, o[u] = s)
                  } else {
                    o !== p && (o = p = {}, g = 0, d++), t = 0;
                    for (i in r) r.hasOwnProperty(i) && (t++, s = r[i], l = o[i], i in o ? (a = l !== l && s !== s, a || l === s || (d++, o[i] = s)) : (g++, o[i] = s, d++));
                    if (g > t) {
                      d++;
                      for (i in o) r.hasOwnProperty(i) || (g--, delete o[i])
                    }
                  } else o !== r && (o = r, d++);
                return d
              }
            }

            function a() {
              if (f ? (f = !1, t(r, r, u)) : t(r, s, u), c)
                if (y(r))
                  if (n(r)) {
                    s = new Array(r.length);
                    for (var e = 0; e < r.length; e++) s[e] = r[e]
                  } else {
                    s = {};
                    for (var i in r) Ja.call(r, i) && (s[i] = r[i])
                  } else s = r
            }
            i.$stateful = !0;
            var r, o, s, u = this,
              c = t.length > 1,
              d = 0,
              h = l(e, i),
              m = [],
              p = {},
              f = !0,
              g = 0;
            return this.$watch(h, a)
          },
          $digest: function() {
            var a, n, r, l, u, d, p, f, v, y, _ = e,
              A = this,
              C = [];
            h("$digest"), c.$$checkUrlChange(), this === k && null !== o && (c.defer.cancel(o), b()), i = null;
            do {
              for (d = !1, f = A; w.length;) {
                try {
                  y = w.shift(), y.scope.$eval(y.expression, y.locals)
                } catch (M) {
                  s(M)
                }
                i = null
              }
              e: do {
                if (l = f.$$watchers)
                  for (u = l.length; u--;) try {
                    if (a = l[u])
                      if ((n = a.get(f)) === (r = a.last) || (a.eq ? K(n, r) : "number" == typeof n && "number" == typeof r && isNaN(n) && isNaN(r))) {
                        if (a === i) {
                          d = !1;
                          break e
                        }
                      } else d = !0, i = a, a.last = a.eq ? N(n, null) : n, a.fn(n, r === g ? n : r, f), 5 > _ && (v = 4 - _, C[v] || (C[v] = []), C[v].push({
                        msg: S(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                        newVal: n,
                        oldVal: r
                      }))
                  } catch (M) {
                    s(M)
                  }
                if (!(p = f.$$childHead || f !== A && f.$$nextSibling))
                  for (; f !== A && !(p = f.$$nextSibling);) f = f.$parent
              } while (f = p);
              if ((d || w.length) && !_--) throw m(), t("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, C)
            } while (d || w.length);
            for (m(); x.length;) try {
              x.shift()()
            } catch (M) {
              s(M)
            }
          },
          $destroy: function() {
            if (!this.$$destroyed) {
              var e = this.$parent;
              if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== k) {
                for (var t in this.$$listenerCount) f(this, this.$$listenerCount[t], t);
                e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
                  return p
                }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
              }
            }
          },
          $eval: function(e, t) {
            return l(e)(this, t)
          },
          $evalAsync: function(e, t) {
            k.$$phase || w.length || c.defer(function() {
              w.length && k.$digest()
            }), w.push({
              scope: this,
              expression: e,
              locals: t
            })
          },
          $$postDigest: function(e) {
            x.push(e)
          },
          $apply: function(e) {
            try {
              return h("$apply"), this.$eval(e)
            } catch (t) {
              s(t)
            } finally {
              m();
              try {
                k.$digest()
              } catch (t) {
                throw s(t), t
              }
            }
          },
          $applyAsync: function(e) {
            function t() {
              i.$eval(e)
            }
            var i = this;
            e && A.push(t), _()
          },
          $on: function(e, t) {
            var i = this.$$listeners[e];
            i || (this.$$listeners[e] = i = []), i.push(t);
            var a = this;
            do a.$$listenerCount[e] || (a.$$listenerCount[e] = 0), a.$$listenerCount[e]++; while (a = a.$parent);
            var n = this;
            return function() {
              var a = i.indexOf(t); - 1 !== a && (i[a] = null, f(n, 1, e))
            }
          },
          $emit: function(e) {
            var t, i, a, n = [],
              r = this,
              o = !1,
              l = {
                name: e,
                targetScope: r,
                stopPropagation: function() {
                  o = !0
                },
                preventDefault: function() {
                  l.defaultPrevented = !0
                },
                defaultPrevented: !1
              },
              u = H([l], arguments, 1);
            do {
              for (t = r.$$listeners[e] || n, l.currentScope = r, i = 0, a = t.length; a > i; i++)
                if (t[i]) try {
                  t[i].apply(null, u)
                } catch (c) {
                  s(c)
                } else t.splice(i, 1), i--, a--;
              if (o) return l.currentScope = null, l;
              r = r.$parent
            } while (r);
            return l.currentScope = null, l
          },
          $broadcast: function(e) {
            var t = this,
              i = t,
              a = t,
              n = {
                name: e,
                targetScope: t,
                preventDefault: function() {
                  n.defaultPrevented = !0
                },
                defaultPrevented: !1
              };
            if (!t.$$listenerCount[e]) return n;
            for (var r, o, l, u = H([n], arguments, 1); i = a;) {
              for (n.currentScope = i, r = i.$$listeners[e] || [], o = 0, l = r.length; l > o; o++)
                if (r[o]) try {
                  r[o].apply(null, u)
                } catch (c) {
                  s(c)
                } else r.splice(o, 1), o--, l--;
              if (!(a = i.$$listenerCount[e] && i.$$childHead || i !== t && i.$$nextSibling))
                for (; i !== t && !(a = i.$$nextSibling);) i = i.$parent
            }
            return n.currentScope = null, n
          }
        };
        var k = new d,
          w = k.$$asyncQueue = [],
          x = k.$$postDigestQueue = [],
          A = k.$$applyAsyncQueue = [];
        return k
      }]
    }

    function Vi() {
      var e = /^\s*(https?|ftp|mailto|tel|file):/,
        t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
      this.aHrefSanitizationWhitelist = function(t) {
        return b(t) ? (e = t, this) : e
      }, this.imgSrcSanitizationWhitelist = function(e) {
        return b(e) ? (t = e, this) : t
      }, this.$get = function() {
        return function(i, a) {
          var n, r = a ? t : e;
          return n = aa(i).href, "" === n || n.match(r) ? i : "unsafe:" + n
        }
      }
    }

    function Ui(e) {
      if ("self" === e) return e;
      if (_(e)) {
        if (e.indexOf("***") > -1) throw br("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
        return e = hn(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
      }
      if (x(e)) return new RegExp("^" + e.source + "$");
      throw br("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Zi(e) {
      var t = [];
      return b(e) && r(e, function(e) {
        t.push(Ui(e))
      }), t
    }

    function Yi() {
      this.SCE_CONTEXTS = yr;
      var e = ["self"],
        t = [];
      this.resourceUrlWhitelist = function(t) {
        return arguments.length && (e = Zi(t)), e
      }, this.resourceUrlBlacklist = function(e) {
        return arguments.length && (t = Zi(e)), t
      }, this.$get = ["$injector", function(a) {
        function n(e, t) {
          return "self" === e ? na(t) : !!e.exec(t.href)
        }

        function r(i) {
          var a, r, o = aa(i.toString()),
            s = !1;
          for (a = 0, r = e.length; r > a; a++)
            if (n(e[a], o)) {
              s = !0;
              break
            }
          if (s)
            for (a = 0, r = t.length; r > a; a++)
              if (n(t[a], o)) {
                s = !1;
                break
              }
          return s
        }

        function o(e) {
          var t = function(e) {
            this.$$unwrapTrustedValue = function() {
              return e
            }
          };
          return e && (t.prototype = new e), t.prototype.valueOf = function() {
            return this.$$unwrapTrustedValue()
          }, t.prototype.toString = function() {
            return this.$$unwrapTrustedValue().toString()
          }, t
        }

        function s(e, t) {
          var a = h.hasOwnProperty(e) ? h[e] : null;
          if (!a) throw br("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
          if (null === t || t === i || "" === t) return t;
          if ("string" != typeof t) throw br("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
          return new a(t)
        }

        function l(e) {
          return e instanceof d ? e.$$unwrapTrustedValue() : e
        }

        function u(e, t) {
          if (null === t || t === i || "" === t) return t;
          var a = h.hasOwnProperty(e) ? h[e] : null;
          if (a && t instanceof a) return t.$$unwrapTrustedValue();
          if (e === yr.RESOURCE_URL) {
            if (r(t)) return t;
            throw br("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
          }
          if (e === yr.HTML) return c(t);
          throw br("unsafe", "Attempting to use an unsafe value in a safe context.")
        }
        var c = function() {
          throw br("unsafe", "Attempting to use an unsafe value in a safe context.")
        };
        a.has("$sanitize") && (c = a.get("$sanitize"));
        var d = o(),
          h = {};
        return h[yr.HTML] = o(d), h[yr.CSS] = o(d), h[yr.URL] = o(d), h[yr.JS] = o(d), h[yr.RESOURCE_URL] = o(h[yr.URL]), {
          trustAs: s,
          getTrusted: u,
          valueOf: l
        }
      }]
    }

    function Qi() {
      var e = !0;
      this.enabled = function(t) {
        return arguments.length && (e = !!t), e
      }, this.$get = ["$parse", "$sceDelegate", function(t, i) {
        if (e && 8 > Ya) throw br("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
        var a = R(yr);
        a.isEnabled = function() {
          return e
        }, a.trustAs = i.trustAs, a.getTrusted = i.getTrusted, a.valueOf = i.valueOf, e || (a.trustAs = a.getTrusted = function(e, t) {
          return t
        }, a.valueOf = f), a.parseAs = function(e, i) {
          var n = t(i);
          return n.literal && n.constant ? n : t(i, function(t) {
            return a.getTrusted(e, t)
          })
        };
        var n = a.parseAs,
          o = a.getTrusted,
          s = a.trustAs;
        return r(yr, function(e, t) {
          var i = Wa(t);
          a[ft("parse_as_" + i)] = function(t) {
            return n(e, t)
          }, a[ft("get_trusted_" + i)] = function(t) {
            return o(e, t)
          }, a[ft("trust_as_" + i)] = function(t) {
            return s(e, t)
          }
        }), a
      }]
    }

    function Xi() {
      this.$get = ["$window", "$document", function(e, t) {
        var i, a, n = {},
          r = h((/android (\d+)/.exec(Wa((e.navigator || {}).userAgent)) || [])[1]),
          o = /Boxee/i.test((e.navigator || {}).userAgent),
          s = t[0] || {},
          l = /^(Moz|webkit|ms)(?=[A-Z])/,
          u = s.body && s.body.style,
          c = !1,
          d = !1;
        if (u) {
          for (var m in u)
            if (a = l.exec(m)) {
              i = a[0], i = i.substr(0, 1).toUpperCase() + i.substr(1);
              break
            }
          i || (i = "WebkitOpacity" in u && "webkit"), c = !!("transition" in u || i + "Transition" in u), d = !!("animation" in u || i + "Animation" in u), !r || c && d || (c = _(s.body.style.webkitTransition), d = _(s.body.style.webkitAnimation))
        }
        return {
          history: !(!e.history || !e.history.pushState || 4 > r || o),
          hasEvent: function(e) {
            if ("input" === e && 11 >= Ya) return !1;
            if (v(n[e])) {
              var t = s.createElement("div");
              n[e] = "on" + e in t
            }
            return n[e]
          },
          csp: mn(),
          vendorPrefix: i,
          transitions: c,
          animations: d,
          android: r
        }
      }]
    }

    function ea() {
      this.$get = ["$templateCache", "$http", "$q", function(e, t, i) {
        function a(n, r) {
          function o(e) {
            if (!r) throw Jn("tpload", "Failed to load template: {0}", n);
            return i.reject(e)
          }
          a.totalPendingRequests++;
          var s = t.defaults && t.defaults.transformResponse;
          cn(s) ? s = s.filter(function(e) {
            return e !== ni
          }) : s === ni && (s = null);
          var l = {
            cache: e,
            transformResponse: s
          };
          return t.get(n, l).finally(function() {
            a.totalPendingRequests--
          }).then(function(e) {
            return e.data
          }, o)
        }
        return a.totalPendingRequests = 0, a
      }]
    }

    function ta() {
      this.$get = ["$rootScope", "$browser", "$location", function(e, t, i) {
        var a = {};
        return a.findBindings = function(e, t, i) {
          var a = e.getElementsByClassName("ng-binding"),
            n = [];
          return r(a, function(e) {
            var a = sn.element(e).data("$binding");
            a && r(a, function(a) {
              if (i) {
                var r = new RegExp("(^|\\s)" + hn(t) + "(\\s|\\||$)");
                r.test(a) && n.push(e)
              } else -1 != a.indexOf(t) && n.push(e)
            })
          }), n
        }, a.findModels = function(e, t, i) {
          for (var a = ["ng-", "data-ng-", "ng\\:"], n = 0; n < a.length; ++n) {
            var r = i ? "=" : "*=",
              o = "[" + a[n] + "model" + r + '"' + t + '"]',
              s = e.querySelectorAll(o);
            if (s.length) return s
          }
        }, a.getLocation = function() {
          return i.url()
        }, a.setLocation = function(t) {
          t !== i.url() && (i.url(t), e.$digest())
        }, a.whenStable = function(e) {
          t.notifyWhenNoOutstandingRequests(e)
        }, a
      }]
    }

    function ia() {
      this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, i, a, n) {
        function r(r, s, l) {
          var u, c = b(l) && !l,
            d = (c ? a : i).defer(),
            h = d.promise;
          return u = t.defer(function() {
            try {
              d.resolve(r())
            } catch (t) {
              d.reject(t), n(t)
            } finally {
              delete o[h.$$timeoutId]
            }
            c || e.$apply()
          }, s), h.$$timeoutId = u, o[u] = d, h
        }
        var o = {};
        return r.cancel = function(e) {
          return e && e.$$timeoutId in o ? (o[e.$$timeoutId].reject("canceled"), delete o[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
        }, r
      }]
    }

    function aa(e) {
      var t = e;
      return Ya && (_r.setAttribute("href", t), t = _r.href), _r.setAttribute("href", t), {
        href: _r.href,
        protocol: _r.protocol ? _r.protocol.replace(/:$/, "") : "",
        host: _r.host,
        search: _r.search ? _r.search.replace(/^\?/, "") : "",
        hash: _r.hash ? _r.hash.replace(/^#/, "") : "",
        hostname: _r.hostname,
        port: _r.port,
        pathname: "/" === _r.pathname.charAt(0) ? _r.pathname : "/" + _r.pathname
      }
    }

    function na(e) {
      var t = _(e) ? aa(e) : e;
      return t.protocol === kr.protocol && t.host === kr.host
    }

    function ra() {
      this.$get = g(e)
    }

    function oa(e) {
      function t(a, n) {
        if (y(a)) {
          var o = {};
          return r(a, function(e, i) {
            o[i] = t(i, e)
          }), o
        }
        return e.factory(a + i, n)
      }
      var i = "Filter";
      this.register = t, this.$get = ["$injector", function(e) {
        return function(t) {
          return e.get(t + i)
        }
      }], t("currency", ca), t("date", ka), t("filter", sa), t("json", wa), t("limitTo", Sa), t("lowercase", Cr), t("number", da), t("orderBy", xa), t("uppercase", Mr)
    }

    function sa() {
      return function(e, t, i) {
        if (!cn(e)) return e;
        var a, n;
        switch (typeof t) {
          case "function":
            a = t;
            break;
          case "boolean":
          case "number":
          case "string":
            n = !0;
          case "object":
            a = la(t, i, n);
            break;
          default:
            return e
        }
        return e.filter(a)
      }
    }

    function la(e, t, i) {
      var a, n = y(e) && "$" in e;
      return t === !0 ? t = K : S(t) || (t = function(e, t) {
        return y(e) || y(t) ? !1 : (e = Wa("" + e), t = Wa("" + t), -1 !== e.indexOf(t))
      }), a = function(a) {
        return n && !y(a) ? ua(a, e.$, t, !1) : ua(a, e, t, i)
      }
    }

    function ua(e, t, i, a, n) {
      var r = typeof e,
        o = typeof t;
      if ("string" === o && "!" === t.charAt(0)) return !ua(e, t.substring(1), i, a);
      if (cn(e)) return e.some(function(e) {
        return ua(e, t, i, a)
      });
      switch (r) {
        case "object":
          var s;
          if (a) {
            for (s in e)
              if ("$" !== s.charAt(0) && ua(e[s], t, i, !0)) return !0;
            return n ? !1 : ua(e, t, i, !1)
          }
          if ("object" === o) {
            for (s in t) {
              var l = t[s];
              if (!S(l)) {
                var u = "$" === s,
                  c = u ? e : e[s];
                if (!ua(c, l, i, u, u)) return !1
              }
            }
            return !0
          }
          return i(e, t);
        case "function":
          return !1;
        default:
          return i(e, t)
      }
    }

    function ca(e) {
      var t = e.NUMBER_FORMATS;
      return function(e, i, a) {
        return v(i) && (i = t.CURRENCY_SYM), v(a) && (a = t.PATTERNS[1].maxFrac), null == e ? e : ha(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, a).replace(/\u00A4/g, i)
      }
    }

    function da(e) {
      var t = e.NUMBER_FORMATS;
      return function(e, i) {
        return null == e ? e : ha(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, i)
      }
    }

    function ha(e, t, i, a, n) {
      if (!isFinite(e) || y(e)) return "";
      var r = 0 > e;
      e = Math.abs(e);
      var o = e + "",
        s = "",
        l = [],
        u = !1;
      if (-1 !== o.indexOf("e")) {
        var c = o.match(/([\d\.]+)e(-?)(\d+)/);
        c && "-" == c[2] && c[3] > n + 1 ? e = 0 : (s = o, u = !0)
      }
      if (u) n > 0 && 1 > e && (s = e.toFixed(n), e = parseFloat(s));
      else {
        var d = (o.split(wr)[1] || "").length;
        v(n) && (n = Math.min(Math.max(t.minFrac, d), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + n)).toString() + "e" + -n);
        var h = ("" + e).split(wr),
          m = h[0];
        h = h[1] || "";
        var p, f = 0,
          g = t.lgSize,
          b = t.gSize;
        if (m.length >= g + b)
          for (f = m.length - g, p = 0; f > p; p++)(f - p) % b === 0 && 0 !== p && (s += i), s += m.charAt(p);
        for (p = f; p < m.length; p++)(m.length - p) % g === 0 && 0 !== p && (s += i), s += m.charAt(p);
        for (; h.length < n;) h += "0";
        n && "0" !== n && (s += a + h.substr(0, n))
      }
      return 0 === e && (r = !1), l.push(r ? t.negPre : t.posPre, s, r ? t.negSuf : t.posSuf), l.join("")
    }

    function ma(e, t, i) {
      var a = "";
      for (0 > e && (a = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
      return i && (e = e.substr(e.length - t)), a + e
    }

    function pa(e, t, i, a) {
      return i = i || 0,
        function(n) {
          var r = n["get" + e]();
          return (i > 0 || r > -i) && (r += i), 0 === r && -12 == i && (r = 12), ma(r, t, a)
        }
    }

    function fa(e, t) {
      return function(i, a) {
        var n = i["get" + e](),
          r = Va(t ? "SHORT" + e : e);
        return a[r][n]
      }
    }

    function ga(e) {
      var t = -1 * e.getTimezoneOffset(),
        i = t >= 0 ? "+" : "";
      return i += ma(Math[t > 0 ? "floor" : "ceil"](t / 60), 2) + ma(Math.abs(t % 60), 2)
    }

    function va(e) {
      var t = new Date(e, 0, 1).getDay();
      return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function ba(e) {
      return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
    }

    function ya(e) {
      return function(t) {
        var i = va(t.getFullYear()),
          a = ba(t),
          n = +a - +i,
          r = 1 + Math.round(n / 6048e5);
        return ma(r, e)
      }
    }

    function _a(e, t) {
      return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
    }

    function ka(e) {
      function t(e) {
        var t;
        if (t = e.match(i)) {
          var a = new Date(0),
            n = 0,
            r = 0,
            o = t[8] ? a.setUTCFullYear : a.setFullYear,
            s = t[8] ? a.setUTCHours : a.setHours;
          t[9] && (n = h(t[9] + t[10]), r = h(t[9] + t[11])), o.call(a, h(t[1]), h(t[2]) - 1, h(t[3]));
          var l = h(t[4] || 0) - n,
            u = h(t[5] || 0) - r,
            c = h(t[6] || 0),
            d = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
          return s.call(a, l, u, c, d), a
        }
        return e
      }
      var i = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
      return function(i, a, n) {
        var o, s, l = "",
          u = [];
        if (a = a || "mediumDate", a = e.DATETIME_FORMATS[a] || a, _(i) && (i = Ar.test(i) ? h(i) : t(i)), k(i) && (i = new Date(i)), !w(i)) return i;
        for (; a;) s = xr.exec(a), s ? (u = H(u, s, 1), a = u.pop()) : (u.push(a), a = null);
        return n && "UTC" === n && (i = new Date(i.getTime()), i.setMinutes(i.getMinutes() + i.getTimezoneOffset())), r(u, function(t) {
          o = Sr[t], l += o ? o(i, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
        }), l
      }
    }

    function wa() {
      return function(e, t) {
        return v(t) && (t = 2), G(e, t)
      }
    }

    function Sa() {
      return function(e, t) {
        return k(e) && (e = e.toString()), cn(e) || _(e) ? (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : h(t), t ? t > 0 ? e.slice(0, t) : e.slice(t) : _(e) ? "" : []) : e
      }
    }

    function xa(e) {
      return function(t, i, a) {
        function r(e, t) {
          for (var a = 0; a < i.length; a++) {
            var n = i[a](e, t);
            if (0 !== n) return n
          }
          return 0
        }

        function o(e, t) {
          return t ? function(t, i) {
            return e(i, t)
          } : e
        }

        function s(e) {
          switch (typeof e) {
            case "number":
            case "boolean":
            case "string":
              return !0;
            default:
              return !1
          }
        }

        function l(e) {
          return null === e ? "null" : "function" == typeof e.valueOf && (e = e.valueOf(), s(e)) ? e : "function" == typeof e.toString && (e = e.toString(), s(e)) ? e : ""
        }

        function u(e, t) {
          var i = typeof e,
            a = typeof t;
          return i === a && "object" === i && (e = l(e), t = l(t)), i === a ? ("string" === i && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : t > e ? -1 : 1) : a > i ? -1 : 1
        }
        return n(t) ? (i = cn(i) ? i : [i], 0 === i.length && (i = ["+"]), i = i.map(function(t) {
          var i = !1,
            a = t || f;
          if (_(t)) {
            if (("+" == t.charAt(0) || "-" == t.charAt(0)) && (i = "-" == t.charAt(0), t = t.substring(1)), "" === t) return o(u, i);
            if (a = e(t), a.constant) {
              var n = a();
              return o(function(e, t) {
                return u(e[n], t[n])
              }, i)
            }
          }
          return o(function(e, t) {
            return u(a(e), a(t))
          }, i)
        }), tn.call(t).sort(o(r, a))) : t
      }
    }

    function Aa(e) {
      return S(e) && (e = {
        link: e
      }), e.restrict = e.restrict || "AC", g(e)
    }

    function Ca(e, t) {
      e.$name = t
    }

    function Ma(e, t, a, n, o) {
      var s = this,
        l = [],
        u = s.$$parentForm = e.parent().controller("form") || Pr;
      s.$error = {}, s.$$success = {}, s.$pending = i, s.$name = o(t.name || t.ngForm || "")(a), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, u.$addControl(s), s.$rollbackViewValue = function() {
        r(l, function(e) {
          e.$rollbackViewValue()
        })
      }, s.$commitViewValue = function() {
        r(l, function(e) {
          e.$commitViewValue()
        })
      }, s.$addControl = function(e) {
        ot(e.$name, "input"), l.push(e), e.$name && (s[e.$name] = e)
      }, s.$$renameControl = function(e, t) {
        var i = e.$name;
        s[i] === e && delete s[i], s[t] = e, e.$name = t
      }, s.$removeControl = function(e) {
        e.$name && s[e.$name] === e && delete s[e.$name], r(s.$pending, function(t, i) {
          s.$setValidity(i, null, e)
        }), r(s.$error, function(t, i) {
          s.$setValidity(i, null, e)
        }), r(s.$$success, function(t, i) {
          s.$setValidity(i, null, e)
        }), L(l, e)
      }, Fa({
        ctrl: this,
        $element: e,
        set: function(e, t, i) {
          var a = e[t];
          if (a) {
            var n = a.indexOf(i); - 1 === n && a.push(i)
          } else e[t] = [i]
        },
        unset: function(e, t, i) {
          var a = e[t];
          a && (L(a, i), 0 === a.length && delete e[t])
        },
        parentForm: u,
        $animate: n
      }), s.$setDirty = function() {
        n.removeClass(e, mo), n.addClass(e, po), s.$dirty = !0, s.$pristine = !1, u.$setDirty()
      }, s.$setPristine = function() {
        n.setClass(e, mo, po + " " + Dr), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, r(l, function(e) {
          e.$setPristine()
        })
      }, s.$setUntouched = function() {
        r(l, function(e) {
          e.$setUntouched()
        })
      }, s.$setSubmitted = function() {
        n.addClass(e, Dr), s.$submitted = !0, u.$setSubmitted()
      }
    }

    function za(e) {
      e.$formatters.push(function(t) {
        return e.$isEmpty(t) ? t : t.toString()
      })
    }

    function Ta(e, t, i, a, n, r) {
      Pa(e, t, i, a, n, r), za(a)
    }

    function Pa(e, t, i, a, n, r) {
      var o = Wa(t[0].type);
      if (!n.android) {
        var s = !1;
        t.on("compositionstart", function() {
          s = !0
        }), t.on("compositionend", function() {
          s = !1, l()
        })
      }
      var l = function(e) {
        if (u && (r.defer.cancel(u), u = null), !s) {
          var n = t.val(),
            l = e && e.type;
          "password" === o || i.ngTrim && "false" === i.ngTrim || (n = dn(n)), (a.$viewValue !== n || "" === n && a.$$hasNativeValidators) && a.$setViewValue(n, l)
        }
      };
      if (n.hasEvent("input")) t.on("input", l);
      else {
        var u, c = function(e, t, i) {
          u || (u = r.defer(function() {
            u = null, t && t.value === i || l(e)
          }))
        };
        t.on("keydown", function(e) {
          var t = e.keyCode;
          91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || c(e, this, this.value)
        }), n.hasEvent("paste") && t.on("paste cut", c)
      }
      t.on("change", l), a.$render = function() {
        t.val(a.$isEmpty(a.$viewValue) ? "" : a.$viewValue)
      }
    }

    function Da(e, t) {
      if (w(e)) return e;
      if (_(e)) {
        Ir.lastIndex = 0;
        var i = Ir.exec(e);
        if (i) {
          var a = +i[1],
            n = +i[2],
            r = 0,
            o = 0,
            s = 0,
            l = 0,
            u = va(a),
            c = 7 * (n - 1);
          return t && (r = t.getHours(), o = t.getMinutes(), s = t.getSeconds(), l = t.getMilliseconds()), new Date(a, 0, u.getDate() + c, r, o, s, l)
        }
      }
      return 0 / 0
    }

    function Ea(e, t) {
      return function(i, a) {
        var n, o;
        if (w(i)) return i;
        if (_(i)) {
          if ('"' == i.charAt(0) && '"' == i.charAt(i.length - 1) && (i = i.substring(1, i.length - 1)), Lr.test(i)) return new Date(i);
          if (e.lastIndex = 0, n = e.exec(i)) return n.shift(), o = a ? {
            yyyy: a.getFullYear(),
            MM: a.getMonth() + 1,
            dd: a.getDate(),
            HH: a.getHours(),
            mm: a.getMinutes(),
            ss: a.getSeconds(),
            sss: a.getMilliseconds() / 1e3
          } : {
            yyyy: 1970,
            MM: 1,
            dd: 1,
            HH: 0,
            mm: 0,
            ss: 0,
            sss: 0
          }, r(n, function(e, i) {
            i < t.length && (o[t[i]] = +e)
          }), new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0)
        }
        return 0 / 0
      }
    }

    function Ba(e, t, a, n) {
      return function(r, o, s, l, u, c, d) {
        function h(e) {
          return e && !(e.getTime && e.getTime() !== e.getTime())
        }

        function m(e) {
          return b(e) ? w(e) ? e : a(e) : i
        }
        $a(r, o, s, l), Pa(r, o, s, l, u, c);
        var p, f = l && l.$options && l.$options.timezone;
        if (l.$$parserName = e, l.$parsers.push(function(e) {
            if (l.$isEmpty(e)) return null;
            if (t.test(e)) {
              var n = a(e, p);
              return "UTC" === f && n.setMinutes(n.getMinutes() - n.getTimezoneOffset()), n
            }
            return i
          }), l.$formatters.push(function(e) {
            if (e && !w(e)) throw bo("datefmt", "Expected `{0}` to be a date", e);
            if (h(e)) {
              if (p = e, p && "UTC" === f) {
                var t = 6e4 * p.getTimezoneOffset();
                p = new Date(p.getTime() + t)
              }
              return d("date")(e, n, f)
            }
            return p = null, ""
          }), b(s.min) || s.ngMin) {
          var g;
          l.$validators.min = function(e) {
            return !h(e) || v(g) || a(e) >= g
          }, s.$observe("min", function(e) {
            g = m(e), l.$validate()
          })
        }
        if (b(s.max) || s.ngMax) {
          var y;
          l.$validators.max = function(e) {
            return !h(e) || v(y) || a(e) <= y
          }, s.$observe("max", function(e) {
            y = m(e), l.$validate()
          })
        }
      }
    }

    function $a(e, t, a, n) {
      var r = t[0],
        o = n.$$hasNativeValidators = y(r.validity);
      o && n.$parsers.push(function(e) {
        var a = t.prop(qa) || {};
        return a.badInput && !a.typeMismatch ? i : e
      })
    }

    function La(e, t, a, n, r, o) {
      if ($a(e, t, a, n), Pa(e, t, a, n, r, o), n.$$parserName = "number", n.$parsers.push(function(e) {
          return n.$isEmpty(e) ? null : Kr.test(e) ? parseFloat(e) : i
        }), n.$formatters.push(function(e) {
          if (!n.$isEmpty(e)) {
            if (!k(e)) throw bo("numfmt", "Expected `{0}` to be a number", e);
            e = e.toString()
          }
          return e
        }), a.min || a.ngMin) {
        var s;
        n.$validators.min = function(e) {
          return n.$isEmpty(e) || v(s) || e >= s
        }, a.$observe("min", function(e) {
          b(e) && !k(e) && (e = parseFloat(e, 10)), s = k(e) && !isNaN(e) ? e : i, n.$validate()
        })
      }
      if (a.max || a.ngMax) {
        var l;
        n.$validators.max = function(e) {
          return n.$isEmpty(e) || v(l) || l >= e
        }, a.$observe("max", function(e) {
          b(e) && !k(e) && (e = parseFloat(e, 10)), l = k(e) && !isNaN(e) ? e : i, n.$validate()
        })
      }
    }

    function Na(e, t, i, a, n, r) {
      Pa(e, t, i, a, n, r), za(a), a.$$parserName = "url", a.$validators.url = function(e, t) {
        var i = e || t;
        return a.$isEmpty(i) || Nr.test(i)
      }
    }

    function Ra(e, t, i, a, n, r) {
      Pa(e, t, i, a, n, r), za(a), a.$$parserName = "email", a.$validators.email = function(e, t) {
        var i = e || t;
        return a.$isEmpty(i) || Rr.test(i)
      }
    }

    function Ka(e, t, i, a) {
      v(i.name) && t.attr("name", u());
      var n = function(e) {
        t[0].checked && a.$setViewValue(i.value, e && e.type)
      };
      t.on("click", n), a.$render = function() {
        var e = i.value;
        t[0].checked = e == a.$viewValue
      }, i.$observe("value", a.$render)
    }

    function Ha(e, t, i, n, r) {
      var o;
      if (b(n)) {
        if (o = e(n), !o.constant) throw a("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", i, n);
        return o(t)
      }
      return r
    }

    function ja(e, t, i, a, n, r, o, s) {
      var l = Ha(s, e, "ngTrueValue", i.ngTrueValue, !0),
        u = Ha(s, e, "ngFalseValue", i.ngFalseValue, !1),
        c = function(e) {
          a.$setViewValue(t[0].checked, e && e.type)
        };
      t.on("click", c), a.$render = function() {
        t[0].checked = a.$viewValue
      }, a.$isEmpty = function(e) {
        return e === !1
      }, a.$formatters.push(function(e) {
        return K(e, l)
      }), a.$parsers.push(function(e) {
        return e ? l : u
      })
    }

    function Ia(e, t) {
      return e = "ngClass" + e, ["$animate", function(i) {
        function a(e, t) {
          var i = [];
          e: for (var a = 0; a < e.length; a++) {
            for (var n = e[a], r = 0; r < t.length; r++)
              if (n == t[r]) continue e;
            i.push(n)
          }
          return i
        }

        function n(e) {
          if (cn(e)) return e;
          if (_(e)) return e.split(" ");
          if (y(e)) {
            var t = [];
            return r(e, function(e, i) {
              e && (t = t.concat(i.split(" ")))
            }), t
          }
          return e
        }
        return {
          restrict: "AC",
          link: function(o, s, l) {
            function u(e) {
              var t = d(e, 1);
              l.$addClass(t)
            }

            function c(e) {
              var t = d(e, -1);
              l.$removeClass(t)
            }

            function d(e, t) {
              var i = s.data("$classCounts") || {},
                a = [];
              return r(e, function(e) {
                (t > 0 || i[e]) && (i[e] = (i[e] || 0) + t, i[e] === +(t > 0) && a.push(e))
              }), s.data("$classCounts", i), a.join(" ")
            }

            function h(e, t) {
              var n = a(t, e),
                r = a(e, t);
              n = d(n, 1), r = d(r, -1), n && n.length && i.addClass(s, n), r && r.length && i.removeClass(s, r)
            }

            function m(e) {
              if (t === !0 || o.$index % 2 === t) {
                var i = n(e || []);
                if (p) {
                  if (!K(e, p)) {
                    var a = n(p);
                    h(a, i)
                  }
                } else u(i)
              }
              p = R(e)
            }
            var p;
            o.$watch(l[e], m, !0), l.$observe("class", function() {
              m(o.$eval(l[e]))
            }), "ngClass" !== e && o.$watch("$index", function(i, a) {
              var r = 1 & i;
              if (r !== (1 & a)) {
                var s = n(o.$eval(l[e]));
                r === t ? u(s) : c(s)
              }
            })
          }
        }
      }]
    }

    function Fa(e) {
      function t(e, t, l) {
        t === i ? a("$pending", e, l) : n("$pending", e, l), P(t) ? t ? (d(s.$error, e, l), c(s.$$success, e, l)) : (c(s.$error, e, l), d(s.$$success, e, l)) : (d(s.$error, e, l), d(s.$$success, e, l)), s.$pending ? (r(vo, !0), s.$valid = s.$invalid = i, o("", null)) : (r(vo, !1), s.$valid = Ga(s.$error), s.$invalid = !s.$valid, o("", s.$valid));
        var u;
        u = s.$pending && s.$pending[e] ? i : s.$error[e] ? !1 : s.$$success[e] ? !0 : null, o(e, u), h.$setValidity(e, u, s)
      }

      function a(e, t, i) {
        s[e] || (s[e] = {}), c(s[e], t, i)
      }

      function n(e, t, a) {
        s[e] && d(s[e], t, a), Ga(s[e]) && (s[e] = i)
      }

      function r(e, t) {
        t && !u[e] ? (m.addClass(l, e), u[e] = !0) : !t && u[e] && (m.removeClass(l, e), u[e] = !1)
      }

      function o(e, t) {
        e = e ? "-" + it(e, "-") : "", r(co + e, t === !0), r(ho + e, t === !1)
      }
      var s = e.ctrl,
        l = e.$element,
        u = {},
        c = e.set,
        d = e.unset,
        h = e.parentForm,
        m = e.$animate;
      u[ho] = !(u[co] = l.hasClass(co)), s.$setValidity = t
    }

    function Ga(e) {
      if (e)
        for (var t in e) return !1;
      return !0
    }
    var Oa = /^\/(.+)\/([a-z]*)$/,
      qa = "validity",
      Wa = function(e) {
        return _(e) ? e.toLowerCase() : e
      },
      Ja = Object.prototype.hasOwnProperty,
      Va = function(e) {
        return _(e) ? e.toUpperCase() : e
      },
      Ua = function(e) {
        return _(e) ? e.replace(/[A-Z]/g, function(e) {
          return String.fromCharCode(32 | e.charCodeAt(0))
        }) : e
      },
      Za = function(e) {
        return _(e) ? e.replace(/[a-z]/g, function(e) {
          return String.fromCharCode(-33 & e.charCodeAt(0))
        }) : e
      };
    "i" !== "I".toLowerCase() && (Wa = Ua, Va = Za);
    var Ya, Qa, Xa, en, tn = [].slice,
      an = [].splice,
      nn = [].push,
      rn = Object.prototype.toString,
      on = a("ng"),
      sn = e.angular || (e.angular = {}),
      ln = 0;
    Ya = t.documentMode, p.$inject = [], f.$inject = [];
    var un, cn = Array.isArray,
      dn = function(e) {
        return _(e) ? e.trim() : e
      },
      hn = function(e) {
        return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
      },
      mn = function() {
        if (b(mn.isActive_)) return mn.isActive_;
        var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
        if (!e) try {
          new Function("")
        } catch (i) {
          e = !0
        }
        return mn.isActive_ = e
      },
      pn = ["ng-", "data-ng-", "ng:", "x-ng-"],
      fn = /[A-Z]/g,
      gn = !1,
      vn = 1,
      bn = 3,
      yn = 8,
      _n = 9,
      kn = 11,
      wn = {
        full: "1.3.13",
        major: 1,
        minor: 3,
        dot: 13,
        codeName: "meticulous-riffleshuffle"
      };
    _t.expando = "ng339";
    var Sn = _t.cache = {},
      xn = 1,
      An = function(e, t, i) {
        e.addEventListener(t, i, !1)
      },
      Cn = function(e, t, i) {
        e.removeEventListener(t, i, !1)
      };
    _t._data = function(e) {
      return this.cache[e[this.expando]] || {}
    };
    var Mn = /([\:\-\_]+(.))/g,
      zn = /^moz([A-Z])/,
      Tn = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
      },
      Pn = a("jqLite"),
      Dn = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      En = /<|&#?\w+;/,
      Bn = /<([\w:]+)/,
      $n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Ln = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Ln.optgroup = Ln.option, Ln.tbody = Ln.tfoot = Ln.colgroup = Ln.caption = Ln.thead, Ln.th = Ln.td;
    var Nn = _t.prototype = {
        ready: function(i) {
          function a() {
            n || (n = !0, i())
          }
          var n = !1;
          "complete" === t.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), _t(e).on("load", a))
        },
        toString: function() {
          var e = [];
          return r(this, function(t) {
            e.push("" + t)
          }), "[" + e.join(", ") + "]"
        },
        eq: function(e) {
          return Qa(e >= 0 ? this[e] : this[this.length + e])
        },
        length: 0,
        push: nn,
        sort: [].sort,
        splice: [].splice
      },
      Rn = {};
    r("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
      Rn[Wa(e)] = e
    });
    var Kn = {};
    r("input,select,option,textarea,button,form,details".split(","), function(e) {
      Kn[e] = !0
    });
    var Hn = {
      ngMinlength: "minlength",
      ngMaxlength: "maxlength",
      ngMin: "min",
      ngMax: "max",
      ngPattern: "pattern"
    };
    r({
      data: Ct,
      removeData: xt
    }, function(e, t) {
      _t[t] = e
    }), r({
      data: Ct,
      inheritedData: Et,
      scope: function(e) {
        return Qa.data(e, "$scope") || Et(e.parentNode || e, ["$isolateScope", "$scope"])
      },
      isolateScope: function(e) {
        return Qa.data(e, "$isolateScope") || Qa.data(e, "$isolateScopeNoTemplate")
      },
      controller: Dt,
      injector: function(e) {
        return Et(e, "$injector")
      },
      removeAttr: function(e, t) {
        e.removeAttribute(t)
      },
      hasClass: Mt,
      css: function(e, t, i) {
        return t = ft(t), b(i) ? void(e.style[t] = i) : e.style[t]
      },
      attr: function(e, t, a) {
        var n = Wa(t);
        if (Rn[n]) {
          if (!b(a)) return e[t] || (e.attributes.getNamedItem(t) || p).specified ? n : i;
          a ? (e[t] = !0, e.setAttribute(t, n)) : (e[t] = !1, e.removeAttribute(n))
        } else if (b(a)) e.setAttribute(t, a);
        else if (e.getAttribute) {
          var r = e.getAttribute(t, 2);
          return null === r ? i : r
        }
      },
      prop: function(e, t, i) {
        return b(i) ? void(e[t] = i) : e[t]
      },
      text: function() {
        function e(e, t) {
          if (v(t)) {
            var i = e.nodeType;
            return i === vn || i === bn ? e.textContent : ""
          }
          e.textContent = t
        }
        return e.$dv = "", e
      }(),
      val: function(e, t) {
        if (v(t)) {
          if (e.multiple && "select" === $(e)) {
            var i = [];
            return r(e.options, function(e) {
              e.selected && i.push(e.value || e.text)
            }), 0 === i.length ? null : i
          }
          return e.value
        }
        e.value = t
      },
      html: function(e, t) {
        return v(t) ? e.innerHTML : (wt(e, !0), void(e.innerHTML = t))
      },
      empty: Bt
    }, function(e, t) {
      _t.prototype[t] = function(t, a) {
        var n, r, o = this.length;
        if (e !== Bt && (2 == e.length && e !== Mt && e !== Dt ? t : a) === i) {
          if (y(t)) {
            for (n = 0; o > n; n++)
              if (e === Ct) e(this[n], t);
              else
                for (r in t) e(this[n], r, t[r]);
            return this
          }
          for (var s = e.$dv, l = s === i ? Math.min(o, 1) : o, u = 0; l > u; u++) {
            var c = e(this[u], t, a);
            s = s ? s + c : c
          }
          return s
        }
        for (n = 0; o > n; n++) e(this[n], t, a);
        return this
      }
    }), r({
      removeData: xt,
      on: function qo(e, t, i, a) {
        if (b(a)) throw Pn("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
        if (vt(e)) {
          var n = At(e, !0),
            r = n.events,
            o = n.handle;
          o || (o = n.handle = Kt(e, r));
          for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], l = s.length; l--;) {
            t = s[l];
            var u = r[t];
            u || (r[t] = [], "mouseenter" === t || "mouseleave" === t ? qo(e, Tn[t], function(e) {
              var i = this,
                a = e.relatedTarget;
              (!a || a !== i && !i.contains(a)) && o(e, t)
            }) : "$destroy" !== t && An(e, t, o), u = r[t]), u.push(i)
          }
        }
      },
      off: St,
      one: function(e, t, i) {
        e = Qa(e), e.on(t, function a() {
          e.off(t, i), e.off(t, a)
        }), e.on(t, i)
      },
      replaceWith: function(e, t) {
        var i, a = e.parentNode;
        wt(e), r(new _t(t), function(t) {
          i ? a.insertBefore(t, i.nextSibling) : a.replaceChild(t, e), i = t
        })
      },
      children: function(e) {
        var t = [];
        return r(e.childNodes, function(e) {
          e.nodeType === vn && t.push(e)
        }), t
      },
      contents: function(e) {
        return e.contentDocument || e.childNodes || []
      },
      append: function(e, t) {
        var i = e.nodeType;
        if (i === vn || i === kn) {
          t = new _t(t);
          for (var a = 0, n = t.length; n > a; a++) {
            var r = t[a];
            e.appendChild(r)
          }
        }
      },
      prepend: function(e, t) {
        if (e.nodeType === vn) {
          var i = e.firstChild;
          r(new _t(t), function(t) {
            e.insertBefore(t, i)
          })
        }
      },
      wrap: function(e, t) {
        t = Qa(t).eq(0).clone()[0];
        var i = e.parentNode;
        i && i.replaceChild(t, e), t.appendChild(e)
      },
      remove: $t,
      detach: function(e) {
        $t(e, !0)
      },
      after: function(e, t) {
        var i = e,
          a = e.parentNode;
        t = new _t(t);
        for (var n = 0, r = t.length; r > n; n++) {
          var o = t[n];
          a.insertBefore(o, i.nextSibling), i = o
        }
      },
      addClass: Tt,
      removeClass: zt,
      toggleClass: function(e, t, i) {
        t && r(t.split(" "), function(t) {
          var a = i;
          v(a) && (a = !Mt(e, t)), (a ? Tt : zt)(e, t)
        })
      },
      parent: function(e) {
        var t = e.parentNode;
        return t && t.nodeType !== kn ? t : null
      },
      next: function(e) {
        return e.nextElementSibling
      },
      find: function(e, t) {
        return e.getElementsByTagName ? e.getElementsByTagName(t) : []
      },
      clone: kt,
      triggerHandler: function(e, t, i) {
        var a, n, o, s = t.type || t,
          l = At(e),
          u = l && l.events,
          c = u && u[s];
        c && (a = {
          preventDefault: function() {
            this.defaultPrevented = !0
          },
          isDefaultPrevented: function() {
            return this.defaultPrevented === !0
          },
          stopImmediatePropagation: function() {
            this.immediatePropagationStopped = !0
          },
          isImmediatePropagationStopped: function() {
            return this.immediatePropagationStopped === !0
          },
          stopPropagation: p,
          type: s,
          target: e
        }, t.type && (a = d(a, t)), n = R(c), o = i ? [a].concat(i) : [a], r(n, function(t) {
          a.isImmediatePropagationStopped() || t.apply(e, o)
        }))
      }
    }, function(e, t) {
      _t.prototype[t] = function(t, i, a) {
        for (var n, r = 0, o = this.length; o > r; r++) v(n) ? (n = e(this[r], t, i, a), b(n) && (n = Qa(n))) : Pt(n, e(this[r], t, i, a));
        return b(n) ? n : this
      }, _t.prototype.bind = _t.prototype.on, _t.prototype.unbind = _t.prototype.off
    }), It.prototype = {
      put: function(e, t) {
        this[jt(e, this.nextUid)] = t
      },
      get: function(e) {
        return this[jt(e, this.nextUid)]
      },
      remove: function(e) {
        var t = this[e = jt(e, this.nextUid)];
        return delete this[e], t
      }
    };
    var jn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
      In = /,/,
      Fn = /^\s*(_?)(\S+?)\1\s*$/,
      Gn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      On = a("$injector");
    Ot.$$annotate = Gt;
    var qn = a("$animate"),
      Wn = ["$provide", function(e) {
        this.$$selectors = {}, this.register = function(t, i) {
          var a = t + "-animation";
          if (t && "." != t.charAt(0)) throw qn("notcsel", "Expecting class selector starting with '.' got '{0}'.", t);
          this.$$selectors[t.substr(1)] = a, e.factory(a, i)
        }, this.classNameFilter = function(e) {
          return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
        }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(e, t, i) {
          function a(t) {
            var a, n = e.defer();
            return n.promise.$$cancelFn = function() {
              a && a()
            }, i.$$postDigest(function() {
              a = t(function() {
                n.resolve()
              })
            }), n.promise
          }

          function n(e, t) {
            var i = [],
              a = [],
              n = ut();
            return r((e.attr("class") || "").split(/\s+/), function(e) {
              n[e] = !0
            }), r(t, function(e, t) {
              var r = n[t];
              e === !1 && r ? a.push(t) : e !== !0 || r || i.push(t)
            }), i.length + a.length > 0 && [i.length ? i : null, a.length ? a : null]
          }

          function o(e, t, i) {
            for (var a = 0, n = t.length; n > a; ++a) {
              var r = t[a];
              e[r] = i
            }
          }

          function s() {
            return u || (u = e.defer(), t(function() {
              u.resolve(), u = null
            })), u.promise
          }

          function l(e, t) {
            if (sn.isObject(t)) {
              var i = d(t.from || {}, t.to || {});
              e.css(i)
            }
          }
          var u;
          return {
            animate: function(e, t, i) {
              return l(e, {
                from: t,
                to: i
              }), s()
            },
            enter: function(e, t, i, a) {
              return l(e, a), i ? i.after(e) : t.prepend(e), s()
            },
            leave: function(e) {
              return e.remove(), s()
            },
            move: function(e, t, i, a) {
              return this.enter(e, t, i, a)
            },
            addClass: function(e, t, i) {
              return this.setClass(e, t, [], i)
            },
            $$addClassImmediately: function(e, t, i) {
              return e = Qa(e), t = _(t) ? t : cn(t) ? t.join(" ") : "", r(e, function(e) {
                Tt(e, t)
              }), l(e, i), s()
            },
            removeClass: function(e, t, i) {
              return this.setClass(e, [], t, i)
            },
            $$removeClassImmediately: function(e, t, i) {
              return e = Qa(e), t = _(t) ? t : cn(t) ? t.join(" ") : "", r(e, function(e) {
                zt(e, t)
              }), l(e, i), s()
            },
            setClass: function(e, t, i, r) {
              var s = this,
                l = "$$animateClasses",
                u = !1;
              e = Qa(e);
              var c = e.data(l);
              c ? r && c.options && (c.options = sn.extend(c.options || {}, r)) : (c = {
                classes: {},
                options: r
              }, u = !0);
              var d = c.classes;
              return t = cn(t) ? t : t.split(" "), i = cn(i) ? i : i.split(" "), o(d, t, !0), o(d, i, !1), u && (c.promise = a(function(t) {
                var i = e.data(l);
                if (e.removeData(l), i) {
                  var a = n(e, i.classes);
                  a && s.$$setClassImmediately(e, a[0], a[1], i.options)
                }
                t()
              }), e.data(l, c)), c.promise
            },
            $$setClassImmediately: function(e, t, i, a) {
              return t && this.$$addClassImmediately(e, t), i && this.$$removeClassImmediately(e, i), l(e, a), s()
            },
            enabled: p,
            cancel: p
          }
        }]
      }],
      Jn = a("$compile");
    Yt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Vn = /^((?:x|data)[\:\-_])/i,
      Un = a("$controller"),
      Zn = "application/json",
      Yn = {
        "Content-Type": Zn + ";charset=utf-8"
      },
      Qn = /^\[|^\{(?!\{)/,
      Xn = {
        "[": /]$/,
        "{": /}$/
      },
      er = /^\)\]\}',?\n/,
      tr = a("$interpolate"),
      ir = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      ar = {
        http: 80,
        https: 443,
        ftp: 21
      },
      nr = a("$location"),
      rr = {
        $$html5: !1,
        $$replace: !1,
        absUrl: zi("$$absUrl"),
        url: function(e) {
          if (v(e)) return this.$$url;
          var t = ir.exec(e);
          return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
        },
        protocol: zi("$$protocol"),
        host: zi("$$host"),
        port: zi("$$port"),
        path: Ti("$$path", function(e) {
          return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
        }),
        search: function(e, t) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (_(e) || k(e)) e = e.toString(), this.$$search = J(e);
              else {
                if (!y(e)) throw nr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                e = N(e, {}), r(e, function(t, i) {
                  null == t && delete e[i]
                }), this.$$search = e
              }
              break;
            default:
              v(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
          }
          return this.$$compose(), this
        },
        hash: Ti("$$hash", function(e) {
          return null !== e ? e.toString() : ""
        }),
        replace: function() {
          return this.$$replace = !0, this
        }
      };
    r([Mi, Ci, Ai], function(e) {
      e.prototype = Object.create(rr), e.prototype.state = function(t) {
        if (!arguments.length) return this.$$state;
        if (e !== Ai || !this.$$html5) throw nr("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
        return this.$$state = v(t) ? null : t, this
      }
    });
    var or = a("$parse"),
      sr = Function.prototype.call,
      lr = Function.prototype.apply,
      ur = Function.prototype.bind,
      cr = ut();
    r({
      "null": function() {
        return null
      },
      "true": function() {
        return !0
      },
      "false": function() {
        return !1
      },
      undefined: function() {}
    }, function(e, t) {
      e.constant = e.literal = e.sharedGetter = !0, cr[t] = e
    }), cr["this"] = function(e) {
      return e
    }, cr["this"].sharedGetter = !0;
    var dr = d(ut(), {
        "+": function(e, t, a, n) {
          return a = a(e, t), n = n(e, t), b(a) ? b(n) ? a + n : a : b(n) ? n : i
        },
        "-": function(e, t, i, a) {
          return i = i(e, t), a = a(e, t), (b(i) ? i : 0) - (b(a) ? a : 0)
        },
        "*": function(e, t, i, a) {
          return i(e, t) * a(e, t)
        },
        "/": function(e, t, i, a) {
          return i(e, t) / a(e, t)
        },
        "%": function(e, t, i, a) {
          return i(e, t) % a(e, t)
        },
        "===": function(e, t, i, a) {
          return i(e, t) === a(e, t)
        },
        "!==": function(e, t, i, a) {
          return i(e, t) !== a(e, t)
        },
        "==": function(e, t, i, a) {
          return i(e, t) == a(e, t)
        },
        "!=": function(e, t, i, a) {
          return i(e, t) != a(e, t)
        },
        "<": function(e, t, i, a) {
          return i(e, t) < a(e, t)
        },
        ">": function(e, t, i, a) {
          return i(e, t) > a(e, t)
        },
        "<=": function(e, t, i, a) {
          return i(e, t) <= a(e, t)
        },
        ">=": function(e, t, i, a) {
          return i(e, t) >= a(e, t)
        },
        "&&": function(e, t, i, a) {
          return i(e, t) && a(e, t)
        },
        "||": function(e, t, i, a) {
          return i(e, t) || a(e, t)
        },
        "!": function(e, t, i) {
          return !i(e, t)
        },
        "=": !0,
        "|": !0
      }),
      hr = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: " ",
        v: "",
        "'": "'",
        '"': '"'
      },
      mr = function(e) {
        this.options = e
      };
    mr.prototype = {
      constructor: mr,
      lex: function(e) {
        for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
          var t = this.text.charAt(this.index);
          if ('"' === t || "'" === t) this.readString(t);
          else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
          else if (this.isIdent(t)) this.readIdent();
          else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
            index: this.index,
            text: t
          }), this.index++;
          else if (this.isWhitespace(t)) this.index++;
          else {
            var i = t + this.peek(),
              a = i + this.peek(2),
              n = dr[t],
              r = dr[i],
              o = dr[a];
            if (n || r || o) {
              var s = o ? a : r ? i : t;
              this.tokens.push({
                index: this.index,
                text: s,
                operator: !0
              }), this.index += s.length
            } else this.throwError("Unexpected next character ", this.index, this.index + 1)
          }
        }
        return this.tokens
      },
      is: function(e, t) {
        return -1 !== t.indexOf(e)
      },
      peek: function(e) {
        var t = e || 1;
        return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
      },
      isNumber: function(e) {
        return e >= "0" && "9" >= e && "string" == typeof e
      },
      isWhitespace: function(e) {
        return " " === e || "\r" === e || "  " === e || "\n" === e || "" === e || "\xa0" === e
      },
      isIdent: function(e) {
        return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
      },
      isExpOperator: function(e) {
        return "-" === e || "+" === e || this.isNumber(e)
      },
      throwError: function(e, t, i) {
        i = i || this.index;
        var a = b(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, i) + "]" : " " + i;
        throw or("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, a, this.text)
      },
      readNumber: function() {
        for (var e = "", t = this.index; this.index < this.text.length;) {
          var i = Wa(this.text.charAt(this.index));
          if ("." == i || this.isNumber(i)) e += i;
          else {
            var a = this.peek();
            if ("e" == i && this.isExpOperator(a)) e += i;
            else if (this.isExpOperator(i) && a && this.isNumber(a) && "e" == e.charAt(e.length - 1)) e += i;
            else {
              if (!this.isExpOperator(i) || a && this.isNumber(a) || "e" != e.charAt(e.length - 1)) break;
              this.throwError("Invalid exponent")
            }
          }
          this.index++
        }
        this.tokens.push({
          index: t,
          text: e,
          constant: !0,
          value: Number(e)
        })
      },
      readIdent: function() {
        for (var e = this.index; this.index < this.text.length;) {
          var t = this.text.charAt(this.index);
          if (!this.isIdent(t) && !this.isNumber(t)) break;
          this.index++
        }
        this.tokens.push({
          index: e,
          text: this.text.slice(e, this.index),
          identifier: !0
        })
      },
      readString: function(e) {
        var t = this.index;
        this.index++;
        for (var i = "", a = e, n = !1; this.index < this.text.length;) {
          var r = this.text.charAt(this.index);
          if (a += r, n) {
            if ("u" === r) {
              var o = this.text.substring(this.index + 1, this.index + 5);
              o.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + o + "]"), this.index += 4, i += String.fromCharCode(parseInt(o, 16))
            } else {
              var s = hr[r];
              i += s || r
            }
            n = !1
          } else if ("\\" === r) n = !0;
          else {
            if (r === e) return this.index++, void this.tokens.push({
              index: t,
              text: a,
              constant: !0,
              value: i
            });
            i += r
          }
          this.index++
        }
        this.throwError("Unterminated quote", t)
      }
    };
    var pr = function(e, t, i) {
      this.lexer = e, this.$filter = t, this.options = i
    };
    pr.ZERO = d(function() {
      return 0
    }, {
      sharedGetter: !0,
      constant: !0
    }), pr.prototype = {
      constructor: pr,
      parse: function(e) {
        this.text = e, this.tokens = this.lexer.lex(e);
        var t = this.statements();
        return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t.literal = !!t.literal, t.constant = !!t.constant, t
      },
      primary: function() {
        var e;
        this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.peek().identifier && this.peek().text in cr ? e = cr[this.consume().text] : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
        for (var t, i; t = this.expect("(", "[", ".");) "(" === t.text ? (e = this.functionCall(e, i), i = null) : "[" === t.text ? (i = e, e = this.objectIndex(e)) : "." === t.text ? (i = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
        return e
      },
      throwError: function(e, t) {
        throw or("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
      },
      peekToken: function() {
        if (0 === this.tokens.length) throw or("ueoe", "Unexpected end of expression: {0}", this.text);
        return this.tokens[0]
      },
      peek: function(e, t, i, a) {
        return this.peekAhead(0, e, t, i, a)
      },
      peekAhead: function(e, t, i, a, n) {
        if (this.tokens.length > e) {
          var r = this.tokens[e],
            o = r.text;
          if (o === t || o === i || o === a || o === n || !t && !i && !a && !n) return r
        }
        return !1
      },
      expect: function(e, t, i, a) {
        var n = this.peek(e, t, i, a);
        return n ? (this.tokens.shift(), n) : !1
      },
      consume: function(e) {
        if (0 === this.tokens.length) throw or("ueoe", "Unexpected end of expression: {0}", this.text);
        var t = this.expect(e);
        return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
      },
      unaryFn: function(e, t) {
        var i = dr[e];
        return d(function(e, a) {
          return i(e, a, t)
        }, {
          constant: t.constant,
          inputs: [t]
        })
      },
      binaryFn: function(e, t, i, a) {
        var n = dr[t];
        return d(function(t, a) {
          return n(t, a, e, i)
        }, {
          constant: e.constant && i.constant,
          inputs: !a && [e, i]
        })
      },
      identifier: function() {
        for (var e = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) e += this.consume().text + this.consume().text;
        return ji(e, this.options, this.text)
      },
      constant: function() {
        var e = this.consume().value;
        return d(function() {
          return e
        }, {
          constant: !0,
          literal: !0
        })
      },
      statements: function() {
        for (var e = [];;)
          if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function(t, i) {
            for (var a, n = 0, r = e.length; r > n; n++) a = e[n](t, i);
            return a
          }
      },
      filterChain: function() {
        for (var e, t = this.expression(); e = this.expect("|");) t = this.filter(t);
        return t
      },
      filter: function(e) {
        var t, a, n = this.$filter(this.consume().text);
        if (this.peek(":"))
          for (t = [], a = []; this.expect(":");) t.push(this.expression());
        var r = [e].concat(t || []);
        return d(function(r, o) {
          var s = e(r, o);
          if (a) {
            a[0] = s;
            for (var l = t.length; l--;) a[l + 1] = t[l](r, o);
            return n.apply(i, a)
          }
          return n(s)
        }, {
          constant: !n.$stateful && r.every(Li),
          inputs: !n.$stateful && r
        })
      },
      expression: function() {
        return this.assignment()
      },
      assignment: function() {
        var e, t, i = this.ternary();
        return (t = this.expect("=")) ? (i.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), d(function(t, a) {
          return i.assign(t, e(t, a), a)
        }, {
          inputs: [i, e]
        })) : i
      },
      ternary: function() {
        var e, t, i = this.logicalOR();
        if ((t = this.expect("?")) && (e = this.assignment(), this.consume(":"))) {
          var a = this.assignment();
          return d(function(t, n) {
            return i(t, n) ? e(t, n) : a(t, n)
          }, {
            constant: i.constant && e.constant && a.constant
          })
        }
        return i
      },
      logicalOR: function() {
        for (var e, t = this.logicalAND(); e = this.expect("||");) t = this.binaryFn(t, e.text, this.logicalAND(), !0);
        return t
      },
      logicalAND: function() {
        for (var e, t = this.equality(); e = this.expect("&&");) t = this.binaryFn(t, e.text, this.equality(), !0);
        return t
      },
      equality: function() {
        for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = this.binaryFn(t, e.text, this.relational());
        return t
      },
      relational: function() {
        for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = this.binaryFn(t, e.text, this.additive());
        return t
      },
      additive: function() {
        for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.text, this.multiplicative());
        return t
      },
      multiplicative: function() {
        for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.text, this.unary());
        return t
      },
      unary: function() {
        var e;
        return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(pr.ZERO, e.text, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.text, this.unary()) : this.primary()
      },
      fieldAccess: function(e) {
        var t = this.identifier();
        return d(function(a, n, r) {
          var o = r || e(a, n);
          return null == o ? i : t(o)
        }, {
          assign: function(i, a, n) {
            var r = e(i, n);
            return r || e.assign(i, r = {}, n), t.assign(r, a)
          }
        })
      },
      objectIndex: function(e) {
        var t = this.text,
          a = this.expression();
        return this.consume("]"), d(function(n, r) {
          var o, s = e(n, r),
            l = a(n, r);
          return Ei(l, t), s ? o = Bi(s[l], t) : i
        }, {
          assign: function(i, n, r) {
            var o = Ei(a(i, r), t),
              s = Bi(e(i, r), t);
            return s || e.assign(i, s = {}, r), s[o] = n
          }
        })
      },
      functionCall: function(e, t) {
        var a = [];
        if (")" !== this.peekToken().text)
          do a.push(this.expression()); while (this.expect(","));
        this.consume(")");
        var n = this.text,
          r = a.length ? [] : null;
        return function(o, s) {
          var l = t ? t(o, s) : b(t) ? i : o,
            u = e(o, s, l) || p;
          if (r)
            for (var c = a.length; c--;) r[c] = Bi(a[c](o, s), n);
          Bi(l, n), $i(u, n);
          var d = u.apply ? u.apply(l, r) : u(r[0], r[1], r[2], r[3], r[4]);
          return r && (r.length = 0), Bi(d, n)
        }
      },
      arrayDeclaration: function() {
        var e = [];
        if ("]" !== this.peekToken().text)
          do {
            if (this.peek("]")) break;
            e.push(this.expression())
          } while (this.expect(","));
        return this.consume("]"), d(function(t, i) {
          for (var a = [], n = 0, r = e.length; r > n; n++) a.push(e[n](t, i));
          return a
        }, {
          literal: !0,
          constant: e.every(Li),
          inputs: e
        })
      },
      object: function() {
        var e = [],
          t = [];
        if ("}" !== this.peekToken().text)
          do {
            if (this.peek("}")) break;
            var i = this.consume();
            i.constant ? e.push(i.value) : i.identifier ? e.push(i.text) : this.throwError("invalid key", i), this.consume(":"), t.push(this.expression())
          } while (this.expect(","));
        return this.consume("}"), d(function(i, a) {
          for (var n = {}, r = 0, o = t.length; o > r; r++) n[e[r]] = t[r](i, a);
          return n
        }, {
          literal: !0,
          constant: t.every(Li),
          inputs: t
        })
      }
    };
    var fr = ut(),
      gr = ut(),
      vr = Object.prototype.valueOf,
      br = a("$sce"),
      yr = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
      },
      Jn = a("$compile"),
      _r = t.createElement("a"),
      kr = aa(e.location.href);
    oa.$inject = ["$provide"], ca.$inject = ["$locale"], da.$inject = ["$locale"];
    var wr = ".",
      Sr = {
        yyyy: pa("FullYear", 4),
        yy: pa("FullYear", 2, 0, !0),
        y: pa("FullYear", 1),
        MMMM: fa("Month"),
        MMM: fa("Month", !0),
        MM: pa("Month", 2, 1),
        M: pa("Month", 1, 1),
        dd: pa("Date", 2),
        d: pa("Date", 1),
        HH: pa("Hours", 2),
        H: pa("Hours", 1),
        hh: pa("Hours", 2, -12),
        h: pa("Hours", 1, -12),
        mm: pa("Minutes", 2),
        m: pa("Minutes", 1),
        ss: pa("Seconds", 2),
        s: pa("Seconds", 1),
        sss: pa("Milliseconds", 3),
        EEEE: fa("Day"),
        EEE: fa("Day", !0),
        a: _a,
        Z: ga,
        ww: ya(2),
        w: ya(1)
      },
      xr = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
      Ar = /^\-?\d+$/;
    ka.$inject = ["$locale"];
    var Cr = g(Wa),
      Mr = g(Va);
    xa.$inject = ["$parse"];
    var zr = g({
        restrict: "E",
        compile: function(e, t) {
          return t.href || t.xlinkHref || t.name ? void 0 : function(e, t) {
            if ("a" === t[0].nodeName.toLowerCase()) {
              var i = "[object SVGAnimatedString]" === rn.call(t.prop("href")) ? "xlink:href" : "href";
              t.on("click", function(e) {
                t.attr(i) || e.preventDefault()
              })
            }
          }
        }
      }),
      Tr = {};
    r(Rn, function(e, t) {
      if ("multiple" != e) {
        var i = Qt("ng-" + t);
        Tr[i] = function() {
          return {
            restrict: "A",
            priority: 100,
            link: function(e, a, n) {
              e.$watch(n[i], function(e) {
                n.$set(t, !!e)
              })
            }
          }
        }
      }
    }), r(Hn, function(e, t) {
      Tr[t] = function() {
        return {
          priority: 100,
          link: function(e, i, a) {
            if ("ngPattern" === t && "/" == a.ngPattern.charAt(0)) {
              var n = a.ngPattern.match(Oa);
              if (n) return void a.$set("ngPattern", new RegExp(n[1], n[2]))
            }
            e.$watch(a[t], function(e) {
              a.$set(t, e)
            })
          }
        }
      }
    }), r(["src", "srcset", "href"], function(e) {
      var t = Qt("ng-" + e);
      Tr[t] = function() {
        return {
          priority: 99,
          link: function(i, a, n) {
            var r = e,
              o = e;
            "href" === e && "[object SVGAnimatedString]" === rn.call(a.prop("href")) && (o = "xlinkHref", n.$attr[o] = "xlink:href", r = null), n.$observe(t, function(t) {
              return t ? (n.$set(o, t), void(Ya && r && a.prop(r, n[o]))) : void("href" === e && n.$set(o, null))
            })
          }
        }
      }
    });
    var Pr = {
        $addControl: p,
        $$renameControl: Ca,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
      },
      Dr = "ng-submitted";
    Ma.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Er = function(e) {
        return ["$timeout", function(t) {
          var a = {
            name: "form",
            restrict: e ? "EAC" : "E",
            controller: Ma,
            compile: function(e) {
              return e.addClass(mo).addClass(co), {
                pre: function(e, a, n, r) {
                  if (!("action" in n)) {
                    var o = function(t) {
                      e.$apply(function() {
                        r.$commitViewValue(), r.$setSubmitted()
                      }), t.preventDefault()
                    };
                    An(a[0], "submit", o), a.on("$destroy", function() {
                      t(function() {
                        Cn(a[0], "submit", o)
                      }, 0, !1)
                    })
                  }
                  var s = r.$$parentForm,
                    l = r.$name;
                  l && (Ni(e, null, l, r, l), n.$observe(n.name ? "name" : "ngForm", function(t) {
                    l !== t && (Ni(e, null, l, i, l), l = t, Ni(e, null, l, r, l), s.$$renameControl(r, l))
                  })), a.on("$destroy", function() {
                    s.$removeControl(r), l && Ni(e, null, l, i, l), d(r, Pr)
                  })
                }
              }
            }
          };
          return a
        }]
      },
      Br = Er(),
      $r = Er(!0),
      Lr = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
      Nr = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
      Rr = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      Kr = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
      Hr = /^(\d{4})-(\d{2})-(\d{2})$/,
      jr = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Ir = /^(\d{4})-W(\d\d)$/,
      Fr = /^(\d{4})-(\d\d)$/,
      Gr = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Or = {
        text: Ta,
        date: Ba("date", Hr, Ea(Hr, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": Ba("datetimelocal", jr, Ea(jr, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: Ba("time", Gr, Ea(Gr, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: Ba("week", Ir, Da, "yyyy-Www"),
        month: Ba("month", Fr, Ea(Fr, ["yyyy", "MM"]), "yyyy-MM"),
        number: La,
        url: Na,
        email: Ra,
        radio: Ka,
        checkbox: ja,
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
      },
      qr = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, i, a) {
        return {
          restrict: "E",
          require: ["?ngModel"],
          link: {
            pre: function(n, r, o, s) {
              s[0] && (Or[Wa(o.type)] || Or.text)(n, r, o, s[0], t, e, i, a)
            }
          }
        }
      }],
      Wr = /^(true|false|\d+)$/,
      Jr = function() {
        return {
          restrict: "A",
          priority: 100,
          compile: function(e, t) {
            return Wr.test(t.ngValue) ? function(e, t, i) {
              i.$set("value", e.$eval(i.ngValue))
            } : function(e, t, i) {
              e.$watch(i.ngValue, function(e) {
                i.$set("value", e)
              })
            }
          }
        }
      },
      Vr = ["$compile", function(e) {
        return {
          restrict: "AC",
          compile: function(t) {
            return e.$$addBindingClass(t),
              function(t, a, n) {
                e.$$addBindingInfo(a, n.ngBind), a = a[0], t.$watch(n.ngBind, function(e) {
                  a.textContent = e === i ? "" : e
                })
              }
          }
        }
      }],
      Ur = ["$interpolate", "$compile", function(e, t) {
        return {
          compile: function(a) {
            return t.$$addBindingClass(a),
              function(a, n, r) {
                var o = e(n.attr(r.$attr.ngBindTemplate));
                t.$$addBindingInfo(n, o.expressions), n = n[0], r.$observe("ngBindTemplate", function(e) {
                  n.textContent = e === i ? "" : e
                })
              }
          }
        }
      }],
      Zr = ["$sce", "$parse", "$compile", function(e, t, i) {
        return {
          restrict: "A",
          compile: function(a, n) {
            var r = t(n.ngBindHtml),
              o = t(n.ngBindHtml, function(e) {
                return (e || "").toString()
              });
            return i.$$addBindingClass(a),
              function(t, a, n) {
                i.$$addBindingInfo(a, n.ngBindHtml), t.$watch(o, function() {
                  a.html(e.getTrustedHtml(r(t)) || "")
                })
              }
          }
        }
      }],
      Yr = g({
        restrict: "A",
        require: "ngModel",
        link: function(e, t, i, a) {
          a.$viewChangeListeners.push(function() {
            e.$eval(i.ngChange)
          })
        }
      }),
      Qr = Ia("", !0),
      Xr = Ia("Odd", 0),
      eo = Ia("Even", 1),
      to = Aa({
        compile: function(e, t) {
          t.$set("ngCloak", i), e.removeClass("ng-cloak")
        }
      }),
      io = [function() {
        return {
          restrict: "A",
          scope: !0,
          controller: "@",
          priority: 500
        }
      }],
      ao = {},
      no = {
        blur: !0,
        focus: !0
      };
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
      var t = Qt("ng-" + e);
      ao[t] = ["$parse", "$rootScope", function(i, a) {
        return {
          restrict: "A",
          compile: function(n, r) {
            var o = i(r[t], null, !0);
            return function(t, i) {
              i.on(e, function(i) {
                var n = function() {
                  o(t, {
                    $event: i
                  })
                };
                no[e] && a.$$phase ? t.$evalAsync(n) : t.$apply(n)
              })
            }
          }
        }
      }]
    });
    var ro = ["$animate", function(e) {
        return {
          multiElement: !0,
          transclude: "element",
          priority: 600,
          terminal: !0,
          restrict: "A",
          $$tlb: !0,
          link: function(i, a, n, r, o) {
            var s, l, u;
            i.$watch(n.ngIf, function(i) {
              i ? l || o(function(i, r) {
                l = r, i[i.length++] = t.createComment(" end ngIf: " + n.ngIf + " "), s = {
                  clone: i
                }, e.enter(i, a.parent(), a)
              }) : (u && (u.remove(), u = null), l && (l.$destroy(), l = null), s && (u = lt(s.clone), e.leave(u).then(function() {
                u = null
              }), s = null))
            })
          }
        }
      }],
      oo = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(e, t, i, a) {
        return {
          restrict: "ECA",
          priority: 400,
          terminal: !0,
          transclude: "element",
          controller: sn.noop,
          compile: function(n, r) {
            var o = r.ngInclude || r.src,
              s = r.onload || "",
              l = r.autoscroll;
            return function(n, r, u, c, d) {
              var h, m, p, f = 0,
                g = function() {
                  m && (m.remove(), m = null), h && (h.$destroy(), h = null), p && (i.leave(p).then(function() {
                    m = null
                  }), m = p, p = null)
                };
              n.$watch(a.parseAsResourceUrl(o), function(a) {
                var o = function() {
                    !b(l) || l && !n.$eval(l) || t()
                  },
                  u = ++f;
                a ? (e(a, !0).then(function(e) {
                  if (u === f) {
                    var t = n.$new();
                    c.template = e;
                    var l = d(t, function(e) {
                      g(), i.enter(e, null, r).then(o)
                    });
                    h = t, p = l, h.$emit("$includeContentLoaded", a), n.$eval(s)
                  }
                }, function() {
                  u === f && (g(), n.$emit("$includeContentError", a))
                }), n.$emit("$includeContentRequested", a)) : (g(), c.template = null)
              })
            }
          }
        }
      }],
      so = ["$compile", function(e) {
        return {
          restrict: "ECA",
          priority: -400,
          require: "ngInclude",
          link: function(i, a, n, r) {
            return /SVG/.test(a[0].toString()) ? (a.empty(), void e(bt(r.template, t).childNodes)(i, function(e) {
              a.append(e)
            }, {
              futureParentElement: a
            })) : (a.html(r.template), void e(a.contents())(i))
          }
        }
      }],
      lo = Aa({
        priority: 450,
        compile: function() {
          return {
            pre: function(e, t, i) {
              e.$eval(i.ngInit)
            }
          }
        }
      }),
      uo = function() {
        return {
          restrict: "A",
          priority: 100,
          require: "ngModel",
          link: function(e, t, a, n) {
            var o = t.attr(a.$attr.ngList) || ", ",
              s = "false" !== a.ngTrim,
              l = s ? dn(o) : o,
              u = function(e) {
                if (!v(e)) {
                  var t = [];
                  return e && r(e.split(l), function(e) {
                    e && t.push(s ? dn(e) : e)
                  }), t
                }
              };
            n.$parsers.push(u), n.$formatters.push(function(e) {
              return cn(e) ? e.join(o) : i
            }), n.$isEmpty = function(e) {
              return !e || !e.length
            }
          }
        }
      },
      co = "ng-valid",
      ho = "ng-invalid",
      mo = "ng-pristine",
      po = "ng-dirty",
      fo = "ng-untouched",
      go = "ng-touched",
      vo = "ng-pending",
      bo = new a("ngModel"),
      yo = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, a, n, o, s, l, u, c, d) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = i, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = i, this.$name = d(a.name || "", !1)(e);
        var h = o(a.ngModel),
          m = h.assign,
          f = h,
          g = m,
          y = null,
          _ = this;
        this.$$setOptions = function(e) {
          if (_.$options = e, e && e.getterSetter) {
            var t = o(a.ngModel + "()"),
              i = o(a.ngModel + "($$$p)");
            f = function(e) {
              var i = h(e);
              return S(i) && (i = t(e)), i
            }, g = function(e) {
              S(h(e)) ? i(e, {
                $$$p: _.$modelValue
              }) : m(e, _.$modelValue)
            }
          } else if (!h.assign) throw bo("nonassign", "Expression '{0}' is non-assignable. Element: {1}", a.ngModel, q(n))
        }, this.$render = p, this.$isEmpty = function(e) {
          return v(e) || "" === e || null === e || e !== e
        };
        var w = n.inheritedData("$formController") || Pr,
          x = 0;
        Fa({
          ctrl: this,
          $element: n,
          set: function(e, t) {
            e[t] = !0
          },
          unset: function(e, t) {
            delete e[t]
          },
          parentForm: w,
          $animate: s
        }), this.$setPristine = function() {
          _.$dirty = !1, _.$pristine = !0, s.removeClass(n, po), s.addClass(n, mo)
        }, this.$setDirty = function() {
          _.$dirty = !0, _.$pristine = !1, s.removeClass(n, mo), s.addClass(n, po), w.$setDirty()
        }, this.$setUntouched = function() {
          _.$touched = !1, _.$untouched = !0, s.setClass(n, fo, go)
        }, this.$setTouched = function() {
          _.$touched = !0, _.$untouched = !1, s.setClass(n, go, fo)
        }, this.$rollbackViewValue = function() {
          l.cancel(y), _.$viewValue = _.$$lastCommittedViewValue, _.$render()
        }, this.$validate = function() {
          if (!k(_.$modelValue) || !isNaN(_.$modelValue)) {
            var e = _.$$lastCommittedViewValue,
              t = _.$$rawModelValue,
              a = _.$$parserName || "parse",
              n = _.$error[a] ? !1 : i,
              r = _.$valid,
              o = _.$modelValue,
              s = _.$options && _.$options.allowInvalid;
            _.$$runValidators(n, t, e, function(e) {
              s || r === e || (_.$modelValue = e ? t : i, _.$modelValue !== o && _.$$writeModelToScope())
            })
          }
        }, this.$$runValidators = function(e, t, a, n) {
          function o(e) {
            var t = _.$$parserName || "parse";
            if (e === i) u(t, null);
            else if (u(t, e), !e) return r(_.$validators, function(e, t) {
              u(t, null)
            }), r(_.$asyncValidators, function(e, t) {
              u(t, null)
            }), !1;
            return !0
          }

          function s() {
            var e = !0;
            return r(_.$validators, function(i, n) {
              var r = i(t, a);
              e = e && r, u(n, r)
            }), e ? !0 : (r(_.$asyncValidators, function(e, t) {
              u(t, null)
            }), !1)
          }

          function l() {
            var e = [],
              n = !0;
            r(_.$asyncValidators, function(r, o) {
              var s = r(t, a);
              if (!D(s)) throw bo("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
              u(o, i), e.push(s.then(function() {
                u(o, !0)
              }, function() {
                n = !1, u(o, !1)
              }))
            }), e.length ? c.all(e).then(function() {
              d(n)
            }, p) : d(!0)
          }

          function u(e, t) {
            h === x && _.$setValidity(e, t)
          }

          function d(e) {
            h === x && n(e)
          }
          x++;
          var h = x;
          return o(e) && s() ? void l() : void d(!1)
        }, this.$commitViewValue = function() {
          var e = _.$viewValue;
          l.cancel(y), (_.$$lastCommittedViewValue !== e || "" === e && _.$$hasNativeValidators) && (_.$$lastCommittedViewValue = e, _.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, this.$$parseAndValidate = function() {
          function t() {
            _.$modelValue !== s && _.$$writeModelToScope()
          }
          var a = _.$$lastCommittedViewValue,
            n = a,
            r = v(n) ? i : !0;
          if (r)
            for (var o = 0; o < _.$parsers.length; o++)
              if (n = _.$parsers[o](n), v(n)) {
                r = !1;
                break
              }
          k(_.$modelValue) && isNaN(_.$modelValue) && (_.$modelValue = f(e));
          var s = _.$modelValue,
            l = _.$options && _.$options.allowInvalid;
          _.$$rawModelValue = n, l && (_.$modelValue = n, t()), _.$$runValidators(r, n, _.$$lastCommittedViewValue, function(e) {
            l || (_.$modelValue = e ? n : i, t())
          })
        }, this.$$writeModelToScope = function() {
          g(e, _.$modelValue), r(_.$viewChangeListeners, function(e) {
            try {
              e()
            } catch (i) {
              t(i)
            }
          })
        }, this.$setViewValue = function(e, t) {
          _.$viewValue = e, (!_.$options || _.$options.updateOnDefault) && _.$$debounceViewValueCommit(t)
        }, this.$$debounceViewValueCommit = function(t) {
          var i, a = 0,
            n = _.$options;
          n && b(n.debounce) && (i = n.debounce, k(i) ? a = i : k(i[t]) ? a = i[t] : k(i["default"]) && (a = i["default"])), l.cancel(y), a ? y = l(function() {
            _.$commitViewValue()
          }, a) : u.$$phase ? _.$commitViewValue() : e.$apply(function() {
            _.$commitViewValue()
          })
        }, e.$watch(function() {
          var t = f(e);
          if (t !== _.$modelValue) {
            _.$modelValue = _.$$rawModelValue = t;
            for (var a = _.$formatters, n = a.length, r = t; n--;) r = a[n](r);
            _.$viewValue !== r && (_.$viewValue = _.$$lastCommittedViewValue = r, _.$render(), _.$$runValidators(i, t, r, p))
          }
          return t
        })
      }],
      _o = ["$rootScope", function(e) {
        return {
          restrict: "A",
          require: ["ngModel", "^?form", "^?ngModelOptions"],
          controller: yo,
          priority: 1,
          compile: function(t) {
            return t.addClass(mo).addClass(fo).addClass(co), {
              pre: function(e, t, i, a) {
                var n = a[0],
                  r = a[1] || Pr;
                n.$$setOptions(a[2] && a[2].$options), r.$addControl(n), i.$observe("name", function(e) {
                  n.$name !== e && r.$$renameControl(n, e)
                }), e.$on("$destroy", function() {
                  r.$removeControl(n)
                })
              },
              post: function(t, i, a, n) {
                var r = n[0];
                r.$options && r.$options.updateOn && i.on(r.$options.updateOn, function(e) {
                  r.$$debounceViewValueCommit(e && e.type)
                }), i.on("blur", function() {
                  r.$touched || (e.$$phase ? t.$evalAsync(r.$setTouched) : t.$apply(r.$setTouched))
                })
              }
            }
          }
        }
      }],
      ko = /(\s+|^)default(\s+|$)/,
      wo = function() {
        return {
          restrict: "A",
          controller: ["$scope", "$attrs", function(e, t) {
            var a = this;
            this.$options = e.$eval(t.ngModelOptions), this.$options.updateOn !== i ? (this.$options.updateOnDefault = !1, this.$options.updateOn = dn(this.$options.updateOn.replace(ko, function() {
              return a.$options.updateOnDefault = !0, " "
            }))) : this.$options.updateOnDefault = !0
          }]
        }
      },
      So = Aa({
        terminal: !0,
        priority: 1e3
      }),
      xo = ["$locale", "$interpolate", function(e, t) {
        var i = /{}/g,
          a = /^when(Minus)?(.+)$/;
        return {
          restrict: "EA",
          link: function(n, o, s) {
            function l(e) {
              o.text(e || "")
            }
            var u, c = s.count,
              d = s.$attr.when && o.attr(s.$attr.when),
              h = s.offset || 0,
              m = n.$eval(d) || {},
              p = {},
              f = t.startSymbol(),
              g = t.endSymbol(),
              v = f + c + "-" + h + g,
              b = sn.noop;
            r(s, function(e, t) {
              var i = a.exec(t);
              if (i) {
                var n = (i[1] ? "-" : "") + Wa(i[2]);
                m[n] = o.attr(s.$attr[t])
              }
            }), r(m, function(e, a) {
              p[a] = t(e.replace(i, v))
            }), n.$watch(c, function(t) {
              var i = parseFloat(t),
                a = isNaN(i);
              a || i in m || (i = e.pluralCat(i - h)), i === u || a && isNaN(u) || (b(), b = n.$watch(p[i], l), u = i)
            })
          }
        }
      }],
      Ao = ["$parse", "$animate", function(e, o) {
        var s = "$$NG_REMOVED",
          l = a("ngRepeat"),
          u = function(e, t, i, a, n, r, o) {
            e[i] = a, n && (e[n] = r), e.$index = t, e.$first = 0 === t, e.$last = t === o - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
          },
          c = function(e) {
            return e.clone[0]
          },
          d = function(e) {
            return e.clone[e.clone.length - 1]
          };
        return {
          restrict: "A",
          multiElement: !0,
          transclude: "element",
          priority: 1e3,
          terminal: !0,
          $$tlb: !0,
          compile: function(a, h) {
            var m = h.ngRepeat,
              p = t.createComment(" end ngRepeat: " + m + " "),
              f = m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!f) throw l("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", m);
            var g = f[1],
              v = f[2],
              b = f[3],
              y = f[4];
            if (f = g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !f) throw l("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", g);
            var _ = f[3] || f[1],
              k = f[2];
            if (b && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(b) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(b))) throw l("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", b);
            var w, S, x, A, C = {
              $id: jt
            };
            return y ? w = e(y) : (x = function(e, t) {
                return jt(t)
              }, A = function(e) {
                return e
              }),
              function(e, t, a, h, f) {
                w && (S = function(t, i, a) {
                  return k && (C[k] = t), C[_] = i, C.$index = a, w(e, C)
                });
                var g = ut();
                e.$watchCollection(v, function(a) {
                  var h, v, y, w, C, M, z, T, P, D, E, B, $ = t[0],
                    L = ut();
                  if (b && (e[b] = a), n(a)) P = a, T = S || x;
                  else {
                    T = S || A, P = [];
                    for (var N in a) a.hasOwnProperty(N) && "$" != N.charAt(0) && P.push(N);
                    P.sort()
                  }
                  for (w = P.length, E = new Array(w), h = 0; w > h; h++)
                    if (C = a === P ? h : P[h], M = a[C], z = T(C, M, h), g[z]) D = g[z], delete g[z], L[z] = D, E[h] = D;
                    else {
                      if (L[z]) throw r(E, function(e) {
                        e && e.scope && (g[e.id] = e)
                      }), l("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", m, z, M);
                      E[h] = {
                        id: z,
                        scope: i,
                        clone: i
                      }, L[z] = !0
                    }
                  for (var R in g) {
                    if (D = g[R], B = lt(D.clone), o.leave(B), B[0].parentNode)
                      for (h = 0, v = B.length; v > h; h++) B[h][s] = !0;
                    D.scope.$destroy()
                  }
                  for (h = 0; w > h; h++)
                    if (C = a === P ? h : P[h], M = a[C], D = E[h], D.scope) {
                      y = $;
                      do y = y.nextSibling; while (y && y[s]);
                      c(D) != y && o.move(lt(D.clone), null, Qa($)), $ = d(D), u(D.scope, h, _, M, k, C, w)
                    } else f(function(e, t) {
                      D.scope = t;
                      var i = p.cloneNode(!1);
                      e[e.length++] = i, o.enter(e, null, Qa($)), $ = i, D.clone = e, L[D.id] = D, u(D.scope, h, _, M, k, C, w)
                    });
                  g = L
                })
              }
          }
        }
      }],
      Co = "ng-hide",
      Mo = "ng-hide-animate",
      zo = ["$animate", function(e) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(t, i, a) {
            t.$watch(a.ngShow, function(t) {
              e[t ? "removeClass" : "addClass"](i, Co, {
                tempClasses: Mo
              })
            })
          }
        }
      }],
      To = ["$animate", function(e) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(t, i, a) {
            t.$watch(a.ngHide, function(t) {
              e[t ? "addClass" : "removeClass"](i, Co, {
                tempClasses: Mo
              })
            })
          }
        }
      }],
      Po = Aa(function(e, t, i) {
        e.$watchCollection(i.ngStyle, function(e, i) {
          i && e !== i && r(i, function(e, i) {
            t.css(i, "")
          }), e && t.css(e)
        })
      }),
      Do = ["$animate", function(e) {
        return {
          restrict: "EA",
          require: "ngSwitch",
          controller: ["$scope", function() {
            this.cases = {}
          }],
          link: function(i, a, n, o) {
            var s = n.ngSwitch || n.on,
              l = [],
              u = [],
              c = [],
              d = [],
              h = function(e, t) {
                return function() {
                  e.splice(t, 1)
                }
              };
            i.$watch(s, function(i) {
              var a, n;
              for (a = 0, n = c.length; n > a; ++a) e.cancel(c[a]);
              for (c.length = 0, a = 0, n = d.length; n > a; ++a) {
                var s = lt(u[a].clone);
                d[a].$destroy();
                var m = c[a] = e.leave(s);
                m.then(h(c, a))
              }
              u.length = 0, d.length = 0, (l = o.cases["!" + i] || o.cases["?"]) && r(l, function(i) {
                i.transclude(function(a, n) {
                  d.push(n);
                  var r = i.element;
                  a[a.length++] = t.createComment(" end ngSwitchWhen: ");
                  var o = {
                    clone: a
                  };
                  u.push(o), e.enter(a, r.parent(), r)
                })
              })
            })
          }
        }
      }],
      Eo = Aa({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(e, t, i, a, n) {
          a.cases["!" + i.ngSwitchWhen] = a.cases["!" + i.ngSwitchWhen] || [], a.cases["!" + i.ngSwitchWhen].push({
            transclude: n,
            element: t
          })
        }
      }),
      Bo = Aa({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(e, t, i, a, n) {
          a.cases["?"] = a.cases["?"] || [], a.cases["?"].push({
            transclude: n,
            element: t
          })
        }
      }),
      $o = Aa({
        restrict: "EAC",
        link: function(e, t, i, n, r) {
          if (!r) throw a("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", q(t));
          r(function(e) {
            t.empty(), t.append(e)
          })
        }
      }),
      Lo = ["$templateCache", function(e) {
        return {
          restrict: "E",
          terminal: !0,
          compile: function(t, i) {
            if ("text/ng-template" == i.type) {
              var a = i.id,
                n = t[0].text;
              e.put(a, n)
            }
          }
        }
      }],
      No = a("ngOptions"),
      Ro = g({
        restrict: "A",
        terminal: !0
      }),
      Ko = ["$compile", "$parse", function(e, a) {
        var n = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
          s = {
            $setViewValue: p
          };
        return {
          restrict: "E",
          require: ["select", "?ngModel"],
          controller: ["$element", "$scope", "$attrs", function(e, t, i) {
            var a, n, r = this,
              o = {},
              l = s;
            r.databound = i.ngModel, r.init = function(e, t, i) {
              l = e, a = t, n = i
            }, r.addOption = function(t, i) {
              ot(t, '"option value"'), o[t] = !0, l.$viewValue == t && (e.val(t), n.parent() && n.remove()), i && i[0].hasAttribute("selected") && (i[0].selected = !0)
            }, r.removeOption = function(e) {
              this.hasOption(e) && (delete o[e], l.$viewValue === e && this.renderUnknownOption(e))
            }, r.renderUnknownOption = function(t) {
              var i = "? " + jt(t) + " ?";
              n.val(i), e.prepend(n), e.val(i), n.prop("selected", !0)
            }, r.hasOption = function(e) {
              return o.hasOwnProperty(e)
            }, t.$on("$destroy", function() {
              r.renderUnknownOption = p
            })
          }],
          link: function(s, l, u, c) {
            function d(e, t, i, a) {
              i.$render = function() {
                var e = i.$viewValue;
                a.hasOption(e) ? (A.parent() && A.remove(), t.val(e), "" === e && p.prop("selected", !0)) : v(e) && p ? t.val("") : a.renderUnknownOption(e)
              }, t.on("change", function() {
                e.$apply(function() {
                  A.parent() && A.remove(), i.$setViewValue(t.val())
                })
              })
            }

            function h(e, t, i) {
              var a;
              i.$render = function() {
                var e = new It(i.$viewValue);
                r(t.find("option"), function(t) {
                  t.selected = b(e.get(t.value))
                })
              }, e.$watch(function() {
                K(a, i.$viewValue) || (a = R(i.$viewValue), i.$render())
              }), t.on("change", function() {
                e.$apply(function() {
                  var e = [];
                  r(t.find("option"), function(t) {
                    t.selected && e.push(t.value)
                  }), i.$setViewValue(e)
                })
              })
            }

            function m(t, s, l) {
              function u(e, i, a) {
                return K[M] = a, P && (K[P] = i), e(t, K)
              }

              function c() {
                t.$apply(function() {
                  var e, i = B(t) || [];
                  if (y) e = [], r(s.val(), function(t) {
                    t = L ? N[t] : t, e.push(d(t, i[t]))
                  });
                  else {
                    var a = L ? N[s.val()] : s.val();
                    e = d(a, i[a])
                  }
                  l.$setViewValue(e), v()
                })
              }

              function d(e, t) {
                if ("?" === e) return i;
                if ("" === e) return null;
                var a = T ? T : E;
                return u(a, e, t)
              }

              function h() {
                var e, i = B(t);
                if (i && cn(i)) {
                  e = new Array(i.length);
                  for (var a = 0, n = i.length; n > a; a++) e[a] = u(C, a, i[a]);
                  return e
                }
                if (i) {
                  e = {};
                  for (var r in i) i.hasOwnProperty(r) && (e[r] = u(C, r, i[r]))
                }
                return e
              }

              function m(e) {
                var t;
                if (y)
                  if (L && cn(e)) {
                    t = new It([]);
                    for (var i = 0; i < e.length; i++) t.put(u(L, null, e[i]), !0)
                  } else t = new It(e);
                else L && (e = u(L, null, e));
                return function(i, a) {
                  var n;
                  return n = L ? L : T ? T : E, y ? b(t.remove(u(n, i, a))) : e === u(n, i, a)
                }
              }

              function p() {
                w || (t.$$postDigest(v), w = !0)
              }

              function g(e, t, i) {
                e[t] = e[t] || 0, e[t] += i ? 1 : -1
              }

              function v() {
                w = !1;
                var e, i, a, n, c, d, h, p, v, _, A, M, z, T, E, $, H, j = {
                    "": []
                  },
                  I = [""],
                  F = l.$viewValue,
                  G = B(t) || [],
                  O = P ? o(G) : G,
                  q = {},
                  W = m(F),
                  J = !1;
                for (N = {}, M = 0; _ = O.length, _ > M; M++) h = M, P && (h = O[M], "$" === h.charAt(0)) || (p = G[h], e = u(D, h, p) || "", (i = j[e]) || (i = j[e] = [], I.push(e)), z = W(h, p), J = J || z, $ = u(C, h, p), $ = b($) ? $ : "", H = L ? L(t, K) : P ? O[M] : M, L && (N[H] = h), i.push({
                  id: H,
                  label: $,
                  selected: z
                }));
                for (y || (k || null === F ? j[""].unshift({
                    id: "",
                    label: "",
                    selected: !J
                  }) : J || j[""].unshift({
                    id: "?",
                    label: "",
                    selected: !0
                  })), A = 0, v = I.length; v > A; A++) {
                  for (e = I[A], i = j[e], R.length <= A ? (n = {
                      element: x.clone().attr("label", e),
                      label: i.label
                    }, c = [n], R.push(c), s.append(n.element)) : (c = R[A], n = c[0], n.label != e && n.element.attr("label", n.label = e)), T = null, M = 0, _ = i.length; _ > M; M++) a = i[M], (d = c[M + 1]) ? (T = d.element, d.label !== a.label && (g(q, d.label, !1), g(q, a.label, !0), T.text(d.label = a.label), T.prop("label", d.label)), d.id !== a.id && T.val(d.id = a.id), T[0].selected !== a.selected && (T.prop("selected", d.selected = a.selected), Ya && T.prop("selected", d.selected))) : ("" === a.id && k ? E = k : (E = S.clone()).val(a.id).prop("selected", a.selected).attr("selected", a.selected).prop("label", a.label).text(a.label), c.push(d = {
                    element: E,
                    label: a.label,
                    id: a.id,
                    selected: a.selected
                  }), g(q, a.label, !0), T ? T.after(E) : n.element.append(E), T = E);
                  for (M++; c.length > M;) a = c.pop(), g(q, a.label, !1), a.element.remove()
                }
                for (; R.length > A;) {
                  for (i = R.pop(), M = 1; M < i.length; ++M) g(q, i[M].label, !1);
                  i[0].element.remove()
                }
                r(q, function(e, t) {
                  e > 0 ? f.addOption(t) : 0 > e && f.removeOption(t)
                })
              }
              var A;
              if (!(A = _.match(n))) throw No("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", _, q(s));
              var C = a(A[2] || A[1]),
                M = A[4] || A[6],
                z = / as /.test(A[0]) && A[1],
                T = z ? a(z) : null,
                P = A[5],
                D = a(A[3] || ""),
                E = a(A[2] ? A[1] : M),
                B = a(A[7]),
                $ = A[8],
                L = $ ? a(A[8]) : null,
                N = {},
                R = [
                  [{
                    element: s,
                    label: ""
                  }]
                ],
                K = {};
              k && (e(k)(t), k.removeClass("ng-scope"), k.remove()), s.empty(), s.on("change", c), l.$render = v, t.$watchCollection(B, p), t.$watchCollection(h, p), y && t.$watchCollection(function() {
                return l.$modelValue
              }, p)
            }
            if (c[1]) {
              for (var p, f = c[0], g = c[1], y = u.multiple, _ = u.ngOptions, k = !1, w = !1, S = Qa(t.createElement("option")), x = Qa(t.createElement("optgroup")), A = S.clone(), C = 0, M = l.children(), z = M.length; z > C; C++)
                if ("" === M[C].value) {
                  p = k = M.eq(C);
                  break
                }
              f.init(g, k, A), y && (g.$isEmpty = function(e) {
                return !e || 0 === e.length
              }), _ ? m(s, l, g) : y ? h(s, l, g) : d(s, l, g, f)
            }
          }
        }
      }],
      Ho = ["$interpolate", function(e) {
        var t = {
          addOption: p,
          removeOption: p
        };
        return {
          restrict: "E",
          priority: 100,
          compile: function(i, a) {
            if (v(a.value)) {
              var n = e(i.text(), !0);
              n || a.$set("value", i.text())
            }
            return function(e, i, a) {
              var r = "$selectController",
                o = i.parent(),
                s = o.data(r) || o.parent().data(r);
              s && s.databound || (s = t), n ? e.$watch(n, function(e, t) {
                a.$set("value", e), t !== e && s.removeOption(t), s.addOption(e, i)
              }) : s.addOption(a.value, i), i.on("$destroy", function() {
                s.removeOption(a.value)
              })
            }
          }
        }
      }],
      jo = g({
        restrict: "E",
        terminal: !1
      }),
      Io = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(e, t, i, a) {
            a && (i.required = !0, a.$validators.required = function(e, t) {
              return !i.required || !a.$isEmpty(t)
            }, i.$observe("required", function() {
              a.$validate()
            }))
          }
        }
      },
      Fo = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(e, t, n, r) {
            if (r) {
              var o, s = n.ngPattern || n.pattern;
              n.$observe("pattern", function(e) {
                if (_(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw a("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, q(t));
                o = e || i, r.$validate()
              }), r.$validators.pattern = function(e) {
                return r.$isEmpty(e) || v(o) || o.test(e)
              }
            }
          }
        }
      },
      Go = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(e, t, i, a) {
            if (a) {
              var n = -1;
              i.$observe("maxlength", function(e) {
                var t = h(e);
                n = isNaN(t) ? -1 : t, a.$validate()
              }), a.$validators.maxlength = function(e, t) {
                return 0 > n || a.$isEmpty(t) || t.length <= n
              }
            }
          }
        }
      },
      Oo = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(e, t, i, a) {
            if (a) {
              var n = 0;
              i.$observe("minlength", function(e) {
                n = h(e) || 0, a.$validate()
              }), a.$validators.minlength = function(e, t) {
                return a.$isEmpty(t) || t.length >= n
              }
            }
          }
        }
      };
    return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (at(), mt(sn), void Qa(t).ready(function() {
      Q(t, X)
    }))
  }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),
  function() {
    angular.module("rails", ["ng"])
  }(),
  function() {
    angular.module("rails").factory("RailsInflector", function() {
      function e(e) {
        return angular.isString(e) ? e.replace(/_[\w\d]/g, function(e, t, i) {
          return 0 === t ? e : i.charAt(t + 1).toUpperCase()
        }) : e
      }

      function t(e) {
        return angular.isString(e) ? e.replace(/[A-Z]/g, function(e, t) {
          return 0 === t ? e : "_" + e.toLowerCase()
        }) : e
      }

      function i(e) {
        return e + "s"
      }
      return {
        camelize: e,
        underscore: t,
        pluralize: i
      }
    })
  }(),
  function(e) {
    angular.module("rails").factory("RailsResourceInjector", ["$injector", function(t) {
      function i(i) {
        return i ? angular.isString(i) ? t.get(i) : i : e
      }

      function a(a) {
        return a ? t.instantiate(i(a)) : e
      }

      function n(t) {
        return angular.isObject(t) ? t : t ? a(t) : e
      }
      return {
        createService: a,
        getService: n,
        getDependency: i
      }
    }])
  }(),
  function() {
    angular.module("rails").factory("railsUrlBuilder", ["$interpolate", function(e) {
      return function(t) {
        var i, a = t.url,
          n = t.idAttribute;
        return angular.isFunction(a) || angular.isUndefined(a) ? a : (-1 === a.indexOf(e.startSymbol()) && (a = a + "/" + e.startSymbol() + n + e.endSymbol()), i = e(a), function(e) {
          return a = i(e), "/" === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), a
        })
      }
    }])
  }(),
  function(e) {
    angular.module("rails").provider("railsSerializer", function() {
      var t = {
        underscore: e,
        camelize: e,
        pluralize: e,
        exclusionMatchers: []
      };
      this.underscore = function(e) {
        return t.underscore = e, this
      }, this.camelize = function(e) {
        return t.camelize = e, this
      }, this.pluralize = function(e) {
        return t.pluralize = e, this
      }, this.exclusionMatchers = function(e) {
        return t.exclusionMatchers = e, this
      }, this.$get = ["$injector", "RailsInflector", "RailsResourceInjector", function(i, a, n) {
        function r(i, a) {
          function r() {
            angular.isFunction(i) && (a = i, i = {}), this.exclusions = {}, this.inclusions = {}, this.serializeMappings = {}, this.deserializeMappings = {}, this.customSerializedAttributes = {}, this.preservedAttributes = {}, this.customSerializers = {}, this.nestedResources = {}, this.options = angular.extend({
              excludeByDefault: !1
            }, t, i || {}), a && a.call(this, this)
          }
          return r.prototype.exclude = function() {
            var e = this.exclusions;
            return angular.forEach(arguments, function(t) {
              e[t] = !1
            }), this
          }, r.prototype.only = function() {
            var e = this.inclusions;
            return this.options.excludeByDefault = !0, angular.forEach(arguments, function(t) {
              e[t] = !0
            }), this
          }, r.prototype.nestedAttribute = function() {
            var e = this;
            return angular.forEach(arguments, function(t) {
              e.rename(t, t + "_attributes")
            }), this
          }, r.prototype.resource = function(e, t, i) {
            return this.nestedResources[e] = t, i && this.serializeWith(e, i), this
          }, r.prototype.rename = function(t, i, a) {
            return this.serializeMappings[t] = i, (a || a === e) && (this.deserializeMappings[i] = t), this
          }, r.prototype.add = function(e, t) {
            return this.customSerializedAttributes[e] = t, this
          }, r.prototype.preserve = function(e) {
            return this.preservedAttributes[e] = !0, this
          }, r.prototype.serializeWith = function(e, t) {
            return this.customSerializers[e] = t, this
          }, r.prototype.isExcludedFromSerialization = function(t) {
            if (this.options.excludeByDefault && !this.inclusions.hasOwnProperty(t) || this.exclusions.hasOwnProperty(t)) return !0;
            if (this.options.exclusionMatchers) {
              var i = !1;
              return angular.forEach(this.options.exclusionMatchers, function(a) {
                angular.isString(a) ? i = i || 0 === t.indexOf(a) : angular.isFunction(a) ? i = i || a.call(e, t) : a instanceof RegExp && (i = i || a.test(t))
              }), i
            }
            return !1
          }, r.prototype.getSerializedAttributeName = function(t) {
            var i = this.serializeMappings[t] || t,
              a = this.isExcludedFromSerialization(i),
              n = this.isExcludedFromSerialization(t);
            if (this.options.excludeByDefault) {
              if (a && n) return e
            } else if (a || n) return e;
            return this.underscore(i)
          }, r.prototype.isExcludedFromDeserialization = function() {
            return !1
          }, r.prototype.getDeserializedAttributeName = function(t) {
            var i = this.camelize(t);
            return i = this.deserializeMappings[t] || this.deserializeMappings[i] || i, this.isExcludedFromDeserialization(t) || this.isExcludedFromDeserialization(i) ? e : i
          }, r.prototype.getNestedResource = function(e) {
            return n.getDependency(this.nestedResources[e])
          }, r.prototype.getAttributeSerializer = function(t) {
            var i = this.getNestedResource(t),
              a = this.customSerializers[t];
            return a ? n.createService(a) : i ? i.config.serializer : e
          }, r.prototype.serializeValue = function(e) {
            var t = e,
              i = this;
            if (angular.isArray(e)) t = [], angular.forEach(e, function(e) {
              t.push(i.serializeValue(e))
            });
            else if (angular.isObject(e)) {
              if (angular.isDate(e)) return e;
              t = {}, angular.forEach(e, function(e, a) {
                angular.isFunction(e) || i.serializeAttribute(t, a, e)
              })
            }
            return t
          }, r.prototype.serializeAttribute = function(t, i, a) {
            var n = this.getAttributeSerializer(i),
              r = this.getSerializedAttributeName(i);
            r !== e && (t[r] = n ? n.serialize(a) : this.serializeValue(a))
          }, r.prototype.serialize = function(e) {
            var t = this.serializeValue(e),
              i = this;
            return angular.isObject(t) && angular.forEach(this.customSerializedAttributes, function(a, n) {
              angular.isFunction(a) && (a = a.call(e, e)), i.serializeAttribute(t, n, a)
            }), t
          }, r.prototype.deserializeValue = function(e, t) {
            var i = e,
              a = this;
            if (angular.isArray(e)) i = [], angular.forEach(e, function(e) {
              i.push(a.deserializeValue(e, t))
            });
            else if (angular.isObject(e)) {
              if (angular.isDate(e)) return e;
              i = {}, t && (i = new t.config.resourceConstructor), angular.forEach(e, function(e, t) {
                a.deserializeAttribute(i, t, e)
              })
            }
            return i
          }, r.prototype.deserializeAttribute = function(t, i, a) {
            var n, r, o = this.getDeserializedAttributeName(i);
            o !== e && (n = this.getAttributeSerializer(o), r = this.getNestedResource(o), t[o] = this.preservedAttributes[o] ? a : n ? n.deserialize(a, r) : this.deserializeValue(a, r))
          }, r.prototype.deserialize = function(e, t) {
            return this.deserializeValue(e, t)
          }, r.prototype.pluralize = function(e) {
            return this.options.pluralize ? this.options.pluralize(e) : e
          }, r.prototype.underscore = function(e) {
            return this.options.underscore ? this.options.underscore(e) : e
          }, r.prototype.camelize = function(e) {
            return this.options.camelize ? this.options.camelize(e) : e
          }, r
        }
        return t.underscore = t.underscore || a.underscore, t.camelize = t.camelize || a.camelize, t.pluralize = t.pluralize || a.pluralize, r.defaultOptions = t, r
      }]
    })
  }(),
  function(e) {
    angular.module("rails").factory("railsRootWrapper", function() {
      return {
        wrap: function(e, t) {
          var i = {};
          return i[angular.isArray(e) ? t.config.pluralName : t.config.name] = e, i
        },
        unwrap: function(e, t) {
          return e.data && e.data.hasOwnProperty(t.config.name) ? e.data = e.data[t.config.name] : e.data && e.data.hasOwnProperty(t.config.pluralName) && (e.data = e.data[t.config.pluralName]), e
        }
      }
    }), angular.module("rails").provider("RailsResource", function() {
      var t = {
        rootWrapping: !0,
        updateMethod: "put",
        httpConfig: {},
        defaultParams: e,
        underscoreParams: !0,
        fullResponse: !1,
        extensions: []
      };
      this.rootWrapping = function(e) {
        return t.rootWrapping = e, this
      }, this.updateMethod = function(e) {
        return t.updateMethod = e, this
      }, this.httpConfig = function(e) {
        return t.httpConfig = e, this
      }, this.defaultParams = function(e) {
        return t.defaultParams = e, this
      }, this.underscoreParams = function(e) {
        return t.underscoreParams = e, this
      }, this.fullResponse = function(e) {
        return t.fullResponse = e, this
      }, this.extensions = function() {
        return t.extensions = [], angular.forEach(arguments, function(e) {
          t.extensions = t.extensions.concat(e)
        }), this
      }, this.$get = ["$http", "$q", "railsUrlBuilder", "railsSerializer", "railsRootWrapper", "RailsResourceInjector", function(e, i, a, n, r, o) {
        function s(e) {
          if (e) {
            var t = this.constructor.deserialize({
              data: e
            });
            this.constructor.config.rootWrapping && (t = r.unwrap(t, this.constructor)), angular.extend(this, t.data)
          }
        }

        function l(e, t) {
          return t && ("/" !== t[0] && (e += "/"), e += t), e
        }

        function u(e, t) {
          for (var i, a = 0, n = e.length; n > a; a++) i = e[a], angular.isString(i) && (i = e[a] = o.getDependency(i)), t(i)
        }

        function c(e, t, i, a) {
          var n = ["included", "extended,", "configure"];
          e.$mixins || (e.$mixins = []), angular.isString(i) && (i = o.getDependency(i)), i && -1 === e.$mixins.indexOf(i) && (angular.forEach(i, function(e, i) {
            -1 === n.indexOf(i) && (t[i] = e)
          }), e.$mixins.push(i), angular.isFunction(a) && a(e, i))
        }

        function d(e) {
          var t = [];
          return angular.forEach(e, function(e) {
            e = "RailsResource" + e.charAt(0).toUpperCase() + e.slice(1) + "Mixin", t.push(o.getDependency(e))
          }), t
        }

        function h(e, t) {
          return angular.isUndefined(e) ? t : e
        }

        function m(e, t, i) {
          return function(a) {
            return (e || angular.identity)(a, t, i)
          }
        }

        function p(e, t, a) {
          return function(n) {
            return e ? e(n, t, a) : i.reject(n)
          }
        }
        return s.extendTo = function(e) {
          function t() {
            this.constructor = e
          }
          return angular.forEach(this, function(t, i) {
            e[i] = t
          }), angular.isArray(this.$modules) && (e.$modules = this.$modules.slice(0)), t.prototype = this.prototype, e.prototype = new t, e.__super__ = this.prototype, e
        }, s.extend = function() {
          return angular.forEach(arguments, function(e) {
            c(this, this, e, function(e, t) {
              angular.isFunction(t.extended) && t.extended(e)
            })
          }, this), this
        }, s.include = function() {
          return angular.forEach(arguments, function(e) {
            c(this, this.prototype, e, function(e, t) {
              angular.isFunction(t.included) && t.included(e)
            })
          }, this), this
        }, s.configure = function(e) {
          e = e || {}, this.config && (e = angular.extend({}, this.config, e)), this.config = {}, this.config.idAttribute = e.idAttribute || "id", this.config.url = e.url, this.config.rootWrapping = h(e.rootWrapping, t.rootWrapping), this.config.httpConfig = e.httpConfig || t.httpConfig, this.config.httpConfig.headers = angular.extend({
            Accept: "application/json",
            "Content-Type": "application/json"
          }, this.config.httpConfig.headers || {}), this.config.defaultParams = e.defaultParams || t.defaultParams, this.config.underscoreParams = h(e.underscoreParams, t.underscoreParams), this.config.updateMethod = (e.updateMethod || t.updateMethod).toLowerCase(), this.config.fullResponse = h(e.fullResponse, t.fullResponse), this.config.requestTransformers = e.requestTransformers ? e.requestTransformers.slice(0) : [], this.config.responseInterceptors = e.responseInterceptors ? e.responseInterceptors.slice(0) : [], this.config.afterResponseInterceptors = e.afterResponseInterceptors ? e.afterResponseInterceptors.slice(0) : [], this.config.interceptors = e.interceptors ? e.interceptors.slice(0) : [], this.config.serializer = o.getService(e.serializer || n()), this.config.name = this.config.serializer.underscore(e.name), this.config.name && (this.config.pluralName = this.config.serializer.underscore(e.pluralName || this.config.serializer.pluralize(this.config.name))), this.config.urlBuilder = a(this.config), this.config.resourceConstructor = this, this.extend.apply(this, d((e.extensions || []).concat(t.extensions))), angular.forEach(this.$mixins, function(t) {
            angular.isFunction(t.configure) && t.configure(this.config, e)
          }, this)
        }, s.setUrl = function(e) {
          this.configure({
            url: e
          })
        }, s.buildUrl = function(e) {
          return this.config.urlBuilder(e)
        }, s.addInterceptor = function(e) {
          this.config.interceptors.push(e)
        }, s.intercept = function(e, t) {
          var i = {};
          t = o.getDependency(t), i[e] = function(e, i, a) {
            return t(e, i, a) || e
          }, this.addInterceptor(i)
        }, s.interceptBeforeRequest = function(e) {
          this.intercept("beforeRequest", e)
        }, s.interceptBeforeRequestWrapping = function(e) {
          this.intercept("beforeRequestWrapping", e)
        }, s.interceptRequest = function(e) {
          this.intercept("request", e)
        }, s.interceptBeforeResponse = function(e) {
          this.intercept("beforeResponse", e)
        }, s.interceptBeforeResponseDeserialize = function(e) {
          this.intercept("beforeResponseDeserialize", e)
        }, s.interceptResponse = function(e) {
          this.intercept("response", e)
        }, s.interceptAfterResponse = function(e) {
          this.intercept("afterResponse", e)
        }, s.beforeResponse = function(e) {
          e = o.getDependency(e), this.interceptResponse(function(t, i, a) {
            return e(t.data, i.config.resourceConstructor, a), t
          })
        }, s.afterResponse = function(e) {
          e = o.getDependency(e), this.interceptAfterResponse(function(t, i, a) {
            return e(t, i.config.resourceConstructor, a), t
          })
        }, s.beforeRequest = function(e) {
          e = o.getDependency(e), this.interceptBeforeRequestWrapping(function(t, i) {
            return t.data = e(t.data, i.config.resourceConstructor) || t.data, t
          })
        }, s.serialize = function(e) {
          return e.data && (e.data = this.config.serializer.serialize(e.data)), e
        }, s.deserialize = function(e) {
          return e.data = this.config.serializer.deserialize(e.data, this.config.resourceConstructor), e
        }, s.callResponseInterceptors = function(e, t) {
          var i = this.config;
          return u(i.responseInterceptors, function(a) {
            e.resource = i.resourceConstructor, e.context = t, e = a(e)
          }), e
        }, s.callAfterResponseInterceptors = function(e) {
          var t = this.config;
          return u(t.afterResponseInterceptors, function(i) {
            e.resource = t.resourceConstructor, e = i(e)
          }), e
        }, s.runInterceptorPhase = function(e, t, i) {
          var a = this.config,
            n = [];
          for (u(a.interceptors, function(t) {
              (t[e] || t[e + "Error"]) && n.push(t[e], t[e + "Error"])
            }); n.length;) {
            var r = n.shift(),
              o = n.shift();
            i = i.then(m(r, a.resourceConstructor, t), p(o, a.resourceConstructor, t))
          }
          return i
        }, s.$http = function(t, a, n) {
          var o = angular.extend(angular.copy(this.config), n || {}),
            s = o.resourceConstructor,
            l = i.when(t);
          return o.skipRequestProcessing ? l = e(t) : (l = this.runInterceptorPhase("beforeRequest", a, l).then(function(e) {
            return e = s.serialize(e), u(o.requestTransformers, function(t) {
              e.data = t(e.data, o.resourceConstructor)
            }), e
          }), l = this.runInterceptorPhase("beforeRequestWrapping", a, l), o.rootWrapping && (l = l.then(function(e) {
            return e.data = r.wrap(e.data, o.resourceConstructor), e
          })), l = this.runInterceptorPhase("request", a, l).then(function(t) {
            return e(t)
          })), l = this.runInterceptorPhase("beforeResponse", a, l).then(function(e) {
            return e.originalData = e.data, e
          }), o.rootWrapping && (l = l.then(function(e) {
            return r.unwrap(e, o.resourceConstructor)
          })), l = this.runInterceptorPhase("beforeResponseDeserialize", a, l).then(function(e) {
            return s.deserialize(e)
          }), l = this.callResponseInterceptors(l, a), l = this.runInterceptorPhase("response", a, l).then(function(e) {
            return a && e.hasOwnProperty("data") && angular.isObject(e.data) && angular.extend(a, e.data), o.fullResponse ? e : a || e.data
          }), l = this.callAfterResponseInterceptors(l, a), l = this.runInterceptorPhase("afterResponse", a, l), l.resource = o.resourceConstructor, l.context = a, l
        }, s.processParameters = function(e) {
          var t = {};
          return angular.isObject(e) && this.config.underscoreParams ? (angular.forEach(e, function(e, i) {
            t[this.config.serializer.underscore(i)] = e
          }, this), t) : e
        }, s.getParameters = function(e) {
          var t;
          return this.config.defaultParams && (t = angular.copy(this.config.defaultParams)), angular.isObject(e) && (t = angular.extend(t || {}, e)), this.processParameters(t)
        }, s.getHttpConfig = function(e) {
          var t = this.getParameters(e);
          return t ? angular.extend({
            params: t
          }, this.config.httpConfig) : angular.copy(this.config.httpConfig)
        }, s.$url = s.resourceUrl = function(e, t) {
          return angular.isObject(e) || (e = {
            id: e
          }), l(this.buildUrl(e || {}), t)
        }, s.$get = function(e, t) {
          return this.$http(angular.extend({
            method: "get",
            url: e
          }, this.getHttpConfig(t)))
        }, s.query = function(e, t) {
          return this.$get(this.resourceUrl(t), e)
        }, s.get = function(e, t) {
          return this.$get(this.resourceUrl(e), t)
        }, s.prototype.$url = function(e) {
          return l(this.constructor.resourceUrl(this), e)
        }, s.prototype.$http = function(e, t) {
          return this.constructor.$http(e, this, t)
        }, angular.forEach(["post", "put", "patch"], function(e) {
          s["$" + e] = function(t, i, a) {
            return i = angular.copy(i), this.$http(angular.extend({
              method: e,
              url: t,
              data: i
            }, this.getHttpConfig()), null, a)
          }, s.prototype["$" + e] = function(t) {
            var i = angular.copy(this, {});
            return this.constructor.$http(angular.extend({
              method: e,
              url: t,
              data: i
            }, this.constructor.getHttpConfig()), this)
          }
        }), s.prototype.create = function() {
          return this.$post(this.$url(), this)
        }, s.prototype.update = function() {
          return this["$" + this.constructor.config.updateMethod](this.$url(), this)
        }, s.prototype.get = function() {
          return this.constructor.$http(angular.extend({
            method: "GET",
            url: this.$url()
          }, this.constructor.getHttpConfig()), this)
        }, s.prototype.isNew = function() {
          var e = this.constructor.config.idAttribute;
          return angular.isUndefined(this[e]) || null === this[e]
        }, s.prototype.save = function() {
          return this.isNew() ? this.create() : this.update()
        }, s.$delete = function(e, t) {
          return this.$http(angular.extend({
            method: "delete",
            url: e
          }, this.getHttpConfig(t)))
        }, s.prototype.$delete = function(e, t) {
          return this.constructor.$http(angular.extend({
            method: "delete",
            url: e
          }, this.constructor.getHttpConfig(t)), this)
        }, s.prototype.remove = s.prototype["delete"] = function() {
          return this.$delete(this.$url())
        }, s
      }]
    }), angular.module("rails").factory("railsResourceFactory", ["RailsResource", function(e) {
      return function(t) {
        function i() {
          i.__super__.constructor.apply(this, arguments)
        }
        return e.extendTo(i), i.configure(t), i
      }
    }])
  }(),
  function(e) {
    e.flexslider = function(t, i) {
      var a = e(t);
      a.vars = e.extend({}, e.flexslider.defaults, i);
      var n, r = a.vars.namespace,
        o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        s = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch,
        l = "click touchend MSPointerUp keyup",
        u = "",
        c = "vertical" === a.vars.direction,
        d = a.vars.reverse,
        h = a.vars.itemWidth > 0,
        m = "fade" === a.vars.animation,
        p = "" !== a.vars.asNavFor,
        f = {},
        g = !0;
      e.data(t, "flexslider", a), f = {
        init: function() {
          a.animating = !1, a.currentSlide = parseInt(a.vars.startAt ? a.vars.startAt : 0, 10), isNaN(a.currentSlide) && (a.currentSlide = 0), a.animatingTo = a.currentSlide, a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last, a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" ")), a.slides = e(a.vars.selector, a), a.container = e(a.containerSelector, a), a.count = a.slides.length, a.syncExists = e(a.vars.sync).length > 0, "slide" === a.vars.animation && (a.vars.animation = "swing"), a.prop = c ? "top" : "marginLeft", a.args = {}, a.manualPause = !1, a.stopped = !1, a.started = !1, a.startTimeout = null, a.transitions = !a.vars.video && !m && a.vars.useCSS && function() {
            var e = document.createElement("div"),
              t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
            for (var i in t)
              if (void 0 !== e.style[t[i]]) return a.pfx = t[i].replace("Perspective", "").toLowerCase(), a.prop = "-" + a.pfx + "-transform", !0;
            return !1
          }(), a.ensureAnimationEnd = "", "" !== a.vars.controlsContainer && (a.controlsContainer = e(a.vars.controlsContainer).length > 0 && e(a.vars.controlsContainer)), "" !== a.vars.manualControls && (a.manualControls = e(a.vars.manualControls).length > 0 && e(a.vars.manualControls)), a.vars.randomize && (a.slides.sort(function() {
            return Math.round(Math.random()) - .5
          }), a.container.empty().append(a.slides)), a.doMath(), a.setup("init"), a.vars.controlNav && f.controlNav.setup(), a.vars.directionNav && f.directionNav.setup(), a.vars.keyboard && (1 === e(a.containerSelector).length || a.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
            var t = e.keyCode;
            if (!a.animating && (39 === t || 37 === t)) {
              var i = 39 === t ? a.getTarget("next") : 37 === t ? a.getTarget("prev") : !1;
              a.flexAnimate(i, a.vars.pauseOnAction)
            }
          }), a.vars.mousewheel && a.bind("mousewheel", function(e, t) {
            e.preventDefault();
            var i = a.getTarget(0 > t ? "next" : "prev");
            a.flexAnimate(i, a.vars.pauseOnAction)
          }), a.vars.pausePlay && f.pausePlay.setup(), a.vars.slideshow && a.vars.pauseInvisible && f.pauseInvisible.init(), a.vars.slideshow && (a.vars.pauseOnHover && a.hover(function() {
            a.manualPlay || a.manualPause || a.pause()
          }, function() {
            a.manualPause || a.manualPlay || a.stopped || a.play()
          }), a.vars.pauseInvisible && f.pauseInvisible.isHidden() || (a.vars.initDelay > 0 ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play())), p && f.asNav.setup(), s && a.vars.touch && f.touch(), (!m || m && a.vars.smoothHeight) && e(window).bind("resize orientationchange focus", f.resize), a.find("img").attr("draggable", "false"), setTimeout(function() {
            a.vars.start(a)
          }, 200)
        },
        asNav: {
          setup: function() {
            a.asNav = !0, a.animatingTo = Math.floor(a.currentSlide / a.move), a.currentItem = a.currentSlide, a.slides.removeClass(r + "active-slide").eq(a.currentItem).addClass(r + "active-slide"), o ? (t._slider = a, a.slides.each(function() {
              var t = this;
              t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
              }, !1), t.addEventListener("MSGestureTap", function(t) {
                t.preventDefault();
                var i = e(this),
                  n = i.index();
                e(a.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (a.direction = a.currentItem < n ? "next" : "prev", a.flexAnimate(n, a.vars.pauseOnAction, !1, !0, !0))
              })
            })) : a.slides.on(l, function(t) {
              t.preventDefault();
              var i = e(this),
                n = i.index(),
                o = i.offset().left - e(a).scrollLeft();
              0 >= o && i.hasClass(r + "active-slide") ? a.flexAnimate(a.getTarget("prev"), !0) : e(a.vars.asNavFor).data("flexslider").animating || i.hasClass(r + "active-slide") || (a.direction = a.currentItem < n ? "next" : "prev", a.flexAnimate(n, a.vars.pauseOnAction, !1, !0, !0))
            })
          }
        },
        controlNav: {
          setup: function() {
            a.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
          },
          setupPaging: function() {
            var t, i, n = "thumbnails" === a.vars.controlNav ? "control-thumbs" : "control-paging",
              o = 1;
            if (a.controlNavScaffold = e('<ol class="' + r + "control-nav " + r + n + '"></ol>'), a.pagingCount > 1)
              for (var s = 0; s < a.pagingCount; s++) {
                if (i = a.slides.eq(s), t = "thumbnails" === a.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"/>' : "<a>" + o + "</a>", "thumbnails" === a.vars.controlNav && !0 === a.vars.thumbCaptions) {
                  var c = i.attr("data-thumbcaption");
                  "" != c && void 0 != c && (t += '<span class="' + r + 'caption">' + c + "</span>")
                }
                a.controlNavScaffold.append("<li>" + t + "</li>"), o++
              }
            a.controlsContainer ? e(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), a.controlNavScaffold.delegate("a, img", l, function(t) {
              if (t.preventDefault(), "" === u || u === t.type) {
                var i = e(this),
                  n = a.controlNav.index(i);
                i.hasClass(r + "active") || (a.direction = n > a.currentSlide ? "next" : "prev", a.flexAnimate(n, a.vars.pauseOnAction))
              }
              "" === u && (u = t.type), f.setToClearWatchedEvent()
            })
          },
          setupManual: function() {
            a.controlNav = a.manualControls, f.controlNav.active(), a.controlNav.bind(l, function(t) {
              if (t.preventDefault(), "" === u || u === t.type) {
                var i = e(this),
                  n = a.controlNav.index(i);
                i.hasClass(r + "active") || (a.direction = n > a.currentSlide ? "next" : "prev", a.flexAnimate(n, a.vars.pauseOnAction))
              }
              "" === u && (u = t.type), f.setToClearWatchedEvent()
            })
          },
          set: function() {
            var t = "thumbnails" === a.vars.controlNav ? "img" : "a";
            a.controlNav = e("." + r + "control-nav li " + t, a.controlsContainer ? a.controlsContainer : a)
          },
          active: function() {
            a.controlNav.removeClass(r + "active").eq(a.animatingTo).addClass(r + "active")
          },
          update: function(t, i) {
            a.pagingCount > 1 && "add" === t ? a.controlNavScaffold.append(e("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(i).closest("li").remove(), f.controlNav.set(), a.pagingCount > 1 && a.pagingCount !== a.controlNav.length ? a.update(i, t) : f.controlNav.active()
          }
        },
        directionNav: {
          setup: function() {
            var t = e('<ul class="' + r + 'direction-nav"><li><a class="' + r + 'prev" href="#">' + a.vars.prevText + '</a></li><li><a class="' + r + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");
            a.controlsContainer ? (e(a.controlsContainer).append(t), a.directionNav = e("." + r + "direction-nav li a", a.controlsContainer)) : (a.append(t), a.directionNav = e("." + r + "direction-nav li a", a)), f.directionNav.update(), a.directionNav.bind(l, function(t) {
              t.preventDefault();
              var i;
              ("" === u || u === t.type) && (i = a.getTarget(e(this).hasClass(r + "next") ? "next" : "prev"), a.flexAnimate(i, a.vars.pauseOnAction)), "" === u && (u = t.type), f.setToClearWatchedEvent()
            })
          },
          update: function() {
            var e = r + "disabled";
            1 === a.pagingCount ? a.directionNav.addClass(e).attr("tabindex", "-1") : a.vars.animationLoop ? a.directionNav.removeClass(e).removeAttr("tabindex") : 0 === a.animatingTo ? a.directionNav.removeClass(e).filter("." + r + "prev").addClass(e).attr("tabindex", "-1") : a.animatingTo === a.last ? a.directionNav.removeClass(e).filter("." + r + "next").addClass(e).attr("tabindex", "-1") : a.directionNav.removeClass(e).removeAttr("tabindex")
          }
        },
        pausePlay: {
          setup: function() {
            var t = e('<div class="' + r + 'pauseplay"><a></a></div>');
            a.controlsContainer ? (a.controlsContainer.append(t), a.pausePlay = e("." + r + "pauseplay a", a.controlsContainer)) : (a.append(t), a.pausePlay = e("." + r + "pauseplay a", a)), f.pausePlay.update(a.vars.slideshow ? r + "pause" : r + "play"), a.pausePlay.bind(l, function(t) {
              t.preventDefault(), ("" === u || u === t.type) && (e(this).hasClass(r + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())), "" === u && (u = t.type), f.setToClearWatchedEvent()
            })
          },
          update: function(e) {
            "play" === e ? a.pausePlay.removeClass(r + "pause").addClass(r + "play").html(a.vars.playText) : a.pausePlay.removeClass(r + "play").addClass(r + "pause").html(a.vars.pauseText)
          }
        },
        touch: function() {
          function e(e) {
            a.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (a.pause(), g = c ? a.h : a.w, b = Number(new Date), _ = e.touches[0].pageX, k = e.touches[0].pageY, f = h && d && a.animatingTo === a.last ? 0 : h && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * g : (a.currentSlide + a.cloneOffset) * g, u = c ? k : _, p = c ? _ : k, t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", n, !1))
          }

          function i(e) {
            _ = e.touches[0].pageX, k = e.touches[0].pageY, v = c ? u - k : u - _, y = c ? Math.abs(v) < Math.abs(_ - p) : Math.abs(v) < Math.abs(k - p);
            var t = 500;
            (!y || Number(new Date) - b > t) && (e.preventDefault(), !m && a.transitions && (a.vars.animationLoop || (v /= 0 === a.currentSlide && 0 > v || a.currentSlide === a.last && v > 0 ? Math.abs(v) / g + 2 : 1), a.setProps(f + v, "setTouch")))
          }

          function n() {
            if (t.removeEventListener("touchmove", i, !1), a.animatingTo === a.currentSlide && !y && null !== v) {
              var e = d ? -v : v,
                r = a.getTarget(e > 0 ? "next" : "prev");
              a.canAdvance(r) && (Number(new Date) - b < 550 && Math.abs(e) > 50 || Math.abs(e) > g / 2) ? a.flexAnimate(r, a.vars.pauseOnAction) : m || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0)
            }
            t.removeEventListener("touchend", n, !1), u = null, p = null, v = null, f = null
          }

          function r(e) {
            e.stopPropagation(), a.animating ? e.preventDefault() : (a.pause(), t._gesture.addPointer(e.pointerId), w = 0, g = c ? a.h : a.w, b = Number(new Date), f = h && d && a.animatingTo === a.last ? 0 : h && d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : d ? (a.last - a.currentSlide + a.cloneOffset) * g : (a.currentSlide + a.cloneOffset) * g)
          }

          function s(e) {
            e.stopPropagation();
            var i = e.target._slider;
            if (i) {
              var a = -e.translationX,
                n = -e.translationY;
              return w += c ? n : a, v = w, y = c ? Math.abs(w) < Math.abs(-a) : Math.abs(w) < Math.abs(-n), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                t._gesture.stop()
              }) : void((!y || Number(new Date) - b > 500) && (e.preventDefault(), !m && i.transitions && (i.vars.animationLoop || (v = w / (0 === i.currentSlide && 0 > w || i.currentSlide === i.last && w > 0 ? Math.abs(w) / g + 2 : 1)), i.setProps(f + v, "setTouch"))))
            }
          }

          function l(e) {
            e.stopPropagation();
            var t = e.target._slider;
            if (t) {
              if (t.animatingTo === t.currentSlide && !y && null !== v) {
                var i = d ? -v : v,
                  a = t.getTarget(i > 0 ? "next" : "prev");
                t.canAdvance(a) && (Number(new Date) - b < 550 && Math.abs(i) > 50 || Math.abs(i) > g / 2) ? t.flexAnimate(a, t.vars.pauseOnAction) : m || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
              }
              u = null, p = null, v = null, f = null, w = 0
            }
          }
          var u, p, f, g, v, b, y = !1,
            _ = 0,
            k = 0,
            w = 0;
          o ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", r, !1), t._slider = a, t.addEventListener("MSGestureChange", s, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
        },
        resize: function() {
          !a.animating && a.is(":visible") && (h || a.doMath(), m ? f.smoothHeight() : h ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : c ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (a.vars.smoothHeight && f.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
        },
        smoothHeight: function(e) {
          if (!c || m) {
            var t = m ? a : a.viewport;
            e ? t.animate({
              height: a.slides.eq(a.animatingTo).height()
            }, e) : t.height(a.slides.eq(a.animatingTo).height())
          }
        },
        sync: function(t) {
          var i = e(a.vars.sync).data("flexslider"),
            n = a.animatingTo;
          switch (t) {
            case "animate":
              i.flexAnimate(n, a.vars.pauseOnAction, !1, !0);
              break;
            case "play":
              i.playing || i.asNav || i.play();
              break;
            case "pause":
              i.pause()
          }
        },
        uniqueID: function(t) {
          return t.filter("[id]").add(t.find("[id]")).each(function() {
            var t = e(this);
            t.attr("id", t.attr("id") + "_clone")
          }), t
        },
        pauseInvisible: {
          visProp: null,
          init: function() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (f.pauseInvisible.visProp = e[t] + "Hidden");
            if (f.pauseInvisible.visProp) {
              var i = f.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
              document.addEventListener(i, function() {
                f.pauseInvisible.isHidden() ? a.startTimeout ? clearTimeout(a.startTimeout) : a.pause() : a.started ? a.play() : a.vars.initDelay > 0 ? setTimeout(a.play, a.vars.initDelay) : a.play()
              })
            }
          },
          isHidden: function() {
            return document[f.pauseInvisible.visProp] || !1
          }
        },
        setToClearWatchedEvent: function() {
          clearTimeout(n), n = setTimeout(function() {
            u = ""
          }, 3e3)
        }
      }, a.flexAnimate = function(t, i, n, o, l) {
        if (a.vars.animationLoop || t === a.currentSlide || (a.direction = t > a.currentSlide ? "next" : "prev"), p && 1 === a.pagingCount && (a.direction = a.currentItem < t ? "next" : "prev"), !a.animating && (a.canAdvance(t, l) || n) && a.is(":visible")) {
          if (p && o) {
            var u = e(a.vars.asNavFor).data("flexslider");
            if (a.atEnd = 0 === t || t === a.count - 1, u.flexAnimate(t, !0, !1, !0, l), a.direction = a.currentItem < t ? "next" : "prev", u.direction = a.direction, Math.ceil((t + 1) / a.visible) - 1 === a.currentSlide || 0 === t) return a.currentItem = t, a.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), !1;
            a.currentItem = t, a.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), t = Math.floor(t / a.visible)
          }
          if (a.animating = !0, a.animatingTo = t, i && a.pause(), a.vars.before(a), a.syncExists && !l && f.sync("animate"), a.vars.controlNav && f.controlNav.active(), h || a.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), a.atEnd = 0 === t || t === a.last, a.vars.directionNav && f.directionNav.update(), t === a.last && (a.vars.end(a), a.vars.animationLoop || a.pause()), m) s ? (a.slides.eq(a.currentSlide).css({
            opacity: 0,
            zIndex: 1
          }), a.slides.eq(t).css({
            opacity: 1,
            zIndex: 2
          }), a.wrapup(y)) : (a.slides.eq(a.currentSlide).css({
            zIndex: 1
          }).animate({
            opacity: 0
          }, a.vars.animationSpeed, a.vars.easing), a.slides.eq(t).css({
            zIndex: 2
          }).animate({
            opacity: 1
          }, a.vars.animationSpeed, a.vars.easing, a.wrapup));
          else {
            var g, v, b, y = c ? a.slides.filter(":first").height() : a.computedW;
            h ? (g = a.vars.itemMargin, b = (a.itemW + g) * a.move * a.animatingTo, v = b > a.limit && 1 !== a.visible ? a.limit : b) : v = 0 === a.currentSlide && t === a.count - 1 && a.vars.animationLoop && "next" !== a.direction ? d ? (a.count + a.cloneOffset) * y : 0 : a.currentSlide === a.last && 0 === t && a.vars.animationLoop && "prev" !== a.direction ? d ? 0 : (a.count + 1) * y : d ? (a.count - 1 - t + a.cloneOffset) * y : (t + a.cloneOffset) * y, a.setProps(v, "", a.vars.animationSpeed), a.transitions ? (a.vars.animationLoop && a.atEnd || (a.animating = !1, a.currentSlide = a.animatingTo), a.container.unbind("webkitTransitionEnd transitionend"), a.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(a.ensureAnimationEnd), a.wrapup(y)
            }), clearTimeout(a.ensureAnimationEnd), a.ensureAnimationEnd = setTimeout(function() {
              a.wrapup(y)
            }, a.vars.animationSpeed + 100)) : a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function() {
              a.wrapup(y)
            })
          }
          a.vars.smoothHeight && f.smoothHeight(a.vars.animationSpeed)
        }
      }, a.wrapup = function(e) {
        m || h || (0 === a.currentSlide && a.animatingTo === a.last && a.vars.animationLoop ? a.setProps(e, "jumpEnd") : a.currentSlide === a.last && 0 === a.animatingTo && a.vars.animationLoop && a.setProps(e, "jumpStart")), a.animating = !1, a.currentSlide = a.animatingTo, a.vars.after(a)
      }, a.animateSlides = function() {
        !a.animating && g && a.flexAnimate(a.getTarget("next"))
      }, a.pause = function() {
        clearInterval(a.animatedSlides), a.animatedSlides = null, a.playing = !1, a.vars.pausePlay && f.pausePlay.update("play"), a.syncExists && f.sync("pause")
      }, a.play = function() {
        a.playing && clearInterval(a.animatedSlides), a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed), a.started = a.playing = !0, a.vars.pausePlay && f.pausePlay.update("pause"), a.syncExists && f.sync("play")
      }, a.stop = function() {
        a.pause(), a.stopped = !0
      }, a.canAdvance = function(e, t) {
        var i = p ? a.pagingCount - 1 : a.last;
        return t ? !0 : p && a.currentItem === a.count - 1 && 0 === e && "prev" === a.direction ? !0 : p && 0 === a.currentItem && e === a.pagingCount - 1 && "next" !== a.direction ? !1 : e !== a.currentSlide || p ? a.vars.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && e === i && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === i && 0 === e && "next" === a.direction ? !1 : !0 : !1
      }, a.getTarget = function(e) {
        return a.direction = e, "next" === e ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1
      }, a.setProps = function(e, t, i) {
        var n = function() {
          var i = e ? e : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo,
            n = function() {
              if (h) return "setTouch" === t ? e : d && a.animatingTo === a.last ? 0 : d ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : i;
              switch (t) {
                case "setTotal":
                  return d ? (a.count - 1 - a.currentSlide + a.cloneOffset) * e : (a.currentSlide + a.cloneOffset) * e;
                case "setTouch":
                  return d ? e : e;
                case "jumpEnd":
                  return d ? e : a.count * e;
                case "jumpStart":
                  return d ? a.count * e : e;
                default:
                  return e
              }
            }();
          return -1 * n + "px"
        }();
        a.transitions && (n = c ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", i), a.container.css("transition-duration", i)), a.args[a.prop] = n, (a.transitions || void 0 === i) && a.container.css(a.args), a.container.css("transform", n)
      }, a.setup = function(t) {
        if (m) a.slides.css({
          width: "100%",
          "float": "left",
          marginRight: "-100%",
          position: "relative"
        }), "init" === t && (s ? a.slides.css({
          opacity: 0,
          display: "block",
          webkitTransition: "opacity " + a.vars.animationSpeed / 1e3 + "s ease",
          zIndex: 1
        }).eq(a.currentSlide).css({
          opacity: 1,
          zIndex: 2
        }) : 0 == a.vars.fadeFirstSlide ? a.slides.css({
          opacity: 0,
          display: "block",
          zIndex: 1
        }).eq(a.currentSlide).css({
          zIndex: 2
        }).css({
          opacity: 1
        }) : a.slides.css({
          opacity: 0,
          display: "block",
          zIndex: 1
        }).eq(a.currentSlide).css({
          zIndex: 2
        }).animate({
          opacity: 1
        }, a.vars.animationSpeed, a.vars.easing)), a.vars.smoothHeight && f.smoothHeight();
        else {
          var i, n;
          "init" === t && (a.viewport = e('<div class="' + r + 'viewport"></div>').css({
            overflow: "hidden",
            position: "relative"
          }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, d && (n = e.makeArray(a.slides).reverse(), a.slides = e(n), a.container.empty().append(a.slides))), a.vars.animationLoop && !h && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== t && a.container.find(".clone").remove(), a.container.append(f.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), a.newSlides = e(a.vars.selector, a), i = d ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset, c && !h ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
            a.newSlides.css({
              display: "block"
            }), a.doMath(), a.viewport.height(a.h), a.setProps(i * a.h, "init")
          }, "init" === t ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(i * a.computedW, "init"), setTimeout(function() {
            a.doMath(), a.newSlides.css({
              width: a.computedW,
              "float": "left",
              display: "block"
            }), a.vars.smoothHeight && f.smoothHeight()
          }, "init" === t ? 100 : 0))
        }
        h || a.slides.removeClass(r + "active-slide").eq(a.currentSlide).addClass(r + "active-slide"), a.vars.init(a)
      }, a.doMath = function() {
        var e = a.slides.first(),
          t = a.vars.itemMargin,
          i = a.vars.minItems,
          n = a.vars.maxItems;
        a.w = void 0 === a.viewport ? a.width() : a.viewport.width(), a.h = e.height(), a.boxPadding = e.outerWidth() - e.width(), h ? (a.itemT = a.vars.itemWidth + t, a.minW = i ? i * a.itemT : a.w, a.maxW = n ? n * a.itemT - t : a.w, a.itemW = a.minW > a.w ? (a.w - t * (i - 1)) / i : a.maxW < a.w ? (a.w - t * (n - 1)) / n : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth, a.visible = Math.floor(a.w / a.itemW), a.move = a.vars.move > 0 && a.vars.move < a.visible ? a.vars.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + t * (a.count - 1) : (a.itemW + t) * a.count - a.w - t) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1), a.computedW = a.itemW - a.boxPadding
      }, a.update = function(e, t) {
        a.doMath(), h || (e < a.currentSlide ? a.currentSlide += 1 : e <= a.currentSlide && 0 !== e && (a.currentSlide -= 1), a.animatingTo = a.currentSlide), a.vars.controlNav && !a.manualControls && ("add" === t && !h || a.pagingCount > a.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !h || a.pagingCount < a.controlNav.length) && (h && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), f.controlNav.update("remove", a.last))), a.vars.directionNav && f.directionNav.update()
      }, a.addSlide = function(t, i) {
        var n = e(t);
        a.count += 1, a.last = a.count - 1, c && d ? void 0 !== i ? a.slides.eq(a.count - i).after(n) : a.container.prepend(n) : void 0 !== i ? a.slides.eq(i).before(n) : a.container.append(n), a.update(i, "add"), a.slides = e(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.added(a)
      }, a.removeSlide = function(t) {
        var i = isNaN(t) ? a.slides.index(e(t)) : t;
        a.count -= 1, a.last = a.count - 1, isNaN(t) ? e(t, a.slides).remove() : c && d ? a.slides.eq(a.last).remove() : a.slides.eq(t).remove(), a.doMath(), a.update(i, "remove"), a.slides = e(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.removed(a)
      }, f.init()
    }, e(window).blur(function() {
      focused = !1
    }).focus(function() {
      focused = !0
    }), e.flexslider.defaults = {
      namespace: "flex-",
      selector: ".slides > li",
      animation: "fade",
      easing: "swing",
      direction: "horizontal",
      reverse: !1,
      animationLoop: !0,
      smoothHeight: !1,
      startAt: 0,
      slideshow: !0,
      slideshowSpeed: 7e3,
      animationSpeed: 600,
      initDelay: 0,
      randomize: !1,
      fadeFirstSlide: !0,
      thumbCaptions: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      pauseInvisible: !0,
      useCSS: !0,
      touch: !0,
      video: !1,
      controlNav: !0,
      directionNav: !0,
      prevText: "Previous",
      nextText: "Next",
      keyboard: !0,
      multipleKeyboard: !1,
      mousewheel: !1,
      pausePlay: !1,
      pauseText: "Pause",
      playText: "Play",
      controlsContainer: "",
      manualControls: "",
      sync: "",
      asNavFor: "",
      itemWidth: 0,
      itemMargin: 0,
      minItems: 1,
      maxItems: 0,
      move: 0,
      allowOneSlide: !0,
      start: function() {},
      before: function() {},
      after: function() {},
      end: function() {},
      added: function() {},
      removed: function() {},
      init: function() {}
    }, e.fn.flexslider = function(t) {
      if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
        var i = e(this),
          a = t.selector ? t.selector : ".slides > li",
          n = i.find(a);
        1 === n.length && t.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), t.start && t.start(i)) : void 0 === i.data("flexslider") && new e.flexslider(this, t)
      });
      var i = e(this).data("flexslider");
      switch (t) {
        case "play":
          i.play();
          break;
        case "pause":
          i.pause();
          break;
        case "stop":
          i.stop();
          break;
        case "next":
          i.flexAnimate(i.getTarget("next"), !0);
          break;
        case "prev":
        case "previous":
          i.flexAnimate(i.getTarget("prev"), !0);
          break;
        default:
          "number" == typeof t && i.flexAnimate(t, !0)
      }
    }
  }(jQuery), angular.module("ui.date", []).constant("uiDateConfig", {}).directive("uiDate", ["uiDateConfig", "uiDateConverter", function(e, t) {
    "use strict";
    var i;
    return i = {}, angular.extend(i, e), {
      require: "?ngModel",
      link: function(i, a, n, r) {
        var o = function() {
            return angular.extend({}, e, i.$eval(n.uiDate))
          },
          s = function() {
            var e = !1,
              s = o();
            if (r) {
              var l = s.onSelect || angular.noop;
              s.onSelect = function(t, n) {
                i.$apply(function() {
                  e = !0, r.$setViewValue(a.datepicker("getDate")), l(t, n)
                })
              }, s.beforeShow = function() {
                e = !0
              }, s.onClose = function() {
                e = !1
              }, a.off("blur.datepicker").on("blur.datepicker", function() {
                e || i.$apply(function() {
                  a.datepicker("setDate", a.datepicker("getDate")), r.$setViewValue(a.datepicker("getDate"))
                })
              }), r.$render = function() {
                var e = r.$modelValue;
                if (angular.isDefined(e) && null !== e && !angular.isDate(e)) {
                  if (!angular.isString(r.$modelValue)) throw new Error("ng-Model value must be a Date, or a String object with a date formatter - currently it is a " + typeof e + " - use ui-date-format to convert it from a string");
                  e = t.stringToDate(n.uiDateFormat, r.$modelValue)
                }
                a.datepicker("setDate", e)
              }
            }
            a.datepicker("destroy"), a.datepicker(s), r && r.$render()
          };
        i.$watch(o, s, !0)
      }
    }
  }]).factory("uiDateConverter", ["uiDateFormatConfig", function(e) {
    function t(t, i) {
      return t = t || e, i ? t ? jQuery.datepicker.formatDate(t, i) : i.toISOString() : null
    }

    function i(t, i) {
      if (t = t || e, angular.isString(i)) {
        if (t) return jQuery.datepicker.parseDate(t, i);
        var a = new Date(i);
        return isNaN(a.getTime()) ? null : a
      }
      return null
    }
    return {
      stringToDate: i,
      dateToString: t
    }
  }]).constant("uiDateFormatConfig", "").directive("uiDateFormat", ["uiDateConverter", function(e) {
    var t = {
      require: "ngModel",
      link: function(t, i, a, n) {
        var r = a.uiDateFormat;
        n.$formatters.unshift(function(t) {
          return e.stringToDate(r, t)
        }), n.$parsers.push(function(t) {
          return e.dateToString(r, t)
        })
      }
    };
    return t
  }]),
  function() {
    "use strict";
    angular.module("angular-flexslider", []).directive("flexSlider", ["$parse", "$timeout", function(e, t) {
      return {
        restrict: "AE",
        scope: !1,
        replace: !0,
        transclude: !0,
        template: '<div class="flexslider-container"></div>',
        compile: function(i, a, n) {
          return function(i, r) {
            var o, s, l, u, c, d, h, m, p;
            return d = (a.slide || a.flexSlide).match(/^\s*(.+)\s+in\s+(.*?)(?:\s+track\s+by\s+(.+?))?\s*$/), c = d[1], s = d[2], p = e(angular.isDefined(d[3]) ? d[3] : "" + c), l = null, m = {}, u = function(e, t) {
              var a;
              return a = {}, a[c] = e, a.$index = t, p(i, a)
            }, o = function(e, t, a) {
              var r, o;
              if (o = u(e, t), null != m[o]) throw "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys.";
              return r = i.$new(), r[c] = e, r.$index = t, n(r, function(t) {
                var i;
                return i = {
                  collectionItem: e,
                  childScope: r,
                  element: t
                }, m[o] = i, "function" == typeof a ? a(i) : void 0
              })
            }, h = function(e, t) {
              var i, a;
              return a = u(e, t), i = m[a], null != i ? (delete m[a], i.childScope.$destroy(), i) : void 0
            }, i.$watchCollection(s, function(n) {
              var s, c, d, p, f, g, v, b, y, _, k, w, S, x, A, C, M, z, T, P, D, E, B;
              if (null != n ? n.length : void 0) {
                if (null != l) {
                  for (_ = l.data("flexslider"), p = Object.keys(m).length, null == n && (n = []), A = {}, g = C = 0, P = n.length; P > C; g = ++C) d = n[g], A[u(d, g)] = d;
                  if (S = function() {
                      var e, t, i;
                      for (i = [], g = e = 0, t = n.length; t > e; g = ++e) d = n[g], null == m[u(d, g)] && i.push({
                        value: d,
                        index: g
                      });
                      return i
                    }(), x = function() {
                      var e;
                      e = [];
                      for (w in m) g = m[w], null == A[w] && e.push(g.collectionItem);
                      return e
                    }(), 1 === S.length && 0 === x.length || 0 === S.length) {
                    for (M = 0, D = x.length; D > M; M++) f = x[M], f = h(f, n.indexOf(f)), _.removeSlide(f.element);
                    for (z = 0, E = S.length; E > z; z++) f = S[z], v = f.index, o(f.value, v, function(e) {
                      return v === p && (v = void 0), i.$evalAsync(function() {
                        return _.addSlide(e.element, v)
                      })
                    });
                    return
                  }
                }
                for (m = {}, null != l && l.remove(), k = angular.element('<ul class="slides"></ul>'), l = angular.element('<div class="flexslider"></div>'), l.append(k), r.append(l), g = T = 0, B = n.length; B > T; g = ++T) d = n[g], o(d, g, function(e) {
                  return k.append(e.element)
                });
                y = {};
                for (s in a) c = a[s], 0 !== s.indexOf("$") && (y[s] = isNaN(b = parseInt(c)) ? "false" !== c && "true" !== c ? "start" !== s && "before" !== s && "after" !== s && "end" !== s && "added" !== s && "removed" !== s ? c : function(t) {
                  var a;
                  return a = e(t),
                    function(e) {
                      return i.$apply(function() {
                        return a(i, {
                          $slider: {
                            element: e
                          }
                        })
                      })
                    }
                }(c) : "true" === c : b);
                return t(function() {
                  return l.flexslider(y)
                }, 0)
              }
            })
          }
        }
      }
    }])
  }.call(this),
  function() {
    ! function(e) {
      var t, i, a;
      i = function(e) {
        this.el = e, this.overlay = this.el.querySelector(".nl-overlay"), this.fields = [], this.fldOpen = -1, this._init()
      }, t = function(e, t, i, a) {
        this.form = e, this.elOriginal = t, this.pos = a, this.type = i, this._create(), this._initEvents()
      }, a = e.document, String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
      }), i.prototype = {
        _init: function() {
          var i;
          i = this, Array.prototype.slice.call(this.el.querySelectorAll("select")).forEach(function(e) {
            i.fldOpen++, i.fields.push(new t(i, e, "dropdown", i.fldOpen))
          }), Array.prototype.slice.call(this.el.querySelectorAll('input:not([type="hidden"]):not([type=submit])')).forEach(function(e) {
            i.fldOpen++, i.fields.push(new t(i, e, "input", i.fldOpen))
          }), this.overlay.addEventListener("click", function() {
            i._closeFlds()
          }), this.overlay.addEventListener("touchstart", function() {
            i._closeFlds()
          }), e.setTimeout(function() {
            return $("[ui-date]").datepicker()
          }, 25)
        },
        _closeFlds: function() {
          -1 !== this.fldOpen && this.fields[this.fldOpen].close()
        },
        redraw: function() {
          var t;
          return $(this.el).find(".nl-field").remove(), t = this.overlay.cloneNode(!0), this.overlay.parentNode.replaceChild(t, this.overlay), e.setTimeout(function() {
            return $("[ui-date]").datepicker()
          }, 25)
        }
      }, t.prototype = {
        _create: function() {
          "dropdown" === this.type ? this._createDropDown() : "input" === this.type && this._createInput()
        },
        _createDropDown: function() {
          var e, t;
          t = this, this.fld = a.createElement("div"), this.fld.className = "nl-field nl-dd", this.toggle = a.createElement("a"), this.toggle.innerHTML = this.elOriginal.options[this.elOriginal.selectedIndex].innerHTML, this.toggle.className = "nl-field-toggle", this.title = a.createElement("span"), this.title.className = "nl-ti-example", this.title.innerHTML = this.elOriginal.getAttribute("data-subline"), this.optionsContainer = a.createElement("div"), this.optionsContainer.className = "wrap", this.optionsList = a.createElement("ul"), this.optionsList.className = this.elOriginal.getAttribute("class"), e = "", e += this.title.outerHTML, Array.prototype.slice.call(this.elOriginal.querySelectorAll("option")).forEach(function(i, a) {
            e += t.elOriginal.selectedIndex === a ? '<li class="nl-dd-checked">' + i.innerHTML + "</li>" : "<li>" + i.innerHTML + "</li>", t.elOriginal.selectedIndex === a && (t.selectedIdx = a)
          }), this.optionsList.innerHTML = e, this.fld.appendChild(this.toggle), this.fld.appendChild(this.optionsContainer), this.optionsContainer.appendChild(this.optionsList), this.elOriginal.parentNode.insertBefore(this.fld, this.elOriginal), this.elOriginal.style.display = "none"
        },
        _createInput: function() {
          var e;
          e = this, this.fld = a.createElement("div"), this.fld.className = "nl-field nl-ti-text", this.toggle = a.createElement("a"), this.toggle.innerHTML = this.elOriginal.getAttribute(this.elOriginal.getAttribute("value") ? "value" : "placeholder"), this.toggle.className = "nl-field-toggle", this.optionsContainer = a.createElement("div"), this.optionsContainer.className = "wrap", this.optionsList = a.createElement("ul"), this.getinput = a.createElement("input"), this.getinput.setAttribute("type", this.elOriginal.getAttribute("type") ? this.elOriginal.getAttribute("type") : ""), this.getinput.setAttribute("placeholder", this.elOriginal.getAttribute("placeholder")), this.getinput.setAttribute("value", this.elOriginal.getAttribute("value") ? this.elOriginal.getAttribute("value") : ""), this.elOriginal.hasAttribute("ui-date") && this.getinput.setAttribute("ui-date", ""), this.getinputWrapper = a.createElement("li"), this.getinputWrapper.className = "nl-ti-input", this.inputsubmit = a.createElement("button"), this.inputsubmit.className = "nl-field-go", this.inputsubmit.innerHTML = "Select", this.getinputWrapper.appendChild(this.getinput), this.getinputWrapper.appendChild(this.inputsubmit), this.example = a.createElement("li"), this.example.className = "nl-ti-example", this.example.innerHTML = this.elOriginal.getAttribute("data-subline"), this.optionsList.appendChild(this.example), this.optionsList.appendChild(this.getinputWrapper), this.fld.appendChild(this.toggle), this.fld.appendChild(this.optionsContainer), this.optionsContainer.appendChild(this.optionsList), this.elOriginal.parentNode.insertBefore(this.fld, this.elOriginal), this.elOriginal.style.display = "none"
        },
        _initEvents: function() {
          var e, t;
          t = this, this.toggle.addEventListener("click", function(e) {
            e.preventDefault(), e.stopPropagation(), t._open()
          }), this.toggle.addEventListener("touchstart", function(e) {
            e.preventDefault(), e.stopPropagation(), t._open()
          }), "dropdown" === this.type ? (e = Array.prototype.slice.call(this.optionsList.querySelectorAll("li")), e.forEach(function(i) {
            i.addEventListener("click", function(a) {
              a.preventDefault(), t.close(i, e.indexOf(i))
            }), i.addEventListener("touchstart", function(a) {
              a.preventDefault(), t.close(i, e.indexOf(i))
            })
          })) : "input" === this.type && (this.getinput.addEventListener("keydown", function(e) {
            13 === e.keyCode && t.close()
          }), this.inputsubmit.addEventListener("click", function(e) {
            e.preventDefault(), t.close()
          }), this.inputsubmit.addEventListener("touchstart", function(e) {
            e.preventDefault(), t.close()
          }))
        },
        _open: function() {
          var e;
          return this.open ? !1 : (this.open = !0, this.form.fldOpen = this.pos, e = this, this.fld.className += " nl-field-open", void $(this.fld).find("input[type=text]").focus())
        },
        close: function(e, t) {
          var i, a;
          return this.open ? (this.open = !1, this.form.fldOpen = -1, this.fld.className = this.fld.className.replace(/\b nl-field-open\b/, ""), void("dropdown" === this.type ? e && (a = this.optionsList.children[this.selectedIdx + 1], a.className = "", e.className = "nl-dd-checked", this.toggle.innerHTML = e.innerHTML, this.selectedIdx = t, i = this.elOriginal.children[this.selectedIdx].value, $(this.elOriginal).val(i).change()) : "input" === this.type && (this.getinput.blur(), this.toggle.innerHTML = "" !== this.getinput.value.trim() ? this.getinput.value : this.getinput.getAttribute("placeholder"), this.elOriginal.value = this.getinput.value, this.elOriginal.setAttribute("value", this.getinput.value), $(this.elOriginal).trigger("input")))) : !1
        }
      }, e.NLForm = i
    }(window)
  }.call(this),
  function(e) {
    function t(e, t, i) {
      if ((e[t] || e[i]) && e[t] === e[i]) throw Error("(Link) '" + t + "' can't match '" + i + "'.'")
    }

    function i(i) {
      if (void 0 === i && (i = {}), "object" != typeof i) throw Error("(Format) 'format' option must be an object.");
      var a = {};
      e(n).each(function(e, t) {
        if (void 0 === i[t]) a[t] = r[e];
        else {
          if (typeof i[t] != typeof r[e]) throw Error("(Format) 'format." + t + "' must be a " + typeof r[e] + ".");
          if ("decimals" === t && (0 > i[t] || 7 < i[t])) throw Error("(Format) 'format.decimals' option must be between 0 and 7.");
          a[t] = i[t]
        }
      }), t(a, "mark", "thousand"), t(a, "prefix", "negative"), t(a, "prefix", "negativeBefore"), this.r = a
    }

    function a(t, i) {
      return "object" != typeof t && e.error("(Link) Initialize with an object."), new a.prototype.p(t.target || function() {}, t.method, t.format || {}, i)
    }
    var n = "decimals mark thousand prefix postfix encoder decoder negative negativeBefore to from".split(" "),
      r = [2, ".", "", "", "", function(e) {
        return e
      }, function(e) {
        return e
      }, "-", "", function(e) {
        return e
      }, function(e) {
        return e
      }];
    i.prototype.a = function(e) {
      return this.r[e]
    }, i.prototype.L = function(e) {
      function t(e) {
        return e.split("").reverse().join("")
      }
      e = this.a("encoder")(e);
      var i = this.a("decimals"),
        a = "",
        n = "",
        r = "",
        o = "";
      return 0 === parseFloat(e.toFixed(i)) && (e = "0"), 0 > e && (a = this.a("negative"), n = this.a("negativeBefore")), e = Math.abs(e).toFixed(i).toString(), e = e.split("."), this.a("thousand") ? (r = t(e[0]).match(/.{1,3}/g), r = t(r.join(t(this.a("thousand"))))) : r = e[0], this.a("mark") && 1 < e.length && (o = this.a("mark") + e[1]), this.a("to")(n + this.a("prefix") + a + r + o + this.a("postfix"))
    }, i.prototype.w = function(e) {
      function t(e) {
        return e.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g, "\\$&")
      }
      var i;
      return null === e || void 0 === e ? !1 : (e = this.a("from")(e), e = e.toString(), i = e.replace(RegExp("^" + t(this.a("negativeBefore"))), ""), e !== i ? (e = i, i = "-") : i = "", e = e.replace(RegExp("^" + t(this.a("prefix"))), ""), this.a("negative") && (i = "", e = e.replace(RegExp("^" + t(this.a("negative"))), "-")), e = e.replace(RegExp(t(this.a("postfix")) + "$"), "").replace(RegExp(t(this.a("thousand")), "g"), "").replace(this.a("mark"), "."), e = this.a("decoder")(parseFloat(i + e)), isNaN(e) ? !1 : e)
    }, a.prototype.K = function(t, i) {
      this.method = i || "html", this.j = e(t.replace("-tooltip-", "") || "<div/>")[0]
    }, a.prototype.H = function(e) {
      this.method = "val", this.j = document.createElement("input"), this.j.name = e, this.j.type = "hidden"
    }, a.prototype.G = function(t) {
      function i(e, t) {
        return [t ? null : e, t ? e : null]
      }
      var a = this;
      this.method = "val", this.target = t.on("change", function(t) {
        a.B.val(i(e(t.target).val(), a.t), {
          link: a,
          set: !0
        })
      })
    }, a.prototype.p = function(t, i, a, n) {
      if (this.g = a, this.update = !n, "string" == typeof t && 0 === t.indexOf("-tooltip-")) this.K(t, i);
      else if ("string" == typeof t && 0 !== t.indexOf("-")) this.H(t);
      else {
        if ("function" != typeof t) {
          if (t instanceof e || e.zepto && e.zepto.isZ(t)) {
            if (!i) {
              if (t.is("input, select, textarea")) return void this.G(t);
              i = "html"
            }
            if ("function" == typeof i || "string" == typeof i && t[i]) return this.method = i, void(this.target = t)
          }
          throw new RangeError("(Link) Invalid Link.")
        }
        this.target = !1, this.method = t
      }
    }, a.prototype.write = function(e, t, i, a) {
      this.update && !1 === a || (this.u = e, this.F = e = this.format(e), "function" == typeof this.method ? this.method.call(this.target[0] || i[0], e, t, i) : this.target[this.method](e, t, i))
    }, a.prototype.q = function(t) {
      this.g = new i(e.extend({}, t, this.g instanceof i ? this.g.r : this.g))
    }, a.prototype.J = function(e) {
      this.B = e
    }, a.prototype.I = function(e) {
      this.t = e
    }, a.prototype.format = function(e) {
      return this.g.L(e)
    }, a.prototype.A = function(e) {
      return this.g.w(e)
    }, a.prototype.p.prototype = a.prototype, e.Link = a
  }(window.jQuery || window.Zepto),
  function(e) {
    function t(e) {
      return "number" == typeof e && !isNaN(e) && isFinite(e)
    }

    function i(t) {
      return e.isArray(t) ? t : [t]
    }

    function a(e, t) {
      e.addClass(t), setTimeout(function() {
        e.removeClass(t)
      }, 300)
    }

    function n(e, t) {
      return 100 * t / (e[1] - e[0])
    }

    function r(e, t) {
      if (t >= e.d.slice(-1)[0]) return 100;
      for (var i, a, r, o = 1; t >= e.d[o];) o++;
      return i = e.d[o - 1], a = e.d[o], r = e.c[o - 1], i = [i, a], r + n(i, 0 > i[0] ? t + Math.abs(i[0]) : t - i[0]) / (100 / (e.c[o] - r))
    }

    function o(e, t) {
      if (t >= 100) return e.d.slice(-1)[0];
      for (var i, a, n, r = 1; t >= e.c[r];) r++;
      return i = e.d[r - 1], a = e.d[r], n = e.c[r - 1], i = [i, a], 100 / (e.c[r] - n) * (t - n) * (i[1] - i[0]) / 100 + i[0]
    }

    function s(e, t) {
      for (var i, a = 1;
        (e.dir ? 100 - t : t) >= e.c[a];) a++;
      return e.m ? (i = e.c[a - 1], a = e.c[a], t - i > (a - i) / 2 ? a : i) : (e.h[a - 1] ? (i = e.h[a - 1], a = e.c[a - 1] + Math.round((t - e.c[a - 1]) / i) * i) : a = t, a)
    }

    function l(e, i) {
      if (!t(i)) throw Error("noUiSlider: 'step' is not numeric.");
      e.h[0] = i
    }

    function u(i, a) {
      if ("object" != typeof a || e.isArray(a)) throw Error("noUiSlider: 'range' is not an object.");
      if (void 0 === a.min || void 0 === a.max) throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      e.each(a, function(a, n) {
        var r;
        if ("number" == typeof n && (n = [n]), !e.isArray(n)) throw Error("noUiSlider: 'range' contains invalid value.");
        if (r = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !t(r) || !t(n[0])) throw Error("noUiSlider: 'range' value isn't numeric.");
        i.c.push(r), i.d.push(n[0]), r ? i.h.push(isNaN(n[1]) ? !1 : n[1]) : isNaN(n[1]) || (i.h[0] = n[1])
      }), e.each(i.h, function(e, t) {
        return t ? void(i.h[e] = n([i.d[e], i.d[e + 1]], t) / (100 / (i.c[e + 1] - i.c[e]))) : !0
      })
    }

    function c(t, i) {
      if ("number" == typeof i && (i = [i]), !e.isArray(i) || !i.length || 2 < i.length) throw Error("noUiSlider: 'start' option is incorrect.");
      t.b = i.length, t.start = i
    }

    function d(e, t) {
      if (e.m = t, "boolean" != typeof t) throw Error("noUiSlider: 'snap' option must be a boolean.")
    }

    function h(e, t) {
      if ("lower" === t && 1 === e.b) e.i = 1;
      else if ("upper" === t && 1 === e.b) e.i = 2;
      else if (!0 === t && 2 === e.b) e.i = 3;
      else {
        if (!1 !== t) throw Error("noUiSlider: 'connect' option doesn't match handle count.");
        e.i = 0
      }
    }

    function m(e, t) {
      switch (t) {
        case "horizontal":
          e.k = 0;
          break;
        case "vertical":
          e.k = 1;
          break;
        default:
          throw Error("noUiSlider: 'orientation' option is invalid.")
      }
    }

    function p(e, i) {
      if (2 < e.c.length) throw Error("noUiSlider: 'margin' option is only supported on linear sliders.");
      if (e.margin = n(e.d, i), !t(i)) throw Error("noUiSlider: 'margin' option must be numeric.")
    }

    function f(e, t) {
      switch (t) {
        case "ltr":
          e.dir = 0;
          break;
        case "rtl":
          e.dir = 1, e.i = [0, 2, 1, 3][e.i];
          break;
        default:
          throw Error("noUiSlider: 'direction' option was not recognized.")
      }
    }

    function g(e, t) {
      if ("string" != typeof t) throw Error("noUiSlider: 'behaviour' must be a string containing options.");
      var i = 0 <= t.indexOf("snap");
      e.n = {
        s: 0 <= t.indexOf("tap") || i,
        extend: 0 <= t.indexOf("extend"),
        v: 0 <= t.indexOf("drag"),
        fixed: 0 <= t.indexOf("fixed"),
        m: i
      }
    }

    function v(t, i, a) {
      t.o = [i.lower, i.upper], t.g = i.format, e.each(t.o, function(t, n) {
        if (!e.isArray(n)) throw Error("noUiSlider: 'serialization." + (t ? "upper" : "lower") + "' must be an array.");
        e.each(n, function() {
          if (!(this instanceof e.Link)) throw Error("noUiSlider: 'serialization." + (t ? "upper" : "lower") + "' can only contain Link instances.");
          this.I(t), this.J(a), this.q(i.format)
        })
      }), t.dir && 1 < t.b && t.o.reverse()
    }

    function b(t, i) {
      var a, n = {
        c: [],
        d: [],
        h: [!1],
        margin: 0
      };
      return a = {
        step: {
          e: !1,
          f: l
        },
        start: {
          e: !0,
          f: c
        },
        connect: {
          e: !0,
          f: h
        },
        direction: {
          e: !0,
          f: f
        },
        range: {
          e: !0,
          f: u
        },
        snap: {
          e: !1,
          f: d
        },
        orientation: {
          e: !1,
          f: m
        },
        margin: {
          e: !1,
          f: p
        },
        behaviour: {
          e: !0,
          f: g
        },
        serialization: {
          e: !0,
          f: v
        }
      }, t = e.extend({
        connect: !1,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal"
      }, t), t.serialization = e.extend({
        lower: [],
        upper: [],
        format: {}
      }, t.serialization), e.each(a, function(e, a) {
        if (void 0 === t[e]) {
          if (a.e) throw Error("noUiSlider: '" + e + "' is required.");
          return !0
        }
        a.f(n, t[e], i)
      }), n.style = n.k ? "top" : "left", n
    }

    function y(t, i) {
      var a = e("<div><div/></div>").addClass(E[2]),
        n = ["-lower", "-upper"];
      return t.dir && n.reverse(), a.children().addClass(E[3] + " " + E[3] + n[i]), a
    }

    function _(t, i) {
      return i.j && (i = new e.Link({
        target: e(i.j).clone().appendTo(t),
        method: i.method,
        format: i.g
      }, !0)), i
    }

    function k(t, i) {
      var a, n = [];
      for (a = 0; a < t.b; a++) {
        var r = n,
          o = a,
          s = t.o[a],
          l = i[a].children(),
          u = t.g,
          c = void 0,
          d = [],
          c = new e.Link({}, !0);
        for (c.q(u), d.push(c), c = 0; c < s.length; c++) d.push(_(l, s[c]));
        r[o] = d
      }
      return n
    }

    function w(e, t, i) {
      switch (e) {
        case 1:
          t.addClass(E[7]), i[0].addClass(E[6]);
          break;
        case 3:
          i[1].addClass(E[6]);
        case 2:
          i[0].addClass(E[7]);
        case 0:
          t.addClass(E[6])
      }
    }

    function S(e, t) {
      var i, a = [];
      for (i = 0; i < e.b; i++) a.push(y(e, i).appendTo(t));
      return a
    }

    function x(t, i) {
      return i.addClass([E[0], E[8 + t.dir], E[4 + t.k]].join(" ")), e("<div/>").appendTo(i).addClass(E[1])
    }

    function A(t, n, l) {
      function u() {
        return y[["width", "height"][n.k]]()
      }

      function c(e) {
        var t, i = [C.val()];
        for (t = 0; t < e.length; t++) C.trigger(e[t], i)
      }

      function d(t, i, a) {
        var r = t[0] !== A[0][0] ? 1 : 0,
          l = M[0] + n.margin,
          u = M[1] - n.margin;
        return a && 1 < A.length && (i = r ? Math.max(i, l) : Math.min(i, u)), 100 > i && (i = s(n, i)), i = Math.max(Math.min(parseFloat(i.toFixed(7)), 100), 0), i === M[r] ? 1 === A.length ? !1 : i === l || i === u ? 0 : !1 : (t.css(n.style, i + "%"), t.is(":first-child") && t.toggleClass(E[17], i > 50), M[r] = i, n.dir && (i = 100 - i), e(_[r]).each(function() {
          this.write(o(n, i), t.children(), C)
        }), !0)
      }

      function h(e, t, i) {
        i || a(C, E[14]), d(e, t, !1), c(["slide", "set", "change"])
      }

      function m(e, t, i, a) {
        e = e.replace(/\s/g, ".nui ") + ".nui", t.on(e, function(e) {
          var t = C.attr("disabled");
          if (C.hasClass(E[14]) || void 0 !== t && null !== t) return !1;
          e.preventDefault();
          var r, o, t = 0 === e.type.indexOf("touch"),
            s = 0 === e.type.indexOf("mouse"),
            l = 0 === e.type.indexOf("pointer"),
            u = e;
          0 === e.type.indexOf("MSPointer") && (l = !0), e.originalEvent && (e = e.originalEvent), t && (r = e.changedTouches[0].pageX, o = e.changedTouches[0].pageY), (s || l) && (l || void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, window.pageYOffset = document.documentElement.scrollTop), r = e.clientX + window.pageXOffset, o = e.clientY + window.pageYOffset), u.C = [r, o], u.cursor = s, e = u, e.l = e.C[n.k], i(e, a)
        })
      }

      function p(e, t) {
        var i, a = t.b || A,
          n = !1,
          n = 100 * (e.l - t.start) / u(),
          r = a[0][0] !== A[0][0] ? 1 : 0,
          o = t.D;
        i = n + o[0], n += o[1], 1 < a.length ? (0 > i && (n += Math.abs(i)), n > 100 && (i -= n - 100), i = [Math.max(Math.min(i, 100), 0), Math.max(Math.min(n, 100), 0)]) : i = [i, n], n = d(a[0], i[r], 1 === a.length), 1 < a.length && (n = d(a[1], i[r ? 0 : 1], !1) || n), n && c(["slide"])
      }

      function f(t) {
        e("." + E[15]).removeClass(E[15]), t.cursor && e("body").css("cursor", "").off(".nui"), T.off(".nui"), C.removeClass(E[12]), c(["set", "change"])
      }

      function g(t, i) {
        1 === i.b.length && i.b[0].children().addClass(E[15]), t.stopPropagation(), m(D.move, T, p, {
          start: t.l,
          b: i.b,
          D: [M[0], M[A.length - 1]]
        }), m(D.end, T, f, null), t.cursor && (e("body").css("cursor", e(t.target).css("cursor")), 1 < A.length && C.addClass(E[12]), e("body").on("selectstart.nui", !1))
      }

      function v(t) {
        var i = t.l,
          a = 0;
        t.stopPropagation(), e.each(A, function() {
          a += this.offset()[n.style]
        }), a = a / 2 > i || 1 === A.length ? 0 : 1, i -= y.offset()[n.style], i = 100 * i / u(), h(A[a], i, n.n.m), n.n.m && g(t, {
          b: [A[a]]
        })
      }

      function b(e) {
        var t = (e = e.l < y.offset()[n.style]) ? 0 : 100;
        e = e ? 0 : A.length - 1, h(A[e], t, !1)
      }
      var y, _, A, C = e(t),
        M = [-1, -1];
      if (C.hasClass(E[0])) throw Error("Slider was already initialized.");
      y = x(n, C), A = S(n, y), _ = k(n, A), w(n.i, C, A),
        function(e) {
          var t;
          if (!e.fixed)
            for (t = 0; t < A.length; t++) m(D.start, A[t].children(), g, {
              b: [A[t]]
            });
          e.s && m(D.start, y, v, {
            b: A
          }), e.extend && (C.addClass(E[16]), e.s && m(D.start, C, b, {
            b: A
          })), e.v && (t = y.find("." + E[7]).addClass(E[10]), e.fixed && (t = t.add(y.children().not(t).children())), m(D.start, t, g, {
            b: A
          }))
        }(n.n), t.vSet = function() {
          var t, o, s, l, u, h, m = Array.prototype.slice.call(arguments, 0),
            p = i(m[0]);
          for ("object" == typeof m[1] ? (t = m[1].set, o = m[1].link, s = m[1].update, l = m[1].animate) : !0 === m[1] && (t = !0), n.dir && 1 < n.b && p.reverse(), l && a(C, E[14]), m = 1 < A.length ? 3 : 1, 1 === p.length && (m = 1), u = 0; m > u; u++) l = o || _[u % 2][0], l = l.A(p[u % 2]), !1 !== l && (l = r(n, l), n.dir && (l = 100 - l), !0 !== d(A[u % 2], l, !0) && e(_[u % 2]).each(function(e) {
            return e ? void this.write(h, A[u % 2].children(), C, s) : (h = this.u, !0)
          }));
          return !0 === t && c(["set"]), this
        }, t.vGet = function() {
          var e, t = [];
          for (e = 0; e < n.b; e++) t[e] = _[e][0].F;
          return 1 === t.length ? t[0] : n.dir ? t.reverse() : t
        }, t.destroy = function() {
          return e.each(_, function() {
            e.each(this, function() {
              this.target && this.target.off(".nui")
            })
          }), e(this).off(".nui").removeClass(E.join(" ")).empty(), l
        }, C.val(n.start)
    }

    function C(e) {
      if (!this.length) throw Error("noUiSlider: Can't initialize slider on empty selection.");
      var t = b(e, this);
      return this.each(function() {
        A(this, t, e)
      })
    }

    function M(t) {
      return this.each(function() {
        var i = e(this).val(),
          a = this.destroy(),
          n = e.extend({}, a, t);
        e(this).noUiSlider(n), a.start === n.start && e(this).val(i)
      })
    }

    function z() {
      return this[0][arguments.length ? "vSet" : "vGet"].apply(this[0], arguments)
    }
    var T = e(document),
      P = e.fn.val,
      D = window.navigator.pointerEnabled ? {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
      } : window.navigator.msPointerEnabled ? {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
      } : {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
      },
      E = "noUi-target noUi-base noUi-origin noUi-handle noUi-horizontal noUi-vertical noUi-background noUi-connect noUi-ltr noUi-rtl noUi-dragable  noUi-state-drag  noUi-state-tap noUi-active noUi-extended noUi-stacking".split(" ");
    e.fn.val = function() {
      var t = arguments,
        i = e(this[0]);
      return arguments.length ? this.each(function() {
        (e(this).hasClass(E[0]) ? z : P).apply(e(this), t)
      }) : (i.hasClass(E[0]) ? z : P).call(i)
    }, e.noUiSlider = {
      Link: e.Link
    }, e.fn.noUiSlider = function(e, t) {
      return (t ? M : C).call(this, e)
    }
  }(window.jQuery || window.Zepto), angular.module("nouislider", []).directive("slider", function() {
    return {
      restrict: "A",
      scope: {
        start: "@",
        step: "@",
        end: "@",
        callback: "@",
        margin: "@",
        ngModel: "=",
        ngFrom: "=",
        ngTo: "="
      },
      link: function(e, t) {
        var i, a, n, r, o;
        return r = $(t), i = e.callback ? e.callback : "slide", null != e.ngFrom && null != e.ngTo ? (a = null, o = null, r.noUiSlider({
          start: [e.ngFrom || e.start, e.ngTo || e.end],
          step: parseFloat(e.step || 1),
          connect: !0,
          margin: parseFloat(e.margin || 0),
          range: {
            min: [parseFloat(e.start)],
            max: [parseFloat(e.end)]
          }
        }), r.on(i, function() {
          var t, i, n;
          return n = r.val(), t = n[0], i = n[1], a = parseFloat(t), o = parseFloat(i), e.$apply(function() {
            return e.ngFrom = a, e.ngTo = o
          })
        }), e.$watch("ngFrom", function(e) {
          return e !== a ? r.val([e, null]) : void 0
        }), e.$watch("ngTo", function(e) {
          return e !== o ? r.val([null, e]) : void 0
        })) : (n = null, r.noUiSlider({
          start: [e.ngModel || e.start],
          step: parseFloat(e.step || 1),
          range: {
            min: [parseFloat(e.start)],
            max: [parseFloat(e.end)]
          }
        }), r.on(i, function() {
          return n = parseFloat(r.val()), e.$apply(function() {
            return e.ngModel = n
          })
        }), e.$watch("ngModel", function(e) {
          return e !== n ? r.val(e) : void 0
        }))
      }
    }
  }), ! function() {
    "use strict";

    function e(e, t) {
      var i;
      for (i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
      return e
    }

    function t(e) {
      if (!this || this.find !== t.prototype.find) return new t(e);
      if (this.length = 0, e)
        if ("string" == typeof e && (e = this.find(e)), e.nodeType || e === e.window) this.length = 1, this[0] = e;
        else {
          var i = e.length;
          for (this.length = i; i;) i -= 1, this[i] = e[i]
        }
    }
    t.extend = e, t.contains = function(e, t) {
      do
        if (t = t.parentNode, t === e) return !0;
      while (t);
      return !1
    }, t.parseJSON = function(e) {
      return window.JSON && JSON.parse(e)
    }, e(t.prototype, {
      find: function(e) {
        var i = this[0] || document;
        return "string" == typeof e && (e = i.querySelectorAll ? i.querySelectorAll(e) : "#" === e.charAt(0) ? i.getElementById(e.slice(1)) : i.getElementsByTagName(e)), new t(e)
      },
      hasClass: function(e) {
        return this[0] ? new RegExp("(^|\\s+)" + e + "(\\s+|$)").test(this[0].className) : !1
      },
      addClass: function(e) {
        for (var t, i = this.length; i;) {
          if (i -= 1, t = this[i], !t.className) return t.className = e, this;
          if (this.hasClass(e)) return this;
          t.className += " " + e
        }
        return this
      },
      removeClass: function(e) {
        for (var t, i = new RegExp("(^|\\s+)" + e + "(\\s+|$)"), a = this.length; a;) a -= 1, t = this[a], t.className = t.className.replace(i, " ");
        return this
      },
      on: function(e, t) {
        for (var i, a, n = e.split(/\s+/); n.length;)
          for (e = n.shift(), i = this.length; i;) i -= 1, a = this[i], a.addEventListener ? a.addEventListener(e, t, !1) : a.attachEvent && a.attachEvent("on" + e, t);
        return this
      },
      off: function(e, t) {
        for (var i, a, n = e.split(/\s+/); n.length;)
          for (e = n.shift(), i = this.length; i;) i -= 1, a = this[i], a.removeEventListener ? a.removeEventListener(e, t, !1) : a.detachEvent && a.detachEvent("on" + e, t);
        return this
      },
      empty: function() {
        for (var e, t = this.length; t;)
          for (t -= 1, e = this[t]; e.hasChildNodes();) e.removeChild(e.lastChild);
        return this
      },
      first: function() {
        return new t(this[0])
      }
    }), "function" == typeof define && define.amd ? define(function() {
      return t
    }) : (window.blueimp = window.blueimp || {}, window.blueimp.helper = t)
  }(),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper"], e) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = e(window.blueimp.helper || window.jQuery))
  }(function(e) {
    "use strict";

    function t(e, i) {
      return void 0 === document.body.style.maxHeight ? null : this && this.options === t.prototype.options ? e && e.length ? (this.list = e, this.num = e.length, this.initOptions(i), void this.initialize()) : void this.console.log("blueimp Gallery: No or empty list provided as first argument.", e) : new t(e, i)
    }
    return e.extend(t.prototype, {
      options: {
        container: "#blueimp-gallery",
        slidesContainer: "div",
        titleElement: "h3",
        displayClass: "blueimp-gallery-display",
        controlsClass: "blueimp-gallery-controls",
        singleClass: "blueimp-gallery-single",
        leftEdgeClass: "blueimp-gallery-left",
        rightEdgeClass: "blueimp-gallery-right",
        playingClass: "blueimp-gallery-playing",
        slideClass: "slide",
        slideLoadingClass: "slide-loading",
        slideErrorClass: "slide-error",
        slideContentClass: "slide-content",
        toggleClass: "toggle",
        prevClass: "prev",
        nextClass: "next",
        closeClass: "close",
        playPauseClass: "play-pause",
        typeProperty: "type",
        titleProperty: "title",
        urlProperty: "href",
        displayTransition: !0,
        clearSlides: !0,
        stretchImages: !1,
        toggleControlsOnReturn: !0,
        toggleSlideshowOnSpace: !0,
        enableKeyboardNavigation: !0,
        closeOnEscape: !0,
        closeOnSlideClick: !0,
        closeOnSwipeUpOrDown: !0,
        emulateTouchEvents: !0,
        stopTouchEventsPropagation: !1,
        hidePageScrollbars: !0,
        disableScroll: !0,
        carousel: !1,
        continuous: !0,
        unloadElements: !0,
        startSlideshow: !1,
        slideshowInterval: 5e3,
        index: 0,
        preloadRange: 2,
        transitionSpeed: 400,
        slideshowTransitionSpeed: void 0,
        event: void 0,
        onopen: void 0,
        onopened: void 0,
        onslide: void 0,
        onslideend: void 0,
        onslidecomplete: void 0,
        onclose: void 0,
        onclosed: void 0
      },
      carouselOptions: {
        hidePageScrollbars: !1,
        toggleControlsOnReturn: !1,
        toggleSlideshowOnSpace: !1,
        enableKeyboardNavigation: !1,
        closeOnEscape: !1,
        closeOnSlideClick: !1,
        closeOnSwipeUpOrDown: !1,
        disableScroll: !1,
        startSlideshow: !0
      },
      console: window.console && "function" == typeof window.console.log ? window.console : {
        log: function() {}
      },
      support: function(t) {
        var i = {
            touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch
          },
          a = {
            webkitTransition: {
              end: "webkitTransitionEnd",
              prefix: "-webkit-"
            },
            MozTransition: {
              end: "transitionend",
              prefix: "-moz-"
            },
            OTransition: {
              end: "otransitionend",
              prefix: "-o-"
            },
            transition: {
              end: "transitionend",
              prefix: ""
            }
          },
          n = function() {
            var e, a, n = i.transition;
            document.body.appendChild(t), n && (e = n.name.slice(0, -9) + "ransform", void 0 !== t.style[e] && (t.style[e] = "translateZ(0)", a = window.getComputedStyle(t).getPropertyValue(n.prefix + "transform"), i.transform = {
              prefix: n.prefix,
              name: e,
              translate: !0,
              translateZ: !!a && "none" !== a
            })), void 0 !== t.style.backgroundSize && (i.backgroundSize = {}, t.style.backgroundSize = "contain", i.backgroundSize.contain = "contain" === window.getComputedStyle(t).getPropertyValue("background-size"), t.style.backgroundSize = "cover", i.backgroundSize.cover = "cover" === window.getComputedStyle(t).getPropertyValue("background-size")), document.body.removeChild(t)
          };
        return function(e, i) {
          var a;
          for (a in i)
            if (i.hasOwnProperty(a) && void 0 !== t.style[a]) {
              e.transition = i[a], e.transition.name = a;
              break
            }
        }(i, a), document.body ? n() : e(document).on("DOMContentLoaded", n), i
      }(document.createElement("div")),
      requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
      initialize: function() {
        return this.initStartIndex(), this.initWidget() === !1 ? !1 : (this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), void(this.options.startSlideshow && this.play()))
      },
      slide: function(e, t) {
        window.clearTimeout(this.timeout);
        var i, a, n, r = this.index;
        if (r !== e && 1 !== this.num) {
          if (t || (t = this.options.transitionSpeed), this.support.transform) {
            for (this.options.continuous || (e = this.circle(e)), i = Math.abs(r - e) / (r - e), this.options.continuous && (a = i, i = -this.positions[this.circle(e)] / this.slideWidth, i !== a && (e = -i * this.num + e)), n = Math.abs(r - e) - 1; n;) n -= 1, this.move(this.circle((e > r ? e : r) - n - 1), this.slideWidth * i, 0);
            e = this.circle(e), this.move(r, this.slideWidth * i, t), this.move(e, 0, t), this.options.continuous && this.move(this.circle(e - i), -(this.slideWidth * i), 0)
          } else e = this.circle(e), this.animate(r * -this.slideWidth, e * -this.slideWidth, t);
          this.onslide(e)
        }
      },
      getIndex: function() {
        return this.index
      },
      getNumber: function() {
        return this.num
      },
      prev: function() {
        (this.options.continuous || this.index) && this.slide(this.index - 1)
      },
      next: function() {
        (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1)
      },
      play: function(e) {
        var t = this;
        window.clearTimeout(this.timeout), this.interval = e || this.options.slideshowInterval, this.elements[this.index] > 1 && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function(e, i) {
          t.animationFrameId = t.requestAnimationFrame.call(window, function() {
            t.slide(e, i)
          })
        }, [this.index + 1, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass)
      },
      pause: function() {
        window.clearTimeout(this.timeout), this.interval = null, this.container.removeClass(this.options.playingClass)
      },
      add: function(e) {
        var t;
        for (e.concat || (e = Array.prototype.slice.call(e)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(e), this.num = this.list.length, this.num > 2 && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), t = this.num - e.length; t < this.num; t += 1) this.addSlide(t), this.positionSlide(t);
        this.positions.length = this.num, this.initSlides(!0)
      },
      resetSlides: function() {
        this.slidesContainer.empty(), this.slides = []
      },
      handleClose: function() {
        var e = this.options;
        this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(e.displayClass).removeClass(e.singleClass).removeClass(e.leftEdgeClass).removeClass(e.rightEdgeClass), e.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this)
      },
      close: function() {
        var e = this,
          t = function(i) {
            i.target === e.container[0] && (e.container.off(e.support.transition.end, t), e.handleClose())
          };
        this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, t), this.container.removeClass(this.options.displayClass)) : this.handleClose()
      },
      circle: function(e) {
        return (this.num + e % this.num) % this.num
      },
      move: function(e, t, i) {
        this.translateX(e, t, i), this.positions[e] = t
      },
      translate: function(e, t, i, a) {
        var n = this.slides[e].style,
          r = this.support.transition,
          o = this.support.transform;
        n[r.name + "Duration"] = a + "ms", n[o.name] = "translate(" + t + "px, " + i + "px)" + (o.translateZ ? " translateZ(0)" : "")
      },
      translateX: function(e, t, i) {
        this.translate(e, t, 0, i)
      },
      translateY: function(e, t, i) {
        this.translate(e, 0, t, i)
      },
      animate: function(e, t, i) {
        if (!i) return void(this.slidesContainer[0].style.left = t + "px");
        var a = this,
          n = (new Date).getTime(),
          r = window.setInterval(function() {
            var o = (new Date).getTime() - n;
            return o > i ? (a.slidesContainer[0].style.left = t + "px", a.ontransitionend(), void window.clearInterval(r)) : void(a.slidesContainer[0].style.left = (t - e) * (Math.floor(o / i * 100) / 100) + e + "px")
          }, 4)
      },
      preventDefault: function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
      },
      stopPropagation: function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
      },
      onresize: function() {
        this.initSlides(!0)
      },
      onmousedown: function(e) {
        e.which && 1 === e.which && "VIDEO" !== e.target.nodeName && (e.preventDefault(), (e.originalEvent || e).touches = [{
          pageX: e.pageX,
          pageY: e.pageY
        }], this.ontouchstart(e))
      },
      onmousemove: function(e) {
        this.touchStart && ((e.originalEvent || e).touches = [{
          pageX: e.pageX,
          pageY: e.pageY
        }], this.ontouchmove(e))
      },
      onmouseup: function(e) {
        this.touchStart && (this.ontouchend(e), delete this.touchStart)
      },
      onmouseout: function(t) {
        if (this.touchStart) {
          var i = t.target,
            a = t.relatedTarget;
          (!a || a !== i && !e.contains(i, a)) && this.onmouseup(t)
        }
      },
      ontouchstart: function(e) {
        this.options.stopTouchEventsPropagation && this.stopPropagation(e);
        var t = (e.originalEvent || e).touches[0];
        this.touchStart = {
          x: t.pageX,
          y: t.pageY,
          time: Date.now()
        }, this.isScrolling = void 0, this.touchDelta = {}
      },
      ontouchmove: function(e) {
        this.options.stopTouchEventsPropagation && this.stopPropagation(e);
        var t, i, a = (e.originalEvent || e).touches[0],
          n = (e.originalEvent || e).scale,
          r = this.index;
        if (!(a.length > 1 || n && 1 !== n))
          if (this.options.disableScroll && e.preventDefault(), this.touchDelta = {
              x: a.pageX - this.touchStart.x,
              y: a.pageY - this.touchStart.y
            }, t = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(t) < Math.abs(this.touchDelta.y)), this.isScrolling) this.options.closeOnSwipeUpOrDown && this.translateY(r, this.touchDelta.y + this.positions[r], 0);
          else
            for (e.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? i = [this.circle(r + 1), r, this.circle(r - 1)] : (this.touchDelta.x = t /= !r && t > 0 || r === this.num - 1 && 0 > t ? Math.abs(t) / this.slideWidth + 1 : 1, i = [r], r && i.push(r - 1), r < this.num - 1 && i.unshift(r + 1)); i.length;) r = i.pop(), this.translateX(r, t + this.positions[r], 0)
      },
      ontouchend: function(e) {
        this.options.stopTouchEventsPropagation && this.stopPropagation(e);
        var t, i, a, n, r, o = this.index,
          s = this.options.transitionSpeed,
          l = this.slideWidth,
          u = Number(Date.now() - this.touchStart.time) < 250,
          c = u && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > l / 2,
          d = !o && this.touchDelta.x > 0 || o === this.num - 1 && this.touchDelta.x < 0,
          h = !c && this.options.closeOnSwipeUpOrDown && (u && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);
        this.options.continuous && (d = !1), t = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? h ? this.close() : this.translateY(o, 0, s) : c && !d ? (i = o + t, a = o - t, n = l * t, r = -l * t, this.options.continuous ? (this.move(this.circle(i), n, 0), this.move(this.circle(o - 2 * t), r, 0)) : i >= 0 && i < this.num && this.move(i, n, 0), this.move(o, this.positions[o] + n, s), this.move(this.circle(a), this.positions[this.circle(a)] + n, s), o = this.circle(a), this.onslide(o)) : this.options.continuous ? (this.move(this.circle(o - 1), -l, s), this.move(o, 0, s), this.move(this.circle(o + 1), l, s)) : (o && this.move(o - 1, -l, s), this.move(o, 0, s), o < this.num - 1 && this.move(o + 1, l, s))
      },
      ontouchcancel: function(e) {
        this.touchStart && (this.ontouchend(e), delete this.touchStart)
      },
      ontransitionend: function(e) {
        var t = this.slides[this.index];
        e && t !== e.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, t]))
      },
      oncomplete: function(t) {
        var i, a = t.target || t.srcElement,
          n = a && a.parentNode;
        a && n && (i = this.getNodeIndex(n), e(n).removeClass(this.options.slideLoadingClass), "error" === t.type ? (e(n).addClass(this.options.slideErrorClass), this.elements[i] = 3) : this.elements[i] = 2, a.clientHeight > this.container[0].clientHeight && (a.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === n && this.play(), this.setTimeout(this.options.onslidecomplete, [i, n]))
      },
      onload: function(e) {
        this.oncomplete(e)
      },
      onerror: function(e) {
        this.oncomplete(e)
      },
      onkeydown: function(e) {
        switch (e.which || e.keyCode) {
          case 13:
            this.options.toggleControlsOnReturn && (this.preventDefault(e), this.toggleControls());
            break;
          case 27:
            this.options.closeOnEscape && this.close();
            break;
          case 32:
            this.options.toggleSlideshowOnSpace && (this.preventDefault(e), this.toggleSlideshow());
            break;
          case 37:
            this.options.enableKeyboardNavigation && (this.preventDefault(e), this.prev());
            break;
          case 39:
            this.options.enableKeyboardNavigation && (this.preventDefault(e), this.next())
        }
      },
      handleClick: function(t) {
        var i = this.options,
          a = t.target || t.srcElement,
          n = a.parentNode,
          r = function(t) {
            return e(a).hasClass(t) || e(n).hasClass(t)
          };
        r(i.toggleClass) ? (this.preventDefault(t), this.toggleControls()) : r(i.prevClass) ? (this.preventDefault(t), this.prev()) : r(i.nextClass) ? (this.preventDefault(t), this.next()) : r(i.closeClass) ? (this.preventDefault(t), this.close()) : r(i.playPauseClass) ? (this.preventDefault(t), this.toggleSlideshow()) : n === this.slidesContainer[0] ? (this.preventDefault(t), i.closeOnSlideClick ? this.close() : this.toggleControls()) : n.parentNode && n.parentNode === this.slidesContainer[0] && (this.preventDefault(t), this.toggleControls())
      },
      onclick: function(e) {
        return this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20) ? void delete this.touchDelta : this.handleClick(e)
      },
      updateEdgeClasses: function(e) {
        e ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), e === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass)
      },
      handleSlide: function(e) {
        this.options.continuous || this.updateEdgeClasses(e), this.loadElements(e), this.options.unloadElements && this.unloadElements(e), this.setTitle(e)
      },
      onslide: function(e) {
        this.index = e, this.handleSlide(e), this.setTimeout(this.options.onslide, [e, this.slides[e]])
      },
      setTitle: function(e) {
        var t = this.slides[e].firstChild.title,
          i = this.titleElement;
        i.length && (this.titleElement.empty(), t && i[0].appendChild(document.createTextNode(t)))
      },
      setTimeout: function(e, t, i) {
        var a = this;
        return e && window.setTimeout(function() {
          e.apply(a, t || [])
        }, i || 0)
      },
      imageFactory: function(t, i) {
        var a, n, r, o = this,
          s = this.imagePrototype.cloneNode(!1),
          l = t,
          u = this.options.stretchImages,
          c = function(t) {
            if (!a) {
              if (t = {
                  type: t.type,
                  target: n
                }, !n.parentNode) return o.setTimeout(c, [t]);
              a = !0, e(s).off("load error", c), u && "load" === t.type && (n.style.background = 'url("' + l + '") center no-repeat', n.style.backgroundSize = u), i(t)
            }
          };
        return "string" != typeof l && (l = this.getItemProperty(t, this.options.urlProperty), r = this.getItemProperty(t, this.options.titleProperty)), u === !0 && (u = "contain"), u = this.support.backgroundSize && this.support.backgroundSize[u] && u, u ? n = this.elementPrototype.cloneNode(!1) : (n = s, s.draggable = !1), r && (n.title = r), e(s).on("load error", c), s.src = l, n
      },
      createElement: function(t, i) {
        var a = t && this.getItemProperty(t, this.options.typeProperty),
          n = a && this[a.split("/")[0] + "Factory"] || this.imageFactory,
          r = t && n.call(this, t, i);
        return r || (r = this.elementPrototype.cloneNode(!1), this.setTimeout(i, [{
          type: "error",
          target: r
        }])), e(r).addClass(this.options.slideContentClass), r
      },
      loadElement: function(t) {
        this.elements[t] || (this.slides[t].firstChild ? this.elements[t] = e(this.slides[t]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[t] = 1, e(this.slides[t]).addClass(this.options.slideLoadingClass), this.slides[t].appendChild(this.createElement(this.list[t], this.proxyListener))))
      },
      loadElements: function(e) {
        var t, i = Math.min(this.num, 2 * this.options.preloadRange + 1),
          a = e;
        for (t = 0; i > t; t += 1) a += t * (t % 2 === 0 ? -1 : 1), a = this.circle(a), this.loadElement(a)
      },
      unloadElements: function(e) {
        var t, i, a;
        for (t in this.elements) this.elements.hasOwnProperty(t) && (a = Math.abs(e - t), a > this.options.preloadRange && a + this.options.preloadRange < this.num && (i = this.slides[t], i.removeChild(i.firstChild), delete this.elements[t]))
      },
      addSlide: function(e) {
        var t = this.slidePrototype.cloneNode(!1);
        t.setAttribute("data-index", e), this.slidesContainer[0].appendChild(t), this.slides.push(t)
      },
      positionSlide: function(e) {
        var t = this.slides[e];
        t.style.width = this.slideWidth + "px", this.support.transform && (t.style.left = e * -this.slideWidth + "px", this.move(e, this.index > e ? -this.slideWidth : this.index < e ? this.slideWidth : 0, 0))
      },
      initSlides: function(t) {
        var i, a;
        for (t || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), e(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, i = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].offsetWidth, this.slideHeight = this.container[0].offsetHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", i && this.resetSlides(), a = 0; a < this.num; a += 1) i && this.addSlide(a), this.positionSlide(a);
        this.options.continuous && this.support.transform && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transform || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px")
      },
      toggleControls: function() {
        var e = this.options.controlsClass;
        this.container.hasClass(e) ? this.container.removeClass(e) : this.container.addClass(e)
      },
      toggleSlideshow: function() {
        this.interval ? this.pause() : this.play()
      },
      getNodeIndex: function(e) {
        return parseInt(e.getAttribute("data-index"), 10)
      },
      getNestedProperty: function(e, t) {
        return t.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function(t, i, a, n, r) {
          var o = r || i || a || n && parseInt(n, 10);
          t && e && (e = e[o])
        }), e
      },
      getDataProperty: function(t, i) {
        if (t.getAttribute) {
          var a = t.getAttribute("data-" + i.replace(/([A-Z])/g, "-$1").toLowerCase());
          if ("string" == typeof a) {
            if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(a)) try {
              return e.parseJSON(a)
            } catch (n) {}
            return a
          }
        }
      },
      getItemProperty: function(e, t) {
        var i = e[t];
        return void 0 === i && (i = this.getDataProperty(e, t), void 0 === i && (i = this.getNestedProperty(e, t))), i
      },
      initStartIndex: function() {
        var e, t = this.options.index,
          i = this.options.urlProperty;
        if (t && "number" != typeof t)
          for (e = 0; e < this.num; e += 1)
            if (this.list[e] === t || this.getItemProperty(this.list[e], i) === this.getItemProperty(t, i)) {
              t = e;
              break
            }
        this.index = this.circle(parseInt(t, 10) || 0)
      },
      initEventListeners: function() {
        var t = this,
          i = this.slidesContainer,
          a = function(e) {
            var i = t.support.transition && t.support.transition.end === e.type ? "transitionend" : e.type;
            t["on" + i](e)
          };
        e(window).on("resize", a), e(document.body).on("keydown", a), this.container.on("click", a), this.support.touch ? i.on("touchstart touchmove touchend touchcancel", a) : this.options.emulateTouchEvents && this.support.transition && i.on("mousedown mousemove mouseup mouseout", a), this.support.transition && i.on(this.support.transition.end, a), this.proxyListener = a
      },
      destroyEventListeners: function() {
        var t = this.slidesContainer,
          i = this.proxyListener;
        e(window).off("resize", i), e(document.body).off("keydown", i), this.container.off("click", i), this.support.touch ? t.off("touchstart touchmove touchend touchcancel", i) : this.options.emulateTouchEvents && this.support.transition && t.off("mousedown mousemove mouseup mouseout", i), this.support.transition && t.off(this.support.transition.end, i)
      },
      handleOpen: function() {
        this.options.onopened && this.options.onopened.call(this)
      },
      initWidget: function() {
        var t = this,
          i = function(e) {
            e.target === t.container[0] && (t.container.off(t.support.transition.end, i), t.handleOpen())
          };
        return this.container = e(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, i) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : (this.console.log("blueimp Gallery: Slides container not found.", this.options.slidesContainer), !1)) : (this.console.log("blueimp Gallery: Widget container not found.", this.options.container), !1)
      },
      initOptions: function(t) {
        this.options = e.extend({}, this.options), (t && t.carousel || this.options.carousel && (!t || t.carousel !== !1)) && e.extend(this.options, this.carouselOptions), e.extend(this.options, t), this.num < 3 && (this.options.continuous = this.options.continuous ? null : !1), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event)
      }
    }), t
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
  }(function(e, t) {
    "use strict";
    e.extend(t.prototype.options, {
      fullScreen: !1
    });
    var i = t.prototype.initialize,
      a = t.prototype.close;
    return e.extend(t.prototype, {
      getFullScreenElement: function() {
        return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
      },
      requestFullScreen: function(e) {
        e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen()
      },
      exitFullScreen: function() {
        document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
      },
      initialize: function() {
        i.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0])
      },
      close: function() {
        this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), a.call(this)
      }
    }), t
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
  }(function(e, t) {
    "use strict";
    e.extend(t.prototype.options, {
      indicatorContainer: "ol",
      activeIndicatorClass: "active",
      thumbnailProperty: "thumbnail",
      thumbnailIndicators: !0
    });
    var i = t.prototype.initSlides,
      a = t.prototype.addSlide,
      n = t.prototype.resetSlides,
      r = t.prototype.handleClick,
      o = t.prototype.handleSlide,
      s = t.prototype.handleClose;
    return e.extend(t.prototype, {
      createIndicator: function(t) {
        var i, a, n = this.indicatorPrototype.cloneNode(!1),
          r = this.getItemProperty(t, this.options.titleProperty),
          o = this.options.thumbnailProperty;
        return this.options.thumbnailIndicators && (a = t.getElementsByTagName && e(t).find("img")[0], a ? i = a.src : o && (i = this.getItemProperty(t, o)), i && (n.style.backgroundImage = 'url("' + i + '")')), r && (n.title = r), n
      },
      addIndicator: function(e) {
        if (this.indicatorContainer.length) {
          var t = this.createIndicator(this.list[e]);
          t.setAttribute("data-index", e), this.indicatorContainer[0].appendChild(t), this.indicators.push(t)
        }
      },
      setActiveIndicator: function(t) {
        this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = e(this.indicators[t]), this.activeIndicator.addClass(this.options.activeIndicatorClass))
      },
      initSlides: function(e) {
        e || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), i.call(this, e)
      },
      addSlide: function(e) {
        a.call(this, e), this.addIndicator(e)
      },
      resetSlides: function() {
        n.call(this), this.indicatorContainer.empty(), this.indicators = []
      },
      handleClick: function(e) {
        var t = e.target || e.srcElement,
          i = t.parentNode;
        if (i === this.indicatorContainer[0]) this.preventDefault(e), this.slide(this.getNodeIndex(t));
        else {
          if (i.parentNode !== this.indicatorContainer[0]) return r.call(this, e);
          this.preventDefault(e), this.slide(this.getNodeIndex(i))
        }
      },
      handleSlide: function(e) {
        o.call(this, e), this.setActiveIndicator(e)
      },
      handleClose: function() {
        this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), s.call(this)
      }
    }), t
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
  }(function(e, t) {
    "use strict";
    e.extend(t.prototype.options, {
      videoContentClass: "video-content",
      videoLoadingClass: "video-loading",
      videoPlayingClass: "video-playing",
      videoPosterProperty: "poster",
      videoSourcesProperty: "sources"
    });
    var i = t.prototype.handleSlide;
    return e.extend(t.prototype, {
      handleSlide: function(e) {
        i.call(this, e), this.playingVideo && this.playingVideo.pause()
      },
      videoFactory: function(t, i, a) {
        var n, r, o, s, l, u = this,
          c = this.options,
          d = this.elementPrototype.cloneNode(!1),
          h = e(d),
          m = [{
            type: "error",
            target: d
          }],
          p = a || document.createElement("video"),
          f = this.getItemProperty(t, c.urlProperty),
          g = this.getItemProperty(t, c.typeProperty),
          v = this.getItemProperty(t, c.titleProperty),
          b = this.getItemProperty(t, c.videoPosterProperty),
          y = this.getItemProperty(t, c.videoSourcesProperty);
        if (h.addClass(c.videoContentClass), v && (d.title = v), p.canPlayType)
          if (f && g && p.canPlayType(g)) p.src = f;
          else
            for (; y && y.length;)
              if (r = y.shift(), f = this.getItemProperty(r, c.urlProperty), g = this.getItemProperty(r, c.typeProperty), f && g && p.canPlayType(g)) {
                p.src = f;
                break
              }
        return b && (p.poster = b, n = this.imagePrototype.cloneNode(!1), e(n).addClass(c.toggleClass), n.src = b, n.draggable = !1, d.appendChild(n)), o = document.createElement("a"), o.setAttribute("target", "_blank"), a || o.setAttribute("download", v), o.href = f, p.src && (p.controls = !0, (a || e(p)).on("error", function() {
          u.setTimeout(i, m)
        }).on("pause", function() {
          s = !1, h.removeClass(u.options.videoLoadingClass).removeClass(u.options.videoPlayingClass), l && u.container.addClass(u.options.controlsClass), delete u.playingVideo, u.interval && u.play()
        }).on("playing", function() {
          s = !1, h.removeClass(u.options.videoLoadingClass).addClass(u.options.videoPlayingClass), u.container.hasClass(u.options.controlsClass) ? (l = !0, u.container.removeClass(u.options.controlsClass)) : l = !1
        }).on("play", function() {
          window.clearTimeout(u.timeout), s = !0, h.addClass(u.options.videoLoadingClass), u.playingVideo = p
        }), e(o).on("click", function(e) {
          u.preventDefault(e), s ? p.pause() : p.play()
        }), d.appendChild(a && a.element || p)), d.appendChild(o), this.setTimeout(i, [{
          type: "load",
          target: d
        }]), d
      }
    }), t
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
  }(function(e, t) {
    "use strict";
    if (!window.postMessage) return t;
    e.extend(t.prototype.options, {
      vimeoVideoIdProperty: "vimeo",
      vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",
      vimeoPlayerIdPrefix: "vimeo-player-",
      vimeoClickToPlay: !0
    });
    var i = t.prototype.textFactory || t.prototype.imageFactory,
      a = function(e, t, i, a) {
        this.url = e, this.videoId = t, this.playerId = i, this.clickToPlay = a, this.element = document.createElement("div"), this.listeners = {}
      },
      n = 0;
    return e.extend(a.prototype, {
      canPlayType: function() {
        return !0
      },
      on: function(e, t) {
        return this.listeners[e] = t, this
      },
      loadAPI: function() {
        for (var t, i, a = this, n = "//" + ("https" === location.protocol ? "secure-" : "") + "a.vimeocdn.com/js/froogaloop2.min.js", r = document.getElementsByTagName("script"), o = r.length, s = function() {
            !i && a.playOnReady && a.play(), i = !0
          }; o;)
          if (o -= 1, r[o].src === n) {
            t = r[o];
            break
          }
        t || (t = document.createElement("script"), t.src = n), e(t).on("load", s), r[0].parentNode.insertBefore(t, r[0]), /loaded|complete/.test(t.readyState) && s()
      },
      onReady: function() {
        var e = this;
        this.ready = !0, this.player.addEvent("play", function() {
          e.hasPlayed = !0, e.onPlaying()
        }), this.player.addEvent("pause", function() {
          e.onPause()
        }), this.player.addEvent("finish", function() {
          e.onPause()
        }), this.playOnReady && this.play()
      },
      onPlaying: function() {
        this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
      },
      onPause: function() {
        this.listeners.pause(), delete this.playStatus
      },
      insertIframe: function() {
        var e = document.createElement("iframe");
        e.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), e.id = this.playerId, this.element.parentNode.replaceChild(e, this.element), this.element = e
      },
      play: function() {
        var e = this;
        this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function() {
          e.onReady()
        })) : this.loadAPI())
      },
      pause: function() {
        this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
      }
    }), e.extend(t.prototype, {
      VimeoPlayer: a,
      textFactory: function(e, t) {
        var r = this.options,
          o = this.getItemProperty(e, r.vimeoVideoIdProperty);
        return o ? (void 0 === this.getItemProperty(e, r.urlProperty) && (e[r.urlProperty] = "//vimeo.com/" + o), n += 1, this.videoFactory(e, t, new a(r.vimeoPlayerUrl, o, r.vimeoPlayerIdPrefix + n, r.vimeoClickToPlay))) : i.call(this, e, t)
      }
    }), t
  }),
  function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], e) : e(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
  }(function(e, t) {
    "use strict";
    if (!window.postMessage) return t;
    e.extend(t.prototype.options, {
      youTubeVideoIdProperty: "youtube",
      youTubePlayerVars: {
        wmode: "transparent"
      },
      youTubeClickToPlay: !0
    });
    var i = t.prototype.textFactory || t.prototype.imageFactory,
      a = function(e, t, i) {
        this.videoId = e, this.playerVars = t, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {}
      };
    return e.extend(a.prototype, {
      canPlayType: function() {
        return !0
      },
      on: function(e, t) {
        return this.listeners[e] = t, this
      },
      loadAPI: function() {
        var e, t = this,
          i = window.onYouTubeIframeAPIReady,
          a = "//www.youtube.com/iframe_api",
          n = document.getElementsByTagName("script"),
          r = n.length;
        for (window.onYouTubeIframeAPIReady = function() {
            i && i.apply(this), t.playOnReady && t.play()
          }; r;)
          if (r -= 1, n[r].src === a) return;
        e = document.createElement("script"), e.src = a, n[0].parentNode.insertBefore(e, n[0])
      },
      onReady: function() {
        this.ready = !0, this.playOnReady && this.play()
      },
      onPlaying: function() {
        this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
      },
      onPause: function() {
        t.prototype.setTimeout.call(this, this.checkSeek, null, 2e3)
      },
      checkSeek: function() {
        (this.stateChange === YT.PlayerState.PAUSED || this.stateChange === YT.PlayerState.ENDED) && (this.listeners.pause(), delete this.playStatus)
      },
      onStateChange: function(e) {
        switch (e.data) {
          case YT.PlayerState.PLAYING:
            this.hasPlayed = !0, this.onPlaying();
            break;
          case YT.PlayerState.PAUSED:
          case YT.PlayerState.ENDED:
            this.onPause()
        }
        this.stateChange = e.data
      },
      onError: function(e) {
        this.listeners.error(e)
      },
      play: function() {
        var e = this;
        this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, {
          videoId: this.videoId,
          playerVars: this.playerVars,
          events: {
            onReady: function() {
              e.onReady()
            },
            onStateChange: function(t) {
              e.onStateChange(t)
            },
            onError: function(t) {
              e.onError(t)
            }
          }
        })) : this.loadAPI())
      },
      pause: function() {
        this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
      }
    }), e.extend(t.prototype, {
      YouTubePlayer: a,
      textFactory: function(e, t) {
        var n = this.options,
          r = this.getItemProperty(e, n.youTubeVideoIdProperty);
        return r ? (void 0 === this.getItemProperty(e, n.urlProperty) && (e[n.urlProperty] = "//www.youtube.com/watch?v=" + r), void 0 === this.getItemProperty(e, n.videoPosterProperty) && (e[n.videoPosterProperty] = "//img.youtube.com/vi/" + r + "/maxresdefault.jpg"), this.videoFactory(e, t, new a(r, n.youTubePlayerVars, n.youTubeClickToPlay))) : i.call(this, e, t)
      }
    }), t
  }),
  function() {
    this.App = angular.module("tourmega", ["angular-flexslider", "nouislider", "ngCookies", "ui.date", "angularPayments"])
  }.call(this),
  function() {
    var e = [].slice,
      t = {}.hasOwnProperty,
      i = function(e, i) {
        function a() {
          this.constructor = e
        }
        for (var n in i) t.call(i, n) && (e[n] = i[n]);
        return a.prototype = i.prototype, e.prototype = new a, e.__super__ = i.prototype, e
      };
    String.prototype.toCamel = function() {
      return this.replace(/(\-[a-z])/g, function(e) {
        return e.substring(0, 1).toLowerCase() + e.substring(0)
      })
    }, this.NGObject = function() {
      function t() {
        var t, i, a, n, r, o;
        for (t = 1 <= arguments.length ? e.call(arguments, 0) : [], o = this.constructor.$inject, a = n = 0, r = o.length; r > n; a = ++n) i = o[a], this[i.replace("$", "")] = t[a];
        "function" == typeof this.init && this.init()
      }
      return t
    }(), this.NGController = function(e) {
      function t(e) {
        var i, a;
        this.scope = e;
        for (i in this) a = this[i], null == this.scope[i] && (this.scope[i] = a);
        t.__super__.constructor.apply(this, arguments)
      }
      return i(t, e), t.register = function(e) {
        return e.controller(this.name.toString(), this)
      }, t
    }(this.NGObject), this.NGService = function(e) {
      function t() {
        return t.__super__.constructor.apply(this, arguments)
      }
      return i(t, e), t.register = function(e) {
        return e.service("" + this.name, this)
      }, t.prototype.observableCallbacks = {}, t.prototype.on = function(e, t) {
        var i;
        return null == (i = this.observableCallbacks)[e] && (i[e] = []), this.observableCallbacks[e].push(t)
      }, t.prototype.notify = function(e, t) {
        return null == t && (t = {}), angular.forEach(this.observableCallbacks[e], function(e) {
          return e(t)
        })
      }, t
    }(this.NGObject), this.NGDirective = function(e) {
      function t() {
        return t.__super__.constructor.apply(this, arguments)
      }
      return i(t, e), t.register = function(e) {
        var t;
        return t = this.name.substring(0, 1).toLowerCase() + this.name.substring(1), e.directive("" + t, this.prototype.constructor.options)
      }, t.options = function() {
        return "function" == typeof t.init ? t.init() : void 0
      }, t
    }(this.NGObject), this.NGAttribute = function(e) {
      function t() {
        return t.__super__.constructor.apply(this, arguments)
      }
      return i(t, e), t.options = function() {
        return t.__super__.constructor.options.apply(this, arguments)
      }, t
    }(this.NGDirective), this.NGElement = function(e) {
      function t() {
        return t.__super__.constructor.apply(this, arguments)
      }
      return i(t, e), t.options = function() {
        return t.__super__.constructor.options.apply(this, arguments)
      }, t
    }(this.NGDirective)
  }.call(this), window.scrollReveal = function(e) {
    "use strict";

    function t(t) {
      return r = this, r.elems = {}, r.serial = 1, r.blocked = !1, r.config = a(r.defaults, t), r.isMobile() && !r.config.mobile || !r.isSupported() ? void r.destroy() : (r.config.viewport == e.document.documentElement ? (e.addEventListener("scroll", n, !1), e.addEventListener("resize", n, !1)) : r.config.viewport.addEventListener("scroll", n, !1), void r.init(!0))
    }
    var i, a, n, r;
    return t.prototype = {
      defaults: {
        enter: "bottom",
        move: "8px",
        over: "0.6s",
        wait: "0s",
        easing: "ease",
        scale: {
          direction: "up",
          power: "5%"
        },
        opacity: 0,
        mobile: !1,
        reset: !1,
        viewport: e.document.documentElement,
        delay: "once",
        vFactor: .6,
        complete: function() {}
      },
      init: function(e) {
        var t, i, a;
        a = Array.prototype.slice.call(r.config.viewport.querySelectorAll("[data-sr]")), a.forEach(function(e) {
          t = r.serial++, i = r.elems[t] = {
            domEl: e
          }, i.config = r.configFactory(i), i.styles = r.styleFactory(i), i.seen = !1, e.removeAttribute("data-sr"), e.setAttribute("style", i.styles.inline + i.styles.initial)
        }), r.scrolled = r.scrollY(), r.animate(e)
      },
      animate: function(e) {
        var t, i, a, n;
        n = function(e) {
          var t = r.elems[e];
          setTimeout(function() {
            t.domEl.setAttribute("style", t.styles.inline), t.config.complete(t.domEl), delete r.elems[e]
          }, t.styles.duration)
        };
        for (t in r.elems) r.elems.hasOwnProperty(t) && (i = r.elems[t], a = r.isElemInViewport(i), a && ("always" === r.config.delay || "onload" === r.config.delay && e || "once" === r.config.delay && !i.seen ? i.domEl.setAttribute("style", i.styles.inline + i.styles.target + i.styles.transition) : i.domEl.setAttribute("style", i.styles.inline + i.styles.target + i.styles.reset), i.seen = !0, i.config.reset || i.animating || (i.animating = !0, n(t))), !a && i.config.reset && i.domEl.setAttribute("style", i.styles.inline + i.styles.initial + i.styles.reset));
        r.blocked = !1
      },
      configFactory: function(e) {
        var t = {},
          i = {},
          n = e.domEl.getAttribute("data-sr").split(/[, ]+/);
        return n = r.filter(n), n.forEach(function(e, i) {
          switch (e) {
            case "enter":
              return void(t.enter = n[i + 1]);
            case "wait":
              return void(t.wait = n[i + 1]);
            case "move":
              return void(t.move = n[i + 1]);
            case "ease":
              return t.move = n[i + 1], void(t.ease = "ease");
            case "ease-in":
              return "up" == n[i + 1] || "down" == n[i + 1] ? (t.scale.direction = n[i + 1], t.scale.power = n[i + 2], void(t.easing = "ease-in")) : (t.move = n[i + 1], void(t.easing = "ease-in"));
            case "ease-in-out":
              return "up" == n[i + 1] || "down" == n[i + 1] ? (t.scale.direction = n[i + 1], t.scale.power = n[i + 2], void(t.easing = "ease-in-out")) : (t.move = n[i + 1], void(t.easing = "ease-in-out"));
            case "ease-out":
              return "up" == n[i + 1] || "down" == n[i + 1] ? (t.scale.direction = n[i + 1], t.scale.power = n[i + 2], void(t.easing = "ease-out")) : (t.move = n[i + 1], void(t.easing = "ease-out"));
            case "hustle":
              return "up" == n[i + 1] || "down" == n[i + 1] ? (t.scale.direction = n[i + 1], t.scale.power = n[i + 2], void(t.easing = "cubic-bezier( 0.6, 0.2, 0.1, 1 )")) : (t.move = n[i + 1], void(t.easing = "cubic-bezier( 0.6, 0.2, 0.1, 1 )"));
            case "over":
              return void(t.over = n[i + 1]);
            case "reset":
              return void(t.reset = "no" == n[i - 1] ? !1 : !0);
            case "scale":
              return t.scale = {}, "up" == n[i + 1] || "down" == n[i + 1] ? (t.scale.direction = n[i + 1], void(t.scale.power = n[i + 2])) : void(t.scale.power = n[i + 1]);
            default:
              return
          }
        }), i = a(i, r.config), i = a(i, t), ("top" == i.enter || "bottom" == i.enter) && (i.axis = "Y"), ("left" == i.enter || "right" == i.enter) && (i.axis = "X"), "hustle" == i.easing && (i.easing = "cubic-bezier( 0.6, 0.2, 0.1, 1 )"), ("top" == i.enter || "left" == i.enter) && (i.move = "-" + i.move), i
      },
      styleFactory: function(e) {
        var t, i, a, n, r, o;
        return r = e.domEl.getAttribute("style") ? e.domEl.getAttribute("style") + "; visibility: visible; " : "visibility: visible; ", t = "-webkit-transition: -webkit-transform " + e.config.over + " " + e.config.easing + " " + e.config.wait + ", opacity " + e.config.over + " " + e.config.easing + " " + e.config.wait + "; transition: transform " + e.config.over + " " + e.config.easing + " " + e.config.wait + ", opacity " + e.config.over + " " + e.config.easing + " " + e.config.wait + "; -webkit-perspective: 1000;-webkit-backface-visibility: hidden;", n = "-webkit-transition: -webkit-transform " + e.config.over + " " + e.config.easing + " 0s, opacity " + e.config.over + " " + e.config.easing + " 0s; transition: transform " + e.config.over + " " + e.config.easing + " 0s, opacity " + e.config.over + " " + e.config.easing + " 0s; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; ", o = function() {
          0 != parseInt(e.config.move) && (i += " translate" + e.config.axis + "(" + e.config.move + ")", a += " translate" + e.config.axis + "(0)"), 0 != parseInt(e.config.scale.power) && ("up" == e.config.scale.direction && (e.config.scale.value = 1 - .01 * parseFloat(e.config.scale.power)), "down" == e.config.scale.direction && (e.config.scale.value = 1 + .01 * parseFloat(e.config.scale.power)), i += " scale(" + e.config.scale.value + ")", a += " scale(1)"), i += "; opacity: " + e.config.opacity + "; ", a += "; opacity: 1; "
        }, i = "transform:", a = "transform:", o(), i += "-webkit-transform:", a += "-webkit-transform:", o(), {
          transition: t,
          initial: i,
          target: a,
          reset: n,
          inline: r,
          duration: 1e3 * (parseFloat(e.config.over) + parseFloat(e.config.wait))
        }
      },
      filter: function(e) {
        var t = [],
          i = ["from", "the", "and", "then", "but", "with", "please"];
        return e.forEach(function(e) {
          i.indexOf(e) > -1 || t.push(e)
        }), t
      },
      getViewportH: function() {
        var t = r.config.viewport.clientHeight,
          i = e.innerHeight;
        return r.config.viewport == e.document.documentElement && i > t ? i : t
      },
      scrollY: function() {
        return r.config.viewport == e.document.documentElement ? e.pageYOffset : r.config.viewport.scrollTop + r.config.viewport.offsetTop
      },
      getOffset: function(e) {
        var t = 0,
          i = 0;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (i += e.offsetLeft); while (e = e.offsetParent);
        return {
          top: t,
          left: i
        }
      },
      isElemInViewport: function(t) {
        var i = t.domEl.offsetHeight,
          a = r.getOffset(t.domEl).top,
          n = a + i,
          o = t.config.vFactor || 0;
        return a + i * o < r.scrolled + r.getViewportH() && n - i * o > r.scrolled || "fixed" == (t.domEl.currentStyle ? t.domEl.currentStyle : e.getComputedStyle(t.domEl, null)).position
      },
      isMobile: function() {
        var t = navigator.userAgent || navigator.vendor || e.opera;
        return /(ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) ? !0 : !1
      },
      isSupported: function() {
        for (var e = document.createElement("sensor"), t = "Webkit,Moz,O,".split(","), i = ("transition " + t.join("transition,")).split(","), a = 0; a < i.length; a++)
          if ("" === !e.style[i[a]]) return !1;
        return !0
      },
      destroy: function() {
        var e;
        e = Array.prototype.slice.call(r.config.viewport.querySelectorAll("[data-sr]")), e.forEach(function(e) {
          e.removeAttribute("data-sr")
        })
      }
    }, n = function() {
      r.blocked || (r.blocked = !0, r.scrolled = r.scrollY(), i(function() {
        r.animate()
      }))
    }, a = function(e, t) {
      for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
      return e
    }, i = function() {
      return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(t) {
        e.setTimeout(t, 1e3 / 60)
      }
    }(), t
  }(window),
  function() {
    var e = this,
      t = e._,
      i = Array.prototype,
      a = Object.prototype,
      n = Function.prototype,
      r = i.push,
      o = i.slice,
      s = i.concat,
      l = a.toString,
      u = a.hasOwnProperty,
      c = Array.isArray,
      d = Object.keys,
      h = n.bind,
      m = function(e) {
        return e instanceof m ? e : this instanceof m ? void(this._wrapped = e) : new m(e)
      };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : e._ = m, m.VERSION = "1.7.0";
    var p = function(e, t, i) {
      if (void 0 === t) return e;
      switch (null == i ? 3 : i) {
        case 1:
          return function(i) {
            return e.call(t, i)
          };
        case 2:
          return function(i, a) {
            return e.call(t, i, a)
          };
        case 3:
          return function(i, a, n) {
            return e.call(t, i, a, n)
          };
        case 4:
          return function(i, a, n, r) {
            return e.call(t, i, a, n, r)
          }
      }
      return function() {
        return e.apply(t, arguments)
      }
    };
    m.iteratee = function(e, t, i) {
      return null == e ? m.identity : m.isFunction(e) ? p(e, t, i) : m.isObject(e) ? m.matches(e) : m.property(e)
    }, m.each = m.forEach = function(e, t, i) {
      if (null == e) return e;
      t = p(t, i);
      var a, n = e.length;
      if (n === +n)
        for (a = 0; n > a; a++) t(e[a], a, e);
      else {
        var r = m.keys(e);
        for (a = 0, n = r.length; n > a; a++) t(e[r[a]], r[a], e)
      }
      return e
    }, m.map = m.collect = function(e, t, i) {
      if (null == e) return [];
      t = m.iteratee(t, i);
      for (var a, n = e.length !== +e.length && m.keys(e), r = (n || e).length, o = Array(r), s = 0; r > s; s++) a = n ? n[s] : s, o[s] = t(e[a], a, e);
      return o
    };
    var f = "Reduce of empty array with no initial value";
    m.reduce = m.foldl = m.inject = function(e, t, i, a) {
      null == e && (e = []), t = p(t, a, 4);
      var n, r = e.length !== +e.length && m.keys(e),
        o = (r || e).length,
        s = 0;
      if (arguments.length < 3) {
        if (!o) throw new TypeError(f);
        i = e[r ? r[s++] : s++]
      }
      for (; o > s; s++) n = r ? r[s] : s, i = t(i, e[n], n, e);
      return i
    }, m.reduceRight = m.foldr = function(e, t, i, a) {
      null == e && (e = []), t = p(t, a, 4);
      var n, r = e.length !== +e.length && m.keys(e),
        o = (r || e).length;
      if (arguments.length < 3) {
        if (!o) throw new TypeError(f);
        i = e[r ? r[--o] : --o]
      }
      for (; o--;) n = r ? r[o] : o, i = t(i, e[n], n, e);
      return i
    }, m.find = m.detect = function(e, t, i) {
      var a;
      return t = m.iteratee(t, i), m.some(e, function(e, i, n) {
        return t(e, i, n) ? (a = e, !0) : void 0
      }), a
    }, m.filter = m.select = function(e, t, i) {
      var a = [];
      return null == e ? a : (t = m.iteratee(t, i), m.each(e, function(e, i, n) {
        t(e, i, n) && a.push(e)
      }), a)
    }, m.reject = function(e, t, i) {
      return m.filter(e, m.negate(m.iteratee(t)), i)
    }, m.every = m.all = function(e, t, i) {
      if (null == e) return !0;
      t = m.iteratee(t, i);
      var a, n, r = e.length !== +e.length && m.keys(e),
        o = (r || e).length;
      for (a = 0; o > a; a++)
        if (n = r ? r[a] : a, !t(e[n], n, e)) return !1;
      return !0
    }, m.some = m.any = function(e, t, i) {
      if (null == e) return !1;
      t = m.iteratee(t, i);
      var a, n, r = e.length !== +e.length && m.keys(e),
        o = (r || e).length;
      for (a = 0; o > a; a++)
        if (n = r ? r[a] : a, t(e[n], n, e)) return !0;
      return !1
    }, m.contains = m.include = function(e, t) {
      return null == e ? !1 : (e.length !== +e.length && (e = m.values(e)), m.indexOf(e, t) >= 0)
    }, m.invoke = function(e, t) {
      var i = o.call(arguments, 2),
        a = m.isFunction(t);
      return m.map(e, function(e) {
        return (a ? t : e[t]).apply(e, i)
      })
    }, m.pluck = function(e, t) {
      return m.map(e, m.property(t))
    }, m.where = function(e, t) {
      return m.filter(e, m.matches(t))
    }, m.findWhere = function(e, t) {
      return m.find(e, m.matches(t))
    }, m.max = function(e, t, i) {
      var a, n, r = -1 / 0,
        o = -1 / 0;
      if (null == t && null != e) {
        e = e.length === +e.length ? e : m.values(e);
        for (var s = 0, l = e.length; l > s; s++) a = e[s], a > r && (r = a)
      } else t = m.iteratee(t, i), m.each(e, function(e, i, a) {
        n = t(e, i, a), (n > o || n === -1 / 0 && r === -1 / 0) && (r = e, o = n)
      });
      return r
    }, m.min = function(e, t, i) {
      var a, n, r = 1 / 0,
        o = 1 / 0;
      if (null == t && null != e) {
        e = e.length === +e.length ? e : m.values(e);
        for (var s = 0, l = e.length; l > s; s++) a = e[s], r > a && (r = a)
      } else t = m.iteratee(t, i), m.each(e, function(e, i, a) {
        n = t(e, i, a), (o > n || 1 / 0 === n && 1 / 0 === r) && (r = e, o = n)
      });
      return r
    }, m.shuffle = function(e) {
      for (var t, i = e && e.length === +e.length ? e : m.values(e), a = i.length, n = Array(a), r = 0; a > r; r++) t = m.random(0, r), t !== r && (n[r] = n[t]), n[t] = i[r];
      return n
    }, m.sample = function(e, t, i) {
      return null == t || i ? (e.length !== +e.length && (e = m.values(e)), e[m.random(e.length - 1)]) : m.shuffle(e).slice(0, Math.max(0, t))
    }, m.sortBy = function(e, t, i) {
      return t = m.iteratee(t, i), m.pluck(m.map(e, function(e, i, a) {
        return {
          value: e,
          index: i,
          criteria: t(e, i, a)
        }
      }).sort(function(e, t) {
        var i = e.criteria,
          a = t.criteria;
        if (i !== a) {
          if (i > a || void 0 === i) return 1;
          if (a > i || void 0 === a) return -1
        }
        return e.index - t.index
      }), "value")
    };
    var g = function(e) {
      return function(t, i, a) {
        var n = {};
        return i = m.iteratee(i, a), m.each(t, function(a, r) {
          var o = i(a, r, t);
          e(n, a, o)
        }), n
      }
    };
    m.groupBy = g(function(e, t, i) {
      m.has(e, i) ? e[i].push(t) : e[i] = [t]
    }), m.indexBy = g(function(e, t, i) {
      e[i] = t
    }), m.countBy = g(function(e, t, i) {
      m.has(e, i) ? e[i]++ : e[i] = 1
    }), m.sortedIndex = function(e, t, i, a) {
      i = m.iteratee(i, a, 1);
      for (var n = i(t), r = 0, o = e.length; o > r;) {
        var s = r + o >>> 1;
        i(e[s]) < n ? r = s + 1 : o = s
      }
      return r
    }, m.toArray = function(e) {
      return e ? m.isArray(e) ? o.call(e) : e.length === +e.length ? m.map(e, m.identity) : m.values(e) : []
    }, m.size = function(e) {
      return null == e ? 0 : e.length === +e.length ? e.length : m.keys(e).length
    }, m.partition = function(e, t, i) {
      t = m.iteratee(t, i);
      var a = [],
        n = [];
      return m.each(e, function(e, i, r) {
        (t(e, i, r) ? a : n).push(e)
      }), [a, n]
    }, m.first = m.head = m.take = function(e, t, i) {
      return null == e ? void 0 : null == t || i ? e[0] : 0 > t ? [] : o.call(e, 0, t)
    }, m.initial = function(e, t, i) {
      return o.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 : t)))
    }, m.last = function(e, t, i) {
      return null == e ? void 0 : null == t || i ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
    }, m.rest = m.tail = m.drop = function(e, t, i) {
      return o.call(e, null == t || i ? 1 : t)
    }, m.compact = function(e) {
      return m.filter(e, m.identity)
    };
    var v = function(e, t, i, a) {
      if (t && m.every(e, m.isArray)) return s.apply(a, e);
      for (var n = 0, o = e.length; o > n; n++) {
        var l = e[n];
        m.isArray(l) || m.isArguments(l) ? t ? r.apply(a, l) : v(l, t, i, a) : i || a.push(l)
      }
      return a
    };
    m.flatten = function(e, t) {
      return v(e, t, !1, [])
    }, m.without = function(e) {
      return m.difference(e, o.call(arguments, 1))
    }, m.uniq = m.unique = function(e, t, i, a) {
      if (null == e) return [];
      m.isBoolean(t) || (a = i, i = t, t = !1), null != i && (i = m.iteratee(i, a));
      for (var n = [], r = [], o = 0, s = e.length; s > o; o++) {
        var l = e[o];
        if (t) o && r === l || n.push(l), r = l;
        else if (i) {
          var u = i(l, o, e);
          m.indexOf(r, u) < 0 && (r.push(u), n.push(l))
        } else m.indexOf(n, l) < 0 && n.push(l)
      }
      return n
    }, m.union = function() {
      return m.uniq(v(arguments, !0, !0, []))
    }, m.intersection = function(e) {
      if (null == e) return [];
      for (var t = [], i = arguments.length, a = 0, n = e.length; n > a; a++) {
        var r = e[a];
        if (!m.contains(t, r)) {
          for (var o = 1; i > o && m.contains(arguments[o], r); o++);
          o === i && t.push(r)
        }
      }
      return t
    }, m.difference = function(e) {
      var t = v(o.call(arguments, 1), !0, !0, []);
      return m.filter(e, function(e) {
        return !m.contains(t, e)
      })
    }, m.zip = function(e) {
      if (null == e) return [];
      for (var t = m.max(arguments, "length").length, i = Array(t), a = 0; t > a; a++) i[a] = m.pluck(arguments, a);
      return i
    }, m.object = function(e, t) {
      if (null == e) return {};
      for (var i = {}, a = 0, n = e.length; n > a; a++) t ? i[e[a]] = t[a] : i[e[a][0]] = e[a][1];
      return i
    }, m.indexOf = function(e, t, i) {
      if (null == e) return -1;
      var a = 0,
        n = e.length;
      if (i) {
        if ("number" != typeof i) return a = m.sortedIndex(e, t), e[a] === t ? a : -1;
        a = 0 > i ? Math.max(0, n + i) : i
      }
      for (; n > a; a++)
        if (e[a] === t) return a;
      return -1
    }, m.lastIndexOf = function(e, t, i) {
      if (null == e) return -1;
      var a = e.length;
      for ("number" == typeof i && (a = 0 > i ? a + i + 1 : Math.min(a, i + 1)); --a >= 0;)
        if (e[a] === t) return a;
      return -1
    }, m.range = function(e, t, i) {
      arguments.length <= 1 && (t = e || 0, e = 0), i = i || 1;
      for (var a = Math.max(Math.ceil((t - e) / i), 0), n = Array(a), r = 0; a > r; r++, e += i) n[r] = e;
      return n
    };
    var b = function() {};
    m.bind = function(e, t) {
      var i, a;
      if (h && e.bind === h) return h.apply(e, o.call(arguments, 1));
      if (!m.isFunction(e)) throw new TypeError("Bind must be called on a function");
      return i = o.call(arguments, 2), a = function() {
        if (!(this instanceof a)) return e.apply(t, i.concat(o.call(arguments)));
        b.prototype = e.prototype;
        var n = new b;
        b.prototype = null;
        var r = e.apply(n, i.concat(o.call(arguments)));
        return m.isObject(r) ? r : n
      }
    }, m.partial = function(e) {
      var t = o.call(arguments, 1);
      return function() {
        for (var i = 0, a = t.slice(), n = 0, r = a.length; r > n; n++) a[n] === m && (a[n] = arguments[i++]);
        for (; i < arguments.length;) a.push(arguments[i++]);
        return e.apply(this, a)
      }
    }, m.bindAll = function(e) {
      var t, i, a = arguments.length;
      if (1 >= a) throw new Error("bindAll must be passed function names");
      for (t = 1; a > t; t++) i = arguments[t], e[i] = m.bind(e[i], e);
      return e
    }, m.memoize = function(e, t) {
      var i = function(a) {
        var n = i.cache,
          r = t ? t.apply(this, arguments) : a;
        return m.has(n, r) || (n[r] = e.apply(this, arguments)), n[r]
      };
      return i.cache = {}, i
    }, m.delay = function(e, t) {
      var i = o.call(arguments, 2);
      return setTimeout(function() {
        return e.apply(null, i)
      }, t)
    }, m.defer = function(e) {
      return m.delay.apply(m, [e, 1].concat(o.call(arguments, 1)))
    }, m.throttle = function(e, t, i) {
      var a, n, r, o = null,
        s = 0;
      i || (i = {});
      var l = function() {
        s = i.leading === !1 ? 0 : m.now(), o = null, r = e.apply(a, n), o || (a = n = null)
      };
      return function() {
        var u = m.now();
        s || i.leading !== !1 || (s = u);
        var c = t - (u - s);
        return a = this, n = arguments, 0 >= c || c > t ? (clearTimeout(o), o = null, s = u, r = e.apply(a, n), o || (a = n = null)) : o || i.trailing === !1 || (o = setTimeout(l, c)), r
      }
    }, m.debounce = function(e, t, i) {
      var a, n, r, o, s, l = function() {
        var u = m.now() - o;
        t > u && u > 0 ? a = setTimeout(l, t - u) : (a = null, i || (s = e.apply(r, n), a || (r = n = null)))
      };
      return function() {
        r = this, n = arguments, o = m.now();
        var u = i && !a;
        return a || (a = setTimeout(l, t)), u && (s = e.apply(r, n), r = n = null), s
      }
    }, m.wrap = function(e, t) {
      return m.partial(t, e)
    }, m.negate = function(e) {
      return function() {
        return !e.apply(this, arguments)
      }
    }, m.compose = function() {
      var e = arguments,
        t = e.length - 1;
      return function() {
        for (var i = t, a = e[t].apply(this, arguments); i--;) a = e[i].call(this, a);
        return a
      }
    }, m.after = function(e, t) {
      return function() {
        return --e < 1 ? t.apply(this, arguments) : void 0
      }
    }, m.before = function(e, t) {
      var i;
      return function() {
        return --e > 0 ? i = t.apply(this, arguments) : t = null, i
      }
    }, m.once = m.partial(m.before, 2), m.keys = function(e) {
      if (!m.isObject(e)) return [];
      if (d) return d(e);
      var t = [];
      for (var i in e) m.has(e, i) && t.push(i);
      return t
    }, m.values = function(e) {
      for (var t = m.keys(e), i = t.length, a = Array(i), n = 0; i > n; n++) a[n] = e[t[n]];
      return a
    }, m.pairs = function(e) {
      for (var t = m.keys(e), i = t.length, a = Array(i), n = 0; i > n; n++) a[n] = [t[n], e[t[n]]];
      return a
    }, m.invert = function(e) {
      for (var t = {}, i = m.keys(e), a = 0, n = i.length; n > a; a++) t[e[i[a]]] = i[a];
      return t
    }, m.functions = m.methods = function(e) {
      var t = [];
      for (var i in e) m.isFunction(e[i]) && t.push(i);
      return t.sort()
    }, m.extend = function(e) {
      if (!m.isObject(e)) return e;
      for (var t, i, a = 1, n = arguments.length; n > a; a++) {
        t = arguments[a];
        for (i in t) u.call(t, i) && (e[i] = t[i])
      }
      return e
    }, m.pick = function(e, t, i) {
      var a, n = {};
      if (null == e) return n;
      if (m.isFunction(t)) {
        t = p(t, i);
        for (a in e) {
          var r = e[a];
          t(r, a, e) && (n[a] = r)
        }
      } else {
        var l = s.apply([], o.call(arguments, 1));
        e = new Object(e);
        for (var u = 0, c = l.length; c > u; u++) a = l[u], a in e && (n[a] = e[a])
      }
      return n
    }, m.omit = function(e, t, i) {
      if (m.isFunction(t)) t = m.negate(t);
      else {
        var a = m.map(s.apply([], o.call(arguments, 1)), String);
        t = function(e, t) {
          return !m.contains(a, t)
        }
      }
      return m.pick(e, t, i)
    }, m.defaults = function(e) {
      if (!m.isObject(e)) return e;
      for (var t = 1, i = arguments.length; i > t; t++) {
        var a = arguments[t];
        for (var n in a) void 0 === e[n] && (e[n] = a[n])
      }
      return e
    }, m.clone = function(e) {
      return m.isObject(e) ? m.isArray(e) ? e.slice() : m.extend({}, e) : e
    }, m.tap = function(e, t) {
      return t(e), e
    };
    var y = function(e, t, i, a) {
      if (e === t) return 0 !== e || 1 / e === 1 / t;
      if (null == e || null == t) return e === t;
      e instanceof m && (e = e._wrapped), t instanceof m && (t = t._wrapped);
      var n = l.call(e);
      if (n !== l.call(t)) return !1;
      switch (n) {
        case "[object RegExp]":
        case "[object String]":
          return "" + e == "" + t;
        case "[object Number]":
          return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
        case "[object Date]":
        case "[object Boolean]":
          return +e === +t
      }
      if ("object" != typeof e || "object" != typeof t) return !1;
      for (var r = i.length; r--;)
        if (i[r] === e) return a[r] === t;
      var o = e.constructor,
        s = t.constructor;
      if (o !== s && "constructor" in e && "constructor" in t && !(m.isFunction(o) && o instanceof o && m.isFunction(s) && s instanceof s)) return !1;
      i.push(e), a.push(t);
      var u, c;
      if ("[object Array]" === n) {
        if (u = e.length, c = u === t.length)
          for (; u-- && (c = y(e[u], t[u], i, a)););
      } else {
        var d, h = m.keys(e);
        if (u = h.length, c = m.keys(t).length === u)
          for (; u-- && (d = h[u], c = m.has(t, d) && y(e[d], t[d], i, a)););
      }
      return i.pop(), a.pop(), c
    };
    m.isEqual = function(e, t) {
      return y(e, t, [], [])
    }, m.isEmpty = function(e) {
      if (null == e) return !0;
      if (m.isArray(e) || m.isString(e) || m.isArguments(e)) return 0 === e.length;
      for (var t in e)
        if (m.has(e, t)) return !1;
      return !0
    }, m.isElement = function(e) {
      return !(!e || 1 !== e.nodeType)
    }, m.isArray = c || function(e) {
      return "[object Array]" === l.call(e)
    }, m.isObject = function(e) {
      var t = typeof e;
      return "function" === t || "object" === t && !!e
    }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
      m["is" + e] = function(t) {
        return l.call(t) === "[object " + e + "]"
      }
    }), m.isArguments(arguments) || (m.isArguments = function(e) {
      return m.has(e, "callee")
    }), "function" != typeof /./ && (m.isFunction = function(e) {
      return "function" == typeof e || !1
    }), m.isFinite = function(e) {
      return isFinite(e) && !isNaN(parseFloat(e))
    }, m.isNaN = function(e) {
      return m.isNumber(e) && e !== +e
    }, m.isBoolean = function(e) {
      return e === !0 || e === !1 || "[object Boolean]" === l.call(e)
    }, m.isNull = function(e) {
      return null === e
    }, m.isUndefined = function(e) {
      return void 0 === e
    }, m.has = function(e, t) {
      return null != e && u.call(e, t)
    }, m.noConflict = function() {
      return e._ = t, this
    }, m.identity = function(e) {
      return e
    }, m.constant = function(e) {
      return function() {
        return e
      }
    }, m.noop = function() {}, m.property = function(e) {
      return function(t) {
        return t[e]
      }
    }, m.matches = function(e) {
      var t = m.pairs(e),
        i = t.length;
      return function(e) {
        if (null == e) return !i;
        e = new Object(e);
        for (var a = 0; i > a; a++) {
          var n = t[a],
            r = n[0];
          if (n[1] !== e[r] || !(r in e)) return !1
        }
        return !0
      }
    }, m.times = function(e, t, i) {
      var a = Array(Math.max(0, e));
      t = p(t, i, 1);
      for (var n = 0; e > n; n++) a[n] = t(n);
      return a
    }, m.random = function(e, t) {
      return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, m.now = Date.now || function() {
      return (new Date).getTime()
    };
    var _ = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      },
      k = m.invert(_),
      w = function(e) {
        var t = function(t) {
            return e[t]
          },
          i = "(?:" + m.keys(e).join("|") + ")",
          a = RegExp(i),
          n = RegExp(i, "g");
        return function(e) {
          return e = null == e ? "" : "" + e, a.test(e) ? e.replace(n, t) : e
        }
      };
    m.escape = w(_), m.unescape = w(k), m.result = function(e, t) {
      if (null == e) return void 0;
      var i = e[t];
      return m.isFunction(i) ? e[t]() : i
    };
    var S = 0;
    m.uniqueId = function(e) {
      var t = ++S + "";
      return e ? e + t : t
    }, m.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var x = /(.)^/,
      A = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      C = /\\|'|\r|\n|\u2028|\u2029/g,
      M = function(e) {
        return "\\" + A[e]
      };
    m.template = function(e, t, i) {
      !t && i && (t = i), t = m.defaults({}, t, m.templateSettings);
      var a = RegExp([(t.escape || x).source, (t.interpolate || x).source, (t.evaluate || x).source].join("|") + "|$", "g"),
        n = 0,
        r = "__p+='";
      e.replace(a, function(t, i, a, o, s) {
        return r += e.slice(n, s).replace(C, M), n = s + t.length, i ? r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : a ? r += "'+\n((__t=(" + a + "))==null?'':__t)+\n'" : o && (r += "';\n" + o + "\n__p+='"), t
      }), r += "';\n", t.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
      try {
        var o = new Function(t.variable || "obj", "_", r)
      } catch (s) {
        throw s.source = r, s
      }
      var l = function(e) {
          return o.call(this, e, m)
        },
        u = t.variable || "obj";
      return l.source = "function(" + u + "){\n" + r + "}", l
    }, m.chain = function(e) {
      var t = m(e);
      return t._chain = !0, t
    };
    var z = function(e) {
      return this._chain ? m(e).chain() : e
    };
    m.mixin = function(e) {
      m.each(m.functions(e), function(t) {
        var i = m[t] = e[t];
        m.prototype[t] = function() {
          var e = [this._wrapped];
          return r.apply(e, arguments), z.call(this, i.apply(m, e))
        }
      })
    }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
      var t = i[e];
      m.prototype[e] = function() {
        var i = this._wrapped;
        return t.apply(i, arguments), "shift" !== e && "splice" !== e || 0 !== i.length || delete i[0], z.call(this, i)
      }
    }), m.each(["concat", "join", "slice"], function(e) {
      var t = i[e];
      m.prototype[e] = function() {
        return z.call(this, t.apply(this._wrapped, arguments))
      }
    }), m.prototype.value = function() {
      return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
      return m
    })
  }.call(this),
  function(e, t, i) {
    "use strict";
    t.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function(e, a) {
      function n() {
        var e, n, r, l;
        for (e in s) c(o[e]) && a.cookies(e, i);
        for (e in o) n = o[e], t.isString(n) || (n = "" + n, o[e] = n), n !== s[e] && (a.cookies(e, n), l = !0);
        if (l) {
          l = !1, r = a.cookies();
          for (e in o) o[e] !== r[e] && (c(r[e]) ? delete o[e] : o[e] = r[e], l = !0)
        }
      }
      var r, o = {},
        s = {},
        l = !1,
        u = t.copy,
        c = t.isUndefined;
      return a.addPollFn(function() {
        var t = a.cookies();
        r != t && (r = t, u(t, s), u(t, o), l && e.$apply())
      })(), l = !0, e.$watch(n), o
    }]).factory("$cookieStore", ["$cookies", function(e) {
      return {
        get: function(i) {
          var a = e[i];
          return a ? t.fromJson(a) : a
        },
        put: function(i, a) {
          e[i] = t.toJson(a)
        },
        remove: function(t) {
          delete e[t]
        }
      }
    }])
  }(window, window.angular), angular.module("angularPayments", []), angular.module("angularPayments").factory("Common", [function() {
    var e = {};
    return e.parseExpiry = function(e) {
      var t, i, a, n;
      return e = e || "", e = e.replace(/\s/g, ""), n = e.split("/", 2), t = n[0], a = n[1], 2 === (null != a ? a.length : void 0) && /^\d+$/.test(a) && (i = (new Date).getFullYear(), i = i.toString().slice(0, 2), a = i + a), t = parseInt(t, 10), a = parseInt(a, 10), {
        month: t,
        year: a
      }
    }, e
  }]), angular.module("angularPayments").factory("Cards", [function() {
    var e = /(\d{1,4})/g,
      t = /(?:^|\s)(\d{4})$/,
      i = [{
        type: "maestro",
        pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
        format: e,
        inputFormat: t,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: !0
      }, {
        type: "dinersclub",
        pattern: /^(36|38|30[0-5])/,
        format: e,
        inputFormat: t,
        length: [14],
        cvcLength: [3],
        luhn: !0
      }, {
        type: "laser",
        pattern: /^(6706|6771|6709)/,
        format: e,
        inputFormat: t,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: !0
      }, {
        type: "jcb",
        pattern: /^35/,
        format: e,
        inputFormat: t,
        length: [16],
        cvcLength: [3],
        luhn: !0
      }, {
        type: "unionpay",
        pattern: /^62/,
        format: e,
        inputFormat: t,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: !1
      }, {
        type: "discover",
        pattern: /^(6011|65|64[4-9]|622)/,
        format: e,
        inputFormat: t,
        length: [16],
        cvcLength: [3],
        luhn: !0
      }, {
        type: "mastercard",
        pattern: /^5[1-5]/,
        format: e,
        inputFormat: t,
        length: [16],
        cvcLength: [3],
        luhn: !0
      }, {
        type: "amex",
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        inputFormat: /^(\d{4}|\d{4}\s\d{6})$/,
        length: [15],
        cvcLength: [3, 4],
        luhn: !0
      }, {
        type: "visa",
        pattern: /^4/,
        format: e,
        inputFormat: t,
        length: [13, 14, 15, 16],
        cvcLength: [3],
        luhn: !0
      }],
      a = function(e) {
        var t, a, n;
        for (e = (e + "").replace(/\D/g, ""), a = 0, n = i.length; n > a; a++)
          if (t = i[a], t.pattern.test(e)) return t
      },
      n = function(e) {
        var t, a, n;
        for (a = 0, n = i.length; n > a; a++)
          if (t = i[a], t.type === e) return t
      };
    return {
      fromNumber: function(e) {
        return a(e)
      },
      fromType: function(e) {
        return n(e)
      },
      defaultFormat: function() {
        return e
      },
      defaultInputFormat: function() {
        return t
      }
    }
  }]), angular.module("angularPayments").factory("_Format", ["Cards", "Common", "$filter", function(e, t, i) {
    var a = {},
      n = function(e) {
        var t;
        return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") ? !0 : ("undefined" != typeof document && null !== document && null != (t = document.selection) && "function" == typeof t.createRange ? t.createRange().text : void 0) ? !0 : !1
      },
      r = function(t) {
        var i, a, n, r, o, s, l;
        if (n = String.fromCharCode(t.which), i = angular.element(t.currentTarget), l = i.val(), a = e.fromNumber(l + n), r = (l.replace(/\D/g, "") + n).length, s = 16, a && (s = a.length[a.length.length - 1]), !(r >= s)) {
          if (!/^\d+$/.test(n) && !t.meta && t.keyCode >= 46) return void t.preventDefault();
          if (null == i.prop("selectionStart") || i.prop("selectionStart") === l.length) return o = e.defaultInputFormat(), a && (o = a.inputFormat), o.test(l) ? (t.preventDefault(), i.val(l + " " + n)) : o.test(l + n) ? (t.preventDefault(), i.val(l + n + " ")) : void 0
        }
      },
      o = function(t) {
        var i, a, r, o;
        i = angular.element(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && (n(i) || (o = (i.val() + r).replace(/\D/g, ""), a = e.fromNumber(o), a ? o.length <= a.length[a.length.length - 1] || t.preventDefault() : o.length <= 16 || t.preventDefault()))
      },
      s = function(e) {
        var t, i;
        return t = angular.element(e.currentTarget), i = t.val(), e.meta || 8 !== e.which || null != t.prop("selectionStart") && t.prop("selectionStart") !== i.length ? void 0 : /\d\s$/.test(i) && !e.meta && e.keyCode >= 46 ? (e.preventDefault(), t.val(i.replace(/\d\s$/, ""))) : /\s\d?$/.test(i) ? (e.preventDefault(), t.val(i.replace(/\s\d?$/, ""))) : void 0
      },
      l = function(t) {
        var i, a, n, r;
        return (i = e.fromNumber(t)) ? (n = i.length[i.length.length - 1], t = t.replace(/\D/g, ""), t = t.slice(0, +n + 1 || 9e9), i.format.global ? null != (r = t.match(i.format)) ? r.join(" ") : void 0 : (a = i.format.exec(t), null != a && a.shift(), null != a ? a.join(" ") : void 0)) : t
      },
      u = function(e) {
        return setTimeout(function() {
          var t, i;
          return t = angular.element(e.target), i = t.val(), i = l(i), t.val(i)
        })
      },
      c = function(e) {
        return null != e ? e.replace(/\s/g, "") : e
      };
    a.card = function(e, t) {
      e.bind("keypress", o), e.bind("keypress", r), e.bind("keydown", s), e.bind("paste", u), t.$parsers.push(c), t.$formatters.push(l)
    }, _formatCVC = function(e) {
      return $target = angular.element(e.currentTarget), digit = String.fromCharCode(e.which), !/^\d+$/.test(digit) && !e.meta && e.keyCode >= 46 ? void e.preventDefault() : (val = $target.val() + digit, val.length <= 4 ? void 0 : void e.preventDefault())
    }, a.cvc = function(e) {
      e.bind("keypress", _formatCVC)
    }, _restrictExpiry = function(e) {
      var t, i, a;
      return t = angular.element(e.currentTarget), i = String.fromCharCode(e.which), !/^\d+$/.test(i) && !e.meta && e.keyCode >= 46 ? void e.preventDefault() : n(t) ? void 0 : (a = t.val() + i, a = a.replace(/\D/g, ""), a.length > 6 ? void e.preventDefault() : void 0)
    }, _formatExpiry = function(e) {
      var t, i, a;
      return i = String.fromCharCode(e.which), !/^\d+$/.test(i) && !e.meta && e.keyCode >= 46 ? void e.preventDefault() : (t = angular.element(e.currentTarget), a = t.val() + i, /^\d$/.test(a) && "0" !== a && "1" !== a ? (e.preventDefault(), t.val("0" + a + " / ")) : /^\d\d$/.test(a) ? (e.preventDefault(), t.val("" + a + " / ")) : void 0)
    }, _formatForwardExpiry = function(e) {
      var t, i, a;
      return i = String.fromCharCode(e.which), !/^\d+$/.test(i) && !e.meta && e.keyCode >= 46 ? void 0 : (t = angular.element(e.currentTarget), a = t.val(), /^\d\d$/.test(a) ? t.val("" + a + " / ") : void 0)
    }, _formatForwardSlash = function(e) {
      var t, i, a;
      return i = String.fromCharCode(e.which), "/" === i ? (t = angular.element(e.currentTarget), a = t.val(), /^\d$/.test(a) && "0" !== a ? t.val("0" + a + " / ") : void 0) : void 0
    }, _formatBackExpiry = function(e) {
      var t, i;
      if (!e.meta && (t = angular.element(e.currentTarget), i = t.val(), 8 === e.which && (null == t.prop("selectionStart") || t.prop("selectionStart") === i.length))) return /\d(\s|\/)+$/.test(i) ? (e.preventDefault(), t.val(i.replace(/\d(\s|\/)*$/, ""))) : /\s\/\s?\d?$/.test(i) ? (e.preventDefault(), t.val(i.replace(/\s\/\s?\d?$/, ""))) : void 0
    };
    var d = function(e) {
        if (null != e) {
          var a = t.parseExpiry(e),
            n = new Date(a.year, a.month - 1);
          return i("date")(n, "MM/yyyy")
        }
        return null
      },
      h = function(e) {
        if (null != e) {
          var a = t.parseExpiry(e),
            n = new Date(a.year, a.month - 1);
          return i("date")(n, "MM / yyyy")
        }
        return null
      };
    return a.expiry = function(e, t) {
        e.bind("keypress", _restrictExpiry), e.bind("keypress", _formatExpiry), e.bind("keypress", _formatForwardSlash), e.bind("keypress", _formatForwardExpiry), e.bind("keydown", _formatBackExpiry), t.$parsers.push(d), t.$formatters.push(h)
      },
      function(e, t, i) {
        if (!a[e]) throw types = Object.keys(a), errstr = 'Unknown type for formatting: "' + e + '". ', errstr += 'Should be one of: "' + types.join('", "') + '"';
        return a[e](t, i)
      }
  }]).directive("paymentsFormat", ["$window", "_Format", function(e, t) {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(e, i, a, n) {
        t(a.paymentsFormat, i, n)
      }
    }
  }]), angular.module("angularPayments").factory("_Validate", ["Cards", "Common", "$parse", function(e, t, i) {
    var a = [].indexOf || function(e) {
        for (var t = 0, i = this.length; i > t; t++)
          if (t in this && this[t] === e) return t;
        return -1
      },
      n = function(e) {
        var t, i, a, n, r, o;
        for (a = !0, n = 0, i = (e + "").split("").reverse(), r = 0, o = i.length; o > r; r++) t = i[r], t = parseInt(t, 10), (a = !a) && (t *= 2), t > 9 && (t -= 9), n += t;
        return n % 10 === 0
      },
      r = {};
    return r.cvc = function(t, n, r, o) {
        var s, l;
        if (null == t || 0 == t.length) return !0;
        if (!/^\d+$/.test(t)) return !1;
        var u;
        if (o.paymentsTypeModel) {
          var c = i(o.paymentsTypeModel);
          u = c(r)
        }
        return u ? (s = t.length, a.call(null != (l = e.fromType(u)) ? l.cvcLength : void 0, s) >= 0) : t.length >= 3 && t.length <= 4
      }, r.card = function(t, r, o, s) {
        var l, u, c;
        s.paymentsTypeModel && (c = i(s.paymentsTypeModel));
        var d = function() {
          c && c.assign(o, null), r.$card = null
        };
        return null == t || 0 == t.length ? (d(), !0) : (t = (t + "").replace(/\s+|-/g, ""), /^\d+$/.test(t) && (l = e.fromNumber(t)) ? (r.$card = angular.copy(l), c && c.assign(o, l.type), u = t.length, ret = a.call(l.length, u) >= 0 && (l.luhn === !1 || n(t)), ret) : (d(), !1))
      }, r.expiry = function(e) {
        if (null == e || 0 == e.length) return !0;
        obj = t.parseExpiry(e), month = obj.month, year = obj.year;
        var i, a, n;
        return month && year && /^\d+$/.test(month) && /^\d+$/.test(year) && parseInt(month, 10) <= 12 ? (2 === year.length && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), year = n + year), a = new Date(year, month), i = new Date, a.setMonth(a.getMonth() - 1), a.setMonth(a.getMonth() + 1, 1), a > i) : !1
      },
      function(e, t, i, a, n) {
        if (!r[e]) throw types = Object.keys(r), errstr = 'Unknown type for validation: "' + e + '". ', errstr += 'Should be one of: "' + types.join('", "') + '"';
        return r[e](t, i, a, n)
      }
  }]).factory("_ValidateWatch", ["_Validate", function(e) {
    var t = {};
    return t.cvc = function(t, i, a, n) {
        n.paymentsTypeModel && a.$watch(n.paymentsTypeModel, function(r, o) {
          if (r != o) {
            var s = e(t, i.$modelValue, i, a, n);
            i.$setValidity(t, s)
          }
        })
      },
      function(e, i, a, n) {
        return t[e] ? t[e](e, i, a, n) : void 0
      }
  }]).directive("paymentsValidate", ["$window", "_Validate", "_ValidateWatch", function(e, t, i) {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(e, a, n, r) {
        var o = n.paymentsValidate;
        i(o, r, e, n);
        var s = function(i) {
          var a = t(o, i, r, e, n);
          return r.$setValidity(o, a), a ? i : void 0
        };
        r.$formatters.push(s), r.$parsers.push(s)
      }
    }
  }]), angular.module("angularPayments").directive("stripeForm", ["$window", "$parse", "Common", function(e, t, a) {
    return _getDataToSend = function(e) {
      var t = ["number", "expMonth", "expYear", "cvc", "name", "addressLine1", "addressLine2", "addressCity", "addressState", "addressZip", "addressCountry"],
        a = function(e) {
          return e.replace(/([A-Z])/g, function(e) {
            return "_" + e.toLowerCase()
          })
        },
        n = {};
      for (i in t) t.hasOwnProperty(i) && (n[a(t[i])] = angular.copy(e[t[i]]));
      return n.number = (n.number || "").replace(/ /g, ""), n
    }, {
      restrict: "A",
      link: function(t, i, n) {
        if (!e.Stripe) throw "stripeForm requires that you have stripe.js installed. Include https://js.stripe.com/v2/ into your html.";
        var r = angular.element(i);
        r.bind("submit", function() {
          expMonthUsed = t.expMonth ? !0 : !1, expYearUsed = t.expYear ? !0 : !1, expMonthUsed && expYearUsed || (exp = a.parseExpiry(t.expiry), t.expMonth = exp.month, t.expYear = exp.year);
          var i = r.find("button");
          i.prop("disabled", !0), r.hasClass("ng-valid") ? e.Stripe.createToken(_getDataToSend(t), function() {
            var e = arguments;
            t.$apply(function() {
              t[n.stripeForm].apply(t, e)
            }), i.prop("disabled", !1)
          }) : (t.$apply(function() {}), i.prop("disabled", !1)), t.expMonth = null, t.expYear = null
        })
      }
    }
  }]),
  function(e) {
    "use strict";

    function t(e) {
      return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }

    function i(e, t) {
      var i = a(e, t) ? r : n;
      i(e, t)
    }
    var a, n, r;
    "classList" in document.documentElement ? (a = function(e, t) {
      return e.classList.contains(t)
    }, n = function(e, t) {
      e.classList.add(t)
    }, r = function(e, t) {
      e.classList.remove(t)
    }) : (a = function(e, i) {
      return t(i).test(e.className)
    }, n = function(e, t) {
      a(e, t) || (e.className = e.className + " " + t)
    }, r = function(e, i) {
      e.className = e.className.replace(t(i), " ")
    });
    var o = {
      hasClass: a,
      addClass: n,
      removeClass: r,
      toggleClass: i,
      has: a,
      add: n,
      remove: r,
      toggle: i
    };
    "function" == typeof define && define.amd ? define(o) : "object" == typeof exports ? module.exports = o : e.classie = o
  }(window),
  function(e) {
    "use strict";

    function t(e, t) {
      for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
      return e
    }

    function i(e) {
      this.options = t({}, this.options), t(this.options, e), this._init()
    }
    var a = (e.document.documentElement, {
        animations: Modernizr.cssanimations
      }),
      n = {
        WebkitAnimation: "webkitAnimationEnd",
        OAnimation: "oAnimationEnd",
        msAnimation: "MSAnimationEnd",
        animation: "animationend"
      },
      r = n[Modernizr.prefixed("animation")];
    i.prototype.options = {
      wrapper: document.body,
      message: "yo!",
      layout: "growl",
      effect: "slide",
      type: "error",
      ttl: 6e3,
      onClose: function() {
        return !1
      },
      onOpen: function() {
        return !1
      }
    }, i.prototype._init = function() {
      this.ntf = document.createElement("div"), this.ntf.className = "ns-box ns-" + this.options.layout + " ns-effect-" + this.options.effect + " ns-type-" + this.options.type;
      var e = '<div class="ns-box-inner">';
      e += this.options.message, e += "</div>", e += '<span class="ns-close"></span></div>', this.ntf.innerHTML = e, this.options.wrapper.insertBefore(this.ntf, this.options.wrapper.firstChild);
      var t = this;
      this.dismissttl = setTimeout(function() {
        t.active && t.dismiss()
      }, this.options.ttl), this._initEvents()
    }, i.prototype._initEvents = function() {
      var e = this;
      this.ntf.querySelector(".ns-close").addEventListener("click", function() {
        e.dismiss()
      })
    }, i.prototype.show = function() {
      this.active = !0, classie.remove(this.ntf, "ns-hide"), classie.add(this.ntf, "ns-show"), this.options.onOpen()
    }, i.prototype.dismiss = function() {
      var e = this;
      this.active = !1, clearTimeout(this.dismissttl), classie.remove(this.ntf, "ns-show"), setTimeout(function() {
        classie.add(e.ntf, "ns-hide"), e.options.onClose()
      }, 25);
      var t = function(i) {
        if (a.animations) {
          if (i.target !== e.ntf) return !1;
          this.removeEventListener(r, t)
        }
        e.options.wrapper.removeChild(this)
      };
      a.animations ? this.ntf.addEventListener(r, t) : t()
    }, e.NotificationFx = i
  }(window),
  function(e) {
    window.NestedFormEvents = function() {
      this.addFields = e.proxy(this.addFields, this), this.removeFields = e.proxy(this.removeFields, this)
    }, NestedFormEvents.prototype = {
      addFields: function(t) {
        var i = t.currentTarget,
          a = e(i).data("association"),
          n = e("#" + e(i).data("blueprint-id")),
          r = n.data("blueprint"),
          o = (e(i).closest(".fields").closestChild("input, textarea, select").eq(0).attr("name") || "").replace(new RegExp("[[a-z_]+]$"), "");
        if (o)
          for (var s = o.match(/[a-z_]+_attributes(?=\]\[(new_)?\d+\])/g) || [], l = o.match(/[0-9]+/g) || [], u = 0; u < s.length; u++) l[u] && (r = r.replace(new RegExp("(_" + s[u] + ")_.+?_", "g"), "$1_" + l[u] + "_"), r = r.replace(new RegExp("(\\[" + s[u] + "\\])\\[.+?\\]", "g"), "$1[" + l[u] + "]"));
        var c = new RegExp("new_" + a, "g"),
          d = this.newId();
        r = e.trim(r.replace(c, d));
        var h = this.insertFields(r, a, i);
        return h.trigger({
          type: "nested:fieldAdded",
          field: h
        }).trigger({
          type: "nested:fieldAdded:" + a,
          field: h
        }), !1
      },
      newId: function() {
        return (new Date).getTime()
      },
      insertFields: function(t, i, a) {
        var n = e(a).data("target");
        return n ? e(t).appendTo(e(n)) : e(t).insertBefore(a)
      },
      removeFields: function(t) {
        var i = e(t.currentTarget),
          a = i.data("association"),
          n = i.prev("input[type=hidden]");
        n.val("1");
        var r = i.closest(".fields");
        return r.hide(), r.trigger({
          type: "nested:fieldRemoved",
          field: r
        }).trigger({
          type: "nested:fieldRemoved:" + a,
          field: r
        }), !1
      }
    }, window.nestedFormEvents = new NestedFormEvents, e(document).delegate("form a.add_nested_fields", "click", nestedFormEvents.addFields).delegate("form a.remove_nested_fields", "click", nestedFormEvents.removeFields)
  }(jQuery),
  function(e) {
    e.fn.closestChild = function(t) {
      if (t && "" != t) {
        var i = [];
        for (i.push(this); i.length > 0;)
          for (var a = i.shift(), n = a.children(), r = 0; r < n.length; ++r) {
            var o = e(n[r]);
            if (o.is(t)) return o;
            i.push(o)
          }
      }
      return e()
    }
  }(jQuery),
  function(e, t, i, a) {
    var n = e(t);
    e.fn.lazyload = function(r) {
      function o() {
        var t = 0;
        l.each(function() {
          var i = e(this);
          if (!u.skip_invisible || i.is(":visible"))
            if (e.abovethetop(this, u) || e.leftofbegin(this, u));
            else if (e.belowthefold(this, u) || e.rightoffold(this, u)) {
            if (++t > u.failure_limit) return !1
          } else i.trigger("appear"), t = 0
        })
      }
      var s, l = this,
        u = {
          threshold: 0,
          failure_limit: 0,
          event: "scroll",
          effect: "show",
          container: t,
          data_attribute: "original",
          skip_invisible: !1,
          appear: null,
          load: null,
          placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
      return r && (a !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), a !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), e.extend(u, r)), s = u.container === a || u.container === t ? n : e(u.container), 0 === u.event.indexOf("scroll") && s.bind(u.event, function() {
        return o()
      }), n.bind("resize", function() {
        o()
      }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && n.bind("pageshow", function(t) {
        t.originalEvent && t.originalEvent.persisted && l.each(function() {
          e(this).trigger("appear")
        })
      }), e(i).ready(function() {
        o()
      }), this
    }, e.belowthefold = function(i, r) {
      var o;
      return o = r.container === a || r.container === t ? (t.innerHeight ? t.innerHeight : n.height()) + n.scrollTop() : e(r.container).offset().top + e(r.container).height(), o <= e(i).offset().top - r.threshold
    }, e.rightoffold = function(i, r) {
      var o;
      return o = r.container === a || r.container === t ? n.width() + n.scrollLeft() : e(r.container).offset().left + e(r.container).width(), o <= e(i).offset().left - r.threshold
    }, e.abovethetop = function(i, r) {
      var o;
      return o = r.container === a || r.container === t ? n.scrollTop() : e(r.container).offset().top, o >= e(i).offset().top + r.threshold + e(i).height()
    }, e.leftofbegin = function(i, r) {
      var o;
      return o = r.container === a || r.container === t ? n.scrollLeft() : e(r.container).offset().left, o >= e(i).offset().left + r.threshold + e(i).width()
    }, e.inviewport = function(t, i) {
      return !(e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
    }, e.extend(e.expr[":"], {
      "below-the-fold": function(t) {
        return e.belowthefold(t, {
          threshold: 0
        })
      },
      "above-the-top": function(t) {
        return !e.belowthefold(t, {
          threshold: 0
        })
      },
      "right-of-screen": function(t) {
        return e.rightoffold(t, {
          threshold: 0
        })
      },
      "left-of-screen": function(t) {
        return !e.rightoffold(t, {
          threshold: 0
        })
      },
      "in-viewport": function(t) {
        return e.inviewport(t, {
          threshold: 0
        })
      },
      "above-the-fold": function(t) {
        return !e.belowthefold(t, {
          threshold: 0
        })
      },
      "right-of-fold": function(t) {
        return e.rightoffold(t, {
          threshold: 0
        })
      },
      "left-of-fold": function(t) {
        return !e.rightoffold(t, {
          threshold: 0
        })
      }
    })
  }(jQuery, window, document),
  function() {
    var e, t = {}.hasOwnProperty,
      i = function(e, i) {
        function a() {
          this.constructor = e
        }
        for (var n in i) t.call(i, n) && (e[n] = i[n]);
        return a.prototype = i.prototype, e.prototype = new a, e.__super__ = i.prototype, e
      };
    e = function(e) {
      function t() {
        return t.__super__.constructor.apply(this, arguments)
      }
      return i(t, e), t.$inject = [], t.prototype.initialize = function() {
        return angular.element(document).foundation()
      }, t.prototype.equalize = function() {
        return window.Foundation.libs.equalizer.reflow()
      }, t
    }(this.NGService), this.App.service("Foundation", e)
  }.call(this),
  function() {
    var e, t = {}.hasOwnProperty,
      i = function(e, i) {
        function a() {
          this.constructor = e
        }
        for (var n in i) t.call(i, n) && (e[n] = i[n]);
        return a.prototype = i.prototype, e.prototype = new a, e.__super__ = i.prototype, e
      };
    e = function(e) {
      function t() {
        return t.__super__.constructor.apply(this, arguments)
      }
      return i(t, e), t.$inject = [], t.prototype.render = function() {
        return this.notify("render:form")
      }, t
    }(this.NGService), this.App.service("NLFormManager", e)
  }.call(this),
  function() {
    var e, t = {}.hasOwnProperty,
      i = function(e, i) {
        function a() {
          this.constructor = e
        }
        for (var n in i) t.call(i, n) && (e[n] = i[n]);
        return a.prototype = i.prototype, e.prototype = new a, e.__super__ = i.prototype, e
      };
    e = function(e) {
      function t() {
        return t.__super__.constructor.apply(this, arguments)
      }
      return i(t, e), t.$inject = [], t.prototype.notice = null, t.prototype.create = function(e, t, i) {
        return null == t && (t = "success"), null == i && (i = 6e3), this.notice = new NotificationFx({
          message: this.message(e),
          layout: "growl",
          ttl: i,
          effect: "jelly",
          type: t
        }).show()
      }, t.prototype.message = function(e) {
        return "<p>" + e + "</p>"
      }, t
    }(this.NGService), this.App.service("Notice", e)
  }.call(this),
  function() {
    App.directive("backToTop", ["$window", function(e) {
      return {
        restrict: "C",
        link: function(t, i) {
          var a, n;
          return a = document.documentElement, n = angular.element(e), n.on("load scroll", function() {
            return a.scrollTop > 200 ? i.fadeIn() : i.fadeOut()
          }), i.bind("click", function() {
            return window.scrollTo(0, 0)
          })
        }
      }
    }])
  }.call(this),
  function() {
    this.App.directive("backgroundImage", function() {
      return function(e, t, i) {
        var a;
        return a = i.backgroundImage, t.css({
          "background-image": "url('" + a + "')",
          "background-size": i.backgroundSize || "cover",
          "background-position": i.backgroundPosition || "center center",
          "background-repeat": "no-repeat"
        })
      }
    })
  }.call(this),
  function() {
    this.App.directive("reserve", function() {
      return function(e, t) {
        return t.on("click", function() {
          var e, t, i;
          return t = angular.element("body"), i = angular.element("section#header"), e = angular.element(".book-now"), i.hasClass("solid") || i.addClass("solid"), e.hasClass("booking") ? e.removeClass("overflow") : setTimeout(function() {
            return e.toggleClass("overflow")
          }, 500), e.toggleClass("booking")
        })
      }
    })
  }.call(this),
  function() {
    App.directive("checkboxButtons", ["$window", function() {
      return {
        restrict: "A",
        link: function(e, t) {
          var i;
          return i = t.find("input:checkbox"), i.addClass("as-button")
        }
      }
    }])
  }.call(this),
  function() {
    this.App.directive("checklistModel", ["$parse", "$compile", function(e, t) {
      var i, a, n, r;
      return a = function(e, t) {
        var i;
        if (angular.isArray(e))
          for (i = 0; i < e.length;) {
            if (angular.equals(e[i], t)) return !0;
            i++
          }
        return !1
      }, i = function(e, t) {
        var i;
        for (e = angular.isArray(e) ? e : [], i = 0; i < e.length;) {
          if (angular.equals(e[i], t)) return e;
          i++
        }
        return e.push(t), e
      }, r = function(e, t) {
        var i;
        if (angular.isArray(e))
          for (i = 0; i < e.length;) {
            if (angular.equals(e[i], t)) {
              e.splice(i, 1);
              break
            }
            i++
          }
        return e
      }, n = function(n, o, s) {
        var l, u, c;
        t(o)(n), l = e(s.checklistModel), u = l.assign, c = e(s.checklistValue)(n.$parent), n.$watch("checked", function(e, t) {
          var a;
          e !== t && (a = l(n.$parent), e === !0 ? u(n.$parent, i(a, c)) : u(n.$parent, r(a, c)))
        }), n.$parent.$watch(s.checklistModel, function(e) {
          n.checked = a(e, c)
        }, !0)
      }, {
        restrict: "A",
        priority: 1e3,
        terminal: !0,
        scope: !0,
        compile: function(e, t) {
          if ("INPUT" !== e[0].tagName || !e.attr("type", "checkbox")) throw 'checklist-model should be applied to `input[type="checkbox"]`.';
          if (!t.checklistValue) throw "You should provide `checklist-value`.";
          return e.removeAttr("checklist-model"), e.attr("ng-model", "checked"), n
        }
      }
    }])
  }.call(this),
  function() {
    this.App.directive("clearField", function() {
      return function(e, t) {
        var i;
        return i = t.val(), t.on("focus", function() {
          return "0" === i ? t.val("") : void 0
        }), t.on("focusout", function() {
          return i = t.val()
        })
      }
    })
  }.call(this),
  function() {
    App.directive("companyMenu", ["$window", "$timeout", function() {
      return function(e, t) {
        var i;
        return t.find("a:not(.current)").on("mouseover", function() {
          return i(!0)
        }), t.on("mouseout", function() {
          return i(!1)
        }), i = function(e) {
          return t.find("a.current").toggleClass("hide-current", e)
        }
      }
    }])
  }.call(this),
  function() {
    this.App.directive("externalMarker", ["Map", function(e) {
      return function(t, i) {
        var a, n;
        return i.on("mouseover", function() {
          return a(i)
        }), i.on("mouseout", function() {
          return n(i)
        }), a = function(t) {
          var i, a, n, r, o;
          for (r = e.existingMarkers, o = [], a = 0, n = r.length; n > a; a++) i = r[a], i.serviceObject.title === t.text() ? (i.serviceObject.setIcon("https://d26oxw2p26xsun.cloudfront.net/assets/maps/province_marker_hover-43d179b91ff1a910bc63c1d392076530.png"), o.push(i.serviceObject.setAnimation(google.maps.Animation.BOUNCE))) : o.push(void 0);
          return o
        }, n = function(t) {
          var i, a, n, r, o;
          for (r = e.existingMarkers, o = [], a = 0, n = r.length; n > a; a++) i = r[a], i.serviceObject.title === t.text() ? (i.serviceObject.setIcon("https://d26oxw2p26xsun.cloudfront.net/assets/maps/province_marker-22ab6cc27110b4c255b96f2fe94084cc.png"), o.push(i.serviceObject.setAnimation(null))) : o.push(void 0);
          return o
        }
      }
    }])
  }.call(this),
  function() {
    App.directive("focusOn", ["$timeout", function() {
      return {
        restrict: "A",
        link: function(e, t, i) {
          var a;
          return a = angular.element(i.focusOn), t.on("click", function(e) {
            return e.preventDefault(), a.focus()
          })
        }
      }
    }])
  }.call(this),
  function() {
    this.App.directive("howitworksSteps", function() {
      return function(e, t) {
        return t.on("click", function() {
          return angular.element("#desktop").toggleClass("toggled")
        })
      }
    })
  }.call(this),
  function() {
    App.directive("lightbox", ["$window", function() {
      return {
        restrict: "AC",
        link: function(e, t) {
          return t.on("click", function(e) {
            var t, i, a, n, r;
            e = e || angular.element(window).event, r = e.target || e.srcElement, i = r.src ? r.parentNode : r, a = this.getElementsByClassName("slide"), n = {
              index: i,
              event: e
            }, t = {
              thumbnailProperty: i
            }, blueimp.Gallery(a, n)
          })
        }
      }
    }])
  }.call(this),
  function() {
    App.directive("loader", function() {
      return function(e, t) {
        return e.$watch("loading", function(e) {
          return t.toggleClass("loader", e)
        })
      }
    })
  }.call(this),
  function() {
    this.App.directive("nlForm", ["NLFormManager", function(e) {
      return function() {
        return e.on("render:form", function() {
          return void 0 !== window.nlform && window.nlform.redraw(), window.nlform = new NLForm(document.getElementById("nl-form"))
        })
      }
    }])
  }.call(this),
  function() {
    this.App.directive("notice", ["Notice", function(e) {
      return function(t, i, a) {
        return e.create(a.noticeMessage, a.noticeLevel)
      }
    }])
  }.call(this),
  function() {
    App.directive("onBlur", ["$parse", "$timeout", function(e, t) {
      return function(i, a, n) {
        var r;
        return r = e(n.onBlur), a.bind("blur", function(e) {
          return i.$apply(function() {
            return t(function() {
              return r(i, {
                $event: e
              })
            }, 500)
          })
        })
      }
    }])
  }.call(this),
  function() {
    App.directive("onFocus", ["$parse", function(e) {
      return function(t, i, a) {
        var n;
        return n = e(a.onFocus), i.bind("focus", function(e) {
          return t.$apply(function() {
            return n(t, {
              $event: e
            })
          })
        })
      }
    }])
  }.call(this),
  function() {
    App.directive("onScroll", ["$window", function(e) {
      return {
        restrict: "A",
        link: function(t, i, a) {
          var n, r, o;
          return r = parseInt(a.threshold) || 500, n = a.enable || !0, o = angular.element(e), o.on("scroll", function() {
            var e;
            return e = angular.element(document).height() - (o.scrollTop() + o.height()), n && r >= e ? t.$apply(a.onScroll) : void 0
          })
        }
      }
    }])
  }.call(this),
  function() {
    App.directive("onStop", ["$window", "$timeout", function() {
      return {
        restrict: "A",
        link: function(e, t, i) {
          var a;
          return t.on("keyup", function() {
            return e.typingTimer = setTimeout(a, 700)
          }), t.on("keydown", function() {
            return clearTimeout(e.typingTimer)
          }), a = function() {
            return e.$eval(i.onStop)
          }
        }
      }
    }])
  }.call(this),
  function() {
    this.App.directive("openPosition", function() {
      return function(e, t) {
        return t.on("click", function() {
          return t.toggleClass("expand")
        })
      }
    })
  }.call(this),
  function() {
    App.directive("radioButtons", ["$window", function() {
      return {
        restrict: "A",
        link: function(e, t) {
          var i;
          return i = t.find("input:radio"), i.addClass("as-button")
        }
      }
    }])
  }.call(this),
  function() {
    App.directive("scrollTo", function() {
      return {
        restrict: "A",
        link: function(e, t, i) {
          return t.bind("click", function() {
            return window.scrollTo(i.scrollTo)
          })
        }
      }
    })
  }.call(this),
  function() {
    App.directive("selectx", ["$window", function() {
      return {
        restrict: "E",
        transclude: "element",
        replace: !0,
        template: '<div class="select-wrapper" ng-transclude></div>',
        link: function(e, t) {
          return t.find("select").focusin(function() {
            return t.addClass("focused")
          }), t.find("select").focusout(function() {
            return t.removeClass("focused")
          })
        }
      }
    }])
  }.call(this),
  function() {
    App.directive("stickyNav", ["$window", function(e) {
      return {
        restrict: "A",
        link: function(t, i) {
          var a, n, r;
          return a = i.height(), n = i.offset(), r = angular.element(e), r.on("load scroll", function() {
            return i.hasClass("light") ? void 0 : i.toggleClass("stuck", r.scrollTop() > 75)
          })
        }
      }
    }])
  }.call(this),
  function() {
    App.directive("stripeForm", function() {
      return function(e, t, i) {
        var a;
        return t.on("submit", function() {
          var e;
          return "false" === i.stripeForm ? (t.get(0).submit(), !1) : (console.log("creating token..."), e = !1, e ? a(200, {
            id: "tok_u5dg20Gra"
          }) : Stripe.card.createToken(angular.element(t), a), !1)
        }), a = function(e, i) {
          var a, n;
          return console.log(e, i), a = angular.element("#booking_gateway_token"), i.error ? alert(i.error.message) : (console.log("response: " + i.id), n = i.id, a.val(n), t.get(0).submit())
        }
      }
    })
  }.call(this),
  function() {
    App.directive("submitOnChange", function() {
      return function(e, t) {
        return t.parents("form").length > 0 ? t.on("change", function() {
          return t.parents("form")[0].submit()
        }) : t.find("input, select").on("change", function() {
          return t.submit()
        })
      }
    })
  }.call(this),
  function() {
    this.App.directive("vim", ["$window", function(e) {
      return function(t, i) {
        var a, n, r, o, s;
        return s = angular.element(e), s.on("keydown", function(e) {
          switch (e.which) {
            case 74:
            case 40:
              return a();
            case 75:
            case 38:
              return o();
            case 13:
              return r()
          }
        }), a = function() {
          var e;
          return 0 === i.children(".active").length ? i.children().first().addClass("active") : (e = n(), e.next().addClass("active"), e.removeClass("active"))
        }, o = function() {
          var e;
          return e = n(), e.prev().addClass("active"), e.removeClass("active")
        }, r = function() {
          var e, t;
          return e = n(), t = e.find("[primary]").length > 0 ? e.find("[primary]")[0] : e.find("a")[0], t.click()
        }, n = function() {
          var e, t;
          return e = i.children(".active"), t = i.children().first(), e.length > 0 ? e : t
        }
      }
    }])
  }.call(this),
  function() {
    App.filter("alphabetize", function() {
      return function(e, t) {
        var i, a, n, r;
        if (r = function(e) {
            return e && "object" == typeof e && e instanceof Array && "number" == typeof e.length && "function" == typeof e.splice && !e.propertyIsEnumerable("length")
          }, a = function(e, t) {
            var i, a;
            return i = typeof e, a = typeof t, i === a ? ("string" === i && (e = e.toLowerCase()), "string" === i && (t = t.toLowerCase()), e === t ? 0 : t > e ? -1 : 1) : a > i ? -1 : 1
          }, !r(e)) return e;
        if (!t) return e;
        for (i = [], n = 0; n < e.length;) i.push(e[n]), n++;
        return i.sort(function() {
          return function(e, i) {
            return a(t(e), t(i))
          }
        }(this))
      }
    })
  }.call(this),
  function() {
    App.filter("currency", ["$filter", function(e) {
      return function(t) {
        var i, a, n, r, o, s;
        return i = "$", a = 0, s = ",", n = ".", o = isNaN(t) || "" === t || null === t ? 0 : t, r = 0 > t, o = Math.abs(o), o = e("number")(o, a), "," !== s && (o = o.replace(/\,/g, "T")), "." !== n && (o = o.replace(/\./g, "D")), o = o.replace(/T/g, s), o = o.replace(/D/g, n), r ? "-" + i + o : i + o
      }
    }])
  }.call(this),
  function() {
    App.filter("querystring", function() {
      return function(e) {
        var t, i;
        i = [];
        for (t in e) i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
        return i.join("&")
      }
    })
  }.call(this),
  function() {
    App.filter("truncate", function() {
      return function(e, t, i) {
        return isNaN(t) && (t = 10), void 0 === i && (i = "..."), void 0 !== e ? e.length <= t || e.length - i.length <= t ? e : String(e).substring(0, t - i.length) + i : void 0
      }
    })
  }.call(this),
  function() {
    var e, t, i, a, n;
    $(function() {
      return a(), $(".lazy").lazyload({
        threshold: 700
      }), $("html, body").trigger("scroll"), e(), $(document).foundation(), $(document).foundation({
        equalizer: {
          equalize_on_stack: !0
        }
      }), setTimeout(function() {
        i()
      }, 2e3)
    }), n = function(e) {
      return e.setDate(e.getDate() - 3), e > new Date
    }, t = function(e) {
      var t;
      return t = new Date, t > e ? !1 : (e.setDate(e.getDate() - 3), e > t ? !1 : !0)
    }, a = function() {
      var e;
      return e = {
        init: !1,
        reset: !1,
        viewportFactor: 0
      }, window.scrollReveal = new scrollReveal(e)
    }, i = function() {
      return $("li[real-image]").each(function() {
        $(this).css({
          "background-image": "url(" + $(this).attr("real-image") + ")",
          "background-size": "cover",
          "background-position": "50% 15%",
          "background-repeat": "no-repeat"
        })
      })
    }, e = function() {
      var e;
      return e = 150, document.addEventListener("invalid", function(t) {
        $(t.target).addClass("invalid"), $("html, body").animate({
          scrollTop: $($(".invalid")[0]).offset().top - e
        }, 0)
      }, !0), document.addEventListener("change", function(e) {
        $(e.target).removeClass("invalid")
      }, !0)
    }, $("form").submit(function(e) {
      var t;
      return t = $(this).find("[required]"), $(t).each(function() {
        return "" === $(this).val() ? (alert("Required field should not be blank."), $(this).focus(), e.preventDefault(), !1) : void 0
      }), !0
    }), $(document).on("mouseover", ".ui-datepicker", function() {
      return $(this).find("td.reserved").attr("data-tooltip", ""), $(document).foundation("tooltip", "reflow")
    }), $(document).on("nested:fieldAdded", function(e) {
      var t, i;
      return i = e.field, t = i.find("[ui-date]"), t.datepicker()
    }), $(document).on("ready", function() {
      return $(".flexslider.manual").flexslider()
    }), $(window).on("load", function() {
      return scrollReveal.init()
    })
  }.call(this);
