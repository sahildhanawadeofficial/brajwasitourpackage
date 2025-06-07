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
                                            src="/tour/haridwar-ganga-aarti.png"
                                            alt="Haridwar Tour"
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
                                        <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>1 Night | 2 Days
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>
                                        Haridwar and nearby spiritual sites
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; Hatchback - Sedan - SUV (Car)
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaUtensils /> Meal Plan:</strong>&nbsp; Breakfast
                                    </div>
                                </li>
                            </ul>

                            <h2>Description :</h2>
                            <p>
                                Start your spiritual journey to Haridwar from your preferred location. Reach Haridwar comfortably and immerse yourself in its sacred ambiance. Visit renowned temples like Mansa Devi, Chandi Devi, and Daksha Mahadev Temple. Relax and enjoy the serene views around the ghats and the holy Ganga river.
                            </p>
                            <p>
                                Experience the enchanting Ganga Aarti at Har Ki Pauri in the evening — a deeply spiritual and uplifting ritual. Spend the night in Haridwar and explore local markets and nearby attractions the following day before concluding your trip.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Guide Services</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Entrance Fees</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transportation</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Toll Tax, Driver Charges</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Flight & Train Tickets</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Camera Charges</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Room Service Fees</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 2 Days Haridwar Tour</h3>
                                    <h4><strong>Day 1: </strong>Arrival & Local Sightseeing</h4>
                                    <p>
                                        Arrive at Haridwar by morning or afternoon, depending on your travel plans. Visit temples like Mansa Devi and Chandi Devi, explore local markets, and in the evening attend the spiritual Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar.
                                    </p>
                                    <h4><strong>Day 2: </strong>Explore & Departure</h4>
                                    <p>
                                        Visit Bharat Mata Mandir, Sapt Rishi Ashram, or relax by the ghats. Later, check out and continue your onward journey from Haridwar.
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
                                            {[['Sedan', '₹11/km'],
                                            ['Ertiga', '₹13/km'],
                                            ['Kia', '₹16/km'],
                                            ['Innova', '₹18/km'],
                                            ['Innova Crysta', '₹18/km'],
                                            ['12 Seater Tempo Traveller', '₹22/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                            ['45 Seater Bus', 'Ask For Price'],
                                            ].map(([type, price], idx) => (
                                                <tr key={idx}>
                                                    <td>{type}</td>
                                                    <td>{price}</td>
                                                    <td>₹250/-</td>
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
