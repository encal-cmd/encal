/*!
 * dist/jquery.inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2018 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.0-beta.47
 */
!function webpackUniversalModuleDefinition(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("jQuery")); else if ("function" == typeof define && define.amd) define([ "jQuery" ], t); else {
        var a = "object" == typeof exports ? t(require("jQuery")) : t(e.jQuery);
        for (var i in a) ("object" == typeof exports ? exports : e)[i] = a[i];
    }
}(window, function(__WEBPACK_EXTERNAL_MODULE__5__) {
    return function(a) {
        var i = {};
        function __webpack_require__(e) {
            if (i[e]) return i[e].exports;
            var t = i[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return a[e].call(t.exports, t, t.exports, __webpack_require__), t.l = !0, t.exports;
        }
        return __webpack_require__.m = a, __webpack_require__.c = i, __webpack_require__.d = function(e, t, a) {
            __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: a
            });
        }, __webpack_require__.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, __webpack_require__.t = function(t, e) {
            if (1 & e && (t = __webpack_require__(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var a = Object.create(null);
            if (__webpack_require__.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var i in t) __webpack_require__.d(a, i, function(e) {
                return t[e];
            }.bind(null, i));
            return a;
        }, __webpack_require__.n = function(e) {
            var t = e && e.__esModule ? function getDefault() {
                return e.default;
            } : function getModuleExports() {
                return e;
            };
            return __webpack_require__.d(t, "a", t), t;
        }, __webpack_require__.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
    }([ function(e, t, a) {
        "use strict";
        var i = a(1);
        a(4) === a(5) && a(9), e.exports = i;
    }, function(e, t, a) {
        "use strict";
        a(2), a(7), a(8), e.exports = a(3);
    }, function(e, t, a) {
        "use strict";
        var i, n, r;
        "function" == typeof Symbol && Symbol.iterator;
        n = [ a(3) ], void 0 === (r = "function" == typeof (i = function(e) {
            return e.extendDefinitions({
                A: {
                    validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                    casing: "upper"
                },
                "&": {
                    validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                    casing: "upper"
                },
                "#": {
                    validator: "[0-9A-Fa-f]",
                    casing: "upper"
                }
            }), e.extendAliases({
                cssunit: {
                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                },
                url: {
                    regex: "(https?|ftp)//.*",
                    autoUnmask: !1
                },
                ip: {
                    mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                    definitions: {
                        i: {
                            validator: function validator(e, t, a, i, n) {
                                return e = -1 < a - 1 && "." !== t.buffer[a - 1] ? (e = t.buffer[a - 1] + e, -1 < a - 2 && "." !== t.buffer[a - 2] ? t.buffer[a - 2] + e : "0" + e) : "00" + e, 
                                new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e);
                            }
                        }
                    },
                    onUnMask: function onUnMask(e, t, a) {
                        return e;
                    },
                    inputmode: "numeric"
                },
                email: {
                    mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                    greedy: !1,
                    casing: "lower",
                    onBeforePaste: function onBeforePaste(e, t) {
                        return (e = e.toLowerCase()).replace("mailto:", "");
                    },
                    definitions: {
                        "*": {
                            validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                        },
                        "-": {
                            validator: "[0-9A-Za-z-]"
                        }
                    },
                    onUnMask: function onUnMask(e, t, a) {
                        return e;
                    },
                    inputmode: "email"
                },
                mac: {
                    mask: "##:##:##:##:##:##"
                },
                vin: {
                    mask: "V{13}9{4}",
                    definitions: {
                        V: {
                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                            casing: "upper"
                        }
                    },
                    clearIncomplete: !0,
                    autoUnmask: !0
                }
            }), e;
        }) ? i.apply(t, n) : i) || (e.exports = r);
    }, function(e, t, a) {
        "use strict";
        var i, n, r, T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        n = [ a(4), a(6) ], void 0 === (r = "function" == typeof (i = function(L, M, V) {
            var S = M.document, e = navigator.userAgent, x = 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/"), P = isInputEventSupported("touchstart"), _ = /iemobile/i.test(e), E = /iphone/i.test(e) && !_;
            function Inputmask(e, t, a) {
                if (!(this instanceof Inputmask)) return new Inputmask(e, t, a);
                this.el = V, this.events = {}, this.maskset = V, !(this.refreshValue = !1) !== a && (L.isPlainObject(e) ? t = e : (t = t || {}, 
                e && (t.alias = e)), this.opts = L.extend(!0, {}, this.defaults, t), this.noMasksCache = t && t.definitions !== V, 
                this.userOptions = t || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, t, this.opts));
            }
            function resolveAlias(e, t, a) {
                var i = Inputmask.prototype.aliases[e];
                return i ? (i.alias && resolveAlias(i.alias, V, a), L.extend(!0, a, i), L.extend(!0, a, t), 
                !0) : (null === a.mask && (a.mask = e), !1);
            }
            function generateMaskSet(a, s) {
                function generateMask(e, t, a) {
                    var i = !1;
                    if (null !== e && "" !== e || (i = null !== a.regex, e = i ? (e = a.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (i = !0, 
                    ".*")), 1 === e.length && !1 === a.greedy && 0 !== a.repeat && (a.placeholder = ""), 
                    0 < a.repeat || "*" === a.repeat || "+" === a.repeat) {
                        var n = "*" === a.repeat ? 0 : "+" === a.repeat ? 1 : a.repeat;
                        e = a.groupmarker[0] + e + a.groupmarker[1] + a.quantifiermarker[0] + n + "," + a.repeat + a.quantifiermarker[1];
                    }
                    var r, o = i ? "regex_" + a.regex : a.numericInput ? e.split("").reverse().join("") : e;
                    return Inputmask.prototype.masksCache[o] === V || !0 === s ? (r = {
                        mask: e,
                        maskToken: Inputmask.prototype.analyseMask(e, i, a),
                        validPositions: {},
                        _buffer: V,
                        buffer: V,
                        tests: {},
                        excludes: {},
                        metadata: t,
                        maskLength: V
                    }, !0 !== s && (Inputmask.prototype.masksCache[o] = r, r = L.extend(!0, {}, Inputmask.prototype.masksCache[o]))) : r = L.extend(!0, {}, Inputmask.prototype.masksCache[o]), 
                    r;
                }
                if (L.isFunction(a.mask) && (a.mask = a.mask(a)), L.isArray(a.mask)) {
                    if (1 < a.mask.length) {
                        if (null === a.keepStatic) {
                            a.keepStatic = "auto";
                            for (var e = 0; e < a.mask.length; e++) if (a.mask[e].charAt(0) !== a.mask[0].charAt(0)) {
                                a.keepStatic = !0;
                                break;
                            }
                        }
                        var i = a.groupmarker[0];
                        return L.each(a.isRTL ? a.mask.reverse() : a.mask, function(e, t) {
                            1 < i.length && (i += a.groupmarker[1] + a.alternatormarker + a.groupmarker[0]), 
                            t.mask === V || L.isFunction(t.mask) ? i += t : i += t.mask;
                        }), generateMask(i += a.groupmarker[1], a.mask, a);
                    }
                    a.mask = a.mask.pop();
                }
                return a.mask && a.mask.mask !== V && !L.isFunction(a.mask.mask) ? generateMask(a.mask.mask, a.mask, a) : generateMask(a.mask, a.mask, a);
            }
            function isInputEventSupported(e) {
                var t = S.createElement("input"), a = "on" + e, i = a in t;
                return i || (t.setAttribute(a, "return;"), i = "function" == typeof t[a]), t = null, 
                i;
            }
            function maskScope(e, t, F) {
                t = t || this.maskset, F = F || this.opts;
                var d, n, g, f, r, u = this, l = this.el, k = this.isRTL, o = !1, c = !1, h = !1, i = !1;
                function getMaskTemplate(e, t, a, i, n) {
                    var r = F.greedy;
                    n && (F.greedy = !1), t = t || 0;
                    var o, s, l, u = [], c = 0;
                    getLastValidPosition();
                    do {
                        if (!0 === e && getMaskSet().validPositions[c]) l = n && !0 === getMaskSet().validPositions[c].match.optionality && getMaskSet().validPositions[c + 1] === V && (!0 === getMaskSet().validPositions[c].generatedInput || getMaskSet().validPositions[c].input == F.skipOptionalPartCharacter && 0 < c) ? determineTestTemplate(c, getTests(c, o, c - 1)) : getMaskSet().validPositions[c], 
                        s = l.match, o = l.locator.slice(), u.push(!0 === a ? l.input : !1 === a ? s.nativeDef : getPlaceholder(c, s)); else {
                            l = getTestTemplate(c, o, c - 1), s = l.match, o = l.locator.slice();
                            var p = !0 !== i && (!1 !== F.jitMasking ? F.jitMasking : s.jit);
                            (!1 === p || p === V || "number" == typeof p && isFinite(p) && c < p) && u.push(!1 === a ? s.nativeDef : getPlaceholder(c, s));
                        }
                        "auto" === F.keepStatic && s.newBlockMarker && null !== s.fn && (F.keepStatic = c - 1), 
                        c++;
                    } while ((g === V || c < g) && (null !== s.fn || "" !== s.def) || c < t);
                    return "" === u[u.length - 1] && u.pop(), !1 === a && getMaskSet().maskLength !== V || (getMaskSet().maskLength = c - 1), 
                    F.greedy = r, u;
                }
                function getMaskSet() {
                    return t;
                }
                function resetMaskSet(e) {
                    var t = getMaskSet();
                    t.buffer = V, !0 !== e && (t.validPositions = {}, t.p = 0);
                }
                function getLastValidPosition(e, t, a) {
                    var i = -1, n = -1, r = a || getMaskSet().validPositions;
                    for (var o in e === V && (e = -1), r) {
                        var s = parseInt(o);
                        r[s] && (t || !0 !== r[s].generatedInput) && (s <= e && (i = s), e <= s && (n = s));
                    }
                    return -1 === i || i == e ? n : -1 == n ? i : e - i < n - e ? i : n;
                }
                function getDecisionTaker(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]), t !== V ? t.toString() : "";
                }
                function getLocator(e, t) {
                    var a = (e.alternation != V ? e.mloc[getDecisionTaker(e)] : e.locator).join("");
                    if ("" !== a) for (;a.length < t; ) a += "0";
                    return a;
                }
                function determineTestTemplate(e, t) {
                    for (var a, i, n, r = getTest(e = 0 < e ? e - 1 : 0), o = getLocator(r), s = 0; s < t.length; s++) {
                        var l = t[s];
                        a = getLocator(l, o.length);
                        var u = Math.abs(a - o);
                        (i === V || "" !== a && u < i || n && n.match.optionality && "master" === n.match.newBlockMarker && (!l.match.optionality || !l.match.newBlockMarker) || n && n.match.optionalQuantifier && !l.match.optionalQuantifier) && (i = u, 
                        n = l);
                    }
                    return n;
                }
                function getTestTemplate(e, t, a) {
                    return getMaskSet().validPositions[e] || determineTestTemplate(e, getTests(e, t ? t.slice() : t, a));
                }
                function getTest(e, t) {
                    return getMaskSet().validPositions[e] ? getMaskSet().validPositions[e] : (t || getTests(e))[0];
                }
                function positionCanMatchDefinition(e, t) {
                    for (var a = !1, i = getTests(e), n = 0; n < i.length; n++) if (i[n].match && i[n].match.def === t) {
                        a = !0;
                        break;
                    }
                    return a;
                }
                function getTests(D, e, t) {
                    var B, a = getMaskSet().maskToken, O = e ? t : 0, i = e ? e.slice() : [ 0 ], I = [], j = !1, N = e ? e.join("") : "";
                    function resolveTestFromToken(A, C, e, t) {
                        function handleMatch(e, t, a) {
                            function isFirstMatch(a, i) {
                                var n = 0 === L.inArray(a, i.matches);
                                return n || L.each(i.matches, function(e, t) {
                                    if (!0 === t.isQuantifier ? n = isFirstMatch(a, i.matches[e - 1]) : t.hasOwnProperty("matches") && (n = isFirstMatch(a, t)), 
                                    n) return !1;
                                }), n;
                            }
                            function resolveNdxInitializer(e, n, r) {
                                var o, s;
                                if ((getMaskSet().tests[e] || getMaskSet().validPositions[e]) && L.each(getMaskSet().tests[e] || [ getMaskSet().validPositions[e] ], function(e, t) {
                                    if (t.mloc[n]) return o = t, !1;
                                    var a = r !== V ? r : t.alternation, i = t.locator[a] !== V ? t.locator[a].toString().indexOf(n) : -1;
                                    (s === V || i < s) && -1 !== i && (o = t, s = i);
                                }), o) {
                                    var t = o.locator[o.alternation], a = o.mloc[n] || o.mloc[t] || o.locator;
                                    return a.slice((r !== V ? r : o.alternation) + 1);
                                }
                                return r !== V ? resolveNdxInitializer(e, n) : V;
                            }
                            function isSubsetOf(e, t) {
                                function expand(e) {
                                    for (var t, a, i = [], n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (a = e.charCodeAt(n + 1); ++t < a; ) i.push(String.fromCharCode(t)); else t = e.charCodeAt(n), 
                                    i.push(e.charAt(n));
                                    return i.join("");
                                }
                                return F.regex && null !== e.match.fn && null !== t.match.fn ? -1 !== expand(t.match.def.replace(/[\[\]]/g, "")).indexOf(expand(e.match.def.replace(/[\[\]]/g, ""))) : e.match.def === t.match.nativeDef;
                            }
                            function setMergeLocators(e, t) {
                                if (t === V || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
                                    e.mloc = e.mloc || {};
                                    var a = e.locator[e.alternation];
                                    if (a !== V) {
                                        if ("string" == typeof a && (a = a.split(",")[0]), e.mloc[a] === V && (e.mloc[a] = e.locator.slice()), 
                                        t !== V) {
                                            for (var i in t.mloc) "string" == typeof i && (i = i.split(",")[0]), e.mloc[i] === V && (e.mloc[i] = t.mloc[i]);
                                            e.locator[e.alternation] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = V;
                                }
                                return !1;
                            }
                            if (500 < O && a !== V) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                            if (O === D && e.matches === V) return I.push({
                                match: e,
                                locator: t.reverse(),
                                cd: N,
                                mloc: {}
                            }), !0;
                            if (e.matches !== V) {
                                if (e.isGroup && a !== e) {
                                    if (e = handleMatch(A.matches[L.inArray(e, A.matches) + 1], t, a)) return !0;
                                } else if (e.isOptional) {
                                    var i = e;
                                    if (e = resolveTestFromToken(e, C, t, a)) {
                                        if (L.each(I, function(e, t) {
                                            t.match.optionality = !0;
                                        }), B = I[I.length - 1].match, a !== V || !isFirstMatch(B, i)) return !0;
                                        j = !0, O = D;
                                    }
                                } else if (e.isAlternator) {
                                    var n, r = e, o = [], s = I.slice(), l = t.length, u = 0 < C.length ? C.shift() : -1;
                                    if (-1 === u || "string" == typeof u) {
                                        var c, p = O, f = C.slice(), m = [];
                                        if ("string" == typeof u) m = u.split(","); else for (c = 0; c < r.matches.length; c++) m.push(c.toString());
                                        if (getMaskSet().excludes[D]) {
                                            for (var g = m.slice(), d = 0, k = getMaskSet().excludes[D].length; d < k; d++) m.splice(m.indexOf(getMaskSet().excludes[D][d].toString()), 1);
                                            0 === m.length && (getMaskSet().excludes[D] = V, m = g);
                                        }
                                        (!0 === F.keepStatic || isFinite(parseInt(F.keepStatic)) && p >= F.keepStatic) && (m = m.slice(0, 1));
                                        for (var h = !1, v = 0; v < m.length; v++) {
                                            c = parseInt(m[v]), I = [], C = "string" == typeof u && resolveNdxInitializer(O, c, l) || f.slice(), 
                                            r.matches[c] && handleMatch(r.matches[c], [ c ].concat(t), a) ? e = !0 : 0 === v && (h = !0), 
                                            n = I.slice(), O = p, I = [];
                                            for (var y = 0; y < n.length; y++) {
                                                var b = n[y], M = !1;
                                                b.match.jit = b.match.jit || h, b.alternation = b.alternation || l, setMergeLocators(b);
                                                for (var S = 0; S < o.length; S++) {
                                                    var x = o[S];
                                                    if ("string" != typeof u || b.alternation !== V && -1 !== L.inArray(b.locator[b.alternation].toString(), m)) {
                                                        if (b.match.nativeDef === x.match.nativeDef) {
                                                            M = !0, setMergeLocators(x, b);
                                                            break;
                                                        }
                                                        if (isSubsetOf(b, x)) {
                                                            setMergeLocators(b, x) && (M = !0, o.splice(o.indexOf(x), 0, b));
                                                            break;
                                                        }
                                                        if (isSubsetOf(x, b)) {
                                                            setMergeLocators(x, b);
                                                            break;
                                                        }
                                                        if (w = x, void 0, !(!((T = T = b).locator.slice(T.alternation).join("") == w.locator.slice(w.alternation).join("")) || null !== T.match.fn || null === w.match.fn) && w.match.fn.test(T.match.def, getMaskSet(), D, !1, F, !1)) {
                                                            setMergeLocators(b, x) && (M = !0, o.splice(o.indexOf(x), 0, b));
                                                            break;
                                                        }
                                                    }
                                                }
                                                M || o.push(b);
                                            }
                                        }
                                        I = s.concat(o), O = D, j = 0 < I.length, e = 0 < o.length, C = f.slice();
                                    } else e = handleMatch(r.matches[u] || A.matches[u], [ u ].concat(t), a);
                                    if (e) return !0;
                                } else if (e.isQuantifier && a !== A.matches[L.inArray(e, A.matches) - 1]) for (var P = e, _ = 0 < C.length ? C.shift() : 0; _ < (isNaN(P.quantifier.max) ? _ + 1 : P.quantifier.max) && O <= D; _++) {
                                    var E = A.matches[L.inArray(P, A.matches) - 1];
                                    if (e = handleMatch(E, [ _ ].concat(t), E)) {
                                        if ((B = I[I.length - 1].match).optionalQuantifier = _ > P.quantifier.min - 1, B.jit = (_ || 1) * E.matches.indexOf(B) >= P.quantifier.jit, 
                                        B.optionalQuantifier && isFirstMatch(B, E)) {
                                            j = !0, O = D;
                                            break;
                                        }
                                        return B.jit && !B.optionalQuantifier && (B.jitOffset = E.matches.indexOf(B)), !0;
                                    }
                                } else if (e = resolveTestFromToken(e, C, t, a)) return !0;
                            } else O++;
                            var T, w;
                        }
                        for (var a = 0 < C.length ? C.shift() : 0; a < A.matches.length; a++) if (!0 !== A.matches[a].isQuantifier) {
                            var i = handleMatch(A.matches[a], [ a ].concat(e), t);
                            if (i && O === D) return i;
                            if (D < O) break;
                        }
                    }
                    if (-1 < D) {
                        if (e === V) {
                            for (var n, r = D - 1; (n = getMaskSet().validPositions[r] || getMaskSet().tests[r]) === V && -1 < r; ) r--;
                            n !== V && -1 < r && (i = function mergeLocators(e, t) {
                                var i = [];
                                return L.isArray(t) || (t = [ t ]), 0 < t.length && (t[0].alternation === V ? 0 === (i = determineTestTemplate(e, t.slice()).locator.slice()).length && (i = t[0].locator.slice()) : L.each(t, function(e, t) {
                                    if ("" !== t.def) if (0 === i.length) i = t.locator.slice(); else for (var a = 0; a < i.length; a++) t.locator[a] && -1 === i[a].toString().indexOf(t.locator[a]) && (i[a] += "," + t.locator[a]);
                                })), i;
                            }(r, n), N = i.join(""), O = r);
                        }
                        if (getMaskSet().tests[D] && getMaskSet().tests[D][0].cd === N) return getMaskSet().tests[D];
                        for (var o = i.shift(); o < a.length; o++) {
                            var s = resolveTestFromToken(a[o], i, [ o ]);
                            if (s && O === D || D < O) break;
                        }
                    }
                    return (0 === I.length || j) && I.push({
                        match: {
                            fn: null,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: N
                    }), e !== V && getMaskSet().tests[D] ? L.extend(!0, [], I) : (getMaskSet().tests[D] = L.extend(!0, [], I), 
                    getMaskSet().tests[D]);
                }
                function getBufferTemplate() {
                    return getMaskSet()._buffer === V && (getMaskSet()._buffer = getMaskTemplate(!1, 1), 
                    getMaskSet().buffer === V && (getMaskSet().buffer = getMaskSet()._buffer.slice())), 
                    getMaskSet()._buffer;
                }
                function getBuffer(e) {
                    return getMaskSet().buffer !== V && !0 !== e || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0), 
                    getMaskSet()._buffer === V && (getMaskSet()._buffer = getMaskSet().buffer.slice())), 
                    getMaskSet().buffer;
                }
                function refreshFromBuffer(e, t, a) {
                    var i, n;
                    if (!0 === e) resetMaskSet(), e = 0, t = a.length; else for (i = e; i < t; i++) delete getMaskSet().validPositions[i];
                    for (i = n = e; i < t; i++) if (resetMaskSet(!0), a[i] !== F.skipOptionalPartCharacter) {
                        var r = isValid(n, a[i], !0, !0);
                        !1 !== r && (resetMaskSet(!0), n = r.caret !== V ? r.caret : r.pos + 1);
                    }
                }
                function checkAlternationMatch(e, t, a) {
                    for (var i, n = F.greedy ? t : t.slice(0, 1), r = !1, o = a !== V ? a.split(",") : [], s = 0; s < o.length; s++) -1 !== (i = e.indexOf(o[s])) && e.splice(i, 1);
                    for (var l = 0; l < e.length; l++) if (-1 !== L.inArray(e[l], n)) {
                        r = !0;
                        break;
                    }
                    return r;
                }
                function alternate(e, t, a, i, n) {
                    var r, o, s, l, u, c, p, f = L.extend(!0, {}, getMaskSet().validPositions), m = !1, g = n !== V ? n : getLastValidPosition();
                    if (-1 === g && n === V) l = getTest(r = 0), o = l.alternation; else for (;0 <= g; g--) if ((s = getMaskSet().validPositions[g]) && s.alternation !== V) {
                        if (l && l.locator[s.alternation] !== s.locator[s.alternation]) break;
                        r = g, o = getMaskSet().validPositions[r].alternation, l = s;
                    }
                    if (o !== V) {
                        p = parseInt(r), getMaskSet().excludes[p] = getMaskSet().excludes[p] || [], !0 !== e && getMaskSet().excludes[p].push(getDecisionTaker(l));
                        var d = [], k = 0;
                        for (u = p; u < getLastValidPosition(V, !0) + 1; u++) (c = getMaskSet().validPositions[u]) && !0 !== c.generatedInput ? d.push(c.input) : u < e && k++, 
                        delete getMaskSet().validPositions[u];
                        for (;getMaskSet().excludes[p] && getMaskSet().excludes[p].length < 10; ) {
                            var h = -1 * k, v = d.slice();
                            for (getMaskSet().tests[p] = V, resetMaskSet(!0), m = !0; 0 < v.length; ) {
                                var y = v.shift();
                                if (!(m = isValid(getLastValidPosition(V, !0) + 1, y, !1, i, !0))) break;
                            }
                            if (m && t !== V) {
                                var b = getLastValidPosition(e) + 1;
                                for (u = p; u < getLastValidPosition() + 1; u++) ((c = getMaskSet().validPositions[u]) === V || null == c.match.fn) && u < e + h && h++;
                                m = isValid(b < (e += h) ? b : e, t, a, i, !0);
                            }
                            if (m) break;
                            if (resetMaskSet(), l = getTest(p), getMaskSet().validPositions = L.extend(!0, {}, f), 
                            !getMaskSet().excludes[p]) {
                                m = alternate(e, t, a, i, p - 1);
                                break;
                            }
                            var M = getDecisionTaker(l);
                            if (-1 !== getMaskSet().excludes[p].indexOf(M)) {
                                m = alternate(e, t, a, i, p - 1);
                                break;
                            }
                            for (getMaskSet().excludes[p].push(M), u = p; u < getLastValidPosition(V, !0) + 1; u++) delete getMaskSet().validPositions[u];
                        }
                    }
                    return getMaskSet().excludes[p] = V, m;
                }
                function isValid(u, e, t, c, a, i) {
                    function isSelection(e) {
                        return k ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1;
                    }
                    t = !0 === t;
                    var n = u;
                    function _isValid(r, o, s) {
                        var l = !1;
                        return L.each(getTests(r), function(e, t) {
                            var a = t.match;
                            if (getBuffer(!0), !1 !== (l = null != a.fn ? a.fn.test(o, getMaskSet(), r, s, F, isSelection(u)) : (o === a.def || o === F.skipOptionalPartCharacter) && "" !== a.def && {
                                c: getPlaceholder(r, a, !0) || a.def,
                                pos: r
                            })) {
                                var i = l.c !== V ? l.c : o, n = r;
                                return i = i === F.skipOptionalPartCharacter && null === a.fn ? getPlaceholder(r, a, !0) || a.def : i, 
                                l.remove !== V && (L.isArray(l.remove) || (l.remove = [ l.remove ]), L.each(l.remove.sort(function(e, t) {
                                    return t - e;
                                }), function(e, t) {
                                    revalidateMask({
                                        begin: t,
                                        end: t + 1
                                    });
                                })), l.insert !== V && (L.isArray(l.insert) || (l.insert = [ l.insert ]), L.each(l.insert.sort(function(e, t) {
                                    return e - t;
                                }), function(e, t) {
                                    isValid(t.pos, t.c, !0, c);
                                })), !0 !== l && l.pos !== V && l.pos !== r && (n = l.pos), !0 !== l && l.pos === V && l.c === V || revalidateMask(u, L.extend({}, t, {
                                    input: function casing(e, t, a) {
                                        switch (F.casing || t.casing) {
                                          case "upper":
                                            e = e.toUpperCase();
                                            break;

                                          case "lower":
                                            e = e.toLowerCase();
                                            break;

                                          case "title":
                                            var i = getMaskSet().validPositions[a - 1];
                                            e = 0 === a || i && i.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                            break;

                                          default:
                                            if (L.isFunction(F.casing)) {
                                                var n = Array.prototype.slice.call(arguments);
                                                n.push(getMaskSet().validPositions), e = F.casing.apply(this, n);
                                            }
                                        }
                                        return e;
                                    }(i, a, n)
                                }), c, n) || (l = !1), !1;
                            }
                        }), l;
                    }
                    u.begin !== V && (n = k ? u.end : u.begin);
                    var r = !0, o = L.extend(!0, {}, getMaskSet().validPositions);
                    if (L.isFunction(F.preValidation) && !t && !0 !== c && !0 !== i && (r = F.preValidation(getBuffer(), n, e, isSelection(u), F, getMaskSet())), 
                    !0 === r) {
                        if (trackbackPositions(V, n, !0), (g === V || n < g) && (r = _isValid(n, e, t), 
                        (!t || !0 === c) && !1 === r && !0 !== i)) {
                            var s = getMaskSet().validPositions[n];
                            if (!s || null !== s.match.fn || s.match.def !== e && e !== F.skipOptionalPartCharacter) {
                                if ((F.insertMode || getMaskSet().validPositions[seekNext(n)] === V) && !isMask(n, !0)) for (var l = n + 1, p = seekNext(n); l <= p; l++) if (!1 !== (r = _isValid(l, e, t))) {
                                    r = trackbackPositions(n, r.pos !== V ? r.pos : l) || r, n = l;
                                    break;
                                }
                            } else r = {
                                caret: seekNext(n)
                            };
                        }
                        !1 !== r || !1 === F.keepStatic || null != F.regex && !isComplete(getBuffer()) || t || !0 === a || (r = alternate(n, e, t, c)), 
                        !0 === r && (r = {
                            pos: n
                        });
                    }
                    if (L.isFunction(F.postValidation) && !1 !== r && !t && !0 !== c && !0 !== i) {
                        var f = F.postValidation(getBuffer(!0), u.begin !== V ? k ? u.end : u.begin : u, r, F);
                        if (f !== V) {
                            if (f.refreshFromBuffer && f.buffer) {
                                var m = f.refreshFromBuffer;
                                refreshFromBuffer(!0 === m ? m : m.start, m.end, f.buffer);
                            }
                            r = !0 === f ? r : f;
                        }
                    }
                    return r && r.pos === V && (r.pos = n), !1 !== r && !0 !== i || (resetMaskSet(!0), 
                    getMaskSet().validPositions = L.extend(!0, {}, o)), r;
                }
                function trackbackPositions(e, t, a) {
                    var i;
                    if (e === V) for (e = t - 1; 0 < e && !getMaskSet().validPositions[e]; e--) ;
                    for (var n = e; n < t; n++) if (getMaskSet().validPositions[n] === V && !isMask(n, !0)) {
                        var r = 0 == n ? getTest(n) : getMaskSet().validPositions[n - 1];
                        if (r) {
                            var o = getTests(n).slice();
                            "" === o[o.length - 1].match.def && o.pop();
                            var s = determineTestTemplate(n, o);
                            if ((s = L.extend({}, s, {
                                input: getPlaceholder(n, s.match, !0) || s.match.def
                            })).generatedInput = !0, revalidateMask(n, s, !0), !0 !== a) {
                                var l = getMaskSet().validPositions[t].input;
                                getMaskSet().validPositions[t] = V, i = isValid(t, l, !0, !0);
                            }
                        }
                    }
                    return i;
                }
                function revalidateMask(e, t, a, i) {
                    function IsEnclosedStatic(e, t, a) {
                        var i = t[e];
                        if (i === V || (null !== i.match.fn || !0 === i.match.optionality) && i.input !== F.radixPoint) return !1;
                        var n = a.begin <= e - 1 ? t[e - 1] && null === t[e - 1].match.fn && t[e - 1] : t[e - 1], r = a.end > e + 1 ? t[e + 1] && null === t[e + 1].match.fn && t[e + 1] : t[e + 1];
                        return n && r;
                    }
                    var n = e.begin !== V ? e.begin : e, r = e.end !== V ? e.end : e;
                    if (e.begin > e.end && (n = e.end, r = e.begin), i = i !== V ? i : n, n !== r || F.insertMode && getMaskSet().validPositions[i] !== V && a === V) {
                        var o = L.extend(!0, {}, getMaskSet().validPositions), s = getLastValidPosition(V, !0);
                        for (getMaskSet().p = n, f = s; n <= f; f--) getMaskSet().validPositions[f] && "+" === getMaskSet().validPositions[f].match.nativeDef && (F.isNegative = !1), 
                        delete getMaskSet().validPositions[f];
                        var l = !0, u = i, c = (getMaskSet().validPositions, !1), p = u, f = u;
                        for (t && (getMaskSet().validPositions[i] = L.extend(!0, {}, t), p++, u++, n < r && f++); f <= s; f++) {
                            var m = o[f];
                            if (m !== V && (r <= f || n <= f && !0 !== m.generatedInput && IsEnclosedStatic(f, o, {
                                begin: n,
                                end: r
                            }))) {
                                for (;"" !== getTest(p).match.def; ) {
                                    if (!1 === c && o[p] && o[p].match.nativeDef === m.match.nativeDef) getMaskSet().validPositions[p] = L.extend(!0, {}, o[p]), 
                                    getMaskSet().validPositions[p].input = m.input, trackbackPositions(V, p, !0), u = p + 1, 
                                    l = !0; else if (F.shiftPositions && positionCanMatchDefinition(p, m.match.def)) {
                                        var g = isValid(p, m.input, !0, !0);
                                        l = !1 !== g, u = g.caret || g.insert ? getLastValidPosition() : p + 1, c = !0;
                                    } else l = !0 === m.generatedInput || m.input === F.radixPoint && !0 === F.numericInput;
                                    if (l) break;
                                    if (!l && r < p && isMask(p, !0) && (null !== m.match.fn || p > getMaskSet().maskLength)) break;
                                    p++;
                                }
                                "" == getTest(p).match.def && (l = !1), p = u;
                            }
                            if (!l) break;
                        }
                        if (!l) return getMaskSet().validPositions = L.extend(!0, {}, o), resetMaskSet(!0), 
                        !1;
                    } else t && (getMaskSet().validPositions[i] = L.extend(!0, {}, t));
                    return resetMaskSet(!0), !0;
                }
                function isMask(e, t) {
                    var a = getTestTemplate(e).match;
                    if ("" === a.def && (a = getTest(e).match), null != a.fn) return a.fn;
                    if (!0 !== t && -1 < e) {
                        var i = getTests(e);
                        return i.length > 1 + ("" === i[i.length - 1].match.def ? 1 : 0);
                    }
                    return !1;
                }
                function seekNext(e, t) {
                    for (var a = e + 1; "" !== getTest(a).match.def && (!0 === t && (!0 !== getTest(a).match.newBlockMarker || !isMask(a)) || !0 !== t && !isMask(a)); ) a++;
                    return a;
                }
                function seekPrevious(e, t) {
                    var a, i = e;
                    if (i <= 0) return 0;
                    for (;0 < --i && (!0 === t && !0 !== getTest(i).match.newBlockMarker || !0 !== t && !isMask(i) && ((a = getTests(i)).length < 2 || 2 === a.length && "" === a[1].match.def)); ) ;
                    return i;
                }
                function writeBuffer(e, t, a, i, n) {
                    if (i && L.isFunction(F.onBeforeWrite)) {
                        var r = F.onBeforeWrite.call(u, i, t, a, F);
                        if (r) {
                            if (r.refreshFromBuffer) {
                                var o = r.refreshFromBuffer;
                                refreshFromBuffer(!0 === o ? o : o.start, o.end, r.buffer || t), t = getBuffer(!0);
                            }
                            a !== V && (a = r.caret !== V ? r.caret : a);
                        }
                    }
                    if (e !== V && (e.inputmask._valueSet(t.join("")), a === V || i !== V && "blur" === i.type ? renderColorMask(e, a, 0 === t.length) : caret(e, a), 
                    !0 === n)) {
                        var s = L(e), l = e.inputmask._valueGet();
                        c = !0, s.trigger("input"), setTimeout(function() {
                            l === getBufferTemplate().join("") ? s.trigger("cleared") : !0 === isComplete(t) && s.trigger("complete");
                        }, 0);
                    }
                }
                function getPlaceholder(e, t, a) {
                    if ((t = t || getTest(e).match).placeholder !== V || !0 === a) return L.isFunction(t.placeholder) ? t.placeholder(F) : t.placeholder;
                    if (null !== t.fn) return F.placeholder.charAt(e % F.placeholder.length);
                    if (-1 < e && getMaskSet().validPositions[e] === V) {
                        var i, n = getTests(e), r = [];
                        if (n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0)) for (var o = 0; o < n.length; o++) if (!0 !== n[o].match.optionality && !0 !== n[o].match.optionalQuantifier && (null === n[o].match.fn || i === V || !1 !== n[o].match.fn.test(i.match.def, getMaskSet(), e, !0, F)) && (r.push(n[o]), 
                        null === n[o].match.fn && (i = n[o]), 1 < r.length && /[0-9a-bA-Z]/.test(r[0].match.def))) return F.placeholder.charAt(e % F.placeholder.length);
                    }
                    return t.def;
                }
                function HandleNativePlaceholder(e, t) {
                    if (x && e.inputmask._valueGet() !== t) {
                        var a = getBuffer().slice(), i = e.inputmask._valueGet();
                        i !== t && (-1 === getLastValidPosition() && i === getBufferTemplate().join("") ? a = [] : clearOptionalTail(a), 
                        writeBuffer(e, a));
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }
                var a, s = {
                    on: function on(e, t, r) {
                        var a = function ev(e) {
                            var t = this;
                            if (t.inputmask === V && "FORM" !== this.nodeName) {
                                var a = L.data(t, "_inputmask_opts");
                                a ? new Inputmask(a).mask(t) : s.off(t);
                            } else {
                                if ("setvalue" === e.type || "FORM" === this.nodeName || !(t.disabled || t.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === F.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                                    switch (e.type) {
                                      case "input":
                                        if (!0 === c) return c = !1, e.preventDefault();
                                        if (P) {
                                            var i = arguments;
                                            return setTimeout(function() {
                                                r.apply(t, i), caret(t, t.inputmask.caretPos, V, !0);
                                            }, 0), !1;
                                        }
                                        break;

                                      case "keydown":
                                        c = o = !1;
                                        break;

                                      case "keypress":
                                        if (!0 === o) return e.preventDefault();
                                        o = !0;
                                        break;

                                      case "click":
                                        if (_ || E) {
                                            var i = arguments;
                                            return setTimeout(function() {
                                                r.apply(t, i);
                                            }, 0), !1;
                                        }
                                    }
                                    var n = r.apply(t, arguments);
                                    return !1 === n && (e.preventDefault(), e.stopPropagation()), n;
                                }
                                e.preventDefault();
                            }
                        };
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(a), 
                        -1 !== L.inArray(t, [ "submit", "reset" ]) ? null !== e.form && L(e.form).on(t, a) : L(e).on(t, a);
                    },
                    off: function off(i, e) {
                        var t;
                        i.inputmask && i.inputmask.events && (e ? (t = [])[e] = i.inputmask.events[e] : t = i.inputmask.events, 
                        L.each(t, function(e, t) {
                            for (;0 < t.length; ) {
                                var a = t.pop();
                                -1 !== L.inArray(e, [ "submit", "reset" ]) ? null !== i.form && L(i.form).off(e, a) : L(i).off(e, a);
                            }
                            delete i.inputmask.events[e];
                        }));
                    }
                }, v = {
                    keydownEvent: function keydownEvent(e) {
                        var t = this, a = L(t), i = e.keyCode, n = caret(t);
                        if (i === Inputmask.keyCode.BACKSPACE || i === Inputmask.keyCode.DELETE || E && i === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && i === Inputmask.keyCode.X && !isInputEventSupported("cut")) e.preventDefault(), 
                        handleRemove(0, i, n), writeBuffer(t, getBuffer(!0), getMaskSet().p, e, t.inputmask._valueGet() !== getBuffer().join("")); else if (i === Inputmask.keyCode.END || i === Inputmask.keyCode.PAGE_DOWN) {
                            e.preventDefault();
                            var r = seekNext(getLastValidPosition());
                            caret(t, e.shiftKey ? n.begin : r, r, !0);
                        } else i === Inputmask.keyCode.HOME && !e.shiftKey || i === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), 
                        caret(t, 0, e.shiftKey ? n.begin : 0, !0)) : (F.undoOnEscape && i === Inputmask.keyCode.ESCAPE || 90 === i && e.ctrlKey) && !0 !== e.altKey ? (checkVal(t, !0, !1, d.split("")), 
                        a.trigger("click")) : i !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === F.tabThrough && i === Inputmask.keyCode.TAB && (!0 === e.shiftKey ? (null === getTest(n.begin).match.fn && (n.begin = seekNext(n.begin)), 
                        n.end = seekPrevious(n.begin, !0), n.begin = seekPrevious(n.end, !0)) : (n.begin = seekNext(n.begin, !0), 
                        n.end = seekNext(n.begin, !0), n.end < getMaskSet().maskLength && n.end--), n.begin < getMaskSet().maskLength && (e.preventDefault(), 
                        caret(t, n.begin, n.end))) : (F.insertMode = !F.insertMode, t.setAttribute("im-insert", F.insertMode));
                        F.onKeyDown.call(this, e, getBuffer(), caret(t).begin, F), h = -1 !== L.inArray(i, F.ignorables);
                    },
                    keypressEvent: function keypressEvent(e, t, a, i, n) {
                        var r = this, o = L(r), s = e.which || e.charCode || e.keyCode;
                        if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || h)) return s === Inputmask.keyCode.ENTER && d !== getBuffer().join("") && (d = getBuffer().join(""), 
                        setTimeout(function() {
                            o.trigger("change");
                        }, 0)), !0;
                        if (s) {
                            46 === s && !1 === e.shiftKey && "" !== F.radixPoint && (s = F.radixPoint.charCodeAt(0));
                            var l, u = t ? {
                                begin: n,
                                end: n
                            } : caret(r), c = String.fromCharCode(s), p = 0;
                            if (F._radixDance && F.numericInput) {
                                var f = getBuffer().indexOf(F.radixPoint.charAt(0)) + 1;
                                u.begin <= f && (s === F.radixPoint.charCodeAt(0) && (p = 1), u.begin -= 1, u.end -= 1);
                            }
                            getMaskSet().writeOutBuffer = !0;
                            var m = isValid(u, c, i);
                            if (!1 !== m && (resetMaskSet(!0), l = m.caret !== V ? m.caret : seekNext(m.pos.begin ? m.pos.begin : m.pos), 
                            getMaskSet().p = l), l = (F.numericInput && m.caret === V ? seekPrevious(l) : l) + p, 
                            !1 !== a && (setTimeout(function() {
                                F.onKeyValidation.call(r, s, m, F);
                            }, 0), getMaskSet().writeOutBuffer && !1 !== m)) {
                                var g = getBuffer();
                                writeBuffer(r, g, l, e, !0 !== t);
                            }
                            if (e.preventDefault(), t) return !1 !== m && (m.forwardPosition = l), m;
                        }
                    },
                    pasteEvent: function pasteEvent(e) {
                        var t, a = this, i = e.originalEvent || e, n = (L(a), a.inputmask._valueGet(!0)), r = caret(a);
                        k && (t = r.end, r.end = r.begin, r.begin = t);
                        var o = n.substr(0, r.begin), s = n.substr(r.end, n.length);
                        if (o === (k ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, r.begin).join("") && (o = ""), 
                        s === (k ? getBufferTemplate().reverse() : getBufferTemplate()).slice(r.end).join("") && (s = ""), 
                        M.clipboardData && M.clipboardData.getData) n = o + M.clipboardData.getData("Text") + s; else {
                            if (!i.clipboardData || !i.clipboardData.getData) return !0;
                            n = o + i.clipboardData.getData("text/plain") + s;
                        }
                        var l = n;
                        if (L.isFunction(F.onBeforePaste)) {
                            if (!1 === (l = F.onBeforePaste.call(u, n, F))) return e.preventDefault();
                            l || (l = n);
                        }
                        return checkVal(a, !1, !1, l.toString().split("")), writeBuffer(a, getBuffer(), seekNext(getLastValidPosition()), e, d !== getBuffer().join("")), 
                        e.preventDefault();
                    },
                    inputFallBackEvent: function inputFallBackEvent(e) {
                        var i = this, t = i.inputmask._valueGet();
                        if (getBuffer().join("") !== t) {
                            var a = caret(i);
                            if (t = function ieMobileHandler(e, t, a) {
                                if (_) {
                                    var i = t.replace(getBuffer().join(""), "");
                                    if (1 === i.length) {
                                        var n = t.split("");
                                        n.splice(a.begin, 0, i), t = n.join("");
                                    }
                                }
                                return t;
                            }(0, t = function radixPointHandler(e, t, a) {
                                return "." === t.charAt(a.begin - 1) && "" !== F.radixPoint && ((t = t.split(""))[a.begin - 1] = F.radixPoint.charAt(0), 
                                t = t.join("")), t;
                            }(0, t, a), a), getBuffer().join("") !== t) {
                                var n = getBuffer().join(""), r = !F.numericInput && t.length > n.length ? -1 : 0, o = t.substr(0, a.begin), s = t.substr(a.begin), l = n.substr(0, a.begin + r), u = n.substr(a.begin + r), c = a, p = "", f = !1;
                                if (o !== l) {
                                    var m, g = (f = o.length >= l.length) ? o.length : l.length;
                                    for (m = 0; o.charAt(m) === l.charAt(m) && m < g; m++) ;
                                    f && (c.begin = m - r, p += o.slice(m, c.end));
                                }
                                if (s !== u && (s.length > u.length ? p += s.slice(0, 1) : s.length < u.length && (c.end += u.length - s.length, 
                                f || "" === F.radixPoint || "" !== s || o.charAt(c.begin + r - 1) !== F.radixPoint || (c.begin--, 
                                p = F.radixPoint))), writeBuffer(i, getBuffer(), {
                                    begin: c.begin + r,
                                    end: c.end + r
                                }), 0 < p.length) L.each(p.split(""), function(e, t) {
                                    var a = new L.Event("keypress");
                                    a.which = t.charCodeAt(0), h = !1, v.keypressEvent.call(i, a);
                                }); else {
                                    c.begin === c.end - 1 && (c.begin = seekPrevious(c.begin + 1), c.begin === c.end - 1 ? caret(i, c.begin) : caret(i, c.begin, c.end));
                                    var d = new L.Event("keydown");
                                    d.keyCode = F.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE, 
                                    v.keydownEvent.call(i, d);
                                }
                                e.preventDefault();
                            }
                        }
                    },
                    beforeInputEvent: function beforeInputEvent(e) {
                        if (e.cancelable) {
                            var i = this;
                            switch (e.inputType) {
                              case "insertText":
                                return L.each(e.data.split(""), function(e, t) {
                                    var a = new L.Event("keypress");
                                    a.which = t.charCodeAt(0), h = !1, v.keypressEvent.call(i, a);
                                }), e.preventDefault();

                              case "deleteContentBackward":
                                var t = new L.Event("keydown");
                                return t.keyCode = Inputmask.keyCode.BACKSPACE, v.keydownEvent.call(i, t), e.preventDefault();

                              case "deleteContentForward":
                                var t = new L.Event("keydown");
                                return t.keyCode = Inputmask.keyCode.DELETE, v.keydownEvent.call(i, t), e.preventDefault();
                            }
                        }
                    },
                    setValueEvent: function setValueEvent(e) {
                        this.inputmask.refreshValue = !1;
                        var t = e && e.detail ? e.detail[0] : arguments[1], t = t || this.inputmask._valueGet(!0);
                        L.isFunction(F.onBeforeMask) && (t = F.onBeforeMask.call(u, t, F) || t), checkVal(this, !0, !1, t = t.split("")), 
                        d = getBuffer().join(""), (F.clearMaskOnLostFocus || F.clearIncomplete) && this.inputmask._valueGet() === getBufferTemplate().join("") && this.inputmask._valueSet("");
                    },
                    focusEvent: function focusEvent(e) {
                        var t = this, a = t.inputmask._valueGet();
                        F.showMaskOnFocus && (!F.showMaskOnHover || F.showMaskOnHover && "" === a) && (t.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(t, getBuffer(), seekNext(getLastValidPosition())) : !1 === i && caret(t, seekNext(getLastValidPosition()))), 
                        !0 === F.positionCaretOnTab && !1 === i && v.clickEvent.apply(t, [ e, !0 ]), d = getBuffer().join("");
                    },
                    mouseleaveEvent: function mouseleaveEvent(e) {
                        i = !1, F.clearMaskOnLostFocus && S.activeElement !== this && HandleNativePlaceholder(this, r);
                    },
                    clickEvent: function clickEvent(e, u) {
                        var c = this;
                        setTimeout(function() {
                            if (S.activeElement === c) {
                                var e = caret(c);
                                if (u && (k ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (F.positionCaretOnClick) {
                                  case "none":
                                    break;

                                  case "select":
                                    caret(c, 0, getBuffer().length);
                                    break;

                                  case "ignore":
                                    caret(c, seekNext(getLastValidPosition()));
                                    break;

                                  case "radixFocus":
                                    if (function doRadixFocus(e) {
                                        if ("" !== F.radixPoint) {
                                            var t = getMaskSet().validPositions;
                                            if (t[e] === V || t[e].input === getPlaceholder(e)) {
                                                if (e < seekNext(-1)) return !0;
                                                var a = L.inArray(F.radixPoint, getBuffer());
                                                if (-1 !== a) {
                                                    for (var i in t) if (a < i && t[i].input !== getPlaceholder(i)) return !1;
                                                    return !0;
                                                }
                                            }
                                        }
                                        return !1;
                                    }(e.begin)) {
                                        var t = getBuffer().join("").indexOf(F.radixPoint);
                                        caret(c, F.numericInput ? seekNext(t) : t);
                                        break;
                                    }

                                  default:
                                    var a = e.begin, i = getLastValidPosition(a, !0), n = seekNext(i);
                                    if (a < n) caret(c, isMask(a, !0) || isMask(a - 1, !0) ? a : seekNext(a)); else {
                                        var r = getMaskSet().validPositions[i], o = getTestTemplate(n, r ? r.match.locator : V, r), s = getPlaceholder(n, o.match);
                                        if ("" !== s && getBuffer()[n] !== s && !0 !== o.match.optionalQuantifier && !0 !== o.match.newBlockMarker || !isMask(n, F.keepStatic) && o.match.def === s) {
                                            var l = seekNext(n);
                                            (l <= a || a === n) && (n = l);
                                        }
                                        caret(c, n);
                                    }
                                }
                            }
                        }, 0);
                    },
                    cutEvent: function cutEvent(e) {
                        L(this);
                        var t = caret(this), a = e.originalEvent || e, i = M.clipboardData || a.clipboardData, n = k ? getBuffer().slice(t.end, t.begin) : getBuffer().slice(t.begin, t.end);
                        i.setData("text", k ? n.reverse().join("") : n.join("")), S.execCommand && S.execCommand("copy"), 
                        handleRemove(0, Inputmask.keyCode.DELETE, t), writeBuffer(this, getBuffer(), getMaskSet().p, e, d !== getBuffer().join(""));
                    },
                    blurEvent: function blurEvent(e) {
                        var t = L(this);
                        if (this.inputmask) {
                            HandleNativePlaceholder(this, r);
                            var a = this.inputmask._valueGet(), i = getBuffer().slice();
                            "" === a && f === V || (F.clearMaskOnLostFocus && (-1 === getLastValidPosition() && a === getBufferTemplate().join("") ? i = [] : clearOptionalTail(i)), 
                            !1 === isComplete(i) && (setTimeout(function() {
                                t.trigger("incomplete");
                            }, 0), F.clearIncomplete && (resetMaskSet(), i = F.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 
                            writeBuffer(this, i, V, e)), d !== getBuffer().join("") && (d = i.join(""), t.trigger("change"));
                        }
                    },
                    mouseenterEvent: function mouseenterEvent(e) {
                        i = !0, S.activeElement !== this && F.showMaskOnHover && HandleNativePlaceholder(this, (k ? getBuffer().slice().reverse() : getBuffer()).join(""));
                    },
                    submitEvent: function submitEvent(e) {
                        d !== getBuffer().join("") && n.trigger("change"), F.clearMaskOnLostFocus && -1 === getLastValidPosition() && l.inputmask._valueGet && l.inputmask._valueGet() === getBufferTemplate().join("") && l.inputmask._valueSet(""), 
                        F.clearIncomplete && !1 === isComplete(getBuffer()) && l.inputmask._valueSet(""), 
                        F.removeMaskOnSubmit && (l.inputmask._valueSet(l.inputmask.unmaskedvalue(), !0), 
                        setTimeout(function() {
                            writeBuffer(l, getBuffer());
                        }, 0));
                    },
                    resetEvent: function resetEvent(e) {
                        l.inputmask.refreshValue = !0, setTimeout(function() {
                            n.trigger("setvalue");
                        }, 0);
                    }
                };
                function checkVal(n, e, r, t, a) {
                    var o = this || n.inputmask, s = t.slice(), l = "", u = -1, c = V;
                    if (resetMaskSet(), r || !0 === F.autoUnmask) u = seekNext(u); else {
                        var i = getBufferTemplate().slice(0, seekNext(-1)).join(""), p = s.join("").match(new RegExp("^" + Inputmask.escapeRegex(i), "g"));
                        p && 0 < p.length && (s.splice(0, p.length * i.length), u = seekNext(u));
                    }
                    -1 === u ? (getMaskSet().p = seekNext(u), u = 0) : getMaskSet().p = u, o.caretPos = {
                        begin: u
                    }, L.each(s, function(e, t) {
                        if (t !== V) if (getMaskSet().validPositions[e] === V && s[e] === getPlaceholder(e) && isMask(e, !0) && !1 === isValid(e, s[e], !0, V, V, !0)) getMaskSet().p++; else {
                            var a = new L.Event("_checkval");
                            a.which = t.charCodeAt(0), l += t;
                            var i = getLastValidPosition(V, !0);
                            !function isTemplateMatch(e, t) {
                                return -1 !== getMaskTemplate(!0, 0, !1).slice(e, seekNext(e)).join("").replace(/'/g, "").indexOf(t) && !isMask(e) && (getTest(e).match.nativeDef === t.charAt(0) || null === getTest(e).match.fn && getTest(e).match.nativeDef === "'" + t.charAt(0) || " " === getTest(e).match.nativeDef && (getTest(e + 1).match.nativeDef === t.charAt(0) || null === getTest(e + 1).match.fn && getTest(e + 1).match.nativeDef === "'" + t.charAt(0)));
                            }(u, l) ? (c = v.keypressEvent.call(n, a, !0, !1, r, o.caretPos.begin)) && (u = o.caretPos.begin + 1, 
                            l = "") : c = v.keypressEvent.call(n, a, !0, !1, r, i + 1), c && (writeBuffer(V, getBuffer(), c.forwardPosition, a, !1), 
                            o.caretPos = {
                                begin: c.forwardPosition,
                                end: c.forwardPosition
                            });
                        }
                    }), e && writeBuffer(n, getBuffer(), c ? c.forwardPosition : V, a || new L.Event("checkval"), a && "input" === a.type);
                }
                function unmaskedvalue(e) {
                    if (e) {
                        if (e.inputmask === V) return e.value;
                        e.inputmask && e.inputmask.refreshValue && v.setValueEvent.call(e);
                    }
                    var t = [], a = getMaskSet().validPositions;
                    for (var i in a) a[i].match && null != a[i].match.fn && t.push(a[i].input);
                    var n = 0 === t.length ? "" : (k ? t.reverse() : t).join("");
                    if (L.isFunction(F.onUnMask)) {
                        var r = (k ? getBuffer().slice().reverse() : getBuffer()).join("");
                        n = F.onUnMask.call(u, r, n, F);
                    }
                    return n;
                }
                function caret(e, t, a, i) {
                    function translatePosition(e) {
                        return !k || "number" != typeof e || F.greedy && "" === F.placeholder || !l || (e = l.inputmask._valueGet().length - e), 
                        e;
                    }
                    var n;
                    if (t === V) return "selectionStart" in e ? (t = e.selectionStart, a = e.selectionEnd) : M.getSelection ? (n = M.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && n.commonAncestorContainer !== e || (t = n.startOffset, 
                    a = n.endOffset) : S.selection && S.selection.createRange && (n = S.selection.createRange(), 
                    t = 0 - n.duplicate().moveStart("character", -e.inputmask._valueGet().length), a = t + n.text.length), 
                    {
                        begin: i ? t : translatePosition(t),
                        end: i ? a : translatePosition(a)
                    };
                    if (L.isArray(t) && (a = k ? t[0] : t[1], t = k ? t[1] : t[0]), t.begin !== V && (a = k ? t.begin : t.end, 
                    t = k ? t.end : t.begin), "number" == typeof t) {
                        t = i ? t : translatePosition(t), a = "number" == typeof (a = i ? a : translatePosition(a)) ? a : t;
                        var r = parseInt(((e.ownerDocument.defaultView || M).getComputedStyle ? (e.ownerDocument.defaultView || M).getComputedStyle(e, null) : e.currentStyle).fontSize) * a;
                        if (e.scrollLeft = r > e.scrollWidth ? r : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: a
                        }, e === S.activeElement) {
                            if ("selectionStart" in e) e.selectionStart = t, e.selectionEnd = a; else if (M.getSelection) {
                                if (n = S.createRange(), e.firstChild === V || null === e.firstChild) {
                                    var o = S.createTextNode("");
                                    e.appendChild(o);
                                }
                                n.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                n.setEnd(e.firstChild, a < e.inputmask._valueGet().length ? a : e.inputmask._valueGet().length), 
                                n.collapse(!0);
                                var s = M.getSelection();
                                s.removeAllRanges(), s.addRange(n);
                            } else e.createTextRange && ((n = e.createTextRange()).collapse(!0), n.moveEnd("character", a), 
                            n.moveStart("character", t), n.select());
                            renderColorMask(e, {
                                begin: t,
                                end: a
                            });
                        }
                    }
                }
                function determineLastRequiredPosition(e) {
                    var t, a, i = getMaskTemplate(!0, getLastValidPosition(), !0, !0), n = i.length, r = getLastValidPosition(), o = {}, s = getMaskSet().validPositions[r], l = s !== V ? s.locator.slice() : V;
                    for (t = r + 1; t < i.length; t++) a = getTestTemplate(t, l, t - 1), l = a.locator.slice(), 
                    o[t] = L.extend(!0, {}, a);
                    var u = s && s.alternation !== V ? s.locator[s.alternation] : V;
                    for (t = n - 1; r < t && ((a = o[t]).match.optionality || a.match.optionalQuantifier && a.match.newBlockMarker || u && (u !== o[t].locator[s.alternation] && null != a.match.fn || null === a.match.fn && a.locator[s.alternation] && checkAlternationMatch(a.locator[s.alternation].toString().split(","), u.toString().split(",")) && "" !== getTests(t)[0].def)) && i[t] === getPlaceholder(t, a.match); t--) n--;
                    return e ? {
                        l: n,
                        def: o[n] ? o[n].match : V
                    } : n;
                }
                function clearOptionalTail(e) {
                    for (var t, a = getMaskTemplate(!(e.length = 0), 0, !0, V, !0); (t = a.shift()) !== V; ) e.push(t);
                    return e;
                }
                function isComplete(e) {
                    if (L.isFunction(F.isComplete)) return F.isComplete(e, F);
                    if ("*" === F.repeat) return V;
                    var t = !1, a = determineLastRequiredPosition(!0), i = seekPrevious(a.l);
                    if (a.def === V || a.def.newBlockMarker || a.def.optionality || a.def.optionalQuantifier) {
                        t = !0;
                        for (var n = 0; n <= i; n++) {
                            var r = getTestTemplate(n).match;
                            if (null !== r.fn && getMaskSet().validPositions[n] === V && !0 !== r.optionality && !0 !== r.optionalQuantifier || null === r.fn && e[n] !== getPlaceholder(n, r)) {
                                t = !1;
                                break;
                            }
                        }
                    }
                    return t;
                }
                function handleRemove(e, t, a, i, n) {
                    if ((F.numericInput || k) && (t === Inputmask.keyCode.BACKSPACE ? t = Inputmask.keyCode.DELETE : t === Inputmask.keyCode.DELETE && (t = Inputmask.keyCode.BACKSPACE), 
                    k)) {
                        var r = a.end;
                        a.end = a.begin, a.begin = r;
                    }
                    if (t === Inputmask.keyCode.BACKSPACE && a.end - a.begin < 1 ? (a.begin = seekPrevious(a.begin), 
                    getMaskSet().validPositions[a.begin] !== V && getMaskSet().validPositions[a.begin].input === F.groupSeparator && a.begin--) : t === Inputmask.keyCode.DELETE && a.begin === a.end && (a.end = isMask(a.end, !0) && getMaskSet().validPositions[a.end] && getMaskSet().validPositions[a.end].input !== F.radixPoint ? a.end + 1 : seekNext(a.end) + 1, 
                    getMaskSet().validPositions[a.begin] !== V && getMaskSet().validPositions[a.begin].input === F.groupSeparator && a.end++), 
                    revalidateMask(a), !0 !== i && !1 !== F.keepStatic || null !== F.regex) {
                        var o = alternate(!0);
                        if (o) {
                            var s = o.caret !== V ? o.caret : o.pos ? seekNext(o.pos.begin ? o.pos.begin : o.pos) : getLastValidPosition(-1, !0);
                            (t !== Inputmask.keyCode.DELETE || a.begin > s) && a.begin;
                        }
                    }
                    var l = getLastValidPosition(a.begin, !0);
                    if (l < a.begin || -1 === a.begin) getMaskSet().p = seekNext(l); else if (!0 !== i && (getMaskSet().p = a.begin, 
                    !0 !== n)) for (;getMaskSet().p < l && getMaskSet().validPositions[getMaskSet().p] === V; ) getMaskSet().p++;
                }
                function initializeColorMask(u) {
                    var c = (u.ownerDocument.defaultView || M).getComputedStyle(u, null), e = S.createElement("div");
                    e.style.width = c.width, e.style.textAlign = c.textAlign, f = S.createElement("div"), 
                    (u.inputmask.colorMask = f).className = "im-colormask", u.parentNode.insertBefore(f, u), 
                    u.parentNode.removeChild(u), f.appendChild(u), f.appendChild(e), u.style.left = e.offsetLeft + "px", 
                    L(f).on("mouseleave", function(e) {
                        return v.mouseleaveEvent.call(u, [ e ]);
                    }), L(f).on("mouseenter", function(e) {
                        return v.mouseenterEvent.call(u, [ e ]);
                    }), L(f).on("click", function(e) {
                        return caret(u, function findCaretPos(e) {
                            var t, a = S.createElement("span");
                            for (var i in c) isNaN(i) && -1 !== i.indexOf("font") && (a.style[i] = c[i]);
                            a.style.textTransform = c.textTransform, a.style.letterSpacing = c.letterSpacing, 
                            a.style.position = "absolute", a.style.height = "auto", a.style.width = "auto", 
                            a.style.visibility = "hidden", a.style.whiteSpace = "nowrap", S.body.appendChild(a);
                            var n, r = u.inputmask._valueGet(), o = 0;
                            for (t = 0, n = r.length; t <= n; t++) {
                                if (a.innerHTML += r.charAt(t) || "_", a.offsetWidth >= e) {
                                    var s = e - o, l = a.offsetWidth - e;
                                    a.innerHTML = r.charAt(t), s -= a.offsetWidth / 3, t = s < l ? t - 1 : t;
                                    break;
                                }
                                o = a.offsetWidth;
                            }
                            return S.body.removeChild(a), t;
                        }(e.clientX)), v.clickEvent.call(u, [ e ]);
                    });
                }
                function renderColorMask(e, t, a) {
                    var i, n, r, o = [], s = !1, l = 0;
                    function setEntry(e) {
                        if (e === V && (e = ""), s || null !== i.fn && n.input !== V) if (s && (null !== i.fn && n.input !== V || "" === i.def)) {
                            s = !1;
                            var t = o.length;
                            o[t - 1] = o[t - 1] + "</span>", o.push(e);
                        } else o.push(e); else s = !0, o.push("<span class='im-static'>" + e);
                    }
                    if (f !== V) {
                        var u = getBuffer();
                        if (t === V ? t = caret(e) : t.begin === V && (t = {
                            begin: t,
                            end: t
                        }), !0 !== a) {
                            for (var c = getLastValidPosition(); getMaskSet().validPositions[l] ? (n = getMaskSet().validPositions[l], 
                            i = n.match, r = n.locator.slice(), setEntry(u[l])) : (n = getTestTemplate(l, r, l - 1), 
                            i = n.match, r = n.locator.slice(), !1 === F.jitMasking || l < c || "number" == typeof F.jitMasking && isFinite(F.jitMasking) && F.jitMasking > l ? setEntry(getPlaceholder(l, i)) : s = !1), 
                            l++, (g === V || l < g) && (null !== i.fn || "" !== i.def) || l < c || s; ) ;
                            s && setEntry(), function setCaret() {
                                S.activeElement === e && (o.splice(t.begin, 0, t.begin === t.end || t.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), 
                                o.splice(t.end + 1, 0, "</mark>"));
                            }();
                        }
                        var p = f.getElementsByTagName("div")[0];
                        p.innerHTML = o.join(""), e.inputmask.positionColorMask(e, p);
                    }
                }
                if (Inputmask.prototype.positionColorMask = function(e, t) {
                    e.style.left = t.offsetLeft + "px";
                }, e !== V) switch (e.action) {
                  case "isComplete":
                    return l = e.el, isComplete(getBuffer());

                  case "unmaskedvalue":
                    return l !== V && e.value === V || (a = e.value, a = (L.isFunction(F.onBeforeMask) && F.onBeforeMask.call(u, a, F) || a).split(""), 
                    checkVal.call(this, V, !1, !1, a), L.isFunction(F.onBeforeWrite) && F.onBeforeWrite.call(u, V, getBuffer(), 0, F)), 
                    unmaskedvalue(l);

                  case "mask":
                    !function mask(e) {
                        function isElementTypeSupported(e, r) {
                            function patchValueProperty(e) {
                                var t, a, i;
                                function patchValhook(e) {
                                    if (L.valHooks && (L.valHooks[e] === V || !0 !== L.valHooks[e].inputmaskpatch)) {
                                        var a = L.valHooks[e] && L.valHooks[e].get ? L.valHooks[e].get : function(e) {
                                            return e.value;
                                        }, n = L.valHooks[e] && L.valHooks[e].set ? L.valHooks[e].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        L.valHooks[e] = {
                                            get: function get(e) {
                                                if (e.inputmask) {
                                                    if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                    var t = a(e);
                                                    return -1 !== getLastValidPosition(V, V, e.inputmask.maskset.validPositions) || !0 !== r.nullable ? t : "";
                                                }
                                                return a(e);
                                            },
                                            set: function set(e, t) {
                                                var a, i = L(e);
                                                return a = n(e, t), e.inputmask && i.trigger("setvalue", [ t ]), a;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }
                                function getter() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== r.nullable ? S.activeElement === this && r.clearMaskOnLostFocus ? (k ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : t.call(this) : "" : t.call(this);
                                }
                                function setter(e) {
                                    a.call(this, e), this.inputmask && L(this).trigger("setvalue", [ e ]);
                                }
                                if (!e.inputmask.__valueGet) {
                                    if (!0 !== r.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === T("test".__proto__) ? function(e) {
                                                return e.__proto__;
                                            } : function(e) {
                                                return e.constructor.prototype;
                                            });
                                            var n = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : V;
                                            n && n.get && n.set ? (t = n.get, a = n.set, Object.defineProperty(e, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            })) : "INPUT" !== e.tagName && (t = function valueGet() {
                                                return this.textContent;
                                            }, a = function valueSet(e) {
                                                this.textContent = e;
                                            }, Object.defineProperty(e, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            }));
                                        } else S.__lookupGetter__ && e.__lookupGetter__("value") && (t = e.__lookupGetter__("value"), 
                                        a = e.__lookupSetter__("value"), e.__defineGetter__("value", getter), e.__defineSetter__("value", setter));
                                        e.inputmask.__valueGet = t, e.inputmask.__valueSet = a;
                                    }
                                    e.inputmask._valueGet = function(e) {
                                        return k && !0 !== e ? t.call(this.el).split("").reverse().join("") : t.call(this.el);
                                    }, e.inputmask._valueSet = function(e, t) {
                                        a.call(this.el, null === e || e === V ? "" : !0 !== t && k ? e.split("").reverse().join("") : e);
                                    }, t === V && (t = function valueGet() {
                                        return this.value;
                                    }, a = function valueSet(e) {
                                        this.value = e;
                                    }, patchValhook(e.type), i = e, s.on(i, "mouseenter", function(e) {
                                        var t = L(this), a = this.inputmask._valueGet();
                                        a !== getBuffer().join("") && t.trigger("setvalue");
                                    }));
                                }
                            }
                            var t = e.getAttribute("type"), a = "INPUT" === e.tagName && -1 !== L.inArray(t, r.supportsInputType) || e.isContentEditable || "TEXTAREA" === e.tagName;
                            if (!a) if ("INPUT" === e.tagName) {
                                var i = S.createElement("input");
                                i.setAttribute("type", t), a = "text" === i.type, i = null;
                            } else a = "partial";
                            return !1 !== a ? patchValueProperty(e) : e.inputmask = V, a;
                        }
                        s.off(e);
                        var t = isElementTypeSupported(e, F);
                        if (!1 !== t && (n = L(l = e), r = l.placeholder, -1 === (g = l !== V ? l.maxLength : V) && (g = V), 
                        !0 === F.colorMask && initializeColorMask(l), P && ("inputmode" in l && (l.inputmode = F.inputmode, 
                        l.setAttribute("inputmode", F.inputmode)), !0 === F.disablePredictiveText && ("autocorrect" in l ? l.autocorrect = !1 : (!0 !== F.colorMask && initializeColorMask(l), 
                        l.type = "password"))), !0 === t && (l.setAttribute("im-insert", F.insertMode), 
                        s.on(l, "submit", v.submitEvent), s.on(l, "reset", v.resetEvent), s.on(l, "blur", v.blurEvent), 
                        s.on(l, "focus", v.focusEvent), !0 !== F.colorMask && (s.on(l, "click", v.clickEvent), 
                        s.on(l, "mouseleave", v.mouseleaveEvent), s.on(l, "mouseenter", v.mouseenterEvent)), 
                        s.on(l, "paste", v.pasteEvent), s.on(l, "cut", v.cutEvent), s.on(l, "complete", F.oncomplete), 
                        s.on(l, "incomplete", F.onincomplete), s.on(l, "cleared", F.oncleared), P || !0 === F.inputEventOnly ? l.removeAttribute("maxLength") : (s.on(l, "keydown", v.keydownEvent), 
                        s.on(l, "keypress", v.keypressEvent)), s.on(l, "input", v.inputFallBackEvent), s.on(l, "beforeinput", v.beforeInputEvent)), 
                        s.on(l, "setvalue", v.setValueEvent), d = getBufferTemplate().join(""), "" !== l.inputmask._valueGet(!0) || !1 === F.clearMaskOnLostFocus || S.activeElement === l)) {
                            var a = L.isFunction(F.onBeforeMask) && F.onBeforeMask.call(u, l.inputmask._valueGet(!0), F) || l.inputmask._valueGet(!0);
                            "" !== a && checkVal(l, !0, !1, a.split(""));
                            var i = getBuffer().slice();
                            d = i.join(""), !1 === isComplete(i) && F.clearIncomplete && resetMaskSet(), F.clearMaskOnLostFocus && S.activeElement !== l && (-1 === getLastValidPosition() ? i = [] : clearOptionalTail(i)), 
                            (!1 === F.clearMaskOnLostFocus || F.showMaskOnFocus && S.activeElement === l || "" !== l.inputmask._valueGet(!0)) && writeBuffer(l, i), 
                            S.activeElement === l && caret(l, seekNext(getLastValidPosition()));
                        }
                    }(l);
                    break;

                  case "format":
                    return a = (L.isFunction(F.onBeforeMask) && F.onBeforeMask.call(u, e.value, F) || e.value).split(""), 
                    checkVal.call(this, V, !0, !1, a), e.metadata ? {
                        value: k ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                        metadata: maskScope.call(this, {
                            action: "getmetadata"
                        }, t, F)
                    } : k ? getBuffer().slice().reverse().join("") : getBuffer().join("");

                  case "isValid":
                    e.value ? (a = e.value.split(""), checkVal.call(this, V, !0, !0, a)) : e.value = getBuffer().join("");
                    for (var p = getBuffer(), m = determineLastRequiredPosition(), y = p.length - 1; m < y && !isMask(y); y--) ;
                    return p.splice(m, y + 1 - m), isComplete(p) && e.value === getBuffer().join("");

                  case "getemptymask":
                    return getBufferTemplate().join("");

                  case "remove":
                    return l && l.inputmask && (L.data(l, "_inputmask_opts", null), n = L(l), l.inputmask._valueSet(F.autoUnmask ? unmaskedvalue(l) : l.inputmask._valueGet(!0)), 
                    s.off(l), l.inputmask.colorMask && ((f = l.inputmask.colorMask).removeChild(l), 
                    f.parentNode.insertBefore(l, f), f.parentNode.removeChild(f)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(l), "value") && l.inputmask.__valueGet && Object.defineProperty(l, "value", {
                        get: l.inputmask.__valueGet,
                        set: l.inputmask.__valueSet,
                        configurable: !0
                    }) : S.__lookupGetter__ && l.__lookupGetter__("value") && l.inputmask.__valueGet && (l.__defineGetter__("value", l.inputmask.__valueGet), 
                    l.__defineSetter__("value", l.inputmask.__valueSet)), l.inputmask = V), l;

                  case "getmetadata":
                    if (L.isArray(t.metadata)) {
                        var b = getMaskTemplate(!0, 0, !1).join("");
                        return L.each(t.metadata, function(e, t) {
                            if (t.mask === b) return b = t, !1;
                        }), b;
                    }
                    return t.metadata;
                }
            }
            return Inputmask.prototype = {
                dataAttribute: "data-inputmask",
                defaults: {
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: L.noop,
                    onincomplete: L.noop,
                    oncleared: L.noop,
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: L.noop,
                    onBeforeMask: null,
                    onBeforePaste: function onBeforePaste(e, t) {
                        return L.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: L.noop,
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "password", "search" ],
                    ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: V,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "verbatim",
                    colorMask: !1,
                    disablePredictiveText: !1,
                    importDataAttributes: !0,
                    shiftPositions: !0
                },
                definitions: {
                    9: {
                        validator: "[0-9\uff11-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                },
                aliases: {},
                masksCache: {},
                mask: function mask(e) {
                    var n = this;
                    return "string" == typeof e && (e = S.getElementById(e) || S.querySelectorAll(e)), 
                    e = e.nodeName ? [ e ] : e, L.each(e, function(e, t) {
                        var a = L.extend(!0, {}, n.opts);
                        if (function importAttributeOptions(a, e, i, n) {
                            if (!0 === e.importDataAttributes) {
                                var t, r, o, s, l = function importOption(e, t) {
                                    null !== (t = t !== V ? t : a.getAttribute(n + "-" + e)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = M[t] : "false" === t ? t = !1 : "true" === t && (t = !0)), 
                                    i[e] = t);
                                }, u = a.getAttribute(n);
                                if (u && "" !== u && (u = u.replace(/'/g, '"'), r = JSON.parse("{" + u + "}")), 
                                r) for (s in o = V, r) if ("alias" === s.toLowerCase()) {
                                    o = r[s];
                                    break;
                                }
                                for (t in l("alias", o), i.alias && resolveAlias(i.alias, i, e), e) {
                                    if (r) for (s in o = V, r) if (s.toLowerCase() === t.toLowerCase()) {
                                        o = r[s];
                                        break;
                                    }
                                    l(t, o);
                                }
                            }
                            return L.extend(!0, e, i), ("rtl" === a.dir || e.rightAlign) && (a.style.textAlign = "right"), 
                            ("rtl" === a.dir || e.numericInput) && (a.dir = "ltr", a.removeAttribute("dir"), 
                            e.isRTL = !0), Object.keys(i).length;
                        }(t, a, L.extend(!0, {}, n.userOptions), n.dataAttribute)) {
                            var i = generateMaskSet(a, n.noMasksCache);
                            i !== V && (t.inputmask !== V && (t.inputmask.opts.autoUnmask = !0, t.inputmask.remove()), 
                            t.inputmask = new Inputmask(V, V, !0), t.inputmask.opts = a, t.inputmask.noMasksCache = n.noMasksCache, 
                            t.inputmask.userOptions = L.extend(!0, {}, n.userOptions), t.inputmask.isRTL = a.isRTL || a.numericInput, 
                            (t.inputmask.el = t).inputmask.maskset = i, L.data(t, "_inputmask_opts", a), maskScope.call(t.inputmask, {
                                action: "mask"
                            }));
                        }
                    }), e && e[0] && e[0].inputmask || this;
                },
                option: function option(e, t) {
                    return "string" == typeof e ? this.opts[e] : "object" === (void 0 === e ? "undefined" : T(e)) ? (L.extend(this.userOptions, e), 
                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                },
                unmaskedvalue: function unmaskedvalue(e) {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "unmaskedvalue",
                        value: e
                    });
                },
                remove: function remove() {
                    return maskScope.call(this, {
                        action: "remove"
                    });
                },
                getemptymask: function getemptymask() {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "getemptymask"
                    });
                },
                hasMaskedValue: function hasMaskedValue() {
                    return !this.opts.autoUnmask;
                },
                isComplete: function isComplete() {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "isComplete"
                    });
                },
                getmetadata: function getmetadata() {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "getmetadata"
                    });
                },
                isValid: function isValid(e) {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "isValid",
                        value: e
                    });
                },
                format: function format(e, t) {
                    return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                    maskScope.call(this, {
                        action: "format",
                        value: e,
                        metadata: t
                    });
                },
                setValue: function setValue(e) {
                    this.el && L(this.el).trigger("setvalue", [ e ]);
                },
                analyseMask: function analyseMask(e, r, o) {
                    var t, a, i, n, s, l, u = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, c = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, f = new MaskToken(), m = [], g = [];
                    function MaskToken(e, t, a, i) {
                        this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                        this.isOptional = t || !1, this.isQuantifier = a || !1, this.isAlternator = i || !1, 
                        this.quantifier = {
                            min: 1,
                            max: 1
                        };
                    }
                    function insertTestDefinition(a, e, i) {
                        i = i !== V ? i : a.matches.length;
                        var n = a.matches[i - 1];
                        if (r) 0 === e.indexOf("[") || p && /\\d|\\s|\\w]/i.test(e) || "." === e ? a.matches.splice(i++, 0, {
                            fn: new RegExp(e, o.casing ? "i" : ""),
                            optionality: !1,
                            newBlockMarker: n === V ? "master" : n.def !== e,
                            casing: null,
                            def: e,
                            placeholder: V,
                            nativeDef: e
                        }) : (p && (e = e[e.length - 1]), L.each(e.split(""), function(e, t) {
                            n = a.matches[i - 1], a.matches.splice(i++, 0, {
                                fn: null,
                                optionality: !1,
                                newBlockMarker: n === V ? "master" : n.def !== t && null !== n.fn,
                                casing: null,
                                def: o.staticDefinitionSymbol || t,
                                placeholder: o.staticDefinitionSymbol !== V ? t : V,
                                nativeDef: (p ? "'" : "") + t
                            });
                        })), p = !1; else {
                            var t = (o.definitions ? o.definitions[e] : V) || Inputmask.prototype.definitions[e];
                            t && !p ? a.matches.splice(i++, 0, {
                                fn: t.validator ? "string" == typeof t.validator ? new RegExp(t.validator, o.casing ? "i" : "") : new function() {
                                    this.test = t.validator;
                                }() : new RegExp("."),
                                optionality: !1,
                                newBlockMarker: n === V ? "master" : n.def !== (t.definitionSymbol || e),
                                casing: t.casing,
                                def: t.definitionSymbol || e,
                                placeholder: t.placeholder,
                                nativeDef: e
                            }) : (a.matches.splice(i++, 0, {
                                fn: null,
                                optionality: !1,
                                newBlockMarker: n === V ? "master" : n.def !== e && null !== n.fn,
                                casing: null,
                                def: o.staticDefinitionSymbol || e,
                                placeholder: o.staticDefinitionSymbol !== V ? e : V,
                                nativeDef: (p ? "'" : "") + e
                            }), p = !1);
                        }
                    }
                    function defaultCase() {
                        if (0 < m.length) {
                            if (insertTestDefinition(n = m[m.length - 1], a), n.isAlternator) {
                                s = m.pop();
                                for (var e = 0; e < s.matches.length; e++) s.matches[e].isGroup && (s.matches[e].isGroup = !1);
                                0 < m.length ? (n = m[m.length - 1]).matches.push(s) : f.matches.push(s);
                            }
                        } else insertTestDefinition(f, a);
                    }
                    function groupify(e) {
                        var t = new MaskToken(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    for (r && (o.optionalmarker[0] = V, o.optionalmarker[1] = V); t = r ? c.exec(e) : u.exec(e); ) {
                        if (a = t[0], r) switch (a.charAt(0)) {
                          case "?":
                            a = "{0,1}";
                            break;

                          case "+":
                          case "*":
                            a = "{" + a + "}";
                        }
                        if (p) defaultCase(); else switch (a.charAt(0)) {
                          case "(?=":
                          case "(?!":
                          case "(?<=":
                          case "(?<!":
                            break;

                          case o.escapeChar:
                            p = !0, r && defaultCase();
                            break;

                          case o.optionalmarker[1]:
                          case o.groupmarker[1]:
                            if ((i = m.pop()).openGroup = !1, i !== V) if (0 < m.length) {
                                if ((n = m[m.length - 1]).matches.push(i), n.isAlternator) {
                                    s = m.pop();
                                    for (var d = 0; d < s.matches.length; d++) s.matches[d].isGroup = !1, s.matches[d].alternatorGroup = !1;
                                    0 < m.length ? (n = m[m.length - 1]).matches.push(s) : f.matches.push(s);
                                }
                            } else f.matches.push(i); else defaultCase();
                            break;

                          case o.optionalmarker[0]:
                            m.push(new MaskToken(!1, !0));
                            break;

                          case o.groupmarker[0]:
                            m.push(new MaskToken(!0));
                            break;

                          case o.quantifiermarker[0]:
                            var k = new MaskToken(!1, !1, !0), h = (a = a.replace(/[{}]/g, "")).split("|"), v = h[0].split(","), y = isNaN(v[0]) ? v[0] : parseInt(v[0]), b = 1 === v.length ? y : isNaN(v[1]) ? v[1] : parseInt(v[1]);
                            "*" !== y && "+" !== y || (y = "*" === b ? 0 : 1), k.quantifier = {
                                min: y,
                                max: b,
                                jit: h[1]
                            };
                            var M = 0 < m.length ? m[m.length - 1].matches : f.matches;
                            if ((t = M.pop()).isAlternator) {
                                M.push(t), M = t.matches;
                                var S = new MaskToken(!0), x = M.pop();
                                M.push(S), M = S.matches, t = x;
                            }
                            t.isGroup || (t = groupify([ t ])), M.push(t), M.push(k);
                            break;

                          case o.alternatormarker:
                            var P = function groupQuantifier(e) {
                                var t = e.pop();
                                return t.isQuantifier && (t = groupify([ e.pop(), t ])), t;
                            };
                            if (0 < m.length) {
                                var _ = (n = m[m.length - 1]).matches[n.matches.length - 1];
                                l = n.openGroup && (_.matches === V || !1 === _.isGroup && !1 === _.isAlternator) ? m.pop() : P(n.matches);
                            } else l = P(f.matches);
                            if (l.isAlternator) m.push(l); else if (l.alternatorGroup ? (s = m.pop(), l.alternatorGroup = !1) : s = new MaskToken(!1, !1, !1, !0), 
                            s.matches.push(l), m.push(s), l.openGroup) {
                                var E = new MaskToken(!(l.openGroup = !1));
                                E.alternatorGroup = !0, m.push(E);
                            }
                            break;

                          default:
                            defaultCase();
                        }
                    }
                    for (;0 < m.length; ) i = m.pop(), f.matches.push(i);
                    return 0 < f.matches.length && (function verifyGroupMarker(i) {
                        i && i.matches && L.each(i.matches, function(e, t) {
                            var a = i.matches[e + 1];
                            (a === V || a.matches === V || !1 === a.isQuantifier) && t && t.isGroup && (t.isGroup = !1, 
                            r || (insertTestDefinition(t, o.groupmarker[0], 0), !0 !== t.openGroup && insertTestDefinition(t, o.groupmarker[1]))), 
                            verifyGroupMarker(t);
                        });
                    }(f), g.push(f)), (o.numericInput || o.isRTL) && function reverseTokens(e) {
                        for (var t in e.matches = e.matches.reverse(), e.matches) if (e.matches.hasOwnProperty(t)) {
                            var a = parseInt(t);
                            if (e.matches[t].isQuantifier && e.matches[a + 1] && e.matches[a + 1].isGroup) {
                                var i = e.matches[t];
                                e.matches.splice(t, 1), e.matches.splice(a + 1, 0, i);
                            }
                            e.matches[t].matches !== V ? e.matches[t] = reverseTokens(e.matches[t]) : e.matches[t] = ((n = e.matches[t]) === o.optionalmarker[0] ? n = o.optionalmarker[1] : n === o.optionalmarker[1] ? n = o.optionalmarker[0] : n === o.groupmarker[0] ? n = o.groupmarker[1] : n === o.groupmarker[1] && (n = o.groupmarker[0]), 
                            n);
                        }
                        var n;
                        return e;
                    }(g[0]), g;
                }
            }, Inputmask.extendDefaults = function(e) {
                L.extend(!0, Inputmask.prototype.defaults, e);
            }, Inputmask.extendDefinitions = function(e) {
                L.extend(!0, Inputmask.prototype.definitions, e);
            }, Inputmask.extendAliases = function(e) {
                L.extend(!0, Inputmask.prototype.aliases, e);
            }, Inputmask.format = function(e, t, a) {
                return Inputmask(t).format(e, a);
            }, Inputmask.unmask = function(e, t) {
                return Inputmask(t).unmaskedvalue(e);
            }, Inputmask.isValid = function(e, t) {
                return Inputmask(t).isValid(e);
            }, Inputmask.remove = function(e) {
                "string" == typeof e && (e = S.getElementById(e) || S.querySelectorAll(e)), e = e.nodeName ? [ e ] : e, 
                L.each(e, function(e, t) {
                    t.inputmask && t.inputmask.remove();
                });
            }, Inputmask.setValue = function(e, a) {
                "string" == typeof e && (e = S.getElementById(e) || S.querySelectorAll(e)), e = e.nodeName ? [ e ] : e, 
                L.each(e, function(e, t) {
                    t.inputmask ? t.inputmask.setValue(a) : L(t).trigger("setvalue", [ a ]);
                });
            }, Inputmask.escapeRegex = function(e) {
                return e.replace(new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim"), "\\$1");
            }, Inputmask.keyCode = {
                BACKSPACE: 8,
                BACKSPACE_SAFARI: 127,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                X: 88,
                CONTROL: 17
            }, Inputmask.dependencyLib = L, M.Inputmask = Inputmask;
        }) ? i.apply(t, n) : i) || (e.exports = r);
    }, function(e, t, a) {
        "use strict";
        var i, n, r;
        "function" == typeof Symbol && Symbol.iterator;
        n = [ a(5) ], void 0 === (r = "function" == typeof (i = function(e) {
            return e;
        }) ? i.apply(t, n) : i) || (e.exports = r);
    }, function(e, t) {
        e.exports = __WEBPACK_EXTERNAL_MODULE__5__;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return "undefined" != typeof window ? window : new (eval("require('jsdom').JSDOM"))("").window;
        }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }, function(e, t, a) {
        "use strict";
        var i, n, r, c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        n = [ a(3) ], void 0 === (r = "function" == typeof (i = function(s) {
            var l = s.dependencyLib, u = {
                d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                    return pad(Date.prototype.getDate.call(this), 2);
                } ],
                ddd: [ "" ],
                dddd: [ "" ],
                m: [ "[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                    return Date.prototype.getMonth.call(this) + 1;
                } ],
                mm: [ "0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                    return pad(Date.prototype.getMonth.call(this) + 1, 2);
                } ],
                mmm: [ "" ],
                mmmm: [ "" ],
                yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                    return pad(Date.prototype.getFullYear.call(this), 2);
                } ],
                yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                    return pad(Date.prototype.getFullYear.call(this), 4);
                } ],
                h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                    return pad(Date.prototype.getHours.call(this), 2);
                } ],
                hhh: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                HH: [ "[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                    return pad(Date.prototype.getHours.call(this), 2);
                } ],
                HHH: [ "[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                MM: [ "[0-5][0-9]", Date.prototype.setMinutes, "minutes", function() {
                    return pad(Date.prototype.getMinutes.call(this), 2);
                } ],
                s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                ss: [ "[0-5][0-9]", Date.prototype.setSeconds, "seconds", function() {
                    return pad(Date.prototype.getSeconds.call(this), 2);
                } ],
                l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                    return pad(Date.prototype.getMilliseconds.call(this), 3);
                } ],
                L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                    return pad(Date.prototype.getMilliseconds.call(this), 2);
                } ],
                t: [ "[ap]" ],
                tt: [ "[ap]m" ],
                T: [ "[AP]" ],
                TT: [ "[AP]M" ],
                Z: [ "" ],
                o: [ "" ],
                S: [ "" ]
            }, t = {
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };
            function getTokenizer(e) {
                if (!e.tokenizer) {
                    var t = [];
                    for (var a in u) -1 === t.indexOf(a[0]) && t.push(a[0]);
                    e.tokenizer = "(" + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g");
                }
                return e.tokenizer;
            }
            function parse(e, t, a, i) {
                for (var n, r = ""; n = getTokenizer(a).exec(e); ) if (void 0 === t) if (u[n[0]]) r += "(" + u[n[0]][0] + ")"; else switch (n[0]) {
                  case "[":
                    r += "(";
                    break;

                  case "]":
                    r += ")?";
                    break;

                  default:
                    r += s.escapeRegex(n[0]);
                } else if (u[n[0]]) if (!0 !== i && u[n[0]][3]) {
                    var o = u[n[0]][3];
                    r += o.call(t.date);
                } else u[n[0]][2] ? r += t["raw" + u[n[0]][2]] : r += n[0]; else r += n[0];
                return r;
            }
            function pad(e, t) {
                for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
                return e;
            }
            function analyseMask(e, t, r) {
                var o, a, i, n = {
                    date: new Date(1, 0, 1)
                }, s = e;
                function setValue(e, t, a) {
                    e[o] = function extendProperty(e) {
                        var t = e.replace(/[^0-9]/g, "0");
                        if (t != e) {
                            var a = e.replace(/[^0-9]/g, ""), i = (r.min && r.min[o] || e).toString(), n = (r.max && r.max[o] || e).toString();
                            t = a + (a < i.slice(0, a.length) ? i.slice(a.length) : a > n.slice(0, a.length) ? n.slice(a.length) : t.toString().slice(a.length));
                        }
                        return t;
                    }(t), e["raw" + o] = t, void 0 !== i && i.call(e.date, "month" == o ? parseInt(e[o]) - 1 : e[o]);
                }
                if ("string" == typeof s) {
                    for (;a = getTokenizer(r).exec(t); ) {
                        var l = s.slice(0, a[0].length);
                        u.hasOwnProperty(a[0]) && (u[a[0]][0], o = u[a[0]][2], i = u[a[0]][1], setValue(n, l)), 
                        s = s.slice(l.length);
                    }
                    return n;
                }
                if (s && "object" === (void 0 === s ? "undefined" : c(s)) && s.hasOwnProperty("date")) return s;
            }
            return s.extendAliases({
                datetime: {
                    mask: function mask(e) {
                        return u.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = t[e.inputFormat] || e.inputFormat, 
                        e.displayFormat = t[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = t[e.outputFormat] || e.outputFormat || e.inputFormat, 
                        e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[\[\]]/, ""), 
                        e.regex = parse(e.inputFormat, void 0, e), null;
                    },
                    placeholder: "",
                    inputFormat: "isoDateTime",
                    displayFormat: void 0,
                    outputFormat: void 0,
                    min: null,
                    max: null,
                    i18n: {
                        dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                        monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                        ordinalSuffix: [ "st", "nd", "rd", "th" ]
                    },
                    postValidation: function postValidation(e, t, a, i) {
                        i.min = analyseMask(i.min, i.inputFormat, i), i.max = analyseMask(i.max, i.inputFormat, i);
                        var n = a, r = analyseMask(e.join(""), i.inputFormat, i);
                        return n && r.date.getTime() == r.date.getTime() && (n = (n = function isValidDate(e, t) {
                            return (!isFinite(e.rawday) || "29" == e.day && !isFinite(e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) && t;
                        }(r, n)) && function isDateInRange(e, t) {
                            var a = !0;
                            if (t.min) {
                                if (e.rawyear) {
                                    var i = e.rawyear.replace(/[^0-9]/g, ""), n = t.min.year.substr(0, i.length);
                                    a = n <= i;
                                }
                                e.year === e.rawyear && t.min.date.getTime() == t.min.date.getTime() && (a = t.min.date.getTime() <= e.date.getTime());
                            }
                            return a && t.max && t.max.date.getTime() == t.max.date.getTime() && (a = t.max.date.getTime() >= e.date.getTime()), 
                            a;
                        }(r, i)), t && n && a.pos !== t ? {
                            buffer: parse(i.inputFormat, r, i),
                            refreshFromBuffer: {
                                start: t,
                                end: a.pos
                            }
                        } : n;
                    },
                    onKeyDown: function onKeyDown(e, t, a, i) {
                        if (e.ctrlKey && e.keyCode === s.keyCode.RIGHT) {
                            for (var n, r = new Date(), o = ""; n = getTokenizer(i).exec(i.inputFormat); ) "d" === n[0].charAt(0) ? o += pad(r.getDate(), n[0].length) : "m" === n[0].charAt(0) ? o += pad(r.getMonth() + 1, n[0].length) : "yyyy" === n[0] ? o += r.getFullYear().toString() : "y" === n[0].charAt(0) && (o += pad(r.getYear(), n[0].length));
                            this.inputmask._valueSet(o), l(this).trigger("setvalue");
                        }
                    },
                    onUnMask: function onUnMask(e, t, a) {
                        return parse(a.outputFormat, analyseMask(e, a.inputFormat, a), a, !0);
                    },
                    casing: function casing(e, t, a, i) {
                        return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                    },
                    insertMode: !1,
                    shiftPositions: !1
                }
            }), s;
        }) ? i.apply(t, n) : i) || (e.exports = r);
    }, function(e, t, a) {
        "use strict";
        var i, n, r;
        "function" == typeof Symbol && Symbol.iterator;
        n = [ a(3) ], void 0 === (r = "function" == typeof (i = function(k) {
            var h = k.dependencyLib;
            function autoEscape(e, t) {
                for (var a = "", i = 0; i < e.length; i++) k.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker.start === e.charAt(i) || t.optionalmarker.end === e.charAt(i) || t.quantifiermarker.start === e.charAt(i) || t.quantifiermarker.end === e.charAt(i) || t.groupmarker.start === e.charAt(i) || t.groupmarker.end === e.charAt(i) || t.alternatormarker === e.charAt(i) ? a += "\\" + e.charAt(i) : a += e.charAt(i);
                return a;
            }
            return k.extendAliases({
                numeric: {
                    mask: function mask(e) {
                        if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, 
                        e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                        " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, 
                        e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), 
                        isFinite(e.integerDigits))) {
                            var t = Math.floor(e.integerDigits / e.groupSize), a = e.integerDigits % e.groupSize;
                            e.integerDigits = parseInt(e.integerDigits) + (0 === a ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*");
                        }
                        1 < e.placeholder.length && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), 
                        e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", 
                        !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
                        var mask = "[+]";
                        if (mask += autoEscape(e.prefix, e), !0 === e.integerOptional ? mask += "~{1," + e.integerDigits + "}" : mask += "~{" + e.integerDigits + "}", 
                        void 0 !== e.digits) {
                            var i = e.decimalProtect ? ":" : e.radixPoint, n = e.digits.toString().split(",");
                            isFinite(n[0]) && n[1] && isFinite(n[1]) ? mask += i + ";{" + e.digits + "}" : (isNaN(e.digits) || 0 < parseInt(e.digits)) && (e.digitsOptional ? mask += "[" + i + ";{1," + e.digits + "}]" : mask += i + ";{" + e.digits + "}");
                        }
                        return mask += autoEscape(e.suffix, e), mask += "[-]", e.greedy = !1, mask;
                    },
                    placeholder: "",
                    greedy: !1,
                    digits: "*",
                    digitsOptional: !0,
                    enforceDigitsOnBlur: !1,
                    radixPoint: ".",
                    positionCaretOnClick: "radixFocus",
                    groupSize: 3,
                    groupSeparator: "",
                    autoGroup: !1,
                    allowMinus: !0,
                    negationSymbol: {
                        front: "-",
                        back: ""
                    },
                    integerDigits: "+",
                    integerOptional: !0,
                    prefix: "",
                    suffix: "",
                    rightAlign: !0,
                    decimalProtect: !0,
                    min: null,
                    max: null,
                    step: 1,
                    insertMode: !0,
                    autoUnmask: !1,
                    unmaskAsNumber: !1,
                    inputType: "text",
                    inputmode: "numeric",
                    preValidation: function preValidation(e, t, a, i, n, r) {
                        if ("-" === a || a === n.negationSymbol.front) return !0 === n.allowMinus && (n.isNegative = void 0 === n.isNegative || !n.isNegative, 
                        "" === e.join("") || {
                            caret: r.validPositions[t] ? t : void 0,
                            dopost: !0
                        });
                        if (!1 === i && a === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || 0 < parseInt(n.digits))) {
                            var o = h.inArray(n.radixPoint, e);
                            if (-1 !== o && void 0 !== r.validPositions[o]) return !0 === n.numericInput ? t === o : {
                                caret: o + 1
                            };
                        }
                        return !0;
                    },
                    postValidation: function postValidation(e, t, a, i) {
                        var n = i.suffix.split(""), r = i.prefix.split("");
                        if (void 0 === a.pos && void 0 !== a.caret && !0 !== a.dopost) return a;
                        var o = void 0 !== a.caret ? a.caret : a.pos, s = e.slice();
                        i.numericInput && (o = s.length - o - 1, s = s.reverse());
                        var l = s[o];
                        if (l === i.groupSeparator && (l = s[o += 1]), o === s.length - i.suffix.length - 1 && l === i.radixPoint) return a;
                        void 0 !== l && l !== i.radixPoint && l !== i.negationSymbol.front && l !== i.negationSymbol.back && (s[o] = "?", 
                        0 < i.prefix.length && o >= (!1 === i.isNegative ? 1 : 0) && o < i.prefix.length - 1 + (!1 === i.isNegative ? 1 : 0) ? r[o - (!1 === i.isNegative ? 1 : 0)] = "?" : 0 < i.suffix.length && o >= s.length - i.suffix.length - (!1 === i.isNegative ? 1 : 0) && (n[o - (s.length - i.suffix.length - (!1 === i.isNegative ? 1 : 0))] = "?")), 
                        r = r.join(""), n = n.join("");
                        var u = s.join("").replace(r, "");
                        if (u = (u = (u = (u = u.replace(n, "")).replace(new RegExp(k.escapeRegex(i.groupSeparator), "g"), "")).replace(new RegExp("[-" + k.escapeRegex(i.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(k.escapeRegex(i.negationSymbol.back) + "$"), ""), 
                        isNaN(i.placeholder) && (u = u.replace(new RegExp(k.escapeRegex(i.placeholder), "g"), "")), 
                        1 < u.length && 1 !== u.indexOf(i.radixPoint) && ("0" === l && (u = u.replace(/^\?/g, "")), 
                        u = u.replace(/^0/g, "")), u.charAt(0) === i.radixPoint && "" !== i.radixPoint && !0 !== i.numericInput && (u = "0" + u), 
                        "" !== u) {
                            if (u = u.split(""), (!i.digitsOptional || i.enforceDigitsOnBlur && "blur" === a.event) && isFinite(i.digits)) {
                                var c = h.inArray(i.radixPoint, u), p = h.inArray(i.radixPoint, s);
                                -1 === c && (u.push(i.radixPoint), c = u.length - 1);
                                for (var f = 1; f <= i.digits; f++) i.digitsOptional && (!i.enforceDigitsOnBlur || "blur" !== a.event) || void 0 !== u[c + f] && u[c + f] !== i.placeholder.charAt(0) ? -1 !== p && void 0 !== s[p + f] && (u[c + f] = u[c + f] || s[p + f]) : u[c + f] = a.placeholder || i.placeholder.charAt(0);
                            }
                            if (!0 !== i.autoGroup || "" === i.groupSeparator || l === i.radixPoint && void 0 === a.pos && !a.dopost) u = u.join(""); else {
                                var m = u[u.length - 1] === i.radixPoint && a.c === i.radixPoint;
                                u = k(function buildPostMask(e, t) {
                                    var a = "";
                                    if (a += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                                        var i = e.join("").split(t.radixPoint);
                                        i[1] && (a += t.radixPoint + "*{" + i[1].match(/^\d*\??\d*/)[0].length + "}");
                                    }
                                    return a;
                                }(u, i), {
                                    numericInput: !0,
                                    jitMasking: !0,
                                    definitions: {
                                        "*": {
                                            validator: "[0-9?]",
                                            cardinality: 1
                                        }
                                    }
                                }).format(u.join("")), m && (u += i.radixPoint), u.charAt(0) === i.groupSeparator && u.substr(1);
                            }
                        }
                        if (i.isNegative && "blur" === a.event && (i.isNegative = "0" !== u), u = r + u, 
                        u += n, i.isNegative && (u = i.negationSymbol.front + u, u += i.negationSymbol.back), 
                        u = u.split(""), void 0 !== l) if (l !== i.radixPoint && l !== i.negationSymbol.front && l !== i.negationSymbol.back) -1 < (o = h.inArray("?", u)) ? u[o] = l : o = a.caret || 0; else if (l === i.radixPoint || l === i.negationSymbol.front || l === i.negationSymbol.back) {
                            var g = h.inArray(l, u);
                            -1 !== g && (o = g);
                        }
                        i.numericInput && (o = u.length - o - 1, u = u.reverse());
                        var d = {
                            caret: void 0 !== l && void 0 === a.pos || void 0 === o ? o : o + (i.numericInput ? -1 : 1),
                            buffer: u,
                            refreshFromBuffer: a.dopost || e.join("") !== u.join("")
                        };
                        return d.refreshFromBuffer ? d : a;
                    },
                    onBeforeWrite: function onBeforeWrite(e, t, a, i) {
                        if (e) switch (e.type) {
                          case "keydown":
                            return i.postValidation(t, a, {
                                caret: a,
                                dopost: !0
                            }, i);

                          case "blur":
                          case "checkval":
                            var n;
                            if (function parseMinMaxOptions(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(k.escapeRegex(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, 
                                isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(k.escapeRegex(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(i), null !== i.min || null !== i.max) {
                                if (n = i.onUnMask(t.join(""), void 0, h.extend({}, i, {
                                    unmaskAsNumber: !0
                                })), null !== i.min && n < i.min) return i.isNegative = i.min < 0, i.postValidation(i.min.toString().replace(".", i.radixPoint).split(""), a, {
                                    caret: a,
                                    dopost: !0,
                                    placeholder: "0"
                                }, i);
                                if (null !== i.max && n > i.max) return i.isNegative = i.max < 0, i.postValidation(i.max.toString().replace(".", i.radixPoint).split(""), a, {
                                    caret: a,
                                    dopost: !0,
                                    placeholder: "0"
                                }, i);
                            }
                            return i.postValidation(t, a, {
                                caret: a,
                                placeholder: "0",
                                event: "blur"
                            }, i);

                          case "_checkval":
                            return {
                                caret: a
                            };
                        }
                    },
                    regex: {
                        integerPart: function integerPart(e, t) {
                            return t ? new RegExp("[" + k.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + k.escapeRegex(e.negationSymbol.front) + "+]?\\d+");
                        },
                        integerNPart: function integerNPart(e) {
                            return new RegExp("[\\d" + k.escapeRegex(e.groupSeparator) + k.escapeRegex(e.placeholder.charAt(0)) + "]+");
                        }
                    },
                    definitions: {
                        "~": {
                            validator: function validator(e, t, a, i, n, r) {
                                var o;
                                if ("k" === e || "m" === e) {
                                    o = {
                                        insert: [],
                                        c: 0
                                    };
                                    for (var s = 0, l = "k" === e ? 2 : 5; s < l; s++) o.insert.push({
                                        pos: a + s,
                                        c: 0
                                    });
                                    return o.pos = a + l, o;
                                }
                                if (!0 === (o = i ? new RegExp("[0-9" + k.escapeRegex(n.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e))) {
                                    if (!0 !== n.numericInput && void 0 !== t.validPositions[a] && "~" === t.validPositions[a].match.def && !r) {
                                        var u = t.buffer.join(""), c = (u = (u = u.replace(new RegExp("[-" + k.escapeRegex(n.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(k.escapeRegex(n.negationSymbol.back) + "$"), "")).split(n.radixPoint);
                                        1 < c.length && (c[1] = c[1].replace(/0/g, n.placeholder.charAt(0))), "0" === c[0] && (c[0] = c[0].replace(/0/g, n.placeholder.charAt(0))), 
                                        u = c[0] + n.radixPoint + c[1] || "";
                                        var p = t._buffer.join("");
                                        for (u === n.radixPoint && (u = p); null === u.match(k.escapeRegex(p) + "$"); ) p = p.slice(1);
                                        o = void 0 === (u = (u = u.replace(p, "")).split(""))[a] ? {
                                            pos: a,
                                            remove: a
                                        } : {
                                            pos: a
                                        };
                                    }
                                } else i || e !== n.radixPoint || void 0 !== t.validPositions[a - 1] || (o = {
                                    insert: {
                                        pos: a,
                                        c: 0
                                    },
                                    pos: a + 1
                                });
                                return o;
                            },
                            cardinality: 1
                        },
                        "+": {
                            validator: function validator(e, t, a, i, n) {
                                return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                            },
                            cardinality: 1,
                            placeholder: ""
                        },
                        "-": {
                            validator: function validator(e, t, a, i, n) {
                                return n.allowMinus && e === n.negationSymbol.back;
                            },
                            cardinality: 1,
                            placeholder: ""
                        },
                        ":": {
                            validator: function validator(e, t, a, i, n) {
                                var r = "[" + k.escapeRegex(n.radixPoint) + "]", o = new RegExp(r).test(e);
                                return o && t.validPositions[a] && t.validPositions[a].match.placeholder === n.radixPoint && (o = {
                                    caret: a + 1
                                }), o;
                            },
                            cardinality: 1,
                            placeholder: function placeholder(e) {
                                return e.radixPoint;
                            }
                        }
                    },
                    onUnMask: function onUnMask(e, t, a) {
                        if ("" === t && !0 === a.nullable) return t;
                        var i = e.replace(a.prefix, "");
                        return i = (i = i.replace(a.suffix, "")).replace(new RegExp(k.escapeRegex(a.groupSeparator), "g"), ""), 
                        "" !== a.placeholder.charAt(0) && (i = i.replace(new RegExp(a.placeholder.charAt(0), "g"), "0")), 
                        a.unmaskAsNumber ? ("" !== a.radixPoint && -1 !== i.indexOf(a.radixPoint) && (i = i.replace(k.escapeRegex.call(this, a.radixPoint), ".")), 
                        i = (i = i.replace(new RegExp("^" + k.escapeRegex(a.negationSymbol.front)), "-")).replace(new RegExp(k.escapeRegex(a.negationSymbol.back) + "$"), ""), 
                        Number(i)) : i;
                    },
                    isComplete: function isComplete(e, t) {
                        var a = (t.numericInput ? e.slice().reverse() : e).join("");
                        return a = (a = (a = (a = (a = a.replace(new RegExp("^" + k.escapeRegex(t.negationSymbol.front)), "-")).replace(new RegExp(k.escapeRegex(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp(k.escapeRegex(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), 
                        "," === t.radixPoint && (a = a.replace(k.escapeRegex(t.radixPoint), ".")), isFinite(a);
                    },
                    onBeforeMask: function onBeforeMask(e, t) {
                        t.isNegative = void 0;
                        var a = t.radixPoint || ",";
                        "number" != typeof e && "number" !== t.inputType || "" === a || (e = e.toString().replace(".", a));
                        var i = e.split(a), n = i[0].replace(/[^\-0-9]/g, ""), r = 1 < i.length ? i[1].replace(/[^0-9]/g, "") : "";
                        e = n + ("" !== r ? a + r : r);
                        var o = 0;
                        if ("" !== a && (o = r.length, "" !== r)) {
                            var s = Math.pow(10, o || 1);
                            isFinite(t.digits) && (o = parseInt(t.digits), s = Math.pow(10, o)), e = e.replace(k.escapeRegex(a), "."), 
                            isFinite(e) && (e = Math.round(parseFloat(e) * s) / s), e = e.toString().replace(".", a);
                        }
                        return 0 === t.digits && -1 !== e.indexOf(k.escapeRegex(a)) && (e = e.substring(0, e.indexOf(k.escapeRegex(a)))), 
                        function alignDigits(e, t, a) {
                            if (0 < t) {
                                var i = h.inArray(a.radixPoint, e);
                                -1 === i && (e.push(a.radixPoint), i = e.length - 1);
                                for (var n = 1; n <= t; n++) e[i + n] = e[i + n] || "0";
                            }
                            return e;
                        }(e.toString().split(""), o, t).join("");
                    },
                    onKeyDown: function onKeyDown(e, t, a, i) {
                        var n = h(this);
                        if (e.ctrlKey) switch (e.keyCode) {
                          case k.keyCode.UP:
                            n.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), n.trigger("setvalue");
                            break;

                          case k.keyCode.DOWN:
                            n.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), n.trigger("setvalue");
                        }
                    }
                },
                currency: {
                    prefix: "$ ",
                    groupSeparator: ",",
                    alias: "numeric",
                    placeholder: "0",
                    autoGroup: !0,
                    digits: 2,
                    digitsOptional: !1,
                    clearMaskOnLostFocus: !1
                },
                decimal: {
                    alias: "numeric"
                },
                integer: {
                    alias: "numeric",
                    digits: 0,
                    radixPoint: ""
                },
                percentage: {
                    alias: "numeric",
                    digits: 2,
                    digitsOptional: !0,
                    radixPoint: ".",
                    placeholder: "0",
                    autoGroup: !1,
                    min: 0,
                    max: 100,
                    suffix: " %",
                    allowMinus: !1
                }
            }), k;
        }) ? i.apply(t, n) : i) || (e.exports = r);
    }, function(e, t, a) {
        "use strict";
        var i, n, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        n = [ a(5), a(3) ], void 0 === (r = "function" == typeof (i = function(n, r) {
            return void 0 === n.fn.inputmask && (n.fn.inputmask = function(e, t) {
                var a, i = this[0];
                if (void 0 === t && (t = {}), "string" == typeof e) switch (e) {
                  case "unmaskedvalue":
                    return i && i.inputmask ? i.inputmask.unmaskedvalue() : n(i).val();

                  case "remove":
                    return this.each(function() {
                        this.inputmask && this.inputmask.remove();
                    });

                  case "getemptymask":
                    return i && i.inputmask ? i.inputmask.getemptymask() : "";

                  case "hasMaskedValue":
                    return !(!i || !i.inputmask) && i.inputmask.hasMaskedValue();

                  case "isComplete":
                    return !i || !i.inputmask || i.inputmask.isComplete();

                  case "getmetadata":
                    return i && i.inputmask ? i.inputmask.getmetadata() : void 0;

                  case "setvalue":
                    r.setValue(i, t);
                    break;

                  case "option":
                    if ("string" != typeof t) return this.each(function() {
                        if (void 0 !== this.inputmask) return this.inputmask.option(t);
                    });
                    if (i && void 0 !== i.inputmask) return i.inputmask.option(t);
                    break;

                  default:
                    return t.alias = e, a = new r(t), this.each(function() {
                        a.mask(this);
                    });
                } else {
                    if (Array.isArray(e)) return t.alias = e, a = new r(t), this.each(function() {
                        a.mask(this);
                    });
                    if ("object" == (void 0 === e ? "undefined" : o(e))) return a = new r(e), void 0 === e.mask && void 0 === e.alias ? this.each(function() {
                        if (void 0 !== this.inputmask) return this.inputmask.option(e);
                        a.mask(this);
                    }) : this.each(function() {
                        a.mask(this);
                    });
                    if (void 0 === e) return this.each(function() {
                        (a = new r(t)).mask(this);
                    });
                }
            }), n.fn.inputmask;
        }) ? i.apply(t, n) : i) || (e.exports = r);
    } ]);
});
//# sourceMappingURL=jquery.inputmask.js.map