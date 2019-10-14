import React from "react"
import { Aux } from "../../../../../Components/Hocs/Auxil"
import { Link } from "react-router-dom"
import classes from "./MainNavSecItems.css"
import { connect } from 'react-redux'
import { displayBackdrop } from '../../../../../Reducers/LandingPage'

const MainNavSecItems = ({
    showBackdrop
}) => {
    return (
        <Aux>
            <li className={classes.main_nav_secondary__item + " " + classes.main_nav_secondary_item__input}><i className="fa fa-search"></i><input onFocus={showBackdrop} icon="search" placeholder="Search Infospace" tabIndex={-1} /></li>
            <li className={classes.main_nav_secondary__item}><Link to="/signup" className={classes.main_nav_secondary_item__link + " " + classes.main_nav_secondary_item__link__signup}>Sign Up</Link></li>
            <li className={classes.main_nav_secondary__item}><Link className={classes.main_nav_secondary_item__link}>Open in app</Link></li>
            <li className={classes.main_nav_secondary__item}><Link to="/login" className={classes.main_nav_secondary_item__link + " " + classes.main_nav_secondary_item__link__login}>Log In</Link></li>
        </Aux>
    )
}


const mapStateToProps = state => ({
    backdropVisibility: state.LandingPage.backdropVisibility
});
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    showBackdrop: () => dispatch(displayBackdrop(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavSecItems);