import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/braj-nandgaon.png"; // Replace with actual image path

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
                                            alt="Vrindavan to Nandgaon Taxi Hire on Rent"
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
                            <h2>Book Vrindavan to Nandgaon Taxi/Cab</h2>

                            <p>Explore the divine land of Nandgaon with our taxi service from Vrindavan. Our cabs offer a comfortable and hassle-free way to visit this spiritual destination associated with Lord Krishna’s childhood.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Vrindavan To Nandgaon Taxi Fare (Per KM)</h2>
                                    <p>We offer fair and transparent per KM charges. Toll and parking charges are additional.</p>
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
                                    <h2>Vrindavan to Nandgaon Cab – One Way & Round Trip</h2>
                                    <p>Visit and return the same day or opt for one-way travel based on your itinerary.</p>
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
                                                <td>Rs. 1,099/-</td>
                                                <td>Rs. 1,999/-</td>
                                            </tr>
                                            <tr>
                                                <td>SUV (Ertiga/Xylo)</td>
                                                <td>Rs. 1,299/-</td>
                                                <td>Rs. 2,299/-</td>
                                            </tr>
                                            <tr>
                                                <td>Innova Crysta</td>
                                                <td>Rs. 1,499/-</td>
                                                <td>Rs. 2,699/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <QuickInquiry />

                            <div className="gauto-leave-comment">
                                <h3>Distance Between Vrindavan and Nandgaon</h3>
                                <p>The distance is approximately <strong>35 km</strong> and it takes around <strong>1 hour</strong> to reach, depending on traffic and road conditions.</p>

                                <h3>Top Attractions in Nandgaon</h3>
                                <ul>
                                    <li>Nand Bhawan – Residence of Nanda Maharaj</li>
                                    <li>Rangili Gali – Famous for Holi celebrations</li>
                                    <li>Pan Sarovar – One of the sacred lakes in the region</li>
                                </ul>

                                <h3>Why Travel with Us from Vrindavan to Nandgaon?</h3>
                                <ul>
                                    <li><strong>Local Drivers:</strong> Knowledgeable about temple routes and parking areas</li>
                                    <li><strong>Clean Vehicles:</strong> Sanitized and well-maintained fleet</li>
                                    <li><strong>Flexible Bookings:</strong> Customize your pick-up and drop as needed</li>
                                    <li><strong>Fair Pricing:</strong> No hidden charges or surprise costs</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>Is this suitable for a half-day trip?</b></p>
                                <p>Yes, Nandgaon can be comfortably covered in a half-day round trip from Vrindavan.</p>

                                <p><b>Do you provide temple guide services?</b></p>
                                <p>We can assist with reliable local guides at an additional charge on request.</p>

                                <p><b>How early should I book?</b></p>
                                <p>Advance booking is recommended during weekends and festival periods.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
