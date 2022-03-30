# JavaScript 异步编程

常用的 JS 异步编程的方式有这几种：回调函数、事件监听、Promise、Generator、async/await。回调函数方式是最早的 JS 异步编程的方式，后随着 ES 标准的发展，Promise、Generator 和 async/await 接连出现。



下面就来初识一下异步编程的概念。

## 1. 什么是异步

### （1）同步的概念

所谓的同步就是在执行某段代码时，在该代码没有得到返回结果之前，其他代码暂时是无法执行的，但是一旦执行完成拿到返回值之后，就可以执行其他代码了。换句话说，在此段代码执行完未返回结果之前，会阻塞之后的代码执行，这样的情况称为同步。

### （2）异步的概念

所谓异步就是当某一代码执行异步过程调用发出后，这段代码不会立刻得到返回结果。而是在异步调用发出之后，一般通过回调函数处理这个调用之后拿到结果。异步调用发出后，不会影响阻塞后面的代码执行，这样的情形称为异步。

### （3）异步的重要性

JavaScript 是单线程的，如果 JS 都是同步代码执行意味着什么呢？这样可能会造成阻塞，如果当前我们有一段代码需要执行时，如果使用同步的方式，那么就会阻塞后面的代码执行；而如果使用异步则不会阻塞，不需要等待异步代码执行的返回结果，可以继续执行该异步任务之后的代码逻辑。因此在 JS 编程中，会大量使用异步来进行编程。

## 2. 异步编程方式

说完了异步编程的基本概念，下面来按照时间顺序来看一下 JS 异步编程的实现方式。

### （1）回调函数时期

所谓 “回调函数” 时期，指的其实是 Promise 出现前的这么一个相对早期的阶段。在这个阶段里，回调是异步最常见、最基本的实现手段，却不是唯一的招数 —— 像事件监听、发布订阅这样的方式，也经常为我们所用。



**1）事件监听**

给目标 DOM 绑定一个监听函数，用的最多的是 addEventListener：

```javascript
document.getElementById('#myDiv').addEventListener('click', function (e) {
  console.log('我被点击了')
}, false);
```

通过给 id 为 myDiv 的一个元素绑定了点击事件的监听函数，把任务的执行时机推迟到了点击这个动作发生时。此时，**任务的执行顺序与代码的编写顺序无关，只与点击事件有没有被触发有关**。



通过给 id 为 myDiv 的一个元素绑定了点击事件的监听函数，把任务的执行时机推迟到了点击这个动作发生时。此时，任务的执行顺序与代码的编写顺序无关，只与点击事件有没有被触发有关。



**2）发布订阅**

发布订阅，是一种相当经典的设计模式。下面来卡看看jQuery 中封装过的发布订阅。比如想在 trigger 的信号被触发后，做点事情，就可以订阅 trigger 信号：

```javascript
function consoleTrigger() {
    console.log('trigger事件被触发')
}
jQuery.subscribe('trigger',consoleTrigger);
```

这样当 trigger 被触发时，上面对应的回调任务就会执行了：

```javascript
function publishTrigger() {
    jQuery.publish('trigger');
}
// 2s后，publishTrigger方法执行，trigger信号发布，consoleTrigger就会执行了
setTimeout(publishTrigger, 2000)
```

这种模式和事件监听下的异步处理非常相似，它们都把任务执行的时机和某一事件的发生紧密关联了起来。



**3）回调函数**

回调函数用的最多的地方其实是在 Node 环境下，我们难免需要和引擎外部的环境有一些交流：比如要利用网络模块发起请求、或者要对外部文件进行读写等。这些任务都是异步的，通过回调的形式来实现它们。

```javascript
// -- 异步读取文件
fs.readFile(filePath,'utf8',function(err,data){
    if(err) {
      throw err;
    }
    console.log(data);// 输出文件内容
});
const https = require('https');
 
// 发起网络请求
https.get('目标接口', (res) => {
  console.log(data)
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
```

**“回调地狱”**

当回调只有一层的时候，看起来感觉没什么问题。但是一旦回调函数嵌套的层级变多了之后，代码的可读性和可维护性将面临严峻的挑战。比如当发起连环网络请求时：

```javascript
const https = require('https');
https.get('目标接口1', (res) => {
  console.log(data)
  https.get('目标接口2', (res) => {
    https.get('目标接口3'),  (res) => {
        console.log(data)
        https.get('目标接口4', (res) => {
          https.get('目标接口5', (res) => {
            console.log(data)
            .....
            // 无尽的回调
          }
        }
    }
  }
})
```

其实不只是在 http、在 ajax 这样的网络请求场景里有这种代码。这样写代码非常糟糕，它会带来很多问题，最直接的就是：**可读性和可维护性被破坏**。



首先，代码会变得非常难以理解。并且很难看出这些回调之间到底是谁套谁。想改 A 处的代码，结果却不小心定位到了 B 处，这都是常有的事。这时如果往里面再添油加醋，比如说加上 this、加上箭头函数、加上自由变量啥的，这段代码自己都很难看懂，更不要说后来的维护者了。



好在早期的前端世界，展示层业务逻辑并没有十分复杂、Node 也还没有问世。那时，前端人普遍觉得用用事件监听、偶尔嵌套那么一两层的回调。但是随着逻辑的增长和复杂化、随着 Node 对大量异步操作的诉求日益强烈和明显，就要处理回调地狱的问题了。在这样的时代背景下，Promise 出现了。

### （2）Promise

为了解决回调地狱的问题，之后社区提出了 Promise 的解决方案，ES6 又将其写进了语言标准，采用 Promise 的实现方式在一定程度上解决了回调地狱的问题。



针对上面的这个场景来看下先读取 A 文本内容，再根据 A 文本内容读取 B 文件，接着再根据 B 文件的内容读取 C 文件。看这样的实现通过 Promise 改造之后是什么样的：

```javascript
function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if(err) reject(err);
            resolve(data);
        });
    });
}
read(A).then(data => {
    return read(B);
}).then(data => {
    return read(C);
}).then(data => {
    return read(D);
}).catch(reason => {
    console.log(reason);
});
```

可以看到，针对回调地狱进行这样的改进，可读性的确有一定的提升，优点是可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数，但是 Promise 也存在一些问题，即便是使用 Promise 的链式调用，如果操作过多，其实并没有从根本上解决回调地狱的问题，只是换了一种写法，可读性虽然有所提升，但是依旧很难维护。不过 Promise 又提供了一个 all 方法，对于这个业务场景的代码，用 all 来实现可能效果会更好。



下面就来看一个用 all 来实现的代码：

```javascript
function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if(err) reject(err);
            resolve(data);
        });
    });
}
// 通过 Promise.all 可以实现多个异步并行执行，同一时刻获取最终结果的问题
Promise.all([read(A), read(B), read(C)]).then(data => {
    console.log(data);
}).catch(err => 
    console.log(err)
);
```

这样改造之后比直接使用 Promise 来实现更清晰。下面再来看下另外一种 JS 的异步编程方式，同样也是 ES6 才引入的 Generator 的方式。

### （3）Generator

Generator 也是一种异步编程解决方案，它最大的特点就是可以交出函数的执行权，Generator 函数可以看出是异步任务的容器，需要暂停的地方，都用 yield 语法来标注。Generator 函数一般配合 yield 使用，Generator 函数最后返回的是迭代器。



下面来看 Generator 的基本用法：

```javascript
function* gen() {
    let a = yield 111;
    console.log(a);
    let b = yield 222;
    console.log(b);
    let c = yield 333;
    console.log(c);
    let d = yield 444;
    console.log(d);
}
let t = gen();
t.next(1); //第一次调用next函数时，传递的参数无效，故无打印结果
t.next(2); // a输出2;
t.next(3); // b输出3; 
t.next(4); // c输出4;
t.next(5); // d输出5;
```

可以看到，第一次的 next 虽然执行了但是并未输出结果，后面的每次执行 next 会把参数传入然后打印出来，等到最后一次 next 对应的 yield 执行完之后，控制台会打印 “{value: undefined, done: true}” 的输出结果，标识该 Generator 函数已经执行完毕，即 done：true。

### （4）async/await

ES6 之后 ES7 中又提出了新的异步解决方案：async/await，async 是 Generator 函数的语法糖，async/await 的优点是代码清晰（不像使用 Promise 的时候需要写很多 then 的方法链），可以处理回调地狱的问题。async/await 写起来使得 JS 的异步代码看起来像同步代码，其实异步编程发展的目标就是让异步逻辑的代码看起来像同步一样容易理解。



下面来看 async/await 的基本用法：

```javascript
function testWait() {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("testWait");
            resolve();
        }, 1000);
    })
}
async function testAwaitUse(){
    await testWait()
    console.log("hello");
    return 123;
    // 输出顺序：testWait，hello
    // 第十行如果不使用await输出顺序：hello , testWait
}
console.log(testAwaitUse());
```

可以看出，在正常的执行顺序下，testWait 这个函数由于使用的是 setTimeout 的定时器，回调会在一秒之后执行，但是由于执行到这里采用了 await 关键词，testAwaitUse 函数在执行的过程中需要等待 testWait 函数执行完成之后，再执行打印 hello 的操作。但是如果去掉 await ，打印结果的顺序就会变化。



因此，async/await 不仅仅是 JS 的异步编程的一种方式，其可读性也接近于同步代码，让人更容易理解。

## 3. 红路灯任务控制

下面来看一道比较典型的问题，通过这个问题来对比几种异步编程方法：**红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？**



三个亮灯函数：

```javascript
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
```

这道题复杂的地方在于**需要“交替重复”亮灯**，而不是“亮完一次”就结束了。

### （1）用 callback 实现

```javascript
const task = (timer, light, callback) => {
    setTimeout(() => {
        if (light === 'red') {
            red()
        }
        else if (light === 'green') {
            green()
        }
        else if (light === 'yellow') {
            yellow()
        }
        callback()
    }, timer)
}
task(3000, 'red', () => {
    task(2000, 'green', () => {
        task(1000, 'yellow', Function.prototype)
    })
})
```

上述代码有可优化空间，这里不再进行简化。同时存在一个明显的 bug：代码只是完成了一次流程，执行后红黄绿灯分别只亮一次。该如何让它交替重复进行呢？



上面提到过递归，我们可以递归亮灯的一个周期：

```javascript
const step = () => {
    task(3000, 'red', () => {
        task(2000, 'green', () => {
            task(1000, 'yellow', step)
        })
    })
}
step()
```

**注意看黄灯亮的回调里又再次调用了 step 方法** 以完成循环亮灯。

### （2）用 promise 实现

```javascript
const task = (timer, light) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') {
                red()
            }
            else if (light === 'green') {
                green()
            }
            else if (light === 'yellow') {
                yellow()
            }
            resolve()
        }, timer)
    })
const step = () => {
    task(3000, 'red')
        .then(() => task(2000, 'green'))
        .then(() => task(2100, 'yellow'))
        .then(step)
}
step()
```

这里将回调移除，在一次亮灯结束后，resolve 当前 promise，并依然使用递归进行。

### （3）用 async/await 实现

```javascript
const taskRunner =  async () => {
    await task(3000, 'red')
    await task(2000, 'green')
    await task(2100, 'yellow')
    taskRunner()
}
taskRunner()
```

可以看到，还是 async/await 的方案更加舒服。