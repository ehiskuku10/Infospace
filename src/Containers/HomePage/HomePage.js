import React, { Component } from "react"
import classes from "./HomePage.css"
import TopNav from "./TopNav/TopNav"

class HomePage extends Component {
    render () {
        return (
            <div className={classes.home_container}>
                <TopNav />
            </div>
        )
    }
}

export default HomePage