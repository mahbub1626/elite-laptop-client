import React from 'react';
import Advertisement from './Advertisement';

const Advertisements = () => {
    return (
        <div>
            <h1 className='text-3xl text-gray-500 text-center'>ADDVERTISEMENT</h1>
        <div className='grid grid-cols-3'>
            {
                <Advertisement></Advertisement>
            }
        </div>
        </div>
    );
};

export default Advertisements;