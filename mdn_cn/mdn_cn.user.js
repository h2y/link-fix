// ==UserScript==
// @name                MDN 首选中文
// @description         在 developer.mozilla.org 阅读文档时，自动首选中文版本，避免手动切换。

// @authuer             Moshel
// @namespace           https://hzy.pw
// @homepageURL         https://hzy.pw/
// @supportURL          https://github.com/h2y/link-fix
// @icon                http://blog.mozilla.com.tw/wp-content/uploads/mdn_logo_only_color.png
// @license             GPL-3.0
// @updateURL           https://github.com/h2y/link-fix/raw/master/mdn_cn/mdn_cn.user.js

// @include             https://developer.mozilla.org/en-US/*
// @grant               none
// @run-at              document-start

// @version             1.0.0
// @modified            02/14/2017
// ==/UserScript==



!function() {


const allowLang = 'zh-CN',
      nowLang   = 'en-US';

/*
    https://developer.mozilla.org/zh-CN/Apps/Design/Planning_your_app
    then
        nowPath = 'Apps/Design/Planning_your_app';
*/
let splitRet = location.pathname.split(nowLang+'/', 2);
if(splitRet.length!==2)
    return 'bad location :(';

const nowPath = splitRet[1];


if(document.referrer) {
    //check conditions
    let regRet = document.referrer.match(/mozilla\.org\/(.+?)\/(.*)$/);
    if(regRet.length!==3)
        return 'bad referrer :(';

    let lastLang = regRet[1],
        lastPath = regRet[2];

    if(lastPath==nowPath)
        return 'user choose the English version manually.';
}


location.href = location.href.replace(nowLang, allowLang);


}();
