import React, { Component } from 'react';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username = "",
            password = ""
        }
    }

    render() {
        <form>
            <h1>Welcome to Instagram</h1>
            <h2>Please enter your password</h2>
            <input 
                type="text"
                placeholder="User Name"
            />
            <input 
                type="text"
                placeholder="Password"
            />
            <button>Login</button>
        </form>
        
    }

}

export default Login;