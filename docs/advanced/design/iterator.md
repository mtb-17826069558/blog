# 迭代器模式

## 1. 什么是迭代器模式？

**迭代器模式** （Iterator Pattern）用于顺序地访问聚合对象内部的元素，又无需知道对象内部结构。使用了迭代器之后，使用者不需要关心对象的内部构造，就可以按序访问其中的每个元素。



银行里的点钞机就是一个迭代器，放入点钞机的钞票里有不同版次的人民币，每张钞票的冠字号也不一样，但当一沓钞票被放入点钞机中，使用者并不关心这些差别，只关心钞票的数量，以及是否有假币。



这里使用 JavaScript 的方式来点一下钞：

```js
const bills = ['MCK013840031', 'MCK013840032', 'MCK013840033', 'MCK013840034', 'MCK013840035']

bills.forEach(function(bill) {
    console.log('当前钞票的冠字号为 ' + bill)
})
```

由于JavaScript 已经内置了迭代器的实现，所以实现起来非常简单。

## 2. 迭代器的简单实现

前面的 `forEach` 方法是在 IE9 之后才原生提供的，那么在 IE9 之前的时代里，如何实现一个迭代器呢，可以使用 `for` 循环自己实现一个 `forEach`：

```js
var forEach = function(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb.call(arr[i], arr[i], i, arr)
    }
}
forEach(['hello', 'world', '!'], function(currValue, idx, arr) {
    console.log('当前值 ' + currValue + '，索引为 ' + idx)
})
// 输出： 当前值 hello，索引为 0
// 输出： 当前值 world，索引为 1
// 输出： 当前值 !    ，索引为 2
```

## 3. JavaScript 原生支持

随着 JavaScript 的 ECMAScript 标准每年的发展，给越来越多好用的 API 提供了支持，比如 Array 上的 `filter`、`forEach`、`reduce`、`flat` 等，还有 Map、Set、String 等数据结构，也提供了原生的迭代器支持，给开发提供了很多便利。



JavaScript 中还有很多类数组结构，比如：

- `arguments`：函数接受的所有参数构成的类数组对象；
- `NodeList`：是 `querySelector` 接口族返回的数据结构；

- `HTMLCollection`：是 `getElementsBy` 接口族返回的数据结构；



对于这些类数组结构，可以通过一些方式来转换成普通数组结构，以 `arguments` 为例：

```js
// 方法一
var args = Array.prototype.slice.call(arguments)
// 方法二
var args = [].slice.call(arguments)
// 方法三 ES6提供
const args = Array.from(arguments)
// 方法四 ES6提供
const args = [...arguments];
```

转换成数组之后，就可以使用 JavaScript 在 Array 上提供的各种方法了。

## 4. ES6 中的迭代器

ES6 规定，默认的迭代器部署在对应数据结构的 `Symbol.iterator` 属性上，如果一个数据结构具有 `Symbol.iterator` 属性，就被视为可遍历的，就可以用 `for...of` 循环遍历它的成员。也就是说，`for...of`循环内部调用的是数据结构的`Symbol.iterator` 方法。



`for-of` 循环可以使用的范围包括 Array、Set、Map 结构、上文提到的类数组结构、Generator 对象，以及字符串。



通过 `for-of` 可以使用 `Symbol.iterator` 这个属性提供的迭代器可以遍历对应数据结构，如果对没有提供 `Symbol.iterator` 的目标使用 `for-of` 则会抛错：

```js
var foo = { a: 1 }
for (var key of foo) {
    console.log(key)
}
// 输出： Uncaught TypeError: foo is not iterable
```

可以给一个对象设置一个迭代器，让一个对象也可以使用 `for-of` 循环：

```js
var bar = {
    a: 1,
    [Symbol.iterator]: function() {
        var valArr = [
            { value: 'hello', done: false },
            { value: 'world', done: false },
            { value: '!', done: false },
            { value: undefined, done: true }
        ]
        return {
            next: function() {
                return valArr.shift()
            }
        }
    }
}
for (var key of bar) {
    console.log(key)
}
// 输出： hello
// 输出： world
// 输出： !
```

可以看到 `for-of` 循环连 `bar` 对象自己的属性都不遍历了，遍历获取的值只和 `Symbol.iterator` 方法实现有关。

## 5. 迭代器模式总结

迭代器模式早已融入我们的日常开发中，在使用 `filter`、`reduce`、`map` 等方法的时候，不要忘记这些便捷的方法就是迭代器模式的应用。当使用迭代器方法处理一个对象时，可以关注与处理的逻辑，而不必关心对象的内部结构，侧面将对象内部结构和使用者之间解耦，也使得代码中的循环结构变得紧凑而优美。