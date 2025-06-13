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
                                            src="/tour/braj-nandgaon.png"
                                            alt="8 Day Braj 84 Kosh Yatra"
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
                                        <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>8 Days | 7 Nights
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>
                                        Braj Region (Mathura, Vrindavan, Barsana, Nandgaon, Govardhan, Gokul, and nearby sacred sites)
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; Sedan - SUV - Tempo Traveller
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
                                The 8-Day Braj 84 Kosh Yatra offers a comprehensive spiritual pilgrimage covering all sacred sites with additional time for relaxed exploration, cultural immersion, and optional activities.
                            </p>
                            <p>
                                Travelers can enjoy the serene beauty and rich heritage of Braj while experiencing traditional rituals and festivals with a more leisurely schedule.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation with Breakfast & Dinner</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transportation throughout the Yatra</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Professional Guide Services</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Entry Fees to Sacred Sites</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Starting Point</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses & Optional Activities</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Meals Other Than Breakfast & Dinner</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 8 Days Braj 84 Kosh Yatra</h3>
                                    <h4><strong>Day 1:</strong> Arrival at Mathura & Temple Visits</h4>
                                    <p>Check-in and visit Shri Krishna Janmabhoomi and Dwarkadhish Temples.</p>

                                    <h4><strong>Day 2:</strong> Vrindavan Highlights</h4>
                                    <p>Explore Banke Bihari, ISKCON, Prem Mandir, and attend evening Aarti.</p>

                                    <h4><strong>Day 3:</strong> Barsana & Nandgaon Pilgrimage</h4>
                                    <p>Visit Radha’s birthplace Barsana and Krishna’s childhood home Nandgaon.</p>

                                    <h4><strong>Day 4:</strong> Govardhan Parikrama</h4>
                                    <p>Perform the traditional circumambulation of Govardhan Hill with spiritual guidance.</p>

                                    <h4><strong>Day 5:</strong> Gokul and Surrounding Sacred Places</h4>
                                    <p>Tour Gokul and other sacred sites linked to Krishna’s early life.</p>

                                    <h4><strong>Day 6:</strong> Lesser-Known Temples & Cultural Immersion</h4>
                                    <p>Visit hidden gems and enjoy devotional music and local culture.</p>

                                    <h4><strong>Day 7:</strong> Leisure & Optional Activities</h4>
                                    <p>Day at leisure for shopping, local sightseeing, or rest.</p>

                                    <h4><strong>Day 8:</strong> Final Darshan & Departure</h4>
                                    <p>Morning darshan followed by check-out and onward journey.</p>
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
