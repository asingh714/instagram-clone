import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

// import "./UserLikeComments.css";


export const LikeCommentContainer = styled.div`
  transition: all .3s;
`
export const HeartIcon = styled.i`
  font-size: 2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:hover {
    color: red;
  }
`

export const CommentIcon = styled.i`
  font-size: 2rem;

  &:hover {
    color: blue;
  }
`

export const UserLikes = styled.p`
  margin-bottom: 1rem;
  font-weight: bold
`

const UserLikeComments = props => {
  return (
    <LikeCommentContainer>
      <HeartIcon className={props.liked ? `fas fa-heart user-heart-icon true`: `heart far fa-heart user-heart-icon false`} onClick={props.addLike} />
      <CommentIcon className="far fa-comment user-comment-icon" />
      <UserLikes>{props.likes} likes</UserLikes>
    </LikeCommentContainer>
  );
};

UserLikeComments.propTypes = {
  likes: PropTypes.number,
};

export default UserLikeComments;
