# 真实链接地址重定向

这是数个独立的 UserScript 浏览器脚本，实现不同网站的链接重定向功能，均可独立使用。由于功能类似，共用这一个 Git 仓库。

如果你不知道浏览器脚本是什么，我的这篇文章会给与你帮助：[<使用UserScript加强你的浏览器>](http://hzy.pw/p/1872)，一定会让你受益匪浅。


## 知乎

Github 地址：[/zhihu_link_fix](https://github.com/h2y/link-fix/tree/master/zhihu_link_fix)

知乎网页中的站外链接会经过一次中转，使用此脚本后，将直接跳转至真实链接而非中转页面。

需要注意的是，脚本并不会在网页加载完后便转换所有的地址，只会在 **点击链接的瞬间** 才自动触发。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/20431>**


## 360 搜索

Github 地址：[/360so_link_fix](https://github.com/h2y/link-fix/tree/master/360so_link_fix)

脚本用于修正 360 搜索结果中的链接，直接跳转至目标网址，而不经过中间的二次跳转页面，加快网站进入的速度。

脚本会在每次搜索完成后自动触发。

**Greasyfork 在线安装: <https://greasyfork.org/zh-CN/scripts/20432>**


## 其他脚本推荐

下面这些脚本不是我写的，而我也没必要重复造轮子，所以在这里推荐给大家：

- **AC-Baidu：绕过百度重定向直接访问网页**：<https://greasyfork.org/zh-CN/scripts/14178>
- **Google：绕过搜索结果网页链接重定向**：<https://greasyfork.org/zh-CN/scripts/14150>
