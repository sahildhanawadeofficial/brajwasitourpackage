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
                                            src="/tour/gangotri-ganga-origin.png"
                                            alt="Gangotri Glacier - Origin of River Ganga"
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
                                        Gangotri, Uttarakhand
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; SUV / Tempo Traveller
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
                                Gangotri is the sacred origin point of the holy River Ganga, nestled deep in the Himalayas of Uttarakhand. The Gangotri Glacier, located at about 3,892 meters altitude, is revered by millions of pilgrims who visit every year for spiritual blessings and to witness the pristine beauty of the glacier and surrounding peaks.
                            </p>
                            <p>
                                The town of Gangotri serves as the base for trekking to the glacier and offers a spiritual experience alongside breathtaking Himalayan views. The Gangotri Temple dedicated to Goddess Ganga is a major pilgrimage site in the Char Dham Yatra and draws devotees seeking purification and peace.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation in Guesthouses / Hotels</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transportation by SUV / Tempo Traveller</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Guided Gangotri Temple Visit</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Gangotri</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses & Donations</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Trekking Gear & Optional Activities</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 3 Days Gangotri Pilgrimage</h3>
                                    <h4><strong>Day 1: </strong>Arrival & Temple Visit</h4>
                                    <p>
                                        Arrive at Gangotri, check into your accommodation, and visit the Gangotri Temple for evening aarti and rituals.
                                    </p>
                                    <h4><strong>Day 2: </strong>Glacier Trek & Spiritual Exploration</h4>
                                    <p>
                                        Trek to the Gangotri Glacier, the source of River Ganga. Explore the surroundings and soak in the spiritual and natural serenity.
                                    </p>
                                    <h4><strong>Day 3: </strong>Departure</h4>
                                    <p>
                                        After breakfast, check out and begin your journey back with beautiful memories of the Himalayas and spiritual rejuvenation.
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
                                            {[['SUV', '₹20/km'],
                                            ['Tempo Traveller', '₹25/km'],
                                            ['Innova', '₹22/km'],
                                            ['12 Seater Tempo Traveller', '₹27/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                            ['45 Seater Bus', 'Ask For Price'],
                                            ].map(([type, price], idx) => (
                                                <tr key={idx}>
                                                    <td>{type}</td>
                                                    <td>{price}</td>
                                                    <td>₹400/-</td>
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
