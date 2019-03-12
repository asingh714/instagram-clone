import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

// import "./PostContainer.css";
import Post from "./Post";

export const AppContainer = styled.div`
  padding: 5rem;
`


const PostContainer = props => {
  return (
    <AppContainer>
      {props.posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </AppContainer>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      ),
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      thumbnailUrl: PropTypes.string,
      timestamp: PropTypes.string,
      username: PropTypes.string
    })
  )
};

PostContainer.defaultProps = {
  posts: []
};

export default PostContainer;
