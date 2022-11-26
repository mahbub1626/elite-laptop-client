import React from 'react';

const LaptopsCategory = ({laptop}) => {
    const { categoryId, email, img, isVerified, location,
        originalPrice, postTime, productName, resellPrice,
        sellerName, yearOfUse, _id } = laptop;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{productName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default LaptopsCategory;