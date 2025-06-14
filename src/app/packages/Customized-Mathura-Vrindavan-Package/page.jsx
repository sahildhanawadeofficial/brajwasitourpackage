import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';
export const metadata = {
    title: "Customized Mathura Vrindavan Package",
    description: "Design your own Mathura and Vrindavan tour with our fully customizable pilgrimage package.",
    keywords: ["custom Vrindavan tour", "Mathura travel package", "Krishna temples tour", "customized pilgrimage"]
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
                                            src="/tour/mathura-vrindavan-hotel.png"
                                            alt="Customized Mathura Vrindavan Package"
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
                                <li><strong><FaMapMarkerAlt /> Duration:</strong>&nbsp;&nbsp;Flexible – 2 to 5 Days</li>
                                <li><strong><FaClock /> Destination:</strong>&nbsp;&nbsp;Mathura, Vrindavan, Govardhan, Gokul, Barsana, Agra (optional)</li>
                                <li><strong><FaCar /> Transport:</strong>&nbsp; Private Cab, Tempo Traveller, AC Coach</li>
                                <li><strong><FaUtensils /> Meal Plan:</strong>&nbsp; Breakfast / Optional Full Meal Plan</li>
                            </ul>

                            {/* Description */}
                            <h2>Description :</h2>
                            <p>
                                This Customized Mathura-Vrindavan Package is ideal for pilgrims, families, or spiritual seekers looking for a tailor-made journey across the holy land of Krishna. Whether you're interested in visiting just a few temples, doing full parikrama, or combining it with Agra for a Taj Mahal visit, this package can be crafted around your preferences.
                            </p>
                            <p>
                                Choose your pace and places: from iconic temples like Banke Bihari, ISKCON, and Prem Mandir to sacred kunds and hidden ghats of Gokul and Barsana. We can also accommodate special requests like local cuisine tasting, photography tours, senior-friendly walking plans, or bhajan evenings.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Hotel Accommodation</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Daily Breakfast (Dinner optional)</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Private AC Vehicle</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Darshan & Sightseeing Guide (Optional)</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Entry Tickets (if any)</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to Mathura (Train/Airfare)</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Lunch, Snacks, Beverages</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Sample Itinerary (Customizable)</h3>
                                    <h4><strong>Day 1:</strong> Arrival & Mathura Darshan</h4>
                                    <p>Visit Krishna Janmabhoomi, Dwarkadheesh Temple, Vishram Ghat.</p>

                                    <h4><strong>Day 2:</strong> Vrindavan Temples</h4>
                                    <p>Banke Bihari Temple, ISKCON, Prem Mandir, Nidhivan.</p>

                                    <h4><strong>Day 3:</strong> Barsana & Govardhan</h4>
                                    <p>Visit Radha Rani Temple, Nandgaon, and optional Govardhan Parikrama.</p>

                                    <h4><strong>Day 4:</strong> Gokul & Raman Reti</h4>
                                    <p>Chinta Haran Mandir, Gokul Dham, Raman Reti & Brahmand Ghat.</p>

                                    <h4><strong>Day 5:</strong> Optional Agra Visit / Leisure</h4>
                                    <p>Visit the Taj Mahal or spend a relaxed day with local market shopping & bhajans.</p>
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
