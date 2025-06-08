'use client';

import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import {
    FaMapMarkerAlt,
    FaClock,
    FaCar,
    FaUtensils,
    FaCheck,
    FaTimes,
} from 'react-icons/fa';

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
                                        src="/tour/badrinath-dham.png"
                                        alt="Badrinath Vishnu Temple"
                                        width={1200}
                                        height={600}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Basic Tour Info */}
                    <div className="blog-text">
                        <h2>Badrinath Tour Package</h2>
                        <p><strong>Duration:</strong> 3 Nights | 4 Days</p>
                        <p><strong>Price Starting From:</strong> ₹6,500.00</p>

                        {/* Quick Info */}
                        <div className="my-4">
                            <h4>Quick Info :</h4>
                            <ul>
                                <li><strong>Route:</strong> Haridwar – Pipalkoti – Badrinath – Devprayag – Rishikesh – Haridwar</li>
                                <li><strong>Duration:</strong> 3 Nights & 4 Days</li>
                                <li><strong>Start Point:</strong> Haridwar</li>
                                <li><strong>Endpoint:</strong> Haridwar</li>
                            </ul>
                        </div>

                        {/* Overview */}
                        <div className="my-4">
                            <h4>Overview :</h4>
                            <p>
                                Discover the beauty of the Outer Himalayan foothills & depart from Haridwar/Rishikesh to embark on this tour which takes you on a cultural & historical journey. Become a part of the ultimate religious trip to one of the Char Dhams – Badrinath.
                            </p>
                            <p>
                                These places hold high regard among Hindu pilgrims seeking ‘Moksha’ and serenity. Visit the famous Badrinath temple (over 1,200 years old) located near the Mandakini River, explore Rudraprayag (the confluence of Alaknanda and Mandakini), and enjoy shopping at Rishikesh local market including Ram Jhula and Laxman Jhula.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="my-4">
                            <h4>Highlights :</h4>
                            <ul>
                                <li>Marvel at the beautiful location of Badrinath Temple and soak in the captivating views.</li>
                                <li>Visit historical temples and gain a sense of spiritual bliss.</li>
                            </ul>
                        </div>

                        {/* Itinerary */}
                        <div className="my-4">
                            <h3>Itinerary</h3>

                            <h4><strong>Day 1:</strong> Haridwar to Pipalkoti (240 kms)</h4>
                            <p>
                                Transfer from Haridwar/Rishikesh to Pipalkoti in a private vehicle. Enjoy scenic Ganga views, halt at Devprayag (confluence of Alaknanda and Bhagirathi), and Srinagar for meals. Overnight stay at hotel in Pipalkoti.
                            </p>

                            <h4><strong>Day 2:</strong> Pipalkoti – Badrinath – Pipalkoti (140 kms)</h4>
                            <p>
                                Visit Baniyakund, Joshimath, Govindghat, Hanuman Chatti, then Badrinath Temple and Mana Village. Join the evening aarti. Return for dinner and stay.
                            </p>

                            <h4><strong>Day 3:</strong> Pipalkoti – Rudraprayag/Srinagar – Rishikesh (220 kms)</h4>
                            <p>
                                Wake up for a thrilling Ganga rafting experience, cliff jumping, and lunch at Maggie Point. Reach Neem Beach. Dinner and overnight stay in Rishikesh.
                            </p>

                            <h4><strong>Day 4:</strong> Rishikesh – Haridwar</h4>
                            <p>
                                After breakfast, check out and drive back to Haridwar. Trip ends with spiritual and adventurous memories.
                            </p>
                        </div>

                        {/* Pricing */}
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
                                        {[
                                            ['Sedan', '₹16/km'],
                                            ['Ertiga', '₹18/km'],
                                            ['Kia', '₹21/km'],
                                            ['Innova', '₹23/km'],
                                            ['Innova Crysta', '₹23/km'],
                                            ['12 Seater Tempo Traveller', '₹27/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                            ['45 Seater Bus', 'Ask For Price'],
                                        ].map(([type, price], idx) => (
                                            <tr key={idx}>
                                                <td>{type}</td>
                                                <td>{price}</td>
                                                <td>₹400/-</td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquiry Now</button>
                                                </td>
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
