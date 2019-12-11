import React, { Component, createContext, useState, useContext } from "react";

const ContextUserInfo = createContext();

function ContextHook() {
  const [userInfo, setUserInfo] = useState({
    name: "lz",
    age: 18
  });
  return (
    <ContextUserInfo.Provider value={userInfo}>
      <div>
        <h4>context hook</h4>
        <button
          onClick={() =>
            setUserInfo({
              name: userInfo.name,
              age: userInfo.age + 1
            })
          }
        >
          click
        </button>
        <Foo />
        <Foo2 />
        <Foo3 />
      </div>
    </ContextUserInfo.Provider>
  );
}

class Foo extends Component {
  // 这里的首字母是小写！！！！
  static contextType = ContextUserInfo;

  render() {
    const userInfo = this.context;
    return <div>contextType: {userInfo.age}</div>;
  }
}

class Foo2 extends Component {
  render() {
    return (
      <ContextUserInfo.Consumer>
        {userInfo => <div>Consumer: {userInfo.age}</div>}
      </ContextUserInfo.Consumer>
    );
  }
}

function Foo3() {
  const userInfo = useContext(ContextUserInfo);
  return <div>useContext: {userInfo.age}</div>;
}

export default ContextHook;
