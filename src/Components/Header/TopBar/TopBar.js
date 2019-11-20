import React from "react"
import classes from "./TopBar.css"
import MainNavBar from "./MainNavBar/MainNavBar"
import { Logo } from "./Logo/Logo"
import { Aux } from "../../../Components/Hocs/Auxil"

export const TopBar = () => {
    return(
        <Aux>
            <header>
                <nav className={classes.main_nav}>
                    <Logo />
                    <MainNavBar />
                </nav>
            </header>
        </Aux>
    )
}