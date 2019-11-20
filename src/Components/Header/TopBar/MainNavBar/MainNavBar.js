import React from "react"
import { Link } from "react-router-dom"
import classes from "./MainNavBar.css"
import { connect } from 'react-redux'
import { displayBackdrop } from '../../../../Reducers/Actions'

const MainNavBar = ({
    showBackdrop
}) => {
    return (
        <ul className={classes.main_navbar}>
            <li className={classes.main_navbar__item + " " + classes.main_navbar_item__input}><i className="fa fa-search"></i><input onFocus={showBackdrop} icon="search" placeholder="Search Infospace" tabIndex={-1} /></li>
            <li className={classes.main_navbar__item}><Link to="/signup" className={classes.main_navbar_item__link + " " + classes.main_navbar_item__link__signup}>Sign Up</Link></li>
            <li className={classes.main_navbar__item}><Link className={classes.main_navbar_item__link}>Open in app</Link></li>
            <li className={classes.main_navbar__item}><Link to="/login" className={classes.main_navbar_item__link + " " + classes.main_navbar_item__link__login}>Log In</Link></li>
        </ul>
    )
}


const mapStateToProps = state => ({
    backdropVisibility: state.Core.backdropVisibility
});
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    showBackdrop: () => dispatch(displayBackdrop(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar);