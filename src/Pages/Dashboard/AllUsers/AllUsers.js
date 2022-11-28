import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Share/ConfirmationModal/ConfirmationModal';
import Loading from '../../Share/Loading/Loading';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);
    const closeModal = () => {
        setDeletingUser(null)
    }
    // console.log('inside seller component', localStorage.getItem('accessToken'))
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch('https://elite-laptop-server.vercel.app/users', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                console.log(data)
                return data;
            }
            catch (error) {

            }
        }
    })


    const handleUserDelete = (user) => {
        // console.log('Deleting user with id: ', user._id)
        fetch(`https://elite-laptop-server.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.error(` ${user.name} ${user.userType} deleted successfully.`)
                    refetch();
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>This is users {users.length}</h2>
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
                                    <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure want to delete?`}
                    message={`If you delete ${deletingUser.name}. It cannot be undo.`}
                    successAction={handleUserDelete}
                    modalData={deletingUser}
                    closeModal={closeModal}
                    successButtonName="Delete"
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;