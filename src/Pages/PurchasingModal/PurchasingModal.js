import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Pages/Share/Loading/Loading';


const PurchasingModal = ({ product }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    if (loading) {
        return <Loading></Loading>
    }
    console.log('modal product', product);
    // console.log(product?.email)

    const dateTime = new Date();
    const date = dateTime.toDateString();
    const time = dateTime.toLocaleTimeString();

    const handlePurchasing = event => {

        event.preventDefault()
        const form = event.target;
        const location = form.pickUp.value;
        const phone = form.phone.value;
        console.log('inside modal', date, time, location, phone)

        const purchase = {           
            sellerEmail: product?.email,
            img: product?.img,                 
            originalPrice: product?.originalPrice,
            productName: product?.productName,
            resellPrice: product?.resellPrice,
            sellerName: product?.sellerName,
            productId: product?._id,

            email: user?.email,
            name: user?.displayName,
            location: location,
            phone,
            date,
            time


        }
        // // save purcheses data in the database
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
                toast.success(`${product?.productName} is added successfully`)
                navigate('/dashboard')
            })
    }
    return (
        <>
            <input type="checkbox" id="purchasing-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="purchasing-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handlePurchasing} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full border border-gray-100" />
                        <input type="text" disabled value={time} className="input w-full border border-gray-100" />
                        <input type="text" disabled defaultValue={user?.displayName} className="input w-full border border-gray-100" />
                        <input type="text" disabled defaultValue={user?.email} className="input w-full border border-gray-100" />
                        <input type="text" disabled defaultValue={product?.productName} className="input w-full border border-gray-100" />
                        <input type="text" disabled defaultValue={`$ ${product?.resellPrice}`} className="input w-full border border-gray-100" />


                        <input type="text" name='pickUp' placeholder='Pickup Location' className="input w-full border border-gray-100" />

                        <input name='phone' type="tel" placeholder="Phone Number" className="input w-full border border-gray-100" />
                        <input type="submit" value="Purchase" className='btn btn-accent w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PurchasingModal;