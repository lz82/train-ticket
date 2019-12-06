import React, { Component, createContext } from 'react'

// 传参为默认值，当Context Provider不存在时，则会使用该值
const ContextUserInfo = createContext({ name: 'admin' })

class ContextType extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: {
        name: 'lz',
        age: 18
      }
    }
  }

  render() {
    const { userInfo } = this.state
    return (
      <ContextUserInfo.Provider value={userInfo}>
        <div className="context-type-wrapper">
          <Middle>
            <Leaf />
          </Middle>
        </div>
      </ContextUserInfo.Provider>
    )
  }
}

function Middle(props) {
  return props.children
}

class Leaf extends Component {
  static contextType = ContextUserInfo

  render() {
    const userInfo = this.context
    return (
      <>
        <h3>context type demo</h3>
        <h6>使用ContextType 来替代Consumer</h6>

        {
          Object.keys(userInfo).map((item, index) => {
            return (
              <div key={index}>
                <span>{item}:</span>&nbsp;&nbsp;<span>{userInfo[item]}</span>
              </div>
            )
          })
        }
      </>
    )
  }
}

export default ContextType
