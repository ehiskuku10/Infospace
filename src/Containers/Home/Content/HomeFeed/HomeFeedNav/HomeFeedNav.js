import React from "react"
import classes from "./HomeFeedNav.css"
import { Link } from "react-router-dom"

export const HomeFeedNav = () => {
    return (
        <nav className={classes.home_feed_nav}>
            <ul>
                <li><Link className={classes.active}>Featured</Link></li>
                <li><Link>Technology</Link></li>
                <li><Link>News</Link></li>
                <li><Link>Entertainment</Link></li>
                <li><Link>Design</Link></li>
                <li><Link>Health</Link></li>
            </ul>
        </nav>
    )
}