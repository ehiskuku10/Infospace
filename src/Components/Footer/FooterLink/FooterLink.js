import React from "react"
import { Link } from "react-router-dom"
import classes from "./FooterLink.css"

export const FooterLink = (props) => {
    return (
        <li className={classes.footer_list_items}>
            <Link>{props.link}</Link>
        </li>
    )
}