// components/MathuraVrindavanTourBlog.jsx (or pages/blog/mathura-vrindavan-tour-itinerary.jsx)

import React from 'react';
import Head from 'next/head'; // For SEO metadata
import Image from 'next/image'; // For optimized images

// Make sure your style.scss is imported somewhere in your global styles or layout
// For example, in pages/_app.js: import '../styles/style.scss';
export const metadata = {
    title: "Mathura-Vrindavan 2-Day Tour Itinerary",
    description: "Explore a well-planned 2-day itinerary to cover the best of Mathura and Vrindavan’s spiritual sites.",
    keywords: ["Mathura Vrindavan itinerary", "2 day Braj tour", "Krishna travel plan", "Braj tour guide"]
};

const MathuraVrindavanTourBlog = () => {
    const blogData = {
        id: 5, // Assuming a new ID for a new blog post
        title: "Mathura Vrindavan Tour Itinerary: A Spiritual Journey to Lord Krishna's Land",
        excerpt: "Immerse yourself in the divine aura of Mathura and Vrindavan, the sacred land where Lord Krishna spent his childhood. This comprehensive itinerary covers the must-visit temples, ghats, and cultural experiences.",
        imageUrl: "/tour/brijwasi-lands-inn.png", // Example image path, ensure it exists in your public directory
        slug: "mathura-vrindavan-tour-itinerary",
    };

    return (
        <div className="blog-container col-lg-9">
            <Head>
                <title>{blogData.title}</title>
                <meta name="description" content={blogData.excerpt} />
                <meta name="keywords" content="Mathura, Vrindavan, Lord Krishna, spiritual tour, pilgrimage, temples, Braj Bhoomi, ISKCON, Prem Mandir, Banke Bihari, Janmabhoomi, Yamuna Aarti, itinerary, travel guide" />
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
                        <p>Mathura and Vrindavan, the twin cities in the Braj region of Uttar Pradesh, hold immense spiritual significance for devotees of Lord Krishna. Mathura is revered as the birthplace of Krishna, while Vrindavan is where he spent his playful childhood. A visit to these sacred towns offers a unique opportunity to connect with divine stories, witness vibrant traditions, and experience a profound sense of devotion.</p>
                        <p>This itinerary is designed for a 2-day trip, allowing you to cover the major attractions comfortably. You can extend it to 3 days to include nearby spots like Gokul, Barsana, and Govardhan.</p>

                        <div className="place-section">
                            <h2>Best Time to Visit Mathura & Vrindavan</h2>
                            <p>The ideal time to visit Mathura and Vrindavan is during the winter months, from <strong>October to March</strong>, when the weather is pleasant and conducive for sightseeing and temple visits. Avoid the scorching summer months (May-July).</p>
                            <p>For a truly immersive cultural experience, consider visiting during major festivals:</p>
                            <ul>
                                <li><strong>Janmashtami (August/September):</strong> Celebrates Lord Krishna's birth with immense grandeur.</li>
                                <li><strong>Holi (March):</strong> Witness the world-famous festival of colors, especially Lathmar Holi in Barsana (covered in another blog post!).</li>
                                <li><strong>Radhashtami (August/September):</strong> Celebrates Radha Rani's birthday, particularly grand in Barsana.</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>Day 1: Mathura - The Birthplace of Lord Krishna</h2>
                            <p>Begin your spiritual journey in Mathura, the revered birthplace of Lord Krishna.</p>
                            <h3>Morning (9:00 AM - 1:00 PM):</h3>
                            <ul>
                                <li><strong>Shri Krishna Janmabhoomi Temple Complex:</strong> Start your day at the most sacred site, believed to be the exact prison cell where Lord Krishna was born. Explore the various shrines within the complex, including the Bhagvat Bhavan. Allow at least 2-3 hours here.</li>
                                <li><strong>Dwarkadhish Temple:</strong> A vibrant and historically significant temple dedicated to Lord Krishna in his Dwarkadhish form. Admire its intricate architecture and participate in the daily aartis. (Note: Mobiles and cameras are generally not allowed inside).</li>
                            </ul>
                            <h3>Lunch (1:00 PM - 2:00 PM):</h3>
                            <ul>
                                <li>Enjoy a traditional vegetarian lunch at a local eatery. Don't miss trying the famous "Mathura ke Pede" (sweet) and "Lassi."</li>
                            </ul>
                            <h3>Afternoon (2:00 PM - 5:00 PM):</h3>
                            <ul>
                                <li><strong>Vishram Ghat:</strong> This is the most sacred ghat on the Yamuna River, believed to be where Lord Krishna rested after defeating Kansa. You can take a holy dip or simply sit by the river and soak in the peaceful atmosphere. Consider a short boat ride.</li>
                                <li><strong>Gita Mandir (Birla Mandir):</strong> A beautiful temple with the entire Bhagavad Gita inscribed on its pillars.</li>
                            </ul>
                            <h3>Evening (5:00 PM onwards):</h3>
                            <ul>
                                <li><strong>Yamuna Aarti at Vishram Ghat:</strong> Witness the mesmerizing evening Aarti at Vishram Ghat, a truly divine and soulful experience as lamps are floated on the Yamuna.</li>
                                <li>Explore the bustling local markets of Mathura for religious artifacts, souvenirs, and local sweets.</li>
                            </ul>
                            <p><strong>Overnight Stay:</strong> Mathura (or Vrindavan if you prefer to check into your Vrindavan accommodation today itself).</p>
                        </div>

                        <div className="place-section">
                            <h2>Day 2: Vrindavan - Krishna's Playground</h2>
                            <p>Spend your second day in Vrindavan, the enchanting town where Krishna spent his formative years.</p>
                            <h3>Morning (8:00 AM - 1:00 PM):</h3>
                            <ul>
                                <li><strong>Banke Bihari Temple:</strong> One of the most famous and revered temples in Vrindavan, dedicated to Lord Krishna. The deity's eyes are partially covered, and the curtain is drawn and opened repeatedly to prevent devotees from being overwhelmed by its divine energy. Be prepared for crowds.</li>
                                <li><strong>ISKCON Vrindavan (Sri Krishna Balaram Mandir):</strong> A beautiful and serene temple complex known for its soulful bhajans, kirtans, and spiritual discourses. It also houses a museum and a restaurant (Govinda's) serving delicious vegetarian food.</li>
                                <li><strong>Nidhivan:</strong> A mystical grove believed to be the spot where Radha and Krishna perform Ras Leela every night. Locals believe no one should stay inside after sunset.</li>
                                <li><strong>Seva Kunj:</strong> Another sacred garden associated with Radha and Krishna's pastimes, known for its serene environment.</li>
                            </ul>
                            <h3>Lunch (1:00 PM - 2:00 PM):</h3>
                            <ul>
                                <li>Dine at a local restaurant or at Govinda's (ISKCON Temple) for a wholesome vegetarian meal.</li>
                            </ul>
                            <h3>Afternoon (2:00 PM - 6:00 PM):</h3>
                            <ul>
                                <li><strong>Prem Mandir:</strong> A magnificent white marble temple known for its stunning architecture, intricate carvings, and beautiful gardens. It depicts various scenes from Lord Krishna's life. The temple is especially enchanting in the evening with its elaborate lighting and musical fountains.</li>
                                <li><strong>Radha Raman Temple:</strong> An ancient temple known for its self-manifested deity of Lord Krishna.</li>
                                <li><strong>Keshi Ghat:</strong> A beautiful ghat on the Yamuna River where Lord Krishna is believed to have slayed the demon Keshi. You can take a holy dip or enjoy the peaceful river views.</li>
                            </ul>
                            <h3>Evening (6:00 PM onwards):</h3>
                            <ul>
                                <li>Return to Prem Mandir to witness the captivating light and sound show (check timings locally).</li>
                                <li>Explore the vibrant markets of Vrindavan for devotional items, traditional clothing, and sweets.</li>
                            </ul>
                            <p><strong>Overnight Stay:</strong> Vrindavan (or depart for your next destination).</p>
                        </div>

                        <div className="place-section">
                            <h2>Optional Day 3: Exploring Braj Beyond Mathura & Vrindavan</h2>
                            <p>If you have an extra day, consider visiting these significant sites:</p>
                            <ul>
                                <li><strong>Gokul:</strong> Where Krishna was secretly brought up by Yashoda and Nanda Baba to protect him from Kansa. Visit Nand Bhavan and other childhood spots.</li>
                                <li><strong>Govardhan Hill:</strong> A sacred hill lifted by Lord Krishna to protect the villagers from Lord Indra's wrath. Many devotees perform the 21 km Govardhan Parikrama (circumambulation) here. Visit Radha Kund and Kusum Sarovar nearby.</li>
                                <li><strong>Barsana:</strong> Radha Rani's birthplace, famous for the Radha Rani Temple and the unique Lathmar Holi celebration (if visiting during Holi).</li>
                            </ul>
                        </div>

                        <div className="place-section">
                            <h2>Travel Tips for Your Mathura & Vrindavan Tour</h2>
                            <ul>
                                <li><strong>Transportation:</strong>
                                    <ul>
                                        <li><strong>By Air:</strong> The nearest airport is Delhi (DEL), followed by Agra (AGR). From there, hire a cab or take a train/bus.</li>
                                        <li><strong>By Train:</strong> Mathura Junction (MTJ) is well-connected to major Indian cities.</li>
                                        <li><strong>By Road:</strong> Mathura and Vrindavan are well-connected by road to Delhi (approx. 3-4 hours) and Agra (approx. 1.5 hours). You can hire a private taxi, take a bus, or use app-based cabs.</li>
                                        <li><strong>Local Transport:</strong> Auto-rickshaws and e-rickshaws are readily available for inter-city travel between Mathura and Vrindavan, and for local sightseeing.</li>
                                    </ul>
                                </li>
                                <li><strong>Accommodation:</strong> Both Mathura and Vrindavan offer a range of accommodation, from budget-friendly dharamshalas and guesthouses to mid-range and some luxury hotels. Booking in advance, especially during festivals, is highly recommended.</li>
                                <li><strong>Dress Code:</strong> Dress modestly, especially when visiting temples. Covering your shoulders and knees is advisable.</li>
                                <li><strong>Footwear:</strong> Be prepared to remove your footwear at many temples. Wear comfortable shoes that are easy to slip on and off.</li>
                                <li><strong>Photography:</strong> Some temples may have restrictions on photography inside. Always check before clicking.</li>
                                <li><strong>Crowds:</strong> Expect crowds, especially during festivals and weekends. Maintain patience and be aware of your belongings.</li>
                                <li><strong>Food:</strong> Indulge in local vegetarian delicacies. Besides Peda and Lassi, try "bedai-jalebi" for breakfast.</li>
                                <li><strong>Connectivity:</strong> Mobile network coverage is generally good, but carrying a power bank is advisable due to extensive sightseeing.</li>
                            </ul>
                        </div>

                        <p>A journey to Mathura and Vrindavan is more than just sightseeing; it's an immersion into a timeless saga of devotion, love, and spiritual awakening. May your visit to Braj Bhoomi be filled with peace, joy, and divine blessings!</p>
                    </section>

                    <footer className="post-footer">
                        <p>Have you explored Mathura and Vrindavan? Share your favorite temples, experiences, or travel tips in the comments below!</p>
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

export default MathuraVrindavanTourBlog;