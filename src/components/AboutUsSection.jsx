import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsSection() {
    return (
        <section className="about-page-area section_70" style={{ padding: '70px 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-page-left">
                            <h2>About Us – Brajwasi Tour Packages</h2>

                            <p>
                                <strong>Brajwasi Tour Packages</strong> is your trusted travel partner for spiritual and cultural tours in the Braj region —
                                encompassing <strong>Mathura, Vrindavan, Barsana, Nandgaon, Gokul, and Govardhan</strong>. Since 2021, we've served thousands of pilgrims
                                and travelers in discovering the divine essence of Shri Krishna's leelas and temples.
                            </p>

                            <h2>Why Choose Us:</h2>
                            <p>
                                We offer personalized tour packages, reliable transport, and experienced local guides who know every sacred ghat, temple, and hidden gem in Braj.
                                Our fleet includes well-maintained <strong>sedans, SUVs, MUVs, and Tempo Travellers</strong> — ideal for individuals, families, or large groups.
                            </p>
                            <p>
                                Whether you're traveling from <strong>Delhi, Agra, Jaipur, Lucknow</strong> or anywhere in India, we arrange smooth travel, darshan,
                                and accommodations to make your Braj journey meaningful and hassle-free.
                            </p>

                            <h3>Our Services Include:</h3>
                            <ul>
                                <li>Mathura Vrindavan Tour Packages (1-day to multi-day)</li>
                                <li>Pickup/drop from Delhi, Agra, and local railway stations</li>
                                <li>Guided tours for Barsana, Nandgaon, Govardhan Parikrama</li>
                                <li>Special Holi, Janmashtami, and festival tour arrangements</li>
                                <li>Hotel stays included in selected packages</li>
                            </ul>

                            <p>
                                Have questions? Email us at {' '}
                                <Link href="mailto:brijwasi.tours@gmail.com">
                                    brijwasi.tours@gmail.com
                                </Link>
                                {' '} or call us at <b>+91 8126990023</b>.
                            </p>

                            <div className="about-page-call">
                                <div className="page-call-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="call-info">
                                    <p>Need any help?</p>
                                    <h4>
                                        <Link href="tel:+918126990023" passHref legacyBehavior>
                                            <a>+91 8126990023</a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-page-right">
                            <Image
                                src="/img/about-page.webp"
                                alt="Brajwasi Tour Packages"
                                width={600}
                                height={400}
                                style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
