/*
 Highcharts 4.2.3 JS v/Highstock 4.2.3 (2016-02-08)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license

 Highcharts funnel module

 (c) 2010-2016 Torstein Honsi

 License: www.highcharts.com/license
 Highcharts 4.2.3 JS v/Highstock 4.2.3 (2016-02-08)
 Exporting module

 (c) 2010-2016 Torstein Honsi

 License: www.highcharts.com/license
 Highcharts 4.2.3 JS v/Highstock 4.2.3 (2016-02-08)
 Data module

 (c) 2012-2016 Torstein Honsi

 License: www.highcharts.com/license
 Highcharts 4.2.3 JS v/Highstock 4.2.3 (2016-02-08)
 Plugin for displaying a message when there is no data visible in chart.

 (c) 2010-2016 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
  Highcharts 4.2.3 JS v/Highstock 4.2.3 (2016-02-08)
 Solid angular gauge module

 (c) 2010-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(t, U) {
    "object" === typeof module && module.exports ? module.exports = t.document ? U(t) : U : t.Highcharts = U(t)
})("undefined" !== typeof window ? window : this, function(t) {
    function U(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw Error(c);
        t.console && console.log(c)
    }

    function X(a, b, c) {
        this.options = b;
        this.elem = a;
        this.prop = c
    }

    function z() {
        var a, b = arguments,
            c, d = {},
            e = function(a, b) {
                var c, d;
                "object" !== typeof a && (a = {});
                for (d in b) b.hasOwnProperty(d) && ((c = b[d]) && "object" === typeof c && "[object Array]" !==
                    Object.prototype.toString.call(c) && "renderTo" !== d && "number" !== typeof c.nodeType ? a[d] = e(a[d] || {}, c) : a[d] = b[d]);
                return a
            };
        !0 === b[0] && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }

    function G(a, b) {
        return parseInt(a, b || 10)
    }

    function ea(a) {
        return "string" === typeof a
    }

    function I(a) {
        return a && "object" === typeof a
    }

    function O(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function k(a) {
        return "number" === typeof a
    }

    function p(a) {
        return oa.log(a) / oa.LN10
    }

    function P(a) {
        return oa.pow(10,
            a)
    }

    function y(a, b) {
        for (var c = a.length; c--;)
            if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }

    function q(a) {
        return a !== J && null !== a
    }

    function B(a, b, c) {
        var d, e;
        if (ea(b)) q(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (q(b) && I(b))
            for (d in b) a.setAttribute(d, b[d]);
        return e
    }

    function pa(a) {
        return O(a) ? a : [a]
    }

    function ta(a, b, c) {
        if (b) return setTimeout(a, b, c);
        a.call(0, c)
    }

    function F(a, b) {
        Ra && !ya && b && b.opacity !== J && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")");
        M(a.style, b)
    }

    function S(a, b, c, d, e) {
        a = Z.createElement(a);
        b && M(a, b);
        e && F(a, {
            padding: 0,
            border: "none",
            margin: 0
        });
        c && F(a, c);
        d && d.appendChild(a);
        return a
    }

    function C(a, b) {
        var c = function() {};
        c.prototype = new a;
        M(c.prototype, b);
        return c
    }

    function x(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function D(a, b) {
        return /%$/.test(a) ? b * parseFloat(a) / 100 : parseFloat(a)
    }

    function N(a) {
        return 6E4 * (fb && fb(a) || zb || 0)
    }

    function R(a, b) {
        for (var c = "{", d = !1, e, f, g, h, l, m = []; - 1 !== (c = a.indexOf(c));) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                l = g.length;
                e = b;
                for (h =
                    0; h < l; h++) e = e[g[h]];
                f.length && (f = f.join(":"), g = /\.([0-9])/, h = la.lang, l = void 0, /f$/.test(f) ? (l = (l = f.match(g)) ? l[1] : -1, null !== e && (e = T.numberFormat(e, l, h.decimalPoint, -1 < f.indexOf(",") ? h.thousandsSep : ""))) : e = za(f, e))
            }
            m.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        m.push(a);
        return m.join("")
    }

    function W(a) {
        return oa.pow(10, fa(oa.log(a) / oa.LN10))
    }

    function Ya(a, b, c, d, e) {
        var f, g = a;
        c = A(c, 1);
        f = a / c;
        b || (b = [1, 2, 2.5, 5, 10], !1 === d && (1 === c ? b = [1, 2, 5, 10] : .1 >= c && (b = [1 / c])));
        for (d = 0; d < b.length && !(g = b[d], e && g * c >= a || !e && f <=
                (b[d] + (b[d + 1] || b[d])) / 2); d++);
        return g * c
    }

    function qb(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].safeI = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return 0 === d ? a.safeI - c.safeI : d
        });
        for (e = 0; e < c; e++) delete a[e].safeI
    }

    function ba(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function Ga(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function Ja(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }

    function Ka(a) {
        rb || (rb = S("div"));
        a && rb.appendChild(a);
        rb.innerHTML =
            ""
    }

    function ra(a, b) {
        return parseFloat(a.toPrecision(b || 14))
    }

    function Sa(a, b) {
        b.renderer.globalAnimation = A(a, b.animation)
    }

    function ua() {
        var a = la.global,
            b = a.useUTC,
            c = b ? "getUTC" : "get",
            d = b ? "setUTC" : "set";
        wa = a.Date || t.Date;
        zb = b && a.timezoneOffset;
        fb = b && a.getTimezoneOffset;
        sb = function(a, c, d, h, l, m) {
            var n;
            b ? (n = wa.UTC.apply(0, arguments), n += N(n)) : n = (new wa(a, c, A(d, 1), A(h, 0), A(l, 0), A(m, 0))).getTime();
            return n
        };
        Ab = c + "Minutes";
        Bb = c + "Hours";
        Cb = c + "Day";
        gb = c + "Date";
        hb = c + "Month";
        ib = c + "FullYear";
        Qb = d + "Milliseconds";
        Rb = d + "Seconds";
        Sb = d + "Minutes";
        Tb = d + "Hours";
        Db = d + "Date";
        Eb = d + "Month";
        Fb = d + "FullYear"
    }

    function ja(a) {
        if (!(this instanceof ja)) return new ja(a);
        this.init(a)
    }

    function ka() {}

    function sa(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        c || d || this.addLabel()
    }

    function jb(a, b, c, d, e) {
        var f = a.chart.inverted;
        this.axis = a;
        this.isNegative = c;
        this.options = b;
        this.x = d;
        this.total = null;
        this.points = {};
        this.stack = e;
        this.rightCliff = this.leftCliff = 0;
        this.alignOptions = {
            align: b.align || (f ? c ? "left" : "right" : "center"),
            verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"),
            y: A(b.y, f ? 4 : c ? 14 : -6),
            x: A(b.x, f ? c ? -6 : 6 : 0)
        };
        this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center")
    }

    function cb(a) {
        var b = a.options,
            c = b.navigator,
            d = c.enabled,
            b = b.scrollbar,
            e = b.enabled,
            f = d ? c.height : 0,
            g = e ? b.height : 0;
        this.handles = [];
        this.scrollbarButtons = [];
        this.elementsToDestroy = [];
        this.chart = a;
        this.setBaseSeries();
        this.height = f;
        this.scrollbarHeight = g;
        this.scrollbarEnabled = e;
        this.navigatorEnabled = d;
        this.navigatorOptions = c;
        this.scrollbarOptions =
            b;
        this.outlineHeight = f + g;
        this.init()
    }

    function Gb(a) {
        this.init(a)
    }

    function Ub(a, b, c) {
        this.init(a, b, c)
    }
    var J, Z = t.document,
        oa = Math,
        L = oa.round,
        fa = oa.floor,
        La = oa.ceil,
        K = oa.max,
        V = oa.min,
        ma = oa.abs,
        Ca = oa.cos,
        Ma = oa.sin,
        Na = oa.PI,
        Za = 2 * Na / 360,
        Ta = t.navigator && t.navigator.userAgent || "",
        Vb = t.opera,
        Ra = /(msie|trident|edge)/i.test(Ta) && !Vb,
        tb = !Ra && /AppleWebKit/.test(Ta),
        $a = /Firefox/.test(Ta),
        kb = /(Mobile|Android|Windows Phone)/.test(Ta),
        ya = Z && Z.createElementNS && !!Z.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        ec = $a && 4 > parseInt(Ta.split("Firefox/")[1], 10),
        Ha = Z && !ya && !Ra && !!Z.createElement("canvas").getContext,
        db, Wb = {},
        Hb = 0,
        rb, la, za, ga, na = function() {},
        va = [],
        lb = 0,
        fc = /^[0-9]+$/,
        ub = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
        wa, sb, zb, fb, Ab, Bb, Cb, gb, hb, ib, Qb, Rb, Sb, Tb, Db, Eb, Fb, Q = {},
        T;
    T = t.Highcharts ? U(16, !0) : {
        win: t
    };
    T.seriesTypes = Q;
    var Ua = [],
        Fa, Da, v, Va, Ib, Aa, Y, qa, ha, eb, Wa;
    X.prototype = {
        dSetter: function() {
            var a = this.paths[0],
                b = this.paths[1],
                c = [],
                d = this.now,
                e = a.length,
                f;
            if (1 === d) c = this.toD;
            else if (e === b.length &&
                1 > d)
                for (; e--;) f = parseFloat(a[e]), c[e] = isNaN(f) ? a[e] : d * parseFloat(b[e] - f) + f;
            else c = b;
            this.elem.attr("d", c)
        },
        update: function() {
            var a = this.elem,
                b = this.prop,
                c = this.now,
                d = this.options.step;
            if (this[b + "Setter"]) this[b + "Setter"]();
            else a.attr ? a.element && a.attr(b, c) : a.style[b] = c + this.unit;
            d && d.call(a, c, this)
        },
        run: function(a, b, c) {
            var d = this,
                e = function(a) {
                    return e.stopped ? !1 : d.step(a)
                },
                f;
            this.startTime = +new wa;
            this.start = a;
            this.end = b;
            this.unit = c;
            this.now = this.start;
            this.pos = 0;
            e.elem = this.elem;
            e() && 1 === Ua.push(e) &&
                (e.timerId = setInterval(function() {
                    for (f = 0; f < Ua.length; f++) Ua[f]() || Ua.splice(f--, 1);
                    Ua.length || clearInterval(e.timerId)
                }, 13))
        },
        step: function(a) {
            var b = +new wa,
                c, d = this.options;
            c = this.elem;
            var e = d.complete,
                f = d.duration,
                g = d.curAnim,
                h;
            if (c.attr && !c.element) c = !1;
            else if (a || b >= f + this.startTime) {
                this.now = this.end;
                this.pos = 1;
                this.update();
                a = g[this.prop] = !0;
                for (h in g) !0 !== g[h] && (a = !1);
                a && e && e.call(c);
                c = !1
            } else this.pos = d.easing((b - this.startTime) / f), this.now = this.start + (this.end - this.start) * this.pos, this.update(),
                c = !0;
            return c
        },
        initPath: function(a, b, c) {
            b = b || "";
            var d = a.shift,
                e = -1 < b.indexOf("C"),
                f = e ? 7 : 3,
                g;
            b = b.split(" ");
            c = [].concat(c);
            var h = a.isArea,
                l = h ? 2 : 1,
                m = function(a) {
                    for (g = a.length; g--;) "M" !== a[g] && "L" !== a[g] || a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
                };
            e && (m(b), m(c));
            if (d <= c.length / f && b.length === c.length)
                for (; d--;) c = c.slice(0, f).concat(c), h && (c = c.concat(c.slice(c.length - f)));
            a.shift = 0;
            if (b.length)
                for (a = c.length; b.length < a;) d = b.slice().splice(b.length / l - f, f * l), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), [].splice.apply(b, [b.length / l, 0].concat(d));
            return [b, c]
        }
    };
    var M = T.extend = function(a, b) {
            var c;
            a || (a = {});
            for (c in b) a[c] = b[c];
            return a
        },
        A = T.pick = function() {
            var a = arguments,
                b, c, d = a.length;
            for (b = 0; b < d; b++)
                if (c = a[b], c !== J && null !== c) return c
        },
        ia = T.wrap = function(a, b, c) {
            var d = a[b];
            a[b] = function() {
                var a = Array.prototype.slice.call(arguments);
                a.unshift(d);
                return c.apply(this, a)
            }
        };
    za = function(a, b, c) {
        if (!q(b) || isNaN(b)) return la.lang.invalidDate || "";
        a = A(a, "%Y-%m-%d %H:%M:%S");
        var d = new wa(b - N(b)),
            e, f = d[Bb](),
            g = d[Cb](),
            h = d[gb](),
            l = d[hb](),
            m = d[ib](),
            n = la.lang,
            r = n.weekdays,
            d = M({
                a: r[g].substr(0, 3),
                A: r[g],
                d: x(h),
                e: h,
                w: g,
                b: n.shortMonths[l],
                B: n.months[l],
                m: x(l + 1),
                y: m.toString().substr(2, 2),
                Y: m,
                H: x(f),
                k: f,
                I: x(f % 12 || 12),
                l: f % 12 || 12,
                M: x(d[Ab]()),
                p: 12 > f ? "AM" : "PM",
                P: 12 > f ? "am" : "pm",
                S: x(d.getSeconds()),
                L: x(L(b % 1E3), 3)
            }, T.dateFormats);
        for (e in d)
            for (; - 1 !== a.indexOf("%" + e);) a = a.replace("%" + e, "function" === typeof d[e] ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    ga = {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 24192E5,
        year: 314496E5
    };
    T.numberFormat = function(a, b, c, d) {
        a = +a || 0;
        var e = la.lang,
            f = (a.toString().split(".")[1] || "").length,
            g, h, l = Math.abs(a); - 1 === b ? b = Math.min(f, 20) : isNaN(b) && (b = 2);
        g = String(G(l.toFixed(b)));
        h = 3 < g.length ? g.length % 3 : 0;
        c = A(c, e.decimalPoint);
        d = A(d, e.thousandsSep);
        a = (0 > a ? "-" : "") + (h ? g.substr(0, h) + d : "");
        a += g.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + d); + b && (d = Math.abs(l - g + Math.pow(10, -Math.max(b, f) - 1)), a += c + d.toFixed(b).slice(2));
        return a
    };
    Math.easeInOutSine = function(a) {
        return -.5 *
            (Math.cos(Math.PI * a) - 1)
    };
    Fa = function(a, b) {
        var c;
        return "width" === b ? Math.min(a.offsetWidth, a.scrollWidth) - Fa(a, "padding-left") - Fa(a, "padding-right") : "height" === b ? Math.min(a.offsetHeight, a.scrollHeight) - Fa(a, "padding-top") - Fa(a, "padding-bottom") : (c = t.getComputedStyle(a, void 0)) && G(c.getPropertyValue(b))
    };
    Da = function(a, b) {
        return b.indexOf ? b.indexOf(a) : [].indexOf.call(b, a)
    };
    Va = function(a, b) {
        return [].filter.call(a, b)
    };
    Aa = function(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = b.call(a[d], a[d], d, a);
        return c
    };
    Ib = function(a) {
        var b = Z.documentElement;
        a = a.getBoundingClientRect();
        return {
            top: a.top + (t.pageYOffset || b.scrollTop) - (b.clientTop || 0),
            left: a.left + (t.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
        }
    };
    Wa = function(a) {
        for (var b = Ua.length; b--;) Ua[b].elem === a && (Ua[b].stopped = !0)
    };
    v = function(a, b) {
        return Array.prototype.forEach.call(a, b)
    };
    Y = function(a, b, c) {
        function d(b) {
            b.target = b.srcElement || t;
            c.call(a, b)
        }
        var e = a.hcEvents = a.hcEvents || {};
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && (a.hcEventsIE ||
            (a.hcEventsIE = {}), a.hcEventsIE[c.toString()] = d, a.attachEvent("on" + b, d));
        e[b] || (e[b] = []);
        e[b].push(c)
    };
    qa = function(a, b, c) {
        function d(b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.attachEvent && (c = a.hcEventsIE[c.toString()], a.detachEvent("on" + b, c))
        }

        function e() {
            var c, e;
            if (a.nodeName)
                for (e in b ? (c = {}, c[b] = !0) : c = g, c)
                    if (g[e])
                        for (c = g[e].length; c--;) d(e, g[e][c])
        }
        var f, g = a.hcEvents,
            h;
        g && (b ? (f = g[b] || [], c ? (h = Da(c, f), -1 < h && (f.splice(h, 1), g[b] = f), d(b, c)) : (e(), g[b] = [])) : (e(), a.hcEvents = {}))
    };
    ha = function(a,
        b, c, d) {
        var e;
        e = a.hcEvents;
        var f, g, h, l;
        c = c || {};
        if (Z.createEvent && (a.dispatchEvent || a.fireEvent)) e = Z.createEvent("Events"), e.initEvent(b, !0, !0), e.target = a, M(e, c), a.dispatchEvent ? a.dispatchEvent(e) : a.fireEvent(b, e);
        else if (e)
            for (e = e[b] || [], f = e.length, h = function() {
                    c.defaultPrevented = !0
                }, g = 0; g < f; g++) {
                l = e[g];
                if (c.stopped) return;
                c.preventDefault = h;
                c.target = a;
                c.type || (c.type = b);
                !1 === l.call(a, c) && c.preventDefault()
            }
        d && !c.defaultPrevented && d(c)
    };
    eb = function(a, b, c) {
        var d, e = "",
            f, g, h;
        I(c) || (d = arguments, c = {
            duration: d[2],
            easing: d[3],
            complete: d[4]
        });
        k(c.duration) || (c.duration = 400);
        c.easing = Math[c.easing] || Math.easeInOutSine;
        c.curAnim = z(b);
        for (h in b) g = new X(a, c, h), f = null, "d" === h ? (g.paths = g.initPath(a, a.d, b.d), g.toD = b.d, d = 0, f = 1) : a.attr ? d = a.attr(h) : (d = parseFloat(Fa(a, h)) || 0, "opacity" !== h && (e = "px")), f || (f = b[h]), f.match && f.match("px") && (f = f.replace(/px/g, "")), g.run(d, f, e)
    };
    t.jQuery && (t.jQuery.fn.highcharts = function() {
        var a = [].slice.call(arguments);
        if (this[0]) return a[0] ? (new(T[ea(a[0]) ? a.shift() : "Chart"])(this[0], a[0],
            a[1]), this) : va[B(this[0], "data-highcharts-chart")]
    });
    Z && !Z.defaultView && (Fa = function(a, b) {
        var c;
        c = {
            width: "clientWidth",
            height: "clientHeight"
        }[b];
        if (a.style[b]) return G(a.style[b]);
        "opacity" === b && (b = "filter");
        if (c) return a.style.zoom = 1, a[c] - 2 * Fa(a, "padding");
        c = a.currentStyle[b.replace(/\-(\w)/g, function(a, b) {
            return b.toUpperCase()
        })];
        "filter" === b && (c = c.replace(/alpha\(opacity=([0-9]+)\)/, function(a, b) {
            return b / 100
        }));
        return "" === c ? 1 : G(c)
    });
    Array.prototype.forEach || (v = function(a, b) {
        for (var c = 0, d = a.length; c <
            d; c++)
            if (!1 === b.call(a[c], a[c], c, a)) return c
    });
    Array.prototype.indexOf || (Da = function(a, b) {
        var c, d = 0;
        if (b)
            for (c = b.length; d < c; d++)
                if (b[d] === a) return d;
        return -1
    });
    Array.prototype.filter || (Va = function(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]);
        return c
    });
    T.Fx = X;
    T.inArray = Da;
    T.each = v;
    T.grep = Va;
    T.offset = Ib;
    T.map = Aa;
    T.addEvent = Y;
    T.removeEvent = qa;
    T.fireEvent = ha;
    T.animate = eb;
    T.stop = Wa;
    la = {
        colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com@product.cdnpath@//Highstock 4.2.3/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@//Highstock 4.2.3/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    align: "center",
                    formatter: function() {
                        return null === this.y ? "" : T.numberFormat(this.y, -1)
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: ya,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: kb ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var aa = la.plotOptions,
        mb = aa.line;
    ua();
    ja.prototype = {
        parsers: [{
            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function(a) {
                return [G(a[1]), G(a[2]), G(a[3]), parseFloat(a[4], 10)]
            }
        }, {
            regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            parse: function(a) {
                return [G(a[1], 16), G(a[2], 16), G(a[3], 16),
                    1
                ]
            }
        }, {
            regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
            parse: function(a) {
                return [G(a[1]), G(a[2]), G(a[3]), 1]
            }
        }],
        init: function(a) {
            var b, c, d, e;
            if ((this.input = a) && a.stops) this.stops = Aa(a.stops, function(a) {
                return new ja(a[1])
            });
            else
                for (d = this.parsers.length; d-- && !c;) e = this.parsers[d], (b = e.regex.exec(a)) && (c = e.parse(b));
            this.rgba = c || []
        },
        get: function(a) {
            var b = this.input,
                c = this.rgba,
                d;
            this.stops ? (d = z(b), d.stops = [].concat(d.stops), v(this.stops, function(b, c) {
                d.stops[c] = [d.stops[c][0],
                    b.get(a)
                ]
            })) : d = c && !isNaN(c[0]) ? "rgb" === a || !a && 1 === c[3] ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")" : "a" === a ? c[3] : "rgba(" + c.join(",") + ")" : b;
            return d
        },
        brighten: function(a) {
            var b, c = this.rgba;
            if (this.stops) v(this.stops, function(b) {
                b.brighten(a)
            });
            else if (k(a) && 0 !== a)
                for (b = 0; 3 > b; b++) c[b] += G(255 * a), 0 > c[b] && (c[b] = 0), 255 < c[b] && (c[b] = 255);
            return this
        },
        setOpacity: function(a) {
            this.rgba[3] = a;
            return this
        }
    };
    ka.prototype = {
        opacity: 1,
        textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textDecoration textOverflow textShadow".split(" "),
        init: function(a, b) {
            this.element = "span" === b ? S(b) : Z.createElementNS("http://www.w3.org/2000/svg", b);
            this.renderer = a
        },
        animate: function(a, b, c) {
            b = A(b, this.renderer.globalAnimation, !0);
            Wa(this);
            b ? (b = z(b, {}), c && (b.complete = c), eb(this, a, b)) : this.attr(a, null, c);
            return this
        },
        colorGradient: function(a, b, c) {
            var d = this.renderer,
                e, f, g, h, l, m, n, r, u, w, E, H = [],
                Oa;
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                l = d.gradients;
                n = a.stops;
                w = c.radialReference;
                O(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                "radialGradient" === f && w && !q(g.gradientUnits) && (h = g, g = z(g, d.getRadialAttr(w, h), {
                    gradientUnits: "userSpaceOnUse"
                }));
                for (E in g) "id" !== E && H.push(E, g[E]);
                for (E in n) H.push(n[E]);
                H = H.join(",");
                l[H] ? w = l[H].attr("id") : (g.id = w = "highcharts-" + Hb++, l[H] = m = d.createElement(f).attr(g).add(d.defs), m.radAttr = h, m.stops = [], v(n, function(a) {
                    0 === a[1].indexOf("rgba") ? (e = ja(a[1]), r = e.get("rgb"), u = e.get("a")) : (r = a[1], u = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": r,
                        "stop-opacity": u
                    }).add(m);
                    m.stops.push(a)
                }));
                Oa = "url(" + d.url + "#" + w + ")";
                c.setAttribute(b, Oa);
                c.gradient = H;
                a.toString = function() {
                    return Oa
                }
            }
        },
        applyTextShadow: function(a) {
            var b = this.element,
                c, d = -1 !== a.indexOf("contrast"),
                e = {},
                f = this.renderer.forExport,
                g = f || b.style.textShadow !== J && !Ra;
            d && (e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
            if (tb || f) e.textRendering = "geometricPrecision";
            g ? this.css(e) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")),
                v(a.split(/\s?,\s?/g), function(a) {
                    var d = b.firstChild,
                        e, f;
                    a = a.split(" ");
                    e = a[a.length - 1];
                    (f = a[a.length - 2]) && v(c, function(a, c) {
                        var g;
                        0 === c && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), null === c && b.setAttribute("y", 0));
                        g = a.cloneNode(1);
                        B(g, {
                            "class": "highcharts-text-shadow",
                            fill: e,
                            stroke: e,
                            "stroke-opacity": 1 / K(G(f), 3),
                            "stroke-width": f,
                            "stroke-linejoin": "round"
                        });
                        b.insertBefore(g, d)
                    })
                }))
        },
        attr: function(a, b, c) {
            var d, e = this.element,
                f, g = this,
                h;
            "string" === typeof a &&
                b !== J && (d = a, a = {}, a[d] = b);
            if ("string" === typeof a) g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (d in a) b = a[d], h = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0), !this.rotation || "x" !== d && "y" !== d || (this.doTransform = !0), h || (h = this[d + "Setter"] || this._defaultSetter, h.call(this, b, d, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b, h));
                this.doTransform && (this.updateTransform(),
                    this.doTransform = !1)
            }
            c && c();
            return g
        },
        updateShadows: function(a, b, c) {
            for (var d = this.shadows, e = d.length; e--;) c.call(null, "height" === a ? Math.max(b - (d[e].cutHeight || 0), 0) : "d" === a ? this.d : b, a, d[e])
        },
        addClass: function(a) {
            var b = this.element,
                c = B(b, "class") || ""; - 1 === c.indexOf(a) && B(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function(a) {
            var b = this;
            v("x y r start end width height innerR anchorX anchorY".split(" "), function(c) {
                b[c] = A(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height,
                    b)
            })
        },
        clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
        },
        crisp: function(a) {
            var b, c = {},
                d, e = this.strokeWidth || 0;
            d = L(e) % 2 / 2;
            a.x = fa(a.x || this.x || 0) + d;
            a.y = fa(a.y || this.y || 0) + d;
            a.width = fa((a.width || this.width || 0) - 2 * d);
            a.height = fa((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function(a) {
            var b = this.styles,
                c = {},
                d = this.element,
                e, f, g = "";
            e = !b;
            a && a.color && (a.fill = a.color);
            if (b)
                for (f in a) a[f] !== b[f] && (c[f] =
                    a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && "text" === d.nodeName.toLowerCase() && G(a.width) || this.textWidth;
                b && (a = M(b, c));
                this.styles = a;
                e && (Ha || !ya && this.renderer.forExport) && delete a.width;
                if (Ra && !ya) F(this.element, a);
                else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    B(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function(a, b) {
            var c = this,
                d = c.element;
            db && "click" === a ? (d.ontouchstart = function(a) {
                c.touchEventFired = wa.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function(a) {
                (-1 === Ta.indexOf("Android") || 1100 < wa.now() - (c.touchEventFired || 0)) && b.call(d, a)
            }) : d["on" + a] = b;
            return this
        },
        setRadialReference: function(a) {
            var b = this.renderer.gradients[this.element.gradient];
            this.element.radialReference = a;
            b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
            return this
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function() {
            var a =
                this.translateX || 0,
                b = this.translateY || 0,
                c = this.scaleX,
                d = this.scaleY,
                e = this.inverted,
                f = this.rotation,
                g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (q(c) || q(d)) && a.push("scale(" + A(c, 1) + " " + A(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a,
            b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate = b, !c || ea(c)) this.alignTo = d = c || "renderer", y(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = A(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            if ("right" === d || "center" === d) f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d];
            h[b ? "translateX" : "x"] = L(f);
            if ("bottom" === e || "middle" === e) g += (c.height - (a.height || 0)) / ({
                    bottom: 1,
                    middle: 2
                }[e] ||
                1);
            h[b ? "translateY" : "y"] = L(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function(a, b) {
            var c, d = this.renderer,
                e, f, g, h = this.element,
                l = this.styles;
            e = this.textStr;
            var m, n = h.style,
                r, u = d.cache,
                w = d.cacheKeys,
                E;
            f = A(b, this.rotation);
            g = f * Za;
            e !== J && (E = ["", f || 0, l && l.fontSize, h.style.width].join(), E = "" === e || fc.test(e) ? "num:" + e.toString().length + E : e + E);
            E && !a && (c = u[E]);
            if (!c) {
                if ("http://www.w3.org/2000/svg" === h.namespaceURI || d.forExport) {
                    try {
                        r = this.fakeTS && function(a) {
                            v(h.querySelectorAll(".highcharts-text-shadow"),
                                function(b) {
                                    b.style.display = a
                                })
                        }, $a && n.textShadow ? (m = n.textShadow, n.textShadow = "") : r && r("none"), c = h.getBBox ? M({}, h.getBBox()) : {
                            width: h.offsetWidth,
                            height: h.offsetHeight
                        }, m ? n.textShadow = m : r && r("")
                    } catch (H) {}
                    if (!c || 0 > c.width) c = {
                        width: 0,
                        height: 0
                    }
                } else c = this.htmlGetBBox();
                d.isSVG && (d = c.width, e = c.height, Ra && l && "11px" === l.fontSize && "16.9" === e.toPrecision(3) && (c.height = e = 14), f && (c.width = ma(e * Ma(g)) + ma(d * Ca(g)), c.height = ma(e * Ca(g)) + ma(d * Ma(g))));
                if (E) {
                    for (; 250 < w.length;) delete u[w.shift()];
                    u[E] || w.push(E);
                    u[E] = c
                }
            }
            return c
        },
        show: function(a) {
            return this.attr({
                visibility: a ? "inherit" : "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(a) {
            var b = this;
            b.animate({
                opacity: 0
            }, {
                duration: a || 150,
                complete: function() {
                    b.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(a) {
            var b = this.renderer,
                c = this.element,
                d;
            a && (this.parentGroup = a);
            this.parentInverted = a && a.inverted;
            void 0 !== this.textStr && b.buildText(this);
            this.added = !0;
            if (!a || a.handleZ || this.zIndex) d = this.zIndexSetter();
            d || (a ? a.element : b.box).appendChild(c);
            if (this.onAdd) this.onAdd();
            return this
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function() {
            var a = this,
                b = a.element || {},
                c = a.shadows,
                d = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup,
                e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            Wa(a);
            a.clipPath && (a.clipPath = a.clipPath.destroy());
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && v(c, function(b) {
                    a.safeRemoveChild(b)
                }); d && d.div &&
                0 === d.div.childNodes.length;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && y(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f, g = this.element,
                h, l, m, n;
            if (a) {
                l = A(a.width, 3);
                m = (a.opacity || .15) / l;
                n = this.parentInverted ? "(-1,-1)" : "(" + A(a.offsetX, 1) + ", " + A(a.offsetY, 1) + ")";
                for (e = 1; e <= l; e++) f = g.cloneNode(0), h = 2 * l + 1 - 2 * e, B(f, {
                        isShadow: "true",
                        stroke: a.color || "black",
                        "stroke-opacity": m * e,
                        "stroke-width": h,
                        transform: "translate" + n,
                        fill: "none"
                    }),
                    c && (B(f, "height", K(B(f, "height") - h, 0)), f.cutHeight = h), b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g), d.push(f);
                this.shadows = d
            }
            return this
        },
        xGetter: function(a) {
            "circle" === this.element.nodeName && (a = {
                x: "cx",
                y: "cy"
            }[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function(a) {
            a = A(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        },
        dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b,
                a);
            this[b] = a
        },
        dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;) a[b] = G(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN", "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[a])
        },
        opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = Z.createElementNS("http://www.w3.org/2000/svg", "title"), this.element.appendChild(b));
            b.appendChild(Z.createTextNode(String(A(a), "").replace(/<[^>]*>/g, "")))
        },
        textSetter: function(a) {
            a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
        },
        fillSetter: function(a, b, c) {
            "string" ===
            typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        visibilitySetter: function(a, b, c) {
            "inherit" === a ? c.removeAttribute(b) : c.setAttribute(b, a)
        },
        zIndexSetter: function(a, b) {
            var c = this.renderer,
                d = this.parentGroup,
                c = (d || c).element || c.box,
                e, f, g = this.element,
                h;
            e = this.added;
            var l;
            q(a) && (g.setAttribute(b, a), a = +a, this[b] === a && (e = !1), this[b] = a);
            if (e) {
                (a = this.zIndex) && d && (d.handleZ = !0);
                d = c.childNodes;
                for (l = 0; l < d.length && !h; l++) e = d[l], f = B(e, "zIndex"), e !== g && (G(f) > a || !q(a) && q(f)) && (c.insertBefore(g, e), h = !0);
                h || c.appendChild(g)
            }
            return h
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }
    };
    ka.prototype.yGetter = ka.prototype.xGetter;
    ka.prototype.translateXSetter = ka.prototype.translateYSetter = ka.prototype.rotationSetter = ka.prototype.verticalAlignSetter = ka.prototype.scaleXSetter = ka.prototype.scaleYSetter = function(a, b) {
        this[b] = a;
        this.doTransform = !0
    };
    ka.prototype["stroke-widthSetter"] = ka.prototype.strokeSetter = function(a, b, c) {
        this[b] = a;
        this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"],
            ka.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke && (c.removeAttribute("stroke"), this.hasStroke = !1)
    };
    var Pa = function() {
        this.init.apply(this, arguments)
    };
    Pa.prototype = {
        Element: ka,
        init: function(a, b, c, d, e, f) {
            var g;
            d = this.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g); - 1 === a.innerHTML.indexOf("xmlns") && B(g, "xmlns", "http://www.w3.org/2000/svg");
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = ($a || tb) && Z.getElementsByTagName("base").length ? t.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(Z.createTextNode("Created with Highcharts 4.2.3 /Highstock 4.2.3"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = f;
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.imgCount = 0;
            this.setSize(b, c, !1);
            var h;
            $a && a.getBoundingClientRect && (this.subPixelFix = b = function() {
                F(a, {
                    left: 0,
                    top: 0
                });
                h = a.getBoundingClientRect();
                F(a, {
                    left: La(h.left) - h.left + "px",
                    top: La(h.top) - h.top + "px"
                })
            }, b(), Y(t, "resize", b))
        },
        getStyle: function(a) {
            return this.style = M({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            Ja(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.subPixelFix && qa(t, "resize", this.subPixelFix);
            return this.alignedObjects = null
        },
        createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        draw: function() {},
        getRadialAttr: function(a, b) {
            return {
                cx: a[0] - a[2] / 2 + b.cx * a[2],
                cy: a[1] - a[2] / 2 + b.cy * a[2],
                r: b.r * a[2]
            }
        },
        buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = A(a.textStr, "").toString(), f = -1 !== e.indexOf("<"), g = b.childNodes, h, l, m = B(b, "x"), n = a.styles, r = a.textWidth, u = n && n.lineHeight,
                    w = n && n.textShadow, E = n && "ellipsis" === n.textOverflow, H = g.length, Oa = r && !a.added && this.box, q = function(a) {
                        return u ? G(u) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : n && n.fontSize || c.style.fontSize || 12, a).h
                    }, k = function(a) {
                        return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                    }; H--;) b.removeChild(g[H]);
            f || w || E || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/, l = /<.*href="(http[^"]+)".*>/, Oa && Oa.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g,
                '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], "" === e[e.length - 1] && e.pop(), v(e, function(e, f) {
                var g, u = 0;
                e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                v(g, function(e) {
                    if ("" !== e || 1 === g.length) {
                        var w = {},
                            H = Z.createElementNS("http://www.w3.org/2000/svg", "tspan"),
                            A;
                        h.test(e) && (A = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), B(H, "style", A));
                        l.test(e) && !d && (B(H, "onclick", 'location.href="' +
                            e.match(l)[1] + '"'), F(H, {
                            cursor: "pointer"
                        }));
                        e = k(e.replace(/<(.|\n)*?>/g, "") || " ");
                        if (" " !== e) {
                            H.appendChild(Z.createTextNode(e));
                            u ? w.dx = 0 : f && null !== m && (w.x = m);
                            B(H, w);
                            b.appendChild(H);
                            !u && f && (!ya && d && F(H, {
                                display: "block"
                            }), B(H, "dy", q(H)));
                            if (r) {
                                for (var w = e.replace(/([^\^])-/g, "$1- ").split(" "), Oa = 1 < g.length || f || 1 < w.length && "nowrap" !== n.whiteSpace, v, p, x, D = [], t = q(H), gc = 1, C = a.rotation, N = e, R = N.length;
                                    (Oa || E) && (w.length || D.length);) a.rotation = 0, v = a.getBBox(!0), x = v.width, !ya && c.forExport && (x = c.measureSpanWidth(H.firstChild.data,
                                    a.styles)), v = x > r, void 0 === p && (p = v), E && p ? (R /= 2, "" === N || !v && .5 > R ? w = [] : (v && (p = !0), N = e.substring(0, N.length + (v ? -1 : 1) * La(R)), w = [N + (3 < r ? "\u2026" : "")], H.removeChild(H.firstChild))) : v && 1 !== w.length ? (H.removeChild(H.firstChild), D.unshift(w.pop())) : (w = D, D = [], w.length && (gc++, H = Z.createElementNS("http://www.w3.org/2000/svg", "tspan"), B(H, {
                                    dy: t,
                                    x: m
                                }), A && B(H, "style", A), b.appendChild(H)), x > r && (r = x)), w.length && H.appendChild(Z.createTextNode(w.join(" ").replace(/- /g, "-")));
                                p && a.attr("title", a.textStr);
                                a.rotation =
                                    C
                            }
                            u++
                        }
                    }
                })
            }), Oa && Oa.removeChild(b), w && a.applyTextShadow && a.applyTextShadow(w)) : b.appendChild(Z.createTextNode(k(e)))
        },
        getContrast: function(a) {
            a = ja(a).rgba;
            return 384 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF"
        },
        button: function(a, b, c, d, e, f, g, h, l) {
            var m = this.label(a, b, c, l, null, null, null, null, "button"),
                n = 0,
                r, u, w, E, H, A;
            a = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            };
            e = z({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FEFEFE"],
                        [1, "#F6F6F6"]
                    ]
                },
                r: 2,
                padding: 5,
                style: {
                    color: "black"
                }
            }, e);
            w = e.style;
            delete e.style;
            f = z(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, f);
            E = f.style;
            delete f.style;
            g = z(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, g);
            H = g.style;
            delete g.style;
            h = z(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            A = h.style;
            delete h.style;
            Y(m.element, Ra ? "mouseover" : "mouseenter", function() {
                3 !== n && m.attr(f).css(E)
            });
            Y(m.element, Ra ? "mouseout" : "mouseleave", function() {
                3 !== n && (r = [e, f, g][n], u = [w, E, H][n], m.attr(r).css(u))
            });
            m.setState = function(a) {
                (m.state = n = a) ? 2 === a ? m.attr(g).css(H) : 3 ===
                    a && m.attr(h).css(A): m.attr(e).css(w)
            };
            return m.on("click", function(a) {
                3 !== n && d.call(m, a)
            }).attr(e).css(M({
                cursor: "default"
            }, w))
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = L(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = L(a[2]) + b % 2 / 2);
            return a
        },
        path: function(a) {
            var b = {
                fill: "none"
            };
            O(a) ? b.d = a : I(a) && M(b, a);
            return this.createElement("path").attr(b)
        },
        circle: function(a, b, c) {
            a = I(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            b = this.createElement("circle");
            b.xSetter = b.ySetter = function(a, b, c) {
                c.setAttribute("c" + b, a)
            };
            return b.attr(a)
        },
        arc: function(a, b, c, d, e, f) {
            I(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x);
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            });
            a.r = c;
            return a
        },
        rect: function(a, b, c, d, e, f) {
            e = I(a) ? a.r : e;
            var g = this.createElement("rect");
            a = I(a) ? a : a === J ? {} : {
                x: a,
                y: b,
                width: K(c, 0),
                height: K(d, 0)
            };
            f !== J && (g.strokeWidth = f, a = g.crisp(a));
            e && (a.r = e);
            g.rSetter = function(a, b, c) {
                B(c, {
                    rx: a,
                    ry: a
                })
            };
            return g.attr(a)
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[A(c, !0) ? "animate" : "attr"]({
                    width: a,
                    height: b
                }); e--;) d[e].align()
        },
        g: function(a) {
            var b = this.createElement("g");
            return q(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: "none"
            };
            1 < arguments.length && M(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function(a, b, c, d, e, f) {
            var g = this,
                h, l = this.symbols[a],
                l = l && l(L(b), L(c), d, e, f),
                m = /^url\((.*?)\)$/,
                n, r;
            l ? (h = this.path(l), M(h, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && M(h, f)) : m.test(a) && (r = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(L((d - b[0]) / 2), L((e - b[1]) / 2)))
            }, n = a.match(m)[1], a = Wb[n] || f && f.width && f.height && [f.width, f.height], h = this.image(n).attr({
                x: b,
                y: c
            }), h.isImg = !0, a ? r(h, a) : (h.attr({
                width: 0,
                height: 0
            }), S("img", {
                onload: function() {
                    0 === this.width && (F(this, {
                        position: "absolute",
                        top: "-999em"
                    }), Z.body.appendChild(this));
                    r(h, Wb[n] = [this.width, this.height]);
                    this.parentNode && this.parentNode.removeChild(this);
                    g.imgCount--;
                    if (!g.imgCount) va[g.chartIndex].onload()
                },
                src: n
            })), this.imgCount++);
            return h
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = .166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            },
            square: function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            },
            "triangle-down": function(a, b, c, d) {
                return ["M", a, b, "L",
                    a + c, b, a + c / 2, b + d, "Z"
                ]
            },
            diamond: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            },
            arc: function(a, b, c, d, e) {
                var f = e.start;
                c = e.r || c || d;
                var g = e.end - .001;
                d = e.innerR;
                var h = e.open,
                    l = Ca(f),
                    m = Ma(f),
                    n = Ca(g),
                    g = Ma(g);
                e = e.end - f < Na ? 0 : 1;
                return ["M", a + c * l, b + c * m, "A", c, c, 0, e, 1, a + c * n, b + c * g, h ? "M" : "L", a + d * n, b + d * g, "A", d, d, 0, e, 0, a + d * l, b + d * m, h ? "" : "Z"]
            },
            callout: function(a, b, c, d, e) {
                var f = V(e && e.r || 0, c, d),
                    g = f + 6,
                    h = e && e.anchorX;
                e = e && e.anchorY;
                var l;
                l = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a +
                    c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b
                ];
                h && h > c && e > b + g && e < b + d - g ? l.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && 0 > h && e > b + g && e < b + d - g ? l.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? l.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && 0 > e && h > a + g && h < a + c - g && l.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return l
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + Hb++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            a.count = 0;
            return a
        },
        text: function(a, b, c, d) {
            var e = Ha || !ya && this.forExport,
                f = {};
            if (d && (this.allowHTML || !this.forExport)) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            c && (f.y = Math.round(c));
            if (a || 0 === a) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            d || (a.xSetter = function(a, b, c) {
                var d = c.getElementsByTagName("tspan"),
                    e, f = c.getAttribute(b),
                    u;
                for (u = 0; u < d.length; u++) e = d[u], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b,
                    a)
            });
            return a
        },
        fontMetrics: function(a, b) {
            var c, d;
            a = a || this.style.fontSize;
            !a && b && t.getComputedStyle && (b = b.element || b, a = (c = t.getComputedStyle(b, "")) && c.fontSize);
            a = /px/.test(a) ? G(a) : /em/.test(a) ? 12 * parseFloat(a) : 12;
            c = 24 > a ? a + 3 : L(1.2 * a);
            d = L(.8 * c);
            return {
                h: c,
                b: d,
                f: a
            }
        },
        rotCorr: function(a, b, c) {
            var d = a;
            b && c && (d = K(d * Ca(b * Za), 4));
            return {
                x: -a / 3 * Ma(b * Za),
                y: d
            }
        },
        label: function(a, b, c, d, e, f, g, h, l) {
            var m = this,
                n = m.g(l),
                r = m.text("", 0, 0, g).attr({
                    zIndex: 1
                }),
                u, w, E = 0,
                H = 3,
                A = 0,
                k, p, x, D, t = 0,
                C = {},
                B, N, R, P, y;
            R = function() {
                var a,
                    b;
                a = r.element.style;
                w = (void 0 === k || void 0 === p || n.styles.textAlign) && q(r.textStr) && r.getBBox();
                n.width = (k || w.width || 0) + 2 * H + A;
                n.height = (p || w.height || 0) + 2 * H;
                B = H + m.fontMetrics(a && a.fontSize, r).b;
                N && (u || (a = t, b = (h ? -B : 0) + t, n.box = u = d ? m.symbol(d, a, b, n.width, n.height, C) : m.rect(a, b, n.width, n.height, 0, C["stroke-width"]), u.isImg || u.attr("fill", "none"), u.add(n)), u.isImg || u.attr(M({
                    width: L(n.width),
                    height: L(n.height)
                }, C)), C = null)
            };
            P = function() {
                var a = n.styles,
                    a = a && a.textAlign,
                    b = A + H,
                    c;
                c = h ? 0 : B;
                q(k) && w && ("center" ===
                    a || "right" === a) && (b += {
                    center: .5,
                    right: 1
                }[a] * (k - w.width));
                if (b !== r.x || c !== r.y) r.attr("x", b), c !== J && r.attr("y", c);
                r.x = b;
                r.y = c
            };
            y = function(a, b) {
                u ? u.attr(a, b) : C[a] = b
            };
            n.onAdd = function() {
                r.add(n);
                n.attr({
                    text: a || 0 === a ? a : "",
                    x: b,
                    y: c
                });
                u && q(e) && n.attr({
                    anchorX: e,
                    anchorY: f
                })
            };
            n.widthSetter = function(a) {
                k = a
            };
            n.heightSetter = function(a) {
                p = a
            };
            n.paddingSetter = function(a) {
                q(a) && a !== H && (H = n.padding = a, P())
            };
            n.paddingLeftSetter = function(a) {
                q(a) && a !== A && (A = a, P())
            };
            n.alignSetter = function(a) {
                a = {
                    left: 0,
                    center: .5,
                    right: 1
                }[a];
                a !== E && (E = a, w && n.attr({
                    x: b
                }))
            };
            n.textSetter = function(a) {
                a !== J && r.textSetter(a);
                R();
                P()
            };
            n["stroke-widthSetter"] = function(a, b) {
                a && (N = !0);
                t = a % 2 / 2;
                y(b, a)
            };
            n.strokeSetter = n.fillSetter = n.rSetter = function(a, b) {
                "fill" === b && a && (N = !0);
                y(b, a)
            };
            n.anchorXSetter = function(a, b) {
                e = a;
                y(b, L(a) - t - x)
            };
            n.anchorYSetter = function(a, b) {
                f = a;
                y(b, a - D)
            };
            n.xSetter = function(a) {
                n.x = a;
                E && (a -= E * ((k || w.width) + 2 * H));
                x = L(a);
                n.attr("translateX", x)
            };
            n.ySetter = function(a) {
                D = n.y = L(a);
                n.attr("translateY", D)
            };
            var W = n.css;
            return M(n, {
                css: function(a) {
                    if (a) {
                        var b = {};
                        a = z(a);
                        v(n.textProps, function(c) {
                            a[c] !== J && (b[c] = a[c], delete a[c])
                        });
                        r.css(b)
                    }
                    return W.call(n, a)
                },
                getBBox: function() {
                    return {
                        width: w.width + 2 * H,
                        height: w.height + 2 * H,
                        x: w.x - H,
                        y: w.y - H
                    }
                },
                shadow: function(a) {
                    u && u.shadow(a);
                    return n
                },
                destroy: function() {
                    qa(n.element, "mouseenter");
                    qa(n.element, "mouseleave");
                    r && (r = r.destroy());
                    u && (u = u.destroy());
                    ka.prototype.destroy.call(n);
                    n = m = R = P = y = null
                }
            })
        }
    };
    M(ka.prototype, {
        htmlCss: function(a) {
            var b = this.element;
            if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth =
                b, this.updateTransform();
            a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");
            this.styles = M(this.styles, a);
            F(this.element, a);
            return this
        },
        htmlGetBBox: function() {
            var a = this.element;
            "text" === a.nodeName && (a.style.position = "absolute");
            return {
                x: a.offsetLeft,
                y: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            }
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var a = this.renderer,
                    b = this.element,
                    c = this.translateX || 0,
                    d = this.translateY || 0,
                    e = this.x || 0,
                    f = this.y || 0,
                    g = this.textAlign || "left",
                    h = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[g],
                    l = this.shadows,
                    m = this.styles;
                F(b, {
                    marginLeft: c,
                    marginTop: d
                });
                l && v(l, function(a) {
                    F(a, {
                        marginLeft: c + 1,
                        marginTop: d + 1
                    })
                });
                this.inverted && v(b.childNodes, function(c) {
                    a.invertChild(c, b)
                });
                if ("SPAN" === b.tagName) {
                    var l = this.rotation,
                        n = G(this.textWidth),
                        r = m && m.whiteSpace,
                        u = [l, g, b.innerHTML, this.textWidth, this.textAlign].join();
                    u !== this.cTT && (m = a.fontMetrics(b.style.fontSize).b, q(l) && this.setSpanRotation(l, h, m), b.offsetWidth > n && /[ \-]/.test(b.textContent || b.innerText) ? (F(b, {
                        width: n +
                            "px",
                        display: "block",
                        whiteSpace: r || "normal"
                    }), this.hasTextWidth = !0) : this.hasTextWidth && (F(b, {
                        width: "",
                        display: "",
                        whiteSpace: r || "nowrap"
                    }), this.hasTextWidth = !1), this.getSpanCorrection(this.hasTextWidth ? n : b.offsetWidth, m, h, l, g));
                    F(b, {
                        left: e + (this.xCorr || 0) + "px",
                        top: f + (this.yCorr || 0) + "px"
                    });
                    tb && (m = b.offsetHeight);
                    this.cTT = u
                }
            } else this.alignOnAdd = !0
        },
        setSpanRotation: function(a, b, c) {
            var d = {},
                e = Ra ? "-ms-transform" : tb ? "-webkit-transform" : $a ? "MozTransform" : Vb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a +
                "deg)";
            d[e + ($a ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + c + "px";
            F(this.element, d)
        },
        getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }
    });
    M(Pa.prototype, {
        html: function(a, b, c) {
            var d = this.createElement("span"),
                e = d.element,
                f = d.renderer,
                g = function(a, b) {
                    v(["opacity", "visibility"], function(c) {
                        ia(a, c + "Setter", function(a, c, d, e) {
                            a.call(this, c, d, e);
                            b[d] = c
                        })
                    })
                };
            d.textSetter = function(a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML = this.textStr = a;
                d.htmlUpdateTransform()
            };
            g(d, d.element.style);
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function(a, b) {
                "align" === b && (b = "textAlign");
                d[b] = a;
                d.htmlUpdateTransform()
            };
            d.attr({
                text: a,
                x: L(b),
                y: L(c)
            }).css({
                position: "absolute",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            e.style.whiteSpace = "nowrap";
            d.css = d.htmlCss;
            f.isSVG && (d.add = function(a) {
                var b, c = f.box.parentNode,
                    n = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a;) n.push(a), a = a.parentGroup;
                        v(n.reverse(), function(a) {
                            var d, e = B(a.element, "class");
                            e && (e = {
                                className: e
                            });
                            b = a.div =
                                a.div || S("div", e, {
                                    position: "absolute",
                                    left: (a.translateX || 0) + "px",
                                    top: (a.translateY || 0) + "px"
                                }, b || c);
                            d = b.style;
                            M(a, {
                                translateXSetter: function(b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                },
                                translateYSetter: function(b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }
                            });
                            g(a, d)
                        })
                    }
                } else b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d
            });
            return d
        }
    });
    sa.prototype = {
        addLabel: function() {
            var a = this.axis,
                b = a.options,
                c = a.chart,
                d = a.categories,
                e = a.names,
                f = this.pos,
                g = b.labels,
                h = a.tickPositions,
                l = f === h[0],
                m = f === h[h.length - 1],
                e = d ? A(d[f], e[f], f) : f,
                d = this.label,
                h = h.info,
                n;
            a.isDatetimeAxis && h && (n = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = l;
            this.isLast = m;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: l,
                isLast: m,
                dateTimeLabelFormat: n,
                value: a.isLog ? ra(P(e)) : e
            });
            q(d) ? d && d.attr({
                text: b
            }) : (this.labelLength = (this.label = d = q(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(z(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0)
        },
        getLabelSize: function() {
            return this.label ?
                this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        },
        handleOverflow: function(a) {
            var b = this.axis,
                c = a.x,
                d = b.chart.chartWidth,
                e = b.chart.spacing,
                f = A(b.labelLeft, V(b.pos, e[3])),
                e = A(b.labelRight, K(b.pos + b.len, d - e[1])),
                g = this.label,
                h = this.rotation,
                l = {
                    left: 0,
                    center: .5,
                    right: 1
                }[b.labelAlign],
                m = g.getBBox().width,
                n = b.slotWidth,
                r = 1,
                u, w = {};
            if (h) 0 > h && c - l * m < f ? u = L(c / Ca(h * Za) - f) : 0 < h && c + l * m > e && (u = L((d - c) / Ca(h * Za)));
            else if (d = c + (1 - l) * m, c - l * m < f ? n = a.x + n * (1 - l) - f : d > e && (n = e - a.x + n * l, r = -1), n = V(b.slotWidth, n), n < b.slotWidth &&
                "center" === b.labelAlign && (a.x += r * (b.slotWidth - n - l * (b.slotWidth - V(m, n)))), m > n || b.autoRotation && g.styles.width) u = n;
            u && (w.width = u, b.options.labels.style.textOverflow || (w.textOverflow = "ellipsis"), g.css(w))
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis,
                f = e.chart,
                g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null,
                    d) - e.transB
            }
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var l = this.axis,
                m = l.transA,
                n = l.reversed,
                r = l.staggerLines,
                u = l.tickRotCorr || {
                    x: 0,
                    y: 0
                },
                w = e.y;
            q(w) || (w = 2 === l.side ? u.y + 8 : w = Ca(c.rotation * Za) * (u.y - c.getBBox(!1, 0).height / 2));
            a = a + e.x + u.x - (f && d ? f * m * (n ? -1 : 1) : 0);
            b = b + w - (f && !d ? f * m * (n ? 1 : -1) : 0);
            r && (c = g / (h || 1) % r, l.opposite && (c = r - c - 1), b += l.labelOffset / r * c);
            return {
                x: a,
                y: L(b)
            }
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        },
        render: function(a, b, c) {
            var d = this.axis,
                e =
                d.options,
                f = d.chart.renderer,
                g = d.horiz,
                h = this.type,
                l = this.label,
                m = this.pos,
                n = e.labels,
                r = this.gridLine,
                u = h ? h + "Grid" : "grid",
                w = h ? h + "Tick" : "tick",
                E = e[u + "LineWidth"],
                H = e[u + "LineColor"],
                k = e[u + "LineDashStyle"],
                q = e[w + "Length"],
                u = A(e[w + "Width"], !h && d.isXAxis ? 1 : 0),
                p = e[w + "Color"],
                v = e[w + "Position"],
                w = this.mark,
                x = n.step,
                D = !0,
                t = d.tickmarkOffset,
                C = this.getPosition(g, m, t, b),
                B = C.x,
                C = C.y,
                N = g && B === d.pos + d.len || !g && C === d.pos ? -1 : 1;
            c = A(c, 1);
            this.isActive = !0;
            if (E && (m = d.getPlotLinePath(m + t, E * N, b, !0), r === J && (r = {
                    stroke: H,
                    "stroke-width": E
                }, k && (r.dashstyle = k), h || (r.zIndex = 1), b && (r.opacity = 0), this.gridLine = r = E ? f.path(m).attr(r).add(d.gridGroup) : null), !b && r && m)) r[this.isNew ? "attr" : "animate"]({
                d: m,
                opacity: c
            });
            u && q && ("inside" === v && (q = -q), d.opposite && (q = -q), h = this.getMarkPath(B, C, q, u * N, g, f), w ? w.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: p,
                "stroke-width": u,
                opacity: c
            }).add(d.axisGroup));
            l && !isNaN(B) && (l.xy = C = this.getLabelPosition(B, C, l, g, n, t, a, x), this.isFirst && !this.isLast && !A(e.showFirstLabel, 1) || this.isLast &&
                !this.isFirst && !A(e.showLastLabel, 1) ? D = !1 : !g || d.isRadial || n.step || n.rotation || b || 0 === c || this.handleOverflow(C), x && a % x && (D = !1), D && !isNaN(C.y) ? (C.opacity = c, l[this.isNew ? "attr" : "animate"](C), this.isNew = !1) : l.attr("y", -9999))
        },
        destroy: function() {
            Ja(this, this.axis)
        }
    };
    T.PlotLineOrBand = function(a, b) {
        this.axis = a;
        b && (this.options = b, this.id = b.id)
    };
    T.PlotLineOrBand.prototype = {
        render: function() {
            var a = this,
                b = a.axis,
                c = b.horiz,
                d = a.options,
                e = d.label,
                f = a.label,
                g = d.width,
                h = d.to,
                l = d.from,
                m = q(l) && q(h),
                n = d.value,
                r = d.dashStyle,
                u = a.svgElem,
                w = [],
                E, H = d.color,
                k = A(d.zIndex, 0),
                v = d.events,
                x = {},
                D = b.chart.renderer;
            b.isLog && (l = p(l), h = p(h), n = p(n));
            if (g) w = b.getPlotLinePath(n, g), x = {
                stroke: H,
                "stroke-width": g
            }, r && (x.dashstyle = r);
            else if (m) w = b.getPlotBandPath(l, h, d), H && (x.fill = H), d.borderWidth && (x.stroke = d.borderColor, x["stroke-width"] = d.borderWidth);
            else return;
            x.zIndex = k;
            if (u) w ? (u.show(), u.animate({
                d: w
            })) : (u.hide(), f && (a.label = f = f.destroy()));
            else if (w && w.length && (a.svgElem = u = D.path(w).attr(x).add(), v))
                for (E in d = function(b) {
                        u.on(b,
                            function(c) {
                                v[b].apply(a, [c])
                            })
                    }, v) d(E);
            e && q(e.text) && w && w.length && 0 < b.width && 0 < b.height && !w.flat ? (e = z({
                align: c && m && "center",
                x: c ? !m && 4 : 10,
                verticalAlign: !c && m && "middle",
                y: c ? m ? 16 : 10 : m ? 6 : -4,
                rotation: c && !m && 90
            }, e), this.renderLabel(e, w, m, k)) : f && f.hide();
            return a
        },
        renderLabel: function(a, b, c, d) {
            var e = this.label,
                f = this.axis.chart.renderer;
            e || (e = {
                align: a.textAlign || a.align,
                rotation: a.rotation
            }, e.zIndex = d, this.label = e = f.text(a.text, 0, 0, a.useHTML).attr(e).css(a.style).add());
            d = [b[1], b[4], c ? b[6] : b[1]];
            b = [b[2],
                b[5], c ? b[7] : b[2]
            ];
            c = ba(d);
            f = ba(b);
            e.align(a, !1, {
                x: c,
                y: f,
                width: Ga(d) - c,
                height: Ga(b) - f
            });
            e.show()
        },
        destroy: function() {
            y(this.axis.plotLinesAndBands, this);
            delete this.axis;
            Ja(this)
        }
    };
    var da = T.Axis = function() {
        this.init.apply(this, arguments)
    };
    da.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {
                enabled: !0,
                style: {
                    color: "#606060",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0,
                y: 15
            },
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return T.numberFormat(this.total, -1)
                },
                style: z(aa.line.dataLabels.style, {
                    color: "#000000"
                })
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.chart = a;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options,
                e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.reversed = d.reversed;
            this.visible = !1 !== d.visible;
            this.zoomEnabled = !1 !== d.zoomEnabled;
            this.categories = d.categories ||
                "category" === e;
            this.names = this.names || [];
            this.isLog = "logarithmic" === e;
            this.isDatetimeAxis = "datetime" === e;
            this.isLinked = q(d.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.stacksTouched = 0;
            this.min = this.max = null;
            this.crosshair = A(d.crosshair, pa(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events; - 1 === Da(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            a.inverted && c && this.reversed === J && (this.reversed = !0);
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) Y(this, f, d[f]);
            this.isLog && (this.val2lin = p, this.lin2val = P)
        },
        setOptions: function(a) {
            this.options = z(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions,
                this.defaultLeftAxisOptions
            ][this.side], z(la[this.coll], a))
        },
        defaultLabelFormatter: function() {
            var a = this.axis,
                b = this.value,
                c = a.categories,
                d = this.dateTimeLabelFormat,
                e = la.lang.numericSymbols,
                f = e && e.length,
                g, h = a.options.labels.format,
                a = a.isLog ? b : a.tickInterval;
            if (h) g = R(h, this);
            else if (c) g = b;
            else if (d) g = za(d, b);
            else if (f && 1E3 <= a)
                for (; f-- && g === J;) c = Math.pow(1E3, f + 1), a >= c && 0 === 10 * b % c && null !== e[f] && (g = T.numberFormat(b / c, -1) + e[f]);
            g === J && (g = 1E4 <= ma(b) ? T.numberFormat(b, -1) : T.numberFormat(b, -1, J, ""));
            return g
        },
        getSeriesExtremes: function() {
            var a = this,
                b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.threshold = null;
            a.softThreshold = !a.isXAxis;
            a.buildStacks && a.buildStacks();
            v(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d = c.options,
                        e = d.threshold,
                        f;
                    a.hasVisibleSeries = !0;
                    a.isLog && 0 >= e && (e = null);
                    if (a.isXAxis) d = c.xData, d.length && (a.dataMin = V(A(a.dataMin, d[0]), ba(d)), a.dataMax = K(A(a.dataMax, d[0]), Ga(d)));
                    else if (c.getExtremes(), f = c.dataMax, c = c.dataMin, q(c) && q(f) && (a.dataMin = V(A(a.dataMin,
                            c), c), a.dataMax = K(A(a.dataMax, f), f)), q(e) && (a.threshold = e), !d.softThreshold || a.isLog) a.softThreshold = !1
                }
            })
        },
        translate: function(a, b, c, d, e, f) {
            var g = this.linkedParent || this,
                h = 1,
                l = 0,
                m = d ? g.oldTransA : g.transA;
            d = d ? g.oldMin : g.min;
            var n = g.minPixelPadding;
            e = (g.isOrdinal || g.isBroken || g.isLog && e) && g.lin2val;
            m || (m = g.transA);
            c && (h *= -1, l = g.len);
            g.reversed && (h *= -1, l -= h * (g.sector || g.len));
            b ? (a = a * h + l - n, a = a / m + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), "between" === f && (f = .5), a = h * (a - d) * m + l + h * n + (k(f) ? m * f * g.pointRange :
                0));
            return a
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart,
                g = this.left,
                h = this.top,
                l, m, n = c && f.oldChartHeight || f.chartHeight,
                r = c && f.oldChartWidth || f.chartWidth,
                u;
            l = this.transB;
            var w = function(a, b, c) {
                if (a < b || a > c) d ? a = V(K(b, a), c) : u = !0;
                return a
            };
            e = A(e, this.translate(a, null, null, c));
            a = c = L(e + l);
            l = m = L(n - e - l);
            isNaN(e) ? u = !0 : this.horiz ?
                (l = h, m = n - this.bottom, a = c = w(a, g, g + this.width)) : (a = g, c = r - this.right, l = m = w(l, h, h + this.height));
            return u && !d ? null : f.renderer.crispLine(["M", a, l, "L", c, m], b || 1)
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = ra(fa(b / a) * a),
                f = ra(La(c / a) * a),
                g = [];
            if (b === c && k(b)) return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = ra(b + a);
                if (b === d) break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function() {
            var a = this.options,
                b = this.tickPositions,
                c = this.minorTickInterval,
                d = [],
                e, f = this.pointRangePadding || 0;
            e = this.min - f;
            var f = this.max + f,
                g = f - e;
            if (g &&
                g / c < this.len / 3)
                if (this.isLog)
                    for (f = b.length, e = 1; e < f; e++) d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0));
                else if (this.isDatetimeAxis && "auto" === a.minorTickInterval) d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek));
            else
                for (b = e + (b[0] - e) % c; b <= f; b += c) d.push(b);
            0 !== d.length && this.trimTicks(d, a.startOnTick, a.endOnTick);
            return d
        },
        adjustForMinRange: function() {
            var a = this.options,
                b = this.min,
                c = this.max,
                d, e = this.dataMax - this.dataMin >= this.minRange,
                f, g, h, l, m, n;
            this.isXAxis &&
                this.minRange === J && !this.isLog && (q(a.min) || q(a.max) ? this.minRange = null : (v(this.series, function(a) {
                    l = a.xData;
                    for (g = m = a.xIncrement ? 1 : l.length - 1; 0 < g; g--)
                        if (h = l[g] - l[g - 1], f === J || h < f) f = h
                }), this.minRange = V(5 * f, this.dataMax - this.dataMin)));
            c - b < this.minRange && (n = this.minRange, d = (n - c + b) / 2, d = [b - d, A(a.min, b - d)], e && (d[2] = this.dataMin), b = Ga(d), c = [b + n, A(a.max, b + n)], e && (c[2] = this.dataMax), c = ba(c), c - b < n && (d[0] = c - n, d[1] = A(a.min, c - n), b = Ga(d)));
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function(a) {
            var b = this,
                c = b.max -
                b.min,
                d = b.axisPointRange || 0,
                e, f = 0,
                g = 0,
                h = b.linkedParent,
                l = !!b.categories,
                m = b.transA,
                n = b.isXAxis;
            if (n || l || d) h ? (f = h.minPointOffset, g = h.pointRangePadding) : (v(b.series, function(a) {
                    var b = a.closestPointRange;
                    !a.noSharedTooltip && q(b) && (e = q(e) ? V(e, b) : b)
                }), v(b.series, function(a) {
                    var c = l ? 1 : n ? A(a.options.pointRange, e, 0) : b.axisPointRange || 0;
                    a = a.options.pointPlacement;
                    d = K(d, c);
                    b.single || (f = K(f, ea(a) ? 0 : c / 2), g = K(g, "on" === a ? 0 : c))
                })), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding =
                g *= h, b.pointRange = V(d, c), n && (b.closestPointRange = e);
            a && (b.oldTransA = m);
            b.translationSlope = b.transA = m = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = m * f
        },
        minFromRange: function() {
            return this.max - this.range
        },
        setTickInterval: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = b.isLog,
                f = b.isDatetimeAxis,
                g = b.isXAxis,
                h = b.isLinked,
                l = d.maxPadding,
                m = d.minPadding,
                n = d.tickInterval,
                r = d.tickPixelInterval,
                u = b.categories,
                w = b.threshold,
                E = b.softThreshold,
                H, x, D, nb;
            f || u || h || this.getTickAmount();
            D = A(b.userMin,
                d.min);
            nb = A(b.userMax, d.max);
            h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = A(c.min, c.dataMin), b.max = A(c.max, c.dataMax), d.type !== b.linkedParent.options.type && U(11, 1)) : (!E && q(w) && (b.dataMin >= w ? (H = w, m = 0) : b.dataMax <= w && (x = w, l = 0)), b.min = A(D, H, b.dataMin), b.max = A(nb, x, b.dataMax));
            e && (!a && 0 >= V(b.min, A(b.dataMin, b.min)) && U(10, 1), b.min = ra(p(b.min), 15), b.max = ra(p(b.max), 15));
            b.range && q(b.max) && (b.userMin = b.min = D = K(b.min, b.minFromRange()), b.userMax = nb = b.max, b.range = null);
            b.beforePadding &&
                b.beforePadding();
            b.adjustForMinRange();
            !(u || b.axisPointRange || b.usePercentage || h) && q(b.min) && q(b.max) && (c = b.max - b.min) && (!q(D) && m && (b.min -= c * m), !q(nb) && l && (b.max += c * l));
            k(d.floor) && (b.min = K(b.min, d.floor));
            k(d.ceiling) && (b.max = V(b.max, d.ceiling));
            E && q(b.dataMin) && (w = w || 0, !q(D) && b.min < w && b.dataMin >= w ? b.min = w : !q(nb) && b.max > w && b.dataMax <= w && (b.max = w));
            b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : h && !n && r === b.linkedParent.options.tickPixelInterval ? n = b.linkedParent.tickInterval : A(n,
                this.tickAmount ? (b.max - b.min) / K(this.tickAmount - 1, 1) : void 0, u ? 1 : (b.max - b.min) * r / K(b.len, r));
            g && !a && v(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
            b.pointRange && !n && (b.tickInterval = K(b.pointRange, b.tickInterval));
            a = A(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
            !n && b.tickInterval < a && (b.tickInterval =
                a);
            f || e || n || (b.tickInterval = Ya(b.tickInterval, null, W(b.tickInterval), A(d.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));
            !this.tickAmount && this.len && (b.tickInterval = b.unsquish());
            this.setTickPositions()
        },
        setTickPositions: function() {
            var a = this.options,
                b, c = a.tickPositions,
                d = a.tickPositioner,
                e = a.startOnTick,
                f = a.endOnTick,
                g;
            this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
            this.minorTickInterval = "auto" === a.minorTickInterval &&
                this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
            this.tickPositions = b = c && c.slice();
            !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min,
                this.max
            ]))) && (this.tickPositions = b = d);
            this.isLinked || (this.trimTicks(b, e, f), this.min === this.max && q(this.min) && !this.tickAmount && (g = !0, this.min -= .5, this.max += .5), this.single = g, c || d || this.adjustTickAmount())
        },
        trimTicks: function(a, b, c) {
            var d = a[0],
                e = a[a.length - 1],
                f = this.minPointOffset || 0;
            if (b) this.min = d;
            else
                for (; this.min - f > a[0];) a.shift();
            if (c) this.max = e;
            else
                for (; this.max + f < a[a.length - 1];) a.pop();
            0 === a.length && q(d) && a.push((e + d) / 2)
        },
        alignToOthers: function() {
            var a = {},
                b, c = this.options;
            !1 !== this.chart.options.chart.alignTicks &&
                !1 !== c.alignTicks && v(this.chart[this.coll], function(c) {
                    var e = c.options,
                        e = [c.horiz ? e.left : e.top, e.width, e.height, e.pane].join();
                    c.series.length && (a[e] ? b = !0 : a[e] = 1)
                });
            return b
        },
        getTickAmount: function() {
            var a = this.options,
                b = a.tickAmount,
                c = a.tickPixelInterval;
            !q(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
            !b && this.alignToOthers() && (b = La(this.len / c) + 1);
            4 > b && (this.finalTickAmt = b, b = 5);
            this.tickAmount = b
        },
        adjustTickAmount: function() {
            var a = this.tickInterval,
                b =
                this.tickPositions,
                c = this.tickAmount,
                d = this.finalTickAmt,
                e = b && b.length;
            if (e < c) {
                for (; b.length < c;) b.push(ra(b[b.length - 1] + a));
                this.transA *= (e - 1) / (c - 1);
                this.max = b[b.length - 1]
            } else e > c && (this.tickInterval *= 2, this.setTickPositions());
            if (q(d)) {
                for (a = c = b.length; a--;)(3 === d && 1 === a % 2 || 2 >= d && 0 < a && a < c - 1) && b.splice(a, 1);
                this.finalTickAmt = J
            }
        },
        setScale: function() {
            var a, b;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            b = this.len !== this.oldAxisLength;
            v(this.series, function(b) {
                if (b.isDirtyData ||
                    b.isDirty || b.xAxis.isDirty) a = !0
            });
            b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this,
                g = f.chart;
            c = A(c, !0);
            v(f.series, function(a) {
                delete a.kdTree
            });
            e = M(e, {
                min: a,
                max: b
            });
            ha(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                c && g.redraw(d)
            })
        },
        zoom: function(a, b) {
            var c = this.dataMin,
                d = this.dataMax,
                e = this.options,
                f = V(c, A(e.min, c)),
                e = K(d, A(e.max, d));
            this.allowZoomOutside || (q(c) && a <= f && (a = f), q(d) && b >= e && (b = e));
            this.displayBtn = a !== J || b !== J;
            this.setExtremes(a, b, !1, J, {
                trigger: "zoom"
            });
            return !0
        },
        setAxisSize: function() {
            var a = this.chart,
                b = this.options,
                c = b.offsetLeft || 0,
                d = this.horiz,
                e = A(b.width, a.plotWidth -
                    c + (b.offsetRight || 0)),
                f = A(b.height, a.plotHeight),
                g = A(b.top, a.plotTop),
                b = A(b.left, a.plotLeft + c),
                c = /%$/;
            c.test(f) && (f = Math.round(parseFloat(f) / 100 * a.plotHeight));
            c.test(g) && (g = Math.round(parseFloat(g) / 100 * a.plotHeight + a.plotTop));
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = K(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? ra(P(this.min)) : this.min,
                max: a ? ra(P(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(a) {
            var b = this.isLog,
                c = b ? P(this.min) : this.min,
                b = b ? P(this.max) : this.max;
            null === a ? a = 0 > b ? b : c : c > a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function(a) {
            a = (A(a, 0) - 90 * this.side + 720) % 360;
            return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center"
        },
        unsquish: function() {
            var a = this.ticks,
                b = this.options.labels,
                c = this.horiz,
                d = this.tickInterval,
                e = d,
                f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d),
                g, h =
                b.rotation,
                l = this.chart.renderer.fontMetrics(b.style.fontSize, a[0] && a[0].label),
                m, n = Number.MAX_VALUE,
                r, u = function(a) {
                    a /= f || 1;
                    a = 1 < a ? La(a) : 1;
                    return a * d
                };
            c ? (r = !b.staggerLines && !b.step && (q(h) ? [h] : f < A(b.autoRotationLimit, 80) && b.autoRotation)) && v(r, function(a) {
                var b;
                if (a === h || a && -90 <= a && 90 >= a) m = u(ma(l.h / Ma(Za * a))), b = m + ma(a / 360), b < n && (n = b, g = a, e = m)
            }) : b.step || (e = u(l.h));
            this.autoRotation = r;
            this.labelRotation = A(g, h);
            return e
        },
        renderUnsquish: function() {
            var a = this.chart,
                b = a.renderer,
                c = this.tickPositions,
                d = this.ticks,
                e = this.options.labels,
                f = this.horiz,
                g = a.margin,
                h = this.categories ? c.length : c.length - 1,
                g = this.slotWidth = f && 2 > (e.step || 0) && !e.rotation && (this.staggerLines || 1) * a.plotWidth / h || !f && (g[3] && g[3] - a.spacing[3] || .33 * a.chartWidth),
                l = K(1, L(g - 2 * (e.padding || 5))),
                m = {},
                h = b.fontMetrics(e.style.fontSize, d[0] && d[0].label),
                n = e.style.textOverflow,
                r, u = 0,
                w, E;
            ea(e.rotation) || (m.rotation = e.rotation || 0);
            if (this.autoRotation) v(c, function(a) {
                    (a = d[a]) && a.labelLength > u && (u = a.labelLength)
                }), u > l && u > h.h ? m.rotation = this.labelRotation :
                this.labelRotation = 0;
            else if (g && (r = {
                    width: l + "px"
                }, !n))
                for (r.textOverflow = "clip", w = c.length; !f && w--;)
                    if (E = c[w], l = d[E].label)
                        if ("ellipsis" === l.styles.textOverflow && l.css({
                                textOverflow: "clip"
                            }), l.getBBox().height > this.len / c.length - (h.h - h.f) || d[E].labelLength > g) l.specCss = {
                            textOverflow: "ellipsis"
                        };
            m.rotation && (r = {
                width: (u > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px"
            }, n || (r.textOverflow = "ellipsis"));
            if (this.labelAlign = e.align || this.autoLabelAlign(this.labelRotation)) m.align = this.labelAlign;
            v(c,
                function(a) {
                    var b = (a = d[a]) && a.label;
                    b && (b.attr(m), r && b.css(z(r, b.specCss)), delete b.specCss, a.rotation = m.rotation)
                });
            this.tickRotCorr = b.rotCorr(h.b, this.labelRotation || 0, 0 !== this.side)
        },
        hasData: function() {
            return this.hasVisibleSeries || q(this.min) && q(this.max) && !!this.tickPositions
        },
        getOffset: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.tickPositions,
                f = a.ticks,
                g = a.horiz,
                h = a.side,
                l = b.inverted ? [1, 0, 3, 2][h] : h,
                m, n, r = 0,
                u, w = 0,
                E = d.title,
                H = d.labels,
                k = 0,
                p = a.opposite,
                x = b.axisOffset,
                b = b.clipOffset,
                D = [-1, 1, 1, -1][h],
                C, t = a.axisParent;
            m = a.hasData();
            a.showAxis = n = m || A(d.showEmpty, !0);
            a.staggerLines = a.horiz && H.staggerLines;
            a.axisGroup || (a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(t), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(t), a.labelGroup = c.g("axis-labels").attr({
                zIndex: H.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add(t));
            if (m || a.isLinked) v(e, function(b) {
                    f[b] ? f[b].addLabel() : f[b] = new sa(a, b)
                }), a.renderUnsquish(), !1 === H.reserveSpace || 0 !== h && 2 !==
                h && {
                    1: "left",
                    3: "right"
                }[h] !== a.labelAlign && "center" !== a.labelAlign || v(e, function(a) {
                    k = K(f[a].getLabelSize(), k)
                }), a.staggerLines && (k *= a.staggerLines, a.labelOffset = k * (a.opposite ? -1 : 1));
            else
                for (C in f) f[C].destroy(), delete f[C];
            E && E.text && !1 !== E.enabled && (a.axisTitle || (a.axisTitle = c.text(E.text, 0, 0, E.useHTML).attr({
                    zIndex: 7,
                    rotation: E.rotation || 0,
                    align: E.textAlign || {
                        low: p ? "right" : "left",
                        middle: "center",
                        high: p ? "left" : "right"
                    }[E.align]
                }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(E.style).add(a.axisGroup),
                a.axisTitle.isNew = !0), n && (r = a.axisTitle.getBBox()[g ? "height" : "width"], u = E.offset, w = q(u) ? 0 : A(E.margin, g ? 5 : 10)), a.axisTitle[n ? "show" : "hide"](!0));
            a.offset = D * A(d.offset, x[h]);
            a.tickRotCorr = a.tickRotCorr || {
                x: 0,
                y: 0
            };
            c = 2 === h ? a.tickRotCorr.y : 0;
            g = Math.abs(k) + w + (k && D * (g ? A(H.y, a.tickRotCorr.y + 8) : H.x) - c);
            a.axisTitleMargin = A(u, g);
            x[h] = K(x[h], a.axisTitleMargin + r + D * a.offset, g);
            d = d.offset ? 0 : 2 * fa(d.lineWidth / 2);
            b[l] = K(b[l], d)
        },
        getLinePath: function(a) {
            var b = this.chart,
                c = this.opposite,
                d = this.offset,
                e = this.horiz,
                f =
                this.left + (c ? this.width : 0) + d,
                d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        },
        getTitlePosition: function() {
            var a = this.horiz,
                b = this.left,
                c = this.top,
                d = this.len,
                e = this.options.title,
                f = a ? b : c,
                g = this.opposite,
                h = this.offset,
                l = e.x || 0,
                m = e.y || 0,
                n = G(e.style.fontSize || 12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                }[e.align],
                b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin +
                (2 === this.side ? n : 0);
            return {
                x: a ? d + l : b + (g ? this.width : 0) + h + l,
                y: a ? b + m - (g ? this.height : 0) + h : d + m
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.isLog,
                f = a.isLinked,
                g = a.tickPositions,
                h = a.axisTitle,
                l = a.ticks,
                m = a.minorTicks,
                n = a.alternateBands,
                r = d.stackLabels,
                u = d.alternateGridColor,
                w = a.tickmarkOffset,
                E = d.lineWidth,
                H, A = b.hasRendered && q(a.oldMin) && !isNaN(a.oldMin),
                k = a.showAxis,
                x = c.globalAnimation,
                p, D;
            a.labelEdge.length = 0;
            a.overlap = !1;
            v([l, m, n], function(a) {
                for (var b in a) a[b].isActive = !1
            });
            if (a.hasData() || f) a.minorTickInterval && !a.categories && v(a.getMinorTickPositions(), function(b) {
                m[b] || (m[b] = new sa(a, b, "minor"));
                A && m[b].isNew && m[b].render(null, !0);
                m[b].render(null, !1, 1)
            }), g.length && (v(g, function(b, c) {
                if (!f || b >= a.min && b <= a.max) l[b] || (l[b] = new sa(a, b)), A && l[b].isNew && l[b].render(c, !0, .1), l[b].render(c)
            }), w && (0 === a.min || a.single) && (l[-1] || (l[-1] = new sa(a, -1, null, !0)), l[-1].render(-1))), u && v(g, function(c, d) {
                D = g[d + 1] !== J ? g[d + 1] + w : a.max - w;
                0 === d % 2 && c < a.max && D <= a.max + (b.polar ? -w : w) && (n[c] ||
                    (n[c] = new T.PlotLineOrBand(a)), p = c + w, n[c].options = {
                        from: e ? P(p) : p,
                        to: e ? P(D) : D,
                        color: u
                    }, n[c].render(), n[c].isActive = !0)
            }), a._addedPlotLB || (v((d.plotLines || []).concat(d.plotBands || []), function(b) {
                a.addPlotBandOrLine(b)
            }), a._addedPlotLB = !0);
            v([l, m, n], function(a) {
                var c, d, e = [],
                    f = x ? x.duration || 500 : 0;
                for (c in a) a[c].isActive || (a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c));
                ta(function() {
                    for (d = e.length; d--;) a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                }, a !== n && b.hasRendered && f ? f : 0)
            });
            E &&
                (H = a.getLinePath(E), a.axisLine ? a.axisLine.animate({
                    d: H
                }) : a.axisLine = c.path(H).attr({
                    stroke: d.lineColor,
                    "stroke-width": E,
                    zIndex: 7
                }).add(a.axisGroup), a.axisLine[k ? "show" : "hide"](!0));
            h && k && (h[h.isNew ? "attr" : "animate"](a.getTitlePosition()), h.isNew = !1);
            r && r.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function() {
            this.visible && (this.render(), v(this.plotLinesAndBands, function(a) {
                a.render()
            }));
            v(this.series, function(a) {
                a.isDirty = !0
            })
        },
        destroy: function(a) {
            var b = this,
                c = b.stacks,
                d, e = b.plotLinesAndBands;
            a || qa(b);
            for (d in c) Ja(c[d]), c[d] = null;
            v([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                Ja(a)
            });
            for (a = e.length; a--;) e[a].destroy();
            v("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "), function(a) {
                b[a] && (b[a] = b[a].destroy())
            });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function(a, b) {
            var c, d = this.crosshair,
                e, f;
            this.crosshair && !1 !== (q(b) || !A(d.snap, !0)) ? (A(d.snap, !0) ? q(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY +
                this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : A(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null, null, c) || null, null === c ? this.hideCrosshair() : (e = this.categories && !this.isRadial, f = A(d.width, e ? this.transA : 1), this.cross ? this.cross.attr({
                    d: c,
                    visibility: "visible",
                    "stroke-width": f
                }) : (e = {
                    "stroke-width": f,
                    stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
                    zIndex: A(d.zIndex, 2)
                }, d.dashStyle && (e.dashstyle = d.dashStyle), this.cross = this.chart.renderer.path(c).attr(e).add()))) : this.hideCrosshair()
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    };
    M(da.prototype, {
        getPlotBandPath: function(a, b) {
            var c = this.getPlotLinePath(b, null, null, !0),
                d = this.getPlotLinePath(a, null, null, !0);
            d && c ? (d.flat = d.toString() === c.toString(), d.push(c[4], c[5], c[1], c[2])) : d = null;
            return d
        },
        addPlotBand: function(a) {
            return this.addPlotBandOrLine(a, "plotBands")
        },
        addPlotLine: function(a) {
            return this.addPlotBandOrLine(a, "plotLines")
        },
        addPlotBandOrLine: function(a, b) {
            var c = (new T.PlotLineOrBand(this, a)).render(),
                d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c
        },
        removePlotBandOrLine: function(a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;) b[e].id === a && b[e].destroy();
            v([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function(b) {
                for (e = b.length; e--;) b[e].id === a && y(b, b[e])
            })
        }
    });
    da.prototype.getTimeTicks = function(a, b, c, d) {
        var e = [],
            f = {},
            g = la.global.useUTC,
            h, l = new wa(b - N(b)),
            m = a.unitRange,
            n = a.count;
        if (q(b)) {
            l[Qb](m >= ga.second ? 0 : n *
                fa(l.getMilliseconds() / n));
            if (m >= ga.second) l[Rb](m >= ga.minute ? 0 : n * fa(l.getSeconds() / n));
            if (m >= ga.minute) l[Sb](m >= ga.hour ? 0 : n * fa(l[Ab]() / n));
            if (m >= ga.hour) l[Tb](m >= ga.day ? 0 : n * fa(l[Bb]() / n));
            if (m >= ga.day) l[Db](m >= ga.month ? 1 : n * fa(l[gb]() / n));
            m >= ga.month && (l[Eb](m >= ga.year ? 0 : n * fa(l[hb]() / n)), h = l[ib]());
            if (m >= ga.year) l[Fb](h - h % n);
            if (m === ga.week) l[Db](l[gb]() - l[Cb]() + A(d, 1));
            b = 1;
            if (zb || fb) l = l.getTime(), l = new wa(l + N(l));
            h = l[ib]();
            d = l.getTime();
            for (var r = l[hb](), u = l[gb](), w = !g || !!fb, E = (ga.day + (g ? N(l) : 6E4 *
                    l.getTimezoneOffset())) % ga.day; d < c;) e.push(d), d = m === ga.year ? sb(h + b * n, 0) : m === ga.month ? sb(h, r + b * n) : !w || m !== ga.day && m !== ga.week ? d + m * n : sb(h, r, u + b * n * (m === ga.day ? 1 : 7)), b++;
            e.push(d);
            v(Va(e, function(a) {
                return m <= ga.hour && a % ga.day === E
            }), function(a) {
                f[a] = "day"
            })
        }
        e.info = M(a, {
            higherRanks: f,
            totalRange: m * n
        });
        return e
    };
    da.prototype.normalizeTimeTickInterval = function(a, b) {
        var c = b || [
                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ["second", [1, 2, 5, 10, 15, 30]],
                ["minute", [1, 2, 5, 10, 15, 30]],
                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                ["day", [1, 2]],
                ["week", [1, 2]],
                ["month", [1, 2, 3, 4, 6]],
                ["year", null]
            ],
            d = c[c.length - 1],
            e = ga[d[0]],
            f = d[1],
            g;
        for (g = 0; g < c.length && !(d = c[g], e = ga[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + ga[c[g + 1][0]]) / 2); g++);
        e === ga.year && a < 5 * e && (f = [1, 2, 5]);
        c = Ya(a / e, f, "year" === d[0] ? K(W(a / e), 1) : 1);
        return {
            unitRange: e,
            count: c,
            unitName: d[0]
        }
    };
    da.prototype.getLogTickPositions = function(a, b, c, d) {
        var e = this.options,
            f = this.len,
            g = [];
        d || (this._minorAutoInterval = null);
        if (.5 <= a) a = L(a), g = this.getLinearTickPositions(a, b, c);
        else if (.08 <= a)
            for (var f =
                    fa(b), h, l, m, n, r, e = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !r; f++)
                for (l = e.length, h = 0; h < l && !r; h++) m = p(P(f) * e[h]), m > b && (!d || n <= c) && n !== J && g.push(n), n > c && (r = !0), n = m;
        else b = P(b), c = P(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = A("auto" === a ? null : a, this._minorAutoInterval, e.tickPixelInterval / (d ? 5 : 1) * (c - b) / ((d ? f / this.tickPositions.length : f) || 1)), a = Ya(a, null, W(a)), g = Aa(this.getLinearTickPositions(a, b, c), p), d || (this._minorAutoInterval = a / 5);
        d || (this.tickInterval = a);
        return g
    };
    var Jb = T.Tooltip =
        function() {
            this.init.apply(this, arguments)
        };
    Jb.prototype = {
        init: function(a, b) {
            var c = b.borderWidth,
                d = b.style,
                e = G(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {
                x: 0,
                y: 0
            };
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e,
                fill: b.backgroundColor,
                "stroke-width": c,
                r: b.borderRadius,
                zIndex: 8
            }).css(d).css({
                padding: 0
            }).add().attr({
                y: -9999
            });
            Ha || this.label.shadow(b.shadow);
            this.shared = b.shared
        },
        destroy: function() {
            this.label &&
                (this.label = this.label.destroy());
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        },
        move: function(a, b, c, d) {
            var e = this,
                f = e.now,
                g = !1 !== e.options.animation && !e.isHidden && (1 < ma(a - f.x) || 1 < ma(b - f.y)),
                h = e.followPointer || 1 < e.len;
            M(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? J : g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: h ? J : g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            g && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32))
        },
        hide: function(a) {
            var b = this;
            clearTimeout(this.hideTimer);
            a = A(a, this.options.hideDelay, 500);
            this.isHidden || (this.hideTimer = ta(function() {
                b.label[a ? "fadeOut" : "hide"]();
                b.isHidden = !0
            }, a))
        },
        getAnchor: function(a, b) {
            var c, d = this.chart,
                e = d.inverted,
                f = d.plotTop,
                g = d.plotLeft,
                h = 0,
                l = 0,
                m, n;
            a = pa(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === J && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
            c || (v(a, function(a) {
                    m = a.series.yAxis;
                    n = a.series.xAxis;
                    h += a.plotX + (!e && n ? n.left - g : 0);
                    l += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && m ? m.top - f : 0)
                }),
                h /= a.length, l /= a.length, c = [e ? d.plotWidth - l : h, this.shared && !e && 1 < a.length && b ? b.chartY - f : e ? d.plotHeight - h : l]);
            return Aa(c, L)
        },
        getPosition: function(a, b, c) {
            var d = this.chart,
                e = this.distance,
                f = {},
                g = c.h || 0,
                h, l = ["y", d.chartHeight, b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight],
                m = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth],
                n = A(c.ttBelow, d.inverted && !c.negative || !d.inverted && c.negative),
                r = function(a, b, c, d, h, l) {
                    var m = c < d - e,
                        u = d + e + c < b,
                        r = d - e - c;
                    d += e;
                    if (n && u) f[a] = d;
                    else if (!n &&
                        m) f[a] = r;
                    else if (m) f[a] = V(l - c, 0 > r - g ? r : r - g);
                    else if (u) f[a] = K(h, d + g + c > b ? d : d + g);
                    else return !1
                },
                u = function(a, b, c, d) {
                    var g;
                    d < e || d > b - e ? g = !1 : f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2;
                    return g
                },
                w = function(a) {
                    var b = l;
                    l = m;
                    m = b;
                    h = a
                },
                E = function() {
                    !1 !== r.apply(0, l) ? !1 !== u.apply(0, m) || h || (w(!0), E()) : h ? f.x = f.y = 0 : (w(!0), E())
                };
            (d.inverted || 1 < this.len) && w();
            E();
            return f
        },
        defaultFormatter: function(a) {
            var b = this.points || pa(this),
                c;
            c = [a.tooltipFooterHeaderFormatter(b[0])];
            c = c.concat(a.bodyFormatter(b));
            c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
            return c.join("")
        },
        refresh: function(a, b) {
            var c = this.chart,
                d = this.label,
                e = this.options,
                f, g, h, l = {},
                m, n = [];
            m = e.formatter || this.defaultFormatter;
            var l = c.hoverPoints,
                r, u = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = pa(a)[0].series.tooltipOptions.followPointer;
            h = this.getAnchor(a, b);
            f = h[0];
            g = h[1];
            !u || a.series && a.series.noSharedTooltip ? l = a.getLabelConfig() : (c.hoverPoints = a, l && v(l, function(a) {
                a.setState()
            }), v(a, function(a) {
                a.setState("hover");
                n.push(a.getLabelConfig())
            }), l = {
                x: a[0].category,
                y: a[0].y
            }, l.points = n, this.len = n.length, a = a[0]);
            m = m.call(l, this);
            l = a.series;
            this.distance = A(l.tooltipOptions.distance, 16);
            !1 === m ? this.hide() : (this.isHidden && (Wa(d), d.attr("opacity", 1).show()), d.attr({
                text: m
            }), r = e.borderColor || a.color || l.color || "#606060", d.attr({
                stroke: r
            }), this.updatePosition({
                plotX: f,
                plotY: g,
                negative: a.negative,
                ttBelow: a.ttBelow,
                h: h[2] || 0
            }), this.isHidden = !1);
            ha(c, "tooltipRefresh", {
                text: m,
                x: f + c.plotLeft,
                y: g + c.plotTop,
                borderColor: r
            })
        },
        updatePosition: function(a) {
            var b = this.chart,
                c = this.label,
                c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(L(c.x), L(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        },
        getXDateFormat: function(a, b, c) {
            var d;
            b = b.dateTimeLabelFormats;
            var e = c && c.closestPointRange,
                f, g = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3
                },
                h, l = "millisecond";
            if (e) {
                h = za("%m-%d %H:%M:%S.%L", a.x);
                for (f in ga) {
                    if (e === ga.week && +za("%w", a.x) === c.options.startOfWeek && "00:00:00.000" === h.substr(6)) {
                        f = "week";
                        break
                    }
                    if (ga[f] > e) {
                        f = l;
                        break
                    }
                    if (g[f] && h.substr(g[f]) !==
                        "01-01 00:00:00.000".substr(g[f])) break;
                    "week" !== f && (l = f)
                }
                f && (d = b[f])
            } else d = b.day;
            return d || b.year
        },
        tooltipFooterHeaderFormatter: function(a, b) {
            var c = b ? "footer" : "header",
                d = a.series,
                e = d.tooltipOptions,
                f = e.xDateFormat,
                g = d.xAxis,
                h = g && "datetime" === g.options.type && k(a.key),
                c = e[c + "Format"];
            h && !f && (f = this.getXDateFormat(a, e, g));
            h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));
            return R(c, {
                point: a,
                series: d
            })
        },
        bodyFormatter: function(a) {
            return Aa(a, function(a) {
                var c = a.series.tooltipOptions;
                return (c.pointFormatter ||
                    a.point.tooltipFormatter).call(a.point, c.pointFormat)
            })
        }
    };
    var Ba;
    db = Z && Z.documentElement.ontouchstart !== J;
    var ab = T.Pointer = function(a, b) {
        this.init(a, b)
    };
    ab.prototype = {
        init: function(a, b) {
            var c = b.chart,
                d = c.events,
                e = Ha ? "" : c.zoomType,
                c = a.inverted,
                f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            T.Tooltip && b.tooltip.enabled && (a.tooltip =
                new Jb(a, b.tooltip), this.followTouchMove = A(b.tooltip.followTouchMove, !0));
            this.setDOMEvents()
        },
        normalize: function(a, b) {
            var c, d;
            a = a || t.event;
            a.target || (a.target = a.srcElement);
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            b || (this.chartPosition = b = Ib(this.chart.container));
            d.pageX === J ? (c = K(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
            return M(a, {
                chartX: L(c),
                chartY: L(d)
            })
        },
        getCoordinates: function(a) {
            var b = {
                xAxis: [],
                yAxis: []
            };
            v(this.chart.axes, function(c) {
                b[c.isXAxis ?
                    "xAxis" : "yAxis"].push({
                    axis: c,
                    value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                })
            });
            return b
        },
        runPointActions: function(a) {
            var b = this.chart,
                c = b.series,
                d = b.tooltip,
                e = d ? d.shared : !1,
                f = b.hoverPoint,
                g = b.hoverSeries,
                h = [Number.MAX_VALUE, Number.MAX_VALUE],
                l, m, n = [],
                r = [],
                u;
            if (!e && !g)
                for (b = 0; b < c.length; b++)
                    if (c[b].directTouch || !c[b].options.stickyTracking) c = [];
            g && (e ? g.noSharedTooltip : g.directTouch) && f ? r = [f] : (v(c, function(b) {
                l = b.noSharedTooltip && e;
                m = !e && b.directTouch;
                b.visible && !l && !m && A(b.options.enableMouseTracking, !0) && (u = b.searchPoint(a, !l && 1 === b.kdDimensions)) && n.push(u)
            }), v(n, function(a) {
                a && v(["dist", "distX"], function(b, c) {
                    "number" === typeof a[b] && a[b] < h[c] && (h[c] = a[b], r[c] = a)
                })
            }));
            if (e)
                for (b = n.length; b--;)(n[b].clientX !== r[1].clientX || n[b].series.noSharedTooltip) && n.splice(b, 1);
            if (r[0] && (r[0] !== this.prevKDPoint || d && d.isHidden))
                if (e && !r[0].series.noSharedTooltip) n.length && d && d.refresh(n, a), v(n, function(b) {
                    b.onMouseOver(a, b !== (g && g.directTouch && f || r[0]))
                }), this.prevKDPoint = r[1];
                else {
                    d && d.refresh(r[0], a);
                    if (!g ||
                        !g.directTouch) r[0].onMouseOver(a);
                    this.prevKDPoint = r[0]
                } else c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({
                plotX: c[0],
                plotY: c[1]
            }));
            this._onDocumentMouseMove || (this._onDocumentMouseMove = function(a) {
                if (va[Ba]) va[Ba].pointer.onDocumentMouseMove(a)
            }, Y(Z, "mousemove", this._onDocumentMouseMove));
            v(e ? n : [A(r[1], f)], function(b) {
                var c = b && b.series;
                c && v(["xAxis", "yAxis", "colorAxis"], function(d) {
                    c[d] && c[d].drawCrosshair(a, b)
                })
            })
        },
        reset: function(a, b) {
            var c = this.chart,
                d = c.hoverSeries,
                e = c.hoverPoint,
                f = c.hoverPoints,
                g = c.tooltip,
                h = g && g.shared ? f : e;
            (a = a && g && h) && v(pa(h), function(b) {
                void 0 === b.plotX && (a = !1)
            });
            if (a) g.refresh(h), e && (e.setState(e.state, !0), v(c.axes, function(a) {
                A(a.options.crosshair && a.options.crosshair.snap, !0) ? a.drawCrosshair(null, e) : a.hideCrosshair()
            }));
            else {
                if (e) e.onMouseOut();
                f && v(f, function(a) {
                    a.setState()
                });
                if (d) d.onMouseOut();
                g && g.hide(b);
                this._onDocumentMouseMove && (qa(Z, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null);
                v(c.axes,
                    function(a) {
                        a.hideCrosshair()
                    });
                this.hoverX = c.hoverPoints = c.hoverPoint = null
            }
        },
        scaleGroups: function(a, b) {
            var c = this.chart,
                d;
            v(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        },
        dragStart: function(a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY =
                a.chartY
        },
        drag: function(a) {
            var b = this.chart,
                c = b.options.chart,
                d = a.chartX,
                e = a.chartY,
                f = this.zoomHor,
                g = this.zoomVert,
                h = b.plotLeft,
                l = b.plotTop,
                m = b.plotWidth,
                n = b.plotHeight,
                r, u = this.selectionMarker,
                w = this.mouseDownX,
                E = this.mouseDownY,
                H = c.panKey && a[c.panKey + "Key"];
            u && u.touch || (d < h ? d = h : d > h + m && (d = h + m), e < l ? e = l : e > l + n && (e = l + n), this.hasDragged = Math.sqrt(Math.pow(w - d, 2) + Math.pow(E - e, 2)), 10 < this.hasDragged && (r = b.isInsidePlot(w - h, E - l), b.hasCartesianSeries && (this.zoomX || this.zoomY) && r && !H && !u && (this.selectionMarker =
                u = b.renderer.rect(h, l, f ? 1 : m, g ? 1 : n, 0).attr({
                    fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add()), u && f && (d -= w, u.attr({
                width: ma(d),
                x: (0 < d ? 0 : d) + w
            })), u && g && (d = e - E, u.attr({
                height: ma(d),
                y: (0 < d ? 0 : d) + E
            })), r && !u && c.panning && b.pan(a, c.panning)))
        },
        drop: function(a) {
            var b = this,
                c = this.chart,
                d = this.hasPinched;
            if (this.selectionMarker) {
                var e = {
                        originalEvent: a,
                        xAxis: [],
                        yAxis: []
                    },
                    f = this.selectionMarker,
                    g = f.attr ? f.attr("x") : f.x,
                    h = f.attr ? f.attr("y") : f.y,
                    l = f.attr ? f.attr("width") : f.width,
                    m = f.attr ? f.attr("height") :
                    f.height,
                    n;
                if (this.hasDragged || d) v(c.axes, function(c) {
                    if (c.zoomEnabled && q(c.min) && (d || b[{
                            xAxis: "zoomX",
                            yAxis: "zoomY"
                        }[c.coll]])) {
                        var f = c.horiz,
                            w = "touchend" === a.type ? c.minPixelPadding : 0,
                            E = c.toValue((f ? g : h) + w),
                            f = c.toValue((f ? g + l : h + m) - w);
                        e[c.coll].push({
                            axis: c,
                            min: V(E, f),
                            max: K(E, f)
                        });
                        n = !0
                    }
                }), n && ha(c, "selection", e, function(a) {
                    c.zoom(M(a, d ? {
                        animation: !1
                    } : null))
                });
                this.selectionMarker = this.selectionMarker.destroy();
                d && this.scaleGroups()
            }
            c && (F(c.container, {
                    cursor: c._cursor
                }), c.cancelClick = 10 < this.hasDragged,
                c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        },
        onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        },
        onDocumentMouseUp: function(a) {
            va[Ba] && va[Ba].pointer.drop(a)
        },
        onDocumentMouseMove: function(a) {
            var b = this.chart,
                c = this.chartPosition;
            a = this.normalize(a, c);
            !c || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset()
        },
        onContainerMouseLeave: function(a) {
            var b = va[Ba];
            b &&
                (a.relatedTarget || a.toElement) && (b.pointer.reset(), b.pointer.chartPosition = null)
        },
        onContainerMouseMove: function(a) {
            var b = this.chart;
            q(Ba) && va[Ba] && va[Ba].mouseIsDown || (Ba = b.index);
            a = this.normalize(a);
            a.returnValue = !1;
            "mousedown" === b.mouseIsDown && this.drag(a);
            !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a)
        },
        inClass: function(a, b) {
            for (var c; a;) {
                if (c = B(a, "class")) {
                    if (-1 !== c.indexOf(b)) return !0;
                    if (-1 !== c.indexOf("highcharts-container")) return !1
                }
                a =
                    a.parentNode
            }
        },
        onTrackerMouseOut: function(a) {
            var b = this.chart.hoverSeries;
            a = a.relatedTarget || a.toElement;
            if (b && a && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && !this.inClass(a, "highcharts-series-" + b.index)) b.onMouseOut()
        },
        onContainerClick: function(a) {
            var b = this.chart,
                c = b.hoverPoint,
                d = b.plotLeft,
                e = b.plotTop;
            a = this.normalize(a);
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (ha(c.series, "click", M(a, {
                point: c
            })), b.hoverPoint && c.firePointEvent("click", a)) : (M(a, this.getCoordinates(a)),
                b.isInsidePlot(a.chartX - d, a.chartY - e) && ha(b, "click", a)))
        },
        setDOMEvents: function() {
            var a = this,
                b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function(b) {
                a.onContainerClick(b)
            };
            Y(b, "mouseleave", a.onContainerMouseLeave);
            1 === lb && Y(Z, "mouseup", a.onDocumentMouseUp);
            db && (b.ontouchstart = function(b) {
                a.onContainerTouchStart(b)
            }, b.ontouchmove = function(b) {
                a.onContainerTouchMove(b)
            }, 1 === lb && Y(Z, "touchend", a.onDocumentTouchEnd))
        },
        destroy: function() {
            var a;
            qa(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            lb || (qa(Z, "mouseup", this.onDocumentMouseUp), qa(Z, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }
    };
    M(T.Pointer.prototype, {
        pinchTranslate: function(a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        },
        pinchTranslateDirection: function(a, b, c, d, e, f, g,
            h) {
            var l = this.chart,
                m = a ? "x" : "y",
                n = a ? "X" : "Y",
                r = "chart" + n,
                u = a ? "width" : "height",
                w = l["plot" + (a ? "Left" : "Top")],
                E, H, A = h || 1,
                k = l.inverted,
                q = l.bounds[a ? "h" : "v"],
                p = 1 === b.length,
                x = b[0][r],
                v = c[0][r],
                D = !p && b[1][r],
                C = !p && c[1][r],
                t;
            c = function() {
                !p && 20 < ma(x - D) && (A = h || ma(v - C) / ma(x - D));
                H = (w - v) / A + x;
                E = l["plot" + (a ? "Width" : "Height")] / A
            };
            c();
            b = H;
            b < q.min ? (b = q.min, t = !0) : b + E > q.max && (b = q.max - E, t = !0);
            t ? (v -= .8 * (v - g[m][0]), p || (C -= .8 * (C - g[m][1])), c()) : g[m] = [v, C];
            k || (f[m] = H - w, f[u] = E);
            f = k ? 1 / A : A;
            e[u] = E;
            e[m] = b;
            d[k ? a ? "scaleY" : "scaleX" :
                "scale" + n] = A;
            d["translate" + n] = f * w + (v - f * x)
        },
        pinch: function(a) {
            var b = this,
                c = b.chart,
                d = b.pinchDown,
                e = a.touches,
                f = e.length,
                g = b.lastValidTouch,
                h = b.hasZoom,
                l = b.selectionMarker,
                m = {},
                n = 1 === f && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick),
                r = {};
            1 < f && (b.initiated = !0);
            h && b.initiated && !n && a.preventDefault();
            Aa(e, function(a) {
                return b.normalize(a)
            });
            "touchstart" === a.type ? (v(e, function(a, b) {
                d[b] = {
                    chartX: a.chartX,
                    chartY: a.chartY
                }
            }), g.x = [d[0].chartX, d[1] && d[1].chartX], g.y = [d[0].chartY,
                d[1] && d[1].chartY
            ], v(c.axes, function(a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"],
                        d = a.minPixelPadding,
                        e = a.toPixels(A(a.options.min, a.dataMin)),
                        f = a.toPixels(A(a.options.max, a.dataMax)),
                        g = V(e, f),
                        e = K(e, f);
                    b.min = V(a.pos, g - d);
                    b.max = K(a.pos + a.len, e + d)
                }
            }), b.res = !0) : d.length && (l || (b.selectionMarker = l = M({
                destroy: na,
                touch: !0
            }, c.plotBox)), b.pinchTranslate(d, e, m, l, r, g), b.hasPinched = h, b.scaleGroups(m, r), !h && b.followTouchMove && 1 === f ? this.runPointActions(b.normalize(a)) : b.res && (b.res = !1, this.reset(!1, 0)))
        },
        touch: function(a, b) {
            var c = this.chart;
            Ba = c.index;
            1 === a.touches.length ? (a = this.normalize(a), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && !c.openMenu ? (b && this.runPointActions(a), this.pinch(a)) : b && this.reset()) : 2 === a.touches.length && this.pinch(a)
        },
        onContainerTouchStart: function(a) {
            this.touch(a, !0)
        },
        onContainerTouchMove: function(a) {
            this.touch(a)
        },
        onDocumentTouchEnd: function(a) {
            va[Ba] && va[Ba].pointer.drop(a)
        }
    });
    if (t.PointerEvent || t.MSPointerEvent) {
        var Qa = {},
            Kb = !!t.PointerEvent,
            hc = function() {
                var a,
                    b = [];
                b.item = function(a) {
                    return this[a]
                };
                for (a in Qa) Qa.hasOwnProperty(a) && b.push({
                    pageX: Qa[a].pageX,
                    pageY: Qa[a].pageY,
                    target: Qa[a].target
                });
                return b
            },
            Lb = function(a, b, c, d) {
                "touch" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_TOUCH || !va[Ba] || (d(a), d = va[Ba].pointer, d[b]({
                    type: c,
                    target: a.currentTarget,
                    preventDefault: na,
                    touches: hc()
                }))
            };
        M(ab.prototype, {
            onContainerPointerDown: function(a) {
                Lb(a, "onContainerTouchStart", "touchstart", function(a) {
                    Qa[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        target: a.currentTarget
                    }
                })
            },
            onContainerPointerMove: function(a) {
                Lb(a, "onContainerTouchMove", "touchmove", function(a) {
                    Qa[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY
                    };
                    Qa[a.pointerId].target || (Qa[a.pointerId].target = a.currentTarget)
                })
            },
            onDocumentPointerUp: function(a) {
                Lb(a, "onDocumentTouchEnd", "touchend", function(a) {
                    delete Qa[a.pointerId]
                })
            },
            batchMSEvents: function(a) {
                a(this.chart.container, Kb ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a(this.chart.container, Kb ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(Z, Kb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        });
        ia(ab.prototype, "init", function(a, b, c) {
            a.call(this, b, c);
            this.hasZoom && F(b.container, {
                "-ms-touch-action": "none",
                "touch-action": "none"
            })
        });
        ia(ab.prototype, "setDOMEvents", function(a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(Y)
        });
        ia(ab.prototype, "destroy", function(a) {
            this.batchMSEvents(qa);
            a.call(this)
        })
    }
    var vb = T.Legend = function(a, b) {
        this.init(a, b)
    };
    vb.prototype = {
        init: function(a, b) {
            var c = this,
                d = b.itemStyle,
                e = b.itemMarginTop ||
                0;
            this.options = b;
            b.enabled && (c.itemStyle = d, c.itemHiddenStyle = z(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = A(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = A(b.symbolWidth, 16), c.pages = [], c.render(), Y(c.chart, "endResize", function() {
                c.positionCheckboxes()
            }))
        },
        colorizeItem: function(a, b) {
            var c = this.options,
                d = a.legendItem,
                e = a.legendLine,
                f = a.legendSymbol,
                g = this.itemHiddenStyle.color,
                c = b ? c.itemStyle.color : g,
                h = b ? a.legendColor || a.color || "#CCC" :
                g,
                g = a.options && a.options.marker,
                l = {
                    fill: h
                },
                m;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g && f.isMarker)
                    for (m in l.stroke = h, g = a.convertAttribs(g), g) d = g[m], d !== J && (l[m] = d);
                f.attr(l)
            }
        },
        positionItem: function(a) {
            var b = this.options,
                c = b.symbolPadding,
                b = !b.rtl,
                d = a._legendItemPos,
                e = d[0],
                d = d[1],
                f = a.checkbox;
            (a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            f && (f.x = e, f.y = d)
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            v(["legendItem", "legendLine", "legendSymbol", "legendGroup"],
                function(b) {
                    a[b] && (a[b] = a[b].destroy())
                });
            b && Ka(a.checkbox)
        },
        destroy: function() {
            var a = this.group,
                b = this.box;
            b && (this.box = b.destroy());
            a && (this.group = a.destroy())
        },
        positionCheckboxes: function(a) {
            var b = this.group.alignAttr,
                c, d = this.clipHeight || this.legendHeight,
                e = this.titleHeight;
            b && (c = b.translateY, v(this.allItems, function(f) {
                var g = f.checkbox,
                    h;
                g && (h = c + e + g.y + (a || 0) + 3, F(g, {
                    left: b.translateX + f.checkboxOffset + g.x - 20 + "px",
                    top: h + "px",
                    display: h > c - 6 && h < c + d - 6 ? "" : "none"
                }))
            }))
        },
        renderTitle: function() {
            var a = this.padding,
                b = this.options.title,
                c = 0;
            b.text && (this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                zIndex: 1
            }).css(b.style).add(this.group)), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
                translateY: c
            }));
            this.titleHeight = c
        },
        setText: function(a) {
            var b = this.options;
            a.legendItem.attr({
                text: b.labelFormat ? R(b.labelFormat, a) : b.labelFormatter.call(a)
            })
        },
        renderItem: function(a) {
            var b = this.chart,
                c = b.renderer,
                d = this.options,
                e = "horizontal" ===
                d.layout,
                f = this.symbolWidth,
                g = d.symbolPadding,
                h = this.itemStyle,
                l = this.itemHiddenStyle,
                m = this.padding,
                n = e ? A(d.itemDistance, 20) : 0,
                r = !d.rtl,
                u = d.width,
                w = d.itemMarginBottom || 0,
                E = this.itemMarginTop,
                H = this.initialItemX,
                k = a.legendItem,
                q = a.series && a.series.drawLegendSymbol ? a.series : a,
                p = q.options,
                p = this.createCheckboxForItem && p && p.showCheckbox,
                x = d.useHTML;
            k || (a.legendGroup = c.g("legend-item").attr({
                zIndex: 1
            }).add(this.scrollGroup), a.legendItem = k = c.text("", r ? f + g : -g, this.baseline || 0, x).css(z(a.visible ? h : l)).attr({
                align: r ?
                    "left" : "right",
                zIndex: 2
            }).add(a.legendGroup), this.baseline || (this.fontMetrics = c.fontMetrics(h.fontSize, k), this.baseline = this.fontMetrics.f + 3 + E, k.attr("y", this.baseline)), q.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, k, x, h, l), p && this.createCheckboxForItem(a));
            this.colorizeItem(a, a.visible);
            this.setText(a);
            c = k.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + n + (p ? 20 : 0);
            this.itemHeight = g = L(a.legendItemHeight || c.height);
            e && this.itemX - H + f > (u || b.chartWidth -
                2 * m - H - d.x) && (this.itemX = H, this.itemY += E + this.lastLineHeight + w, this.lastLineHeight = 0);
            this.maxItemWidth = K(this.maxItemWidth, f);
            this.lastItemY = E + this.itemY + w;
            this.lastLineHeight = K(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += E + g + w, this.lastLineHeight = g);
            this.offsetWidth = u || K((e ? this.itemX - H - n : f) + m, this.offsetWidth)
        },
        getAllItems: function() {
            var a = [];
            v(this.chart.series, function(b) {
                var c = b.options;
                A(c.showInLegend, q(c.linkedTo) ? !1 : J, !0) && (a = a.concat(b.legendItems ||
                    ("point" === c.legendType ? b.data : b)))
            });
            return a
        },
        adjustMargins: function(a, b) {
            var c = this.chart,
                d = this.options,
                e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
            this.display && !d.floating && v([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(f, g) {
                f.test(e) && !q(a[g]) && (c[ub[g]] = K(c[ub[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + A(d.margin, 12) + b[g]))
            })
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.group,
                e, f, g, h, l = a.box,
                m =
                a.options,
                n = a.padding,
                r = m.borderWidth,
                u = m.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            d || (a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup));
            a.renderTitle();
            e = a.getAllItems();
            qb(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            m.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            a.lastLineHeight = 0;
            v(e, function(b) {
                a.renderItem(b)
            });
            g = (m.width || a.offsetWidth) + n;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            h += n;
            if (r || u) l ? 0 < g && 0 < h && (l[l.isNew ? "attr" : "animate"](l.crisp({
                width: g,
                height: h
            })), l.isNew = !1) : (a.box = l = c.rect(0, 0, g, h, m.borderRadius, r || 0).attr({
                stroke: m.borderColor,
                "stroke-width": r || 0,
                fill: u || "none"
            }).add(d).shadow(m.shadow), l.isNew = !0), l[f ? "show" : "hide"]();
            a.legendWidth = g;
            a.legendHeight = h;
            v(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(M({
                width: g,
                height: h
            }, m), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b = this,
                c = this.chart,
                d = c.renderer,
                e = this.options,
                f = e.y,
                f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding,
                g = e.maxHeight,
                h, l = this.clipRect,
                m = e.navigation,
                n = A(m.animation, !0),
                r = m.arrowSize || 12,
                u = this.nav,
                w = this.pages,
                E = this.padding,
                H, k = this.allItems,
                p = function(a) {
                    l.attr({
                        height: a
                    });
                    b.contentGroup.div && (b.contentGroup.div.style.clip = "rect(" + E + "px,9999px," + (E + a) + "px,0)")
                };
            "horizontal" === e.layout && (f /= 2);
            g && (f = V(f, g));
            w.length = 0;
            a > f ? (this.clipHeight = h = K(f - 20 -
                this.titleHeight - E, 0), this.currentPage = A(this.currentPage, 1), this.fullHeight = a, v(k, function(a, b) {
                var c = a._legendItemPos[1],
                    d = L(a.legendItem.getBBox().height),
                    e = w.length;
                if (!e || c - w[e - 1] > h && (H || c) !== w[e - 1]) w.push(H || c), e++;
                b === k.length - 1 && c + d - w[e - 1] > h && w.push(c);
                c !== H && (H = c)
            }), l || (l = b.clipRect = d.clipRect(0, E, 9999, 0), b.contentGroup.clip(l)), p(h), u || (this.nav = u = d.g().attr({
                zIndex: 1
            }).add(this.group), this.up = d.symbol("triangle", 0, 0, r, r).on("click", function() {
                b.scroll(-1, n)
            }).add(u), this.pager = d.text("",
                15, 10).css(m.style).add(u), this.down = d.symbol("triangle-down", 0, 0, r, r).on("click", function() {
                b.scroll(1, n)
            }).add(u)), b.scroll(0), a = f) : u && (p(c.chartHeight), u.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0);
            return a
        },
        scroll: function(a, b) {
            var c = this.pages,
                d = c.length,
                e = this.currentPage + a,
                f = this.clipHeight,
                g = this.options.navigation,
                h = g.activeColor,
                g = g.inactiveColor,
                l = this.pager,
                m = this.padding;
            e > d && (e = d);
            0 < e && (b !== J && Sa(b, this.chart), this.nav.attr({
                translateX: m,
                translateY: f + this.padding +
                    7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: 1 === e ? g : h
            }).css({
                cursor: 1 === e ? "default" : "pointer"
            }), l.attr({
                text: e + "/" + d
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: e === d ? g : h
            }).css({
                cursor: e === d ? "default" : "pointer"
            }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: c
            }), this.currentPage = e, this.positionCheckboxes(c))
        }
    };
    var ob = T.LegendSymbolMixin = {
        drawRectangle: function(a, b) {
            var c = a.options.symbolHeight || a.fontMetrics.f;
            b.legendSymbol = this.chart.renderer.rect(0,
                a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(b.legendGroup)
        },
        drawLineMarker: function(a) {
            var b = this.options,
                c = b.marker,
                d = a.symbolWidth,
                e = this.chart.renderer,
                f = this.legendGroup;
            a = a.baseline - L(.3 * a.fontMetrics.b);
            var g;
            b.lineWidth && (g = {
                "stroke-width": b.lineWidth
            }, b.dashStyle && (g.dashstyle = b.dashStyle), this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f));
            c && !1 !== c.enabled && (b = c.radius, this.legendSymbol = c = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b, c).add(f), c.isMarker = !0)
        }
    };
    (/Trident\/7\.0/.test(Ta) || $a) && ia(vb.prototype, "positionItem", function(a, b) {
        var c = this,
            d = function() {
                b._legendItemPos && a.call(c, b)
            };
        d();
        setTimeout(d)
    });
    var Ia = T.Chart = function() {
        this.getArgs.apply(this, arguments)
    };
    T.chart = function(a, b, c) {
        return new Ia(a, b, c)
    };
    Ia.prototype = {
        callbacks: [],
        getArgs: function() {
            var a = [].slice.call(arguments);
            if (ea(a[0]) || a[0].nodeName) this.renderTo = a.shift();
            this.init(a[0], a[1])
        },
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = z(la, a);
            c.series = a.series = d;
            this.userOptions =
                a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this,
                g;
            f.index = va.length;
            va.push(f);
            lb++;
            !1 !== d.reflow && Y(f, "load", function() {
                f.initReflow()
            });
            if (e)
                for (g in e) Y(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = Ha ? !1 : A(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender()
        },
        initSeries: function(a) {
            var b =
                this.options.chart;
            (b = Q[a.type || b.type || b.defaultSeriesType]) || U(17, !0);
            b = new b;
            b.init(this, a);
            return b
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a;
            a = c ? a : b;
            return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
        },
        redraw: function(a) {
            var b = this.axes,
                c = this.series,
                d = this.pointer,
                e = this.legend,
                f = this.isDirtyLegend,
                g, h, l = this.hasCartesianSeries,
                m = this.isDirtyBox,
                n = c.length,
                r = n,
                u = this.renderer,
                w = u.isHidden(),
                E = [];
            Sa(a, this);
            w && this.cloneRenderTo();
            for (this.layOutTitles(); r--;)
                if (a = c[r], a.options.stacking &&
                    (g = !0, a.isDirty)) {
                    h = !0;
                    break
                }
            if (h)
                for (r = n; r--;) a = c[r], a.options.stacking && (a.isDirty = !0);
            v(c, function(a) {
                a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), f = !0)
            });
            f && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
            g && this.getStacks();
            l && !this.isResizing && (this.maxTicks = null, v(b, function(a) {
                a.setScale()
            }));
            this.getMargins();
            l && (v(b, function(a) {
                a.isDirty && (m = !0)
            }), v(b, function(a) {
                var b = a.min + "," + a.max;
                a.extKey !== b && (a.extKey = b, E.push(function() {
                    ha(a, "afterSetExtremes",
                        M(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                }));
                (m || g) && a.redraw()
            }));
            m && this.drawChartBox();
            v(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            u.draw();
            ha(this, "redraw");
            w && this.cloneRenderTo(!0);
            v(E, function(a) {
                a.call()
            })
        },
        get: function(a) {
            var b = this.axes,
                c = this.series,
                d, e;
            for (d = 0; d < b.length; d++)
                if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++)
                if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++)
                for (e = c[d].points || [], b = 0; b < e.length; b++)
                    if (e[b].id ===
                        a) return e[b];
            return null
        },
        getAxes: function() {
            var a = this,
                b = this.options,
                c = b.xAxis = pa(b.xAxis || {}),
                b = b.yAxis = pa(b.yAxis || {});
            v(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            v(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            v(c, function(b) {
                new da(a, b)
            })
        },
        getSelectedPoints: function() {
            var a = [];
            v(this.series, function(b) {
                a = a.concat(Va(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        },
        getSelectedSeries: function() {
            return Va(this.series, function(a) {
                return a.selected
            })
        },
        setTitle: function(a, b, c) {
            var d = this,
                e = d.options,
                f;
            f = e.title = z(e.title, a);
            e = e.subtitle = z(e.subtitle, b);
            v([
                ["title", a, f],
                ["subtitle", b, e]
            ], function(a) {
                var b = a[0],
                    c = d[b],
                    e = a[1];
                a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        },
        layOutTitles: function(a) {
            var b = 0,
                c = this.title,
                d = this.subtitle,
                e = this.options,
                f = e.title,
                e = e.subtitle,
                g = this.renderer,
                h = this.spacingBox.width - 44;
            c && (c.css({
                width: (f.width || h) + "px"
            }).align(M({
                y: g.fontMetrics(f.style.fontSize,
                    c).b - 3
            }, f), !1, "spacingBox"), f.floating || f.verticalAlign || (b = c.getBBox().height));
            d && (d.css({
                width: (e.width || h) + "px"
            }).align(M({
                y: b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b
            }, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = La(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && A(a, !0) && this.isDirtyBox && this.redraw())
        },
        getChartSize: function() {
            var a = this.options.chart,
                b = a.width,
                a = a.height,
                c = this.renderToClone || this.renderTo;
            q(b) || (this.containerWidth = Fa(c, "width"));
            q(a) || (this.containerHeight = Fa(c, "height"));
            this.chartWidth = K(0, b || this.containerWidth || 600);
            this.chartHeight = K(0, A(a, 19 < this.containerHeight ? this.containerHeight : 400))
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone,
                c = this.container;
            a ? b && (this.renderTo.appendChild(c), Ka(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), F(b, {
                    position: "absolute",
                    top: "-9999px",
                    display: "block"
                }),
                b.style.setProperty && b.style.setProperty("display", "block", "important"), Z.body.appendChild(b), c && b.appendChild(c))
        },
        getContainer: function() {
            var a, b = this.options,
                c = b.chart,
                d, e;
            a = this.renderTo;
            var f = "highcharts-" + Hb++;
            a || (this.renderTo = a = c.renderTo);
            ea(a) && (this.renderTo = a = Z.getElementById(a));
            a || U(13, !0);
            d = G(B(a, "data-highcharts-chart"));
            !isNaN(d) && va[d] && va[d].hasRendered && va[d].destroy();
            B(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            c.skipClone || a.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            d = this.chartWidth;
            e = this.chartHeight;
            this.container = a = S("div", {
                className: "highcharts-container" + (c.className ? " " + c.className : ""),
                id: f
            }, M({
                position: "relative",
                overflow: "hidden",
                width: d + "px",
                height: e + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, c.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = new(T[c.renderer] || Pa)(a, d, e, c.style, c.forExport, b.exporting && b.exporting.allowHTML);
            Ha && this.renderer.create(this, a, d, e);
            this.renderer.chartIndex =
                this.index
        },
        getMargins: function(a) {
            var b = this.spacing,
                c = this.margin,
                d = this.titleOffset;
            this.resetMargins();
            d && !q(c[0]) && (this.plotTop = K(this.plotTop, d + this.options.title.margin + b[0]));
            this.legend.adjustMargins(c, b);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            a || this.getAxisMargins()
        },
        getAxisMargins: function() {
            var a = this,
                b = a.axisOffset = [0, 0, 0, 0],
                c = a.margin;
            a.hasCartesianSeries && v(a.axes, function(a) {
                a.visible && a.getOffset()
            });
            v(ub, function(d, e) {
                q(c[e]) || (a[d] += b[e])
            });
            a.setChartSize()
        },
        reflow: function(a) {
            var b = this,
                c = b.options.chart,
                d = b.renderTo,
                e = c.width || Fa(d, "width"),
                f = c.height || Fa(d, "height"),
                c = a ? a.target : t;
            if (!b.hasUserSize && !b.isPrinting && e && f && (c === t || c === Z)) {
                if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout = ta(function() {
                    b.container && (b.setSize(e, f, !1), b.hasUserSize = null)
                }, a ? 100 : 0);
                b.containerWidth = e;
                b.containerHeight = f
            }
        },
        initReflow: function() {
            var a = this,
                b = function(b) {
                    a.reflow(b)
                };
            Y(t, "resize", b);
            Y(a, "destroy", function() {
                qa(t, "resize", b)
            })
        },
        setSize: function(a, b, c) {
            var d = this,
                e, f, g = d.renderer;
            d.isResizing += 1;
            Sa(c, d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            q(a) && (d.chartWidth = e = K(0, L(a)), d.hasUserSize = !!e);
            q(b) && (d.chartHeight = f = K(0, L(b)));
            a = g.globalAnimation;
            (a ? eb : F)(d.container, {
                width: e + "px",
                height: f + "px"
            }, a);
            d.setChartSize(!0);
            g.setSize(e, f, c);
            d.maxTicks = null;
            v(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            v(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            ha(d, "resize");
            a = g.globalAnimation;
            ta(function() {
                d && ha(d, "endResize", null, function() {
                    --d.isResizing
                })
            }, !1 === a ? 0 : a && a.duration || 500)
        },
        setChartSize: function(a) {
            var b = this.inverted,
                c = this.renderer,
                d = this.chartWidth,
                e = this.chartHeight,
                f = this.options.chart,
                g = this.spacing,
                h = this.clipOffset,
                l, m, n, r;
            this.plotLeft = l = L(this.plotLeft);
            this.plotTop = m = L(this.plotTop);
            this.plotWidth = n = K(0, L(d - l - this.marginRight));
            this.plotHeight =
                r = K(0, L(e - m - this.marginBottom));
            this.plotSizeX = b ? r : n;
            this.plotSizeY = b ? n : r;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: l,
                y: m,
                width: n,
                height: r
            };
            d = 2 * fa(this.plotBorderWidth / 2);
            b = La(K(d, h[3]) / 2);
            c = La(K(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: fa(this.plotSizeX - K(d, h[1]) / 2 - b),
                height: K(0, fa(this.plotSizeY - K(d, h[2]) / 2 - c))
            };
            a || v(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var a =
                this;
            v(ub, function(b, c) {
                a[b] = A(a.margin[c], a.spacing[c])
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var a = this.options.chart,
                b = this.renderer,
                c = this.chartWidth,
                d = this.chartHeight,
                e = this.chartBackground,
                f = this.plotBackground,
                g = this.plotBorder,
                h = this.plotBGImage,
                l = a.borderWidth || 0,
                m = a.backgroundColor,
                n = a.plotBackgroundColor,
                r = a.plotBackgroundImage,
                u = a.plotBorderWidth || 0,
                w, E = this.plotLeft,
                H = this.plotTop,
                k = this.plotWidth,
                A = this.plotHeight,
                p = this.plotBox,
                q = this.clipRect,
                x =
                this.clipBox;
            w = l + (a.shadow ? 8 : 0);
            if (l || m) e ? e.animate(e.crisp({
                width: c - w,
                height: d - w
            })) : (e = {
                fill: m || "none"
            }, l && (e.stroke = a.borderColor, e["stroke-width"] = l), this.chartBackground = b.rect(w / 2, w / 2, c - w, d - w, a.borderRadius, l).attr(e).addClass("highcharts-background").add().shadow(a.shadow));
            n && (f ? f.animate(p) : this.plotBackground = b.rect(E, H, k, A, 0).attr({
                fill: n
            }).add().shadow(a.plotShadow));
            r && (h ? h.animate(p) : this.plotBGImage = b.image(r, E, H, k, A).add());
            q ? q.animate({
                    width: x.width,
                    height: x.height
                }) : this.clipRect =
                b.clipRect(x);
            u && (g ? (g.strokeWidth = -u, g.animate(g.crisp({
                x: E,
                y: H,
                width: k,
                height: A
            }))) : this.plotBorder = b.rect(E, H, k, A, 0, -u).attr({
                stroke: a.plotBorderColor,
                "stroke-width": u,
                fill: "none",
                zIndex: 1
            }).add());
            this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var a = this,
                b = a.options.chart,
                c, d = a.options.series,
                e, f;
            v(["inverted", "angular", "polar"], function(g) {
                c = Q[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;)(c = Q[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        },
        linkSeries: function() {
            var a =
                this,
                b = a.series;
            v(b, function(a) {
                a.linkedSeries.length = 0
            });
            v(b, function(b) {
                var d = b.options.linkedTo;
                ea(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), b.linkedParent = d, b.visible = A(b.options.visible, d.options.visible, b.visible))
            })
        },
        renderSeries: function() {
            v(this.series, function(a) {
                a.translate();
                a.render()
            })
        },
        renderLabels: function() {
            var a = this,
                b = a.options.labels;
            b.items && v(b.items, function(c) {
                var d = M(b.style, c.style),
                    e = G(d.left) + a.plotLeft,
                    f = G(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({
                    zIndex: 2
                }).css(d).add()
            })
        },
        render: function() {
            var a = this.axes,
                b = this.renderer,
                c = this.options,
                d, e, f, g;
            this.setTitle();
            this.legend = new vb(this, c.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            d = this.plotWidth;
            e = this.plotHeight -= 21;
            v(a, function(a) {
                a.setScale()
            });
            this.getAxisMargins();
            f = 1.1 < d / this.plotWidth;
            g = 1.05 < e / this.plotHeight;
            if (f || g) this.maxTicks = null, v(a, function(a) {
                    (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0)
                }),
                this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && v(a, function(a) {
                a.visible && a.render()
            });
            this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({
                zIndex: 3
            }).add());
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        },
        showCredits: function(a) {
            a.enabled && !this.credits && (this.credits = this.renderer.text(a.text, 0, 0).on("click", function() {
                a.href && (t.location.href = a.href)
            }).attr({
                align: a.position.align,
                zIndex: 8
            }).css(a.style).add().align(a.position))
        },
        destroy: function() {
            var a = this,
                b = a.axes,
                c = a.series,
                d = a.container,
                e, f = d && d.parentNode;
            ha(a, "destroy");
            va[a.index] = J;
            lb--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            qa(a);
            for (e = b.length; e--;) b[e] = b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            v("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            d &&
                (d.innerHTML = "", qa(d), f && Ka(d));
            for (e in a) delete a[e]
        },
        isReadyToRender: function() {
            var a = this;
            return !ya && t == t.top && "complete" !== Z.readyState || Ha && !t.canvg ? (Ha ? CanVGController.push(function() {
                a.firstRender()
            }, a.options.global.canvasToolsURL) : Z.attachEvent("onreadystatechange", function() {
                Z.detachEvent("onreadystatechange", a.firstRender);
                "complete" === Z.readyState && a.firstRender()
            }), !1) : !0
        },
        firstRender: function() {
            var a = this,
                b = a.options;
            if (a.isReadyToRender()) {
                a.getContainer();
                ha(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                v(b.series || [], function(b) {
                    a.initSeries(b)
                });
                a.linkSeries();
                ha(a, "beforeRender");
                T.Pointer && (a.pointer = new ab(a, b));
                a.render();
                a.renderer.draw();
                if (!a.renderer.imgCount) a.onload();
                a.cloneRenderTo(!0)
            }
        },
        onload: function() {
            var a = this;
            v([this.callback].concat(this.callbacks), function(b) {
                b && void 0 !== a.index && b.apply(a, [a])
            });
            a.renderer.imgCount || ha(a, "load")
        },
        splashArray: function(a, b) {
            var c = b[a],
                c = I(c) ? c : [c, c, c, c];
            return [A(b[a + "Top"], c[0]), A(b[a + "Right"],
                c[1]), A(b[a + "Bottom"], c[2]), A(b[a + "Left"], c[3])]
        }
    };
    var Xb = T.CenteredSeriesMixin = {
            getCenter: function() {
                var a = this.options,
                    b = this.chart,
                    c = 2 * (a.slicedOffset || 0),
                    d = b.plotWidth - 2 * c,
                    b = b.plotHeight - 2 * c,
                    e = a.center,
                    e = [A(e[0], "50%"), A(e[1], "50%"), a.size || "100%", a.innerSize || 0],
                    f = V(d, b),
                    g, h;
                for (g = 0; 4 > g; ++g) h = e[g], a = 2 > g || 2 === g && /%$/.test(h), e[g] = D(h, [d, b, f, e[2]][g]) + (a ? c : 0);
                e[3] > e[2] && (e[3] = e[2]);
                return e
            }
        },
        Ea = function() {};
    Ea.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.color = a.color;
            this.applyOptions(b,
                c);
            this.pointAttr = {};
            a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length && (a.colorCounter = 0));
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a, b) {
            var c = this.series,
                d = c.options.pointValKey || c.pointValKey;
            a = Ea.prototype.optionsToObject.call(this, a);
            M(this, a);
            this.options = this.options ? M(this.options, a) : a;
            d && (this.y = this[d]);
            this.isNull = null === this.y;
            "number" !== typeof this.x && c && (this.x = void 0 === b ? c.autoIncrement() :
                b);
            return this
        },
        optionsToObject: function(a) {
            var b = {},
                c = this.series,
                d = c.options.keys,
                e = d || c.pointArrayMap || ["y"],
                f = e.length,
                g = 0,
                h = 0;
            if ("number" === typeof a || null === a) b[e[0]] = a;
            else if (O(a))
                for (!d && a.length > f && (c = typeof a[0], "string" === c ? b.name = a[0] : "number" === c && (b.x = a[0]), g++); h < f;) d && void 0 === a[g] || (b[e[h]] = a[g]), g++, h++;
            else "object" === typeof a && (b = a, a.dataLabels && (c._hasPointLabels = !0), a.marker && (c._hasPointMarkers = !0));
            return b
        },
        destroy: function() {
            var a = this.series.chart,
                b = a.hoverPoints,
                c;
            a.pointCount--;
            b && (this.setState(), y(b, this), b.length || (a.hoverPoints = null));
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) qa(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function() {
            for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(a) {
            var b = this.series,
                c = b.tooltipOptions,
                d = A(c.valueDecimals, ""),
                e = c.valuePrefix || "",
                f = c.valueSuffix || "";
            v(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return R(a, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series.options;
            (e.point.events[a] || d.options && d.options.events &&
                d.options.events[a]) && this.importEvents();
            "click" === a && e.allowPointSelect && (c = function(a) {
                d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            ha(this, a, b, c)
        },
        visible: !0
    };
    var ca = T.Series = function() {};
    ca.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Ea,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(a, b) {
            var c = this,
                d, e,
                f = a.series,
                g = function(a, b) {
                    return A(a.options.index, a._i) - A(b.options.index, b._i)
                };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            M(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: !1 !== b.visible,
                selected: !0 === b.selected
            });
            Ha && (b.animation = !1);
            e = b.events;
            for (d in e) Y(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            v(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            c.isCartesian &&
                (a.hasCartesianSeries = !0);
            f.push(c);
            c._i = f.length - 1;
            qb(f, g);
            this.yAxis && qb(this.yAxis.series, g);
            v(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function() {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            v(a.axisTypes || [], function(e) {
                v(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== J && b[e] === d.id || b[e] === J && 0 === d.index) c.series.push(a), a[e] = c, c.isDirty = !0
                });
                a[e] || a.optionalAxis === e || U(18, !0)
            })
        },
        updateParallelArrays: function(a, b) {
            var c = a.series,
                d = arguments;
            v(c.parallelArrays, "number" ===
                typeof b ? function(d) {
                    var f = "y" === d && c.toYData ? c.toYData(a) : a[d];
                    c[d + "Data"][b] = f
                } : function(a) {
                    Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
                })
        },
        autoIncrement: function() {
            var a = this.options,
                b = this.xIncrement,
                c, d = a.pointIntervalUnit,
                b = A(b, a.pointStart, 0);
            this.pointInterval = c = A(this.pointInterval, a.pointInterval, 1);
            if ("month" === d || "year" === d) a = new wa(b), a = "month" === d ? +a[Eb](a[hb]() + c) : +a[Fb](a[ib]() + c), c = a - b;
            this.xIncrement = b + c;
            return b
        },
        setOptions: function(a) {
            var b = this.chart,
                c = b.options.plotOptions,
                b = b.userOptions || {},
                d = b.plotOptions || {},
                e = c[this.type];
            this.userOptions = a;
            c = z(e, c.series, a);
            this.tooltipOptions = z(la.tooltip, la.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            null === e.marker && delete c.marker;
            this.zoneAxis = c.zoneAxis;
            a = this.zones = (c.zones || []).slice();
            !c.negativeColor && !c.negativeFillColor || c.zones || a.push({
                value: c[this.zoneAxis + "Threshold"] || c.threshold || 0,
                color: c.negativeColor,
                fillColor: c.negativeFillColor
            });
            a.length && q(a[a.length - 1].value) && a.push({
                color: this.color,
                fillColor: this.fillColor
            });
            return c
        },
        getCyclic: function(a, b, c) {
            var d = this.userOptions,
                e = "_" + a + "Index",
                f = a + "Counter";
            b || (q(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        },
        getColor: function() {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || aa[this.type].color, this.chart.options.colors)
        },
        getSymbol: function() {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol,
                this.chart.options.symbols);
            /^url/.test(this.symbol) && (a.radius = 0)
        },
        drawLegendSymbol: ob.drawLineMarker,
        setData: function(a, b, c, d) {
            var e = this,
                f = e.points,
                g = f && f.length || 0,
                h, l = e.options,
                m = e.chart,
                n = null,
                r = e.xAxis,
                u = r && !!r.categories,
                w = l.turboThreshold,
                E = this.xData,
                H = this.yData,
                p = (h = e.pointArrayMap) && h.length;
            a = a || [];
            h = a.length;
            b = A(b, !0);
            if (!1 !== d && h && g === h && !e.cropped && !e.hasGroupedData && e.visible) v(a, function(a, b) {
                f[b].update && a !== l.data[b] && f[b].update(a, !1, null, !1)
            });
            else {
                e.xIncrement = null;
                e.colorCounter =
                    0;
                v(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0
                });
                if (w && h > w) {
                    for (c = 0; null === n && c < h;) n = a[c], c++;
                    if (k(n)) {
                        u = A(l.pointStart, 0);
                        n = A(l.pointInterval, 1);
                        for (c = 0; c < h; c++) E[c] = u, H[c] = a[c], u += n;
                        e.xIncrement = u
                    } else if (O(n))
                        if (p)
                            for (c = 0; c < h; c++) n = a[c], E[c] = n[0], H[c] = n.slice(1, p + 1);
                        else
                            for (c = 0; c < h; c++) n = a[c], E[c] = n[0], H[c] = n[1];
                    else U(12)
                } else
                    for (c = 0; c < h; c++) a[c] !== J && (n = {
                        series: e
                    }, e.pointClass.prototype.applyOptions.apply(n, [a[c]]), e.updateParallelArrays(n, c), u && q(n.name) && (r.names[n.x] = n.name));
                ea(H[0]) && U(14, !0);
                e.data = [];
                e.options.data = e.userOptions.data = a;
                for (c = g; c--;) f[c] && f[c].destroy && f[c].destroy();
                r && (r.minRange = r.userMinRange);
                e.isDirty = e.isDirtyData = m.isDirtyBox = !0;
                c = !1
            }
            "point" === l.legendType && (this.processData(), this.generatePoints());
            b && m.redraw(c)
        },
        processData: function(a) {
            var b = this.xData,
                c = this.yData,
                d = b.length,
                e;
            e = 0;
            var f, g, h = this.xAxis,
                l, m = this.options;
            l = m.cropThreshold;
            var n = this.getExtremesFromAll || m.getExtremesFromAll,
                r = this.isCartesian,
                m = h && h.val2lin,
                u = h && h.isLog,
                w, E;
            if (r && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            h && (a = h.getExtremes(), w = a.min, E = a.max);
            if (r && this.sorted && !n && (!l || d > l || this.forceCrop))
                if (b[d - 1] < w || b[0] > E) b = [], c = [];
                else if (b[0] < w || b[d - 1] > E) e = this.cropData(this.xData, this.yData, w, E), b = e.xData, c = e.yData, e = e.start, f = !0;
            for (l = b.length || 1; --l;) d = u ? m(b[l]) - m(b[l - 1]) : b[l] - b[l - 1], 0 < d && (g === J || d < g) ? g = d : 0 > d && this.requireSorting && U(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            this.closestPointRange = g
        },
        cropData: function(a,
            b, c, d) {
            var e = a.length,
                f = 0,
                g = e,
                h = A(this.cropShoulder, 1),
                l;
            for (l = 0; l < e; l++)
                if (a[l] >= c) {
                    f = K(0, l - h);
                    break
                }
            for (c = l; c < e; c++)
                if (a[c] > d) {
                    g = c + h;
                    break
                }
            return {
                xData: a.slice(f, g),
                yData: b.slice(f, g),
                start: f,
                end: g
            }
        },
        generatePoints: function() {
            var a = this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart || 0,
                l, m = this.hasGroupedData,
                n, r = [],
                u;
            b || m || (b = [], b.length = a.length, b = this.data = b);
            for (u = 0; u < g; u++) l = h + u, m ? r[u] = (new f).init(this, [d[u]].concat(pa(e[u]))) :
                (b[l] ? n = b[l] : a[l] !== J && (b[l] = n = (new f).init(this, a[l], d[u])), r[u] = n), r[u].index = l;
            if (b && (g !== (c = b.length) || m))
                for (u = 0; u < c; u++) u !== h || m || (u += g), b[u] && (b[u].destroyElements(), b[u].plotX = J);
            this.data = b;
            this.points = r
        },
        getExtremes: function(a) {
            var b = this.yAxis,
                c = this.processedXData,
                d, e = [],
                f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min,
                h = d.max,
                l, m, n, r;
            a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (r = 0; r < d; r++)
                if (m = c[r], n = a[r], l = null !== n && n !== J && (!b.isLog || n.length || 0 < n), m = this.getExtremesFromAll ||
                    this.options.getExtremesFromAll || this.cropped || (c[r + 1] || m) >= g && (c[r - 1] || m) <= h, l && m)
                    if (l = n.length)
                        for (; l--;) null !== n[l] && (e[f++] = n[l]);
                    else e[f++] = n;
            this.dataMin = ba(e);
            this.dataMax = Ga(e)
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, l = a.pointPlacement, m = "between" === l || k(l), n = a.threshold, r = a.startFromThreshold ? n : 0, u, w, E, H, p = Number.MAX_VALUE,
                    a = 0; a < g; a++) {
                var x = f[a],
                    v = x.x,
                    D = x.y;
                w = x.low;
                var C = b && e.stacks[(this.negStacks && D < (r ? 0 : n) ? "-" : "") + this.stackKey];
                e.isLog && null !== D && 0 >= D && (x.y = D = null, U(10));
                x.plotX = u = V(K(-1E5, c.translate(v, 0, 0, 0, 1, l, "flags" === this.type)), 1E5);
                b && this.visible && !x.isNull && C && C[v] && (H = this.getStackIndicator(H, v, this.index), C = C[v], D = C.points[H.key], w = D[0], D = D[1], w === r && (w = A(n, e.min)), e.isLog && 0 >= w && (w = null), x.total = x.stackTotal = C.total, x.percentage = C.total && x.y / C.total * 100, x.stackY = D, C.setOffset(this.pointXOffset || 0,
                    this.barW || 0));
                x.yBottom = q(w) ? e.translate(w, 0, 1, 0, 1) : null;
                h && (D = this.modifyValue(D, x));
                x.plotY = w = "number" === typeof D && Infinity !== D ? V(K(-1E5, e.translate(D, 0, 1, 0, 1)), 1E5) : J;
                x.isInside = w !== J && 0 <= w && w <= e.len && 0 <= u && u <= c.len;
                x.clientX = m ? c.translate(v, 0, 0, 0, 1) : u;
                x.negative = x.y < (n || 0);
                x.category = d && d[x.x] !== J ? d[x.x] : x.x;
                a && (p = V(p, ma(u - E)));
                E = u
            }
            this.closestPointRangePx = p
        },
        getValidPoints: function(a) {
            return Va(a || this.points, function(a) {
                return !a.isNull
            })
        },
        setClip: function(a) {
            var b = this.chart,
                c = this.options,
                d = b.renderer,
                e = b.inverted,
                f = this.clipBox,
                g = f || b.clipBox,
                h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, c.xAxis, c.yAxis].join(),
                l = b[h],
                m = b[h + "m"];
            l || (a && (g.width = 0, b[h + "m"] = m = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight)), b[h] = l = d.clipRect(g));
            a && (l.count += 1);
            !1 !== c.clip && (this.group.clip(a || f ? l : b.clipRect), this.markerGroup.clip(m), this.sharedClipKey = h);
            a || (--l.count, 0 >= l.count && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
        },
        animate: function(a) {
            var b = this.chart,
                c = this.options.animation,
                d;
            c && !I(c) && (c = aa[this.type].animation);
            a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({
                width: b.plotSizeX
            }, c), b[d + "m"] && b[d + "m"].animate({
                width: b.plotSizeX + 99
            }, c), this.animate = null)
        },
        afterAnimate: function() {
            this.setClip();
            ha(this, "afterAnimate")
        },
        drawPoints: function() {
            var a, b = this.points,
                c = this.chart,
                d, e, f, g, h, l, m, n, r = this.options.marker,
                u = this.pointAttr[""],
                w, E, H, x = this.markerGroup,
                k = A(r.enabled, this.xAxis.isRadial, this.closestPointRangePx >
                    2 * r.radius);
            if (!1 !== r.enabled || this._hasPointMarkers)
                for (f = b.length; f--;) g = b[f], d = fa(g.plotX), e = g.plotY, n = g.graphic, w = g.marker || {}, E = !!g.marker, a = k && w.enabled === J || w.enabled, H = g.isInside, a && e !== J && !isNaN(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] || u, h = a.r, l = A(w.symbol, this.symbol), m = 0 === l.indexOf("url"), n ? n[H ? "show" : "hide"](!0).attr(a).animate(M({
                        x: d - h,
                        y: e - h
                    }, n.symbolName ? {
                        width: 2 * h,
                        height: 2 * h
                    } : {})) : H && (0 < h || m) && (g.graphic = c.renderer.symbol(l, d - h, e - h, 2 * h, 2 * h, E ? w : r).attr(a).add(x))) : n &&
                    (g.graphic = n.destroy())
        },
        convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions,
                f, g, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e) g = e[f], h[f] = A(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function() {
            var a = this,
                b = a.options,
                c = aa[a.type].marker ? b.marker : b,
                d = c.states,
                e = d.hover,
                f, g = a.color,
                h = a.options.negativeColor;
            f = {
                stroke: g,
                fill: g
            };
            var l = a.points || [],
                m, n, r = [],
                u = a.pointAttrToOptions;
            m = a.hasPointSpecificOptions;
            var w = c.lineColor,
                E = c.fillColor;
            n = b.turboThreshold;
            var H = a.zones,
                x = a.zoneAxis || "y",
                k;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || ja(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || ja(e.negativeColor || h).brighten(e.brightness).get());
            r[""] = a.convertAttribs(c, f);
            v(["hover", "select"], function(b) {
                r[b] = a.convertAttribs(d[b], r[""])
            });
            a.pointAttr = r;
            g = l.length;
            if (!n || g < n || m)
                for (; g--;) {
                    n = l[g];
                    (c = n.options && n.options.marker || n.options) && !1 === c.enabled && (c.radius = 0);
                    if (H.length) {
                        m = 0;
                        for (f =
                            H[m]; n[x] >= f.value;) f = H[++m];
                        n.color = n.fillColor = A(f.color, a.color)
                    }
                    m = b.colorByPoint || n.color;
                    if (n.options)
                        for (k in u) q(c[u[k]]) && (m = !0);
                    if (m) {
                        c = c || {};
                        m = [];
                        d = c.states || {};
                        f = d.hover = d.hover || {};
                        if (!b.marker || n.negative && !f.fillColor && !e.fillColor) f[a.pointAttrToOptions.fill] = f.color || !n.options.color && e[n.negative && h ? "negativeColor" : "color"] || ja(n.color).brighten(f.brightness || e.brightness).get();
                        f = {
                            color: n.color
                        };
                        E || (f.fillColor = n.color);
                        w || (f.lineColor = n.color);
                        c.hasOwnProperty("color") && !c.color &&
                            delete c.color;
                        m[""] = a.convertAttribs(M(f, c), r[""]);
                        m.hover = a.convertAttribs(d.hover, r.hover, m[""]);
                        m.select = a.convertAttribs(d.select, r.select, m[""])
                    } else m = r;
                    n.pointAttr = m
                }
        },
        destroy: function() {
            var a = this,
                b = a.chart,
                c = /AppleWebKit\/533/.test(Ta),
                d, e = a.data || [],
                f, g, h;
            ha(a, "destroy");
            qa(a);
            v(a.axisTypes || [], function(b) {
                if (h = a[b]) y(h.series, a), h.isDirty = h.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (d = e.length; d--;)(f = e[d]) && f.destroy && f.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            for (g in a) a[g] instanceof ka && !a[g].survive && (d = c && "group" === g ? "hide" : "destroy", a[g][d]());
            b.hoverSeries === a && (b.hoverSeries = null);
            y(b.series, a);
            for (g in a) delete a[g]
        },
        getGraphPath: function(a, b, c) {
            var d = this,
                e = d.options,
                f = e.step,
                g, h = [],
                l;
            a = a || d.points;
            (g = a.reversed) && a.reverse();
            (f = {
                right: 1,
                center: 2
            }[f] || f && 3) && g && (f = 4 - f);
            !e.connectNulls || b || c || (a = this.getValidPoints(a));
            v(a, function(g, n) {
                var r = g.plotX,
                    u = g.plotY,
                    w = a[n - 1];
                (g.leftCliff || w && w.rightCliff) && !c && (l = !0);
                g.isNull && !q(b) && 0 < n ? l = !e.connectNulls :
                    g.isNull && !b ? l = !0 : (0 === n || l ? w = ["M", g.plotX, g.plotY] : d.getPointSpline ? w = d.getPointSpline(a, g, n) : f ? (w = 1 === f ? ["L", w.plotX, u] : 2 === f ? ["L", (w.plotX + r) / 2, w.plotY, "L", (w.plotX + r) / 2, u] : ["L", r, w.plotY], w.push("L", r, u)) : w = ["L", r, u], h.push.apply(h, w), l = !1)
            });
            return d.graphPath = h
        },
        drawGraph: function() {
            var a = this,
                b = this.options,
                c = [
                    ["graph", b.lineColor || this.color, b.dashStyle]
                ],
                d = b.lineWidth,
                e = "square" !== b.linecap,
                f = (this.gappedPath || this.getGraphPath).call(this),
                g = this.fillGraph && this.color || "none";
            v(this.zones,
                function(d, e) {
                    c.push(["zoneGraph" + e, d.color || a.color, d.dashStyle || b.dashStyle])
                });
            v(c, function(c, l) {
                var m = c[0],
                    n = a[m];
                n ? n.animate({
                    d: f
                }) : (d || g) && f.length && (n = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: g,
                    zIndex: 1
                }, c[2] ? n.dashstyle = c[2] : e && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"), a[m] = a.chart.renderer.path(f).attr(n).add(a.group).shadow(2 > l && b.shadow))
            })
        },
        applyZones: function() {
            var a = this,
                b = this.chart,
                c = b.renderer,
                d = this.zones,
                e, f, g = this.clips || [],
                h, l = this.graph,
                m = this.area,
                n = K(b.chartWidth, b.chartHeight),
                r = this[(this.zoneAxis || "y") + "Axis"],
                u, w = r.reversed,
                E = b.inverted,
                H = r.horiz,
                x, k, p, q = !1;
            d.length && (l || m) && r.min !== J && (l && l.hide(), m && m.hide(), u = r.getExtremes(), v(d, function(d, v) {
                e = w ? H ? b.plotWidth : 0 : H ? 0 : r.toPixels(u.min);
                e = V(K(A(f, e), 0), n);
                f = V(K(L(r.toPixels(A(d.value, u.max), !0)), 0), n);
                q && (e = f = r.toPixels(u.max));
                x = Math.abs(e - f);
                k = V(e, f);
                p = K(e, f);
                r.isXAxis ? (h = {
                    x: E ? p : k,
                    y: 0,
                    width: x,
                    height: n
                }, H || (h.x = b.plotHeight - h.x)) : (h = {
                    x: 0,
                    y: E ? p : k,
                    width: n,
                    height: x
                }, H && (h.y = b.plotWidth - h.y));
                b.inverted && c.isVML && (h = r.isXAxis ? {
                    x: 0,
                    y: w ? k : p,
                    height: h.width,
                    width: b.chartWidth
                } : {
                    x: h.y - b.plotLeft - b.spacingBox.x,
                    y: 0,
                    width: h.height,
                    height: b.chartHeight
                });
                g[v] ? g[v].animate(h) : (g[v] = c.clipRect(h), l && a["zoneGraph" + v].clip(g[v]), m && a["zoneArea" + v].clip(g[v]));
                q = d.value > u.max
            }), this.clips = g)
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                v(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b = this,
                c = b.chart;
            b.xAxis && (Y(c, "resize", a), Y(b, "destroy", function() {
                    qa(c, "resize", a)
                }), a(),
                b.invertGroups = a)
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a],
                g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                zIndex: d || .1
            }).add(e), f.addClass("highcharts-series-" + this.index));
            f.attr({
                visibility: c
            })[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function() {
            var a = this.chart,
                b = this.xAxis,
                c = this.yAxis;
            a.inverted && (b = c, c = this.xAxis);
            return {
                translateX: b ? b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c, d = a.options,
                e = (c = d.animation) &&
                !!a.animate && b.renderer.isSVG && A(c.duration, 500) || 0,
                f = a.visible ? "inherit" : "hidden",
                g = d.zIndex,
                h = a.hasRendered,
                l = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, l);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, l);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            v(a.points, function(a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
            b.inverted && a.invertGroups();
            !1 === d.clip || a.sharedClipKey || h || c.clip(b.clipRect);
            e && a.animate();
            h || (a.animationTimeout = ta(function() {
                a.afterAnimate()
            }, e));
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function() {
            var a = this.chart,
                b = this.isDirtyData,
                c = this.isDirty,
                d = this.group,
                e = this.xAxis,
                f = this.yAxis;
            d && (a.inverted && d.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), d.animate({
                translateX: A(e && e.left, a.plotLeft),
                translateY: A(f && f.top, a.plotTop)
            }));
            this.translate();
            this.render();
            b && ha(this, "updatedData");
            (c || b) && delete this.kdTree
        },
        kdDimensions: 1,
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function(a, b) {
            var c = this.xAxis,
                d = this.yAxis,
                e = this.chart.inverted;
            return this.searchKDTree({
                clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos,
                plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos
            }, b)
        },
        buildKDTree: function() {
            function a(c, e, f) {
                var g, h;
                if (h = c && c.length) return g = b.kdAxisArray[e % f], c.sort(function(a, b) {
                    return a[g] - b[g]
                }), h = Math.floor(h / 2), {
                    point: c[h],
                    left: a(c.slice(0, h), e + 1, f),
                    right: a(c.slice(h + 1), e + 1, f)
                }
            }
            var b = this,
                c = b.kdDimensions;
            delete b.kdTree;
            ta(function() {
                b.kdTree = a(b.getValidPoints(), c, c)
            }, b.options.kdNow ? 0 : 1)
        },
        searchKDTree: function(a, b) {
            function c(a, b, m, n) {
                var r = b.point,
                    u = d.kdAxisArray[m % n],
                    w, E, H = r;
                E = q(a[e]) && q(r[e]) ? Math.pow(a[e] - r[e], 2) : null;
                w = q(a[f]) && q(r[f]) ? Math.pow(a[f] - r[f], 2) : null;
                w = (E || 0) + (w || 0);
                r.dist = q(w) ? Math.sqrt(w) : Number.MAX_VALUE;
                r.distX = q(E) ? Math.sqrt(E) : Number.MAX_VALUE;
                u = a[u] - r[u];
                w = 0 > u ? "left" : "right";
                E = 0 > u ? "right" : "left";
                b[w] && (w = c(a, b[w], m + 1, n), H = w[g] < H[g] ? w : r);
                b[E] && Math.sqrt(u *
                    u) < H[g] && (a = c(a, b[E], m + 1, n), H = a[g] < H[g] ? a : H);
                return H
            }
            var d = this,
                e = this.kdAxisArray[0],
                f = this.kdAxisArray[1],
                g = b ? "distX" : "dist";
            this.kdTree || this.buildKDTree();
            if (this.kdTree) return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
        }
    };
    jb.prototype = {
        destroy: function() {
            Ja(this, this.axis)
        },
        render: function(a) {
            var b = this.options,
                c = b.format,
                c = c ? R(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({
                text: c,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({
                align: this.textAlign,
                rotation: b.rotation,
                visibility: "hidden"
            }).add(a)
        },
        setOffset: function(a, b) {
            var c = this.axis,
                d = c.chart,
                e = d.inverted,
                f = c.reversed,
                f = this.isNegative && !f || !this.isNegative && f,
                g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                c = c.translate(0),
                c = ma(g - c),
                h = d.xAxis[0].translate(this.x) + a,
                l = d.plotHeight,
                f = {
                    x: e ? f ? g : g - c : h,
                    y: e ? l - h - b : f ? l - g - c : l - g,
                    width: e ? c : b,
                    height: e ? b : c
                };
            if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e[!1 === this.options.crop || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0)
        }
    };
    Ia.prototype.getStacks =
        function() {
            var a = this;
            v(a.yAxis, function(a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks)
            });
            v(a.series, function(b) {
                !b.options.stacking || !0 !== b.visible && !1 !== a.options.chart.ignoreHiddenSeries || (b.stackKey = b.type + A(b.options.stack, ""))
            })
        };
    da.prototype.buildStacks = function() {
        var a = this.series,
            b, c = A(this.options.reversedStacks, !0),
            d = a.length,
            e;
        if (!this.isXAxis) {
            this.usePercentage = !1;
            for (e = d; e--;) a[c ? e : d - e - 1].setStackedPoints();
            for (e = d; e--;) b = a[c ? e : d - e - 1], b.setStackCliffs && b.setStackCliffs();
            if (this.usePercentage)
                for (e =
                    0; e < d; e++) a[e].setPercentStacks()
        }
    };
    da.prototype.renderStackTotals = function() {
        var a = this.chart,
            b = a.renderer,
            c = this.stacks,
            d, e, f = this.stackTotalGroup;
        f || (this.stackTotalGroup = f = b.g("stack-labels").attr({
            visibility: "visible",
            zIndex: 6
        }).add());
        f.translate(a.plotLeft, a.plotTop);
        for (d in c)
            for (e in a = c[d], a) a[e].render(f)
    };
    da.prototype.resetStacks = function() {
        var a = this.stacks,
            b, c;
        if (!this.isXAxis)
            for (b in a)
                for (c in a[b]) a[b][c].touched < this.stacksTouched ? (a[b][c].destroy(), delete a[b][c]) : (a[b][c].total =
                    null, a[b][c].cum = 0)
    };
    da.prototype.cleanStacks = function() {
        var a, b, c;
        if (!this.isXAxis)
            for (b in this.oldStacks && (a = this.stacks = this.oldStacks), a)
                for (c in a[b]) a[b][c].cum = a[b][c].total
    };
    ca.prototype.setStackedPoints = function() {
        if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
            var a = this.processedXData,
                b = this.processedYData,
                c = [],
                d = b.length,
                e = this.options,
                f = e.threshold,
                g = e.startFromThreshold ? f : 0,
                h = e.stack,
                e = e.stacking,
                l = this.stackKey,
                m = "-" + l,
                n = this.negStacks,
                r = this.yAxis,
                u = r.stacks,
                w = r.oldStacks,
                E, H, k, x, p, v, q;
            r.stacksTouched += 1;
            for (p = 0; p < d; p++) v = a[p], q = b[p], E = this.getStackIndicator(E, v, this.index), x = E.key, k = (H = n && q < (g ? 0 : f)) ? m : l, u[k] || (u[k] = {}), u[k][v] || (w[k] && w[k][v] ? (u[k][v] = w[k][v], u[k][v].total = null) : u[k][v] = new jb(r, r.options.stackLabels, H, v, h)), k = u[k][v], null !== q && (k.points[x] = k.points[this.index] = [A(k.cum, g)], k.touched = r.stacksTouched, 0 < E.index && !1 === this.singleStacks && (k.points[x][0] = k.points[this.index + "," + v + ",0"][0])), "percent" === e ? (H = H ? l : m,
                n && u[H] && u[H][v] ? (H = u[H][v], k.total = H.total = K(H.total, k.total) + ma(q) || 0) : k.total = ra(k.total + (ma(q) || 0))) : k.total = ra(k.total + (q || 0)), k.cum = A(k.cum, g) + (q || 0), null !== q && k.points[x].push(k.cum), c[p] = k.cum;
            "percent" === e && (r.usePercentage = !0);
            this.stackedYData = c;
            r.oldStacks = {}
        }
    };
    ca.prototype.setPercentStacks = function() {
        var a = this,
            b = a.stackKey,
            c = a.yAxis.stacks,
            d = a.processedXData,
            e;
        v([b, "-" + b], function(b) {
            for (var g = d.length, h, l; g--;)
                if (h = d[g], e = a.getStackIndicator(e, h, a.index), h = (l = c[b] && c[b][h]) && l.points[e.key]) l =
                    l.total ? 100 / l.total : 0, h[0] = ra(h[0] * l), h[1] = ra(h[1] * l), a.stackedYData[g] = h[1]
        })
    };
    ca.prototype.getStackIndicator = function(a, b, c) {
        q(a) && a.x === b ? a.index++ : a = {
            x: b,
            index: 0
        };
        a.key = [c, b, a.index].join();
        return a
    };
    M(Ia.prototype, {
        addSeries: function(a, b, c) {
            var d, e = this;
            a && (b = A(b, !0), ha(e, "addSeries", {
                options: a
            }, function() {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                e.linkSeries();
                b && e.redraw(c)
            }));
            return d
        },
        addAxis: function(a, b, c, d) {
            var e = b ? "xAxis" : "yAxis",
                f = this.options;
            new da(this, z(a, {
                index: this[e].length,
                isX: b
            }));
            f[e] = pa(f[e] || {});
            f[e].push(a);
            A(c, !0) && this.redraw(d)
        },
        showLoading: function(a) {
            var b = this,
                c = b.options,
                d = b.loadingDiv,
                e = c.loading,
                f = function() {
                    d && F(d, {
                        left: b.plotLeft + "px",
                        top: b.plotTop + "px",
                        width: b.plotWidth + "px",
                        height: b.plotHeight + "px"
                    })
                };
            d || (b.loadingDiv = d = S("div", {
                className: "highcharts-loading"
            }, M(e.style, {
                zIndex: 10,
                display: "none"
            }), b.container), b.loadingSpan = S("span", null, e.labelStyle, d), Y(b, "redraw", f));
            b.loadingSpan.innerHTML = a || c.lang.loading;
            b.loadingShown || (F(d, {
                    opacity: 0,
                    display: ""
                }),
                eb(d, {
                    opacity: e.style.opacity
                }, {
                    duration: e.showDuration || 0
                }), b.loadingShown = !0);
            f()
        },
        hideLoading: function() {
            var a = this.options,
                b = this.loadingDiv;
            b && eb(b, {
                opacity: 0
            }, {
                duration: a.loading.hideDuration || 100,
                complete: function() {
                    F(b, {
                        display: "none"
                    })
                }
            });
            this.loadingShown = !1
        }
    });
    M(Ea.prototype, {
        update: function(a, b, c, d) {
            function e() {
                f.applyOptions(a);
                null === f.y && h && (f.graphic = h.destroy());
                I(a) && !O(a) && (f.redraw = function() {
                    h && h.element && a && a.marker && a.marker.symbol && (f.graphic = h.destroy());
                    a && a.dataLabels &&
                        f.dataLabel && (f.dataLabel = f.dataLabel.destroy());
                    f.redraw = null
                });
                l = f.index;
                g.updateParallelArrays(f, l);
                r && f.name && (r[f.x] = f.name);
                n.data[l] = I(n.data[l]) ? f.options : a;
                g.isDirty = g.isDirtyData = !0;
                !g.fixedBox && g.hasCartesianSeries && (m.isDirtyBox = !0);
                "point" === n.legendType && (m.isDirtyLegend = !0);
                b && m.redraw(c)
            }
            var f = this,
                g = f.series,
                h = f.graphic,
                l, m = g.chart,
                n = g.options,
                r = g.xAxis && g.xAxis.names;
            b = A(b, !0);
            !1 === d ? e() : f.firePointEvent("update", {
                options: a
            }, e)
        },
        remove: function(a, b) {
            this.series.removePoint(Da(this,
                this.series.data), a, b)
        }
    });
    M(ca.prototype, {
        addPoint: function(a, b, c, d) {
            var e = this,
                f = e.options,
                g = e.data,
                h = e.graph,
                l = e.area,
                m = e.chart,
                n = e.xAxis && e.xAxis.names,
                r = h && h.shift || 0,
                u = ["graph", "area"],
                h = f.data,
                w, E = e.xData;
            Sa(d, m);
            if (c) {
                for (d = e.zones.length; d--;) u.push("zoneGraph" + d, "zoneArea" + d);
                v(u, function(a) {
                    e[a] && (e[a].shift = r + (f.step ? 2 : 1))
                })
            }
            l && (l.isArea = !0);
            b = A(b, !0);
            l = {
                series: e
            };
            e.pointClass.prototype.applyOptions.apply(l, [a]);
            u = l.x;
            d = E.length;
            if (e.requireSorting && u < E[d - 1])
                for (w = !0; d && E[d - 1] > u;) d--;
            e.updateParallelArrays(l,
                "splice", d, 0, 0);
            e.updateParallelArrays(l, d);
            n && l.name && (n[u] = l.name);
            h.splice(d, 0, a);
            w && (e.data.splice(d, 0, null), e.processData());
            "point" === f.legendType && e.generatePoints();
            c && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), e.updateParallelArrays(l, "shift"), h.shift()));
            e.isDirty = !0;
            e.isDirtyData = !0;
            b && (e.getAttribs(), m.redraw())
        },
        removePoint: function(a, b, c) {
            var d = this,
                e = d.data,
                f = e[a],
                g = d.points,
                h = d.chart,
                l = function() {
                    g && g.length === e.length && g.splice(a, 1);
                    e.splice(a, 1);
                    d.options.data.splice(a, 1);
                    d.updateParallelArrays(f || {
                        series: d
                    }, "splice", a, 1);
                    f && f.destroy();
                    d.isDirty = !0;
                    d.isDirtyData = !0;
                    b && h.redraw()
                };
            Sa(c, h);
            b = A(b, !0);
            f ? f.firePointEvent("remove", null, l) : l()
        },
        remove: function(a, b) {
            var c = this,
                d = c.chart;
            ha(c, "remove", null, function() {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                d.linkSeries();
                A(a, !0) && d.redraw(b)
            })
        },
        update: function(a, b) {
            var c = this,
                d = this.chart,
                e = this.userOptions,
                f = this.type,
                g = Q[f].prototype,
                h = ["group", "markerGroup", "dataLabelsGroup"],
                l;
            if (a.type && a.type !== f || void 0 !== a.zIndex) h.length = 0;
            v(h, function(a) {
                h[a] =
                    c[a];
                delete c[a]
            });
            a = z(e, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, a);
            this.remove(!1);
            for (l in g) this[l] = J;
            M(this, Q[a.type || f].prototype);
            v(h, function(a) {
                c[a] = h[a]
            });
            this.init(d, a);
            d.linkSeries();
            A(b, !0) && d.redraw(!1)
        }
    });
    M(da.prototype, {
        update: function(a, b) {
            var c = this.chart;
            a = c.options[this.coll][this.options.index] = z(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = this.chart._labelPanes = J;
            this.init(c, M(a, {
                events: J
            }));
            c.isDirtyBox = !0;
            A(b, !0) && c.redraw()
        },
        remove: function(a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--;) d[e] && d[e].remove(!1);
            y(b.axes, this);
            y(b[c], this);
            b.options[c].splice(this.options.index, 1);
            v(b[c], function(a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            A(a, !0) && b.redraw()
        },
        setTitle: function(a, b) {
            this.update({
                title: a
            }, b)
        },
        setCategories: function(a, b) {
            this.update({
                categories: a
            }, b)
        }
    });
    var ic = C(ca);
    Q.line = ic;
    aa.area = z(mb, {
        softThreshold: !1,
        threshold: 0
    });
    var Yb = C(ca, {
        type: "area",
        singleStacks: !1,
        getStackPoints: function() {
            var a = [],
                b = [],
                c = this.xAxis,
                d = this.yAxis,
                e = d.stacks[this.stackKey],
                f = {},
                g = this.points,
                h = this.index,
                l = d.series,
                m = l.length,
                n, r = A(d.options.reversedStacks, !0) ? 1 : -1,
                u, w;
            if (this.options.stacking) {
                for (u = 0; u < g.length; u++) f[g[u].x] = g[u];
                for (w in e) null !== e[w].total && b.push(+w);
                b.sort(function(a, b) {
                    return a - b
                });
                n = Aa(l, function() {
                    return this.visible
                });
                v(b, function(g, l) {
                    var w = 0,
                        k, x;
                    if (f[g] && !f[g].isNull) a.push(f[g]), v([-1, 1], function(a) {
                        var c = 1 === a ? "rightNull" : "leftNull",
                            d = 0,
                            w = e[b[l + a]];
                        if (w)
                            for (u = h; 0 <= u && u < m;) k = w.points[u],
                                k || (u === h ? f[g][c] = !0 : n[u] && (x = e[g].points[u]) && (d -= x[1] - x[0])), u += r;
                        f[g][1 === a ? "rightCliff" : "leftCliff"] = d
                    });
                    else {
                        for (u = h; 0 <= u && u < m;) {
                            if (k = e[g].points[u]) {
                                w = k[1];
                                break
                            }
                            u += r
                        }
                        w = d.toPixels(w, !0);
                        a.push({
                            isNull: !0,
                            plotX: c.toPixels(g, !0),
                            plotY: w,
                            yBottom: w
                        })
                    }
                })
            }
            return a
        },
        getGraphPath: function(a) {
            var b = ca.prototype.getGraphPath,
                c = this.options,
                d = c.stacking,
                e = this.yAxis,
                f, g, h = [],
                l = [],
                m = this.index,
                n, r = e.stacks[this.stackKey],
                u = c.threshold,
                w = e.getThreshold(c.threshold),
                E, c = c.connectNulls || "percent" === d,
                k = function(b,
                    c, f) {
                    var g = a[b];
                    b = d && r[g.x].points[m];
                    var E = g[f + "Null"] || 0;
                    f = g[f + "Cliff"] || 0;
                    var k, x, g = !0;
                    f || E ? (k = (E ? b[0] : b[1]) + f, x = b[0] + f, g = !!E) : !d && a[c] && a[c].isNull && (k = x = u);
                    void 0 !== k && (l.push({
                        plotX: n,
                        plotY: null === k ? w : e.toPixels(k, !0),
                        isNull: g
                    }), h.push({
                        plotX: n,
                        plotY: null === x ? w : e.toPixels(x, !0)
                    }))
                };
            a = a || this.points;
            d && (a = this.getStackPoints());
            for (f = 0; f < a.length; f++)
                if (g = a[f].isNull, n = A(a[f].rectPlotX, a[f].plotX), E = A(a[f].yBottom, w), !g || c) c || k(f, f - 1, "left"), g && !d && c || (l.push(a[f]), h.push({
                        x: f,
                        plotX: n,
                        plotY: E
                    })),
                    c || k(f, f + 1, "right");
            f = b.call(this, l, !0, !0);
            h.reversed = !0;
            g = b.call(this, h, !0, !0);
            g.length && (g[0] = "L");
            f = f.concat(g);
            b = b.call(this, l, !1, c);
            this.areaPath = f;
            return b
        },
        drawGraph: function() {
            this.areaPath = [];
            ca.prototype.drawGraph.apply(this);
            var a = this,
                b = this.areaPath,
                c = this.options,
                d = [
                    ["area", this.color, c.fillColor]
                ];
            v(this.zones, function(b, f) {
                d.push(["zoneArea" + f, b.color || a.color, b.fillColor || c.fillColor])
            });
            v(d, function(d) {
                var f = d[0],
                    g = a[f];
                g ? g.animate({
                    d: b
                }) : (g = {
                    fill: d[2] || d[1],
                    zIndex: 0
                }, d[2] || (g["fill-opacity"] =
                    A(c.fillOpacity, .75)), a[f] = a.chart.renderer.path(b).attr(g).add(a.group))
            })
        },
        drawLegendSymbol: ob.drawRectangle
    });
    Q.area = Yb;
    aa.spline = z(mb);
    var Zb = C(ca, {
        type: "spline",
        getPointSpline: function(a, b, c) {
            var d = b.plotX,
                e = b.plotY,
                f = a[c - 1];
            c = a[c + 1];
            var g, h, l, m;
            if (f && !f.isNull && c && !c.isNull) {
                a = f.plotY;
                l = c.plotX;
                c = c.plotY;
                var n = 0;
                g = (1.5 * d + f.plotX) / 2.5;
                h = (1.5 * e + a) / 2.5;
                l = (1.5 * d + l) / 2.5;
                m = (1.5 * e + c) / 2.5;
                l !== g && (n = (m - h) * (l - d) / (l - g) + e - m);
                h += n;
                m += n;
                h > a && h > e ? (h = K(a, e), m = 2 * e - h) : h < a && h < e && (h = V(a, e), m = 2 * e - h);
                m > c && m > e ? (m =
                    K(c, e), h = 2 * e - m) : m < c && m < e && (m = V(c, e), h = 2 * e - m);
                b.rightContX = l;
                b.rightContY = m
            }
            b = ["C", A(f.rightContX, f.plotX), A(f.rightContY, f.plotY), A(g, d), A(h, e), d, e];
            f.rightContX = f.rightContY = null;
            return b
        }
    });
    Q.spline = Zb;
    aa.areaspline = z(aa.area);
    var wb = Yb.prototype,
        jc = C(Zb, {
            type: "areaspline",
            getStackPoints: wb.getStackPoints,
            getGraphPath: wb.getGraphPath,
            setStackCliffs: wb.setStackCliffs,
            drawGraph: wb.drawGraph,
            drawLegendSymbol: ob.drawRectangle
        });
    Q.areaspline = jc;
    aa.column = z(mb, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: .1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        softThreshold: !1,
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    var Mb = C(ca, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            ca.prototype.init.apply(this, arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && v(b.series, function(b) {
                b.type === a.type && (b.isDirty = !0)
            })
        },
        getColumnMetrics: function() {
            var a = this,
                b = a.options,
                c = a.xAxis,
                d = a.yAxis,
                e = c.reversed,
                f, g = {},
                h = 0;
            !1 === b.grouping ? h = 1 : v(a.chart.series, function(b) {
                var c = b.options,
                    e = b.yAxis,
                    l;
                b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos && (c.stacking ? (f = b.stackKey, g[f] === J && (g[f] = h++), l = g[f]) : !1 !== c.grouping && (l = h++), b.columnIndex = l)
            });
            var l = V(ma(c.transA) * (c.ordinalSlope ||
                    b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
                m = l * b.groupPadding,
                n = (l - 2 * m) / h,
                b = V(b.maxPointWidth || c.len, A(b.pointWidth, n * (1 - 2 * b.pointPadding)));
            a.columnMetrics = {
                width: b,
                offset: (n - b) / 2 + (m + ((a.columnIndex || 0) + (e ? 1 : 0)) * n - l / 2) * (e ? -1 : 1)
            };
            return a.columnMetrics
        },
        crispCol: function(a, b, c, d) {
            var e = this.chart,
                f = this.borderWidth,
                g = -(f % 2 ? .5 : 0),
                f = f % 2 ? .5 : 1;
            e.inverted && e.renderer.isVML && (f += 1);
            c = Math.round(a + c) + g;
            a = Math.round(a) + g;
            c -= a;
            d = Math.round(b + d) + f;
            g = .5 >= ma(b) && .5 < d;
            b = Math.round(b) + f;
            d -= b;
            g && (--b, d += 1);
            return {
                x: a,
                y: b,
                width: c,
                height: d
            }
        },
        translate: function() {
            var a = this,
                b = a.chart,
                c = a.options,
                d = a.borderWidth = A(c.borderWidth, 2 > a.closestPointRange * a.xAxis.transA ? 0 : 1),
                e = a.yAxis,
                f = a.translatedThreshold = e.getThreshold(c.threshold),
                g = A(c.minPointLength, 5),
                h = a.getColumnMetrics(),
                l = h.width,
                m = a.barW = K(l, 1 + 2 * d),
                n = a.pointXOffset = h.offset;
            b.inverted && (f -= .5);
            c.pointPadding && (m = La(m));
            ca.prototype.translate.apply(a);
            v(a.points, function(c) {
                var d = V(A(c.yBottom, f), 9E4),
                    h = 999 + ma(d),
                    h = V(K(-h, c.plotY), e.len +
                        h),
                    k = c.plotX + n,
                    x = m,
                    p = V(h, d),
                    v, q = K(h, d) - p;
                ma(q) < g && g && (q = g, v = !e.reversed && !c.negative || e.reversed && c.negative, p = ma(p - f) > g ? d - g : f - (v ? g : 0));
                c.barX = k;
                c.pointWidth = l;
                c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - k - x / 2, q] : [k + x / 2, h + e.pos - b.plotTop, q];
                c.shapeType = "rect";
                c.shapeArgs = a.crispCol(k, p, x, q)
            })
        },
        getSymbol: na,
        drawLegendSymbol: ob.drawRectangle,
        drawGraph: na,
        drawPoints: function() {
            var a = this,
                b = this.chart,
                c = a.options,
                d = b.renderer,
                e = c.animationLimit || 250,
                f, g;
            v(a.points, function(h) {
                var l =
                    h.plotY,
                    m = h.graphic;
                l === J || isNaN(l) || null === h.y ? m && (h.graphic = m.destroy()) : (f = h.shapeArgs, l = q(a.borderWidth) ? {
                    "stroke-width": a.borderWidth
                } : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], m ? (Wa(m), m.attr(l).attr(g)[b.pointCount < e ? "animate" : "attr"](z(f))) : h.graphic = d[h.shapeType](f).attr(l).attr(g).add(h.group || a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius))
            })
        },
        animate: function(a) {
            var b = this.yAxis,
                c = this.options,
                d = this.chart.inverted,
                e = {};
            ya && (a ? (e.scaleY = .001, a = V(b.pos + b.len,
                K(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null))
        },
        remove: function() {
            var a = this,
                b = a.chart;
            b.hasRendered && v(b.series, function(b) {
                b.type === a.type && (b.isDirty = !0)
            });
            ca.prototype.remove.apply(a, arguments)
        }
    });
    Q.column = Mb;
    aa.bar = z(aa.column);
    var kc = C(Mb, {
        type: "bar",
        inverted: !0
    });
    Q.bar = kc;
    aa.scatter = z(mb, {
        lineWidth: 0,
        marker: {
            enabled: !0
        },
        tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    var $b = C(ca, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        kdDimensions: 2,
        drawGraph: function() {
            this.options.lineWidth && ca.prototype.drawGraph.call(this)
        }
    });
    Q.scatter = $b;
    aa.pie = z(mb, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return null === this.y ? void 0 :
                    this.point.name
            },
            x: 0
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: .1,
                shadow: !1
            }
        },
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        }
    });
    var Nb = {
            type: "pie",
            isCartesian: !1,
            pointClass: C(Ea, {
                init: function() {
                    Ea.prototype.init.apply(this, arguments);
                    var a = this,
                        b;
                    a.name = A(a.name, "Slice");
                    b = function(b) {
                        a.slice("select" === b.type)
                    };
                    Y(a, "select", b);
                    Y(a, "unselect", b);
                    return a
                },
                setVisible: function(a, b) {
                    var c = this,
                        d = c.series,
                        e = d.chart,
                        f = d.options.ignoreHiddenPoint;
                    b = A(b, f);
                    a !== c.visible && (c.visible = c.options.visible = a = a === J ? !c.visible : a, d.options.data[Da(c, d.data)] = c.options, v(["graphic", "dataLabel", "connector", "shadowGroup"], function(b) {
                        if (c[b]) c[b][a ? "show" : "hide"](!0)
                    }), c.legendItem && e.legend.colorizeItem(c, a), a || "hover" !== c.state || c.setState(""), f && (d.isDirty = !0), b && e.redraw())
                },
                slice: function(a, b, c) {
                    var d = this.series;
                    Sa(c, d.chart);
                    A(b, !0);
                    this.sliced = this.options.sliced = a = q(a) ? a : !this.sliced;
                    d.options.data[Da(this, d.data)] = this.options;
                    a = a ? this.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    };
                    this.graphic.animate(a);
                    this.shadowGroup && this.shadowGroup.animate(a)
                },
                haloPath: function(a) {
                    var b = this.shapeArgs,
                        c = this.series.chart;
                    return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {
                        innerR: this.shapeArgs.r,
                        start: b.start,
                        end: b.end
                    })
                }
            }),
            requireSorting: !1,
            directTouch: !0,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color"
            },
            animate: function(a) {
                var b = this,
                    c = b.points,
                    d = b.startAngleRad;
                a || (v(c, function(a) {
                    var c = a.graphic,
                        g = a.shapeArgs;
                    c && (c.attr({
                        r: a.startR || b.center[3] / 2,
                        start: d,
                        end: d
                    }), c.animate({
                        r: g.r,
                        start: g.start,
                        end: g.end
                    }, b.options.animation))
                }), b.animate = null)
            },
            updateTotals: function() {
                var a, b = 0,
                    c = this.points,
                    d = c.length,
                    e, f = this.options.ignoreHiddenPoint;
                for (a = 0; a < d; a++) e = c[a], b += f && !e.visible ? 0 : e.y;
                this.total = b;
                for (a = 0; a < d; a++) e = c[a], e.percentage = 0 < b && (e.visible || !f) ? e.y / b * 100 : 0, e.total = b
            },
            generatePoints: function() {
                ca.prototype.generatePoints.call(this);
                this.updateTotals()
            },
            translate: function(a) {
                this.generatePoints();
                var b = 0,
                    c = this.options,
                    d = c.slicedOffset,
                    e = d + c.borderWidth,
                    f, g, h, l = c.startAngle || 0,
                    m = this.startAngleRad = Na / 180 * (l - 90),
                    l = (this.endAngleRad = Na / 180 * (A(c.endAngle, l + 360) - 90)) - m,
                    n = this.points,
                    r = c.dataLabels.distance,
                    c = c.ignoreHiddenPoint,
                    u, w = n.length,
                    k;
                a || (this.center = a = this.getCenter());
                this.getX = function(b, c) {
                    h = oa.asin(V((b - a[1]) / (a[2] / 2 + r), 1));
                    return a[0] + (c ? -1 : 1) * Ca(h) * (a[2] / 2 + r)
                };
                for (u = 0; u < w; u++) {
                    k = n[u];
                    f = m + b * l;
                    if (!c || k.visible) b += k.percentage /
                        100;
                    g = m + b * l;
                    k.shapeType = "arc";
                    k.shapeArgs = {
                        x: a[0],
                        y: a[1],
                        r: a[2] / 2,
                        innerR: a[3] / 2,
                        start: L(1E3 * f) / 1E3,
                        end: L(1E3 * g) / 1E3
                    };
                    h = (g + f) / 2;
                    h > 1.5 * Na ? h -= 2 * Na : h < -Na / 2 && (h += 2 * Na);
                    k.slicedTranslation = {
                        translateX: L(Ca(h) * d),
                        translateY: L(Ma(h) * d)
                    };
                    f = Ca(h) * a[2] / 2;
                    g = Ma(h) * a[2] / 2;
                    k.tooltipPos = [a[0] + .7 * f, a[1] + .7 * g];
                    k.half = h < -Na / 2 || h > Na / 2 ? 1 : 0;
                    k.angle = h;
                    e = V(e, r / 2);
                    k.labelPos = [a[0] + f + Ca(h) * r, a[1] + g + Ma(h) * r, a[0] + f + Ca(h) * e, a[1] + g + Ma(h) * e, a[0] + f, a[1] + g, 0 > r ? "center" : k.half ? "right" : "left", h]
                }
            },
            drawGraph: null,
            drawPoints: function() {
                var a =
                    this,
                    b = a.chart.renderer,
                    c, d, e = a.options.shadow,
                    f, g, h, l;
                e && !a.shadowGroup && (a.shadowGroup = b.g("shadow").add(a.group));
                v(a.points, function(m) {
                    null !== m.y && (d = m.graphic, h = m.shapeArgs, f = m.shadowGroup, g = m.pointAttr[m.selected ? "select" : ""], g.stroke || (g.stroke = g.fill), e && !f && (f = m.shadowGroup = b.g("shadow").add(a.shadowGroup)), c = m.sliced ? m.slicedTranslation : {
                        translateX: 0,
                        translateY: 0
                    }, f && f.attr(c), d ? d.setRadialReference(a.center).attr(g).animate(M(h, c)) : (l = {
                        "stroke-linejoin": "round"
                    }, m.visible || (l.visibility =
                        "hidden"), m.graphic = d = b[m.shapeType](h).setRadialReference(a.center).attr(g).attr(l).attr(c).add(a.group).shadow(e, f)))
                })
            },
            searchPoint: na,
            sortByAngle: function(a, b) {
                a.sort(function(a, d) {
                    return void 0 !== a.angle && (d.angle - a.angle) * b
                })
            },
            drawLegendSymbol: ob.drawRectangle,
            getCenter: Xb.getCenter,
            getSymbol: na
        },
        Nb = C(ca, Nb);
    Q.pie = Nb;
    ca.prototype.drawDataLabels = function() {
        var a = this,
            b = a.options,
            c = b.cursor,
            d = b.dataLabels,
            e = a.points,
            f, g, h = a.hasRendered || 0,
            l, m, n = a.chart.renderer;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions &&
            a.dlProcessOptions(d), m = a.plotGroup("dataLabelsGroup", "data-labels", d.defer ? "hidden" : "visible", d.zIndex || 6), A(d.defer, !0) && (m.attr({
                opacity: +h
            }), h || Y(a, "afterAnimate", function() {
                a.visible && m.show();
                m[b.animation ? "animate" : "attr"]({
                    opacity: 1
                }, {
                    duration: 200
                })
            })), g = d, v(e, function(e) {
                var h, w = e.dataLabel,
                    k, x, p = e.connector,
                    v = !0,
                    D, C = {};
                f = e.dlOptions || e.options && e.options.dataLabels;
                h = A(f && f.enabled, g.enabled) && null !== e.y;
                if (w && !h) e.dataLabel = w.destroy();
                else if (h) {
                    d = z(g, f);
                    D = d.style;
                    h = d.rotation;
                    k = e.getLabelConfig();
                    l = d.format ? R(d.format, k) : d.formatter.call(k, d);
                    D.color = A(d.color, D.color, a.color, "black");
                    if (w) q(l) ? (w.attr({
                        text: l
                    }), v = !1) : (e.dataLabel = w = w.destroy(), p && (e.connector = p.destroy()));
                    else if (q(l)) {
                        w = {
                            fill: d.backgroundColor,
                            stroke: d.borderColor,
                            "stroke-width": d.borderWidth,
                            r: d.borderRadius || 0,
                            rotation: h,
                            padding: d.padding,
                            zIndex: 1
                        };
                        "contrast" === D.color && (C.color = d.inside || 0 > d.distance || b.stacking ? n.getContrast(e.color || a.color) : "#000000");
                        c && (C.cursor = c);
                        for (x in w) w[x] === J && delete w[x];
                        w = e.dataLabel =
                            n[h ? "text" : "label"](l, 0, -9999, d.shape, null, null, d.useHTML).attr(w).css(M(D, C)).add(m).shadow(d.shadow)
                    }
                    w && a.alignDataLabel(e, w, d, null, v)
                }
            })
    };
    ca.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart,
            g = f.inverted,
            h = A(a.plotX, -9999),
            l = A(a.plotY, -9999),
            m = b.getBBox(),
            n = f.renderer.fontMetrics(c.style.fontSize).b,
            r = c.rotation,
            u = c.align,
            w = this.visible && (a.series.forceDL || f.isInsidePlot(h, L(l), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g)),
            k = "justify" === A(c.overflow, "justify");
        w && (d = M({
            x: g ? f.plotWidth -
                l : h,
            y: L(g ? f.plotHeight - h : l),
            width: 0,
            height: 0
        }, d), M(c, {
            width: m.width,
            height: m.height
        }), r ? (k = !1, g = f.renderer.rotCorr(n, r), g = {
            x: d.x + c.x + d.width / 2 + g.x,
            y: d.y + c.y + d.height / 2
        }, b[e ? "attr" : "animate"](g).attr({
            align: c.align
        }), h = (r + 720) % 360, h = 180 < h && 360 > h, "left" === u ? g.y -= h ? m.height : 0 : "center" === u ? (g.x -= m.width / 2, g.y -= m.height / 2) : "right" === u && (g.x -= m.width, g.y -= h ? 0 : m.height)) : (b.align(c, null, d), g = b.alignAttr), k ? this.justifyDataLabel(b, c, g, m, d, e) : A(c.crop, !0) && (w = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + m.width,
            g.y + m.height)), c.shape && !r && b.attr({
            anchorX: a.plotX,
            anchorY: a.plotY
        }));
        w || (Wa(b), b.attr({
            y: -9999
        }), b.placed = !1)
    };
    ca.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var g = this.chart,
            h = b.align,
            l = b.verticalAlign,
            m, n, r = a.box ? 0 : a.padding || 0;
        m = c.x + r;
        0 > m && ("right" === h ? b.align = "left" : b.x = -m, n = !0);
        m = c.x + d.width - r;
        m > g.plotWidth && ("left" === h ? b.align = "right" : b.x = g.plotWidth - m, n = !0);
        m = c.y + r;
        0 > m && ("bottom" === l ? b.verticalAlign = "top" : b.y = -m, n = !0);
        m = c.y + d.height - r;
        m > g.plotHeight && ("top" === l ? b.verticalAlign = "bottom" :
            b.y = g.plotHeight - m, n = !0);
        n && (a.placed = !f, a.align(b, null, e))
    };
    Q.pie && (Q.pie.prototype.drawDataLabels = function() {
            var a = this,
                b = a.data,
                c, d = a.chart,
                e = a.options.dataLabels,
                f = A(e.connectorPadding, 10),
                g = A(e.connectorWidth, 1),
                h = d.plotWidth,
                l = d.plotHeight,
                m, n, r = A(e.softConnector, !0),
                u = e.distance,
                w = a.center,
                k = w[2] / 2,
                x = w[1],
                p = 0 < u,
                q, D, C, t = [
                    [],
                    []
                ],
                B, N, R, P, y, W = [0, 0, 0, 0],
                J = function(a, b) {
                    return b.y - a.y
                };
            if (a.visible && (e.enabled || a._hasPointLabels)) {
                ca.prototype.drawDataLabels.apply(a);
                v(b, function(a) {
                    a.dataLabel &&
                        a.visible && (t[a.half].push(a), a.dataLabel._pos = null)
                });
                for (P = 2; P--;) {
                    var z = [],
                        pa = [],
                        F = t[P],
                        ba = F.length,
                        I;
                    if (ba) {
                        a.sortByAngle(F, P - .5);
                        for (y = b = 0; !b && F[y];) b = F[y] && F[y].dataLabel && (F[y].dataLabel.getBBox().height || 21), y++;
                        if (0 < u) {
                            D = V(x + k + u, d.plotHeight);
                            for (y = K(0, x - k - u); y <= D; y += b) z.push(y);
                            D = z.length;
                            if (ba > D) {
                                c = [].concat(F);
                                c.sort(J);
                                for (y = ba; y--;) c[y].rank = y;
                                for (y = ba; y--;) F[y].rank >= D && F.splice(y, 1);
                                ba = F.length
                            }
                            for (y = 0; y < ba; y++) {
                                c = F[y];
                                C = c.labelPos;
                                c = 9999;
                                var G, M;
                                for (M = 0; M < D; M++) G = ma(z[M] - C[1]), G <
                                    c && (c = G, I = M);
                                if (I < y && null !== z[y]) I = y;
                                else
                                    for (D < ba - y + I && null !== z[y] && (I = D - ba + y); null === z[I];) I++;
                                pa.push({
                                    i: I,
                                    y: z[I]
                                });
                                z[I] = null
                            }
                            pa.sort(J)
                        }
                        for (y = 0; y < ba; y++) {
                            c = F[y];
                            C = c.labelPos;
                            q = c.dataLabel;
                            R = !1 === c.visible ? "hidden" : "inherit";
                            c = C[1];
                            if (0 < u) {
                                if (D = pa.pop(), I = D.i, N = D.y, c > N && null !== z[I + 1] || c < N && null !== z[I - 1]) N = V(K(0, c), d.plotHeight)
                            } else N = c;
                            B = e.justify ? w[0] + (P ? -1 : 1) * (k + u) : a.getX(N === x - k - u || N === x + k + u ? c : N, P);
                            q._attr = {
                                visibility: R,
                                align: C[6]
                            };
                            q._pos = {
                                x: B + e.x + ({
                                    left: f,
                                    right: -f
                                }[C[6]] || 0),
                                y: N + e.y - 10
                            };
                            q.connX =
                                B;
                            q.connY = N;
                            null === this.options.size && (D = q.width, B - D < f ? W[3] = K(L(D - B + f), W[3]) : B + D > h - f && (W[1] = K(L(B + D - h + f), W[1])), 0 > N - b / 2 ? W[0] = K(L(-N + b / 2), W[0]) : N + b / 2 > l && (W[2] = K(L(N + b / 2 - l), W[2])))
                        }
                    }
                }
                if (0 === Ga(W) || this.verifyDataLabelOverflow(W)) this.placeDataLabels(), p && g && v(this.points, function(b) {
                    m = b.connector;
                    C = b.labelPos;
                    (q = b.dataLabel) && q._pos && b.visible ? (R = q._attr.visibility, B = q.connX, N = q.connY, n = r ? ["M", B + ("left" === C[6] ? 5 : -5), N, "C", B, N, 2 * C[2] - C[4], 2 * C[3] - C[5], C[2], C[3], "L", C[4], C[5]] : ["M", B + ("left" === C[6] ? 5 :
                        -5), N, "L", C[2], C[3], "L", C[4], C[5]], m ? (m.animate({
                        d: n
                    }), m.attr("visibility", R)) : b.connector = m = a.chart.renderer.path(n).attr({
                        "stroke-width": g,
                        stroke: e.connectorColor || b.color || "#606060",
                        visibility: R
                    }).add(a.dataLabelsGroup)) : m && (b.connector = m.destroy())
                })
            }
        }, Q.pie.prototype.placeDataLabels = function() {
            v(this.points, function(a) {
                var b = a.dataLabel;
                b && a.visible && ((a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({
                    y: -9999
                }))
            })
        }, Q.pie.prototype.alignDataLabel = na, Q.pie.prototype.verifyDataLabelOverflow =
        function(a) {
            var b = this.center,
                c = this.options,
                d = c.center,
                e = c.minSize || 80,
                f = e,
                g;
            null !== d[0] ? f = K(b[2] - K(a[1], a[3]), e) : (f = K(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);
            null !== d[1] ? f = K(V(f, b[2] - K(a[0], a[2])), e) : (f = K(V(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
            f < b[2] ? (b[2] = f, b[3] = Math.min(D(c.innerSize || 0, f), f), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : g = !0;
            return g
        });
    Q.column && (Q.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart.inverted,
            g = a.series,
            h = a.dlBox || a.shapeArgs,
            l = A(a.below, a.plotY > A(this.translatedThreshold, g.yAxis.len)),
            m = A(c.inside, !!this.options.stacking);
        h && (d = z(h), 0 > d.y && (d.height += d.y, d.y = 0), h = d.y + d.height - g.yAxis.len, 0 < h && (d.height -= h), f && (d = {
            x: g.yAxis.len - d.y - d.height,
            y: g.xAxis.len - d.x - d.width,
            width: d.height,
            height: d.width
        }), m || (f ? (d.x += l ? 0 : d.width, d.width = 0) : (d.y += l ? d.height : 0, d.height = 0)));
        c.align = A(c.align, !f || m ? "center" : l ? "right" : "left");
        c.verticalAlign = A(c.verticalAlign, f || m ? "middle" : l ? "top" : "bottom");
        ca.prototype.alignDataLabel.call(this, a,
            b, c, d, e)
    });
    var bb = T.TrackerMixin = {
        drawTrackerPoint: function() {
            var a = this,
                b = a.chart,
                c = b.pointer,
                d = a.options.cursor,
                e = d && {
                    cursor: d
                },
                f = function(a) {
                    for (var c = a.target, d; c && !d;) d = c.point, c = c.parentNode;
                    if (d !== J && d !== b.hoverPoint) d.onMouseOver(a)
                };
            v(a.points, function(a) {
                a.graphic && (a.graphic.element.point = a);
                a.dataLabel && (a.dataLabel.element.point = a)
            });
            a._hasTracking || (v(a.trackerGroups, function(b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                            c.onTrackerMouseOut(a)
                        }).css(e),
                        db)) a[b].on("touchstart", f)
            }), a._hasTracking = !0)
        },
        drawTrackerGraph: function() {
            var a = this,
                b = a.options,
                c = b.trackByArea,
                d = [].concat(c ? a.areaPath : a.graphPath),
                e = d.length,
                f = a.chart,
                g = f.pointer,
                h = f.renderer,
                l = f.options.tooltip.snap,
                m = a.tracker,
                n = b.cursor,
                r = n && {
                    cursor: n
                },
                u = function() {
                    if (f.hoverSeries !== a) a.onMouseOver()
                },
                w = "rgba(192,192,192," + (ya ? 1E-4 : .002) + ")";
            if (e && !c)
                for (n = e + 1; n--;) "M" === d[n] && d.splice(n + 1, 0, d[n + 1] - l, d[n + 2], "L"), (n && "M" === d[n] || n === e) && d.splice(n, 0, "L", d[n - 2] + l, d[n - 1]);
            m ? m.attr({
                    d: d
                }) :
                (a.tracker = h.path(d).attr({
                    "stroke-linejoin": "round",
                    visibility: a.visible ? "visible" : "hidden",
                    stroke: w,
                    fill: c ? w : "none",
                    "stroke-width": b.lineWidth + (c ? 0 : 2 * l),
                    zIndex: 2
                }).add(a.group), v([a.tracker, a.markerGroup], function(a) {
                    a.addClass("highcharts-tracker").on("mouseover", u).on("mouseout", function(a) {
                        g.onTrackerMouseOut(a)
                    }).css(r);
                    if (db) a.on("touchstart", u)
                }))
        }
    };
    Q.column && (Mb.prototype.drawTracker = bb.drawTrackerPoint);
    Q.pie && (Q.pie.prototype.drawTracker = bb.drawTrackerPoint);
    Q.scatter && ($b.prototype.drawTracker =
        bb.drawTrackerPoint);
    M(vb.prototype, {
        setItemEvents: function(a, b, c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function() {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout", function() {
                b.css(a.visible ? d : e);
                a.setState()
            }).on("click", function(b) {
                var c = function() {
                    a.setVisible && a.setVisible()
                };
                b = {
                    browserEvent: b
                };
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : ha(a, "legendItemClick", b, c)
            })
        },
        createCheckboxForItem: function(a) {
            a.checkbox = S("input", {
                type: "checkbox",
                checked: a.selected,
                defaultChecked: a.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            Y(a.checkbox, "click", function(b) {
                ha(a.series || a, "checkboxClick", {
                    checked: b.target.checked,
                    item: a
                }, function() {
                    a.select()
                })
            })
        }
    });
    la.legend.itemStyle.cursor = "pointer";
    M(Ia.prototype, {
        showResetZoom: function() {
            var a = this,
                b = la.lang,
                c = a.options.chart.resetZoomButton,
                d = c.theme,
                e = d.states,
                f = "chart" === c.relativeTo ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({
                align: c.position.align,
                title: b.resetZoomTitle
            }).add().align(c.position, !1, f)
        },
        zoomOut: function() {
            var a = this;
            ha(a, "selection", {
                resetSelection: !0
            }, function() {
                a.zoom()
            })
        },
        zoom: function(a) {
            var b, c = this.pointer,
                d = !1,
                e;
            !a || a.resetSelection ? v(this.axes, function(a) {
                b = a.zoom()
            }) : v(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis,
                    h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            d && !e ? this.showResetZoom() : !d && I(e) && (this.resetZoomButton = e.destroy());
            b &&
                this.redraw(A(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
        },
        pan: function(a, b) {
            var c = this,
                d = c.hoverPoints,
                e;
            d && v(d, function(a) {
                a.setState()
            });
            v("xy" === b ? [1, 0] : [1], function(b) {
                b = c[b ? "xAxis" : "yAxis"][0];
                var d = b.horiz,
                    h = a[d ? "chartX" : "chartY"],
                    d = d ? "mouseDownX" : "mouseDownY",
                    l = c[d],
                    m = (b.pointRange || 0) / 2,
                    n = b.getExtremes(),
                    r = b.toValue(l - h, !0) + m,
                    m = b.toValue(l + b.len - h, !0) - m,
                    l = l > h;
                b.series.length && (l || r > V(n.dataMin, n.min)) && (!l || m < K(n.dataMax, n.max)) && (b.setExtremes(r, m, !1, !1, {
                        trigger: "pan"
                    }),
                    e = !0);
                c[d] = h
            });
            e && c.redraw(!1);
            F(c.container, {
                cursor: "move"
            })
        }
    });
    M(Ea.prototype, {
        select: function(a, b) {
            var c = this,
                d = c.series,
                e = d.chart;
            a = A(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function() {
                c.selected = c.options.selected = a;
                d.options.data[Da(c, d.data)] = c.options;
                c.setState(a && "select");
                b || v(e.getSelectedPoints(), function(a) {
                    a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[Da(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                })
            })
        },
        onMouseOver: function(a,
            b) {
            var c = this.series,
                d = c.chart,
                e = d.tooltip,
                f = d.hoverPoint;
            if (d.hoverSeries !== c) c.onMouseOver();
            if (f && f !== this) f.onMouseOut();
            this.series && (this.firePointEvent("mouseOver"), !e || e.shared && !c.noSharedTooltip || e.refresh(this, a), this.setState("hover"), b || (d.hoverPoint = this))
        },
        onMouseOut: function() {
            var a = this.series.chart,
                b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            b && -1 !== Da(this, b) || (this.setState(), a.hoverPoint = null)
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var a = z(this.series.options.point,
                        this.options).events,
                    b;
                this.events = a;
                for (b in a) Y(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(a, b) {
            var c = fa(this.plotX),
                d = this.plotY,
                e = this.series,
                f = e.options.states,
                g = aa[e.type].marker && e.options.marker,
                h = g && !g.enabled,
                l = g && g.states[a],
                m = l && !1 === l.enabled,
                n = e.stateMarkerGraphic,
                r = this.marker || {},
                u = e.chart,
                w = e.halo,
                k;
            a = a || "";
            k = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && "select" !== a || f[a] && !1 === f[a].enabled || a && (m || h && !1 === l.enabled) || a && r.states && r.states[a] &&
                    !1 === r.states[a].enabled)) {
                if (this.graphic) g = g && this.graphic.symbolName && k.r, this.graphic.attr(z(k, g ? {
                    x: c - g,
                    y: d - g,
                    width: 2 * g,
                    height: 2 * g
                } : {})), n && n.hide();
                else {
                    if (a && l)
                        if (g = l.radius, r = r.symbol || e.symbol, n && n.currentSymbol !== r && (n = n.destroy()), n) n[b ? "animate" : "attr"]({
                            x: c - g,
                            y: d - g
                        });
                        else r && (e.stateMarkerGraphic = n = u.renderer.symbol(r, c - g, d - g, 2 * g, 2 * g).attr(k).add(e.markerGroup), n.currentSymbol = r);
                    n && (n[a && u.isInsidePlot(c, d, u.inverted) ? "show" : "hide"](), n.element.point = this)
                }(c = f[a] && f[a].halo) && c.size ?
                    (w || (e.halo = w = u.renderer.path().add(u.seriesGroup)), w.attr(M({
                        fill: this.color || e.color,
                        "fill-opacity": c.opacity,
                        zIndex: -1
                    }, c.attributes))[b ? "animate" : "attr"]({
                        d: this.haloPath(c.size)
                    })) : w && w.attr({
                        d: []
                    });
                this.state = a
            }
        },
        haloPath: function(a) {
            var b = this.series,
                c = b.chart,
                d = b.getPlotBox(),
                e = c.inverted,
                f = Math.floor(this.plotX);
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : f) - a, d.translateY + (e ? b.xAxis.len - f : this.plotY) - a, 2 * a, 2 * a)
        }
    });
    M(ca.prototype, {
        onMouseOver: function() {
            var a =
                this.chart,
                b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && ha(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        },
        onMouseOut: function() {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            b.hoverSeries = null;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && ha(this, "mouseOut");
            !c || a.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
            this.setState()
        },
        setState: function(a) {
            var b = this.options,
                c = this.graph,
                d = b.states,
                e = b.lineWidth,
                b = 0;
            a = a || "";
            if (this.state !==
                a && (this.state = a, !d[a] || !1 !== d[a].enabled) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle))
                for (a = {
                        "stroke-width": e
                    }, c.attr(a); this["zoneGraph" + b];) this["zoneGraph" + b].attr(a), b += 1
        },
        setVisible: function(a, b) {
            var c = this,
                d = c.chart,
                e = c.legendItem,
                f, g = d.options.chart.ignoreHiddenSeries,
                h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === J ? !h : a) ? "show" : "hide";
            v(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(a) {
                if (c[a]) c[a][f]()
            });
            if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) ===
                c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && v(d.series, function(a) {
                a.options.stacking && a.visible && (a.isDirty = !0)
            });
            v(c.linkedSeries, function(b) {
                b.setVisible(a, !1)
            });
            g && (d.isDirtyBox = !0);
            !1 !== b && d.redraw();
            ha(c, f)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(a) {
            this.selected = a = a === J ? !this.selected : a;
            this.checkbox && (this.checkbox.checked = a);
            ha(this, a ? "select" : "unselect")
        },
        drawTracker: bb.drawTrackerGraph
    });
    ia(ca.prototype,
        "init",
        function(a) {
            var b;
            a.apply(this, Array.prototype.slice.call(arguments, 1));
            (b = this.xAxis) && b.options.ordinal && Y(this, "updatedData", function() {
                delete b.ordinalIndex
            })
        });
    ia(da.prototype, "getTimeTicks", function(a, b, c, d, e, f, g, h) {
        var l = 0,
            m, n, r = {},
            u, w, k, x = [],
            p = -Number.MAX_VALUE,
            v = this.options.tickPixelInterval;
        if (!this.options.ordinal && !this.options.breaks || !f || 3 > f.length || c === J) return a.call(this, b, c, d, e);
        w = f.length;
        for (m = 0; m < w; m++) {
            k = m && f[m - 1] > d;
            f[m] < c && (l = m);
            if (m === w - 1 || f[m + 1] - f[m] > 5 * g || k) {
                if (f[m] >
                    p) {
                    for (n = a.call(this, b, f[l], f[m], e); n.length && n[0] <= p;) n.shift();
                    n.length && (p = n[n.length - 1]);
                    x = x.concat(n)
                }
                l = m + 1
            }
            if (k) break
        }
        a = n.info;
        if (h && a.unitRange <= ga.hour) {
            m = x.length - 1;
            for (l = 1; l < m; l++) za("%d", x[l]) !== za("%d", x[l - 1]) && (r[x[l]] = "day", u = !0);
            u && (r[x[0]] = "day");
            a.higherRanks = r
        }
        x.info = a;
        if (h && q(v)) {
            h = a = x.length;
            m = [];
            var D;
            for (u = []; h--;) l = this.translate(x[h]), D && (u[h] = D - l), m[h] = D = l;
            u.sort();
            u = u[fa(u.length / 2)];
            u < .6 * v && (u = null);
            h = x[a - 1] > d ? a - 1 : a;
            for (D = void 0; h--;) l = m[h], d = D - l, D && d < .8 * v && (null === u || d <
                .8 * u) ? (r[x[h]] && !r[x[h + 1]] ? (d = h + 1, D = l) : d = h, x.splice(d, 1)) : D = l
        }
        return x
    });
    M(da.prototype, {
        beforeSetTickPositions: function() {
            var a, b = [],
                c = !1,
                d, e = this.getExtremes(),
                f = e.min,
                g = e.max,
                h, l = this.isXAxis && !!this.options.breaks;
            if ((e = this.options.ordinal) || l) {
                v(this.series, function(c, d) {
                    if (!1 !== c.visible && (!1 !== c.takeOrdinalPosition || l) && (b = b.concat(c.processedXData), a = b.length, b.sort(function(a, b) {
                            return a - b
                        }), a))
                        for (d = a - 1; d--;) b[d] === b[d + 1] && b.splice(d, 1)
                });
                a = b.length;
                if (2 < a) {
                    d = b[1] - b[0];
                    for (h = a - 1; h-- && !c;) b[h +
                        1] - b[h] !== d && (c = !0);
                    !this.options.keepOrdinalPadding && (b[0] - f > d || g - b[b.length - 1] > d) && (c = !0)
                }
                c ? (this.ordinalPositions = b, d = this.val2lin(K(f, b[0]), !0), h = K(this.val2lin(V(g, b[b.length - 1]), !0), 1), this.ordinalSlope = g = (g - f) / (h - d), this.ordinalOffset = f - d * g) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = J
            }
            this.isOrdinal = e && c;
            this.groupIntervalFactor = null
        },
        val2lin: function(a, b) {
            var c = this.ordinalPositions,
                d;
            if (c) {
                var e = c.length,
                    f;
                for (d = e; d--;)
                    if (c[d] === a) {
                        f = d;
                        break
                    }
                for (d = e - 1; d--;)
                    if (a > c[d] || 0 ===
                        d) {
                        c = (a - c[d]) / (c[d + 1] - c[d]);
                        f = d + c;
                        break
                    }
                d = b ? f : this.ordinalSlope * (f || 0) + this.ordinalOffset
            } else d = a;
            return d
        },
        lin2val: function(a, b) {
            var c = this.ordinalPositions;
            if (c) {
                var d = this.ordinalSlope,
                    e = this.ordinalOffset,
                    f = c.length - 1,
                    g, h;
                if (b) 0 > a ? a = c[0] : a > f ? a = c[f] : (f = fa(a), h = a - f);
                else
                    for (; f--;)
                        if (g = d * f + e, a >= g) {
                            d = d * (f + 1) + e;
                            h = (a - g) / (d - g);
                            break
                        }
                c = h !== J && c[f] !== J ? c[f] + (h ? h * (c[f + 1] - c[f]) : 0) : a
            } else c = a;
            return c
        },
        getExtendedPositions: function() {
            var a = this.chart,
                b = this.series[0].currentDataGrouping,
                c = this.ordinalIndex,
                d = b ? b.count + b.unitName : "raw",
                e = this.getExtremes(),
                f, g;
            c || (c = this.ordinalIndex = {});
            c[d] || (f = {
                series: [],
                getExtremes: function() {
                    return {
                        min: e.dataMin,
                        max: e.dataMax
                    }
                },
                options: {
                    ordinal: !0
                },
                val2lin: da.prototype.val2lin
            }, v(this.series, function(c) {
                g = {
                    xAxis: f,
                    xData: c.xData,
                    chart: a,
                    destroyGroupedData: na
                };
                g.options = {
                    dataGrouping: b ? {
                        enabled: !0,
                        forced: !0,
                        approximation: "open",
                        units: [
                            [b.unitName, [b.count]]
                        ]
                    } : {
                        enabled: !1
                    }
                };
                c.processData.apply(g);
                f.series.push(g)
            }), this.beforeSetTickPositions.apply(f), c[d] = f.ordinalPositions);
            return c[d]
        },
        getGroupIntervalFactor: function(a, b, c) {
            var d;
            c = c.processedXData;
            var e = c.length,
                f = [];
            d = this.groupIntervalFactor;
            if (!d) {
                for (d = 0; d < e - 1; d++) f[d] = c[d + 1] - c[d];
                f.sort(function(a, b) {
                    return a - b
                });
                f = f[fa(e / 2)];
                a = K(a, c[0]);
                b = V(b, c[e - 1]);
                this.groupIntervalFactor = d = e * f / (b - a)
            }
            return d
        },
        postProcessTickInterval: function(a) {
            var b = this.ordinalSlope;
            return b ? this.options.breaks ? this.closestPointRange : a / (b / this.closestPointRange) : a
        }
    });
    ia(Ia.prototype, "pan", function(a, b) {
        var c = this.xAxis[0],
            d = b.chartX,
            e = !1;
        if (c.options.ordinal && c.series.length) {
            var f = this.mouseDownX,
                g = c.getExtremes(),
                h = g.dataMax,
                l = g.min,
                m = g.max,
                n = this.hoverPoints,
                r = c.closestPointRange,
                f = (f - d) / (c.translationSlope * (c.ordinalSlope || r)),
                u = {
                    ordinalPositions: c.getExtendedPositions()
                },
                r = c.lin2val,
                w = c.val2lin,
                k;
            u.ordinalPositions ? 1 < ma(f) && (n && v(n, function(a) {
                a.setState()
            }), 0 > f ? (n = u, k = c.ordinalPositions ? c : u) : (n = c.ordinalPositions ? c : u, k = u), u = k.ordinalPositions, h > u[u.length - 1] && u.push(h), this.fixedRange = m - l, f = c.toFixedRange(null, null, r.apply(n, [w.apply(n, [l, !0]) + f, !0]), r.apply(k, [w.apply(k, [m, !0]) + f, !0])), f.min >= V(g.dataMin, l) && f.max <= K(h, m) && c.setExtremes(f.min, f.max, !0, !1, {
                trigger: "pan"
            }), this.mouseDownX = d, F(this.container, {
                cursor: "move"
            })) : e = !0
        } else e = !0;
        e && a.apply(this, Array.prototype.slice.call(arguments, 1))
    });
    ca.prototype.gappedPath = function() {
        var a = this.options.gapSize,
            b = this.xAxis,
            c = this.points.slice(),
            d = c.length - 1;
        if (a && 0 < d)
            for (; d--;) c[d + 1].x - c[d].x > b.closestPointRange * a && c.splice(d + 1, 0, {
                isNull: !0
            });
        return this.getGraphPath(c)
    };
    var xa = ca.prototype,
        lc = xa.processData,
        mc = xa.generatePoints,
        nc = xa.destroy,
        oc = {
            approximation: "average",
            groupPixelWidth: 2,
            dateTimeLabelFormats: {
                millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"],
                second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"],
                minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                month: ["%B %Y", "%B", "-%B %Y"],
                year: ["%Y", "%Y", "-%Y"]
            }
        },
        ac = {
            line: {},
            spline: {},
            area: {},
            areaspline: {},
            column: {
                approximation: "sum",
                groupPixelWidth: 10
            },
            arearange: {
                approximation: "range"
            },
            areasplinerange: {
                approximation: "range"
            },
            columnrange: {
                approximation: "range",
                groupPixelWidth: 10
            },
            candlestick: {
                approximation: "ohlc",
                groupPixelWidth: 10
            },
            ohlc: {
                approximation: "ohlc",
                groupPixelWidth: 5
            }
        },
        bc = [
            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            ["second", [1, 2, 5, 10, 15, 30]],
            ["minute", [1, 2, 5, 10, 15, 30]],
            ["hour", [1, 2, 3, 4,
                6, 8, 12
            ]],
            ["day", [1]],
            ["week", [1]],
            ["month", [1, 3, 6]],
            ["year", null]
        ],
        Xa = {
            sum: function(a) {
                var b = a.length,
                    c;
                if (!b && a.hasNulls) c = null;
                else if (b)
                    for (c = 0; b--;) c += a[b];
                return c
            },
            average: function(a) {
                var b = a.length;
                a = Xa.sum(a);
                "number" === typeof a && b && (a /= b);
                return a
            },
            open: function(a) {
                return a.length ? a[0] : a.hasNulls ? null : J
            },
            high: function(a) {
                return a.length ? Ga(a) : a.hasNulls ? null : J
            },
            low: function(a) {
                return a.length ? ba(a) : a.hasNulls ? null : J
            },
            close: function(a) {
                return a.length ? a[a.length - 1] : a.hasNulls ? null : J
            },
            ohlc: function(a,
                b, c, d) {
                a = Xa.open(a);
                b = Xa.high(b);
                c = Xa.low(c);
                d = Xa.close(d);
                if ("number" === typeof a || "number" === typeof b || "number" === typeof c || "number" === typeof d) return [a, b, c, d]
            },
            range: function(a, b) {
                a = Xa.low(a);
                b = Xa.high(b);
                if ("number" === typeof a || "number" === typeof b) return [a, b]
            }
        };
    xa.groupData = function(a, b, c, d) {
        var e = this.data,
            f = this.options.data,
            g = [],
            h = [],
            l = a.length,
            m, n, r = !!b,
            u = [
                [],
                [],
                [],
                []
            ];
        d = "function" === typeof d ? d : Xa[d];
        var w = this.pointArrayMap,
            k = w && w.length,
            x;
        for (x = 0; x <= l && !(a[x] >= c[0]); x++);
        for (x; x <= l; x++) {
            for (;
                (c[1] !==
                    J && a[x] >= c[1] || x === l) && (m = c.shift(), n = d.apply(0, u), n !== J && (g.push(m), h.push(n)), u[0] = [], u[1] = [], u[2] = [], u[3] = [], x !== l););
            if (x === l) break;
            if (w) {
                m = this.cropStart + x;
                m = e && e[m] || this.pointClass.prototype.applyOptions.apply({
                    series: this
                }, [f[m]]);
                var p;
                for (n = 0; n < k; n++) p = m[w[n]], "number" === typeof p ? u[n].push(p) : null === p && (u[n].hasNulls = !0)
            } else m = r ? b[x] : null, "number" === typeof m ? u[0].push(m) : null === m && (u[0].hasNulls = !0)
        }
        return [g, h]
    };
    xa.processData = function() {
        var a = this.chart,
            b = this.options.dataGrouping,
            c = !1 !==
            this.allowDG && b && A(b.enabled, a.options._stock),
            d;
        this.forceCrop = c;
        this.groupPixelWidth = null;
        this.hasProcessed = !0;
        if (!1 !== lc.apply(this, arguments) && c) {
            this.destroyGroupedData();
            var e = this.processedXData,
                f = this.processedYData,
                g = a.plotSizeX,
                a = this.xAxis,
                h = a.options.ordinal,
                l = this.groupPixelWidth = a.getGroupPixelWidth && a.getGroupPixelWidth();
            if (l) {
                d = !0;
                this.points = null;
                var m = a.getExtremes(),
                    c = m.min,
                    m = m.max,
                    h = h && a.getGroupIntervalFactor(c, m, this) || 1,
                    g = l * (m - c) / g * h,
                    l = a.getTimeTicks(a.normalizeTimeTickInterval(g,
                        b.units || bc), Math.min(c, e[0]), Math.max(m, e[e.length - 1]), a.options.startOfWeek, e, this.closestPointRange),
                    f = xa.groupData.apply(this, [e, f, l, b.approximation]),
                    e = f[0],
                    f = f[1];
                if (b.smoothed) {
                    b = e.length - 1;
                    for (e[b] = Math.min(e[b], m); b-- && 0 < b;) e[b] += g / 2;
                    e[0] = Math.max(e[0], c)
                }
                this.currentDataGrouping = l.info;
                this.closestPointRange = l.info.totalRange;
                q(e[0]) && e[0] < a.dataMin && (a.min === a.dataMin && (a.min = e[0]), a.dataMin = e[0]);
                this.processedXData = e;
                this.processedYData = f
            } else this.currentDataGrouping = null;
            this.hasGroupedData =
                d
        }
    };
    xa.destroyGroupedData = function() {
        var a = this.groupedData;
        v(a || [], function(b, c) {
            b && (a[c] = b.destroy ? b.destroy() : null)
        });
        this.groupedData = null
    };
    xa.generatePoints = function() {
        mc.apply(this);
        this.destroyGroupedData();
        this.groupedData = this.hasGroupedData ? this.points : null
    };
    ia(Jb.prototype, "tooltipFooterHeaderFormatter", function(a, b, c) {
        var d = b.series,
            e = d.tooltipOptions,
            f = d.options.dataGrouping,
            g = e.xDateFormat,
            h, l = d.xAxis;
        return l && "datetime" === l.options.type && f && k(b.key) ? (a = d.currentDataGrouping, f = f.dateTimeLabelFormats,
            a ? (l = f[a.unitName], 1 === a.count ? g = l[0] : (g = l[1], h = l[2])) : !g && f && (g = this.getXDateFormat(b, e, l)), g = za(g, b.key), h && (g += za(h, b.key + a.totalRange - 1)), R(e[(c ? "footer" : "header") + "Format"], {
                point: M(b, {
                    key: g
                }),
                series: d
            })) : a.call(this, b, c)
    });
    xa.destroy = function() {
        for (var a = this.groupedData || [], b = a.length; b--;) a[b] && a[b].destroy();
        nc.apply(this)
    };
    ia(xa, "setOptions", function(a, b) {
        var c = a.call(this, b),
            d = this.type,
            e = this.chart.options.plotOptions,
            f = aa[d].dataGrouping;
        ac[d] && (f || (f = z(oc, ac[d])), c.dataGrouping = z(f,
            e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping));
        this.chart.options._stock && (this.requireSorting = !0);
        return c
    });
    ia(da.prototype, "setScale", function(a) {
        a.call(this);
        v(this.series, function(a) {
            a.hasProcessed = !1
        })
    });
    da.prototype.getGroupPixelWidth = function() {
        var a = this.series,
            b = a.length,
            c, d = 0,
            e = !1,
            f;
        for (c = b; c--;)(f = a[c].options.dataGrouping) && (d = K(d, f.groupPixelWidth));
        for (c = b; c--;)(f = a[c].options.dataGrouping) && a[c].hasProcessed && (b = (a[c].processedXData || a[c].data).length, a[c].groupPixelWidth ||
            b > this.chart.plotSizeX / d || b && f.forced) && (e = !0);
        return e ? d : 0
    };
    da.prototype.setDataGrouping = function(a, b) {
        var c;
        b = A(b, !0);
        a || (a = {
            forced: !1,
            units: null
        });
        if (this instanceof da)
            for (c = this.series.length; c--;) this.series[c].update({
                dataGrouping: a
            }, !1);
        else v(this.chart.options.series, function(b) {
            b.dataGrouping = a
        }, !1);
        b && this.chart.redraw()
    };
    aa.ohlc = z(aa.column, {
        lineWidth: 1,
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
        },
        states: {
            hover: {
                lineWidth: 3
            }
        },
        threshold: null
    });
    var cc = C(Q.column, {
        type: "ohlc",
        pointArrayMap: ["open", "high", "low", "close"],
        toYData: function(a) {
            return [a.open, a.high, a.low, a.close]
        },
        pointValKey: "high",
        pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        upColorProp: "stroke",
        getAttribs: function() {
            Q.column.prototype.getAttribs.apply(this, arguments);
            var a = this.options,
                b = a.states,
                a = a.upColor || this.color,
                c = z(this.pointAttr),
                d = this.upColorProp;
            c[""][d] = a;
            c.hover[d] = b.hover.upColor || a;
            c.select[d] =
                b.select.upColor || a;
            v(this.points, function(a) {
                a.open < a.close && !a.options.color && (a.pointAttr = c)
            })
        },
        translate: function() {
            var a = this.yAxis;
            Q.column.prototype.translate.apply(this);
            v(this.points, function(b) {
                null !== b.open && (b.plotOpen = a.translate(b.open, 0, 1, 0, 1));
                null !== b.close && (b.plotClose = a.translate(b.close, 0, 1, 0, 1))
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.chart,
                c, d, e, f, g, h, l, m;
            v(a.points, function(n) {
                n.plotY !== J && (l = n.graphic, c = n.pointAttr[n.selected ? "selected" : ""] || a.pointAttr[""], f = c["stroke-width"] %
                    2 / 2, m = L(n.plotX) - f, g = L(n.shapeArgs.width / 2), h = ["M", m, L(n.yBottom), "L", m, L(n.plotY)], null !== n.open && (d = L(n.plotOpen) + f, h.push("M", m, d, "L", m - g, d)), null !== n.close && (e = L(n.plotClose) + f, h.push("M", m, e, "L", m + g, e)), l ? l.attr(c).animate({
                        d: h
                    }) : n.graphic = b.renderer.path(h).attr(c).add(a.group))
            })
        },
        animate: null
    });
    Q.ohlc = cc;
    aa.candlestick = z(aa.column, {
        lineColor: "black",
        lineWidth: 1,
        states: {
            hover: {
                lineWidth: 2
            }
        },
        tooltip: aa.ohlc.tooltip,
        threshold: null,
        upColor: "white"
    });
    var pc = C(cc, {
        type: "candlestick",
        pointAttrToOptions: {
            fill: "color",
            stroke: "lineColor",
            "stroke-width": "lineWidth"
        },
        upColorProp: "fill",
        getAttribs: function() {
            Q.ohlc.prototype.getAttribs.apply(this, arguments);
            var a = this.options,
                b = a.states,
                c = a.upLineColor || a.lineColor,
                d = b.hover.upLineColor || c,
                e = b.select.upLineColor || c;
            v(this.points, function(a) {
                a.open < a.close && (a.lineColor && (a.pointAttr = z(a.pointAttr), c = a.lineColor), a.pointAttr[""].stroke = c, a.pointAttr.hover.stroke = d, a.pointAttr.select.stroke = e)
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.chart,
                c, d = a.pointAttr[""],
                e, f, g, h,
                l, m, n, r, u, w, k;
            v(a.points, function(x) {
                u = x.graphic;
                x.plotY !== J && (c = x.pointAttr[x.selected ? "selected" : ""] || d, n = c["stroke-width"] % 2 / 2, r = L(x.plotX) - n, e = x.plotOpen, f = x.plotClose, g = oa.min(e, f), h = oa.max(e, f), k = L(x.shapeArgs.width / 2), l = L(g) !== L(x.plotY), m = h !== x.yBottom, g = L(g) + n, h = L(h) + n, w = ["M", r - k, h, "L", r - k, g, "L", r + k, g, "L", r + k, h, "Z", "M", r, g, "L", r, l ? L(x.plotY) : g, "M", r, h, "L", r, m ? L(x.yBottom) : h], u ? u.attr(c).animate({
                    d: w
                }) : x.graphic = b.renderer.path(w).attr(c).add(a.group).shadow(a.options.shadow))
            })
        }
    });
    Q.candlestick =
        pc;
    var xb = Pa.prototype.symbols;
    aa.flags = z(aa.column, {
        fillColor: "white",
        lineWidth: 1,
        pointRange: 0,
        shape: "flag",
        stackDistance: 12,
        states: {
            hover: {
                lineColor: "black",
                fillColor: "#FCFFC5"
            }
        },
        style: {
            fontSize: "11px",
            fontWeight: "bold",
            textAlign: "center"
        },
        tooltip: {
            pointFormat: "{point.text}<br/>"
        },
        threshold: null,
        y: -30
    });
    Q.flags = C(Q.column, {
        type: "flags",
        sorted: !1,
        noSharedTooltip: !0,
        allowDG: !1,
        takeOrdinalPosition: !1,
        trackerGroups: ["markerGroup"],
        forceCrop: !0,
        init: ca.prototype.init,
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth",
            r: "radius"
        },
        translate: function() {
            Q.column.prototype.translate.apply(this);
            var a = this.options,
                b = this.chart,
                c = this.points,
                d = c.length - 1,
                e, f, g = a.onSeries;
            e = g && b.get(g);
            var a = a.onKey || "y",
                g = e && e.options.step,
                h = e && e.points,
                l = h && h.length,
                m = this.xAxis,
                n = m.getExtremes(),
                r, u, w;
            if (e && e.visible && l)
                for (e = e.currentDataGrouping, u = h[l - 1].x + (e ? e.totalRange : 0), c.sort(function(a, b) {
                        return a.x - b.x
                    }), a = "plot" + a[0].toUpperCase() + a.substr(1); l-- && c[d] && !(e = c[d], r = h[l], r.x <= e.x &&
                        void 0 !== r[a] && (e.x <= u && (e.plotY = r[a], r.x < e.x && !g && (w = h[l + 1]) && w[a] !== J && (e.plotY += (e.x - r.x) / (w.x - r.x) * (w[a] - r[a]))), d--, l++, 0 > d)););
            v(c, function(a, d) {
                var e;
                a.plotY === J && (a.x >= n.min && a.x <= n.max ? a.plotY = b.chartHeight - m.bottom - (m.opposite ? m.height : 0) + m.offset - b.plotTop : a.shapeArgs = {});
                (f = c[d - 1]) && f.plotX === a.plotX && (f.stackIndex === J && (f.stackIndex = 0), e = f.stackIndex + 1);
                a.stackIndex = e
            })
        },
        drawPoints: function() {
            var a, b = this.pointAttr[""],
                c = this.points,
                d = this.chart.renderer,
                e, f, g = this.options,
                h = g.y,
                l, m,
                n, r, u, w;
            for (m = c.length; m--;) n = c[m], a = n.plotX > this.xAxis.len, e = n.plotX, 0 < e && (e -= A(n.lineWidth, g.lineWidth) % 2), r = n.stackIndex, l = n.options.shape || g.shape, f = n.plotY, f !== J && (f = n.plotY + h - (r !== J && r * g.stackDistance)), u = r ? J : n.plotX, w = r ? J : n.plotY, r = n.graphic, f !== J && 0 <= e && !a ? (a = n.pointAttr[n.selected ? "select" : ""] || b, r ? r.attr({
                x: e,
                y: f,
                r: a.r,
                anchorX: u,
                anchorY: w
            }) : n.graphic = d.label(n.options.title || g.title || "A", e, f, l, u, w, g.useHTML).css(z(g.style, n.style)).attr(a).attr({
                align: "flag" === l ? "left" : "center",
                width: g.width,
                height: g.height
            }).add(this.markerGroup).shadow(g.shadow), n.tooltipPos = [e, f]) : r && (n.graphic = r.destroy())
        },
        drawTracker: function() {
            var a = this.points;
            bb.drawTrackerPoint.apply(this);
            v(a, function(b) {
                var c = b.graphic;
                c && Y(c.element, "mouseover", function() {
                    0 < b.stackIndex && !b.raised && (b._y = c.y, c.attr({
                        y: b._y - 8
                    }), b.raised = !0);
                    v(a, function(a) {
                        a !== b && a.raised && a.graphic && (a.graphic.attr({
                            y: a._y
                        }), a.raised = !1)
                    })
                })
            })
        },
        animate: na,
        buildKDTree: na,
        setClip: na
    });
    xb.flag = function(a, b, c, d, e) {
        return ["M", e && e.anchorX || a,
            e && e.anchorY || b, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "Z"
        ]
    };
    v(["circle", "square"], function(a) {
        xb[a + "pin"] = function(b, c, d, e, f) {
            var g = f && f.anchorX;
            f = f && f.anchorY;
            "circle" === a && e > d && (b -= L((e - d) / 2), d = e);
            b = xb[a](b, c, d, e);
            g && f && b.push("M", g, c > f ? c : c + e, "L", g, f);
            return b
        }
    });
    Pa === T.VMLRenderer && v(["flag", "circlepin", "squarepin"], function(a) {
        VMLRenderer.prototype.symbols[a] = xb[a]
    });
    var Ob = [].concat(bc),
        yb = function(a) {
            var b = Va(arguments, function(a) {
                return "number" === typeof a
            });
            if (b.length) return Math[a].apply(0, b)
        };
    Ob[4] = ["day", [1, 2, 3, 4]];
    Ob[5] = ["week", [1, 2, 3]];
    M(la, {
        navigator: {
            handles: {
                backgroundColor: "#ebe7e8",
                borderColor: "#b2b1b6"
            },
            height: 40,
            margin: 25,
            maskFill: "rgba(128,179,236,0.3)",
            maskInside: !0,
            outlineColor: "#b2b1b6",
            outlineWidth: 1,
            series: {
                type: Q.areaspline === J ? "line" : "areaspline",
                color: "#4572A7",
                compare: null,
                fillOpacity: .05,
                dataGrouping: {
                    approximation: "average",
                    enabled: !0,
                    groupPixelWidth: 2,
                    smoothed: !0,
                    units: Ob
                },
                dataLabels: {
                    enabled: !1,
                    zIndex: 2
                },
                id: "highcharts-navigator-series",
                lineColor: null,
                lineWidth: 1,
                marker: {
                    enabled: !1
                },
                pointRange: 0,
                shadow: !1,
                threshold: null
            },
            xAxis: {
                tickWidth: 0,
                lineWidth: 0,
                gridLineColor: "#EEE",
                gridLineWidth: 1,
                tickPixelInterval: 200,
                labels: {
                    align: "left",
                    style: {
                        color: "#888"
                    },
                    x: 3,
                    y: -4
                },
                crosshair: !1
            },
            yAxis: {
                gridLineWidth: 0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: .1,
                maxPadding: .1,
                labels: {
                    enabled: !1
                },
                crosshair: !1,
                title: {
                    text: null
                },
                tickWidth: 0
            }
        },
        scrollbar: {
            height: kb ? 20 : 14,
            barBackgroundColor: "#bfc8d1",
            barBorderRadius: 0,
            barBorderWidth: 1,
            barBorderColor: "#bfc8d1",
            buttonArrowColor: "#666",
            buttonBackgroundColor: "#ebe7e8",
            buttonBorderColor: "#bbb",
            buttonBorderRadius: 0,
            buttonBorderWidth: 1,
            minWidth: 6,
            rifleColor: "#666",
            trackBackgroundColor: "#eeeeee",
            trackBorderColor: "#eeeeee",
            trackBorderWidth: 1,
            liveRedraw: ya && !kb
        }
    });
    cb.prototype = {
        drawHandle: function(a, b) {
            var c = this.chart,
                d = c.renderer,
                e = this.elementsToDestroy,
                f = this.handles,
                g = this.navigatorOptions.handles,
                g = {
                    fill: g.backgroundColor,
                    stroke: g.borderColor,
                    "stroke-width": 1
                },
                h;
            this.rendered || (f[b] = d.g("navigator-handle-" + ["left", "right"][b]).css({
                cursor: "ew-resize"
            }).attr({
                zIndex: 10 -
                    b
            }).add(), h = d.rect(-4.5, 0, 9, 16, 0, 1).attr(g).add(f[b]), e.push(h), h = d.path(["M", -1.5, 4, "L", -1.5, 12, "M", .5, 4, "L", .5, 12]).attr(g).add(f[b]), e.push(h));
            f[b][c.isResizing ? "animate" : "attr"]({
                translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(a, 10),
                translateY: this.top + this.height / 2 - 8
            })
        },
        drawScrollbarButton: function(a) {
            var b = this.chart.renderer,
                c = this.elementsToDestroy,
                d = this.scrollbarButtons,
                e = this.scrollbarHeight,
                f = this.scrollbarOptions,
                g;
            this.rendered || (d[a] = b.g().add(this.scrollbarGroup), g = b.rect(-.5, -.5, e + 1, e + 1, f.buttonBorderRadius, f.buttonBorderWidth).attr({
                stroke: f.buttonBorderColor,
                "stroke-width": f.buttonBorderWidth,
                fill: f.buttonBackgroundColor
            }).add(d[a]), c.push(g), g = b.path(["M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, e / 2 + (a ? 2 : -2), e / 2]).attr({
                fill: f.buttonArrowColor
            }).add(d[a]), c.push(g));
            a && d[a].attr({
                translateX: this.scrollerWidth - e
            })
        },
        render: function(a, b, c, d) {
            var e = this.chart,
                f = e.renderer,
                g, h, l, m, n = this.scrollbarGroup,
                r = this.navigatorGroup,
                u = this.scrollbar,
                r = this.xAxis,
                w = this.scrollbarTrack,
                k = this.scrollbarHeight,
                x = this.scrollbarEnabled,
                p = this.navigatorOptions,
                v = this.scrollbarOptions,
                D = v.minWidth,
                C = this.height,
                t = this.top,
                N = this.navigatorEnabled,
                B = p.outlineWidth,
                y = B / 2,
                R = 0,
                P = this.outlineHeight,
                W = v.barBorderRadius,
                z = v.barBorderWidth,
                J = t + y,
                F;
            if (q(a) && !isNaN(a) && (!this.hasDragged || q(c))) {
                this.navigatorLeft = g = A(r.left, e.plotLeft + k);
                this.navigatorWidth = h = A(r.len, e.plotWidth - 2 * k);
                this.scrollerLeft = l = g - k;
                this.scrollerWidth = m = m = h + 2 * k;
                r.getExtremes && (F = this.getUnionExtremes(!0), !F || F.dataMin ===
                    r.min && F.dataMax === r.max || r.setExtremes(F.dataMin, F.dataMax, !0, !1));
                c = A(c, r.translate(a));
                d = A(d, r.translate(b));
                if (isNaN(c) || Infinity === ma(c)) c = 0, d = m;
                if (!(r.translate(d, !0) - r.translate(c, !0) < e.xAxis[0].minRange)) {
                    this.zoomedMax = V(K(c, d, 0), h);
                    this.zoomedMin = K(this.fixedWidth ? this.zoomedMax - this.fixedWidth : V(c, d), 0);
                    this.range = this.zoomedMax - this.zoomedMin;
                    c = L(this.zoomedMax);
                    b = L(this.zoomedMin);
                    a = c - b;
                    this.rendered || (N && (this.navigatorGroup = r = f.g("navigator").attr({
                            zIndex: 3
                        }).add(), this.leftShade = f.rect().attr({
                            fill: p.maskFill
                        }).add(r),
                        p.maskInside ? this.leftShade.css({
                            cursor: "ew-resize"
                        }) : this.rightShade = f.rect().attr({
                            fill: p.maskFill
                        }).add(r), this.outline = f.path().attr({
                            "stroke-width": B,
                            stroke: p.outlineColor
                        }).add(r)), x && (this.scrollbarGroup = n = f.g("scrollbar").add(), u = v.trackBorderWidth, this.scrollbarTrack = w = f.rect().attr({
                        x: 0,
                        y: -u % 2 / 2,
                        fill: v.trackBackgroundColor,
                        stroke: v.trackBorderColor,
                        "stroke-width": u,
                        r: v.trackBorderRadius || 0,
                        height: k
                    }).add(n), this.scrollbar = u = f.rect().attr({
                        y: -z % 2 / 2,
                        height: k,
                        fill: v.barBackgroundColor,
                        stroke: v.barBorderColor,
                        "stroke-width": z,
                        r: W
                    }).add(n), this.scrollbarRifles = f.path().attr({
                        stroke: v.rifleColor,
                        "stroke-width": 1
                    }).add(n)));
                    e = e.isResizing ? "animate" : "attr";
                    if (N) {
                        this.leftShade[e](p.maskInside ? {
                            x: g + b,
                            y: t,
                            width: c - b,
                            height: C
                        } : {
                            x: g,
                            y: t,
                            width: b,
                            height: C
                        });
                        if (this.rightShade) this.rightShade[e]({
                            x: g + c,
                            y: t,
                            width: h - c,
                            height: C
                        });
                        this.outline[e]({
                            d: ["M", l, J, "L", g + b - y, J, g + b - y, J + P, "L", g + c - y, J + P, "L", g + c - y, J, l + m, J].concat(p.maskInside ? ["M", g + b + y, J, "L", g + c - y, J] : [])
                        });
                        this.drawHandle(b + y, 0);
                        this.drawHandle(c + y, 1)
                    }
                    x && n && (this.drawScrollbarButton(0),
                        this.drawScrollbarButton(1), n[e]({
                            translateX: l,
                            translateY: L(J + C)
                        }), w[e]({
                            width: m
                        }), g = k + b, h = a - z, h < D && (R = (D - h) / 2, h = D, g -= R), this.scrollbarPad = R, u[e]({
                            x: fa(g) + z % 2 / 2,
                            width: h
                        }), D = k + b + a / 2 - .5, this.scrollbarRifles.attr({
                            visibility: 12 < a ? "visible" : "hidden"
                        })[e]({
                            d: ["M", D - 3, k / 4, "L", D - 3, 2 * k / 3, "M", D, k / 4, "L", D, 2 * k / 3, "M", D + 3, k / 4, "L", D + 3, 2 * k / 3]
                        }));
                    this.scrollbarPad = R;
                    this.rendered = !0
                }
            }
        },
        addEvents: function() {
            var a = this.chart.container,
                b = this.mouseDownHandler,
                c = this.mouseMoveHandler,
                d = this.mouseUpHandler,
                e;
            e = [
                [a, "mousedown",
                    b
                ],
                [a, "mousemove", c],
                [Z, "mouseup", d]
            ];
            db && e.push([a, "touchstart", b], [a, "touchmove", c], [Z, "touchend", d]);
            v(e, function(a) {
                Y.apply(null, a)
            });
            this._events = e
        },
        removeEvents: function() {
            v(this._events, function(a) {
                qa.apply(null, a)
            });
            this._events = J;
            this.navigatorEnabled && this.baseSeries && qa(this.baseSeries, "updatedData", this.updatedDataHandler)
        },
        init: function() {
            var a = this,
                b = a.chart,
                c, d, e = a.scrollbarHeight,
                f = a.navigatorOptions,
                g = a.height,
                h = a.top,
                l, m = a.baseSeries;
            a.mouseDownHandler = function(d) {
                d = b.pointer.normalize(d);
                var e = a.zoomedMin,
                    f = a.zoomedMax,
                    h = a.top,
                    m = a.scrollbarHeight,
                    n = a.scrollerLeft,
                    r = a.scrollerWidth,
                    k = a.navigatorLeft,
                    x = a.navigatorWidth,
                    p = a.scrollbarPad,
                    v = a.range,
                    D = d.chartX,
                    q = d.chartY;
                d = b.xAxis[0];
                var A, C = kb ? 10 : 7;
                q > h && q < h + g + m && ((h = !a.scrollbarEnabled || q < h + g) && oa.abs(D - e - k) < C ? (a.grabbedLeft = !0, a.otherHandlePos = f, a.fixedExtreme = d.max, b.fixedRange = null) : h && oa.abs(D - f - k) < C ? (a.grabbedRight = !0, a.otherHandlePos = e, a.fixedExtreme = d.min, b.fixedRange = null) : D > k + e - p && D < k + f + p ? (a.grabbedCenter = D, a.fixedWidth = v, l = D -
                    e) : D > n && D < n + r && (f = h ? D - k - v / 2 : D < k ? e - .2 * v : D > n + r - m ? e + .2 * v : D < k + e ? e - v : f, 0 > f ? f = 0 : f + v >= x && (f = x - v, A = a.getUnionExtremes().dataMax), f !== e && (a.fixedWidth = v, e = c.toFixedRange(f, f + v, null, A), d.setExtremes(e.min, e.max, !0, !1, {
                    trigger: "navigator"
                }))))
            };
            a.mouseMoveHandler = function(c) {
                var d = a.scrollbarHeight,
                    e = a.navigatorLeft,
                    f = a.navigatorWidth,
                    g = a.scrollerLeft,
                    h = a.scrollerWidth,
                    m = a.range,
                    n, r;
                c.touches && 0 === c.touches[0].pageX || (c = b.pointer.normalize(c), n = c.chartX, n < e ? n = e : n > g + h - d && (n = g + h - d), a.grabbedLeft ? (r = !0, a.render(0,
                    0, n - e, a.otherHandlePos)) : a.grabbedRight ? (r = !0, a.render(0, 0, a.otherHandlePos, n - e)) : a.grabbedCenter && (r = !0, n < l ? n = l : n > f + l - m && (n = f + l - m), a.render(0, 0, n - l, n - l + m)), r && a.scrollbarOptions.liveRedraw && setTimeout(function() {
                    a.mouseUpHandler(c)
                }, 0), a.hasDragged = r)
            };
            a.mouseUpHandler = function(d) {
                var e, f;
                a.hasDragged && (a.zoomedMin === a.otherHandlePos ? e = a.fixedExtreme : a.zoomedMax === a.otherHandlePos && (f = a.fixedExtreme), a.zoomedMax === a.navigatorWidth && (f = a.getUnionExtremes().dataMax), e = c.toFixedRange(a.zoomedMin, a.zoomedMax,
                    e, f), q(e.min) && b.xAxis[0].setExtremes(e.min, e.max, !0, !1, {
                    trigger: "navigator",
                    triggerOp: "navigator-drag",
                    DOMEvent: d
                }));
                "mousemove" !== d.type && (a.grabbedLeft = a.grabbedRight = a.grabbedCenter = a.fixedWidth = a.fixedExtreme = a.otherHandlePos = a.hasDragged = l = null)
            };
            var n = b.xAxis.length,
                r = b.yAxis.length;
            b.extraBottomMargin = a.outlineHeight + f.margin;
            a.navigatorEnabled ? (a.xAxis = c = new da(b, z({
                breaks: m && m.xAxis.options.breaks,
                ordinal: m && m.xAxis.options.ordinal
            }, f.xAxis, {
                id: "navigator-x-axis",
                isX: !0,
                type: "datetime",
                index: n,
                height: g,
                offset: 0,
                offsetLeft: e,
                offsetRight: -e,
                keepOrdinalPadding: !0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: 0,
                maxPadding: 0,
                zoomEnabled: !1
            })), a.yAxis = d = new da(b, z(f.yAxis, {
                id: "navigator-y-axis",
                alignTicks: !1,
                height: g,
                offset: 0,
                index: r,
                zoomEnabled: !1
            })), m || f.series.data ? a.addBaseSeries() : 0 === b.series.length && ia(b, "redraw", function(c, d) {
                0 < b.series.length && !a.series && (a.setBaseSeries(), b.redraw = c);
                c.call(b, d)
            })) : a.xAxis = c = {
                translate: function(a, c) {
                    var d = b.xAxis[0],
                        f = d.getExtremes(),
                        g = b.plotWidth -
                        2 * e,
                        h = yb("min", d.options.min, f.dataMin),
                        d = yb("max", d.options.max, f.dataMax) - h;
                    return c ? a * d / g + h : g * (a - h) / d
                },
                toFixedRange: da.prototype.toFixedRange
            };
            ia(b, "getMargins", function(b) {
                var e = this.legend,
                    f = e.options;
                b.apply(this, [].slice.call(arguments, 1));
                a.top = h = a.navigatorOptions.top || this.chartHeight - a.height - a.scrollbarHeight - this.spacing[2] - ("bottom" === f.verticalAlign && f.enabled && !f.floating ? e.legendHeight + A(f.margin, 10) : 0);
                c && d && (c.options.top = d.options.top = h, c.setAxisSize(), d.setAxisSize())
            });
            a.addEvents()
        },
        getUnionExtremes: function(a) {
            var b = this.chart.xAxis[0],
                c = this.xAxis,
                d = c.options,
                e = b.options,
                f;
            a && null === b.dataMin || (f = {
                dataMin: A(d && d.min, yb("min", e.min, b.dataMin, c.dataMin)),
                dataMax: A(d && d.max, yb("max", e.max, b.dataMax, c.dataMax))
            });
            return f
        },
        setBaseSeries: function(a) {
            var b = this.chart;
            a = a || b.options.navigator.baseSeries;
            this.series && this.series.remove();
            this.baseSeries = b.series[a] || "string" === typeof a && b.get(a) || b.series[0];
            this.xAxis && this.addBaseSeries()
        },
        addBaseSeries: function() {
            var a = this.baseSeries,
                b = a ? a.options : {},
                c = b.data,
                d = this.navigatorOptions.series,
                e;
            e = d.data;
            this.hasNavigatorData = !!e;
            b = z(b, d, {
                enableMouseTracking: !1,
                group: "nav",
                padXAxis: !1,
                xAxis: "navigator-x-axis",
                yAxis: "navigator-y-axis",
                name: "Navigator",
                showInLegend: !1,
                stacking: !1,
                isInternal: !0,
                visible: !0
            });
            b.data = e || c.slice(0);
            this.series = this.chart.initSeries(b);
            a && !1 !== this.navigatorOptions.adaptToUpdatedData && (Y(a, "updatedData", this.updatedDataHandler), a.userOptions.events = M(a.userOptions.event, {
                updatedData: this.updatedDataHandler
            }))
        },
        updatedDataHandler: function() {
            var a = this.chart.scroller,
                b = a.baseSeries,
                c = b.xAxis,
                d = c.getExtremes(),
                e = d.min,
                f = d.max,
                g = d.dataMin,
                d = d.dataMax,
                h = f - e,
                l, m, n, r, u, k = a.series;
            l = k.xData;
            var x = !!c.setExtremes;
            m = f >= l[l.length - 1] - (this.closestPointRange || 0);
            l = e <= g;
            a.hasNavigatorData || (k.options.pointStart = b.xData[0], k.setData(b.options.data, !1), u = !0);
            l && (r = g, n = r + h);
            m && (n = d, l || (r = K(n - h, k.xData[0])));
            x && (l || m) ? isNaN(r) || c.setExtremes(r, n, !0, !1, {
                trigger: "updatedData"
            }) : (u && this.chart.redraw(!1), a.render(K(e, g), V(f,
                d)))
        },
        destroy: function() {
            this.removeEvents();
            v([this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline, this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar], function(a) {
                a && a.destroy && a.destroy()
            });
            this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack = this.scrollbarRifles = this.scrollbarGroup = this.scrollbar = null;
            v([this.scrollbarButtons, this.handles, this.elementsToDestroy], function(a) {
                Ja(a)
            })
        }
    };
    T.Scroller = cb;
    ia(da.prototype, "zoom", function(a,
        b, c) {
        var d = this.chart,
            e = d.options,
            f = e.chart.zoomType,
            g = e.navigator,
            e = e.rangeSelector,
            h;
        this.isXAxis && (g && g.enabled || e && e.enabled) && ("x" === f ? d.resetZoomButton = "blocked" : "y" === f ? h = !1 : "xy" === f && (d = this.previousZoom, q(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom)));
        return h !== J ? h : a.call(this, b, c)
    });
    ia(Ia.prototype, "init", function(a, b, c) {
        Y(this, "beforeRender", function() {
            var a = this.options;
            if (a.navigator.enabled || a.scrollbar.enabled) this.scroller = new cb(this)
        });
        a.call(this,
            b, c)
    });
    ia(ca.prototype, "addPoint", function(a, b, c, d, e) {
        var f = this.options.turboThreshold;
        f && this.xData.length > f && I(b) && !O(b) && this.chart.scroller && U(20, !0);
        a.call(this, b, c, d, e)
    });
    M(la, {
        rangeSelector: {
            buttonTheme: {
                width: 28,
                height: 18,
                fill: "#f7f7f7",
                padding: 2,
                r: 0,
                "stroke-width": 0,
                style: {
                    color: "#444",
                    cursor: "pointer",
                    fontWeight: "normal"
                },
                zIndex: 7,
                states: {
                    hover: {
                        fill: "#e7e7e7"
                    },
                    select: {
                        fill: "#e7f0f9",
                        style: {
                            color: "black",
                            fontWeight: "bold"
                        }
                    }
                }
            },
            height: 35,
            inputPosition: {
                align: "right"
            },
            labelStyle: {
                color: "#666"
            }
        }
    });
    la.lang = z(la.lang, {
        rangeSelectorZoom: "Zoom",
        rangeSelectorFrom: "From",
        rangeSelectorTo: "To"
    });
    Gb.prototype = {
        clickButton: function(a, b) {
            var c = this,
                d = c.selected,
                e = c.chart,
                f = c.buttons,
                g = c.buttonOptions[a],
                h = e.xAxis[0],
                l = e.scroller && e.scroller.getUnionExtremes() || h || {},
                m = l.dataMin,
                n = l.dataMax,
                r, u = h && L(V(h.max, A(n, h.max))),
                k = g.type,
                x, l = g._range,
                p, D, q, C = g.dataGrouping;
            if (null !== m && null !== n && a !== c.selected) {
                e.fixedRange = l;
                C && (this.forcedDataGrouping = !0, da.prototype.setDataGrouping.call(h || {
                        chart: this.chart
                    },
                    C, !1));
                if ("month" === k || "year" === k) h ? (k = {
                    range: g,
                    max: u,
                    dataMin: m,
                    dataMax: n
                }, r = h.minFromRange.call(k), "number" === typeof k.newMax && (u = k.newMax)) : l = g;
                else if (l) r = K(u - l, m), u = V(r + l, n);
                else if ("ytd" === k)
                    if (h) n === J && (m = Number.MAX_VALUE, n = Number.MIN_VALUE, v(e.series, function(a) {
                        a = a.xData;
                        m = V(a[0], m);
                        n = K(a[a.length - 1], n)
                    }), b = !1), u = new wa(n), r = u.getFullYear(), r = p = K(m || 0, wa.UTC(r, 0, 1)), u = u.getTime(), u = V(n || u, u);
                    else {
                        Y(e, "beforeRender", function() {
                            c.clickButton(a)
                        });
                        return
                    } else "all" === k && h && (r = m, u = n);
                f[d] && f[d].setState(0);
                f[a] && (f[a].setState(2), c.lastSelected = a);
                h ? (h.setExtremes(r, u, A(b, 1), 0, {
                    trigger: "rangeSelectorButton",
                    rangeSelectorButton: g
                }), c.setSelected(a)) : (x = e.options.xAxis[0], q = x.range, x.range = l, D = x.min, x.min = p, c.setSelected(a), Y(e, "load", function() {
                    x.range = q;
                    x.min = D
                }))
            }
        },
        setSelected: function(a) {
            this.selected = this.options.selected = a
        },
        defaultButtons: [{
            type: "month",
            count: 1,
            text: "1m"
        }, {
            type: "month",
            count: 3,
            text: "3m"
        }, {
            type: "month",
            count: 6,
            text: "6m"
        }, {
            type: "ytd",
            text: "YTD"
        }, {
            type: "year",
            count: 1,
            text: "1y"
        }, {
            type: "all",
            text: "All"
        }],
        init: function(a) {
            var b = this,
                c = a.options.rangeSelector,
                d = c.buttons || [].concat(b.defaultButtons),
                e = c.selected,
                f = b.blurInputs = function() {
                    var a = b.minInput,
                        c = b.maxInput;
                    a && a.blur && ha(a, "blur");
                    c && c.blur && ha(c, "blur")
                };
            b.chart = a;
            b.options = c;
            b.buttons = [];
            a.extraTopMargin = c.height;
            b.buttonOptions = d;
            Y(a.container, "mousedown", f);
            Y(a, "resize", f);
            v(d, b.computeButtonRange);
            e !== J && d[e] && this.clickButton(e, !1);
            Y(a, "load", function() {
                Y(a.xAxis[0], "setExtremes", function(c) {
                    this.max - this.min !== a.fixedRange &&
                        "rangeSelectorButton" !== c.trigger && "updatedData" !== c.trigger && b.forcedDataGrouping && this.setDataGrouping(!1, !1)
                });
                Y(a.xAxis[0], "afterSetExtremes", function() {
                    b.updateButtonStates(!0)
                })
            })
        },
        updateButtonStates: function(a) {
            var b = this,
                c = this.chart,
                d = c.xAxis[0],
                e = c.scroller && c.scroller.getUnionExtremes() || d,
                f = e.dataMin,
                g = e.dataMax,
                h = b.selected,
                l = b.options.allButtonsEnabled,
                m = b.buttons;
            a && c.fixedRange !== L(d.max - d.min) && (m[h] && m[h].setState(0), b.setSelected(null));
            v(b.buttonOptions, function(a, e) {
                var u = L(d.max -
                        d.min),
                    k = a._range,
                    x = a.type,
                    p = a.count || 1,
                    D = k > g - f,
                    v = k < d.minRange,
                    q = "all" === a.type && d.max - d.min >= g - f && 2 !== m[e].state,
                    A = "ytd" === a.type && za("%Y", f) === za("%Y", g),
                    C = c.renderer.forExport && e === h,
                    k = k === u,
                    t = !d.hasVisibleSeries;
                ("month" === x || "year" === x) && u >= 864E5 * {
                    month: 28,
                    year: 365
                }[x] * p && u <= 864E5 * {
                    month: 31,
                    year: 366
                }[x] * p && (k = !0);
                C || k && e !== h && e === b.lastSelected ? (b.setSelected(e), m[e].setState(2)) : !l && (D || v || q || A || t) ? m[e].setState(3) : 3 === m[e].state && m[e].setState(0)
            })
        },
        computeButtonRange: function(a) {
            var b = a.type,
                c = a.count || 1,
                d = {
                    millisecond: 1,
                    second: 1E3,
                    minute: 6E4,
                    hour: 36E5,
                    day: 864E5,
                    week: 6048E5
                };
            if (d[b]) a._range = d[b] * c;
            else if ("month" === b || "year" === b) a._range = 864E5 * {
                month: 30,
                year: 365
            }[b] * c
        },
        setInputValue: function(a, b) {
            var c = this.chart.options.rangeSelector;
            q(b) && (this[a + "Input"].HCTime = b);
            this[a + "Input"].value = za(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime);
            this[a + "DateBox"].attr({
                text: za(c.inputDateFormat || "%b %e, %Y", this[a + "Input"].HCTime)
            })
        },
        showInput: function(a) {
            var b = this.inputGroup,
                c =
                this[a + "DateBox"];
            F(this[a + "Input"], {
                left: b.translateX + c.x + "px",
                top: b.translateY + "px",
                width: c.width - 2 + "px",
                height: c.height - 2 + "px",
                border: "2px solid silver"
            })
        },
        hideInput: function(a) {
            F(this[a + "Input"], {
                border: 0,
                width: "1px",
                height: "1px"
            });
            this.setInputValue(a)
        },
        drawInput: function(a) {
            var b = this,
                c = b.chart,
                d = c.renderer.style,
                e = c.renderer,
                f = c.options.rangeSelector,
                g = b.div,
                h = "min" === a,
                l, m, n = this.inputGroup;
            this[a + "Label"] = m = e.label(la.lang[h ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({
                padding: 2
            }).css(z(d,
                f.labelStyle)).add(n);
            n.offset += m.width + 5;
            this[a + "DateBox"] = e = e.label("", n.offset).attr({
                padding: 2,
                width: f.inputBoxWidth || 90,
                height: f.inputBoxHeight || 17,
                stroke: f.inputBoxBorderColor || "silver",
                "stroke-width": 1
            }).css(z({
                textAlign: "center",
                color: "#444"
            }, d, f.inputStyle)).on("click", function() {
                b.showInput(a);
                b[a + "Input"].focus()
            }).add(n);
            n.offset += e.width + (h ? 10 : 0);
            this[a + "Input"] = l = S("input", {
                name: a,
                className: "highcharts-range-selector",
                type: "text"
            }, M({
                position: "absolute",
                border: 0,
                width: "1px",
                height: "1px",
                padding: 0,
                textAlign: "center",
                fontSize: d.fontSize,
                fontFamily: d.fontFamily,
                left: "-9em",
                top: c.plotTop + "px"
            }, f.inputStyle), g);
            l.onfocus = function() {
                b.showInput(a)
            };
            l.onblur = function() {
                b.hideInput(a)
            };
            l.onchange = function() {
                var a = l.value,
                    d = (f.inputDateParser || wa.parse)(a),
                    e = c.xAxis[0],
                    g = e.dataMin,
                    m = e.dataMax;
                isNaN(d) && (d = a.split("-"), d = wa.UTC(G(d[0]), G(d[1]) - 1, G(d[2])));
                isNaN(d) || (la.global.useUTC || (d += 6E4 * (new wa).getTimezoneOffset()), h ? d > b.maxInput.HCTime ? d = J : d < g && (d = g) : d < b.minInput.HCTime ? d = J : d > m && (d =
                    m), d !== J && c.xAxis[0].setExtremes(h ? d : e.min, h ? e.max : d, J, J, {
                    trigger: "rangeSelectorInput"
                }))
            }
        },
        getPosition: function() {
            var a = this.chart,
                b = a.options.rangeSelector,
                a = A((b.buttonPosition || {}).y, a.plotTop - a.axisOffset[0] - b.height);
            return {
                buttonTop: a,
                inputTop: a - 10
            }
        },
        render: function(a, b) {
            var c = this,
                d = c.chart,
                e = d.renderer,
                f = d.container,
                g = d.options,
                h = g.exporting && g.navigation && g.navigation.buttonOptions,
                l = g.rangeSelector,
                m = c.buttons,
                g = la.lang,
                n = c.div,
                n = c.inputGroup,
                r = l.buttonTheme,
                k = l.buttonPosition || {},
                x = l.inputEnabled,
                p = r && r.states,
                D = d.plotLeft,
                C, t = this.getPosition(),
                N = c.group,
                B = c.rendered;
            B || (c.group = N = e.g("range-selector-buttons").add(), c.zoomText = e.text(g.rangeSelectorZoom, A(k.x, D), 15).css(l.labelStyle).add(N), C = A(k.x, D) + c.zoomText.getBBox().width + 5, v(c.buttonOptions, function(a, b) {
                m[b] = e.button(a.text, C, 0, function() {
                    c.clickButton(b);
                    c.isActive = !0
                }, r, p && p.hover, p && p.select, p && p.disabled).css({
                    textAlign: "center"
                }).add(N);
                C += m[b].width + A(l.buttonSpacing, 5);
                c.selected === b && m[b].setState(2)
            }), c.updateButtonStates(), !1 !== x && (c.div = n = S("div", null, {
                position: "relative",
                height: 0,
                zIndex: 1
            }), f.parentNode.insertBefore(n, f), c.inputGroup = n = e.g("input-group").add(), n.offset = 0, c.drawInput("min"), c.drawInput("max")));
            N[B ? "animate" : "attr"]({
                translateY: t.buttonTop
            });
            !1 !== x && (n.align(M({
                y: t.inputTop,
                width: n.offset,
                x: h && t.inputTop < (h.y || 0) + h.height - d.spacing[0] ? -40 : 0
            }, l.inputPosition), !0, d.spacingBox), q(x) || (d = N.getBBox(), n[n.translateX < d.x + d.width + 10 ? "hide" : "show"]()), c.setInputValue("min", a), c.setInputValue("max", b));
            c.rendered = !0
        },
        destroy: function() {
            var a = this.minInput,
                b = this.maxInput,
                c = this.chart,
                d = this.blurInputs,
                e;
            qa(c.container, "mousedown", d);
            qa(c, "resize", d);
            Ja(this.buttons);
            a && (a.onfocus = a.onblur = a.onchange = null);
            b && (b.onfocus = b.onblur = b.onchange = null);
            for (e in this) this[e] && "chart" !== e && (this[e].destroy ? this[e].destroy() : this[e].nodeType && Ka(this[e])), this[e] = null
        }
    };
    da.prototype.toFixedRange = function(a, b, c, d) {
        var e = this.chart && this.chart.fixedRange;
        a = A(c, this.translate(a, !0));
        b = A(d, this.translate(b, !0));
        c = e && (b -
            a) / e;.7 < c && 1.3 > c && (d ? a = b - e : b = a + e);
        isNaN(a) && (a = b = void 0);
        return {
            min: a,
            max: b
        }
    };
    da.prototype.minFromRange = function() {
        var a = this.range,
            b = {
                month: "Month",
                year: "FullYear"
            }[a.type],
            c, d = this.max,
            e, f, g = function(a, c) {
                var d = new wa(a);
                d["set" + b](d["get" + b]() + c);
                return d.getTime() - a
            };
        "number" === typeof a ? (c = this.max - a, f = a) : c = d + g(d, -a.count);
        e = A(this.dataMin, Number.MIN_VALUE);
        isNaN(c) && (c = e);
        c <= e && (c = e, void 0 === f && (f = g(c, a.count)), this.newMax = V(c + f, this.dataMax));
        isNaN(d) && (c = void 0);
        return c
    };
    ia(Ia.prototype, "init",
        function(a, b, c) {
            Y(this, "init", function() {
                this.options.rangeSelector.enabled && (this.rangeSelector = new Gb(this))
            });
            a.call(this, b, c)
        });
    T.RangeSelector = Gb;
    Ia.prototype.callbacks.push(function(a) {
        function b() {
            f = a.xAxis[0].getExtremes();
            g.render(f.min, f.max)
        }

        function c() {
            f = a.xAxis[0].getExtremes();
            isNaN(f.min) || h.render(f.min, f.max)
        }

        function d(a) {
            "navigator-drag" !== a.triggerOp && g.render(a.min, a.max)
        }

        function e(a) {
            h.render(a.min, a.max)
        }
        var f, g = a.scroller,
            h = a.rangeSelector;
        g && (Y(a.xAxis[0], "afterSetExtremes",
            d), ia(a, "drawChartBox", function(a) {
            var c = this.isDirtyBox;
            a.call(this);
            c && b()
        }), b());
        h && (Y(a.xAxis[0], "afterSetExtremes", e), Y(a, "resize", c), c());
        Y(a, "destroy", function() {
            g && qa(a.xAxis[0], "afterSetExtremes", d);
            h && (qa(a, "resize", c), qa(a.xAxis[0], "afterSetExtremes", e))
        })
    });
    T.StockChart = T.stockChart = function(a, b, c) {
        var d = ea(a) || a.nodeName,
            e = arguments[d ? 1 : 0],
            f = e.series,
            g, h = A(e.navigator && e.navigator.enabled, !0) ? {
                startOnTick: !1,
                endOnTick: !1
            } : null,
            l = {
                marker: {
                    enabled: !1,
                    radius: 2
                }
            },
            m = {
                shadow: !1,
                borderWidth: 0
            };
        e.xAxis = Aa(pa(e.xAxis || {}), function(a) {
            return z({
                minPadding: 0,
                maxPadding: 0,
                ordinal: !0,
                title: {
                    text: null
                },
                labels: {
                    overflow: "justify"
                },
                showLastLabel: !0
            }, a, {
                type: "datetime",
                categories: null
            }, h)
        });
        e.yAxis = Aa(pa(e.yAxis || {}), function(a) {
            g = A(a.opposite, !0);
            return z({
                labels: {
                    y: -2
                },
                opposite: g,
                showLastLabel: !1,
                title: {
                    text: null
                }
            }, a)
        });
        e.series = null;
        e = z({
            chart: {
                panning: !0,
                pinchType: "x"
            },
            navigator: {
                enabled: !0
            },
            scrollbar: {
                enabled: !0
            },
            rangeSelector: {
                enabled: !0
            },
            title: {
                text: null,
                style: {
                    fontSize: "16px"
                }
            },
            tooltip: {
                shared: !0,
                crosshairs: !0
            },
            legend: {
                enabled: !1
            },
            plotOptions: {
                line: l,
                spline: l,
                area: l,
                areaspline: l,
                arearange: l,
                areasplinerange: l,
                column: m,
                columnrange: m,
                candlestick: m,
                ohlc: m
            }
        }, e, {
            _stock: !0,
            chart: {
                inverted: !1
            }
        });
        e.series = f;
        return d ? new Ia(a, e, c) : new Ia(e, b)
    };
    ia(ab.prototype, "init", function(a, b, c) {
        var d = c.chart.pinchType || "";
        a.call(this, b, c);
        this.pinchX = this.pinchHor = -1 !== d.indexOf("x");
        this.pinchY = this.pinchVert = -1 !== d.indexOf("y");
        this.hasZoom = this.hasZoom || this.pinchHor || this.pinchVert
    });
    ia(da.prototype, "autoLabelAlign",
        function(a) {
            var b = this.chart,
                c = this.options,
                b = b._labelPanes = b._labelPanes || {},
                d = this.options.labels;
            return this.chart.options._stock && "yAxis" === this.coll && (c = c.top + "," + c.height, !b[c] && d.enabled) ? (15 === d.x && (d.x = 0), void 0 === d.align && (d.align = "right"), b[c] = 1, "right") : a.call(this, [].slice.call(arguments, 1))
        });
    ia(da.prototype, "getPlotLinePath", function(a, b, c, d, e, f) {
        var g = this,
            h = this.isLinked && !this.series ? this.linkedParent.series : this.series,
            l = g.chart,
            m = l.renderer,
            n = g.left,
            r = g.top,
            k, x, p, D, C = [],
            t = [],
            N,
            B;
        if ("colorAxis" === g.coll) return a.apply(this, [].slice.call(arguments, 1));
        t = g.isXAxis ? q(g.options.yAxis) ? [l.yAxis[g.options.yAxis]] : Aa(h, function(a) {
            return a.yAxis
        }) : q(g.options.xAxis) ? [l.xAxis[g.options.xAxis]] : Aa(h, function(a) {
            return a.xAxis
        });
        v(g.isXAxis ? l.yAxis : l.xAxis, function(a) {
            if (q(a.options.id) ? -1 === a.options.id.indexOf("navigator") : 1) {
                var b = a.isXAxis ? "yAxis" : "xAxis",
                    b = q(a.options[b]) ? l[b][a.options[b]] : l[b][0];
                g === b && t.push(a)
            }
        });
        N = t.length ? [] : [g.isXAxis ? l.yAxis[0] : l.xAxis[0]];
        v(t, function(a) {
            -1 ===
                Da(a, N) && N.push(a)
        });
        B = A(f, g.translate(b, null, null, d));
        isNaN(B) || (g.horiz ? v(N, function(a) {
            var b;
            x = a.pos;
            D = x + a.len;
            k = p = L(B + g.transB);
            if (k < n || k > n + g.width) e ? k = p = V(K(n, k), n + g.width) : b = !0;
            b || C.push("M", k, x, "L", p, D)
        }) : v(N, function(a) {
            var b;
            k = a.pos;
            p = k + a.len;
            x = D = L(r + g.height - B);
            if (x < r || x > r + g.height) e ? x = D = V(K(r, x), g.top + g.height) : b = !0;
            b || C.push("M", k, x, "L", p, D)
        }));
        return 0 < C.length ? m.crispPolyLine(C, c || 1) : null
    });
    da.prototype.getPlotBandPath = function(a, b) {
        var c = this.getPlotLinePath(b, null, null, !0),
            d = this.getPlotLinePath(a,
                null, null, !0),
            e = [],
            f;
        if (d && c && d.toString() !== c.toString())
            for (f = 0; f < d.length; f += 6) e.push("M", d[f + 1], d[f + 2], "L", d[f + 4], d[f + 5], c[f + 4], c[f + 5], c[f + 1], c[f + 2]);
        else e = null;
        return e
    };
    Pa.prototype.crispPolyLine = function(a, b) {
        var c;
        for (c = 0; c < a.length; c += 6) a[c + 1] === a[c + 4] && (a[c + 1] = a[c + 4] = L(a[c + 1]) - b % 2 / 2), a[c + 2] === a[c + 5] && (a[c + 2] = a[c + 5] = L(a[c + 2]) + b % 2 / 2);
        return a
    };
    Pa === T.VMLRenderer && (VMLRenderer.prototype.crispPolyLine = Pa.prototype.crispPolyLine);
    ia(da.prototype, "hideCrosshair", function(a, b) {
        a.call(this, b);
        this.crossLabel && (this.crossLabel = this.crossLabel.hide())
    });
    ia(da.prototype, "drawCrosshair", function(a, b, c) {
        var d, e;
        a.call(this, b, c);
        if (q(this.crosshair.label) && this.crosshair.label.enabled) {
            e = this.chart;
            var f = this.options.crosshair.label;
            d = this.horiz;
            var g = this.opposite,
                h = this.left,
                l = this.top;
            a = this.crossLabel;
            var m, n = f.format,
                r = "",
                k = "inside" === this.options.tickPosition,
                x = !1 !== this.crosshair.snap;
            m = d ? "center" : g ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center";
            a ||
                (a = this.crossLabel = e.renderer.label(null, null, null, f.shape || "callout").attr({
                    align: f.align || m,
                    zIndex: 12,
                    fill: f.backgroundColor || this.series[0] && this.series[0].color || "gray",
                    padding: A(f.padding, 8),
                    stroke: f.borderColor || "",
                    "stroke-width": f.borderWidth || 0,
                    r: A(f.borderRadius, 3)
                }).css(M({
                    color: "white",
                    fontWeight: "normal",
                    fontSize: "11px",
                    textAlign: "center"
                }, f.style)).add());
            d ? (m = x ? c.plotX + h : b.chartX, l += g ? 0 : this.height) : (m = g ? this.width + h : 0, l = x ? c.plotY + l : b.chartY);
            n || f.formatter || (this.isDatetimeAxis && (r =
                "%b %d, %Y"), n = "{value" + (r ? ":" + r : "") + "}");
            b = x ? c[this.isXAxis ? "x" : "y"] : this.toValue(d ? b.chartX : b.chartY);
            a.attr({
                text: n ? R(n, {
                    value: b
                }) : f.formatter.call(this, b),
                anchorX: d ? m : this.opposite ? 0 : e.chartWidth,
                anchorY: d ? this.opposite ? e.chartHeight : 0 : l,
                x: m,
                y: l,
                visibility: "visible"
            });
            b = a.getBBox();
            if (d) {
                if (k && !g || !k && g) l = a.y - b.height
            } else l = a.y - b.height / 2;
            d ? (d = h - b.x, e = h + this.width - b.x) : (d = "left" === this.labelAlign ? h : 0, e = "right" === this.labelAlign ? h + this.width : e.chartWidth);
            a.translateX < d && (m += d - a.translateX);
            a.translateX +
                b.width >= e && (m -= a.translateX + b.width - e);
            a.attr({
                x: m,
                y: l,
                visibility: "visible"
            })
        }
    });
    var qc = xa.init,
        rc = xa.processData,
        sc = Ea.prototype.tooltipFormatter;
    xa.init = function() {
        qc.apply(this, arguments);
        this.setCompare(this.options.compare)
    };
    xa.setCompare = function(a) {
        this.modifyValue = "value" === a || "percent" === a ? function(b, c) {
            var d = this.compareValue;
            b !== J && (b = "value" === a ? b - d : b = b / d * 100 - 100, c && (c.change = b));
            return b
        } : null;
        this.chart.hasRendered && (this.isDirty = !0)
    };
    xa.processData = function() {
        var a, b = -1,
            c, d, e, f;
        rc.apply(this,
            arguments);
        if (this.xAxis && this.processedYData)
            for (c = this.processedXData, d = this.processedYData, e = d.length, this.pointArrayMap && (b = Da(this.pointValKey || "y", this.pointArrayMap)), a = 0; a < e; a++)
                if (f = -1 < b ? d[a][b] : d[a], "number" === typeof f && c[a] >= this.xAxis.min && 0 !== f) {
                    this.compareValue = f;
                    break
                }
    };
    ia(xa, "getExtremes", function(a) {
        var b;
        a.apply(this, [].slice.call(arguments, 1));
        this.modifyValue && (b = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = ba(b), this.dataMax = Ga(b))
    });
    da.prototype.setCompare =
        function(a, b) {
            this.isXAxis || (v(this.series, function(b) {
                b.setCompare(a)
            }), A(b, !0) && this.chart.redraw())
        };
    Ea.prototype.tooltipFormatter = function(a) {
        a = a.replace("{point.change}", (0 < this.change ? "+" : "") + T.numberFormat(this.change, A(this.series.tooltipOptions.changeDecimals, 2)));
        return sc.apply(this, [a])
    };
    ia(ca.prototype, "render", function(a) {
        this.chart.options._stock && this.xAxis && (!this.clipBox && this.animate ? (this.clipBox = z(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) :
            this.chart[this.sharedClipKey] && (Wa(this.chart[this.sharedClipKey]), this.chart[this.sharedClipKey].attr({
                width: this.xAxis.len,
                height: this.yAxis.len
            })));
        a.call(this)
    });
    M(Ub.prototype, {
        init: function(a, b, c) {
            var d = this,
                e = d.defaultOptions;
            d.chart = b;
            d.options = a = z(e, b.angular ? {
                background: {}
            } : void 0, a);
            (a = a.background) && v([].concat(pa(a)).reverse(), function(a) {
                var b = a.backgroundColor,
                    e = c.userOptions;
                a = z(d.defaultBackgroundOptions, a);
                b && (a.backgroundColor = b);
                a.color = a.backgroundColor;
                c.options.plotBands.unshift(a);
                e.plotBands = e.plotBands || [];
                e.plotBands !== c.options.plotBands && e.plotBands.unshift(a)
            })
        },
        defaultOptions: {
            center: ["50%", "50%"],
            size: "85%",
            startAngle: 0
        },
        defaultBackgroundOptions: {
            shape: "circle",
            borderWidth: 1,
            borderColor: "silver",
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "#FFF"],
                    [1, "#DDD"]
                ]
            },
            from: -Number.MAX_VALUE,
            innerRadius: 0,
            to: Number.MAX_VALUE,
            outerRadius: "105%"
        }
    });
    var pb = da.prototype,
        Pb = sa.prototype,
        tc = {
            getOffset: na,
            redraw: function() {
                this.isDirty = !1
            },
            render: function() {
                this.isDirty = !1
            },
            setScale: na,
            setCategories: na,
            setTitle: na
        },
        dc = {
            isRadial: !0,
            defaultRadialGaugeOptions: {
                labels: {
                    align: "center",
                    x: 0,
                    y: null
                },
                minorGridLineWidth: 0,
                minorTickInterval: "auto",
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickWidth: 1,
                tickLength: 10,
                tickPosition: "inside",
                tickWidth: 2,
                title: {
                    rotation: 0
                },
                zIndex: 2
            },
            defaultRadialXOptions: {
                gridLineWidth: 1,
                labels: {
                    align: null,
                    distance: 15,
                    x: 0,
                    y: null
                },
                maxPadding: 0,
                minPadding: 0,
                showLastLabel: !1,
                tickLength: 0
            },
            defaultRadialYOptions: {
                gridLineInterpolation: "circle",
                labels: {
                    align: "right",
                    x: -3,
                    y: -2
                },
                showLastLabel: !1,
                title: {
                    x: 4,
                    text: null,
                    rotation: 90
                }
            },
            setOptions: function(a) {
                a = this.options = z(this.defaultOptions, this.defaultRadialOptions, a);
                a.plotBands || (a.plotBands = [])
            },
            getOffset: function() {
                pb.getOffset.call(this);
                this.chart.axisOffset[this.side] = 0;
                this.center = this.pane.center = Xb.getCenter.call(this.pane)
            },
            getLinePath: function(a, b) {
                var c = this.center;
                b = A(b, c[2] / 2 - this.offset);
                return this.chart.renderer.symbols.arc(this.left + c[0], this.top + c[1], b, b, {
                    start: this.startAngleRad,
                    end: this.endAngleRad,
                    open: !0,
                    innerR: 0
                })
            },
            setAxisTranslation: function() {
                pb.setAxisTranslation.call(this);
                this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0)
            },
            beforeSetTickPositions: function() {
                this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
            },
            setAxisSize: function() {
                pb.setAxisSize.call(this);
                this.isRadial &&
                    (this.center = this.pane.center = T.CenteredSeriesMixin.getCenter.call(this.pane), this.isCircular && (this.sector = this.endAngleRad - this.startAngleRad), this.len = this.width = this.height = this.center[2] * A(this.sector, 1) / 2)
            },
            getPosition: function(a, b) {
                return this.postTranslate(this.isCircular ? this.translate(a) : 0, A(this.isCircular ? b : this.translate(a), this.center[2] / 2) - this.offset)
            },
            postTranslate: function(a, b) {
                var c = this.chart,
                    d = this.center;
                a = this.startAngleRad + a;
                return {
                    x: c.plotLeft + d[0] + Math.cos(a) * b,
                    y: c.plotTop +
                        d[1] + Math.sin(a) * b
                }
            },
            getPlotBandPath: function(a, b, c) {
                var d = this.center,
                    e = this.startAngleRad,
                    f = d[2] / 2,
                    g = [A(c.outerRadius, "100%"), c.innerRadius, A(c.thickness, 10)],
                    h = /%$/,
                    l, m = this.isCircular;
                "polygon" === this.options.gridLineInterpolation ? d = this.getPlotLinePath(a).concat(this.getPlotLinePath(b, !0)) : (a = Math.max(a, this.min), b = Math.min(b, this.max), m || (g[0] = this.translate(a), g[1] = this.translate(b)), g = Aa(g, function(a) {
                    h.test(a) && (a = G(a, 10) * f / 100);
                    return a
                }), "circle" !== c.shape && m ? (a = e + this.translate(a), b = e +
                    this.translate(b)) : (a = -Math.PI / 2, b = 1.5 * Math.PI, l = !0), d = this.chart.renderer.symbols.arc(this.left + d[0], this.top + d[1], g[0], g[0], {
                    start: Math.min(a, b),
                    end: Math.max(a, b),
                    innerR: A(g[1], g[0] - g[2]),
                    open: l
                }));
                return d
            },
            getPlotLinePath: function(a, b) {
                var c = this,
                    d = c.center,
                    e = c.chart,
                    f = c.getPosition(a),
                    g, h, l;
                c.isCircular ? l = ["M", d[0] + e.plotLeft, d[1] + e.plotTop, "L", f.x, f.y] : "circle" === c.options.gridLineInterpolation ? (a = c.translate(a)) && (l = c.getLinePath(0, a)) : (v(e.xAxis, function(a) {
                        a.pane === c.pane && (g = a)
                    }), l = [], a =
                    c.translate(a), d = g.tickPositions, g.autoConnect && (d = d.concat([d[0]])), b && (d = [].concat(d).reverse()), v(d, function(b, c) {
                        h = g.getPosition(b, a);
                        l.push(c ? "L" : "M", h.x, h.y)
                    }));
                return l
            },
            getTitlePosition: function() {
                var a = this.center,
                    b = this.chart,
                    c = this.options.title;
                return {
                    x: b.plotLeft + a[0] + (c.x || 0),
                    y: b.plotTop + a[1] - {
                        high: .5,
                        middle: .25,
                        low: 0
                    }[c.align] * a[2] + (c.y || 0)
                }
            }
        };
    ia(pb, "init", function(a, b, c) {
        var d = b.angular,
            e = b.polar,
            f = c.isX,
            g = d && f,
            h, l;
        l = b.options;
        var m = c.pane || 0;
        if (d) {
            if (M(this, g ? tc : dc), h = !f) this.defaultRadialOptions =
                this.defaultRadialGaugeOptions
        } else e && (M(this, dc), this.defaultRadialOptions = (h = f) ? this.defaultRadialXOptions : z(this.defaultYAxisOptions, this.defaultRadialYOptions));
        a.call(this, b, c);
        g || !d && !e || (a = this.options, b.panes || (b.panes = []), this.pane = m = b.panes[m] = b.panes[m] || new Ub(pa(l.pane)[m], b, this), m = m.options, b.inverted = !1, l.chart.zoomType = null, this.startAngleRad = b = (m.startAngle - 90) * Math.PI / 180, this.endAngleRad = l = (A(m.endAngle, m.startAngle + 360) - 90) * Math.PI / 180, this.offset = a.offset || 0, (this.isCircular =
            h) && c.max === J && l - b === 2 * Math.PI && (this.autoConnect = !0))
    });
    ia(pb, "autoLabelAlign", function(a) {
        if (!this.isRadial) return a.apply(this, [].slice.call(arguments, 1))
    });
    ia(Pb, "getPosition", function(a, b, c, d, e) {
        var f = this.axis;
        return f.getPosition ? f.getPosition(c) : a.call(this, b, c, d, e)
    });
    ia(Pb, "getLabelPosition", function(a, b, c, d, e, f, g, h, l) {
        var m = this.axis,
            n = f.y,
            r = 20,
            k = f.align,
            x = (m.translate(this.pos) + m.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360;
        m.isRadial ? (a = m.getPosition(this.pos, m.center[2] / 2 + A(f.distance, -25)),
            "auto" === f.rotation ? d.attr({
                rotation: x
            }) : null === n && (n = m.chart.renderer.fontMetrics(d.styles.fontSize).b - d.getBBox().height / 2), null === k && (m.isCircular ? (this.label.getBBox().width > m.len * m.tickInterval / (m.max - m.min) && (r = 0), k = x > r && x < 180 - r ? "left" : x > 180 + r && x < 360 - r ? "right" : "center") : k = "center", d.attr({
                align: k
            })), a.x += f.x, a.y += n) : a = a.call(this, b, c, d, e, f, g, h, l);
        return a
    });
    ia(Pb, "getMarkPath", function(a, b, c, d, e, f, g) {
        var h = this.axis;
        h.isRadial ? (a = h.getPosition(this.pos, h.center[2] / 2 + d), b = ["M", b, c, "L", a.x, a.y]) :
            b = a.call(this, b, c, d, e, f, g);
        return b
    });
    aa.arearange = z(aa.area, {
        lineWidth: 1,
        marker: null,
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        trackByArea: !0,
        dataLabels: {
            align: null,
            verticalAlign: null,
            xLow: 0,
            xHigh: 0,
            yLow: 0,
            yHigh: 0
        },
        states: {
            hover: {
                halo: !1
            }
        }
    });
    Q.arearange = C(Q.area, {
        type: "arearange",
        pointArrayMap: ["low", "high"],
        dataLabelCollections: ["dataLabel", "dataLabelUpper"],
        toYData: function(a) {
            return [a.low,
                a.high
            ]
        },
        pointValKey: "low",
        deferTranslatePolar: !0,
        highToXY: function(a) {
            var b = this.chart,
                c = this.xAxis.postTranslate(a.rectPlotX, this.yAxis.len - a.plotHigh);
            a.plotHighX = c.x - b.plotLeft;
            a.plotHigh = c.y - b.plotTop
        },
        translate: function() {
            var a = this,
                b = a.yAxis;
            Q.area.prototype.translate.apply(a);
            v(a.points, function(a) {
                var d = a.low,
                    e = a.high,
                    f = a.plotY;
                null === e || null === d ? a.isNull = !0 : (a.plotLow = f, a.plotHigh = b.translate(e, 0, 1, 0, 1))
            });
            this.chart.polar && v(this.points, function(b) {
                a.highToXY(b)
            })
        },
        getGraphPath: function() {
            var a =
                this.points,
                b = [],
                c = [],
                d = a.length,
                e = ca.prototype.getGraphPath,
                f, g, h;
            h = this.options;
            for (var l = h.step, d = a.length; d--;) f = a[d], f.isNull || a[d + 1] && !a[d + 1].isNull || c.push({
                plotX: f.plotX,
                plotY: f.plotLow
            }), g = {
                plotX: f.plotX,
                plotY: f.plotHigh,
                isNull: f.isNull
            }, c.push(g), b.push(g), f.isNull || a[d - 1] && !a[d - 1].isNull || c.push({
                plotX: f.plotX,
                plotY: f.plotLow
            });
            a = e.call(this, a);
            l && (!0 === l && (l = "left"), h.step = {
                left: "right",
                center: "center",
                right: "left"
            }[l]);
            b = e.call(this, b);
            c = e.call(this, c);
            h.step = l;
            h = [].concat(a, b);
            this.chart.polar ||
                "M" !== c[0] || (c[0] = "L");
            this.areaPath = this.areaPath.concat(a, c);
            return h
        },
        drawDataLabels: function() {
            var a = this.data,
                b = a.length,
                c, d = [],
                e = ca.prototype,
                f = this.options.dataLabels,
                g = f.align,
                h = f.verticalAlign,
                l = f.inside,
                m, n, k = this.chart.inverted;
            if (f.enabled || this._hasPointLabels) {
                for (c = b; c--;)
                    if (m = a[c]) n = l ? m.plotHigh < m.plotLow : m.plotHigh > m.plotLow, m.y = m.high, m._plotY = m.plotY, m.plotY = m.plotHigh, d[c] = m.dataLabel, m.dataLabel = m.dataLabelUpper, m.below = n, k ? g || (f.align = n ? "right" : "left") : h || (f.verticalAlign = n ?
                        "top" : "bottom"), f.x = f.xHigh, f.y = f.yHigh;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments);
                for (c = b; c--;)
                    if (m = a[c]) n = l ? m.plotHigh < m.plotLow : m.plotHigh > m.plotLow, m.dataLabelUpper = m.dataLabel, m.dataLabel = d[c], m.y = m.low, m.plotY = m._plotY, m.below = !n, k ? g || (f.align = n ? "left" : "right") : h || (f.verticalAlign = n ? "bottom" : "top"), f.x = f.xLow, f.y = f.yLow;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments)
            }
            f.align = g;
            f.verticalAlign = h
        },
        alignDataLabel: function() {
            Q.column.prototype.alignDataLabel.apply(this, arguments)
        },
        setStackedPoints: na,
        getSymbol: na,
        drawPoints: na
    });
    aa.areasplinerange = z(aa.arearange);
    Q.areasplinerange = C(Q.arearange, {
        type: "areasplinerange",
        getPointSpline: Q.spline.prototype.getPointSpline
    });
    (function() {
        var a = Q.column.prototype;
        aa.columnrange = z(aa.column, aa.arearange, {
            lineWidth: 1,
            pointRange: null
        });
        Q.columnrange = C(Q.arearange, {
            type: "columnrange",
            translate: function() {
                var b = this,
                    c = b.yAxis,
                    d = b.xAxis,
                    e = b.chart,
                    f;
                a.translate.apply(b);
                v(b.points, function(a) {
                    var h = a.shapeArgs,
                        l = b.options.minPointLength,
                        m,
                        n;
                    a.plotHigh = f = c.translate(a.high, 0, 1, 0, 1);
                    a.plotLow = a.plotY;
                    n = f;
                    m = a.plotY - f;
                    Math.abs(m) < l ? (l -= m, m += l, n -= l / 2) : 0 > m && (m *= -1, n -= m);
                    h.height = m;
                    h.y = n;
                    a.tooltipPos = e.inverted ? [c.len + c.pos - e.plotLeft - n - m / 2, d.len + d.pos - e.plotTop - h.x - h.width / 2, m] : [d.left - e.plotLeft + h.x + h.width / 2, c.pos - e.plotTop + n + m / 2, m]
                })
            },
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            drawGraph: na,
            crispCol: a.crispCol,
            pointAttrToOptions: a.pointAttrToOptions,
            drawPoints: a.drawPoints,
            drawTracker: a.drawTracker,
            animate: a.animate,
            getColumnMetrics: a.getColumnMetrics
        })
    })();
    aa.gauge = z(aa.line, {
        dataLabels: {
            enabled: !0,
            defer: !1,
            y: 15,
            borderWidth: 1,
            borderColor: "silver",
            borderRadius: 3,
            crop: !1,
            verticalAlign: "top",
            zIndex: 2
        },
        dial: {},
        pivot: {},
        tooltip: {
            headerFormat: ""
        },
        showInLegend: !1
    });
    var uc = {
        type: "gauge",
        pointClass: C(Ea, {
            setState: function(a) {
                this.state = a
            }
        }),
        angular: !0,
        drawGraph: na,
        fixedBox: !0,
        forceDL: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        translate: function() {
            var a = this.yAxis,
                b = this.options,
                c = a.center;
            this.generatePoints();
            v(this.points, function(d) {
                var e = z(b.dial, d.dial),
                    f = G(A(e.radius, 80)) * c[2] / 200,
                    g = G(A(e.baseLength, 70)) * f / 100,
                    h = G(A(e.rearLength, 10)) * f / 100,
                    l = e.baseWidth || 3,
                    m = e.topWidth || 1,
                    n = b.overshoot,
                    k = a.startAngleRad + a.translate(d.y, null, null, null, !0);
                n && "number" === typeof n ? (n = n / 180 * Math.PI, k = Math.max(a.startAngleRad - n, Math.min(a.endAngleRad + n, k))) : !1 === b.wrap && (k = Math.max(a.startAngleRad, Math.min(a.endAngleRad, k)));
                k = 180 * k / Math.PI;
                d.shapeType = "path";
                d.shapeArgs = {
                    d: e.path || ["M", -h, -l / 2, "L", g, -l / 2, f, -m / 2, f, m / 2, g, l / 2, -h, l / 2, "z"],
                    translateX: c[0],
                    translateY: c[1],
                    rotation: k
                };
                d.plotX = c[0];
                d.plotY = c[1]
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.yAxis.center,
                c = a.pivot,
                d = a.options,
                e = d.pivot,
                f = a.chart.renderer;
            v(a.points, function(b) {
                var c = b.graphic,
                    e = b.shapeArgs,
                    m = e.d,
                    n = z(d.dial, b.dial);
                c ? (c.animate(e), e.d = m) : b.graphic = f[b.shapeType](e).attr({
                    stroke: n.borderColor || "none",
                    "stroke-width": n.borderWidth || 0,
                    fill: n.backgroundColor || "black",
                    rotation: e.rotation,
                    zIndex: 1
                }).add(a.group)
            });
            c ? c.animate({
                translateX: b[0],
                translateY: b[1]
            }) : a.pivot = f.circle(0, 0, A(e.radius, 5)).attr({
                "stroke-width": e.borderWidth ||
                    0,
                stroke: e.borderColor || "silver",
                fill: e.backgroundColor || "black",
                zIndex: 2
            }).translate(b[0], b[1]).add(a.group)
        },
        animate: function(a) {
            var b = this;
            a || (v(b.points, function(a) {
                var d = a.graphic;
                d && (d.attr({
                    rotation: 180 * b.yAxis.startAngleRad / Math.PI
                }), d.animate({
                    rotation: a.shapeArgs.rotation
                }, b.options.animation))
            }), b.animate = null)
        },
        render: function() {
            this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
            ca.prototype.render.call(this);
            this.group.clip(this.chart.clipRect)
        },
        setData: function(a, b) {
            ca.prototype.setData.call(this, a, !1);
            this.processData();
            this.generatePoints();
            A(b, !0) && this.chart.redraw()
        },
        drawTracker: bb && bb.drawTrackerPoint
    };
    Q.gauge = C(Q.line, uc);
    aa.boxplot = z(aa.column, {
        fillColor: "#FFFFFF",
        lineWidth: 1,
        medianWidth: 2,
        states: {
            hover: {
                brightness: -.3
            }
        },
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
        },
        whiskerLength: "50%",
        whiskerWidth: 2
    });
    Q.boxplot = C(Q.column, {
        type: "boxplot",
        pointArrayMap: ["low", "q1", "median", "q3", "high"],
        toYData: function(a) {
            return [a.low, a.q1, a.median, a.q3, a.high]
        },
        pointValKey: "high",
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        drawDataLabels: na,
        translate: function() {
            var a = this.yAxis,
                b = this.pointArrayMap;
            Q.column.prototype.translate.apply(this);
            v(this.points, function(c) {
                v(b, function(b) {
                    null !== c[b] && (c[b + "Plot"] = a.translate(c[b], 0, 1, 0, 1))
                })
            })
        },
        drawPoints: function() {
            var a =
                this,
                b = a.options,
                c = a.chart.renderer,
                d, e, f, g, h, l, m, n, k, x, w, p, D, q, C, t, N, B, y, R, P, W, z = !1 !== a.doQuartiles,
                F, I = a.options.whiskerLength;
            v(a.points, function(v) {
                k = v.graphic;
                P = v.shapeArgs;
                w = {};
                q = {};
                t = {};
                W = v.color || a.color;
                v.plotY !== J && (d = v.pointAttr[v.selected ? "selected" : ""], N = P.width, B = fa(P.x), y = B + N, R = L(N / 2), e = fa(z ? v.q1Plot : v.lowPlot), f = fa(z ? v.q3Plot : v.lowPlot), g = fa(v.highPlot), h = fa(v.lowPlot), w.stroke = v.stemColor || b.stemColor || W, w["stroke-width"] = A(v.stemWidth, b.stemWidth, b.lineWidth), w.dashstyle = v.stemDashStyle ||
                    b.stemDashStyle, q.stroke = v.whiskerColor || b.whiskerColor || W, q["stroke-width"] = A(v.whiskerWidth, b.whiskerWidth, b.lineWidth), t.stroke = v.medianColor || b.medianColor || W, t["stroke-width"] = A(v.medianWidth, b.medianWidth, b.lineWidth), m = w["stroke-width"] % 2 / 2, n = B + R + m, x = ["M", n, f, "L", n, g, "M", n, e, "L", n, h], z && (m = d["stroke-width"] % 2 / 2, n = fa(n) + m, e = fa(e) + m, f = fa(f) + m, B += m, y += m, p = ["M", B, f, "L", B, e, "L", y, e, "L", y, f, "L", B, f, "z"]), I && (m = q["stroke-width"] % 2 / 2, g += m, h += m, F = /%$/.test(I) ? R * parseFloat(I) / 100 : I / 2, D = ["M", n - F, g, "L",
                        n + F, g, "M", n - F, h, "L", n + F, h
                    ]), m = t["stroke-width"] % 2 / 2, l = L(v.medianPlot) + m, C = ["M", B, l, "L", y, l], k ? (v.stem.animate({
                        d: x
                    }), I && v.whiskers.animate({
                        d: D
                    }), z && v.box.animate({
                        d: p
                    }), v.medianShape.animate({
                        d: C
                    })) : (v.graphic = k = c.g().add(a.group), v.stem = c.path(x).attr(w).add(k), I && (v.whiskers = c.path(D).attr(q).add(k)), z && (v.box = c.path(p).attr(d).add(k)), v.medianShape = c.path(C).attr(t).add(k)))
            })
        },
        setStackedPoints: na
    });
    aa.errorbar = z(aa.boxplot, {
        color: "#000000",
        grouping: !1,
        linkedTo: ":previous",
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        whiskerWidth: null
    });
    Q.errorbar = C(Q.boxplot, {
        type: "errorbar",
        pointArrayMap: ["low", "high"],
        toYData: function(a) {
            return [a.low, a.high]
        },
        pointValKey: "high",
        doQuartiles: !1,
        drawDataLabels: Q.arearange ? Q.arearange.prototype.drawDataLabels : na,
        getColumnMetrics: function() {
            return this.linkedParent && this.linkedParent.columnMetrics || Q.column.prototype.getColumnMetrics.call(this)
        }
    });
    aa.waterfall = z(aa.column, {
        lineWidth: 1,
        lineColor: "#333",
        dashStyle: "dot",
        borderColor: "#333",
        dataLabels: {
            inside: !0
        },
        states: {
            hover: {
                lineWidthPlus: 0
            }
        }
    });
    Q.waterfall = C(Q.column, {
        type: "waterfall",
        upColorProp: "fill",
        pointValKey: "y",
        translate: function() {
            var a = this.options,
                b = this.yAxis,
                c, d, e, f, g, h, l, m, n, k = A(a.minPointLength, 5),
                x = a.threshold,
                v = a.stacking;
            Q.column.prototype.translate.apply(this);
            this.minPointLengthOffset = 0;
            l = m = x;
            d = this.points;
            c = 0;
            for (a = d.length; c < a; c++) e = d[c], h = this.processedYData[c], f = e.shapeArgs, n = (g = v && b.stacks[(this.negStacks && h < x ? "-" : "") + this.stackKey]) ? g[e.x].points[this.index + "," + c] : [0, h], e.isSum ? e.y = h : e.isIntermediateSum && (e.y = h -
                    m), g = K(l, l + e.y) + n[0], f.y = b.translate(g, 0, 1), e.isSum ? (f.y = b.translate(n[1], 0, 1), f.height = Math.min(b.translate(n[0], 0, 1), b.len) - f.y + this.minPointLengthOffset) : e.isIntermediateSum ? (f.y = b.translate(n[1], 0, 1), f.height = Math.min(b.translate(m, 0, 1), b.len) - f.y + this.minPointLengthOffset, m = n[1]) : (0 !== l && (f.height = 0 < h ? b.translate(l, 0, 1) - f.y : b.translate(l, 0, 1) - b.translate(l - h, 0, 1)), l += h), 0 > f.height && (f.y += f.height, f.height *= -1), e.plotY = f.y = L(f.y) - this.borderWidth % 2 / 2, f.height = K(L(f.height), .001), e.yBottom = f.y +
                f.height, f.height <= k && (f.height = k, this.minPointLengthOffset += k), f.y -= this.minPointLengthOffset, f = e.plotY + (e.negative ? f.height : 0) - this.minPointLengthOffset, this.chart.inverted ? e.tooltipPos[0] = b.len - f : e.tooltipPos[1] = f
        },
        processData: function(a) {
            var b = this.yData,
                c = this.options.data,
                d, e = b.length,
                f, g, h, l, m, n;
            g = f = h = l = this.options.threshold || 0;
            for (n = 0; n < e; n++) m = b[n], d = c && c[n] ? c[n] : {}, "sum" === m || d.isSum ? b[n] = g : "intermediateSum" === m || d.isIntermediateSum ? b[n] = f : (g += m, f += m), h = Math.min(g, h), l = Math.max(g, l);
            ca.prototype.processData.call(this,
                a);
            this.dataMin = h;
            this.dataMax = l
        },
        toYData: function(a) {
            return a.isSum ? 0 === a.x ? null : "sum" : a.isIntermediateSum ? 0 === a.x ? null : "intermediateSum" : a.y
        },
        getAttribs: function() {
            Q.column.prototype.getAttribs.apply(this, arguments);
            var a = this,
                b = a.options,
                c = b.states,
                d = b.upColor || a.color,
                b = T.Color(d).brighten(.1).get(),
                e = z(a.pointAttr),
                f = a.upColorProp;
            e[""][f] = d;
            e.hover[f] = c.hover.upColor || b;
            e.select[f] = c.select.upColor || d;
            v(a.points, function(b) {
                b.options.color || (0 < b.y ? (b.pointAttr = e, b.color = d) : b.pointAttr = a.pointAttr)
            })
        },
        getGraphPath: function() {
            var a = this.data,
                b = a.length,
                c = L(this.options.lineWidth + this.borderWidth) % 2 / 2,
                d = [],
                e, f, g;
            for (g = 1; g < b; g++) f = a[g].shapeArgs, e = a[g - 1].shapeArgs, f = ["M", e.x + e.width, e.y + c, "L", f.x, e.y + c], 0 > a[g - 1].y && (f[2] += e.height, f[5] += e.height), d = d.concat(f);
            return d
        },
        getExtremes: na,
        drawGraph: ca.prototype.drawGraph
    });
    aa.bubble = z(aa.scatter, {
        dataLabels: {
            formatter: function() {
                return this.point.z
            },
            inside: !0,
            verticalAlign: "middle"
        },
        marker: {
            lineColor: null,
            lineWidth: 1
        },
        minSize: 8,
        maxSize: "20%",
        softThreshold: !1,
        states: {
            hover: {
                halo: {
                    size: 5
                }
            }
        },
        tooltip: {
            pointFormat: "({point.x}, {point.y}), Size: {point.z}"
        },
        turboThreshold: 0,
        zThreshold: 0,
        zoneAxis: "z"
    });
    var vc = C(Ea, {
        haloPath: function() {
            return Ea.prototype.haloPath.call(this, this.shapeArgs.r + this.series.options.states.hover.halo.size)
        },
        ttBelow: !1
    });
    Q.bubble = C(Q.scatter, {
        type: "bubble",
        pointClass: vc,
        pointArrayMap: ["y", "z"],
        parallelArrays: ["x", "y", "z"],
        trackerGroups: ["group", "dataLabelsGroup"],
        bubblePadding: !0,
        zoneAxis: "z",
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor"
        },
        applyOpacity: function(a) {
            var b = this.options.marker,
                c = A(b.fillOpacity, .5);
            a = a || b.fillColor || this.color;
            1 !== c && (a = ja(a).setOpacity(c).get("rgba"));
            return a
        },
        convertAttribs: function() {
            var a = ca.prototype.convertAttribs.apply(this, arguments);
            a.fill = this.applyOpacity(a.fill);
            return a
        },
        getRadii: function(a, b, c, d) {
            var e, f, g, h = this.zData,
                l = [],
                m = this.options,
                n = "width" !== m.sizeBy,
                k = m.zThreshold,
                x = b - a;
            f = 0;
            for (e = h.length; f < e; f++) g = h[f], m.sizeByAbsoluteValue && null !==
                g && (g = Math.abs(g - k), b = Math.max(b - k, Math.abs(a - k)), a = 0), null === g ? g = null : g < a ? g = c / 2 - 1 : (g = 0 < x ? (g - a) / x : .5, n && 0 <= g && (g = Math.sqrt(g)), g = oa.ceil(c + g * (d - c)) / 2), l.push(g);
            this.radii = l
        },
        animate: function(a) {
            var b = this.options.animation;
            a || (v(this.points, function(a) {
                var d = a.graphic;
                a = a.shapeArgs;
                d && a && (d.attr("r", 1), d.animate({
                    r: a.r
                }, b))
            }), this.animate = null)
        },
        translate: function() {
            var a, b = this.data,
                c, d, e = this.radii;
            Q.scatter.prototype.translate.call(this);
            for (a = b.length; a--;) c = b[a], d = e ? e[a] : 0, "number" === typeof d &&
                d >= this.minPxSize / 2 ? (c.shapeType = "circle", c.shapeArgs = {
                    x: c.plotX,
                    y: c.plotY,
                    r: d
                }, c.dlBox = {
                    x: c.plotX - d,
                    y: c.plotY - d,
                    width: 2 * d,
                    height: 2 * d
                }) : c.shapeArgs = c.plotY = c.dlBox = J
        },
        drawLegendSymbol: function(a, b) {
            var c = this.chart.renderer,
                d = c.fontMetrics(a.itemStyle.fontSize).f / 2;
            b.legendSymbol = c.circle(d, a.baseline - d, d).attr({
                zIndex: 3
            }).add(b.legendGroup);
            b.legendSymbol.isMarker = !0
        },
        drawPoints: Q.column.prototype.drawPoints,
        alignDataLabel: Q.column.prototype.alignDataLabel,
        buildKDTree: na,
        applyZones: na
    });
    da.prototype.beforePadding =
        function() {
            var a = this,
                b = this.len,
                c = this.chart,
                d = 0,
                e = b,
                f = this.isXAxis,
                g = f ? "xData" : "yData",
                h = this.min,
                l = {},
                m = oa.min(c.plotWidth, c.plotHeight),
                n = Number.MAX_VALUE,
                k = -Number.MAX_VALUE,
                x = this.max - h,
                w = b / x,
                p = [];
            v(this.series, function(b) {
                var d = b.options;
                !b.bubblePadding || !b.visible && c.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, p.push(b), f && (v(["minSize", "maxSize"], function(a) {
                    var b = d[a],
                        c = /%$/.test(b),
                        b = G(b);
                    l[a] = c ? m * b / 100 : b
                }), b.minPxSize = l.minSize, b.maxPxSize = l.maxSize, b = b.zData, b.length && (n =
                    A(d.zMin, oa.min(n, oa.max(ba(b), !1 === d.displayNegative ? d.zThreshold : -Number.MAX_VALUE))), k = A(d.zMax, oa.max(k, Ga(b))))))
            });
            v(p, function(a) {
                var b = a[g],
                    c = b.length,
                    l;
                f && a.getRadii(n, k, a.minPxSize, a.maxPxSize);
                if (0 < x)
                    for (; c--;) "number" === typeof b[c] && (l = a.radii[c], d = Math.min((b[c] - h) * w - l, d), e = Math.max((b[c] - h) * w + l, e))
            });
            p.length && 0 < x && !this.isLog && (e -= b, w *= (b + d - e) / b, v([
                ["min", "userMin", d],
                ["max", "userMax", e]
            ], function(b) {
                A(a.options[b[0]], a[b[1]]) === J && (a[b[0]] += b[2] / w)
            }))
        };
    M(T, {
        Color: ja,
        Point: Ea,
        Tick: sa,
        Renderer: Pa,
        SVGElement: ka,
        SVGRenderer: Pa,
        arrayMin: ba,
        arrayMax: Ga,
        charts: va,
        dateFormat: za,
        error: U,
        format: R,
        pathAnim: {
            init: function(a, b, c) {
                b = b || "";
                var d = a.shift,
                    e = -1 < b.indexOf("C"),
                    f = e ? 7 : 3,
                    g;
                b = b.split(" ");
                c = [].concat(c);
                var h, l, m = function(a) {
                    for (g = a.length; g--;) "M" === a[g] && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
                };
                e && (m(b), m(c));
                a.isArea && (h = b.splice(b.length - 6, 6), l = c.splice(c.length - 6, 6));
                if (d <= c.length / f && b.length === c.length)
                    for (; d--;) c = [].concat(c).splice(0, f).concat(c);
                a.shift = 0;
                if (b.length)
                    for (a =
                        c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
                h && (b = b.concat(h), c = c.concat(l));
                return [b, c]
            },
            step: function(a, b, c, d) {
                var e = [],
                    f = a.length;
                if (1 === c) e = d;
                else if (f === b.length && 1 > c)
                    for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d;
                else e = b;
                return e
            }
        },
        getOptions: function() {
            return la
        },
        hasBidiBug: ec,
        isTouchDevice: kb,
        setOptions: function(a) {
            la = z(!0, la, a);
            ua();
            return la
        },
        addEvent: Y,
        removeEvent: qa,
        createElement: S,
        discardElement: Ka,
        css: F,
        each: v,
        map: Aa,
        merge: z,
        splat: pa,
        stableSort: qb,
        extendClass: C,
        pInt: G,
        svg: ya,
        canvas: Ha,
        vml: !ya && !Ha,
        product: "Highcharts 4.2.3",
        version: "/Highstock 4.2.3"
    });
    return T
});
(function(t) {
    "object" === typeof module && module.exports ? module.exports = t : t(Highcharts)
})(function(t) {
    var U = t.getOptions(),
        X = U.plotOptions,
        z = t.seriesTypes,
        G = t.merge,
        ea = function() {},
        I = t.each,
        O = t.pick;
    X.funnel = G(X.pie, {
        animation: !1,
        center: ["50%", "50%"],
        width: "90%",
        neckWidth: "30%",
        height: "100%",
        neckHeight: "25%",
        reversed: !1,
        dataLabels: {
            connectorWidth: 1,
            connectorColor: "#606060"
        },
        size: !0,
        states: {
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        }
    });
    z.funnel = t.extendClass(z.pie, {
        type: "funnel",
        animate: ea,
        translate: function() {
            var k = function(k, x) {
                    return /%$/.test(k) ? x * parseInt(k, 10) / 100 : parseInt(k, 10)
                },
                p = 0,
                t = this.chart,
                y = this.options,
                q = y.reversed,
                B = y.ignoreHiddenPoint,
                z = t.plotWidth,
                G = t.plotHeight,
                F = 0,
                t = y.center,
                S = k(t[0], z),
                C = k(t[1], G),
                x = k(y.width, z),
                D, N, R = k(y.height, G),
                W = k(y.neckWidth, z),
                Ya = k(y.neckHeight, G),
                O = C - R / 2 + R - Ya,
                k = this.data,
                ba, X, Ja = "left" === y.dataLabels.position ? 1 : 0,
                Ka, ra, U, ua, ja, ka, sa;
            this.getWidthAt = N = function(k) {
                var p = C - R / 2;
                return k > O || R === Ya ? W : W + (x - W) * (1 - (k - p) / (R - Ya))
            };
            this.getX = function(k,
                x) {
                return S + (x ? -1 : 1) * (N(q ? G - k : k) / 2 + y.dataLabels.distance)
            };
            this.center = [S, C, R];
            this.centerX = S;
            I(k, function(k) {
                B && !1 === k.visible || (p += k.y)
            });
            I(k, function(k) {
                sa = null;
                X = p ? k.y / p : 0;
                ra = C - R / 2 + F * R;
                ja = ra + X * R;
                D = N(ra);
                Ka = S - D / 2;
                U = Ka + D;
                D = N(ja);
                ua = S - D / 2;
                ka = ua + D;
                ra > O ? (Ka = ua = S - W / 2, U = ka = S + W / 2) : ja > O && (sa = ja, D = N(O), ua = S - D / 2, ka = ua + D, ja = O);
                q && (ra = R - ra, ja = R - ja, sa = sa ? R - sa : null);
                ba = ["M", Ka, ra, "L", U, ra, ka, ja];
                sa && ba.push(ka, sa, ua, sa);
                ba.push(ua, ja, "Z");
                k.shapeType = "path";
                k.shapeArgs = {
                    d: ba
                };
                k.percentage = 100 * X;
                k.plotX = S;
                k.plotY =
                    (ra + (sa || ja)) / 2;
                k.tooltipPos = [S, k.plotY];
                k.slice = ea;
                k.half = Ja;
                B && !1 === k.visible || (F += X)
            })
        },
        drawPoints: function() {
            var k = this,
                p = k.options,
                t = k.chart.renderer,
                y, q, B, z;
            I(k.data, function(I) {
                y = I.options;
                z = I.graphic;
                B = I.shapeArgs;
                q = {
                    fill: I.color,
                    stroke: O(y.borderColor, p.borderColor),
                    "stroke-width": O(y.borderWidth, p.borderWidth)
                };
                z ? z.attr(q).animate(B) : I.graphic = t.path(B).attr(q).add(k.group)
            })
        },
        sortByAngle: function(k) {
            k.sort(function(k, t) {
                return k.plotY - t.plotY
            })
        },
        drawDataLabels: function() {
            var k = this.data,
                p = this.options.dataLabels.distance,
                t, y, q, B = k.length,
                I, G;
            for (this.center[2] -= 2 * p; B--;) q = k[B], y = (t = q.half) ? 1 : -1, G = q.plotY, I = this.getX(G, t), q.labelPos = [0, G, I + (p - 5) * y, G, I + p * y, G, t ? "right" : "left", 0];
            z.pie.prototype.drawDataLabels.call(this)
        }
    });
    U.plotOptions.pyramid = t.merge(U.plotOptions.funnel, {
        neckWidth: "0%",
        neckHeight: "0%",
        reversed: !0
    });
    t.seriesTypes.pyramid = t.extendClass(t.seriesTypes.funnel, {
        type: "pyramid"
    })
});
(function(t) {
    "object" === typeof module && module.exports ? module.exports = t : t(Highcharts)
})(function(t) {
    var U = t.win,
        X = U.document,
        z = t.Chart,
        G = t.addEvent,
        ea = t.removeEvent,
        I = t.fireEvent,
        O = t.createElement,
        k = t.discardElement,
        p = t.css,
        P = t.merge,
        y = t.each,
        q = t.extend,
        B = t.splat,
        pa = Math.max,
        ta = t.isTouchDevice,
        F = t.Renderer.prototype.symbols,
        S = t.getOptions(),
        C;
    q(S.lang, {
        printChart: "Print chart",
        downloadPNG: "Download PNG image",
        downloadJPEG: "Download JPEG image",
        downloadPDF: "Download PDF document",
        downloadSVG: "Download SVG vector image",
        contextButtonTitle: "Chart context menu"
    });
    S.navigation = {
        menuStyle: {
            border: "1px solid #A0A0A0",
            background: "#FFFFFF",
            padding: "5px 0"
        },
        menuItemStyle: {
            padding: "0 10px",
            background: "none",
            color: "#303030",
            fontSize: ta ? "14px" : "11px"
        },
        menuItemHoverStyle: {
            background: "#4572A5",
            color: "#FFFFFF"
        },
        buttonOptions: {
            symbolFill: "#E0E0E0",
            symbolSize: 14,
            symbolStroke: "#666",
            symbolStrokeWidth: 3,
            symbolX: 12.5,
            symbolY: 10.5,
            align: "right",
            buttonSpacing: 3,
            height: 22,
            theme: {
                fill: "white",
                stroke: "none"
            },
            verticalAlign: "top",
            width: 24
        }
    };
    S.exporting = {
        type: "image/png",
        url: "http://export.highcharts.com/",
        buttons: {
            contextButton: {
                menuClassName: "highcharts-contextmenu",
                symbol: "menu",
                _titleKey: "contextButtonTitle",
                menuItems: [{
                    textKey: "printChart",
                    onclick: function() {
                        this.print()
                    }
                }, {
                    separator: !0
                }, {
                    textKey: "downloadPNG",
                    onclick: function() {
                        this.exportChart()
                    }
                }, {
                    textKey: "downloadJPEG",
                    onclick: function() {
                        this.exportChart({
                            type: "image/jpeg"
                        })
                    }
                }, {
                    textKey: "downloadPDF",
                    onclick: function() {
                        this.exportChart({
                            type: "application/pdf"
                        })
                    }
                }, {
                    textKey: "downloadSVG",
                    onclick: function() {
                        this.exportChart({
                            type: "image/svg+xml"
                        })
                    }
                }]
            }
        }
    };
    t.post = function(x, p, q) {
        var C;
        x = O("form", P({
            method: "post",
            action: x,
            enctype: "multipart/form-data"
        }, q), {
            display: "none"
        }, X.body);
        for (C in p) O("input", {
            type: "hidden",
            name: C,
            value: p[C]
        }, null, x);
        x.submit();
        k(x)
    };
    q(z.prototype, {
        sanitizeSVG: function(k) {
            return k.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g,
                " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "\u00a0").replace(/&shy;/g, "\u00ad").replace(/<IMG /g, "<image ").replace(/<(\/?)TITLE>/g, "<$1title>").replace(/height=([^" ]+)/g, 'height="$1"').replace(/width=([^" ]+)/g, 'width="$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href="$1"/>').replace(/ id=([^" >]+)/g, ' id="$1"').replace(/class=([^" >]+)/g, 'class="$1"').replace(/ transform /g,
                " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function(k) {
                return k.toLowerCase()
            })
        },
        getChartHTML: function() {
            return this.container.innerHTML
        },
        getSVG: function(x) {
            var p = this,
                C, R, z, I, F, ba = P(p.options, x),
                G = ba.exporting.allowHTML;
            X.createElementNS || (X.createElementNS = function(k, x) {
                return X.createElement(x)
            });
            R = O("div", null, {
                position: "absolute",
                top: "-9999em",
                width: p.chartWidth + "px",
                height: p.chartHeight + "px"
            }, X.body);
            z = p.renderTo.style.width;
            F = p.renderTo.style.height;
            z = ba.exporting.sourceWidth ||
                ba.chart.width || /px$/.test(z) && parseInt(z, 10) || 600;
            F = ba.exporting.sourceHeight || ba.chart.height || /px$/.test(F) && parseInt(F, 10) || 400;
            q(ba.chart, {
                animation: !1,
                renderTo: R,
                forExport: !0,
                renderer: "SVGRenderer",
                width: z,
                height: F
            });
            ba.exporting.enabled = !1;
            delete ba.data;
            ba.series = [];
            y(p.series, function(k) {
                I = P(k.userOptions, {
                    animation: !1,
                    enableMouseTracking: !1,
                    showCheckbox: !1,
                    visible: k.visible
                });
                I.isInternal || ba.series.push(I)
            });
            x && y(["xAxis", "yAxis"], function(k) {
                y(B(x[k]), function(x, p) {
                    ba[k][p] = P(ba[k][p],
                        x)
                })
            });
            C = new t.Chart(ba, p.callback);
            y(["xAxis", "yAxis"], function(k) {
                y(p[k], function(x, p) {
                    var D = C[k][p],
                        q = x.getExtremes(),
                        t = q.userMin,
                        q = q.userMax;
                    !D || void 0 === t && void 0 === q || D.setExtremes(t, q, !0, !1)
                })
            });
            z = C.getChartHTML();
            ba = null;
            C.destroy();
            k(R);
            G && (R = z.match(/<\/svg>(.*?$)/)) && (R = '<foreignObject x="0" y="0" width="200" height="200"><body xmlns="http://www.w3.org/1999/xhtml">' + R[1] + "</body></foreignObject>", z = z.replace("</svg>", R + "</svg>"));
            z = this.sanitizeSVG(z);
            return z = z.replace(/(url\(#highcharts-[0-9]+)&quot;/g,
                "$1").replace(/&quot;/g, "'")
        },
        getSVGForExport: function(k, p) {
            var q = this.options.exporting;
            return this.getSVG(P({
                chart: {
                    borderRadius: 0
                }
            }, q.chartOptions, p, {
                exporting: {
                    sourceWidth: k && k.sourceWidth || q.sourceWidth,
                    sourceHeight: k && k.sourceHeight || q.sourceHeight
                }
            }))
        },
        exportChart: function(k, p) {
            var q = this.getSVGForExport(k, p);
            k = P(this.options.exporting, k);
            t.post(k.url, {
                filename: k.filename || "chart",
                type: k.type,
                width: k.width || 0,
                scale: k.scale || 2,
                svg: q
            }, k.formAttributes)
        },
        print: function() {
            var k = this,
                p = k.container,
                q = [],
                C = p.parentNode,
                t = X.body,
                B = t.childNodes;
            k.isPrinting || (k.isPrinting = !0, k.pointer.reset(null, 0), I(k, "beforePrint"), y(B, function(k, x) {
                1 === k.nodeType && (q[x] = k.style.display, k.style.display = "none")
            }), t.appendChild(p), U.focus(), U.print(), setTimeout(function() {
                C.appendChild(p);
                y(B, function(k, x) {
                    1 === k.nodeType && (k.style.display = q[x])
                });
                k.isPrinting = !1;
                I(k, "afterPrint")
            }, 1E3))
        },
        contextMenu: function(k, D, C, t, B, z, P) {
            var F = this,
                I = F.options.navigation,
                S = I.menuItemStyle,
                ta = F.chartWidth,
                U = F.chartHeight,
                Sa = "cache-" +
                k,
                ua = F[Sa],
                ja = pa(B, z),
                ka, sa, jb, cb = function(p) {
                    F.pointer.inClass(p.target, k) || sa()
                };
            ua || (F[Sa] = ua = O("div", {
                className: k
            }, {
                position: "absolute",
                zIndex: 1E3,
                padding: ja + "px"
            }, F.container), ka = O("div", null, q({
                MozBoxShadow: "3px 3px 10px #888",
                WebkitBoxShadow: "3px 3px 10px #888",
                boxShadow: "3px 3px 10px #888"
            }, I.menuStyle), ua), sa = function() {
                p(ua, {
                    display: "none"
                });
                P && P.setState(0);
                F.openMenu = !1
            }, G(ua, "mouseleave", function() {
                jb = setTimeout(sa, 500)
            }), G(ua, "mouseenter", function() {
                clearTimeout(jb)
            }), G(X, "mouseup",
                cb), G(F, "destroy", function() {
                ea(X, "mouseup", cb)
            }), y(D, function(k) {
                if (k) {
                    var x = k.separator ? O("hr", null, null, ka) : O("div", {
                        onmouseover: function() {
                            p(this, I.menuItemHoverStyle)
                        },
                        onmouseout: function() {
                            p(this, S)
                        },
                        onclick: function(x) {
                            x && x.stopPropagation();
                            sa();
                            k.onclick && k.onclick.apply(F, arguments)
                        },
                        innerHTML: k.text || F.options.lang[k.textKey]
                    }, q({
                        cursor: "pointer"
                    }, S), ka);
                    F.exportDivElements.push(x)
                }
            }), F.exportDivElements.push(ka, ua), F.exportMenuWidth = ua.offsetWidth, F.exportMenuHeight = ua.offsetHeight);
            D = {
                display: "block"
            };
            C + F.exportMenuWidth > ta ? D.right = ta - C - B - ja + "px" : D.left = C - ja + "px";
            t + z + F.exportMenuHeight > U && "top" !== P.alignOptions.verticalAlign ? D.bottom = U - t - ja + "px" : D.top = t + z - ja + "px";
            p(ua, D);
            F.openMenu = !0
        },
        addButton: function(k) {
            var p = this,
                B = p.renderer,
                y = P(p.options.navigation.buttonOptions, k),
                z = y.onclick,
                F = y.menuItems,
                I, G, pa = {
                    stroke: y.symbolStroke,
                    fill: y.symbolFill
                },
                O = y.symbolSize || 12;
            p.btnCount || (p.btnCount = 0);
            p.exportDivElements || (p.exportDivElements = [], p.exportSVGElements = []);
            if (!1 !== y.enabled) {
                var S =
                    y.theme,
                    ta = S.states,
                    U = ta && ta.hover,
                    ta = ta && ta.select,
                    X;
                delete S.states;
                z ? X = function(k) {
                    k.stopPropagation();
                    z.call(p, k)
                } : F && (X = function() {
                    p.contextMenu(G.menuClassName, F, G.translateX, G.translateY, G.width, G.height, G);
                    G.setState(2)
                });
                y.text && y.symbol ? S.paddingLeft = t.pick(S.paddingLeft, 25) : y.text || q(S, {
                    width: y.width,
                    height: y.height,
                    padding: 0
                });
                G = B.button(y.text, 0, 0, X, S, U, ta).attr({
                    title: p.options.lang[y._titleKey],
                    "stroke-linecap": "round",
                    zIndex: 3
                });
                G.menuClassName = k.menuClassName || "highcharts-menu-" +
                    p.btnCount++;
                y.symbol && (I = B.symbol(y.symbol, y.symbolX - O / 2, y.symbolY - O / 2, O, O).attr(q(pa, {
                    "stroke-width": y.symbolStrokeWidth || 1,
                    zIndex: 1
                })).add(G));
                G.add().align(q(y, {
                    width: G.width,
                    x: t.pick(y.x, C)
                }), !0, "spacingBox");
                C += (G.width + y.buttonSpacing) * ("right" === y.align ? -1 : 1);
                p.exportSVGElements.push(G, I)
            }
        },
        destroyExport: function(x) {
            x = x.target;
            var p, q;
            for (p = 0; p < x.exportSVGElements.length; p++)
                if (q = x.exportSVGElements[p]) q.onclick = q.ontouchstart = null, x.exportSVGElements[p] = q.destroy();
            for (p = 0; p < x.exportDivElements.length; p++) q =
                x.exportDivElements[p], ea(q, "mouseleave"), x.exportDivElements[p] = q.onmouseout = q.onmouseover = q.ontouchstart = q.onclick = null, k(q)
        }
    });
    F.menu = function(k, p, q, C) {
        return ["M", k, p + 2.5, "L", k + q, p + 2.5, "M", k, p + C / 2 + .5, "L", k + q, p + C / 2 + .5, "M", k, p + C - 1.5, "L", k + q, p + C - 1.5]
    };
    z.prototype.callbacks.push(function(k) {
        var p, q = k.options.exporting,
            t = q.buttons;
        C = 0;
        if (!1 !== q.enabled) {
            for (p in t) k.addButton(t[p]);
            G(k, "destroy", k.destroyExport)
        }
    })
});
(function(t) {
    "object" === typeof module && module.exports ? module.exports = t : t(Highcharts)
})(function(t) {
    var U = t.win.document,
        X = t.each,
        z = t.pick,
        G = t.inArray,
        ea = t.splat,
        I, O = function(k, p) {
            this.init(k, p)
        };
    t.extend(O.prototype, {
        init: function(k, p) {
            this.options = k;
            this.chartOptions = p;
            this.columns = k.columns || this.rowsToColumns(k.rows) || [];
            this.firstRowAsNames = z(k.firstRowAsNames, !0);
            this.decimalRegex = k.decimalPoint && new RegExp("^(-?[0-9]+)" + k.decimalPoint + "([0-9]+)$");
            this.rawColumns = [];
            this.columns.length ? this.dataFound() :
                (this.parseCSV(), this.parseTable(), this.parseGoogleSpreadsheet())
        },
        getColumnDistribution: function() {
            var k = this.chartOptions,
                p = this.options,
                z = [],
                y = function(k) {
                    return (t.seriesTypes[k || "line"].prototype.pointArrayMap || [0]).length
                },
                q = k && k.chart && k.chart.type,
                B = [],
                G = [],
                O = 0,
                F;
            X(k && k.series || [], function(k) {
                B.push(y(k.type || q))
            });
            X(p && p.seriesMapping || [], function(k) {
                z.push(k.x || 0)
            });
            0 === z.length && z.push(0);
            X(p && p.seriesMapping || [], function(p) {
                var C = new I,
                    x, D = B[O] || y(q),
                    N = t.seriesTypes[((k && k.series || [])[O] || {}).type || q || "line"].prototype.pointArrayMap || ["y"];
                C.addColumnReader(p.x, "x");
                for (x in p) p.hasOwnProperty(x) && "x" !== x && C.addColumnReader(p[x], x);
                for (F = 0; F < D; F++) C.hasReader(N[F]) || C.addColumnReader(void 0, N[F]);
                G.push(C);
                O++
            });
            p = t.seriesTypes[q || "line"].prototype.pointArrayMap;
            void 0 === p && (p = ["y"]);
            this.valueCount = {
                global: y(q),
                xColumns: z,
                individual: B,
                seriesBuilders: G,
                globalPointArrayMap: p
            }
        },
        dataFound: function() {
            this.options.switchRowsAndColumns && (this.columns = this.rowsToColumns(this.columns));
            this.getColumnDistribution();
            this.parseTypes();
            !1 !== this.parsed() && this.complete()
        },
        parseCSV: function() {
            var k = this,
                p = this.options,
                t = p.csv,
                y = this.columns,
                q = p.startRow || 0,
                B = p.endRow || Number.MAX_VALUE,
                z = p.startColumn || 0,
                I = p.endColumn || Number.MAX_VALUE,
                F, G, C = 0;
            t && (G = t.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split(p.lineDelimiter || "\n"), F = p.itemDelimiter || (-1 !== t.indexOf("\t") ? "\t" : ","), X(G, function(p, D) {
                var t = k.trim(p),
                    P = 0 === t.indexOf("#");
                D >= q && D <= B && !P && "" !== t && (t = p.split(F), X(t, function(k, p) {
                    p >= z && p <= I && (y[p - z] || (y[p - z] = []),
                        y[p - z][C] = k)
                }), C += 1)
            }), this.dataFound())
        },
        parseTable: function() {
            var k = this.options,
                p = k.table,
                t = this.columns,
                y = k.startRow || 0,
                q = k.endRow || Number.MAX_VALUE,
                B = k.startColumn || 0,
                z = k.endColumn || Number.MAX_VALUE;
            p && ("string" === typeof p && (p = U.getElementById(p)), X(p.getElementsByTagName("tr"), function(k, p) {
                p >= y && p <= q && X(k.children, function(k, q) {
                    ("TD" === k.tagName || "TH" === k.tagName) && q >= B && q <= z && (t[q - B] || (t[q - B] = []), t[q - B][p - y] = k.innerHTML)
                })
            }), this.dataFound())
        },
        parseGoogleSpreadsheet: function() {
            var k = this,
                p = this.options,
                t = p.googleSpreadsheetKey,
                y = this.columns,
                q = p.startRow || 0,
                B = p.endRow || Number.MAX_VALUE,
                z = p.startColumn || 0,
                I = p.endColumn || Number.MAX_VALUE,
                F, G;
            t && jQuery.ajax({
                dataType: "json",
                url: "https://spreadsheets.google.com/feeds/cells/" + t + "/" + (p.googleSpreadsheetWorksheet || "od6") + "/public/values?alt=json-in-script&callback=?",
                error: p.error,
                success: function(p) {
                    p = p.feed.entry;
                    var x, t = p.length,
                        N = 0,
                        P = 0,
                        W;
                    for (W = 0; W < t; W++) x = p[W], N = Math.max(N, x.gs$cell.col), P = Math.max(P, x.gs$cell.row);
                    for (W = 0; W < N; W++) W >=
                        z && W <= I && (y[W - z] = [], y[W - z].length = Math.min(P, B - q));
                    for (W = 0; W < t; W++) x = p[W], F = x.gs$cell.row - 1, G = x.gs$cell.col - 1, G >= z && G <= I && F >= q && F <= B && (y[G - z][F - q] = x.content.$t);
                    k.dataFound()
                }
            })
        },
        trim: function(k, p) {
            "string" === typeof k && (k = k.replace(/^\s+|\s+$/g, ""), p && /^[0-9\s]+$/.test(k) && (k = k.replace(/\s/g, "")), this.decimalRegex && (k = k.replace(this.decimalRegex, "$1.$2")));
            return k
        },
        parseTypes: function() {
            for (var k = this.columns, p = k.length; p--;) this.parseColumn(k[p], p)
        },
        parseColumn: function(k, p) {
            var t = this.rawColumns,
                y = this.columns,
                q = k.length,
                B, z, I, F, O = this.firstRowAsNames,
                C = -1 !== G(p, this.valueCount.xColumns),
                x = [],
                D = this.chartOptions,
                N, R = (this.options.columnTypes || [])[p],
                D = C && (D && D.xAxis && "category" === ea(D.xAxis)[0].type || "string" === R);
            for (t[p] || (t[p] = []); q--;) B = x[q] || k[q], I = this.trim(B), F = this.trim(B, !0), z = parseFloat(F), void 0 === t[p][q] && (t[p][q] = I), D || 0 === q && O ? k[q] = I : +F === z ? (k[q] = z, 31536E6 < z && "float" !== R ? k.isDatetime = !0 : k.isNumeric = !0, void 0 !== k[q + 1] && (N = z > k[q + 1])) : (z = this.parseDate(B), C && "number" === typeof z &&
                !isNaN(z) && "float" !== R ? (x[q] = B, k[q] = z, k.isDatetime = !0, void 0 !== k[q + 1] && (B = z > k[q + 1], B !== N && void 0 !== N && (this.alternativeFormat ? (this.dateFormat = this.alternativeFormat, q = k.length, this.alternativeFormat = this.dateFormats[this.dateFormat].alternative) : k.unsorted = !0), N = B)) : (k[q] = "" === I ? null : I, 0 !== q && (k.isDatetime || k.isNumeric) && (k.mixed = !0)));
            C && k.mixed && (y[p] = t[p]);
            if (C && N && this.options.sort)
                for (p = 0; p < y.length; p++) y[p].reverse(), O && y[p].unshift(y[p].pop())
        },
        dateFormats: {
            "YYYY-mm-dd": {
                regex: /^([0-9]{4})[\-\/\.]([0-9]{2})[\-\/\.]([0-9]{2})$/,
                parser: function(k) {
                    return Date.UTC(+k[1], k[2] - 1, +k[3])
                }
            },
            "dd/mm/YYYY": {
                regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
                parser: function(k) {
                    return Date.UTC(+k[3], k[2] - 1, +k[1])
                },
                alternative: "mm/dd/YYYY"
            },
            "mm/dd/YYYY": {
                regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
                parser: function(k) {
                    return Date.UTC(+k[3], k[1] - 1, +k[2])
                }
            },
            "dd/mm/YY": {
                regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,
                parser: function(k) {
                    return Date.UTC(+k[3] + 2E3, k[2] - 1, +k[1])
                },
                alternative: "mm/dd/YY"
            },
            "mm/dd/YY": {
                regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,
                parser: function(k) {
                    return Date.UTC(+k[3] + 2E3, k[1] - 1, +k[2])
                }
            }
        },
        parseDate: function(k) {
            var p = this.options.parseDate,
                t, y, q = this.options.dateFormat || this.dateFormat,
                B;
            if (p) t = p(k);
            else if ("string" === typeof k) {
                if (q) p = this.dateFormats[q], (B = k.match(p.regex)) && (t = p.parser(B));
                else
                    for (y in this.dateFormats)
                        if (p = this.dateFormats[y], B = k.match(p.regex)) {
                            this.dateFormat = y;
                            this.alternativeFormat = p.alternative;
                            t = p.parser(B);
                            break
                        }
                B || (B = Date.parse(k),
                    "object" === typeof B && null !== B && B.getTime ? t = B.getTime() - 6E4 * B.getTimezoneOffset() : "number" !== typeof B || isNaN(B) || (t = B - 6E4 * (new Date(B)).getTimezoneOffset()))
            }
            return t
        },
        rowsToColumns: function(k) {
            var p, t, y, q, B;
            if (k)
                for (B = [], t = k.length, p = 0; p < t; p++)
                    for (q = k[p].length, y = 0; y < q; y++) B[y] || (B[y] = []), B[y][p] = k[p][y];
            return B
        },
        parsed: function() {
            if (this.options.parsed) return this.options.parsed.call(this, this.columns)
        },
        getFreeIndexes: function(k, p) {
            var t, y, q = [],
                B = [],
                z;
            for (y = 0; y < k; y += 1) q.push(!0);
            for (t = 0; t < p.length; t +=
                1)
                for (z = p[t].getReferencedColumnIndexes(), y = 0; y < z.length; y += 1) q[z[y]] = !1;
            for (y = 0; y < q.length; y += 1) q[y] && B.push(y);
            return B
        },
        complete: function() {
            var k = this.columns,
                p, t = this.options,
                y, q, B, z, O = [],
                F;
            if (t.complete || t.afterComplete) {
                for (B = 0; B < k.length; B++) this.firstRowAsNames && (k[B].name = k[B].shift());
                y = [];
                q = this.getFreeIndexes(k.length, this.valueCount.seriesBuilders);
                for (B = 0; B < this.valueCount.seriesBuilders.length; B++) F = this.valueCount.seriesBuilders[B], F.populateColumns(q) && O.push(F);
                for (; 0 < q.length;) {
                    F =
                        new I;
                    F.addColumnReader(0, "x");
                    B = G(0, q); - 1 !== B && q.splice(B, 1);
                    for (B = 0; B < this.valueCount.global; B++) F.addColumnReader(void 0, this.valueCount.globalPointArrayMap[B]);
                    F.populateColumns(q) && O.push(F)
                }
                0 < O.length && 0 < O[0].readers.length && (F = k[O[0].readers[0].columnIndex], void 0 !== F && (F.isDatetime ? p = "datetime" : F.isNumeric || (p = "category")));
                if ("category" === p)
                    for (B = 0; B < O.length; B++)
                        for (F = O[B], q = 0; q < F.readers.length; q++) "x" === F.readers[q].configName && (F.readers[q].configName = "name");
                for (B = 0; B < O.length; B++) {
                    F =
                        O[B];
                    q = [];
                    for (z = 0; z < k[0].length; z++) q[z] = F.read(k, z);
                    y[B] = {
                        data: q
                    };
                    F.name && (y[B].name = F.name);
                    "category" === p && (y[B].turboThreshold = 0)
                }
                k = {
                    series: y
                };
                p && (k.xAxis = {
                    type: p
                });
                t.complete && t.complete(k);
                t.afterComplete && t.afterComplete(k)
            }
        }
    });
    t.Data = O;
    t.data = function(k, p) {
        return new O(k, p)
    };
    t.wrap(t.Chart.prototype, "init", function(k, p, z) {
        var y = this;
        p && p.data ? t.data(t.extend(p.data, {
            afterComplete: function(q) {
                var B, I;
                if (p.hasOwnProperty("series"))
                    if ("object" === typeof p.series)
                        for (B = Math.max(p.series.length,
                                q.series.length); B--;) I = p.series[B] || {}, p.series[B] = t.merge(I, q.series[B]);
                    else delete p.series;
                p = t.merge(q, p);
                k.call(y, p, z)
            }
        }), p) : k.call(y, p, z)
    });
    I = function() {
        this.readers = [];
        this.pointIsArray = !0
    };
    I.prototype.populateColumns = function(k) {
        var p = !0;
        X(this.readers, function(p) {
            void 0 === p.columnIndex && (p.columnIndex = k.shift())
        });
        X(this.readers, function(k) {
            void 0 === k.columnIndex && (p = !1)
        });
        return p
    };
    I.prototype.read = function(k, p) {
        var t = this.pointIsArray,
            y = t ? [] : {},
            q;
        X(this.readers, function(q) {
            var z = k[q.columnIndex][p];
            t ? y.push(z) : y[q.configName] = z
        });
        void 0 === this.name && 2 <= this.readers.length && (q = this.getReferencedColumnIndexes(), 2 <= q.length && (q.shift(), q.sort(), this.name = k[q.shift()].name));
        return y
    };
    I.prototype.addColumnReader = function(k, p) {
        this.readers.push({
            columnIndex: k,
            configName: p
        });
        "x" !== p && "y" !== p && void 0 !== p && (this.pointIsArray = !1)
    };
    I.prototype.getReferencedColumnIndexes = function() {
        var k, p = [],
            t;
        for (k = 0; k < this.readers.length; k += 1) t = this.readers[k], void 0 !== t.columnIndex && p.push(t.columnIndex);
        return p
    };
    I.prototype.hasReader = function(k) {
        var p, t;
        for (p = 0; p < this.readers.length; p += 1)
            if (t = this.readers[p], t.configName === k) return !0
    }
});
(function(t) {
    "object" === typeof module && module.exports ? module.exports = t : t(Highcharts)
})(function(t) {
    function U() {
        return !!this.points.length
    }

    function X() {
        this.hasData() ? this.hideNoData() : this.showNoData()
    }
    var z = t.seriesTypes,
        G = t.Chart.prototype,
        ea = t.getOptions(),
        I = t.extend,
        O = t.each;
    I(ea.lang, {
        noData: "No data to display"
    });
    ea.noData = {
        position: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
        },
        attr: {},
        style: {
            fontWeight: "bold",
            fontSize: "12px",
            color: "#60606a"
        }
    };
    O(["pie", "gauge", "waterfall", "bubble"], function(k) {
        z[k] &&
            (z[k].prototype.hasData = U)
    });
    t.Series.prototype.hasData = function() {
        return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin
    };
    G.showNoData = function(k) {
        var p = this.options;
        k = k || p.lang.noData;
        p = p.noData;
        this.noDataLabel || (this.noDataLabel = this.renderer.label(k, 0, 0, null, null, null, p.useHTML, null, "no-data").attr(p.attr).css(p.style).add(), this.noDataLabel.align(I(this.noDataLabel.getBBox(), p.position), !1, "plotBox"))
    };
    G.hideNoData = function() {
        this.noDataLabel && (this.noDataLabel = this.noDataLabel.destroy())
    };
    G.hasData = function() {
        for (var k = this.series, p = k.length; p--;)
            if (k[p].hasData() && !k[p].options.isInternal) return !0;
        return !1
    };
    G.callbacks.push(function(k) {
        t.addEvent(k, "load", X);
        t.addEvent(k, "redraw", X)
    })
});
(function(t) {
    "object" === typeof module && module.exports ? module.exports = t : t(Highcharts)
})(function(t) {
    function U(k, p, q) {
        var t;
        p.rgba.length && k.rgba.length ? (k = k.rgba, p = p.rgba, t = 1 !== p[3] || 1 !== k[3], k = (t ? "rgba(" : "rgb(") + Math.round(p[0] + (k[0] - p[0]) * (1 - q)) + "," + Math.round(p[1] + (k[1] - p[1]) * (1 - q)) + "," + Math.round(p[2] + (k[2] - p[2]) * (1 - q)) + (t ? "," + (p[3] + (k[3] - p[3]) * (1 - q)) : "") + ")") : k = p.input || "none";
        return k
    }
    var X = function() {},
        z = t.getOptions(),
        G = t.each,
        ea = t.extend,
        I = t.format,
        O = t.pick,
        k = t.wrap,
        p = t.Chart,
        P = t.seriesTypes,
        y = P.pie,
        q = P.column,
        B = t.Tick,
        pa = t.fireEvent,
        ta = t.inArray,
        F = 1;
    G(["fill", "stroke"], function(k) {
        t.Fx.prototype[k + "Setter"] = function() {
            this.elem.attr(k, U(t.Color(this.start), t.Color(this.end), this.pos))
        }
    });
    ea(z.lang, {
        drillUpText: "\u25c1 Back to {series.name}"
    });
    z.drilldown = {
        activeAxisLabelStyle: {
            cursor: "pointer",
            color: "#0d233a",
            fontWeight: "bold",
            textDecoration: "underline"
        },
        activeDataLabelStyle: {
            cursor: "pointer",
            color: "#0d233a",
            fontWeight: "bold",
            textDecoration: "underline"
        },
        animation: {
            duration: 500
        },
        drillUpButton: {
            position: {
                align: "right",
                x: -10,
                y: 10
            }
        }
    };
    t.SVGRenderer.prototype.Element.prototype.fadeIn = function(k) {
        this.attr({
            opacity: .1,
            visibility: "inherit"
        }).animate({
            opacity: O(this.newOpacity, 1)
        }, k || {
            duration: 250
        })
    };
    p.prototype.addSeriesAsDrilldown = function(k, p) {
        this.addSingleSeriesAsDrilldown(k, p);
        this.applyDrilldown()
    };
    p.prototype.addSingleSeriesAsDrilldown = function(k, p) {
        var q = k.series,
            t = q.xAxis,
            B = q.yAxis,
            y;
        y = k.color || q.color;
        var z, I = [],
            O = [],
            P, S;
        this.drilldownLevels || (this.drilldownLevels = []);
        P = q.options._levelNumber || 0;
        (S = this.drilldownLevels[this.drilldownLevels.length -
            1]) && S.levelNumber !== P && (S = void 0);
        p = ea({
            color: y,
            _ddSeriesId: F++
        }, p);
        z = ta(k, q.points);
        G(q.chart.series, function(k) {
            k.xAxis !== t || k.isDrilling || (k.options._ddSeriesId = k.options._ddSeriesId || F++, k.options._colorIndex = k.userOptions._colorIndex, k.options._levelNumber = k.options._levelNumber || P, S ? (I = S.levelSeries, O = S.levelSeriesOptions) : (I.push(k), O.push(k.options)))
        });
        y = {
            levelNumber: P,
            seriesOptions: q.options,
            levelSeriesOptions: O,
            levelSeries: I,
            shapeArgs: k.shapeArgs,
            bBox: k.graphic ? k.graphic.getBBox() : {},
            color: y,
            lowerSeriesOptions: p,
            pointOptions: q.options.data[z],
            pointIndex: z,
            oldExtremes: {
                xMin: t && t.userMin,
                xMax: t && t.userMax,
                yMin: B && B.userMin,
                yMax: B && B.userMax
            }
        };
        this.drilldownLevels.push(y);
        y = y.lowerSeries = this.addSeries(p, !1);
        y.options._levelNumber = P + 1;
        t && (t.oldPos = t.pos, t.userMin = t.userMax = null, B.userMin = B.userMax = null);
        q.type === y.type && (y.animate = y.animateDrilldown || X, y.options.animation = !0)
    };
    p.prototype.applyDrilldown = function() {
        var k = this.drilldownLevels,
            p;
        k && 0 < k.length && (p = k[k.length - 1].levelNumber,
            G(this.drilldownLevels, function(k) {
                k.levelNumber === p && G(k.levelSeries, function(k) {
                    k.options && k.options._levelNumber === p && k.remove(!1)
                })
            }));
        this.redraw();
        this.showDrillUpButton()
    };
    p.prototype.getDrilldownBackText = function() {
        var k = this.drilldownLevels;
        if (k && 0 < k.length) return k = k[k.length - 1], k.series = k.seriesOptions, I(this.options.lang.drillUpText, k)
    };
    p.prototype.showDrillUpButton = function() {
        var k = this,
            p = this.getDrilldownBackText(),
            q = k.options.drilldown.drillUpButton,
            t, y;
        this.drillUpButton ? this.drillUpButton.attr({
                text: p
            }).align() :
            (y = (t = q.theme) && t.states, this.drillUpButton = this.renderer.button(p, null, null, function() {
                k.drillUp()
            }, t, y && y.hover, y && y.select).attr({
                align: q.position.align,
                zIndex: 9
            }).add().align(q.position, !1, q.relativeTo || "plotBox"))
    };
    p.prototype.drillUp = function() {
        for (var k = this, p = k.drilldownLevels, q = p[p.length - 1].levelNumber, t = p.length, y = k.series, B, z, I, F, O = function(p) {
                var q;
                G(y, function(k) {
                    k.options._ddSeriesId === p._ddSeriesId && (q = k)
                });
                q = q || k.addSeries(p, !1);
                q.type === I.type && q.animateDrillupTo && (q.animate = q.animateDrillupTo);
                p === z.seriesOptions && (F = q)
            }; t--;)
            if (z = p[t], z.levelNumber === q) {
                p.pop();
                I = z.lowerSeries;
                if (!I.chart)
                    for (B = y.length; B--;)
                        if (y[B].options.id === z.lowerSeriesOptions.id && y[B].options._levelNumber === q + 1) {
                            I = y[B];
                            break
                        }
                I.xData = [];
                G(z.levelSeriesOptions, O);
                pa(k, "drillup", {
                    seriesOptions: z.seriesOptions
                });
                F.type === I.type && (F.drilldownLevel = z, F.options.animation = k.options.drilldown.animation, I.animateDrillupFrom && I.chart && I.animateDrillupFrom(z));
                F.options._levelNumber = q;
                I.remove(!1);
                F.xAxis && (B = z.oldExtremes,
                    F.xAxis.setExtremes(B.xMin, B.xMax, !1), F.yAxis.setExtremes(B.yMin, B.yMax, !1))
            }
        this.redraw();
        0 === this.drilldownLevels.length ? this.drillUpButton = this.drillUpButton.destroy() : this.drillUpButton.attr({
            text: this.getDrilldownBackText()
        }).align();
        this.ddDupes.length = []
    };
    q.prototype.supportsDrilldown = !0;
    q.prototype.animateDrillupTo = function(k) {
        if (!k) {
            var p = this,
                q = p.drilldownLevel;
            G(this.points, function(k) {
                k.graphic && k.graphic.hide();
                k.dataLabel && k.dataLabel.hide();
                k.connector && k.connector.hide()
            });
            setTimeout(function() {
                p.points &&
                    G(p.points, function(k, p) {
                        var x = p === (q && q.pointIndex) ? "show" : "fadeIn",
                            t = "show" === x ? !0 : void 0;
                        if (k.graphic) k.graphic[x](t);
                        if (k.dataLabel) k.dataLabel[x](t);
                        if (k.connector) k.connector[x](t)
                    })
            }, Math.max(this.chart.options.drilldown.animation.duration - 50, 0));
            this.animate = X
        }
    };
    q.prototype.animateDrilldown = function(k) {
        var p = this,
            q = this.chart.drilldownLevels,
            t, y = this.chart.options.drilldown.animation,
            B = this.xAxis;
        k || (G(q, function(k) {
            p.options._ddSeriesId === k.lowerSeriesOptions._ddSeriesId && (t = k.shapeArgs,
                t.fill = k.color)
        }), t.x += O(B.oldPos, B.pos) - B.pos, G(this.points, function(k) {
            k.graphic && k.graphic.attr(t).animate(ea(k.shapeArgs, {
                fill: k.color
            }), y);
            k.dataLabel && k.dataLabel.fadeIn(y)
        }), this.animate = null)
    };
    q.prototype.animateDrillupFrom = function(k) {
        var p = this.chart.options.drilldown.animation,
            q = this.group,
            y = this;
        G(y.trackerGroups, function(k) {
            if (y[k]) y[k].on("mouseover")
        });
        delete this.group;
        G(this.points, function(y) {
            var B = y.graphic,
                z = function() {
                    B.destroy();
                    q && (q = q.destroy())
                };
            B && (delete y.graphic, p ? B.animate(ea(k.shapeArgs, {
                fill: k.color
            }), t.merge(p, {
                complete: z
            })) : (B.attr(k.shapeArgs), z()))
        })
    };
    y && ea(y.prototype, {
        supportsDrilldown: !0,
        animateDrillupTo: q.prototype.animateDrillupTo,
        animateDrillupFrom: q.prototype.animateDrillupFrom,
        animateDrilldown: function(k) {
            var p = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
                q = this.chart.options.drilldown.animation,
                y = p.shapeArgs,
                B = y.start,
                z = (y.end - B) / this.points.length;
            k || (G(this.points, function(k, C) {
                k.graphic.attr(t.merge(y, {
                    start: B + C * z,
                    end: B + (C + 1) * z,
                    fill: p.color
                }))[q ?
                    "animate" : "attr"](ea(k.shapeArgs, {
                    fill: k.color
                }), q)
            }), this.animate = null)
        }
    });
    t.Point.prototype.doDrilldown = function(k, p) {
        var q = this.series.chart,
            t = q.options.drilldown,
            y = (t.series || []).length,
            B;
        q.ddDupes || (q.ddDupes = []);
        for (; y-- && !B;) t.series[y].id === this.drilldown && -1 === ta(this.drilldown, q.ddDupes) && (B = t.series[y], q.ddDupes.push(this.drilldown));
        pa(q, "drilldown", {
            point: this,
            seriesOptions: B,
            category: p,
            points: void 0 !== p && this.series.xAxis.ddPoints[p].slice(0)
        });
        B && (k ? q.addSingleSeriesAsDrilldown(this,
            B) : q.addSeriesAsDrilldown(this, B))
    };
    t.Axis.prototype.drilldownCategory = function(k) {
        var p, q, t = this.ddPoints[k];
        for (p in t)(q = t[p]) && q.series && q.series.visible && q.doDrilldown && q.doDrilldown(!0, k);
        this.chart.applyDrilldown()
    };
    t.Axis.prototype.getDDPoints = function(k, p) {
        var q = this.ddPoints;
        q || (this.ddPoints = q = {});
        q[k] || (q[k] = []);
        q[k].levelNumber !== p && (q[k].length = 0);
        return q[k]
    };
    B.prototype.drillable = function() {
        var k = this.pos,
            p = this.label,
            q = this.axis,
            y = q.ddPoints && q.ddPoints[k];
        p && y && y.length ? (p.basicStyles ||
            (p.basicStyles = t.merge(p.styles)), p.addClass("highcharts-drilldown-axis-label").css(q.chart.options.drilldown.activeAxisLabelStyle).on("click", function() {
                q.drilldownCategory(k)
            })) : p && p.basicStyles && (p.styles = {}, p.css(p.basicStyles), p.on("click", null))
    };
    k(B.prototype, "addLabel", function(k) {
        k.call(this);
        this.drillable()
    });
    k(t.Point.prototype, "init", function(k, p, q, y) {
        var B = k.call(this, p, q, y);
        k = (q = p.xAxis) && q.ticks[y];
        q = q && q.getDDPoints(y, p.options._levelNumber);
        B.drilldown && (t.addEvent(B, "click", function() {
            p.xAxis &&
                !1 === p.chart.options.drilldown.allowPointDrilldown ? p.xAxis.drilldownCategory(y) : B.doDrilldown()
        }), q && (q.push(B), q.levelNumber = p.options._levelNumber));
        k && k.drillable();
        return B
    });
    k(t.Series.prototype, "drawDataLabels", function(k) {
        var p = this.chart.options.drilldown.activeDataLabelStyle;
        k.call(this);
        G(this.points, function(k) {
            k.drilldown && k.dataLabel && k.dataLabel.attr({
                "class": "highcharts-drilldown-data-label"
            }).css(p)
        })
    });
    var S, z = function(k) {
        k.call(this);
        G(this.points, function(k) {
            k.drilldown && k.graphic &&
                k.graphic.attr({
                    "class": "highcharts-drilldown-point"
                }).css({
                    cursor: "pointer"
                })
        })
    };
    for (S in P) P[S].prototype.supportsDrilldown && k(P[S].prototype, "drawTracker", z)
});
(function(t) {
    "object" === typeof module && module.exports ? module.exports = t : t(Highcharts)
})(function(t) {
    var U = t.getOptions().plotOptions,
        X = t.pInt,
        z = t.pick,
        G = t.each,
        ea;
    U.solidgauge = t.merge(U.gauge, {
        colorByPoint: !0
    });
    ea = {
        initDataClasses: function(z) {
            var O = this,
                k = this.chart,
                p, P = 0,
                y = this.options;
            this.dataClasses = p = [];
            G(z.dataClasses, function(q, B) {
                var G;
                q = t.merge(q);
                p.push(q);
                q.color || ("category" === y.dataClassColor ? (G = k.options.colors, q.color = G[P++], P === G.length && (P = 0)) : q.color = O.tweenColors(t.Color(y.minColor),
                    t.Color(y.maxColor), B / (z.dataClasses.length - 1)))
            })
        },
        initStops: function(z) {
            this.stops = z.stops || [
                [0, this.options.minColor],
                [1, this.options.maxColor]
            ];
            G(this.stops, function(z) {
                z.color = t.Color(z[1])
            })
        },
        toColor: function(t, z) {
            var k, p = this.stops,
                G, y = this.dataClasses,
                q, B;
            if (y)
                for (B = y.length; B--;) {
                    if (q = y[B], G = q.from, p = q.to, (void 0 === G || t >= G) && (void 0 === p || t <= p)) {
                        k = q.color;
                        z && (z.dataClass = B);
                        break
                    }
                } else {
                    this.isLog && (t = this.val2lin(t));
                    k = 1 - (this.max - t) / (this.max - this.min);
                    for (B = p.length; B-- && !(k > p[B][0]););
                    G = p[B] || p[B + 1];
                    p = p[B + 1] || G;
                    k = 1 - (p[0] - k) / (p[0] - G[0] || 1);
                    k = this.tweenColors(G.color, p.color, k)
                }
            return k
        },
        tweenColors: function(t, z, k) {
            var p;
            z.rgba.length && t.rgba.length ? (t = t.rgba, z = z.rgba, p = 1 !== z[3] || 1 !== t[3], t = (p ? "rgba(" : "rgb(") + Math.round(z[0] + (t[0] - z[0]) * (1 - k)) + "," + Math.round(z[1] + (t[1] - z[1]) * (1 - k)) + "," + Math.round(z[2] + (t[2] - z[2]) * (1 - k)) + (p ? "," + (z[3] + (t[3] - z[3]) * (1 - k)) : "") + ")") : t = z.input || "none";
            return t
        }
    };
    G(["fill", "stroke"], function(z) {
        t.Fx.prototype[z + "Setter"] = function() {
            this.elem.attr(z, ea.tweenColors(t.Color(this.start),
                t.Color(this.end), this.pos))
        }
    });
    t.seriesTypes.solidgauge = t.extendClass(t.seriesTypes.gauge, {
        type: "solidgauge",
        pointAttrToOptions: {},
        bindAxes: function() {
            var z;
            t.seriesTypes.gauge.prototype.bindAxes.call(this);
            z = this.yAxis;
            t.extend(z, ea);
            z.options.dataClasses && z.initDataClasses(z.options);
            z.initStops(z.options)
        },
        drawPoints: function() {
            var G = this,
                O = G.yAxis,
                k = O.center,
                p = G.options,
                P = G.chart.renderer,
                y = p.overshoot,
                q = y && "number" === typeof y ? y / 180 * Math.PI : 0;
            t.each(G.points, function(t) {
                var y = t.graphic,
                    U = O.startAngleRad +
                    O.translate(t.y, null, null, null, !0),
                    F = X(z(t.options.radius, p.radius, 100)) * k[2] / 200,
                    S = X(z(t.options.innerRadius, p.innerRadius, 60)) * k[2] / 200,
                    C = O.toColor(t.y, t),
                    x = Math.min(O.startAngleRad, O.endAngleRad),
                    D = Math.max(O.startAngleRad, O.endAngleRad);
                "none" === C && (C = t.color || G.color || "none");
                "none" !== C && (t.color = C);
                U = Math.max(x - q, Math.min(D + q, U));
                !1 === p.wrap && (U = Math.max(x, Math.min(D, U)));
                x = Math.min(U, O.startAngleRad);
                U = Math.max(U, O.startAngleRad);
                U - x > 2 * Math.PI && (U = x + 2 * Math.PI);
                t.shapeArgs = S = {
                    x: k[0],
                    y: k[1],
                    r: F,
                    innerR: S,
                    start: x,
                    end: U,
                    fill: C
                };
                t.startR = F;
                y ? (t = S.d, y.animate(S), t && (S.d = t)) : (y = {
                    stroke: p.borderColor || "none",
                    "stroke-width": p.borderWidth || 0,
                    fill: C,
                    "sweep-flag": 0
                }, "square" !== p.linecap && (y["stroke-linecap"] = y["stroke-linejoin"] = "round"), t.graphic = P.arc(S).attr(y).add(G.group))
            })
        },
        animate: function(z) {
            z || (this.startAngleRad = this.yAxis.startAngleRad, t.seriesTypes.pie.prototype.animate.call(this, z))
        }
    })
});
