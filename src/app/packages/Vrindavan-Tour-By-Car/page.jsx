import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';
export const metadata = {
    title: "Vrindavan Tour By Car",
    description: "Explore Vrindavan at your pace with our comfortable and private car tour service.",
    keywords: ["Vrindavan car tour", "private taxi Vrindavan", "Krishna temples by car", "Mathura Vrindavan cab"]
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
                                            src="/tour/vrindavan-by-car.png"
                                            alt="Vrindavan Tour By Car"
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
                                <li><strong><FaMapMarkerAlt /> Duration:</strong>&nbsp;&nbsp;1 Day (Customizable)</li>
                                <li><strong><FaClock /> Destination:</strong>&nbsp;&nbsp;Vrindavan (From Delhi)</li>
                                <li><strong><FaCar /> Transport:</strong>&nbsp; AC Sedan, SUV, or Tempo Traveller</li>
                                <li><strong><FaUtensils /> Meal Plan:</strong>&nbsp; Optional (Breakfast & Lunch Add-on)</li>
                            </ul>

                            {/* Description */}
                            <h2>Description :</h2>
                            <p>
                                Embark on a comfortable and spiritual <strong>Vrindavan Tour by Car</strong> from Delhi. Explore the divine land of Lord Krishna with ease, visiting sacred temples, vibrant ghats, and cultural landmarks at your own pace in a private AC vehicle.
                            </p>
                            <p>
                                Perfect for a family getaway or a spiritual retreat, this trip includes visits to the renowned Banke Bihari Temple, ISKCON Temple, Prem Mandir, and other holy sites. Our door-to-door service ensures a hassle-free experience from start to finish.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Private AC Vehicle</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Professional Driver</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Route & Sightseeing Guidance</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Toll, Parking, State Taxes</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Meals (optional)</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Entry Tickets (if applicable)</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Sample Itinerary – 1 Day Vrindavan Tour</h3>

                                    <h4><strong>6:00 AM:</strong> Pick-up from Delhi</h4>
                                    <p>Depart from your location in a private AC car towards Vrindavan.</p>

                                    <h4><strong>10:00 AM:</strong> Arrival in Vrindavan</h4>
                                    <p>Begin with darshan at the Banke Bihari Temple, followed by ISKCON Temple.</p>

                                    <h4><strong>12:30 PM:</strong> Lunch Break</h4>
                                    <p>Enjoy a traditional vegetarian meal at a local restaurant (optional).</p>

                                    <h4><strong>2:00 PM:</strong> Visit Prem Mandir</h4>
                                    <p>Marvel at the architecture and devotional ambiance of this iconic temple.</p>

                                    <h4><strong>4:00 PM:</strong> Local Sightseeing & Shopping</h4>
                                    <p>Optional visit to Nidhivan or shop for devotional items and sweets.</p>

                                    <h4><strong>5:30 PM:</strong> Return Journey</h4>
                                    <p>Head back to Delhi. Estimated arrival by 9:30 PM.</p>
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
                                                ['Kia Carens', '₹17/km'],
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
                                                    <td>
                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            Enquiry Now
                                                        </button>
                                                    </td>
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
