import React from "react";
import CommentSection from "./CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div>
      {props.postData.map(post => (
        <div>
          <img src={post.thumbnailUrl} alt="Thumbnail Image" />,
          <p>{post.username}</p>
          <img src={post.imageUrl} alt="Posted Image" />
          <p>{post.likes}</p>
          <p>{post.timestamp}</p>
        </div>
      ))}
      ;
      <CommentSection postComments={props.postData.comments} />
    </div>
  );
};

PostContainer.propTypes = {
  postData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string
    })
  )
};

export default PostContainer;
