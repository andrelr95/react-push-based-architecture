import React from 'react'
import './App.css'
import TagManager from './components/TagManager'
import TagManagerClass from './domains/TagsAkita/Tags'
import TagCounter from './components/TagCounter'

import GlobalStyle from './styles/global'
import { akitaDevtools } from  '@datorama/akita'
import TagsPageCounter from './components/TagCounter'

akitaDevtools()

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TagManagerClass></TagManagerClass>
      <TagsPageCounter></TagsPageCounter>
      {/* <TagCounter></TagCounter> */}
    </div>
  )
}

export default App
