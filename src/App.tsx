import React from 'react'
import './App.css'
import TagManager from './components/TagManager'
import TagCounter from './components/TagCounter'
import GlobalStyle from './styles/global'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TagManager></TagManager>
      <TagCounter></TagCounter>
    </div>
  )
}

export default App
