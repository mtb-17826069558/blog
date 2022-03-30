<!--  -->
# JavaScript学习笔记（三十一）-- jQuery（上）

## **jQuery**

- `jQuery` 是一个前端库，也是一个方法库
- 他里面封装着一些列的方法供我们使用

- 我们常用的一些方法它里面都有，我们可以直接拿来使用就行了
- `jQuery` 之所以好用，很多人愿意使用，是因为他的几个优点太强大了

1. 优质的选择器和筛选器
2. 好用的隐式迭代

1. 强大的链式编程

- 因为这些东西的出现，很多时候我们要做的事情被 “一行代码解决”
- 接下来我们就来认识一下 `jQuery`

## **jQuery 的使用**

- [jQuery官网](https://link.zhihu.com/?target=https%3A//jquery.com/)

- 官网是全英文的
- 也没啥可看的，不过没事的时候可以看看了解一下

- [jQuery方法大全中文网](https://link.zhihu.com/?target=http%3A//jquery.cuishifeng.cn/)

- 这个网站可以多看看
- 里面是 `jQuery` 的方法大全，而且是中文的

- 我们要使用 `jQuery` 首先要下载一个

- 可以去官网下载，也可以直接百度搜索下载，都可以

- 然后就是再页面里面引入 `jQuery.js` 就行了

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <title>Document</title>
</head>
<body>
 <script src="./jquery/jquery.js"></script>
</body>
</html>
```

- 然后就可以开始使用了
- `jQuery` 向全局暴露的接口就是 `jQuery` 或者 `$` 都行

## **选择器和筛选器**

- 选择器和筛选器就是用来帮我们获取 DOM 元素的

### **选择器**

- `jQuery` 有着相当强大的选择器

```js
// 按照 id 获取页面中的元素
const ele = jQuery('#box') 
const ele = $('#box')
```

- 上面两个都可以按照 id 来获取元素

```js
// 按照类名来选择
const eles = jQuery('.a')
const eles = $('.a')
```

- 上面就是按照类名来选择元素，可以获取到一组元素

```js
const lis = jQuery('li')
const lis = $('li')
```

- 上面就是按照标签名来获取元素，可以获取到一组元素

```js
const eles = jQuery('ul > li')
const eles = $('ul > li')
```

- 上面就是按照选择器来获取元素，可以获取到一组元素

### **特殊选择器**

- 直接找到第一个

```js
$('li:first') // 找到所有 li 中的第一个
```

- 直接找到最后一个

```js
$('li:last') // 找到所有 li 中的最后一个
```

- 直接找到第几个

```js
$('li:eq(3)') // 找到所有 li 中索引为 3 的那个
```

- 找到所有奇数个

```js
$('li:odd') // 找到所有 li 中索引为 奇数 的
```

- 找到所有偶数

```js
$('li:even') // 找到所有 li 中索引为 偶数 的
```

### **筛选器**

- jQuery 的筛选器就是在选择器选择到一组元素以后
- 对元素进行筛选，也可以对准确的某一个元素进行判断和获取

1. 找到所有元素中的第一个
   `$('li').first()`
2. 找到所有元素中的最后一个
   `$('li').last()`

1. 找到某一个元素的下一个兄弟元素
   `$('li:eq(3)').next()`
2. 找到某一个元素的上一个兄弟元素
   `$('li:eq(3)').prev()`

1. 找到某一个元素的后面的所有兄弟元素
   `$('li:eq(3)').nextAll()`
2. 找到某一个元素的前面的所有兄弟元素
   `$('li:eq(3)').prevAll()`

1. 找到某一个元素的父元素
   `$('li:eq(3)').parent()`
2. 找到某一个元素的所有结构父级，一直到 html
   `$('li:eq(3)').parents()`

1. 找到一组元素中的某一个

```js
// 在 li 的所有父级里面找到所有 body 标签
$('li').parents().find('body')
// 找到 div 标签下所有后代元素中所有类名为 box 的元素
$('div').find('.box')
```

## **属性操作**

- 给一个元素添加某个属性

```js
// 给 div 元素添加一个 id 属性，值是 box
$('div').prop('id', 'box')
// 获取 div 的 id 属性
console.log($('div').prop('id'))
```

- prop 这个方法只能添加元素自己本身就有的属性
- 如果是添加的自定义属性，不会显示在标签上，但是可以使用

- 给一个元素添加某个自定义属性

```js
// 给 div 添加一个 index 属性，值是 1
$('div').attr('index', 1)
// 获取 div 的 index 属性
console.log($('div').attr('index'))
```

- 移除元素的某一个属性

```js
// 移除元素自己本身的属性
$('div').removeProp('id')
// 移除元素的自定义属性
$('div').removeAttr('index')
```

- 操作元素的类名

```js
// 判断某一个元素有没有某一个 class
$('div').hasClass('box') // true 表示该元素有 box 类名，false 表示该元素没有 box 类名
// 给元素添加一个类名
$('div').addClass('box2') // 给 div 元素添加一个 box2 类名
// 移除元素的类名
$('div').removeClass('box') // 移除 div 的 box 类名
// 切换元素类名
$('div').toggleClass('box3') // 如果元素本身有这个类名就移除，本身没有就添加
```

- 操作元素的内容

```js
// 给元素的 innerHTML 赋值
$('div').html('<span>hello world</span>')
// 获取元素的 innerHTML
$('div').html()
// 给元素的 innerText 赋值
$('div').text('hello world')
// 获取元素的 innerText
$('div').text()
// 给元素的 value 赋值
$('input').val('admin')
// 获取元素的 value 值
$('input').val()
```

## **操作样式**

- jQuery 操作元素的样式就是一个方法 `css`

```js
// 给元素设置一个 css 样式
$('div').css('width', '100px')
// 获取元素的某一个样式
$('div').css('width')
// 给元素设置一组样式
$('div').css({
 width: '100px',
 height: '200px'
})
```