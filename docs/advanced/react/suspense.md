# React Suspense

Suspense 应用的场合就是异步数据处理，最常见的例子，就是通过 AJAX 从服务器获取数据，每一个 React 开发者都曾为这个问题纠结。如果用一句话概括 Suspense 的功用，那就是：**用同步的代码来实现异步操作**。

## 1. React 同步操作的不足

React 最初的设计，整个渲染过程都是同步的。同步的意思是，当一个组件开始渲染之后，就必须一口气渲染完，不能中断，对于特别庞大的组件树，这个渲染过程会很耗时，而且，这种同步处理，也会导致我们的代码比较麻烦。



当开始渲染某个组件的时候，假设这个组件需要从服务器获取数据，那么，要么由这个组件的父组件想办法拿到服务器的数据，然后通过 props 传递进来，要么就要靠这个组件自力更生来获取数据，但是，没有办法通过一次渲染完成这个过程，因为渲染过程是同步的，不可能让 React 等待这个组件调用 AJAX 获取数据之后再继续渲染。



常用的做法，需要组件的 render 和 componentDidMount 函数配合：

- 在 componentDidMount 中使用 AJAX，在 AJAX 成功之后，通过 setState 修改自身状态，这会引发一次新的渲染过程。
- 在 render 函数中，如果 state 中没有需要的数据，就什么都不渲染或者渲染一个“正在装载”之类提示；如果 state 中已经有需要的数据，就可以正常渲染了，但这也必定是在 componentDidMount 修改了 state 之后，也就是只有在第二次渲染过程中才可以。



看下面的例子：

```jsx
class Foo extends React.Component {
  state = {
     data: null
  }
  render() {
     if (!this.state.data) {
        return null;
     } else {
        return <div>this.state.data</div>;
     }
  }
  
  componentDidMount() {
     callAPI().then(result => {
       this.setState({data: result});
     });
  }
}
```

这种方式虽然可行，但它的缺点也是很明显的：

- 组件必须要有自己的 state 和 componentDidMount 函数实现，也就不可能做成纯函数形式的组件。
- 需要两次渲染过程，第一次是 mount 引发的渲染，由 componentDidMount 触发 AJAX 然后修改 state，然后第二次渲染才真的渲染出内容。

- 代码啰嗦



而 Suspense 就是为了克服上述 React 的缺点。



如果要利用 AJAX 获取数据，代码怎样写最简洁高效？首先，不需要写一个有状态的组件，因为通过 AJAX 获取的数据往往也就在渲染用一次，没必要存在 state 里；其次，想要使数据拿来就用，不需要经过 componentDidMount 走一圈。所以，代码最好是下面这样：

```jsx
const Foo = () => {
  const data = callAPI();
  return <div>{data}</div>;
}
```

这样写就足够简洁了，可是在  Suspense 出现之前是做不到的。因为 `callAPI` 肯定是一个异步操作，不可能获得同步数据，无法在同步的 React 渲染过程中立足。

## 2. Suspense 核心概念

在 JsConf Iceland 2018 技术大会 上，React 的开发者展示了未来 React 会支持的新特性 Suspense，有了 Suspense，就可以在 React 中以同步的形式来写异步代码，代码形式类似下面：

```jsx
const Foo = () => {
  const data = createFetcher(callAJAX).read();
  return <div>{data}</div>;
}
```

那这怎么做到的？怎么在同步的渲染过程中强行加入异步操作？下面就来看一下 Suspense 的原理。



在 React 推出 v16 的时候，就增加了一个新生命周期函数 componentDidCatch。如果某个组件定义了 componentDidCatch，那么这个组件中所有的子组件在渲染过程中抛出异常时，这个 componentDidCatch 函数就会被调用。



可以这么设想，componentDidCatch 就是 JavaScript 语法中的 `catch`，而对应的 `try` 覆盖所有的子组件，就像下面这样:

```jsx
try {
  //渲染子组件
} catch (error) {
  // componentDidCatch被调用
}
```

Suspense 就是巧妙利用 componentDidCatch 来实现同步形式的异步处理。Suspense 提供的 createFetcher 函数会封装异步操作，当尝试从 createFetcher 返回的结果读取数据时，有两种可能：一种是数据已经就绪，那就直接返回结果；还有一种可能是异步操作还没有结束，数据没有就绪，这时候 createFetcher 会抛出一个“异常”。



那抛出异常，渲染过程不就中断了吗？的确会中断，不过，createFetcher 抛出的这个“异常”比较特殊，这个“异常”实际上是一个 Promise 对象，这个 Promise 对象代表的就是异步操作，操作结束时，也是数据准备好的时候。当 componentDidCatch 捕获这个 Promise 类型的“异常”时，就可以根据这个 Promise 对象的状态改变来重新渲染对应组件，第二次渲染，肯定就能够成功。



下面是 createFetcher 的一个简单实现方式：

```jsx
var NO_RESULT = {};
export const createFetcher = (task) => {
  let result = NO_RESULT;
  return () => {
    const p = task();
    p.then(res => {
      result = res;
    });
    if (result === NO_RESULT) {
      throw p;
    }
    return result;
  }
}
```

在上面的代码中，createFetcher 的参数 `task` 被调用应该返回一个 Promise 对象，这个对象在第一次调用时会被 throw 出去，但是，只要这个对象完结，那么 `result` 就有实际的值，不会再被 throw。



还需要一个和 createFetcher 配合的 Suspense，代码如下：

```jsx
class Suspense extends React.Component {
  state = {
    pending: false
  }
  componentDidCatch(error) {
    // easy way to detect Promise type
    if (typeof error.then === 'function') {
      this.setState({pending: true});
      error.then(() => this.setState({
        pending: false
      }));
    }
  }
  render() {
    return this.state.pending ? null : this.props.children;
  }
}
```

上面的 Suspense 组件实现了 componentDidCatch，如果捕获的 `error` 是 Promise 类型，那就说明子组件用 createFetcher 获取异步数据了，就会等到它完结之后重设 state，引发一次新的渲染过程，因为 createFetcher 中会记录异步返回的结果，新的渲染就不会抛出异常了。



使用 createFetcher 和 Suspense 的示例代码如下:

```jsx
const getName = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Morgan');
  }, 1000);
})
const fetcher = createFetcher(getName);
const Greeting = () => {
  return <div>Hello {fetcher()}</div>
};
const SuspenseDemo = () => {
  return (
    <Suspense>
      <Greeting />
    </Suspense>
  );
};
```

上面的 `getName` 利用 `setTimeout` 模拟了异步 AJAX 获取数据，第一次渲染 `Greeting` 组件时，会有 Promise 类型的异常抛出，被 `Suspense` 捕获。1 秒钟之后，当 `getName` 返回实际结果的时候，`Suspense` 会引发重新渲染，这一次 `Greeting` 会显示出 `hello Morgan`。

## 3. Suspense 带来的 React 使用模式改变

Suspense 被推出之后，可以极大地减少异步操作代码的复杂度。之前，只要有 AJAX 这样的异步操作，就必须要用两次渲染来显示 AJAX 结果，这就需要用组件的 state 来存储 AJAX 的结果，用 state 又意味着要把组件实现为一个 class。



总之，我们需要做这些：

- 实现一个 class；
- class 中需要有 state；

- 需要实现 componentDidMount 函数；
- render 必须要根据 `this.state` 来渲染不同内容。



有了 Suspense 之后，不需要做上面这些杂事，只要一个函数形式组件就足够了。