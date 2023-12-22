import { Link } from "react-router-dom";
import bannerImg from "../../../assets/image/banner-img.png"
const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto ">
            <div className="flex justify-between items-center ">
                <div className="flex-1 space-y-3">
                    <h2 className="text-5xl font-bold">TaskSync Pro</h2>
                    <p>
                        <span className="font-semibold text-lg text-blue-800">Welcome to our task management website,</span> your ultimate solution for organizing, prioritizing, and tracking your tasks effortlessly. Our platform offers intuitive features designed to streamline your workflow, allowing you to create, assign, and manage tasks efficiently.
                    </p>
                    <div>
                        <Link to="/dashboard">

                            <button className="btn font-semibold normal-case text-lg bg-blue-100">
                                Let’s Explore
                            </button>
                        </Link>
                    </div>
                </div>


                <div className="flex-1 ">
                    <img className="w-[600px]" src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;