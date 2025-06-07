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
                                            src="/tour/badrinath-dham.png"
                                            alt="Badrinath Vishnu Temple Char Dham Yatra"
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
                                        <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>7 Nights | 8 Days
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>
                                        Badrinath & Char Dham, Uttarakhand
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; Comfortable SUV / Tempo Traveller
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
                                Embark on the divine Char Dham Yatra covering the sacred shrines of Badrinath, Kedarnath, Gangotri, and Yamunotri. This spiritual journey through the Himalayas is one of the most revered pilgrimages in India, attracting thousands of devotees every year.
                            </p>
                            <p>
                                Visit the holy Badrinath Vishnu Temple, set against the breathtaking backdrop of the Garhwal Himalayas, and explore the ancient temples, sacred rivers, and stunning landscapes of Uttarakhand. The yatra is not only a spiritual experience but also a chance to witness nature’s pristine beauty.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation at Pilgrim Guesthouses</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transport by SUV/Tempo Traveller</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Breakfast & Dinner</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Experienced Local Guide</div>
                                    <div><FaCheck style={{ color: 'green' }} /> All Permits & Entry Fees</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Uttarakhand</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Medical/Travel Insurance</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Optional Activities & Donations</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 8 Days Char Dham Yatra</h3>
                                    <h4><strong>Day 1: </strong>Arrival in Haridwar / Rishikesh</h4>
                                    <p>
                                        Arrive at Haridwar or Rishikesh. Meet your guide and transfer to overnight stay.
                                    </p>
                                    <h4><strong>Day 2: </strong>Haridwar to Barkot</h4>
                                    <p>
                                        Drive to Barkot, the base for Yamunotri pilgrimage, via Mussoorie.
                                    </p>
                                    <h4><strong>Day 3: </strong>Yamunotri Darshan & Barkot to Uttarkashi</h4>
                                    <p>
                                        Visit Yamunotri Temple and return to Barkot, then drive to Uttarkashi for overnight stay.
                                    </p>
                                    <h4><strong>Day 4: </strong>Uttarkashi to Gangotri & Return</h4>
                                    <p>
                                        Proceed to Gangotri Temple, return to Uttarkashi for night stay.
                                    </p>
                                    <h4><strong>Day 5: </strong>Uttarkashi to Guptkashi</h4>
                                    <p>
                                        Drive to Guptkashi en route to Kedarnath.
                                    </p>
                                    <h4><strong>Day 6: </strong>Kedarnath Darshan</h4>
                                    <p>
                                        Trek or take helicopter to Kedarnath, visit the temple, and return to Guptkashi.
                                    </p>
                                    <h4><strong>Day 7: </strong>Guptkashi to Badrinath</h4>
                                    <p>
                                        Drive to Badrinath, visit the temple and nearby attractions.
                                    </p>
                                    <h4><strong>Day 8: </strong>Badrinath to Haridwar / Rishikesh Departure</h4>
                                    <p>
                                        Drive back to Haridwar or Rishikesh for onward journey.
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
                                            {[['Sedan', '₹16/km'],
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
