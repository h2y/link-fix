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

// @include             https://alpha.wallhaven.cc/search?*
// @include             https://alpha.wallhaven.cc/latest
// @grant               none
// @run-at              document-end

// @date                05/02/2017
// @modified            05/03/2017
// @version             1.0.0
// ==/UserScript==


{
    const hidePicsWithoutFavs = 10;
    
    
    // disable hide by favs in some page
    let enableHideByfavs = true;
    if(location.pathname == '/latest' || location.search.indexOf('sorting=relevance')>0)
        enableHideByfavs = false;
    else if(location.search.indexOf('sorting=date_added')>0 && location.search.indexOf('order=desc')>0)
        enableHideByfavs = false;
    else if(location.search.indexOf('sorting=views')>0)
        enableHideByfavs = false;
        
    
    let scanedPages = 0;
    
    
    main();
    function main() {
        const $pages = $('#thumbs > section');
        if($pages.length != scanedPages) {
            scanPics( $pages[scanedPages++] );
        }
        
        setTimeout(main, 2345);
    }
    
    
    function scanPics(scanInDom) {
        const $pics = $(scanInDom).find('li');
        
        for(let i=0; i<$pics.length; i++) {
            const $pic = $( $pics[i] );
            
            //get the pic id
            const picId = $pic.find('figure').data('wallpaper-id');
            
            //hide by favs 
            if(enableHideByfavs) {
                const $favs = $pic.find('.wall-favs'),
                    favs = parseInt($favs[0].innerHTML);
                if(favs < hidePicsWithoutFavs)
                    $pic.animate({opacity:.2}, 'fast');
            }
            
            //create download button
            $pic.find('.thumb-info').append(`<a class="jsDownload" href="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-${picId}.jpg" download>
                <i class="fa fa-fw fa-cloud-download"></i>
                </a>`);
        }
    }
    
} //end userScript
