// components/UttarakhandBlog.jsx or pages/blog/top-5-places-to-visit-in-uttarakhand.jsx

import React from 'react';
import Head from 'next/head'; // For SEO metadata
import Image from 'next/image'; // For optimized images

// Make sure your style.scss is imported somewhere in your global styles or layout
// For example, in pages/_app.js: import '../styles/style.scss';

const UttarakhandBlog = () => {
    const blogData = {
        id: 1,
        title: "Top 5 Places to Visit in Uttarakhand: Your Ultimate Devbhoomi Guide",
        excerpt: "Discover the must-visit destinations that showcase Uttarakhand's natural beauty and spiritual heritage...",
        imageUrl: "/tour/kedarnath-dham.png", // Ensure this path is correct relative to your public directory
        slug: "top-5-places-to-visit-in-uttarakhand",
    };

    return (
        <div className="blog-container col-lg-9">
            <Head>
                <title>{blogData.title}</title>
                <meta name="description" content={blogData.excerpt} />
                <meta name="keywords" content="Uttarakhand, travel, Rishikesh, Nainital, Mussoorie, Kedarnath, Jim Corbett, tourism, India, spiritual, adventure, hill station, wildlife" />
                <link rel="canonical" href={`https://yourwebsite.com/blog/${blogData.slug}`} />

                {/* Open Graph / Social Media Meta Tags */}
                <meta property="og:title" content={blogData.title} />
                <meta property="og:description" content={blogData.excerpt} />
                <meta property="og:image" content={`https://yourwebsite.com${blogData.imageUrl}`} />
                <meta property="og:url" content={`https://yourwebsite.com/blog/${blogData.slug}`} />
                <meta property="og:type" content="article" />
            </Head>



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
                        <p>Nestled in the lap of the mighty Himalayas, Uttarakhand, often referred to as 'Devbhoomi' (Land of Gods), is a state that promises an enchanting blend of spiritual serenity, thrilling adventures, and unparalleled natural beauty. From ancient temples to pristine lakes, dense forests to snow-capped peaks, Uttarakhand offers a diverse canvas for every kind of traveler.</p>
                        <p>If you're planning a trip to this magnificent state, here are our top 5 must-visit destinations that truly capture the essence of Uttarakhand:</p>

                        <div className="place-section">
                            <h2>1. Rishikesh: The Yoga Capital & Adventure Hub</h2>
                            <p>Known globally as the 'Yoga Capital of the World', Rishikesh is a vibrant town situated on the banks of the sacred River Ganga. It's a pilgrimage site, a haven for spiritual seekers, and an adrenaline junkie's paradise all rolled into one.</p>
                            <p><strong>Highlights:</strong></p>
                            <ul>
                                <li><strong>Ganga Aarti:</strong> Witness the mesmerizing evening Ganga Aarti at Parmarth Niketan or Triveni Ghat, a deeply spiritual experience.</li>
                                <li><strong>Adventure Sports:</strong> Indulge in white-water rafting, bungee jumping, cliff jumping, and trekking.</li>
                                <li><strong>Yoga & Meditation:</strong> Numerous ashrams and yoga centers offer courses for all levels.</li>
                                <li><strong>Laxman Jhula & Ram Jhula:</strong> Iconic suspension bridges offering panoramic views of the Ganga and surrounding hills.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>2. Nainital: The Lake District of India</h2>
                            <p>Perched around the shimmering Naini Lake, Nainital is a charming hill station that exudes a serene and romantic ambiance. It's a perfect retreat for those seeking tranquility amidst picturesque landscapes.</p>
                            <p><strong>Highlights:</strong></p>
                            <ul>
                                <li><strong>Boating on Naini Lake:</strong> Enjoy a peaceful boat ride on the emerald-green lake.</li>
                                <li><strong>Naina Devi Temple:</strong> A revered Shakti Peeth located on the northern shore of the lake.</li>
                                <li><strong>Mall Road:</strong> A bustling promenade perfect for leisurely strolls, shopping, and dining.</li>
                                <li><strong>Snow View Point:</strong> Accessible by cable car, offering breathtaking panoramic views of the Himalayas.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>3. Mussoorie: The Queen of Hills</h2>
                            <p>Just a short drive from Dehradun, Mussoorie is a popular hill station known for its colonial charm, lush green hills, and varied flora and fauna. It offers stunning views of the Doon Valley and the Himalayan peaks.</p>
                            <p><strong>Highlights:</strong></p>
                            <ul>
                                <li><strong>Kempty Falls:</strong> A famous waterfall where you can bathe and relax.</li>
                                <li><strong>Gun Hill:</strong> The second-highest peak in Mussoorie, accessible by cable car, offering spectacular views.</li>
                                <li><strong>Camel's Back Road:</strong> A scenic walking path offering tranquil views of the sunset and sunrise.</li>
                                <li><strong>Mall Road:</strong> Similar to Nainital, it's the heart of Mussoorie for shopping, eating, and leisurely walks.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>4. Kedarnath: A Spiritual Journey to the Abode of Lord Shiva</h2>
                            <p>For those seeking a profound spiritual experience amidst awe-inspiring natural beauty, Kedarnath stands paramount. Located in the Rudraprayag district, it is one of the twelve Jyotirlingas of Lord Shiva and a vital part of the Char Dham Yatra.</p>
                            <p><strong>Highlights:</strong></p>
                            <ul>
                                <li><strong>Kedarnath Temple:</strong> An ancient and magnificent stone temple dedicated to Lord Shiva, set against the backdrop of snow-clad mountains.</li>
                                <li><strong>Trekking Route:</strong> The challenging yet rewarding trek to the temple offers breathtaking views of the surrounding Himalayas.</li>
                                <li><strong>Chorabari Tal (Gandhi Sarovar):</strong> A pristine lake situated a few kilometers from the temple, believed to be where Yudhishthira ascended to heaven.</li>
                                <li><strong>Serene Environment:</strong> The sheer scale of the mountains and the spiritual aura create an unforgettable experience.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>5. Jim Corbett National Park: India's Oldest Tiger Reserve</h2>
                            <p>For wildlife enthusiasts and nature lovers, Jim Corbett National Park offers an exhilarating experience. Established in 1936 as Hailey National Park, it's India's oldest national park and a prime habitat for the Bengal tiger.</p>
                            <p><strong>Highlights:</strong></p>
                            <ul>
                                <li><strong>Wildlife Safari:</strong> Embark on a jeep or elephant safari through different zones (Bijrani, Jhirna, Dhikala) to spot tigers, elephants, deer, and various bird species.</li>
                                <li><strong>Bird Watching:</strong> Home to over 650 species of resident and migratory birds.</li>
                                <li><strong>Corbett Falls:</strong> A picturesque waterfall surrounded by dense teak wood forest.</li>
                                <li><strong>Garjiya Devi Temple:</strong> A popular temple located on a large rock in the middle of the Kosi River.</li>
                            </ul>
                        </div>

                        <p>Uttarakhand is a treasure trove of experiences, from quiet contemplation to thrilling adventures. Each of these destinations offers a unique flavor of what Devbhoomi has to offer. So pack your bags, choose your adventure, and prepare to be mesmerized by the unparalleled beauty of Uttarakhand!</p>
                    </section>

                    <footer className="post-footer">
                        <p>Share your experiences and favorite spots in Uttarakhand in the comments below!</p>
                        {/* You might add social sharing buttons here */}
                    </footer>
                </article>
            </main>

            <footer className="blog-footer">
                <div class="container">
                    <p>&copy; 2025 Travel Tales. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default UttarakhandBlog;