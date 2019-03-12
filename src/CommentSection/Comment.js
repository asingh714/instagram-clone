import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Username from '../../Styles/Reusables'
import './Comment.css'

const UserComments = styled.div`
  display: flex;
  margin-bottom: .5rem;
`

const Comment = props => {
  return (
    <UserComments>
      {/* Now we can pass the comment that is from
      CommentSection and use it here for username and 
      text.
      */}
        <Username type="space">{props.comment.username}</Username>
        <p>{props.comment.text}</p>
    </UserComments>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })
};

export default Comment;
