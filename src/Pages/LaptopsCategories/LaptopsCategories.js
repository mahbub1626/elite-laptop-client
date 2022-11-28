import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PurchasingModal from '../PurchasingModal/PurchasingModal';
import LaptopsCategory from './LaptopsCategory';

const LaptopsCategories = () => {
    const laptops = useLoaderData();
    const [product, setProduct] = useState(null);
    console.log('inside setProduct ', product)


    console.log('Laptops By Categories', laptops)
    return (
        <div className='my-12'>
            <h2 className='text-3xl font-bold mb-4'>Laptops categories : {laptops.length}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    laptops.map(laptop => <LaptopsCategory
                        key={laptop._id}
                        laptop={laptop}
                        setProduct={setProduct}
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
                setProduct={setProduct}
                product={product}
            ></PurchasingModal>
        </div>
    );
};

export default LaptopsCategories;