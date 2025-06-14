import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
export const metadata = {
    title: "Vrindavan to Barsana Taxi Hire",
    description: "Book a taxi from Vrindavan to Barsana and visit the holy town of Radha Rani.",
    keywords: ["Vrindavan to Barsana taxi", "Radha temples", "Barsana travel", "spiritual Vrindavan tour"]
};

const taxiImage = "/tour/braj-barsana.png"; // Update this to a relevant image if needed

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
                                            alt="Vrindavan to Barsana Taxi Hire on Rent"
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
                            <h2>Book Vrindavan to Barsana Taxi/Cab</h2>

                            <p>Looking for a convenient and comfortable way to reach Barsana from Vrindavan? Our taxi service ensures a safe and pleasant journey to the land of Radha Rani with experienced drivers and transparent fares.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Vrindavan To Barsana Taxi Fare (Per KM)</h2>
                                    <p>Our fares are transparent and pocket-friendly. Toll and parking are additional as applicable.</p>
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
                                    <h2>Vrindavan to Barsana – One Way & Round Trip</h2>
                                    <p>Choose your preference: single journey or round trip with waiting time included.</p>
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
                                                <td>Rs. 1,799/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 1,199/-</td>
                                                <td>Rs. 2,099/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 1,399/-</td>
                                                <td>Rs. 2,499/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Vrindavan and Barsana</h3>
                                <p>The distance is around <strong>45 km</strong>, and the journey usually takes <strong>1 to 1.5 hours</strong> depending on traffic conditions.</p>

                                <h3>Popular Stops Enroute</h3>
                                <ul>
                                    <li>Radha Kund</li>
                                    <li>Govardhan Hill</li>
                                    <li>Kusum Sarovar</li>
                                </ul>

                                <h3>Why Choose Our Vrindavan to Barsana Taxi?</h3>
                                <ul>
                                    <li><strong>Expert Drivers:</strong> Well-versed with Braj routes and locations</li>
                                    <li><strong>Comfortable Rides:</strong> Clean, sanitized, AC vehicles for all weather</li>
                                    <li><strong>No Hidden Costs:</strong> Transparent fare policy</li>
                                    <li><strong>Flexible Pickup:</strong> We can pick you up from any point in Vrindavan</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>Is a night journey available?</b></p>
                                <p>Yes, we operate 24x7. Night charges may apply.</p>

                                <p><b>Can I customize my trip with stops?</b></p>
                                <p>Yes, you can add detours like Govardhan, Radha Kund, etc. Additional charges may apply.</p>

                                <p><b>Are round trip options flexible?</b></p>
                                <p>Yes, you can plan your return as per your convenience within the same day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
