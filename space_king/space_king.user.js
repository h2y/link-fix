// ==UserScript==
// @name                空格之王 自动为中英文之间添加一个空格
// @name:zh-TW          空格之王 自動為中英文之間添加一個空格
// @description         自动替你在网页中所有的中文字和半形的英文、数字、符号之间插入空白，让文字变得美观好看。
// @description:zh-TW   自動替你在網頁中所有的中文字和半形的英文、數字、符號之間插入空白，讓文字變得美觀好看。

// @author              Moshel
// @namespace           https://hzy.pw
// @homepageURL         https://hzy.pw/
// @supportURL          https://github.com/h2y/link-fix
// @icon                https://g.alicdn.com/mm/mm-brand/0.2.2/ico/favicon.ico
// @license             GPL-3.0

// @include             *
// @exclude             /^https://www.google\..+tbm=isch/
// @exclude             https://translate.google.*
// @exclude             https://www.bilibili.com/video/*

// @require             https://cdn.jsdelivr.net/npm/pangu@4.0.7/dist/browser/pangu.min.js
// @grant               none
// *run-at              document-start
// @version             4.0.7
// @modified            07/11/2019
// ==/UserScript==


{
    let is_spacing = false;

    is_spacing = true;
    pangu.spacingPage();
    is_spacing = false;


    document.addEventListener('DOMNodeInserted', function (e) {
        if (!is_spacing) {
            is_spacing = true;
            pangu.spacingNode(e.target);
            is_spacing = false;
        }
    }, false);
}
