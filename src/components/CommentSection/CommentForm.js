import React from "react";
import './CommentForm.css'

const CommentForm = props => {
  return (
    <div className="comment-box">
      <form onSubmit={props.addCharacter}>
        <input
          type="text"
          name="inputText"
          placeholder="Add a comment..."
          value={props.inputText}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
};

export default CommentForm;
