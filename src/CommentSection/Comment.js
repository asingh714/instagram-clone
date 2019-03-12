import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

// import "./Comment.css"

export const CommentContainer = styled.div`
  display: flex;
  margin-bottom: .5rem;
`

export const Username = styled.p`
  font-weight: bold;
  margin-right: .5rem;
`


const Comment = props => {
  return (
    <CommentContainer>
      <Username>{props.comment.username}</Username>
      <p>{props.comment.text}</p>
    </CommentContainer>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })
}

export default Comment;
