'use client';

import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import Head from 'next/head'; // Import Head for SEO
import {
    FaMapMarkerAlt,
    FaClock,
    FaCar,
    FaUtensils,
    FaCheck,
    FaTimes,
} from 'react-icons/fa';

const BadrinathTourPage = () => { // Renamed the component to be more specific
    // Define the Badrinath package details as a structured object
    const packageData = {
        title: "Badrinath Tour Package",
        duration: "3 Nights | 4 Days",
        priceStartingFrom: "₹6,500.00",
        imageUrl: "/tour/badrinath-dham.png", // Main image for the package
        quickInfo: {
            route: "Haridwar – Pipalkoti – Badrinath – Devprayag – Rishikesh – Haridwar",
            durationDetailed: "3 Nights & 4 Days",
            startPoint: "Haridwar",
            endPoint: "Haridwar",
        },
        overview: `Discover the beauty of the Outer Himalayan foothills & depart from Haridwar/Rishikesh to embark on this tour which takes you on a cultural & historical journey. Become a part of the ultimate religious trip to one of the Char Dhams – Badrinath. These places hold high regard among Hindu pilgrims seeking ‘Moksha’ and serenity. During this extensive tour, get close to the enchanting prayers of Hinduism. Visit the famous Badrinath temple which is more than 1,200 years old, located at the Garhwal Himalayan range near Mandakini river. Visit Rudraprayag, It is confluence of rivers Alaknanda and Mandakini. Enjoy shopping at Rishikesh local market and explore the famous Ram Jhula and Laxman Jhula.`,
        highlights: [
            "Marvel at the beautiful location of Badrinath Temple and soak in the captivating views.",
            "Discover and Visit all the historical temples of the city that will make your soul content with bliss.",
        ],
        itinerary: [
            {
                day: "Day 1",
                title: "Haridwar to Pipalkoti (240 kms) | Temple Visit",
                description: `Get picked up from Haridwar/Rishikesh pick up point and get transferred to Pipalkoti in a private vehicle. Get a mesmerizing view of Ganga all across the journey. See the confluence of Alaknanda and Bhagirathi river at Devprayag. The stop in between is at Srinagar which is the best place in the Garhwal region; afterward, there is no such facility to have food, so make sure you keep all essentials from here only. Once reach Pipalkoti get transferred to your hotel. Dinner at hotel and retire for the day. Make sure to have a good sleep to remove all stress and prepare for the next day.`,
            },
            {
                day: "Day 2",
                title: "Pipalkoti-Badrinath-Pipalkoti (140 kms) | Temple Visit",
                description: `After having breakfast, check out from the hotel and start driving to Badrinath, one of the charms and a holy pilgrimage site. Take a halt to visit Baniyakund, Joshimath, Govindghat, and Hanuman Chatti. After reaching Badrinath, visit the famous temple and join the aarti. Take a halt to visit Mana Village. Return to the hotel for dinner and an overnight stay.`,
            },
            {
                day: "Day 3",
                title: "Pipalkoti-Rudraprayag/Srinagar – Rishikesh(220 km)",
                description: `Wake up in the morning & get ready to experience the thrill of rafting through the cold waters of Ganga. Get transferred to the start point for rafting. Experience a round of enthralling rapids hitting your face and body while you drift by curves in the flowing river. It is a memory to be cherished. Take a rest stop at Maggie Point & go for cliff jumping. Get ready for the adrenaline rush & the excitement experienced while riding & tumbling down the white waters of the fast-flowing river while rafting & reach Neem Beach. Get transferred to the hotel where you can freshen up & have your delicious dinner.`,
            },
            {
                day: "Day 4",
                title: "Rishikesh – Haridwar",
                description: `After having breakfast, complete the check-out formalities of the hotel & depart for Haridwar. Conclude the trip with a bag full of memories after reaching Haridwar.`,
            },
        ],
        pricingTable: [
            { type: 'Sedan', price: '₹16/km', driverCharges: '₹400/-' },
            { type: 'Ertiga', price: '₹18/km', driverCharges: '₹400/-' },
            { type: 'Kia', price: '₹21/km', driverCharges: '₹400/-' },
            { type: 'Innova', price: '₹23/km', driverCharges: '₹400/-' },
            { type: 'Innova Crysta', price: '₹23/km', driverCharges: '₹400/-' },
            { type: '12 Seater Tempo Traveller', price: '₹27/km', driverCharges: '₹400/-' },
            { type: 'Mini Bus', price: 'Ask For Price', driverCharges: '₹400/-' },
            { type: '45 Seater Bus', price: 'Ask For Price', driverCharges: '₹400/-' },
        ],
        // You might want to add inclusions/exclusions for this package too, if applicable,
        // using the same structure as the Char Dham example.
    };

    return (
        <div className="col-lg-9">
            <Head>
                <title>{packageData.title}</title>
                <meta name="description" content={packageData.overview.substring(0, 160) + '...'} />
                <meta name="keywords" content="Badrinath tour, Badrinath temple, Uttarakhand pilgrimage, Vishnu temple, Haridwar, Rishikesh, Mana Village, spiritual tour, taxi service Uttarakhand" />
                {/* Add more meta tags as needed, e.g., Open Graph for social media */}
                <meta property="og:title" content={packageData.title} />
                <meta property="og:description" content={packageData.overview.substring(0, 160) + '...'} />
                <meta property="og:image" content={packageData.imageUrl} />
                <meta property="og:url" content={`https://yourwebsite.com/packages/badrinath-tour`} /> {/* Update with your actual URL */}
                <meta property="og:type" content="website" />
            </Head>

            <div className="blog-page-left">
                <div className="single-blog">

                    {/* Main Title and Price */}
                    <div className="package-header">
                        <h1>{packageData.title}</h1>
                        <p className="price-tag">Price Starting from - <strong>{packageData.priceStartingFrom}</strong></p>
                    </div>

                    {/* Carousel */}
                    <div className="blog-image">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Image
                                        className="d-block w-100"
                                        src={packageData.imageUrl}
                                        alt={packageData.title}
                                        width={1200}
                                        height={600}
                                        priority
                                    />
                                </div>
                                {/* Add more carousel items if you have more images */}
                                {/* <div className="carousel-item">
                                    <Image
                                        className="d-block w-100"
                                        src="/tour/some-other-badrinath-image.png"
                                        alt="Badrinath scenic view"
                                        width={1200}
                                        height={600}
                                    />
                                </div> */}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    {/* Basic Tour Info - Combined & Dynamic */}
                    <div className="blog-text">
                        <div className="my-4">
                            <h4>Quick Info :</h4>
                            <ul>
                                <li><strong><FaMapMarkerAlt /> Route:</strong> {packageData.quickInfo.route}</li>
                                <li><strong><FaClock /> Duration:</strong> {packageData.quickInfo.durationDetailed}</li>
                                <li><strong><FaCar /> Start Point:</strong> {packageData.quickInfo.startPoint}</li>
                                <li><strong><FaCar /> Endpoint:</strong> {packageData.quickInfo.endPoint}</li>
                            </ul>
                            {/* You can add general meal plan/transport details here if they apply to the overall package,
                                or keep it specific to taxi info further down */}
                        </div>

                        {/* Overview */}
                        <div className="my-4">
                            <h4>Overview :</h4>
                            {packageData.overview.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph.trim()}</p>
                            ))}
                        </div>

                        {/* Highlights */}
                        <div className="my-4">
                            <h4>Highlights :</h4>
                            <ul>
                                {packageData.highlights.map((highlight, index) => (
                                    <li key={index}><FaCheck style={{ color: 'green' }} /> {highlight}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Itinerary */}
                        <div className="my-4">
                            <h3>Itinerary</h3>
                            {packageData.itinerary.map((day, index) => (
                                <React.Fragment key={index}>
                                    <h4><strong>{day.day}:</strong> {day.title}</h4>
                                    <p>{day.description}</p>
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Pricing Table */}
                        <div className="mytable container">
                            <h3>Pricing for Taxi/Cab Service</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Taxi Type</th>
                                            <th>Price (Per Km)</th>
                                            <th>Driver Charges</th>
                                            <th>Enquiry</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {packageData.pricingTable.map((item, idx) => (
                                            <tr key={idx}>
                                                <td>{item.type}</td>
                                                <td>{item.price}</td>
                                                <td>{item.driverCharges}</td>
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

export default BadrinathTourPage; // Exporting the renamed component