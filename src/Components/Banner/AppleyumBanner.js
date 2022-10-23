import React from 'react';
import banner from "../../Images/137-81152.jpg"
const AppleyumBanner = () => {
    return (
        <div className='appleyum-banner'>
        <div className='flex-container'>
            
            <div>
                <div className='banner-content'>
                    <h1>Layers of baked</h1>
                    <h1>apple yum</h1>
                    <p>Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso.</p>
                    <button className='button-signup'>Learn more</button>
                </div>
            </div>
            <div className='banner-img'>
                <img src={banner} alt="" />
            </div>
        </div>
    </div>
    );
};

export default AppleyumBanner;