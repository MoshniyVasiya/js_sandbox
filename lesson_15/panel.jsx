import React from 'react';




export default class InputPanel extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }



    invalidEmail() {
        if (this.state.invalid_email == trure) {

        }
    }

    onLoginClick() {
        if (this.state.invalid_email == true) {

        } else {

        }
    }

    render() {

        return (
            <section>
                <address>151 3rd St <br />
                    San Francisco, CA 94103</address>

                <div className="input_panel" style={{ display: "block" }}>


                    <input id="one" type="email" placeholder="Email address"></input>
                    <input id="two" type="password" placeholder="Password"></input>
                    <a href="#">Forgot your password?</a>
                </div>


                <div className="button_panel">
                    <button>Log In</button>
                    <a href="#">Don’t have an account?</a>
                </div>
            </section>
        )
    }
}