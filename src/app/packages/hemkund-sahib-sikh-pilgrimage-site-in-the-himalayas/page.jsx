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
                                        src="/tour/hemkund-sahib.png"
                                        alt="Hemkund Sahib - Sikh Pilgrimage Site in the Himalayas"
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
                                    Hemkund Sahib, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; SUV / Jeep / Shared Taxi
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
                            Hemkund Sahib is a revered Sikh pilgrimage site situated at an altitude of approximately 4,632 meters in the Garhwal Himalayas of Uttarakhand. Nestled beside a serene glacial lake, the gurdwara is dedicated to Guru Gobind Singh Ji and attracts thousands of devotees annually who undertake the challenging trek to seek spiritual solace.
                        </p>
                        <p>
                            Surrounded by seven snow-capped peaks and pristine alpine meadows, Hemkund Sahib offers not just spiritual fulfillment but also breathtaking Himalayan views. The trek itself is a journey of endurance and devotion, passing through beautiful valleys and quaint villages.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation in Base Town</div>
                                <div><FaCheck style={{ color: 'green' }} /> Transport to Govindghat</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Trek to Hemkund Sahib</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Trekking Gear & Equipment</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses & Donations</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Uttarakhand</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 4 Days Hemkund Sahib Pilgrimage</h3>
                                <h4><strong>Day 1: </strong>Arrival & Govindghat</h4>
                                <p>
                                    Arrive in Uttarakhand and travel to Govindghat, the base point for the trek. Overnight stay in Govindghat.
                                </p>
                                <h4><strong>Day 2: </strong>Trek to Ghangaria</h4>
                                <p>
                                    Trek approximately 14 km from Govindghat to Ghangaria village, passing through scenic landscapes and quaint hamlets. Rest overnight in Ghangaria.
                                </p>
                                <h4><strong>Day 3: </strong>Hemkund Sahib Visit & Return to Ghangaria</h4>
                                <p>
                                    Early morning trek to Hemkund Sahib (6 km one way). Spend time at the gurdwara, then return to Ghangaria for overnight stay.
                                </p>
                                <h4><strong>Day 4: </strong>Return Journey</h4>
                                <p>
                                    Trek back to Govindghat and onward travel to your next destination.
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
                                        {[
                                            ['SUV', '₹22/km'],
                                            ['Jeep', '₹20/km'],
                                            ['Shared Taxi', '₹15/km'],
                                            ['12 Seater Tempo Traveller', '₹28/km'],
                                            ['Mini Bus', 'Ask For Price'],
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
    );
};

export default Page;
