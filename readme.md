禁止打开某个网址的chrome小插件
----------------------------
>若要添加禁止打开的网站,在manifest.json中修改文件

     "content_scripts": [{
        "matches": ["https://www.xxxx.com/","http://www.xxx.com"],//类似数组形式添加更多网址,网址替换成为你想要禁止的
        "js": ["myscript.js"]
    }]


####要使用,先把本文件下载到本地,然后打开chrome浏览器,更多程序->扩展程序->打开开发者模式->点击加载已解压的扩展程序即可
