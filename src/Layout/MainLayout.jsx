import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../pages/Home/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;