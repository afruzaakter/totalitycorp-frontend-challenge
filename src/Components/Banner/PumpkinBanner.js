import React from 'react';
import banner from "../../Images/137-81152.jpg"
const PumpkinBanner = () => {
    return (
        <div className='pumpkin-banner'>
            <div className='flex-container'>
                <div className='banner-img'>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <div className='banner-content'>
                        <h1>Perfectly</h1>
                        <h1>pumpkin</h1>
                        <p>Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew.</p>
                        <button className='button-signup'>Order now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PumpkinBanner;