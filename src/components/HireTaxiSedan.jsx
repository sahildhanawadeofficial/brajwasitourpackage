"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HireTaxiSedan = ({ carData }) => {

    const [activeCarFilter, setActiveCarFilter] = useState('all');

    const filteredCars = activeCarFilter === 'all'
        ? carData
        : carData.filter(car => car.type === activeCarFilter);

    return <>
        <section className="gauto-offers-area section_70">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading">
                            <h2>Hire Taxi - Sedan | MUV | SUV</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="offer-tabs">
                            <ul className="nav nav-tabs" id="offerTab" role="tablist">
                                <li className="nav-item">
                                    <button className={`nav-link ${activeCarFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveCarFilter('all')}>All Taxi/Car</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeCarFilter === 'sedan' ? 'active' : ''}`} onClick={() => setActiveCarFilter('sedan')}>SEDAN CARS</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeCarFilter === 'suv' ? 'active' : ''}`} onClick={() => setActiveCarFilter('suv')}>SUV CARS</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeCarFilter === 'muv' ? 'active' : ''}`} onClick={() => setActiveCarFilter('muv')}>MUV CARS</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeCarFilter === 'tempo' ? 'active' : ''}`} onClick={() => setActiveCarFilter('tempo')}>TEMPO TRAVELLER</button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link ${activeCarFilter === 'bus' ? 'active' : ''}`} onClick={() => setActiveCarFilter('bus')}>Buses</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="offerTabContent">
                                <div className="row" id="car-container">
                                    {filteredCars.map((car, index) => (
                                        <div key={index} className="col-lg-4 car-item">
                                            <div className="single-offers">
                                                <div className="offer-image">
                                                    <Link href={car.type === 'tempo' ? "tempo-traveller-hire-in-mathura.html" : car.type === 'bus' ? "bus-hire-in-mathura.html" : "#"}>
                                                        <Image
                                                            src={car.image}
                                                            alt={car.name}
                                                            width={350} // Adjust as needed
                                                            height={200} // Adjust as needed
                                                            layout="responsive"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="offer-text">
                                                    <h3>{car.name}</h3>
                                                    <h4><span>{car.price}</span> {car.limit}</h4>
                                                    <button type="button" className="offer-btn-1 e-btn" onClick={() => { /* Handle modal open logic here */ }}>Enquiry Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default HireTaxiSedan
