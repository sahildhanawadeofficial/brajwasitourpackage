import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const TourDetailsPage = () => {


    return (
        <div className="col-lg-9">
            <div className="blog-page-left">
                <div className="single-blog">
                    <div className="blog-image">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Image
                                        className="d-block w-100"
                                        src="/images/mathuraVrindavan.webp"
                                        alt="Same Day Mathura Vrindavan Tour"
                                        width={800}
                                        height={400}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="blog-text">
                        <ul>
                            <li>
                                <div>
                                    <strong><i className="fa fa-map-marker" aria-hidden="true"></i>Destination:&nbsp;&nbsp;</strong>
                                    Agra - Mathura - Vrindavan - Agra
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><i className="fa fa-clock-o" aria-hidden="true"></i>Duration:&nbsp;&nbsp;</strong>
                                    Same Day
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><i className="fa fa-car" aria-hidden="true"></i>Transport:</strong>&nbsp; &nbsp;
                                    Hatchback - Sedan -SUV (Car)
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><i className="fa fa-cutlery" aria-hidden="true"></i>Meal Plan:</strong>&nbsp; &nbsp;
                                    Breakfast
                                </div>
                            </li>
                        </ul>

                        <h2>Description :</h2>
                        <p>
                            Embark on a spiritually enriching journey from Agra to Mathura and Vrindavan,
                            exploring the divine birthplace of Lord Krishna. This one-day tour offers an
                            immersive experience of sacred temples, ghats, and historical sites. Enjoy a
                            comfortable ride in a private AC car with a well-planned itinerary that ensures a
                            hassle-free and memorable trip. Whether you're a devotee or a traveler seeking
                            cultural insights, this tour is perfect for experiencing the spiritual aura of
                            Mathura and Vrindavan.
                        </p>

                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                                    Package Inclusion | Exclusion
                                </h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1">
                                    <i className="fa fa-check" style={{ fontSize: "24px", color: "green" }}></i> Guide Services
                                </div>
                                <div className="flex-horizontal-center mb-3 text-gray-1">
                                    <i className="fa fa-check" style={{ fontSize: "24px", color: "green" }}></i> Entrance Fees
                                </div>
                                <div className="flex-horizontal-center mb-3 text-gray-1">
                                    <i className="fa fa-check" style={{ fontSize: "24px", color: "green" }}></i> All transportation in destination location
                                </div>
                                <div className="flex-horizontal-center mb-3 text-gray-1">
                                    <i className="fa fa-check" style={{ fontSize: "24px", color: "green" }}></i> Toll Tax, State Tax, Driver Batta (Charges)
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div className="flex-horizontal-center mb-3 text-gray-1">
                                    <i className="fa fa-close" style={{ fontSize: "24px", color: "red" }}></i> Flight & train ticket.
                                </div>
                                <div className="flex-horizontal-center mb-3 text-gray-1">
                                    <i className="fa fa-close" style={{ fontSize: "24px", color: "red" }}></i> Camera Charges
                                </div>
                                <div className="flex-horizontal-center mb-3 text-gray-1">
                                    <i className="fa fa-close" style={{ fontSize: "24px", color: "red" }}></i> Room Service Fees
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : Same Day Mathura Tour from Agra Tour</h3>
                                <br /><br />

                                <h4><strong>06:00 AM</strong><strong>&nbsp;:&nbsp;&nbsp;</strong>
                                    <span style={{ color: "rgb(236, 51, 35)" }}>Pickup from Agra</span>&nbsp;
                                </h4>
                                <br />
                                <p>
                                    Your journey begins early in the morning as our driver picks you up from your
                                    location in Agra. The peaceful morning drive offers a refreshing experience,
                                    preparing you for a spiritually uplifting day ahead. Sit back and enjoy the
                                    scenic beauty as you make your way towards Mathura.
                                </p>

                                <h4><strong>08:00 AM</strong><strong>&nbsp;:&nbsp;&nbsp;</strong>
                                    <span style={{ color: "rgb(236, 51, 35)" }}>Arrival in Mathura</span>&nbsp;
                                </h4>
                                <br />
                                <p>
                                    Upon reaching Mathura, dive into the spiritual ambiance of this sacred city.
                                    Begin your visit at the Shri Krishna Janmabhoomi Temple, the birthplace of
                                    Lord Krishna, where you can feel the deep devotion surrounding this holy
                                    place. Next, explore the Dwarkadhish Temple, an architectural masterpiece
                                    dedicated to Lord Krishna. Conclude your Mathura exploration at Vishram
                                    Ghat, a serene riverside spot where devotees perform religious rituals,
                                    soaking in the divine atmosphere.
                                </p>

                                <h4><strong>11:00 AM </strong><strong>&nbsp;:&nbsp;&nbsp;</strong>
                                    <span style={{ color: "rgb(236, 51, 35)" }}>Proceed to Vrindavan</span>&nbsp;
                                </h4>
                                <br />
                                <p>
                                    After an enriching experience in Mathura, continue your journey to Vrindavan,
                                    a town famous for its association with Lord Krishna's playful childhood
                                    days. Begin with the Banke Bihari Temple, one of the most revered Krishna
                                    temples, where the energetic chants create an electrifying atmosphere. Next,
                                    visit the Prem Mandir, a beautifully crafted temple that mesmerizes visitors
                                    with its intricate carvings and divine light show. End your Vrindavan tour
                                    at the ISKCON Temple, a peaceful retreat where you can participate in
                                    devotional songs and immerse yourself in spirituality.
                                </p>

                                <h4><strong>01:30 PM</strong><strong>&nbsp;:&nbsp;&nbsp;</strong>
                                    <span style={{ color: "rgb(236, 51, 35)" }}>Lunch Break</span>&nbsp;
                                </h4>
                                <br />
                                <p>
                                    Take a break and enjoy a delightful vegetarian meal at a local restaurant (at
                                    your own expense). The flavors of Mathura and Vrindavan's traditional
                                    cuisine add to the charm of your journey, providing a perfect moment to
                                    relax and recharge before continuing.
                                </p>

                                <h4><strong>03:00 PM</strong><strong>&nbsp;:&nbsp;&nbsp;</strong>
                                    <span style={{ color: "rgb(236, 51, 35)" }}>Visit to Govardhan Hill & Radha Kund (Optional)</span>&nbsp;
                                </h4>
                                <br />
                                <p>
                                    For those seeking an extended spiritual experience, a short trip to Govardhan
                                    Hill is available. This sacred site holds deep significance in Krishna's
                                    legends and offers breathtaking views. Nearby, visit Radha Kund, a holy
                                    water reservoir where devotees come to offer prayers and feel a deep
                                    connection with Krishna and Radha's love story.
                                </p>

                                <h4><strong>05:00 PM</strong><strong>&nbsp;:&nbsp;&nbsp;</strong>
                                    <span style={{ color: "rgb(236, 51, 35)" }}> Departure for Agra</span>&nbsp;
                                </h4>
                                <br />
                                <p>
                                    As your spiritual journey comes to an end, embark on your return trip to
                                    Agra. Reflect on the divine experiences, the mesmerizing temples, and the
                                    peaceful ambiance as you travel back, carrying with you the blessings of
                                    Lord Krishna.
                                </p>

                                <h4><strong>07:00 PM</strong><strong>&nbsp;:&nbsp;&nbsp;</strong>
                                    <span style={{ color: "rgb(236, 51, 35)" }}>Arrival in Agra</span>&nbsp;
                                </h4>
                                <br />
                                <p>
                                    Upon arrival in Agra, you will be dropped off at your preferred location,
                                    marking the end of your sacred journey. The day concludes with cherished
                                    memories of divine experiences and a heart filled with spirituality.
                                </p>
                            </div>
                        </div>

                        <div className="mytable container">
                            <h3>Pricing for Taxi/Cab Service</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Taxi Type</th>
                                            <th>Seating</th>
                                            <th>Price</th>
                                            <th>Enquiry</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sedan</td>
                                            <td>1+4</td>
                                            <td>₹3,000/-</td>
                                            <td>
                                                <a href="#" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    Enquiry Now
                                                </a>
                                            </td>
                                        </tr>
                                        {/* Other table rows would follow the same pattern */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <QuickInquiry />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetailsPage;