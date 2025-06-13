// components/CharDhamYatraBlog.jsx (or pages/blog/84-kosi-parikrama-guide.jsx)

import React from 'react';
import Head from 'next/head'; // For SEO metadata
import Image from 'next/image'; // For optimized images

// Make sure your style.scss is imported somewhere in your global styles or layout
// For example, in pages/_app.js: import '../styles/style.scss';

const EightyFourKosiParikramaGuide = () => {
    const blogData = {
        id: 3, // Assuming a new ID for a new blog post
        title: "84 Kosi Parikrama Guide: A Sacred Journey Through Awadh",
        excerpt: "Embark on the ancient and spiritually enriching 84 Kosi Parikrama in Ayodhya. This guide covers everything you need to know for this sacred circumambulation.",
        imageUrl: "/tour/govardhan-parikrama.png", // Example image path, ensure it exists
        slug: "84-kosi-parikrama-guide",
    };

    return (
        <div className="blog-container col-lg-9">
            <Head>
                <title>{blogData.title}</title>
                <meta name="description" content={blogData.excerpt} />
                <meta name="keywords" content="84 Kosi Parikrama, Ayodhya, Awadh, sacred journey, pilgrimage, circumambulation, spiritual, Uttar Pradesh, travel guide, preparation, history, mythology" />
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
                    <p className="post-meta">Published on <time datetime="2025-06-13">June 13, 2025</time> | By Your Travel Team</p>

                    <section className="post-content">
                        <p>The 84 Kosi Parikrama is a revered circumambulation covering a significant portion of the ancient Awadh region, encompassing various sacred sites associated with Lord Rama's life and the Ramayana. This spiritual journey, spanning approximately 84 Kosi (around 275 kilometers or 170 miles), is undertaken by devotees seeking spiritual merit and a deeper connection to the divine. This comprehensive guide will help you prepare for and understand this profound pilgrimage.</p>

                        <div className="place-section">
                            <h2>1. Understanding the Significance & Route of 84 Kosi Parikrama</h2>
                            <p>The 84 Kosi Parikrama is a symbol of devotion, believed to purify the soul and grant liberation. It traces the ancient boundaries of the kingdom of Ayodhya as described in Hindu scriptures. The journey covers various holy sites, ashrams, and temples in and around Ayodhya, touching upon places where Lord Rama, Sita, Lakshmana, and Hanuman spent time during their earthly sojourn.</p>
                            <p>While the exact route can vary slightly, it generally begins and ends in Ayodhya, moving through regions in Faizabad, Basti, Gonda, and Ambedkar Nagar districts of Uttar Pradesh. The parikrama is typically undertaken on foot, taking several days to complete.</p>
                        </div>

                        <div className="place-section">
                            <h2>2. Best Time to Undertake the Parikrama</h2>
                            <p>The 84 Kosi Parikrama is usually undertaken annually, primarily during the Hindu month of Chaitra (March-April) before Ram Navami, or sometimes during Kartik Purnima (October-November). These periods offer relatively milder weather conditions for walking long distances.</p>
                            <ul>
                                <li><strong>Spring (Chaitra):</strong> Pleasant temperatures, but can get warm towards the end of the day.</li>
                                <li><strong>Autumn (Kartik):</strong> Cooler and more comfortable for walking.</li>
                            </ul>
                            <p>Avoid the peak summer months (May-July) due to extreme heat and the monsoon season (July-September) due to heavy rains and challenging walking conditions.</p>
                        </div>

                        <div className="place-section">
                            <h2>3. Physical & Health Preparation</h2>
                            <p>Walking for extended periods over several days requires good physical fitness and stamina. It's crucial to prepare your body well in advance.</p>
                            <p><strong>Key Steps:</strong></p>
                            <ul>
                                <li><strong>Medical Consultation:</strong> Get a thorough medical check-up, especially if you have chronic health conditions. Consult your doctor about undertaking such a strenuous journey.</li>
                                <li><strong>Fitness Regime:</strong> Start a regular walking regimen at least 2-3 months before your planned parikrama. Gradually increase the distance and duration of your walks. Include light stretching and strengthening exercises.</li>
                                <li><strong>Foot Care:</strong> Pay special attention to your feet. Break in your walking shoes beforehand to avoid blisters.</li>
                                <li><strong>Hydration and Nutrition:</strong> Practice staying hydrated and eating light, nutritious meals to build endurance.</li>
                                <li><strong>First-Aid Kit:</strong> Carry a well-stocked first-aid kit with essentials like pain relievers, antiseptic cream, bandages, blister treatment, rehydration salts, and any personal medications.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>4. What to Pack: Essentials for the Journey</h2>
                            <p>Packing light but smart is essential for a comfortable parikrama.</p>
                            <p><strong>Packing List Essentials:</strong></p>
                            <ul>
                                <li><strong>Comfortable Clothing:</strong> Lightweight, breathable cotton clothes. Carry a few sets. For cooler months, pack light woolens.</li>
                                <li><strong>Footwear:</strong> Two pairs of well-broken-in, comfortable walking shoes or sandals with good sole support. Socks (cotton or moisture-wicking).</li>
                                <li><strong>Rain Protection:</strong> A lightweight raincoat or umbrella, especially if traveling during transition seasons.</li>
                                <li><strong>Personal Toiletries:</strong> Toothbrush, toothpaste, soap, hand sanitizer, moisturiser, sunscreen.</li>
                                <li><strong>Essential Accessories:</strong> Small backpack, water bottle (reusable), cap/hat, sunglasses, power bank, flashlight, extra batteries.</li>
                                <li><strong>Food & Snacks:</strong> Carry some dry fruits, energy bars, and glucose biscuits for quick energy boosts.</li>
                                <li><strong>Documents:</strong> Photo ID (Aadhar/Voter ID), emergency contact numbers, and any necessary medical prescriptions.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>5. Travel & Accommodation During the Parikrama</h2>
                            <p>While the parikrama is traditionally done on foot, some devotees may opt for partial travel by vehicle. Accommodation is typically basic along the route.</p>
                            <p><strong>Planning Tips:</strong></p>
                            <ul>
                                <li><strong>Group Travel:</strong> Many devotees undertake the parikrama in organized groups, which can provide support, food, and basic shelter.</li>
                                <li><strong>Dharamshalas & Ashrams:</strong> Along the route, simple dharamshalas and ashrams often offer overnight stays and meals for pilgrims. Be prepared for basic facilities.</li>
                                <li><strong>Local Support:</strong> Local villagers are often supportive of pilgrims, offering water and sometimes food.</li>
                                <li><strong>Financial Planning:</strong> Carry sufficient cash in smaller denominations as ATMs might not be readily available in all remote areas.</li>
                                <li><strong>Route Navigation:</strong> While signboards are improving, it's advisable to have a map or a local guide/fellow pilgrim who knows the route.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>6. Safety & Etiquette During the Parikrama</h2>
                            <p>Observing safety precautions and respecting local customs is paramount.</p>
                            <p><strong>Safety & Conduct:</strong></p>
                            <ul>
                                <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day to prevent dehydration.</li>
                                <li><strong>Eat Hygienically:</strong> Prefer freshly prepared food. Avoid street food that might not be hygienic.</li>
                                <li><strong>Walk Mindfully:</strong> Be aware of your surroundings, especially on rural roads.</li>
                                <li><strong>Respect Local Sentiments:</strong> Dress modestly and behave respectfully at all holy sites. Maintain silence and reverence in temples.</li>
                                <li><strong>Environmental Awareness:</strong> Do not litter. Dispose of waste responsibly.</li>
                                <li><strong>Inform Someone:</strong> Let family or friends know your itinerary and estimated progress.</li>
                                <li><strong>Listen to Your Body:</strong> If you feel unwell, take a break and seek medical attention if necessary. Do not push yourself beyond your limits.</li>
                            </ul>
                        </div>

                        <p>The 84 Kosi Parikrama is a unique spiritual journey that connects pilgrims to the rich history and devotion of Ayodhya. With proper physical and mental preparation, and by embracing the simplicity of the pilgrimage, you can have a deeply fulfilling and transformative experience. May your journey be blessed with divine grace!</p>
                    </section>

                    <footer className="post-footer">
                        <p>Have you completed the 84 Kosi Parikrama? Share your insights and tips with fellow pilgrims in the comments below!</p>
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

export default EightyFourKosiParikramaGuide;