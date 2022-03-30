# React 国际化

## 1. React-intl 基本使用

React-intl是雅虎的语言国际化开源项目FormatJS的一部分，通过其提供的组件和API可以与ReactJS绑定。



React-intl提供了两种使用方法，一种是引用React组建，另一种是直接调取API，官方更加推荐在React项目中使用前者，只有在无法使用React组件的地方，才应该调用框架提供的API。



**使用方法：**

**（1）安装**

在终端中输入以下指令来安装react-intl：

```jsx
npm install react-intl --save
```

注意： 为了兼容Safari各个版本，需要同时安装 intl，intl在大部分的『现代』浏览器中是默认自带的，但是Safari和IE11以下的版本就没有了。安装intl需要在终端中输入以下指令：

```jsx
npm install intl --save
```

**（2）配置locale文件**

locale文件用来配置文本（这里只配置了英文）：

```jsx
// en_US.js
const en_US = {
    hello: "Hello!"，
    //... ...
}
export default en_US;
```

**（3）引入react-intl**

在组件中引入react-intl：

```jsx
import { IntlProvider, FormattedMessage } from 'react-intl'; 
```

**（4）使用** `<IntlProvider />`

需要使用IntlProvider组件来包裹整个组件，IntlProvider为下层组件提供数据：

```jsx
render(){
    let messages = {}
    return (
        <IntlProvider locale="en" messages={messages}>
            <App />
        </IntlProvider>
    )
}
```

**（5）使用** `FormattedMessage `

```jsx
<FormattedMessage
    name="12"
    id='hello'
    description='say hello to world.'
    defaultMessage='Hello, world'
    />

// 结果：
<span>Hello!</span>
```

## 2. React-intl 组件实例

React-intl提供的React组件有如下几种：

### （1）外层包裹组件

使用`<IntlProvider />` 组件包裹住需要进行语言国际化的组件，当`<IntlProvider />` 包裹住某个组件的时候，这个组件本身和组件内部包含的子组件就可以获得所有React-intl提供的接口以及在`<IntlProvider />` 中引入的locale配置文件的内容：

```jsx
import React from 'react';
import { render } from 'react-dom';
//引入locale配置文件，具体路径根据实际情况填写
import en-US from './en-US';

render(    
        <IntlProvider 
            locale='en' 
            messages={meaasge}
        >
            <App />
        </IntlProvider>,    
        document.getElementById('container')
);
```

`<IntlProvider />`需要传递两个参数：

- locale是传递需要国际化的语言的缩写，通过这个参数可以确定格式化日期，数字，量词的时候按照哪一种语言的规则，这个是规则是intl提供的，一般浏览器会内置这个库，但是在Safari和IE11之前需要自己安装。
- messages是用于传递上面在第2步中定义的配置文件，首先使用Import语句引入了配置文件，然后将配置文件的内容传递给了messages这个参数，此时<App />组件中的所有组件都可以拿到配置文件中的内容了。



可以按照下面的做法自动识别当前浏览器的语言：

```jsx
chooseLocale(){
    switch(navigator.language.split('_')[0]){
        case 'en':
            return 'en_US';
            break;
        case 'zh':
            return 'zh_CN';
            break;
        ...
        ...
        ...
        default:
            return 'en_US';
            break;
    }
}
render(    
        <IntlProvider 
            locale={navigator.language} 
            messages={chooseLocale()}
            >
            <App />
        </IntlProvider>,    
        document.getElementById('container')
);
```

`<IntlProvider />`是可以嵌套使用的，也就是说，在一个`<IntlProvider />`内部还可以有N个`<IntlProvider />`，这个功能的实际意义就是可以在英文网站中嵌套一个中文的或者德语的或者法语的板块，应用起来会更加灵活一些。

### （2）日期时间

- `**FormattedDate **`

用于格式化日期，能够将一个时间戳格式化成不同语言中的日期格式。传入时间戳作为参数：

```jsx
<FormattedDate 
    value={new Date(1459832991883)}
/>

// 输出结果：
<span>4/5/2016</span>
```

- `**<FormattedTime>**`

用于格式化时间，效果与`<FormattedDate />`相似,传入时间戳作为参数：

```jsx
<FormattedTime 
   value={new Date(1459832991883)}
/>

// 输出结果：
<span>1:09 AM</span>
```

- `**<FormattedRelative />**`

通过这个组件可以显示传入组件的某个时间戳和当前时间的关系，比如 “ 10 minutes ago"。传入时间戳作为参数：

```jsx
<FormattedRelative 
    value={Date.now()}
/>

// 输出结果：
<span>now</span>

// 10秒之后的输出结果：
<span>10 seconds ago</span>

// 1分钟之后的输出结果：
<span>1 minute ago</span>
```

### （3）数字量词

- `**<FormattedNumber />**`

这个组件最主要的用途是用来给一串数字标逗号，比如10000这个数字，在中文的语言环境中应该是1,0000，是每隔4位加一个逗号，而在英语的环境中是10,000，每隔3位加一个逗号。传入数字作为参数：

```jsx
<FormattedNumber 
    value={1000}
/>

// 输出结果：
<span>1,000</span>
```

- `<FormattedPlural />`

这个组件可用于格式化量词，在中文的语境中，其实不太会用得到，比如我们说一个鸡腿，那么量词就是‘个’，我们说两个鸡腿，量词还是‘个’，不会发生变化。但是在英文的语言环境中，描述一个苹果的时候，量词是apple，当苹果数量为两个时，就会变成apples，这个组件的作用就在于此。



传入组件的参数中，value为数量，其他的为不同数量时对应的量词，在下面的例子中，一个的时候量词为message，两个的时候量词为messages。实际上可以传入组件的量词包括 zero, one, two, few, many, other 已经涵盖了所有的情况。

```jsx
<FormattedPlural
    value={10}
    one='message'
    other='messages'/>
```

传入组件的量词参数可以是一个字符串，也可以是一个组件，可以选择传入`<FormattedMessage />`组件，就可以实现量词的不同语言的切换。



输出结果：

```jsx
<span>messages</span>
```

### （4）字符串的格式化

- `**FormattedMessage **`

这个组件用于格式化字符串，是所有的组件中使用频率最高的组件，因为基本上，UI上面的每一个字符串都应该用这个组件替代。这个组件的功能丰富，除了可以根据配置输出不同语言的简单字符串之外，还可以输出包含动态变化的参数的复杂字符串。比如在locale配置文件中写了如下内容：

```jsx
const app = {
    greeting:'Hello Howard!",
}
export default app;
```

使用这个组件的时候这么写：

```jsx
<FormattedMessage
    name="12"
    id='app.greeting'
    description='say hello to Howard'
    defaultMessage='Hello, Howard!'
    />
```

其中，id指代的是这个字符串在locale配置文件中的属性名，description指的是对于这个位置替代的字符串的描述，便于维护代码，不写的话也不会影响输出的结果，当在locale配置文件中没有找到这个id的时候，输出的结果就是defaultMessage的值。



输出的结果：

```jsx
<span>Hello, Howard!</span>
```

- `**FormattedHTMLMessage**`

这个组件的用法和<FormattedMessage />完全相同，唯一的不同就是输出的字符串可以包含HTML标签，但是官方不太推荐使用这个方法，如果可以想办法用<FormattedMessage />的话，就不应该使用这个组件，我揣测应该是性能方面不如<FormattedMessage />。