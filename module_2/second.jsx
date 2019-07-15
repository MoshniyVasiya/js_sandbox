import React from 'react';

export default class Second extends React.Component {
    constructor() {
        super()



        this.setState = {

        }

    }

    validateName(name) {
        return name.trim().length >= 2;

    }

    validateUserName(userName) {
        return userName.trim().length >= 2;
    }




    render() {


        return (
            <div id="second_stage">

                <div className="left_top_ball" />
                <div id="container">
                <div className="central_ball"><div className="lamp"></div></div>
                <div className="small_ball" />
                    <h1>Welcome!</h1>
                    <p>Create your account to get started. After that, you can share books and make friends.</p>

                    <form name="formName">
                        <label>Name<input id="inputName" type="text" required /></label>
                        <label>Username<input id="inputUsername" type="text" required /></label>
                        <div className="country_age">
                        <label>Country<input id="inputCountry" type="text" /></label>
                        <label>Age<input id="inputAge" type="text" /></label>
                        </div>
                    </form>

                    <button onClick={this.props.onClick} id="nextStep">next step</button>
                    <span>Already have an account?<a href="#"><b>Login</b></a></span>




                </div>
            </div>
        )
    }
}