import React from "react"
import classes from "./Logo.css"
import { Link } from "react-router-dom"


export const Logo = () => {
    return (
        <Link to="/" className={classes.logo}>
            <img src={process.env.PUBLIC_URL + "/assets/images/infospace.png"} alt={"logo"} />
            <h2>infospace</h2>
        </Link>
    )
}

