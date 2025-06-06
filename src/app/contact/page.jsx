'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { toast } from 'react-toastify';
// Assuming 'bootstrap/dist/css/bootstrap.min.css' is imported globally or in a layout file
// If not, ensure it's imported correctly for the styles to apply.

const ContactPage = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    // State for loading and displaying messages to the user
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    // Generic handler for all form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        setLoading(true); // Set loading to true to disable button
        setMessage(''); // Clear previous messages
        setIsError(false); // Reset error state

        try {
            const response = await fetch('/api/mail', { // Send to your Next.js API route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send formData as JSON
            });

            const result = await response.json(); // Parse the JSON response from your API

            if (response.ok) { // Check if the response status is 2xx
                toast.success('Inquiry sent! We will contact you soon.')
                setMessage(result.message || "Thank you for your message! We'll be connecting with you very soon.");
                setIsError(false);
                // Reset form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                });
            } else {
                setMessage(result.error || "Failed to send message. Please try again.");
                setIsError(true);
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setMessage("Network error. Please try again later.");
            setIsError(true);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <>
            <Breadcrumb />

            <section className="gauto-contact-area section_70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="contact-left">
                                <h3>Get in touch</h3>
                                <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    name="name"
                                                    value={formData.name} // Controlled component
                                                    onChange={handleChange} // Update state on change
                                                    required // Make field required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input
                                                    type="email" // Use type="email" for better validation
                                                    placeholder="Email Address"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input
                                                    type="text"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input
                                                    type="tel" // Use type="tel" for phone numbers
                                                    placeholder="Phone Number"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="single-contact-field">
                                                <textarea
                                                    placeholder="Write here your message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="single-contact-field">
                                                <button type="submit" className="gauto-theme-btn" disabled={loading}>
                                                    {loading ? (
                                                        <>
                                                            <i className="fa fa-spinner fa-spin"></i> Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <i className="fa fa-paper-plane"></i> Send Message
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* Display feedback message */}
                                {message && (
                                    <div className={`mt-3 alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
                                        {message}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-right">
                                <h3>Contact information</h3>
                                <div className="contact-details">
                                    <p>
                                        <i className="fa fa-map-marker"></i> 35-A Mayur Vihar, Dholi Pyau Road,
                                        <br /> Mathura (U.P.) 281001
                                    </p>
                                    <div className="single-contact-btn">
                                        <h4>Email Us</h4>
                                        <a href="mailto:info@mathuravrindavantaxiservices.com">info@mathuravrindavantaxiservices.com</a>
                                    </div>
                                    <div className="single-contact-btn">
                                        <h4>Call Us</h4>
                                        <a href="tel:+919759071258">+919759071258</a>
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
                {/* WARNING: The iframe src "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.791381195055!2d82.714759!3d20.996818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9d58284b057e319!2sMathura-Vrindavan%20taxi%20service!5e0!3m2!1sen!2sin!4v1636717249673!5m2!1sen!2sin"
                    is highly unusual and likely incorrect for a standard Google Maps embed.
                    It might not work or could pose security risks.
                    
                    RECOMMENDATION: Use a proper Google Maps Embed API URL.
                    Go to Google Maps, find your location, click 'Share', then 'Embed a map',
                    and copy the iframe src. It will look something like:
                    "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=35-A+Mayur+Vihar,..."
                */}
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8778848417937!2d77.6749968751515!3d27.575806676101915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371c667e6f83b%3A0x63359d9c22e4d0d!2s35-A%2C%20Mayur%20Vihar%2C%20Dholi%20Pyau%20Road%2C%20Mathura%2C%20Uttar%20Pradesh%20281001%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" // REPLACE WITH YOUR ACTUAL GOOGLE MAPS EMBED URL
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location on Google Maps"
            ></iframe>
        </>
    );
};

export default ContactPage;