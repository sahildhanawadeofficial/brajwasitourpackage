import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
export const metadata = {
    title: "Mathura to Barsana Taxi Hire",
    description: "Book a taxi from Mathura to Barsana, the birthplace of Radha, and visit beautiful temples.",
    keywords: ["Mathura to Barsana taxi", "Radha birthplace", "Barsana temple tour", "spiritual trip"]
};

const taxiImage = "/tour/braj-barsana.png"; // Update image if needed

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
                                            alt="Mathura to Barsana Taxi Hire on Rent"
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
                            <h2>Book Mathura to Barsana Taxi/Cab</h2>

                            <p>Travel comfortably from Mathura to the sacred town of Barsana with our dependable taxi service. Experience the cultural richness and spiritual aura of Braj with our trained drivers.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Mathura To Barsana Taxi Fare (Per KM)</h2>
                                    <p>We offer affordable per kilometer pricing without any hidden costs. Toll and parking charges will be billed as per actuals.</p>
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
                                    <h2>Mathura to Barsana Cab – One Way & Round Trip</h2>
                                    <p>Choose a one-way or round-trip cab from Mathura to Barsana for a spiritual and smooth journey.</p>
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
                                                <td>Rs. 1,299/-</td>
                                                <td>Rs. 2,499/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 1,599/-</td>
                                                <td>Rs. 2,999/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 1,899/-</td>
                                                <td>Rs. 3,599/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Mathura and Barsana</h3>
                                <p>The distance is approximately <strong>45 km</strong> and takes about <strong>1 to 1.5 hours</strong> depending on traffic and road conditions.</p>

                                <h3>Popular Stops Enroute</h3>
                                <ul>
                                    <li>Gokul – Birthplace of Lord Krishna</li>
                                    <li>Nandgaon – Lord Krishna’s childhood village</li>
                                    <li>Govardhan – Sacred hill lifted by Krishna</li>
                                </ul>

                                <h3>Why Choose Our Mathura to Barsana Taxi Service?</h3>
                                <ul>
                                    <li><strong>Experienced Drivers:</strong> Friendly and trained drivers familiar with the Braj region</li>
                                    <li><strong>Clean Vehicles:</strong> Sanitized cabs for your safety and comfort</li>
                                    <li><strong>Honest Pricing:</strong> No surprises – just fair rates</li>
                                    <li><strong>24x7 Support:</strong> Assistance available for any travel issues</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>How do I confirm my booking?</b></p>
                                <p>You can use the Quick Inquiry form or call us directly for instant confirmation.</p>

                                <p><b>Is there any night charge?</b></p>
                                <p>Night charges may apply for trips starting after 10 PM or before 5 AM.</p>

                                <p><b>Are pickups from hotels in Mathura available?</b></p>
                                <p>Yes, we offer door-to-door pickup from any hotel or location in Mathura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
