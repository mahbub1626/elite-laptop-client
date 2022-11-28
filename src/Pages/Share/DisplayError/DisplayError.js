import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../../assets/404/404.png';

const DisplayError = () => {
    return (
        <div className='w-1/2 mx-auto my-20'>
            <img src={ErrorImg} alt="Error img" />
            <div className='text-center'>
            <h2 className='lg:text-3xl font-extrabold  text-red-500'>Sorry, we couldn't find this page.</h2>
            <p className='my-2'>But dont worry, you can find plenty of other things on our <br /> homepage.</p>
            <Link to='/'>
            <button className='btn btn-primary my-2'>Back to Homepage</button>
            </Link>
            </div>
        </div>
    );
};

export default DisplayError;