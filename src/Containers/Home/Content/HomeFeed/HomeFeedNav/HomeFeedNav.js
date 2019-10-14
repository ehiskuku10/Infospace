import React from "react"
import classes from "./HomeFeedNav.css"
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import { fetchPhotos } from '../../../../../Reducers/LandingPage'
import jQuery from "jquery"


const HomeFeedNav = ({
    fetchPhotos
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
            <ul id="home_feed_nav_ul">
                <li><NavLink to="#" id='featured' onClick={fetchPhotos}>Featured</NavLink></li>
                <li><NavLink to="#" id='technology' onClick={fetchPhotos}>Technology</NavLink></li>
                <li><NavLink to="#" id='news' onClick={fetchPhotos}>News</NavLink></li>
                <li><NavLink to="#" id="entertainment" onClick={fetchPhotos}>Entertainment</NavLink></li>
                <li><NavLink to="#" id='design' onClick={fetchPhotos}>Design</NavLink></li>
                <li><NavLink to="#" id='health' onClick={fetchPhotos}>Health</NavLink></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => ({
    photos: state.LandingPage.photos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchPhotos: (e) => dispatch(fetchPhotos(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeedNav);