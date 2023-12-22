import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../pages/Home/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            {/* <Footer></Footer> */}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;