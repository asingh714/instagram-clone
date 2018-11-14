import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from '../PostContainer/PostContainer'
import dummyData from '../../dummy-data'

class PostsPage extends Component {
  constructor() {
    console.log("Constructor Invoked!")
    super();
    this.state = {
      posts: [],
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

export default PostsPage;
