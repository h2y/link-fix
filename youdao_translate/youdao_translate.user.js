// ==UserScript==
// @name                有道一键网页翻译
// @name:zh-TW          有道一鍵網頁翻譯
// @description         [在网页中右键选择使用本工具] 这是最好用的网页翻译工具。该翻译工具不会直接全文翻译网页，而是保留全英文，同时将网页中的难词添加上注释，这样在完成翻译的同时，有效避免了全文翻译成中文后词不达意的情况。（该工具同时也支持划词翻译、全文翻译）
// @description:zh-TW   [在網頁中右鍵選擇使用本工具] 這是最好用的網頁翻譯工具。該翻譯工具不會直接全文翻譯網頁，而是保留全英文，同時將網頁中的難詞添加上註釋，這樣在完成翻譯的同時，有效避免了全文翻譯成中文後詞不達意的情況。（該工具同時也支持劃詞翻譯、全文翻譯）

// @author              Moshel
// @namespace           https://hzy.pw
// @homepageURL         https://hzy.pw/
// @supportURL          https://github.com/h2y/link-fix
// @icon                http://shared.ydstatic.com/images/favicon.ico
// @license             GPL-3.0
// @updateURL           https://github.com/h2y/link-fix/raw/master/youdao_translate/youdao_translate.user.js

// @include             *
// @grant               none
// @run-at              context-menu

// @date                08/20/2018
// @modified            12/13/2018
// @version             2.1.0.1
// ==/UserScript==


(function() {
    var o = [];
    var w = "fanyi.youdao.com",
        p = "/web2/";
    if (window.location.host === w && window.location.pathname === p) {
        var t = new Image();
        t.src = "https://fanyi.youdao.com/web2/rl.do?action=w_try&ts=" + (new Date()).getTime();
        o[0] = t;
        alert("请在浏览英文网页时使用有道网页翻译2.0");
        return
    }
    var q = "https://fanyi.youdao.com/web2";
    var t = new Image();
    t.src = "https://fanyi.youdao.com/web2/rl.do?action=init&relatedURL=" + encodeURIComponent(document.location.href) + "&ts=" + (new Date()).getTime();
    o[0] = t;
    if (!window.OUTFOX_JavascriptTranslatoR) {
        allPackedUtf8();
    } else {
        var n = "https://fanyi.youdao.com";
        var x = "/web2/conn.html";
        var m = q + "/index.do";
        var r = n + "/jtr";
        var v = q + "/rl.do";
        var s = q + "/styles/all-packed.css";
        J.loadCSS(document, s);
        window.OUTFOX_JavascriptTranslatoR = new J.TR.UI(document.body, {
            domain: n,
            update: false,
            updateTipMsg: "增加关闭按钮",
            updateDate: "2011-3-15",
            cssURL: s,
            tipsURL: m,
            transURL: r,
            logURL: v,
            connFilePath: x,
            reqSize: 20
        })
    }
    

    function allPackedUtf8() {
        if (this.JSON && this.JSON.stringify.toString().indexOf("[native code]") !== -1) {
            this.JSONDAO = this.JSON
        } else {
            this.JSONDAO = {}
        } (function() {
            function f(n) {
                return n < 10 ? "0" + n: n
            }
            if (typeof Date.prototype.toJSON !== "function") {
                Date.prototype.toJSON = function(key) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
                };
                String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
                    return this.valueOf()
                }
            }
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                rep;
            function quote(string) {
                escapable.lastIndex = 0;
                return escapable.test(string) ? '"' + string.replace(escapable,
                    function(a) {
                        var c = meta[a];
                        return typeof c === "string" ? c: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                    }) + '"': '"' + string + '"'
            }
            function str(key, holder) {
                var i, k, v, length, mind = gap,
                    partial, value = holder[key];
                if (value && typeof value === "object" && typeof value.toJSON === "function") {
                    value = value.toJSON(key)
                }
                if (typeof rep === "function") {
                    value = rep.call(holder, key, value)
                }
                switch (typeof value) {
                    case "string":
                        return quote(value);
                    case "number":
                        return isFinite(value) ? String(value) : "null";
                    case "boolean":
                    case "null":
                        return String(value);
                    case "object":
                        if (!value) {
                            return "null"
                        }
                        gap += indent;
                        partial = [];
                        if (Object.prototype.toString.apply(value) === "[object Array]") {
                            length = value.length;
                            for (i = 0; i < length; i += 1) {
                                partial[i] = str(i, value) || "null"
                            }
                            v = partial.length === 0 ? "[]": gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]": "[" + partial.join(",") + "]";
                            gap = mind;
                            return v
                        }
                        if (rep && typeof rep === "object") {
                            length = rep.length;
                            for (i = 0; i < length; i += 1) {
                                k = rep[i];
                                if (typeof k === "string") {
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + (gap ? ": ": ":") + v)
                                    }
                                }
                            }
                        } else {
                            for (k in value) {
                                if (Object.hasOwnProperty.call(value, k)) {
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + (gap ? ": ": ":") + v)
                                    }
                                }
                            }
                        }
                        v = partial.length === 0 ? "{}": gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}": "{" + partial.join(",") + "}";
                        gap = mind;
                        return v
                }
            }
            if (typeof JSONDAO.stringify !== "function") {
                JSONDAO.stringify = function(value, replacer, space) {
                    var i;
                    gap = "";
                    indent = "";
                    if (typeof space === "number") {
                        for (i = 0; i < space; i += 1) {
                            indent += " "
                        }
                    } else {
                        if (typeof space === "string") {
                            indent = space
                        }
                    }
                    rep = replacer;
                    if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                        throw new Error("JSONDAO.stringify")
                    }
                    return str("", {
                        "": value
                    })
                }
            }
            if (typeof JSONDAO.parse !== "function") {
                JSONDAO.parse = function(text, reviver) {
                    var j;
                    function walk(holder, key) {
                        var k, v, value = holder[key];
                        if (value && typeof value === "object") {
                            for (k in value) {
                                if (Object.hasOwnProperty.call(value, k)) {
                                    v = walk(value, k);
                                    if (v !== undefined) {
                                        value[k] = v
                                    } else {
                                        delete value[k]
                                    }
                                }
                            }
                        }
                        return reviver.call(holder, key, value)
                    }
                    text = String(text);
                    cx.lastIndex = 0;
                    if (cx.test(text)) {
                        text = text.replace(cx,
                            function(a) {
                                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                            })
                    }
                    if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                        j = eval("(" + text + ")");
                        return typeof reviver === "function" ? walk({
                                "": j
                            },
                            "") : j
                    }
                    throw new SyntaxError("JSONDAO.parse")
                }
            }
        } ()); (function() {
            var d = {
                browser: function() {
                    var a = {};
                    var f = navigator.userAgent.toLowerCase();
                    var b; (b = f.match(/msie ([\d.]+)/)) ? a.msie = b[1] : (b = f.match(/firefox\/([\d.]+)/)) ? a.firefox = b[1] : (b = f.match(/chrome\/([\d.]+)/)) ? a.chrome = b[1] : (b = f.match(/opera.([\d.]+)/)) ? a.opera = b[1] : (b = f.match(/version\/([\d.]+).*safari/)) ? a.safari = b[1] : 0;
                    return a
                } (),
                isDOM: function(a) {
                    return Boolean(a && a.nodeType === 1)
                },
                isArray: function(a) {
                    return Object.prototype.toString.call(a) === "[object Array]"
                },
                isFunction: function(a) {
                    return Object.prototype.toString.call(a) === "[object Function]"
                },
                each: function(j, a, b) {
                    if (j === undefined || j === null) {
                        return
                    }
                    if (j.length === undefined || d.isFunction(j)) {
                        for (var k in j) {
                            if (j.hasOwnProperty(k)) {
                                if (a.call(b || j[k], k, j[k]) === false) {
                                    break
                                }
                            }
                        }
                    } else {
                        for (var h = 0; h < j.length; h++) {
                            if (a.call(b || j[h], h, j[h]) === false) {
                                break
                            }
                        }
                    }
                    return j
                },
                indexOf: function c(b, a) {
                    if (b.indexOf) {
                        return b.indexOf(a)
                    } else {
                        var f = -1;
                        d.each(b,
                            function(e) {
                                if (this === a) {
                                    f = e;
                                    return false
                                }
                            });
                        return f
                    }
                },
                bind: function(b, f, a) {
                    if (!a) {
                        return
                    }
                    if (b.addEventListener) {
                        b.addEventListener(f, a, false)
                    } else {
                        if (b.attachEvent) {
                            b.attachEvent("on" + f, a)
                        } else {
                            b["on" + f] = a
                        }
                    }
                    return this
                },
                unbind: function(b, f, a) {
                    if (!a) {
                        return
                    }
                    if (b.removeEventListener) {
                        b.removeEventListener(f, a, false)
                    } else {
                        if (b.detachEvent) {
                            b.detachEvent("on" + f, a)
                        } else {
                            b["on" + f] = function() {}
                        }
                    }
                    return this
                },
                param: function(b) {
                    if (typeof b === "string") {
                        return b
                    }
                    var a = [];
                    d.each(b,
                        function(h, g) {
                            if (g) {
                                g = encodeURIComponent(g);
                                if (d.browser.firefox) {
                                    g = encodeURIComponent(unescape(g))
                                }
                                a.push(encodeURIComponent(h) + "=" + g)
                            }
                        });
                    return a.join("&")
                },
                makeArray: function(a) {
                    return Array.prototype.slice.call(a, 0)
                },
                getDocumentCharset: function() {
                    d.log("document.characterSet || document.charset:::" + document.characterSet || document.charset);
                    return document.characterSet || document.charset
                },
                log: function() {
                    if ( !! window.console && !!window.console.log) {
                        var b = d.makeArray(arguments);
                        b.unshift("[J]");
                        try {
                            window.console.log.apply(window.console, b)
                        } catch(a) {
                            if (arguments.length === 3) {
                                window.console.log(arguments[0], arguments[1], arguments[2])
                            } else {
                                if (arguments.length === 2) {
                                    window.console.log(arguments[0], arguments[1])
                                } else {
                                    window.console.log(arguments[0])
                                }
                            }
                        }
                    }
                },
                css: function() {
                    var a = function(k, n) {
                        var e = "";
                        if (n == "float") {
                            document.defaultView ? n = "float": n = "styleFloat"
                        }
                        if (k.style[n]) {
                            e = k.style[n]
                        } else {
                            if (k.currentStyle) {
                                e = k.currentStyle[n]
                            } else {
                                if (document.defaultView && document.defaultView.getComputedStyle) {
                                    n = n.replace(/([A-Z])/g, "-$1").toLowerCase();
                                    var m = document.defaultView.getComputedStyle(k, "");
                                    e = m && m.getPropertyValue(n)
                                } else {
                                    e = null
                                }
                            }
                        }
                        if ((e == "auto" || e.indexOf("%") !== -1) && ("width" === n.toLowerCase() || "height" === n.toLowerCase()) && k.style.display != "none" && e.indexOf("%") !== -1) {
                            e = k["offset" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()] + "px"
                        }
                        if (n == "opacity") {
                            try {
                                e = k.filters["DXImageTransform.Microsoft.Alpha"].opacity;
                                e = e / 100
                            } catch(b) {
                                try {
                                    e = k.filters("alpha").opacity
                                } catch(l) {}
                            }
                        }
                        return e
                    };
                    return function(b, f) {
                        if (typeof f === "string") {
                            return a(b, f)
                        } else {
                            d.each(f,
                                function(h, e) {
                                    b.style[h] = e
                                })
                        }
                    }
                } (),
                getPageSize: function() {
                    var b, m;
                    if (window.innerHeight && window.scrollMaxY) {
                        b = document.body.scrollWidth;
                        m = window.innerHeight + window.scrollMaxY
                    } else {
                        b = Math.max(document.body.scrollWidth, document.body.offsetWidth);
                        m = Math.max(document.body.scrollHeight, document.body.offsetHeight)
                    }
                    var k, a;
                    k = document.documentElement.clientWidth || document.body.clientWidth;
                    a = document.documentElement.clientHeight || document.body.clientHeight;
                    var j = Math.max(m, a);
                    var l = Math.max(b, k);
                    return {
                        page: {
                            width: l,
                            height: j
                        },
                        window: {
                            width: k,
                            height: a
                        }
                    }
                },
                findPos: function(b) {
                    var a = {
                        x: 0,
                        y: 0
                    };
                    if ( !! document.documentElement.getBoundingClientRect()) {
                        a.x = b.getBoundingClientRect().left + d.scroll().left;
                        a.y = b.getBoundingClientRect().top + d.scroll().top
                    } else {
                        while (b) {
                            a.x += b.offsetLeft;
                            a.y += b.offsetTop;
                            b = b.offsetParent
                        }
                    }
                    return a
                },
                textPos: function(n, k) {
                    var b = n || window.event;
                    var l = {};
                    var a = {};
                    var o = k.h;
                    var m = k.v || "bottom";
                    if (window.getSelection) {
                        l = window.getSelection().getRangeAt(0)
                    } else {
                        if (document.selection) {
                            l = document.selection.createRange()
                        }
                    }
                    if ( !! o) {
                        a.x = p[o] + d.scroll().left
                    } else {
                        if (b.pageX || b.pageY) {
                            a.x = b.pageX
                        } else {
                            if (b.clientX || b.clientY) {
                                a.x = b.clientX + d.scroll().left
                            }
                        }
                    }
                    if ( !! l.getBoundingClientRect) {
                        var p = l.getBoundingClientRect();
                        a.y = p[m] + d.scroll().top
                    } else {
                        if (b.pageX || b.pageY) {
                            a.y = b.pageY
                        } else {
                            if (b.clientX || b.clientY) {
                                a.y = b.clientY + d.scroll().top
                            }
                        }
                    }
                    return a
                },
                scroll: function() {
                    return {
                        left: document.documentElement.scrollLeft + document.body.scrollLeft,
                        top: document.documentElement.scrollTop + document.body.scrollTop
                    }
                },
                walkTheDOM: function(a, b, f) {
                    if (f && !f(a)) {
                        return
                    }
                    b(a);
                    if (a.tagName === "NOSCRIPT") {
                        return
                    } else {
                        if (a.tagName === "IFRAME" || a.tagName === "FRAME") {
                            return
                        } else {
                            a = a.firstChild
                        }
                    }
                    while (a) {
                        arguments.callee(a, b, f);
                        a = a.nextSibling
                    }
                },
                getTextNodes: function(a, f) {
                    var b = [];
                    d.walkTheDOM(a,
                        function(e) {
                            if (e.nodeType === 3 && d.trim(e.nodeValue)) {
                                b.push(e)
                            }
                        },
                        f);
                    return b
                },
                getElementsByClassName: function(a, b) {
                    if (a.getElementsByClassName) {
                        return a.getElementsByClassName(b)
                    } else {
                        var f = [];
                        d.walkTheDOM(a,
                            function(e) {
                                if (d.hasClass(e, b)) {
                                    f.push(e)
                                }
                            });
                        return f
                    }
                },
                query: function(l, k) {
                    var m = new RegExp("(?:(?:\\.([^()]+))?)(?:(?:#([^()]+))?)");
                    var n = m.exec(l);
                    var a = k || document;
                    if (!n) {
                        return null
                    } else {
                        if ( !! n[1]) {
                            var b = n[1];
                            if (a.getElementsByClassName) {
                                return a.getElementsByClassName(b)
                            } else {
                                var j = [];
                                d.walkTheDOM(a,
                                    function(e) {
                                        if (d.hasClass(e, b)) {
                                            j.push(e)
                                        }
                                    });
                                return j
                            }
                        }
                        if ( !! n[2]) {
                            return a.getElementById(n[2])
                        }
                    }
                },
                trim: function(a) {
                    return a.replace(/^\s*/, "").replace(/\s*$/, "")
                },
                formatTemplate: function(b, a) {
                    var j = document.createElement("div");
                    for (var h in a) {
                        if (a.hasOwnProperty(h)) {
                            b = b.replace(new RegExp("{" + h + "}", "g"), a[h])
                        }
                    }
                    j.innerHTML = b;
                    var k = j.firstChild;
                    j.removeChild(k);
                    return k
                },
                hasClass: function(a, b) {
                    if (d.isDOM(a)) {
                        if (a.className === b) {
                            return true
                        }
                        var h = a.className.split(" "),
                            j = 0,
                            k = h.length;
                        for (; j < k; j++) {
                            if (b === h[j]) {
                                return true
                            }
                        }
                    }
                    return false
                },
                loadCSS: function(a, b) {
                    var f = function(e) {
                        if (a && a.createElement) {
                            var k = Date.parse(new Date()),
                                m = a.createElement("link");
                            var n = e.indexOf("?") === -1 ? e + "?572877": e + "&572877";
                            m.setAttribute("rel", "stylesheet");
                            m.setAttribute("href", n);
                            m.setAttribute("type", "text/css");
                            var l = a.getElementsByTagName("head")[0] || a.body;
                            l.appendChild(m)
                        }
                    };
                    if (d.isArray(b)) {
                        d.each(b,
                            function(h, e) {
                                f(e)
                            })
                    } else {
                        if (typeof b === "string") {
                            f(b)
                        }
                    }
                },
                addClass: function(a, b) {
                    if (d.isDOM(a)) {
                        var h = a.className.split(" "),
                            j = 0,
                            k = h.length;
                        for (; j < k; j++) {
                            if (b === h[j]) {
                                return
                            }
                        }
                        h[j] = b;
                        a.className = h.join(" ")
                    }
                },
                removeClass: function(b, j) {
                    if (d.isDOM(b)) {
                        var k = b.className.split(" "),
                            l = 0,
                            m = k.length,
                            a = [];
                        for (; l < m; l++) {
                            if (j !== k[l]) {
                                a.push(k[l])
                            }
                        }
                        b.className = a.join(" ")
                    }
                },
                toggleClass: function(k, l) {
                    if (d.isDOM(k)) {
                        var m = k.className.split(" "),
                            n = 0,
                            o = m.length,
                            a = [],
                            b = "add";
                        for (; n < o; n++) {
                            if (l === m[n]) {
                                b = "remove"
                            } else {
                                a.push(m[n])
                            }
                        }
                        if (b === "add") {
                            m[n] = l
                        } else {
                            m = a
                        }
                        k.className = m.join(" ")
                    }
                },
                guid: function() {
                    var a = function() {
                        return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
                    };
                    return function() {
                        return (a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a())
                    }
                } (),
                protoExtend: function(a, f) {
                    var b = d.isFunction(f) ? f: function() {};
                    b.prototype = a;
                    return new b()
                },
                stopPropagation: function(a) {
                    var b = a || window.event;
                    if (b.stopPropagation) {
                        b.stopPropagation()
                    }
                    b.cancelBubble = true;
                    return b
                },
                storage: function(g, a) {
                    var b = function(f, e) {
                        var j = window.localStorage;
                        if (e === undefined) {
                            return j.getItem(f)
                        }
                        if (f !== undefined && e !== undefined) {
                            j.setItem(f, e);
                            return e
                        }
                    };
                    var h = function(f, e) {
                        var j = document.documentElement;
                        j.addBehavior("#default#userData");
                        if (e === undefined) {
                            j.load("fanyiweb2");
                            return j.getAttribute(f)
                        }
                        if (f !== undefined && e !== undefined) {
                            j.setAttribute(f, e);
                            j.save("fanyiweb2");
                            return e
                        }
                    };
                    if ( !! window.localStorage) {
                        return b(g, a)
                    }
                    if ( !! document.documentElement.addBehavior) {
                        return h(g, a)
                    }
                },
                cookie: function(h, a) {
                    function g(l, f) {
                        var k = 30;
                        var e = new Date();
                        e.setTime(e.getTime() + k * 24 * 60 * 60 * 1000);
                        document.cookie = l + "=" + f + ";expire*=" + e.toGMTString()
                    }
                    function b(e) {
                        var f = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
                        if (f != null) {
                            return decodeURIComponent(f[2])
                        }
                        return null
                    }
                    if ( !! a) {
                        g(h, a)
                    } else {
                        return b(h)
                    }
                },
                parseData: function() {
                    var a = {
                        json: function(e) {
                            try {
                                return e = JSONDAO.parse(e)
                            } catch(b) {
                                d.log("[Error]", "Invalid JSON data:", e)
                            }
                        },
                        xml: function(b) {
                            if (window.DOMParser) {
                                return (new DOMParser()).parseFromString(b, "text/xml")
                            } else {
                                var f = new ActiveXObject("Microsoft.XMLDOM");
                                f.async = "false";
                                f.loadXML(b);
                                return f
                            }
                        }
                    };
                    return function(f, b) {
                        if (f === undefined) {
                            return b
                        }
                        if (d.isFunction(f)) {
                            return f(b)
                        }
                        if ( !! f && !a[f]) {
                            d.log("[Error]", "Function parseData() dosen't support this type:", f);
                            return b
                        }
                        return a[f](b)
                    }
                } (),
                once: function(a) {
                    return function() {
                        if (d.isFunction(a)) {
                            a.apply(this, arguments)
                        }
                        a = function() {}
                    }
                }
            };
            window.J = d
        })(); (function(d) {
            var c = function(a, b, f) {
                return new c.prototype.init(a, b, f)
            };
            c.prototype = {
                init: function(m, j, b) {
                    var l = this;
                    var k = [];
                    var a = function(e) {
                        l.ajax = e;
                        while (k.length > 0) {
                            e(k.pop())
                        }
                    };
                    if ( !! window.postMessage) {
                        this.createMessageChannel(m, j, b, a)
                    } else {
                        this.createJTRAssist(m, a)
                    }
                    this.ajax = function(e) {
                        k.push(e);
                        return this
                    };
                    return this
                },
                createMessageChannel: function(m, k, b, a) {
                    var l = this;
                    var n = (function() {
                        if (d.isDOM(d.query("#" + m))) {
                            throw new Error("Existed CDA iFrame element")
                        }
                        if (k && b) {
                            var e = document.createElement("iframe");
                            e.setAttribute("id", m);
                            e.className = ("OUTFOX_JTR_CONN");
                            e.style.display = "none";
                            e.setAttribute("src", k + b);
                            document.body.appendChild(e);
                            return e.contentWindow
                        } else {
                            throw new Error("Empty domain is not allowed")
                        }
                    })();
                    var j = (function() {
                        var f = [];
                        var e = 0;
                        var g = {
                            transferStationReady: function() {
                                a(function(h) {
                                    h.data = d.param(h.data);
                                    h.index = e++;
                                    f[h.index] = {
                                        dataType: h.dataType,
                                        callback: h.callback
                                    };
                                    delete h.callback;
                                    n.postMessage(JSONDAO.stringify(h), k);
                                    return l
                                })
                            },
                            dataBack: function(o) {
                                if ( !! o && !!f[o.index]) {
                                    var h = f[o.index];
                                    if (d.isFunction(h.callback)) {
                                        h.callback(d.parseData(h.dataType, o.response))
                                    }
                                    delete f[o.index]
                                }
                            }
                        };
                        return function(o) {
                            if (o.origin !== k) {
                                return
                            }
                            var h = JSONDAO.parse(o.data);
                            g[h.handler](JSONDAO.parse(o.data))
                        }
                    })();
                    d.bind(window, "message",
                        function(e) {
                            j.call(l, e)
                        })
                },
                createJTRAssist: function(m, p) {
                    var a = this;
                    var q = "https://fanyi.youdao.com/web2/JTRAssist.swf?" + ( + new Date());
                    var b = function() {
                        if ( !! d.query("#" + m)) {
                            return
                        }
                        var e = document.createElement("div");
                        if (d.browser.msie === "6.0" || d.browser.msie === "7.0") {
                            e.innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1" id="' + m + '"><param name="allowScriptAccess" value="always" /><param name="movie" value="' + q + '" /></object>'
                        } else {
                            e.innerHTML = '<object height="1" width="1" id="' + m + '" data="' + q + '"><param name="allowScriptAccess" value="always"></object>'
                        }
                        document.body.appendChild(e)
                    };
                    var r = "outfox_jtr_fproxy_callback_",
                        o = 0;
                    var n = function(e) {
                        var f = r + (o++);
                        window[f] = function(g) {
                            e.callback.call(a, d.parseData(e.dataType, decodeURI(g)))
                        };
                        d.query("#" + m).load(e.url, e.data, e.type || "POST", 'window["' + f + '"]')
                    };
                    var l = function(g) {
                        var f = g.data.key,
                            e = g.data.value;
                        if (e === undefined) {
                            if (d.isFunction(g.callback)) {
                                g.callback(d.parseData(g.dataType, d.query("#" + m).getItem(f)))
                            }
                        } else {
                            d.query("#" + m).setItem(f, e)
                        }
                    };
                    b();
                    window.JTRAssistIsReady = function() {
                        p(function(e) {
                            switch (e.handler) {
                                case "translate":
                                    e.data = d.param(e.data);
                                    n(e);
                                    break;
                                case "localStorage":
                                    l(e);
                                    break;
                                default:
                                    throw new Error("Unsupported request type :" + e.handler)
                            }
                            return a
                        })
                    }
                }
            };
            c.prototype.init.prototype = c.prototype;
            d.CDA = c
        })(J); (function(b) {
            TR = function(n, a, k, o) {
                this._manager = o;
                this._reqSize = a.reqSize;
                this._onStatusChange = a.onStatusChange ||
                    function() {};
                this._url = a.url;
                this.conn = k;
                this._context = n;
                this._request = function(e, d, c) {
                    k.ajax({
                        url: e,
                        handler: "translate",
                        type: "POST",
                        data: d,
                        callback: c,
                        dataType: "json"
                    })
                };
                var j = new b.Page(n);
                var l = [];
                var m = j.getMainArticle();
                if (m) {
                    l = b.getTextNodes(m.elem, TR.isInclude)
                }
                this.mainNodeLength = l.length || null;
                this._nodeIndex = [];
                l = l.concat(b.getTextNodes(n,
                    function(c) {
                        return (c !== (m && m.elem)) && TR.isInclude(c)
                    }));
                b.each(l,
                    function(d, c) {
                        this._nodeIndex.push(this._manager.addNode(c))
                    },
                    this);
                this.workingThread = 0;
                this.guid = a.guid || b.guid()
            };
            TR.prototype = {
                doTrans: function() {
                    var r = ++this.workingThread;
                    var n = {
                        ue: b.getDocumentCharset() || null,
                        data: null,
                        relatedUrl: document.location.href,
                        guid: this.guid,
                        mainLength: this.mainNodeLength,
                        requestId: b.guid()
                    };
                    var l = [];
                    var p = 0;
                    for (var o = 0; o < this._nodeIndex.length; o++) {
                        if (this._manager.transResults[o]) {
                            if (r === this.workingThread) {
                                this._manager.replaceTrans(o)
                            }
                        } else {
                            var q = null;
                            if (l[parseInt(p / this._reqSize, 10)]) {
                                q = l[parseInt(p++/this._reqSize,10)]}else{q=l[parseInt(p++/this._reqSize, 10)] = {}
                            }
                            var m = null;
                            try {
                                m = this._manager.nodes[o].parentNode && this._manager.nodes[o].parentNode.tagName || null
                            } catch(s) {}
                            q[o] = {
                                src: this._manager.originals[o],
                                tag: m
                            }
                        }
                    }
                    if (l.length === 0) {
                        this._onStatusChange({
                            id: r,
                            action: "TRANS",
                            level: "0",
                            status: "finish"
                        });
                        return
                    }
                    var a = this,
                        t = function(c) {
                            a._onStatusChange({
                                id: r,
                                action: "TRANS",
                                level: "0",
                                status: "busy",
                                data: [c, l.length]
                            });
                            n.data = JSONDAO.stringify(l[c]);
                            a._request(a._url.textTrans, n,
                                function(d) {
                                    a._updateTrans(d, r);
                                    if (++c < l.length) {
                                        t(c)
                                    } else {
                                        a._onStatusChange({
                                            id: r,
                                            action: "TRANS",
                                            level: "0",
                                            status: "finish"
                                        })
                                    }
                                })
                        };
                    t(0)
                },
                revertTrans: function() {
                    var d = ++this.workingThread;
                    for (var a = 0; a < this._nodeIndex.length; a++) {
                        if (d === this.workingThread) {
                            this._manager.revertTrans(this._nodeIndex[a])
                        }
                    }
                },
                _updateTrans: function(a, d) {
                    if ( !! !a) {
                        return
                    }
                    if (a.errorCode === 40 && a.errorCode === 30) {
                        b.log("Get Error Code:", a.errorCode);
                        return
                    }
                    b.each(a.data,
                        function(f, c) {
                            this._manager.transResults[f] = c.tst;
                            if (d === this.workingThread) {
                                this._manager.replaceTrans(f)
                            }
                        },
                        this)
                },
                doTips: function(v) {
                    var s = ++this.workingThread;
                    var o = {
                        type: "X",
                        ue: b.getDocumentCharset() || null,
                        data: null,
                        relatedUrl: document.location.href,
                        mainLength: this.mainNodeLength,
                        guid: this.guid
                    };
                    var m = [];
                    var q = 0;
                    for (var p = 0; p < this._nodeIndex.length; p++) {
                        if (this._manager.tipsResults[p]) {
                            if (s === this.workingThread) {
                                this._manager.replaceTips(p, v)
                            }
                        } else {
                            var r = null;
                            if (m[parseInt(q / this._reqSize, 10)]) {
                                r = m[parseInt(q++/this._reqSize,10)]}else{r=m[parseInt(q++/this._reqSize, 10)] = {}
                            }
                            var n = null;
                            try {
                                n = this._manager.nodes[p].parentNode && this._manager.nodes[p].parentNode.tagName || null
                            } catch(t) {}
                            r[p] = {
                                src: this._manager.originals[p],
                                tag: n
                            }
                        }
                    }
                    if (m.length === 0) {
                        this._onStatusChange({
                            id: s,
                            action: "TIPS",
                            level: v,
                            status: "finish"
                        });
                        return
                    }
                    var a = this;
                    var u = function(c) {
                        b.log("Send:", m[c]);
                        a._onStatusChange({
                            id: s,
                            action: "TIPS",
                            level: v,
                            data: [c, m.length],
                            status: "busy"
                        });
                        o.data = JSONDAO.stringify(m[c]);
                        a._request(a._url.tips, o,
                            function(d) {
                                a._updateTips(d, s, v);
                                if (++c < m.length) {
                                    u(c)
                                } else {
                                    a._onStatusChange({
                                        id: s,
                                        action: "TIPS",
                                        level: v,
                                        status: "finish"
                                    })
                                }
                            })
                    };
                    u(0)
                },
                revertTips: function() {
                    var d = ++this.workingThread;
                    for (var a = 0; a < this._nodeIndex.length; a++) {
                        if (d === this.workingThread) {
                            this._manager.revertTips(this._nodeIndex[a])
                        }
                    }
                },
                _updateTips: function(f, g, h) {
                    if ( !! !f) {
                        return
                    }
                    if (f.errorCode === 40 && f.errorCode === 30) {
                        b.log("Get Error Code:", f.errorCode);
                        return
                    }
                    var a = function(c, d) {
                        return c.start > d.start
                    };
                    b.each(f.data,
                        function(d, c) {
                            if (c.length > 0) {
                                this._bubbleSort(c, a);
                                this._manager.tipsResults[d] = c;
                                if (g === this.workingThread) {
                                    this._manager.replaceTips(d, h)
                                }
                            } else {
                                this._manager.tipsResults[d] = []
                            }
                        },
                        this)
                },
                _bubbleSort: function(k, g) {
                    for (var j = k.length - 2; j >= 0; j--) {
                        for (var a = 0; a <= j; a++) {
                            if (g(k[a + 1], k[a])) {
                                var h = k[a];
                                k[a] = k[a + 1];
                                k[a + 1] = h
                            }
                        }
                    }
                    return k
                }
            };
            TR.isInclude = function(a) {
                return ! (a.tagName === "SCRIPT" || a.tagName === "STYLE" || a.tagName === "PRE" || (a.className && a.className.indexOf("OUTFOX_JTR_") !== -1))
            };
            b.TR = TR
        })(J);
        if (!J || !J.bind) {
            throw new Error("swipe extension need J.bind support")
        } (function(l) {
            var m = "https://fanyi.youdao.com",
                n = m + "/fsearch",
                r = m + "/translate";
            var k = function(a) {
                return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="15px" height="15px" align="absmiddle" id="speach_flash"><param name="allowScriptAccess" value="sameDomain" /><param name="movie" value="https://cidian.youdao.com/chromeplus/voice.swf" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="high" /><param name="wmode"  value="transparent"><param name="FlashVars" value="audio=' + a + '"><embed wmode="transparent" play="false" src="https://cidian.youdao.com/chromeplus/voice.swf" loop="false" menu="false" quality="high" bgcolor="#ffffff" width="15" height="15" align="absmiddle" allowScriptAccess="sameDomain" FlashVars="audio=' + a + '" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" /></object>'
            };
            var q = function(a) {
                return a.split && a.split(" ").length || 0
            };
            var o = {
                isJapanese: function(a) {
                    return ! Boolean(/[^\u0800-\u4e00]/.test(a))
                },
                isContainJapanese: function(c) {
                    var a = 0;
                    for (var b = 0; b < c.length; b++) {
                        if (this.isJapanese(c.charAt(b))) {
                            a++
                        }
                    }
                    return a > 2
                },
                isKoera: function(a) {
                    for (i = 0; i < a.length; i++) {
                        if (((a.charCodeAt(i) > 12592 && a.charCodeAt(i) < 12687) || (a.charCodeAt(i) >= 44032 && a.charCodeAt(i) <= 55203))) {
                            return true
                        }
                    }
                    return false
                },
                isContainKoera: function(c) {
                    var a = 0;
                    for (var b = 0; b < c.length; b++) {
                        if (this.isKoera(c.charAt(b))) {
                            a++
                        }
                    }
                    return a > 0
                },
                isChinese: function(a) {
                    return ! Boolean(/[^\u4e00-\u9fa5]/.test(a))
                },
                isContainChinese: function(c) {
                    var a = 0;
                    for (var b = 0; b < c.length; b++) {
                        if (this.isChinese(c.charAt(b))) {
                            a++
                        }
                    }
                    return a > 5
                }
            };
            var s = function(b, a) {
                return new s.fn.init(b, a)
            };
            s.fn = s.prototype = {
                init: function(b, a) {
                    var c = this;
                    this.wrapper = s.createFrameWrapper();
                    this.conn = s.initConnection(a);
                    this.context = b;
                    l.bind(document.body, "click",
                        function(d) {
                            var e = d || window.event;
                            c.wrapper.style.display = "none";
                            c.wrapper.style.position = "absolute";
                            c.wrapper.innerHTML = ""
                        })
                },
                enableSwipe: function() {
                    if (!this._swipeListener) {
                        var a = this;
                        this._swipeListener = function(b) {
                            a._onSwipe.call(a, b)
                        };
                        l.bind(this.context, "mouseup", this._swipeListener)
                    }
                },
                disableSwipe: function() {
                    if (this._swipeListener) {
                        l.unbind(this.context, "mouseup", this._swipeListener);
                        delete this._swipeListener
                    }
                },
                _onSwipe: function(b) {
                    var c = "",
                        e = "";
                    var a = {};
                    if (window.getSelection) {
                        c = window.getSelection()
                    } else {
                        if (document.selection) {
                            c = document.selection.createRange()
                        }
                    }
                    if (c.toString) {
                        e = c.toString()
                    } else {
                        if (c.text) {
                            e = c.text.toString()
                        }
                    }
                    var d = l.textPos(b, {});
                    e = l.trim(e);
                    if (!s.validateSwipeWord(e)) {
                        return
                    }
                    this.swipeWord(e, d.x, d.y);
                    if (this.onSwipeCallback) {
                        this.onSwipeCallback(e)
                    }
                },
                swipeWord: function(e, c, d, f, g) {
                    var b = this;
                    var a = null;
                    this.wrapper.innerHTML = "";
                    if ((!o.isContainChinese(e) && q(e) >= 3) || (o.isContainChinese(e) || o.isContainJapanese(e) && e.length > 4)) {
                        a = "translate"
                    } else {
                        a = "dict"
                    }
                    this.conn.request({
                            action: a,
                            word: e
                        },
                        function(h) {
                            b.wrapper.innerHTML = "";
                            b._onResponse.call(b, h);
                            s.initWrapper(b.wrapper, c, d, f, g)
                        })
                },
                _onResponse: function(b) {
                    var a = b.firstChild,
                        c = null;
                    if (!a) {
                        return
                    } else {
                        if (a.baseName && a.baseName == "xml") {
                            a = a.nextSibling
                        }
                    }
                    switch (a.tagName) {
                        case "response":
                            c = s.processXmlTransData(b);
                            break;
                        case "yodaodict":
                            c = s.processXmlDictData(b);
                            break;
                        default:
                            throw new Error("Incorrect xml data")
                    }
                    if (c) {
                        this.wrapper.appendChild(c);
                        this.wrapper.style.display = "block"
                    }
                }
            };
            s.createFrameWrapper = function() {
                var a = document.createElement("div");
                a.id = "yddWrapper";
                l.bind(a, "click",
                    function(b) {
                        l.stopPropagation(b)
                    });
                l.bind(a, "mouseup",
                    function(b) {
                        l.stopPropagation(b)
                    });
                document.body.appendChild(a);
                return a
            };
            s.validateSwipeWord = function(a) {
                return ! (a === "" || a.length > 2000)
            };
            s.initConnection = function(c) {
                var e = null;
                var a = function(g) {
                    var h = null,
                        f = null;
                    if (g.action == "dict") {
                        f = {
                            client: "JTRHelper",
                            keyfrom: "JTRHelper.bookmark",
                            q: g.word,
                            pos: -1,
                            doctype: "xml",
                            xmlVersion: "3.2",
                            dogVersion: "1.0",
                            vendor: "jtr",
                            le: "eng"
                        };
                        h = n
                    } else {
                        f = {
                            client: "JTRHelper",
                            keyfrom: "JTRHelper.bookmark",
                            i: g.word,
                            doctype: "xml",
                            xmlVersion: "1.1",
                            dogVersion: "1.0"
                        };
                        h = r
                    }
                    return [h, f]
                };
                if (window.chrome && window.chrome.extension && window.chrome.extension.sendRequest) {
                    e = {
                        request: function(g, f) {
                            window.chrome.extension.sendRequest(g,
                                function(h) {
                                    if (h) {
                                        f((new DOMParser()).parseFromString(h, "text/xml"))
                                    }
                                })
                        }
                    };
                    return e
                } else {
                    if (c) {
                        e = {
                            request: function(g, f) {
                                var h = a(g);
                                c.ajax({
                                    url: h[0],
                                    handler: "translate",
                                    data: h[1],
                                    callback: f,
                                    dataType: "xml",
                                    type: "POST"
                                })
                            }
                        };
                        return e
                    } else {
                        if (l.CDA) {
                            var b = null;
                            try {
                                b = l.CDA("_OUTFOX_JTR_SWIPE_CONN", m, CONN_FILE_PATH)
                            } catch(d) {
                                throw new Error("Unable to get cross-domain ajax file.")
                            }
                            e = {
                                request: function(g, f) {
                                    var h = a(g);
                                    b.ajax({
                                        url: h[0],
                                        handler: "translate",
                                        data: h[1],
                                        callback: f,
                                        dataType: "xml",
                                        type: "POST"
                                    })
                                }
                            };
                            return e
                        } else {
                            throw new Error("Unable to initialize cross-domain connection port.")
                        }
                    }
                }
            };
            s.initWrapper = function(K, g, h, H, j) {
                var M = 0,
                    c = 0,
                    G = 50,
                    O = l.scroll().top,
                    a = l.scroll().left,
                    e = K.clientHeight,
                    x = K.clientWidth,
                    b = l.getPageSize().window.height,
                    d = l.getPageSize().window.width;
                H = H || 0;
                j = j || 0;
                if (h - e >= O + G) {
                    c = h - e
                } else {
                    c = h + j
                }
                if (g + x <= d + a) {
                    M = g + H
                } else {
                    M = d + a - x
                }
                var y = !!(l.css(document.body, "position") !== "static");
                var I = l.css(document.body, "marginLeft");
                var L = l.css(document.body, "marginRight");
                if (I === "auto" && L === "auto") {
                    var f = l.getPageSize().page.width;
                    var P = parseInt(l.css(document.body, "width"));
                    if (f > P) {
                        I = (f - P) / 2
                    } else {
                        I = 0
                    }
                }
                I = y ? parseInt(I) : 0;
                var N = y ? parseInt(l.css(document.body, "marginTop")) : 0;
                l.css(K, {
                    position: "absolute",
                    left: (M - I) + "px",
                    top: (c - N) + "px"
                })
            };
            s.processXmlTransData = function(d) {
                var b = (d.getElementsByTagName("input")[0].childNodes[1] || d.getElementsByTagName("input")[0].childNodes[0]).nodeValue,
                    e = (d.getElementsByTagName("translation")[0].childNodes[1] || d.getElementsByTagName("translation")[0].childNodes[0]).nodeValue,
                    f = d.getElementsByTagName("response")[0].getAttribute("errorCode") - 0,
                    h = l.trim(e),
                    a = l.trim(b);
                if ((o.isContainChinese(a) || o.isContainJapanese(a) || o.isContainKoera(a)) && a.length > 15) {
                    a = a.substring(0, 8) + " ..."
                } else {
                    if (a.length > 25) {
                        a = a.substring(0, 15) + " ..."
                    }
                }
                if (a == h) {
                    return null
                }
                var g = "https://fanyi.youdao.com/translate?i=" + encodeURIComponent(b) + "&keyfrom=chrome";
                var c = '<div class="ydd-container">                          <div class="ydd-top-wrapper">                            <div class="ydd-top">                            </div>                          </div>                          <div class="ydd-body-wrapper">                            <div class="ydd-lb"></div>                            <div class="ydd-rb"></div>                            <div class="ydd-body">                              <div class="ydd-titile">                                <span>{input}</span>                                <span><a href="{searchURL}" target="_blank">详细&rsaquo;&rsaquo;</a></span>                              </div>                              <div class="ydd-middle">                                <div class="ydd-trans-wrapper ydd-simple-trans">                                  <div class="ydd-trans-container">{trans}</div>                                </div>                              </div>                            </div>                          </div>                          <div class="ydd-bottom-wrapper"><div class="ydd-bottom"></div></div>                          <div class="ydd-bg-top"></div></div>                        </div>';
                return l.formatTemplate(c, {
                    searchURL: g,
                    input: s.escapeHTML(a),
                    trans: s.escapeHTML(e)
                })
            };
            s.processXmlDictData = function(H) {
                var S = null,
                    Q = null,
                    M = [],
                    a = [],
                    c = "",
                    e = "",
                    f = "",
                    K = "",
                    d = 0;
                var j = function(t) {
                    try {
                        return H.getElementsByTagName(t)[0].firstChild.nodeValue
                    } catch(u) {
                        return ""
                    }
                };
                c = j("return-phrase");
                e = j("dictcn-speach");
                f = j("lang");
                K = j("phonetic-symbol");
                if ((Q = H.getElementsByTagName("translation")) && Q.length > 0) {
                    for (d = 0; d < Q.length; d++) {
                        M.push(Q[d].getElementsByTagName("content")[0].firstChild.nodeValue)
                    }
                }
                if ((S = H.getElementsByTagName("web-translation")) && S.length > 0) {
                    for (d = 0; d < S.length - 1; d++) {
                        a.push({
                            key: S[d].getElementsByTagName("key")[0].firstChild.nodeValue,
                            value: S[d].getElementsByTagName("trans")[0].getElementsByTagName("value")[0].firstChild.nodeValue
                        })
                    }
                }
                var L = "https://dict.youdao.com/search?q=" + encodeURIComponent(c) + "&keyfrom=chrome.extension" + f,
                    h = c,
                    O = "",
                    P = "",
                    R = "",
                    g = null,
                    I = "https://www.youdao.com/search?q={title}&keyfrom=fanyi.jtr",
                    G = "";
                G = '<div class="ydd-container">                      <div class="ydd-top-wrapper">                        <div class="ydd-top"></div>                      </div>                      <div class="ydd-body-wrapper">                        <div class="ydd-lb"></div>                        <div class="ydd-rb"></div>                        <div class="ydd-body">                          <div class="ydd-titile">                            <span class="ydd-key-title">{title}</span>                            <span class="ydd-phonetic">{phonetic}</span> {speechHTML} <span class="ydd-detail"><a href="{searchURL}" target="_blank">详细&rsaquo;&rsaquo;</a></span>                          </div>                          <div class="ydd-middle">                            <div class="ydd-trans-wrapper ydd-base-trans">                              <div class="ydd-tabs"><span class="ydd-tab">基本翻译</span></div>{baseTransHTML}</div>                              <div class="ydd-trans-wrapper ydd-web-trans">                                <div class="ydd-tabs"><span class="ydd-tab">网络释义</span></div>{webTransHTML}</div>                              </div>                            </div>                          </div>                        <div class="ydd-bottom-wrapper">                          <div class="ydd-bottom"><a href="' + I + '" target="_blank" title="使用有道搜索 {title}">搜索&nbsp;{title}</a></div>                        </div>                        <div class="ydd-bg-top"></div>                      </div>                    </div>';
                if ((o.isContainChinese(h) || o.isContainJapanese(h) || o.isContainKoera(h)) && h.length > 15) {
                    h = h.substring(0, 10) + "..."
                } else {
                    if (h.length > 25) {
                        h = h.substring(0, 15) + " ..."
                    }
                }
                if (M.length + a.length > 0 && e) {
                    O = '<span class="ydd-voice">' + k("https://dict.youdao.com/speech?audio=" + e, "test", "CLICK", "dictcn_speech") + "</span>"
                }
                for (d = 0; d < M.length; d++) {
                    P += '<div class="ydd-trans-container">' + M[d] + "</div>"
                }
                for (d = 0; d < a.length; d++) {
                    var N = "https://dict.youdao.com/search?q=" + encodeURIComponent(a[d].key) + "&keyfrom=chrome.extension" + f;
                    R += '<div class="ydd-trans-container"><a href="' + N + '" target="_blank">' + a[d].key + ":</a> " + a[d].value + "</div>"
                }
                g = l.formatTemplate(G, {
                    phonetic: K ? "[" + K + "]": "",
                    title: h,
                    searchURL: L,
                    speechHTML: O,
                    baseTransHTML: P,
                    webTransHTML: R
                });
                var T = l.query(".ydd-middle", g)[0];
                Q = l.query(".ydd-base-trans", T)[0];
                S = l.query(".ydd-web-trans", T)[0];
                if (M.length + a.length === 0) {
                    T.innerHTML = '<p class="ydd-no-result">没有英汉互译结果</p>'
                }
                try {
                    if (M.length === 0) {
                        T.removeChild(Q)
                    } else {
                        if (a.length === 0) {
                            T.removeChild(S)
                        }
                    }
                } catch(b) {}
                return g
            };
            var p = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };
            s.escapeHTML = function(a) {
                return String(a).replace(/[&<>"'\/]/g,
                    function(b) {
                        return p[b]
                    })
            };
            s.fn.init.prototype = s.fn;
            l.Swipe = s
        })(J); (function(d) {
            var c = function(j, k, b) {
                var h = this;
                if (!d.isDOM(j)) {
                    throw Error("Invalid slider container element")
                }
                this.container = j;
                if (!d.isDOM(k)) {
                    throw Error("Invalid slider controller block element")
                }
                this.controller = k;
                for (var a = this.container; a; a = a.parentNode) {
                    if (a.nodeType === 9) {
                        this.document = a;
                        break
                    }
                }
                if (!a) {
                    throw Error("Can't find parent Document element of container, container dom node should insert to document first")
                }
                if (d.isDOM(b.bar)) {
                    this.bar = b.bar
                } else {
                    this.bar = null
                }
                this.range = Number(b.max - b.min);
                if (! (this.range && this.range > 0)) {
                    throw Error("range must greater than 0")
                }
                if (d.isFunction(b.callback)) {
                    this.callback = function(e) {
                        b.callback.call(h, e)
                    }
                }
                this.borderFix = Number(b.borderFix) || 0;
                this.mousemove = function(e) {
                    h._mousemove(e)
                };
                this.mouseup = function(e) {
                    h._mouseup(e)
                };
                this.mousedown = function(e) {
                    h._mousedown(e)
                }
            };
            c.prototype = {
                enable: function() {
                    d.bind(this.container, "mousedown", this.mousedown)
                },
                disable: function() {
                    d.unbind(this.container, "mousedown", this.mousedown)
                },
                to: function(b, g) {
                    var h = this,
                        a = null;
                    tempFunc = function() {
                        if (!h.container.offsetHeight || !h.container.clientWidth) {
                            a = setTimeout(tempFunc, 200);
                            return
                        }
                        var e = h.container.clientWidth - h.controller.clientWidth - 2 * h.borderFix;
                        pos = b / h.range * e;
                        h._valueChange(pos / e * h.range, pos)
                    };
                    tempFunc()
                },
                _mousemove: function(a) {
                    var b = a || window.event;
                    this._moveHandler(b, false)
                },
                _mouseup: function(a) {
                    var b = a || window.event;
                    this._moveHandler(b, true);
                    d.unbind(this.document, "mouseup", this.mouseup);
                    d.unbind(this.document, "mousemove", this.mousemove);
                    this.container.style.cursor = "pointer"
                },
                _mousedown: function(a) {
                    var b = a || window.event;
                    this._moveHandler(b, false);
                    d.bind(this.document, "mouseup", this.mouseup);
                    d.bind(this.document, "mousemove", this.mousemove);
                    if (b.preventDefault) {
                        b.preventDefault()
                    }
                    b.returnValue = false
                },
                _moveHandler: function(n, b) {
                    var m = n.clientX - 1 / 2 * this.controller.clientWidth - d.findPos(this.container).x - this.borderFix,
                        k = this.container.clientWidth - this.controller.clientWidth - 2 * this.borderFix,
                        l = k / this.range,
                        p = l / 2,
                        o = m % l,
                        a = 0;
                    if (m < 0) {
                        m = 0;
                        o = 0
                    } else {
                        if (m > k) {
                            m = k;
                            o = 0
                        }
                    }
                    if (b && o < p) {
                        a = m - o
                    } else {
                        if (b && o > l - p) {
                            a = m - o + l
                        } else {
                            a = m
                        }
                    }
                    this._valueChange(a / k * this.range, a)
                },
                _valueChange: function(b, a) {
                    this.callback(b);
                    this.controller.style.left = a + this.borderFix + "px";
                    if (this.bar) {
                        this.bar.style.width = a + this.controller.clientWidth / 2 + "px"
                    }
                }
            };
            d.Slider = c
        })(J); (function(d) {
            var c = function() {
                this.nodes = [];
                this.originals = {};
                this.transResults = {};
                this.tipsResults = {}
            };
            c.prototype = {
                addNode: function(a, f) {
                    var b = 0;
                    if (!f) {
                        for (; b < this.nodes.length; b++) {
                            if (this.nodes[b] === a) {
                                return b
                            }
                        }
                    }
                    this.nodes.push(a);
                    this.originals[b] = a.nodeValue;
                    return b
                },
                replaceTrans: function(l) {
                    if (this.nodes[l] && this.transResults[l]) {
                        var j = this.nodes[l],
                            a = document.createElement("font"),
                            m = this.transResults[l];
                        try {
                            if (j.nodeValue === m) {
                                return false
                            }
                            if (!j.parentNode) {
                                return
                            }
                        } catch(b) {
                            return
                        }
                        j.nodeValue = "";
                        a.className = "OUTFOX_JTR_TRANS_NODE";
                        a.id = "OUTFOX_JTR_TRANS_NODE-" + l;
                        a.setAttribute("rel", l);
                        a.innerHTML = m;
                        try {
                            j.parentNode.insertBefore(a, j.nextSibling)
                        } catch(k) {}
                    }
                },
                revertTrans: function(f) {
                    if (this.nodes[f] && this.originals[f]) {
                        var a = d.query("#OUTFOX_JTR_TRANS_NODE-" + f);
                        if (a && a.parentNode) {
                            a.parentNode.removeChild(a)
                        }
                        try {
                            this.nodes[f].nodeValue = this.originals[f]
                        } catch(b) {}
                    }
                },
                replaceTips: function(b, f) {
                    var a = f || -1;
                    if (this.nodes[b] && this.tipsResults[b]) {
                        d.each(this.tipsResults[b],
                            function(e, t) {
                                if (t.level && t.level < a) {
                                    return
                                }
                                var w = this.nodes[b],
                                    y = t.start,
                                    u = t.end,
                                    s = t.explain;
                                if (typeof w.parentNode === undefined) {
                                    return
                                }
                                var z = document.createElement("font");
                                z.className = "OUTFOX_NANCI_WRAPPER";
                                try {
                                    var r = w.nodeValue.substr(0, y),
                                        A = w.nodeValue.substr(y, u - y),
                                        B = w.nodeValue.substr(u);
                                    w.nodeValue = r;
                                    z.innerHTML = A;
                                    w.parentNode.insertBefore(document.createTextNode(B), w.nextSibling);
                                    w.parentNode.insertBefore(z, w.nextSibling);
                                    var x = document.createElement("font");
                                    x.className = "OUTFOX_NANCI_TIPS";
                                    x.setAttribute("rel", b);
                                    x.innerHTML = "(" + s + ")";
                                    z.parentNode.insertBefore(x, z.nextSibling)
                                } catch(v) {}
                            },
                            this)
                    }
                },
                revertTips: function(f) {
                    if (this.nodes[f]) {
                        var b;
                        do {
                            try {
                                b = !this.revertTip(this.nodes[f].nextSibling)
                            } catch(a) {
                                b = true
                            }
                        } while (! b )
                    }
                },
                revertTip: function(a) {
                    if (d.hasClass(a, "OUTFOX_NANCI_WRAPPER") && a.firstChild) {
                        var b = a.nextSibling;
                        if (d.hasClass(b, "OUTFOX_NANCI_TIPS")) {
                            b.parentNode.removeChild(b)
                        }
                        if (a.nextSibling && a.nextSibling.nodeType === 3) {
                            a.firstChild.nodeValue += a.nextSibling.nodeValue;
                            a.parentNode.removeChild(a.nextSibling)
                        }
                        if (a.previousSibling && a.previousSibling.nodeType === 3) {
                            a.previousSibling.nodeValue += a.firstChild.nodeValue;
                            a.parentNode.removeChild(a)
                        }
                        return true
                    } else {
                        return false
                    }
                },
                countTips: function(a) {
                    var b = 0;
                    d.each(this.tipsResults,
                        function(h, k) {
                            for (var j = 0; j < k.length; j++) {
                                if (k[j].level >= a) {
                                    b++
                                }
                            }
                        },
                        this);
                    return b
                }
            };
            d.NodeManager = c
        })(J); (function(d) {
            var c = function() {
                this.map = {};
                this.dataMap = {}
            };
            c.prototype = {
                getId: function(b) {
                    var a = null;
                    d.each(this.map,
                        function(g, h) {
                            if (h === b) {
                                a = g;
                                return false
                            }
                        });
                    if (a === null) {
                        a = d.guid();
                        this.map[a] = b
                    }
                    return a
                },
                data: function(b, m, j) {
                    var a = this.getId(b);
                    if (arguments.length === 3) {
                        if (!this.dataMap[a]) {
                            this.dataMap[a] = {}
                        }
                        this.dataMap[a][m] = j;
                        return j
                    } else {
                        var k = null;
                        try {
                            k = this.dataMap[a][m]
                        } catch(l) {
                            k = undefined
                        }
                        return k
                    }
                }
            };
            d.Cache = c
        })(J); (function(e) {
            var d = function(a) {
                this.contentDocument = a;
                this.cache = new e.Cache()
            };
            d.prototype = {
                IGNORE_TAGS: ["HTML", "HEAD", "META", "TITLE", "SCRIPT", "STYLE", "LINK", "IMG", "FORM", "INPUT", "BUTTON", "TEXTAREA", "SELECT", "OPTION", "LABEL", "IFRAME", "UL", "OL", "LI", "DD", "DT", "A", "OBJECT", "PARAM", "EMBED", "NOSCRIPT", "EM", "B", "STRONG", "I", "INS", "BR", "HR", "PRE", "H1", "H2", "H3", "H4", "H5", "CITE"],
                getMainArticle: function() {
                    return null;
                    var a = null,
                        c = "";
                    if ( !! location) {
                        c = location.hostname
                    }
                    if (/\b(google|facebook|twitter)\b/i.test(c)) {
                        return null
                    }
                    var h = this._getAllArticle();
                    if (! (h && h.length)) {
                        return null
                    }
                    h.sort(function(g, j) {
                        return !! (j.weight - g.weight)
                    });
                    for (var b = 2; b > 0; b--) {
                        a = h[0];
                        h.splice(0, 1);
                        break
                    }
                    return a
                },
                _getAllArticle: function() {
                    var c = this.contentDocument.getElementsByTagName("*"),
                        j = [];
                    for (var k = 0,
                             a = c.length > 100 ? 100 : c.length; k < a; k++) {
                        var b = c[k];
                        if (this._checkTagName(b) && this._checkSize(b) && this._checkVisibility(b)) {
                            j[j.length] = new f(b)
                        }
                    }
                    return j
                },
                _checkTagName: function(a) {
                    return e.indexOf(this.IGNORE_TAGS, a.tagName) == -1
                },
                _checkVisibility: function(a) {
                    return ! (e.css(a, "visibility") == "hidden" || e.css(a, "display") == "none" || parseInt(e.css(a, "height")) <= 0 || parseInt(e.css(a, "width")) <= 0)
                },
                _checkSize: function(a) {
                    return a.offsetWidth > 300 && a.offsetHeight > 200
                }
            };
            var f = function(a) {
                this.elem = a;
                this._texts = this._getAllTexts();
                this.weight = this.calcWeight()
            };
            f.prototype = {
                IGNORE_TAGS: ["A", "DD", "DT", "OL", "OPTION", "PRE", "SCRIPT", "STYLE", "UL", "IFRAME"],
                MINOR_REGEXP: /comment|combx|disqus|foot|header|menu|rss|shoutbox|sidebar|sponsor/i,
                MAJOR_REGEXP: /article|entry|post|body|column|main|content/i,
                TINY_REGEXP: /comment/i,
                BLANK_REGEXP: /\S/i,
                _getAllTexts: function() {
                    var k = [],
                        n = e.getTextNodes(this.elem);
                    for (var c = 0,
                             l = n.length; c < l; c++) {
                        var a = n[c];
                        if (this._checkTagName(a) && this._checkLength(a)) {
                            var m = a.parentNode || {},
                                b = m.parentNode || {};
                            if (! (this._checkMinorContent(m) || this._checkMinorContent(b))) {
                                k.push(a)
                            }
                        }
                    }
                    return k
                },
                calcStructWeight: function() {
                    var n = 0;
                    for (var b = 0,
                             m = this._texts.length; b < m; b++) {
                        var a = this._texts[b],
                            k = a.nodeValue.length,
                            c = 1;
                        if (k > 20) {
                            continue
                        }
                        for (var l = a.parentNode; l && l != this.elem; l = l.parentNode) {
                            c -= 0.1
                        }
                        n += Math.pow(k * c, 1.25)
                    }
                    return n
                },
                calcContentWeight: function() {
                    var c = 1;
                    for (var b = this.elem; b; b = b.parentNode) {
                        var a = b.id + " " + b.className;
                        if (this.MAJOR_REGEXP.test(a)) {
                            c += 0.4
                        }
                        if (this.MINOR_REGEXP.test(a)) {
                            c -= 0.8
                        }
                    }
                    return c
                },
                calcWeight: function() {
                    return this.calcStructWeight() * this.calcContentWeight()
                },
                _checkTagName: function(a) {
                    return e.indexOf(this.IGNORE_TAGS, a.tagName) == -1
                },
                _checkLength: function(a) {
                    return Boolean(this.BLANK_REGEXP.test(a.nodeValue))
                },
                _checkMinorContent: function(a) {
                    return Boolean(this.TINY_REGEXP.test(a.id + " " + a.className))
                }
            };
            e.Page = d
        })(J); (function(e) {
            var d = {
                runCount: 0,
                swipe: true,
                mode: "TIPS",
                level: 1
            };
            var f = {
                0 : ["TIPS", 3],
                1 : ["TIPS", 2],
                2 : ["TIPS", 1],
                3 : ["TRANS", "0"],
                4 : ["NONE", "NONE"]
            };
            e.TR.UI = function(b, a) {
                var c = this;
                this.initLogger(a.logURL);
                this.log({
                    action: "start"
                });
                this.guid = e.guid();
                this.context = b;
                this.conn = e.CDA("OUTFOX_JTR_CDA", a.domain, a.connFilePath);
                this.update = a.update;
                this.updateTipMsg = a.updateTipMsg;
                this.updateDate = a.updateDate;
                this.manager = new e.NodeManager();
                this.barHeight = 50;
                this.permissionDenied = "由于该网页存在安全性限制, 无法加载有道网页翻译2.0";
                this.translator = new e.TR(b, {
                        reqSize: a.reqSize,
                        onStatusChange: function() {
                            c._trStatusChangeCallback.apply(c, arguments)
                        },
                        url: {
                            textTrans: a.transURL,
                            tips: a.tipsURL
                        },
                        guid: this.guid
                    },
                    this.conn, this.manager);
                this.queue = {
                    TRANS: {
                        0 : {
                            currentThread: -1
                        }
                    },
                    TIPS: {
                        1 : {
                            currentThread: -1
                        },
                        2 : {
                            currentThread: -1
                        },
                        3 : {
                            currentThread: -1
                        }
                    },
                    NONE: {
                        NONE: {}
                    }
                };
                this.mode = null;
                this.level = null;
                this.initFrame(a.cssURL,
                    function() {
                        var k = "";
                        var l = this;
                        if (location) {
                            k = location.href
                        }
                        this.movePage(l.barHeight);
                        this.frame.body.innerHTML = '                <div id="wrapper">                    <a href="https://fanyi.youdao.com/web2/?keyfrom=headerLogo" target="_blank">                        <h1 id="headerLogo" class="logo"></h1>                    </a>                    <div id="sliderLabel">翻译级别</div>                    <div id="sliderWrapper" class="slider-wrapper">                        <div id="levelLabel">                            <label id="level-3" rel="0"><a>专&nbsp;&nbsp;&nbsp;家</a></label>                            <label id="level-2" rel="1"><a>进&nbsp;&nbsp;&nbsp;阶</a></label>                            <label id="level-1" rel="2"><a>入&nbsp;&nbsp;&nbsp;门</a></label>                            <label id="level-0" rel="3"><a>全文翻译</a></label>                        </div>                        <div id="sliderContainer" class="slider-container">                            <div id="sliderBackground"><div class="slider-background"></div></div>                            <a id="slider" href="javascript:void(0);" class="slider"></a>                        </div>                    </div>                    <div id="status"></div>                    <div id="feedback">                        <a href="https://feedback.youdao.com/quality_report.jsp?q=jtr&prodtype=fanyi&cmt=' + encodeURIComponent("我在网站 " + k + " 使用有道网页翻译2.0时，遇到了以下问题：") + '" target="_blank">意见与反馈</a>                        &nbsp;<a id="fb" href="https://survey2.163.com/html/fanyiweb2s201103/paper.html" target="_blank">参加问卷调查</a>                    </div>                    <div id="switchWrapper"><a id="switch" href="javascript:void(0);"></a></div>                </div>                <a id="OUTFOX_JTR_BAR_CLOSE" href="javascript:void(0);" class="OUTFOX_JTR_BAR_CLOSE"></a>                <div id="OUTFOX_JTR_BAR_UPDATE_SHADE"></div>                <div id="OUTFOX_JTR_BAR_CLOSE_UPDATE_TIP">                    <div id="OUTFOX_JTR_BAR_CLOSE_UPDATE_TIP_CONTENT"></div>                </div>';
                        this.initTipContent();
                        this.initBarClose();
                        this.initSwitch();
                        this.initSlider();
                        this.initLabel();
                        this.initTipsCtrl();
                        this.initTransTip();
                        this.initSwipe();
                        var j = function(g) {
                            l.loadSetting(g);
                            l.enable();
                            l.writeSettings({
                                runCount: l.settings.runCount + 1
                            });
                            e.each(f,
                                function(m, h) {
                                    if (l.mode === h[0] && l.level === h[1]) {
                                        l.slider.to(m)
                                    }
                                })
                        };
                        this.conn.ajax({
                            handler: "localStorage",
                            data: {
                                key: "settings"
                            },
                            dataType: "json",
                            callback: function(g) {
                                j(g)
                            }
                        })
                    })
            };
            e.TR.UI.prototype = {
                positionElementInViewPort: function(I) {
                    var F = I.tip;
                    var a = I.target;
                    var H = !!(e.css(document.body, "position") !== "static");
                    var B = e.css(document.body, "marginLeft");
                    var M = e.css(document.body, "marginRight");
                    if (B === "auto" && M === "auto") {
                        var b = e.getPageSize().page.width;
                        var Q = parseInt(e.css(document.body, "width"));
                        if (b > Q) {
                            B = (b - Q) / 2
                        } else {
                            B = 0
                        }
                    }
                    B = H ? parseInt(B) : 0;
                    var O = H ? parseInt(e.css(document.body, "marginTop")) : 0;
                    var K = e.findPos(a),
                        D = 0,
                        N = 0,
                        P = e.scroll().top,
                        A = e.scroll().left,
                        z = K.x,
                        G = K.y,
                        L = a.offsetHeight,
                        E = F.clientHeight,
                        y = F.clientWidth,
                        C = e.getPageSize().window.height,
                        c = e.getPageSize().window.width;
                    if (G - E >= P + this.barHeight) {
                        D = G - E
                    } else {
                        D = G + L
                    }
                    if (z + y <= c + A) {
                        N = z
                    } else {
                        N = c + A - y
                    }
                    e.css(I.tip, {
                        position: "absolute",
                        top: (D - O) + "px",
                        left: (N - B) + "px"
                    })
                },
                disable: function() {
                    this.changeMode("NONE", "NONE");
                    this.slider.disable();
                    this.frame.body.className = "disable";
                    this.disabled = true;
                    this.updateStatus();
                    this.switchElem.innerHTML = "重新翻译"
                },
                enable: function() {
                    this.changeMode(this.settings.mode, this.settings.level);
                    this.slider.enable();
                    e.removeClass(this.frame.body, "disable");
                    e.addClass(this.frame.body, "enable");
                    this.disabled = false;
                    this.updateStatus();
                    this.switchElem.innerHTML = "取消翻译"
                },
                _trStatusChangeCallback: function(a) {
                    if (!a.id || !a.action || !a.level) {
                        return
                    }
                    var b = this.queue[a.action][a.level];
                    if (b.currentThread <= a.id) {
                        b.currentThread = a.id;
                        b.status = a.status;
                        b.data = a.data || null;
                        if (a.action === this.mode && a.level === this.level) {
                            this.updateStatus()
                        }
                    }
                },
                updateStatus: function() {
                    var a = this.queue[this.mode][this.level];
                    e.removeClass(this.statusElem.parentNode, "statistic");
                    if (a.status === "busy" && a.data) {
                        this.switchElem.style.visibility = "hidden";
                        var c = parseInt(a.data[0] * 100 / a.data[1], 10);
                        if (this.mode === "TRANS") {
                            this.statusElem.innerHTML = "正在翻译&nbsp;" + c + "%&nbsp;..."
                        } else {
                            this.statusElem.innerHTML = "正在分析&nbsp;" + c + "%&nbsp;..."
                        }
                        this.statusElem.className = "busy"
                    } else {
                        if (a.status === "finish") {
                            this.switchElem.style.visibility = "inherit";
                            if (this.mode === "TRANS") {
                                this.statusElem.innerHTML = "翻译完成"
                            } else {
                                var b = this.manager.countTips(this.level);
                                if (b !== 0) {
                                    e.addClass(this.statusElem.parentNode, "statistic");
                                    this.statusElem.innerHTML = '共注释<span class="OUTFOX_BAR_TOTAL_NUM">' + b + "</span>个难词"
                                } else {
                                    this.statusElem.innerHTML = "恭喜您！该网页上没有难词~"
                                }
                            }
                            this.statusElem.className = "finish"
                        } else {
                            this.switchElem.style.visibility = "inherit";
                            this.statusElem.innerHTML = "翻译助手已关闭";
                            this.statusElem.className = "finish"
                        }
                    }
                },
                initLogger: function(a) {
                    this.logURL = a;
                    this._logImgCache = []
                },
                log: function(a) {
                    if (this.logURL) {
                        a.relatedURL = document.location.href;
                        a.guid = this.guid;
                        var b = new Image();
                        b.src = this.logURL + "?" + e.param(a);
                        this._logImgCache[this._logImgCache.length] = b
                    }
                },
                initSwipe: function() {
                    var a = this;
                    this.swipe = e.Swipe(this.context, this.conn);
                    this.swipe.onSwipeCallback = function(b) {
                        a.log({
                            action: "swipeWord",
                            word: b
                        })
                    }
                },
                movePage: function(h) {
                    if (e.browser.msie) {
                        var b = e.css(this.context, "paddingTop");
                        try {
                            b = parseInt(b)
                        } catch(c) {
                            b = 0
                        }
                        this.context.style.cssText += ";padding-top:" + (h + b) + "px !important;"
                    } else {
                        var a = e.css(this.context, "marginTop");
                        try {
                            a = parseInt(a)
                        } catch(c) {
                            a = 0
                        }
                        if (e.css(this.context, "position") === "static") {
                            e.css(this.context, {
                                position: "relative"
                            })
                        }
                        this.context.style.cssText += ";margin-top:" + (h + a) + "px !important;"
                    }
                },
                initFrame: function(j, a) {
                    var l = this;
                    var b = document.createElement("div");
                    b.id = "OUTFOX_BAR_WRAPPER";
                    this.context.appendChild(b);
                    this.wrapper = b;
                    function c(g) {
                        g.innerHTML = '<iframe id="OUTFOX_JTR_BAR" src="" style="display:none;"></iframe>';
                        var h = e.query("#OUTFOX_JTR_BAR");
                        h.setAttribute("frameBorder", 0);
                        if (e.browser.msie && document.domain != window.location.hostname) {
                            h.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';<\/script><body></body>\"))"
                        }
                        if (e.browser.msie && !(e.browser.msie === "8.0" && document.compatMode === "CSS1Compat")) {
                            e.css(h, {
                                width: e.getPageSize().window.width + "px"
                            });
                            e.bind(window, "resize",
                                function(m) {
                                    e.css(h, {
                                        width: e.getPageSize().window.width + "px"
                                    })
                                })
                        }
                        return h
                    }
                    var k = c(b);
                    this.iframe = k;
                    setTimeout(function() {
                            try {
                                l.frame = k.contentDocument || k.contentWindow.document
                            } catch(g) {
                                l.log({
                                    action: "secRestrict",
                                    relatedURL: window.location.href
                                });
                                alert(l.permissionDenied);
                                return
                            }
                            e.css(k, {
                                display: "block"
                            });
                            e.addClass(k, "OUTFOX_JTR_BAR");
                            e.loadCSS(l.frame, j);
                            l.frame.body.id = "OUTFOX_JTR_BAR_BODY";
                            e.addClass(l.frame.body, "forbid-select");
                            l.frame.body.onselectstart = l.frame.body.ondrag = function() {
                                return false
                            };
                            a.call(l)
                        },
                        100)
                },
                initBarClose: function() {
                    var b = this;
                    var a = this.frame.getElementById("OUTFOX_JTR_BAR_CLOSE");
                    e.addClass(a, "OUTFOX_JTR_BAR_CLOSE");
                    e.bind(window, "resize",
                        function(c) {
                            e.css(a, {
                                top: 1 + "px",
                                right: 1 + "px"
                            })
                        });
                    e.bind(a, "click",
                        function() {
                            b.disable();
                            b.movePage( - b.barHeight);
                            b.context.removeChild(b.wrapper);
                            b.context.removeChild(e.query("#OUTFOX_JTR_CDA"));
                            b.context.removeChild(e.query("#yddWrapper"));
                            b.context.removeChild(e.query("#outfox_seed_js"))
                        })
                },
                initTipContent: function() {
                    if (!this.update) {
                        return
                    }
                    var b = this;
                    var a = function() {
                        var c = e.query("#OUTFOX_JTR_BAR_CLOSE_UPDATE_TIP_CONTENT", b.frame);
                        var l = e.query("#OUTFOX_JTR_BAR_UPDATE_SHADE", b.frame);
                        var j = e.query("#OUTFOX_JTR_BAR_CLOSE_UPDATE_TIP", b.frame);
                        c.innerHTML = "更新提示：<br/>" + b.updateTipMsg + '<span class="update-date">' + b.updateDate + '</span><a href="javascript:void(0);" id="OUTFOX_JTR_BAR_CLOSE_UPDATE_TIP_CONTENT_CLOSE"></a>';
                        var k = e.query("#OUTFOX_JTR_BAR_CLOSE_UPDATE_TIP_CONTENT_CLOSE", b.frame);
                        e.css(l, {
                            display: "block"
                        });
                        e.css(j, {
                            display: "block"
                        });
                        e.bind(k, "click",
                            function() {
                                e.css(l, {
                                    display: "none"
                                });
                                e.css(j, {
                                    display: "none"
                                })
                            })
                    };
                    b.conn.ajax({
                        handler: "localStorage",
                        data: {
                            key: "date"
                        },
                        callback: function(c) {
                            if (c !== b.updateDate) {
                                a();
                                b.conn.ajax({
                                    handler: "localStorage",
                                    data: {
                                        key: "date",
                                        value: b.updateDate
                                    }
                                })
                            }
                        }
                    })
                },
                initSwitch: function() {
                    var a = this;
                    this.statusElem = e.query("#status", this.frame);
                    this.switchElem = e.query("#switch", this.frame);
                    e.bind(this.switchElem, "click",
                        function(b) {
                            if (a.disabled) {
                                a.enable()
                            } else {
                                a.disable()
                            }
                        })
                },
                initLabel: function() {
                    this.labels = [];
                    var c = this;
                    var a = function(l) {
                        var n = l || window.event,
                            m = n.target || n.srcElement,
                            k = m.parentNode.getAttribute("rel");
                        if (c.disabled) {
                            return
                        }
                        if (k) {
                            c.changeMode(f[k][0], f[k][1]);
                            e.each(f,
                                function(h, g) {
                                    if (c.mode === g[0] && c.level === g[1]) {
                                        c.slider.to(h)
                                    }
                                })
                        }
                    };
                    for (var b = 0; b < 4; b++) {
                        this.labels[b] = e.query("#level-" + b, this.frame);
                        e.bind(this.labels[b], "click", a)
                    }
                },
                initSlider: function() {
                    var j = e.query("#sliderContainer", this.frame);
                    var k = e.query("#slider", this.frame);
                    var c = this,
                        a = null,
                        b = 10;
                    this.slider = new e.Slider(j, k, {
                        bar: e.query("#sliderBackground", this.frame),
                        max: 3,
                        min: 0,
                        step: 1,
                        borderFix: -3,
                        callback: function(g) {
                            clearTimeout(a);
                            a = setTimeout(function() {
                                    c._valueChange(g)
                                },
                                b)
                        }
                    })
                },
                loadSetting: function(a) {
                    var b = {};
                    if (a === null || Object.prototype.toString.call(a) !== "[object Object]") {
                        this.conn.ajax({
                            handler: "localStorage",
                            dataType: "json",
                            data: {
                                key: "settings",
                                value: JSONDAO.stringify(d)
                            }
                        });
                        b = d
                    } else {
                        for (var c in d) {
                            if (d.hasOwnProperty(c)) {
                                b[c] = a.hasOwnProperty(c) ? a[c] : d[c]
                            }
                        }
                    }
                    b.mode = b.mode || d.mode;
                    b.level = b.level || d.level;
                    e.log("Load Settings:", b);
                    this.settings = b
                },
                _valueChange: function(b) {
                    var a = Math.round(b),
                        c = f[a][0],
                        h = f[a][1];
                    if (c !== this.mode) {
                        this.changeMode(c, h)
                    } else {
                        if (h !== this.level) {
                            this.changeLevel(h)
                        }
                    }
                },
                changeMode: function(b, a) {
                    if (this.mode === "TIPS") {
                        for (var c = 1; c <= 3; c++) {
                            this.labels[c].className = "deactive"
                        }
                        this.translator.revertTips()
                    } else {
                        if (this.mode === "TRANS") {
                            this.labels[0].className = "deactive";
                            this.translator.revertTrans()
                        }
                    }
                    this.swipe.disableSwipe();
                    this.disableTransTip();
                    this.disableTipsCtrl();
                    this.mode = b;
                    this.changeLevel(a)
                },
                changeLevel: function(a) {
                    e.log("Change level to:", a);
                    if (this.level === null) {
                        this.log({
                            action: "view",
                            level: a
                        })
                    } else {
                        this.log({
                            action: "changeLevel",
                            oldLevel: this.level,
                            newLevel: a
                        })
                    }
                    this.level = a;
                    if (this.mode === "TIPS") {
                        this.swipe.enableSwipe();
                        for (var b = 1; b <= 3; b++) {
                            this.labels[b].className = b == a ? "active": "deactive"
                        }
                        this.translator.revertTips();
                        this.translator.doTips(this.level);
                        this.enableTipsCtrl()
                    } else {
                        if (this.mode === "TRANS") {
                            this.labels[0].className = "active";
                            this.translator.doTrans();
                            this.enableTransTip()
                        }
                    }
                    if (this.mode !== "NONE") {
                        this.writeSettings({
                            mode: this.mode,
                            level: this.level
                        })
                    }
                },
                writeSettings: function(a) {
                    e.each(a,
                        function(c, b) {
                            this.settings[c] = b
                        },
                        this);
                    this.conn.ajax({
                        handler: "localStorage",
                        dataType: "json",
                        data: {
                            key: "settings",
                            value: JSONDAO.stringify(this.settings)
                        }
                    })
                },
                initTipsCtrl: function() {
                    var c = this,
                        a = this.initTipsCtrlElem();
                    var b = null;
                    this.tipsTarget = null;
                    this.tipsCtrlHandler = function(m) {
                        var o = m || window.evt,
                            n = o.target || o.srcElement,
                            p = 0,
                            l = 0;
                        clearTimeout(b);
                        if (n === c.tipsTarget || n.className && n.className.indexOf("OUTFOX_JTR_NANCI_") !== -1) {
                            return
                        }
                        b = setTimeout(function() {
                                if (a.parentNode) {
                                    a.parentNode.removeChild(a)
                                }
                                if (e.hasClass(n, "OUTFOX_NANCI_TIPS")) {
                                    var D = e.findPos(n),
                                        z = e.query(".OUTFOX_JTR_NANCI_CTRL_WORD", a)[0],
                                        y = null;
                                    c.context.appendChild(a);
                                    z.innerHTML = n.innerHTML;
                                    var B = e.css(n, "fontSize");
                                    var g = e.css(n, "fontFamily");
                                    try {
                                        if (B.indexOf("em") != -1) {} else {
                                            if (parseInt(B) < 12) {
                                                B = "12px"
                                            }
                                        }
                                    } catch(h) {
                                        B = "12px"
                                    }
                                    var A = !!(e.css(document.body, "position") !== "static");
                                    var k = e.css(document.body, "marginLeft");
                                    var E = e.css(document.body, "marginRight");
                                    if (k === "auto" && E === "auto") {
                                        var C = e.getPageSize().page.width;
                                        var j = parseInt(e.css(document.body, "width"));
                                        if (C > j) {
                                            k = (C - j) / 2
                                        } else {
                                            k = 0
                                        }
                                    }
                                    k = A ? parseInt(k) : 0;
                                    var x = A ? parseInt(e.css(document.body, "marginTop")) : 0;
                                    e.css(z, {
                                        fontSize: B
                                    });
                                    e.css(z, {
                                        fontFamily: g
                                    });
                                    e.css(a, {
                                        left: (D.x - k) + "px",
                                        top: (D.y - x) + "px",
                                        position: "absolute"
                                    });
                                    c.tipsTarget = n
                                } else {
                                    c.tipsTarget = null
                                }
                            },
                            200)
                    }
                },
                initTipsCtrlElem: function() {
                    var c = document.createElement("span"),
                        o = document.createElement("span"),
                        n = document.createElement("a"),
                        m = document.createElement("span"),
                        b = document.createElement("a"),
                        r = document.createElement("span"),
                        a = this;
                    r.className = "OUTFOX_JTR_NANCI_CTRL_WORD";
                    c.appendChild(r);
                    n.className = "OUTFOX_JTR_NANCI_CTRL_DETAIL";
                    n.setAttribute("title", "查看详细解释");
                    n.innerHTML = "详解";
                    o.appendChild(n);
                    o.className = "OUTFOX_JTR_NANCI_CTRL_DETAIL_BG";
                    c.appendChild(o);
                    b.className = "OUTFOX_JTR_NANCI_CTRL_CLOSE";
                    b.setAttribute("title", "我知道了");
                    b.innerHTML = "关闭";
                    m.appendChild(b);
                    m.className = "OUTFOX_JTR_NANCI_CTRL_CLOSE_BG";
                    c.appendChild(m);
                    c.className = "OUTFOX_JTR_NANCI_BAR";
                    var p = function() {
                        var g = null;
                        try {
                            g = a.tipsTarget.previousSibling
                        } catch(h) {}
                        return g
                    };
                    var q = function(h) {
                        var g = null;
                        if (document.createRange) {
                            var j = window.getSelection();
                            g = document.createRange();
                            j.removeAllRanges();
                            g.selectNode(h);
                            j.addRange(g)
                        } else {
                            if (document.body.createTextRange) {
                                g = document.body.createTextRange();
                                g.moveToElementText(h);
                                g.select()
                            }
                        }
                    };
                    e.bind(n, "click",
                        function(k) {
                            var h = p();
                            if (h && a.swipe) {
                                a.log({
                                    action: "viewDetail",
                                    word: h.innerHTML
                                });
                                q(h);
                                var j = document.createElement("font");
                                j.innerHTML = "&nbsp";
                                h.appendChild(j);
                                var l = e.findPos(j),
                                    g = j.offsetHeight;
                                h.removeChild(j);
                                a.swipe.swipeWord(h.firstChild.nodeValue, l.x, l.y, 0, g)
                            }
                            c.parentNode.removeChild(c);
                            e.removeClass(a.tipsTarget, "on")
                        });
                    e.bind(b, "click",
                        function(g) {
                            var j = c.getAttribute("rel"),
                                h = p();
                            if (h) {
                                a.log({
                                    action: "closeTip",
                                    word: h.innerHTML,
                                    tip: a.tipsTarget.innerHTML
                                });
                                a.translator._manager.revertTip(h)
                            }
                            c.parentNode.removeChild(c);
                            e.removeClass(a.tipsTarget, "on")
                        });
                    return c
                },
                _findTipCtrlPosition: function(E, H) {
                    var G = E.firstChild,
                        w = G.nodeValue,
                        c = G.nodeValue.length,
                        z = document.createElement("font"),
                        D = document.createTextNode(""),
                        a = [0, 0],
                        A = null,
                        B = null,
                        b = null,
                        v = 0,
                        x = 0,
                        F = 0,
                        I = c,
                        C = null;
                    e.css(z, {
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    for (var y = 0; y <= c; y++) {
                        D.nodeValue = G.nodeValue.substr(y);
                        G.nodeValue = G.nodeValue.substr(0, y);
                        E.insertBefore(D, G.nextSibling);
                        E.insertBefore(z, G.nextSibling);
                        b = e.findPos(z);
                        v = b.x - H[0];
                        x = b.y - H[1];
                        if (x <= 0 && (B === null || x > B)) {
                            C = B = x;
                            a[0] = b.x;
                            a[1] = b.y;
                            A = null;
                            F = y
                        }
                        if (x !== C) {
                            I = y;
                            C = x
                        }
                        G.nodeValue = w;
                        E.removeChild(D);
                        E.removeChild(z)
                    }
                    z.innerHTML = G.nodeValue.substr(F, I);
                    G.nodeValue = G.nodeValue.substr(0, F);
                    E.insertBefore(z, G.nextSibling);
                    a[0] += z.offsetWidth;
                    E.removeChild(z);
                    G.nodeValue = w;
                    return a
                },
                preventClose: function() {
                    e.css(e.query("#OUTFOX_JTR_BAR_CLOSE", this.frame), {
                        display: "none"
                    })
                },
                enableTipsCtrl: function() {
                    e.bind(this.context, "mouseover", this.tipsCtrlHandler)
                },
                disableTipsCtrl: function() {
                    e.unbind(this.context, "mouseover", this.tipsCtrlHandler)
                },
                enableTransTip: function() {
                    e.bind(this.context, "mouseover", this.transTipHandler)
                },
                disableTransTip: function() {
                    e.unbind(this.context, "mouseover", this.transTipHandler)
                },
                initTransTip: function(h) {
                    var b = this,
                        a = null,
                        c = null;
                    this.initTransTipElem("", "");
                    this.transTipHandler = function(g) {
                        var l = g || window.event,
                            k = l.target || l.srcElement;
                        clearTimeout(c);
                        c = setTimeout(function() {
                                if (a === k || k.className && (k.className.indexOf("OUTFOX_JTR_TRANSTIP_") !== -1 || k.className.indexOf("ydd-") !== -1)) {
                                    return
                                }
                                if (a) {
                                    a.style.textDecoration = "none"
                                }
                                if (b.transTipElem.elem.parentNode) {
                                    b.transTipElem.elem.parentNode.removeChild(b.transTipElem.elem)
                                }
                                if (e.hasClass(k, "OUTFOX_JTR_TRANS_NODE")) {
                                    a = k;
                                    var m = k.getAttribute("rel"),
                                        j = b.translator._manager;
                                    b.resetTransTipElem(j.originals[m], j.transResults[m], m);
                                    b.context.appendChild(b.transTipElem.elem);
                                    b.positionElementInViewPort({
                                        target: k,
                                        tip: b.transTipElem.elem
                                    });
                                    k.style.textDecoration = "underline"
                                } else {
                                    a = null
                                }
                            },
                            200)
                    }
                },
                initTransTipElem: function() {
                    var c = this,
                        q = document.createElement("div");
                    q.className = "OUTFOX_JTR_TRANSTIP_WRAPPER";
                    var a = document.createTextNode("");
                    var s = document.createTextNode("");
                    q.innerHTML += '<div class="OUTFOX_JTR_TRANSTIP_ORIGIN">                                        <div class="ydd-container">                                          <div class="ydd-top-wrapper">                                            <div class="ydd-top">                                            </div>                                          </div>                                          <div class="ydd-body-wrapper">                                            <div class="ydd-lb"></div>                                            <div class="ydd-rb"></div>                                            <div class="ydd-body">                                              <div class="ydd-title">                                                <strong>原文：</strong>                                              </div>                                              <div class="ydd-middle">                                                <div class="OUTFOX_JTR_TRANSTIP_ORIGIN_TEXT"></div>                                                <div class="OUTFOX_JTR_TRANSTIP_ADVISE">                                                  <textarea class="OUTFOX_JTR_TRANSTIP_ADVISE_TEXT"></textarea>                                                  <a class="OUTFOX_JTR_TRANSTIP_ADVISE_SUBMIT" href="javascript:void(0);">提交翻译建议</a>                                                </div>                                              </div>                                            </div>                                          </div>                                          <div class="ydd-bottom-wrapper">                                            <div class="ydd-bottom">                                              <a class="OUTFOX_JTR_TRANSTIP_ADVISE_TOGGLE">更好的翻译建议</a>                                              <span class="OUTFOX_JTR_TRANSTIP_ADVISE_THANK">感谢您为有道提供建议^_^</span>                                            </div>                                          </div>                                          <div class="ydd-bg-top"></div>                                        </div>                                      </div>';
                    e.query(".OUTFOX_JTR_TRANSTIP_ORIGIN_TEXT", q)[0].appendChild(s);
                    e.query(".OUTFOX_JTR_TRANSTIP_ADVISE_TEXT", q)[0].appendChild(a);
                    var r = e.query(".OUTFOX_JTR_TRANSTIP_ADVISE_TOGGLE", q)[0],
                        o = e.query(".OUTFOX_JTR_TRANSTIP_ADVISE_SUBMIT", q)[0],
                        b = e.query(".OUTFOX_JTR_TRANSTIP_ADVISE", q)[0],
                        t = e.query(".ydd-bottom", q)[0],
                        p = e.query(".OUTFOX_JTR_TRANSTIP_ADVISE_TEXT", q)[0];
                    o.hideFocus = true;
                    e.bind(r, "click",
                        function() {
                            e.toggleClass(b, "expand");
                            e.css(r, {
                                display: "none"
                            })
                        });
                    var n = function(g) {
                        g = g.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                        return g
                    };
                    e.bind(o, "click",
                        function() {
                            var g = p.value;
                            if (g === "") {
                                alert("翻译建议不能为空，请您输入内容后再次提交");
                                return
                            }
                            g = n(g);
                            e.addClass(b, "finish");
                            e.removeClass(b, "expand");
                            e.addClass(t, "OUTFOX_JTR_TRANSTIP_ADVISE_THANK_TIP");
                            var h = c.transTipElem.index;
                            if (h && c.manager.transResults[h]) {
                                c.manager.transResults[h] = g;
                                c.manager.revertTrans(h);
                                c.manager.replaceTrans(h)
                            }
                        });
                    this.transTipElem = {
                        elem: q,
                        transTextContainer: p,
                        trans: a,
                        original: s,
                        toggle: r,
                        submit: o,
                        advise: b,
                        bottom: t,
                        index: null
                    }
                },
                resetTransTipElem: function(c, a, b) {
                    e.removeClass(this.transTipElem.advise, "finish");
                    e.removeClass(this.transTipElem.advise, "expand");
                    e.removeClass(this.transTipElem.bottom, "OUTFOX_JTR_TRANSTIP_ADVISE_THANK_TIP");
                    this.transTipElem.toggle.innerHTML = "提交翻译建议";
                    e.css(this.transTipElem.toggle, {
                        display: ""
                    });
                    this.transTipElem.transTextContainer.value = a;
                    this.transTipElem.original.nodeValue = c;
                    this.transTipElem.index = b
                }
            }
        })(J); (function(p) {
            var n = "https://fanyi.youdao.com/web2";
            var m = "https://fanyi.youdao.com";
            var l = "/web2/conn.html";
            var q = n + "/index.do";
            var k = m + "/jtr";
            var o = n + "/rl.do";
            var j = n + "/styles/all-packed.css";
            p.loadCSS(document, j);
            window.OUTFOX_JavascriptTranslatoR = new p.TR.UI(document.body, {
                domain: m,
                update: false,
                updateTipMsg: "修复链接错误",
                updateDate: "2013-12-24",
                cssURL: j,
                tipsURL: q,
                transURL: k,
                logURL: o,
                connFilePath: l,
                reqSize: 20
            })
        })(J);
    }

})();
