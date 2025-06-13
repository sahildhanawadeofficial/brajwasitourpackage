import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <>
      {/* WhatsApp Button (Left) */}
      <a
        href="https://api.whatsapp.com/send?phone=918126990023&text=Hello, I’m interested in Brajwasi Tour Packages"
        target="_blank"
        className="float-button whatsapp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="icon" />
      </a>

      {/* Call Button (Right) */}
      <a href="tel:+918126990023" className="float-button call" title="Call Us">
        <MdPhoneInTalk className="icon" />
      </a>

      {/* Footer */}
      <footer className="gauto-footer-area">
        <div className="footer-top-area">
          <div className="container">
            <div className="row">
              {/* Brand Info */}
              <div className="col-lg-5">
                <div className="single-footer">
                  <div className="footer-logo">
                    <Link href="/">
                      <img src="/images/brajwasi-logo.jpeg" alt="Brajwasi Tour Logo" />
                    </Link>
                  </div>
                  <p>
                    Brajwasi Tour Packages specializes in devotional and spiritual journeys across Mathura, Vrindavan,
                    Barsana, and the entire Braj region. From 84 Kosh Yatras to Holi festivals and personalized car rentals,
                    we ensure a seamless, sacred, and comfortable travel experience for every devotee.
                  </p>
                  <div className="ffollow">
                    <h3>Follow us</h3>
                    <p>Stay connected for tour updates, festival packages & exclusive offers!</p>
                    <br />
                    <ul>
                      <li><a href="https://facebook.com" target="_blank"><i className="fa fa-facebook" /></a></li>
                      <li><a href="https://instagram.com" target="_blank"><i className="fa fa-instagram" /></a></li>
                      <li><a href="https://linkedin.com" target="_blank"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter" /></a></li>
                      <li><a href="https://pinterest.com" target="_blank"><i className="fa fa-pinterest" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-2 col-6">
                <div className="single-footer quick_links">
                  <h3>Quick Links</h3>
                  <ul className="quick-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/tour-packages">Tour Packages</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact-us">Contact</Link></li>
                    <li><Link href="/payment">Payment</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>

              {/* Tour Highlights */}
              <div className="col-lg-2 col-6">
                <div className="single-footer quick_links">
                  <h3>Top Tours</h3>
                  <ul className="quick-links">
                    <li><Link href="/packages/84-kosh-yatra-5-day">84 Kosh Yatra – 5 Day</Link></li>
                    <li><Link href="/packages/holi-special-package">Holi Special Tour</Link></li>
                    <li><Link href="/packages/barsana-lathmar-holi">Barsana Lathmar Holi</Link></li>
                    <li><Link href="/packages/janmashtami-celebration">Janmashtami Celebration</Link></li>
                    <li><Link href="/packages/vrindavan-car-rental">Vrindavan Car Rental</Link></li>
                    <li><Link href="/packages/custom-tour">Customized Braj Tour</Link></li>
                  </ul>
                </div>
              </div>

              {/* Contact Details */}
              <div className="col-lg-3">
                <div className="single-footer">
                  <div className="footer-address">
                    <h3>Contact Info</h3>
                    <p>
                      Brajwasi Tours Office,<br />
                      Vrindavan
                    </p>
                    <ul>
                      <li>Phone: +91 8126990023</li>
                      <li>WhatsApp: +91 8126990023</li>
                      <li>Email: choudharyyogesh752@gmail.com</li>
                    </ul>
                    <br />
                    <div className="map-here">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7028.228546137225!2d77.6832!3d27.5806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371d4a9f49e85%3A0x9fdbd8782f59d1f!2sPrem%20Mandir!5e0!3m2!1sen!2sin!4v1718112235675"
                        width="100%"
                        height="120"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright">
                  <p>© 2024 Brajwasi Tours. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="copyright12">
                  <p>जय श्री राधे <a href="#">Radhe Radhe</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
