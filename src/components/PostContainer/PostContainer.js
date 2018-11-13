import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(post => (
        <div>
          <img src={post.thumbnailUrl} alt="Thumbnail Image" />
          <p>{post.username}</p>
          <img src={post.imageUrl} alt="Posted Image" />
          <p>{post.likes}</p>
          <p>{post.timestamp}</p>
          <CommentSection comments={post.comments} />
        </div>
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string
    })
  )
};

export default PostContainer;
