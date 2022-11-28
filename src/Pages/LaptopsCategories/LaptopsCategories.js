import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PurchasingModal from '../PurchasingModal/PurchasingModal';
import LaptopsCategory from './LaptopsCategory';

const LaptopsCategories = () => {
    const laptops = useLoaderData();
    const [laptopNameModal, setLaptopNameModal] = useState(null);
    console.log('inside setLaptopNameModal ', laptopNameModal)
   

    console.log('Laptops By Categories', laptops)
    return (
        <div className='my-12'>
            <h2 className='text-3xl font-bold mb-4'>Laptops categories : {laptops.length}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    laptops.map(laptop => <LaptopsCategory
                    key={laptop._id}
                    laptop={laptop}
                    setLaptopNameModal={setLaptopNameModal}
                    ></LaptopsCategory>)
                }
            </div>
            {/* {
                productName &&
                <PurchasingModal
                    key={productName._id}
                    productName={productName}
                    // selectedDate={selectedDate}
                    setProductName={setProductName}
                    // refetch={ refetch}
                ></PurchasingModal>
            } */}
            <PurchasingModal
            // key={laptopNameModal._id}
            laptopNameModal={laptopNameModal}
            setLaptopNameModal={setLaptopNameModal}
            ></PurchasingModal>
        </div>
    );
};

export default LaptopsCategories;