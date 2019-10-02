import React from "react"
import classes from "./TopBar.css"
import { Link } from "react-router-dom"
import MainNavSecItems from "./MainNavSecItems/MainNavSecItems"
import { Aux } from "../../../../Components/Hocs/Auxil"

export const TopBar = () => {
    return(
        <Aux>
            <header>
                <nav className={classes.main_nav}>
                    <Link to="/" className={classes.main_nav__logo}>
                        <img src={process.env.PUBLIC_URL + "/assets/images/infospace.png"} alt={"logo"} />
                        <h2>infospace</h2>
                    </Link>
                    <ul className={classes.main_nav__secondary}>
                        <MainNavSecItems />
                    </ul>
                </nav>
            </header>
        </Aux>
    )
}