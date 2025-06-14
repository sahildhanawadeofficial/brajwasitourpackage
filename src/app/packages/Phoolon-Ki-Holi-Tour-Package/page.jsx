import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';
export const metadata = {
    title: "Phoolon Ki Holi Tour Package",
    description: "Experience the divine beauty of Phoolon Ki Holi in Vrindavan, a unique celebration of flowers and devotion.",
    keywords: ["Phoolon ki Holi", "Vrindavan flower Holi", "Krishna Holi celebration", "Holi tour"]
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
                                            src="/tour/phoolon-ki-holi.png"
                                            alt="Phoolon Ki Holi Tour Package"
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
                                <li><strong><FaClock /> Destination:</strong>&nbsp;&nbsp;Vrindavan – Banke Bihari Temple & Surroundings (From Delhi)</li>
                                <li><strong><FaCar /> Transport:</strong>&nbsp; AC Sedan, SUV or Tempo Traveller</li>
                                <li><strong><FaUtensils /> Meal Plan:</strong>&nbsp; Optional (Breakfast & Lunch Add-on)</li>
                            </ul>

                            {/* Description */}
                            <h2>Description :</h2>
                            <p>
                                Celebrate Holi the traditional way with our exclusive <strong>Phoolon Ki Holi Tour Package</strong> from Delhi to Vrindavan. Witness the divine festival of flowers at the revered Banke Bihari Temple, where priests shower devotees with vibrant flower petals in an unforgettable spiritual experience.
                            </p>
                            <p>
                                Ideal for families, photographers, and culture enthusiasts, this short and sweet trip immerses you in the colorful energy of Braj Bhoomi during Holi. Experience devotional singing, cultural dances, and spiritual festivities in the heartland of Lord Krishna.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> AC Private Vehicle</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Professional Driver</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Assistance During Temple Visit</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Parking, Toll, State Taxes</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Meals (optional add-on)</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Entry Fees (if applicable)</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Sample Itinerary – 1 Day Phoolon Ki Holi Tour</h3>

                                    <h4><strong>6:00 AM:</strong> Pick-up from Delhi</h4>
                                    <p>Begin your journey in a private AC vehicle toward Vrindavan.</p>

                                    <h4><strong>10:00 AM:</strong> Arrival at Vrindavan</h4>
                                    <p>Explore Banke Bihari Temple and nearby spiritual spots.</p>

                                    <h4><strong>12:00 PM:</strong> Participate in Phoolon Ki Holi</h4>
                                    <p>Experience the divine celebration of Holi with flowers inside the temple premises.</p>

                                    <h4><strong>2:00 PM:</strong> Lunch & Sightseeing</h4>
                                    <p>Optional lunch followed by visits to ISKCON Temple or Prem Mandir (based on time).</p>

                                    <h4><strong>4:00 PM:</strong> Return Journey</h4>
                                    <p>Depart from Vrindavan and reach Delhi by late evening.</p>
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
                                                ['Sedan', '₹12/km'],
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
