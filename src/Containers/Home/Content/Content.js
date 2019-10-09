import React from "react"
import classes from "./Content.css"
import { Link } from "react-router-dom"
import { SubHeader } from "./SubHeader/SubHeader"
import { HomeFeed } from "./HomeFeed/HomeFeed"

export const Content = () => {
    return (
        <div className={classes.main_content}>
            <SubHeader />
            <HomeFeed />
            <Link to="/signup" className={classes.main_content__button}>Read more</Link>
        </div>
    )
}