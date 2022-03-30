# 策略模式

## 1. 什么是策略模式？

策略模式 （Strategy Pattern）又称政策模式，其定义一系列的算法，把它们一个个封装起来，并且使它们可以互相替换。封装的策略算法一般是独立的，策略模式根据输入来调整采用哪个算法。关键是策略的实现和使用分离。



在生活中，螺丝的规格有很多，螺丝刀尺寸也不少，如果每碰到一种规格就买一个螺丝刀，那就得堆满了螺丝刀。所以现在人们都用多功能的螺丝刀套装，螺丝刀把只需要一个，碰到不同规格的螺丝只要换螺丝刀头就行了，很方便，体积也变小很多。



再举个栗子，一辆车的轮胎有很多规格，在泥泞路段开的多的时候可以用泥地胎，在雪地开得多可以用雪地胎，高速公路上开的多的时候使用高性能轮胎，针对不同使用场景更换不同的轮胎即可，不需更换整个车。



这些都是策略模式的实例，螺丝刀/车属于封装上下文，封装和使用不同的螺丝刀头/轮胎，螺丝刀头/轮胎这里就相当于策略，可以根据需求不同来更换不同的使用策略。



在这些场景中，有以下特点：

1. 螺丝刀头/轮胎（策略）之间相互独立，但又可以相互替换；
2. 螺丝刀/车（封装上下文）可以根据需要的不同选用不同的策略；

## 2. 策略模式的实现

来看一个具体的例子，某个电商网站，通过打折促销来销售库存物品，有的商品满 100 减 30，有的商品满 200 减 80，有的商品直接 8 折出售，这样的逻辑该去实现呢。

```js
function priceCalculate(discountType, price) {
    if (discountType === 'minus100_30') {   		// 满100减30
        return price - Math.floor(price / 100) * 30
    }
    else if (discountType === 'minus200_80') {  // 满200减80
        return price - Math.floor(price / 200) * 80
    }
    else if (discountType === 'percent80') {    // 8折
        return price * 0.8
    }
}
priceCalculate('minus100_30', 270)    // 输出: 210
priceCalculate('percent80', 250)      // 输出: 200
```

通过判断输入的折扣类型来计算商品总价的方式，几个 `if-else` 就满足了需求，但是这样的做法的缺点也很明显：

1. `priceCalculate` 函数随着折扣类型的增多，`if-else` 判断语句会变得越来越臃肿；
2. 如果增加了新的折扣类型或者折扣类型的算法有所改变，那么需要更改 `priceCalculate` 函数的实现，这是违反开放-封闭原则的；

1. 可复用性差，如果在其他的地方也有类似这样的算法，但规则不一样，上述代码不能复用；



下面来改造一下，将计算折扣的**算法部分提取出来**保存为一个对象，折扣的**类型作为 key**，这样索引的时候**通过对象的键值索引调用具体的算法**：

```js
const DiscountMap = {
    minus100_30: function(price) {
        return price - Math.floor(price / 100) * 30
    },
    minus200_80: function(price) {
        return price - Math.floor(price / 200) * 80
    },
    percent80: function(price) {
        return price * 0.8
    }
}
// 计算总售价
function priceCalculate(discountType, price) {
    return DiscountMap[discountType] && DiscountMap[discountType](price)
}
priceCalculate('minus100_30', 270)
priceCalculate('percent80', 250)
// 输出: 210
// 输出: 200
```

这样**算法的实现和算法的使用就被分开了**，想添加新的算法也变得十分简单：

```js
DiscountMap.minus150_40 = function(price) {
    return price - Math.floor(price / 150) * 40
}
```

如果希望计算算法隐藏起来，那么可以借助 IIFE 使用闭包的方式，这时需要添加增加策略的入口，以方便扩展：

```js
const PriceCalculate = (function() {
    /* 售价计算方式 */
    const DiscountMap = {
        minus100_30: function(price) {      // 满100减30
            return price - Math.floor(price / 100) * 30
        },
        minus200_80: function(price) {      // 满200减80
            return price - Math.floor(price / 200) * 80
        },
        percent80: function(price) {        // 8折
            return price * 0.8
        }
    }
    
    return {
        priceClac: function(discountType, price) {
            return DiscountMap[discountType] && DiscountMap[discountType](price)
        },
        addStrategy: function(discountType, fn) {		// 注册新计算方式
            if (DiscountMap[discountType]) return
            DiscountMap[discountType] = fn
        }
    }
})()
PriceCalculate.priceClac('minus100_30', 270)	// 输出: 210
PriceCalculate.addStrategy('minus150_40', function(price) {
    return price - Math.floor(price / 150) * 40
})
PriceCalculate.priceClac('minus150_40', 270)	// 输出: 230
```

这样算法就被隐藏起来，并且预留了增加策略的入口，便于扩展。



下面就来实现一个通用的策略模式，可以根据上面的例子提炼一下策略模式，折扣计算方式可以被认为是策略（Strategy），这些策略之间可以相互替代，而具体折扣的计算过程可以被认为是封装上下文（Context），封装上下文可以根据需要选择不同的策略。



策略模式中主要有下面概念：

1. **Context** ：封装上下文，根据需要调用需要的策略，屏蔽外界对策略的直接调用，只对外提供一个接口，根据需要调用对应的策略；
2. **Strategy** ：策略，含有具体的算法，其方法的外观相同，因此可以互相代替；

1. **StrategyMap** ：所有策略的合集，供封装上下文调用；



结构图如下：

![img](./image/strategy/1605281716321-f5f51f7e-88b4-475d-810e-8473e893f18a.jpeg)

下面使用通用化的方法实现一下。

```js
const StrategyMap = {}
function context(type, ...rest) {
    return StrategyMap[type] && StrategyMap[type](...rest)
}
StrategyMap.minus100_30 = function(price) { 
  	return price - Math.floor(price / 100) * 30
}
context('minus100_30', 270)			// 输出: 210
```

## 3. 策略模式的实际应用

### （1）表格 formatter

Element UI 的表格控件的 Column 接受一个 `formatter` 参数，用来格式化内容，其类型为函数，并且还可以接受几个特定参数，像这样： `Function(row, column, cellValue, index)`。



以文件大小转化为例，后端经常会直接传 bit 单位的文件大小，那么前端需要根据后端的数据，根据需求转化为自己需要的单位的文件大小，比如 KB/MB。



首先实现文件计算的算法：

```js
export const StrategyMap = {
    // Strategy 1: 将文件大小（bit）转化为 KB 
    bitToKB: val => {
        const num = Number(val)
        return isNaN(num) ? val : (num / 1024).toFixed(0) + 'KB'
    },
    // Strategy 2: 将文件大小（bit）转化为 MB 
    bitToMB: val => {
        const num = Number(val)
        return isNaN(num) ? val : (num / 1024 / 1024).toFixed(1) + 'MB'
    }
}
// Context: 生成el表单 formatter 
const strategyContext = function(type, rowKey){ 
  return function(row, column, cellValue, index){
  	StrategyMap[type](row[rowKey])
  }
}
export default strategyContext
```

那么在组件中可以直接使用：

```js
<template>
    <el-table :data="tableData">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="文件名"></el-table-column>
        <!-- 直接调用 strategyContext -->
        <el-table-column prop="sizeKb" label="文件大小(KB)"
                         :formatter='strategyContext("bitToKB", "sizeKb")'>
        </el-table-column>
        <el-table-column prop="sizeMb" label="附件大小(MB)"
                         :formatter='strategyContext("bitToMB", "sizeMb")'>
        </el-table-column>
    </el-table>
</template>
<script type='text/javascript'>
    import strategyContext from './strategyContext.js'
    
    export default {
        name: 'ElTableDemo',
        data() {
            return {
                strategyContext,
                tableData: [
                    { date: '2019-05-02', name: '文件1', sizeKb: 1234, sizeMb: 1234426 },
                    { date: '2019-05-04', name: '文件2', sizeKb: 4213, sizeMb: 8636152 }]
            }
        }
    }
</script>
<style scoped></style>
```

运行结果如下图：

![img](./image/strategy/1605281924510-da9b3dd2-d922-42d5-b294-fc6f41e13da7.jpeg)

### （2）表单验证

除了表格中的 formatter 之外，策略模式也经常用在表单验证的场景。Element UI 的 Form 表单 具有表单验证功能，用来校验用户输入的表单内容。实际需求中表单验证项一般会比较复杂，所以需要给每个表单项增加 validator 自定义校验方法。



可以像官网示例一样把表单验证都写在组件的状态 `data` 函数中，但是这样就不好复用使用频率比较高的表单验证方法了，这时可以结合策略模式和函数柯里化的知识来重构一下。首先在项目的工具模块（一般是 `utils` 文件夹）实现通用的表单验证方法：

```js
// src/utils/validates.js
// 姓名校验 由2-10位汉字组成 
export function validateUsername(str) {
    const reg = /^[\u4e00-\u9fa5]{2,10}$/
    return reg.test(str)
}
// 手机号校验 由以1开头的11位数字组成  
export function validateMobile(str) {
    const reg = /^1\d{10}$/
    return reg.test(str)
}
// 邮箱校验 
export function validateEmail(str) {
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return reg.test(str)
}
```

然后在 `utils/index.js` 中增加一个柯里化方法，用来生成表单验证函数：

```js
// src/utils/index.js
import * as Validates from './validates.js'
// 生成表格自定义校验函数 
export const formValidateGene = (key, msg) => (rule, value, cb) => {
    if (Validates[key](value)) {
        cb()
    } else {
        cb(new Error(msg))
    }
}
```

上面的 `formValidateGene` 函数接受两个参数，第一个是验证规则，也就是 `src/utils/validates.js` 文件中提取出来的通用验证规则的方法名，第二个参数是报错的话表单验证的提示信息。

```js
<template>
    <el-form ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm"
             :rules="rules"
             :model="ruleForm">
        
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        
        <el-form-item label="手机号" prop="mobile">
            <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
    </el-form>
</template>
<script type='text/javascript'>
    import * as Utils from '../utils'
    
    export default {
        name: 'ElTableDemo',
        data() {
            return {
                ruleForm: { pass: '', checkPass: '', age: '' },
                rules: {
                    username: [{
                        validator: Utils.formValidateGene('validateUsername', '姓名由2-10位汉字组成'),
                        trigger: 'blur'
                    }],
                    mobile: [{
                        validator: Utils.formValidateGene('validateMobile', '手机号由以1开头的11位数字组成'),
                        trigger: 'blur'
                    }],
                    email: [{
                        validator: Utils.formValidateGene('validateEmail', '不是正确的邮箱格式'),
                        trigger: 'blur'
                    }]
                }
            }
        }
    }
</script>
```

可以看见在使用的时候非常方便，把表单验证方法提取出来作为策略，使用柯里化方法动态选择表单验证方法，从而对策略灵活运用，大大加快开发效率。



运行结果：

![img](./image/strategy/1605281924490-3acca66b-7e2d-47c3-b092-1c9cd41f6171.jpeg)

##  4. 策略模式的优缺点

策略模式将算法的**实现和使用拆分**，这个特点带来了很多**优点**：

1. 策略之间相互独立，但**策略可以自由切换**，这个策略模式的特点给策略模式带来很多灵活性，也提高了策略的复用率；
2. 如果不采用策略模式，那么在选策略时一般会采用多重的条件判断，采用策略模式可以**避免多重条件判断**，增加可维护性；

1. **可扩展性好**，策略可以很方便的进行扩展；



策略模式的**缺点**：

1. 策略相互独立，因此一些复杂的算法逻辑**无法共享**，造成一些资源浪费；
2. 如果用户想采用什么策略，必须了解策略的实现，因此**所有策略都需向外暴露**，这是违背迪米特法则/最少知识原则的，也增加了用户对策略对象的使用成本。

## 5. 策略模式的适用场景

策略模式的使用场景如下：

1. 多个算法**只在行为上稍有不同**的场景，这时可以使用策略模式来动态选择算法；
2. 算法**需要自由切换**的场景；

1. 有时**需要多重条件判断**，那么可以使用策略模式来规避多重条件判断的情况；

## 6. 策略模式与其他模式的区别

### （1）状态模式和策略模式

状态模式和策略模式在之前的代码就可以看出来，看起来比较类似，他们的区别：

- **状态模式：** 重在强调对象内部状态的变化改变对象的行为，状态类之间是**平行**的，无法相互替换；
- **策略模式：** 策略的选择由外部条件决定，策略可以动态的切换，策略之间是**平等**的，可以相互替换；



状态模式的状态类是**平行**的，意思是各个状态类封装的状态和对应的行为是相互独立、没有关联的，封装的业务逻辑可能差别很大毫无关联，相互之间不可替换。但是策略模式中的策略是**平等**的，是同一行为的不同描述或者实现，在同一个行为发生的时候，可以根据外部条件挑选任意一个实现来进行处理。

### （2） 策略模式和模板方法模式

策略模式和模板方法模式的作用比较类似，但是结构和实现方式有点不一样。

- **策略模式** 让我们在程序运行的时候动态地指定要使用的算法；
- **模板方法模式** 是在子类定义的时候就已经确定了使用的算法；