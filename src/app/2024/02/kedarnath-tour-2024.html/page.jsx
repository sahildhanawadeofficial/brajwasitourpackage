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

const Page = () => {
    // Define the Kedarnath package details as a structured object
    const packageData = {
        title: "Kedarnath Tour Package", // Added a title for the package
        priceStartingFrom: "₹8,500.00",
        duration: "3 Nights | 4 Days",
        destination: "Kedarnath, Uttarakhand",
        transport: "Jeep / Shared Taxi",
        mealPlan: "Breakfast & Dinner",
        imageUrl: "/tour/kedarnath-dham.png", // Main image for the package

        overview: `Discover the beauty of the Outer Himalayan foothills & depart from Haridwar / Rishikesh to embark on this tour which takes you on a cultural & historical journey. Become a part of the ultimate religious trip to two of the four Dhams - Kedarnath tour. These places hold high regard for the Hindu pilgrims seeking 'Moksha' and serenity. During this extensive tour, get close to the enchanting prayers of Hinduism. Visit the famous Kedarnath temple which is more than 1,200 years old, located at the Garhwal Himalayan range near the Mandakini river. Visit Rudraprayag, It is a confluence of rivers Alaknanda and Mandakini. Enjoy shopping at Rishikesh local market and explore the famous Ram Jhula and Laxman Jhula.`,

        quickInfo: {
            route: "Haridwar - Guptkashi - Kedarnath – Guptkashi - Devprayag",
            durationDetailed: "3 Nights & 4 Days",
            startPoint: "Haridwar",
            endPoint: "Haridwar",
        },

        highlights: [
            "Marvel at the beautiful location of Kedarnath Temple and soak in the captivating views.",
            "Discover and Visit all the historical temples of the city that will make your soul content with bliss.",
        ],

        inclusions: [
            "Pick up and drop as per your flight timings",
            "Comfortable and hygienic vehicle(Swift Dzire / Ertiga / Innova / Scorpio / Tempo Traveler / Similar) for sightseeing on all days as per the itinerary.",
            "Stay on a double and triple - sharing basis in hygienic and sanitized hotels.",
            "Breakfast and dinner as per the itinerary.",
            "Highly - Experienced driver cum guide",
            "Sightseeing as per itinerary.",
        ],

        exclusions: [ // Inclusions and Exclusions from your previous structure for completeness
            "Travel to/from Gaurikund (This seems contradictory with the itinerary and inclusions, please review if this is accurate or if it refers to specific local transport not covered by the vehicle)",
            "Personal Expenses",
            "Optional activities and donations",
            "Meals on Day 2 (as specified in itinerary for Kedarnath stay)",
        ],

        newDevBhoomiRecommended: [
            "Visit Gandhi Sarovar or Chorabari Lake located near Kedarnath",
            "Go and see the Vasudhara falls",
        ],

        itinerary: [
            {
                day: "Day 1",
                title: "Haridwar to Guptkashi (220 km) | Temple Visit",
                description: `Get picked up from the Haridwar / Rishikesh pick - up point and get transferred to Guptkashi in a private vehicle. Get a mesmerizing view of the Ganga all across the journey. See the confluence of Alaknanda and Bhagirathi rivers at Devprayag. The stop in between is at Srinagar which is the best place in the Garhwal region, afterwards, there is no such facility to have food so make sure you keep all essentials from here only. Get a view of Rudraprayag, Ukhimath on the journey. Once reach Guptkashi get transferred to your hotel. Visit ArdhNarishwar Temple(If time permits). Dinner at the hotel and retire for the day. Make sure to have a good sleep to remove all stress and prepare for the next day.`,
            },
            {
                day: "Day 2",
                title: "Guptkashi - Gaurikund - Kedarnath | Visit to Kedarnath Temple",
                description: `Wake up with the mesmerizing view of mountains all across. Leave early around 5 AM to have proper time to visit the Kedarnath temple. The hike is there from Gaurikund to Kedarnath Temple which is on 16Km one side. You can take ponies or palanquins for the journey to make it slightly on a comfortable side. Walk through the beautiful valley and river stream flowing between them. Have lunch stop in between around Rambara. Once you are done with this journey it will surely be worthwhile because you will get to see the Kedarnath Temple, situated right at the center of the valley with mountains on every side looking like they are providing safety to the temples. This scene will surely bring charm to your eyes. Indulged in Darshan at Kedarnath Temple, feel the relief when you just close your eyes and see yourself in the arms of the holy divine. Reach the hotel and overnight stay in Kedarnath. Kindly take Food at your own cost.`,
            },
            {
                day: "Day 3",
                title: "Kedarnath to Guptkashi | Sightseeing across Journey",
                description: `Wake up in the laps of mountains. Have Breakfast at the hotel / homestay and head towards Guptkashi. Once again you have to trek down 16 km from Kedarnath to Gupkashi. On your journey take a halt at Gauri Kund and visit the holy Gauri kund temple. Get checked into a hotel / homestay for rest after a tiring journey. Overnight stay at Guptkashi.`,
            },
            {
                day: "Day 4",
                title: "Guptkashi - Haridwar",
                description: `Wake up with the view of the mountains. Have breakfast and start your journey towards Haridwar. You will see mesmerizing views all along the way. Rudraprayag is the point of confluence of rivers Alaknanda and Mandakini. Visit Ram Jhula and Laxman Jhula, and explore the local market. You will see mesmerizing views all along the way.`,
            },
        ],
        pricingTable: [
            { type: 'Jeep', price: '₹25/km', driverCharges: '₹300/-' },
            { type: 'Shared Taxi', price: '₹15/km', driverCharges: '₹300/-' },
            { type: 'Innova', price: '₹20/km', driverCharges: '₹300/-' },
            { type: '12 Seater Tempo Traveller', price: '₹30/km', driverCharges: '₹300/-' },
            { type: 'Mini Bus', price: 'Ask For Price', driverCharges: '₹300/-' },
        ],
    };

    return (
        <div className="col-lg-9">
            <Head>
                <title>{packageData.title}</title>
                <meta name="description" content={packageData.overview.substring(0, 160) + '...'} />
                <meta name="keywords" content="Kedarnath tour, Kedarnath temple, Uttarakhand pilgrimage, Shiva temple, Haridwar, Rishikesh, Guptkashi, spiritual tour, taxi service Uttarakhand" />
                {/* Open Graph Tags */}
                <meta property="og:title" content={packageData.title} />
                <meta property="og:description" content={packageData.overview.substring(0, 160) + '...'} />
                <meta property="og:image" content={packageData.imageUrl} />
                <meta property="og:url" content={`https://yourwebsite.com/packages/kedarnath-tour`} /> {/* Update with your actual URL */}
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

                    {/* Basic Tour Info */}
                    <div className="blog-text">
                        <div className="my-4">
                            <h2>{packageData.title}</h2> {/* Repeating title for clarity, can be adjusted */}
                            <p><strong>Duration:</strong> {packageData.duration}</p>
                            <p><strong>Price Starting From:</strong> {packageData.priceStartingFrom}</p>

                            <h4>Quick Info :</h4>
                            <ul>
                                <li><strong><FaMapMarkerAlt /> Route:</strong> {packageData.quickInfo.route}</li>
                                <li><strong><FaClock /> Duration:</strong> {packageData.quickInfo.durationDetailed}</li>
                                <li><strong><FaCar /> Start Point:</strong> {packageData.quickInfo.startPoint}</li>
                                <li><strong><FaCar /> Endpoint:</strong> {packageData.quickInfo.endPoint}</li>
                            </ul>
                        </div>

                        {/* Highlights */}
                        <div className="my-4">
                            <h3>Kedarnath Tour Highlights</h3>
                            <ul>
                                {packageData.highlights.map((highlight, index) => (
                                    <li key={index}><FaCheck style={{ color: 'green' }} /> {highlight}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Overview */}
                        <div className="my-4">
                            <h3>Kedarnath Tour Overview</h3>
                            <p><strong>About the Tour:</strong></p>
                            {packageData.overview.split('. ').map((sentence, index, array) => (
                                // Adding a period back to each sentence except the last one
                                <p key={index}>{sentence + (index < array.length - 1 ? '.' : '')}</p>
                            ))}
                        </div>

                        {/* Inclusions */}
                        <h4>Inclusions:</h4>
                        <ul>
                            {packageData.inclusions.map((item, index) => (
                                <li key={index}><FaCheck style={{ color: 'green' }} /> {item}</li>
                            ))}
                        </ul>

                        {/* New Dev Bhoomi Recommended */}
                        <h4>New Dev Bhoomi Recommended:</h4>
                        <ul>
                            {packageData.newDevBhoomiRecommended.map((item, index) => (
                                <li key={index}><FaCheck style={{ color: 'green' }} /> {item}</li>
                            ))}
                        </ul>

                        {/* Full Itinerary */}
                        <h3>Itinerary: {packageData.quickInfo.durationDetailed} {packageData.title.replace(' Tour Package', '')}</h3>

                        {packageData.itinerary.map((day, index) => (
                            <React.Fragment key={index}>
                                <h4><strong>{day.day}:</strong> {day.title}</h4>
                                <p>{day.description}</p>
                            </React.Fragment>
                        ))}

                        {/* Inclusion / Exclusion Section (reusing your structure) */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                                    Package Inclusion | Exclusion
                                </h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                {packageData.inclusions.map((item, index) => (
                                    <div key={`inc-${index}`}><FaCheck style={{ color: 'green' }} /> {item}</div>
                                ))}
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                {packageData.exclusions.map((item, index) => (
                                    <div key={`exc-${index}`}><FaTimes style={{ color: 'red' }} /> {item}</div>
                                ))}
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

export default Page;