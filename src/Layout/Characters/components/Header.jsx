import React from 'react'
import logo from './logo-black 1.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="header__item">
                <img src={logo} alt="" />
            </div>
            <div className="header__item karla-nav">
                <a href="#">Characters</a>
                <a href="#">Locations</a>
                <a href="#">Episodes</a>
            </div>
        </div>
    )
}

export default Header