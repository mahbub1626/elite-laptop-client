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
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases?.map((purchase, i) => <tr className='mb-5' key={purchase._id}>
                                <th>{i + 1}</th>
                                <td>{purchase.patientName}</td>
                                <td>{purchase.treatment}</td>
                                <td>{purchase.appointment}</td>
                                <td>{purchase.slot}</td>
                                <td>
                                    {
                                        purchase.price && !purchase.paid && <Link
                                            to={`/dashboard/payment/${purchase._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm text-white'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        purchase.price && purchase.paid && <span
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