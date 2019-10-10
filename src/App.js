import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { Home } from "./Containers/Home/Home"
import Signup from "./Containers/Signup/Signup"
import Login from "./Containers/Login/Login"
import { Aux } from './Components/Hocs/Auxil'

class App extends Component {
  render () {
    return (
    <Aux>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/topics" component={Home} />
        <Route path="/topic" component={Home} />
        <Redirect from="/" to="/topics" />
      </Switch>
    </Aux>
    )
  }
}

export default App;
