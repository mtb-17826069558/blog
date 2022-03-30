<!--  -->
# JavaScript学习笔记（九）-- ES5 中常见的数组方法

## ES5 中常见的数组常用方法

- 之前我们讲过的数组常用方法都是 ES3 的方法
- 今天来说一些 ES5 中的方法

### indexOf

- indexOf 用来找到数组中某一项的索引
- 语法： indexOf(你要找的数组中的项)

```js
var arr = [1, 2, 3, 4, 5]
// 使用 indexOf 超找数组中的某一项
var index = arr.indexOf(3)
console.log(index) // 2
```

- 我们要找的是数组中值为 3 的那一项
- 返回的就是值为 3 的那一项在该数组中的索引



- 如果你要找的内容在数组中没有，那么就会返回 -1

```js
var arr = [1, 2, 3, 4, 5]
// 使用 indexOf 超找数组中的某一项
var index = arr.indexOf(10)
console.log(index) // -1
```

- 你要找的值在数组中不存在，那么就会返回 -1



### forEach

- 和 for 循环一个作用，就是用来遍历数组的
- 语法：arr.forEach(function (item, index, arr) {})

```js
var arr = [1, 2, 3]
// 使用 forEach 遍历数组
arr.forEach(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  console.log('数组的第 ' + index + ' 项的值是 ' + item + '，原始数组是', arr)
})
```

- forEach() 的时候传递的那个函数，会根据数组的长度执行
- 数组的长度是多少，这个函数就会执行多少回



### map

- 和 forEach 类似，只不过可以对数组中的每一项进行操作，返回一个新的数组

```js
var arr = [1, 2, 3]
// 使用 map 遍历数组
var newArr = arr.map(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  return item + 10
})
console.log(newArr) // [11, 12, 13]
```

### filter

- 和 map 的使用方式类似，按照我们的条件来筛选数组
- 把原始数组中满足条件的筛选出来，组成一个新的数组返回

```js
var arr = [1, 2, 3]
// 使用 filter 过滤数组
var newArr = arr.filter(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  return item > 1
})
console.log(newArr) // [2, 3]
```

- 我们设置的条件就是 > 1
- 返回的新数组就会是原始数组中所有 > 1 的项