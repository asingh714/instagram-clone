import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div className="Comments">
      {props.comments.map(comment => (
        <div>
          <p>{comment.username}</p>
          <p>{comment.text}</p>
        </div>
      ))}
      <input type="text" placeholder="Add a comment..." />
    </div>
     
  );
};


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
};

export default CommentSection;
