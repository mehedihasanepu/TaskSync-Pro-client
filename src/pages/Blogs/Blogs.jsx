
const Blogs = () => {
    // Sample blog posts data
    const blogPosts = [
        {
            title: '5 Effective Task Management Strategies for Developers',
            imageUrl: 'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Task+Management', // Replace with a valid image URL
            date: 'December 10, 2023',
            author: 'John Doe',
            excerpt: 'Managing tasks efficiently is crucial for developers. Here are five strategies to boost productivity in coding tasks and projects.'
        },
        {
            title: 'The Importance of Collaboration Tools in Corporate Task Management',
            imageUrl: 'https://via.placeholder.com/300x200/3498DB/FFFFFF?text=Collaboration+Tools', // Replace with a valid image URL
            date: 'December 5, 2023',
            author: 'Jane Smith',
            excerpt: 'Discover how collaboration tools can revolutionize task management in corporate environments, fostering team productivity and success.'
        },
        {
            title: 'Effective Time Management Techniques for Freelancers',
            imageUrl: 'https://via.placeholder.com/300x200/27AE60/FFFFFF?text=Time+Management', // Replace with a valid image URL
            date: 'November 28, 2023',
            author: 'Alex Johnson',
            excerpt: 'Learn practical time management techniques to maximize productivity and manage multiple client projects as a freelancer.'
        },
        {
            title: 'Task Prioritization Methods: Choosing What Matters Most',
            imageUrl: 'https://via.placeholder.com/300x200/F39C12/FFFFFF?text=Task+Prioritization', // Replace with a valid image URL
            date: 'November 20, 2023',
            author: 'Sarah Adams',
            excerpt: 'Explore various task prioritization methods and their significance in achieving goals and meeting deadlines effectively.'
        },
        {
            title: 'Effective Project Management Tips for Entrepreneurs',
            imageUrl: 'https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Project+Management', // Replace with a valid image URL
            date: 'November 15, 2023',
            author: 'Michael Brown',
            excerpt: 'Discover project management tips tailored for entrepreneurs to manage business tasks and drive project success.'
        }
    ];

    return (
        <section className="bg-gray-100 py-16 max-w-screen-xl mx-auto ">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">Latest Blog Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.date} | By {post.author}</p>
                                    <p className="text-gray-700">{post.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
