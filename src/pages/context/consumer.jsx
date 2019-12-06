import React, { Component, createContext } from 'react'

const ContextUserInfo = createContext()
const ContextBaseInfo = createContext()

function Middle(props) {
  return props.children
}

function Leaf() {
  return (
    <div className="leaf">
      <ContextUserInfo.Consumer>
        {(userInfo) => {
          return (
            <ContextBaseInfo.Consumer>
              {(baseInfo) => {
                return (
                  <>
                    <h3>{baseInfo.name}</h3>
                    {Object.keys(userInfo).map((item) => {
                      return (
                        <div key={item}>
                          <span>{item}:</span>
                          <span>{userInfo[item]}</span>
                          <br />
                        </div>
                      )
                    })}
                  </>
                )
              }}
            </ContextBaseInfo.Consumer>
          )
        }}
      </ContextUserInfo.Consumer>
    </div>
  )
}

class Consumer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        name: 'lz',
        age: 18
      },
      baseInfo: {
        name: 'Hook'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <ContextBaseInfo.Provider value={this.state.baseInfo}>
          <ContextUserInfo.Provider value={this.state.userInfo}>
            <Middle>
              <h1>Context test:</h1>
              <Leaf />
              <button onClick={this.handleClick}>press</button>
            </Middle>
          </ContextUserInfo.Provider>
        </ContextBaseInfo.Provider>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      userInfo: {
        name: this.state.userInfo.name,
        age: this.state.userInfo.age - 1
      }
    })
  }
}

export default Consumer