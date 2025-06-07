'use client';

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
                                            src="/tour/binsar-wildlife-sanctuary-mountain-views.webp"
                                            alt="Binsar Wildlife Sanctuary Mountain Views"
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
                                        <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>2 Nights | 3 Days
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaClock /> Destination:&nbsp;&nbsp;</strong>
                                        Binsar Wildlife Sanctuary, Uttarakhand
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong><FaCar /> Transport:</strong>&nbsp; SUV / Jeep
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
                                Binsar Wildlife Sanctuary is a serene escape nestled in the Kumaon Himalayas of Uttarakhand. Known for its rich biodiversity and panoramic views of the majestic Himalayan peaks, Binsar is a paradise for nature lovers, bird watchers, and wildlife enthusiasts.
                            </p>
                            <p>
                                Explore dense forests of oak, deodar, and rhododendron, spot rare Himalayan wildlife like leopards, barking deer, and various bird species. The sanctuary offers peaceful trekking trails and stunning viewpoints including the Zero Point that offers breathtaking views of peaks like Nanda Devi, Trishul, and Panchachuli.
                            </p>

                            {/* Inclusion/Exclusion */}
                            <div className="row">
                                <div className="col-md-12 py-4">
                                    <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Accommodation in Forest Lodges / Hotels</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Transport by SUV/Jeep</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Breakfast & Dinner</div>
                                    <div><FaCheck style={{ color: 'green' }} /> Guided Wildlife & Nature Tours</div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Travel to/from Uttarakhand</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Entry Fees to Wildlife Sanctuary</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                    <div><FaTimes style={{ color: 'red' }} /> Optional Adventure Activities</div>
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="row">
                                <div className="call-box-inner12">
                                    <h3>Itinerary : 3 Days Binsar Wildlife Sanctuary Tour</h3>
                                    <h4><strong>Day 1: </strong>Arrival & Local Sightseeing</h4>
                                    <p>
                                        Arrive at Almora or Kathgodam and transfer to Binsar. Explore local markets and enjoy the peaceful mountain ambiance.
                                    </p>
                                    <h4><strong>Day 2: </strong>Wildlife Sanctuary & Nature Walks</h4>
                                    <p>
                                        Full day guided tour of Binsar Wildlife Sanctuary including treks to Zero Point and other scenic viewpoints. Spot various wildlife and bird species.
                                    </p>
                                    <h4><strong>Day 3: </strong>Relaxation & Departure</h4>
                                    <p>
                                        Morning at leisure. Check out and transfer back to your onward destination.
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
                                            {[['Sedan', '₹13/km'],
                                            ['Ertiga', '₹15/km'],
                                            ['Kia', '₹18/km'],
                                            ['Innova', '₹20/km'],
                                            ['Innova Crysta', '₹20/km'],
                                            ['12 Seater Tempo Traveller', '₹24/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                            ['45 Seater Bus', 'Ask For Price'],
                                            ].map(([type, price], idx) => (
                                                <tr key={idx}>
                                                    <td>{type}</td>
                                                    <td>{price}</td>
                                                    <td>₹350/-</td>
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
        </>
    );
};

export default Page;
