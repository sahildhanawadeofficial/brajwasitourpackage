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
                                        src="/tour/lansdowne-pine-forests.png"
                                        alt="Lansdowne - Quiet Military Town & Pine Forests"
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
                                    Lansdowne, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Private Taxi / Car
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
                            Lansdowne is a quiet, picturesque hill station and military cantonment nestled in the Garhwal region of Uttarakhand. Known for its pristine pine forests, tranquil atmosphere, and colonial charm, it offers a peaceful escape from city life.
                        </p>
                        <p>
                            The town&apos;s lush green surroundings, serene walking trails, and colonial-era architecture create a perfect setting for nature lovers and those seeking solitude. Visit the War Memorial, Bhulla Lake, and enjoy leisurely strolls amidst towering pine trees while breathing in the fresh mountain air.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation in Lansdowne</div>
                                <div><FaCheck style={{ color: 'green' }} /> Private Transport for Local Sightseeing</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Nature Walks & Tours</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Lansdowne</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Optional Activities and Tips</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 3 Days Lansdowne Tour</h3>
                                <h4><strong>Day 1: </strong>Arrival & Leisure</h4>
                                <p>
                                    Arrive at Lansdowne and check into your accommodation. Relax and explore the calm surroundings, take a peaceful walk near Bhulla Lake.
                                </p>
                                <h4><strong>Day 2: </strong>Local Sightseeing & Nature Walks</h4>
                                <p>
                                    Visit the War Memorial, stroll through the pine forests, and explore the quaint town. Enjoy bird watching and photography opportunities in this tranquil setting.
                                </p>
                                <h4><strong>Day 3: </strong>Departure</h4>
                                <p>
                                    After breakfast, check out and proceed to your next destination or return journey.
                                </p>
                            </div>
                        </div>

                        {/* Pricing Table */}
                        <div className="mytable container">
                            <h3>Pricing for Taxi/Private Car Service</h3>
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
                                            ['12 Seater Tempo Traveller', '₹23/km'],
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
