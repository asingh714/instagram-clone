import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";
import dummyData from "../../dummy-data";

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
    console.log("Constructor Invoked!");
    super();
    this.state = {
      posts: [],
      searchTerm: ""
    };
  }

  /* searchTerm will be updated to what is being typed
    into the input field
  */
  searchPosts = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  /* When render runs for the first time, it will be 
    [] but then cdm will be invoked and set it to our data
  */
  componentDidMount() {
    console.log("CDM Invoked!");
    this.setState({ posts: dummyData });
  }

  render() {
    /*
      This is the filter logic. We are going to set
      a variable that is equal to our data. 

      The logic states that if search term is not empty,
      we are going to filter our array of posts and 
      get the one where what is typed into the input is
      included in the username.
    */
    let filteredPosts = dummyData;

    if (this.state.searchTerm !== "") {
      filteredPosts = filteredPosts.filter(post => {
        let username = post.username.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        return username;
      });
    }

    console.log("Render Invoked!");
    return (
      <div className="App">
      {/* 
        searchText is blank at the moment because we set it to
        '' in this.state. We are going to pass it to SearchBar

        We are passing searchPosts down to SearchBar so 
        that it can be run onChange.
      */}
        <SearchBar
          searchText={this.state.searchTerm}
          searchPosts={this.searchPosts}
        />
        <PostContainer
        /* 
        If there is something in filteredPosts, we will 
        return filteredPosts, otherwise will will return 
        this.state.posts
        */
        posts={filteredPosts.length > 0 ? filteredPosts : this.state.posts}
        />
      </div>
    );
  }
}

export default PostsPage;
