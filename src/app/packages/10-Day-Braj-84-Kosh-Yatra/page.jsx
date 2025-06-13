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
                                            src="/tour/braj-barsana.png"
                                            alt="10-Day Braj 84 Kosh Yatra"
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
                                <li><strong><FaMapMarkerAlt /> Duration:</strong>&nbsp;&nbsp;10 Days | 9 Nights</li>
                                <li><strong><FaClock /> Destination:</strong>&nbsp;&nbsp;Mathura, Vrindavan, Barsana, Nandgaon, Govardhan, Gokul, Radha Kund, Kusum Sarovar & more</li>
                                <li><strong><FaCar /> Transport:</strong>&nbsp; Sedan, SUV, Tempo Traveller</li>
                                <li><strong><FaUtensils /> Meal Plan:</strong>&nbsp; Breakfast & Dinner</li>
                            </ul>

                            {/* Description */}
                            <h2>Description :</h2>
                            <p>
                                The 10-Day Braj 84 Kosh Yatra is the most complete and sacred pilgrimage through the land of Lord Krishna. Designed for spiritual seekers, this yatra covers every major and minor site with enough time to attend kirtans, satsangs, and explore the Braj culture at a divine pace.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation for 9 Nights</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Breakfast & Dinner Daily</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Private Vehicle with Driver</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Darshan Assistance & Local Guide</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Air/Rail Tickets to Mathura</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Lunch, Snacks & Beverages</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses & Tips</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 10 Days Braj 84 Kosh Yatra</h3>
                                    <h4><strong>Day 1:</strong> Arrival & Mathura Darshan</h4>
                                    <p>Arrive in Mathura, visit Shri Krishna Janmabhoomi and Vishram Ghat.</p>

                                    <h4><strong>Day 2:</strong> Vrindavan Exploration</h4>
                                    <p>Visit Banke Bihari, ISKCON, Prem Mandir, Seva Kunj, and Nidhivan.</p>

                                    <h4><strong>Day 3:</strong> Barsana & Nandgaon</h4>
                                    <p>Explore Radha Rani Temple, Nand Bhawan, and surrounding villages.</p>

                                    <h4><strong>Day 4:</strong> Govardhan Hill Parikrama</h4>
                                    <p>Full Govardhan Parikrama, including Daan Ghati, Mansi Ganga, and Haridev Temple.</p>

                                    <h4><strong>Day 5:</strong> Gokul & Raman Reti</h4>
                                    <p>Visit Raman Reti, Chinta Haran Mandir, and Brahmand Ghat in Gokul.</p>

                                    <h4><strong>Day 6:</strong> Radha Kund & Kusum Sarovar</h4>
                                    <p>Spend time at sacred kunds like Radha Kund and Shyam Kund; relax at Kusum Sarovar.</p>

                                    <h4><strong>Day 7:</strong> Vrindavan Deep Darshan</h4>
                                    <p>Explore lesser-known leelasthals and attend morning/evening kirtans.</p>

                                    <h4><strong>Day 8:</strong> Raval, Dauji & Baldeo</h4>
                                    <p>Visit Raval (Radha’s birthplace), and Baldeo Temple dedicated to Balarama.</p>

                                    <h4><strong>Day 9:</strong> Satsang & Spiritual Immersion</h4>
                                    <p>Participate in spiritual talks, bhajan sandhya, and rest.</p>

                                    <h4><strong>Day 10:</strong> Final Darshan & Departure</h4>
                                    <p>Final temple visit, check-out and departure from Mathura.</p>
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
