// ==UserScript==
// @name                Wallhaven Enhance
// @name:zh-CN          Wallhaven 壁纸网站增强
// @description         The script for the coolest wallpaper site provides additional features, can make you more fun to find favorite pictures.
// @description:zh-CN   Wallhaven 是最酷的壁纸网站，本脚本为该网站提供了额外的功能，能让你更畅快的寻找到喜欢的图片。

// @author              Moshel
// @namespace           https://hzy.pw
// @homepageURL         https://hzy.pw/
// @supportURL          https://github.com/h2y/link-fix
// @icon                https://alpha.wallhaven.cc/favicon.ico
// @license             GPL-3.0
// @updateURL           https://github.com/h2y/link-fix/raw/master/wallhaven/wallhaven.user.js

// require             https://cdn.staticfile.org/lightgallery/1.6.12/css/lightgallery.min.css
// require             https://cdn.staticfile.org/lightgallery/1.6.12/js/lightgallery-all.min.js
// @include             https://wallhaven.cc/*
// @grant               none
// @run-at              document-end

// @date                05/02/2017
// @modified            06/06/2019
// @version             2.1.0
// ==/UserScript==


{
    // 图片类 特指列表中的图片
    class Pic {
        constructor(elem, wallhavenScript) {
            this.elem = elem;
            this.wallhavenScript = wallhavenScript;

            const $pic = $(elem);

            this.favs = parseInt( $pic.find('.wall-favs')[0].innerHTML );
            this.seen = $pic.find('figure').hasClass('thumb-seen');
            this.id = $pic.find('figure').data('wallpaper-id');
            this.isPNG = ($pic.find('span.png').length > 0);

            this.picUrl = `https://w.wallhaven.cc/full/zm/wallhaven-${this.id}.jpg`;
            if(this.isPNG)
                this.picUrl = this.picUrl.replace('.jpg', '.png');
        }

        desalt() {
            const opacity = this.wallhavenScript.desaltPicsOpacity;
            this.elem.style.opacity = opacity;
        }

        addDownload() {
            let dlDom = $(`<a class="jsDownload" href="javascript:;"> <i class="fa fa-fw fa-cloud-download"></i></a>`)[0];
            dlDom.onclick = this.download.bind(this);
            $(this.elem).find('.thumb-info').append(dlDom);
        }

        download() {
            let aDom = document.createElement('a');
            aDom.href = this.picUrl;
            aDom.download = "download";
            aDom.click();
        }

        initGallery() {
            let $pic = $(this.elem).find('figure');

            $pic.data('data-src', this.picUrl)
                .data('data-sub-html-url', 'https://wallhaven.cc/w/'+this.id );

            $pic.click( this.showGallery );
        }

        showGallery(e) {
            $('ul').lightGallery({
                selector: 'figure'
            });
            return false;
        }
    }


    class WallhavenScript {
        constructor() {
            // 部分页面中淡化对未达到点赞数量的图片
            this.desaltPics = true;
            this.desaltPicsByFavs = 10;  // 需要达到的点赞数量
            this.desaltPicsOpacity = 0.2;  // 淡化后的透明度

            // 淡化看过的图片
            this.desaltSeen = true;

            // 显示一键下载按钮
            this.download = true;

            // 图片灯箱浏览
            this.gallery = true;  // 开发中

            // 单图页面尽可能扩大图片的可视空间
            this.maxView = true;

            // 当前登录状态
            this.isLogined = ($('#userpanel > a > span.username').length > 0)
            if(!this.isLogined)
                this.desaltSeen = false;
        }

        workList() {
            this.workListMain();
            new MutationObserver( this.workListMain.bind(this) ).observe(document.body, {
                attributes: false,
                childList: true,
                subtree: true
            });
        }

        workListMain() {
            let pics = this.getPics();
            let newPics = this.filterNewPics(pics);

            for(let pic of newPics) {
                // 淡化对未达到点赞数量的图片
                if(this.desaltPics && pic.favs < this.desaltPicsByFavs)
                    pic.desalt();

                // 淡化看过的图片
                if(this.desaltSeen && pic.seen)
                    pic.desalt();

                // 显示一键下载按钮
                if(this.download)
                    pic.addDownload();

                // Gallery
                if(this.gallery)
                    pic.initGallery();
            }

            this.pics = pics;
        }

        // 单图页面
        workSingle() {
            /* 单图页面一键下载还存在问题
            if(this.download) {
                const src = $('img#wallpaper').attr('src');

                let dlDom = $(`<a id="fav-button" class="button add-button" href="${src}" download></a>`)[0];
                dlDom.innerHTML = `<a class="add-fav"><i class="fa fa-fw fa-download"></i> Download</a>`;

                $('div.sidebar-content')[0].insertBefore(dlDom, $('.sidebar-content > #fav-button')[0] );
            } */

            if(this.maxView) {
                $('#header, #searchbar').hide('fast');
                $('#showcase-sidebar').animate({top:0}, 'fast');
                $('#main').animate({borderTopWidth:0}, 'fast');
                $('#wallpaper').animate({maxWidth:'99%', maxHight:'99%'}, 'fast');
            }
        }

        getPics() {
            let elems = $('.thumb-listing-page li');
            let ret = [];

            for(let elem of elems)
                ret.push( new Pic(elem, this) );

            return ret;
        }

        filterNewPics(pics) {
            let ret = [];
            const oldElems = this.pics.map(pic=>pic.elem);

            return pics.filter( pic => {
                return (oldElems.indexOf(pic.elem) < 0);
            });
        }


        /*
            根据当前页面选择需要运行的功能，返回对应的 work 函数
         */
        run() {
            // A: 单图页面
            if(location.pathname.indexOf('/w/')==0)
                return this.workSingle();

            // B: 列表页面

            // latest pics
            else if(location.pathname == '/latest' || location.search.indexOf('sorting=date_added')>0) {
                this.desaltPics = false;
            }

            // up 主页面
            else if(location.pathname.indexOf('/user/')>=0)
                this.desaltPics = false;

            this.pics = [];
            return this.workList();
        }

    }


    new WallhavenScript().run();

} //end userScript
