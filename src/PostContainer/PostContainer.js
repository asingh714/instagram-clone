import React from "react";
import Post from './Post.js'
import PropTypes from "prop-types";


const PostContainer = props => {
  return (
    <div>
      {/* In PostContainer, we just grabbed our array of
      data and now we want to map through it. 
      1. We set the key to index because it's unique
      2. Each individual post from our data will now be
      pass down to post. 
      */}
      {props.posts.map((post, index) => (
        <Post key={index} post={post} />  
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object) 
}

export default PostContainer;
