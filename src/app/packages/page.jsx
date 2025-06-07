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
                    background: "url('/') no-repeat center center / cover",
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
                                detailsLink: "same-day-mathura-tour-from-delhi",
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
                                detailsLink: "same-day-agra-to-mathura-vrindavan",
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
                                detailsLink: "2-days-mathura-vrindavan-weekend-package-from-delhi",
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
                                detailsLink: "2-days-mathura-with-bharatpur-tour-package",
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
                                detailsLink: "3-days-spritual-mathura-vrindavan-tour-package-via-gokul",
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
                                detailsLink: "3day-mathura-vrindavan-agra-tour-package",
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
                                detailsLink: "3-days-royal-spiritual-mathura-bharatpur-agra-tour-package",
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
                                detailsLink: "4-days-in-agra-mathura-and-ayodhya",
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
                                detailsLink: "3nights-4days-mathura-bharatpur-agra-memorable-tour-package",
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
                                detailsLink: "3nights-4days-mathura-vrindavan-tour-package-from-delhi",
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
                                detailsLink: "4-days-mathura-vrindavan-tour-package-via-taj-mahal",
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
                                detailsLink: "3nights-4days-delhi-agra-jaipur-via-vrindavan-tour-package",
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
                                detailsLink: "5-days-in-kashi-ayodhya-prayagraj-and-mathura",
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
                                detailsLink: "5-days-in-agra-mathura-ayodhya-prayagraja-and-kashi",
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
                                detailsLink: "6-days-in-kashi-prayagraj-ayodhya-mathura-and-naimisharanya",
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
                                detailsLink: "haridwar-rishikesh-religious-tour-package-via-agra-mathura-vrindavan",
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





                    <MathuraVrindavanTours
                        TourTableData={[]}
                        PickupTours={[
                            {
                                imageSrc: "/tour/agra-mathura-vrindavan.jpg",
                                imageAlt: "Mathura Tour",
                                title: "Mathura Vrindavan Local Sighseeing Tour by Car",
                                duration: "Same Day",
                                detailsLink: "vrindavan-local-sighseeing-tour",
                                pricing: [
                                    { type: "Sedan", price: "₹2000" },
                                    { type: "MUV", price: "₹2500" },
                                    { type: "SUV", price: "₹3000" }
                                ]
                            },
                            {
                                imageSrc: "/tour/nandgaon-barsana-govardhan.webp",
                                imageAlt: "Mathura Tour",
                                title: "Same Day Vrindavan to Nandgaon, Barsana & Govardhan Tour by Car",
                                duration: "Same Day",
                                detailsLink: "same-day-vrindavan-to-nandgaon-barsana-govardhan",
                                pricing: [
                                    { type: "Sedan", price: "₹2500" },
                                    { type: "MUV", price: "₹3000" },
                                    { type: "SUV", price: "₹4000" }
                                ]
                            },
                            {
                                imageSrc: "/tour/mathura-gokul-raman-reti.webp",
                                imageAlt: "Mathura Tour",
                                title: "Same Day Vrindavan to Mathura, Gokul & Raman Reti Tour by Car",
                                duration: "Same Day",
                                detailsLink: "same-day-vrindavan-to-mathura-gokul-raman-reti",
                                pricing: [
                                    { type: "Sedan", price: "₹2500" },
                                    { type: "MUV", price: "₹3000" },
                                    { type: "SUV", price: "₹4000" }
                                ]
                            },
                            {
                                imageSrc: "/images/mathuraVrindavan.webp",
                                imageAlt: "Mathura Tour",
                                title: "Same Day Mathura Vrindavan Tour from Agra",
                                duration: "Same Day",
                                detailsLink: "same-day-agra-to-mathura-tour",
                                pricing: [
                                    { type: "Sedan", price: "₹3000" },
                                    { type: "MUV", price: "₹4200" },
                                    { type: "SUV", price: "₹5500" }
                                ]
                            },
                            {
                                imageSrc: "/tour/mathura.jpg",
                                imageAlt: "Mathura Tour",
                                title: "2 days Mathura Vrindavan Darshan Tour by Car",
                                duration: "2 Days",
                                detailsLink: "2days-mathura-vrindavan-darshan-tour",
                                pricing: [
                                    { type: "Sedan", price: "₹4500" },
                                    { type: "MUV", price: "₹5500" },
                                    { type: "SUV", price: "₹6000" }
                                ]
                            },
                            {
                                imageSrc: "/tour/mathura-gokul-raman-reti.webp",
                                imageAlt: "Mathura Tour",
                                title: "2 Days Vrindavan to Mathura, Gokul & Raman Reti Tour",
                                duration: "2 Days",
                                detailsLink: "2-days-vrindavan-to-mathura-gokul-raman-reti",
                                pricing: [
                                    { type: "Sedan", price: "₹5000" },
                                    { type: "MUV", price: "₹8000" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/images/mathura-vrindavan-gokul-goverdhan-barsana-nanndgaon.webp",
                                imageAlt: "Mathura Tour",
                                title: "2 Days Mathura Vrindavan Tour from Agra",
                                duration: "2 Days",
                                detailsLink: "2-days-agra-to-mathura-vrindavan-tour",
                                pricing: [
                                    { type: "Sedan", price: "₹7000" },
                                    { type: "MUV", price: "₹12500" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/agra-tajmahal.webp",
                                imageAlt: "Mathura Tour",
                                title: "3 Days Mathura Vrindavan Gokul Nandgaon Barsana Agra Tour by Car",
                                duration: "3 Days",
                                detailsLink: "3day-mathura-vrindavan-gokul-nandgaon-barsana-agra-tour",
                                pricing: [
                                    { type: "Sedan", price: "₹10500" },
                                    { type: "MUV", price: "₹17500" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },



                        ]}
                        para={<>Explore the divine charm of Mathura and Vrindavan with our exclusive local sightseeing tour by car. At Mathura Vrindavan Taxi Services, we provide comfortable, well-planned, and hassle-free travel experiences, ensuring you cover all the sacred sites with ease and devotion.</>}
                        morecontent={<><p>Our customized sightseeing tours take you to the most iconic places, including Shri Krishna Janmabhoomi, Banke Bihari Temple, ISKCON Temple, Prem Mandir, Nidhivan, Vishram Ghat, Dwarkadhish Temple, and Govardhan Parikrama. Whether you are a devotee, a tourist, or a spiritual seeker, our personalized itineraries make your journey seamless and fulfilling.</p>

                            <p>With a fleet of well-maintained cars, expert drivers, and flexible booking options, we ensure a comfortable and safe travel experience. Whether you prefer a half-day, full-day, or multi-day tour, we cater to your needs with affordable pricing and 24/7 assistance.</p>

                            <p>At Mathura Vrindavan Taxi Services, we believe in offering more than just a ride—we provide a spiritually enriching journey where every stop connects you to the divine pastimes of Lord Krishna.
                            </p></>}
                        tagline={"Exclusive Travel Packages"}
                        title={"Mathura Vrindavan Local Sightseeing Tour by Car"}
                    />








                    <MathuraVrindavanTours
                        TourTableData={[]}
                        PickupTours={[
                            {
                                imageSrc: "/tour/lathmar-holi-mathura.webp",
                                imageAlt: "Mathura Tour",
                                title: "Lathmar Holi Tour – Barsana and Nandgaon Special Tour by Car",
                                duration: "3 Days",
                                detailsLink: "lathmar-holi-mathura-vrindavan-barsana-nandgaon",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/phoolon-ki-holi.webp",
                                imageAlt: "Mathura Tour",
                                title: "Phoolon Ki Holi mathura Vrindavan Holi Festival Tour by Car",
                                duration: "4 Days",
                                detailsLink: "phoolon-ki-holi-mathura-vrindavan",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/5-days-grand-holi.webp",
                                imageAlt: "Mathura Tour",
                                title: "5 Days Grand Holi Mathura, Vrindavan, Barsana & Nandgaon Tour by Car",
                                duration: "5 Days",
                                detailsLink: "5-days-grand-holi-festival-tour",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },

                        ]}
                        para={<>Welcome to <strong>Go Taxi Booking Services</strong>, your reliable travel partner for{' '}
                            <strong>safe, comfortable, and affordable taxi services</strong> in Mathura-Vrindavan. We specialize in
                            providing hassle-free transportation for pilgrims, tourists, and business travelers, ensuring a smooth and
                            enjoyable journey.</>}
                        morecontent={<><p>
                            Our fleet includes <strong>sedans, SUVs, tempo travelers, and luxury vehicles</strong>, all driven by
                            professional and experienced drivers who prioritize your safety and convenience. Whether you need a taxi
                            for <strong>temple visits, local sightseeing, Govardhan Parikrama, airport transfers, or outstation
                                trips</strong>, we offer customized travel solutions at the most competitive rates.
                        </p>

                            <p>
                                We cover all major religious and tourist destinations, including <strong>Shri Krishna Janmabhoomi,
                                    Banke Bihari Temple, ISKCON Temple, Prem Mandir, Nidhivan, Gokul, Barsana, Nandgaon, and Agra Taj
                                    Mahal </strong>tours. Our 24/7 service, easy online booking, and punctual pickups ensure a stress-free
                                experience for every traveler.
                            </p>

                            <p>
                                At Go Taxi Booking Services, we are committed to providing the best travel experience with top-notch
                                service, clean and well-maintained vehicles, and courteous drivers. Whether you’re traveling solo, with
                                family, or in a group, we guarantee a comfortable and memorable journey.
                            </p>

                            <h2>Compare Duration & Pricing for Taxi Services Mathura Vrindavan Tour Packages </h2>
                            <p>
                                For Mathura-Vrindavan, taxis offer flexible timings and pricing, ideal for personalized trips. Tour
                                packages provide fixed itineraries with added services, often more cost-effective for structured tours.
                                Choose based on budget, time, and preference for flexibility or convenience.
                            </p></>}
                        tagline={"Exclusive Travel Packages"}
                        title={"Mathura Vrindavan Grand Holi Tour Packages"}
                    />



                    <MathuraVrindavanTours
                        TourTableData={[]}
                        PickupTours={[
                            {
                                imageSrc: "/images/84-kosh-yatra-7-night-8-days.webp",
                                imageAlt: "Mathura Tour",
                                title: "3 Days Braj 84 Kos Express Yatra",
                                duration: "3 Days",
                                detailsLink: "3-days-braj-84-kos-express-yatra",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/84-kos-yatra-package.webp",
                                imageAlt: "Mathura Tour",
                                title: "5-Days Braj 84 Kos Yatra",
                                duration: "5 Days",
                                detailsLink: "5-days-braj-84-kos-yatra",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/7-days-braj.webp",
                                imageAlt: "Mathura Tour",
                                title: "7 Days Braj 84 Kos Yatra",
                                duration: "7 Days",
                                detailsLink: "7-days-braj-84-kos-yatra",
                                pricing: [
                                    { type: "Sedan", price: "₹20000" },
                                    { type: "MUV", price: "₹24000" },
                                    { type: "SUV", price: "₹28000" }
                                ]
                            },
                        ]}
                        para={<>The Braj 84 Kosh Yatra is a sacred pilgrimage that takes devotees through the divine land of Lord Krishna, covering 252 kilometers of holy sites associated with his pastimes. At Mathura Vrindavan Taxi Services, we offer well-planned and comfortable travel solutions for those seeking to complete this revered yatra in a hassle-free manner. Instead of the traditional long walking journey, we provide fully guided tours by car, ensuring a smooth and spiritually fulfilling experience.</>}
                        morecontent={<> <p>Our Braj 84 Kosh Yatra Packages include visits to all the major religious landmarks, such as Shri Krishna Janmabhoomi, Banke Bihari Temple, ISKCON Temple, Govardhan Parikrama, Barsana, Nandgaon, Gokul, Radha Kund, Kusum Sarovar, and Baldeo Temple. With our well-maintained vehicles and professional drivers, we ensure a safe, comfortable, and flexible travel experience that allows devotees to focus entirely on their spiritual journey.</p>

                            <p>At Mathura Vrindavan Taxi Services, we are committed to making this sacred yatra accessible and convenient for all, whether you are traveling alone, with family, or in a group. Our customized itineraries and 24/7 travel support ensure that your Braj Dham experience is both enriching and memorable.</p>
                        </>}
                        tagline={"Exclusive Travel Packages"}
                        title={"Mathura Vrindavan Braj 84 Kosh Yatra Packages"}
                    />



                    <MathuraVrindavanTours
                        TourTableData={[
                        ]}
                        PickupTours={[
                            {
                                imageSrc: "/tour/boat-riding-in-mathura.webp",
                                imageAlt: "Mathura Tour",
                                title: "Yamuna River Boating in Mathura",
                                duration: "3 Hours",
                                detailsLink: "boat-riding-in-mathura",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/boat-riding-in-gokul.webp",
                                imageAlt: "Mathura Tour",
                                title: "River Boating in Gokul",
                                duration: "2.5 Hours",
                                detailsLink: "boat-riding-in-gokul",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                        ]}
                        para={<>Experience the divine beauty of Mathura and Vrindavan from a unique perspective with our Boat Ride Tour Packages. At Mathura Vrindavan Taxi Services, we offer a serene and spiritually uplifting boat ride along the holy Yamuna River, where you can witness the majestic ghats, ancient temples, and the soulful evening aarti from the waters.</>}
                        morecontent={<><p>Our boat ride tours take you through Vishram Ghat, Kesi Ghat, Dwarkadhish Temple, and other sacred sites, offering a peaceful retreat amidst the vibrant energy of these holy cities. Whether you prefer a sunrise boat ride for a calm and meditative experience or an evening ride to witness the mesmerizing Yamuna Aarti, we provide customized options to suit your preferences.</p>

                            <p>With our safe, well-maintained boats and experienced local boatmen, we ensure a smooth and memorable experience for devotees and tourists alike. Whether you're seeking spiritual bliss, photography opportunities, or a relaxing escape, our Mathura Vrindavan Boat Ride Tour offers an unforgettable journey through the heart of Krishna’s land.
                            </p></>}
                        tagline={"Exclusive Travel Packages"}
                        title={"Mathura Vrindavan Boat Ride Tour Packages"}
                    />




                    <MathuraVrindavanTours
                        TourTableData={[]}
                        PickupTours={[
                            {
                                imageSrc: "/tour/2-day-pramanand-maharaj-ji.webp",
                                imageAlt: "Mathura Tour",
                                title: "2 Days Pramanand Maharaj Ji Darshan Tour",
                                duration: "2 Days",
                                detailsLink: "2-day-pramanand-maharaj-ji-darshan-tour",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            },
                            {
                                imageSrc: "/tour/3-day-pramanand-maharaj-ji.webp",
                                imageAlt: "Mathura Tour",
                                title: "3 Days Pramanand Maharaj Ji Darshan Tour",
                                duration: "3 Days",
                                detailsLink: "3-day-pramanand-maharaj-ji-darshan-tour",
                                pricing: [
                                    { type: "Sedan", price: "Ask for Price" },
                                    { type: "MUV", price: "Ask for Price" },
                                    { type: "SUV", price: "Ask for Price" }
                                ]
                            }
                        ]}
                        para={<>Experience the divine presence of Premanand Maharaj Ji with our specially curated Darshan Tour Packages. At Mathura Vrindavan Taxi Services, we offer a seamless and spiritually enriching journey, ensuring that devotees can visit Maharaj Ji’s ashram with complete ease and devotion.</>}
                        morecontent={<> <p>Our tour packages include comfortable transportation, professional drivers, and flexible schedules, allowing you to attend Maharaj Ji’s satsangs, pravachans (discourses), and devotional gatherings without any travel worries. Whether you are traveling individually or in a group, we provide a safe, convenient, and hassle-free experience tailored to your needs.</p>

                            <p>With our well-organized travel services, you can fully immerse yourself in the teachings and divine energy of Premanand Maharaj Ji, finding peace, devotion, and spiritual upliftment along the way. Let us take care of your journey so that you can focus on experiencing the true essence of bhakti and wisdom.
                            </p></>}
                        tagline={"Exclusive Travel Packages"}
                        title={"Premanand Maharaj Ji Darshan Tour Packages"}
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