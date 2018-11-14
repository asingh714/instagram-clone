import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './Authentication/Authenticate'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
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
