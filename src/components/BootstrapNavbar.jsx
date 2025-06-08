'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter, usePathname } from 'next/navigation';
import CarBookingForm from './CarBookingForm'; // Assuming this path is correct

const BootstrapNavbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {
        // Ensure this only runs on the client side
        if (typeof window !== 'undefined') {
            import('bootstrap/dist/js/bootstrap.bundle.min.js')
                .then(() => {
                    // console.log('Bootstrap JS loaded'); // Optional: for debugging
                })
                .catch(error => console.error('Error loading Bootstrap JS:', error));
        }
    }, []);


    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Uttarakhand Yatra</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/services">Service</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" onClick={() => {
                                if (pathname.includes("packages")) return
                                router.push('/packages')
                            }} href="/packages" id="packagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Packages
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="packagesDropdown">
                                <li><Link className="dropdown-item" href="/2024/02/char-dham-trour.html">Chardham Yatra -  Yamunotri, Gangotri, Kedarnath, and Badrinath</Link></li>
                                <li><Link className="dropdown-item" href="/packages/yamunotri-source-of-river-yamuna">Yamunotri – Source of River Yamuna</Link></li>
                                <li><Link className="dropdown-item" href="/packages/gangotri-origin-of-river-ganga">Gangotri – Origin of River Ganga</Link></li>
                                <li><Link className="dropdown-item" href="/2024/02/kedarnath-tour-2024.html">Kedarnath – One of the Char Dham, Shiva Temple</Link></li>
                                <li><Link className="dropdown-item" href="/2024/02/badrinath-tour.html">Badrinath – Vishnu Temple, Char Dham</Link></li>
                                <li><Link className="dropdown-item" href="/packages/haridwar-ganga-aarti-har-ki-pauri-temples">Haridwar – Ganga Aarti, Har Ki Pauri, Temples</Link></li>
                                <li><Link className="dropdown-item" href="/packages/rishikesh-yoga-capital-ganga-aarti-rafting">Rishikesh – Yoga Capital, Ganga Aarti, Rafting</Link></li>
                                <li><Link className="dropdown-item" href="/packages/jageshwar-cluster-of-ancient-shiva-temples">Jageshwar – Cluster of Ancient Shiva Temples</Link></li>
                                <li><Link className="dropdown-item" href="/packages/hemkund-sahib-sikh-pilgrimage-site-in-the-himalayas">Hemkund Sahib – Sikh Pilgrimage Site in the Himalayas</Link></li>
                                <li><Link className="dropdown-item" href="/packages/nainital-lakes-boating-mall-road-ropeway">Nainital – Lakes, Boating, Mall Road, Ropeway</Link></li>
                                <li><Link className="dropdown-item" href="/packages/mussoorie-queen-of-hills-kempty-falls-mall-road">Mussoorie – Queen of Hills, Kempty Falls, Mall Road</Link></li>
                                <li><Link className="dropdown-item" href="/packages/almora-culture-views-peaceful-town">Almora – Culture, Views, Peaceful Town</Link></li>
                                <li><Link className="dropdown-item" href="/packages/ranikhet-forests-golf-course-temples">Ranikhet – Forests, Golf Course, Temples</Link></li>
                                <li><Link className="dropdown-item" href="/packages/kausani-himalayan-views-tea-gardens">Kausani – Himalayan Views, Tea Gardens</Link></li>
                                <li><Link className="dropdown-item" href="/packages/chopta-mini-switzerland-of-india-base-for-tungnath">Chopta – Mini Switzerland of India, Base for Tungnath</Link></li>
                                <li><Link className="dropdown-item" href="/packages/lansdowne-quiet-military-town-pine-forests">Lansdowne – Quiet Military Town, Pine Forests</Link></li>
                                <li><Link className="dropdown-item" href="/packages/auli-skiing-cable-car-panoramic-himalayan-views">Auli – Skiing, Cable Car, Panoramic Himalayan Views</Link></li>
                                <li><Link className="dropdown-item" href="/packages/valley-of-flowers-unesco-site-rare-flora">Valley of Flowers – UNESCO Site, Rare Flora</Link></li>
                                <li><Link className="dropdown-item" href="/packages/jim-corbett-national-park-tigers-safaris-bird-watching">Jim Corbett National Park – Tigers, Safaris, Bird Watching</Link></li>
                                <li><Link className="dropdown-item" href="/packages/binsar-wildlife-sanctuary-mountain-views">Binsar – Wildlife Sanctuary, Mountain Views</Link></li>
                                <li><Link className="dropdown-item" href="/packages/mukteshwar-rock-climbing-trekking-views">Mukteshwar – Rock Climbing, Trekking, Views</Link></li>
                                <li><Link className="dropdown-item" href="/packages/dhanaulti-eco-parks-camping">Dhanaulti – Eco Parks, Camping</Link></li>
                                <li><Link className="dropdown-item" href="/packages/peora-hidden-gem-in-kumaon-region">Peora – Hidden Gem in Kumaon Region</Link></li>
                                <li><Link className="dropdown-item" href="/packages/munsiyari-gateway-to-the-johar-valley-trekking-hub">Munsiyari – Gateway to the Johar Valley, Trekking Hub</Link></li>
                                <li><Link className="dropdown-item" href="/packages/pithoragarh-scenic-town-near-nepal-border">Pithoragarh – Scenic Town Near Nepal Border</Link></li>
                                <li><Link className="dropdown-item" href="/packages/chaukori-tea-gardens-and-himalaya-views">Chaukori – Tea Gardens and Himalaya Views</Link></li>
                                <li><Link className="dropdown-item" href="/packages/khirsu-offbeat-quiet-hill-town">Khirsu – Offbeat, Quiet Hill Town</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            {/* THIS IS THE LINE THAT NEEDS TO BE CORRECTED: */}
                            <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Taxi / Car Booking</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#"
                                id="routesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Popular Routes
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="routesDropdown">
                                <li><Link className="dropdown-item" href="/popularroutes/dehradun-to-rishikesh-taxi-hire-on-rent">Dehradun to Rishikesh</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/dehradun-to-mussoorie-taxi-hire-on-rent">Dehradun to Mussoorie</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/haridwar-to-badrinath-taxi-hire-on-rent">Haridwar to Badrinath</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/haridwar-to-kedarnath-taxi-hire-on-rent">Haridwar to Kedarnath</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/rishikesh-to-gangotri-taxi-hire-on-rent">Rishikesh to Gangotri</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/rishikesh-to-yamunotri-taxi-hire-on-rent">Rishikesh to Yamunotri</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/dehradun-to-auli-taxi-hire-on-rent">Dehradun to Auli</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/haridwar-to-joshimath-taxi-hire-on-rent">Haridwar to Joshimath</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/dehradun-to-nainital-taxi-hire-on-rent">Dehradun to Nainital</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/kathgodam-to-nainital-taxi-hire-on-rent">Kathgodam to Nainital</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/kathgodam-to-bhimtal-taxi-hire-on-rent">Kathgodam to Bhimtal</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/kathgodam-to-ranikhet-taxi-hire-on-rent">Kathgodam to Ranikhet</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/payment">Payment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/blog">Blog</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <CarBookingForm />
    </>
};

export default BootstrapNavbar;