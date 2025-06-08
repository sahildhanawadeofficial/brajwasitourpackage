// components/SpiritualTemplesBlog.jsx (or pages/blog/spiritual-temples-in-uttarakhand.jsx)

import React from 'react';
import Head from 'next/head'; // For SEO metadata
import Image from 'next/image'; // For optimized images

// Make sure your style.scss is imported somewhere in your global styles or layout
// For example, in pages/_app.js: import '../styles/style.scss';

const SpiritualTemplesBlog = () => {
    const blogData = {
        id: 5,
        title: "Spiritual Journey Through Uttarakhand: Temples You Must Visit in Devbhoomi",
        excerpt: "From Kedarnath to Badrinath, dive into the spiritual essence of Uttarakhand with a guide to the most revered temples across the state...",
        imageUrl: "/tour/yamunotri-yamuna-source.png", // Ensure this path is correct relative to your public directory
        slug: "spiritual-temples-in-uttarakhand",
    };

    return (
        <div className="blog-container col-lg-9">
            <Head>
                <title>{blogData.title}</title>
                <meta name="description" content={blogData.excerpt} />
                <meta name="keywords" content="Uttarakhand temples, spiritual journey, pilgrimage, Char Dham, Kedarnath, Badrinath, Gangotri, Yamunotri, Haridwar, Rishikesh, Jageshwar, Tungnath, Devbhoomi, Hindu temples" />
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
                        <p>Uttarakhand, famously known as 'Devbhoomi' or the 'Land of Gods', is a sacred realm where spirituality intertwines seamlessly with breathtaking natural beauty. This Himalayan state is dotted with ancient temples, revered shrines, and spiritual sites that have drawn pilgrims and seekers for centuries. Embarking on a spiritual journey here is not just a tour; it's an immersive experience that cleanses the soul and connects one with the divine.</p>
                        <p>If you're seeking spiritual solace and a deeper connection, here are some of the most prominent temples and spiritual destinations you must visit in Uttarakhand:</p>

                        <div className="place-section">
                            <h2>1. The Sacred Char Dham Yatra: Gateway to Salvation</h2>
                            <p>The Char Dham Yatra is the most significant pilgrimage in Uttarakhand, comprising four holy sites in the Himalayas. Completing this circuit is believed to wash away sins and achieve 'Moksha' (salvation). The journey typically follows a clockwise direction.</p>
                            <ul>
                                <li><strong>Yamunotri Dham:</strong> The source of the Yamuna River, dedicated to Goddess Yamuna. Located in Uttarkashi district, it involves a trek from Janki Chatti. The main temple houses a black marble idol of the goddess.</li>
                                <li><strong>Gangotri Dham:</strong> The sacred origin of the River Ganga, dedicated to Goddess Ganga. Situated in Uttarkashi, the temple is a beautiful stone structure. Devotees often take a holy dip in the icy waters of the Bhagirathi River.</li>
                                <li><strong>Kedarnath Dham:</strong> One of the twelve Jyotirlingas of Lord Shiva, nestled amidst the majestic Garhwal Himalayas. The ancient stone temple is a testament to incredible resilience and faith, requiring a challenging but rewarding trek from Gaurikund.</li>
                                <li><strong>Badrinath Dham:</strong> Dedicated to Lord Vishnu, this is the last stop of the Char Dham Yatra. Located on the banks of the Alaknanda River, the colorful temple is a prominent site for Vaishnavites. The Tapt Kund (hot spring) near the temple is believed to have medicinal properties.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>2. Haridwar: The Gateway to Gods & Ganga Aarti</h2>
                            <p>Haridwar, meaning 'Gateway to God', is one of the seven holiest places in India. Situated on the banks of the River Ganga, it's a major pilgrimage center.</p>
                            <p><strong>Highlights:</strong></p>
                            <ul>
                                <li><strong>Har Ki Pauri:</strong> The most sacred ghat where pilgrims take a holy dip to cleanse their sins. The evening Ganga Aarti, a mesmerizing ritual of light and devotion, is a must-witness spectacle.</li>
                                <li><strong>Mansa Devi Temple & Chandi Devi Temple:</strong> Perched on hilltops, these temples are accessible by cable car and offer panoramic views of Haridwar and the Ganga. They are revered Shakti Peeths.</li>
                                <li><strong>Daksh Prajapati Temple:</strong> An ancient Shiva temple with significant mythological importance.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>3. Rishikesh: Yoga Capital & Spiritual Retreat</h2>
                            <p>While known for adventure sports, Rishikesh is also a profound spiritual hub, home to numerous ashrams, yoga centers, and ghats.</p>
                            <p><strong>Highlights:</strong></p>
                            <ul>
                                <li><strong>Triveni Ghat:</strong> A sacred confluence point of Ganga, Yamuna, and Saraswati rivers (mythological), known for Ganga Aarti and morning rituals.</li>
                                <li><strong>Parmarth Niketan Ashram:</strong> A prominent ashram known for its evening Ganga Aarti, yoga programs, and spiritual discourses.</li>
                                <li><strong>Neelkanth Mahadev Temple:</strong> A revered Shiva temple located amidst forests, believed to be where Lord Shiva consumed poison after the Samudra Manthan.</li>
                                <li><strong>Lakshman Jhula & Ram Jhula:</strong> Iconic suspension bridges offering spiritual vibes and views of temples along the riverbanks.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>4. Jageshwar Dham: Ancient Temple Complex</h2>
                            <p>Nestled in the Kumaon Himalayas, Jageshwar Dham is a cluster of over 100 ancient Hindu temples dating back to the 7th to 14th centuries. It's dedicated to Lord Shiva and is considered one of the 12 Jyotirlingas according to some traditions.</p>
                            <p><strong>Highlights:</strong></p>
                            <ul>
                                <li><strong>Archaeological Significance:</strong> The temples showcase remarkable ancient Kumaoni architecture.</li>
                                <li><strong>Tranquil Environment:</strong> Surrounded by deodar forests, the complex offers a serene and meditative atmosphere.</li>
                                <li><strong>Main Temples:</strong> The prominent temples include Jageshwar Mahadev, Mrityunjaya Temple, and Dandeshwar Temple.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>5. Tungnath Temple: The Highest Shiva Temple</h2>
                            <p>Part of the Panch Kedar temples, Tungnath holds the distinction of being the highest Shiva temple in the world, located at an altitude of approximately 3,680 meters (12,073 ft).</p>
                            <p><strong>Highlights:</strong></p>
                            <ul>
                                <li><strong>Mesmerizing Trek:</strong> A relatively easy trek of about 3.5 km from Chopta, offering stunning views.</li>
                                <li><strong>Panoramic Views:</strong> From Tungnath, you can get incredible views of the Chaukhamba peaks. The trek further leads to Chandrashila peak for even more breathtaking vistas.</li>
                                <li><strong>Spiritual Significance:</strong> It is believed to be where the arms of Lord Shiva appeared after the Mahabharata war.</li>
                            </ul>
                        </div>

                        <p>Uttarakhand's spiritual landscape is as diverse as its geographical features. Each temple and sacred site tells a tale of devotion, history, and profound faith. Whether you seek spiritual enlightenment or simply wish to immerse yourself in the rich cultural heritage, these temples offer an unforgettable journey into the heart of Devbhoomi.</p>
                    </section>

                    <footer className="post-footer">
                        <p>Which spiritual destination in Uttarakhand calls to your soul? Share your experiences!</p>
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

export default SpiritualTemplesBlog;