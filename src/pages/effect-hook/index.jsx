import React, { useState, useEffect } from "react";

function EffectHook(props) {
  const [age, setAge] = useState(18);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  };


  // 关注点分离
  // 每个useEffect只写一个副作用

  // 当age变化时
  useEffect(() => {
    console.log("useEffect: age");
    document.title = `age: ${age}`;
  }, [age]);


  // 当size变化时，由于只需要运行一次，因此第二个参数传[]
  useEffect(() => {
    window.addEventListener("resize", onResize, false);

    // 返回值是在销毁时调用
    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, []);

  const Click = () => {
    console.log('clic')
  }

  // 动态添加事件
  useEffect(() => {
    document.querySelector('#switch').addEventListener('click', Click, false)

    return () => {
      console.log('click cb')
      document.querySelector('#switch').removeEventListener('click', Click, false)
    }
  })

  return (
    <div>
      <h4>Effect Hook</h4>
      <span>age: {age}</span>
      <button onClick={() => setAge(age + 1)}>click</button>

      <p>width: {size.width}</p>
      <p>height: {size.height}</p>

      {age % 2 ? <p id="switch">p</p> : <h4 id="switch">h4</h4>}
    </div>
  );
}

export default EffectHook;
