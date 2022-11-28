import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Advertisements from '../Advertisements/Advertisements';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisements></Advertisements>
            <Categories></Categories>
            <Contact></Contact>
        </div>
    );
};

export default Home;