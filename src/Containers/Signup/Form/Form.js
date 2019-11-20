import React from "react"
import { Field, reduxForm } from "redux-form"


let UserForm = props => {

    const { handleSubmit, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field  
                name="fullname"
                placeholder="Full name" 
                component="input" 
                type="text" 
            /> 

            <Field
                name="email" 
                placeholder="Email" 
                component="input" 
                type="email" 
            /> 

            <Field 
                name="password"
                placeholder="Password" 
                component="input" 
                type="password" 
            /> 

            <button type="submit" disabled={submitting}>Sign Up</button>
        </form>
    )
}

UserForm = reduxForm ({
    form: 'newUser'
})(UserForm)

export default UserForm

