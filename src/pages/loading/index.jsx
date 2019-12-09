import React from 'react'

import './index.css'
import loading from './img/loading.gif'

function Loading() {
  return (
    <div className="loading-page-wrapper">
      <img src={loading} alt="loading" width="150" height="150" />
    </div>
  )
}

export default Loading
