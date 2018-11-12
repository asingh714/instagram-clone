import React from 'react';
import './SearchBar.css'


const SearchBar = () => {
    return (
        <div className="SearchBar">
        <div className="logo-name-section">
            <i className="fab fa-instagram"></i>
            <h1>Instagram</h1>
        </div>
        <div className="search-section">
        <input type="text" className="fa fa-input" placeholder=" Search" />
        </div>
        <div className="nav-section">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
        </div>

        </div>
    );
}

export default SearchBar;