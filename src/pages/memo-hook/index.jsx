/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useCallback, memo } from "react";

function MemoHook() {
  const [age, setAge] = useState(18);
  const [clickCnt, setClickCnt] = useState(0);

  // memo是用在组件上的，props不变组件都不重新渲染
  // useMemo是用在方法上的，依赖的数组不变，都不会重新计算
  // 和useEffect的用法很像，区别是useEffect是副作用，肯定在组件渲染完成之后执行
  // 而useMemo可以加载在组件渲染的时候执行
  const double = useMemo(() => {
    return age * 2;
  }, [age === 20]);

  // 直接将函数作为子组件的props
  // 会导致每次父组件变化，子组件都重新渲染
  // 因此需要将函数用useMemo包装起来
  const handleClice = () => {
    console.log("handle click...");
  };

  // 使用useMemo将函数封装起来，后面传个空数组
  // 这样虽然每次都是一个新句柄，但是其实并不会传给子组件，也就不会导致子组件重新渲染了
  const handleClickMemo = useMemo(() => {
    return () => {
      console.log("memo handle click...");
    };
  }, []);

  // 当useMemo返回一个函数时，可以直接使用useCallback
  const handleClickCallback = useCallback(() => {
    console.log("callback handle click ...");

    // 当用setClickCnt时，第二个参数需要写clickCnt
    // setClickCnt(clickCnt + 1)
    // 如果用回调函数的方式，useCallback的第二个参数可以不写
    setClickCnt(cnt => cnt + 1);
  }, []);

  return (
    <div>
      <h4>memo hook</h4>
      <button onClick={() => setAge(age + 1)}>click</button>
      <p>age: {age}</p>
      <p>double: {double}</p>
      <Foo age={double} clickCnt={clickCnt} click={handleClickCallback} />
    </div>
  );
}

const Foo = memo(function(props) {
  console.log("foo render...");
  return (
    <div onClick={props.click}>
      <p>Component: {props.age}</p>
      <p>click count: {props.clickCnt}</p>
    </div>
  );
});

export default MemoHook;
