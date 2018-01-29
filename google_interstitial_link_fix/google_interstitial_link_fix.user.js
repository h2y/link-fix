// ==UserScript==
// @name                跳过谷歌网页风险提醒
// @name:zh-TW          跳過谷歌網頁風險提醒
// @description         在谷歌搜索中，点击链接后常常会提示“警告 - 访问此网站可能会损害您的计算机！”的页面，往往我们都是选择离开。但问题是这个页面并不给我们继续访问的选择，我们只能复制链接到地址栏才能打开想要看的页面。而这个脚本为你添加了一键继续访问的按钮。
// @description:zh-TW   在谷歌搜索中，點擊鏈接後常常會提示“警告 - 訪問此網站可能會損害您的計算機！”的頁面，往往我們都是選擇離開。但問題是這個頁面並不給我們繼續訪問的選擇，我們只能復制鏈接到地址欄才能打開想要看的頁面。而這個腳本為你添加了一鍵繼續訪問的按鈕。

// @author              Moshel
// @namespace           https://hzy.pw
// @homepageURL         https://hzy.pw/
// @supportURL          https://github.com/h2y/link-fix
// @license             GPL-3.0

// @icon                https://favicon.yandex.net/favicon/google.com
// @updateURL           https://github.com/h2y/link-fix/raw/master/google_interstitial_link_fix/google_interstitial_link_fix.user.js
// @include             https://www.google.*/interstitial?*

// @grant               none
// *run-at              document-start
// @version             1.0.0
// @modified            29/01/2018
// ==/UserScript==


!function () {
    let regRet = location.search.match(/url=(.+?)($|&)/);
    if(regRet.length<2)
        return 1;
    const url = regRet[1];

    let ulDom = document.querySelector('body > div._kge > ul');
    let newLi = document.createElement("li");
    newLi.innerHTML = `我已明白风险，<a href="${url}">继续访问该网页</a>。`;
    ulDom.append(newLi);
}();
