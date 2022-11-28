import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Share/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/purchases?email=${user?.email}`;

    const { data: purchases = [], isLoading } = useQuery({
        queryKey: ['purchases', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log('inside myOrder 24', purchases)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl my-5'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Order ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases?.map((purchase, i) => <tr className='mb-5' key={purchase._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={purchase.img} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>EL{purchase._id}</td>
                                <td>{purchase.productName}</td>
                                <td>${purchase.resellPrice}</td>
                                <td>
                                    {
                                        purchase.resellPrice && !purchase.paid && <Link
                                            to={`/dashboard/payment/${purchase._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm text-white'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        purchase.resellPrice && purchase.paid && <span
                                            className='text-green-500'
                                        >Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;