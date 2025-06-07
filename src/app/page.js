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
          image: '/images/innova-crysta.png',
        },
        {
          type: 'muv',
          name: 'Maruti Ertiga',
          price: '₹13/ KM',
          limit: '(Per day 300 k.m limit)',
          image: '/images/ertiga-car.png',
        },
        {
          type: 'muv',
          name: 'Kia Carens',
          price: '₹13/ KM',
          limit: '(Per day 300 k.m limit)',
          image: '/images/kia-carens.png',
        },
        {
          type: 'muv',
          name: 'Innova Car',
          price: '₹14/ KM',
          limit: '',
          image: '/images/innova-car.png',
        },
        {
          type: 'sedan',
          name: 'Swift Dzire',
          price: '₹11/ KM',
          limit: '',
          image: '/images/swift-desire.png',
        },
        {
          type: 'sedan',
          name: 'Toyota Etios',
          price: '₹11/ KM',
          limit: '',
          image: '/images/itios-car.png',
        },
        {
          type: 'suv',
          name: 'Tata Safari',
          price: 'Ask Price',
          limit: '/ KM',
          image: '/images/tata-safari.png',
        },
        {
          type: 'suv',
          name: 'Maruti Fronx',
          price: '₹12/ KM',
          limit: '',
          image: '/images/fronx.png',
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
          image: '/tour/tempo-traveller-hire.png',
        },
        {
          type: 'bus',
          name: 'Bus',
          price: 'Ask Price',
          limit: '/ KM',
          image: '/tour/bus-hire-in-mathura.png',
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
                imageSrc: "/tour/haridwar-ganga-aarti.png",
                imageAlt: "Haridwar Tour",
                title: "Haridwar – Ganga Aarti & Har Ki Pauri",
                duration: "1 Day",
                detailsLink: "haridwar-ganga-aarti-har-ki-pauri-temples",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/rishikesh-aarti-rafting.png",
                imageAlt: "Rishikesh Tour",
                title: "Rishikesh – Yoga Capital & Rafting",
                duration: "1 Day",
                detailsLink: "rishikesh-yoga-capital-ganga-aarti-rafting",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/kedarnath-dham.png",
                imageAlt: "Kedarnath Temple",
                title: "Kedarnath – Char Dham Shiva Temple",
                duration: "2 Days",
                detailsLink: "kedarnath-one-of-the-char-dham-shiva-temple",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/badrinath-dham.png",
                imageAlt: "Badrinath Temple",
                title: "Badrinath – Vishnu Temple Char Dham",
                duration: "2 Days",
                detailsLink: "badrinath-vishnu-temple-char-dham",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/gangotri-ganga-origin.png",
                imageAlt: "Gangotri Temple",
                title: "Gangotri – Origin of River Ganga",
                duration: "2 Days",
                detailsLink: "gangotri-origin-of-river-ganga",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/yamunotri-yamuna-source.png",
                imageAlt: "Yamunotri Temple",
                title: "Yamunotri – Source of River Yamuna",
                duration: "2 Days",
                detailsLink: "yamunotri-source-of-river-yamuna",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/jageshwar-temples.png",
                imageAlt: "Jageshwar Temples",
                title: "Jageshwar – Ancient Shiva Temples",
                duration: "1 Day",
                detailsLink: "jageshwar-cluster-of-ancient-shiva-temples",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/hemkund-sahib.png",
                imageAlt: "Hemkund Sahib",
                title: "Hemkund Sahib – Sikh Pilgrimage",
                duration: "2 Days",
                detailsLink: "hemkund-sahib-sikh-pilgrimage-site-in-the-himalayas",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              }
            ]}
            para={
              <>
                Embark on a spiritually enriching journey through the most sacred pilgrimage sites of India. Explore the divine heritage of Uttarakhand&apos;s Char Dham and other revered temples, surrounded by the majestic Himalayas and the sacred rivers Ganga and Yamuna.
              </>
            }
            morecontent={
              <>
                <p>
                  Our specially curated tours take you to Haridwar for the Ganga Aarti at Har Ki Pauri, Rishikesh for yoga, meditation and adventure, and onward to the legendary shrines of Kedarnath and Badrinath—two of the revered Char Dham destinations.
                </p>
                <p>
                  You&apos;ll also discover the origins of India&apos;s holiest rivers at Gangotri and Yamunotri, the tranquil ancient Shiva temples in Jageshwar, and the awe-inspiring Sikh pilgrimage site of Hemkund Sahib nestled high in the Himalayas.
                </p>
                <p>
                  Whether you seek blessings, peace, or a spiritual escape, these destinations offer a profound connection to India&apos;s rich religious legacy.
                </p>
              </>
            }
            tagline={"🛕 Religious/Spiritual Destinations"}
            title={"Uttarakhand Religious Tour Packages"}
          />



          <MathuraVrindavanTours
            TourTableData={[]}
            PickupTours={[
              {
                imageSrc: "/tour/nainital-boating-ropeway.png",
                imageAlt: "Nainital Tour",
                title: "Nainital – Lakes, Boating & Ropeway",
                duration: "1 Day",
                detailsLink: "nainital-lakes-boating-mall-road-ropeway",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/mussoorie-hill-station.png",
                imageAlt: "Mussoorie Tour",
                title: "Mussoorie – Queen of Hills",
                duration: "1 Day",
                detailsLink: "mussoorie-queen-of-hills-kempty-falls-mall-road",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/almora-town-view.png",
                imageAlt: "Almora Tour",
                title: "Almora – Culture & Panoramic Views",
                duration: "1 Day",
                detailsLink: "almora-culture-views-peaceful-town",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/ranikhet-golf-temple.png",
                imageAlt: "Ranikhet Tour",
                title: "Ranikhet – Forests, Temples & Golf Course",
                duration: "1 Day",
                detailsLink: "ranikhet-forests-golf-course-temples",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/kausani-himalayan-tea.png",
                imageAlt: "Kausani Tour",
                title: "Kausani – Himalayan Views & Tea Gardens",
                duration: "1 Day",
                detailsLink: "kausani-himalayan-views-tea-gardens",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/chopta-mini-switzerland.png",
                imageAlt: "Chopta Tour",
                title: "Chopta – Mini Switzerland of India",
                duration: "2 Days",
                detailsLink: "chopta-mini-switzerland-of-india-tungnath",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/lansdowne-pine-forests.png",
                imageAlt: "Lansdowne Tour",
                title: "Lansdowne – Peaceful Pine Forest Town",
                duration: "1 Day",
                detailsLink: "lansdowne-quiet-military-town-pine-forests",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              }
            ]}
            para={
              <>
                Discover the breathtaking beauty of Uttarakhand&apos;s finest hill stations and scenic towns. Whether you&apos;re chasing misty mornings, tranquil lakes, or panoramic Himalayan views—these destinations offer a refreshing escape from city life.
              </>
            }
            morecontent={
              <>
                <p>
                  From the bustling charm of Nainital&apos;s lakes and ropeways to the serene pine forests of Lansdowne, each town promises a unique blend of nature, culture, and leisure. Explore Mussoorie’s Mall Road and Kempty Falls, or unwind in Kausani with postcard-perfect views of snow-capped peaks.
                </p>
                <p>
                  Almora and Ranikhet welcome you with cultural richness and natural tranquility, while Chopta—dubbed the <b>Mini Switzerland of India</b>—offers both scenic grandeur and access to the sacred Tungnath temple.
                </p>
                <p>
                  Our curated tour packages include local guides, well-maintained vehicles, and flexible itineraries to make your hill station journey stress-free and memorable.
                </p>
              </>
            }
            tagline={"🏞️ Hill Stations & Scenic Towns"}
            title={"Uttarakhand Hill Station Tour Packages"}
          />




          <MathuraVrindavanTours
            TourTableData={[]}
            PickupTours={[
              {
                imageSrc: "/tour/auli-skiing-cable-car.png",
                imageAlt: "Auli Tour",
                title: "Auli – Skiing & Himalayan Views",
                duration: "2 Days",
                detailsLink: "auli-skiing-cable-car-himalayan-views",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/valley-of-flowers.png",
                imageAlt: "Valley of Flowers Tour",
                title: "Valley of Flowers – UNESCO Heritage Site",
                duration: "3 Days",
                detailsLink: "valley-of-flowers-rare-flora-unesco-site",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/jim-corbett-national-park.png",
                imageAlt: "Jim Corbett Tour",
                title: "Jim Corbett – Tigers & Jungle Safari",
                duration: "2 Days",
                detailsLink: "jim-corbett-national-park-safari-bird-watching",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/binsar-mountain-wildlife.png",
                imageAlt: "Binsar Tour",
                title: "Binsar – Wildlife Sanctuary & Views",
                duration: "2 Days",
                detailsLink: "binsar-wildlife-sanctuary-mountain-views",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/mukteshwar-trekking.png",
                imageAlt: "Mukteshwar Tour",
                title: "Mukteshwar – Trekking & Rock Climbing",
                duration: "1 Day",
                detailsLink: "mukteshwar-trekking-rock-climbing-views",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/dhanaulti-camping.png",
                imageAlt: "Dhanaulti Tour",
                title: "Dhanaulti – Eco Parks & Camping",
                duration: "1 Day",
                detailsLink: "dhanaulti-eco-parks-camping-nature",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              }
            ]}
            para={
              <>
                Embark on an adventure-filled journey through Uttarakhand’s pristine wilderness and thrilling landscapes. These destinations are perfect for thrill-seekers, nature lovers, and explorers looking to get off the beaten path.
              </>
            }
            morecontent={
              <>
                <p>
                  Auli offers world-class skiing and stunning cable car rides with views of snow-covered Himalayan peaks. If you&apos;re into rare flora, the Valley of Flowers—a UNESCO World Heritage Site—is a breathtaking trek through alpine meadows.
                </p>
                <p>
                  For wildlife enthusiasts, Jim Corbett National Park is a top pick for tiger safaris and bird watching. Binsar and Mukteshwar offer panoramic views, trekking trails, and rock climbing, while Dhanaulti provides a peaceful escape with eco parks and forest camping.
                </p>
                <p>
                  Each package is designed for an immersive outdoor experience with safe transport, local expertise, and flexible itineraries to maximize your adventure.
                </p>
              </>
            }
            tagline={"🧗 Adventure & Nature Destinations"}
            title={"Adventure & Nature Tour Packages in Uttarakhand"}
          />



          <MathuraVrindavanTours
            TourTableData={[]}
            PickupTours={[
              {
                imageSrc: "/tour/peora-kumaon-hidden-gem.png",
                imageAlt: "Peora Tour",
                title: "Peora – Hidden Gem in Kumaon",
                duration: "1 Day",
                detailsLink: "peora-hidden-gem-kumaon",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/munsiyari-johar-valley-trekking.png",
                imageAlt: "Munsiyari Tour",
                title: "Munsiyari – Trekking Hub & Johar Valley Gateway",
                duration: "3 Days",
                detailsLink: "munsiyari-johar-valley-trekking-hub",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/pithoragarh-nepal-border-views.png",
                imageAlt: "Pithoragarh Tour",
                title: "Pithoragarh – Scenic Town Near Nepal Border",
                duration: "2 Days",
                detailsLink: "pithoragarh-scenic-town-near-nepal-border",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/chaukori-tea-gardens-himalayas.png",
                imageAlt: "Chaukori Tour",
                title: "Chaukori – Tea Gardens & Himalayan Views",
                duration: "2 Days",
                detailsLink: "chaukori-tea-gardens-himalaya-views",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              },
              {
                imageSrc: "/tour/khirsu-quiet-hill-town.png",
                imageAlt: "Khirsu Tour",
                title: "Khirsu – Quiet & Offbeat Hill Town",
                duration: "1 Day",
                detailsLink: "khirsu-offbeat-quiet-hill-town",
                pricing: [
                  { type: "Sedan", price: "Ask for Price" },
                  { type: "MUV", price: "Ask for Price" },
                  { type: "SUV", price: "Ask for Price" }
                ]
              }
            ]}
            para={
              <>
                Discover the calm side of Uttarakhand with our Offbeat & Quiet Escape Packages. Perfect for travelers seeking peace, solitude, and scenic beauty away from the crowds.
              </>
            }
            morecontent={
              <>
                <p>
                  Peora, a lesser-known gem in the Kumaon hills, offers raw beauty and village charm. Munsiyari, nestled in the Johar Valley, is a paradise for trekkers and nature lovers.
                </p>
                <p>
                  Pithoragarh’s Himalayan views and proximity to the Nepal border give it a unique cultural vibe. Chaukori’s tea gardens and sunrise points are ideal for relaxation, while Khirsu is a hidden retreat surrounded by deodar forests and mountain silence.
                </p>
                <p>
                  Whether you&apos;re journaling in the hills, stargazing at night, or meditating in silence, these quiet escapes promise deep rejuvenation and a break from the digital noise.
                </p>
              </>
            }
            tagline={"🧘 Offbeat & Quiet Escapes"}
            title={"Offbeat & Quiet Hill Station Tour Packages in Uttarakhand"}
          />




          <Whychooseonlinetaxiservice />

          <OutstationTaxiServices taxis={[
            {
              title: 'Sedan',
              subtitle: 'Swift Dzire, etc.',
              price: '₹11/km',
              bgColor: '#ff9999',
              imgSrc: '/images/swift-desire.png',
            },
            {
              title: 'MUV',
              subtitle: 'Ertiga',
              price: '₹14/km',
              bgColor: '#66b3ff',
              imgSrc: '/images/ertiga-car.png',
            },
            {
              title: 'XUV',
              subtitle: 'Innova',
              price: '₹18/km',
              bgColor: '#ffcc66',
              imgSrc: '/images/innova-crysta.png',
            },
            {
              title: 'Kia Carens',
              subtitle: 'SUV',
              price: '₹16/km',
              bgColor: '#ff9966',
              imgSrc: '/images/kia-carens.png',
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
                image: '/images/swift-desire.png', // Image paths are relative to the `public` directory in Next.js
                alt: 'Sedan Taxi',
                description: 'Swift Dzire, etc. (4-seater)',
                price: '₹2000',
                hours: '8 hours / 80 km',
                additionalCharges: '₹11/km or ₹150/hour',
                bgColor: '#ff6666',
              },
              {
                type: 'MUV',
                image: '/images/ertiga-car.png',
                alt: 'MUV Taxi',
                description: 'Ertiga, etc. (6-seater)',
                price: '₹2500',
                hours: '8 hours / 80 km',
                additionalCharges: '₹14/km or ₹150/hour',
                bgColor: '#66b3ff',
              },
              {
                type: 'XUV',
                image: '/images/innova-crysta.png',
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