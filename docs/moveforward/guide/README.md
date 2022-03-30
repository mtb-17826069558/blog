---
title: 前端知识进阶
---

## scss

### 1.什么是scss?
Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 、嵌套 、混合 、导入等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库有助于更好地组织管理样式文件，以及更高效地开发项目。

本文所说到的SCSS是Sass的一种语格式，这种形式仅在CSS3上进行拓展，所有的CSS3的语法都在SCSS中通用，同时还加入了Sass的特色功能。这种格式的文件以.scss 作为拓展名。

### 2. SCSS的基本使用

（1）在`Node.js`环境下，直接在命令行输入以下命令来安装：

```
npm install -g sass
```

（2）在Vue项目中安装Sass：

```
npm install css-loader style-loader --save-dev
npm install node-sass sass-loader --save-dev
```

使用：

```
<style lang = "scss">

</style>
```

### 3. SCSS入门及使用技巧

#### 3.1 使用变量 $

我们可以通过变量来对属性值进行复用，比如图片、字体大小、字体颜色、长度大小等，这样如果我们后期就可以通过更改变量从而更改全局中使用该变量的值，从而实现快速更改“主题”。



需要注意的是，这些定义的变量支持**块级作用域**，嵌套规则内定义的变量只能在嵌套规则内使用，不在嵌套规则内定义的变量可以在全局使用。



**1. 统一配置颜色、字体大小等**

（1）定义

```
$colorA : red;
$colorB : green;
$colorC : blue;

$fontA : 12px;
$fontB : 14px;
$fontC : 16px;
```

（2）使用



```
color：$colorA;
font-size: $fontA;
```



**2. 图片的配置以及全局引入**



在SCSS中使用图片，可能存在以下问题：



- 如果样式文件和使用该样式文件的vue文件不在同一目录，可能图片会找不到
- 如果将图片的路径配置变量卸载vue文件的`style`中，会导致图片和样式分离



根据以上问题，我们可以把图片路径写成配置文件，然后全局引入，这样就可以统一管理文件的路径：



```
$path : './primary/assets/img/';
$logo : $path + 'logo.png';
$icon-A : $path + 'icon-A.png';
```



**注意：** 在定义变量时，`$font-B`和 `$font_B`是一样的含义，写在后面你的会覆盖前面的变量。



#### 3.2 嵌套规则



SCSS 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器。这样避免了重复输入父选择器，而且令复杂的 CSS 结构更易于管理。



##### 3.2.1  选择器

**1. 父选择器**

在嵌套 CSS 规则时，我们用**&**来代表嵌套规则外层的父选择器。



编译后的 CSS 文件中 `&` 将被替换成嵌套外层的父选择器，如果含有多层嵌套，最外层的父选择器会一层一层向下传递。



编译前：

```
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { 
      text-decoration: underline; 
  }
}
```

编译后：

```
a {
  font-weight: bold;
  text-decoration: none;
  a:hover { 
      text-decoration: underline; 
  }
}
```



**注意**：我们只能在嵌套内部使用父级选择器，否则SCSS找不到父级元素会直接报错。

**2. 子选择器**

```
    li {
        float:left;     
        >a {
            display:inline-block;
            padding:10px;
        }
    }
```

##### 3.2.2 属性嵌套

有些属性遵循相同的命名空间，比如：`font-weight`，`font-size`，`font-family`，它们 的命名空间都是`font`，为避免重复，就可以将属性嵌套在命名空间中：



编译前：

```
p {
  font: {
    family: fantasy;
    size: 30px;
    weight: bold;
  }
}
```

编译后：

```
p {
  font-family: fantasy;
  font-size: 30px;
  font-weight: bold; 
 }
```

**注意：** SCSS识别一个属性以分号结尾时，则判断为一个属性；以大括号结尾时，则判断为一个嵌套属性。规则是：将外部的属性以及内部的属性通过中划线连接起来形成一个新的属性。

#### 3.3 导入SCSS文件

我们可以使用 `@import` 来导入 SCSS 文件。被导入的文件将合并编译到同一个 CSS 文件中。另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。



我们可以把公共的样式定义在`base.scss`文件中，在使用时导入：

```
@import "./base.scss"
```

#### 3.4 注释

SCSS 支持标准的 CSS 多行注释 `/* */`，以及单行注释 `//`，前者会被完整输出到编译后的 CSS 文件中，而后者则不会：



编译前：

```
/* 这
 * 是
 * 颜
 * 色 */
body { color: black; }

// 这是超链接颜色
a { color: green; }
```



编译后：

```
/* 这
 * 是
 * 颜
 * 色 */
body { color: black; }

a { color: green; }
```



#### 3.5 插值语句

通过 `#{}` 插值语句可以在选择器或属性名中使用变量：



编译前：

```
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

编译后：

```
p.foo {
  border-color: blue; 
}
```

**应用：**当有两个页面样式类似时，我们可以将类似的样式定义成为页面混合器，使用插值进行动态命名：

```
@mixin content($class) { 
 .#{$class} {   
     position: relative;    
     background-color: #fff;    
     overflow: hidden;    
  } 
}
```

#### 3.6混合器（函数）

我们可以使用`@mixin` 来实现一个函数，直接在`@mixin` 后面加函数名称与样式即可，函数中的内一个语句都相当于`return`值，除此之外函数还可以添加参数，参数可以指定默认值：



**定义函数：**

```
@mixin position($pos:absolute,$top:0,$left:0,$w:100%,$h:100%){
  position:$pos;
  top:$top;
  left:$left;
  width:$w;
  height:$h;
}
```

**使用函数：**



我们使用`@include`引入定义的函数，格式是在`@include`后面添加函数名称即可，如果有参数，就将参数一同写上：

```
  @include position(relative,100px,100px);
```



#### 3.7 [@extend ]() 继承 

我们有时会有遇到这种情况：一个元素使用的样式和另一个元素使用的样式完全相同，但是又添加了额外的样式。在SCSS中提供了`@extend`来讲一个选择器下的所有样式继承给另一个选择器：

```
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

上面的样式中，`.seriousError`选择器继承了`.error`选择器的所有属性，同时还定义了自己额外的属性。



`**@extend**`**的作用** 就是将重复使用的样式延伸给包含这个样式的特殊样式。如果这个样式重复较多，我们可以将它定义为一个函数，如果使用的不是特别多，但是会使用到，就可以使用`@extend`来继承，这样就减少了代码的冗余。



一个样式不仅可以继承其他的样式，当已经继承之后还能继续被别的样式继承，这就是**继续延伸**。



我们还可以自定义一个被继承的样式，使用% 定义，它本身不会起作用，只能用于被继承，形式如下：

```
%border-style {
  border:1px solid #eee;
  border-radius: 5px;
}

.container {
	@extend %border-style;
}
```

#### 3.8 运算的使用

SassScript 支持数字的加减乘除、取整等运算 (`+, -, *, /, %`)，如果必要会在不同单位间转换值。

（1）进行数学运算

```
p {
  font: 10px/8px;  
}
```

如果需要使用变量，同时又要确保 / 不做除法运算而是完整地编译到 CSS 文件中，只需要用 `#{}` 插值语句将变量包裹：

```
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

如果有运算顺序之分，需要使用`()`：

```
p {
  width: 1px + (2px * 3);
}
```

（2）进行颜色运算

```
p {
  color: #010203 * 2;
}
```





