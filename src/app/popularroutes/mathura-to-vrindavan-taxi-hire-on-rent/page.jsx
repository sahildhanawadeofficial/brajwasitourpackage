import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/vrindavan-by-car.png"; // Update the image path if needed
export const metadata = {
    title: "Mathura to Vrindavan Taxi Hire",
    description: "Book a comfortable taxi from Mathura to Vrindavan for a spiritual journey through the land of Krishna.",
    keywords: ["Mathura to Vrindavan taxi", "Vrindavan cab", "Mathura travel", "Krishna temples transport"]
};

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
                                            alt="Mathura to Vrindavan Taxi Hire on Rent"
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
                            <h2>Book Mathura to Vrindavan Taxi/Cab</h2>

                            <p>Planning a spiritual visit from Mathura to Vrindavan? Our reliable taxi service ensures a comfortable and timely ride between these sacred towns with professional drivers and transparent fares.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Mathura To Vrindavan Taxi Fare (Per KM)</h2>
                                    <p>Fair and transparent rates for your journey. Toll and parking are charged extra as per actuals.</p>
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
                                    <h2>Mathura to Vrindavan – One Way & Round Trip</h2>
                                    <p>Choose between one-way or round-trip options for your convenience.</p>
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
                                                <td>Rs. 399/-</td>
                                                <td>Rs. 799/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 599/-</td>
                                                <td>Rs. 999/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 799/-</td>
                                                <td>Rs. 1,299/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Mathura and Vrindavan</h3>
                                <p>The distance is about <strong>12 km</strong> and typically takes <strong>20 to 30 minutes</strong> depending on traffic.</p>

                                <h3>Key Attractions in Vrindavan</h3>
                                <ul>
                                    <li>Banke Bihari Temple</li>
                                    <li>Prem Mandir</li>
                                    <li>ISKCON Temple</li>
                                    <li>Nidhivan and Seva Kunj</li>
                                </ul>

                                <h3>Why Choose Our Mathura to Vrindavan Taxi?</h3>
                                <ul>
                                    <li><strong>Professional Drivers:</strong> Courteous and knowledgeable about local routes</li>
                                    <li><strong>Clean Cabs:</strong> Well-maintained, sanitized vehicles</li>
                                    <li><strong>Fixed Prices:</strong> No surge pricing or hidden fees</li>
                                    <li><strong>Fast Booking:</strong> Book online or by call within minutes</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>Can I get dropped near Banke Bihari Temple?</b></p>
                                <p>Yes, we provide drop-off near all major temples in Vrindavan.</p>

                                <p><b>Do you offer round trip packages?</b></p>
                                <p>Yes, you can opt for round trip with wait time included.</p>

                                <p><b>Is night travel available?</b></p>
                                <p>Yes, but charges may vary slightly based on timing. Contact us for details.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
