import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";

const LaptopsCategory = ({ laptop, setProduct }) => {
    const { categoryId, email, img, isVerified, location, phone, condition, originalPrice, postTime, productName, resellPrice, sellerName, yearOfUse, discription, _id } = laptop;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>

            <div className="card-body mx-3">

                <div className='flex items-center my-4 '>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='' src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className='ml-4 '>
                        <p className='text-xl'>{sellerName} {!isVerified && <FaCheckCircle className='text-green-500 inline' />}</p>
                        <p>{location}</p>
                    </div>
                </div>
                {/* product details */}
                <div className=''>
                    <p><strong>Post:</strong> {postTime.date} at {postTime.time} </p>

                    <h2 className="card-title">Laptop name: {productName}</h2>
                    <p><strong>Discription:</strong> {discription}</p>
                    <p><strong>Condition: {condition}</strong> </p>
                    <p><strong>Year of Used: {yearOfUse} years</strong> </p>
                    <p><strong>Original price:</strong> ${originalPrice}</p>
                    <p><strong>Resell price:</strong> ${resellPrice}</p>
                    <p><strong>Contact with seller</strong></p>
                    <p><strong>Phone number:</strong> {phone}</p>
                    <p><strong>Email:</strong> {email}</p>

                </div>
                <div className="card-actions">                    
                    {/* <label
                    // disabled={slots.length === 0}
                    htmlFor="booking-modal" 
                    className="btn btn-primary text-white"
                    onClick={()=> setProductName(productName)}
                    >Book Appointment</label> */}
                    <label
                        htmlFor="purchasing-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setProduct(laptop)}
                    >Buy Now</label>
                </div>
            </div>


        </div>
    );
};

export default LaptopsCategory;