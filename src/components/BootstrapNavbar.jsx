'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter, usePathname } from 'next/navigation';

const BootstrapNavbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">GoToTaxiBooking</Link>

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
                                <li><Link className="dropdown-item" href="/packages/same-day-agra-mathura-vrindavan-tour">Same day Agra Mathura tour</Link></li>
                                <li><Link className="dropdown-item" href="/packages/same-day-agra-tour-package-from-delhi">Same day Agra tour from Delhi</Link></li>
                                <li><Link className="dropdown-item" href="/packages/2-days-mathura-vrindavan-weekend-package-from-delhi">2 Days Mathura weekend tour</Link></li>
                                <li><Link className="dropdown-item" href="/packages/2-days-mathura-with-bharatpur-tour-package">2 Days Mathura Bharatpur tour</Link></li>
                                <li><Link className="dropdown-item" href="/packages/3-days-royal-spiritual-mathura-bharatpur-agra-tour-package">3 Days Mathura Bharatpur with Agra</Link></li>
                                <li><Link className="dropdown-item" href="/packages/3-days-spritual-mathura-vrindavan-tour-package-via-gokul">3 Days Mathura Tour via Gokul</Link></li>
                                <li><Link className="dropdown-item" href="/packages/3nights-4days-delhi-agra-jaipur-via-vrindavan-tour-package">4 Days Delhi Agra Jaipur with Vrindavan</Link></li>
                                <li><Link className="dropdown-item" href="/packages/3nights-4days-mathura-bharatpur-agra-memorable-tour-package">4 Days Mathura Bharatpur with Agra</Link></li>
                                <li><Link className="dropdown-item" href="/packages/3nights-4days-mathura-vrindavan-tour-package-from-delhi">4 Days Mathura from Delhi</Link></li>
                                <li><Link className="dropdown-item" href="/packages/4-days-mathura-vrindavan-tour-package-via-taj-mahal">4 Days Mathura with Taj Mahal</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Taxi / Car Booking</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" onClick={() => {
                                if (pathname.includes("popularroutes")) return
                                router.push('/popularroutes')
                            }} id="routesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Popular Routes
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="routesDropdown">
                                <li><Link className="dropdown-item" href="/popularroutes/agra-to-delhi-taxi-hire-on-rent">Agra to Delhi</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/agra-to-jaipur-taxi-hire-on-rent">Agra to Jaipur</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/agra-to-mathura-taxi-hire-on-rent">Agra to Mathura</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/delhi-to-agra-taxi-hire-on-rent">Delhi to Agra</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/delhi-to-jaipur-taxi-hire-on-rent">Delhi to Jaipur</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/delhi-to-mathura-taxi-hire-on-rent">Delhi to Mathura</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/jaipur-to-agra-taxi-hire-on-rent">Jaipur to Agra</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/jaipur-to-delhi-taxi-hire-on-rent">Jaipur to Delhi</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/jaipur-to-mathura-taxi-hire-on-rent">Jaipur to Mathura</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-agra-taxi-hire-on-rent">Mathura to Agra</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-delhi-taxi-hire-on-rent">Mathura to Delhi</Link></li>
                                <li><Link className="dropdown-item" href="/popularroutes/mathura-to-jaipur-taxi-hire-on-rent">Mathura to Jaipur</Link></li>
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
    );
};

export default BootstrapNavbar;
