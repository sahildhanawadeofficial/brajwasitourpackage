import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";


const Footer = () => {
  return (
    <>
      {/* WhatsApp Button (Left) */}
      <a
        href="https://api.whatsapp.com/send?phone=9634656654&text=Hello"
        target="_blank"
        className="float-button whatsapp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="icon" />
      </a>

      {/* Call Button (Right) */}
      <a href="tel:+919634656654" className="float-button call" title="Call Us">
        <MdPhoneInTalk className="icon" />
      </a>

      {/* Footer */}
      <footer className="gauto-footer-area">
        <div className="footer-top-area">
          <div className="container">
            <div className="row">
              {/* Footer Logo and Description */}
              <div className="col-lg-5">
                <div className="single-footer">
                  <div className="footer-logo">
                    <Link href="/">
                      <img
                        src="/images/yatra-uk-logo2.jpeg"
                        alt="footer-logo"
                      />
                    </Link>
                  </div>
                  <p>
                    Launched in 2015, Uttarakhand-Yatra Taxi services in Uttarakhand offers highly
                    professional & premium services for all types of occasions and guests. We have
                    luxury taxi with well trained & groomed drivers. Special supervision by our
                    agent during trip.
                  </p>
                  <div className="ffollow">
                    <h3>Follow us</h3>
                    <p>Join and Follow us, Get Daily Discount. Thank You!</p>
                    <br />
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/Mathura-Vrindavan-Taxi-Services-109828825158132"
                          target="_blank"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/gotaxibooking/" target="_blank">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/brajmohan-kumar-07261b247"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/MathuraTaxi" target="_blank">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://in.pinterest.com/gotaxibooking/" target="_blank">
                          <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                      </li>
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
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/service">Service</Link></li>
                    <li><a href="#" data-toggle="modal" data-target="#exampleModal">Taxi / Car Booking</a></li>
                    <li><Link href="/packages">Packages</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/payment">Payment</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                  </ul>
                  <a
                    href="http://www.dmca.com/Protection/Status.aspx?ID=b2d53945-c8cd-4138-9068-de518442e955"
                    title="DMCA.com Protection Status"
                    className="dmca-badge"
                  >
                    <img
                      src="https://i.ibb.co/QRr8nVM/dmca-badge-w100-5x1-01.png"
                      alt="DMCA.com Protection Status"
                    />
                  </a>
                </div>
              </div>

              {/* Top Taxi/Car Links */}
              <div className="col-lg-2 col-6">
                <div className="single-footer quick_links">
                  <h3>Top Taxi / Car</h3>
                  <ul className="quick-links">
                    <li><Link href="/packages/char-dham-trour">Chardham Yatra -  Yamunotri, Gangotri, Kedarnath, and Badrinath</Link></li>
                    <li><Link href="/packages/yamunotri-source-of-river-yamuna">Yamunotri – Source of River Yamuna</Link></li>
                    <li><Link href="/packages/gangotri-origin-of-river-ganga">Gangotri – Origin of River Ganga</Link></li>
                    <li><Link href="/packages/kedarnath-tour-2024">Kedarnath – One of the Char Dham, Shiva Temple</Link></li>
                    <li><Link href="/packages/badrinath-tour">Badrinath – Vishnu Temple, Char Dham</Link></li>
                    <li><Link href="/packages/haridwar-ganga-aarti-har-ki-pauri-temples">Haridwar – Ganga Aarti, Har Ki Pauri, Temples</Link></li>
                    <li><Link href="/packages/rishikesh-yoga-capital-ganga-aarti-rafting">Rishikesh – Yoga Capital, Ganga Aarti, Rafting</Link></li>
                    <li><Link href="/packages/jageshwar-cluster-of-ancient-shiva-temples">Jageshwar – Ancient Shiva Temples</Link></li>
                    <li><Link href="/packages/hemkund-sahib-sikh-pilgrimage-site-in-the-himalayas">Hemkund Sahib – Sikh Pilgrimage</Link></li>
                    <li><Link href="/packages/nainital-lakes-boating-mall-road-ropeway">Nainital – Lakes & Ropeway</Link></li>
                    <li><Link href="/packages/mussoorie-queen-of-hills-kempty-falls-mall-road">Mussoorie – Queen of Hills</Link></li>
                    <li><Link href="/packages/almora-culture-views-peaceful-town">Almora – Culture & Views</Link></li>
                    <li><Link href="/packages/ranikhet-forests-golf-course-temples">Ranikhet – Golf Course & Temples</Link></li>
                  </ul>

                </div>
              </div>

              {/* Address Section */}
              <div className="col-lg-3">
                <div className="single-footer">
                  <div className="footer-address">
                    <h3>Head office</h3>
                    <p>
                      Janambhoomi Link Road<span>Uttarakhand,  281004</span>
                    </p>
                    <ul>
                      <li>Phone: 9634656654</li>
                      <li>Whatsapp: 9634656654</li>
                      <li>Email: yatraukheaven@gmail.com</li>
                    </ul>
                    <br />
                    <div className="map-here">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.1988571938296!2d77.64614227424518!3d27.494190384862854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397373c0d8a3703d%3A0xc08eb069397f3292!2sJaswant%20Taxi%20Service!5e0!3m2!1sen!2sin!4v1747672956736!5m2!1sen!2sin"
                        width="100%"
                        height="120"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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
                  <p>
                    Copyrights © 2024 <i className="fa fa-heart"></i> Gotaxi Booking{' '}
                    <a href="#">All Rights Reserved</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright12">
                  <p>
                    Radhey <a href="#">Radhey</a>
                  </p>
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
