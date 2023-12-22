import React from 'react';

const AudienceSection = () => {
    const audienceData = [
        {
            title: 'Developers',
            description: 'Ideal for software developers managing coding tasks and projects. Includes features like code versioning, bug tracking, and sprint planning.',
            details: [
                'Code collaboration and review tools',
                'Integration with popular development platforms',
                'Task prioritization based on development stages',
            ],
        },
        {
            title: 'Corporate Professionals',
            description: 'Suited for professionals in corporate settings managing team tasks and projects. Facilitates seamless communication and project tracking within departments.',
            details: [
                'Team collaboration tools',
                'Project progress tracking and reporting',
                'Customizable access levels and permissions',
            ],
        },
        {
            title: 'Bankers',
            description: 'Beneficial for bankers handling financial tasks and collaborations. Offers tools for financial data management, secure document sharing, and auditing.',
            details: [
                'Financial data encryption and security measures',
                'Document sharing and version control',
                'Audit trails for compliance',
            ],
        },
        {
            title: 'Designers',
            description: 'Great for designers organizing creative projects and tasks. Provides design versioning, asset management, and collaboration tools.',
            details: [
                'Design version control and history',
                'Asset library and sharing capabilities',
                'Real-time design collaboration features',
            ],
        },
        {
            title: 'Entrepreneurs',
            description: 'Useful for entrepreneurs managing multiple business tasks and priorities. Includes tools for project planning, resource allocation, and milestone tracking.',
            details: [
                'Resource allocation and budgeting features',
                'Milestone tracking and progress visualization',
                'Business goal alignment and planning tools',
            ],
        },
        {
            title: 'Students',
            description: 'Helpful for students managing assignments, projects, and study schedules. Offers task prioritization, study group collaboration, and deadline reminders.',
            details: [
                'Task prioritization and deadline management',
                'Study group collaboration and discussion boards',
                'Personalized study schedule creation',
            ],
        },
        {
            title: 'Freelancers',
            description: 'Perfect for freelancers managing diverse client projects and deadlines. Provides tools for client communication, project invoicing, and time tracking.',
            details: [
                'Client communication and project updates',
                'Invoicing and payment tracking features',
                'Time tracking and project milestone management',
            ],
        },
        {
            title: 'Others',
            description: 'Beneficial for various professionals and individuals managing tasks effectively. Offers customizable features to suit unique task management needs.',
            details: [
                'Customizable task management workflows',
                'Collaboration tools adaptable to diverse requirements',
                'Personalized task visualization and organization',
            ],
        },
        // Add more audience data as needed
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Who Can Benefit?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {audienceData.map((audience, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-3 text-blue-600">{audience.title}</h3>
                            <p className="text-gray-700 mb-4">{audience.description}</p>
                            <ul className="text-gray-600">
                                {audience.details.map((detail, idx) => (
                                    <li key={idx} className="mb-1">
                                        <svg className="w-4 h-4 inline mr-1 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.95 9.42l-8-8a1 1 0 0 0-1.4 1.42L16.58 10H2a1 1 0 0 0 0 2h14.58l-7.03 7.08a1 1 0 1 0 1.4 1.42l8-8a1 1 0 0 0 0-1.42z" /></svg>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AudienceSection;
