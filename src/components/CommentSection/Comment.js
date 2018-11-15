import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Username from '../../Styles/Reusables'
import './Comment.css'

const Comment = props => {
  return (
    <div className="user-comments">
        <Username type="space">{props.comment.username}</Username>
        <p>{props.comment.text}</p>
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
