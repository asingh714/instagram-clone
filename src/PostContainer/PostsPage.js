import React from "react";

import dummyData from "../dummy-data";

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
  state = {
    posts: [],
    filteredPosts: []
  };

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  handleSearchPosts = event => {
    let filteredPosts = this.state.posts.filter(post => {
      let username = post.username
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
      return username;
    });
    this.setState({
      filteredPosts: filteredPosts
    });
  };

  render() {
    return (
      <>
        <SearchBar
          searchText={this.state.searchText}
          searchPosts={this.handleSearchPosts}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </>
    );
  }
}

export default PostsPage;
