import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <h3>The Meal db</h3>
            <div>
                <a href="/home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;