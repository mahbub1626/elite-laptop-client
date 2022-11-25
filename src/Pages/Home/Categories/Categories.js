import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            console.log(data)
            return data;

        }
    })

    return (
        <div className='my-12'>
            <h2 className='text-3xl font-bold'> LATEST LAPTOPS COLLECTION{categories.length}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {
                categories.map(category => <Category
                key={category._id}
                category={category}
                ></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;