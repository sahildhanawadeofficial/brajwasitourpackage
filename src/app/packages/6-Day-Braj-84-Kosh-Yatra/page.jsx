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
                                            src="/tour/braj-vrindavan.png"
                                            alt="6-Day Braj 84 Kosh Yatra"
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
                                        <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>6 Days
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>
                                        Mathura, Vrindavan, Barsana, Nandgaon, Govardhan, Gokul
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; Hatchback - Sedan - SUV (Car)
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
                                The 6-Day Braj 84 Kosh Yatra offers a deeper and more relaxed spiritual journey through the sacred land of Braj. This extended itinerary includes all key locations of the 5-day tour—Mathura, Vrindavan, Barsana, Nandgaon, Govardhan, and Gokul—while allowing for slower-paced exploration and additional devotion time at each site.
                            </p>
                            <p>
                                Ideal for devotees seeking a peaceful pilgrimage, this yatra includes visits to ancient temples, holy ghats, and sacred kunds with ample time for darshans, aartis, and reflection.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Guide Services</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Entrance Fees</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transportation</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation with Breakfast & Dinner</div>
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
                                    <h3>Itinerary : 6-Day Braj 84 Kosh Yatra</h3>
                                    <h4><strong>Day 1:</strong> Arrival & Gokul Darshan</h4>
                                    <p>Arrive in Mathura, check in, and explore Gokul, including Raman Reti and Chinta Haran Ghat.</p>

                                    <h4><strong>Day 2:</strong> Vrindavan Temples</h4>
                                    <p>Visit Banke Bihari Temple, ISKCON, Prem Mandir, and enjoy Yamuna Aarti in the evening.</p>

                                    <h4><strong>Day 3:</strong> Govardhan & Parikrama</h4>
                                    <p>Full day in Govardhan for Parikrama, visit Radha Kund, Shyam Kund, Kusum Sarovar, Mansi Ganga.</p>

                                    <h4><strong>Day 4:</strong> Barsana Exploration</h4>
                                    <p>Spend a peaceful day visiting Radha Rani Temple and nearby holy kunds in Barsana.</p>

                                    <h4><strong>Day 5:</strong> Nandgaon & Spiritual Immersion</h4>
                                    <p>Visit Nand Bhawan and other local temples, followed by free time for prayer and shopping.</p>

                                    <h4><strong>Day 6:</strong> Local Darshan & Departure</h4>
                                    <p>Final morning aarti and darshan at Dwarkadhish Temple before check-out and departure.</p>
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
