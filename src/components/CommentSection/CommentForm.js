import React from "react";
import styled from 'styled-components';
import './CommentForm.css'

const CommentBox = styled.input` 
  width: 100%;
  padding: 1.5rem 1rem;
  border: none;
  border-top: 1px solid #eee;
  outline: none;
`;

const CommentForm = props => {
  return (
    <div className="comment-box">
      <form onSubmit={props.addComment}>
      {/*  */}
        <CommentBox
          type="text"
          name="comment"
          placeholder="Add a comment..."
          value={props.comment}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
};

export default CommentForm;
