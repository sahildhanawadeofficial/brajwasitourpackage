import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';
export const metadata = {
    title: "7-Day Braj 84 Kosh Yatra",
    description: "Join our 7-day Braj 84 Kosh Yatra and visit major religious sites in Mathura, Vrindavan, and surrounding areas.",
    keywords: ["7-day Braj Yatra", "84 Kosh tour", "Krishna temples", "religious pilgrimage"]
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
                                            src="/tour/braj-barsana.png"
                                            alt="7 Day Braj 84 Kosh Yatra"
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
                                        <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>7 Days | 6 Nights
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>
                                        Braj Region (Mathura, Vrindavan, Barsana, Nandgaon, Govardhan, Gokul, and surrounding sacred sites)
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; Sedan - SUV - Tempo Traveller
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
                                Embark on a profound spiritual journey covering the entire sacred Braj region over 7 days. The Braj 84 Kosh Yatra takes you through all the major holy sites associated with Lord Krishna’s life and legends, including Mathura, Vrindavan, Barsana, Nandgaon, Govardhan, and Gokul.
                            </p>
                            <p>
                                Experience traditional rituals, scenic countryside, and the vibrant culture of Braj, with expert guidance and comfortable accommodations throughout your pilgrimage.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation with Breakfast & Dinner</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transportation throughout the Yatra</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Professional Guide Services</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Entry Fees to Sacred Sites</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Starting Point</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses & Optional Activities</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Meals Other Than Breakfast & Dinner</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 7 Days Braj 84 Kosh Yatra</h3>
                                    <h4><strong>Day 1:</strong> Arrival in Mathura & Temple Visits</h4>
                                    <p>
                                        Arrive in Mathura, check-in, visit Shri Krishna Janmabhoomi and Dwarkadhish temples.
                                    </p>
                                    <h4><strong>Day 2:</strong> Vrindavan Exploration</h4>
                                    <p>
                                        Visit Banke Bihari Temple, ISKCON, Prem Mandir, and local markets.
                                    </p>
                                    <h4><strong>Day 3:</strong> Barsana & Nandgaon</h4>
                                    <p>
                                        Visit Barsana (Radha’s birthplace) and Nandgaon (Lord Krishna’s childhood home).
                                    </p>
                                    <h4><strong>Day 4:</strong> Govardhan Hill</h4>
                                    <p>
                                        Explore Govardhan Hill and participate in the traditional Parikrama (circumambulation).
                                    </p>
                                    <h4><strong>Day 5:</strong> Gokul and Surrounding Villages</h4>
                                    <p>
                                        Visit Gokul and nearby sacred spots linked to Krishna’s early life.
                                    </p>
                                    <h4><strong>Day 6:</strong> Local Culture & Temples</h4>
                                    <p>
                                        Explore lesser-known temples, attend devotional music programs, and relax.
                                    </p>
                                    <h4><strong>Day 7:</strong> Final Darshan & Departure</h4>
                                    <p>
                                        Morning visit to important sites followed by checkout and onward journey.
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
