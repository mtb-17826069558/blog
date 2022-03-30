<!--  -->
# node学习笔记（四十一）

## **一、手动封装body-parser中间件 cookie-parser中间件**

**1、封装axios请求方式**

**body-parser**

```js
const qs = require("querystring");
var bodyparse = (function bodyparse() {
    function common(type) {
        return (req, res, next) => {
            let contentType = req.headers["content-type"];
            if(contentType == "application/json" || contentType == "application/x-www-form-urlencoded"){
                let str = "";
                req.on("data",(data)=>{
                    str+=data;
                })
                req.on("end",()=>{
                    if(contentType == "application/json"){
                        req.body = JSON.parse(str);
                        next();
                    }else if( contentType == "application/x-www-form-urlencoded"){
                        req.body = qs.parse(str);
                        next();
                    }
                    next();
                })
            }else{
                next();
            }
        }
    }
    //解析appliaction/json
    function json() {
        let type = "json"
        return common(type)
    }
    //解析appliaction/x-www-form-urlencoded
    function urlencoded() {
        let type = "urlencoded";
        return common(type)
    }
    return { json, urlencoded }
})()
module.exports = bodyparse;
```

**cookie-parser**

```js
const cookieparse = function(){
    return (req,res,next)=>{
        let cookies = req.headers.cookie;
        let obj = cookies.split("; ").reduce((prev,curr)=>{
            var key = curr.split("=")[0];
            var val = curr.split("=")[1];
            prev[key] = val;
            return prev;
        },{})
        req.headers.cookie = obj;
        next();     
    }
}
module.exports = cookieparse;
```



## **二、express原理解析**

**1、app.use的作用以及实现**

```js
const http = require("http")
const url = require("url");
const path = require("path");
const fs = require("fs");
const express = () => {
    //将所有注册的事件添加到routesMap中去
    var routesMap = {
        get: {
        },
        post: {
        }
    }
    //app这个函数中做的执行
    var app = function (req, res) {
        //获取用户请求的路径
        var pathname = url.parse(req.url).pathname;
        //获取用户请求的方式
        var method = req.method.toLowerCase();
        if (pathname !== "/favicon.ico") {
            //next函数用来执行下一个中间件
            var next = function () {
                var handle;
                //执行是没有路径的函数
                while (handle = routesMap.all.shift()) {
                    handle(req, res, next)
                }
            }
            next();
            //执行app.use带路径的函数  
            for (var key in routesMap) {
                //判断路径是否与用户请求的路径相同
                if (key === pathname) {
                    routesMap[key](req, res, next);
                    break;
                }
            }
            //判断用户是否是get请求
            if (method == "get") {
                //如果是get请求则找到get请求相对应得路径 执行对应的函数
                for (var key in routesMap.get) {
                    if (key == pathname) {
                        routesMap.get[key](req, res, next);
                        break;
                    }
                }
            } else if (method == "post") {
            }
        }
    }
    //注册事件
    app.use = function () {
        //判断use中的第一个参数是路径还是一个函数
        if (typeof arguments[0] === "string") {
            routesMap[arguments[0]] = arguments[1]
        } else if (typeof arguments[0] === "function") {
            //建议all这个key值写成Symbol
            if (!routesMap.all) {
                routesMap.all = [];
            }
            routesMap.all.push(arguments[0]);
        }
    }
    //注册事件
    app.get = function (path, callback) {
        routesMap.get[path] = callback;
    }
    //创建服务
    app.listen = function (port, callback) {
        http.createServer(app).listen(port, callback)
    }
    return app;
}
//静态资源访问
express.static = function (staticPath) {
    function getFile(filePath) {
        return fs.readFileSync(filePath);
    }
    return (req, res) => {
        var { pathname } = url.parse(req.url, true);
        //获取文件的后缀
        var ext = pathname.substring(pathname.lastIndexOf("."));
        if (pathname === "/") {
            res.writeHead(200, { "content-type": "text/html;charset=utf8" });
            res.end(getFile(path.join(staticPath, "index.html")))
        } else if (ext === ".css") {
            res.writeHead(200, { "content-type": "text/css;charset=utf8" });
            res.end(getFile(path.join(staticPath, pathname)));
        } else if (ext === ".js") {
            res.writeHead(200, { "content-type": "application/x-javascript;charset=utf8" });
            res.end(getFile(path.join(staticPath, pathname)));
        } else if (/.*\.(jpg|png|gif)/.test(ext)) {
            res.writeHead(200, { "content-type": `image/${RegExp.$1};charset=utf8` });
            res.end(getFile(path.join(staticPath, pathname)));
        } else if (ext === ".html") {
            res.writeHead(200, { "content-type": "text/html;charset=utf8" });
            res.end(getFile(path.join(staticPath, pathname)));
        }
    }
}
module.exports = express;
```

## **三、express-generator生成器以及代码解析**

**1、app.js解析**

**2、www文件解析**

**3、ejs的基本使用**

用<% … %> 开始符和结束符之间写js代码用<%= … %>输出变量数据 变量若包含 '<' '>' '&'等字符 会被转义用<%- … %>输出变量（html的解析前面需要加-） 不转义用<%- include('user/show') %>引入其他模板 *包含 ./user/show.ejs*用<%# some comments %>来注释，不执行不输出<%% 转义为 '<%'<% ... -%> 删除新的空白行模式?<%_ … _%> 删除空白符模式开始符和结束符内部不可以嵌套

## **四、前端渲染和后端渲染的区别**

后端渲染HTML的情况下，浏览器会直接接收到经过服务器计算之后的呈现给用户的最终的HTML字符串，这里的计算就是服务器经过解析存放在服务器端的模板文件来完成的，在这种情况下，浏览器只进行了HTML的解析，以及通过操作系统提供的操纵显示器显示内容的系统调用在显示器上把HTML所代表的图像显示给用户。前端渲染就是指浏览器会从后端得到一些信息，这些信息或许是适用于题主所说的angularjs的模板文件，亦或是JSON等各种数据交换格式所包装的数据，甚至是直接的合法的HTML字符串。这些形式都不重要，重要的是，将这些信息组织排列形成最终可读的HTML字符串是由浏览器来完成的，在形成了HTML字符串之后，再进行显示

## **五、用所学的express生成器+ejs做一个简单的列表页**

## **六 、socket的基本使用**

**1、什么是socket?**

网络上两个程序通过一个双向的通信连接实现数据交换，这个连接的一端称为socket

**2、http请求与socket的区别**

1、在以前我们实现数据交换已经有了HTTP协议,为什么还要学习socket？ 回顾：当输出[www.baidu.com](https://zhuanlan.zhihu.com/www.baidu.com)

的时候浏览器执行了那些操作？2、http通信的
特点：1、连接属于非持久性连接:TCP的三次握手2、客户端只能访问服务端，服务端无法访问客户端，属于单项通信
TCP三次握手： TCP三次握手过程中不传递数据,只为同步连接双方的序列号和确认号传递数据，在握手后服务端和客户端才开始传输数据，在理想状态下，TCP连接一旦建立，在通信的双方中任何一方主动断开连接之前TCP连接会一直保持下去。
socket通信特点:1、持久性连接2、双向通信，客户端能访问服务端，服务端也能访问客户端
socket是对TCP/IP协议的封装，socket只是一个接口而不是一个协议，通过Socket我们才能使用TCP/IP/UDP协议



**3、通过node内置模块net实现简单版聊天**

1、socket连接需要由2个节点：（1）clientSocket（2）serverSocket2、文本流：readline

```js
const net = require("net");
const server = net.createServer();
const clients = [];
//当有人连接服务端的时候回触发当前函数
server.on("connection",(client)=>{
    //给每一个用户添加一个唯一的标识
    client.id = clients.length;
    clients.push(client);
    //将客户端的消息转发给所有的用户
    client.on("data",(data)=>{
        clients.forEach(item=>{
            //判断用户是否存在
            if(item) item.write("服务端:"+data);
        })
    })
    //判断用户是否退出群聊
    client.on("close",()=>{
        clients[client.id] = null;    
    })
})
server.listen(9000);
const net = require("net");
const client = new net.Socket();
//创建I/o模型 创建出入和输出流
const readline = require("readline");
//创建
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})
//客户端连接服务端
client.connect(9000, () => {
    client.on("data", (data) => {
        console.log(data.toString());
    })
})
//获取终端的内容将内容转发到服务端
rl.on("line", (val) => {
    client.write(val);
})
```

## **七、webSocket的基本使用**

```html
const WebSocket = require('ws');
//创建服务
const server = new WebSocket.Server({ port: 9000 });
//监控用户连接
server.on('connection', (client,req)=>{
   var ip = req.connection.remoteAddress;
    //监听客户端传递到服务端的消息
    client.on('message', (data)=>{
        //将消息转发给所有的用户
        server.clients.forEach((item)=>{
            //判断用户是否是连接的状态
            if (item.readyState === WebSocket.OPEN) {
                item.send(ip+":"+data);
            }
        });
    });
});
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <input type="text" id="txt">
    <button id="btn">点击</button>
    <ul id="list"></ul>
</body>
</html>
<script>
    var client = new WebSocket("ws://10.60.15.150:9000");
    var txt = document.getElementById("txt");
    var list = document.getElementById("list");
    var btn = document.getElementById("btn");
    //接受服务端消息  onmessage
    client.onmessage = function(e){
       var li = document.createElement("li");
       li.innerText = e.data;
       list.appendChild(li);
       li.scrollIntoView();
    }
    //向服务端发送消息 send
    btn.onclick = function(){
        var val = txt.value;
        client.send(val);
        txt.value = "";
    }
</script>
```



## **八、**[**http://****socket.io**](https://link.zhihu.com/?target=http%3A//socket.io)**的基本使用**

```js
var express = require('express')
var app = express();
//文件在服务器运行
var http = require('http')
var server = http.createServer(app);
var path = require("path")
//因为我们要做持久性通信 因此不能够用http连接 http连接与socket.io进相关联
var io = require("socket.io")(server);
app.use(express.static(path.join(__dirname,"./public")))
//当用户连接的时候触发的函数
io.on('connection', (socket)=>{
    console.log('a user connected');
    //接受客户端消息 将消息转发给所有用户
    socket.on("sendMessage",(mes)=>{
        io.emit("message",mes)
    })
    //当用户断开连接的时候
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});
server.listen(3000, function(){
  console.log('listening on *:3000');
});
```



## **九、利用websocket实现一个聊天室**

1、多人聊天2、图片发送3、表情发送

```html
var express = require('express')
var app = express();
//文件在服务器运行
var http = require('http')
var server = http.createServer(app);
var path = require("path")
//因为我们要做持久性通信 因此不能够用http连接 http连接与socket.io进相关联
var io = require("socket.io")(server);
app.use(express.static(path.join(__dirname,"./public")))
var users = [];
//当用户连接的时候触发的函数
io.on('connection', (socket)=>{
    //监听用户连接
    socket.on("system",(username,type)=>{
        if(users.includes(username)){
            socket.emit("login",0)
        }else{
            socket.userIndex = users.length;
            socket.username = username;
            users.push(username);
            io.emit("login",1,username)
        }
    })
    socket.emit("userList",users);
    socket.on("ClientsendMessage",(usename,message)=>{
        socket.broadcast.emit("serverSendMessage",usename,message)
    })
    socket.on("sendImg",(username,base64Img)=>{
        socket.broadcast.emit("serverSendImg",usename,base64Img)
    })
});
server.listen(3000, function(){
  console.log('listening on *:3000');
});
<!doctype html>
<html>
<head>
    <title>Socket.IO chat</title>
    <link rel="stylesheet" href="./css/iconfont/iconfont.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ul,li{ list-style: none; }
        html, body { font: 13px Helvetica, Arial; height: 100%; }
        form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
        form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
        form button {  width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
        #messages { list-style-type: none; margin: 0; padding: 0; }
        #messages li { padding: 5px 10px; }
        #messages li:nth-child(odd) { background: #eee; }
        #action { width: 100%; height: 30px; display: flex; align-items: center; }
        #action input[type='color'] { width: 40px; height: 30px; }
        #upload, #fontColor { width: 40px; height: 30px; position: relative; }
        #action input[type='file'],
        #fontColor input[type="color"] { width: 40px; height: 30px; position: absolute; left: 0%; top: 0; opacity: 0; z-index: 5;}
        #action i, #fontColor i { width: 100%; height: 100%; position: absolute; left: 0; top: 0; color: #fff; font-size: 20px;}
        #mask {  width: 100%; height: 100%; background: rgba(0, 0, 0, .3); position: absolute; z-index: 10;}
        #content{ width: 100%; height: 100%; display: flex; justify-content:space-between;}
        #content ul:nth-child(2){ width:200px; height: 100%; border-left:1px solid #ccc; }
        #userList { overflow: scroll; }
        #userList li{ line-height: 30px; border-bottom: 1px solid #bbb; width:100%; }
        .userDate{ color: green; line-height: 20px; font-size:18px; }
        .userInfo{ color: #000; line-height: 20px; font-size:14px; }
        #messages>div{ min-height: 60px; }
        #system{ color: #c33; font-size:18px; }
    </style>
</head>
<body>
    <div id="mask"></div>
    <div id="content">
        <ul id="messages"></ul>
        <ul id="userList">
            <li>用户列表</li>
        </ul>
    </div>
    <form id="form">
        <div id="action">
            <div id="fontColor">
                <input type="color">
                <i class="iconfont">&#xec85;</i>
            </div>
            <div id="upload">
                <input type="file" id="file">
                <i class="iconfont">&#xe674;</i>
            </div>
            <ul></ul>
        </div>
        <input id="m" autocomplete="off" />
        <input type="submit" value="提交">
    </form>
</body>
</html>
<script src="/socket.io/socket.io.js"></script>
<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
<script src="./js/index.js"></script>
```

index.js

```js
class SocketAlley {
    constructor() {
        this.mask = $("#mask");
        this.userListEl = $("#userList");
        this.messages = $("#messages");
        this.socket = io();
        this.init();
    }
    init() {
        if (!sessionStorage.getItem("status")) {
            this.username = window.prompt("请输入您的姓名");
            if (this.username) {
                sessionStorage.setItem("status", this.username);
                //当用户连接进来的时候通知服务器
                this.socket.emit("system", this.username, "login")
                //检测是否连接成功
                this.socket.on("login", (data, username) => {
                    if (data == 1) {
                        alert("连接成功");
                        this.mask.hide();
                        //全局通知
                        var div = $("<div class='system'></div>");
                        var str = username + "进入聊天室"
                        div.text(str);
                        this.messages.append(div);
                    } else {
                        alert("用户名重复请求重新编写");
                    }
                })
            }
        } else {
            this.mask.hide();
            this.username = sessionStorage.getItem("status");
            this.socket.on("login", (data, username) => {
                //全局通知
                var div = $("<div class='system'></div>");
                var str = username + "进入聊天室"
                div.text(str);
                this.messages.append(div);
            })
        }
        this.userList();
        this.serverMessage();
        this.userSendInfo();
        this.sendImg();
    }
    userList() {
        this.socket.on("userList", this.handleUserListSucc.bind(this))
    }
    handleUserListSucc(data) {
        data.forEach(this.handleUserListEach.bind(this))
    }
    handleUserListEach(item) {
        var li = $("<li></li>");
        li.text(item);
        this.userListEl.append(li);
    }
    userSendInfo() {
        $("#form").on("submit", this.handleUserSendInfo.bind(this))
    }
    handleUserSendInfo(e) {
        e.preventDefault();
        var val = $("#m").val();
        this.infoStyle(this.username, val);
        //向服务端发送消息
        this.socket.emit("ClientsendMessage", this.username, val);
    }
    serverMessage() {
        this.socket.on("serverSendMessage", (username, message) => {
            this.infoStyle(username, message);
        })
        this.socket.on("serverSendImg", (username, message) => {
            this.infoImg(username, message);
        })
    }
    infoImg(username, message) {
        var parentDiv = $("<div></div>");
        var childDiv = $("<div class='userDate'></div>");
        var contentDiv = $("<div class='userInfo'></div>");
        var d = new Date();
        if (/(\d{2}:\d{2}:\d{2})/.test(d)) {
            childDiv.text(username + RegExp.$1);
            var img = $("<img/>");
            img.attr("src",message);
            contentDiv.append(img);
            parentDiv.append(childDiv);
            parentDiv.append(contentDiv)
            this.messages.append(parentDiv);
            parentDiv[0].scrollIntoView();
        }
    }
    infoStyle(username, message) {
        var parentDiv = $("<div></div>");
        var childDiv = $("<div class='userDate'></div>");
        var contentDiv = $("<div class='userInfo'></div>");
        var d = new Date();
        if (/(\d{2}:\d{2}:\d{2})/.test(d)) {
            childDiv.text(username + RegExp.$1);
            contentDiv.text(message);
            parentDiv.append(childDiv);
            parentDiv.append(contentDiv)
            this.messages.append(parentDiv);
            parentDiv[0].scrollIntoView();
        }
    }
    sendImg() {
        $("#file").on("change", this.sendImgCb.bind(this))
    }
    sendImgCb() {
        var _this = this;
        //只能从原生JS中拿到file对象
        var file = $("#file")[0].files[0];
        //将file对象转换dataurl(base64的文件形式)
        var fileReader = new FileReader()
        fileReader.onload = function (e) {
            _this.socket.emit("sendImg", _this.username, e.target.result);
            _this.infoImg(_this.username, e.target.result)
        }
        //将file转换成dataUrl的形式
        fileReader.readAsDataURL(file);
    }
}
new SocketAlley();
```



## **十、利用socket实现一个简单版的多人点餐功能**

```js
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")))
io.on("connection", (socket) => {
    socket.on('add', (data) => {
        socket.broadcast.emit("serverAdd",data);
    })
    socket.on('reducer', (data) => {
        socket.broadcast.emit("serverReducer",data);
    })
})
server.listen(9000)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./css/reset.css">
    <style>
        #goodsList {
            width: 100%;
            height: 100%;
            padding: .1rem;
        }
        .goodsItem {
            display: flex;
            width: 100%;
            padding: .2rem;
        }
        .goodsItem>div:nth-child(1) {
            margin-right: .2rem;
        }
        .goodsItem img {
            width: 2rem;
            height: 2.5rem;
        }
        .goodsDes {
            flex: 1;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        .goodsDes>div:nth-child(3) {
            display: flex;
        }
        .goodsDes>div:nth-child(3) .reducer {
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background: #ccc;
            color: #fff;
            font-size: 16px;
        }
        .goodsDes>div:nth-child(3) .add {
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background: #ccc;
            color: #fff;
            font-size: 16px;
        }
        .goodsDes>div:nth-child(3) input {
            width: 80px;
            height: 30px;
            border: 0;
        }
    </style>
</head>
<body>
    <!-- 
    1、需求评审
    2、(需求肯定出来了)前后端开会->定义接口(后端为主 前端为辅) 你写代码的速度 * 需求的难易程度 * 1.5 = 模块开发的时间 cnpm install json-server -g json-server中的增删改查 查：GET 增：POST 删：delete
    改：patch -->
    <div id="goodsList">
    </div>
</body>
</html>
<script src="/socket.io/socket.io.js"></script>
<script src="https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script>
    class Goods {
        constructor() {
            this.socket = io();
        }
        init() {
            this.getGoods();
            this.watchServer();
        }
        getGoods() {
            $.ajax({
                type: "get",
                url: "http://localhost:3000/data",
                success: this.handleGetGoodsSucc.bind(this)
            })
        }
        handleGetGoodsSucc(data) {
            var str = "";
            for (var i = 0; i < data.length; i++) {
                str += `<div class="goodsItem" data-id="${data[i].id}">
            <div>
                <img src="${data[i].goodsPic}" >
            </div>
            <div class="goodsDes">
                <div>${data[i].goodsName}</div>
                <div>单价:<span data-price="${data[i].price}">${data[i].price}</span>$</div>
                <div>
                    <div class="reducer">-</div>
                    <input type="text" value="${data[i].num}">
                    <div class="add">+</div>
                </div>
            </div>
        </div>
                `
            }
            $("#goodsList").html(str);
            this.add();
            this.reducer();
        }
        add() {
            $(".add").each(this.handleAddEach.bind(this))
        }
        handleAddEach(index) {
            $(".add").eq(index).on("click", this.handleAddCb.bind(this, index))
        }
        handleAddCb(index) {
            var n = $(".add").eq(index).prev().attr("value");
            var id = $(".add").eq(index).parent().parent().parent().attr("data-id");
            n++;
            $(".add").eq(index).prev().attr("value", n);
            var price = $(".add").eq(index).parent().parent().find("div").eq(1).find("span").attr("data-price");
            $(".add").eq(index).parent().parent().find("div").eq(1).find("span").text(price * n)
            //socket部分
            this.socket.emit("add", { id: id, num: n });
        }
        reducer() {
            $(".reducer").each(this.handleReducerEach.bind(this))
        }
        handleReducerEach(index) {
            $(".reducer").eq(index).on("click", this.handleReducerCb.bind(this, index))
        }
        handleReducerCb(index) {
            var n = $(".reducer").eq(index).next().attr("value");
            var id = $(".reducer").eq(index).parent().parent().parent().attr("data-id");
            if (n == 1) {
                n = 1;
            } else {
                --n;
                this.socket.emit("reducer", { id: id, num: n });
            }
            $(".reducer").eq(index).next().attr("value", n);
            var price = $(".reducer").eq(index).parent().parent().find("div").eq(1).find("span").attr("data-price");
            $(".reducer").eq(index).parent().parent().find("div").eq(1).find("span").text(price * n)
        }
        watchServer() {
            this.socket.on("serverAdd", this.handleServerAddSucc.bind(this));
            this.socket.on("serverReducer", this.handleServerReducerSucc.bind(this))
        }
        handleServerAddSucc(data) {
            $(".add").each(this.handleAddEachServer.bind(this, data))
        }
        handleAddEachServer(data, index) {
            var id = $(".add").eq(index).parent().parent().parent().attr("data-id");
            if (id == data.id) {
                var val = $(".add").eq(index).prev().val();
                $(".add").eq(index).prev().val(Number(data.num));
            }
        }
        handleServerReducerSucc(data) {
            $(".reducer").each(this.handleReducerEachServer.bind(this, data))
        }
        handleReducerEachServer(data, index) {
            var id = $(".reducer").eq(index).parent().parent().parent().attr("data-id");
            if (id == data.id) {
                var val = $(".reducer").eq(index).next().val();
                $(".reducer").eq(index).next().val(Number(data.num));
            }
        }
    }
    new Goods().init();
</script>
```