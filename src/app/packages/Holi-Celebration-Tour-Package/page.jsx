import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';

const Page = () => {
    return (
        <>
            <div className="col-lg-9">
                <div className="blog-page-left">
                    <div className="single-blog">

                        {/* Carousel */}
                        <div className="blog-image">
                            <div id="carouselExampleControls" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <Image
                                            className="d-block w-100"
                                            src="/tour/holi-celebration.png"
                                            alt="Holi Celebration Tour Mathura Vrindavan"
                                            width={1200}
                                            height={600}
                                        />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                        {/* Tour Info */}
                        <div className="blog-text">
                            <ul>
                                <li><strong><FaMapMarkerAlt /> Duration:</strong>&nbsp;&nbsp;2 to 5 Days (Flexible)</li>
                                <li><strong><FaClock /> Destination:</strong>&nbsp;&nbsp;Mathura, Vrindavan, Barsana, Nandgaon, Gokul</li>
                                <li><strong><FaCar /> Transport:</strong>&nbsp; Private Cab / Tempo Traveller / Coach</li>
                                <li><strong><FaUtensils /> Meal Plan:</strong>&nbsp; Breakfast & Dinner Included</li>
                            </ul>

                            {/* Description */}
                            <h2>Description :</h2>
                            <p>
                                Experience the most colorful celebration in the birthplace of Lord Krishna! Our Holi Celebration Tour Package offers a unique spiritual and cultural journey through Mathura, Vrindavan, Barsana, and Nandgaon during the festival of Holi.
                            </p>
                            <p>
                                Witness the famous Lathmar Holi in Barsana, Phoolon ki Holi at Banke Bihari Temple, and play Holi with natural colors in the streets of Vrindavan and Mathura. A truly divine and energetic experience perfect for photographers, spiritual seekers, and cultural explorers.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Hotel Stay</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Meals (Breakfast & Dinner)</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Guided Sightseeing to Holi Events</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Private AC Vehicle</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Air/Train Travel to Mathura</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Lunch & Personal Expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Extra Holi Clothing & Color Kits</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Sample Itinerary – Holi Tour</h3>

                                    <h4><strong>Day 1:</strong> Arrival in Mathura & Local Sightseeing</h4>
                                    <p>Visit Krishna Janmabhoomi, Dwarkadhish Temple & Vishram Ghat. Evening Aarti.</p>

                                    <h4><strong>Day 2:</strong> Barsana – Lathmar Holi Experience</h4>
                                    <p>Witness the traditional Lathmar Holi where women playfully hit men with sticks.</p>

                                    <h4><strong>Day 3:</strong> Nandgaon Holi & Vrindavan Temple Tour</h4>
                                    <p>Enjoy Holi celebrations in Nandgaon, then visit ISKCON, Banke Bihari & Prem Mandir.</p>

                                    <h4><strong>Day 4:</strong> Phoolon ki Holi & Holika Dahan</h4>
                                    <p>Participate in the flower-filled Holi in Vrindavan temples followed by Holika bonfire rituals at night.</p>

                                    <h4><strong>Day 5:</strong> Dhulandi Holi in Mathura Streets</h4>
                                    <p>Play Holi with colors in the streets of Mathura with locals, followed by departure.</p>
                                </div>
                            </div>

                            {/* Pricing Table */}
                            <div className="mytable container">
                                <h3>Pricing for Taxi/Cab Service</h3>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Taxi Type</th>
                                                <th>Price (Per Km)</th>
                                                <th>Driver Charges</th>
                                                <th>Enquiry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[['Sedan', '₹12/km'],
                                            ['Ertiga', '₹14/km'],
                                            ['Kia', '₹17/km'],
                                            ['Innova', '₹19/km'],
                                            ['Innova Crysta', '₹19/km'],
                                            ['12 Seater Tempo Traveller', '₹23/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                            ['45 Seater Bus', 'Ask For Price'],
                                            ].map(([type, price], idx) => (
                                                <tr key={idx}>
                                                    <td>{type}</td>
                                                    <td>{price}</td>
                                                    <td>₹300/-</td>
                                                    <td><button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquiry Now</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
