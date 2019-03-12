import React from "react";

import styled from 'styled-components';
import IGLogo from "../Assets/iglogo.png"
// import "./Login.css"

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FAFAFA;
`

export const LoginFormContainer = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 6rem 10rem;
  width: 50rem;
  border: 1px solid #ddd;
`
export const LoginImg = styled.img`
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 20rem;
`

export const LoginInput = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  outline: none;
`

export const LoginButton = styled.button`
  color: white;
  background-color: #3e99ed;
  cursor: pointer;
  padding: 1rem; 
  text-align: center
`


class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = event => {
    event.preventDefault();
    localStorage.setItem("user", this.state.username);
    window.location.reload();
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <LoginPageContainer>
        <LoginFormContainer onSubmit={this.handleLogin}>
        <LoginImg src={IGLogo} alt="Instagram Logo"/>
          <LoginInput
            type="text"
            placeholder="Username"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
          />
          <LoginInput
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />
          <LoginButton>Log In</LoginButton>
        </LoginFormContainer>
      </LoginPageContainer>
    );
  }
}

export default Login;
