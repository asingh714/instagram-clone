import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

// import "./Post.css";

import UserPostInfo from "./UserPostInfo";
import UserLikeComments from "./UserLikesComments";
import CommentSection from "../CommentSection/CommentSection";


export const PostContainer = styled.div`
  border: 1px solid #ddd;
  width: 60rem;
  margin: 0 auto;
  background-color: white;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`

export const CommentLikeContainer = styled.div`
  padding: 0 1rem;
`

export const PostImage = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`


class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: props.post.likes,
      liked: false
    }
  }

  addLike = () => {
    let numOfLikes = this.state.likes;

    this.state.liked === false ? numOfLikes += 1 : numOfLikes -= 1;

    this.setState({
      likes: numOfLikes,
      liked: !this.state.liked
    })
  }

  render() {
    return (
      <PostContainer>
        <UserPostInfo
          thumbnailUrl={this.props.post.thumbnailUrl}
          username={this.props.post.username}
        />
        <PostImage
          src={this.props.post.imageUrl}
          alt="User Post"
        />
        <CommentLikeContainer>
          <UserLikeComments likes={this.state.likes} addLike={this.addLike} liked={this.state.liked}/>
          <>
            <CommentSection
              comments={this.props.post.comments}
              timestamp={this.props.post.timestamp}
            />
          </>
        </CommentLikeContainer>
      </PostContainer>
    );
  }
}

Post.propTypes = {
  imageUrl: PropTypes.string,
  comments: PropTypes.string,
  timestamp: PropTypes.string
};

export default Post;
