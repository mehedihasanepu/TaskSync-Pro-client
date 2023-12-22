
const Contract = () => {
    return (
        <section className="bg-[#F8F6F4] pt-10 pb-16 max-w-screen-xl mx-auto">
            <h2 className=" text-3xl lg:text-4xl font-bold mb-8 text-center">Contract With Us...</h2>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">About Our Platform</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our task management platform is designed to streamline your workflow and enhance productivity across teams and individuals. With a user-friendly interface and robust features, we empower you to efficiently manage tasks, projects, and collaborations.
                        </p>
                        <ul className="mt-6 text-gray-800">
                            <li className="mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.707 6.293a1 1 0 0 0-1.414 0L9 13.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414z" /></svg>
                                <span>Effortlessly manage tasks and deadlines.</span>
                            </li>
                            <li className="mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.707 6.293a1 1 0 0 0-1.414 0L9 13.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414z" /></svg>
                                <span>Collaborate seamlessly with your team or clients.</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.707 6.293a1 1 0 0 0-1.414 0L9 13.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414z" /></svg>
                                <span>Customize workflows to suit your unique needs.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">Contact Us</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            If you have any inquiries or feedback, feel free to reach out to us. Our team is dedicated to providing assistance and ensuring your experience with our platform is seamless.
                        </p>
                        <div className="flex flex-col items-center lg:items-start">
                            <p className="text-lg font-semibold text-gray-800">Email: mehedihasanepu123@gmail.com</p>
                            <p className="text-lg font-semibold text-gray-800 mt-2">Phone: +8801628568790</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contract;
