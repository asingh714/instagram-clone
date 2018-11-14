import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const Post = props => {
  return (
    <div className="post-section">
      <div className="top-post-section">
        <img src={props.post.thumbnailUrl} alt="Thumbnail Image" />
        <p>{props.post.username}</p>
      </div>
      <img src={props.post.imageUrl} alt="Posted Image" />
      <CommentSection comments={props.post.comments} timestamp={props.post.timestamp} likes={props.post.likes}/>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};

export default Post;
