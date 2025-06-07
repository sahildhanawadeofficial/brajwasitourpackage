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
                                            src="/tour/chaukori-tea-gardens-himalaya-views.webp"
                                            alt="Chaukori Tea Gardens and Himalaya Views"
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
                                        Chaukori, Uttarakhand
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
                                Chaukori is a peaceful hill station in Uttarakhand renowned for its sprawling tea gardens and spectacular panoramic views of the snow-capped Himalayas. Nestled in the Kumaon region, it offers a tranquil retreat away from city life.
                            </p>
                            <p>
                                Wander through lush green tea plantations, enjoy fresh mountain air, and soak in breathtaking sunrise and sunset views over peaks like Nanda Devi, Panchachuli, and Trishul. Ideal for nature lovers, photographers, and those seeking a quiet getaway.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation in Cozy Hill Resorts</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transport by SUV / Sedan</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Breakfast & Dinner</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Local Sightseeing & Guided Walks</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Uttarakhand</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Entry Fees & Optional Activities</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 3 Days Chaukori Tea Gardens & Himalaya Views</h3>
                                    <h4><strong>Day 1: </strong>Arrival & Relaxation</h4>
                                    <p>
                                        Arrive at Chaukori and check-in to your resort. Spend the day relaxing and enjoying the serene surroundings and fresh mountain air.
                                    </p>
                                    <h4><strong>Day 2: </strong>Tea Garden Walks & Sightseeing</h4>
                                    <p>
                                        Explore the vast tea gardens, take guided nature walks, and visit scenic viewpoints for spectacular Himalayan panoramas. Capture stunning sunrise and sunset moments.
                                    </p>
                                    <h4><strong>Day 3: </strong>Leisure & Departure</h4>
                                    <p>
                                        Morning at leisure with optional strolls around the village. Check out and depart for your onward journey.
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
                                            {[['Sedan', '₹13/km'],
                                            ['Ertiga', '₹15/km'],
                                            ['Kia', '₹18/km'],
                                            ['Innova', '₹20/km'],
                                            ['Innova Crysta', '₹20/km'],
                                            ['12 Seater Tempo Traveller', '₹24/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                            ['45 Seater Bus', 'Ask For Price'],
                                            ].map(([type, price], idx) => (
                                                <tr key={idx}>
                                                    <td>{type}</td>
                                                    <td>{price}</td>
                                                    <td>₹350/-</td>
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
