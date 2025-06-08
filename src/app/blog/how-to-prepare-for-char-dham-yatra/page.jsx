// components/CharDhamYatraBlog.jsx (or pages/blog/how-to-prepare-for-char-dham-yatra.jsx)

import React from 'react';
import Head from 'next/head'; // For SEO metadata
import Image from 'next/image'; // For optimized images

// Make sure your style.scss is imported somewhere in your global styles or layout
// For example, in pages/_app.js: import '../styles/style.scss';

const CharDhamYatraBlog = () => {
    const blogData = {
        id: 2,
        title: "How to Prepare for Char Dham Yatra: Your Complete Guide",
        excerpt: "Planning a pilgrimage to Char Dham? Here's a complete guide to help you prepare for the journey safely and comfortably...",
        imageUrl: "/tour/badrinath-dham.png", // Ensure this path is correct relative to your public directory
        slug: "how-to-prepare-for-char-dham-yatra",
    };

    return (
        <div className="blog-container col-lg-9">
            <Head>
                <title>{blogData.title}</title>
                <meta name="description" content={blogData.excerpt} />
                <meta name="keywords" content="Char Dham Yatra, pilgrimage, Uttarakhand, Badrinath, Kedarnath, Gangotri, Yamunotri, travel guide, preparation, health, safety, tips" />
                <link rel="canonical" href={`https://yourwebsite.com/blog/${blogData.slug}`} />

                {/* Open Graph / Social Media Meta Tags */}
                <meta property="og:title" content={blogData.title} />
                <meta property="og:description" content={blogData.excerpt} />
                <meta property="og:image" content={`https://yourwebsite.com${blogData.imageUrl}`} />
                <meta property="og:url" content={`https://yourwebsite.com/blog/${blogData.slug}`} />
                <meta property="og:type" content="article" />
            </Head>

            {/* Note: Header and Footer components would ideally be moved into a reusable Layout component */}
            {/* For this example, I'm keeping them to show the full blog structure */}


            <main className="blog-main">
                <article className="blog-post">
                    <header className="post-header">
                        {/* Using Next.js Image component for optimization */}
                        <Image
                            src={blogData.imageUrl}
                            alt={blogData.title}
                            width={1200} // Adjust based on your design needs
                            height={675} // Adjust to maintain aspect ratio, e.g., 16:9
                            layout="responsive" // Makes image responsive
                            className="post-feature-image"
                            priority // Loads this image sooner as it's above the fold
                        />
                    </header>
                    <h1 className="post-title">{blogData.title}</h1>
                    <p className="post-meta">Published on <time datetime="2025-06-08">June 8, 2025</time> | By Your Travel Team</p>

                    <section className="post-content">
                        <p>The Char Dham Yatra, a revered pilgrimage to four holy sites in the Himalayas (Yamunotri, Gangotri, Kedarnath, and Badrinath), is a journey of immense spiritual significance. However, due to the challenging terrain and varying weather conditions, proper preparation is crucial for a safe and comfortable experience. This guide will walk you through everything you need to know before embarking on this divine adventure.</p>

                        <div className="place-section">
                            <h2>1. Understanding the Char Dhams & Best Time to Visit</h2>
                            <p>The four sacred shrines are:</p>
                            <ul>
                                <li><strong>Yamunotri:</strong> Source of the Yamuna River, dedicated to Goddess Yamuna.</li>
                                <li><strong>Gangotri:</strong> Source of the Ganga River (Ganga Devi Temple).</li>
                                <li><strong>Kedarnath:</strong> One of the 12 Jyotirlingas of Lord Shiva, located near the Mandakini River.</li>
                                <li><strong>Badrinath:</strong> Dedicated to Lord Vishnu, situated on the banks of the Alaknanda River.</li>
                            </ul>
                            <p>The Yatra typically opens in late April or early May and closes around October or early November, coinciding with the Hindu festival of Diwali. The best time to visit is May-June and September-October, when the weather is relatively pleasant.</p>
                        </div>

                        <div className="place-section">
                            <h2>2. Physical & Health Preparation</h2>
                            <p>The Char Dham Yatra involves significant trekking, especially to Kedarnath and Yamunotri. Good physical fitness is paramount.</p>
                            <p><strong>Key Steps:</strong></p>
                            <ul>
                                <li><strong>Medical Check-up:</strong> Consult your doctor for a thorough check-up, especially if you have pre-existing conditions (heart, respiratory issues, diabetes). Get necessary vaccinations.</li>
                                <li><strong>Acclimatization:</strong> Ascend gradually to higher altitudes to avoid Acute Mountain Sickness (AMS). Stay hydrated.</li>
                                <li><strong>Fitness Routine:</strong> Start a walking or jogging routine at least 1-2 months before your trip. Include light exercises to build stamina.</li>
                                <li><strong>Medicines:</strong> Carry all your prescribed medications, along with a basic first-aid kit for headaches, fever, pain relief, antiseptic, and bandages.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>3. What to Pack: Essentials for the Journey</h2>
                            <p>The weather in the Himalayas can be unpredictable, with sudden drops in temperature. Pack wisely.</p>
                            <p><strong>Packing List Essentials:</strong></p>
                            <ul>
                                <li><strong>Warm Clothing:</strong> Thermal wear, woolens, heavy jackets, gloves, woollen socks, cap.</li>
                                <li><strong>Rain Gear:</strong> Waterproof jacket, rain pants, umbrella.</li>
                                <li><strong>Footwear:</strong> Comfortable, sturdy, waterproof trekking shoes with good grip. Extra pair of socks.</li>
                                <li><strong>Personal Items:</strong> Toiletries, hand sanitizer, moisturiser, lip balm, sunscreen (high SPF).</li>
                                <li><strong>Accessories:</strong> Backpack, power bank, flashlight/headlamp, extra batteries, sunglasses.</li>
                                <li><strong>Documents:</strong> Photo ID (Aadhar/Voter ID), necessary permits (e.g., Biometric Registration), medical prescriptions.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>4. Travel & Accommodation Planning</h2>
                            <p>Booking in advance is highly recommended, especially during peak seasons.</p>
                            <p><strong>Planning Tips:</strong></p>
                            <ul>
                                <li><strong>Transportation:</strong> Choose between shared taxis, private cabs, or helicopter services (for Kedarnath/Badrinath). Factor in road conditions and potential delays.</li>
                                <li><strong>Accommodation:</strong> Book guesthouses or hotels in advance. Options range from budget-friendly dharamshalas to more comfortable hotels.</li>
                                <li><strong>Route Planning:</strong> Plan your itinerary logically, allowing ample time for travel between locations and rest. Yamunotri and Gangotri are generally visited first, followed by Kedarnath and Badrinath.</li>
                                <li><strong>Connectivity:</strong> Mobile network coverage can be sporadic. Inform your family/friends about your itinerary and check-ins.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>5. Safety & Etiquette During the Yatra</h2>
                            <p>Adhering to local guidelines and respecting the sanctity of the pilgrimage is vital.</p>
                            <p><strong>Safety & Conduct:</strong></p>
                            <ul>
                                <li><strong>Stay Hydrated & Eat Light:</strong> Drink plenty of water and warm fluids. Avoid heavy meals to prevent digestive issues at high altitudes.</li>
                                <li><strong>Walk in Groups:</strong> Especially during treks, it's safer to walk with companions or a guide.</li>
                                <li><strong>Respect Local Customs:</strong> Dress modestly, especially inside temples. Maintain silence and reverence.</li>
                                <li><strong>Environmental Responsibility:</strong> Do not litter. Dispose of waste responsibly.</li>
                                <li><strong>Emergency Contacts:</strong> Keep a list of emergency numbers (police, medical, tour operator).</li>
                            </ul>
                        </div>

                        <p>The Char Dham Yatra is not just a journey; it's an experience that tests your endurance and strengthens your faith. With careful planning and preparation, you can ensure a spiritually enriching and physically manageable pilgrimage to the divine abodes of Uttarakhand. May your journey be blessed!</p>
                    </section>

                    <footer className="post-footer">
                        <p>Have you embarked on the Char Dham Yatra? Share your essential tips and experiences in the comments below!</p>
                        {/* You might add social sharing buttons here */}
                    </footer>
                </article>
            </main>

            <footer className="blog-footer">
                <div className="container">
                    <p>&copy; 2025 Travel Tales. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default CharDhamYatraBlog;