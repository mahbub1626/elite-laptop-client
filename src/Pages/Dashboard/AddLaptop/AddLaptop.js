import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddLaptop = () => {
    const { user } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostkey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostkey);

    const navigate = useNavigate();

    const date = new Date();
    const n = date.toDateString();
    const time = date.toLocaleTimeString();
    // console.log('Date: ' + n);
    // console.log('Time: ' + time);

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    console.log('category: ', categories)


    const handleAddUsedLaptop = data => {
        console.log(data)

        // upload imag and hosting in imgbb
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const laptop = {
                        img: imgData.data.url,
                        categoryId: data.categoryId,                        
                        productName: data.productName,
                        email: data.email,
                        location: data.location,
                        resellPrice: data.resellPrice,
                        originalPrice: data.originalPrice,
                        yearOfUse: data.used,
                        postTime: {
                            date: n,
                            time: time
                        },
                        sellerName: data.displayName,
                        isVerified: false
                    }
                    console.log(laptop)

                    //  save laptop data in the database
                    fetch('http://localhost:5000/laptops', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(laptop)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard')
                        })
                }

            })

    }

    return (
        <div className='w-96  mx-12'>
            <h2 className='text-3xl my-5'>Add Used Laptop</h2>
            <div className='h-[800px]'>
                <div className=''>

                    <form onSubmit={handleSubmit(handleAddUsedLaptop)}>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register('displayName', {
                                // required: "Name is required"
                            })}
                                defaultValue={user?.displayName} readOnly
                                value={user.displayName}
                                className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register('email', {
                                // required: "Email is required"
                            })}
                                defaultValue={user?.email} readOnly
                                value={user.email}
                                className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>

                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Category</span></label>
                            <select
                                {...register('categoryId', {
                                    required: 'category is required'
                                })}
                                className="select input-bordered w-full">
                                {
                                    categories?.map(category => <option
                                        key={category._id}
                                        value={category.categoryId}    
                                        
                                    >{category.name}</option>)
                                }
                                
                            </select>
                            {errors.category && <p className='text-red-500'>{errors.category?.message}</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Product Name</span></label>
                            <input type="text" {...register('productName')}
                                className="input input-bordered w-full"
                            />
                            {errors.productName && <p className='text-red-500'>{errors.productName?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Location</span></label>
                            <input type="text" {...register('location', {
                                required: "Location is required"
                            })} className="input input-bordered w-full " />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Year of use</span></label>
                            <input type="text" {...register('used', {
                                required: "Used is required"
                            })} className="input input-bordered w-full " />
                            {errors.used && <p className='text-red-500'>{errors.used?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Resell Price</span></label>
                            <input type="number" {...register('resellPrice', {
                                required: "Resell Price is required"
                            })} className="input input-bordered w-full " />
                            {errors.resellPrice && <p className='text-red-500'>{errors.resellPrice?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Original Price</span></label>
                            <input type="number" {...register('originalPrice', {
                                required: "Original Price is required"
                            })} className="input input-bordered w-full " />
                            {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice?.message}</p>}
                        </div>

                        {/* img */}
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Laptop Picture</span></label>
                            <input type="file"
                                {...register('image')}
                                className="input input-bordered w-full pt-2" />
                            {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                        </div>
                        <input className='btn btn-primary w-full text-white mt-3' value='Add Doctor' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};
/**
 * Three places to store images
 * 1. Third party image hosting server **(genarel recomended    )
 * 2. File system of your server
 * 3. mongodb (database )
 */

export default AddLaptop;