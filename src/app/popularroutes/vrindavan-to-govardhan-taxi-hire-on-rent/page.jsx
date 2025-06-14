import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
export const metadata = {
    title: "Vrindavan to Govardhan Taxi Hire",
    description: "Hire a taxi from Vrindavan to Govardhan and explore the sacred hill lifted by Lord Krishna.",
    keywords: ["Vrindavan to Govardhan taxi", "Govardhan hill tour", "Krishna lila site", "spiritual taxi"]
};

const taxiImage = "/tour/govardhan-parikrama.png"; // Replace with actual image path

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
                                            alt="Vrindavan to Govardhan Taxi Hire on Rent"
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
                            <h2>Book Vrindavan to Govardhan Taxi/Cab</h2>

                            <p>Planning a sacred visit to Govardhan from Vrindavan? Our taxi service ensures a smooth and comfortable ride to the holy Govardhan Parikrama path. Choose from one-way or round trip cabs at fair prices.</p>

                            <div className="row">
                                <div className="call-box-inner12">
                                    <h2>Vrindavan To Govardhan Taxi Fare (Per KM)</h2>
                                    <p>Fair pricing with complete transparency. Toll and parking are additional as per actuals.</p>
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
                                    <h2>Vrindavan to Govardhan – One Way & Round Trip</h2>
                                    <p>Ideal for darshan and Govardhan Parikrama with flexible pickup and drop-off timing.</p>
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
                                <h3>Distance Between Vrindavan and Govardhan</h3>
                                <p>The distance is about <strong>25 km</strong> and the journey usually takes <strong>45–60 minutes</strong>, depending on traffic.</p>

                                <h3>Places to Visit in Govardhan</h3>
                                <ul>
                                    <li>Govardhan Parikrama Path</li>
                                    <li>Kusum Sarovar</li>
                                    <li>Radha Kund and Shyam Kund</li>
                                </ul>

                                <h3>Why Choose Us for Vrindavan to Govardhan Taxi?</h3>
                                <ul>
                                    <li><strong>Punctual Drivers:</strong> On-time service with route familiarity</li>
                                    <li><strong>Well-Maintained Cars:</strong> AC vehicles with regular sanitation</li>
                                    <li><strong>Custom Packages:</strong> Flexible timing, multiple stops possible</li>
                                    <li><strong>No Hidden Charges:</strong> Clear and upfront pricing</li>
                                </ul>

                                <h3>FAQs</h3>
                                <p><b>How can I book a cab?</b></p>
                                <p>Click “Book Now” or fill the inquiry form. You’ll get confirmation via call or WhatsApp.</p>

                                <p><b>Is Govardhan Parikrama vehicle-accessible?</b></p>
                                <p>Vehicles are allowed only up to specific points. We guide you to the best drop-off point.</p>

                                <p><b>Can I do Parikrama and return the same day?</b></p>
                                <p>Yes, our round trip option includes enough waiting time to complete the Parikrama.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
