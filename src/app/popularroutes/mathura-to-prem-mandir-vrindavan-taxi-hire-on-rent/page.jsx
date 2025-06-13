import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/prem-mandir-vrindavan.png"; // Update the image path accordingly

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
                                            alt="Mathura to Prem Mandir Vrindavan Taxi Hire on Rent"
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
                            <h2>Book Mathura to Prem Mandir Vrindavan Taxi/Cab</h2>

                            <p>Travel with comfort and convenience from Mathura to the magnificent Prem Mandir in Vrindavan. Our taxi services are tailored for spiritual travelers and tourists looking for safe, reliable, and affordable transport.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Mathura To Prem Mandir Taxi Fare (Per KM)</h2>
                                    <p>Fair and transparent pricing with no hidden charges. Toll and parking will be additional as applicable.</p>
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
                                    <h2>Mathura to Prem Mandir – One Way & Round Trip</h2>
                                    <p>Whether you're planning a short visit or a full-day trip, our taxi services fit your schedule.</p>
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
                                                <td>Rs. 499/-</td>
                                                <td>Rs. 899/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 699/-</td>
                                                <td>Rs. 1,199/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 899/-</td>
                                                <td>Rs. 1,499/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Mathura and Prem Mandir Vrindavan</h3>
                                <p>The distance is approximately <strong>12 km</strong> and usually takes <strong>30 to 45 minutes</strong> depending on traffic.</p>

                                <h3>Popular Attractions Enroute</h3>
                                <ul>
                                    <li>Banke Bihari Temple – Famous Krishna temple</li>
                                    <li>ISKCON Vrindavan – Known for its international spiritual vibe</li>
                                    <li>Yamuna Ghats – Sacred bathing spots</li>
                                </ul>

                                <h3>Why Choose Our Mathura to Prem Mandir Taxi?</h3>
                                <ul>
                                    <li><strong>Convenient Booking:</strong> Easy online or call booking system</li>
                                    <li><strong>Reliable Drivers:</strong> Local drivers who know Vrindavan inside out</li>
                                    <li><strong>Affordable Rates:</strong> Best value with transparent pricing</li>
                                    <li><strong>Comfort First:</strong> Clean, AC cabs for a peaceful journey</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>How can I book a taxi from Mathura to Prem Mandir?</b></p>
                                <p>You can book online using our inquiry form or call our team directly.</p>

                                <p><b>Can I visit other temples along the route?</b></p>
                                <p>Yes, custom temple tours can be arranged. Please inform us in advance.</p>

                                <p><b>Do you provide pickup from Mathura railway station?</b></p>
                                <p>Yes, we offer pickups from railway station, bus stand, or any hotel in Mathura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
