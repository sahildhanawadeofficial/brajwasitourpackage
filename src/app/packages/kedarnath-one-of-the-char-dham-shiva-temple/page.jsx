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
                                        src="/tour/kedarnath-dham.png"
                                        alt="Kedarnath - One of the Char Dham Shiva Temples"
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
                                    Kedarnath, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Jeep / Shared Taxi
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
                            Kedarnath is one of the most revered temples in India, dedicated to Lord Shiva and forming an essential part of the Char Dham pilgrimage circuit. Situated at a lofty altitude in the Garhwal Himalayas, Kedarnath Temple is surrounded by majestic snow-capped peaks and tranquil surroundings.
                        </p>
                        <p>
                            This ancient temple attracts thousands of devotees every year, especially during the pilgrimage season. The trek to Kedarnath is spiritually uplifting and offers breathtaking views of the Himalayan range. The temple and its environs are a blend of divine peace, stunning natural beauty, and rich cultural heritage.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation near Kedarnath</div>
                                <div><FaCheck style={{ color: 'green' }} /> Jeep/Taxi transport from Gaurikund to Kedarnath</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Temple Visit</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Gaurikund</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Optional activities and donations</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 3 Days Kedarnath Pilgrimage</h3>
                                <h4><strong>Day 1: </strong>Arrival at Gaurikund & Trek to Kedarnath</h4>
                                <p>
                                    Arrive at Gaurikund, the base point, and begin the 16 km trek or take a helicopter ride to Kedarnath. Check into accommodation and perform the evening aarti at the temple.
                                </p>
                                <h4><strong>Day 2: </strong>Temple Visit & Local Exploration</h4>
                                <p>
                                    Attend the morning prayers, explore the temple premises, and enjoy the serene Himalayan surroundings. Optionally visit nearby places like Bhairavnath Temple or Vasuki Tal.
                                </p>
                                <h4><strong>Day 3: </strong>Return Trek & Departure</h4>
                                <p>
                                    After breakfast, trek back to Gaurikund and depart for onward journey or next destination.
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
                                            ['Jeep', '₹25/km'],
                                            ['Shared Taxi', '₹15/km'],
                                            ['Innova', '₹20/km'],
                                            ['12 Seater Tempo Traveller', '₹30/km'],
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
