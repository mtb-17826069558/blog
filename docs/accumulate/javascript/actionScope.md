<!-- ---
title: 五、函数进阶（作用域）
date: 2020-05-29
--- -->

# JavaScript学习笔记（五）-- 函数进阶（作用域）

## 函数（下）

## 作用域（重点）

- 什么是作用域，就是一个变量可以生效的范围
- 变量不是在所有地方都可以使用的，而这个变量的使用范围就是作用域

### 全局作用域

- 全局作用域是最大的作用域
- 在全局作用域中定义的变量可以在任何地方使用

- 页面打开的时候，浏览器会自动给我们生成一个全局作用域 window
- 这个作用域会一直存在，直到页面关闭就销毁了

```js
// 下面两个变量都是存在在全局作用域下面的，都是可以在任意地方使用的
var num = 100
var num2 = 200
```

### 局部作用域

- 局部作用域就是在全局作用域下面有开辟出来的一个相对小一些的作用域
- 在局部作用域中定义的变量只能在这个局部作用域内部使用

- **在 JS 中只有函数能生成一个局部作用域，别的都不行**
- 每一个函数，都是一个局部作用域

```js
// 这个 num 是一个全局作用域下的变量 在任何地方都可以使用
var num = 100
function fn() {
  // 下面这个变量就是一个 fn 局部作用域内部的变量
  // 只能在 fn 函数内部使用
  var num2 = 200
}
fn()
```

## 变量使用规则（重点）

- 有了作用域以后，变量就有了使用范围，也就有了使用规则
- 变量使用规则分为两种，**访问规则** 和 **赋值规则**

### 访问规则

- 当我想获取一个变量的值的时候，我们管这个行为叫做 **访问**
- 获取变量的规则：

- 首先，在自己的作用域内部查找，如果有，就直接拿来使用
- 如果没有，就去上一级作用域查找，如果有，就拿来使用

- 如果没有，就继续去上一级作用域查找，依次类推
- 如果一直到全局作用域都没有这个变量，那么就会直接报错（该变量 is not defined）

```js
var num = 100
function fn() {
  var num2 = 200
  
  function fun() {
    var num3 = 300
    
    console.log(num3) // 自己作用域内有，拿过来用
    console.log(num2) // 自己作用域内没有，就去上一级，就是 fn 的作用域里面找，发现有，拿过来用
    console.log(num) // 自己这没有，去上一级 fn 那里也没有，再上一级到全局作用域，发现有，直接用
    console.log(a) // 自己没有，一级一级找上去到全局都没有，就会报错
  }
  
  fun()
}
fn()
```

- 变量的访问规则 也叫做 作用域的查找机制
- 作用域的查找机制只能是向上找，不能向下找

```js
function fn() {
  var num = 100
}
fn()
console.log(num) // 发现自己作用域没有，自己就是全局作用域，没有再上一级了，直接报错
```

### 赋值规则

- 当你想给一个变量赋值的时候，那么就先要找到这个变量，在给他赋值
- 变量赋值规则：

- 先在自己作用域内部查找，有就直接赋值
- 没有就去上一级作用域内部查找，有就直接赋值

- 在没有再去上一级作用域查找，有就直接赋值
- 如果一直找到全局作用域都没有，那么就把这个变量定义为全局变量，在给他赋值

```js
function fn() {
  num = 100
}
fn()
// fn 调用以后，要给 num 赋值
// 查看自己的作用域内部没有 num 变量
// 就会向上一级查找
// 上一级就是全局作用域，发现依旧没有
// 那么就会把 num 定义为全局的变量，并为其赋值
// 所以 fn() 以后，全局就有了一个变量叫做 num 并且值是 100
console.log(num) // 100
```