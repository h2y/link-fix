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

// @match               *.baidu.com/*
// @exclude             *.baidu.com/link?*
// @match               *.so.com/*
// @match               *.bing.com/*
// @match               *.zhihu.com/search?*
// @match               *.soku.com/*
// @match               *.sogou.com/*
// @match               https://*.google.com/*
// @match               https://*.google.com.hk/*
// @grant               GM_addStyle
// @grant               window.onurlchange
// @run-at              document_end

// @date                06/29/2022
// @modified            06/29/2022
// @version             1.5.0.00
// ==/UserScript==
(function () {
  // ts-check

  function soTabInit() {
    if (top !== window) {
      console.log('soTab! not top window');
      return;
    }

    // 判断搜索引擎，将仅使用hostname适配
    const sites = [
      'baidu',
      'bing',
      'so.com',
      '',
      'zhihu',
      'google',
      'soku',
      'sogou',
    ];
    const sitesName = [
      '百度',
      '必应',
      '好搜',
      'ALLSO',
      '知乎',
      '谷歌',
      '搜库',
      '搜狗',
    ];
    let siteID = -1;

    for (const site of sites) {
      if (site && location.hostname.includes(site)) {
        siteID = sites.indexOf(site);
        break;
      }
    }

    if (siteID === -1) {
      console.log("soTab can't match site.");
      return;
    }

    // 判断搜索类型，使用href适配
    let kind = [];
    // eslint-disable-next-line default-case
    switch (siteID) {
      case 0:
        kind = [
          'www.baidu',
          'image.baidu',
          'zhidao.baidu.com/search',
          'v.baidu',
          'xueshu.baidu.com/s',
        ];
        break;
      case 1: // bing
        kind = [
          '.com/search',
          '.com/images',
          '.com/knows/search',
          '.com/videos',
          '/academic/search',
        ];
        break;
      case 2:
        kind = [
          'www.so',
          'image.so',
          'wenda.so.com/search',
          'video.so',
        ];
        break;
      case 4: // zhihu
        kind = ['', '', '.com/search'];
        break;
      case 5: // google
        kind = ['', 'tbm=isch', '', 'tbm=vid', 'scholar.google'];
        break;
      case 6:
        // kind[3] = "soku";
        break;
      case 7: // sogou
        kind = [
          ['/web?', '/sogou?', 'weixin.sogou', 'english.sogou'],
          'pic.sogou',
          [
            'interation=196636',
            'mingyi.sogou',
            'wenwen.sogou',
            '.com/zhihu',
          ],
          'v.sogou',
          '.com/xueshu',
        ];
        break;
    }
    // 0:normal  1:pic  2:zhidao  3:video  4:xueshu
    let kindID = -1;
    for (let i = 0; i < kind.length; i++) {
      if (Array.isArray(kind[i])) {
        // 数组形式
        for (let j = 0; j < kind[i].length; j++) {
          if (location.href.includes(kind[i][j])) {
            kindID = i;
            break;
          }
        }
        if (kindID !== -1) break;
      } else if (location.href.indexOf(kind[i]) >= 0) {
        kindID = i;
        break;
      }
    }
    // 谷歌特殊处理
    if (siteID === 5 && kindID === -1) {
      if (location.href.indexOf('q=') >= 0) kindID = 0;
    }
    if (kindID === -1) {
      console.log('soTab! no kind found');
      return;
    }

    // 初始化搜索路径
    // "百度", "必应", "好搜", "ALLSO", "知乎", "谷歌", "搜库", "搜狗"
    let links = []; // link[siteID]
    if (kindID === 0) {
      // normal
      links = [
        'https://www.baidu.com/s?wd=',
        'https://cn.bing.com/search?q=',
        'https://www.so.com/s?q=',
        'http://h2y.github.io/allso/#',
        '',
        'https://www.google.com/search?q=',
        '',
        'https://www.sogou.com/web?query=',
      ];
    } else if (kindID === 1) {
      // pic
      links = [
        'https://image.baidu.com/search/index?tn=baiduimage&word=',
        'https://cn.bing.com/images/search?q=',
        'https://image.so.com/i?q=',
        '',
        '',
        'https://www.google.com/search?tbm=isch&q=',
      ];
    } else if (kindID === 2) {
      // zhidao
      links = [
        'https://zhidao.baidu.com/search?word=',
        'https://cn.bing.com/knows/search?q=',
        '',
        '',
        'https://www.zhihu.com/search?q=',
        '',
        '',
        'http://www.sogou.com/sogou?interation=196636&query=',
      ];
    } else if (kindID === 3) {
      // video
      links = [
        'https://v.baidu.com/v?ie=utf-8&word=',
        '',
        'https://video.so.com/v?q=',
        '',
        '',
        'https://www.google.com/search?tbm=vid&q=',
        'https://www.soku.com/v?keyword=',
      ];
    } else if (kindID === 4) {
      // xueshu
      links = [
        'https://xueshu.baidu.com/s?wd=',
        'https://cn.bing.com/academic/search?q=',
        '',
        '',
        '',
        'https://scholar.google.com/scholar?q=',
      ];
    }

    // 从url的searchParams中获取搜索关键词
    const searchParams = new URLSearchParams(location.search);
    const searchKeyWords = ['wd', 'word', 'w', 'q', 'query', 'search'];
    let searchWords = '';
    searchKeyWords.forEach((keyWord) => {
      if (searchParams.has(keyWord)) {
        searchWords = searchParams.get(keyWord);
      }
    });

    // 加载css

    const styleText = `
              .soTab {
                  position: fixed;
                  background-color: #000;
                  opacity: 0.3;
                  border-radius: 40px;
                  color: #fff;
                  padding: 15px 20px;
                  bottom: 100px;
                  height: 40px;
                  left: -320px;
                  width: 300px;
                  z-index: 9999999;
                  transition: all 400ms;
                  font-size: 14px;
              }
              .soTab:hover {
                  left: 0px;
                  opacity: 1;
                  border-radius: 10px;
                  box-shadow: 5px -5px 10px #777;
              }
              .soTab p {
                  margin: 0;
              }
              p.soTab_title {
                  font-weight: bold;
                  margin-bottom: 3px;
              }
              .soTab a {
                  color: #0cf;
                  margin-right: 25px;
              }
  
              `;
    // 生成切换框
    const bodyDOM = document.getElementsByTagName('body')[0];
    const soTabPanelDOM = document.createElement('div');
    soTabPanelDOM.id = 'soTab';
    let str = "<p class='soTab_title'>soTab 一键切换引擎：</p><p>";
    for (const link of links) {
      if (link && links.indexOf(link) !== siteID) {
        str += `<a href='${link}${searchWords}' target='_blank'>${sitesName[links.indexOf(link)]}</a>`;
      }
    }

    soTabPanelDOM.innerHTML = `${str}</p>`;
    soTabPanelDOM.className = `soTab soTab_site${siteID} soTab_kind${kindID}`;
    const oldSoTabDOM = document.getElementById('soTab');
    if (oldSoTabDOM) {
      oldSoTabDOM.remove();
    }
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      GM_addStyle(styleText);
      bodyDOM.appendChild(soTabPanelDOM);
    });
  }
  if (window.onurlchange === null) {
    // feature is supported
    window.addEventListener('urlchange', () => {
      console.log('url has changed');
      soTabInit();
    });
  }
  if (top === window) {
    console.log('init sotab here');
    soTabInit();
  }
}()); // end userScript
