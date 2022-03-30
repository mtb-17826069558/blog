<!--  -->
# JavaScript学习笔记（二十）-- DOM动画效果

### **DOM动画效果**

1. 让一个元素从左至右进行运动

```html
<div id="box"></div>
        var box = document.getElementById("box");
        var t = null;
        t = setInterval(function(){
        
    })
```

### **运动的终止条件**

```js
t = setInterval(function(){终止条件})    // 元素的属性值 === 目标点
if(dom.attr === target){
     clearInterval(t);
}
```

### **运动的三要素**

1. 起始点

一个运动的起始点其实就是当前元素的位置，我们通过API获取当前元素的位置，让这个位置作为运动的起始。

1. 目标
2. 速度

### **DOM动画效果封装**

**单属性运动框架:**

```js
function move( ele , attr , target){
        // 1. 关闭开启定时器;
        clearInterval( ele.timer );
        ele.timer = setInterval( function(){
                // 2. 计算速度;
                if(attr === "opacity"){
                    var iNow = parseInt(getComputedStyle(ele)[attr] * 100); //0 ~ 100
                }else{
                    var iNow = parseInt(getComputedStyle(ele)[attr]); //100
                }
                var speed = (target - iNow) / 10;
                // 3. 速度取整;
                if(speed > 0){
                      speed = Math.ceil(speed);
                }else{
                      speed = Math.floor(speed);
                }
                if(attr === "opacity"){
                      ele.style[attr] = (iNow + speed) / 100 ;
                }else{
                      ele.style[attr] = iNow + speed + "px";
                }
                // 4. 终止条件;
                if(iNow === target){
                      clearInterval(ele.timer);
                }
            } , 50)
       }
```

### **多属性运动框架 (拓展)**

- 多属性运动框架