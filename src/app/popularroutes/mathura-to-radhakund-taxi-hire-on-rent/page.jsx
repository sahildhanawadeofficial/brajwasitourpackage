import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/radhakund.png"; // Update the path if image differs

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
                                            alt="Mathura to Radhakund Taxi Hire on Rent"
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
                            <h2>Book Mathura to Radhakund Taxi/Cab</h2>

                            <p>Visit the sacred town of Radhakund from Mathura with our comfortable taxi services. Ideal for devotees and spiritual seekers, our cabs ensure a smooth ride with experienced drivers and affordable fares.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Mathura To Radhakund Taxi Fare (Per KM)</h2>
                                    <p>We offer budget-friendly and transparent taxi rates. Toll and parking charges will be extra as per actuals.</p>
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
                                    <h2>Mathura to Radhakund – One Way & Round Trip</h2>
                                    <p>We provide flexible options whether you need a one-way drop or a round-trip journey for the day.</p>
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
                                                <td>Rs. 999/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 799/-</td>
                                                <td>Rs. 1,299/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 999/-</td>
                                                <td>Rs. 1,599/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Mathura and Radhakund</h3>
                                <p>The distance is approximately <strong>25 km</strong> and usually takes <strong>45 minutes to 1 hour</strong> depending on road conditions.</p>

                                <h3>Spiritual Places on the Way</h3>
                                <ul>
                                    <li>Govardhan Hill – Sacred to Lord Krishna devotees</li>
                                    <li>Kusum Sarovar – Peaceful ghat near Govardhan</li>
                                    <li>Manasi Ganga – A holy kund in Govardhan</li>
                                </ul>

                                <h3>Why Choose Our Mathura to Radhakund Taxi?</h3>
                                <ul>
                                    <li><strong>Trusted Drivers:</strong> Friendly and professional drivers familiar with the region</li>
                                    <li><strong>Comfortable Vehicles:</strong> AC cabs with regular maintenance</li>
                                    <li><strong>Value for Money:</strong> Reasonable rates with no hidden charges</li>
                                    <li><strong>Flexible Scheduling:</strong> One-way, round-trip, or same-day return options</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>How do I book the cab?</b></p>
                                <p>Just fill out the inquiry form or call us directly. We’ll confirm your booking quickly.</p>

                                <p><b>Are temple visits included?</b></p>
                                <p>Yes, we can include additional stops like Govardhan or Kusum Sarovar if you inform in advance.</p>

                                <p><b>Can I get picked up from my hotel or station?</b></p>
                                <p>Yes, pickups from Mathura station, bus stand, or hotels are available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
