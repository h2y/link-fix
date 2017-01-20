// ==UserScript==
// @name                Page Read Mode
// @name:zh-CN          网页阅读模式
// @name:zh-TW          網頁閱讀模式
// @description         Content reader on any page, selecting the text area automatically or manually.
// @description:zh-CN   在任何需要的页面中开启阅读模式，自动或手动选择正文区域。
// @description:zh-TW   在任何需要的頁面中開啟閱讀模式，自動或手動選擇正文區域。

// @authuer             Moshel
// @namespace           https://hzy.pw
// @@homepageURL         https://hzy.pw/p/1364
// @supportURL          https://github.com/h2y/link-fix
// @icon                https://wiki.greasespot.net/images/f/f3/Book.png
// @license             GPL-3.0
// @updateURL           https://github.com/h2y/link-fix/raw/master/read_mode/read_mode.user.js

// @include             *
// @grant               GM_setClipboard
// @@run-at              context-menu
// @require             https://cdn.staticfile.org/keymaster/1.6.1/keymaster.min.js

// @date                12/17/2015
// @modified            01/20/2016
// @version             1.0.0
// ==/UserScript==


/*
    global var
 */
let mode = 0,        //状态标记
    topNode = null,  //顶层节点
    styleNode = null,
    butNodes = null,
    zoomLevel = 1;


/*
    Tool functions
 */
function isNodeShow(node) {
    const styles = window.getComputedStyle(node);

    if(styles.display=='none' || styles.visibility=='hidden')
        return false;

    if(!parseInt(styles.height) || !parseInt(styles.height))
        return false;

    return true;
}


function nodeStyleInline(node) {
    let styleStr = '',
        styles = window.getComputedStyle(node);

    let keys = Object.keys(styles);
    for(let key of keys) {
        //if(key==='cssText')     continue;
        //if(parseInt(key)==key)  continue;
        /*if(/^(webkit|moz|ms)/.test(key))
            continue;

        if(styles[key]=='')     continue;*/

        let value = styles[key];
        key = changeStrStyle(key.replace('webkit','-webkit'));

        styleStr += key + ':' + value + ';';
    }

    node.className = '';
    node.id = '';
    node.style = styleStr;

    //child
    if(node.childElementCount)
        for(let child of node.children)
            nodeStyleInline(child);
}


// textAlign -> text-align
function changeStrStyle(str) {
    let chars = str.split('');

    for(let i=chars.length-1; i>=0; i--) {
        let ascii = chars[i].charCodeAt(0);
        if(ascii>=65 && ascii<91) {
            //A-Z
            chars[i] = '-' + String.fromCharCode(ascii+32);
        }
    }

    return chars.join('');
}


/*
    main functions
 */
function enterCliping(e) {
    mode = 1;
    e.preventDefault();

    //add style
    if(!styleNode) {
        styleNode = document.createElement('style');
        styleNode.innerHTML = `.cliper-top-node {
            box-shadow: 0 0 20px #777 !important;
            border:     3px solid red !important;
        } .read-mode-reading {
            position:   fixed   !important;
            z-index:    999970  !important;
            top:        0       !important;
            left:       0       !important;
            width:      100%    !important;
            height:     100%    !important;
            background-color: white   !important;
            overflow:         scroll  !important;
            padding:          0       !important;
            border:           0       !important;
            margin:           0       !important;
        } .read-mode-buts {
            position:   fixed;
            z-index:    999985;
            top: 2rem;  right: 1rem;
        } .read-mode-button {
            width:      54px;
            height:     54px;
            margin:     0 .5rem;
            padding:    10px 15px;
            color:      #fff;
            opacity:    .5;
            transition: 500ms;
            border-radius:      5px;
            background-color:   black;
        } .read-mode-button:hover {
            background-color:   white;
            border-radius:      0;
            box-shadow:         0 0 10px #000;
            color:              #000;
        }`;
        styleNode.id = 'read_mode';
        document.body.appendChild(styleNode);
    }

    //choose the init node
    topNode = document.body;
    let preNode = null;

    do {
        preNode = topNode;
        onDown(e);
    }while(preNode!=topNode && preNode.clientHeight*0.9 < topNode.clientHeight);
}

function quitCliping(e) {
    mode = 0;
    e.preventDefault();

    topNode.style.zoom = '';

    changeTopNode(null);

    if(butNodes)
        butNodes.style.display = 'none';

    topNode.classList.remove('read-mode-reading');
}


function buildButNodes() {
    butNodes = document.createElement('div');
    butNodes.className = 'read-mode-buts';

    let buts = [
        {
            text:    "Exit read mode",
            handler: quitCliping,
            icon:    'x'
        }, {
            text:    "Enlarge",
            handler: onEnlarge,
            icon:    '+'
        }, {
            text:    "Shrink",
            handler: onShrink,
            icon:    '-'
        }, {
            text:    "Save HTML data",
            handler: onSaveHTML,
            icon:    '↓'
        }
    ];

    for(let but of buts) {
        let newBut = document.createElement('a');
        newBut.className = 'read-mode-button';
        newBut.innerHTML = but.icon;
        newBut.title     = but.text;
        newBut.onclick   = but.handler;
        butNodes.appendChild(newBut);
    }

    document.body.appendChild(butNodes);
}


function changeTopNode(newNode) {
    if(topNode)
        topNode.classList.remove('cliper-top-node');

    if(newNode)
        newNode.classList.add('cliper-top-node');
    else
        return;

    topNode = newNode;

    //scroll
    var winH = window.screen.availHeight,
        winY = window.scrollY,
        domH = topNode.clientHeight,
        domY = topNode.getBoundingClientRect().top + winY;

    if(domH>winH)
        document.body.scrollTop = domY - 50;
    else
        document.body.scrollTop = domY - (winH-domH)/2;
}


/*
    Event handler
 */
function onEnlarge(e) {
    zoomLevel += .1;
    topNode.style.zoom = zoomLevel;
}
function onShrink(e) {
   zoomLevel -= .1;
   topNode.style.zoom = zoomLevel;
}


function onSaveHTML(e) {
    let htmlStr = '';

    let styleNodes = document.querySelectorAll('style, link[rel=stylesheet]');
    for(let node of styleNodes) {
        if(node.id == 'read_mode')
            continue;

        if(node.nodeName=="LINK")
            htmlStr += `<link rel="stylesheet" href="${node.href}">`;
        else
            htmlStr += node.outerHTML;
    }

    topNode.style.zoom = '';

    //TODO: node filter
    htmlStr += topNode.outerHTML
        .replace(/<style[^>]*>.*?<\/style>/ig, '')
        .replace(/<script[^>]*>.*?<\/script>/ig, '');

    window.GM_setClipboard(htmlStr);

    topNode.style.zoom = zoomLevel;
    alert('Copied into clipboard.');
}


function onUp(e) {
    if(!mode) return;
    e.preventDefault();

    if(topNode.parentElement)
        changeTopNode(topNode.parentNode);
}

function onDown(e) {
    if(!mode) return;
    e.preventDefault();

    if(!topNode.childElementCount)
        return;

    var scanNodes = topNode.children,
        maxNode = null;
    var maxHeight = -1;

    for(let node of scanNodes)
        if(isNodeShow(node) && node.clientHeight > maxHeight) {
            maxHeight = node.clientHeight;
            maxNode = node;
        }

    if(maxNode)
        changeTopNode(maxNode);
}

function onLeft(e) {
    if(!mode) return;
    e.preventDefault();

    let nowNode = topNode;
    for(let node=nowNode; node.previousElementSibling;) {
        node = node.previousElementSibling;
        if(isNodeShow(node)) {
            nowNode = node;
            break;
        }
    }

    if(nowNode!=topNode)
        changeTopNode(nowNode);
    //else: up
    else if (topNode.parentNode) {
        let bakNode = nowNode = topNode;

        onUp(e);
        nowNode = topNode;

        onLeft(e);
        if(nowNode==topNode)
            changeTopNode(bakNode);
        else
            onDown(e);
    }
}

function onRight(e) {
    if(!mode) return;
    e.preventDefault();

    let nowNode = topNode;
    for(let node=nowNode; node.nextElementSibling;) {
        node = node.nextElementSibling;
        if(isNodeShow(node)) {
            nowNode = node;
            break;
        }
    }

    if(nowNode!=topNode)
        changeTopNode(nowNode);
    //else: up
    else if (topNode.parentNode) {
        let bakNode = nowNode = topNode;

        onUp(e);
        nowNode = topNode;

        onRight(e);
        if(nowNode==topNode)
            changeTopNode(bakNode);
        else
            onDown(e);
    }
}


function onEnter(e) {
    if(!mode) return;
    e.preventDefault();

    quitCliping(e);

    topNode.classList.add('read-mode-reading');

    topNode.style.zoom = 1.2;
    zoomLevel = 1.2;

    //buttons
    if(butNodes)
        butNodes.style.display = '';
    else
        buildButNodes();
}


/*
    Main
 */
console.log(window.key);
window.key('alt+r', function(){
	console.log('reading');
	if(mode)      
		quitCliping(new MouseEvent("main"));
	else         
		enterCliping(new MouseEvent("main"));	
});


/*
    bind action
 */
window.key('up', onUp);
window.key('down', onDown);
window.key('left', onLeft);
window.key('right', onRight);

window.key('enter', onEnter);
window.key('esc', quitCliping);
