import React from 'react';
import AppleyumBanner from '../Banner/AppleyumBanner';
import Banner from '../Banner/Banner';
import PumpkinBanner from '../Banner/PumpkinBanner';
import SkymilesBanner from '../Banner/SkymilesBanner';
import "../sass/style.scss"
const Home = () => {
    return (
        <div>
            <Banner/>
            <SkymilesBanner/>
            <PumpkinBanner/>
            <AppleyumBanner/>
        </div>
    );
};

export default Home;