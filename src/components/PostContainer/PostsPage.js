import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from '../PostContainer/PostContainer'
import dummyData from '../../dummy-data'

/* 
1. Create PostsPage in PostContainer directory. 
2. Shift content from App.js to PostPage.js
(This page will now serve as our main gateway of content.)
3. In app.js, render <PostsPage />
4. Clean up code so that it's functional 
(imports and exports) 

*/

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
