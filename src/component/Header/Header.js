import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='name'>
                <p>MealDB</p>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/order">Order</a>
            </div>
        </nav>
    );
};

export default Header;