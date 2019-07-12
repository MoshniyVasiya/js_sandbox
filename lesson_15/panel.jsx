import React from 'react';

import { FormErrors } from './form_errors';


export default class InputPanel extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            display: "block",
        }
        this.handleUserInput = this.handleUserInput.bind(this)
        this.buttWork = this.buttWork.bind(this)
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        }, () => {
            this.validateField(name, value);
        });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Invalid email address ';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Password is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    buttWork() {
        if (this.state.formValid) {
            this.setState({ display: 'none' })
        }
    }

    render() {

        return (
            <form>
                <address>151 3rd St <br />
                    San Francisco, CA 94103</address>

                <div className="input_panel" style={{ display: this.state.display }}>

                    <FormErrors formErrors={this.state.formErrors} />

                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                        <input name="email" type="email" placeholder="Email address"
                            value={this.state.email}
                            onChange={this.handleUserInput}
                        >
                        </input>
                    </div>

                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                        <input name="password" type="password" placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleUserInput}
                        >
                        </input>
                    </div>
                    <a href="#">Forgot your password?</a>
                </div>


                <div className="button_panel">
                    <button disabled={!this.state.formValid}>Log In</button>
                    <a href="#">Don’t have an account?</a>
                </div>
            </form>
        )
    }
}