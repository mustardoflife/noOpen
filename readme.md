禁止打开某个网址的chrome小插件
----------------------------
>若要添加禁止打开的网站在manifest.json中修改文件

     "content_scripts": [{
        "matches": ["https://www.zhihu.com/"],//类似数组形式添加更多网址
        "js": ["myscript.js"]
    }]
####
    要使用,先把本文件下载到本地,然后打开chrome浏览器,更多程序->扩展程序->打开开发者模式->点击加载已解压的扩展程序即可
