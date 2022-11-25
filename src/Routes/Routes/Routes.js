import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import AddLaptop from "../../Pages/Dashboard/AddLaptop/AddLaptop";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
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
        
      ]
    },
    {
      path:'/dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children:[
        {
          path:'/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path:'/dashboard/allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path:'/dashboard/addlaptop',
          element: <AddLaptop></AddLaptop>
        },

      ]
    }
  ])

 export default router;