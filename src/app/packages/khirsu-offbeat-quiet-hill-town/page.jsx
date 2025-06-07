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
                                        src="/tour/khirsu-quiet-hill-town.png"
                                        alt="Khirsu - Offbeat Quiet Hill Town"
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
                                    Khirsu, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Private Car / Taxi
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
                            Khirsu is an offbeat, tranquil hill town nestled in the Pauri Garhwal district of Uttarakhand. Known for its serene environment and panoramic views of the Himalayas, Khirsu offers visitors a peaceful retreat away from the usual tourist hustle.
                        </p>
                        <p>
                            Surrounded by dense forests and apple orchards, this quiet destination is perfect for nature lovers and those seeking solitude. Enjoy mesmerizing sunrise and sunset views, explore the nearby trekking trails, and immerse yourself in the simplicity and charm of this hidden gem.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation in Khirsu</div>
                                <div><FaCheck style={{ color: 'green' }} /> Private transport for sightseeing</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                                <div><FaCheck style={{ color: 'green' }} /> Local sightseeing guided tours</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Khirsu</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Optional activities and tips</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 3 Days Khirsu Hill Town</h3>
                                <h4><strong>Day 1: </strong>Arrival & Relaxation</h4>
                                <p>
                                    Arrive in Khirsu, settle into your accommodation, and unwind amidst the peaceful surroundings. Enjoy the fresh mountain air and explore the nearby apple orchards.
                                </p>
                                <h4><strong>Day 2: </strong>Local Sightseeing & Nature Walks</h4>
                                <p>
                                    Experience the breathtaking panoramic views of the Himalayas at sunrise and sunset. Take guided walks through the forests, visit nearby temples, and enjoy the local flora and fauna.
                                </p>
                                <h4><strong>Day 3: </strong>Departure</h4>
                                <p>
                                    After breakfast, check out and depart for your onward journey or next destination.
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
