import aboutImg from "../../assets/image/aboutImg.jpg"
const About = () => {
    return (
        <section className="py-10">
            <div className="container max-w-screen-xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4 text-center">About Our Platform</h2>
                <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
                    <div className="mb-8 lg:mb-0 flex-1">
                        <p className="text-xl text-gray-700 leading-relaxed">
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
                    <div className="flex-1">
                        <img src={aboutImg}  alt="About Our Platform" className="rounded-lg shadow-md w-[600px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
