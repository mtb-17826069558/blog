---
title: node学习笔记（三十八）
date: 2019-09-21
tags:
 - node.js

---

## **一、什么是NodeJS?**

1、Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

2、Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。

3、Node.js 的包管理器 npm，成为世界上最大的开放源代码的生态系统。简单的说 Node.js 就是运行在服务端的 JavaScript。
扩展；I : input即输入端口o : output即输出端口CPU与外部设备、存储器的链接和数据交换都需要通过接口设备来实现，前者称为I/O接口，后者被称为存储器接口



## **二、什么是V8引擎？**

每一个浏览器都有一个内核，内核中有引擎。引擎分为：渲染引擎(渲染DOM) 和 脚本引擎(运行脚本语言)脚本引擎中最流行的就是chrome中的V8引擎



## **三、Node可以做什么？**

1、node可以解析js代码(因为没有浏览器安全级别的限制)因此提供了许多系统级别的API

2、node可以编写独立的服务端应用，无需借助任何web服务器，可以连接文件系统，以及操作数据库

3、node一般在实际应用中用来做中间层服务器使用



注意：

在node中无法使用window对象下面的一些方法，因为node中没有DOM 和 BOM的概念，同时node中也有一些属性浏览器无法使用 例如：process global等对象

## **四、node的优点和适用的项目？**

优点：高性能、速度快、效率高 适合做高并发的项目(I/O密集型的应用)缺点：不适合做大量的运算应用(CPU密集的应用)

## **五、扩展版本号**

6.11.4第一个是大版本号第二个是小版本号第三个是补丁版本号版本问题：LTS长期稳定版本 Current最新版本 偶数为稳定版本 基础为非稳定版本



## **六、node交互模式**

**以前我们运行js必须基于浏览器这个环境，那么现在我们还可以在终端运行node的文件**

1、建立一个hellow.js文件

2、运行js文件node 文件名称

3、进入交互模式node

4、退出交互模式ctrl+d

**注意：**

node的环境下 没有dom 和bom的概念

node里面的方法有的在浏览器中也不能运行 例如 process进程

**process**

process.env是一个对象，我们可以通过其属性名来获取具体的环境变量值设定一个环境变量，以达到简单区分不同机器，从而针对生产/开发环境运行不同的效果每个系统的环境变量几乎都不一样，我们可以利用环境变量中具体某个特定的值来区分不同的机器set:set命令作用主要是显示系统中已经存在的shell变量，以及设置shell变量的新变量值process.argv:获取命令行参数返回值是一个数组参数1：node的绝对路径参数2：文件的绝对路径参数3:...arg
__filename:获取当前运行文件的目录，绝对路径__dirname：当前运行文件的绝对路径

## **七、创建一个简单的服务器**

1、require:引入相应模块

2、createServer():创建服务器

3、listen:绑定端口号 参数2个 第一个参数端口号 第二个参数地址

4、request,response：接受和响应数据

```js
//1、引入http模块
     var http = require("http");
//2、创建服务器
     http.createServer(function(request,response){
          //发送HTTP头部
          //状态值为200
          //内容类型：text/plain
         response.writeHead(200,{"Content-type":text/plain});
          //发送相应数据 
         response.end("hellow") 
     }).listen(8888);
     //终端打印信息
     console.log("Server running at http://127.0.0.1:8888/");
```

**content-type:类型**

1、text/plain:文本类型

2、text/html:html文档

3、image/* :图片类型

4、 application/x-javascript ：javascript类型

5、text/css : css类型

6、application/json; charset=utf-8



## **八、request&&response常用的属性**

req:包含请求的信息，例如请求头等

req.url:请求的地址

req.method:请求的方式

req.header：请求头

res:服务器的响应

res.statusCode:设置状态码

res.setHeader():设置响应头，其他

Content-type：是设置浏览器相应数据的类型

res.writeHead()；statusCode与setHeader的综合写法res.write():写入响应数据,只能写入字符串

res.end():结束响应，并返回数据

## **九、node中模块的分类**

1、node核心模块，require可以直接引入

2、自定义模块：需要自己写的模块 用module.exports导出 require引入

3、第三方模块：通过npm install 来安装 然后在require引入



## **十、什么是模块化？**

模块化是将一个功能拆分成若干个小功能的方法**优点：**代码复用、便于维护模块化划分的原则：1、功能复用次数较多2、功能逻辑较为独立**扩展：****什么是高内聚、低耦合?**高内聚：代表模块的独立性、独立性越强、内聚度越高耦合度：模块之间的关系，关系越紧密、耦合度越高

现有的模块化规范：

AMD CMD COMMON ES6module

前端 前端 后端 前后端

require sea.js Node js引擎

异步 异步 同步 同步

## **十一、npm**

**1、什么是npm？**

npm是node的包管理仓库npm是一个网站npm是一个命令



**2、npm 常用命令**

查看版本 npm -v

安装模块 npm install <module name>

全局安装 npm install <module name> -g

卸载模块 npm uninstall <module name>

更新模块 npm update <module name>

搜索模块 npm search <module name>

清除缓存 npm cache clear

查看包信息 npm info 

<包名>查看包文档 npm docs 

<包名>查看包版本信息 npm info 

<包名> versions

安装指定版本 npm install

<包名>@版本号 -S查看全局安装目录 npm root -g

修改存储目录 npm config set prefix "d\xxxx"



**3、扩展nrm:**

1、安装nrm: npm install nrm -g

2、查看可用的源：nrm ls

3、切换源：nrm use 源的名字

4、添加公司私有源 nrm add <源名称> [http://xxxxx](https://link.zhihu.com/?target=http%3A//xxxxx/)

## **十二、如何自己写的包上传到npm**

1、注册一个npm账号 进行账号邮箱验证

2、npm init name值一定要是全网唯一的

3、当输入npm init时 会帮你在文件夹下建立一个package.json文件 当有这个文件的时候就代表你的目录已经是一个包了

4、注册npm adduser 注意密码是不可见的

5、登录 npm login

6、npm publish 上传文件

7、下载文件 npm install 文件名

## **十三、yarn简介**

**1、npm的缺点:**

1、包是同步下载的 速度非常慢2、在一个项目中下载完成后在另一个项目中还要继续下载



**2、yarn的优点：**

1、包下载是异步的比npm快2、yarn有效的保证版本号不容易出错3、yarn本地包会有缓存，安装本地包会非常快



**3、yarn的常用命令：**

npm install yarn -g 安装yarnnpm install nrm -g 安装nrmnrm ls 查看可用源nrm use 源名 切换源yarn init == npm inityarn global add <name> == npm install -g <name>yarn global bin == npm -g binyarn add 包名 == npm install 包名 --saveyarn add 包名 -dev == npm install 包名 --dev-saveyarn update 包名 == npm undate 包名 更新包yarn remove 包名 == npm uninstall 包名 删除包yarn bin 全局安装目录yarn cache ls 查看缓存yarn clear 清除缓存yarn install 安装所有包







**十四、开发环境、测试环境、生产环境的**

1、开发环境：项目尚且在编码阶段，我们的代码一般在开发环境中 不会在生产环境中，生产环境组成：操作系统 ，web服务器 ，语言环境。 php 。 数据库 。 等等
2、测试环境：项目完成测试，修改bug阶段
3、生产环境：项目数据前端后台已经跑通，部署在阿里云上之后，有客户使用，访问，就是网站正式运行了。
三个环境也可以说是系统开发的三个阶段：开发->测试->上线

**save && --save-dev的区别**

可分别将依赖（插件）记录到package.json中的dependencies和devDependencies下面。
dependencies下记录的是项目在运行时必须依赖的插件，常见的例如react jquery等，即及时项目打包好了、上线了，这些也是需要用的，否则程序无法正常执行
devDependencies下记录的是项目在开发过程中使用的插件，一旦项目打包发布、上线了之后，devDependencies中安装的东西就都没有用了
如果模块是在开发环境中使用，那么我们安装依赖的时候需要--dev