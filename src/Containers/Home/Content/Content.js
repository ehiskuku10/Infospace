import React from "react"
import classes from "./Content.css"
import { SubHeader } from "./SubHeader/SubHeader"
import { HomeFeed } from "./HomeFeed/HomeFeed"

export const Content = () => {
    return (
        <div className={classes.main_content}>
            <SubHeader />
            <HomeFeed />
        </div>
    )
}