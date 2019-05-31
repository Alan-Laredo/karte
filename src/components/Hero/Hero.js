import React from 'react'
import './Hero.css'
import SearchBar from '../SearchBar/SearchBar';

const Hero = (props) => {
    return (
        <header className="hero">
            <p className="intro-text"></p>
            <SearchBar></SearchBar>
        </header>
    )
}

export default Hero