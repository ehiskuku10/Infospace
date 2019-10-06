import React from "react"
import classes from "./HomeFeedNav.css"
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import { switchCategory } from '../../../../../Reducers/ChangeCategory'
import jQuery from "jquery"


const HomeFeedNav = ({
    switchCategory,
    posts
}) => {

    (function($){
        $(window).scroll(() => {
            if($(window).scrollTop() >= 500) {
                $(`.${classes.home_feed_nav}`).css({
                    position: 'fixed',
                    zIndex: 1000
                })
            } else {
                $(`.${classes.home_feed_nav}`).css({
                    position: 'relative',
                    zIndex: 'default'
                })
            }
        })
    })(jQuery)
        

    return (
        <nav className={classes.home_feed_nav}>
            <h1>{posts[0]}</h1>
            <ul id="home_feed_nav_ul">
                <li><NavLink to="#" id='featured' onClick={switchCategory}>Featured</NavLink></li>
                <li><NavLink to="#" id='technology' onClick={switchCategory}>Technology</NavLink></li>
                <li><NavLink to="#" id='news' onClick={switchCategory}>News</NavLink></li>
                <li><NavLink to="#" id="entertainment" onClick={switchCategory}>Entertainment</NavLink></li>
                <li><NavLink to="#" id='design' onClick={switchCategory}>Design</NavLink></li>
                <li><NavLink to="#" id='health' onClick={switchCategory}>Health</NavLink></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => ({
    posts: state.ChangeCategory.posts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    switchCategory: (e) => dispatch(switchCategory(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeedNav);