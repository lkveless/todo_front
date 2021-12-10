import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavRouter from './components/NavRouter'


const App = () => {
  return (
    <BrowserRouter>
      <NavRouter />
    </BrowserRouter>
  )
}

export default App
