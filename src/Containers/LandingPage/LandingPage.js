import React from 'react'
import { Header } from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Content from "../../Components/Content/Content"
import { Aux } from '../../Components/Hocs/Auxil'

export const LandingPage = (props) => (
  <Aux>
    <Header />
    <Content />
    <Footer />
  </Aux>
) 
