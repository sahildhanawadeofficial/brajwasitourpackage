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
                <Link className="navbar-brand" href="/">Brajwasi Tour</Link>

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
                                <li><Link className="dropdown-item" href="/packages/5-Day-Braj-84-Kosh-Yatra">5-Day Braj 84 Kosh Yatra</Link></li>
                                <li><Link className="dropdown-item" href="/packages/6-Day-Braj-84-Kosh-Yatra">6-Day Braj 84 Kosh Yatra</Link></li>
                                <li><Link className="dropdown-item" href="/packages/7-Day-Braj-84-Kosh-Yatra">7-Day Braj 84 Kosh Yatra</Link></li>
                                <li><Link className="dropdown-item" href="/packages/8-Day-Braj-84-Kosh-Yatra">8-Day Braj 84 Kosh Yatra</Link></li>
                                <li><Link className="dropdown-item" href="/packages/9-Day-Braj-84-Kosh-Yatra">9-Day Braj 84 Kosh Yatra</Link></li>
                                <li><Link className="dropdown-item" href="/packages/10-Day-Braj-84-Kosh-Yatra">10-Day Braj 84 Kosh Yatra</Link></li>
                                <li><Link className="dropdown-item" href="/packages/3-Day-Mathura-Vrindavan-With-Brijwasi-Lands-Inn">3-Day Mathura Vrindavan With Brijwasi Lands Inn</Link></li>
                                <li><Link className="dropdown-item" href="/packages/4-Day-Mathura-Vrindavan-Package">4-Day Mathura Vrindavan Package</Link></li>
                                <li><Link className="dropdown-item" href="/packages/Holi-Celebration-Tour-Package">Holi Celebration Tour Package</Link></li>
                                <li><Link className="dropdown-item" href="/packages/Phoolon-Ki-Holi-Tour-Package">Phoolon Ki Holi Tour Package</Link></li>
                                <li><Link className="dropdown-item" href="/packages/Customized-Mathura-Vrindavan-Package">Customized Mathura Vrindavan Package</Link></li>
                                <li><Link className="dropdown-item" href="/packages/Vrindavan-Tour-By-Car">Vrindavan Tour By Car</Link></li>
                                <li><Link className="dropdown-item" href="/packages/Mathura-Vrindavan-Tour-From-Delhi">Mathura Vrindavan Tour From Delhi</Link></li>
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
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-vrindavan-taxi-hire-on-rent">Mathura to Vrindavan</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-gokul-taxi-hire-on-rent">Mathura to Gokul</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-govardhan-taxi-hire-on-rent">Mathura to Govardhan</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-barsana-taxi-hire-on-rent">Mathura to Barsana</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-nandgaon-taxi-hire-on-rent">Mathura to Nandgaon</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-radhakund-taxi-hire-on-rent">Mathura to Radhakund</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-prem-mandir-vrindavan-taxi-hire-on-rent">Mathura to Prem Mandir Vrindavan</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-iskcon-temple-vrindavan-taxi-hire-on-rent">Mathura to ISKCON Temple Vrindavan</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/vrindavan-to-gokul-taxi-hire-on-rent">Vrindavan to Gokul</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/vrindavan-to-govardhan-taxi-hire-on-rent">Vrindavan to Govardhan</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/vrindavan-to-barsana-taxi-hire-on-rent">Vrindavan to Barsana</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/vrindavan-to-nandgaon-taxi-hire-on-rent">Vrindavan to Nandgaon</Link></li>
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