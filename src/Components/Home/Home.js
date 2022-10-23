import React from 'react';
import Banner from '../Banner/Banner';
import SkymilesBanner from '../Banner/SkymilesBanner';
import "../sass/style.scss"
const Home = () => {
    return (
        <div>
            <Banner/>
            <SkymilesBanner/>
        </div>
    );
};

export default Home;