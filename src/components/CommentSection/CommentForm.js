import React from "react";

const CommentForm = props => {
  return (
    <div>
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
