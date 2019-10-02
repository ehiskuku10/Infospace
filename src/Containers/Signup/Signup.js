import React, { Component } from "react"
import classes from "./Signup.css"
import { Link } from "react-router-dom"

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cursor: 'not-allowed',
            disable: true
        }
        this.disableButton = this.disableButton.bind(this)
    }

    disableButton () {
        const inputFields = {
            ...document.forms[0]
        }

        for (let i = 0; i < document.forms[0].length-1; i++) {
            if (!inputFields[i].value) {
                this.setState({
                    cursor: 'not-allowed',
                    disable: true
                })
                break;
            } else {
                this.setState({
                    cursor: 'default',
                    disable: false
                })

            }
        }
    }

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
                            <form>
                                <input name="full" type="text" placeholder="Full Name"/>
                                <input name="email" type="text" placeholder="Email"/>
                                <input name="password" type="password" placeholder="Password"/>
                                <button disabled={!this.state.disable} style={{cursor: this.state.cursor}} onMouseOver={this.disableButton}>Sign Up</button>
                            </form>
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

export default Signup