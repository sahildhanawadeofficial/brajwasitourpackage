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
import Slider from '@/components/Slider';
import FindTaxiForm from '@/components/FindTaxiForm';

// You'd typically have your global styles imported in layout.js or _app.js
// import styles from './HomeContent.module.css'; // Example for CSS Modules


const HomeContent = () => {


  return (
    <>

      <Slider />

      <FindTaxiForm />

      {/* About Area Start */}
      <section className="gauto-about-area section_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left">
                <h1>Brajwasi Tour Package Taxi Services</h1>
                <p>
                  Since 2015, <b>Brajwasi Taxi Service</b> has been the trusted name for safe, reliable, and spiritual travel across Braj Bhoomi. Whether you're visiting temples, exploring sacred villages, or attending festivals like Holi and Janmashtami, we make your journey serene and seamless.
                </p>

                <p>
                  We provide skilled and courteous chauffeurs who are familiar with the holy places and their histories. Our drivers are more than just transport providers—they act as local guides to enrich your spiritual experience across Mathura, Vrindavan, Govardhan, Barsana, Nandgaon, and Gokul.
                </p>

                <p>
                  We offer both economical and premium taxi services to meet all budgets. Whether you want a quick visit or a multi-day yatra, our Brajwasi tour packages are designed for comfort, safety, and devotion. Experience the Braj region like never before with our trusted team.
                </p>

                <br /><br />
                <div className="about-list">
                  <h3>Brajwasi Tour Packages Include:</h3>
                  <ul>
                    <li><FontAwesomeIcon icon={faCheck} />Darshan of Key Temples (Banke Bihari, ISKCON, Prem Mandir)</li>
                    <li><FontAwesomeIcon icon={faCheck} />Govardhan Parikrama</li>
                    <li><FontAwesomeIcon icon={faCheck} />Barsana & Nandgaon Visits</li>
                    <li><FontAwesomeIcon icon={faCheck} />Pickup/Drop from Railway Station or Hotel</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right">
                <Image
                  src="/tour/phoolon-ki-holi.png" // Replace with actual Brajwasi image
                  alt="Brajwasi Tour"
                  width={600}
                  height={400}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}

      {/* Hero Section Start */}
      <section className="hero-section" style={{ backgroundImage: "url('/braj/hero.jpg')" }}>
        <div className="container">
          <div className="hero-content">
            <h1>Experience the Divine Land of Braj</h1>
            <p>Walk the sacred footsteps of Lord Krishna — book your Brajwasi tour today!</p>
            <Link href="/packages" className="btnmy btn-spe">
              Explore Packages
            </Link>
          </div>
        </div>
      </section>
      {/* Hero Section End */}


      {/* Service Area Start */}
      <ServiceSection />

      {/* Service Area End */}


      <PromoArea
        heading={`Book Brajwasi Tour Taxi Service`}
        para1={
          <>
            Experience the best and most convenient <b>Brajwasi taxi service</b> for exploring the sacred towns of Mathura, Vrindavan, Barsana, Govardhan, Nandgaon, and Gokul. Enjoy budget-friendly and comfortable rides with professional drivers who understand the spiritual significance of each destination.
          </>
        }
        para2={
          <>
            To book a <strong>taxi service in Braj</strong>, you can select from a range of vehicles based on your group size and preferences. Whether it’s a <Link href="/packages">Brajwasi tour package</Link> or a one-day darshan plan, our taxi service ensures a smooth, devotional, and affordable journey through this divine land.
          </>
        }
      />



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
          image: 'https://gotaxibooking.com/tour/tempo-traveller-hire.webp',
        },
        {
          type: 'bus',
          name: 'Bus',
          price: 'Ask Price',
          limit: '/ KM',
          image: 'https://gotaxibooking.com/tour/bus-hire-in-mathura.webp',
        },
        {
          type: 'bus',
          name: 'Bus',
          price: 'Ask Price',
          limit: '/ KM',
          image: 'https://i0.wp.com/allaboutbelgaum.com/content/uploads/2017/11/private-bus.jpg', // Remote image
        },
      ]} />

      {/* Additional Content Section */}
      <section>
        <div className="container">




          <MathuraVrindavanTours
            TourTableData={[]}
            PickupTours={[
              {
                imageSrc: "/tour/braj-mathura.png",
                imageAlt: "Braj Yatra Mathura",
                title: "5-Day Braj 84 Kosh Yatra",
                duration: "5 Days",
                detailsLink: "5-day-braj-84-kosh-yatra-tour-package",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/braj-vrindavan.png",
                imageAlt: "Vrindavan Parikrama",
                title: "6-Day Braj 84 Kosh Yatra",
                duration: "6 Days",
                detailsLink: "6-day-braj-84-kosh-yatra-tour-package",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/braj-barsana.png",
                imageAlt: "Barsana Temple Tour",
                title: "7-Day Braj 84 Kosh Yatra",
                duration: "7 Days",
                detailsLink: "7-day-complete-braj-84-kosh-parikrama-tour",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/braj-nandgaon.png",
                imageAlt: "Nandgaon Braj Tour",
                title: "8-Day Braj 84 Kosh Yatra",
                duration: "8 Days",
                detailsLink: "8-day-extended-braj-84-kosh-yatra-tour",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              }
            ]}
            para={
              <>
                Discover the sacred land of Braj through our specially curated <strong>84 Kosh Parikrama Tour Packages</strong>. These tours span key spiritual sites such as Mathura, Vrindavan, Gokul, Barsana, Nandgaon, and Govardhan — offering an immersive devotional experience.
              </>
            }
            morecontent={
              <>
                <p>
                  The <b>5-day Braj 84 Kosh Yatra</b> is perfect for those seeking a spiritual connection with a tight schedule — covering major sites with devotional depth.
                </p>
                <p>
                  The <b>6-day and 7-day packages</b> allow for more immersive darshans, peaceful exploration, and time for reflection in the Braj region's holy villages and temples.
                </p>
                <p>
                  The <b>8-day yatra</b> is ideal for seekers wanting a complete parikrama with opportunities for meditation, kirtan participation, and spiritual retreat moments.
                </p>
                <p>
                  Every package is guided by experienced drivers and local experts familiar with the traditions of Braj, ensuring both convenience and authenticity.
                </p>
              </>
            }
            tagline={"🕉️ Spiritual Braj Yatra Packages"}
            title={"Braj 84 Kosh Parikrama Tour Packages"}
          />



          <MathuraVrindavanTours
            TourTableData={[]}
            PickupTours={[
              {
                imageSrc: "/tour/brijwasi-lands-inn.png",
                imageAlt: "Hotel Brijwasi Lands Inn",
                title: "3-Day Mathura Vrindavan Package with Hotel Brijwasi Lands Inn",
                duration: "3 Days",
                detailsLink: "3-day-mathura-vrindavan-package-hotel-brijwasi-lands-inn",
                pricing: [{ type: "Package", price: "Ask for Price" }]
              },
              {
                imageSrc: "/tour/mathura-vrindavan-hotel.png",
                imageAlt: "Mathura Vrindavan Sightseeing",
                title: "4-Day Mathura Vrindavan Package",
                duration: "4 Days",
                detailsLink: "4-day-mathura-vrindavan-accommodation-package",
                pricing: [{ type: "Package", price: "Ask for Price" }]
              }
            ]}
            para={
              <>
                Experience Mathura and Vrindavan with maximum comfort. Our{" "}
                <strong>Accommodation-Inclusive Packages</strong> include hotel stays
                and guided sightseeing tours, offering a perfect blend of convenience
                and spiritual discovery.
              </>
            }
            morecontent={
              <>
                <p>
                  <strong>3-Day Mathura Vrindavan Package with Hotel Brijwasi Lands Inn:</strong>{" "}
                  Ideal for travelers looking for a short and comfortable spiritual escape.
                  This package includes a stay at Hotel Brijwasi Lands Inn and guided tours
                  across key pilgrimage spots in Mathura and Vrindavan.
                  <br />
                  Source:{" "}
                  <a
                    href="https://mathuravrindavantour.com"
                    target="_blank"
                    className="text-blue-600"
                  >
                    mathuravrindavantour.com
                  </a>
                </p>
                <p className="mt-4">
                  <strong>4-Day Mathura Vrindavan Package:</strong> Designed for families
                  and groups wanting a more relaxed experience. This extended itinerary
                  provides ample time for sightseeing, darshans, and rest.
                  <br />
                  Sources:{" "}
                  <a
                    href="https://brijtours.in"
                    target="_blank"
                    className="text-blue-600"
                  >
                    brijtours.in
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://mathuravrindavantourism.com"
                    target="_blank"
                    className="text-blue-600"
                  >
                    mathuravrindavantourism.com
                  </a>
                </p>
              </>
            }
            tagline={"🏨 Comfortable Stay + Darshan Packages"}
            title={"Accommodation-Inclusive Packages"}
          />

          <MathuraVrindavanTours
            TourTableData={[]}
            PickupTours={[
              {
                imageSrc: "/tour/holi-celebration.png",
                imageAlt: "Holi Celebration in Mathura Vrindavan",
                title: "Holi Celebration Tour Package",
                duration: "5 Days",
                detailsLink: "holi-celebration-tour-package",
                pricing: [{ type: "Festival Package", price: "Ask for Price" }]
              },
              {
                imageSrc: "/tour/phoolon-ki-holi.png",
                imageAlt: "Phoolon Ki Holi in Braj",
                title: "Phoolon Ki Holi Tour Package",
                duration: "5 Days",
                detailsLink: "phoolon-ki-holi-tour-package",
                pricing: [{ type: "Festival Package", price: "Ask for Price" }]
              }
            ]}
            para={
              <>
                Immerse yourself in the vibrant traditions of Braj during the most colorful time of the year.
                Our <strong>Festival Special Packages</strong> bring you the spirit of Holi with guided experiences,
                festive events, and temple visits across Mathura and Vrindavan.
              </>
            }
            morecontent={
              <>
                <p>
                  <strong>Holi Celebration Tour Package:</strong> Celebrate Holi the traditional way
                  with a 5-day tour covering Mathura and Vrindavan. Participate in lively
                  temple processions, cultural shows, and colorful celebrations at iconic spots.
                  <br />
                  Source:{" "}
                  <a
                    href="https://brijtours.in"
                    target="_blank"
                    className="text-blue-600"
                  >
                    brijtours.in
                  </a>
                </p>
                <p className="mt-4">
                  <strong>Phoolon Ki Holi Tour Package:</strong> Experience the divine beauty of
                  flower Holi — a serene yet joyful celebration unique to the Braj region.
                  This 5-day package is perfect for those seeking a spiritually rich and visually
                  stunning Holi experience.
                  <br />
                  Source:{" "}
                  <a
                    href="https://brijtours.in"
                    target="_blank"
                    className="text-blue-600"
                  >
                    brijtours.in
                  </a>
                </p>
              </>
            }
            tagline={"🎉 Celebrate Holi in the Land of Krishna"}
            title={"Festival Special Packages"}
          />



          <MathuraVrindavanTours
            TourTableData={[]}
            PickupTours={[
              {
                imageSrc: "/tour/customized-package.png",
                imageAlt: "Customized Mathura Vrindavan Tour",
                title: "Customized Mathura Vrindavan Packages",
                duration: "Flexible",
                detailsLink: "customized-mathura-vrindavan-tour-packages",
                pricing: [{ type: "Tailored Package", price: "Ask for Price" }]
              },
              {
                imageSrc: "/tour/vrindavan-by-car.png",
                imageAlt: "Vrindavan Tour by Car",
                title: "Vrindavan Tour Packages by Car",
                duration: "Flexible",
                detailsLink: "vrindavan-tour-packages-by-car",
                pricing: [{ type: "Private Car Package", price: "Ask for Price" }]
              },
              {
                imageSrc: "/tour/from-delhi.png",
                imageAlt: "Mathura Vrindavan Tour from Delhi",
                title: "Mathura Vrindavan Tour Packages From Delhi",
                duration: "Flexible",
                detailsLink: "mathura-vrindavan-tour-packages-from-delhi",
                pricing: [{ type: "Delhi Departure", price: "Ask for Price" }]
              }
            ]}
            para={
              <>
                Explore Braj your way with our <strong>Customized & Themed Packages</strong>, designed for flexibility and personalization.
                Whether you're traveling solo or in a group, these tours adapt to your schedule, preferences, and travel style.
              </>
            }
            morecontent={
              <>
                <p>
                  <strong>Customized Mathura Vrindavan Packages:</strong> Tailor your itinerary with hand-picked spiritual sites and preferred durations.
                  Perfect for travelers with specific goals or limited time.
                  <br />
                  Sources:{" "}
                  <a href="https://mathuravrindavantour.com" target="_blank" className="text-blue-600">mathuravrindavantour.com</a>,{" "}
                  <a href="https://vrindavanactnow.com" target="_blank" className="text-blue-600">vrindavanactnow.com</a>,{" "}
                  <a href="https://travel.yatradham.org" target="_blank" className="text-blue-600">yatradham.org</a>,{" "}
                  <a href="https://brijtours.in" target="_blank" className="text-blue-600">brijtours.in</a>
                </p>
                <p className="mt-4">
                  <strong>Vrindavan Tour Packages by Car:</strong> Enjoy the convenience of private vehicle tours with complete control over pace, timing, and stopovers.
                  <br />
                  Source:{" "}
                  <a href="https://travel.yatradham.org" target="_blank" className="text-blue-600">travel.yatradham.org</a>
                </p>
                <p className="mt-4">
                  <strong>Mathura Vrindavan Tour Packages From Delhi:</strong> Hassle-free tours with pickup from Delhi — ideal for quick weekend getaways or longer retreats.
                  <br />
                  Source:{" "}
                  <a href="https://mathuravrindavantour.com" target="_blank" className="text-blue-600">mathuravrindavantour.com</a>
                </p>
              </>
            }
            tagline={"🚗 Personalized Travel Experiences"}
            title={"Customized & Themed Packages"}
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