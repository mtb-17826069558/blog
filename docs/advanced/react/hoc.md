# 高阶组件HOC

## 1. 高阶组件的概念

高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。



“高阶组件”名为“组件”，其实并不是一个组件，而是一个函数，只不过这个函数比较特殊，它接受至少一个 React 组件为参数，并且能够返回一个全新的 React 组件作为结果，当然，这个新产生的 React 组件是对作为参数的组件的包装。所以，有机会赋予新组件一些增强的功能。



高阶组件的形式：

```jsx
const withDoNothing = (Component) => {
  const NewComponent = (props) => {
    return <Component {...props} />;
  };
  return NewComponent;
};
```

上面的函数 `withDoNothing` 就是一个高阶组件，作为一项业界通用的代码规范，**高阶组件的命名一般都带** `**with**` **前缀**，命名中后面的部分代表这个高阶组件的功能。



就如同 withDoNothing 这个名字所说的一样，这个高阶组件什么都没做，但是从中可以看出高阶组件的基本代码套路。

- 高阶组件不能去修改作为参数的组件，高阶组件必须是一个纯函数，不应该有任何副作用。
- 高阶组件返回的结果必须是一个新的 React 组件，这个新的组件的 JSX 部分肯定会包含作为参数的组件。

- 高阶组件一般需要把传给自己的 props 转手传递给作为参数的组件。

## 2. 高阶组件实现属性代理

在上面的例子中，看起来没什么用，就是传进去的组件以及其参数 props 原封不动的渲染出来而已。其实这里用到了属性代理，其作用很强大。

### （1）操作 props

除了直接返回之外，我们还可以在这里拦截到 `props`， 可以按需对 `props` 进行增加、删除和修改操作，然后将处理后的 `props` 再传递给被包装的组件：

```jsx
const HOC = function(WrappedComponent) {
  return class WrapperComponent extends React.Component {
    render() {
      const newProps = {
        ...this.props,
        name: 'HOC'
      }
      return <WrappedComponent {...newProps}/>
    }
  }
}
```

这里为被包装的组件增加了 `name` 属性。可以在 WrappedComponent 中直接使用 `name` 的这个 `props` ：

```jsx
class MyComponent extends React.Component {
  render(){
    return <div>{this.props.name}</div>
  }
}
export default HOC(MyComponent)
```

### （2）获取 refs 的引用

父组件可以通过 `ref`获取子组件的信息，在父组件中使用 `<component ref="component"/>` 时，然后可以直接通过 `this.refs.component` 进行获取。但是当 `component` 被高阶组件包装过后，这时通过 `this.refs.component` 获取的并不是 `component`，而是其包装组件，也就是下面的 `withRouter`：

```jsx
// HOC
function withRouter(ChildComponent) {
  return class extends React.Component {
    render() {
      return (<ChildComponent {...this.props}/>)
    }
  }
}
// 子组件
class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    const { getInstance } = props
    if (typeof getInstance === 'function') {
      getInstance(this) // 在这里把this暴露给 parentComponent
    }
  }
  render() {
    return (<div ref="test">子组件</div>)
  }
}
// 使用 HOC
const ChildComponent = withRouter(Component)
// 父组件
class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {} 
  }
  componentDidMount() {
    // childCP 是真正的子组件
    // childCpWrapper 是被包装的子组件
    console.log(this.childCp)
    console.log(this.childCpWrapper)
  }
  render () {
    return (
     <ChildComponent 
       ref={(withRouter) => { this.childCpWrapper = withRouter }}  // 获取 withRouter 组件
       getInstance={(childCp) => { this.childCp = childCp }} // 通过 getInstance 传一个回调函数接收 childComponent 实例即可
    />
    )
  }
 }
ReactDOM.render(
  <ParentComponent />,
  document.getElementById('root')
)
```

这样就解决了这个问题，不管用多少个高阶组件包装组件，都可以在父组件通过一个 `getInstance` 来获取到。

### （3）抽象 state

我们知道，无状态组件相对于有状态组件，性能更高，复用性更好。高阶组件可以通过将被包装组件的状态提升到高阶组件自身内部实现。一个典型的场景是，利用高阶组件将受控组件需要自己维护的状态统一提升到高阶组件中：

```jsx
const HOC = function(WrappedComponent) {
  class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name: ''
      }
  }
  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  render() {
    const newProps = {
      name: {
        value: this.state.name,
        onChange: this.onNameChange
      }
    }
    return <WrappedComponent {...this.props} {...newProps} />
  }
}
```

这里把受控组件的属性 `value` 用到的状态和处理函数都提升到了高阶组件中，当我们使用受控组件时，就可以这样写：

```jsx
class WrappedComponent extends Component {
  render() {
    return <input name="name" {...this.props.name} />
  }
}
const ComponentWithControlledState = HOC(WrappedComponent)
```

### （4）用其他元素包裹组件

可以在高阶组件渲染被包装组件时添加额外的元素，一般用于实现布局或者是改变样式：

```jsx
render() {
  return (
    <div className="wrap-background">
      <h1>Title</h1>
      <WrappedComponent {...this.props} {...newProps} />
    </div>
  )
}
```

## 3. 高阶组件实现渲染劫持

上面说的的高阶组件的实现方式都是由高阶组件来处理通用逻辑，然后将相关属性传递给被包装组件。除了这种属性代理的方式，还可以通过集成方式实现高阶组件：**通过继承被包装组件实现逻辑的复用**。继承方式实现的高阶组件常用于渲染劫持。例如，当数据在加载时显示 loading 状态，加载完成之后再渲染组件：

```jsx
// 要使用的父组件 
function WrappedComponent(props) {
  return <div>{props.data}</div>
}
// 渲染劫持部分 
function HOCFactory(WrappedComponent) {
  return class HOC extends React.Component {
    
    render(){
      if(!this.props.data) {
        return <div>loading...</div>
      }
      return <WrappedComponent {...this.props} />
    }
  }
}
```

当父组件中的 data 未传入数据时，就会显示 “loading…”，当数据传入时，便会显示传入的组件。下面是模拟的数据显示代码，1 秒后将显示 data 中的内容：

```jsx
// 声明需要被渲染劫持的组件 
const WithDemo = HOCFactory(WrappedComponent)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: '查询到了数据'
      })
    }, 1000)
  }
  render() {
    return <WithDemo data={this.state.data} />
  }
}
export default App
```

## 4. 高阶组件实现反向继承

让 HOC 继承 wrappedComponent，这样 HOC 就拥有了 wrappedComponent 中定义的属性和方法，如 `state`，`props`，生命周期函数等，这里 HOC 的 `render` 函数，要调用父类的 `render` 函数，需要用到 `super` 关键字。



定义 Button 组件：

```jsx
class Button extends React.Component {
  componentDidMount() {
    console.log("didMount1");
  }
  render() {
    const props = {
        title: '按钮操作'
    }
    console.log("render1");
    return (
      <button {...props} />
    );
  }
}
```

使用 HOC 进行反向继承：

```jsx
const Hoc = WrappedComponent => {
  return class extends WrappedComponent {
    state = {
      num: 0
    }
    componentDidMount() {
      console.log('didMountHoc')
    }
    handleClick = () => {
      this.setState({
        num: this.state.num + 1
      })
    }
    render() {
      console.log('renderHoc')
      // 核心代码
      let RenderTree = super.render()
      let newProps = {
        ...RenderTree.props,
        onClick: this.handleClick
      }
      console.log(RenderTree)
      return (
        <>
          <h3>{RenderTree.props.title}</h3>
          <RenderTree.type {...newProps}>{this.state.num}</RenderTree.type>
        </>
      )
    }
  }
}
const HOCButton = Hoc(Button)
function App() {
  return (
    <div className="App">
      <h1>HOC II</h1>
      <HOCButton />
    </div>
  )
}
```

通过反向继承，可以从 HOC 中拿到 Button 组件中的 `render`、`props`，并能直接在 HOC 中进行使用，而且在 HOC 中，还添加了自定义的使用方式。

## 5. 高阶组件抽取共同逻辑

在开发 React 组件过程中，很容易出现这样一种现象，某些功能是多个组件通用的，如果每个组件都重复实现这样的逻辑，肯定十分浪费，而且违反了“不要重复自己”（DRY，Don't Repeat Yourself)的编码原则，我们肯定想要把这部分共用逻辑提取出来重用。我们首先想到的是当然是把共用逻辑提取为一个 React 组件。不过，有些情况下，这些共用逻辑还没法成为一个独立组件，也就是说这些共用逻辑单独无法使用，它们只是对其他组件的功能加强。这时就可以用高阶组件来实现共同逻辑的抽离。



有这样一个场景：在一个电商类网站中，“退出登录”按钮、“购物车”这些模块，就只有用户登录之后才显示，对应这些模块的 React 组件如果连“只有在登录时才显示”的功能都重复实现，那就浪费了。



假设已经有一个函数 `getUserId` 能够从 cookies 中读取登录用户的 ID，如果用户未登录，这个 `getUserId` 就返回空。退出登录按钮的代码：

```jsx
const LogoutButton = () => {
  if (getUserId()) {
    return ...; // 显示”退出登录“的JSX
  } else {
    return null;
  }
};
```

购物车的代码：

```jsx
const ShoppintCart = () => {
  if (getUserId()) {
    return ...; // 显示”购物车“的JSX
  } else {
    return null;
  }
};
```

上面两个组件明显有重复的代码，可以把重复代码抽取出来，形成 `withLogin` 这个高阶组件：

```jsx
const withLogin = (Component) => {
  const NewComponent = (props) => {
    if (getUserId()) {
      return <Component {...props} />;
    } else {
      return null;
    }
  }
  return NewComponent;
};
```

这样，就只需要这样定义 `LogoutButton` 和 `ShoppintCart`：

```jsx
const LogoutButton = withLogin((props) => {
  return ...; // 显示”退出登录“的JSX
});
const ShoppingCart = withLogin(() => {
  return ...; // 显示”购物车“的JSX
});
```

## 6. 高阶组件的高级用法

高阶组件只规定了需要返回一个 React 组件即可，没有规定接受 React 组件参数的个数，所以，可以传入多个 React 组件给高阶组件。



我们可以改进上面的 withLogin，让它接受两个 React 组件，根据用户是否登录选择渲染合适的组件：

```jsx
const withLoginAndLogout = (ComponentForLogin, ComponentForLogout) => {
  const NewComponent = (props) => {
    if (getUserId()) {
      return <ComponentForLogin {...props} />;
    } else {
      return <ComponentForLogout{...props} />;
    }
  }
  return NewComponent;
};
```

有了上面的 `withLoginAndLogout`，就可以产生根据用户登录状态显示不同的内容：

```jsx
const TopButtons = withLoginAndLogout(LogoutButton, LoginButton);
```

## 7. 高阶组件的链式调用

高阶组件是可以链式调用。假设，有三个高阶组件分别是 `withOne`、`withTwo` 和 `withThree`，如果要赋予一个组件 X 某个高阶组件的能力，我们要做的就是挨个使用高阶组件包装：

```jsx
const X1 = withOne(X);
const X2 = withTwo(X1);
const X3 = withThree(X2);
const SuperX = X3; // 最终的SuperX具备三个高阶组件的能力
```

可以避免使用中间变量 `X1` 和 `X2`，直接连续调用高阶组件：

```jsx
const SuperX = withThree(withTwo(withOne(X)));
```

对于 `X` 而言，它被高阶组件包装了，至于被一个高阶组件包装，还是被 N 个高阶组件包装，没有什么差别。而高阶组件本身就是一个纯函数，纯函数是可以组合使用的，所以，可以把多个高阶组件组合为一个高阶组件，然后用这一个高阶组件去包装`X`：

```jsx
const hoc = compose(withThree, withTwo, withOne);
const SuperX = hoc(X);
```

在上面代码中使用的 `compose`，是函数式编程中很基础的一种方法，作用就是把多个函数组合为一个函数，在很多开源的代码库中都可以看到，下面是一个参考实现：

```jsx
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```

React 组件可以当做积木一样组合使用，现在有了 compose，就可以把高阶组件也当做积木一样组合，进一步重用代码。假如一个应用中多个组件都需要同样的多个高阶组件包装，那就可以用 compose 组合这些高阶组件为一个高阶组件，这样在使用多个高阶组件的地方实际上就只需要使用一个高阶组件了。

## 8. 高阶组件的应用场景

### （1）React Redux

在 Redux 中的 `connect` 方法，便是 HOC 很经典的应用，通过 `connect` 方法处理后，可以在 `props` 中拿到 Redux 中的数据。

### （2）埋点操作

通过渲染某个组件，发送埋点信息，这样也可以独立出埋点操作：

```jsx
function HOCFactory(WrappedComponent) {
  return class HOC extends React.Component {
    componentDidMount () {
      console.log('发送埋点信息')
    }
    render(){
      return <div>...</div>
    }
  }
}
```

### （3）页面权限管理

通过 HOC 对组件进行包裹，并在包裹组件中判断是否拥有权限。如果有，就渲染相应的页面，如果没有，就进行无权限处理操作。

## 9. 不要滥用高阶组件

高阶组件虽然可以用一种可重用的方式扩充现有 React 组件的功能，但高阶组件并不是绝对完美的。它存在以下问题：

### （1）处理 displayName 麻烦

首先，高阶组件不得不处理 `displayName`（displayName字符串用于调试消息）。当 React 渲染出错的时候，靠组件的 displayName 静态属性来判断出错的组件类，而高阶组件总是创造一个新的 React 组件类。所以，每个高阶组件都需要处理一下 displayName。



如果要做一个最简单的什么增强功能都没有的高阶组件，也必须要写下面这样的代码：

```jsx
const withExample = (Component) => {
  const NewComponent = (props) => {
    return <Component {...props} />;
  }
  
  NewComponent.displayName = `withExample(${Component.displayName || Component.name || 'Component'})`;
  
  return NewCompoennt;
};
```

### （2）增加静态函数的支持

对于 React 生命周期函数，高阶组件不用怎么特殊处理。但是，如果内层组件包含定制的静态函数，这些静态函数的调用在 React 生命周期之外，那么高阶组件就必须要在新产生的组件中增加这些静态函数的支持，这更加麻烦。

### （3）嵌套调用混乱

高阶组件支持嵌套调用，这是它的优势。但是如果真的一大长串高阶组件被应用的话，当组件出错，看到的会是一个超深的 stack trace。

### （4）重复产生 React 组件

使用高阶组件，一定要非常小心，要避免重复产生 React 组件。下面的代码是有问题的：

```jsx
const Example = () => {
  const EnhancedFoo = withExample(Foo);
  return <EnhancedFoo />
}
```

这里，每一次渲染 Example，都会用高阶组件产生一个新的组件，虽然都叫做 `EnhancedFoo`，但是对 React 来说是一个全新的东西，在重新渲染的时候不会重用之前的虚拟 DOM，会造成极大的浪费。



正确的写法是这样的，自始至终只有一个 EnhancedFoo 组件类被创建：

```jsx
const EnhancedFoo = withExample(Foo);
const Example = () => {
  return <EnhancedFoo />
}
```

## 10. 高阶组件的注意事项

高阶组件不是 React 的 API，它是一种实现模式，其实是装饰其设计模式的应用。该模式允许我们在一个地方定义逻辑并且能对所有的组件使用，这就是高阶组件的精华所在，它本质是一个没有副作用的纯函数。使用 HOC 需要注意如下事项：

- HOC 是一个没有副作用的纯函数，因此，不要在 HOC 内部修改原组件的原型属性；
- 直接修改组件的方法，是弱抽象的，而 HOC 的本质是一个返回被加强的组件的函数，如果一个组件需要进行不同维度的加强，我们需要对组件进行多次 HOC 处理，即使用高阶组件组合方式；

- HOC 不包含被包装组件的静态方法，如果需要使用被包装组件的静态方法，必须手动拷贝静态方法；
- HOC 中指定的 ref 并不会传递到子组件，我们需要使用 props 回调函数传递；

- 不要在 render 函数中使用 HOC，这是因为每次 render 调用时都会创建一个新的高阶组件实例，每一次都会使子对象树完全被卸载或移除；
- 高阶组件是一个函数，函数关注的是逻辑，如果逻辑是和 DOM 不直接相关的，这部分逻辑适合使用高阶组件抽象，比如请求发送。