import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Username from '../../Styles/Reusables'
import './Post.css';



const PostSection = styled.div`
  border: 1px solid gray;
  width: 60rem;
  margin: 0 auto;
  margin-top: 5rem;
  background-color: white;
`;

const TopPostSection = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const UserThumbnail = styled.img`
  border-radius: 50%;
  height: 4rem;
  width: 4rem; 
  margin-right: 1rem;
`;




const Post = props => {
  return (
    <PostSection>
      <TopPostSection>
        <UserThumbnail src={props.post.thumbnailUrl} alt="Thumbnail Image" />
        <Username>{props.post.username}</Username>
      </TopPostSection>
      <div className="post-img">
        <img src={props.post.imageUrl} alt="Posted Image" />
      </div>
      <CommentSection comments={props.post.comments} timestamp={props.post.timestamp} likes={props.post.likes}/>
    </PostSection>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};

export default Post;
