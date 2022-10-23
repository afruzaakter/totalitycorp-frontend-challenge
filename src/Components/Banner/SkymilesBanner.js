import React from 'react';
import banner from "../../Images/banner1.png"
const SkymilesBanner = () => {
    return (
        <div className='skymiles-banner'>
            <div className='flex-container'>
                
                <div>
                    <div className='banner-content'>
                        <h4>A new way to earn sips and trips</h4>
                        <p>Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:</p>
                        <ul>
                            <li><a>150 Stars + 500 miles when you link before 12/31</a></li>
                            <li>Double Stars on Delta travel days</li>
                            <li>1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**</li>
                        </ul>
                        <button className='button-signup'>Link accounts</button>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SkymilesBanner;