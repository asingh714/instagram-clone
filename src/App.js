import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummy-data'
import './App.css';

class App extends Component {
  constructor() {
    console.log("Constructor Invoked!")
    super();
    this.state = {
      posts: dummyData,
      filterTerm: '',
    }
  }

  handleInputChange = event => {
    this.setState({
      filterTerm: event.target.value
    })
  }

  componentDidMount() {
    console.log("CDM Invoked!");
    this.setState({ posts: dummyData });
  }

  handleChange = event => {
    console.log('Changed');
  }
  addLikes = event => {
    console.log('CLICK CLICK')
    this.setState({
    })
  }


  render() {
    let filteredData = dummyData;

    if(this.state.filterTerm !== "") {
      filteredData = filteredData.filter(data => {
        let username =  data.username.toLowerCase().includes(this.state.filterTerm.toLowerCase());
        return username;
      })
    }

    console.log("Render Invoked!")
    return (
      <div className="App">
       <SearchBar 
       value={this.state.filterTerm}
       handleInputChange={this.handleInputChange}
       /> 
       <PostContainer 
       posts={this.state.posts} 
       posts={filteredData} 
       addLikes={this.addLikes}
       handleChange={this.handleChange}
       />
      </div>
    );
  }
}

export default App;
