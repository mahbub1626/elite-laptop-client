import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Footer from '../../Pages/Share/Footer/Footer';
import Navbar from '../../Pages/Share/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email);
    return (
        <div className='max-w-[1440px] mx-auto'>
            
                <Navbar></Navbar>

                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            <li><Link to='/dashboard'>Wish List</Link></li>

                            {
                                <>
                                    <li><Link to='/dashboard/allusers'>Users</Link></li>
                                    <li><Link to='/dashboard/orders'>My Orders</Link></li>
                                    <li><Link to='/dashboard/addcategory'>Add Category</Link></li>
                                    <li><Link to='/dashboard/buyers'>Buyers</Link></li>
                                    <li><Link to='/dashboard/sellers'>Sellers</Link></li>
                                    <li><Link to='/dashboard/admin'>Admin</Link></li>
                                    <li><Link to='/dashboard/addlaptop'>Add Laptop</Link></li>
                                    <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                                </>
                            }
                        </ul>

                    </div>
                </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default DashboardLayout;