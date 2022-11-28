import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthProvider';


const PurchasingModal = ({ setLaptopNameModal, laptopNameModal }) => {
    // const {user}= useContext(AuthContext);
    // console.log(user)
    const laptop = laptopNameModal;
    console.log('purchase', laptop);
    // const { categoryId, email, img, isVerified, location, originalPrice, postTime, productName, resellPrice, sellerName, yearOfUse, _id, discription, phone, condition } = laptop;

    const navigate = useNavigate();

    const dateTime = new Date();
    const date = dateTime.toDateString();
    const time = dateTime.toLocaleTimeString();

    const handlePurchasing = event => {
        console.log(event)
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.patientName.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const purchase = {

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
                toast.success(` is added successfully`)
                navigate('/dashboard')
            })
    }
    return (
        <>
            <input type="checkbox" id="purchasing-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="purchasing-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Name</h3>
                    <form onSubmit={handlePurchasing} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full border border-gray-100" />
                        <select name='slot' className="select select-bordered w-full">
                            <option value="Walton">Walton</option>
                            <option value="Walton">Walton</option>
                            <option value="Walton">Walton</option>
                        </select>
                        {/* <input name='patientName' type="text" disabled defaultValue={user?.displayName} className="input w-full border border-gray-100" />
                        <input name='email' type="text" disabled defaultValue={user?.email} className="input w-full border border-gray-100" /> */}
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full border border-gray-100" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PurchasingModal;