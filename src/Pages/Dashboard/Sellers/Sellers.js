import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Sellers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data1 = await res.json();
            const data = data1.filter(b => b.userType === 'seller')
            console.log('inside buyers', data)
            return data;
        }
    })
    return (
        <div>
        <h2 className='text-3xl my-5'>Sellers {users.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, i) => <tr
                            key={user._id}
                            user={user}
                        >
                            <th>{i + 1}</th>
                            <td>
                                <div className="avatar online">
                                    <div className="w-12 rounded-full">
                                        <img alt='' src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.userType}</td>
                            <td>
                                <button className='btn btn-sm btn-error'>Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Sellers;