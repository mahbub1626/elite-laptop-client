import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Share/Footer/Footer';
import Navbar from '../../Pages/Share/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div className='max-w-[1440px]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;