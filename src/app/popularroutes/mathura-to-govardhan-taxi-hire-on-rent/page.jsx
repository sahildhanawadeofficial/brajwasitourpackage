import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/govardhan-parikrama.png"; // Update with appropriate image if available

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
                                            alt="Mathura to Govardhan Taxi Hire on Rent"
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
                            <h2>Book Mathura to Govardhan Taxi/Cab</h2>

                            <p>Book your comfortable taxi from Mathura to Govardhan, the sacred site of the Govardhan Parikrama. Whether you're planning a religious journey or sightseeing, our service ensures a smooth ride.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Mathura To Govardhan Taxi Fare (Per KM)</h2>
                                    <p>Get affordable rates with no hidden fees. Toll and parking charges are extra as applicable.</p>
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
                                    <h2>Mathura to Govardhan Cab – One Way & Round Trip</h2>
                                    <p>Choose between a simple drop or full round-trip to complete your Parikrama and return conveniently.</p>
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
                                                <td>Rs. 999/-</td>
                                                <td>Rs. 1,899/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 1,299/-</td>
                                                <td>Rs. 2,299/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 1,599/-</td>
                                                <td>Rs. 2,799/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Mathura and Govardhan</h3>
                                <p>The distance is around <strong>23 km</strong>, typically taking <strong>45 minutes to 1 hour</strong> depending on traffic.</p>

                                <h3>Popular Stops Enroute</h3>
                                <ul>
                                    <li>Radha Kund – Sacred pond where Radha and Krishna are worshipped</li>
                                    <li>Kusum Sarovar – Beautiful sandstone monument near Govardhan</li>
                                    <li>Govardhan Hill – Centerpiece of the Parikrama and key pilgrimage site</li>
                                </ul>

                                <h3>Why Choose Our Mathura to Govardhan Taxi Service?</h3>
                                <ul>
                                    <li><strong>Spiritual Comfort:</strong> Calm and respectful service for pilgrims</li>
                                    <li><strong>Reliable Timings:</strong> Perfect for early morning Parikrama plans</li>
                                    <li><strong>Safe Vehicles:</strong> Clean, maintained cars with experienced local drivers</li>
                                    <li><strong>Fixed Pricing:</strong> No surprises, transparent fare policy</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>Can I book early morning rides?</b></p>
                                <p>Yes, we operate early morning and late-night pickups for Parikrama.</p>

                                <p><b>Is round trip cheaper?</b></p>
                                <p>Yes, round trips are offered at discounted rates compared to two separate one-way rides.</p>

                                <p><b>Do you provide guides for Parikrama?</b></p>
                                <p>Upon request, we can arrange local guides familiar with the Parikrama route.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
