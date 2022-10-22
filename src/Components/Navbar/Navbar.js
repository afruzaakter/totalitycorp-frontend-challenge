import React from 'react';
import logo from "../../Images/logo1.svg";
const Navbar = () => {
    return (
        <nav>
            <div className='menu'>
                <div className='navbar-logo'>
                    <img src={logo} alt="" />
                </div>
                <div>
                <ul>
                    <li> <a href='https://www.starbucks.com/menu'> MENU </a> </li>
                    <li> <a href='https://www.starbucks.com/rewards'> REWARDS </a> </li>
                    <li> <a href='https://www.starbucks.com/gift'> GIFT CARDS </a> </li>
                </ul>
                </div>
            </div>
            <div className='button-menu'>
                <a href='https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z'><i class="fa-solid fa-location-dot"></i>   Find a store</a>
                <button className='button-signup'>Sign in</button>
                <button className='button-join'>Join now</button>
            </div>
        </nav>

    );
};

export default Navbar;