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
                                        src="/tour/mussoorie-queen-of-hills.webp"
                                        alt="Mussoorie - Queen of Hills, Kempty Falls & Mall Road"
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
                                    Mussoorie, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Private Taxi / SUV
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
                            Mussoorie, often called the &apos;Queen of Hills,&apos; is a charming hill station in Uttarakhand known for its scenic beauty, pleasant climate, and vibrant culture. Popular attractions include the stunning Kempty Falls, bustling Mall Road with shops and eateries, and panoramic views of the Himalayan ranges.
                        </p>
                        <p>
                            Visitors can stroll along Mall Road, enjoy local cuisine, explore nearby viewpoints like Gun Hill, and relax amidst pine forests. Mussoorie&apos;s natural beauty and colonial charm make it an ideal getaway for families, couples, and solo travelers alike.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation in Mussoorie</div>
                                <div><FaCheck style={{ color: 'green' }} /> Sightseeing Tours</div>
                                <div><FaCheck style={{ color: 'green' }} /> Transportation within Itinerary</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Mussoorie</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Optional Adventure Activities</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 3 Days Mussoorie Trip</h3>
                                <h4><strong>Day 1: </strong>Arrival & Mall Road Exploration</h4>
                                <p>
                                    Arrive at Mussoorie and check into your hotel. Spend the evening strolling along Mall Road, shopping, and sampling local snacks.
                                </p>
                                <h4><strong>Day 2: </strong>Kempty Falls & Local Sightseeing</h4>
                                <p>
                                    Visit Kempty Falls, enjoy the refreshing waterfalls, and explore nearby attractions like Camel&apos;s Back Road and Gun Hill viewpoint.
                                </p>
                                <h4><strong>Day 3: </strong>Leisure & Departure</h4>
                                <p>
                                    Relax in the morning, take a short nature walk or visit local markets before checking out and departing.
                                </p>
                            </div>
                        </div>

                        {/* Pricing Table */}
                        <div className="mytable container">
                            <h3>Pricing for Taxi/SUV Service</h3>
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
                                            ['Sedan', '₹12/km'],
                                            ['SUV', '₹17/km'],
                                            ['Innova', '₹19/km'],
                                            ['Jeep', '₹20/km'],
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
