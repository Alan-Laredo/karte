import React from 'react'
import './Header.css'
import logo from '../../img/logo1.png'
import logoAlt from '../../img/logo2.png'
import SearchBar from '../SearchBar/SearchBar';

const Header = ({ title }) => {
    return (
        <div className="header">
            <header className="header">
                <img src={logo} alt="logo" height="150px" />
                <h1 className="intro-title">{title}</h1>
            </header>
            <div className="search-bar-container">
                <SearchBar></SearchBar>
            </div>
        </div>
    )
}

export default Header