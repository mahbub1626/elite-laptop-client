import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LaptopsCategory from './LaptopsCategory';

const LaptopsCategories = () => {
    const laptops = useLoaderData();
   

    console.log('Laptops By Categories', laptops)
    return (
        <div className='my-12'>
            <h2 className='text-3xl font-bold mb-4'>Laptops categories : {laptops.length}</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
                {
                    laptops.map(laptop => <LaptopsCategory
                    key={laptop._id}
                    laptop={laptop}
                    ></LaptopsCategory>)
                }
            </div>
        </div>
    );
};

export default LaptopsCategories;