import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import toast from 'react-hot-toast';

const LaptopDetails = () => {
    const laptop = useLoaderData();
    console.log(laptop)
    const { categoryId, email, img, isVerified, location,
        originalPrice, postTime, productName, resellPrice,
        sellerName, yearOfUse, _id, discription, phone, condition } = laptop;

    const navigate = useNavigate();

    const dateTime = new Date();
    const date = dateTime.toDateString();
    const time = dateTime.toLocaleTimeString();

    const handlePurchesesLaptop = laptop => {
        console.log(laptop)

        const purchase = {
            categoryId,
            email,
            img,
            isVerified,
            location,
            originalPrice,
            postTime,
            productName,
            resellPrice,
            sellerName,
            yearOfUse,
            productId: _id,
            discription,
            phone,
            condition,
            purchaseTime: {
                date,
                time
            }
        }
        // save purcheses data in the database
        fetch('http://localhost:5000/purchases', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${purchase.laptop.productName} is added successfully`)
                navigate('/dashboard')
            })
    }





    return (
        <div className='my-12 '>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:px-24">
                <figure><img src={img} alt="Album" /></figure>

                <div className="card-body lg:ml-12 w-1/2">

                    <div className='flex items-center my-4 '>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
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
                        <div className="card-actions my-4">
                            <button onClick={() => handlePurchesesLaptop(laptop)} className='btn btn-primary text-white'><CiShoppingBasket className='font-bold text-2xl mr-2' />Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaptopDetails;