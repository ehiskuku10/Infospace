import React, { Component } from 'react'
import { Header } from "./Header/Header"
import { Content } from "./Content/Content"
import Footer from "./Footer/Footer"
import { Aux } from '../../Components/Hocs/Auxil'

class Home extends Component {
  render () {
    return (
    <Aux>
      <Header />
      <Content />
      <Footer />
    </Aux>
    )
  }
}

export default Home;
