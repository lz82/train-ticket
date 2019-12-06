import React from 'react'
import './app.css'

import Consumer from './pages/context/consumer'
import ContextType from './pages/context/context-type'

function App () {
  return (
    <div className="app">
      <Consumer />
      <ContextType />
    </div>
  )
}

export default App
