import React, { Component } from 'react';
import Login from '../components/Login/Login';

/* 
Building the Higher Order Component - Authenticate 
1. Create Authentication Directory 
2. Add Authenticate component
3. Authenticate component should take another component(App) as an argument
4. Authenticate should return a class component
5. Inside render, we will have the logic on whether to show loginpage or app
based on if user is loggedin
6. Import Login Page + export Authenticate because App needs it.  

7. Create constructor 
8. In state - add loggedIn boolean (false)
9. Create componentDidMount to check logic on when a user is logged in or not
10. In render, add logic to show which page is shown based on loggedIn or not.
*/


const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super()
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount() {
            if (localStorage.getItem('user')) {
                this.setState({
                    loggedIn: true
                }) 
            } else {
                this.setState({
                    loggedIn: false
                })
            }
        }

        render() {
            if (this.state.loggedIn) {
                return <App />
            } else {
                return <Login />
            }
        }

    };


export default Authenticate;