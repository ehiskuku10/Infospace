import React, { Component } from "react"
import classes from "./Signup.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addNewUser } from "../../Reducers/Actions"
import UserForm from "./Form/Form"

class Signup extends Component {

    render () {
        return (
            <div className={classes.container__signup} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/1.jpg)`}}>
                <div className={classes.backdrop__signup}>
                    <div className={classes.form_card__signup}>
                        <div className={classes.logo__signup}>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/infospace.png`} alt="infospace"/>
                            <h2>join infospace</h2>
                        </div>
                        <div className={classes.form_block__signup}>
                            <UserForm onSubmit={this.props.addNewUser} />
                            <p>Or sign up with</p>
                            <Link>
                                <i></i>
                                Continue with Facebook
                            </Link>
                        </div>
                        <div className={classes.footer__signup}>
                            <p><span>Already have an account?</span> <b>Log In</b></p>
                            <p><b>Get started as a publisher</b></p>
                            <p>By continuing, you accept the <Link>Terms of Use and Privacy Policy.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addNewUser: (values) => dispatch(addNewUser(values))
})

Signup = connect(() => ({}), mapDispatchToProps)(Signup)

export default Signup