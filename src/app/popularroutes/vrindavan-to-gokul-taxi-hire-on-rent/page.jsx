import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
export const metadata = {
    title: "Vrindavan to Gokul Taxi Hire",
    description: "Book a taxi from Vrindavan to Gokul to visit the divine childhood abode of Lord Krishna.",
    keywords: ["Vrindavan to Gokul taxi", "Gokul cab", "Krishna childhood tour", "Vrindavan travel"]
};

const taxiImage = "/tour/braj-vrindavan.png"; // Replace with actual image path if needed

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
                                            alt="Vrindavan to Gokul Taxi Hire on Rent"
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
                            <h2>Book Vrindavan to Gokul Taxi/Cab</h2>

                            <p>Planning a visit from Vrindavan to Gokul? Our taxi service offers a smooth and reliable ride between these two holy towns. Choose from multiple car types at affordable prices for one-way or round trip.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Vrindavan To Gokul Taxi Fare (Per KM)</h2>
                                    <p>Get affordable and fair pricing per kilometer. Toll, parking, and taxes are extra.</p>
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
                                    <h2>Vrindavan to Gokul – One Way & Round Trip</h2>
                                    <p>Flexible options for quick trips or a full-day tour experience.</p>
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
                                                <td>Rs. 799/-</td>
                                                <td>Rs. 1,599/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 999/-</td>
                                                <td>Rs. 1,899/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 1,199/-</td>
                                                <td>Rs. 2,199/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Vrindavan and Gokul</h3>
                                <p>The distance is approximately <strong>15 km</strong> and the travel time is around <strong>30–40 minutes</strong>, depending on traffic.</p>

                                <h3>Top Attractions in Gokul</h3>
                                <ul>
                                    <li>Chaurasi Khamba</li>
                                    <li>Raman Reti</li>
                                    <li>Nanda Bhavan</li>
                                </ul>

                                <h3>Why Book With Us?</h3>
                                <ul>
                                    <li><strong>Clean Cars:</strong> Sanitized and AC taxis for a smooth journey</li>
                                    <li><strong>Experienced Drivers:</strong> Familiar with all local routes and temples</li>
                                    <li><strong>Flexible Options:</strong> Customize your return time or stops en route</li>
                                    <li><strong>No Hidden Charges:</strong> Clear pricing with detailed breakup</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>How do I confirm my booking?</b></p>
                                <p>Click on the “Book Now” button or fill out the inquiry form. We’ll confirm your ride via call or WhatsApp.</p>

                                <p><b>Do you provide temple tours in Gokul?</b></p>
                                <p>Yes, we can provide a guided local temple visit in Gokul for additional cost.</p>

                                <p><b>Is waiting time included in round trip?</b></p>
                                <p>Yes, standard waiting time is included in round trip plans.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
