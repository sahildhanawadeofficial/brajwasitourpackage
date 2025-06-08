import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Assuming this path is correct
import { FaMapMarkerAlt, FaClock, FaCar, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa';
import Head from 'next/head'; // Import Head for SEO

const CharDhamYatraPage = () => {
    // Define the package details as a structured object
    const packageData = {
        title: "Char Dham Yatra Package: 9 Nights & 10 Days Ex Haridwar/Rishikesh",
        shortDescription: "Tour of four holy sites - Yamunotri, Gangotri, Kedarnath and Badrinath.",
        priceStartingFrom: "₹18,500.00",
        duration: "10 Nights | 11 Days", // Corrected based on itinerary
        destinations: "Yamunotri, Gangotri, Kedarnath, Badrinath",
        transport: "Tempo Traveller / Bus / Jeep",
        mealPlan: "Breakfast & Dinner",
        imageUrl: "/tour/kedarnath-dham.png", // Main image for the package
        overview: `Uttarakhand, also known as Devbhoomi or the Land of Gods, is home to numerous temples and welcomes devotees all year round. Among the countless religious sites and circuits that devotees visit in Uttarakhand, one of the most prominent is the Char Dham Yatra. This Yatra or pilgrimage is a tour of four holy sites - Yamunotri, Gangotri, Kedarnath and Badrinath – nestled high up in the Himalayas. In Hindi, 'char' means four and 'dham' refers to religious destinations.

        The high-altitude shrines remain shut for around six months every year, opening in summers (April or May) and closing with the onset of winter (October or November). It is believed that one should complete the Char Dham Yatra in a clockwise direction. Hence, the pilgrimage starts from Yamunotri, proceeds towards Gangotri, onto Kedarnath, and finally ends at Badrinath. The journey can be completed by road or by air (helicopter services are available).

        The Yamunotri temple, lodged in a narrow gorge close to the source of River Yamuna in Uttarkashi district, is dedicated to Goddess Yamuna. The district of Uttarkashi is also home to Gangotri dedicated to Goddess Ganga, the most sacred of all Indian rivers. Located in the Rudraprayag district lies Kedarnath, dedicated to Lord Shiva. Badrinath, home to the sacred Badrinarayan Temple, is dedicated to Lord Vishnu. The Char Dham Yatra is as divine as it is arduous but fulfills the soul!`,
        inclusions: [
            "Accommodation at all Dham locations",
            "Meals – Breakfast & Dinner",
            "Local sightseeing and temple visits",
            "Transport by Tempo Traveller/Bus",
            "Dedicated tour guide assistance"
        ],
        exclusions: [
            "Helicopter charges to Kedarnath (optional)",
            "Pony/Doli charges",
            "Personal expenses",
            "Any travel insurance or tips"
        ],
        itinerary: [
            { day: "Day 1", title: "Haridwar – Barkot", description: "Arrive in Haridwar. Meet and greet with our representative. Drive to Barkot via Mussoorie. On arrival check-in to Hotel. Overnight at the hotel." },
            { day: "Day 2", title: "Barkot– Yamunotri – Barkot", description: "Early morning drive Jankichatti and trek for 06 kms both side to reach Yamunotri. Visit the temple of Goddess Yamuna which is situated on the banks of the river. There is a hot water spring adjacent to this temple. The pilgrims take a holy dip in this spring before darshan of the temple. After darshan return back to Jankichatti and drive to barkot. Dinner & Overnight stay at Barkot." },
            { day: "Day 3", title: "Barkot– Uttarkashi", description: "Morning after breakfast check out from the hotel and drive to Uttarkashi. Visit the famous temple of Kashi – vishwanath. On arrival at Uttarkashi, check-in to the hotel for an overnight stay." },
            { day: "Day 4", title: "Uttarkashi – Gangotri – Uttarkashi", description: "After breakfast, we proceed to Harsil. This is one of the most beautiful valleys in Uttarakhand. On the way we can halt at Gangnani which again has hot water springs. Then drive to Gangotri (22 kms/1 hr). Over here devotees take a holy dip in the most Holy River of Hindus- The Ganges. It is also called Bhagirathi from where it originates. In the afternoon return back to Uttarkashi. Dinner & Overnight stay at Uttarakashi." },
            { day: "Day 5", title: "Uttarkashi – Guptkashi", description: "The morning after breakfast check out from the hotel and then drive to Guptkashi Via Srinagar to visit Dhari Devi Temple. On arrival at Guptkashi, check-in to the hotel for an overnight stay." },
            { day: "Day 6", title: "Guptkashi – GauriKund – Kedarnath", description: "Early morning after breakfast check out from the hotel and drive to Sonprayag. From there, you will start your 20 km trek to Kedarnath. You can hire a doli or a horse for your trek (Cost Not Included). On arrival at Kedarnath, check-in to the camp for an overnight stay. Only basic accommodation/tent is available on a sharing basis, you can take meals at your own cost." },
            { day: "Day 7", title: "Kedarnath – Gaurikund – Guptkashi", description: "Early in the morning go for temple darshan. After darshan trek down to Gaurikund. Your vehicle awaits for you in Sonprayag/Sitapur Car Parking which will drive you back to the hotel in Guptkashi. On arrival, check-in to the hotel for an overnight stay. _Reference to Helicopter service:_ Kindly Note: There will be some changes in the itinerary for those who are unable to get Heli service due the weather condition for visiting Kedarnath on day 06. The alternative programme for day 07 would be as follows: Those who are unable to get Heli Service, for visiting the Kedarnath Temple, start the trek early in the morning of day 07 by pony/Doli/walk (approx 21 Kms one side), so that you can come back the same day by late evening." },
            { day: "Day 8", title: "Guptkashi – Tungnath - Pipalkoti", description: "After an early breakfast, we proceed to Badrinath. We halt for some time en route at Chopta. Chopta is popularly called the Switzerland of India.You can enjoy a splendid view of the snow- capped Himalayan peaks from here.Enjoy the beautiful drive through medicinal forests when you arrive at the Pipalkoti check in hotel.Dinner & Overnight stay at Pipalkoti." },
            { day: "Day 9", title: "Pipalkoti - Badrinath", description: "Early in the morning go for temple darshan. After you go and enjoy the interesting sightseeing of Mana Village (the last village before the Tibetan border). Visit Vyas Gufa, Ganesh Gufa, Charan Paduka, Bhim pul and the \"Mukh\" of the Saraswati River. After that drive to Pipalkoti, check-in to the hotel for an overnight stay." },
            { day: "Day 10", title: "Pipalkoti – Haridwar", description: "Early morning after breakfast you drive downhill to Rishikesh, a spiritual city and the Yoga capital of the world. On reaching Rishikesh you'll do the Rishikesh sightseeing visit Ram Jhula and Laxman Jhula. In the evening drive to Haridwar and drop at the Railway Station." },
            { day: "Day 11", title: "Departure from Rishikesh", description: "Tour concludes. Proceed for onward journey or return home." }
        ],
        pricingTable: [
            { type: 'Tempo Traveller (12-Seater)', price: '₹6,000/day', driverCharges: '₹500/-' },
            { type: 'Innova', price: '₹4,500/day', driverCharges: '₹500/-' },
            { type: 'Mini Bus', price: 'Ask For Price', driverCharges: '₹500/-' },
        ]
    };

    return (
        <div className="col-lg-9">
            <Head>
                <title>{packageData.title}</title>
                <meta name="description" content={packageData.overview.substring(0, 160) + '...'} />
                <meta name="keywords" content="Char Dham Yatra, Uttarakhand, Yamunotri, Gangotri, Kedarnath, Badrinath, pilgrimage, Hindu temples, tour package, Haridwar, Rishikesh, Devbhoomi" />
                {/* Add more meta tags as needed, e.g., Open Graph for social media */}
                <meta property="og:title" content={packageData.title} />
                <meta property="og:description" content={packageData.overview.substring(0, 160) + '...'} />
                <meta property="og:image" content={packageData.imageUrl} />
                <meta property="og:url" content={`https://yourwebsite.com/packages/char-dham-tour`} /> {/* Update with your actual URL */}
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
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"> {/* Added data-bs-ride="carousel" for auto-cycling */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Image
                                        className="d-block w-100"
                                        src={packageData.imageUrl}
                                        alt={packageData.title}
                                        width={1200}
                                        height={600}
                                        priority // Mark as priority if it's the main image above the fold
                                    />
                                </div>
                                {/* Add more carousel items if you have more images */}
                                {/* <div className="carousel-item">
                                    <Image
                                        className="d-block w-100"
                                        src="/tour/badrinath-dham.png"
                                        alt="Badrinath Temple"
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

                    {/* Tour Info */}
                    <div className="blog-text">
                        <p className="package-short-description">{packageData.shortDescription}</p>
                        <ul className="tour-details-list">
                            <li>
                                <div>
                                    <strong><FaMapMarkerAlt /> Duration:&nbsp;&nbsp;</strong>{packageData.duration}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaClock /> Destinations:&nbsp;&nbsp;</strong>
                                    {packageData.destinations}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaCar /> Transport:</strong>&nbsp; {packageData.transport}
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong><FaUtensils /> Meal Plan:</strong>&nbsp; {packageData.mealPlan}
                                </div>
                            </li>
                        </ul>

                        <h2>Overview</h2>
                        {packageData.overview.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph.trim()}</p>
                        ))}

                        {/* Inclusion/Exclusion */}
                        <div className="row">
                            <div className="col-md-12 py-4">
                                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                                {packageData.inclusions.map((item, index) => (
                                    <div key={index}><FaCheck style={{ color: 'green' }} /> {item}</div>
                                ))}
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                                {packageData.exclusions.map((item, index) => (
                                    <div key={index}><FaTimes style={{ color: 'red' }} /> {item}</div>
                                ))}
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="row">
                            <div className="call-box-inner12">
                                <h3>Itinerary : {packageData.duration} Char Dham Yatra</h3>
                                {packageData.itinerary.map((day, index) => (
                                    <React.Fragment key={index}>
                                        <h4><strong>{day.day}:</strong> {day.title}</h4>
                                        {day.description.split('._').map((descPart, descIndex) => ( // Split by "._" to handle the helicopter note
                                            <p key={descIndex}>{descPart.trim()}</p>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Pricing Table */}
                        <div className="mytable container">
                            <h3>Pricing for Transport Options</h3>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Vehicle Type</th>
                                            <th>Price (Per Day)</th>
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
                                                <td><button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Enquiry Now</button></td>
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

export default CharDhamYatraPage;