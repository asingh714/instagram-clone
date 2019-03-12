import React from "react";
import styled from 'styled-components';

// import "./CommentForm.css"

export const CommentInput = styled.input`
width: 100%;
padding: 1.5rem 1rem;
border: none;
border-top: 1px solid #eee;
outline: none;
font-size: 1.4rem;
}
`

const CommentForm = props => {
return (
    <form onSubmit={props.addNewComment}>
      <CommentInput 
        className="comment-input" 
        type="text" 
        placeholder="Add a comment..." 
        value={props.comment} 
        name="comment"
        onChange={props.handleChange}
        />
    </form>
  );
};

export default CommentForm;
