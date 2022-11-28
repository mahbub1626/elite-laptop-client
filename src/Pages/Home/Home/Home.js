import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Advertisements from '../Advertisements/Advertisements';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisements></Advertisements>
            <Categories></Categories>
        </div>
    );
};

export default Home;