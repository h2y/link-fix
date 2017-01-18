// ==UserScript==
// @name                Zhihu Link Redirect Fix
// @name:zh-CN          知乎真实链接地址重定向
// @name:zh-TW          知乎真實鏈接地址重定向
// @description         Avoid link redirect for zhihu.com
// @description:zh-CN   让知乎网页中的站外链接直接跳转至目标网址，而不经过一个二次跳转页面。重定向处理将会在点击链接瞬间自动触发
// @description:zh-TW   讓知乎網頁中的站外鏈接直接跳轉至目標網址，而不經過壹個二次跳轉頁面。重定向處理將會在點擊鏈接瞬間自動觸發

// @author              Moshel
// @namespace           https://hzy.pw
// @homepageURL         https://hzy.pw/p/2056
// @supportURL          https://github.com/h2y/link-fix
// @license             GPL-3.0
// @icon                https://pic1.zhimg.com/2e33f063f1bd9221df967219167b5de0_m.jpg
// @updateURL           https://github.com/h2y/link-fix/raw/master/zhihu_link_fix/zhihu_link_fix.user.js

// @grant               none
// @run-at              document-start
// @include             *.zhihu.com/*

// @date                06/10/2016
// @modified            01/18/2017
// @version             1.3.0.5
// ==/UserScript==


if(location.host==='link.zhihu.com') {
    let old = location.search.match(/target=(.+?)(&|$)/);
    if(old && old.length>=2)
        location.href = decodeURIComponent(old[1]);
}
else
    document.body.addEventListener('click', function(e){
        let dom = e.target,
            max_times = 3;
        while(dom && max_times--) {
            if(dom.nodeName.toUpperCase()==='A') {
                let old = dom.href;
                if( old && old.indexOf('//link.zhihu.com/?')>=0 ) {
                    old = old.match(/target=(.+?)(&|$)/);
                    if(old && old.length>=2)
                        dom.href = decodeURIComponent(old[1]);
                }
                return;
            }
            else
                dom = dom.parentNode;
        }
    });
