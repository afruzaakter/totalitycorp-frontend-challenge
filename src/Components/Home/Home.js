import React from 'react';
import AppleyumBanner from '../Banner/AppleyumBanner';
import Banner from '../Banner/Banner';
import CardContent from '../Banner/CardContent';
import PumpkinBanner from '../Banner/PumpkinBanner';
import PurchaseBanner from '../Banner/PurchaseBanner';
import SkymilesBanner from '../Banner/SkymilesBanner';
import "../sass/style.scss"
const Home = () => {
    return (
        <div>
            <Banner/>
            <SkymilesBanner/>
            <PumpkinBanner/>
            <AppleyumBanner/>
            <PurchaseBanner/>
            <CardContent/>
       
        </div>
    );
};

export default Home;