// ==UserScript==
// @name                Sort by Sales in Taobao
// @name:zh-CN          淘宝销量排序
// @name:zh-TW          淘寶銷量排序
// @description         In Tmall or Taobao, automatically for you first choice [by sales order]. Convenient and practical!
// @description:zh-CN   在淘宝天猫浏览商品时，自动为你首选 [按销量排序]。方便实用！
// @description:zh-TW   在淘寶天貓瀏覽商品時，自動為妳首選 [按銷量排序]。方便實用！

// @authuer             Moshel
// @namespace           https://hzy.pw
// @homepageURL         https://hzy.pw/p/1364
// @supportURL          https://github.com/h2y/link-fix
// @icon                https://hzy.pw/wp-content/uploads/2015/08/i-300x300.jpg
// @license             GPL-3.0
// @updateURL           https://github.com/h2y/link-fix/raw/master/taobao_sort/taobao_sort.user.js

// @include             /^https?://s.taobao.com/search\?.+/
// @include             /^https?://list.tmall.com/search_product.htm\?.+/
// @grant               none
// @run-at              document-start

// @date                08/05/2015
// @modified            06/11/2016
// @version             1.4.2
// ==/UserScript==


! function() {
    "use strict";

    var href = location.search;

    /* 天猫搜索 */
    if (location.hostname === "list.tmall.com" && href.indexOf("sort=") < 0)
        href += "&sort=d";
    /* 淘宝搜索 */
    else if (location.hostname === "s.taobao.com" && href.indexOf("sort=") < 0)
        href += "&sort=sale-desc";
    /* 天猫淘宝店铺内搜索&分类浏览
    else if (location.search && href.indexOf("orderType=") < 0)
        href += "&orderType=hotsell_desc"; */
    else
        return;

    /* 进行跳转 */
    if (href !== location.search)
        location.search = href;

}();
