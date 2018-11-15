import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './Authentication/Authenticate'
import './App.css';

/*
1. Import Authenticate 
2. Pass App into Authenticate 

3. componentDidMount will check local storage to see if user is loggedin

*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
