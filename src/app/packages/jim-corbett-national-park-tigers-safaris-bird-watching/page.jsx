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
                                        src="/tour/jim-corbett-national-park.webp"
                                        alt="Jim Corbett National Park Tigers Safaris Bird Watching"
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
                                    Jim Corbett National Park, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Jeep Safari & Car
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
                            Jim Corbett National Park is India’s oldest and most famous wildlife sanctuary, renowned for its population of Bengal tigers, diverse flora and fauna, and breathtaking landscapes. Nestled in the foothills of the Himalayas, it offers thrilling safari experiences to spot tigers, elephants, deer, and a wide variety of bird species in their natural habitat.
                        </p>
                        <p>
                            This park is a paradise for wildlife enthusiasts, photographers, and nature lovers. Apart from tiger safaris, it offers excellent opportunities for bird watching, with over 600 species recorded here. Explore dense forests, riverbanks, and grasslands while immersing yourself in the rich biodiversity of the region.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation</div>
                                <div><FaCheck style={{ color: 'green' }} /> Jeep Safari Permits</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Tours & Bird Watching</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Entry Fees for Park</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Jim Corbett</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 4 Days Jim Corbett National Park Tour</h3>
                                <h4><strong>Day 1: </strong>Arrival & Check-in</h4>
                                <p>
                                    Arrive at Jim Corbett and check into your resort or lodge. Relax and prepare for the wildlife adventures ahead.
                                </p>
                                <h4><strong>Day 2: </strong>Morning & Evening Jeep Safaris</h4>
                                <p>
                                    Embark on early morning and late afternoon jeep safaris to spot Bengal tigers, elephants, and other wildlife. Enjoy guided bird watching sessions in between.
                                </p>
                                <h4><strong>Day 3: </strong>Nature Walks & Safari</h4>
                                <p>
                                    Explore the park’s trails on nature walks and another jeep safari. Visit nearby riverbanks and watch for rare birds and animals.
                                </p>
                                <h4><strong>Day 4: </strong>Departure</h4>
                                <p>
                                    After breakfast, check out and depart with unforgettable memories of your wildlife experience.
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
                                            ['Sedan', '₹15/km'],
                                            ['SUV', '₹20/km'],
                                            ['Innova', '₹22/km'],
                                            ['12 Seater Tempo Traveller', '₹28/km'],
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
