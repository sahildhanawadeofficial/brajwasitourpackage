import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import {
    FaMapMarkerAlt,
    FaClock,
    FaCar,
    FaUtensils,
    FaCheck,
    FaTimes,
} from 'react-icons/fa';

const Page = () => {
    return (
        <div className="col-lg-9">
            <div className="blog-page-left">
                <div className="single-blog">
                    {/* Carousel */}
                    <div className="blog-image">
                        <div id="carouselExampleControls" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Image
                                        className="d-block w-100"
                                        src="/tour/kedarnath-dham.png"
                                        alt="Kedarnath - One of the Char Dham Shiva Temples"
                                        width={1200}
                                        height={600}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tour Info */}
                    <div className="blog-text">
                        <h2>Price Starting from - ₹8,500.00</h2>

                        <ul>
                            <li>
                                <div>
                                    <strong>
                                        <FaMapMarkerAlt /> Duration:&nbsp;&nbsp;
                                    </strong>
                                    3 Nights | 4 Days
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>
                                        <FaClock /> Destination:&nbsp;&nbsp;
                                    </strong>
                                    Kedarnath, Uttarakhand
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>
                                        <FaCar /> Transport:
                                    </strong>
                                    &nbsp; Jeep / Shared Taxi
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>
                                        <FaUtensils /> Meal Plan:
                                    </strong>
                                    &nbsp; Breakfast & Dinner
                                </div>
                            </li>
                        </ul>

                        {/* Highlights */}
                        <h3>Kedarnath Tour Highlights</h3>
                        <ul>
                            <li>Marvel at the beautiful location of Kedarnath Temple and soak in the captivating views.</li>
                            <li>Discover and Visit all the historical temples of the city that will make your soul content with bliss.</li>
                        </ul>

                        {/* Overview */}
                        <h3>Kedarnath Tour Overview</h3>
                        <p>
                            Discover the beauty of the Outer Himalayan foothills & depart from Haridwar/Rishikesh to embark on this
                            tour which takes you on a cultural & historical journey. Become a part of the ultimate religious trip to one of the four Dhams – Kedarnath. This place holds high regard for Hindu pilgrims seeking 'Moksha' and serenity.
                            Visit the 1,200-year-old Kedarnath Temple located near the Mandakini river. Explore Rudraprayag, a confluence of rivers Alaknanda and Mandakini. Enjoy shopping at Rishikesh local market and explore Ram Jhula and Laxman Jhula.
                        </p>

                        {/* Quick Info */}
                        <h3>Quick Info:</h3>
                        <ul>
                            <li><strong>Route:</strong> Haridwar - Guptkashi - Kedarnath – Guptkashi - Devprayag</li>
                            <li><strong>Duration:</strong> 3 Nights & 4 Days</li>
                            <li><strong>Start Point:</strong> Haridwar</li>
                            <li><strong>End Point:</strong> Haridwar</li>
                        </ul>

                        <h4>Inclusions:</h4>
                        <ul>
                            <li>Pick up and drop as per your flight/train timings</li>
                            <li>Comfortable vehicle (Dzire/Ertiga/Innova/Tempo Traveller)</li>
                            <li>Double/triple-sharing basis stay in sanitized hotels</li>
                            <li>Breakfast and dinner included</li>
                            <li>Experienced driver cum guide</li>
                            <li>Sightseeing as per itinerary</li>
                        </ul>

                        <h4>New Dev Bhoomi Recommended:</h4>
                        <ul>
                            <li>Visit Gandhi Sarovar or Chorabari Lake near Kedarnath</li>
                            <li>See the majestic Vasudhara falls</li>
                        </ul>

                        {/* Full Itinerary */}
                        <h3>Itinerary: 3N/4D Kedarnath Tour</h3>

                        <h4><strong>Day 1:</strong> Haridwar to Guptkashi (220 km) | Temple Visit</h4>
                        <p>
                            Pickup from Haridwar/Rishikesh and head to Guptkashi. En route, view Devprayag, Rudraprayag,
                            and Ukhimath. Have a stop at Srinagar for refreshments. Upon arrival, check into the hotel.
                            Visit ArdhNarishwar Temple (if time permits). Dinner and overnight stay at Guptkashi.
                        </p>

                        <h4><strong>Day 2:</strong> Guptkashi - Gaurikund - Kedarnath | Visit Kedarnath Temple</h4>
                        <p>
                            Early morning leave for Gaurikund and begin the 16 km trek to Kedarnath. You may opt for pony or
                            palanquin. Enjoy natural beauty and lunch at Rambara. Reach Kedarnath Temple and attend evening
                            Darshan. Overnight stay in Kedarnath. (Meals at own cost)
                        </p>

                        <h4><strong>Day 3:</strong> Kedarnath to Guptkashi | Return Trek</h4>
                        <p>
                            After breakfast, descend 16 km to Gaurikund. Visit Gauri Kund Temple and head back to Guptkashi.
                            Check into hotel/homestay. Overnight stay at Guptkashi.
                        </p>

                        <h4><strong>Day 4:</strong> Guptkashi to Haridwar</h4>
                        <p>
                            After breakfast, depart for Haridwar. Stop at Rudraprayag and visit Ram Jhula, Laxman Jhula,
                            and local market in Rishikesh. Drop at Haridwar.
                        </p>

                        {/* Inclusion / Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                                    Package Inclusion | Exclusion
                                </h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                <div><FaCheck style={{ color: 'green' }} /> Accommodation near Kedarnath</div>
                                <div><FaCheck style={{ color: 'green' }} /> Jeep/Taxi transport from Gaurikund to Kedarnath</div>
                                <div><FaCheck style={{ color: 'green' }} /> Meals - Breakfast & Dinner</div>
                                <div><FaCheck style={{ color: 'green' }} /> Guided Temple Visit</div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                <div><FaTimes style={{ color: 'red' }} /> Travel to/from Gaurikund</div>
                                <div><FaTimes style={{ color: 'red' }} /> Personal Expenses</div>
                                <div><FaTimes style={{ color: 'red' }} /> Optional activities and donations</div>
                            </div>
                        </div>

                        {/* Pricing Table */}
                        <div className="mytable container">
                            <h3>Pricing for Taxi/Jeep Service</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Vehicle Type</th>
                                            <th>Price (Per Km)</th>
                                            <th>Driver Charges</th>
                                            <th>Enquiry</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Jeep', '₹25/km'],
                                            ['Shared Taxi', '₹15/km'],
                                            ['Innova', '₹20/km'],
                                            ['12 Seater Tempo Traveller', '₹30/km'],
                                            ['Mini Bus', 'Ask For Price'],
                                        ].map(([type, price], idx) => (
                                            <tr key={idx}>
                                                <td>{type}</td>
                                                <td>{price}</td>
                                                <td>₹300/-</td>
                                                <td>
                                                    <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquiry Now</button>
                                                </td>
                                            </tr>
                                        ))}
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

export default Page;
