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
                                        src="/tour/rishikesh-aarti-rafting.png"
                                        alt="Rishikesh Yoga Capital Ganga Aarti Rafting"
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
                                    <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>Rishikesh, Uttarakhand
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
                            Rishikesh, known as the Yoga Capital of the World, is a vibrant spiritual town situated on the banks of the holy Ganges River. It offers a perfect mix of spirituality, adventure, and natural beauty. From early morning yoga sessions to the mesmerizing Ganga Aarti at Triveni Ghat, Rishikesh is an experience that rejuvenates the body and soul.
                        </p>
                        <p>
                            Adventure seekers can indulge in thrilling white-water rafting on the Ganges, trekking to nearby waterfalls, or exploring the quaint cafes and markets. Whether you seek peace through meditation or excitement through adventure sports, Rishikesh has it all.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation in Rishikesh</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Yoga Sessions</div>
                                <div><FaCheck style={{ color: 'green' }} /> Transportation within Itinerary</div>
                                <div><FaCheck style={{ color: 'green' }} /> Breakfast & Dinner</div>
                                <div><FaCheck style={{ color: 'green' }} /> Rafting Activity</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Rishikesh</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Optional Activities & Tips</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 3 Days Rishikesh Tour</h3>
                                <h4><strong>Day 1: </strong>Arrival & Ganga Aarti</h4>
                                <p>
                                    Arrive in Rishikesh and check into your hotel. Attend the evening Ganga Aarti at Triveni Ghat, witnessing the beautiful ritual by the river.
                                </p>
                                <h4><strong>Day 2: </strong>Yoga & Adventure</h4>
                                <p>
                                    Participate in early morning yoga and meditation sessions. Later, enjoy white-water rafting on the Ganges followed by a visit to iconic temples and local markets.
                                </p>
                                <h4><strong>Day 3: </strong>Leisure & Departure</h4>
                                <p>
                                    Spend your morning at leisure exploring cafes or the Beatles Ashram before checking out and departing.
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
