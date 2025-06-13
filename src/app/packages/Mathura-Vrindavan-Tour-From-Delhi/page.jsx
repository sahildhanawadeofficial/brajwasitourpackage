import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';

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
                                            src="/tour/from-delhi.png"
                                            alt="Mathura Vrindavan Tour From Delhi"
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
                                <li><strong><FaMapMarkerAlt /> Duration:</strong>&nbsp;&nbsp;1 Day or 2 Days (Customizable)</li>
                                <li><strong><FaClock /> Destination:</strong>&nbsp;&nbsp;Mathura, Vrindavan, Gokul (From Delhi)</li>
                                <li><strong><FaCar /> Transport:</strong>&nbsp; AC Sedan, SUV or Tempo Traveller</li>
                                <li><strong><FaUtensils /> Meal Plan:</strong>&nbsp; Optional (Breakfast & Lunch Add-on)</li>
                            </ul>

                            {/* Description */}
                            <h2>Description :</h2>
                            <p>
                                Explore the spiritual heart of Braj Bhoomi with our same-day or overnight **Mathura-Vrindavan Tour from Delhi**. Visit sacred temples, ghats, and holy sites directly connected to the life of Lord Krishna. Perfect for weekend travelers, spiritual seekers, and families looking for a divine getaway.
                            </p>
                            <p>
                                This tour covers key attractions such as Krishna Janmabhoomi, ISKCON Temple, Banke Bihari Temple, Prem Mandir, and the beautiful town of Gokul. A private vehicle ensures comfort and flexibility in your journey.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> AC Private Vehicle</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Experienced Driver</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Temple Visit Guidance</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Toll, Parking, State Taxes</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Meals (unless added)</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Entry Fees (if any)</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Sample Itinerary – 1 Day Tour</h3>

                                    <h4><strong>5:30 AM:</strong> Pick-up from Delhi</h4>
                                    <p>Early morning departure from Delhi via private AC vehicle.</p>

                                    <h4><strong>9:00 AM:</strong> Arrival in Mathura</h4>
                                    <p>Visit Krishna Janmabhoomi Temple and Dwarkadhish Temple.</p>

                                    <h4><strong>11:00 AM:</strong> Proceed to Vrindavan</h4>
                                    <p>Explore ISKCON Temple, Banke Bihari Temple, and have lunch.</p>

                                    <h4><strong>3:00 PM:</strong> Prem Mandir & Local Sights</h4>
                                    <p>Visit the stunning Prem Mandir and enjoy the evening light show (optional).</p>

                                    <h4><strong>5:00 PM:</strong> Departure to Delhi</h4>
                                    <p>Return to Delhi by late evening (~9 PM).</p>
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
