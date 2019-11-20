import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import { LandingPage } from "./Containers/LandingPage/LandingPage"
import Signup from "./Containers/Signup/Signup"
import Login from "./Containers/Login/Login"
import { Aux } from './Components/Hocs/Auxil'
import HomePage from './Containers/HomePage/HomePage'
// import jwt_decode from "jwt-decode"


class App extends Component {
  render () {
    // const token = localStorage.usertoken || null
    // const decode = jwt_decode(token) || null
    return (
    <Aux>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={HomePage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Aux>
    )
  }
}


export default App
