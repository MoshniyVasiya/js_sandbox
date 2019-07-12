import React from 'react';

export default class Second extends React.Component {
    constructor() {
        super()
        
        const name = props.name;
        const userName = props.userName;
        const userNameIsValid = this.validateName(name);
        const nameIsValid = this.validateUserName(userName);

        this.setState = {   
            name: name,
            userName: userName,
            nameValid: nameIsValid,
            userNameValid: userNameIsValid,
        }

    }

validateName(name){ 
    return name.trim().length >= 2;
}

validateUserName(userName) {    
    return userName.trim().length >= 2;
}

onNameChange(e) {   
    const val = e.targetvalue;
    const valid = this.validateName(val);
    this.setState({ 
        name: val,
        nameValid: valid,
    })
}
onUserNameChange(e) {   
    const val = e.targetvalue;
    const valid = this.validateName(val);
    this.setState({ 
        userName: val,
        userNameValid: valid,
    })
}



render() {
    return ( 
        

        <div id="container">   
            
                <img src="" className="circle" />    
                <h1>Welcome!</h1>
                <p>Create your account to get started. After that, you can share books and make friends.</p>

                <form name="formName">   
                <label>Name<br /><input id="inputName" type="text" required/></label>
                <br />
                <label>Username<br /><input id="inputUsername" type="text" required/></label>
                <label>Country<input id="inputCountry" type="text" /></label>
                <label>Age<input id="inputAge" type="number" /></label>
                </form>

                <button onClick={this.props.onClick}  id="nextStep">next step</button>
                <span>Already have an account?<a href="#"><b>Login</b></a></span>
            



        </div>
    )
}
}