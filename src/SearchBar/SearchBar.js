import React from "react";
import styled from 'styled-components';

// import "./SearchBar.css";

import IGLogo from "../Assets/iglogo.png";

export const SearchMenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  border: 1px solid #ddd;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`
export const IGIcon = styled.i`
  font-size: 3rem;
  margin-right: 2rem;
  border-right: 1px solid #ddd;
  padding-right: 2rem;
`
export const IGImage = styled.img`
  width: 12rem;
  color: #303030;
`
export const SearchContainer = styled.div`
  margin: 0 auto;
`

export const SearchContainerInput = styled.input`
  text-align: center;
  width: 25rem;
  padding: 1rem;
  background-color: rgb(250, 250, 250);
  border-radius: 2px; 
  font-size: 1.6rem;
  outline: none;  
`

export const NavContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
`

export const NavSmallIcon = styled.i`
  font-size: 2rem;
  margin-right: 2rem;
  color: #686868;
`




const SearchBar = props => {
  return (
    <SearchMenuContainer>
      <LogoContainer>
        <IGIcon className="fab fa-instagram"/>
        <IGImage src={IGLogo} alt="instagram logo"/>
      </LogoContainer>
      <SearchContainer>
        <SearchContainerInput
          value={props.searchText}
          onChange={props.searchPosts}
          type="text"
          className="fa fa-input"
          placeholder=" Search"
          name="searchText"
        />
      </SearchContainer>
      <NavContainer>
        <NavSmallIcon className="far fa-compass" />
        <NavSmallIcon className="far fa-heart" />
        <NavSmallIcon className="far fa-user" />
      </NavContainer>
    </SearchMenuContainer>
  );
};

export default SearchBar;
