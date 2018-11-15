import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';
// import { styles } from 'ansi-colors';
import IGLogo from '../../Assets/iglogo.png';

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    border: 1px solid black;
    background-color: white;
`;

const LogoHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
`;

const NavSection = styled.div`
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
`;

const LogoImage = styled.img`
    width: 12rem;
`;

const SearchSection = styled.input` 
    margin: 0 auto;
    text-align: center;
    width: 30rem;
    padding: 1rem;
    background-color: rgb(250, 250, 250);
    border-radius: 2px;
    outline: none;
    font-size: 1.6rem;
`;


const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <i className="fab fa-instagram"></i>
                <LogoImage src={IGLogo} alt="instagram logo" />
            </LogoHeader>

            <SearchSection value={props.value} onChange={props.searchPosts} type="text" className="fa fa-input" placeholder=" Search" />
            <NavSection>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </NavSection>
        </Header>
    );
}

export default SearchBar;