// import React from 'react';

import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefCard from "../ChefCard/ChefCard";
import Featured from "../Featured/Featured";
import OtherBanner from "../OtherBanner/OtherBanner";
import PopularMeno from "../PopularMenu/PopularMeno";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <OtherBanner />
            <PopularMeno />
            <ChefCard></ChefCard>
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;