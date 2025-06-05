// components/AboutUsSection.jsx
import Image from 'next/image'; // Importing Image component from Next.js
import Link from 'next/link';   // Importing Link component from Next.js

export default function AboutUsSection() {
    return (
        <section className="about-page-area section_70" style={{ padding: '70px 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-page-left">
                            <h2>About Us - Mathura Vrindavan Taxi Services</h2>

                            <p>
                                Mathura Vrindavan Taxi Services was founded in the year 2021.
                                Our taxi service company is based in Mathura, India.
                                The owner of our company is Madhav Kumar. We provide the best Taxi Service and Tour Packages services in Mathura.
                                Our service area is Pan India. Our company is well known for its quality services and experienced staff.
                            </p>

                            <h2>Quality service:</h2>
                            <p>
                                For taxi services, we have professional drivers who are trained and wear professional uniforms.
                                There are many cars and buses for the taxi services in Mathura such as Sedan, SUV, MUV, Tempotraveller, Mini Buses.
                                The seating capacity is from 4 seated to 45 seated.
                                We have lots of happy customers who are satisfied by our quality services.
                                We are happy and ready to aim for many more customers.
                            </p>
                            <p>
                                For further information, one can easily drop a mail directly to the company. The company's email is : {' '}
                                <Link href="mailto:info@mathuravrindavantaxiservices.com" >
                                    info@mathuravrindavantaxiservices.com
                                </Link>
                                .
                                Our contact number is:
                                <b>+91 9759071258</b>.
                            </p>
                            <h3>What we provide:</h3>
                            <p>
                                Personalized driver and vehicle on the basis of customer's demand. They can have vehicles from 4 seated to 45 seated depending on their need.
                                All sorts of tour packages on customers' demand. It can be anywhere in India and we assure them with great service so that they can come to us again.
                                The taxi services and {' '}
                                <Link href="/packages.html" > {/* Corrected malformed href */}
                                    Mathura tour packages
                                </Link>
                                {' '}of best quality service.
                                Guide services in any language you want. It can be Hindi, English and your native language.
                            </p>

                            <div className="about-page-call">
                                <div className="page-call-icon">
                                    <i className="fa fa-phone"></i> {/* Assumes Font Awesome is integrated */}
                                </div>
                                <div className="call-info">
                                    <p>Need any Help?</p>
                                    <h4>
                                        <Link href="tel:+919759071258" passHref legacyBehavior>
                                            <a>+91 9759071258</a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-page-right">
                            {/* Using Next.js Image component for optimized image loading */}
                            <Image
                                src="/img/about-page.webp" // Path relative to the `public` directory
                                alt="about page"
                                width={600} // Essential for Next.js Image optimization
                                height={400} // Essential for Next.js Image optimization (maintain aspect ratio)
                                // If you need it to fill the parent container, use 'fill' prop
                                // and ensure the parent has `position: relative` and set dimensions.
                                style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} // Responsive styling
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}