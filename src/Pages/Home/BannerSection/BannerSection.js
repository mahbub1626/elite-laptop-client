import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';

const BannerSection = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-3'>
            <div className='grid col-span-2'>
                <Banner></Banner>
            </div>
            <div>
                <Advertisement></Advertisement>
            </div>
        </div>
    );
};

export default BannerSection;