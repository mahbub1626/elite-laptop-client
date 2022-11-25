import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
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
        
      ]
    }
  ])

 export default router;