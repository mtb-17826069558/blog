# 如何实现 new、apply、call、bind 的底层逻辑？

## 1. new 

### （1）原理

new 关键词的主要作用就是执行一个构造函数、返回一个实例对象，在 new 的过程中，根据构造函数的情况，来确定是否可以接受参数的传递。下面看一个 new 的例子：

```javascript
function Person(){
   this.name = 'Jack';
}
var p = new Person(); 
console.log(p.name)  // Jack
```

可以看到，p 是一个通过 person 这个构造函数生成的一个实例对象。那么 new 在这个生成实例的过程中主要有以下几个步骤：

- 创建一个新对象；
- 将构造函数的作用域赋给新对象（this 指向新对象）；

- 执行构造函数中的代码（为这个新对象添加属性）；
- 返回新对象。



那如果不用 new 这个关键词，结合上面的代码改造一下，去掉 new，会发生什么样的变化呢？

```javascript
function Person(){
  this.name = 'Jack';
}
var p = Person();
console.log(p) // undefined
console.log(name) // Jack
console.log(p.name) // 'name' of undefined
```

从上面的代码中可以看到，没有使用 new 这个关键词，返回的结果就是 undefined。其中由于 JavaScript 代码在默认情况下 this 的指向是 window，那么 name 的输出结果就为 Jack，这是一种不存在 new 关键词的情况。



那当构造函数中有 return 一个对象的操作，结果又会是什么样子呢？

```javascript
function Person(){
   this.name = 'Jack'; 
   return {age: 18}
}
var p = new Person(); 
console.log(p)  // {age: 18}
console.log(p.name) // undefined
console.log(p.age) // 18
```

可以看到，当构造函数最后 return 出来的是一个和 this 无关的对象时，new 命令会直接返回这个新对象，而不是通过 new 执行步骤生成的 this 对象。



但是这里要求构造函数必须是返回一个对象，如果返回的不是对象，那么还是会按照 new 的实现步骤，返回新生成的对象。接下来再改动一下：

```javascript
function Person(){
   this.name = 'Jack'; 
   return 'tom';
}
var p = new Person(); 
console.log(p)  // {name: 'Jack'}
console.log(p.name) // Jack
```

可以看到，当构造函数中 return 的不是一个对象时，那么它还是会根据 new 关键词的执行逻辑，生成一个新的对象（绑定了最新 this），最后返回出来。



**总结：new 关键词执行之后总是会返回一个对象，要么是实例对象，要么是 return 语句指定的对象。**

### （2）基本实现

**new操作符的执行过程：**

（1）首先创建了一个新的空对象

（2）设置原型，将对象的原型设置为函数的 prototype 对象。

（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）

（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。



具体实现：

```javascript
function objectFactory() {
  let newObject = null,
    constructor = Array.prototype.shift.call(arguments),
    result = null;
  // 参数判断
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObject;
}
// 使用方法
objectFactory(构造函数, 初始化参数);
```

## 2. apply & call & bind 

### （1）原理

call、apply 和 bind 是 Function 对象上的三个方法，调用这三个方法的必须是一个函数。



这三个函数的基本语法如下：

```javascript
func.call(thisArg, param1, param2, ...)
func.apply(thisArg, [param1,param2,...])
func.bind(thisArg, param1, param2, ...)
```

其中 func 是要调用的函数，thisArg 一般为 this 所指向的对象，后面的 param1、2 为函数 func 的多个参数，如果 func 不需要参数，则后面的 param1、2 可以不写。



这三个方法共有的、比较明显的作用就是，都可以改变函数 func 的 this 指向。call 和 apply 的区别在于，传参的写法不同：apply 的第 2 个参数为数组； call 则是从第 2 个至第 N 个都是给 func 的传参；而 bind 和这两个（call、apply）又不同，bind 虽然改变了 func 的 this 指向，但不是马上执行，而这两个（call、apply）是在改变了函数的 this 指向之后立马执行。

### （2）使用场景

**1）判断数据类型**

用 Object.prototype.toString 来判断类型是最合适的，借用它几乎可以判断所有类型的数据：

```javascript
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/^$/, '$1');
}
```

判断数据类型就是借用了 Object 的原型链上的 toString 方法，最后返回用来判断传入的 obj 的字符串，来确定最后的数据类型。



**2）类数组借用方法**

类数组因为不是真正的数组，所有没有数组类型上自带的种种方法，所以可以利用一些方法去借用数组的方法，比如借用数组的 push 方法，看下面的代码。

```javascript
var arrayLike = { 
  0: 'java',
  1: 'script',
  length: 2
} 
Array.prototype.push.call(arrayLike, 'jack', 'lily'); 
console.log(typeof arrayLike); // 'object'
console.log(arrayLike);
// {0: "java", 1: "script", 2: "jack", 3: "lily", length: 4}
```

可以看到，arrayLike 是一个对象，模拟数组的一个类数组。从数据类型上看，它是一个对象。从上面的代码中可以看出，用 typeof 来判断输出的是 'object'，它自身是不会有数组的 push 方法的，这里就用 call 的方法来借用 Array 原型链上的 push 方法，可以实现一个类数组的 push 方法，给 arrayLike 添加新的元素。



从上面的控制台输出结果可以看出，push 满足了我们想要实现添加元素的诉求。



**3）获取数组的最大 / 最小值**

可以用 apply 来实现数组中判断最大 / 最小值，apply 直接传递数组作为调用方法的参数，也可以减少一步展开数组，可以直接使用 Math.max、Math.min 来获取数组的最大值 / 最小值：

```javascript
let arr = [13, 6, 10, 11, 16];
const max = Math.max.apply(Math, arr); 
const min = Math.min.apply(Math, arr);
console.log(max);  // 16
console.log(min);  // 6
```

**4）继承**

下面来看一下组合继承方式，代码如下：

```javascript
function Parent3 () {
    this.name = 'parent3';
    this.play = [1, 2, 3];
  }
  Parent3.prototype.getName = function () {
    return this.name;
  }
  function Child3() {
    Parent3.call(this);
    this.type = 'child3';
  }
  Child3.prototype = new Parent3();
  Child3.prototype.constructor = Child3;
  var s3 = new Child3();
  console.log(s3.getName());  // 'parent3'
```

### （2）基本实现

**1）call 函数的实现步骤：**

1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。

1. 处理传入的参数，截取第一个参数后的所有参数。
2. 将函数作为上下文对象的一个属性。

1. 使用上下文对象来调用这个方法，并保存返回结果。
2. 删除刚才新增的属性。

1. 返回结果。

```javascript
// call函数实现
Function.prototype.myCall = function(context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.error("type error");
  }
  // 获取参数
  let args = [...arguments].slice(1),
    result = null;
  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;
  // 将调用函数设为对象的方法
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 将属性删除
  delete context.fn;
  return result;
};
```

**2）apply 函数的实现步骤：**

1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。

1. 将函数作为上下文对象的一个属性。
2. 判断参数值是否传入

1. 使用上下文对象来调用这个方法，并保存返回结果。
2. 删除刚才新增的属性

1. 返回结果

```javascript
// apply 函数实现
Function.prototype.myApply = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let result = null;
  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;
  // 将函数设为对象的方法
  context.fn = this;
  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};
```

**3）bind 函数的实现步骤：**

1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
2. 保存当前函数的引用，获取其余传入参数值。

1. 创建一个函数返回
2. 函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。

```javascript
// bind 函数实现
Function.prototype.myBind = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  // 获取参数
  var args = [...arguments].slice(1),
    fn = this;
  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
```