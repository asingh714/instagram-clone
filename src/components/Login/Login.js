import React, { Component } from "react";
import './Login.css'

/**
1. Create login directory
2. Add login.js to directory
3. Create username input, password input
4. Add the login component to Authenticate.js
5. Need to create logic for setting username on localstorage. 
6. Create login function that sets username on localStorage
7. Force page to re-load.
*/

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: [event.target.value]
    });
  };

  handleLogin = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div className="login-box">
        <form onSubmit={this.handleLogin} className="form">
          <h1>Instagram</h1>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <div className="btn" onClick={this.handleLogin}>Log in</div>
        </form>
      </div>
    );
  }
}

export default Login;
