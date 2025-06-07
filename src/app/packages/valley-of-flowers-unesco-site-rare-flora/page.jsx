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
                                        src="/tour/valley-of-flowers-unesco-site-rare-flora.webp"
                                        alt="Valley of Flowers UNESCO Site Rare Flora"
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
                                    <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>Valley of Flowers, Uttarakhand
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
                            The Valley of Flowers is a spectacular UNESCO World Heritage Site located in the Indian Himalayas. Famous for its vibrant meadows blanketed with rare and endemic alpine flowers, this valley bursts into color during the monsoon season, attracting nature lovers and trekkers from all over the world.
                        </p>
                        <p>
                            Nestled at high altitude, the valley is also home to diverse fauna including the elusive snow leopard and Himalayan monal. Trekking through this pristine natural sanctuary offers breathtaking views, peaceful surroundings, and an unforgettable experience of the Himalayan wilderness.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation during Trek</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Trekking</div>
                                <div><FaCheck style={{ color: 'green' }} /> Transportation to Trailhead</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals (Breakfast & Dinner)</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Uttarakhand</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Trekking Gear</div>
                                <div><FaTimes style={{ color: 'red' }} /> Permits & Entry Fees</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 3 Days Valley of Flowers Trek</h3>
                                <h4><strong>Day 1: </strong>Arrival & Trek to Ghangaria</h4>
                                <p>
                                    Arrive in Govindghat and start the trek to Ghangaria, the base camp for the Valley of Flowers. Enjoy the serene surroundings and prepare for the next day&apos;s adventure.
                                </p>
                                <h4><strong>Day 2: </strong>Exploration of Valley of Flowers</h4>
                                <p>
                                    Trek into the Valley of Flowers to witness the spectacular floral diversity and stunning mountain views. Spend ample time photographing and exploring the UNESCO-listed site.
                                </p>
                                <h4><strong>Day 3: </strong>Return & Departure</h4>
                                <p>
                                    Trek back to Govindghat and depart for your onward journey with unforgettable memories.
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
