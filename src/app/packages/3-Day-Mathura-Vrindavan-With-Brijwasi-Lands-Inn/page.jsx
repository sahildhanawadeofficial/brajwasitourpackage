import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';
export const metadata = {
    title: "3-Day Mathura Vrindavan With Brijwasi Lands Inn",
    description: "Enjoy a 3-day spiritual retreat in Mathura and Vrindavan with premium stay at Brijwasi Lands Inn.",
    keywords: ["3-day Mathura tour", "Vrindavan trip", "Brijwasi Lands Inn", "Krishna temples"]
};

const Page = () => {
    return (
        <>
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
                                            src="/tour/brijwasi-lands-inn.png"
                                            alt="3 Day Mathura Vrindavan Tour with Brijwasi Lands Inn"
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
                                        <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>3 Days | 2 Nights
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>
                                        Mathura & Vrindavan
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; Sedan - SUV (Car)
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
                                Experience the divine charm of Mathura and Vrindavan over 3 days with comfortable accommodation at Brijwasi Lands Inn. This package offers a spiritual journey covering key temples, holy ghats, and cultural hotspots of the Braj region.
                            </p>
                            <p>
                                Visit the birthplace of Lord Krishna, stroll through vibrant markets, and enjoy devotional ceremonies that capture the essence of Braj’s rich heritage.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation at Brijwasi Lands Inn</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Guide Services</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transportation</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Breakfast & Dinner</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Mathura</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Optional Activities</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 3 Days Mathura & Vrindavan Tour</h3>
                                    <h4><strong>Day 1:</strong> Arrival and Mathura Darshan</h4>
                                    <p>
                                        Arrive in Mathura and check into Brijwasi Lands Inn. Visit Shri Krishna Janmabhoomi Temple, Dwarkadhish Temple, and the Yamuna river ghats.
                                    </p>

                                    <h4><strong>Day 2:</strong> Vrindavan Temples & Cultural Walk</h4>
                                    <p>
                                        Explore Banke Bihari Temple, ISKCON Vrindavan, Prem Mandir, and take a stroll through the vibrant local markets.
                                    </p>

                                    <h4><strong>Day 3:</strong> Local Exploration and Departure</h4>
                                    <p>
                                        Morning visit to Radha Kund and Shyam Kund followed by checkout and onward journey.
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
                                            {[['Sedan', '₹12/km'],
                                            ['Ertiga', '₹14/km'],
                                            ['Kia', '₹17/km'],
                                            ['Innova', '₹19/km'],
                                            ['Innova Crysta', '₹19/km'],
                                            ['12 Seater Tempo Traveller', '₹23/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                            ['45 Seater Bus', 'Ask For Price'],
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
        </>
    );
};

export default Page;
