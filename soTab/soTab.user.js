// ==UserScript==
// @name                soTab - Search Engine Switcher
// @name:zh-CN          搜索引擎一键切换 soTab
// @name:zh-TW          搜索引擎壹鍵切換 soTab
// @description         Add links to each other in search engines. Including multiple search modes.
// @description:zh-CN   在常用的搜索引擎页面中添加互相切换的按钮，包括图片、视频、知道、学术搜索。
// @description:zh-TW   在常用的搜索引擎頁面中添加互相切換的按鈕，包括圖片、視頻、知道、學術搜索。

// @author              Moshel
// @namespace           http://hzy.pw
// @homepageURL         http://hzy.pw/p/1849
// @supportURL          https://github.com/h2y/link-fix
// @icon                http://q.qlogo.cn/qqapp/100229475/F1260A6CECA521F6BE517A08C4294D8A/100
// @updateURL           https://github.com/h2y/link-fix/raw/master/soTab/soTab.user.js
// @license             GPL-3.0

// @include             *.baidu.com/*
// @exclude             *.baidu.com/link?*
// @include             *.so.com/*
// @include             *.bing.com/*
// @include             *.zhihu.com/search?*
    // include          *.soku.com/*
// @include             *.sogou.com/*
// @include             /^https?://[a-z]+\.google\.[a-z,\.]+/.+$/
// @grant               none
// @run-at              document_end

// @date                10/30/2015
// @modified            05/04/2017
// @version             1.4.0.13
// ==/UserScript==


{


let href0 = "";

! function ajax_fixer() {
    var href = location.href;
    if (href0 != href) {
        var oldDOM = document.getElementById('soTab');
        if (oldDOM) {
            oldDOM.parentNode.removeChild(oldDOM);
        }
        soTab_init();
        href0 = href;
    }
    setTimeout(ajax_fixer, 2222);
}();


function soTab_init() {

    if (top != window) {
        console.log("soTab! not top window");
        return;
    }

    //判断搜索引擎，将仅使用hostname适配
    var site = ["baidu", "bing", "so.com", "", "zhihu", "google", "soku", "sogou"],
        siteName = ["百度", "必应", "好搜", "ALLSO", "知乎", "谷歌", "搜库", "搜狗"],
        siteID = -1;
    for (var i = 0; i < site.length; i++) {
        if (site[i] && location.hostname.indexOf(site[i]) >= 0) {
            siteID = i;
            break;
        }
    }
    if (siteID == -1) {
        console.log("soTab can't match site.");
        return;
    }

    //判断搜索类型，使用href适配
    var kind = [];
    switch (siteID) {
        case 0:
            kind = ["www.baidu", "image.baidu", "zhidao.baidu.com/search", "v.baidu", "xueshu.baidu.com/s"];
            break;
        case 1: //bing
            kind = [".com/search", ".com/images", ".com/knows/search", ".com/videos", "/academic/search"];
            break;
        case 2:
            kind = ["www.so", "image.so", "wenda.so.com/search", "video.so"];
            break;
        case 4: //zhihu
            kind = ["", "", ".com/search"];
            break;
        case 5: //google
            kind = ["", "tbm=isch", "", "tbm=vid", "scholar.google"];
            break;
        case 6:
            //kind[3] = "soku";
            break;
        case 7: //sogou
            kind = [ ["/web?", "/sogou?", "weixin.sogou", "english.sogou"],
                "pic.sogou",
                ["interation=196636", "mingyi.sogou", "wenwen.sogou", ".com/zhihu"],
                "v.sogou",
                ".com/xueshu"
            ];
            break;
    }
    //0:normal  1:pic  2:zhidao  3:video  4:xueshu
    var kindID = -1;
    for (i = 0; i < kind.length; i++) {
        if (!kind[i])
            continue;
        else if (Array.isArray(kind[i])) { //数组形式
            for (var j=0; j<kind[i].length; j++ )
                if(location.href.indexOf(kind[i][j]) >= 0) {
                    kindID = i;
                    break;
                }
            if(kindID!=-1)
                break;
        }
        else if (location.href.indexOf(kind[i]) >= 0) {
            kindID = i;
            break;
        }
    }
    //谷歌特殊处理
    if (siteID == 5 && kindID == -1) {
        if (location.href.indexOf('q=') >= 0)
            kindID = 0;
    }
    if (kindID == -1) {
        console.log("soTab! no kind found");
        return;
    }

    //console.log("soTab loaded: " + siteID + "." + kindID);

    //初始化搜索路径
    //"百度", "必应", "好搜", "ALLSO", "知乎", "谷歌", "搜库", "搜狗"
    var link = []; //link[siteID]
    if (kindID == 0) { //normal
        link = ["https://www.baidu.com/s?wd=",
            "https://cn.bing.com/search?q=",
            "https://www.so.com/s?q=",
            "http://h2y.github.io/allso/#",
            "",
            "https://www.google.com/search?q=",
            "", 
            "https://www.sogou.com/web?query="
        ];
    } else if (kindID == 1) { //pic
        link = ["https://image.baidu.com/search/index?tn=baiduimage&word=",
            "https://cn.bing.com/images/search?q=",
            "https://image.so.com/i?q=",
            "", "",
            "https://www.google.com/search?tbm=isch&q="
        ];
    } else if (kindID == 2) { //zhidao
        link = ["https://zhidao.baidu.com/search?word=",
            "https://cn.bing.com/knows/search?q=",
            "", "",
            "https://www.zhihu.com/search?q=",
            "", "", 
            "http://www.sogou.com/sogou?interation=196636&query="
        ];
    } else if (kindID == 3) { //video
        link = ["https://v.baidu.com/v?ie=utf-8&word=",
            "",
            "https://video.so.com/v?q=",
            "", "",
            "https://www.google.com/search?tbm=vid&q=",
            "https://www.soku.com/v?keyword="
        ];
    } else if (kindID == 4) { //xueshu
        link = ["https://xueshu.baidu.com/s?wd=",
            "https://cn.bing.com/academic/search?q=",
            "", "", "",
            "https://scholar.google.com/scholar?q="
        ];
    }

    //获取搜索词(get通用)
    var key;
    if (siteID == 0)
        key = (location.search.indexOf("wd=") >= 0) ? "wd" : "word";
    /*else if (siteID == 6)
        key = "keyword";*/
    else if (siteID == 7)
        key = (location.search.indexOf("query=") >= 0) ? "query" : 'w';
    else
        key = "q";
    var tmp = location.href.split(key + "=", 2);
    if (tmp.length <= 1) {
        console.log("soTab! no keyword found");
        return;
    }
    var tmp2 = tmp[1];
    tmp = tmp2.split("&", 2);
    key = tmp[0];

    //加载css
    var dom = document.createElement('style'),
        dom_body = document.getElementsByTagName("body")[0];
    dom.innerHTML = '.soTab{position:fixed;background-color:#000;opacity:.3;border-radius:40px;color:#fff;padding:15px 20px;bottom:100px;height:40px;left:-320px;width:300px;z-index:9999999;transition:all 400ms}.soTab:hover{left:5px;opacity:1;border-radius:10px;box-shadow:5px -5px 10px #777}.soTab p{margin:0}p.soTab_title{font-weight:bold;margin-bottom:3px}.soTab a{color:#0cf;margin-right:1rem}';
    dom_body.appendChild(dom);

    //生成切换框
    dom = document.createElement('div');
    dom.id = "soTab";
    var str = "<p class='soTab_title'>soTab 一键切换引擎：</p><p>";
    for (i = 0; i < link.length; i++) {
        if (i != siteID && link[i]) {
            str += "<a href='" + link[i] + key + "' target='_blank'>" + siteName[i] + "</a>";
        }
    }
    dom.innerHTML = str + '</p>';
    dom.className = "soTab soTab_site" + siteID + " soTab_kind" + kindID;
    dom_body.appendChild(dom);

}


} //end userScript
