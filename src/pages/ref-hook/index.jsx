import React, { Component, useRef, useEffect, useState } from "react";

// useRef只能作用在class上而不能在function上
class Foo extends Component {
  speak() {
    console.log("this is foo speaking....");
  }

  render() {
    return <div>Component: Foo count: {this.props.count}</div>;
  }
}

function RefHook() {
  const [count, setCount] = useState(0);

  const refFoo = useRef();

  let timer = useRef();

  // 直接通过refFoo.current拿到子组件
  // 然后调用子组件的方法
  useEffect(() => {
    refFoo.current.speak();
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => {
      // 注意这里要使用下面回调函数的方式来使count + 1
      // 否则会有以下两个问题:
      // 1. 必须在第二个参数数组中传count
      // 2. 传了count之后，会重新渲染
      // setCount(count => count + 1);
      setCount(count => count + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count > 10) {
      clearInterval(timer.current);
    }
  });

  return (
    <div>
      <h4>Ref Hook</h4>
      <Foo ref={refFoo} count={count} />
    </div>
  );
}

export default RefHook;
