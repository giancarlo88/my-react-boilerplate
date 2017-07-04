import React, { Component } from 'react'

import './App.css'

class App extends Component {
  handleChange(e) {
    this.debounceQuery(e.target.value)
  }

  render() {
    return (
      <div>
        App goes here.
      </div>
    )
  }
}

export default App
