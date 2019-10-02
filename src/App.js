import React, { Component } from "react"
import { Route } from "react-router-dom"
import Home from "./Containers/Home/Home"
import Signup from "./Containers/Signup/Signup"
import Login from "./Containers/Login/Login"
import { Aux } from './Components/Hocs/Auxil'

class App extends Component {
  render () {
    return (
    <Aux>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Aux>
    )
  }
}

export default App;
