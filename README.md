# H2y's Userscripts

这是数个独立的 UserScript 浏览器脚本，实现不同的功能，均可独立使用。共用这一个 Git 仓库。

如果你不知道浏览器脚本是什么，我的这篇文章会给与你帮助：[<使用UserScript加强你的浏览器>](https://hzy.pw/p/1872)，一定会让你受益匪浅。


## /taobao_sort

**淘宝销量排序**

在淘宝天猫浏览商品时，自动为你首选 [按销量排序]，避免被潜在的竞价排名误伤。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/14505>**

## /auto_jd

**自动京东配送**

京东为了照顾第三方入驻商家，在浏览宝贝时默认不会勾选 [京东配送]，那些第三方商家相比淘宝，不 “省” 也不 “多”，相比京东自营，不 “快” 也不 “好”，简直让人没有任何购买的理由。

所以我每次都要点 3 下，等待页面刷新 3 次，麻烦至极！于是开发了这款浏览器插件，实现了京东网浏览时，默认勾选 [京东配送] 和 [仅显示有货]，并自动按销量排序！

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/18190>**


## /zhihu_link_fix

**知乎真实链接地址重定向**

知乎网页中的站外链接会经过一次中转，使用此脚本后，将直接跳转至真实链接而非中转页面。

需要注意的是，脚本并不会在网页加载完后便转换所有的地址，只会在 **点击链接的瞬间** 才自动触发。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/20431>**


## /360so_link_fix

**360搜索真实链接地址重定向**

脚本用于修正 360 搜索结果中的链接，直接跳转至目标网址，而不经过中间的二次跳转页面，加快网站进入的速度。

脚本会在每次搜索完成后自动触发。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/20432>**


## 其他优秀的脚本推荐

- AC-Baidu：绕过百度重定向直接访问网页：<https://greasyfork.org/zh-CN/scripts/14178>
- Google：绕过搜索结果网页链接重定向：<https://greasyfork.org/zh-CN/scripts/14150>
- soTab：搜索引擎一键切换：<https://greasyfork.org/zh-CN/scripts/14856>
- 自动在中英文之间加上个空格：<https://greasyfork.org/zh-CN/scripts/2185>
