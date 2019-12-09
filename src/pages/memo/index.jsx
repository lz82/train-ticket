import React, { Component, PureComponent, memo } from 'react'

class MemoComponent extends Component {
  state = {
    age: 18,
    name: 'lz'
  }

  render() {
    const { name } = this.state
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              age: this.state.age + 1
            })
          }}
        >
          click
        </button>
        <Foo name={name} />
        <Bar name={name} />
        <span>{this.state.age}</span>
      </>
    )
  }
}

// 子组件继承PureComponent的话，当props不变时，不会重新渲染
// PureComponent其实是利用了ShouldComponentUpdate
// 但是需要注意，PureComponent也是有局限性的，只能对值类型生效
// 如果props是个对象，这不行
class Foo extends PureComponent {
  render() {
    console.log('foo has rendered')
    return (
      <>
        <h3>this is Foo</h3>
        <div>{this.props.name}</div>
      </>
    )
  }
}

// 函数式组件使用memo来实现PureComponent功能
// 注意是小写
const Bar = memo(function(props) {
  console.log('bar render')
  return (
    <>
      <h3>this is Bar</h3>
      <div>{props.name}</div>
    </>
  )
})

export default MemoComponent
