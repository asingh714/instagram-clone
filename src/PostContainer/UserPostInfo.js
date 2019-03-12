import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

// import "./UserPostInfo.css"

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const UserThumbnail = styled.img`
  border-radius: 50%;
  height: 4rem;
  width: 4rem; 
  margin-right: 1rem;
`


const UserPostInfo = props => {
  return (
    <UserContainer>
      <UserThumbnail
        src={props.thumbnailUrl}
        alt="User Thumbnail"
      />
      <p>{props.username}</p>
    </UserContainer>
  );
};

UserPostInfo.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
}

export default UserPostInfo;
