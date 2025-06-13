import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/braj-mathura.png"; // Replace with a Gokul-specific image if available

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
                                            alt="Mathura to Gokul Taxi Hire on Rent"
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
                            <h2>Book Mathura to Gokul Taxi/Cab</h2>

                            <p>Travel with ease from Mathura to the sacred town of Gokul, where Lord Krishna spent his early childhood. Our reliable taxi services ensure a peaceful and spiritual journey.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Mathura To Gokul Taxi Fare (Per KM)</h2>
                                    <p>We offer clear per kilometer rates. Toll and parking will be additional as per actual usage.</p>
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
                                    <h2>Mathura to Gokul Cab – One Way & Round Trip</h2>
                                    <p>Whether you plan a spiritual visit or sightseeing, our cabs provide one-way and round-trip flexibility.</p>
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
                                                <td>Rs. 899/-</td>
                                                <td>Rs. 1,699/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 1,199/-</td>
                                                <td>Rs. 2,199/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 1,499/-</td>
                                                <td>Rs. 2,799/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Mathura and Gokul</h3>
                                <p>The distance is about <strong>15 km</strong> and the journey typically takes <strong>30 to 45 minutes</strong>.</p>

                                <h3>Popular Stops Enroute</h3>
                                <ul>
                                    <li>Vishram Ghat – Holy bathing ghat in Mathura</li>
                                    <li>Raman Reti – Playground of Krishna in Gokul</li>
                                    <li>Gokulnath Temple – A major Krishna temple in Gokul</li>
                                </ul>

                                <h3>Why Choose Our Mathura to Gokul Taxi Service?</h3>
                                <ul>
                                    <li><strong>Local Experts:</strong> Our drivers are familiar with Braj Bhoomi’s religious and cultural routes</li>
                                    <li><strong>Affordable Fares:</strong> Competitively priced services with no hidden fees</li>
                                    <li><strong>Sanitized Cars:</strong> Clean and hygienic vehicles for a safe ride</li>
                                    <li><strong>Easy Booking:</strong> Quick online or phone reservations</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>Do I need to book in advance?</b></p>
                                <p>Advance booking is recommended to ensure availability, especially on weekends and festivals.</p>

                                <p><b>Are local sightseeing options available?</b></p>
                                <p>Yes, we offer customized itineraries if you want to explore more temples and ghats around Gokul.</p>

                                <p><b>What payment options do you accept?</b></p>
                                <p>We accept cash, UPI, and most digital wallets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
