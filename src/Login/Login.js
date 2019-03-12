import React, { Component } from "react";
import styled from 'styled-components';
import './Login.css'
import IGLogo from '../../Assets/iglogo.png';

/**
1. Create login directory
2. Add login.js to directory
3. Create username input, password input
4. Add the login component to Authenticate.js
5. Need to create logic for setting username on localstorage. 
6. Create login function that sets username on localStorage
7. Force page to re-load.
*/

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 6rem 10rem;
  width: 50rem;
`


const LogoImage = styled.img`
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 20rem;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  outline: none;
`

const Button = styled.div`
  color: white;
  background-color: #3e99ed;
  cursor: pointer;
  padding: 1rem; 
  text-align: center
`

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
      <LoginBox>
        <Form onSubmit={this.handleLogin}>
        <LogoImage src={IGLogo} alt="instagram logo" />
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Button onClick={this.handleLogin}>Log in</Button>
        </Form>
      </LoginBox>
    );
  }
}

export default Login;
