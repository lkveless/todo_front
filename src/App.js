import React, {useContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom'
import {Context} from "./index"
import NavBar from './components/Navbar'
import NavRouter from './components/NavRouter'
import './App.css';
import { observer } from 'mobx-react-lite';
import {Spinner} from "react-bootstrap";
import { check } from './http/userAPI';


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [user])

  if (loading) {
      return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <NavRouter />
    </BrowserRouter>
  )
})

export default App
