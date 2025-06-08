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
                                        src="/tour/jageshwar-temples.png"
                                        alt="Jageshwar Cluster of Ancient Shiva Temples"
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
                                    Jageshwar, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Car / SUV
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
                            Jageshwar is a historic site renowned for its cluster of over 100 ancient stone temples dedicated primarily to Lord Shiva, set amidst dense cedar forests and scenic Himalayan foothills. These temples date back to between the 7th and 12th centuries and showcase exquisite Nagara-style architecture, making it one of the most important Shiva pilgrimage sites in Uttarakhand.
                        </p>
                        <p>
                            The peaceful surroundings, combined with the spiritual aura and architectural grandeur, provide visitors a rare glimpse into India's rich cultural and religious heritage. It’s an ideal destination for history buffs, architecture enthusiasts, and devotees alike.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation</div>
                                <div><FaCheck style={{ color: 'green' }} /> Local Transport</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Temple Tours</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Entrance Fees (if any)</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Jageshwar</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 3 Days Jageshwar Temple Tour</h3>
                                <h4><strong>Day 1: </strong>Arrival & Local Sightseeing</h4>
                                <p>
                                    Arrive at Jageshwar and check into your accommodation. Begin exploring the ancient temples including the Jageshwar Dham, Dandeshwar, and Vaitrayan temple complexes.
                                </p>
                                <h4><strong>Day 2: </strong>Temple Circuit & Nature Walks</h4>
                                <p>
                                    Continue your temple exploration with guided tours of the Shiva temples and enjoy nature walks amidst cedar forests and mountain views.
                                </p>
                                <h4><strong>Day 3: </strong>Departure</h4>
                                <p>
                                    After breakfast, check out and depart for your onward destination with memories of a serene spiritual journey.
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
                                            ['Sedan', '₹12/km'],
                                            ['SUV', '₹18/km'],
                                            ['Innova', '₹20/km'],
                                            ['12 Seater Tempo Traveller', '₹25/km'],
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
