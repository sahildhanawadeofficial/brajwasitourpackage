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
                                        src="/tour/kedarnath-dham.png"
                                        alt="Char Dham Yatra - Yamunotri, Gangotri, Kedarnath, Badrinath"
                                        width={1200}
                                        height={600}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tour Info */}
                    <div className="blog-text">
                        <ul>
                            <li>
                                <div>
                                    <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>10 Nights | 11 Days
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaClock /> Destinations:&nbsp;&nbsp;</strong>
                                    Yamunotri, Gangotri, Kedarnath, Badrinath
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; Tempo Traveller / Bus / Jeep
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
                            The Char Dham Yatra is one of the most sacred Hindu pilgrimages, covering four spiritual destinations nestled in the Himalayas of Uttarakhand—Yamunotri, Gangotri, Kedarnath, and Badrinath. Each dham has unique significance: Yamunotri and Gangotri are sources of holy rivers, while Kedarnath and Badrinath are temples dedicated to Lord Shiva and Vishnu, respectively.
                        </p>
                        <p>
                            The journey is not just a religious tour, but also a spiritual and physical adventure through the breathtaking valleys and peaks of the Garhwal region. It attracts thousands of devotees every year during the pilgrimage season (April to November).
                        </p>

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation at all Dham locations</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals – Breakfast & Dinner</div>
                                <div><FaCheck style={{ color: 'green' }} /> Local sightseeing and temple visits</div>
                                <div><FaCheck style={{ color: 'green' }} /> Transport by Tempo Traveller/Bus</div>
                                <div><FaCheck style={{ color: 'green' }} /> Dedicated tour guide assistance</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Helicopter charges to Kedarnath (optional)</div>
                                <div><FaTimes style={{ color: 'red' }} /> Pony/Doli charges</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Any travel insurance or tips</div>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : 11 Days Char Dham Yatra</h3>
                                <h4><strong>Day 1:</strong> Haridwar Arrival & Transfer to Barkot</h4>
                                <p>Meet at Haridwar and drive to Barkot via Mussoorie. Overnight stay at Barkot.</p>

                                <h4><strong>Day 2:</strong> Yamunotri Trek & Return</h4>
                                <p>Drive to Janki Chatti, then trek 6 km to Yamunotri. Visit temple and return to Barkot.</p>

                                <h4><strong>Day 3:</strong> Barkot to Uttarkashi</h4>
                                <p>Drive to Uttarkashi and visit Vishwanath Temple. Overnight stay in Uttarkashi.</p>

                                <h4><strong>Day 4:</strong> Gangotri Darshan</h4>
                                <p>Drive to Gangotri and offer prayers at the temple. Return to Uttarkashi.</p>

                                <h4><strong>Day 5:</strong> Uttarkashi to Guptkashi</h4>
                                <p>Long drive through scenic routes to Guptkashi. Overnight stay.</p>

                                <h4><strong>Day 6:</strong> Kedarnath Trek or Helicopter</h4>
                                <p>Travel to Gaurikund and start 16 km trek to Kedarnath or take a helicopter. Stay near the temple.</p>

                                <h4><strong>Day 7:</strong> Kedarnath to Guptkashi</h4>
                                <p>Return trek or helicopter to Gaurikund and drive back to Guptkashi.</p>

                                <h4><strong>Day 8:</strong> Guptkashi to Badrinath</h4>
                                <p>Drive to Badrinath. Visit temple and take part in evening aarti. Overnight stay.</p>

                                <h4><strong>Day 9:</strong> Badrinath Sightseeing & Drive to Rudraprayag</h4>
                                <p>Visit Mana Village and nearby places. Later, drive to Rudraprayag.</p>

                                <h4><strong>Day 10:</strong> Rudraprayag to Rishikesh</h4>
                                <p>Drive to Rishikesh. Attend evening Ganga Aarti at Triveni Ghat.</p>

                                <h4><strong>Day 11:</strong> Departure from Rishikesh</h4>
                                <p>Tour concludes. Proceed for onward journey or return home.</p>
                            </div>
                        </div>

                        {/* Pricing Table */}
                        <div className="mytable container">
                            <h3>Pricing for Transport Options</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Vehicle Type</th>
                                            <th>Price (Per Day)</th>
                                            <th>Driver Charges</th>
                                            <th>Enquiry</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Tempo Traveller (12-Seater)', '₹6,000/day'],
                                            ['Innova', '₹4,500/day'],
                                            ['Mini Bus', 'Ask For Price'],
                                        ].map(([type, price], idx) => (
                                            <tr key={idx}>
                                                <td>{type}</td>
                                                <td>{price}</td>
                                                <td>₹500/-</td>
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
