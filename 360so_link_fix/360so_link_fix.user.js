// ==UserScript==
// @name                Link Redirect Fix for 360so
// @name:zh-CN          360搜索真实链接地址重定向
// @name:zh-TW          360搜索真實鏈接地址重定向
// @description         Avoid link redirect for 360 search
// @description:zh-CN   搜索结果链接修正，直接跳转至目标网址，而不经过中间的二次跳转页面
// @description:zh-TW   搜索結果鏈接修正，直接跳轉至目標網址，而不經過中間的二次跳轉頁面
// @author              Moshel
// @namespace           http://hzy.pw
// @homepageURL         http://hzy.pw/p/2056
// @license             GPL-3.0
// @icon                https://p.ssl.qhimg.com/t011a6c04685b5d3b80.png
// @grant               none
// @run-at              document_end

// @include             https://www.so.com/s?*

// @date                06/09/2016
// @modified            08/07/2016
// @version             1.0.1.1

// @supportURL          https://github.com/h2y/link-fix
// ==/UserScript==


!function() {

    var dom = null;
    function ajax_fixer() {
        var new_dom = document.querySelector('#m-result');
        if (new_dom && new_dom !== dom) {
            dom = new_dom;
            main();
        }
        setTimeout(ajax_fixer, 2222);
    }
    ajax_fixer();


    function main() {
        var num = 0,
            as = dom.querySelectorAll('a');
        for(var i=0; i<as.length; i++) {
            var old = as[i].href.match(/url=(.+?)(&|$)/);
            if(old && old.length>=2) {
                as[i].href = decodeURIComponent(old[1]);
                num++;
            }
        }
        if(num)
            console.log(num+' 条链接已重定向至真实地址');
    }

}();
