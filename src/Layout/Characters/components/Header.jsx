import React from 'react'
import logo from '../../../public/logo-black 1.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header__item">
                <img src={logo} alt="rick&morty" />
            </div>
            <nav className="header__item">
                <a href="#">Characters</a>
                <a href="#">Locations</a>
                <a href="#">Episodes</a>
            </nav>
        </header>
    )
}

export default Header