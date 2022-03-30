<!--  -->
# JavaScript学习笔记（十八）-- ES5

## **ES5**

- 我们所说的 ES5 和 ES6 其实就是在 js 语法的发展过程中的一个版本而已
- 比如我们使用的微信

- 最早的版本是没有支付功能的
- 随着时间的流逝，后来出现了一个版本，这个版本里面有支付功能了



- ECMAScript 就是 js 的语法

- 以前的版本没有某些功能
- 在 ES5 这个版本的时候增加了一些功能

- 在 ES6 这个版本的时候增加了一些功能



- 因为浏览器是浏览器厂商生产的

- ECMAScript 发布了新的功能以后，浏览器厂商需要让自己的浏览器支持这些功能
- 这个过程是需要时间的

- 所以到现在，基本上大部分浏览器都可以比较完善的支持了
- 只不过有些浏览器还是不能全部支持

- 这就出现了兼容性问题
- 所以我们写代码的时候就要考虑哪些方法是 ES5 或者 ES6 的，看看是不是浏览器都支持

## **ES5 增加的数组常用方法**

### **数组方法之 forEach**

- `forEach` 用于遍历数组，和 for 循环遍历数组一个道理
- 语法： `数组.forEach(function (item, index, arr) {})`

```js
var arr = ['a', 'b', 'c']
// forEach 就是将数组循环遍历，数组中有多少项，那么这个函数就执行多少回
arr.forEach(function (item, index, arr) {
  // 在这个函数内部
  // item 就是数组中的每一项
  // index 就是每一项对应的索引
  // arr 就是原始数组
  console.log(item) 
  console.log(index) 
  console.log(arr) 
})
```

- 上面的代码就等价于

```js
var arr = ['a', 'b', 'c']
for (var i = 0; i < arr.length; i++) {
  fn(arr[i], i, arr)
}
function fn(item, index, arr) {
  console.log(item)
  console.log(index)
  console.log(arr)
}
```

### **数组方法之 map**

- `map` 用于遍历数组，和 forEach 基本一致，只不过是有一个返回值



- 语法： `数组.map(function (item, index, arr) {})`
- 返回值： 一个新的数组

```js
var arr = ['a', 'b', 'c']
// forEach 就是将数组循环遍历，数组中有多少项，那么这个函数就执行多少回
var newArr = arr.map(function (item, index, arr) {
  // 函数里面的三个参数和 forEach 一样
  // 我们可以在这里操作数组中的每一项，
  // return 操作后的每一项
  return item + '11'
})
console.log(newArr) // ["a11", "b11", "c11"]
```

- 返回值就是我们每次对数组的操作
- 等价于

```js
var arr = ['a', 'b', 'c']
var newArr = []
for (var i = 0; i < arr.length; i++) {
  newArr.push(fn(arr[i], i, arr))
}
function fn(item, index, arr) {
  return item + '11'
}
console.log(newArr)
```

### **数组方法之 filter**

- `filter` ： 是将数组遍历一遍，按照我们的要求把数数组中符合的内容过滤出来
- 语法： `数组.filter(function (item, index, arr) {})`

- 返回值： 根据我们的条件过滤出来的新数组

```js
var arr = [1, 2, 3, 4, 5]
var newArr = arr.filter(function (item, index, arr) {
  // 函数内部的三个参数和 forEach 一样
  // 我们把我们的条件 return 出去
  return item > 2
})
console.log(newArr) // [3, 4, 5]
```

- 新数组里面全都是大于 2 的数字
- 等价于

```js
var arr = [1, 2, 3, 4, 5]
var newArr = []
for (var i = 0; i < arr.length; i++) {
  if (fn(arr[i], i, arr)) {
    newArr.push(arr[i])
  }
}
function fn(item, index, arr) {
  return item > 2
}
console.log(newArr)
```

## **JSON 方法**

- `json` 是一种特殊的字符串个是，本质是一个字符串

```js
var jsonObj = '{ "name": "Jack", "age": 18, "gender": "男" }'
var jsonArr = '[{ "name": "Jack", "age": 18, "gender": "男" }, { "name": "Jack", "age": 18, "gender": "男" }, { "name": "Jack", "age": 18, "gender": "男" }]'
```

- 就是对象内部的 `key` 和 `value` 都用双引号包裹的字符串（必须是双引号）

## **JSON的两个方法**

- 我们有两个方法可以使用 `**JSON.parse**`
- `**json.stringify**` 是将 js 的对象或者数组转换成为 json 格式的字符串

### **JSON.parse**

- `JSON.parse` 是将 json 格式的字符串转换为 js 的对象或者数组

```js
var jsonObj = '{ "name": "Jack", "age": 18, "gender": "男" }'
var jsonArr = '[{ "name": "Jack", "age": 18, "gender": "男" }, { "name": "Jack", "age": 18, "gender": "男" }, { "name": "Jack", "age": 18, "gender": "男" }]'
var obj = JSON.parse(jsonStr)
var arr = JSON.parse(jsonArr)
console.log(obj)
console.log(arr)
```

- `obj` 就是我们 js 的对象
- `arr` 就是我们 js 的数组

### **JSON.stringify**

- `JSON.parse` 是将 json 格式的字符串转换为 js 的对象或者数组

```js
var obj = {
  name: 'Jack',
  age: 18,
  gender: '男'
}
var arr = [
  {
    name: 'Jack',
    age: 18,
    gender: '男'
  },
  {
    name: 'Jack',
    age: 18,
    gender: '男'
  },
  {
    name: 'Jack',
    age: 18,
    gender: '男'
  }
]
var jsonObj = JSON.stringify(obj)
var jsonArr = JSON.stringify(arr)
console.log(jsonObj)
console.log(jsonArr)
```

- `jsonObj` 就是 json 格式的对象字符串
- `jsonArr` 就是 json 格式的数组字符串

## **this 关键字**

- 每一个函数内部都有一个关键字是 `this`
- 可以让我们直接使用的

- 重点： **函数内部的 this 只和函数的调用方式有关系，和函数的定义方式没有关系**
- 函数内部的 this 指向谁，取决于函数的调用方式

- 全局定义的函数直接调用，`this => window`

```js
function fn() {
  console.log(this)
}
fn()
// 此时 this 指向 window
```

- 对象内部的方法调用，`this => 调用者`

```js
var obj = {
  fn: function () {
    console.log(this)
  }
}
obj.fn()
// 此时 this 指向 obj
```

- 定时器的处理函数，`this => window`

```js
setTimeout(function () {
  console.log(this)
}, 0)
// 此时定时器处理函数里面的 this 指向 window
```

- 事件处理函数，`this => 事件源`

```js
div.onclick = function () {
  console.log(this)
}
// 当你点击 div 的时候，this 指向 div
```

- 自调用函数，`this => window`

```js
(function () {
  console.log(this)
})()
// 此时 this 指向 window
```

### **call 和 apply 和 bind**

- 刚才我们说过的都是函数的基本调用方式里面的 this 指向
- 我们还有三个可以忽略函数本身的 this 指向转而指向别的地方

- 这三个方法就是 **call** / **apply** / **bind**
- 是强行改变 this 指向的方法

### **call**

- `call` 方法是附加在函数调用后面使用，可以忽略函数本身的 this 指向
- 语法： `函数名.call(要改变的 this 指向，要给函数传递的参数1，要给函数传递的参数2， ...)`

```js
var obj = { name: 'Jack' }
function fn(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
fn(1, 2)
fn.call(obj, 1, 2)
```

- `fn()` 的时候，函数内部的 this 指向 window
- `fn.call(obj, 1, 2)` 的时候，函数内部的 this 就指向了 obj 这个对象

- 使用 call 方法的时候

- 会立即执行函数
- 第一个参数是你要改变的函数内部的 this 指向

- 第二个参数开始，依次是向函数传递参数

### **apply**

- `apply` 方法是附加在函数调用后面使用，可以忽略函数本身的 this 指向
- 语法： `函数名.apply(要改变的 this 指向，[要给函数传递的参数1， 要给函数传递的参数2， ...])`

```js
var obj = { name: 'Jack' }
function fn(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
fn(1, 2)
fn.call(obj, [1, 2])
```

- `fn()` 的时候，函数内部的 this 指向 window
- `fn.apply(obj, [1, 2])` 的时候，函数内部的 this 就指向了 obj 这个对象

- 使用 apply 方法的时候

- 会立即执行函数
- 第一个参数是你要改变的函数内部的 this 指向

- 第二个参数是一个 **数组**，数组里面的每一项依次是向函数传递的参数

### **bind**

- `bind` 方法是附加在函数调用后面使用，可以忽略函数本身的 this 指向
- 和 call / apply 有一些不一样，就是不会立即执行函数，而是返回一个已经改变了 this 指向的函数

- 语法： `var newFn = 函数名.bind(要改变的 this 指向); newFn(传递参数)`

```js
var obj = { name: 'Jack' }
function fn(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
fn(1, 2)
var newFn = fn.bind(obj)
newFn(1, 2)
```

- bind 调用的时候，不会执行 fn 这个函数，而是返回一个新的函数
- 这个新的函数就是一个改变了 this 指向以后的 fn 函数

- `fn(1, 2)` 的时候 this 指向 window
- `newFn(1, 2)` 的时候执行的是一个和 fn 一摸一样的函数，只不过里面的 this 指向改成了 obj