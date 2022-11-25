import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            console.log(data)
            return data;

        }
    })
    return (
        <div>
            <h2>This is users {users.length}</h2>
        </div>
    );
};

export default AllUsers;