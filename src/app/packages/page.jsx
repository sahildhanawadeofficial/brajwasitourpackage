// components/HomeContent.js
import Image from 'next/image';
import Link from 'next/link'; // For internal navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import MathuraVrindavanTours from '@/components/MathuraVrindavanTours';
import Whychooseonlinetaxiservice from '@/components/Whychooseonlinetaxiservice';
import OutstationTaxiServices from '@/components/OutstationTaxiServices';
import LocalTaxiServices from '@/components/LocalTaxiServices';
import PopularTaxiRoutes from '@/components/PopularTaxiRoutes';
import FaqSection from '@/components/FaqSection';
import HireTaxiSedan from '@/components/HireTaxiSedan';
import PromoArea from '@/components/PromoArea';
import ServiceSection from '@/components/ServiceSection';

// You'd typically have your global styles imported in layout.js or _app.js
// import styles from './HomeContent.module.css'; // Example for CSS Modules


const HomeContent = () => {


    return (
        <>


            {/* About Area Start */}
            <section className="gauto-about-area section_70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-left">
                                <h1>Mathura Vrindavan Taxi Services</h1>
                                <p>
                                    Launched in 2015, <b>Mathura-Vrindavan Taxi services</b> in Mathura offers highly
                                    professional & premium services for all types of occasions and guests. We have luxury taxis
                                    with well-trained & groomed drivers. Special supervision by our agent during the trip.
                                </p>

                                <p>
                                    We offer the Top-rated skilled and trained Chauffeurs to make your drive secure &
                                    comfortable. Drivers are the most important people when it comes to travelling. They are not
                                    only who take you to your destination, but they also guide you in exploring the places which
                                    come along the way. We have the best professional drivers, who will take you safely to your
                                    destination and will also help you in exploring.
                                </p>

                                <p>
                                    We commit to providing the most economic taxi services in Mathura - Vrindavan as well as
                                    luxury services as per your need and comfort. We understand that travelling to a city
                                    without a taxi can be really inconvenient, some aim to provide the most economical taxi
                                    services in Mathura Vrindavan.
                                </p>

                                <br />
                                <br />

                                <div className="about-list">
                                    <h3>We Offer Car Rent Service For:-</h3>
                                    <ul>
                                        <li><i className="fa fa-check"></i> Pick & drop for Delhi Airport & Station.</li>
                                        <li><i className="fa fa-check"></i> Local city tour.</li>
                                        <li><i className="fa fa-check"></i> Outstation tour.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right">
                                <Image
                                    src="/img/about.webp"
                                    alt="car"
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Section Start */}
            <section
                className="hero-section"
                style={{
                    background: "url('/index.html') no-repeat center center / cover",
                }}
            >
                <div className="container">
                    <div className="hero-content">
                        <h1>Explore the Beauty of Mathura and Vrindavan</h1>
                        <p>Your journey to the most sacred and historical destinations starts here!</p>
                        {/* <a href="#packages" className="btnmy btn-spe">Explore Packages</a> */}
                    </div>
                </div>
            </section>

            {/* Service Area Start */}
            <ServiceSection />

            {/* Service Area End */}


            <PromoArea
                heading={`Book Mathura Taxi service`}
                para1={<>You will get the best <b>Mathura taxi service</b> to travel the distance most comfortable and also very budget-friendly.There are also a wide variety of services for your comfortable travel experience while planning a trip to Mathura.</>}
                para2={<>For booking a <strong>taxi service in Mathura</strong> you will get a list of cars with their price and you can choose one from it according to the passenger capacity and your budget. It can be a <Link href="/packages">Mathura Vrindavan tour</Link> which will be very easily accomplished by booking a taxi service which will give you a comfortable right and will be very economical.</>}
            />

            {/* 
            <HireTaxiSedan carData={[
                {
                    type: 'muv',
                    name: 'Innova Crysta',
                    price: '₹18/ KM',
                    limit: '(Per day 300 k.m limit)',
                    image: '/images/innova-crysta.webp',
                },
                {
                    type: 'muv',
                    name: 'Maruti Ertiga',
                    price: '₹13/ KM',
                    limit: '(Per day 300 k.m limit)',
                    image: '/images/ertiga-car.webp',
                },
                {
                    type: 'muv',
                    name: 'Kia Carens',
                    price: '₹13/ KM',
                    limit: '(Per day 300 k.m limit)',
                    image: '/images/kia-carens.webp',
                },
                {
                    type: 'muv',
                    name: 'Innova Car',
                    price: '₹14/ KM',
                    limit: '',
                    image: '/images/innova-car.webp',
                },
                {
                    type: 'sedan',
                    name: 'Swift Dzire',
                    price: '₹11/ KM',
                    limit: '',
                    image: '/images/swift-desire.webp',
                },
                {
                    type: 'sedan',
                    name: 'Toyota Etios',
                    price: '₹11/ KM',
                    limit: '',
                    image: '/images/itios-car.webp',
                },
                {
                    type: 'suv',
                    name: 'Tata Safari',
                    price: 'Ask Price',
                    limit: '/ KM',
                    image: '/images/tata-safari.webp',
                },
                {
                    type: 'suv',
                    name: 'Maruti Fronx',
                    price: '₹12/ KM',
                    limit: '',
                    image: '/images/fronx.webp',
                },
                {
                    type: 'tempo',
                    name: 'Tempo Traveller 12 Seater',
                    price: '₹22/km',
                    limit: '(Min. Per day 300 k.m limit)',
                    image: '/images/tempo-traveler.jpg',
                },
                {
                    type: 'tempo',
                    name: 'Tempo Traveller 17 Seater',
                    price: '₹26/km',
                    limit: '(Min. Per day 300 k.m limit)',
                    image: '/tour/tempo-traveller-hire.webp',
                },
                {
                    type: 'bus',
                    name: 'Bus',
                    price: 'Ask Price',
                    limit: '/ KM',
                    image: '/tour/bus-hire-in-mathura.webp',
                },
                {
                    type: 'bus',
                    name: 'Bus',
                    price: 'Ask Price',
                    limit: '/ KM',
                    image: 'https://i0.wp.com/allaboutbelgaum.com/content/uploads/2017/11/private-bus.jpg', // Remote image
                },
            ]} /> */}

            {/* Additional Content Section */}
            <section>
                <div className="container">



                    <MathuraVrindavanTours
                        TourTableData={[
                            { packageName: "Same Day Mathura Vrindavan Tour", duration: "Same Day", sedanPrice: "₹5500", muvPrice: "₹6500", suvPrice: "₹8000" },
                            { packageName: "Same Day Agra Mathura Vrindavan Tour", duration: "Same Day", sedanPrice: "₹3000", muvPrice: "₹4200", suvPrice: "₹5500" },
                            { packageName: "2 Days Weekend Mathura Vrindavan Tour", duration: "2 Days", sedanPrice: "₹6999", muvPrice: "₹8499", suvPrice: "₹10499" },
                            { packageName: "2 Days Mathura Vrindavan With Bharatpur Tour", duration: "2 Days", sedanPrice: "₹12000", muvPrice: "₹14000", suvPrice: "₹16000" },
                            { packageName: "3 Days Spiritual Mathura Vrindavan Tour via Gokul", duration: "3 Days", sedanPrice: "₹6999", muvPrice: "₹8499", suvPrice: "₹10499" },
                            { packageName: "3 Days Mathura Vrindavan Agra Tour", duration: "3 Days", sedanPrice: "₹7000", muvPrice: "₹8500", suvPrice: "₹10000" },
                            { packageName: "3 Days Royal Spiritual Mathura Bharatpur Agra Tour", duration: "3 Days", sedanPrice: "₹15000", muvPrice: "₹18000", suvPrice: "₹20000" },
                            { packageName: "4 Days Agra, Mathura Vrindavan & Ayodhya Tour", duration: "4 Days", sedanPrice: "₹18000", muvPrice: "₹22000", suvPrice: "₹25000" },
                            { packageName: "5 Days Kashi, Ayodhya, Prayagraj & Mathura Tour", duration: "5 Days", sedanPrice: "₹20000", muvPrice: "₹24000", suvPrice: "₹28000" },
                            { packageName: "6 Days Kashi, Prayagraj, Ayodhya, Mathura & Naimisharanya Tour", duration: "6 Days", sedanPrice: "₹22000", muvPrice: "₹26000", suvPrice: "₹30000" },
                            { packageName: "7 Days Haridwar Rishikesh With Agra Mathura Vrindavan Tour", duration: "7 Days", sedanPrice: "₹25000", muvPrice: "₹28000", suvPrice: "₹32000" },
                        ]}
                        PickupTours={[
                            {
                                imageSrc: "/images/mathura-vrindavan-package-one-day-tour.webp",
                                imageAlt: "Mathura Tour",
                                title: "Same Day Mathura Vrindavan Tour by Car",
                                duration: "Same Day",
                                detailsLink: "same-day-mathura-tour-from-delhi.html",
                                pricing: [
                                    { type: "Sedan", price: "₹5500" },
                                    { type: "MUV", price: "₹6500" },
                                    { type: "SUV", price: "₹8000" }
                                ]
                            },
                            {
                                imageSrc: "/tour/4-days-in-agra.webp",
                                imageAlt: "Mathura Tour",
                                title: "Same Day Agra Mathura Vrindavan Tour by Car",
                                duration: "Same Day",
                                detailsLink: "same-day-agra-to-mathura-vrindavan.html",
                                pricing: [
                                    { type: "Sedan", price: "₹3000" },
                                    { type: "MUV", price: "₹4200" },
                                    { type: "SUV", price: "₹5500" }
                                ]
                            },
                            {
                                imageSrc: "/images/mathura-vrindavan-gokul-goverdhan-barsana-nanndgaon.webp",
                                imageAlt: "Mathura Tour",
                                title: "2 Days Weekend Mathura Vrindavan Tour by Car",
                                duration: "2 Days",
                                detailsLink: "2-days-mathura-vrindavan-weekend-package-from-delhi.html",
                                pricing: [
                                    { type: "Sedan", price: "₹6999" },
                                    { type: "MUV", price: "₹8499" },
                                    { type: "SUV", price: "₹10499" }
                                ]
                            },
                            {
                                imageSrc: "/tour/mathura-bharatpur-tour.webp",
                                imageAlt: "Mathura Tour",
                                title: "2 Days Mathura Vrindavan With Bharatpur Tour by Car",
                                duration: "2 Days",
                                detailsLink: "2-days-mathura-with-bharatpur-tour-package.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/mathura-vrindavan-tour-via-gokul.webp",
                                imageAlt: "Mathura Tour",
                                title: "3 Days Spritual Mathura Vrindavan Tour via Gokul by Car",
                                duration: "3 Days",
                                detailsLink: "3-days-spritual-mathura-vrindavan-tour-package-via-gokul.html",
                                pricing: [
                                    { type: "Sedan", price: "₹6999" },
                                    { type: "MUV", price: "₹8499" },
                                    { type: "SUV", price: "₹10499" }
                                ]
                            },
                            {
                                imageSrc: "/tour/Agra-tour-blog.jpg",
                                imageAlt: "Mathura Tour",
                                title: "3 Days Mathura Vrindavan Agra Tour by Car",
                                duration: "3 Days",
                                detailsLink: "3day-mathura-vrindavan-agra-tour-package.html",
                                pricing: [
                                    { type: "Sedan", price: "₹7000" },
                                    { type: "MUV", price: "₹8500" },
                                    { type: "SUV", price: "₹10000" }
                                ]
                            },
                            {
                                imageSrc: "http://mathuravrindavantaxiservices.com/tour/4-days-mathura-bharatpur-agra-tour.webp",
                                imageAlt: "Mathura Tour",
                                title: "3 Days Royal Spiritual Mathura Bharatpur Agra Tour by Car",
                                duration: "3 Days",
                                detailsLink: "3-days-royal-spiritual-mathura-bharatpur-agra-tour-package.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/4-days-in-agra.webp",
                                imageAlt: "Mathura Tour",
                                title: "4 Days Agra, Mathura Vrindavan & Ayodhya Tour by Car",
                                duration: "4 Days",
                                detailsLink: "4-days-in-agra-mathura-and-ayodhya.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/mathura-bharatpur-agra-tour.webp",
                                imageAlt: "Mathura Tour",
                                title: "4 Days Mathura Bharatpur Agra Memorable Tour by Car",
                                duration: "4 Days",
                                detailsLink: "3nights-4days-mathura-bharatpur-agra-memorable-tour-package.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/mathura-vrindavan-tour-from-delhi.webp",
                                imageAlt: "Mathura Tour",
                                title: "4 Days Mathura Vrindavan Tour Package From Delhi by Car",
                                duration: "4 Days",
                                detailsLink: "3nights-4days-mathura-vrindavan-tour-package-from-delhi.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/mathura-tour-with-tajmahal.webp",
                                imageAlt: "Mathura Tour",
                                title: "4 Days Mathura Vrindavan Tour Package via Taj Mahal by Car",
                                duration: "4 Days",
                                detailsLink: "4-days-mathura-vrindavan-tour-package-via-taj-mahal.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour2/4-days-delhi-agra-jaipur-with-vrindavan-tour.jpg",
                                imageAlt: "Mathura Tour",
                                title: "4 Days Delhi Agra Jaipur via Vrindavan Tour by Car",
                                duration: "4 Days",
                                detailsLink: "3nights-4days-delhi-agra-jaipur-via-vrindavan-tour-package.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/5-days-in-kashi-ayodhya.webp",
                                imageAlt: "Mathura Tour",
                                title: "5-Days Kashi, Ayodhya, Prayagraj & Mathura Tour by Car",
                                duration: "5 Days",
                                detailsLink: "5-days-in-kashi-ayodhya-prayagraj-and-mathura.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/5-days-in-agra-mathura.webp",
                                imageAlt: "Mathura Tour",
                                title: "5 Days Agra, Mathura Vrindavan, Ayodhya, Prayagraj & Kashi Tour",
                                duration: "5 Days",
                                detailsLink: "5-days-in-agra-mathura-ayodhya-prayagraja-and-kashi.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/5-days-in-kashi-ayodhya.webp",
                                imageAlt: "Mathura Tour",
                                title: "6 Days Kashi, Prayagraj, Ayodhya, Mathura & Naimisharanya Tour by Car",
                                duration: "6 Days",
                                detailsLink: "6-days-in-kashi-prayagraj-ayodhya-mathura-and-naimisharanya.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/haridwar-rishikesh-tour-with-mathura.webp",
                                imageAlt: "Mathura Tour",
                                title: "7 Days Haridwar Rishikesh With Agra Mathura Vrindavan Tour",
                                duration: "7 Days",
                                detailsLink: "haridwar-rishikesh-religious-tour-package-via-agra-mathura-vrindavan.html",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            }
                        ]}
                        para={<>Discover the divine heritage of Mathura and Vrindavan with our expertly crafted Mathura Vrindavan Tour Packages. At Mathura Vrindavan Taxi Services, we offer hassle-free and comfortable travel experiences, ensuring a spiritually enriching journey for pilgrims and tourists alike.</>}
                        morecontent={<>
                            <p>Our customized tour packages cover the most sacred and iconic places, including Shri Krishna Janmabhoomi, Banke Bihari Temple, ISKCON Temple, Prem Mandir, Nidhivan, Dwarkadhish Temple, Govardhan Parikrama, and more. Whether you're visiting for spiritual exploration, cultural sightseeing, or a family trip, we provide personalized travel solutions to meet your needs.</p>

                            <p>With our well-maintained vehicles, professional drivers, and flexible itineraries, we ensure a safe, comfortable, and divine travel experience. Our packages include local sightseeing, temple darshans, guided tours, and pickup & drop services, making your visit smooth and memorable.</p>

                            <p>At Mathura Vrindavan Taxi Services, we are dedicated to providing the best travel experience at the most affordable prices, helping you explore the sacred land of Lord Krishna with complete peace of mind.</p>
                        </>}
                        tagline={"Exclusive Travel Packages"}
                        title={"Mathura Vrindavan Tour Packages"}
                    />









                    <Whychooseonlinetaxiservice />

                    <OutstationTaxiServices taxis={[
                        {
                            title: 'Sedan',
                            subtitle: 'Swift Dzire, etc.',
                            price: '₹11/km',
                            bgColor: '#ff9999',
                            imgSrc: '/images/swift-desire.webp',
                        },
                        {
                            title: 'MUV',
                            subtitle: 'Ertiga',
                            price: '₹14/km',
                            bgColor: '#66b3ff',
                            imgSrc: '/images/ertiga-car.webp',
                        },
                        {
                            title: 'XUV',
                            subtitle: 'Innova',
                            price: '₹18/km',
                            bgColor: '#ffcc66',
                            imgSrc: '/images/innova-crysta.webp',
                        },
                        {
                            title: 'Kia Carens',
                            subtitle: 'SUV',
                            price: '₹16/km',
                            bgColor: '#ff9966',
                            imgSrc: '/images/kia-carens.webp',
                        },
                        {
                            title: 'Tempo Traveller',
                            subtitle: '12-Seater',
                            price: '₹22/km',
                            bgColor: '#99cc99',
                            imgSrc: '/images/tempo-traveler.jpg',
                        },
                        {
                            title: 'Tempo Traveller',
                            subtitle: '17-Seater',
                            price: '₹26/km',
                            bgColor: '#ff6666',
                            imgSrc: '/images/tempo-traveler.jpg',
                        },
                    ]} />




                    <LocalTaxiServices
                        taxiPackages={[
                            {
                                type: 'Sedan',
                                image: '/images/swift-desire.webp', // Image paths are relative to the `public` directory in Next.js
                                alt: 'Sedan Taxi',
                                description: 'Swift Dzire, etc. (4-seater)',
                                price: '₹2000',
                                hours: '8 hours / 80 km',
                                additionalCharges: '₹11/km or ₹150/hour',
                                bgColor: '#ff6666',
                            },
                            {
                                type: 'MUV',
                                image: '/images/ertiga-car.webp',
                                alt: 'MUV Taxi',
                                description: 'Ertiga, etc. (6-seater)',
                                price: '₹2500',
                                hours: '8 hours / 80 km',
                                additionalCharges: '₹14/km or ₹150/hour',
                                bgColor: '#66b3ff',
                            },
                            {
                                type: 'XUV',
                                image: '/images/innova-crysta.webp',
                                alt: 'XUV Taxi',
                                description: 'Innova Crysta, etc. (6-seater)',
                                price: '₹3000',
                                hours: '8 hours / 80 km',
                                additionalCharges: '₹16/km or ₹150/hour',
                                bgColor: '#ffcc66',
                            },
                        ]}
                    />


                    <PopularTaxiRoutes />

                    <FaqSection />

                </div>
            </section>
        </>
    );
};

export default HomeContent;