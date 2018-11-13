import React from "react";
import Post from './Post.js'
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post key={post.imgUrl} post={post} /> 
      ))}
    </div>
  );
};

// PostContainer.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       username: PropTypes.string,
//       likes: PropTypes.number,
//       timestamp: PropTypes.string
//     })
//   )
// };

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object) 
}

export default PostContainer;
