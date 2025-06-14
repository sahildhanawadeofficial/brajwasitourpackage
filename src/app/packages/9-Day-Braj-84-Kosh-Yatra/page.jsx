import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';
export const metadata = {
    title: "9-Day Braj 84 Kosh Yatra",
    description: "Take a 9-day spiritual journey through Braj Bhoomi with our comprehensive 84 Kosh Yatra tour package.",
    keywords: ["9-day Braj Yatra", "84 Kosh pilgrimage", "Krishna Janmbhoomi tour", "Vrindavan travel"]
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
                                            alt="9-Day Braj 84 Kosh Yatra"
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
                                <li><strong><FaMapMarkerAlt /> Duration:</strong>&nbsp;&nbsp;9 Days | 8 Nights</li>
                                <li><strong><FaClock /> Destination:</strong>&nbsp;&nbsp;Mathura, Vrindavan, Barsana, Govardhan, Nandgaon, Gokul, Radha Kund & more</li>
                                <li><strong><FaCar /> Transport:</strong>&nbsp; Sedan, SUV, Tempo Traveller</li>
                                <li><strong><FaUtensils /> Meal Plan:</strong>&nbsp; Breakfast & Dinner</li>
                            </ul>

                            {/* Description */}
                            <h2>Description :</h2>
                            <p>
                                The 9-Day Braj 84 Kosh Yatra allows pilgrims to journey deeper into Lord Krishna’s sacred land with extended time for prayer, reflection, and exploration. This is the most immersive Braj Yatra experience, including all important leelasthal, hidden temples, satsangs, and cultural experiences across the holy Braj region.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation (8 Nights)</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Daily Breakfast & Dinner</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Local Transportation with Driver</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Local Guide for Darshan</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Air/Train Fare to Mathura</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Lunch & Optional activities</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 9 Days Braj 84 Kosh Yatra</h3>
                                    <h4><strong>Day 1:</strong> Arrival in Mathura</h4>
                                    <p>Check-in and visit Shri Krishna Janmabhoomi and Vishram Ghat.</p>

                                    <h4><strong>Day 2:</strong> Vrindavan Exploration</h4>
                                    <p>Visit Banke Bihari Temple, ISKCON, Prem Mandir, Nidhivan.</p>

                                    <h4><strong>Day 3:</strong> Barsana & Nandgaon</h4>
                                    <p>Explore Radha Rani Temple (Barsana), Nand Bhawan in Nandgaon.</p>

                                    <h4><strong>Day 4:</strong> Govardhan Hill Parikrama</h4>
                                    <p>Perform full Govardhan Parikrama, visit Daan Ghati & Mansi Ganga.</p>

                                    <h4><strong>Day 5:</strong> Gokul & Raman Reti</h4>
                                    <p>Visit Gokul Dham, Raman Reti, and Chinta Haran Mandir.</p>

                                    <h4><strong>Day 6:</strong> Radha Kund & Kusum Sarovar</h4>
                                    <p>Visit the holy kunds and explore scenic Kusum Sarovar.</p>

                                    <h4><strong>Day 7:</strong> Hidden Temples & Leisure</h4>
                                    <p>Explore lesser-known sites like Seva Kunj, Madan Mohan Temple, etc.</p>

                                    <h4><strong>Day 8:</strong> Satsang & Cultural Evening</h4>
                                    <p>Attend Bhajan Sandhya and cultural performances.</p>

                                    <h4><strong>Day 9:</strong> Final Darshan & Departure</h4>
                                    <p>Morning darshan at temples and departure after breakfast.</p>
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
