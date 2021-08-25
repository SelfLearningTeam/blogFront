import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Navbar />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  )
}

export default App
