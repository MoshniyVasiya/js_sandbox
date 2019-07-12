import React from 'react';

export default class Third extends React.Component {
    constructor() {
        super();

    }



    render() {
        return (
            <div id="container">

                <img src="" className="circle" />
                <h1>Welcome!</h1>
                <p>Create your account to get started. After that, you can share books and make friends.</p>

                <form name="formName">
                    <label>email<br /><input id="inputEmail" type="email" required/></label>
                    <br />
                    <label>password<br /><input id="inputPassword" type="password" required/></label>
                    <label>type password again<input id="inputMorePassword" type="password" required/></label>

                </form>

                <button onClick={this.props.onClick} id="nextStep">sign up</button>
                <span>Already have an account?<a href="#"><b>Login</b></a></span>




            </div>

        )
    }
}


