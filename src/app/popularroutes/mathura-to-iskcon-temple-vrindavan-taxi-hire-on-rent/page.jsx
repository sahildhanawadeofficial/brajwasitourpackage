import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/braj-vrindavan.png"; // Replace with correct image path if available

const Page = () => {
    return (
        <>
            <div className="col-lg-9">
                <div className="blog-page-left">
                    <div className="single-blog">
                        <div className="blog-image">
                            <div id="carouselExampleControls" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <Image
                                            className="d-block w-100"
                                            src={taxiImage}
                                            alt="Mathura to ISKCON Temple Vrindavan Taxi Hire on Rent"
                                            width={800}
                                            height={500}
                                            priority
                                        />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button">
                                    <FiChevronLeft size={32} className="text-dark" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button">
                                    <FiChevronRight size={32} className="text-dark" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                        <div className="blog-text">
                            <h2>Book Mathura to ISKCON Temple Vrindavan Taxi/Cab</h2>

                            <p>Looking for a quick and comfortable ride to ISKCON Temple in Vrindavan from Mathura? Book our taxi service for a smooth, affordable, and spiritual journey.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Mathura To ISKCON Temple Vrindavan Taxi Fare (Per KM)</h2>
                                    <p>We offer transparent pricing with clean vehicles and experienced drivers. Toll and parking charges are billed as per actuals.</p>
                                    <table border="1" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Select Car</th>
                                                <th>Price</th>
                                                <th>Booking Now</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Swift Dzire</td>
                                                <td>Rs. 12/KM</td>
                                                <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                                            </tr>
                                            <tr>
                                                <td>Ertiga</td>
                                                <td>Rs. 14/KM</td>
                                                <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                                            </tr>
                                            <tr>
                                                <td>Innova</td>
                                                <td>Rs. 17/KM</td>
                                                <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 19/KM</td>
                                                <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Mathura to ISKCON Temple Vrindavan – One Way & Round Trip</h2>
                                    <p>We offer both one-way drop and round-trip cabs at competitive rates.</p>
                                    <table border="1" width="100%">
                                        <thead>
                                            <tr>
                                                <th>Select Car</th>
                                                <th>One Way</th>
                                                <th>Round Trip</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>SEDAN (Dzire/Etios)</td>
                                                <td>Rs. 599/-</td>
                                                <td>Rs. 1,199/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 799/-</td>
                                                <td>Rs. 1,499/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 999/-</td>
                                                <td>Rs. 1,799/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Mathura and ISKCON Temple Vrindavan</h3>
                                <p>The distance is around <strong>12 km</strong> and takes approximately <strong>20 to 30 minutes</strong>.</p>

                                <h3>Popular Stops Enroute</h3>
                                <ul>
                                    <li>Prem Mandir – A stunning temple near ISKCON</li>
                                    <li>Banke Bihari Temple – A must-visit in Vrindavan</li>
                                    <li>Yamuna Ghats – Ideal for a peaceful break and view</li>
                                </ul>

                                <h3>Why Choose Our Mathura to ISKCON Vrindavan Taxi Service?</h3>
                                <ul>
                                    <li><strong>Timely Pickup:</strong> Fast, reliable service to avoid traffic delays</li>
                                    <li><strong>Polite Drivers:</strong> Trained in customer service and familiar with temple routes</li>
                                    <li><strong>Well-Maintained Vehicles:</strong> Clean, comfortable cabs with A/C</li>
                                    <li><strong>Local Experience:</strong> Drivers well-versed with temple timings & parking spots</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>Do you allow temple darshan time?</b></p>
                                <p>Yes, we offer waiting options for darshan and aarti attendance.</p>

                                <p><b>Can I book for group travel?</b></p>
                                <p>Yes, we have 7-seater and larger vehicles for group bookings.</p>

                                <p><b>Is the trip AC or non-AC?</b></p>
                                <p>All vehicles are air-conditioned unless specified otherwise by you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
