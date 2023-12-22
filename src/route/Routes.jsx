import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SingUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserProfileDashboard from "../pages/Dashboard/UserProfileDashboard/UserProfileDashboard";
import AddTask from "../pages/Dashboard/AddTask/AddTask";
import AllTask from "../pages/Dashboard/AllTask/AllTask";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]
    },



    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // normal User Routes 
            {
                path: 'profile',
                element: <UserProfileDashboard></UserProfileDashboard>
            },
            {
                path: 'addTask',
                element: <AddTask></AddTask>
            },
            {
                path: 'allTask',
                element: <AllTask></AllTask>
            },


        ]
    }
]);