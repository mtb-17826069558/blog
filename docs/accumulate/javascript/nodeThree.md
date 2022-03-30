<!--  -->
# node学习笔记（四十）

## **一、NodeJS如何链接mongodb**

NodeJS中链接Mongodb1、安装cnpm install mongodb -S2、创建链接的地址3、链接

```js
const mongoClient = require("mongodb").MongoClient;
//2、创建链接的方式
const url = "mongodb://127.0.0.1:27017";
//3、创建链接的数据库
const db_name = "gp17";
//4、链接
mongoClient.connect(url,(err,client)=>{
    if(err){
        console.log("链接失败")
    }else{
        console.log("链接成功")
        //5、链接数据库以及表
        var user = client.db(db_name).collection("user");
    }
})
```

## **二、mongoose的基本使用**

**1、mongoose与mongodb的区别**

参考上面的

**2、NodeJS链接mongoose**

```js
const mongoose = require('mongoose');
//是一个构造函数 用来限制表的字段类型
const Schema = mongoose.Schema;
//链接的地址
const url = "mongodb://127.0.0.1:27017/gp17";
//链接
mongoose.connect(url,(err)=>{
    if(err){
        console.log("链接失败");
    }else{
        console.log("链接成功")
    }
})
//链接表/创建表
var StudentsSchema = new Schema({
    sname:String,
    sage:Number
})
//返回值是一个构造函数
const Students = mongoose.model("student",StudentsSchema);//如果表的名称是复数则 数据库中的表名称不会变 如果不是复数则数据库中标的名称会自动加s
// mongoose.model("students",{
//     sname:String,
//     sage:Number
// })
```

## **三、用所封装好的路由+nodeJS+Mongoose+MVC实现登录注册**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>
    <h1>index页面</h1>
    <div>
        <img src="./img/u=2071817741,4218539796&fm=58&s=EE7A2FC0DE0120D6CF6D1509010070D2.jpg" alt="">
        <img src="./img/u=2708490274,319030395&fm=58&s=9E3269850EF36DB70811A15B03008060.jpg" alt="">
        <img src="./img/u=3473750589,1700978550&fm=58&s=4E946D84D2417CFE5C3FB5D90300D0B9.jpg" alt="">
        <img src="./img/u=3508817781,1654561115&fm=58&s=6D83639716736DB3087070600300E070.jpg" alt="">
    </div>
    <form id="user">
        用户名: <input type="text" id="username">
        密码: <input type="text" id="password">
        <input type="submit">
    </form>
</body>
</html>
<script src="./js/index.js"></script>
<script src="https://cdn.bootcss.com/jquery/1.11.3/jquery.js"></script>
<script>
    $("#user").on("submit",function (e) { 
        e.preventDefault()
        var username = $("#username").val();
        var password = $("#password").val();
        $.ajax({
            url:"/user/register",
            method:"post",
            data:{
                username,
                password
            },
            success:function(data){
                console.log(data);
            }
        })
    })
</script>
```



```js
const http = require("http");
const router = require("./router")
const server = http.createServer(router)
router.post("/user/register",(req,res)=>{
    console.log(req.body);
   res.json({
       code:200,
       errMsg:''
   })
})
server.listen(9000)
const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring")
//收集事件
const routerMap = {
    get:{},
    post:{}
}
const router = function(req,res){
    //给res添加一个json方法
    res.json = function(obj){
        res.end(JSON.stringify(obj))
    }
    //处理静态资源
    handleStatic(req,res);
    //获取用户请求的方式
    var method = req.method.toLowerCase();
    //获取用户请求的地址
    var {pathname,query} = url.parse(req.url,true);
    if(method === "get"){
        if(routerMap.get[pathname]){
            //将query的值赋值给req.query
            req.query = query;
            routerMap.get[pathname](req,res)
        }else{
            res.end("404")
        }
    }else if(method === "post"){
        if(routerMap.post[pathname]){
            var str = "";
            //获取post传递的参数
            req.on("data",(data)=>{
                str += data;
            })
            req.on("end",()=>{
               req.body = qs.parse(str);
               routerMap.post[pathname](req,res)
            })
            
        }
    }
}
//注册事件
router.get = function(path,callback){
    routerMap.get[path] = callback;
}
//注册事件
router.post = function(path,callback){
    routerMap.post[path] = callback;
}
//处理所有的静态资源访问
function handleStatic(req,res){
    var {pathname} = url.parse(req.url,true);
    //获取文件的后缀
    var ext = pathname.substring(pathname.lastIndexOf("."));
    if(pathname ==="/"){
        res.writeHead(200,{"content-type":"text/html;charset=utf8"});
        res.end(getFile(path.join(__dirname,"../public/index.html")))
    }else if(ext === ".css"){
        res.writeHead(200,{"content-type":"text/css;charset=utf8"});
        res.end(getFile(path.join(__dirname,"../public",pathname)));
    }else if(ext === ".js"){
        res.writeHead(200,{"content-type":"application/x-javascript;charset=utf8"});
        res.end(getFile(path.join(__dirname,"../public",pathname)));
    }else if(/.*\.(jpg|png|gif)/.test(ext)){
        res.writeHead(200,{"content-type":`image/${RegExp.$1};charset=utf8`});
        res.end(getFile(path.join(__dirname,"../public",pathname)));
    }else if(ext === ".html"){
        res.writeHead(200,{"content-type":"text/html;charset=utf8"});
        res.end(getFile(path.join(__dirname,"../public",pathname)));
    }
}
function getFile(filePath){
    return fs.readFileSync(filePath);
}
module.exports = router;
```



## **四、express的基本入门**

**1、什么是express？**

*Express* 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架,为 Web 和移动应用程序提供一组强大的功能

**2、什么是中间件**

请求和回复之间的一个应用

**3、常见的中间件有哪些？**

1、应用层中间件(http请求之类的应用)



```js
const express = require("express");
const app = express();
//应用层的中间件
app.use((req,res,next)=>{
 console.log(123);
 next()
})
app.use((req,res,next)=>{
 console.log(456)
 next()
})
app.use((req,res,next)=>{
 console.log(789);
 next();
})
app.use("/home",(req,res,next)=>{
 res.end("home");
})
app.get("/list",(req,res,next)=>{
 res.end("list")
})
app.post("/list",(req,res,next)=>{
 res.end("list")
})
app.listen(9000,()=>{
 console.log("server address:127.0.0.1:9000")
})
/*
  express中的中间件会分为哪几类？
      1、应用层中间件(http请求之类的应用)
          app.use app.get app.post
      2、内置中间件
      3、错误处理中间件
      4、路由中间件
      5、第三方中间件
      6、自定义中间件
  如何使用中间件？
      app.use(中间件) 使用中间件
   app.use中的参数
      path:选填
      callback || router
      如果是callback的请求下 这个回调中会有3个参数 
      req:请求
      res:响应
      next:执行下一个中间件
  只要http这个服务跑一次那么久会将app.use中的所有函数统一执行一遍
*/
```

2、内置中间件

```js
const express = require("express");
const app = express();
const path = require("path");
//内置中间件
app.use(express.static(path.join(__dirname,"./public")))
app.listen(9000,()=>{
 console.log("server address:127.0.0.1:9000")
})
```

3、错误处理中间件

```js
const express = require("express");
const app = express();
const path = require("path");
//内置中间件
app.use(express.static(path.join(__dirname,"./public")))
//错误中间件处理一般写在程序的最后面
app.use((req,res,next)=>{
 res.status(404).send("没有这个页面")
})
app.listen(9000,()=>{
 console.log("server address:127.0.0.1:9000")
})
```



4、路由中间件

```js
const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./router/index");
//内置中间件
app.use(express.static(path.join(__dirname,"./public")))
//路由级别的中间件
app.use("/user",indexRouter)
app.listen(9000,()=>{
 console.log("server address:127.0.0.1:9000")
})
```

5、第三方中间件

例如 cheerio jsonwebToken等

6、自定义中间件

自己根据需求封装的中间件