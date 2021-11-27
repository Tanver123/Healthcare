import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import HomeService from './HomeService/HomeService';
import Information from './Information/Information';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HeaderMain />
            <Information />
            <HomeService />
            <Testimonial />
        </div>
    );
};

export default Home;