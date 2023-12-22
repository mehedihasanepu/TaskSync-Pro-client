import { FaHome, FaTasks, FaUser, FaUsers, } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md"
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Dashboard = () => {
    const { user } = useAuth()
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    /*   <div className={}>
            
             */


    return (


        <div className="flex flex-col lg:flex-row h-screen">

            <button
                onClick={toggleNav}
                className="lg:hidden bg-[#F6F6F6] p-2 text-xl flex items-center justify-center gap-3" 
            >
                Menu {isNavOpen ? <IoIosArrowUp ></IoIosArrowUp > : <IoIosArrowDown></IoIosArrowDown>} 
            </button>
            <div
                className={`w-full lg:w-64 min-h-screen bg-[#F6F6F6]  ${isNavOpen ? "" : "hidden lg:block"
                    }`}
            >


                <div className="w-full lg:w-64  lg:min-h-screen bg-[#D2E9E9]">
                    <div className="bg-[#C4DFDF] p-3">
                        {
                            user &&
                            <div className="flex flex-col ">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <div className="font-semibold">
                                    <p>{user.displayName}</p>
                                    <p>{user.email}</p>
                                </div>

                            </div>
                        }
                    </div>
                    <ul className="menu p-4">

                        {
                            <>
                                <li>
                                    <NavLink to="/dashboard/profile">
                                        <FaUser></FaUser>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addTask">
                                        <MdOutlineAddCircleOutline className="text-lg"></MdOutlineAddCircleOutline>
                                        Add Task</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allTask">
                                        <FaTasks></FaTasks>
                                        All Task</NavLink>
                                </li>

                            </>

                        }

                        {/* shared nav links */}

                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>

                    </ul>
                </div>

            </div>



            {/* dashboard content */}
            <div className="flex-1 p-8 pl:0 lg:pl-28">
                <Outlet></Outlet>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>

    );
};

export default Dashboard;
