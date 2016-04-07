说明
-----------

这是一个简单的前端项目，在 [prompt](http://www.w3school.com.cn/jsref/met_win_prompt.asp) 内让用户输入用户名密码，根据配置判断用户身上的令牌是否过期。如果用户不存在/密码不匹配/令牌过期，则需要提示用户失败了。 如何找用户，如何校验密码，如何判断令牌过期，请看代码实现。

任务
-------
 你需要干下面这些任务

 1. 按照上面的描述和 src 下的代码，初步理解代码，补全 src/index.js 下的逻辑
 2. 使用`npm test`执行单元测试。并在 test 文件下加上单元测试，越详尽越好。详:  准确理解代码意图，给出对应测试。尽: 测试案例覆盖广，穷尽各种边界条件
 3. 执行`npm run compile`，在浏览器内打开根目录下index.html实际测试代码。 它符合你的预期吗？如果符合，写下你做了哪些测试。如果不符合，写下出问题的案例，并找到问题发生在哪里。

新手指南
--------
*ps: 老手可以跳过*

这个项目使用了nodejs搭建前端资源。 请先去[官网](https://nodejs.org/en/)下载安装。
下载安装完之后，你能在终端(windows 下的 nodejs bash, osx 下的 terminal, linux 自行咨询发行版)内输入npm这三个字母并按回车，可以看到npm的输出。
首先在目录文件下输入`npm install` 安装包依赖。之后就可以输入`npm test` 跑单元测试。也可以输入`npm run compile` 生成静态文件，在 index.html 里引用。
关于这几个命令，可以参考[这个网站](http://www.runoob.com/nodejs/nodejs-npm.html)，或者自行搜索资料。
备注：如果 `npm install`卡住了，可以使用 `npm install --registry=https://registry.npm.taobao.org`，或者其他**科学**的方式，请自行理解。

使用到的包
----

1. [browserify](http://browserify.org/) 管理 node包 依赖的工具，在代码中可以看到`require` 这个函数，这个函数里的参数就是被引用文件的相对[路径](https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths)，函数返回的是被引用文件的`module.exports`。在被引用的文件中，可以看到`module.exports = // ...` 的语句，就是文件对外输出的接口
2. [mocha](https://mochajs.org/) 单元测试库，使用`describe`, `it` 这几个全局变量来描述与组织单元测试。详情请看 官网文档
3. [uglify](http://lisperator.net/uglifyjs/) js 文件压缩工具
