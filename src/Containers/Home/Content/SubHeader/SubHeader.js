import React from "react"
import classes from "./SubHeader.css"
import { Link } from "react-router-dom"

export const SubHeader = () => {
    return (
        <div className={classes.page}>
            <header>
                <Link to="#" className={classes.subheader_logo__link}>
                    <img src={process.env.PUBLIC_URL + "/assets/images/infospace.png"} alt={"logo"} />
                    <h2>infospace</h2>
                </Link>
                <h1>
                    <div>BE INFORMED</div>
                    <div>BE INSPIRED</div>
                </h1>
                <p>Stories Curated For You</p>
                <div className={classes.call_to_action}>
                    <Link to="/signup" className={classes.call_to_action_link}>Sign Up</Link>
                </div>
            </header>
        </div>
    )
}