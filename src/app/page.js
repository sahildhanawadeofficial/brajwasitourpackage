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
                <h1>Go Taxi Booking Services</h1>
                <p>Trusted Since 2015 <b>Vrindavan-Mathura Taxi Service</b> has been proudly serving travelers since 2015, offering safe, professional, and premium taxi services for all occasions. Whether you&apos;re a pilgrim, tourist, or attending a special event, we ensure your journey is smooth, comfortable, and unforgettable.</p>

                <p>We offer the Top-rated skilled and trained Chauffeurs to make your drive secure & comfortable. Drivers are the most important people when it comes to travelling. They are not only who take you to your destination, but they also guide you in exploring the places which come along the way. We have the best professional drivers, who will take you safely to your destination and will also help you in exploring.</p>

                <p>We commit to providing the most economic taxi services in Mathura - Vrindavan as well as luxury services as per your need and comfort. We understand that travelling to a city without a taxi can be really inconvenient, some aim to provide the most economical taxi services in Mathura Vrindavan.</p>
                <br /><br />
                <div className="about-list">
                  <h3>Mathura Vrindavan Tour Package Available:-</h3>
                  <ul>
                    <li><FontAwesomeIcon icon={faCheck} />Local Sightseeing.</li>
                    <li><FontAwesomeIcon icon={faCheck} />Temple Darshan.</li>
                    <li><FontAwesomeIcon icon={faCheck} />Home Pick and Drop</li>
                    <li><FontAwesomeIcon icon={faCheck} />Deluxe Hotel Room Available.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right">
                <Image
                  src="https://5.imimg.com/data5/SELLER/Default/2024/2/391680177/CX/TP/TL/200043820/mathura-vrindavan.png"
                  alt="car"
                  width={600} // Approximate width, adjust as needed
                  height={400} // Approximate height, adjust as needed
                  layout="responsive" // Makes the image responsive
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}

      {/* Hero Section Start */}
      <section className="hero-section" style={{ backgroundImage: "url('/index')" /* Adjust path if needed */ }}>
        <div className="container">
          <div className="hero-content">
            <h1>Explore the Beauty of Mathura and Vrindavan</h1>
            <p>Your journey to the most sacred and historical destinations starts here!</p>
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
        heading={`Book Mathura Taxi service`}
        para1={<>You will get the best <b>Mathura taxi service</b> to travel the distance most comfortable and also very budget-friendly.There are also a wide variety of services for your comfortable travel experience while planning a trip to Mathura.</>}
        para2={<>For booking a <strong>taxi service in Mathura</strong> you will get a list of cars with their price and you can choose one from it according to the passenger capacity and your budget. It can be a <Link href="/packages">Mathura Vrindavan tour</Link> which will be very easily accomplished by booking a taxi service which will give you a comfortable right and will be very economical.</>}
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
      ]} />

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
                detailsLink: "/same-day-mathura-tour-from-delhi",
                pricing: [
                  { type: "Sedan", price: "₹5500" },
                  { type: "MUV", price: "₹6500" },
                  { type: "SUV", price: "₹8000" },
                ],
              },
              {
                imageSrc: "/tour/4-days-in-agra.webp",
                imageAlt: "Mathura Tour",
                title: "Same Day Agra Mathura Vrindavan Tour by Car",
                duration: "Same Day",
                detailsLink: "/same-day-agra-to-mathura-vrindavan",
                pricing: [
                  { type: "Sedan", price: "₹3000" },
                  { type: "MUV", price: "₹4200" },
                  { type: "SUV", price: "₹5500" },
                ],
              },
              {
                imageSrc: "/images/mathura-vrindavan-gokul-goverdhan-barsana-nanndgaon.webp",
                imageAlt: "Mathura Tour",
                title: "2 Days Weekend Mathura Vrindavan Tour by Car",
                duration: "2 Days",
                detailsLink: "/2-days-mathura-vrindavan-weekend-package-from-delhi",
                pricing: [
                  { type: "Sedan", price: "₹6999" },
                  { type: "MUV", price: "₹8499" },
                  { type: "SUV", price: "₹10499" },
                ],
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
            title={"Taxi Services for Mathura Vrindavan Tour Packages"}
          />



          <MathuraVrindavanTours
            TourTableData={[
              { packageName: "Mathura Vrindavan Local Sightseeing Tour", duration: "Same Day", sedanPrice: "₹2000", muvPrice: "₹2500", suvPrice: "₹3000" },
              { packageName: "Same Day Vrindavan to Nandgaon, Barsana & Govardhan Tour", duration: "Same Day", sedanPrice: "₹2500", muvPrice: "₹3000", suvPrice: "₹4000" },
              { packageName: "Same Day Vrindavan to Mathura, Gokul & Raman Reti Tour", duration: "Same Day", sedanPrice: "₹2500", muvPrice: "₹3000", suvPrice: "₹4000" },
            ]}
            PickupTours={
              [
                {
                  imageSrc: "/tour/agra-mathura-vrindavan.jpg",
                  imageAlt: "Mathura Tour",
                  title: "Mathura Vrindavan Local Sightseeing Tour by Car",
                  duration: "Same Day",
                  detailsLink: "/vrindavan-local-sighseeing-tour",
                  pricing: [
                    { type: "Sedan", price: "₹2000" },
                    { type: "MUV", price: "₹2500" },
                    { type: "SUV", price: "₹3000" },
                  ],
                },
                {
                  imageSrc: "/tour/nandgaon-barsana-govardhan.webp",
                  imageAlt: "Mathura Tour",
                  title: "Same Day Vrindavan to Nandgaon, Barsana & Govardhan Tour by Car",
                  duration: "Same Day",
                  detailsLink: "/same-day-vrindavan-to-nandgaon-barsana-govardhan",
                  pricing: [
                    { type: "Sedan", price: "₹2500" },
                    { type: "MUV", price: "₹3000" },
                    { type: "SUV", price: "₹4000" },
                  ],
                },
                {
                  imageSrc: "/tour/mathura-gokul-raman-reti.webp",
                  imageAlt: "Mathura Tour",
                  title: "Same Day Vrindavan to Mathura, Gokul & Raman Reti Tour by Car",
                  duration: "Same Day",
                  detailsLink: "/same-day-vrindavan-to-mathura-gokul-raman-reti",
                  pricing: [
                    { type: "Sedan", price: "₹2500" },
                    { type: "MUV", price: "₹3000" },
                    { type: "SUV", price: "₹4000" },
                  ],
                },
              ]}
            para={<>Explore the sacred cities of <stronh>Mathura and Vrindavan</stronh> with <strong>Mathura Vrindavan
              Taxi Services</strong>, your trusted travel partner for <strong>comfortable and hassle-free
                local sightseeing tours by car</strong>. We offer well-maintained vehicles with professional
              drivers, ensuring a smooth and enriching journey through the holy sites of Lord Krishna’s
              birthplace.</>}


            morecontent={<><p>Our <strong>customized sightseeing tours</strong> cover all major temples and attractions,
              including <strong>Shri Krishna Janmabhoomi, Banke Bihari Temple, Prem Mandir, ISKCON Temple,
                Nidhivan, Vishram Ghat, Dwarkadhish Temple, and Govardhan Parikrama</strong>. Whether you’re
              visiting for a spiritual journey, photography, or cultural exploration, we ensure a seamless
              travel experience.</p>

              <p>With a fleet of <strong>sedans, SUVs, tempo travelers, and luxury cars</strong>, we cater to solo
                travelers, families, and groups. Our affordable pricing, 24/7 service, and flexible booking
                options make your Mathura-Vrindavan tour convenient and budget-friendly.</p>

              <p>At <strong>Go Taxi Booking Services</strong>, we prioritize comfort, punctuality, and
                customer satisfaction, offering the best local sightseeing tours by car. Sit back, relax, and
                enjoy a divine journey through these sacred cities with our expert drivers.</p>

              <h2>Compare Duration & Pricing for Mathura Vrindavan Local Sightseeing Tour by Car </h2>
              <p>For Mathura-Vrindavan sightseeing, taxis provide customizable durations and pricing, perfect for
                personalized tours. Pre-packaged tours offer fixed schedules, sometimes with guides or
                inclusions, often more affordable. Decide based on your need for flexibility or structured
                plans.</p></>}
            tagline={"Exclusive Travel Packages"}
            title={"Mathura Vrindavan Local Sightseeing Tour by Car"}
          />



          <MathuraVrindavanTours
            TourTableData={[
              {
                packageName: "3 Days Braj 84 Kos Express Yatra",
                duration: "3 Days",
                sedanPrice: "₹14000",
                muvPrice: "₹16000",
                suvPrice: "₹18000"
              },
              {
                packageName: "5-Days Braj 84 Kos Yatra",
                duration: "5 Days",
                sedanPrice: "₹20000",
                muvPrice: "₹22000",
                suvPrice: "₹26000"
              },
              {
                packageName: "7 Days Braj 84 Kos Yatra",
                duration: "7 Days",
                sedanPrice: "₹20000",
                muvPrice: "₹30000",
                suvPrice: "₹28000"
              }
            ]}
            PickupTours={[
              {
                imageSrc: "/images/84-kosh-yatra-7-night-8-days.webp",
                imageAlt: "Mathura Tour",
                title: "3 Days Braj 84 Kos Express Yatra",
                duration: "3 Days",
                detailsLink: "/3-days-braj-84-kos-express-yatra",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" },
                ],
              },
              {
                imageSrc: "/tour/84-kos-yatra-package.webp",
                imageAlt: "Mathura Tour",
                title: "5-Days Braj 84 Kos Yatra",
                duration: "5 Days",
                detailsLink: "/5-days-braj-84-kos-yatra",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" },
                ],
              },
              {
                imageSrc: "/tour/7-days-braj.webp",
                imageAlt: "Mathura Tour",
                title: "7 Days Braj 84 Kos Yatra",
                duration: "7 Days",
                detailsLink: "/7-days-braj-84-kos-yatra",
                pricing: [
                  { type: "Sedan", price: "₹20000" },
                  { type: "MUV", price: "₹24000" },
                  { type: "SUV", price: "₹28000" },
                ],
              }
            ]}
            para={<>Join the <strong>sacred Braj 84 Kosh Yatra with Go Taxi Booking Services</strong>, your
              trusted travel partner for a divine and hassle-free pilgrimage. Covering 252 kilometers of holy
              land, this yatra takes you through the most revered places connected to Lord Krishna’s leelas,
              offering a deeply spiritual experience.</>}


            morecontent={<><p>Our Braj 84 Kosh Yatra includes <strong>visits to Mathura, Vrindavan, Govardhan, Barsana,
              Nandgaon, Gokul, Radha Kund, Baldeo, and many more sacred sites</strong>. We provide
              comfortable cars, professional drivers, and customized travel plans, ensuring a smooth and
              fulfilling pilgrimage.</p>

              <p>With flexible <strong>3-day, 5-day, and 7-day yatra packages</strong>, we make your journey
                convenient and spiritually enriching. Whether you&apos;re traveling alone, with family, or in a
                group, our dedicated service ensures a safe, comfortable, and memorable experience.</p>


              <h2>Mathura Vrindavan Braj 84 Kosh Yatra Packages: Compare Duration & Pricing </h2>
              <p>Mathura-Vrindavan Braj 84 Kosh Yatra packages vary in duration (2-5 days) and pricing, depending
                on inclusions like transport, stays, and meals. Compare options to find the best fit for your
                budget and spiritual journey.</p></>}
            tagline={"Exclusive Travel Packages"}
            title={"Mathura Vrindavan Braj 84 Kosh Yatra Packages"}
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