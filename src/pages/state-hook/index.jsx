import React, { useState } from 'react'

function StateHook(props) {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(() => {
    return props.defaultCount || 0
  })
  console.log('render')
  return (
    <div>
      <h5>state hook</h5>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click
      </button>
      <span>{count}</span>
    </div>
  )
}

export default StateHook
