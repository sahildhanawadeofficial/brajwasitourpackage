// components/LathmarHoliBlog.jsx (or pages/blog/lathmar-holi-barsana-nandgaon.jsx)

import React from 'react';
import Head from 'next/head'; // For SEO metadata
import Image from 'next/image'; // For optimized images

// Make sure your style.scss is imported somewhere in your global styles or layout
// For example, in pages/_app.js: import '../styles/style.scss';
export const metadata = {
    title: "Lathmar Holi: Barsana and Nandgaon Experience",
    description: "Dive into the colorful traditions of Lathmar Holi celebrated in Barsana and Nandgaon, the villages of Radha and Krishna.",
    keywords: ["Lathmar Holi", "Barsana Holi", "Nandgaon festival", "Braj Holi celebration"]
};

const LathmarHoliBlog = () => {
    const blogData = {
        id: 4, // Assuming a new ID for a new blog post
        title: "Lathmar Holi in Barsana and Nandgaon: The Playful Battle of Love",
        excerpt: "Experience the vibrant and unique Lathmar Holi in Barsana and Nandgaon, where women playfully beat men with sticks, reenacting the divine legend of Radha and Krishna.",
        imageUrl: "/tour/holi-celebration.png", // Example image path, ensure it exists in your public directory
        slug: "lathmar-holi-barsana-nandgaon",
    };

    return (
        <div className="blog-container col-lg-9">
            <Head>
                <title>{blogData.title}</title>
                <meta name="description" content={blogData.excerpt} />
                <meta name="keywords" content="Lathmar Holi, Barsana, Nandgaon, Holi, festival of colors, Radha Krishna, Uttar Pradesh, India, unique celebration, pilgrimage, cultural festival" />
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
                        <p>Holi, the festival of colors, is celebrated with immense joy and enthusiasm across India. However, in the twin towns of Barsana and Nandgaon, located in the Mathura district of Uttar Pradesh, Holi takes on a uniquely spirited and playful form known as Lathmar Holi. This vibrant celebration, deeply rooted in the legends of Lord Krishna and Radha, is a spectacle of playful mock battles, devotional fervor, and a riot of colors.</p>

                        <div className="place-section">
                            <h2>1. The Legend Behind Lathmar Holi</h2>
                            <p>The tradition of Lathmar Holi is intrinsically linked to the divine love story of Radha and Krishna. According to folklore, Lord Krishna, who resided in Nandgaon, would often visit Barsana, Radha's village, to playfully tease Radha and her friends, the Gopis, by drenching them in colors. In retaliation, Radha and the Gopis would playfully chase Krishna and his friends away with sticks (lathis).</p>
                            <p>This lighthearted exchange evolved into the annual Lathmar Holi celebration, where the men of Nandgaon visit Barsana, and the women of Barsana greet them with colors and "lathis," re-enacting the ancient playful encounters between Krishna and Radha.</p>
                        </div>

                        <div className="place-section">
                            <h2>2. Where and When is Lathmar Holi Celebrated?</h2>
                            <p>Lathmar Holi is primarily celebrated in Barsana and Nandgaon, two towns near Mathura, Uttar Pradesh, which are significant pilgrimage sites in the Braj region associated with Lord Krishna's childhood.</p>
                            <ul>
                                <li><strong>Barsana:</strong> This is Radha's birthplace and is home to the famous Radha Rani Temple. The first day of Lathmar Holi typically sees men from Nandgaon visiting Barsana.</li>
                                <li><strong>Nandgaon:</strong> This is Lord Krishna's childhood home. On the day following Barsana's Lathmar Holi, men from Barsana visit Nandgaon to continue the playful tradition.</li>
                            </ul>
                            <p>The festivities usually take place a few days before the main Holi festival (Phalguni Purnima), typically in the Hindu month of Phalguna (February-March). The exact dates vary each year according to the Hindu lunar calendar.</p>
                        </div>

                        <div className="place-section">
                            <h2>3. How is Lathmar Holi Celebrated?</h2>
                            <p>The celebration of Lathmar Holi is a multi-day event filled with unique rituals and exuberant energy:</p>
                            <ul>
                                <li><strong>Laddu Mar Holi:</strong> A day or two before the main Lathmar Holi, the festivities often begin with "Laddu Mar Holi" at the Radha Rani Temple in Barsana. Sweets (laddus) are thrown by devotees in a joyous prelude to the main event.</li>
                                <li><strong>Barsana's Lathmar Holi (The Women's Festival):</strong> On the designated day, men from Nandgaon arrive in Barsana, singing provocative songs to tease the women. The women of Barsana, armed with long bamboo sticks (lathis), playfully chase and hit the men, who try to defend themselves with shields. The atmosphere is filled with laughter, vibrant colors (gulal), and devotional songs (bhajans). Men who are "caught" might be playfully dressed in women's clothing and made to dance.</li>
                                <li><strong>Nandgaon's Lathmar Holi (The Men's Turn):</strong> The following day, the men of Barsana travel to Nandgaon, where they are met with a similar playful reception from the women of Nandgaon. The celebrations continue with the same enthusiasm, colors, and mock battles.</li>
                            </ul>
                            <p>Throughout the festivities, the air resonates with chants of "Radhe Radhe" and "Jai Shri Krishna." Traditional sweets like gujiya and malpua, along with the intoxicating thandai (often mixed with bhang), add to the festive spirit.</p>
                        </div>

                        <div className="place-section">
                            <h2>4. Tips for Visitors</h2>
                            <p>Witnessing Lathmar Holi is an unforgettable cultural experience. Here are some tips if you plan to attend:</p>
                            <ul>
                                <li><strong>Arrive Early:</strong> The towns get extremely crowded, especially around the temples. Arrive early to get a good viewing spot.</li>
                                <li><strong>Wear Old Clothes:</strong> You will undoubtedly be covered in colors. Wear clothes you don't mind getting stained.</li>
                                <li><strong>Protect Yourself:</strong> Wear sunglasses to protect your eyes from colors. Consider a cap or bandana for your hair. Use plastic covers or waterproof pouches for your phone and camera.</li>
                                <li><strong>Respect Traditions:</strong> While the festival is playful, remember its religious significance. Be mindful and respectful of local customs.</li>
                                <li><strong>Stay Hydrated:</strong> Carry a water bottle, as the excitement and crowds can be draining.</li>
                                <li><strong>Be Aware of Surroundings:</strong> In crowded areas, always be aware of your belongings and personal space.</li>
                                <li><strong>Embrace the Spirit:</strong> Most importantly, immerse yourself in the joyful chaos, participate respectfully, and enjoy the unique energy of this divine celebration.</li>
                            </ul>
                        </div>

                        <p>Lathmar Holi is a truly unique manifestation of the universal festival of colors, blending mythological tales with vibrant community participation. It's a testament to the enduring love between Radha and Krishna and the playful spirit that permeates the Braj region. If you seek an extraordinary Holi experience, Barsana and Nandgaon offer a spectacle unlike any other.</p>
                    </section>

                    <footer className="post-footer">
                        <p>Have you experienced the exhilarating Lathmar Holi? Share your memories and tips in the comments below!</p>
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

export default LathmarHoliBlog;