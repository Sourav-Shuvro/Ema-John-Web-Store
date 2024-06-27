import React from 'react';
import logo from '../../Logo.svg'
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="#home">Home</a>
                <a href="#order">Order</a>
                <a href="#order-review">Order Review</a>
                <a href="#login">Login</a>
            </div>
        </nav>
    );
};

export default Navigation;