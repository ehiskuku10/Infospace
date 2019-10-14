import React from "react"
import classes from "./Content.css"
import { SubHeader } from "./SubHeader/SubHeader"
import { HomeFeed } from "./HomeFeed/HomeFeed"
import { showSignUpPrompt } from "../../../Reducers/LandingPage"
import { connect } from 'react-redux'

const Content = ({
    showPrompt,
    loaded
}) => {
    return (
        <div className={classes.main_content}>
            <SubHeader />
            <HomeFeed />
            <button style={{display: (loaded ? 'block' : 'none')}} onClick={showPrompt} className={classes.main_content__button}>Read more</button>
        </div>
    )
}

const mapStateToProps = state => ({
    signUpPrompt: state.LandingPage.signUpPrompt,
    loaded: state.LandingPage.loaded
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    showPrompt: () => dispatch(showSignUpPrompt(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);