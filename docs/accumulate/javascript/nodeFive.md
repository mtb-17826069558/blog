<!--  -->
# node学习笔记（四十二）

## **一、前端EventLoop**

**1、什么是eventLoop？**

同步任务和异步任务在js中是如何执行的呢？js的代码运行会形成一个主线程和一个任务队列。主线程会从上到下一步步执行我们的js代码，形成一个执行栈。同步任务就会被放到这个执行栈中依次执行。而异步任务被放入到任务队列中执行，执行完就会在任务队列中打一个标记，形成一个对应的事件。当执行栈中的任务全部运行完毕，js会去提取并执行任务队列中的事件。这个过程是循环进行的，这就是我们今天想要了解的event loop

**2、为什么js是单线程**

想要了解event loop我们就要从js的工作原理说起。首先，大家都知道js是单线程的。所谓单线程就是进程中只有一个线程在运行。那么，js为什么是单线程而不是做成多线程的呢？个人理解，js是用来实现浏览器与用户之间的交互的。如果同时要处理用户点击，用户输入，用户关闭等操作，浏览器无法知道这个时间我到底应该做什么。所以js是从上至下按顺序运行下去的

**3、什么是宏任务&&什么是微任务**

宏任务： 需要多次事件循环才能执行完，事件队列中的每一个事件都是一个宏任务。浏览器为了能够使得js内部宏任务与DOM任务有序的执行，会在一个宏任务执行结束后，在下一个宏执行开始前，对页面进行重新渲染 （task->渲染->task->…）鼠标点击会触发一个事件回调，需要执行一个宏任务，然后解析HTML微任务： 微任务是一次性执行完的。微任务通常来说是需要在当前task执行结束后立即执行的任务，例如对一些动作做出反馈或者异步执行任务又不需要分配一个新的task，这样便可以提高一些性能

**4、案例**

```js
console.log("script start");
•
setTimeout(function(){
   console.log("setTimeout");
},0)
•
newPromise(resolve=>{
   console.log("promise start");
   resolve();
}).then(function(){
   console.log("promise1");
}).then(()=>{
   console.log("promise2");
})
•
console.log("script end");
console.log(1);
•
setTimeout(()=>{
 console.log(2);
})
•
newPromise((resolve)=>{
 console.log(4)
 resolve()
}).then(()=>{
setTimeout(()=>{
     console.log(5);
  })
}).then(()=>{
 console.log(6)
})
•
console.log(7)
setTimeout(() => {
 console.log(5)
• new Promise(resolve => {
    console.log(6)
•    setTimeout(() => {
      console.log(7)
    })
    resolve()
  }).then(() => {
    console.log(8)
  })
}, 500)
new Promise(resolve => {
 console.log(9)
 resolve()
}).then(() => {
 console.log(10)
• setTimeout(() => {
    console.log(11)
  }, 0)
})
•console.log(12)
```



## **二、后端EventLoop**

**1、NodeJS中的宏任务分类**

**Timers 类型的宏任务队列**

- setTimeout()
- setInterval

**Check 类型的宏任务队列**

- setImmediate()

**Close callback 类型的宏任务队列**

- socket.on(‘close’, () => {})

**Poll 类型的宏任务队列**

- 除了上面几种的其他所有回调



**2、nodeJs 里面的微任务队列**

process.nextTick()Promise.then() process.nextTick()`的优先级高于所有的微任务,每一次清空微任务列表的时候，都是先执行`

process.nextTick()

**3、setTimeout && setImmediate执行顺序**

Node 并不能保证 timers 在预设时间到了就会立即执行，因为 Node 对 timers 的过期检查不一定靠谱，它会受机器上其它运行程序影响，或者那个时间点主线程不空闲虽然 setTimeout 延时为 0，但是一般情况 Node 把 0 会设置为 1ms，所以，当 Node 准备 event loop 的时间大于 1ms 时，进入 timers 阶段时，setTimeout 已经到期，则会先执行 setTimeout；反之，若进入 timers 阶段用时小于 1ms，setTimeout 尚未到期，则会错过 timers 阶段，先进入 check 阶段，而先执行 setImmediate

## **三、postman的基本使用**

**1、打开postman之后，首先输入URL，方法选择GET**



![img](image/1609157442490-9e299211-de43-4fab-8823-b74e4f58c35e.png)



**2、然后我们在Headers里面输入我们所需要的内容，如果需要Cookie也填写在这里面即可（不需要可以不填），填写的时候可以单个填写，也可以点击【Bulk Edit】进行填写方式切换，切换后可以一次填写所有内容**



![img](image/1609157442511-b4bc5310-4976-4a98-b347-237946ecbec9.png)



**3、填写了Headers之后，如果这个get请求里面有传参，我们接下来可以填写参数，如果不需要也可以不填。填了参数之后，内容就会拼接在我们的url里面**



![img](./image/1609157442711-daf638a6-2b1c-415d-a068-19b541a320e3.jpg)



**4、最后，我们点击send，就可以看到返回值了**



![img](./image/1609157442490-7fb57b17-e1cf-47c7-b212-53c7b433bbc0.png)



**post同理**

## **四、项目的基本搭建**

## **一、express生成器搭建项目结构**

**1、安装 express-generator**

```
npm install express-generator -g
```

**2、通过express -e生成项目结构**



**3、安装依赖**

$ cd myapp$ npm install

**4、启动项目**

npm start

## **二、MVC架构思想**

MVC即Model-View-Controller（模型-视图-控制器）是一种软件设计模式，最早出现在Smalltalk语言中，后被Sun公司推荐为Java EE平台的设计模式。　　MVC把应用程序分成了上面3个核心模块，这3个模块又可被称为业务层-视图层-控制层。顾名思义，它们三者在应用程序中的主要作用如下：**业务层**：负责实现应用程序的业务逻辑，封装有各种对数据的处理方法。它不关心它会如何被视图层显示或被控制器调用，它只接受数据并处理，然后返回一个结果。**视图层**：负责应用程序对用户的显示，它从用户那里获取输入数据并通过控制层传给业务层处理，然后再通过控制层获取业务层返回的结果并显示给用户。**控制层**：负责控制应用程序的流程，它接收从视图层传过来的数据，然后选择业务层中的某个业务来处理，接收业务层返回的结果并选择视图层中的某个视图来显示结果。　　可以用下图来表示MVC模式中三者之间的关系：



![img](./image/1609157442581-6fd9f019-7212-4c16-9644-7e38e47dc523.jpg)



## **三、图片上传**

1. 安装multer模块

```js
npm install multer
```

1. 引用模块 它是依赖于express的一个模块

```js
//引用express并配置
var express = require("express");
var app = express();
app.listen(3000);
var multer = require('multer');
/*var upload = multer({
    //如果用这种方法上传，要手动添加文明名后缀
        //如果用下面配置的代码，则可以省略这一句
    dest: 'uploads/'
})*/
```

1. 配置 设置保存文件的地方，并根据上传的文件名对应文件添加后缀 可以通过`filename`属性定制文件保存的格式

**属性值用途**`destination`设置资源的保存路径。注意，如果没有这个配置项，默认会保存在`/tmp/uploads`下。此外，路径需要自己创建`filename`设置资源保存在本地的文件名

```js
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    //给上传文件重命名，获取添加后缀名
    filename: function(req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        //给图片加上时间戳格式防止重名名
        //比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
var upload = multer({
    storage: storage
});
```

1. 接受文件 `upload.single('xxx')`，xxx与表单中的name属性的值对应 这里虽然用到post请求，但实际上不需要`bodyParser`模块处理

```js
app.post('/upload-single', upload.single('logo'), function(req, res, next) {
    console.log(req.file)
    console.log('文件类型：%s', req.file.mimetype);
    console.log('原始文件名：%s', req.file.originalname);
    console.log((req.file.originalname).split("."))
    console.log('文件大小：%s', req.file.size);
    console.log('文件保存路径：%s', req.file.path);
    res.send({
        ret_code: '0'
    });
});
```

1. 多图上传 多图上传只要更改一下地方，前端往file输入框加多一个`multiple="multiple"`属性值，此时就可以在选图的时候多选了，当然也可以并列多个file输入框(不推荐多个上传图片输入框)，这样体验会不好

```js
<input type="file" name="logo" multiple="multiple" />
```

后端也需要相应的改变

```js
app.post('/upload-single', upload.single('logo'), function(req, res, next) {
//upload.single('logo')变为upload.array('logo', 2)，数字代表可以接受多少张图片
app.post('/upload-single', upload.array('logo', 2), function(req, res, next) {
```

如果不想有图片数量上传限制，我们可以用`upload.any()`方法

```js
app.post('/upload-single', upload.any(), function(req, res, next) { 
    res.append("Access-Control-Allow-Origin","*");
    res.send({
        wscats_code: '0'
    });
});
```

1. 前端部分

- formData表单提交

```js
<form action="http://localhost:3000/upload-single" method="post" enctype="multipart/form-data">
    <h2>单图上传</h2>
    <input type="file" name="logo">
    <input type="submit" value="提交">
</form>
```

- formData表单+ajax提交

```js
<form id="uploadForm">
    <p>指定文件名： <input type="text" name="filename" value="" /></p>
    <p>上传文件： <input type="file" name="logo" /></ p>
    <input type="button" value="上传" onclick="doUpload()" />
</form>
```

`FormData`对象，是可以使用一系列的键值对来模拟一个完整的表单，然后使用`XMLHttpRequest`发送这个"表单"

**注意点**

- processData设置为false。因为data值是FormData对象，不需要对数据做处理。
- `<form>`标签添加`enctype="multipart/form-data"`属性。

- cache设置为false，上传文件不需要缓存。
- contentType设置为false。因为是由`<form>`表单构造的FormData对象，且已经声明了属性`enctype="multipart/form-data"`，所以这里设置为false

上传后，服务器端代码需要使用从查询参数名为logo获取文件输入流对象，因为`<input>`中声明的是`name="logo"`

```js
function doUpload() {
    $.ajax({
        url: 'http://localhost:3000/upload-single',
        type: 'POST',
        cache: false, //不必须
        data: new FormData($('#uploadForm')[0]),
        processData: false,//必须
        contentType: false,//必须
        success: function(data) {
            console.log(data)
        }
    })
}
```



## **四、编写接口**

api接口

- RestfulApi 规范
- 接口文档的生成(apidoc)

- 接口请求方式区别

跨域解决

- cors
- jsonp

- proxy





## **五、JWT**

### **JWT**

- 用户登录 服务器端产生一个token (加密字符串) 发送给前端
- 前端将token 进行保存

- 前端发起数据请求的时候携带token
- 服务端 验证token 是否合法 如果合法继续操作 不合法终止操作

- token 的使用场景 无状态请求 保持用户的登录状态 第三方登录（token+auth2.0）



### **非对称加密 通过私钥产生token 通过公钥解密token**

```js
// 1.产生公钥和私钥
// 产生私钥  openssl genrsa -out ./private_key.pem 1024    1024 代表私钥长度
// 产生公钥  openssl rsa -in ./private_key.pem -pubout -out ./public_key.pem
 let private_key=fs.readFileSync(path.join(__dirname,'./private_key.pem'))
 let public_key=fs.readFileSync(path.join(__dirname,'./public_key.pem'))
 var token = jwt.sign(palyload, private_key,{ algorithm: 'RS256'});
 console.log(token)
 let  token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IueUqOaIt2lkIiwiaWF0IjoxNTUxMTUyNzk1fQ.TI_xDBvObHGAH7EV40WWpQemm5nx077Gdjq-pzDx0NWN5YFd40S7XcLmgoDdYscLM7vMOP0c7z1l83JUixqk7IBjBCU-tMNo_G5_-LGkQjV3vDYq_3TkXTl42lgmFA-EBey7W6W1PgPfYlowyHAyp-07hXaMRevgVkXm2lPEFXo'
  var decoded = jwt.verify(token, public_key);
```





```js
const jwt=require('jsonwebtoken')
const scrict='sdjfksdjflajflasjflasjflksf'
function creatToken(palyload){
    // 产生token
    palyload.ctime=Date.now()
    return jwt.sign(palyload,scrict)
}
function checkToken(token){
    return  new Promise((resovle,reject)=>{
        jwt.verify(token,scrict,(err,data)=>{
           if(err){ reject('token 验证失败')}
           resovle(data)
           })
    })
    
}
module.exports={
    creatToken,checkToken
}
```





### **Cookie+Session**

```js
const  cookieParse=require('cookie-parser')
const  session = require('express-session')
app.use(session({
    secret: 'hubwizApp', //为了安全性的考虑设置secret属性
    cookie: {maxAge: 60 * 1000 * 60 * 24 }, //设置过期时间
    resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
    saveUninitialized: false, //无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid
}));
```

登录成功

```js
req.session.sign = true;
req.session.name = us;
```

需要验证的接口判断是否存在

注销session

```js
app.get('/out', function(req, res){
    req.session.destroy();
    res.redirect('/');
})
```

## **六、登录验证码**

```js
const svgCaptcha = require('svg-captcha');
生成验证码 返回图片格式
async generateVerifCode() {
    const codeConfig = {
      size: 4, // 验证码长度
      ignoreChars: '0oO1ilI', // 验证码字符中排除 0oO1ilI
      noise: 2, // 干扰线条的数量
      width: 160,
      height: 50,
      fontSize: 50,
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: '#eee',
    };
    const captcha = svgCaptcha.create(codeConfig);
    this.ctx.session.verifCode = captcha.text.toLowerCase(); // 存session用于验证接口获取文字码
    this.ctx.body = captcha.data;
  }
```

