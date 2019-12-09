import React from 'react'
import './app.css'

import Consumer from './pages/context/consumer'
import ContextType from './pages/context/context-type'

import Lazy from './pages/lazy'

function App () {
  return (
    <div className="app">
      <Consumer />
      <ContextType />

      <Lazy />
    </div>
  )
}

export default App
