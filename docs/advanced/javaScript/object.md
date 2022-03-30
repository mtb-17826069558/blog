# 深入理解JavaScript面向对象

面向对象的语言有一个标志，那就是他们都有类的概念，而通过来可以创建多个具有相同属性或方法的对象。在ES6之前，ECMAscript是没有类的概念的，因此他的对象也与基于类的语言的类有所不同。



ECMA-262把对象定义为“**无序属性的集合，其属性可以包含基本值、对象或者函数**”，严格来说对象就是一组没有特定顺序的值。对象的每个属性和方法都有一个名字，而每个名字都映射到一个值。正因如此，我们可以吧ECMAscript的对象想象成散列表：对象的值就是一组键值对，其值可以是数据或函数。

## 1. 理解对象

我们可以通过创建一个Object的方式来创建一个对象：

```javascript
var person = new Object
person.name = "Nike"
person.age = 18
person.job = "student"

person.sayName = function(){
	console.log(this.name)
}
```

我们通过Object实例的方式创建了一个对象，并为它添加了三个属性和一个方法。这种方式创建的对象较麻烦，现在常用对象字面量的形式来创建对象:

```javascript
var person = {
	name = "Nike",
	age = 18,
	job = "student",
	
	sayName = function(){
		console.log(this.name)
	}
}
```

这两种方式创建的对象是一样的，有相同的属性和方法。这些属性在创建时都会带有一些特征值，JavaScript通过这些特征值来定义他们的行为。

### 1.1 属性类型

ECMAscript中有两种属性：**数据属性**和**访问器属性**。

**（1）数据属性**

数据属性包含一个数据值的位置，在这个位置可以读取和写入值。数据属性有以下描述其行为的特征：

- **[[Configurable]]**：默认值为true，表示能否提供delete删除属性从而重新定义属性、能都修改属性的特性、能否把属性修改为访问器属性。
- **[[Enumerable]]**：默认值为true，表示能否提供for-in来循环返回属性

- **[[Writable]]**：默认值为true，表示能都修改属性的值
- **[[Value]]**：默认值为undefined，包含这个属性的数据值。读取属性值时从这个位置读，写入属性值时把新值保存在这个位置。

如果需要修改默认的属性，必须使用`Object.defineProperty()`方法，该方法语法如下：

```javascript
Object.defineProperty(obj, prop, descriptor)
```

其三个参数如下：

- obj：要定义属性的对象。
- prop：要定义或修改的属性的名称或 Symbol 。

- descriptor：要定义或修改的属性描述符。

该方法允许精确地添加或修改对象的属性。对象的属性描述符有两种主要形式（不能同时使用，数据属性中只用到了四个数据描述符）：

- **数据描述符**是一个具有值的属性，该值可以是可写的，也可以是不可写的。
- **存取描述符**是由 getter 函数和 setter 函数所描述的属性。

这两种描述符都是对象。它们共享以下可选键值：

- **configurable**：当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
- **enumerable**：当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。默认为 false。

数据描述符还具有以下可选键值：

- **value**：该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
- **writable**：当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。默认为 false。

存取描述符还具有以下可选键值：

- **get**：属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。默认为 undefined。
- **set**：属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。默认为 undefined。



例如：

```javascript
var person = {}
Object.defineProperty(person, "name", {
	writable:false,
	value:"nike"
})
Object.defineProperty(person, "name", {
	configurable:false,
	value:"nike"
})
console.log(person.name) //nike
person.name = "sun"
delete person.name
console.log(person.name) // nike
```

上面的例子中，我们将`name`属性的可写和可删除都设置为`false`，这样既不能修改，也不能删除。



但是，在严格模式下，这两者都会报错。并且，一旦把属性描述符`configurable`定义为`false`，就无法再改回来了，就无法在进行配置。

**（2）访问器属性**

访问器属性不包含属性，他们包含一对getter和setter函数。在读取访问器属性时会调用getter函数，这个函数会返回有效的值。在写入访问器属性的时候，会调用setter函数并传入新值。访问器属性有以下特性：

- **[[Configurable]]**：表示能否提供delete删除属性从而重新定义属性、能都修改属性的特性、能否把属性修改为访问器属性。对于直接在对象上定义的属性，这个特性的默认值为true
- **[[Enumerable]]**：表示能否提供for-in来循环返回属性，对于直接在对象上定义的属性，这个特性的默认值为true

- **[[Get]]**：默认值为undefined，在读取属性时调用的函数
- **[[Set]]**：默认值为undefined，在写入属性时调用的函数

访问器的属性不能直接定义，必须使用`Object.defineProperty()`来定义，看下面的例子：

```javascript
var book = {
	_year : 2020,
	edition : 1
}
Object.defineProperty(book, "year", {
	get: function(){
		return this._year
	},
	set:function(newValue){
		if(newValue > 2018){
			this._year = newValue
			this.edition += newValue - 2018
		}
	}
})

book.year = 2021
console.log(book.edition) // 4
```

上面定义了一个book对象，并给它定义了两个属性，_year前面的下滑下线是一个常用的记号，表示只能勇敢对象方法访问的属性。访问器year包含一个setter和一个getter函数。这是使用访问器属性的常见方式，即设置一个属性的值会导致其他属性的发生变化。



在访问器中不一定同时指定setter和getter，只指定getter意味着属性不能写，只指定setter意味着属性不能读。

### 1.2 定义多属性

`Object.defineProperty()`方法只能定义一个属性，如果我们想要同时定义多个属性，可以使用Object.defineProperties方法，它的语法如下：

```javascript
Object.defineProperties(obj, props)
```

其参数如下：

- obj：在其上定义或修改属性的对象。
- props：要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符。上面已经介绍过了，不再介绍。

例如：

```javascript
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
});
```

### 1.3 读取属性特性

我们还可以使用Object.getOwnPropertyDescriptor() 方法读取指定对象上一个自有属性对应的属性描述符。它的语法如下：

```javascript
Object.getOwnPropertyDescriptor(obj, prop)
```

其参数如下：

- obj：需要查找的目标对象
- prop：目标对象内属性名称

例如：

```javascript
const object1 = {
  property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42
```

在JavaScript中，任何对象，包括BOM和DOM对象都可以使用该方法。

## 2. 创建对象

上面提到了构造函数和对象字面量的形式来创建对象，但是他们都有一些缺点，使用同一个接口创建很多对象，会产生很多重复的代码，所以就出现了工厂模式创建对象。

### 2.1 工厂模式

所谓的工厂模式就是先实例化一个对象，再把传入的参数放入该对象，最后返回这个对象。

```javascript
function createPerson(name, age, job){
    var person = new Object()
	person.name = name
	person.age = age
	person.job = job
	
	person.sayName = function(){
		console.log(this.name)
	}
	return person
}

var person1 = createPerson("Nike", 18, "doctor")
```

createPerson函数可以根据接收的参数来创建一个包含所有信息的对象，这个函数和普通函数一样，可以无限次调用，每次都会返回一个对象。工厂模式虽然解决了多个相似对象的问题，但是无法进行对象识别。由于返回的对象都是由Objcet对象实例化出来的，所以我们无法判断一个对象的类型。



所以，一个新的模式出现了：构造函数模式

### 2.2  构造函数模式

我们可以创建自定义的构造函数，从而定义自定义类型的属性和方法。l例如：

```javascript
function Person(name, age, job){
	this.name = name
	this.age = age
	this.job = job
	
	this.sayName = function(){
		console.log(this.name)
	}
}

var person1 = new Person("Nike", 18, "student")
var person2 = new Person("Bob", 30, "doctor")
```

通过这种方式，我们没有显示的创建对象，而是直接将属性和方法赋给了this对象，并且没有return一个对象。除此之外，为了将构造函数和普通函数区分开，构造函数名称的开头进行了大写。



要创建person的实例，必须使用new操作符，这种方式实际上会经历一下阶段（面试中会常考察这个知识点）：

- 创建一个新对象
- 将构造函数的作用域指赋值给新的对象（也就是将this指向新的对象）

- 执行构造函数中的代码（也就是为新对象添加属性和方法）
- 返回这个新对象

上面我们创建的两个对象person1和person2都是Person的实例，我们可以通过`instanceof`操作符来检测对象类型：

```javascript
console.log(person1 instanceof Object) // true
console.log(person1 instanceof Person) // true
console.log(person2 instanceof Object) // true
console.log(person2 instanceof Person) // true
```

通过构造函数创建对象就可以将实例标识为一种特定的类型。



构造函数创建对象虽然好用，但是也有缺点，就是无法解决引用类型的创建问题。每次我们在创建一个新的person实例时，都会对sayName方法进行创建，无法复用，浪费了内存。



要想解决这个问题，只能把他放到全局作用域。但是在全局作用域中定义的函数一般来说只能被某个对象调用，这让去全局作用域有点名副其实，更让人不能接受的是如果对象有很多的方法，就需要定义很多的全局函数，这样的话自定义的引用类型就没有封装性可言了。



我们可以通过原型模式来解决这个问题。

### 2.3 原型模式

我们在创建函数时都会有一个prototype（原型）属性，该属性就是通过调用构造函数而擦黄建的那个实例对象的原型对象。使用原型对象的的好处就是可以让所有的对象实例共享它包含的属性和方法。

```javascript
function Person(){}

Person.prototype.name = "Nike"
Person.prototype.age = 18
Person.prototype.job = "student"

Person.prototype.sayName = function(){
	console.log(this.name)
}

var person1 = new Person()
person1.sayName() // Nike
var person2 = new Person()
person2.sayName() // Nike
console.log(person1.sayName === person2.sayName) // true
```

这里我们将所有属性和方法都添加到了Person的原型上面，用这种方式构造的新对象会具有相同的属性和方法，也就是说person1和person2访问的都是同一属性和用意sayName函数。



这种方式省去了初始化参数的过程，但是这种方式就会导致，person1和person2实例在实例化后还会与Person存在关系。如果对其赋值基本类型值的话，会在实例化对象中创建，并且调用时会首先在实例化对象中寻找。而对引用类型值进行操作的时候，会直接在原型对象的引用类型值上进行操作，所以会在所有实例中共享。

### 2.4 组合构造函数

创建自定义类型的最常见的方式就是组合使用构造函数和原型模式。构造函数用于自定义实例属性，而原型模式用于定义方法和共享的属性。这中方式可谓是集两种方式的优点于一身。

```javascript
function Person(name, age, job){
	this.name = name
	this.age = age
	this.job = job
	this.friend = ["Lids", "Alice"]
}

Person.prototype = {
	constructor: Person,
	sayName : function(){
		console.log(this.name)
	}
}

var person1 = new Person("Nike", 18, "student")
var person2 = new Person("Bob", 30, "doctor")

person1.friend.push("san")
console.log(person1.friend) // ["Lids", "Alice", "san"]
console.log(person2.friend) // ["Lids", "Alice"]
console.log(person1.friend === person2.friend) // false
console.log(person1.sayName === person2.sayName) // true
```

我们可以看到person1的friend改变并没有影响person2的friend。

### 2.5 动态原型模式

我们还可以通过动态原型的模式创建对象，根据某些判断条件，将原型的方法卸载构造函数中。

```javascript
function Person(name, age, job){
	this.name = name
	this.age = age
	this.job = job
	if(typeof this.sayName !== "function"){
		Person.prototype.sayName = function(){
			console.log(this.name)
		}
	}
}

var person1 = new Person("Nike", 18, "student")
person1.sayName()
```

需要注意的是，只有在sayName方法不存在的时候，才将他添加到构造函数的原型中。sayName的创建是在首次调用时完成的，之后就不会再重复调用。可以说这种方法非常的完美。

### 2.6 寄生构造函数模式

通常情况下，如果前几种方法不能适用，就可以使用寄生构造函数模式，这种模式的基本思想就是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后返回新创建的对象。

```javascript
function createPerson(name, age, job){
    var person = new Object()
	person.name = name
	person.age = age
	person.job = job
	
	person.sayName = function(){
		console.log(this.name)
	}
	return person
}

var person1 = new createPerson("Nike", 18, "doctor")
```

看到这段代码是不是似曾相识，上面的部分和工厂模式是完全一样的，只是后面多了一个new运算符。



构造函数在不返回值的情况下，默认会返回新对象实例，而通过在构造函数的末尾添加一个return预计，可以重写调用构造函数时返回的值。



需要注意，该方式返回的对象与构造函数或者构造函数的原型属性之间没有关系，也就是说构造函数返回的对象与在构造函数外部创建的对象没有什么不同，为此不能依赖 instanceof 操作符来确定对象类型。所以，建议在可以使用其他模式的情况下，不要使用这种模式。

### 2.7 稳妥构造函数模式

所谓的稳妥对象值得是没有公共属性，而且其他方法也不引用有this对象。稳妥对象最适合在以下安全环境使用（这些环境会禁用this和new），或者防止数据被其他应用改动时使用。



稳妥构造函数遵循与寄生构造函数类似的模式，但是有两点不同：

- 新创建的对象不引用this
- 不使用new 操作符调用构造函数

```javascript
function createPerson(name, age, job){
    var person = new Object()
	
	person.sayName = function(){
		console.log(this.name)
	}
	return person
}

var person = createPerson("Nike", 18, "doctor")
person.sayName()
```

需要注意，以这种方式定义的对象，其属性只能被里面的方法访问，没有其他方法可以方法可以访问内部数据成员。并且也不能正确检测其类型。



### 2.8 总结

所有的创建对象的方式就说完了，下面来总结一下：

| **方式**         | **特点**                                                     |
| ---------------- | ------------------------------------------------------------ |
| 工厂模式         | 没有解决对象识别问题，无法判断对象的类型 。                  |
| 构造函数模式     | 解决了对象类型检测问题，引用类型的重复创建问题。不返回值的情况下，默认会返回新对象实例 |
| 原型模式         | 所有对象实例共享构造函数原型包含的属性和方法。存在引用类型值共享问题，操作引用类型值时，会直接在原型对象的引用类型值上进行操作，所以会在所有实例中共享。 |
| 组合构造函数     | 每个实例都会存在一份实例的副本，并且会对方法共享，最大程度节省了内存，也提供了向构造函数中传递参数的功能，是比较完美的一种方式 。 |
| 动态原型模式     | 方法不存在的时候创建，原型方法在代码首次调用时创建，后面不再执行。也是一种比较完美的方式。 |
| 寄生构造函数模式 | 在其他模式不适合的情况下使用，它可以返回重写后的对象实例（比如定制某个方法），而不是返回构造函数默认的对象实例。用new创建新对象实例。 |
| 稳妥构造函数模式 | 构造函数内部不使用this，创建对象实例不使用new。具有安全性，创建的实例不能正确检测其类型 |

## 3. 继承

继承是面向对象的语言中很重要的一部分。在ECMAscript中，只支持实现继承的方式，而实现继承的方式主要是依靠原型链实现的。

### 3.1 原型链继承

所谓的原型链继承就是让**新实例的原型等于父类的实例**：



```javascript
//父类
function SuperType() {
    this.name = 'Nike';
    this.colors = ['pink', 'blue', 'green'];
}
SuperType.prototype.getName = function () {
    return this.name;
}
// 子类
function SubType() {
    this.age = 18;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.getAge = function() {
    return this.age;
}

let instance1 = new SubType();
instance1.colors.push('yellow');
console.log(instance1.getName()); //'Nike'
console.log(instance1.colors);//[ 'pink', 'blue', 'green', 'yellow' ]

let instance2 = new SubType();
console.log(instance2.colors);//[ 'pink', 'blue', 'green', 'yellow' ]
```



我们知道，包含引用类型的属性会被所有的属性共享，所有上面我们给instance1添加颜色yellow，instance2中的颜色也就有了yellow。



除此之外，新实例在创建时无法向父类构造函数传参。所以实践中很少使用这种方式去实现继承。

### 3.2 构造函数继承

在解决原型中包含引用类型值所带来的问题时， 出现了借用构造函数的技术。该方式的基本思路就是在子类的构造函数的内部调用超类的构造函数。



因为函数只是在特定的环境中执行代码的对象。借用构造函数的方式可以解决引用类型的问题。使用`call()`和`apply()`方法，在子类中调用超类。这样每个实例都会有自己的引用类型的副本了。

```javascript
// 父类
function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
// 子类
function SubType(name) {
    SuperType.call(this, name);
}

let instance1 = new SubType('Jason');
instance1.colors.push('yellow');
console.log(instance1.colors);//['pink', 'blue', 'green', yellow]

let instance2 = new SubType('Jack');
console.log(instance2.colors); //['pink', 'blue', 'green']
```



这种方式可以向超类传递参数，并且解决了原型中包含引用类型值被所有实例共享的问题 。但是方法都在构造函数中定义，函数复用无从谈起，并且超类型原型中定义的方法对于子类型而言都是不可见的。

### 3.3 组合继承

组合继承指的是集中原型链和借用构造函数，从而发挥二者之长的一种继承模式。



基本思路：**使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承**，既通过在原型上定义方法来实现了函数复用，又保证了每个实例都有自己的属性。

```javascript
// 父类
function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
}
// 子类
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
    console.log(this.age);
}

let instance1 = new SubType('Jason', 25);
instance1.colors.push('yellow');
console.log(instance1.colors); //[ 'pink', 'blue', 'green', 'yellow' ]
instance1.sayName(); //Jason

let instance2 = new SubType('ken', 22);
console.log(instance2.colors); //[ 'pink', 'blue', 'green' ]
instance2.sayName();//ken
```



组合继承既借用构造函数方法和原型链继承两者之长，复用了方法，也解决了引用类型的问题。但是会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。



### 3.4 寄生组合式继承

为了解决组合继承的两次调用父类构造函数的缺陷而出现的：

```javascript
// 父类
function SuperType(name) {
    this.name = name;
    this.colors = ['pink', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
}
// 子类
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = Object.create(SuperType.prototype)
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
    console.log(this.age);
}

let instance1 = new SubType('Jason', 25);
instance1.colors.push('yellow');
console.log(instance1.colors); //[ 'pink', 'blue', 'green', 'yellow' ]
instance1.sayName(); //Jason

let instance2 = new SubType('ken', 22);
console.log(instance2.colors); //[ 'pink', 'blue', 'green' ]
instance2.sayName();//ken
```

首先我们使用`Objcet.create()`对父类的原型进行一次浅复制，



寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的方式来继承方法，而不需要为子类指定原型而调用父类的构造函数，我们只需要拿到父类原型的一个副本。因此可以通过传入子类和父类的构造函数作为参数，首先创建父类原型的一个复本，并为其添加`constrcutor`（构造函数），最后赋值给子类的原型。这样避免了调用两次父类的构造函数，为其创建多余的属性。

### 3.5 ES6继承

ES6中引入类的概念。它本质上是一个函数，我们可以通过`class`关键字来定义类，使用`extends`关键字实现继承：

```javascript
class SuperType {
    constructor(age) {
        this.age = age;
    }

    getAge() {
        console.log(this.age);
    }
}

class SubType extends SuperType {
    constructor(age, name) {
        super(age); // 调用父类的constructor
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}

let instance = new SubType(18, 'Jason');
instance.getAge(); // 18
```

其具有以下特点：

- 类的数据类型就是函数，类本身就指向构造函数。

```javascript
console.log(typeof SuperType);//function
console.log(SuperType === SuperType.prototype.constructor); //true
```

- 类的内部所有定义的方法，都是不可枚举的。(ES5原型上的方法默认是可枚举的)

```javascript
Object.keys(SuperType.prototype);  // []
```

- `constructor` 方法是类的默认方法，通过 `new` 命令生成对象实例时，自动调用该方法。一个类必须有`constructor` 方法，如果没有显式定义，一个空的 `constructor` 方法会被默认添加。
- Class 不能像构造函数那样直接调用，会抛出错误，必须使用`new`操作符。

- 子类必须在 `constructor` 中调用 `super` 方法，否则新建实例时会报错。如果没有子类没有定义 `constructor` 方法，那么这个方法会被默认添加。在子类的构造函数中，只有调用 super 之后，才能使用 this关键字，否则报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。

### 3.6 总结

| **继承方式**   | **特点**                                                     |
| -------------- | ------------------------------------------------------------ |
| 原型链继承     | 原理是新实例的原型等于父类的实例，新实例在创建时无法向父类构造函数传参，引用类型的属性会被所有的属性共享 |
| 构造函数继承   | 可以向超类传递参数，并且解决了原型中包含引用类型值被所有实例共享的问题 。但是方法都在构造函数中定义，函数复用就无从谈起 |
| 组合继承       | 解决了引用类型的问题，但是会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。 |
| 寄生组合式继承 | 避免了调用两次父类的构造函数，为其创建多余的属性。           |
| ES6继承        | 通过`class`关键字来定义类，使用`extends`关键字实现继承。     |

## 4. 面试题

### （1）实现继承的方式有哪些

实现继承的几种方式有：

（1）第一种是以**原型链的方式**来实现继承，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。

（2）第二种方式是使用借用**构造函数**的方式，这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。

（3）第三种方式是**组合继承**，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。

（4）第四种方式是**原型式继承**，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

（5）第五种方式是**寄生式继承**，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。

（6）第六种方式是**寄生式组合继承**，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。

### （2）使用ES5实现继承

### （3）使用ES6实现继承

### （4）ES6和ES5中实现继承的区别

ES5 的构造函数和ES6的类主要的区别有以下几点：

- Class类中不存在变量提升，构造函数存在变量提升

```javascript
// 构造函数
 var bar  = new Bar(); // 可行
 function Bar() {
     this.bar = 42;
 }
 //Class
 const foo = new Foo(); // Uncaught ReferenceError: Foo is not defined
 class Foo {
     constructor() {
         this.foo = 42;
     }
 }
```

- Class不能重写类名

```javascript
// 构造函数
 function Bar() {
   Bar = 'Baz';
   this.bar = 42;
 }
 var bar = new Bar();
 console.log(bar); // Bar {bar: 42}
 console.log(Bar); // 'Baz'
 
 // Class
 class Foo {
     constructor(){
         this.foo = 42;
         Foo = 'Fol'; // Uncaught TypeError: Assignment to constant variable.
     }
 }
 let foo = new Foo();
 Foo = 'Fol';// it's ok
```

- Class内部会开启严格模式

```javascript
// 严格模式
 function Bar() {
     baz =  23; // ok
 }
 var bar = new Bar();
 // Class
 class Foo {
    constructor() {
       this.foo = 42;
       foo = 12; // Uncaught ReferenceError: foo is not defined
    }
  }
  let foo = new Foo();
```

- Class必须使用New调用

```javascript
// 构造函数
 function Bar(){ }
 var bar = Bar();// it's ok;
 // Class
 class Foo {}
 var foo = Foo();// Uncaught TypeError: Class constructor Foo cannot be invoked without 'new'
• 1
• 2
• 3
• 4
• 5
• 6
```

- Class中所有的方法都不能枚举

```javascript
// 构造函数
 function Bar() {}
 Bar.getName = function() {}
 Bar.prototype.say = function() {}
 console.log(Object.keys(Bar)); // ["getName"]
 console.log(Object.keys(Bar.prototype)); // ["say"]
 // Class
 class Foo {
   constructor(){}
   print(){}
 }
 console.log(Object.keys(Foo))// []
 console.log(Object.keys(Foo.prototype));// []
```

- Class 的继承有两条继承链
  （1）子类的`__proto__`指向父类；
  （2）子类的`prototype`属性的`__proto__`指向父类的`prototype`属性

Class子类通过`__proto__`属性找到父类，而构造函数子类通过`__proto__`找到Function.prototype

```javascript
// 构造函数
 function Father() {}
 function Child() {}
 Child.prototype = new Father();
 Child.prototype.constructor = Child;
 console.log(Child.__proto__ === Function.prototype); // true
 
 // Class类
 class Father {}
 class Child extends Father {}
 console.log(Child.__proto__ === Father); // true
```

- 子类this的生成顺序不同

（1）构造函数继承是先建立子类实例对象this，再调用父类构造函数修饰子类实例；

（2）Class继承是先建立父类实例对象this，再调用子类构造函数修饰this。即在子类构造函数中先调用super()方法，之后再能使用this。

```javascript
// 构造函数
  function Father(name, age) {
    this.name = name;
    this.age = age;
  }
  function Child(name, age, sex) {
    Father.call(this, name, age);
    this.sex = sex;
  }
  Object.setPrototypeof(Child.prototype, Father.prototype);
  var son = new Child('小明', 12, '男');
  console.log(son); // {name: '小明', age: 12, sex: '男'}
  
  // Class
  class Father {
    constructor(name, age) {
       this.name = name;
        this.age = age;
    }
  }
  class Child extends Father {
    constructor(name, age, sex) {
      super(name, age);
      this.sex = sex;
    }
  }
  let son =  new Child('小红', 12, '女');
  console.log(son); // {name: '小红', age: 12, sex: '女'}
```

### （5）对象创建的方式有哪些？

我们一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js

和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是我们可以使用函数来进行模拟，从而产生出可复用的对象

创建方式，常见的有以下几种：

（1）第一种是工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。

（2）第二种是构造函数模式。js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么我们就可以把它称为构造函数。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此我们可以使用 this 给对象赋值。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次我们都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。

（3）第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

（4）第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。

（5）第五种模式是动态原型模式，这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。

（6）第六种模式是寄生构造函数模式，这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。