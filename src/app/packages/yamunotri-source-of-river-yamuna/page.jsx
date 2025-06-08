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
                                        src="/tour/yamunotri-yamuna-source.png"
                                        alt="Yamunotri Source of River Yamuna"
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
                                    <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>Yamunotri, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Shared Jeep / Private Taxi
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
                            Yamunotri, nestled in the Garhwal Himalayas, is the sacred origin of the Yamuna River, one of India&apos;s holiest rivers. It&apos;s an important pilgrimage site attracting devotees who trek through breathtaking mountain landscapes to reach the Yamunotri Temple, dedicated to Goddess Yamuna.
                        </p>
                        <p>
                            The trek offers stunning views of snow-capped peaks, hot springs, and dense forests. Pilgrims perform rituals at the temple and take a holy dip in the icy waters of the Yamuna&apos;s source to seek blessings and spiritual purification.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation during the trek</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Trekking & Pilgrimage</div>
                                <div><FaCheck style={{ color: 'green' }} /> Transportation to Trailhead</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals (Breakfast & Dinner)</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Uttarakhand</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Trekking Permits & Entry Fees</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 3 Days Yamunotri Pilgrimage</h3>
                                <h4><strong>Day 1: </strong>Arrival & Journey to Janki Chatti</h4>
                                <p>
                                    Arrive in Uttarakhand and proceed to Janki Chatti, the starting point of the trek to Yamunotri. Prepare for the next day&apos;s pilgrimage.
                                </p>
                                <h4><strong>Day 2: </strong>Trek to Yamunotri Temple</h4>
                                <p>
                                    Trek approximately 6 km to the Yamunotri Temple through scenic forest paths and mountain views. Visit the temple, take a holy dip in the hot springs, and perform rituals.
                                </p>
                                <h4><strong>Day 3: </strong>Return & Departure</h4>
                                <p>
                                    Trek back to Janki Chatti and depart for your onward journey with blessings and spiritual fulfillment.
                                </p>
                            </div>
                        </div>

                        {/* Pricing Table */}
                        <div className="mytable container">
                            <h3>Pricing for Transport Services</h3>
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
                                            ['Jeep', '₹20/km'],
                                            ['SUV', '₹18/km'],
                                            ['Sedan', '₹12/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                        ].map(([type, price], idx) => (
                                            <tr key={idx}>
                                                <td>{type}</td>
                                                <td>{price}</td>
                                                <td>₹300/-</td>
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
    );
};

export default Page;
