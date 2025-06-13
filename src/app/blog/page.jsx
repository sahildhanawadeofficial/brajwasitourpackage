import React from "react";
import Link from "next/link";


const blogsData = [
    {
        id: 1,
        title: "Top 10 Must-Visit Places in Braj Bhoomi",
        excerpt: "Explore the sacred and scenic landmarks of Mathura, Vrindavan, Govardhan, Barsana, and more in the heart of Braj.",
        imageUrl: "/tour/braj-barsana.png",
        slug: "top-places-to-visit-in-braj-bhoomi",
    },
    {
        id: 2,
        title: "84 Kosi Parikrama Guide: Spiritual Significance and Route Map",
        excerpt: "Understand the divine importance of the 84 Kosi Parikrama and how you can complete it with comfort and devotion.",
        imageUrl: "/tour/govardhan-parikrama.png",
        slug: "84-kosi-parikrama-guide",
    },
    {
        id: 3,
        title: "Lathmar Holi in Barsana and Nandgaon: Experience Divine Play",
        excerpt: "Witness one of the most unique Holi celebrations where devotion, tradition, and color come together in Barsana and Nandgaon.",
        imageUrl: "/tour/holi-celebration.png",
        slug: "lathmar-holi-barsana-nandgaon",
    },
    {
        id: 4,
        title: "Vrindavan Temple Darshan: Best Time, Aarti Schedule & Travel Tips",
        excerpt: "Plan your spiritual tour to Vrindavan with this practical guide to temple timings, aartis, and transportation.",
        imageUrl: "/tour/braj-nandgaon.png",
        slug: "vrindavan-temple-darshan-guide",
    },
    {
        id: 5,
        title: "Why Choose Brajwasi Tour Package for Your Braj Yatra",
        excerpt: "Learn how our local expertise, devotional itineraries, and comfortable taxi services make your pilgrimage seamless.",
        imageUrl: "/tour/phoolon-ki-holi.png",
        slug: "why-choose-brajwasi-tour-package",
    },
    {
        id: 6,
        title: "2 to 5 Day Itinerary for Mathura-Vrindavan Tour",
        excerpt: "A perfect itinerary to explore temples, ghats, and cultural gems of Mathura-Vrindavan, ideal for weekend or extended trips.",
        imageUrl: "/tour/brijwasi-lands-inn.png",
        slug: "mathura-vrindavan-tour-itinerary",
    },
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
