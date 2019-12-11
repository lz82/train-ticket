import React, { Component } from 'react'
import './app.css'

import Consumer from './pages/context/consumer'
import ContextType from './pages/context/context-type'

import Lazy from './pages/lazy'
import Memo from './pages/memo'
import StateHook from './pages/state-hook'
import EffectHook from './pages/effect-hook'
import ContextHook from './pages/context-hook'

import ErrorPage from './pages/error'

class App extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  render() {
    const { hasError } = this.state
    if (hasError) {
      return <ErrorPage />
    }

    return (
      <div className="App">
        <Consumer />
        <ContextType />

        <Lazy />

        <Memo />

        <StateHook defaultCount={10} />

        <EffectHook />

        <ContextHook />
      </div>
    )
  }
}

export default App
