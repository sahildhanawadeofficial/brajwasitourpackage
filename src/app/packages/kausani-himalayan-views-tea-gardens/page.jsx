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
                                        src="/tour/kausani-himalayan-tea.png"
                                        alt="Kausani Himalayan Views and Tea Gardens"
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
                                    Kausani, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Car/Jeep
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
                            Kausani is a tranquil hill station famed for its breathtaking panoramic views of the Himalayan ranges including Nanda Devi, Trisul, and Panchachuli peaks. Often called the 'Switzerland of India,' it is also known for its lush tea gardens, cool climate, and peaceful environment.
                        </p>
                        <p>
                            Visitors can enjoy serene walks amidst verdant tea plantations, experience local Kumaoni culture, and witness spectacular sunrises and sunsets over the snow-capped mountains. Kausani is perfect for travelers seeking calm, nature, and spectacular Himalayan vistas away from crowded tourist spots.
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation in Kausani</div>
                                <div><FaCheck style={{ color: 'green' }} /> Transportation by Car/Jeep</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Local Sightseeing</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Kausani</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Entry Fees (if any)</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 3 Days Kausani Tour</h3>
                                <h4><strong>Day 1: </strong>Arrival & Local Sightseeing</h4>
                                <p>
                                    Arrive in Kausani and check into your accommodation. Explore local tea gardens and take in the stunning Himalayan views. Visit the Anasakti Ashram and local markets.
                                </p>
                                <h4><strong>Day 2: </strong>Panoramic Himalayan Views & Nature Walks</h4>
                                <p>
                                    Early morning visit to the famous Sunset Point for panoramic mountain views. Enjoy nature walks through tea plantations and visit the Kausani Tea Estate. Optional visit to Rudradhari Falls.
                                </p>
                                <h4><strong>Day 3: </strong>Relax & Departure</h4>
                                <p>
                                    Spend the morning at leisure enjoying the serene environment, then check out and depart for your onward journey.
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
                                            ['Sedan', '₹13/km'],
                                            ['SUV', '₹18/km'],
                                            ['Innova', '₹20/km'],
                                            ['12 Seater Tempo Traveller', '₹25/km'],
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
