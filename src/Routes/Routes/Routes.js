import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import AddLaptop from "../../Pages/Dashboard/AddLaptop/AddLaptop";
import Admin from "../../Pages/Dashboard/Admin/Admin";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Home from "../../Pages/Home/Home/Home";
import LaptopsCategories from "../../Pages/LaptopsCategories/LaptopsCategories";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/LogIn/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
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
        path: '/category/:id',
        element: <LaptopsCategories></LaptopsCategories>,
        loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
      },

    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
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
      

    ]
  }
])

export default router;