import React from 'react';
import Banner from './Banner';
import Closet from './Closet';
import FeaturedCollection from './FeaturedCollection';
import GiftsAndMore from './Gifts&More';
import ProductCatagorys from './ProductCatagorys';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProductCatagorys />
            <FeaturedCollection />
            <GiftsAndMore />
            <Closet />
        </div>
    );
};

export default Home;