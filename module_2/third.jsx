import React from 'react';

export default class Third extends React.Component {
    constructor() {
        super();

    }



    render() {
        return (
            <div className="third_stage">   
             <div className="left_top_ball" />
                <div id="container">
                <div className="central_ball"><div className="lamp"></div></div>
                <div className="small_ball" />
                    <h1>Welcome!</h1>
                    <p>Create your account to get started. After that, you can share books and make friends.</p>

                    <form name="formName">
                        <label>email<input id="inputEmail" type="email" required /></label>
                        <label>password<input id="inputPassword" type="password" required /></label>
                        <label>type password again<input id="inputPassowrdConfirm" type="password" required /></label>
                    </form>

                    <button onClick={this.props.onClick} id="nextStep">sing up</button>
                    <span>Already have an account?<a href="#"><b>Login</b></a></span>
            </div>
            </div>
        )
    }
}


