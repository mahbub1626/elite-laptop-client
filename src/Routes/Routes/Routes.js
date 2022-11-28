import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import AddLaptop from "../../Pages/Dashboard/AddLaptop/AddLaptop";
import Admin from "../../Pages/Dashboard/Admin/Admin";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Home from "../../Pages/Home/Home/Home";
import LaptopsCategories from "../../Pages/LaptopsCategories/LaptopsCategories";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/LogIn/SignUp";
import LaptopDetails from '../../Pages/LaptopDetails/LaptopDetails';
import DisplayError from "../../Pages/Share/DisplayError/DisplayError";
import Blogs from "../../Pages/Blogs/Blogs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/category/:id',
        element: <LaptopsCategories></LaptopsCategories>,
        loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path: '/laptops/:id',
        element: <LaptopDetails></LaptopDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/laptops/${params.id}`)
      },
      

    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/dashboard/orders',
        element: <MyOrders></MyOrders>
      },
      {
        path: '/dashboard/allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/buyers',
        element: <Buyers></Buyers>
      },
      {
        path: '/dashboard/sellers',
        element: <Sellers></Sellers>
      },
      {
        path: '/dashboard/admin',
        element: <Admin></Admin>
      },
      {
        path: '/dashboard/addlaptop',
        element: <AddLaptop></AddLaptop>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`http://localhost:5000/purchases/${params.id}`)
    },

    ]
  }
])

export default router;