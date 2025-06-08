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
                                            src="/tour/dhanaulti-camping.png"
                                            alt="Dhanaulti Eco Parks and Camping Experience"
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
                                        Dhanaulti, Uttarakhand
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; SUV / Sedan
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
                                Dhanaulti, a tranquil hill station in Uttarakhand, is famous for its pristine eco-parks, serene landscapes, and camping experiences under the stars. Surrounded by dense forests of deodar and oak trees, it offers a peaceful retreat away from the crowded tourist spots.
                            </p>
                            <p>
                                Explore the Eco Park with nature trails, enjoy camping in comfortable tents, and soak in breathtaking views of the Himalayas. The fresh mountain air and lush greenery make Dhanaulti an ideal spot for nature lovers and adventure seekers alike.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation in Tented Camps or Eco Resorts</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Guided Eco Park Visits & Nature Trails</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transportation by SUV / Sedan</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Dhanaulti</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses & Camping Gear Rentals</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Optional Adventure Activities</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 3 Days Dhanaulti Eco Parks & Camping</h3>
                                    <h4><strong>Day 1: </strong>Arrival & Settle In</h4>
                                    <p>
                                        Arrive at Dhanaulti and check into your eco-friendly accommodation or tented camp. Relax and enjoy the peaceful surroundings.
                                    </p>
                                    <h4><strong>Day 2: </strong>Explore Eco Parks & Nature Trails</h4>
                                    <p>
                                        Visit the Dhanaulti Eco Park, trek through nature trails, and experience bird watching and local flora. Evening campfire and stargazing at the campsite.
                                    </p>
                                    <h4><strong>Day 3: </strong>Leisure & Departure</h4>
                                    <p>
                                        Enjoy a leisurely morning, take in the fresh mountain air, and check out for your onward journey.
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
                                            {[['Sedan', '₹15/km'],
                                            ['SUV', '₹18/km'],
                                            ['Ertiga', '₹17/km'],
                                            ['Innova', '₹22/km'],
                                            ['12 Seater Tempo Traveller', '₹25/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                            ['45 Seater Bus', 'Ask For Price'],
                                            ].map(([type, price], idx) => (
                                                <tr key={idx}>
                                                    <td>{type}</td>
                                                    <td>{price}</td>
                                                    <td>₹350/-</td>
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
