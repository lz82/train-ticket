import React, { useState } from 'react'

function MemoHook () {
  const [age, setAge] = useState(18)

  return (
    <div>
      <h4>memo hook</h4>
    </div>
  )
}

export default MemoHook