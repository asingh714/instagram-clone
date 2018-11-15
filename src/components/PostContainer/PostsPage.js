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
      searchTerm: '',
    }
  }

  searchPosts = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }
  
  componentDidMount() {
    console.log("CDM Invoked!");
    this.setState({ posts: dummyData });
  }


  render() {
    let filteredPosts = dummyData;

    if(this.state.searchTerm !== "") {
      filteredPosts = filteredPosts.filter(data => {
        let username =  data.username.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        return username;
      })
    }

    console.log("Render Invoked!")
    return (
      <div className="App">
       <SearchBar 
       value={this.state.searchTerm}
       searchPosts={this.searchPosts}
       /> 
       <PostContainer 
      /* We are going to pass posts which is initially 
      going to be [] and then we will grab the data from
      dummyData via componentDidMount and pass it down.
      */
       posts={this.state.posts} 
       posts={filteredPosts} 

       />
      </div>
    );
  }
}

export default PostsPage;
