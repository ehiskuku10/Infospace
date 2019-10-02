import React, { Component } from "react"
import classes from "./Login.css"
import { Link } from "react-router-dom"

class Login extends Component {
    render () {
        return (
            <div className={classes.container__login} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/6.jpg)`}}>
                <div className={classes.backdrop__login}>
                    <div className={classes.form_card__login}>
                        <div className={classes.logo__login}>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/infospace.png`} alt="infospace"/>
                            <h2>Log in to Infospace</h2>
                        </div>
                        <div className={classes.button_group__login}>
                            <Link>
                                <i></i>
                                Continue with Facebook
                            </Link>
                            <Link>
                                <i></i>
                                Continue with Google
                            </Link>
                            <Link>
                                <i></i>
                                Continue with Twitter
                            </Link>
                            <p>or log in with Infospace</p>
                        </div>
                        <div className={classes.form_block__login}>
                            <form>
                                <input name="email" type="text" placeholder="Username or Email"/>
                                <input name="password" type="password" placeholder="Password"/>
                                <p>
                                   <span>Use QR Code</span>
                                   <span>Forgot your password?</span>
                                </p>
                                <button>Sign Up</button>
                            </form>
                            <p className={classes.form_block_login__footer}>New to Flipboard? <Link>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login