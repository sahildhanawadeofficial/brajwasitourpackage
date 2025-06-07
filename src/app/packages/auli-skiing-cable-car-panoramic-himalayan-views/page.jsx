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
                                            src="/tour/auli-skiing-cable-car.png"
                                            alt="Auli Skiing Cable Car Panoramic Himalayan Views"
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
                                        Auli - Uttarakhand
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; Hatchback - Sedan - SUV (Car)
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
                                Experience the thrill of skiing in Auli, one of India’s premier winter destinations set against the stunning backdrop of the Himalayas. Auli offers pristine snow-covered slopes, panoramic mountain views, and an adventurous cable car ride that is among the longest in Asia.
                            </p>
                            <p>
                                Glide down snowy slopes, enjoy breathtaking views of Nanda Devi and other peaks, and explore the beautiful meadows and forests surrounding the town. The cable car ride offers a scenic and exciting way to reach Auli, providing unmatched views of the Himalayan ranges.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Ski Equipment & Training</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Cable Car Tickets</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation with Meals</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Local Sightseeing & Guide Services</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Auli</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Optional Adventure Activities</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 4 Days Auli Skiing Tour</h3>
                                    <h4><strong>Day 1: </strong>Arrival & Local Exploration</h4>
                                    <p>
                                        Arrive at Joshimath and transfer to Auli via the scenic cable car ride. Settle into your accommodation and enjoy the breathtaking views. Evening at leisure to explore the surroundings.
                                    </p>
                                    <h4><strong>Day 2: </strong>Skiing & Training</h4>
                                    <p>
                                        Begin your skiing lessons with expert trainers. Practice on beginner-friendly slopes and enjoy the snowy landscape.
                                    </p>
                                    <h4><strong>Day 3: </strong>Advanced Skiing & Sightseeing</h4>
                                    <p>
                                        Take on advanced skiing slopes or opt for a nature walk. Visit nearby viewpoints for panoramic Himalayan vistas.
                                    </p>
                                    <h4><strong>Day 4: </strong>Departure</h4>
                                    <p>
                                        After breakfast, check out and transfer back to Joshimath or your onward destination.
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
                                            ['Ertiga', '₹17/km'],
                                            ['Kia', '₹20/km'],
                                            ['Innova', '₹22/km'],
                                            ['Innova Crysta', '₹22/km'],
                                            ['12 Seater Tempo Traveller', '₹26/km'],
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
