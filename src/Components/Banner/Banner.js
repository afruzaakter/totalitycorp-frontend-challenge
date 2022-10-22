import React from 'react';
import banner from "../../Images/137-81151.jpg"
const Banner = () => {
    return (
        <div className='banner'>
            <div className='flex-container'>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <div className='banner-content'>
                        <h1>Win a thousand Stars</h1>
                        <p>We’re giving away 1,000 Stars to 1,000  Starbucks® Rewards members in our  Million Stars Giveaway and much more all  week!*</p>
                        <button className='button-signup'>Play to win</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
