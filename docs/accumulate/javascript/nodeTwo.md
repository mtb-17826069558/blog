<!--  -->
# node学习笔记（三十九）

## **一、url模块的基本使用**

- url.parse
- url.format

- url.resolve



```js
const url = require("url");
const path = "https://www.baidu.com/s?wd=%20node%20request%20post%E8%AF%B7%E6%B1%82&rsv_spt=1&rsv_iqid=0xb9778e3c000b4a9e&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&oq=request%2520post%25E8%25AF%25B7%25E6%25B1%2582&inputT=1575&rsv_t=3da2Tn%2F7uIuHWTsROFo6yvwMvultNv5wmOTlrQiVQ6KLFbNtnrLXkdd9HWuhNlyq7zNM&rsv_pq=feaadbf200091d61&rsv_sug3=35&rsv_sug2=0&rsv_sug4=2259";
const urlObject = url.parse(path,true);
//console.log(url.format(urlObject));
console.log(url.resolve("/a/b/c","d"));
console.log(url.resolve("/a/b/c","/d"));
```

## **二、queryString模块的基本使用**

- queryString.escape()
- queryString.parse()

- queryString.stringify()
- queryString.unescape()



```js
const qs = require("querystring");
var str = "name*alley#age*20";
var obj =  qs.parse(str,"#","*");
//console.log(qs.stringify(obj,"@","!"))
var str = "name=alley=sex=19"
var key = qs.escape("name=alley=sex");
console.log(qs.unescape(key))
```



## **三、events模块的基本使用**

- on:绑定事件
- once:只执行一次事件

- emit:执行匹配的事件
- prependListener：将当前事件放到队列的最前面

- removeALLListeners:移除所有事件
- removeListener:移除指定事件监听

- defaultMaxListeners：events默认的绑定事件只能绑定10个如果想绑定多个需要配置



```js
const EventEmitter = require("events");
class MyEventEmitter extends EventEmitter{};
const myEventEmitter = new MyEventEmitter();
/*
    on:事件订阅
    emit：事件触发
    removeListener：移除一个时间
    removeAllListeners：移除所有事件
    once:只绑定一次函数
*/
function fn1(val){
    console.log(111,val)
}
function fn2(val){
    console.log(222,val)
}
function fn3(val){
    console.log(333,val)
}
myEventEmitter.once("handle",fn1)
myEventEmitter.once("handle",fn2)
myEventEmitter.once("handle",fn3)
//myEventEmitter.removeListener("handle",fn1)
//myEventEmitter.removeAllListeners("handle")
myEventEmitter.emit("handle","alley")
myEventEmitter.emit("handle","alley")
```



## **四、File System模块基本使用**

- 得到文件与目录的信息：stat
- 创建一个目录：mkdir

- 创建文件并写入内容：writeFile,appendFile
- 读取文件的内容：readFile readFileSync

- 列出目录的东西：readdir
- 重命名目录与文件：rename

- 删除目录与文件：rmdir,unlink



```js
const fs = require("fs");
const path = require("path");
fs.stat("./index.js",(err,data)=>{
    console.log(data.isDirectory());
})
var data = fs.statSync("./index.js");
console.log(data.isFile())
fs.mkdir(path.resolve(__dirname,"./demo"),(err)=>{});
fs.writeFile(path.resolve(__dirname,"./demo/index.txt"),"abc",(err)=>{})
fs.readFile(path.resolve(__dirname,"./demo/index.txt"),(err,data)=>{
    console.log(data+"");
})
fs.rename(path.resolve(__dirname,"./demo/index.txt"),path.resolve(__dirname,"./demo/list.txt"),(err)=>{})
fs.readdir(path.resolve(__dirname,"../../随堂案例"),(err,list)=>{
    console.log(list)
})
fs.unlink(path.resolve(__dirname,"./demo/list.txt"),()=>{})
fs.rmdir(path.resolve(__dirname,"./demo"),(err)=>{})
/*
    stat:判断文件类型
        isFile：判断是否是一个文件
        isDirectory:判断是否是一个文件夹
    mkdir：创建文件夹
    writeFile(path,content,callback)：创建并写入
        path：路径
        content:内容
        callback：回调
    
    readFile(path,callback(err,data)):读操作
    rename:重命名文件或者文件夹
        oldPath
        newpath
    readdir:列出文件夹中所有文件
    unlink:删除文件
    rmdir:删除文件夹
*/
```



## **五、stream文件流**

- fs.createReadStream():创建可读文件流 参数1：已有文件
- fs.createWriteStream():创建可写文件流 参数1：文件名称

- pipe:管道



```js
//链式使用pipe
const fs = reqiure("fs");
//压缩模块
const zlib = require("zlib");
const read = fs.createReadStream("");
const write = fs.createWriteStream("");
//先进行压缩然后在给write文件 16进制
read.pipe(zlib.createGzip()).pipe(write);
```



## **六、path模块的基本使用**

- path.join
- path.resolve



```js
const path = require("path");
/*
    join:路径拼接
    resolve:将参数转换为绝对路径
*/
console.log(path.join("/a","b","c"));
console.log(path.join(__dirname,"./index.js"));
console.log(path.resolve(__dirname,"./index.js"));
```



## **七、process**

- process.env
- process.argv



```js
console.log(process.env)
var arr = process.argv;
if(arr.indexOf("-v") !== -1){
    console.log("1.11.1");
}else{
    console.log("help....")
}
```



## **八、http模块**

- http.createServer
- http.get

- http.post
- request

- cheerio小爬虫



**createServer**

```js
const http = require("http");
const server = http.createServer((req,res)=>{
    //console.log(req.url,req.method)
    console.log(req.headers)
    // res.statusCode = 404;
    // res.setHeader("content-type","text/plain;charset=utf8");
    res.writeHead(200,{"content-type":"text/plain;chartset=utf8"})
    res.write("我最近很好")
    res.write("不用你担心")
    res.write("再见")
    res.end("NodeJS")
})
server.listen(9000,()=>{
    console.log("server address:localhost:9000")
})
```

**http.get**

```js
const http = require("http");
const path = "http://www.mobiletrain.org/?pinzhuanbdtg=biaoti";(网页)
http.get(path,(res)=>{
    var str = "";
    //因为数据接收是一块一块接收的 类似于流水一样
    res.on("data",(data)=>{
        str += data;
    })
    res.on("end",()=>{
        console.log(str);
    })
})
var path = "http://m.maoyan.com/ajax/movieOnInfoList?token=";//接口
http.get(path,(res)=>{
    var str = "";
    res.on("data",(data)=>{
        str += data;
    })
    res.on("end",()=>{
        console.log(JSON.parse(str));
    })
})
```

**request**

```js
const request = require("request");
const qs = require("querystring");
const options = {
    url: "https://app2.motie.com/category/detail?free=0&finish=0&group=1&sortId=&page=1&pageSize=10",
    method: "POST",
    headers: {
        "os": "wap"
    },
    body: qs.stringify({
        free: 0,
        finish: 0,
        group: 1,
        sortId: "",
        page: 1,
        pageSize: 10,
    })
}
request(options, (err, res, body) => {
    console.log(JSON.parse(body));
})
/*
    1、cnpm install request -S
    request(options,callback(err,res,body))
    err:错误
    res:整个响应体
    body：响应的数据
    options = {
        method:""，
        url:""，
        headers:{},
        body:{请求的参数}
    }
*/
```

**小爬虫**

```js
const http = require("http");
//可以让我们以jQuery语法来进行dom查找  并不是对dom操作
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const url = "http://www.mobiletrain.org/?pinzhuanbdtg=biaoti";
http.get(url,(res)=>{
    var str = "";
    res.on("data",(data)=>{
        str += data;
    })
    res.on("end",()=>{
        //将str封装到$符号中去
       var $ = cheerio.load(str);
       var banner_up_left = $(".banner_up_left>a");
       var arr = [];
        for(var i=0;i<banner_up_left.length;i++){
            var obj = {};
            obj.id = i;
            obj.text = banner_up_left.eq(i).find("span").text();
            arr.push(obj);
        }
       
        fs.readFile(path.join(__dirname,"./data/index.json"),(err,data)=>{
           var dataList = JSON.parse(data+"")
         
            if(!dataList.data){
                dataList.data = [];
            }
          
            dataList.data = arr;
            
            fs.writeFile(path.join(__dirname,"./data/index.json"),JSON.stringify(dataList),(err)=>{})
        })
    })
})
```



## **九、路由**

- 什么是路由？
- 路由的作用

- 前端路由与后端路由
- 路由核心属性

- supervisor



```js
const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    if (pathname == "/") {
        fs.readFile(path.join(__dirname, "./public/index.html"), (err, data) => {
            res.writeHead(200, { "contentType": "text/html;charset=utf8" });
            res.end(data);
        })
    } else if (pathname == "/order") {
        fs.readFile(path.join(__dirname, "./public/html/order.html"), (err, data) => {
            res.writeHead(200, { "contentType": "text/html;charset=utf8" });
            res.end(data);
        })
    } else if (pathname == "/list") {
        fs.readFile(path.join(__dirname, "./public/html/list.html"), (err, data) => {
            res.writeHead(200, { "contentType": "text/html;charset=utf8" });
            res.end(data);
        })
    } else if (pathname == "/css/index.css") {
        fs.readFile(path.join(__dirname, "./public/css/index.css"), (err, data) => {
            res.writeHead(200, { "content-type": "text/css;charset=utf8" });
            res.end(data);
        })
    } else if (pathname == "/js/index.js") {
        fs.readFile(path.join(__dirname, "./public/js/index.js"), (err, data) => {
            res.writeHead(200, { "content-type": "application/x-javascript;charset=utf8" });
            res.end(data);
        })
    } else if (/\/img\/(.*)\.(jpg|png|gif)/.test(pathname)) {
        fs.readFile(path.join(__dirname, "./public/img/" + RegExp.$1 + "." + RegExp.$2), (err, data) => {
            res.writeHead(200, { "content-type": "image/" + RegExp.$2 });
            res.end(data);
        })
    } else if (pathname == "/users/register") {
        let { username, password } = query;
        fs.readFile(path.join(__dirname, "./public/data/user.json"), (err, data) => {
            let userData = JSON.parse(data.toString());
            var bStop = true;
            for (var i = 0; i < userData.data.length; i++) {
                if (userData.data[i].username == username) {
                    bStop = false;
                    break;
                }
            }
            if (bStop) {
                userData.data.push({ username, password });
                fs.writeFile(path.join(__dirname, "./public/data/user.json"), JSON.stringify(userData), (err) => {
                    if (!err) {
                        res.writeHead(200, { "content-Type": "application/json;charset=utf-8" })
                        res.end(JSON.stringify({
                            code: 200,
                            errMsg: "",
                            data: {
                                code: 1,
                                info: "注册成功"
                            }
                        }))
                    }
                })
            } else {
                res.writeHead(200, { "content-Type": "application/json;charset=utf-8" })
                res.end(JSON.stringify({
                    code: 200,
                    errMsg: "",
                    data: {
                        code: 0,
                        info: "用户名重复"
                    }
                }))
            }
        })
    }
})
server.listen(9000, () => {
    console.log("server address:127.0.0.1:9000")
})
```

## **十、封装路由级静态资源处理**

```js
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

## **十一、mongoodb级mongoose的基本使用**

**1、mongodb安装**

- 下载地址:[https://www.mongodb.com/download-center/community](https://link.zhihu.com/?target=https%3A//www.mongodb.com/download-center/community)
- 下一步傻瓜式安装

- 配置环境变量
- 启动mongod --dbpath c:\data\db 开启数据库服务器 (开启)

- 终端末尾显示27017代表成功



**2、关系型数据库与非关系数据库**区别

**优点：**1）成本：nosql数据库简单易部署，基本都是开源软件，不需要像使用oracle那样花费大量成本购买使用，相比关系型数据库价格便宜。

2）查询速度：nosql数据库将数据存储于缓存之中，关系型数据库将数据存储在硬盘中，自然查询速度远不及nosql数据库。

3）存储数据的格式：nosql的存储格式是key,value形式、文档形式、图片形式等等，所以可以存储基础类型以及对象或者是集合等各种格式，而数据库则只支持基础类型。

4）扩展性：关系型数据库有类似join这样的多表查询机制的限制导致扩展很艰难

**缺点：**1）维护的工具和资料有限，因为nosql是属于新的技术，不能和关系型数据库10几年的技术同日而语。2）不提供对sql的支持，如果不支持sql这样的工业标准，将产生一定用户的学习和使用成本。

3）不提供关系型数据库对事物的处理。

**3、mongodb常用命令**

mongod --dbpath c:\data\db 开启数据库服务器 (开启)27017----》mongodb的端口号 http:80 || 8080 https:443
mongo 进入数据库服务器show dbs 查看数据库服务器中有多少数据库use 数据库名称 创建/切换数据库 如果数据库中没有表的情况下 数据库并不会真正的创建db || db.getName() 查看当前使用的数据库db.dropDatabase() 删除数据库
表的操作db.createCollection("表名称") 创建表db.getCollectionNames() 获取数据库中所有的表db.getCollection('表名称') 使用某一张表db.表名.drop() 删除某一张表
增db.表名.save({字段})
删db.表名.remove({}) 删除所有db.表名.remove({字段}) 删除指定字段
改db.表名.update({字段},{$set:{字段}})db.表名.update({字段},{$inc:{字段(数字)}})
查db.表名.find() 查找所有数据db.表名.find({age:19}) 查找指定字段db.表名.find({age:{$gt:22}}) 大于22的数据db.表名.find({age:{$lt:22}}) 小于22的数据db.表名.find({age:{$gte:22}}) 大于等于22的数据db.表名.find({age:{$lte:22}) 小于等于22的数据db.表名.find({age:{$gte:30,$lte:22})大于等于30小于等于22的数据db.表名.find({name:/alley/}) 模糊查询 找到数据中有alley的数据db.表名.find({age:/^alley/}) 查找首字符是alleydb.表名.find({age:/alley$/}) 查找尾字符是alleydb.表名.find({},{name:1,_id:0}) 只显示name这个字段db.表名.find().sort({age:1}) 正序db.表名.find().sort({age-1}) 降序db.表名.find().limit(n) 显示多少条数据db.表名.find().skip(n) 跳过多少条数据db.表名.find().skip(n).limit(m) 跳过多少条 显示多少条db.表名.findOne({}) 查找一条数据db.表名.find().count() 查询表中有多少条数据