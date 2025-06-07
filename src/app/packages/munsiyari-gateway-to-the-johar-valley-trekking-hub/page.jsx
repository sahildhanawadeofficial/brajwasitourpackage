import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';

const Page = () => {
    return (
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
                                        src="/tour/munsiyari-johar-valley-trekking.png"
                                        alt="Munsiyari - Gateway to the Johar Valley & Trekking Hub"
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
                            <li>
                                <div>
                                    <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>3 Nights | 4 Days
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>
                                    Munsiyari, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Private Taxi / Jeep
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaUtensils /> Meal Plan:</strong>&nbsp; Breakfast & Dinner
                                </div>
                            </li>
                        </ul>

                        <h2>Description :</h2>
                        <p>
                            Munsiyari is the serene gateway to the Johar Valley, known for its pristine beauty and as a major trekking hub in Uttarakhand. Nestled amidst snow-capped Himalayan peaks, it offers panoramic views, lush meadows, and rich cultural heritage of the local Kumaoni tribes.
                        </p>
                        <p>
                            Trekkers and nature lovers come here to explore famous trails like the Milam Glacier trek, which starts from Munsiyari, and to experience the peaceful mountain lifestyle. The vibrant local markets and traditional Kumaoni cuisine add a unique charm to the visit.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation in Munsiyari</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Trekking Tours</div>
                                <div><FaCheck style={{ color: 'green' }} /> Local Transportation</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Munsiyari</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses & Trekking Gear</div>
                                <div><FaTimes style={{ color: 'red' }} /> Optional Activities</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 4 Days Munsiyari Trekking Experience</h3>
                                <h4><strong>Day 1: </strong>Arrival & Acclimatization</h4>
                                <p>
                                    Arrive at Munsiyari, settle into your accommodation, and take a gentle walk around the town to acclimatize and enjoy the stunning views.
                                </p>
                                <h4><strong>Day 2: </strong>Local Sightseeing & Preparation</h4>
                                <p>
                                    Explore nearby villages and meadows. Meet your trekking guides and prepare your gear for the next day&apos;s adventure.
                                </p>
                                <h4><strong>Day 3: </strong>Guided Trekking</h4>
                                <p>
                                    Embark on a guided trek to scenic spots like the Milam Glacier base or other popular trails, surrounded by alpine flora and snow peaks.
                                </p>
                                <h4><strong>Day 4: </strong>Leisure & Departure</h4>
                                <p>
                                    Spend the morning relaxing before checking out and continuing your onward journey.
                                </p>
                            </div>
                        </div>

                        {/* Pricing Table */}
                        <div className="mytable container">
                            <h3>Pricing for Taxi/Jeep Service</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Vehicle Type</th>
                                            <th>Price (Per Km)</th>
                                            <th>Driver Charges</th>
                                            <th>Enquiry</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Sedan', '₹12/km'],
                                            ['Jeep', '₹20/km'],
                                            ['SUV', '₹17/km'],
                                            ['Innova', '₹19/km'],
                                            ['12 Seater Tempo Traveller', '₹23/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                        ].map(([type, price], idx) => (
                                            <tr key={idx}>
                                                <td>{type}</td>
                                                <td>{price}</td>
                                                <td>₹300/-</td>
                                                <td><button className="btn btn-danger btn-sm">Enquiry Now</button></td>
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
    );
};

export default Page;
