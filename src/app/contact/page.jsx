import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';

const ContactPage = () => {
    return (
        <>
            <Breadcrumb />

            <section className="gauto-contact-area section_70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="contact-left">
                                <h3>Get in touch</h3>
                                {/*
                                  Note: For a simple form directly submitting to an external PHP script,
                                  keeping action and method is fine. For more complex forms with client-side
                                  validation or API interactions, you'd typically use `useState` to manage
                                  input values and an `onSubmit` handler to prevent default submission and
                                  send data via fetch/axios.
                                */}
                                <form
                                    name="contactForm"
                                    role="form"
                                    method="post"
                                    action="https://www.mathuravrindavantaxiservices.com/send-enquiry-main.php"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input type="text" placeholder="Your Name" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input type="email" placeholder="Email Address" name="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input type="text" placeholder="Subject" name="subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input type="tel" placeholder="Phone Number" name="phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="single-contact-field">
                                                <textarea placeholder="Write here your message" name="message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="single-contact-field">
                                                <button type="submit" className="gauto-theme-btn">
                                                    <i className="fa fa-paper-plane"></i> Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-right">
                                <h3>Contact information</h3>
                                <div className="contact-details">
                                    <p>
                                        <i className="fa fa-map-marker"></i> 35-A Mayur Vihar, Dholi Pyau Road,
                                        <br /> {/* Added <br /> for line break */}
                                        Mathura (U.P.) 281001
                                    </p>
                                    <div className="single-contact-btn">
                                        <h4>Email Us</h4>
                                        <a href="mailto:info@mathuravrindavantaxiservices.com">info@mathuravrindavantaxiservices.com</a> {/* Changed href to mailto: */}
                                    </div>
                                    <div className="single-contact-btn">
                                        <h4>Call Us</h4>
                                        <a href="tel:+919759071258">+919759071258</a> {/* Changed href to tel: */}
                                    </div>
                                    <div className="social-links-contact">
                                        <h4>Follow Us:</h4>
                                        <ul>
                                            <li><a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#" aria-label="Pinterest"><i className="fa fa-pinterest"></i></a></li>
                                            <li><a href="#" aria-label="Skype"><i className="fa fa-skype"></i></a></li>
                                            <li><a href="#" aria-label="Vimeo"><i className="fa fa-vimeo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="footer-bottom-area99">
                {/*
                  WARNING: The iframe src "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.791381195055!2d82.714759!3d20.996818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9d58284b057e319!2sMathura-Vrindavan%20taxi%20service!5e0!3m2!1sen!2sin!4v1636717249673!5m2!1sen!2sin"
                  is highly unusual and likely incorrect for a standard Google Maps embed.
                  It might not work or could pose security risks.
                  RECOMMENDATION: Use a proper Google Maps Embed API URL.
                  Go to Google Maps, find your location, click 'Share', then 'Embed a map',
                  and copy the iframe src. It will look something like:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!..."
                */}
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.791381195055!2d82.714759!3d20.996818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9d58284b057e319!2sMathura-Vrindavan%20taxi%20service!5e0!3m2!1sen!2sin!4v1636717249673!5m2!1sen!2sin" // <-- REPLACE THIS SRC
                width="100%"
                height="450"
                style={{ border: 0 }} // Inline style in React uses camelCase and an object
                allowFullScreen=""
                loading="lazy"
                title="Our Location on Google Maps" // Add a title for accessibility
            ></iframe>
        </>
    );
};

export default ContactPage;