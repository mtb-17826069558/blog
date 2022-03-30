# 前端模块化规范

## 1. 模块化概念

随着互联网的飞速发展，前端开发也越来越复杂，项目越来越大，代码复杂性不断增加，对于，模块化的需求越来越大。



简单来说模块化就是：**对于一个复杂的应用程序，与其将所有代码都地放在一个文件当中，不如按照一定的语法，遵循确定的规则（规范）拆分成几个互相独立的文件。这些文件应该具有原子特性，也就是说，其内部完成共同的或者类似的逻辑，通过对外暴露一些数据或调用方法，与外部完成整合。**



这样，每个文件彼此独立，开发者更容易开发和维护代码，模块之间又能够互相调用和通信，这是现代化开发的基本模式。



模块化主要体现了以下原则：

- 可复用性
- 可组合型

- 中心化
- 独立性



在开发过程中，可能遇到以下问题：

- 变量/函数命名冲突
- 繁琐的文件依赖



使用模块化就可以解决这些问题，使用模块化的好处如下：

- 模块的版本管理：通过别名等配置，配合构建工具，可以轻松实现模块的版本管理
- 提高可维护性： 模块化可以实现每个文件的职责单一，非常有利于代码的维护。

- 前端性能优化： 对于前端开发来说，异步加载模块对于页面性能非常有益。
- 跨环境共享模块： CMD 模块定义规范与 NodeJS 的模块规范非常相近，所以通过 Sea.JS 的 NodeJS 版本，可以方便的实现模块的跨服务器和浏览器共享。

## 2. 模块化规范

**目前Web端主流的模块化标准：**

- CommonJS
- AMD

- CMD
- UMD

- ES6

下面就来看看这些常见的模块化规范。

### （1）CommonJS

Node.js 对前端的发展具有极大的促进作用，它带来的 CommonJS 模块化规范如下：在 Node.js 中，每一个文件就是一个模块，具有单独的作用域，对其他文件是不可见的。



CommonJS 规定每个文件就是一个模块，有独立的作用域。每个模块内部，都有一个 module 对象，代表当前模块。通过它来导出 API，它有以下属性：

- id 模块的识别符，通常是带有绝对路径的模块文件名；
- filename 模块的文件名，带有绝对路径；

- loaded 返回一个布尔值，表示模块是否已经完成加载；
- parent 返回一个对象，表示调用该模块的模块；

- children 返回一个数组，表示该模块要用到的其他模块；
- exports 表示模块对外输出的值。



CommonJS 的规范有以下特点：

- 文件即模块，文件内所有代码都运行在独立的作用域，因此不会污染全局空间。
- 模块可以被多次引用、加载。在第一次被加载时，**会被缓存**，之后都从缓存中直接读取结果。

- 加载某个模块，就是引入该模块的 module.exports 属性。
- module.exports 属性**输出的是值的拷贝**，一旦这个值被输出，模块内再发生变化不会影响到输出的值。

- 模块加载顺序按照代码引入的顺序。



##### 导出：

```js
module.exports.TestModule = function() {
    console.log('exports');
}

exports.TestModule = function() {
    console.log('exports');
}
```

上面两种方式结果是一样的，module.exports和exports的区别可以理解为exports是module.exports的引用，如果在exports调用之前调用了exports=...，那么就无法再通过exports来导出模块内容，除非通过exports=module.exports重新设置exports的指向。

##### 导入：

```js
const mymodule = require('./MyModule'); //如果没有后缀，会自动按照.js、.json和.node的次序进行补齐查找
```

##### 加载过程：

- 优先从缓存中加载
- 如果缓存中没有，检查是否是核心模块，如果是直接加载

- 如果不是核心模块，检查是否是文件模块，解析路径，根据解析出的路径定位文件，然后执行并加载
- 如果以上都不是，沿当前路径向上逐级递归，直到根目录的node_modules目录

### （2）AMD

由于 Node.js 运行于服务器上，所有的文件一般都已经存在了本地硬盘中，不需要额外的网络请求去异步加载，因而 CommonJS 规范加载模块是同步的。只有加载完成，才执行后续操作。但是，如果放在浏览器环境中，需要从服务器端获取模块文件，此时再采用同步的方式，显然就不合适了。这时候，社区上推出了 AMD 规范。



AMD 规范，全称为：Asynchronous Module Definition，它的模块化标准是异步的，完全贴合浏览器的。它规定了如何定义模块，如何对外输出，如何引入依赖。这一切都需要代码去实现，因此一个著名的库 —— require.js 应运而生，require.js 实现很简单：通过 define 方法，将代码定义为模块；通过 require 方法，实现代码的模块加载。



AMD规范重要特性就是异步加载。所谓异步加载，就是指同时并发加载所依赖的模块，当所有依赖模块都加载完成之后，再执行当前模块的回调函数。这种加载方式和浏览器环境的性能需求刚好吻合。



AMD 规范只定义了一个全局函数 define，通过它就可以定义和引用模块，它有 3 个参数：

```js
define(id?, dependencies?, factory);
```

- id 为模块的名称，该参数是可选的。如果没有提供该参数，模块的名字应该默认为模块加载器请求的指定脚本的名字；如果提供了该参数，模块名必须是“顶级”的和绝对的（不允许相对名字）。
- dependencies 是个数组，它定义了所依赖的模块。依赖模块必须根据模块的工厂函数优先级执行，并且执行的结果应该按照依赖数组中的位置顺序以参数的形式传入（定义中模块的）工厂函数中。

- factory 为模块初始化要执行的函数或对象。如果是函数，那么该函数是单例模式，只会被执行一次；如果是对象，此对象应该为模块的输出值。



看一个例子，创建一个名为“alpha”的模块，依赖了 require、exports、beta 3 个模块，并导出了 verb 函数。

```js
define("alpha", ["require", "exports", "beta"], function (require, exports, beta) {
     exports.verb = function() {
         return beta.verb();
     }
 });
```

### （3）CMD

CMD 规范整合了 CommonJS 和 AMD 规范的特点。它的全称为：Common Module Definition，类似 require.js，CMD 规范的实现为 sea.js。



CMD 定义模块也是通过一个全局函数 define 来实现的，但只有一个参数，该参数既可以是函数也可以是对象：

```js
define(factory);
```

如果这个参数是对象，那么模块导出的就是对象；如果这个参数为函数，那么这个函数会被传入 3 个参数 require 、 exports 和 module。

```js
define(function(require, exports, module) {
  //...
});
```

1. require 是一个函数，通过调用它可以引用其他模块，也可以调用 require.async 函数来异步调用模块。
2. exports 是一个对象，当定义模块的时候，需要通过向参数 exports 添加属性来导出模块 API。

1. module 是一个对象，它包含 3 个属性：

- uri，模块完整的 URI 路径；
- dependencies，模块的依赖；

- exports，模块需要被导出的 API，作用同第二个参数 exports。



下面来看一个例子，定义一个 increment 模块，引用 math 模块的 add 函数，经过封装后导出成 increment 函数：

```js
define(function(require, exports, module) {
  var add = require('math').add;
  exports.increment = function(val) {
    return add(val, 1);
  };
  module.id = "increment";
});
```

CMD 最大的特点就是懒加载，不需要在定义模块的时候声明依赖，可以在模块执行时动态加载依赖。当然还有一点不同，那就是 CMD 同时支持同步加载模块和异步加载模块。



用一句话来形容就是，它整合了 CommonJS 和 AMD 规范的特点。遵循 CMD 规范的代表开源项目是 sea.js ，它的实现和 requirejs 没有本质差别。



**AMD 和 CMD 的两个主要区别如下：**

- AMD 需要异步加载模块，而 CMD 在 require 依赖的时候，可以通过同步的形式（require），也可以通过异步的形式（require.async）。
- CMD 遵循依赖就近原则，AMD 遵循依赖前置原则。也就是说，在 AMD 中，我们需要把模块所需要的依赖都提前在依赖数组中声明。而在 CMD 中，我们只需要在具体代码逻辑内，使用依赖前，把依赖的模块 require 进来。

### （4）UMD

UMD（Universal Module Definition，统一模块定义）其实并不是模块管理规范，而是带有前后端同构思想的模块封装工具。通过 UMD 可以在合适的环境选择对应的模块规范。比如在 Node.js 环境中采用 CommonJS 模块管理，在浏览器端且支持 AMD 的情况下采用 AMD 模块，否则导出为全局函数。



它的实现原理如下：

1. 先判断是否支持 Node.js 模块格式（exports 是否存在），存在则使用 Node.js 模块格式；
2. 再判断是否支持 AMD（define 是否存在），存在则使用 AMD 方式加载模块；

1. 若前两个都不存在，则将模块公开到全局（Window 或 Global）。



实现代码如下：

```js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
module.exports,
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function () {
  //。。。
  return {};
}));
```

### （4）ES6模块化

CommonJS和AMD都是在运行时确定依赖关系，即运行时加载，CommonJS加载的是拷贝，而ES6 module则是在编译时就确定依赖关系，所有加载的其实都是引用，这样做的好处是可以执行静态分析和类型检查。



**1）导出**

- **正常导出：**

```js
// 方式一
export var first = 'test';
export function func() {
    return true;
}

// 方式二
var first = 'test';
var second = 'test';
function func() {
    return true;
}
export {first, second, func};
```

- **as关键字:**

```js
var first = 'test';
export {first as second};
```

as关键字可以重命名暴露出的变量或方法，经过重命名后同一变量可以多次暴露出去。



- **export default**

export default会导出默认输出，即用户不需要知道模块中输出的名字，在导入的时候为其指定任意名字。

```js
// 导出
export default function () {
  console.log('foo');
}
// 导入
import customName from './export-default';
```

**注意：**导入默认模块时不需要大括号，导出默认的变量或方法可以有名字，但是对外无效。export default只能使用一次。



**2）导入**

- **正常导入：**

```js
import {firstName, lastName, year} from './profile';
复制代码
```

导入模块位置可以是相对路径也可以是绝对路径，.js可以省略，如果不带路径只是模块名，则需要通过配置文件告诉引擎查找的位置。

- **as关键字：**

```js
import { lastName as surname } from './profile';
```

import 命令会被提升到模块头部，所以写的位置不是那么重要，但是不能使用表达式和变量来进行导入。

- **加载整个模块（无输出）**

```js
import 'lodash'; //仅仅是加载而已，无法使用
```

- **加载整个模块（有输出）**

```js
import * as circle from './circle';
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
```

**注意：**import * 会忽略default输出



**3）导入导出复合用法**

- **先导入后导出**

```js
export { foo, bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';
export { foo, boo};
```

- **整体先导入再输出以及default**

```js
// 整体输出
export * from 'my_module';
// 导出default，正如前面所说，export default 其实导出的是default变量
export { default } from 'foo';
// 具名接口改default
export { es6 as default } from './someModule';
```

##### 4）模块的继承

```js
export * from 'circle';
export var e = 2.71828182846;
export default function(x) {
  return Math.exp(x);
}
```

**注意：**export * 会忽略default。

## 3. ES模块化使用

### （1）在浏览器中使用 ES 模块化

目前各大浏览器较新版本都已经开始逐步支持 ES 模块了。如果想在浏览器中使用原生 ES 模块方案，只需要在 script 标签上添加一个 type="module" 属性。通过该属性，浏览器知道这个文件是以模块化的方式运行的。而对于不支持的浏览器，需要通过 nomodule 属性来指定某脚本为 fallback 方案：

```js
<script type="module">
    import module1 from './module1'
</script>
<script nomodule>
     alert('你的浏览器不支持 ES 模块，请先升级！')
</script>
```

使用 type="module" 的另一个作用是进行 ES Next 兼容性的嗅探。因为支持 ES 模块化的浏览器，都支持 ES Promise 等特性，基于此，应用场景较多。

### （2）在Node.js中使用 ES 模块化

Node.js 从 9.0 版本开始支持 ES 模块，执行脚本需要启动时加上 --experimental-modules，不过这一用法要求相应的文件后缀名必须为 *.mjs：

```js
node --experimental-modules module1.mjs
import module1 from './module1.mjs'
console.log(module1)
```

另外，也可以安装 babel-cli 和 babel-preset-env，配置 .babelrc 文件后，执行：

```js
./node_modules/.bin/babel-node
```

或：

```js
npx babel-node
```

在工具方面，webpack 本身维护了一套模块系统，这套模块系统兼容了几乎所有前端历史进程下的模块规范，包括 AMD/CommonJS/ES 模块化等。