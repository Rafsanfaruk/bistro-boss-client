// import React from 'react';

import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OtherBanner from "../OtherBanner/OtherBanner";
import PopularMeno from "../PopularMenu/PopularMeno";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <OtherBanner />
            <PopularMeno />
        </div>
    );
};

export default Home;