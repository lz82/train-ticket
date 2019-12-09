import React, { Component } from 'react'

class Memo extends Component {
  state = {
    age: 18,
    name: 'lz'
  }

  render() {
    const { name } = this.state
    return (

      <Foo name={name} />
    )
  }
}

class Foo extends Component {
  render() {
    console.log('foo has rendered')
    return <div>{this.props.name}</div>
  }
}

export default Memo