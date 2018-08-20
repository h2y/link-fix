# H2y's Userscripts

这是数个独立的 UserScript 浏览器脚本，实现不同的功能，均可独立使用。共用这一个 Git 仓库。

如果你不知道浏览器脚本是什么，我的这篇文章会给与你帮助：[<使用UserScript加强你的浏览器>](https://hzy.pw/p/1872)，一定会让你受益匪浅。


## 有道一键网页翻译 /youdao_translate

![](https://cdn.rawgit.com/h2y/link-fix/master/youdao_translate/p2.png)

传统的网页翻译插件将网页中的所有英文转换为中文，但用过的都知道，翻译出来的中文并不通顺，对于英语水平尚可的大多数中国用户而言，阅读这样的中文并不比原本的英文轻松多少。而该翻译工具不会直接全文翻译网页，而是保留全英文，同时将网页中的难词添加上注释，有效避免了全文翻译成中文后词不达意的情况。（该工具同时也支持划词翻译、全文翻译）

> ^O^ 部分翻译：By 1860 the fort(堡垒) was remodeled(改造) into a military prison and became notorious(声名狼藉的) for incarcerating(监禁) gangsters(歹徒) including Al Capone.
>
> T.T 全文翻译：到1860年,被改造成堡军事监狱关押罪犯包括艾尔·卡彭和声名狼藉。

![](https://cdn.rawgit.com/h2y/link-fix/master/youdao_translate/p1.jpg)

来源说明：本工具由网易官方的 [有道网页翻译 2.0](http://fanyi.youdao.com/web2/) 修改而成，这是猪厂提供的很好的一个服务，感谢。但由于年久失修原服务存在很多问题，已无法使用，于是我将其修复并打包成了该 UserScript。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/371373>**


## 跳过谷歌网页风险提醒 /google_interstitial_link_fix

在谷歌搜索中，点击链接后常常会显示“警告 - 访问此网站可能会损害您的计算机！”的[页面](https://www.google.com/interstitial?url=http://bbs.tgbus.com/)，往往我们都是选择离开。但问题是这个页面并不给我们继续访问的选择，我们只能复制链接到地址栏才能打开想要看的页面。而这个脚本为你添加了一键继续访问的按钮。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/37951>**


## 空格之王 自动为中英文之间添加一个空格 /space_king

如果你跟我一样，每次看到网页上的中文字和英文、数字、符号挤在一块，就会坐立难安，忍不住想在它们之间加个空格。这个脚本正是你在网路世界走跳所需要的东西，它会自动替你在网页中所有的中文字和半形的英文、数字、符号之间插入空白。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/37950>**


## 搜索引擎一键切换 /soTab

在常用的搜索引擎页面中添加互相切换的按钮，包括图片、视频、知道、学术搜索。

虽然同类脚本这不是第一款，但这是最省资源的一款。之前有幸使用过其他类似的脚本，太重，启用后全网监控，每个网页都要固定注入一大段 JS/CSS，看着都难受，于是索性自己写了重新写了个轻量级的。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/14856>**


## 壁纸网站增强 /wallhaven

这是一个高质量的壁纸网站，本脚本增强了其使用体验，目前的功能如下：

1. 列表中淡化 star 数小于 10 的壁纸，让你更加关注于优秀的资源。
2. 在列表中为每张壁纸添加一个 \[一键保存\] 的按钮。

**网站效果预览：<https://alpha.wallhaven.cc/search?purity=110&sorting=random>**

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/29444>**


## MDN 首选中文 /mdn_cn

在 [developer.mozilla.org](https://developer.mozilla.org/zh-CN/) 阅读文档时，自动首选中文版本，避免手动切换。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/27384>**


## 网页阅读模式 /read_mode

[ALT+R] 将任何一个网页中影响您阅读的图片，视频，广告等无关内容过滤，仅查看最关注的那一部分内容。特别适合各种内容阅读型网页。同时提供将所选区域的 HTML 代码导出的功能。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/26709>**


## 淘宝销量排序 /taobao_sort

在淘宝天猫浏览商品时，自动为你首选 [按销量排序]，避免被潜在的竞价排名误伤。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/14505>**


## 自动京东配送 /auto_jd

京东为了照顾第三方入驻商家，在浏览宝贝时默认不会勾选 [京东配送]，那些第三方商家相比淘宝，不 “省” 也不 “多”，相比京东自营，不 “快” 也不 “好”，简直让人没有任何购买的理由。

所以我每次都要点 3 下，等待页面刷新 3 次，麻烦至极！于是开发了这款浏览器插件，实现了京东网浏览时，默认勾选 [京东配送] 和 [仅显示有货]，并自动按销量排序！

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/18190>**


## 知乎真实链接地址重定向 /zhihu_link_fix

知乎网页中的站外链接会经过一次中转，使用此脚本后，将直接跳转至真实链接而非中转页面。

需要注意的是，脚本并不会在网页加载完后便转换所有的地址，只会在 **点击链接的瞬间** 才自动触发。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/20431>**


## 360 搜索真实链接地址重定向 /360so_link_fix

脚本用于修正 360 搜索结果中的链接，直接跳转至目标网址，而不经过中间的二次跳转页面，加快网站进入的速度。

脚本会在每次搜索完成后自动触发。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/20432>**


## 开源说明

我编写的所有 UserScript 开源在 Github 中，地址：<https://github.com/h2y/link-fix>

欢迎大家来看看[我的更多精彩的脚本](https://github.com/h2y/link-fix/#readme)，提出你宝贵的建议，喜欢请 star :D

意见反馈请使用 Github，更方便我看到和处理：<https://github.com/h2y/link-fix/issues>

如果没有 Github 账号欢迎在我的网站中留言：<https://hzy.pw/liuyanban>


## 其他优秀的脚本推荐

写在这里，不仅方便路过的各位找到更多实用脚本。也是我作为用户对这些作者们提供的优秀作品表示的由衷感谢。

- AC-Baidu：绕过百度重定向直接访问网页：<https://greasyfork.org/zh-CN/scripts/14178>
- Google：绕过搜索结果网页链接重定向：<https://greasyfork.org/zh-CN/scripts/14150>
- 为豆瓣电影页面添加更多实用讯息：<https://greasyfork.org/zh-CN/scripts/14636>
- 拒绝二维码登录：淘宝、京东等网站默认出现账号密码登录界面：<https://greasyfork.org/zh-CN/scripts/27183>
