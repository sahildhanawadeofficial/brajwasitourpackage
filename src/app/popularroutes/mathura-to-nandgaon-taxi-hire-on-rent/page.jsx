import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
export const metadata = {
    title: "Mathura to Nandgaon Taxi Hire",
    description: "Hire a taxi from Mathura to Nandgaon and explore the village of Krishna's foster father Nanda.",
    keywords: ["Mathura to Nandgaon taxi", "Krishna village", "Nandgaon travel", "spiritual taxi service"]
};

const taxiImage = "/tour/braj-nandgaon.png"; // Update the image path accordingly

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
                                            alt="Mathura to Nandgaon Taxi Hire on Rent"
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
                            <h2>Book Mathura to Nandgaon Taxi/Cab</h2>

                            <p>Experience a spiritual and peaceful journey from Mathura to the divine village of Nandgaon. Our taxi services ensure a smooth and affordable travel experience with professional drivers and well-maintained vehicles.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Mathura To Nandgaon Taxi Fare (Per KM)</h2>
                                    <p>We offer fair pricing with no hidden charges. Toll and parking are charged as per actuals.</p>
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
                                    <h2>Mathura to Nandgaon – One Way & Round Trip</h2>
                                    <p>Choose the perfect travel option—one way or round trip—based on your plan and time.</p>
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
                                                <td>Rs. 1,599/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 1,099/-</td>
                                                <td>Rs. 1,899/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 1,299/-</td>
                                                <td>Rs. 2,199/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Mathura and Nandgaon</h3>
                                <p>The distance from Mathura to Nandgaon is approximately <strong>50 km</strong> and usually takes <strong>1.5 to 2 hours</strong> depending on traffic and road conditions.</p>

                                <h3>Popular Stops Enroute</h3>
                                <ul>
                                    <li>Vrindavan – Sacred temples and ghats</li>
                                    <li>Barsana – Land of Radha Rani</li>
                                    <li>Govardhan Hill – Holy pilgrimage destination</li>
                                </ul>

                                <h3>Why Choose Our Mathura to Nandgaon Taxi Service?</h3>
                                <ul>
                                    <li><strong>Trusted Drivers:</strong> Knowledgeable, courteous, and familiar with the local terrain</li>
                                    <li><strong>Comfortable Rides:</strong> Clean and well-maintained fleet for a safe trip</li>
                                    <li><strong>Clear Pricing:</strong> No surprises—what you see is what you pay</li>
                                    <li><strong>Flexible Travel:</strong> Book for a quick visit or an extended stay</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>Can I customize the itinerary?</b></p>
                                <p>Yes, you can request additional stops or extended waiting time while booking.</p>

                                <p><b>Is advance booking required?</b></p>
                                <p>We recommend booking in advance, especially during festive seasons or weekends.</p>

                                <p><b>Do you allow round trips on the same day?</b></p>
                                <p>Yes, we provide same-day return options as well as overnight plans.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
