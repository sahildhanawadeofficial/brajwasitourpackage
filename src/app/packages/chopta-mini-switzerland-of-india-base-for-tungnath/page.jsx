'use client';

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
                                            src="/tour/chopta-mini-switzerland-tungnath.webp"
                                            alt="Chopta Mini Switzerland of India and Base for Tungnath"
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
                                        <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>2 Nights | 3 Days
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>
                                        Chopta, Uttarakhand
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; SUV / Jeep
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
                                Chopta, often called the "Mini Switzerland of India," is a breathtaking hill station located in the Garhwal region of Uttarakhand. Known for its lush meadows, dense forests, and panoramic views of the snow-capped Himalayan peaks, it’s a paradise for trekkers and nature lovers alike.
                            </p>
                            <p>
                                Serving as the base for the famous Tungnath temple trek—the highest Shiva temple in the world—Chopta offers stunning landscapes, diverse flora and fauna, and a peaceful environment to unwind. Whether you're trekking to Tungnath and Chandrashila or simply soaking in the scenic beauty, Chopta promises an unforgettable mountain experience.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation in Camps or Guesthouses</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transport by SUV / Jeep</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Breakfast & Dinner</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Guided Trek to Tungnath & Chandrashila</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Chopta</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Trekking Permits & Entry Fees</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses & Tips</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 3 Days Chopta & Tungnath Trek</h3>
                                    <h4><strong>Day 1: </strong>Arrival & Transfer to Chopta</h4>
                                    <p>
                                        Arrive in Chopta, check-in at your accommodation, and spend the evening relaxing amidst nature’s tranquility.
                                    </p>
                                    <h4><strong>Day 2: </strong>Tungnath Temple & Chandrashila Trek</h4>
                                    <p>
                                        Early morning trek to Tungnath temple, followed by an ascent to Chandrashila peak for mesmerizing sunrise views over the Himalayas. Return to Chopta for dinner and rest.
                                    </p>
                                    <h4><strong>Day 3: </strong>Leisure & Departure</h4>
                                    <p>
                                        Morning at leisure in Chopta. Check out and depart for your onward journey.
                                    </p>
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
                                            {[['SUV', '₹18/km'],
                                            ['Jeep', '₹20/km'],
                                            ['Sedan', '₹15/km'],
                                            ['Ertiga', '₹17/km'],
                                            ['Innova', '₹22/km'],
                                            ['12 Seater Tempo Traveller', '₹25/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                            ['45 Seater Bus', 'Ask For Price'],
                                            ].map(([type, price], idx) => (
                                                <tr key={idx}>
                                                    <td>{type}</td>
                                                    <td>{price}</td>
                                                    <td>₹400/-</td>
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
        </>
    );
};

export default Page;
