'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { toast } from 'react-toastify';
import {
    FaUser,
    FaPhone,
    FaEnvelope,
    FaGlobe,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaPinterest,
    FaSkype,
    FaVimeo,
    FaPaperPlane,
    FaSpinner
} from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setIsError(false);

        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Inquiry sent! We will contact you soon.');
                setMessage(result.message || "Thank you for your message! We'll be connecting with you very soon.");
                setIsError(false);
                setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
            } else {
                setMessage(result.error || "Failed to send message. Please try again.");
                setIsError(true);
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setMessage("Network error. Please try again later.");
            setIsError(true);
        } finally {
            setLoading(false);
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
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-contact-field">
                                                <input
                                                    type="email"
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
                                                    type="tel"
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
                                                        <><FaSpinner className="fa-spin" /> Sending...</>
                                                    ) : (
                                                        <><FaPaperPlane /> Send Message</>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {message && (
                                    <div className={`mt-3 alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
                                        {message}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-right">
                                <h3>Contact Information</h3>
                                <div className="contact-details">
                                    <p><FaUser /> Birendra Singh</p>
                                    <p><FaPhone /> +91 9634655654 / +91 8630420363</p>
                                    <p><FaEnvelope /> <a href="mailto:yatraukheaven@gmail.com">yatraukheaven@gmail.com</a></p>
                                    <p><FaGlobe /> <a href="https://www.yatrauk.in" target="_blank" rel="noopener noreferrer">www.yatrauk.in</a></p>

                                    <div className="social-links-contact">
                                        <h4>Follow Us:</h4>
                                        <ul>
                                            <li><a href="#" aria-label="Facebook"><FaFacebook /></a></li>
                                            <li><a href="#" aria-label="Twitter"><FaTwitter /></a></li>
                                            <li><a href="#" aria-label="LinkedIn"><FaLinkedin /></a></li>
                                            <li><a href="#" aria-label="Pinterest"><FaPinterest /></a></li>
                                            <li><a href="#" aria-label="Skype"><FaSkype /></a></li>
                                            <li><a href="#" aria-label="Vimeo"><FaVimeo /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8778848417937!2d77.6749968751515!3d27.575806676101915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371c667e6f83b%3A0x63359d9c22e4d0d!2s35-A%2C%20Mayur%20Vihar%2C%20Dholi%20Pyau%20Road%2C%20Mathura%2C%20Uttar%20Pradesh%20281001%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
