import React from "react";
import PropTypes from "prop-types";
import './Comment.css'

const Comment = props => {
  return (
    <div className="user-comments">
        <p className="bold-text username">{props.comment.username}</p>
        <p>{props.comment.text}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })
};

export default Comment;
