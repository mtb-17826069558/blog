<!--  -->
# JavaScript学习笔记（十三）-- DOM(上，操作属性）

- 
  和 `getElementsByClassName` 一样，获取到的是一个长得很像数组的元素
- 必须要用索引才能得到准确的 DOM 元素

### **querySelector**

- `querySelector` 是按照选择器的方式来获取元素
- 也就是说，按照我们写 css 的时候的选择器来获取

- 这个方法只能获取到一个元素，并且是页面中第一个满足条件的元素

```js
console.log(document.querySelector('div')) // 获取页面中的第一个 div 元素 
console.log(docuemnt.querySelector('.box')) // 获取页面中第一个有 box 类名的元素
console.log(document.querySelector('#box')) // 获取页面中第一个 id 名为 box 的元素
```

### **querySelectorAll**

- `querySelectorAll` 是按照选择器的方式来获取元素
- 这个方法能获取到所有满足条件的元素，以一个伪数组的形式返回

```js
console.log(document.querySelectorAll('div')) // 获取页面中的所有的 div 元素 
console.log(docuemnt.querySelectorAll('.box')) // 获取页面中所有有 box 类名的元素
```

- 获取到的是一组数据，也是需要用索引来获取到准确的每一个 DOM 元素

### **操作属性**

- 通过我们各种获取元素的方式获取到页面中的标签以后
- 我们可以直接操作 DOM 元素的属性，就能直接把效果展示在页面上

### **innerHTML**

- 获取元素内部的 HTML 结构

```html
<body>
 <div>
 <p>
 <span>hello</span>
 </p>
 </div>
 <script>
 var div = document.querySelector('div')
 console.log(div.innerHTML)
  /*
   
      <p>
        <span>hello</span>
      </p>
  
  */
 </script>
</body>
```

- 设置元素的内容

```html
<body>
 <div></div>
 <script>
   var div = document.querySelector('div')
   div.innerHTML = '<p>hello</p>'
 </script>
</body>
```

- 设置完以后，页面中的 div 元素里面就会嵌套一个 p 元素

### **innerText**

- 获取元素内部的文本（只能获取到文本内容，获取不到 html 标签）

```html
<body>
 <div>
 <p>
 <span>hello</span>
 </p>
 </div>
 <script>
   var div = document.querySelector('div')
   console.log(div.innerText) // hello
 </script>
</body>
```

- 可以设置元素内部的文本

```html
<body>
 <div></div>
 <script>
   var div = document.querySelector('div')
   div.innerText = '<p>hello</p>'
 </script>
</body>
```

- 设置完毕以后，会把 `<p>hello</p>` 当作一个文本出现在 div 元素里面，而不会把 p 解析成标签

### **getAttribute**

- 获取元素的某个属性（包括自定义属性）

```html
<body>
 <div a="100" class="box"></div>
 <script>
   var div = document.querySelector('div')
   console.log(div.getAttribute('a')) // 100
   console.log(div.getAttribute('class')) // box
 </script>
</body>
```

### **setAttribute**

- 给元素设置一个属性（包括自定义属性）

```html
<body>
 <div></div>
 <script>
 var div = document.querySelector('div')
   div.setAttribute('a', 100)
   div.setAttribute('class', 'box')
   console.log(div) // <div a="100" class="box"></div>
 </script>
</body>
```

### **removeAttribute**

- 直接移除元素的某个属性

```html
<body>
 <div a="100" class="box"></div>
 <script>
   var div = document.querySelector('div')
   div.removeAttribute('class')
   console.log(div) // <div a="100"></div>
 </script>
</body>
```

### **style**

- 专门用来给元素添加 css 样式的
- 添加的都是行内样式

```html
<body>
 <div></div>
 <script>
   var div = document.querySelector('div')
   div.style.width = "100px"
   div.style.height = "100px"
   div.style.backgroundColor = "pink"
   console.log(div) 
 // <div style="width: 100px; height: 100px; background-color: pink;"></div>
 </script>
</body>
```

- 页面中的 div 就会变成一个宽高都是100，背景颜色是粉色

### **className**

- 专门用来操作元素的 类名的

```html
<body>
 <div class="box"></div>
 <script>
   var div = document.querySelector('div')
   console.log(div.className) // box
 </script>
</body>
```

- 也可以设置元素的类名，不过是全覆盖式的操作

```html
<body>
 <div class="box"></div>
 <script>
   var div = document.querySelector('div')
   div.className = 'test'
   console.log(div) // <div class="test"></div>
 </script>
</body>
```

- 在设置的时候，不管之前有没有类名，都会全部被设置的值覆盖