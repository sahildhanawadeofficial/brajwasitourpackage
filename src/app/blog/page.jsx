import React from "react";
import Link from "next/link";


const blogsData = [
    {
        id: 1,
        title: "Top 5 Places to Visit in Uttarakhand",
        excerpt: "Discover the must-visit destinations that showcase Uttarakhand's natural beauty and spiritual heritage...",
        imageUrl: "/tour/kedarnath-dham.png",
        slug: "top-5-places-to-visit-in-uttarakhand",
    },
    {
        id: 2,
        title: "How to Prepare for Char Dham Yatra",
        excerpt: "Planning a pilgrimage to Char Dham? Here's a complete guide to help you prepare for the journey safely and comfortably...",
        imageUrl: "/tour/badrinath-dham.png",
        slug: "how-to-prepare-for-char-dham-yatra",
    },
    {
        id: 3,
        title: "Best Time to Visit Uttarakhand for a Taxi Tour",
        excerpt: "Learn about the ideal seasons and weather conditions for exploring Uttarakhand by taxi for an enjoyable experience...",
        imageUrl: "/tour/jageshwar-temples.png",
        slug: "best-time-to-visit-uttarakhand",
    },
    {
        id: 4,
        title: "Benefits of Hiring a Local Taxi Service in Uttarakhand",
        excerpt: "Explore the advantages of booking a local taxi—from cost savings to local expertise that makes your journey safer and more enriching...",
        imageUrl: "/tour/mussoorie-hill-station.png",
        slug: "benefits-of-hiring-local-taxi-service-uttarakhand",
    },
    {
        id: 5,
        title: "Spiritual Journey Through Uttarakhand: Temples You Must Visit",
        excerpt: "From Kedarnath to Badrinath, dive into the spiritual essence of Uttarakhand with a guide to the most revered temples across the state...",
        imageUrl: "/tour/yamunotri-yamuna-source.png",
        slug: "spiritual-temples-in-uttarakhand",
    },
    {
        id: 6,
        title: "Scenic Routes You Can Explore with a Private Taxi in Uttarakhand",
        excerpt: "Witness breathtaking mountain views, river valleys, and hidden gems by taking these scenic drives through Uttarakhand in your own private cab...",
        imageUrl: "/tour/nainital-boating-ropeway.png",
        slug: "scenic-routes-in-uttarakhand",
    },


    // Add more blog objects here...
];

const Blogs = () => {
    return (
        <section className="blogs-section">
            <div className="container">
                <h2 className="section-title">Latest Blogs</h2>
                <div className="blogs-grid">
                    {blogsData.map(({ id, title, excerpt, imageUrl, slug }) => (
                        <div className="blog-card" key={id}>
                            <div className="blog-image">
                                <img src={imageUrl} alt={title} />
                            </div>
                            <div className="blog-content">
                                <h3>{title}</h3>
                                <p>{excerpt}</p>
                                <Link href={`/blog/${slug}`} className="read-more">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
