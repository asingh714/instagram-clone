import React from "react";
import styled from "styled-components";
import "./CommentForm.css";

const CommentBox = styled.input`
  width: 100%;
  padding: 1.5rem 1rem;
  border: none;
  border-top: 1px solid #eee;
  outline: none;
`;

const CommentForm = props => {
  return (
    /* 
      - onSubmit will allow us to press enter and submit a 
      comment. 
      - the value of what is being typed in the comment box
      will be saved as value.
      - 
    */
    <form onSubmit={props.addComment}>
      <CommentBox
        type="text"
        placeholder="Add a comment..."
        value={props.comment}
        onChange={props.handleComment}
      />
    </form>
  );
};

export default CommentForm;
