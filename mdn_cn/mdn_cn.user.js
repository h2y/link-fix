// ==UserScript==
// @name                MDN 首选中文
// @description         在 developer.mozilla.org 阅读文档时，自动首选中文版本，避免手动切换。

// @author              Moshel
// @namespace           https://hzy.pw
// @homepageURL         https://hzy.pw/
// @supportURL          https://github.com/h2y/link-fix
// @icon                https://blog.mozilla.com.tw/wp-content/uploads/mdn_logo_only_color.png
// @license             GPL-3.0
// @updateURL           https://github.com/h2y/link-fix/raw/master/mdn_cn/mdn_cn.user.js

// @include             https://developer.mozilla.org/en-US/*
// @grant               none
// @run-at              document-start

// @version             1.0.1
// @modified            02/21/2017
// ==/UserScript==



!function() {


const allowLang = 'zh-CN',
      nowLang   = 'en-US';

/*
    https://developer.mozilla.org/zh-CN/Apps/Design/Planning_your_app
    then
        nowPath = 'Apps/Design/Planning_your_app';
*/

//check conditions
if(document.referrer) {
    let splitRet = location.pathname.split(nowLang+'/', 2);
    if(splitRet.length!==2)
        return 'bad location :(';
    const nowPath = splitRet[1];

    let regRet = document.referrer.match(/mozilla\.org\/(.+?)\/(.*)$/);
    if(regRet.length==3) {
        let lastLang = regRet[1],
            lastPath = regRet[2];

        if(lastPath==nowPath)
            return 'user choose the English version manually.';
    }
}


location.pathname = location.pathname.replace(nowLang, allowLang);


}();
