﻿!
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Valine", [], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t()
} (this,
function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t),
            i.l = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.i = function(e) {
            return e
        },
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        },
        t.n = function(e) {
            var n = e && e.__esModule ?
            function() {
                return e.
            default
            }:
            function() {
                return e
            };
            return t.d(n, "a", n),
            n
        },
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        t.p = "",
        t(t.s = 21)
    } ([function(e, t, n) {
        function r(e, t) {
            return new o(t).process(e)
        }
        var i = n(2),
        o = n(12);
        t = e.exports = r,
        t.FilterCSS = o;
        for (var a in i) t[a] = i[a];
        "undefined" != typeof window && (window.filterCSS = e.exports)
    },
    function(e, t) {
        e.exports = {
            indexOf: function(e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return - 1
            },
            forEach: function(e, t, n) {
                var r, i;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
            },
            trim: function(e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
            },
            spaceIndex: function(e) {
                var t = /\s|\n|\t/,
                n = t.exec(e);
                return n ? n.index: -1
            }
        }
    },
    function(e, t) {
        function n() {
            var e = {};
            return e["align-content"] = !1,
            e["align-items"] = !1,
            e["align-self"] = !1,
            e["alignment-adjust"] = !1,
            e["alignment-baseline"] = !1,
            e.all = !1,
            e["anchor-point"] = !1,
            e.animation = !1,
            e["animation-delay"] = !1,
            e["animation-direction"] = !1,
            e["animation-duration"] = !1,
            e["animation-fill-mode"] = !1,
            e["animation-iteration-count"] = !1,
            e["animation-name"] = !1,
            e["animation-play-state"] = !1,
            e["animation-timing-function"] = !1,
            e.azimuth = !1,
            e["backface-visibility"] = !1,
            e.background = !0,
            e["background-attachment"] = !0,
            e["background-clip"] = !0,
            e["background-color"] = !0,
            e["background-image"] = !0,
            e["background-origin"] = !0,
            e["background-position"] = !0,
            e["background-repeat"] = !0,
            e["background-size"] = !0,
            e["baseline-shift"] = !1,
            e.binding = !1,
            e.bleed = !1,
            e["bookmark-label"] = !1,
            e["bookmark-level"] = !1,
            e["bookmark-state"] = !1,
            e.border = !0,
            e["border-bottom"] = !0,
            e["border-bottom-color"] = !0,
            e["border-bottom-left-radius"] = !0,
            e["border-bottom-right-radius"] = !0,
            e["border-bottom-style"] = !0,
            e["border-bottom-width"] = !0,
            e["border-collapse"] = !0,
            e["border-color"] = !0,
            e["border-image"] = !0,
            e["border-image-outset"] = !0,
            e["border-image-repeat"] = !0,
            e["border-image-slice"] = !0,
            e["border-image-source"] = !0,
            e["border-image-width"] = !0,
            e["border-left"] = !0,
            e["border-left-color"] = !0,
            e["border-left-style"] = !0,
            e["border-left-width"] = !0,
            e["border-radius"] = !0,
            e["border-right"] = !0,
            e["border-right-color"] = !0,
            e["border-right-style"] = !0,
            e["border-right-width"] = !0,
            e["border-spacing"] = !0,
            e["border-style"] = !0,
            e["border-top"] = !0,
            e["border-top-color"] = !0,
            e["border-top-left-radius"] = !0,
            e["border-top-right-radius"] = !0,
            e["border-top-style"] = !0,
            e["border-top-width"] = !0,
            e["border-width"] = !0,
            e.bottom = !1,
            e["box-decoration-break"] = !0,
            e["box-shadow"] = !0,
            e["box-sizing"] = !0,
            e["box-snap"] = !0,
            e["box-suppress"] = !0,
            e["break-after"] = !0,
            e["break-before"] = !0,
            e["break-inside"] = !0,
            e["caption-side"] = !1,
            e.chains = !1,
            e.clear = !0,
            e.clip = !1,
            e["clip-path"] = !1,
            e["clip-rule"] = !1,
            e.color = !0,
            e["color-interpolation-filters"] = !0,
            e["column-count"] = !1,
            e["column-fill"] = !1,
            e["column-gap"] = !1,
            e["column-rule"] = !1,
            e["column-rule-color"] = !1,
            e["column-rule-style"] = !1,
            e["column-rule-width"] = !1,
            e["column-span"] = !1,
            e["column-width"] = !1,
            e.columns = !1,
            e.contain = !1,
            e.content = !1,
            e["counter-increment"] = !1,
            e["counter-reset"] = !1,
            e["counter-set"] = !1,
            e.crop = !1,
            e.cue = !1,
            e["cue-after"] = !1,
            e["cue-before"] = !1,
            e.cursor = !1,
            e.direction = !1,
            e.display = !0,
            e["display-inside"] = !0,
            e["display-list"] = !0,
            e["display-outside"] = !0,
            e["dominant-baseline"] = !1,
            e.elevation = !1,
            e["empty-cells"] = !1,
            e.filter = !1,
            e.flex = !1,
            e["flex-basis"] = !1,
            e["flex-direction"] = !1,
            e["flex-flow"] = !1,
            e["flex-grow"] = !1,
            e["flex-shrink"] = !1,
            e["flex-wrap"] = !1,
            e.float = !1,
            e["float-offset"] = !1,
            e["flood-color"] = !1,
            e["flood-opacity"] = !1,
            e["flow-from"] = !1,
            e["flow-into"] = !1,
            e.font = !0,
            e["font-family"] = !0,
            e["font-feature-settings"] = !0,
            e["font-kerning"] = !0,
            e["font-language-override"] = !0,
            e["font-size"] = !0,
            e["font-size-adjust"] = !0,
            e["font-stretch"] = !0,
            e["font-style"] = !0,
            e["font-synthesis"] = !0,
            e["font-variant"] = !0,
            e["font-variant-alternates"] = !0,
            e["font-variant-caps"] = !0,
            e["font-variant-east-asian"] = !0,
            e["font-variant-ligatures"] = !0,
            e["font-variant-numeric"] = !0,
            e["font-variant-position"] = !0,
            e["font-weight"] = !0,
            e.grid = !1,
            e["grid-area"] = !1,
            e["grid-auto-columns"] = !1,
            e["grid-auto-flow"] = !1,
            e["grid-auto-rows"] = !1,
            e["grid-column"] = !1,
            e["grid-column-end"] = !1,
            e["grid-column-start"] = !1,
            e["grid-row"] = !1,
            e["grid-row-end"] = !1,
            e["grid-row-start"] = !1,
            e["grid-template"] = !1,
            e["grid-template-areas"] = !1,
            e["grid-template-columns"] = !1,
            e["grid-template-rows"] = !1,
            e["hanging-punctuation"] = !1,
            e.height = !0,
            e.hyphens = !1,
            e.icon = !1,
            e["image-orientation"] = !1,
            e["image-resolution"] = !1,
            e["ime-mode"] = !1,
            e["initial-letters"] = !1,
            e["inline-box-align"] = !1,
            e["justify-content"] = !1,
            e["justify-items"] = !1,
            e["justify-self"] = !1,
            e.left = !1,
            e["letter-spacing"] = !0,
            e["lighting-color"] = !0,
            e["line-box-contain"] = !1,
            e["line-break"] = !1,
            e["line-grid"] = !1,
            e["line-height"] = !1,
            e["line-snap"] = !1,
            e["line-stacking"] = !1,
            e["line-stacking-ruby"] = !1,
            e["line-stacking-shift"] = !1,
            e["line-stacking-strategy"] = !1,
            e["list-style"] = !0,
            e["list-style-image"] = !0,
            e["list-style-position"] = !0,
            e["list-style-type"] = !0,
            e.margin = !0,
            e["margin-bottom"] = !0,
            e["margin-left"] = !0,
            e["margin-right"] = !0,
            e["margin-top"] = !0,
            e["marker-offset"] = !1,
            e["marker-side"] = !1,
            e.marks = !1,
            e.mask = !1,
            e["mask-box"] = !1,
            e["mask-box-outset"] = !1,
            e["mask-box-repeat"] = !1,
            e["mask-box-slice"] = !1,
            e["mask-box-source"] = !1,
            e["mask-box-width"] = !1,
            e["mask-clip"] = !1,
            e["mask-image"] = !1,
            e["mask-origin"] = !1,
            e["mask-position"] = !1,
            e["mask-repeat"] = !1,
            e["mask-size"] = !1,
            e["mask-source-type"] = !1,
            e["mask-type"] = !1,
            e["max-height"] = !0,
            e["max-lines"] = !1,
            e["max-width"] = !0,
            e["min-height"] = !0,
            e["min-width"] = !0,
            e["move-to"] = !1,
            e["nav-down"] = !1,
            e["nav-index"] = !1,
            e["nav-left"] = !1,
            e["nav-right"] = !1,
            e["nav-up"] = !1,
            e["object-fit"] = !1,
            e["object-position"] = !1,
            e.opacity = !1,
            e.order = !1,
            e.orphans = !1,
            e.outline = !1,
            e["outline-color"] = !1,
            e["outline-offset"] = !1,
            e["outline-style"] = !1,
            e["outline-width"] = !1,
            e.overflow = !1,
            e["overflow-wrap"] = !1,
            e["overflow-x"] = !1,
            e["overflow-y"] = !1,
            e.padding = !0,
            e["padding-bottom"] = !0,
            e["padding-left"] = !0,
            e["padding-right"] = !0,
            e["padding-top"] = !0,
            e.page = !1,
            e["page-break-after"] = !1,
            e["page-break-before"] = !1,
            e["page-break-inside"] = !1,
            e["page-policy"] = !1,
            e.pause = !1,
            e["pause-after"] = !1,
            e["pause-before"] = !1,
            e.perspective = !1,
            e["perspective-origin"] = !1,
            e.pitch = !1,
            e["pitch-range"] = !1,
            e["play-during"] = !1,
            e.position = !1,
            e["presentation-level"] = !1,
            e.quotes = !1,
            e["region-fragment"] = !1,
            e.resize = !1,
            e.rest = !1,
            e["rest-after"] = !1,
            e["rest-before"] = !1,
            e.richness = !1,
            e.right = !1,
            e.rotation = !1,
            e["rotation-point"] = !1,
            e["ruby-align"] = !1,
            e["ruby-merge"] = !1,
            e["ruby-position"] = !1,
            e["shape-image-threshold"] = !1,
            e["shape-outside"] = !1,
            e["shape-margin"] = !1,
            e.size = !1,
            e.speak = !1,
            e["speak-as"] = !1,
            e["speak-header"] = !1,
            e["speak-numeral"] = !1,
            e["speak-punctuation"] = !1,
            e["speech-rate"] = !1,
            e.stress = !1,
            e["string-set"] = !1,
            e["tab-size"] = !1,
            e["table-layout"] = !1,
            e["text-align"] = !0,
            e["text-align-last"] = !0,
            e["text-combine-upright"] = !0,
            e["text-decoration"] = !0,
            e["text-decoration-color"] = !0,
            e["text-decoration-line"] = !0,
            e["text-decoration-skip"] = !0,
            e["text-decoration-style"] = !0,
            e["text-emphasis"] = !0,
            e["text-emphasis-color"] = !0,
            e["text-emphasis-position"] = !0,
            e["text-emphasis-style"] = !0,
            e["text-height"] = !0,
            e["text-indent"] = !0,
            e["text-justify"] = !0,
            e["text-orientation"] = !0,
            e["text-overflow"] = !0,
            e["text-shadow"] = !0,
            e["text-space-collapse"] = !0,
            e["text-transform"] = !0,
            e["text-underline-position"] = !0,
            e["text-wrap"] = !0,
            e.top = !1,
            e.transform = !1,
            e["transform-origin"] = !1,
            e["transform-style"] = !1,
            e.transition = !1,
            e["transition-delay"] = !1,
            e["transition-duration"] = !1,
            e["transition-property"] = !1,
            e["transition-timing-function"] = !1,
            e["unicode-bidi"] = !1,
            e["vertical-align"] = !1,
            e.visibility = !1,
            e["voice-balance"] = !1,
            e["voice-duration"] = !1,
            e["voice-family"] = !1,
            e["voice-pitch"] = !1,
            e["voice-range"] = !1,
            e["voice-rate"] = !1,
            e["voice-stress"] = !1,
            e["voice-volume"] = !1,
            e.volume = !1,
            e["white-space"] = !1,
            e.widows = !1,
            e.width = !0,
            e["will-change"] = !1,
            e["word-break"] = !0,
            e["word-spacing"] = !0,
            e["word-wrap"] = !0,
            e["wrap-flow"] = !1,
            e["wrap-through"] = !1,
            e["writing-mode"] = !1,
            e["z-index"] = !1,
            e
        }
        function r(e, t, n) {}
        function i(e, t, n) {}
        function o(e, t) {
            return a.test(t) ? "": t
        }
        var a = /javascript\s*\:/gim;
        t.whiteList = n(),
        t.getDefaultWhiteList = n,
        t.onAttr = r,
        t.onIgnoreAttr = i,
        t.safeAttrValue = o
    },
    function(e, t) {
        e.exports = {
            indexOf: function(e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return - 1
            },
            forEach: function(e, t, n) {
                var r, i;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
            },
            trim: function(e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
            },
            trimRight: function(e) {
                return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
            }
        }
    },
    function(e, t, n) {
        function r() {
            return {
                a: ["target", "href", "title"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "loop", "preload", "src"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: [],
                dl: [],
                dt: [],
                em: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                ins: ["datetime"],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
            }
        }
        function i(e, t, n) {}
        function o(e, t, n) {}
        function a(e, t, n) {}
        function s(e, t, n) {}
        function l(e) {
            return e.replace(O, "&lt;").replace($, "&gt;")
        }
        function c(e, t, n, r) {
            if (n = g(n), "href" === t || "src" === t) {
                if ("#" === (n = S.trim(n))) return "#";
                if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "#" !== n[0] && "/" !== n[0]) return ""
            } else if ("background" === t) {
                if (M.lastIndex = 0, M.test(n)) return ""
            } else if ("style" === t) {
                if (E.lastIndex = 0, E.test(n)) return "";
                if (I.lastIndex = 0, I.test(n) && (M.lastIndex = 0, M.test(n))) return ""; ! 1 !== r && (r = r || A, n = r.process(n))
            }
            return n = v(n)
        }
        function u(e) {
            return e.replace(_, "&quot;")
        }
        function d(e) {
            return e.replace(F, '"')
        }
        function p(e) {
            return e.replace(C,
            function(e, t) {
                return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
            })
        }
        function f(e) {
            return e.replace(T, ":").replace(L, " ")
        }
        function h(e) {
            for (var t = "",
            n = 0,
            r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " ": e.charAt(n);
            return S.trim(t)
        }
        function g(e) {
            return e = d(e),
            e = p(e),
            e = f(e),
            e = h(e)
        }
        function v(e) {
            return e = u(e),
            e = l(e)
        }
        function m() {
            return ""
        }
        function b(e, t) {
            function n(t) {
                return !! r || -1 !== S.indexOf(e, t)
            }
            "function" != typeof t && (t = function() {});
            var r = !Array.isArray(e),
            i = [],
            o = !1;
            return {
                onIgnoreTag: function(e, r, a) {
                    if (n(e)) {
                        if (a.isClosing) {
                            var s = "[/removed]",
                            l = a.position + s.length;
                            return i.push([!1 !== o ? o: a.position, l]),
                            o = !1,
                            s
                        }
                        return o || (o = a.position),
                        "[removed]"
                    }
                    return t(e, r, a)
                },
                remove: function(e) {
                    var t = "",
                    n = 0;
                    return S.forEach(i,
                    function(r) {
                        t += e.slice(n, r[0]),
                        n = r[1]
                    }),
                    t += e.slice(n)
                }
            }
        }
        function x(e) {
            return e.replace(q, "")
        }
        function y(e) {
            var t = e.split("");
            return t = t.filter(function(e) {
                var t = e.charCodeAt(0);
                return 127 !== t && (!(t <= 31) || (10 === t || 13 === t))
            }),
            t.join("")
        }
        var k = n(0).FilterCSS,
        w = n(0).getDefaultWhiteList,
        S = n(1),
        A = new k,
        O = /</g,
        $ = />/g,
        _ = /"/g,
        F = /&quot;/g,
        C = /&#([a-zA-Z0-9]*);?/gim,
        T = /&colon;?/gim,
        L = /&newline;?/gim,
        M = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
        E = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        I = /u\s*r\s*l\s*\(.*/gi,
        q = /<!--[\s\S]*?-->/g;
        t.whiteList = r(),
        t.getDefaultWhiteList = r,
        t.onTag = i,
        t.onIgnoreTag = o,
        t.onTagAttr = a,
        t.onIgnoreTagAttr = s,
        t.safeAttrValue = c,
        t.escapeHtml = l,
        t.escapeQuote = u,
        t.unescapeQuote = d,
        t.escapeHtmlEntities = p,
        t.escapeDangerHtml5Entities = f,
        t.clearNonPrintableCharacter = h,
        t.friendlyAttrValue = g,
        t.escapeAttrValue = v,
        t.onIgnoreTagStripAll = m,
        t.StripTagBody = b,
        t.stripCommentTag = x,
        t.stripBlankChar = y,
        t.cssFilter = A,
        t.getDefaultCSSWhiteList = w
    },
    function(e, t, n) {
        function r(e) {
            var t = d.spaceIndex(e);
            if ( - 1 === t) var n = e.slice(1, -1);
            else var n = e.slice(1, t + 1);
            return n = d.trim(n).toLowerCase(),
            "/" === n.slice(0, 1) && (n = n.slice(1)),
            "/" === n.slice( - 1) && (n = n.slice(0, -1)),
            n
        }
        function i(e) {
            return "</" === e.slice(0, 2)
        }
        function o(e, t, n) {
            "user strict";
            var o = "",
            a = 0,
            s = !1,
            l = !1,
            c = 0,
            u = e.length,
            d = "",
            p = "";
            for (c = 0; c < u; c++) {
                var f = e.charAt(c);
                if (!1 === s) {
                    if ("<" === f) {
                        s = c;
                        continue
                    }
                } else if (!1 === l) {
                    if ("<" === f) {
                        o += n(e.slice(a, c)),
                        s = c,
                        a = c;
                        continue
                    }
                    if (">" === f) {
                        o += n(e.slice(a, s)),
                        p = e.slice(s, c + 1),
                        d = r(p),
                        o += t(s, o.length, d, p, i(p)),
                        a = c + 1,
                        s = !1;
                        continue
                    }
                    if (('"' === f || "'" === f) && "=" === e.charAt(c - 1)) {
                        l = f;
                        continue
                    }
                } else if (f === l) {
                    l = !1;
                    continue
                }
            }
            return a < e.length && (o += n(e.substr(a))),
            o
        }
        function a(e, t) {
            "user strict";
            function n(e, n) {
                if (e = d.trim(e), e = e.replace(p, "").toLowerCase(), !(e.length < 1)) {
                    var r = t(e, n || "");
                    r && i.push(r)
                }
            }
            for (var r = 0,
            i = [], o = !1, a = e.length, c = 0; c < a; c++) {
                var f, h, g = e.charAt(c);
                if (!1 !== o || "=" !== g) if (!1 === o || c !== r || '"' !== g && "'" !== g || "=" !== e.charAt(c - 1)) if (/\s|\n|\t/.test(g)) {
                    if (e = e.replace(/\s|\n|\t/g, " "), !1 === o) {
                        if ( - 1 === (h = s(e, c))) {
                            f = d.trim(e.slice(r, c)),
                            n(f),
                            o = !1,
                            r = c + 1;
                            continue
                        }
                        c = h - 1;
                        continue
                    }
                    if ( - 1 === (h = l(e, c - 1))) {
                        f = d.trim(e.slice(r, c)),
                        f = u(f),
                        n(o, f),
                        o = !1,
                        r = c + 1;
                        continue
                    }
                } else;
                else {
                    if ( - 1 === (h = e.indexOf(g, c + 1))) break;
                    f = d.trim(e.slice(r + 1, h)),
                    n(o, f),
                    o = !1,
                    c = h,
                    r = c + 1
                } else o = e.slice(r, c),
                r = c + 1
            }
            return r < e.length && (!1 === o ? n(e.slice(r)) : n(o, u(d.trim(e.slice(r))))),
            d.trim(i.join(" "))
        }
        function s(e, t) {
            for (; t < e.length; t++) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t: -1
            }
        }
        function l(e, t) {
            for (; t > 0; t--) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t: -1
            }
        }
        function c(e) {
            return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]
        }
        function u(e) {
            return c(e) ? e.substr(1, e.length - 2) : e
        }
        var d = n(1),
        p = /[^a-zA-Z0-9_:\.\-]/gim;
        t.parseTag = o,
        t.parseAttr = a
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function i(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e) {
            return e && E.test(e) ? e.replace(M,
            function(e) {
                return T[e]
            }) : e
        }
        function a(e) {
            return e && q.test(e) ? e.replace(I,
            function(e) {
                return C[e]
            }) : e
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        } (),
        l = n(9),
        c = r(l),
        u = n(10),
        d = r(u),
        p = n(7),
        f = r(p),
        h = n(8),
        g = r(h),
        v = n(11),
        m = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        } (v),
        b = {
            a: ["target", "href", "title", "class"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "loop", "preload", "src"],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: ["class"],
            caption: [],
            center: [],
            cite: [],
            code: ["class", "codemark"],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: ["class"],
            pre: ["class", "style"],
            s: [],
            section: [],
            small: [],
            span: ["class"],
            sub: [],
            sup: [],
            strong: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
        },
        x = new m.FilterXSS({
            whiteList: b
        });
        d.
    default.setOptions({
            renderer:
            new d.
        default.Renderer,
            gfm: !0,
            tables: !0,
            breaks: !0,
            pedantic: !0,
            sanitize: !0,
            smartLists: !0,
            smartypants: !0
        });
        var y = {
            comment: "",
            nick: "Anonymous",
            mail: "",
            link: "",
            ua: navigator.userAgent,
            url: ""
        },
        k = {
            "zh-cn":{
				head:{
					nick:"昵称",
					mail:"邮箱",
					link:"网址(http://)"
				},
				tips:{
					comments:"评论",
					sofa:"还没有评论哦，快来抢沙发吧~",
					busy:"还在提交中，请稍候...",
					again:"这么简单也能错，也是没谁了.",
					limit:"还可以输入%d字"
				},
				ctrl:{
					reply:"回复",
					ok:"好的",
					sure:"确认",
					cancel:"取消",
					confirm:"确认",
					continue:"继续",
					more:"查看更多...",
					try:"再试试?"
				},
				error:{
					99:"初始化失败，请检查init中的`el`元素.",
					100:"初始化失败，请检查你的AppId和AppKey.",
					401:"未经授权的操作，请检查你的AppId和AppKey.",
					403:"访问被api域名白名单拒绝，请检查你的安全域名设置."
				},
				timeago:{
					seconds:"秒前",
					minutes:"分钟前",
					hours:"小时前",
					days:"天前",
					now:"刚刚"
				}
			},
            en: {
                head: {
                    nick: "NickName",
                    mail: "E-Mail",
                    link: "Website(http://)"
                },
                tips: {
                    comments: "Comments",
                    sofa: "No comments yet.",
                    busy: "Submit is busy, please wait...",
                    again: "Sorry, this is a wrong calculation.",
                    limit: "The largest number of words %d"
                },
                ctrl: {
                    reply: "Reply",
                    ok: "Ok",
                    sure: "Sure",
                    cancel: "Cancel",
                    confirm: "Confirm",
                    continue: "Continue",
                    more: "Load More...",
                    try: "Once More?"
                },
                error: {
                    99 : "Initialization failed, Please check the `el` element in the init method.",
                    100 : "Initialization failed, Please check your appId and appKey.",
                    401 : "Unauthorized operation, Please check your appId and appKey.",
                    403 : "Access denied by api domain white list, Please check your security domain."
                },
                timeago: {
                    seconds: "seconds ago",
                    minutes: "minutes ago",
                    hours: "hours ago",
                    days: "days ago",
                    now: "just now"
                }
            }
        },
        w = [{
            name: "point_up",
            code: "261D"
        },
        {
            name: "fist",
            code: "270A"
        },
        {
            name: "hand",
            code: "270B"
        },
        {
            name: "eyes",
            code: "1F440"
        },
        {
            name: "ear",
            code: "1F442"
        },
        {
            name: "nose",
            code: "1F443"
        },
        {
            name: "lips",
            code: "1F444"
        },
        {
            name: "tongue",
            code: "1F445"
        },
        {
            name: "point_up_2",
            code: "1F446"
        },
        {
            name: "point_down",
            code: "1F447"
        },
        {
            name: "point_left",
            code: "1F448"
        },
        {
            name: "point_right",
            code: "1F449"
        },
        {
            name: "facepunch",
            code: "1F44A"
        },
        {
            name: "wave",
            code: "1F44B"
        },
        {
            name: "ok_hand",
            code: "1F44C"
        },
        {
            name: "+1",
            code: "1F44D"
        },
        {
            name: "-1",
            code: "1F44E"
        },
        {
            name: "clap",
            code: "1F44F"
        },
        {
            name: "cupid",
            code: "1F498"
        },
        {
            name: "sparkling_heart",
            code: "1F496"
        },
        {
            name: "open_hands",
            code: "1F450"
        },
        {
            name: "grinning",
            code: "1F600"
        },
        {
            name: "grin",
            code: "1F601"
        },
        {
            name: "joy",
            code: "1F602"
        },
        {
            name: "smiley",
            code: "1F603"
        },
        {
            name: "smile",
            code: "1F604"
        },
        {
            name: "sweat_smile",
            code: "1F605"
        },
        {
            name: "laughing",
            code: "1F606"
        },
        {
            name: "innocent",
            code: "1F607"
        },
        {
            name: "smiling_imp",
            code: "1F608"
        },
        {
            name: "wink",
            code: "1F609"
        },
        {
            name: "blush",
            code: "1F60A"
        },
        {
            name: "yum",
            code: "1F60B"
        },
        {
            name: "relieved",
            code: "1F60C"
        },
        {
            name: "heart_eyes",
            code: "1F60D"
        },
        {
            name: "sunglasses",
            code: "1F60E"
        },
        {
            name: "smirk",
            code: "1F60F"
        },
        {
            name: "neutral_face",
            code: "1F610"
        },
        {
            name: "expressionless",
            code: "1F611"
        },
        {
            name: "unamused",
            code: "1F612"
        },
        {
            name: "sweat",
            code: "1F613"
        },
        {
            name: "pensive",
            code: "1F614"
        },
        {
            name: "confused",
            code: "1F615"
        },
        {
            name: "confounded",
            code: "1F616"
        },
        {
            name: "kissing",
            code: "1F617"
        },
        {
            name: "kissing_heart",
            code: "1F618"
        },
        {
            name: "kissing_smiling_eyes",
            code: "1F619"
        },
        {
            name: "kissing_closed_eyes",
            code: "1F61A"
        },
        {
            name: "stuck_out_tongue",
            code: "1F61B"
        },
        {
            name: "stuck_out_tongue_winking_eye",
            code: "1F61C"
        },
        {
            name: "stuck_out_tongue_closed_eyes",
            code: "1F61D"
        },
        {
            name: "disappointed",
            code: "1F61E"
        },
        {
            name: "worried",
            code: "1F61F"
        },
        {
            name: "angry",
            code: "1F620"
        },
        {
            name: "rage",
            code: "1F621"
        },
        {
            name: "cry",
            code: "1F622"
        },
        {
            name: "persevere",
            code: "1F623"
        },
        {
            name: "triumph",
            code: "1F624"
        },
        {
            name: "disappointed_relieved",
            code: "1F625"
        },
        {
            name: "frowning",
            code: "1F626"
        },
        {
            name: "anguished",
            code: "1F627"
        },
        {
            name: "fearful",
            code: "1F628"
        },
        {
            name: "weary",
            code: "1F629"
        },
        {
            name: "sleepy",
            code: "1F62A"
        },
        {
            name: "tired_face",
            code: "1F62B"
        },
        {
            name: "grimacing",
            code: "1F62C"
        },
        {
            name: "sob",
            code: "1F62D"
        },
        {
            name: "open_mouth",
            code: "1F62E"
        },
        {
            name: "hushed",
            code: "1F62F"
        },
        {
            name: "cold_sweat",
            code: "1F630"
        },
        {
            name: "scream",
            code: "1F631"
        },
        {
            name: "astonished",
            code: "1F632"
        },
        {
            name: "flushed",
            code: "1F633"
        },
        {
            name: "sleeping",
            code: "1F634"
        },
        {
            name: "dizzy_face",
            code: "1F635"
        },
        {
            name: "no_mouth",
            code: "1F636"
        },
        {
            name: "mask",
            code: "1F637"
        },
        {
            name: "pray",
            code: "1F64F"
        }],
        S = {
            cdn: "https://gravatar.loli.net/avatar/",
            ds: ["mm", "identicon", "monsterid", "wavatar", "retro", ""],
            params: "",
            hide: !1
        },
        A = ["nick", "mail", "link"],
        O = !1,
        $ = Storage && localStorage && localStorage instanceof Storage && localStorage,
        _ = location.pathname.replace(/index\.(html|htm)$/, ""),
        F = function() {
            function e(t) {
                i(this, e);
                var n = this;
                return !! t && n.init(t),
                n
            }
            return s(e, [{
                key: "init",
                value: function(e) {
                    var t = this;
                    try {
                        var n = e.lang || "",
                        r = e.langMode || "",
                        i = S.ds,
                        o = e.avatar || "mm",
                        a = e.avatar_cdn || "";
                        n && r && t.installLocale(n, r),
                        t.locale = t.locale || k[e.lang || "zh-cn"],
                        t.notify = e.notify || !1,
                        t.verify = e.verify || !1,
                        S.params = "?d=" + (i.indexOf(o) > -1 ? o: "mm"),
                        S.hide = "hide" === o,
                        a && (S.cdn = a),
                        _ = e.path || _,
                        e.guest_info = (e.guest_info || A).filter(function(e) {
                            return A.indexOf(e) > -1
                        });
                        var s = Number(e.pageSize || 10);
                        if (e.pageSize = isNaN(s) ? 10 : s < 1 ? 10 : s, !O) {
                            var l = AV || null;
                            if (!l) return void setTimeout(function() {
                                t.init(e)
                            },
                            20);
                            var c = e.app_id || e.appId,
                            u = e.app_key || e.appKey,
                            d = (e.region || "cn").toLowerCase(),
                            p = ["cn", "us"];
                            if (d = p.indexOf(d) > -1 ? d: p[0], !c || !u) throw 100;
                            l.init({
                                appId: c,
                                appKey: u,
                                region: d
                            }),
                            O = !0,
                            t.v = l;
                            for (var f = document.querySelectorAll(".valine-comment-count"), h = 0, g = f.length; h < g; h++) !
                            function(e, n) {
                                var r = f[e];
                                if (r) {
                                    var i = r.getAttribute("data-xid");
                                    i && t.Q(i).count().then(function(e) {
                                        r.innerText = e
                                    }).
                                    catch(function(e) {
                                        r.innerText = 0
                                    })
                                }
                            } (h)
                        }
                        var v = e.el || null,
                        m = document.querySelectorAll(v);
                        if (! (v = "[object HTMLDivElement]" === {}.toString.call(v) ? v: m[m.length - 1] || null)) throw 99;
                        t.el = v,
                        t.el.classList.add("v");
                        var b = {
                            nick: '<input name="nick" placeholder="' + t.locale.head.nick + '" class="vnick vinput" type="text">',
                            mail: '<input name="mail" placeholder="' + t.locale.head.mail + '" class="vmail vinput" type="email">',
                            link: '<input name="link" placeholder="' + t.locale.head.link + '" class="vlink vinput" type="text">'
                        },
                        x = (0 == e.guest_info.length ? ["nick", "mail", "link"] : e.guest_info).map(function(e) {
                            return b[e]
                        }),
                        y = e.placeholder || "";
                        t.el.innerHTML = '<div class="vwrap"><div class="vheader item' + x.length + '">' + x.join("") + '</div><div class="vedit"><textarea class="veditor vinput" placeholder="' + y + '"></textarea><div class="vctrl"><span class="vemoji-btn">Emoji</span> | <span class="vpreview-btn">Preview</span></div><div class="vemojis"  style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div><div class="vcontrol"><div class="col col-60" title="MarkDown is supported"><a href="https://segmentfault.com/markdown" target="_blank">Markdown</a> is supported<div class="vlimit"></div></div><div class="col col-40 text-right"><button type="button" title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' + t.locale.ctrl.reply + '</button></div></div><div style="display:none;" class="vmark"></div></div><div class="vinfo" style="display:none;"><div class="vcount col"></div></div><ul class="vlist"></ul><div class="vempty" style="display:none;"></div><div class="vpage txt-center" ></div><div class="info"><div class="power txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br><br><br></div></div>';
                        var w = t.el.querySelector(".vempty");
                        t.nodata = {
                            show: function(e) {
                                return w.innerHTML = e || t.locale.tips.sofa,
                                w.setAttribute("style", "display:block;"),
                                t
                            },
                            hide: function() {
                                return w.setAttribute("style", "display:none;"),
                                t
                            }
                        };
                        var $ = document.createElement("li");
                        $.setAttribute("class", "vloading"),
                        $.innerHTML = '<div class="loading loading--double"></div>';
                        var F = t.el.querySelector(".vlist");
                        t.loading = {
                            show: function(e) {
                                var n = F.querySelectorAll("li");
                                return e ? F.insertBefore($, n[0]) : F.appendChild($),
                                t.nodata.hide(),
                                t
                            },
                            hide: function() {
                                var e = F.querySelector(".vloading");
                                return e && F.removeChild(e),
                                0 === F.querySelectorAll(".vcard").length && t.nodata.show(),
                                t
                            }
                        };
                        var C = t.el.querySelector(".vmark");
                        t.alert = {
                            show: function(e) {
                                C.innerHTML = '<div class="valert txt-center"><div class="vtext">' + (e && e.text || 1) + '</div><div class="vbtns"></div></div>';
                                var n = C.querySelector(".vbtns"),
                                r = '<button class="vcancel vbtn">' + (e && e.ctxt || t.locale.ctrl.cancel) + "</button>",
                                i = '<button class="vsure vbtn">' + (e && e.otxt || t.locale.ctrl.sure) + "</button>";
                                if (n.innerHTML = "" + r + (e && e.type && i), B.on("click", C.querySelector(".vcancel"),
                                function(e) {
                                    t.alert.hide()
                                }), C.setAttribute("style", "display:block;"), e && e.type) {
                                    var o = C.querySelector(".vsure");
                                    B.on("click", o,
                                    function(n) {
                                        t.alert.hide(),
                                        e.cb && e.cb()
                                    })
                                }
                                return t
                            },
                            hide: function() {
                                return C.setAttribute("style", "display:none;"),
                                t
                            }
                        },
                        t.el && t.bind(e)
                    } catch(e) {
                        t.ErrorHandler(e)
                    }
                    return t
                }
            },
            {
                key: "Q",
                value: function(e) {
                    var t = this,
                    n = new t.v.Query("Comment");
                    return n.equalTo("url", decodeURI(e)),
                    n.addDescending("createdAt"),
                    n.addDescending("insertedAt"),
                    n
                }
            },
            {
                key: "ErrorHandler",
                value: function(e) {
                    var t = this;
                    t.el && t.loading.hide().nodata.hide();
                    var n = "";
                    101 == e ? t.nodata.show() : (n = "number" == typeof e ? "Code " + e + ": " + (t.locale.error[e] || e) : e, t.el && t.nodata.show('<pre style="text-align:left;">' + n + "</pre>"), console)
                }
            },
            {
                key: "installLocale",
                value: function(e, t) {
                    var n = this;
                    return t = t || {},
                    k[e] = JSON.stringify(Object.keys(k["zh-cn"])) == JSON.stringify(Object.keys(t)) ? t: void 0,
                    n.locale = k[e] || k["zh-cn"],
                    n
                }
            },
            {
                key: "setPath",
                value: function(e) {
                    return e && (_ = e),
                    this
                }
            },
            {
                key: "bind",
                value: function(e) {
                    for (var t = this,
                    n = t.el.querySelector(".vemojis"), r = t.el.querySelector(".vemoji-btn"), i = t.el.querySelector(".vpreview"), s = function(e) {
                        var n = "comment",
                        r = e.value || "",
                        o = r.substring(0, 1e4);
                        t.el.querySelector(".vlimit").innerHTML = "" == r ? "": t.locale.tips.limit.replace("%d", 1e4 - o.length),
                        y[n] = x.process((0, d.
                    default)(o)),
                        i.innerHTML = y[n],
                        e.value = o
                    },
                    l = String.fromCharCode, u = Math.floor, p = function() {
                        var e, t, n = [],
                        r = -1,
                        i = arguments.length;
                        if (!i) return "";
                        for (var o = ""; ++r < i;) {
                            var a = Number(arguments[r]);
                            if (!isFinite(a) || a < 0 || a > 1114111 || u(a) != a) throw RangeError("Invalid code point: " + a);
                            a <= 65535 ? n.push(a) : (a -= 65536, e = 55296 + (a >> 10), t = a % 1024 + 56320, n.push(e, t)),
                            (r + 1 == i || n.length > 16384) && (o += l.apply(null, n), n.length = 0)
                        }
                        return o
                    },
                    h = 0, v = w.length; h < v; h++) !
                    function(e, t) {
                        var r = w[e],
                        i = r.code.split("-").map(function(e, t) {
                            return parseInt(e, 16)
                        }),
                        o = p(i),
                        a = document.createElement("i");
                        a.setAttribute("name", r.name),
                        a.innerHTML = o,
                        B.on("click", a,
                        function(e) {
                            var t = document.querySelector(".veditor");
                            F(t, o),
                            s(t)
                        }),
                        n.appendChild(a)
                    } (h);
                    B.on("click", r,
                    function(e) {
                        r.getAttribute("v") ? (r.removeAttribute("v"), n.setAttribute("style", "display:none")) : (r.setAttribute("v", 1), O.removeAttribute("v"), i.setAttribute("style", "display:none"), n.setAttribute("style", "display:block"))
                    });
                    for (var m = e.guest_info,
                    b = {},
                    k = {
                        veditor: "comment"
                    },
                    h = 0, v = m.length; h < v; h++) k["v" + m[h]] = m[h];
                    for (var A in k) k.hasOwnProperty(A) &&
                    function() {
                        var e = k[A],
                        n = t.el.querySelector("." + A);
                        b[e] = n,
                        B.on("input", n,
                        function(t) {
                            "comment" === e ? s(n) : y[e] = o(n.value.replace(/(^\s*)|(\s*$)/g, ""))
                        })
                    } ();
                    var O = t.el.querySelector(".vpreview-btn");
                    B.on("click", O,
                    function(e) {
                        if ("" != y.comment) {
                            O.getAttribute("v") ? (O.removeAttribute("v"), i.setAttribute("style", "display:none")) : (O.setAttribute("v", 1), r.removeAttribute("v"), n.setAttribute("style", "display:none"), i.innerHTML = y.comment, i.setAttribute("style", "display:block"))
                        }
                    });
                    var F = function(e, t) {
                        if (document.selection) {
                            e.focus();
                            document.selection.createRange().text = t,
                            e.focus()
                        } else if (e.selectionStart || "0" == e.selectionStart) {
                            var n = e.selectionStart,
                            r = e.selectionEnd,
                            i = e.scrollTop;
                            e.value = e.value.substring(0, n) + t + e.value.substring(r, e.value.length),
                            e.focus(),
                            e.selectionStart = n + t.length,
                            e.selectionEnd = n + t.length,
                            e.scrollTop = i
                        } else e.focus(),
                        e.value += t
                    },
                    C = function n() {
                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        i = e.pageSize,
                        o = Number(t.el.querySelector(".vnum").innerText);
                        t.loading.show();
                        var a = t.Q(_);
                        a.limit(i),
                        a.skip((r - 1) * i),
                        a.find().then(function(e) {
                            for (var a = e.length,
                            s = 0; s < a; s++) T(e[s], !0);
                            var l = t.el.querySelector(".vpage");
                            l.innerHTML = i * r < o ? '<button type="button" class="vmore vbtn">' + t.locale.ctrl.more + "</button>": "";
                            var c = l.querySelector(".vmore");
                            c && B.on("click", c,
                            function(e) {
                                l.innerHTML = "",
                                n(++r)
                            }),
                            t.loading.hide()
                        }).
                        catch(function(e) {
                            t.loading.hide().ErrorHandler(e.code)
                        })
                    };
                    t.Q(_).count().then(function(e) {
                        e > 0 ? (t.el.querySelector(".vinfo").setAttribute("style", "display:block;"), t.el.querySelector(".vcount").innerHTML = '<span class="vnum">' + e + "</span> " + t.locale.tips.comments, C()) : t.loading.hide()
                    }).
                    catch(function(e) {
                        t.ErrorHandler(e.code)
                    });
                    var T = function(e, n) {
                        var r = document.createElement("li");
                        r.setAttribute("class", "vcard"),
                        r.setAttribute("id", e.id);
                        var i = S.hide ? "": '<img class="vimg" src=\'' + (S.cdn + (0, c.
                    default)(e.get("mail")) + S.params) + "'>",
                        o = (0, f.
                    default)(e.get("ua")),
                        a = '<span class="vsys">' + o.browser + " " + o.version + "</span>",
                        s = '<span class="vsys">' + o.os + " " + o.osVersion + "</span>",
                        l = "",
                        u = e.get("link") || "";
                        l = u ? '<a class="vname" rel="nofollow" href="' + u + '" target="_blank" >' + e.get("nick") + "</a>": '<span class="vname">' + e.get("nick") + "</span>",
                        r.innerHTML = i + '<section><div class="vhead">' + l + " " + a + " " + s + '</div><div class="vcontent">' + e.get("comment") + '</div><div class="vfooter"><span class="vtime">' + (0, g.
                    default)(e.get("createdAt"), t.locale) + "</span><span rid='" + e.id + "' at='@" + e.get("nick") + "' mail='" + e.get("mail") + '\' class="vat">' + t.locale.ctrl.reply + "</span><div></section>";
                        for (var d = r.querySelector(".vat"), p = r.querySelectorAll("a"), h = 0, v = p.length; h < v; h++) {
                            var m = p[h];
                            m && "at" != m.getAttribute("class") && (m.setAttribute("target", "_blank"), m.setAttribute("rel", "nofollow"))
                        }
                        var b = t.el.querySelector(".vlist"),
                        x = b.querySelectorAll("li");
                        n ? b.appendChild(r) : b.insertBefore(r, x[0]);
                        var y = r.querySelector(".vcontent");
                        y && L(y),
                        d && E(d)
                    },
                    L = function(e) {
                        setTimeout(function() {
                            e.offsetHeight > 180 && (e.classList.add("expand"), B.on("click", e,
                            function(t) {
                                e.setAttribute("class", "vcontent")
                            }))
                        },
                        20)
                    },
                    M = {
                        at: "",
                        rid: "",
                        rmail: ""
                    },
                    E = function(e) {
                        B.on("click", e,
                        function(t) {
                            var n = e.getAttribute("at"),
                            r = e.getAttribute("rid"),
                            i = e.getAttribute("mail");
                            M.at = o(n),
                            M.rid = r,
                            M.rmail = i,
                            b.comment.value = n + " ",
                            b.comment.focus()
                        })
                    },
                    I = function() {
                        var e = $ && $.ValineCache;
                        if (e) {
                            e = JSON.parse(e);
                            var n = m;
                            for (var r in n) {
                                var i = n[r];
                                t.el.querySelector(".v" + i).value = a(e[i]),
                                y[i] = e[i]
                            }
                        }
                    };
                    I();
                    var q = function() {
                        for (var e in k) if (k.hasOwnProperty(e)) {
                            var n = k[e],
                            r = t.el.querySelector("." + e);
                            r.value = "",
                            y[n] = ""
                        }
                        M.at = "",
                        M.rid = "",
                        M.rmail = "",
                        y.nick = "Anonymous",
                        t.el.querySelector(".vlimit").innerHTML = "",
                        I()
                    },
                    j = t.el.querySelector(".vsubmit"),
                    P = function(e) {
                        if (j.getAttribute("disabled")) return void t.alert.show({
                            type: 0,
                            text: t.locale.tips.busy + 'ヾ(????)?"',
                            ctxt: t.locale.ctrl.ok
                        });
                        if ("" == y.comment) return void b.comment.focus();
                        if (y.nick = "" == y.nick ? "Anonymous": y.nick, y.comment.indexOf(M.at) > -1 && "" != M.at) {
                            var n = '<a class="at" href=\'#' + M.rid + "'>" + M.at + "</a>";
                            y.comment = y.comment.replace(M.at, n)
                        }
                        var r = z.mail(y.mail),
                        i = z.link(y.link);
                        y.mail = r.k ? r.v: "",
                        y.link = i.k ? i.v: "",
                        t.notify || t.verify ? Q(U) : U()
                    },
                    R = function() {
                        var e = new t.v.ACL;
                        return e.setPublicReadAccess(!0),
                        e.setPublicWriteAccess(!1),
                        e
                    },
                    U = function() {
                        j.setAttribute("disabled", !0),
                        t.loading.show(!0);
                        var e = t.v.Object.extend("Comment");
                        y.url = decodeURI(_),
                        y.insertedAt = new Date;
                        var n = new e;
                        for (var r in y) if (y.hasOwnProperty(r)) {
                            var i = y[r];
                            n.set(r, i)
                        }
                        n.setACL(R()),
                        n.save().then(function(e) {
                            "Guest" != y.nick && $ && $.setItem("ValineCache", JSON.stringify({
                                nick: y.nick,
                                link: y.link,
                                mail: y.mail
                            }));
                            var n = t.el.querySelector(".vnum"),
                            r = 1;
                            try {
                                n ? (r = Number(n.innerText) + 1, n.innerText = r) : t.el.querySelector(".vcount").innerHTML = '<span class="num">1</span> ' + t.locale.tips.comments,
                                T(e),
                                y.mail && W({
                                    username: y.nick,
                                    mail: y.mail
                                }),
                                M.at && M.rmail && t.notify && D({
                                    username: M.at.replace("@", ""),
                                    mail: M.rmail
                                }),
                                j.removeAttribute("disabled"),
                                t.loading.hide(),
                                q()
                            } catch(e) {
                                e.code && t.ErrorHandler(e.code) || t.ErrorHandler(e)
                            }
                        }).
                        catch(function(e) {
                            t.ErrorHandler(e.code)
                        })
                    },
                    Q = function e(n) {
                        var r = Math.floor(10 * Math.random() + 1),
                        i = Math.floor(10 * Math.random() + 1),
                        o = Math.floor(10 * Math.random() + 1),
                        a = ["+", "-", "x"],
                        s = a[Math.floor(3 * Math.random())],
                        l = a[Math.floor(3 * Math.random())],
                        c = "" + r + s + i + l + o,
                        u = c + " = <input class='vcode vinput' >";
                        t.alert.show({
                            type: 1,
                            text: u,
                            ctxt: t.locale.ctrl.cancel,
                            otxt: t.locale.ctrl.ok,
                            cb: function() {
                                var r = +t.el.querySelector(".vcode").value;
                                new Function("return " + c.replace(/x/g, "*"))() === r ? n && n() : t.alert.show({
                                    type: 1,
                                    text: "(T＿T)" + t.locale.tips.again,
                                    ctxt: t.locale.ctrl.cancel,
                                    otxt: t.locale.ctrl.
                                    try,
                                    cb: function() {
                                        e(n)
                                    }
                                })
                            }
                        })
                    },
                    W = function(e) {
                        var n = new t.v.User;
                        return n.setUsername(e.username),
                        n.setPassword(e.mail),
                        n.setEmail(e.mail),
                        n.setACL(R()),
                        n.signUp()
                    },
                    D = function e(n) {
                        t.v.User.requestPasswordReset(n.mail).then(function(e) {}).
                        catch(function(r) {
                            1 == r.code ? t.alert.show({
                                type: 0,
                                text: "[Leacloud] Too more request, the server has been stand by.<br>" + r.error,
                                ctxt: t.locale.ctrl.ok
                            }) : W(n).then(function(t) {
                                e(n)
                            }).
                            catch(function(e) {})
                        })
                    };
                    B.off("click", j, P),
                    B.on("click", j, P),
                    B.on("keyup", document,
                    function(e) {
                        var t = e.keyCode || e.which || e.charCode; (e.ctrlKey || e.metaKey) && 13 == t && P()
                    })
                }
            }]),
            e
        } (),
        C = {},
        T = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#x60;",
            "\\": "&#x5c;"
        };
        for (var L in T) C[T[L]] = L;
        var M = /[&<>"'`\\]/g,
        E = RegExp(M.source),
        I = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
        q = RegExp(I.source),
        B = {
            on: function(e, t, n, r) {
                return t.addEventListener ? t.addEventListener(e, n, r || !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n,
                this
            },
            off: function(e, t, n, r) {
                return t.removeEventListener ? t.removeEventListener(e, n, r || !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null,
                this
            }
        },
        z = {
            mail: function(e) {
                return {
                    k: /[\w-\.]+@([\w-]+\.)+[a-z]{2,3}/.test(e),
                    v: e
                }
            },
            link: function(e) {
                return e = e.length > 0 && (/^(http|https)/.test(e) ? e: "http://" + e),
                {
                    k: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/.test(e),
                    v: e
                }
            }
        };
        e.exports = F
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            var t = e || a.userAgent,
            n = this,
            r = {
                Trident: t.indexOf("Trident") > -1 || t.indexOf("NET CLR") > -1,
                Presto: t.indexOf("Presto") > -1,
                WebKit: t.indexOf("AppleWebKit") > -1,
                Gecko: t.indexOf("Gecko/") > -1,
                Safari: t.indexOf("Safari") > -1,
                Chrome: t.indexOf("Chrome") > -1 || t.indexOf("CriOS") > -1,
                IE: t.indexOf("MSIE") > -1 || t.indexOf("Trident") > -1,
                Edge: t.indexOf("Edge") > -1,
                Firefox: t.indexOf("Firefox") > -1 || t.indexOf("FxiOS") > -1,
                "Firefox Focus": t.indexOf("Focus") > -1,
                Chromium: t.indexOf("Chromium") > -1,
                Opera: t.indexOf("Opera") > -1 || t.indexOf("OPR") > -1,
                Vivaldi: t.indexOf("Vivaldi") > -1,
                Yandex: t.indexOf("YaBrowser") > -1,
                Kindle: t.indexOf("Kindle") > -1 || t.indexOf("Silk/") > -1,
                360 : t.indexOf("360EE") > -1 || t.indexOf("360SE") > -1,
                UC: t.indexOf("UC") > -1 || t.indexOf(" UBrowser") > -1,
                QQBrowser: t.indexOf("QQBrowser") > -1,
                QQ: t.indexOf("QQ/") > -1,
                Baidu: t.indexOf("Baidu") > -1 || t.indexOf("BIDUBrowser") > -1,
                Maxthon: t.indexOf("Maxthon") > -1,
                Sogou: t.indexOf("MetaSr") > -1 || t.indexOf("Sogou") > -1,
                LBBROWSER: t.indexOf("LBBROWSER") > -1,
                "2345Explorer": t.indexOf("2345Explorer") > -1,
                TheWorld: t.indexOf("TheWorld") > -1,
                XiaoMi: t.indexOf("MiuiBrowser") > -1,
                Quark: t.indexOf("Quark") > -1,
                Qiyu: t.indexOf("Qiyu") > -1,
                Wechat: t.indexOf("MicroMessenger") > -1,
                Taobao: t.indexOf("AliApp(TB") > -1,
                Alipay: t.indexOf("AliApp(AP") > -1,
                Weibo: t.indexOf("Weibo") > -1,
                Douban: t.indexOf("com.douban.frodo") > -1,
                Suning: t.indexOf("SNEBUY-APP") > -1,
                iQiYi: t.indexOf("IqiyiApp") > -1,
                Windows: t.indexOf("Windows") > -1,
                Linux: t.indexOf("Linux") > -1 || t.indexOf("X11") > -1,
                "Mac OS": t.indexOf("Macintosh") > -1,
                Android: t.indexOf("Android") > -1 || t.indexOf("Adr") > -1,
                Ubuntu: t.indexOf("Ubuntu") > -1,
                FreeBSD: t.indexOf("FreeBSD") > -1,
                Debian: t.indexOf("Debian") > -1,
                "Windows Phone": t.indexOf("IEMobile") > -1 || t.indexOf("Windows Phone") > -1,
                BlackBerry: t.indexOf("BlackBerry") > -1 || t.indexOf("RIM") > -1,
                MeeGo: t.indexOf("MeeGo") > -1,
                Symbian: t.indexOf("Symbian") > -1,
                iOS: t.indexOf("like Mac OS X") > -1,
                "Chrome OS": t.indexOf("CrOS") > -1,
                WebOS: t.indexOf("hpwOS") > -1,
                Mobile: t.indexOf("Mobi") > -1 || t.indexOf("iPh") > -1 || t.indexOf("480") > -1,
                Tablet: t.indexOf("Tablet") > -1 || t.indexOf("Pad") > -1 || t.indexOf("Nexus 7") > -1
            };
            r.Mobile ? r.Mobile = !(t.indexOf("iPad") > -1) : o.showModalDialog && o.chrome && (r[360] = !0);
            var i = {
                engine: ["WebKit", "Trident", "Gecko", "Presto"],
                browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
                os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
                device: ["Mobile", "Tablet"]
            };
            n.device = "PC",
            n.language = function() {
                var e = a.browserLanguage || a.language,
                t = e.split("-");
                return t[1] && (t[1] = t[1].toUpperCase()),
                t.join("_")
            } ();
            for (var s in i) for (var l = 0; l < i[s].length; l++) {
                var c = i[s][l];
                r[c] && (n[s] = c)
            }
            var u = {
                Windows: function() {
                    var e = t.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
                    return {
                        6.4 : "10",
                        6.3 : "8.1",
                        6.2 : "8",
                        6.1 : "7",
                        "6.0": "Vista",
                        5.2 : "XP",
                        5.1 : "XP",
                        "5.0": "2000"
                    } [e] || e
                },
                Android: function() {
                    return t.replace(/^.*Android ([\d.]+);.*$/, "$1")
                },
                iOS: function() {
                    return t.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
                },
                Debian: function() {
                    return t.replace(/^.*Debian\/([\d.]+).*$/, "$1")
                },
                "Windows Phone": function() {
                    return t.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
                },
                "Mac OS": function() {
                    return t.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
                },
                WebOS: function() {
                    return t.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
                }
            };
            n.osVersion = "",
            u[n.os] && (n.osVersion = u[n.os](), n.osVersion == t && (n.osVersion = ""));
            var d = {
                Safari: function() {
                    return t.replace(/^.*Version\/([\d.]+).*$/, "$1")
                },
                Chrome: function() {
                    return t.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
                },
                IE: function() {
                    return t.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
                },
                Edge: function() {
                    return t.replace(/^.*Edge\/([\d.]+).*$/, "$1")
                },
                Firefox: function() {
                    return t.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
                },
                "Firefox Focus": function() {
                    return t.replace(/^.*Focus\/([\d.]+).*$/, "$1")
                },
                Chromium: function() {
                    return t.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
                },
                Opera: function() {
                    return t.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
                },
                Vivaldi: function() {
                    return t.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
                },
                Yandex: function() {
                    return t.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
                },
                Kindle: function() {
                    return t.replace(/^.*Version\/([\d.]+).*$/, "$1")
                },
                Maxthon: function() {
                    return t.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
                },
                QQBrowser: function() {
                    return t.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
                },
                QQ: function() {
                    return t.replace(/^.*QQ\/([\d.]+).*$/, "$1")
                },
                Baidu: function() {
                    return t.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")
                },
                UC: function() {
                    return t.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
                },
                Sogou: function() {
                    return t.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
                },
                "2345Explorer": function() {
                    return t.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1")
                },
                TheWorld: function() {
                    return t.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
                },
                XiaoMi: function() {
                    return t.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
                },
                Quark: function() {
                    return t.replace(/^.*Quark\/([\d.]+).*$/, "$1")
                },
                Qiyu: function() {
                    return t.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
                },
                Wechat: function() {
                    return t.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
                },
                Taobao: function() {
                    return t.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
                },
                Alipay: function() {
                    return t.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
                },
                Weibo: function() {
                    return t.replace(/^.*weibo__([\d.]+).*$/, "$1")
                },
                Douban: function() {
                    return t.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
                },
                Suning: function() {
                    return t.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
                },
                iQiYi: function() {
                    return t.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
                }
            };
            n.version = "",
            d[n.browser] && (n.version = d[n.browser](), n.version == t && (n.version = "")),
            "Edge" == n.browser ? n.engine = "EdgeHTML": "Chrome" == n.browser && parseInt(n.version) > 27 ? n.engine = "Blink": "Opera" == n.browser && parseInt(n.version) > 12 ? n.engine = "Blink": "Yandex" == n.browser ? n.engine = "Blink": void 0 == n.browser && (n.browser = "Unknow App")
        }
        function i(e) {
            return new r(e)
        }
        var o = window || {},
        a = navigator || {};
        e.exports = i
    },
    function(e, t, n) {
        "use strict";
        var r = function(e, t) {
            if (e) try {
                var n = e.getTime(),
                r = (new Date).getTime(),
                o = r - n,
                a = Math.floor(o / 864e5);
                if (0 === a) {
                    var s = o % 864e5,
                    l = Math.floor(s / 36e5);
                    if (0 === l) {
                        var c = s % 36e5,
                        u = Math.floor(c / 6e4);
                        if (0 === u) {
                            var d = c % 6e4;
                            return Math.round(d / 1e3) + " " + t.timeago.seconds
                        }
                        return u + " " + t.timeago.minutes
                    }
                    return l + " " + t.timeago.hours
                }
                return a < 0 ? t.timeago.now: a < 8 ? a + " " + t.timeago.days: i(e)
            } catch(e) {}
        },
        i = function(e) {
            var t = o(e.getDate(), 2),
            n = o(e.getMonth() + 1, 2);
            return o(e.getFullYear(), 2) + "-" + n + "-" + t
        },
        o = function(e, t) {
            for (var n = e.toString(); n.length < t;) n = "0" + n;
            return n
        };
        e.exports = r
    },
    function(e, t, n) {
        var r; !
        function(i) {
            "use strict";
            function o(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }
            function a(e, t) {
                return e << t | e >>> 32 - t
            }
            function s(e, t, n, r, i, s) {
                return o(a(o(o(t, e), o(r, s)), i), n)
            }
            function l(e, t, n, r, i, o, a) {
                return s(t & n | ~t & r, e, t, i, o, a)
            }
            function c(e, t, n, r, i, o, a) {
                return s(t & r | n & ~r, e, t, i, o, a)
            }
            function u(e, t, n, r, i, o, a) {
                return s(t ^ n ^ r, e, t, i, o, a)
            }
            function d(e, t, n, r, i, o, a) {
                return s(n ^ (t | ~r), e, t, i, o, a)
            }
            function p(e, t) {
                e[t >> 5] |= 128 << t % 32,
                e[14 + (t + 64 >>> 9 << 4)] = t;
                var n, r, i, a, s, p = 1732584193,
                f = -271733879,
                h = -1732584194,
                g = 271733878;
                for (n = 0; n < e.length; n += 16) r = p,
                i = f,
                a = h,
                s = g,
                p = l(p, f, h, g, e[n], 7, -680876936),
                g = l(g, p, f, h, e[n + 1], 12, -389564586),
                h = l(h, g, p, f, e[n + 2], 17, 606105819),
                f = l(f, h, g, p, e[n + 3], 22, -1044525330),
                p = l(p, f, h, g, e[n + 4], 7, -176418897),
                g = l(g, p, f, h, e[n + 5], 12, 1200080426),
                h = l(h, g, p, f, e[n + 6], 17, -1473231341),
                f = l(f, h, g, p, e[n + 7], 22, -45705983),
                p = l(p, f, h, g, e[n + 8], 7, 1770035416),
                g = l(g, p, f, h, e[n + 9], 12, -1958414417),
                h = l(h, g, p, f, e[n + 10], 17, -42063),
                f = l(f, h, g, p, e[n + 11], 22, -1990404162),
                p = l(p, f, h, g, e[n + 12], 7, 1804603682),
                g = l(g, p, f, h, e[n + 13], 12, -40341101),
                h = l(h, g, p, f, e[n + 14], 17, -1502002290),
                f = l(f, h, g, p, e[n + 15], 22, 1236535329),
                p = c(p, f, h, g, e[n + 1], 5, -165796510),
                g = c(g, p, f, h, e[n + 6], 9, -1069501632),
                h = c(h, g, p, f, e[n + 11], 14, 643717713),
                f = c(f, h, g, p, e[n], 20, -373897302),
                p = c(p, f, h, g, e[n + 5], 5, -701558691),
                g = c(g, p, f, h, e[n + 10], 9, 38016083),
                h = c(h, g, p, f, e[n + 15], 14, -660478335),
                f = c(f, h, g, p, e[n + 4], 20, -405537848),
                p = c(p, f, h, g, e[n + 9], 5, 568446438),
                g = c(g, p, f, h, e[n + 14], 9, -1019803690),
                h = c(h, g, p, f, e[n + 3], 14, -187363961),
                f = c(f, h, g, p, e[n + 8], 20, 1163531501),
                p = c(p, f, h, g, e[n + 13], 5, -1444681467),
                g = c(g, p, f, h, e[n + 2], 9, -51403784),
                h = c(h, g, p, f, e[n + 7], 14, 1735328473),
                f = c(f, h, g, p, e[n + 12], 20, -1926607734),
                p = u(p, f, h, g, e[n + 5], 4, -378558),
                g = u(g, p, f, h, e[n + 8], 11, -2022574463),
                h = u(h, g, p, f, e[n + 11], 16, 1839030562),
                f = u(f, h, g, p, e[n + 14], 23, -35309556),
                p = u(p, f, h, g, e[n + 1], 4, -1530992060),
                g = u(g, p, f, h, e[n + 4], 11, 1272893353),
                h = u(h, g, p, f, e[n + 7], 16, -155497632),
                f = u(f, h, g, p, e[n + 10], 23, -1094730640),
                p = u(p, f, h, g, e[n + 13], 4, 681279174),
                g = u(g, p, f, h, e[n], 11, -358537222),
                h = u(h, g, p, f, e[n + 3], 16, -722521979),
                f = u(f, h, g, p, e[n + 6], 23, 76029189),
                p = u(p, f, h, g, e[n + 9], 4, -640364487),
                g = u(g, p, f, h, e[n + 12], 11, -421815835),
                h = u(h, g, p, f, e[n + 15], 16, 530742520),
                f = u(f, h, g, p, e[n + 2], 23, -995338651),
                p = d(p, f, h, g, e[n], 6, -198630844),
                g = d(g, p, f, h, e[n + 7], 10, 1126891415),
                h = d(h, g, p, f, e[n + 14], 15, -1416354905),
                f = d(f, h, g, p, e[n + 5], 21, -57434055),
                p = d(p, f, h, g, e[n + 12], 6, 1700485571),
                g = d(g, p, f, h, e[n + 3], 10, -1894986606),
                h = d(h, g, p, f, e[n + 10], 15, -1051523),
                f = d(f, h, g, p, e[n + 1], 21, -2054922799),
                p = d(p, f, h, g, e[n + 8], 6, 1873313359),
                g = d(g, p, f, h, e[n + 15], 10, -30611744),
                h = d(h, g, p, f, e[n + 6], 15, -1560198380),
                f = d(f, h, g, p, e[n + 13], 21, 1309151649),
                p = d(p, f, h, g, e[n + 4], 6, -145523070),
                g = d(g, p, f, h, e[n + 11], 10, -1120210379),
                h = d(h, g, p, f, e[n + 2], 15, 718787259),
                f = d(f, h, g, p, e[n + 9], 21, -343485551),
                p = o(p, r),
                f = o(f, i),
                h = o(h, a),
                g = o(g, s);
                return [p, f, h, g]
            }
            function f(e) {
                var t, n = "",
                r = 32 * e.length;
                for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n
            }
            function h(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n
            }
            function g(e) {
                return f(p(h(e), 8 * e.length))
            }
            function v(e, t) {
                var n, r, i = h(e),
                o = [],
                a = [];
                for (o[15] = a[15] = void 0, i.length > 16 && (i = p(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n],
                a[n] = 1549556828 ^ i[n];
                return r = p(o.concat(h(t)), 512 + 8 * t.length),
                f(p(a.concat(r), 640))
            }
            function m(e) {
                var t, n, r = "0123456789abcdef",
                i = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n),
                i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return i
            }
            function b(e) {
                return unescape(encodeURIComponent(e))
            }
            function x(e) {
                return g(b(e))
            }
            function y(e) {
                return m(x(e))
            }
            function k(e, t) {
                return v(b(e), b(t))
            }
            function w(e, t) {
                return m(k(e, t))
            }
            function S(e, t, n) {
                return t ? n ? k(t, e) : w(t, e) : n ? x(e) : y(e)
            }
            void 0 !== (r = function() {
                return S
            }.call(t, n, t, e)) && (e.exports = r)
        } ()
    },
    function(e, t, n) { (function(t) { (function() {
                function t(e) {
                    this.tokens = [],
                    this.tokens.links = {},
                    this.options = e || u.defaults,
                    this.rules = d.normal,
                    this.options.gfm && (this.options.tables ? this.rules = d.tables: this.rules = d.gfm)
                }
                function n(e, t) {
                    if (this.options = t || u.defaults, this.links = e, this.rules = p.normal, this.renderer = this.options.renderer || new r, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
                    this.options.gfm ? this.options.breaks ? this.rules = p.breaks: this.rules = p.gfm: this.options.pedantic && (this.rules = p.pedantic)
                }
                function r(e) {
                    this.options = e || {}
                }
                function i(e) {
                    this.tokens = [],
                    this.token = null,
                    this.options = e || u.defaults,
                    this.options.renderer = this.options.renderer || new r,
                    this.renderer = this.options.renderer,
                    this.renderer.options = this.options
                }
                function o(e, t) {
                    return e.replace(t ? /&/g: /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                }
                function a(e) {
                    return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,
                    function(e, t) {
                        return t = t.toLowerCase(),
                        "colon" === t ? ":": "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode( + t.substring(1)) : ""
                    })
                }
                function s(e, t) {
                    return e = e.source,
                    t = t || "",
                    function n(r, i) {
                        return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
                    }
                }
                function l() {}
                function c(e) {
                    for (var t, n, r = 1; r < arguments.length; r++) {
                        t = arguments[r];
                        for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }
                function u(e, n, r) {
                    if (r || "function" == typeof n) {
                        r || (r = n, n = null),
                        n = c({},
                        u.defaults, n || {});
                        var a, s, l = n.highlight,
                        d = 0;
                        try {
                            a = t.lex(e, n)
                        } catch(e) {
                            return r(e)
                        }
                        s = a.length;
                        var p = function(e) {
                            if (e) return n.highlight = l,
                            r(e);
                            var t;
                            try {
                                t = i.parse(a, n)
                            } catch(t) {
                                e = t
                            }
                            return n.highlight = l,
                            e ? r(e) : r(null, t)
                        };
                        if (!l || l.length < 3) return p();
                        if (delete n.highlight, !s) return p();
                        for (; d < a.length; d++) !
                        function(e) {
                            "code" !== e.type ? --s || p() : l(e.text, e.lang,
                            function(t, n) {
                                return t ? p(t) : null == n || n === e.text ? --s || p() : (e.text = n, e.escaped = !0, void(--s || p()))
                            })
                        } (a[d])
                    } else try {
                        return n && (n = c({},
                        u.defaults, n)),
                        i.parse(t.lex(e, n), n)
                    } catch(e) {
                        if (e.message += "\nPlease report this to https://github.com/chjj/marked.", (n || u.defaults).silent) return "<p>An error occured:</p><pre>" + o(e.message + "", !0) + "</pre>";
                        throw e
                    }
                }
                var d = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: l,
                    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                    nptable: l,
                    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
                    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
                    table: l,
                    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                    text: /^[^\n]+/
                };
                d.bullet = /(?:[*+-]|\d+\.)/,
                d.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,
                d.item = s(d.item, "gm")(/bull/g, d.bullet)(),
                d.list = s(d.list)(/bull/g, d.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + d.def.source + ")")(),
                d.blockquote = s(d.blockquote)("def", d.def)(),
                d._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",
                d.html = s(d.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, d._tag)(),
                d.paragraph = s(d.paragraph)("hr", d.hr)("heading", d.heading)("lheading", d.lheading)("blockquote", d.blockquote)("tag", "<" + d._tag)("def", d.def)(),
                d.normal = c({},
                d),
                d.gfm = c({},
                d.normal, {
                    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                }),
                d.gfm.paragraph = s(d.paragraph)("(?!", "(?!" + d.gfm.fences.source.replace("\\1", "\\2") + "|" + d.list.source.replace("\\1", "\\3") + "|")(),
                d.tables = c({},
                d.gfm, {
                    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
                }),
                t.rules = d,
                t.lex = function(e, n) {
                    return new t(n).lex(e)
                },
                t.prototype.lex = function(e) {
                    return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"),
                    this.token(e, !0)
                },
                t.prototype.token = function(e, t, n) {
                    for (var r, i, o, a, s, l, c, u, p, e = e.replace(/^ +$/gm, ""); e;) if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
                        type: "space"
                    })), o = this.rules.code.exec(e)) e = e.substring(o[0].length),
                    o = o[0].replace(/^ {4}/gm, ""),
                    this.tokens.push({
                        type: "code",
                        text: this.options.pedantic ? o: o.replace(/\n+$/, "")
                    });
                    else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length),
                    this.tokens.push({
                        type: "code",
                        lang: o[2],
                        text: o[3] || ""
                    });
                    else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length),
                    this.tokens.push({
                        type: "heading",
                        depth: o[1].length,
                        text: o[2]
                    });
                    else if (t && (o = this.rules.nptable.exec(e))) {
                        for (e = e.substring(o[0].length), l = {
                            type: "table",
                            header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                            align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: o[3].replace(/\n$/, "").split("\n")
                        },
                        u = 0; u < l.align.length; u++) / ^*-+:*$ / .test(l.align[u]) ? l.align[u] = "right": /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center": /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left": l.align[u] = null;
                        for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].split(/ *\| */);
                        this.tokens.push(l)
                    } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length),
                    this.tokens.push({
                        type: "heading",
                        depth: "=" === o[2] ? 1 : 2,
                        text: o[1]
                    });
                    else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length),
                    this.tokens.push({
                        type: "hr"
                    });
                    else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length),
                    this.tokens.push({
                        type: "blockquote_start"
                    }),
                    o = o[0].replace(/^ *> ?/gm, ""),
                    this.token(o, t, !0),
                    this.tokens.push({
                        type: "blockquote_end"
                    });
                    else if (o = this.rules.list.exec(e)) {
                        for (e = e.substring(o[0].length), a = o[2], this.tokens.push({
                            type: "list_start",
                            ordered: a.length > 1
                        }), o = o[0].match(this.rules.item), r = !1, p = o.length, u = 0; u < p; u++) l = o[u],
                        c = l.length,
                        l = l.replace(/^ *([*+-]|\d+\.) +/, ""),
                        ~l.indexOf("\n ") && (c -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + c + "}", "gm"), "")),
                        this.options.smartLists && u !== p - 1 && (s = d.bullet.exec(o[u + 1])[0], a === s || a.length > 1 && s.length > 1 || (e = o.slice(u + 1).join("\n") + e, u = p - 1)),
                        i = r || /\n\n(?!\s*$)/.test(l),
                        u !== p - 1 && (r = "\n" === l.charAt(l.length - 1), i || (i = r)),
                        this.tokens.push({
                            type: i ? "loose_item_start": "list_item_start"
                        }),
                        this.token(l, !1, n),
                        this.tokens.push({
                            type: "list_item_end"
                        });
                        this.tokens.push({
                            type: "list_end"
                        })
                    } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length),
                    this.tokens.push({
                        type: this.options.sanitize ? "paragraph": "html",
                        pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
                        text: o[0]
                    });
                    else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length),
                    this.tokens.links[o[1].toLowerCase()] = {
                        href: o[2],
                        title: o[3]
                    };
                    else if (t && (o = this.rules.table.exec(e))) {
                        for (e = e.substring(o[0].length), l = {
                            type: "table",
                            header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                            align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                        },
                        u = 0; u < l.align.length; u++) / ^*-+:*$ / .test(l.align[u]) ? l.align[u] = "right": /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center": /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left": l.align[u] = null;
                        for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                        this.tokens.push(l)
                    } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length),
                    this.tokens.push({
                        type: "paragraph",
                        text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
                    });
                    else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length),
                    this.tokens.push({
                        type: "text",
                        text: o[0]
                    });
                    else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                    return this.tokens
                };
                var p = {
                    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
                    url: l,
                    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
                    link: /^!?\[(inside)\]\(href\)/,
                    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                    em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                    code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                    br: /^ {2,}\n(?!\s*$)/,
                    del: l,
                    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
                };
                p._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,
                p._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,
                p.link = s(p.link)("inside", p._inside)("href", p._href)(),
                p.reflink = s(p.reflink)("inside", p._inside)(),
                p.normal = c({},
                p),
                p.pedantic = c({},
                p.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
                }),
                p.gfm = c({},
                p.normal, {
                    escape: s(p.escape)("])", "~|])")(),
                    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                    del: /^~~(?=\S)([\s\S]*?\S)~~/,
                    text: s(p.text)("]|", "~]|")("|", "|https?://|")()
                }),
                p.breaks = c({},
                p.gfm, {
                    br: s(p.br)("{2,}", "*")(),
                    text: s(p.gfm.text)("{2,}", "*")()
                }),
                n.rules = p,
                n.output = function(e, t, r) {
                    return new n(t, r).output(e)
                },
                n.prototype.output = function(e) {
                    for (var t, n, r, i, a = ""; e;) if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length),
                    a += i[1];
                    else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length),
                    "@" === i[2] ? (n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1]), r = this.mangle("mailto:") + n) : (n = o(i[1]), r = n),
                    a += this.renderer.link(r, null, n);
                    else if (this.inLink || !(i = this.rules.url.exec(e))) {
                        if (i = this.rules.tag.exec(e)) ! this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1),
                        e = e.substring(i[0].length),
                        a += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : o(i[0]) : i[0];
                        else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length),
                        this.inLink = !0,
                        a += this.outputLink(i, {
                            href: i[2],
                            title: i[3]
                        }),
                        this.inLink = !1;
                        else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
                            if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
                                a += i[0].charAt(0),
                                e = i[0].substring(1) + e;
                                continue
                            }
                            this.inLink = !0,
                            a += this.outputLink(i, t),
                            this.inLink = !1
                        } else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length),
                        a += this.renderer.strong(this.output(i[2] || i[1]));
                        else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length),
                        a += this.renderer.em(this.output(i[2] || i[1]));
                        else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length),
                        a += this.renderer.codespan(o(i[2], !0));
                        else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length),
                        a += this.renderer.br();
                        else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length),
                        a += this.renderer.del(this.output(i[1]));
                        else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length),
                        a += this.renderer.text(o(this.smartypants(i[0])));
                        else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                    } else e = e.substring(i[0].length),
                    n = o(i[1]),
                    r = n,
                    a += this.renderer.link(r, null, n);
                    return a
                },
                n.prototype.outputLink = function(e, t) {
                    var n = o(t.href),
                    r = t.title ? o(t.title) : null;
                    return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, o(e[1]))
                },
                n.prototype.smartypants = function(e) {
                    return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
                },
                n.prototype.mangle = function(e) {
                    if (!this.options.mangle) return e;
                    for (var t, n = "",
                    r = e.length,
                    i = 0; i < r; i++) t = e.charCodeAt(i),
                    Math.random() > .5 && (t = "x" + t.toString(16)),
                    n += "&#" + t + ";";
                    return n
                },
                r.prototype.code = function(e, t, n) {
                    if (this.options.highlight) {
                        var r = this.options.highlight(e, t);
                        null != r && r !== e && (n = !0, e = r)
                    }
                    return t ? '<pre><code class="' + this.options.langPrefix + o(t, !0) + '">' + (n ? e: o(e, !0)) + "\n</code></pre>\n": "<pre><code>" + (n ? e: o(e, !0)) + "\n</code></pre>"
                },
                r.prototype.blockquote = function(e) {
                    return "<blockquote>\n" + e + "</blockquote>\n"
                },
                r.prototype.html = function(e) {
                    return e
                },
                r.prototype.heading = function(e, t, n) {
                    return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
                },
                r.prototype.hr = function() {
                    return this.options.xhtml ? "<hr/>\n": "<hr>\n"
                },
                r.prototype.list = function(e, t) {
                    var n = t ? "ol": "ul";
                    return "<" + n + ">\n" + e + "</" + n + ">\n"
                },
                r.prototype.listitem = function(e) {
                    return "<li>" + e + "</li>\n"
                },
                r.prototype.paragraph = function(e) {
                    return "<p>" + e + "</p>\n"
                },
                r.prototype.table = function(e, t) {
                    return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
                },
                r.prototype.tablerow = function(e) {
                    return "<tr>\n" + e + "</tr>\n"
                },
                r.prototype.tablecell = function(e, t) {
                    var n = t.header ? "th": "td";
                    return (t.align ? "<" + n + ' style="text-align:' + t.align + '">': "<" + n + ">") + e + "</" + n + ">\n"
                },
                r.prototype.strong = function(e) {
                    return "<strong>" + e + "</strong>"
                },
                r.prototype.em = function(e) {
                    return "<em>" + e + "</em>"
                },
                r.prototype.codespan = function(e) {
                    return "<code>" + e + "</code>"
                },
                r.prototype.br = function() {
                    return this.options.xhtml ? "<br/>": "<br>"
                },
                r.prototype.del = function(e) {
                    return "<del>" + e + "</del>"
                },
                r.prototype.link = function(e, t, n) {
                    if (this.options.sanitize) {
                        try {
                            var r = decodeURIComponent(a(e)).replace(/[^\w:]/g, "").toLowerCase()
                        } catch(e) {
                            return ""
                        }
                        if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:")) return ""
                    }
                    var i = '<a href="' + e + '"';
                    return t && (i += ' title="' + t + '"'),
                    i += ">" + n + "</a>"
                },
                r.prototype.image = function(e, t, n) {
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'),
                    r += this.options.xhtml ? "/>": ">"
                },
                r.prototype.text = function(e) {
                    return e
                },
                i.parse = function(e, t, n) {
                    return new i(t, n).parse(e)
                },
                i.prototype.parse = function(e) {
                    this.inline = new n(e.links, this.options, this.renderer),
                    this.tokens = e.reverse();
                    for (var t = ""; this.next();) t += this.tok();
                    return t
                },
                i.prototype.next = function() {
                    return this.token = this.tokens.pop()
                },
                i.prototype.peek = function() {
                    return this.tokens[this.tokens.length - 1] || 0
                },
                i.prototype.parseText = function() {
                    for (var e = this.token.text;
                    "text" === this.peek().type;) e += "\n" + this.next().text;
                    return this.inline.output(e)
                },
                i.prototype.tok = function() {
                    switch (this.token.type) {
                    case "space":
                        return "";
                    case "hr":
                        return this.renderer.hr();
                    case "heading":
                        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                    case "code":
                        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                    case "table":
                        var e, t, n, r, i = "",
                        o = "";
                        for (n = "", e = 0; e < this.token.header.length; e++)({
                            header: !0,
                            align: this.token.align[e]
                        }),
                        n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                            header: !0,
                            align: this.token.align[e]
                        });
                        for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                            for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                                header: !1,
                                align: this.token.align[r]
                            });
                            o += this.renderer.tablerow(n)
                        }
                        return this.renderer.table(i, o);
                    case "blockquote_start":
                        for (var o = "";
                        "blockquote_end" !== this.next().type;) o += this.tok();
                        return this.renderer.blockquote(o);
                    case "list_start":
                        for (var o = "",
                        a = this.token.ordered;
                        "list_end" !== this.next().type;) o += this.tok();
                        return this.renderer.list(o, a);
                    case "list_item_start":
                        for (var o = "";
                        "list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() : this.tok();
                        return this.renderer.listitem(o);
                    case "loose_item_start":
                        for (var o = "";
                        "list_item_end" !== this.next().type;) o += this.tok();
                        return this.renderer.listitem(o);
                    case "html":
                        var s = this.token.pre || this.options.pedantic ? this.token.text: this.inline.output(this.token.text);
                        return this.renderer.html(s);
                    case "paragraph":
                        return this.renderer.paragraph(this.inline.output(this.token.text));
                    case "text":
                        return this.renderer.paragraph(this.parseText())
                    }
                },
                l.exec = l,
                u.options = u.setOptions = function(e) {
                    return c(u.defaults, e),
                    u
                },
                u.defaults = {
                    gfm: !0,
                    tables: !0,
                    breaks: !1,
                    pedantic: !1,
                    sanitize: !1,
                    sanitizer: null,
                    mangle: !0,
                    smartLists: !1,
                    silent: !1,
                    highlight: null,
                    langPrefix: "lang-",
                    smartypants: !1,
                    headerPrefix: "",
                    renderer: new r,
                    xhtml: !1
                },
                u.Parser = i,
                u.parser = i.parse,
                u.Renderer = r,
                u.Lexer = t,
                u.lexer = t.lex,
                u.InlineLexer = n,
                u.inlineLexer = n.output,
                u.parse = u,
                e.exports = u
            }).call(function() {
                return this || ("undefined" != typeof window ? window: t)
            } ())
        }).call(t, n(14))
    },
    function(e, t, n) {
        function r(e, t) {
            return new a(t).process(e)
        }
        var i = n(4),
        o = n(5),
        a = n(15);
        t = e.exports = r,
        t.FilterXSS = a;
        for (var s in i) t[s] = i[s];
        for (var s in o) t[s] = o[s];
        "undefined" != typeof window && (window.filterXSS = e.exports)
    },
    function(e, t, n) {
        function r(e) {
            return void 0 === e || null === e
        }
        function i(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t
        }
        function o(e) {
            e = i(e || {}),
            e.whiteList = e.whiteList || a.whiteList,
            e.onAttr = e.onAttr || a.onAttr,
            e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr,
            e.safeAttrValue = e.safeAttrValue || a.safeAttrValue,
            this.options = e
        }
        var a = n(2),
        s = n(13);
        n(3);
        o.prototype.process = function(e) {
            if (e = e || "", !(e = e.toString())) return "";
            var t = this,
            n = t.options,
            i = n.whiteList,
            o = n.onAttr,
            a = n.onIgnoreAttr,
            l = n.safeAttrValue;
            return s(e,
            function(e, t, n, s, c) {
                var u = i[n],
                d = !1;
                if (!0 === u ? d = u: "function" == typeof u ? d = u(s) : u instanceof RegExp && (d = u.test(s)), !0 !== d && (d = !1), s = l(n, s)) {
                    var p = {
                        position: t,
                        sourcePosition: e,
                        source: c,
                        isWhite: d
                    };
                    if (d) {
                        var f = o(n, s, p);
                        return r(f) ? n + ":" + s: f
                    }
                    var f = a(n, s, p);
                    return r(f) ? void 0 : f
                }
            })
        },
        e.exports = o
    },
    function(e, t, n) {
        function r(e, t) {
            function n() {
                if (!o) {
                    var n = i.trim(e.slice(a, s)),
                    r = n.indexOf(":");
                    if ( - 1 !== r) {
                        var c = i.trim(n.slice(0, r)),
                        u = i.trim(n.slice(r + 1));
                        if (c) {
                            var d = t(a, l.length, c, u, n);
                            d && (l += d + "; ")
                        }
                    }
                }
                a = s + 1
            }
            e = i.trimRight(e),
            ";" !== e[e.length - 1] && (e += ";");
            for (var r = e.length,
            o = !1,
            a = 0,
            s = 0,
            l = ""; s < r; s++) {
                var c = e[s];
                if ("/" === c && "*" === e[s + 1]) {
                    var u = e.indexOf("*/", s + 2);
                    if ( - 1 === u) break;
                    s = u + 1,
                    a = s + 1,
                    o = !1
                } else "(" === c ? o = !0 : ")" === c ? o = !1 : ";" === c ? o || n() : "\n" === c && n()
            }
            return i.trim(l)
        }
        var i = n(3);
        e.exports = r
    },
    function(e, t) {
        var n;
        n = function() {
            return this
        } ();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch(e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    function(e, t, n) {
        function r(e) {
            return void 0 === e || null === e
        }
        function i(e) {
            var t = p.spaceIndex(e);
            if ( - 1 === t) return {
                html: "",
                closing: "/" === e[e.length - 2]
            };
            e = p.trim(e.slice(t + 1, -1));
            var n = "/" === e[e.length - 1];
            return n && (e = p.trim(e.slice(0, -1))),
            {
                html: e,
                closing: n
            }
        }
        function o(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t
        }
        function a(e) {
            e = o(e || {}),
            e.stripIgnoreTag && (e.onIgnoreTag, e.onIgnoreTag = l.onIgnoreTagStripAll),
            e.whiteList = e.whiteList || l.whiteList,
            e.onTag = e.onTag || l.onTag,
            e.onTagAttr = e.onTagAttr || l.onTagAttr,
            e.onIgnoreTag = e.onIgnoreTag || l.onIgnoreTag,
            e.onIgnoreTagAttr = e.onIgnoreTagAttr || l.onIgnoreTagAttr,
            e.safeAttrValue = e.safeAttrValue || l.safeAttrValue,
            e.escapeHtml = e.escapeHtml || l.escapeHtml,
            this.options = e,
            !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {},
            this.cssFilter = new s(e.css))
        }
        var s = n(0).FilterCSS,
        l = n(4),
        c = n(5),
        u = c.parseTag,
        d = c.parseAttr,
        p = n(1);
        a.prototype.process = function(e) {
            if (e = e || "", !(e = e.toString())) return "";
            var t = this,
            n = t.options,
            o = n.whiteList,
            a = n.onTag,
            s = n.onIgnoreTag,
            c = n.onTagAttr,
            f = n.onIgnoreTagAttr,
            h = n.safeAttrValue,
            g = n.escapeHtml,
            v = t.cssFilter;
            n.stripBlankChar && (e = l.stripBlankChar(e)),
            n.allowCommentTag || (e = l.stripCommentTag(e));
            var m = !1;
            if (n.stripIgnoreTagBody) {
                var m = l.StripTagBody(n.stripIgnoreTagBody, s);
                s = m.onIgnoreTag
            }
            var b = u(e,
            function(e, t, n, l, u) {
                var m = {
                    sourcePosition: e,
                    position: t,
                    isClosing: u,
                    isWhite: o.hasOwnProperty(n)
                },
                b = a(n, l, m);
                if (!r(b)) return b;
                if (m.isWhite) {
                    if (m.isClosing) return "</" + n + ">";
                    var x = i(l),
                    y = o[n],
                    k = d(x.html,
                    function(e, t) {
                        var i = -1 !== p.indexOf(y, e),
                        o = c(n, e, t, i);
                        if (!r(o)) return o;
                        if (i) return t = h(n, e, t, v),
                        t ? e + '="' + t + '"': e;
                        var o = f(n, e, t, i);
                        return r(o) ? void 0 : o
                    }),
                    l = "<" + n;
                    return k && (l += " " + k),
                    x.closing && (l += " /"),
                    l += ">"
                }
                var b = s(n, l, m);
                return r(b) ? g(l) : b
            },
            g);
            return m && (b = m.remove(b)),
            b
        },
        e.exports = a
    },
    function(e, t, n) {
        var r = n(17);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var i = {};
        i.transform = void 0;
        n(19)(r, i);
        r.locals && (e.exports = r.locals)
    },
    function(e, t, n) {
        t = e.exports = n(18)(void 0),
        t.push([e.i, '.v *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.8;color:#555;-webkit-transition:all .3s ease;transition:all .3s ease}.v .vinput{border:none;resize:none;outline:none;padding:10px 0;max-width:100%;font-size:.775rem}.v .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v .vwrap input{background:transparent}.v .vwrap .vedit{position:relative}.v .vwrap .vedit .vctrl{text-align:right;font-size:12px}.v .vwrap .vedit .vctrl span{padding:10px;display:inline-block;vertical-align:middle;cursor:pointer}.v .vwrap .vedit .vemojis{display:none;font-size:18px;text-align:justify;max-height:145px;overflow:auto;margin-bottom:10px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v .vwrap .vedit .vemojis i{font-style:normal;padding:7px 0;width:38px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v .vwrap .vedit .vpreview{padding:7px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v .vwrap .vheader .vinput{width:33.33%;border-bottom:1px dashed #dedede}.v .vwrap .vheader.item2 .vinput{width:50%}.v .vwrap .vheader.item1 .vinput{width:100%}.v .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width:520px){.v .vwrap .vheader.item2 .vinput,.v .vwrap .vheader .vinput{width:100%}}.v .vwrap .vcontrol{font-size:0;padding-top:15px}.v .vwrap .vcontrol .col{display:inline-block;font-size:.725rem;vertical-align:middle;color:#ccc}.v .vwrap .vcontrol .col.text-right{text-align:right}.v .vwrap .vcontrol .col svg{margin-right:2px;overflow:hidden;fill:currentColor;vertical-align:middle}.v .vwrap .vcontrol .col.col-40{width:40%}.v .vwrap .vcontrol .col.col-60{width:60%}.v .vwrap .vcontrol .col.split{width:50%}.v .vwrap .vmark{position:absolute;background:rgba(0,0,0,.65);width:100%;height:100%;left:0;top:0}.v .vwrap .vmark .valert{padding-top:3rem}.v .vwrap .vmark .valert .vtext{color:#fff;padding:1rem 0}.v .vwrap .vmark .valert .vcode{width:4.6875rem;border-radius:.3125rem;padding:.5rem;background:#dedede}.v .vwrap .vmark .valert .vcode:focus{border-color:#3090e4;background-color:#fff}@media screen and (max-width:720px){.v .vwrap .vmark .valert{padding-top:5.5rem}.v .vwrap .vmark .valert .vtext{color:#fff;padding:1rem 0}}.v .power{color:#999}.v .power,.v .power a{font-size:.75rem}.v .vinfo{font-size:0;padding:5px}.v .vinfo .col{font-size:.875rem;display:inline-block;width:50%;vertical-align:middle}.v .vinfo .vcount .vnum{font-weight:600;font-size:1.25rem}.v a{text-decoration:none;color:#555}.v a:hover{color:#222}.v li,.v ul{list-style:none;margin:0 auto;padding:0}.v .txt-center{text-align:center}.v .txt-right{text-align:right}.v .pd5{padding:5px}.v .pd10{padding:10px}.v .veditor{width:100%;min-height:8.75rem;font-size:.875rem;background:transparent;resize:vertical}.v .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#313131;border:1px solid #ededed;border-radius:1.9rem;display:inline-block;background:#ededed;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5rem 1.25rem;font-size:.875rem;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v .vbtn+.vbtn{margin-left:1.25rem}.v .vbtn:active,.v .vbtn:hover{color:#3090e4;border-color:#3090e4;background-color:#fff}.v .vempty{padding:1.25rem;text-align:center;color:#999}.v .vlist{width:100%}.v .vlist .vcard{padding-top:1.5rem;position:relative;display:block}.v .vlist .vcard:after{content:"";clear:both;display:block}.v .vlist .vcard .vimg{width:2.5rem;height:2.5rem;float:left;border-radius:50%;margin-right:.7525rem}.v .vlist .vcard .vhead{line-height:1.5;margin-bottom:.625rem;margin-top:0}.v .vlist .vcard .vhead .vname{font-size:.875rem;font-weight:700;margin-right:.875rem;cursor:pointer}.v .vlist .vcard .vhead .vname:hover{color:#d7191a}.v .vlist .vcard .vhead .vsys{display:inline-block;padding:.2rem .5rem;background:#ededed;color:#b3b1b1;font-size:.75rem;border-radius:.2rem;margin-right:.3rem}@media screen and (max-width:520px){.v .vlist .vcard .vhead .vsys{display:none}}.v .vlist .vcard section{overflow:hidden;padding-bottom:1.5rem;border-bottom:1px dashed #f5f5f5}.v .vlist .vcard section .vfooter{position:relative}.v .vlist .vcard section .vfooter .vtime{color:#b3b3b3;font-size:.75rem;margin-right:.875rem}.v .vlist .vcard section .vfooter .vat{font-size:.8125rem;color:#ef2f11;cursor:pointer}.v .vlist .vcard .vcontent{word-wrap:break-word;word-break:break-all;text-align:justify;color:#4a4a4a;font-size:.875rem;line-height:2;position:relative;margin-bottom:.75rem}.v .vlist .vcard .vcontent img{max-width:100%}.v .vlist .vcard .vcontent a{font-size:.875rem;color:#708090;-webkit-text-decoration:double;text-decoration:double}.v .vlist .vcard .vcontent a:hover{color:#d7191a}.v .vlist .vcard .vcontent .code,.v .vlist .vcard .vcontent code,.v .vlist .vcard .vcontent pre{overflow:auto;padding:2px 6px;word-wrap:break-word;color:#555;background:#f5f2f2;border-radius:3px;font-size:.875rem;margin:5px 0}.v .vlist .vcard .vcontent.expand{cursor:pointer;max-height:11.25rem;overflow:hidden}.v .vlist .vcard .vcontent.expand:before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15rem;pointer-events:none;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,100%,.9)));background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9))}.v .vlist .vcard .vcontent.expand:after{display:block;content:"Click on expand";text-align:center;color:#828586;position:absolute;width:100%;height:3.15rem;line-height:3.15rem;left:0;bottom:0;pointer-events:none;background:hsla(0,0%,100%,.9)}.v .vpage{padding:1rem 0}.v .vpage i{display:inline-block;padding:.05rem .65rem;font-size:.785rem;border:1px solid #f0f0f0;font-style:normal;cursor:pointer}.v .vpage i+i{margin-left:.35rem}.v .vpage i.active{border:none;color:#ccc;cursor:default}.v .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v .vloading{text-align:center;padding-top:.875rem}.v .loading{display:inline-block;border-radius:50%;width:2rem;height:2rem;border:.25rem solid #a0a0a0;border-top-color:#dcdcdc;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear}.v .loading--double{border-style:double;border-width:.5rem}', ""])
    },
    function(e, t) {
        function n(e, t) {
            var n = e[1] || "",
            i = e[3];
            if (!i) return n;
            if (t && "function" == typeof btoa) {
                var o = r(i);
                return [n].concat(i.sources.map(function(e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                })).concat([o]).join("\n")
            }
            return [n].join("\n")
        }
        function r(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
        }
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var r = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + r + "}": r
                }).join("")
            },
            t.i = function(e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {},
                i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var a = e[i];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n: n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            },
            t
        }
    },
    function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                i = h[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++) i.parts.push(u(r.parts[o], t))
                } else {
                    for (var a = [], o = 0; o < r.parts.length; o++) a.push(u(r.parts[o], t));
                    h[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function i(e, t) {
            for (var n = [], r = {},
            i = 0; i < e.length; i++) {
                var o = e[i],
                a = t.base ? o[0] + t.base: o[0],
                s = o[1],
                l = o[2],
                c = o[3],
                u = {
                    css: s,
                    media: l,
                    sourceMap: c
                };
                r[a] ? r[a].parts.push(u) : n.push(r[a] = {
                    id: a,
                    parts: [u]
                })
            }
            return n
        }
        function o(e, t) {
            var n = v(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = x[x.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
            x.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }
        function a(e) {
            if (null === e.parentNode) return ! 1;
            e.parentNode.removeChild(e);
            var t = x.indexOf(e);
            t >= 0 && x.splice(t, 1)
        }
        function s(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css",
            c(t, e.attrs),
            o(e, t),
            t
        }
        function l(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css",
            e.attrs.rel = "stylesheet",
            c(t, e.attrs),
            o(e, t),
            t
        }
        function c(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n])
            })
        }
        function u(e, t) {
            var n, r, i, o;
            if (t.transform && e.css) {
                if (! (o = t.transform(e.css))) return function() {};
                e.css = o
            }
            if (t.singleton) {
                var c = b++;
                n = m || (m = s(t)),
                r = d.bind(null, n, c, !1),
                i = d.bind(null, n, c, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), r = f.bind(null, n, t), i = function() {
                a(n),
                n.href && URL.revokeObjectURL(n.href)
            }) : (n = s(t), r = p.bind(null, n), i = function() {
                a(n)
            });
            return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else i()
            }
        }
        function d(e, t, n, r) {
            var i = n ? "": r.css;
            if (e.styleSheet) e.styleSheet.cssText = k(t, i);
            else {
                var o = document.createTextNode(i),
                a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }
        function p(e, t) {
            var n = t.css,
            r = t.media;
            if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        function f(e, t, n) {
            var r = n.css,
            i = n.sourceMap,
            o = void 0 === t.convertToAbsoluteUrls && i; (t.convertToAbsoluteUrls || o) && (r = y(r)),
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r], {
                type: "text/css"
            }),
            s = e.href;
            e.href = URL.createObjectURL(a),
            s && URL.revokeObjectURL(s)
        }
        var h = {},
        g = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)),
                t
            }
        } (function() {
            return window && document && document.all && !window.atob
        }),
        v = function(e) {
            var t = {};
            return function(n) {
                return void 0 === t[n] && (t[n] = e.call(this, n)),
                t[n]
            }
        } (function(e) {
            return document.querySelector(e)
        }),
        m = null,
        b = 0,
        x = [],
        y = n(20);
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {},
            t.attrs = "object" == typeof t.attrs ? t.attrs: {},
            t.singleton || (t.singleton = g()),
            t.insertInto || (t.insertInto = "head"),
            t.insertAt || (t.insertAt = "bottom");
            var n = i(e, t);
            return r(n, t),
            function(e) {
                for (var o = [], a = 0; a < n.length; a++) {
                    var s = n[a],
                    l = h[s.id];
                    l.refs--,
                    o.push(l)
                }
                if (e) {
                    r(i(e, t), t)
                }
                for (var a = 0; a < o.length; a++) {
                    var l = o[a];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete h[l.id]
                    }
                }
            }
        };
        var k = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n,
                e.filter(Boolean).join("\n")
            }
        } ()
    },
    function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
            function(e, t) {
                var i = t.trim().replace(/^"(.*)"$/,
                function(e, t) {
                    return t
                }).replace(/^'(.*)'$/,
                function(e, t) {
                    return t
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
                var o;
                return o = 0 === i.indexOf("//") ? i: 0 === i.indexOf("/") ? n + i: r + i.replace(/^\.\//, ""),
                "url(" + JSON.stringify(o) + ")"
            })
        }
    },
    function(e, t, n) {
        n(16),
        e.exports = n(6)
    }])
});