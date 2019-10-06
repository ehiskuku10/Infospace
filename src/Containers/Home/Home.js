import React from 'react'
import { Route } from "react-router-dom"
import { Header } from "./Header/Header"
import Footer from "./Footer/Footer"
import {Content} from "./Content/Content"
import { Aux } from '../../Components/Hocs/Auxil'

export const Home = (props) => (
  <Aux>
    <Header />
    <Route path="/topics" component={Content} />
    <Footer />
  </Aux>
) 
