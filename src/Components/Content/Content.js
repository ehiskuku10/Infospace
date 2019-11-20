import React from "react"
import classes from "./Content.css"
import { Feed } from "./Feed/Feed"
import { showSignUpPrompt } from "../../Reducers/Actions"
import { connect } from 'react-redux'

const Content = ({
    showPrompt,
    loaded
}) => {
    return (
        <div className={classes.main_content}>
            <Feed />
            <button style={{display: (loaded ? 'block' : 'none')}} onClick={showPrompt} className={classes.main_content__button}>Read more</button>
        </div>
    )
}

const mapStateToProps = state => ({
    signUpPrompt: state.Core.signUpPrompt,
    loaded: state.Core.loaded
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    showPrompt: () => dispatch(showSignUpPrompt(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);