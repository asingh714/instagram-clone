import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div>
      <div>
        <p>{props.comment.username}</p>
        <p>{props.comment.text}</p>
      </div>
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
