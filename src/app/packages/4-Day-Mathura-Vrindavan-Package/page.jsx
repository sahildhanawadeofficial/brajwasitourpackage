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
                                            src="/tour/mathura-vrindavan-hotel.png"
                                            alt="4 Day Mathura Vrindavan Package"
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
                                        <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>4 Days | 3 Nights
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
                                Embark on a spiritual 4-day journey through Mathura and Vrindavan, soaking in the divine atmosphere of Lord Krishna’s birthplace and the surrounding sacred sites. This package includes comfortable accommodation and guided tours to the most revered temples and ghats.
                            </p>
                            <p>
                                Enjoy cultural experiences, participate in aarti ceremonies, and explore vibrant local markets as part of your pilgrimage.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation</div>
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
                                    <h3>Itinerary : 4 Days Mathura & Vrindavan</h3>
                                    <h4><strong>Day 1:</strong> Arrival and Mathura Darshan</h4>
                                    <p>
                                        Arrive in Mathura, check-in, and visit Shri Krishna Janmabhoomi Temple and Dwarkadhish Temple. Evening Aarti at Yamuna Ghat.
                                    </p>

                                    <h4><strong>Day 2:</strong> Vrindavan Temples Tour</h4>
                                    <p>
                                        Explore Banke Bihari Temple, ISKCON Vrindavan, and Prem Mandir. Evening free for local market shopping.
                                    </p>

                                    <h4><strong>Day 3:</strong> Sacred Sites Exploration</h4>
                                    <p>
                                        Visit Radha Kund, Shyam Kund, and Kusum Sarovar. Attend evening Aarti at Radha Vallabh Temple.
                                    </p>

                                    <h4><strong>Day 4:</strong> Final Darshan & Departure</h4>
                                    <p>
                                        Morning visit to Nidhivan and follow with check-out and onward journey.
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
