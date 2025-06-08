import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsSection() {
    return (
        <section className="about-page-area section_70" style={{ padding: '70px 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-page-left">
                            <h2>About Us – Uttarakhand Yatra Taxi Services</h2>

                            <p>
                                Uttarakhand Yatra Taxi Services is a trusted name in pilgrimage and hill travel across the majestic state of Uttarakhand.
                                Since our inception in 2021, we've helped thousands of yatris and tourists explore sacred destinations including the <strong>Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)</strong>, as well as scenic hill stations like <strong>Mussoorie, Nainital, Auli, Chopta, Valley of Flowers</strong> and more.
                            </p>

                            <h2>Why Choose Us:</h2>
                            <p>
                                We offer reliable taxi services with experienced, local drivers who know the mountains inside out. Our fleet includes well-maintained <strong>Sedans, SUVs, MUVs, Tempo Travellers, and Buses</strong> with seating from 4 to 45. Safety, comfort, and punctuality are our top priorities.
                            </p>
                            <p>
                                Whether you're starting your yatra from <strong>Delhi, Mumbai, Kolkata, Ahmedabad, Chennai</strong>, or any part of India, we provide flexible pickup and custom travel itineraries to meet your needs.
                            </p>

                            <h3>Our Services Include:</h3>
                            <ul>
                                <li>Char Dham Yatra packages with end-to-end support</li>
                                <li>Pickup/drop from any city or airport in India</li>
                                <li>Local sightseeing tours in Rishikesh, Haridwar, and other major locations</li>
                                <li>Multi-lingual guide availability (Hindi, English, others on request)</li>
                                <li>Fully customizable tour packages</li>
                            </ul>

                            <p>
                                Have questions? Email us at {' '}
                                <Link href="mailto:yatraukheaven@gmail.com">
                                    yatraukheaven@gmail.com
                                </Link>
                                {' '} or call us at <b>+91 9634656654</b>.
                            </p>

                            <div className="about-page-call">
                                <div className="page-call-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="call-info">
                                    <p>Need any help?</p>
                                    <h4>
                                        <Link href="tel:+919634656654" passHref legacyBehavior>
                                            <a>+91 9634656654</a>
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
                                alt="Char Dham Yatra Taxi Services"
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
