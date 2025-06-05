"use client"
import React from 'react';
import Image from 'next/image';

// const taxis = [
//     {
//         title: 'Sedan',
//         subtitle: 'Swift Dzire, etc.',
//         price: '₹11/km',
//         bgColor: '#ff9999',
//         imgSrc: '/images/swift-desire.webp',
//     },
//     {
//         title: 'MUV',
//         subtitle: 'Ertiga',
//         price: '₹14/km',
//         bgColor: '#66b3ff',
//         imgSrc: '/images/ertiga-car.webp',
//     },
//     {
//         title: 'XUV',
//         subtitle: 'Innova',
//         price: '₹18/km',
//         bgColor: '#ffcc66',
//         imgSrc: '/images/innova-crysta.webp',
//     },
//     {
//         title: 'Kia Carens',
//         subtitle: 'SUV',
//         price: '₹16/km',
//         bgColor: '#ff9966',
//         imgSrc: '/images/kia-carens.webp',
//     },
//     {
//         title: 'Tempo Traveller',
//         subtitle: '12-Seater',
//         price: '₹22/km',
//         bgColor: '#99cc99',
//         imgSrc: '/images/tempo-traveler.jpg',
//     },
//     {
//         title: 'Tempo Traveller',
//         subtitle: '17-Seater',
//         price: '₹26/km',
//         bgColor: '#ff6666',
//         imgSrc: '/images/tempo-traveler.jpg',
//     },
// ]

const TaxiServices = ({ taxis }) => {
    return (
        <section
            className="taxi-service-outstation"
            style={{ padding: '50px 0', backgroundColor: '#f0f8ff' }}
        >
            <div className="container">
                <div className="text-center mb-5">
                    <h2 style={{ fontSize: '36px', color: '#333', fontWeight: 'bold' }}>
                        Outstation Taxi Services
                    </h2>
                    <p style={{ fontSize: '18px', color: '#555' }}>
                        Reliable and comfortable outstation rides with a minimum travel
                        limit of 300 km per day. Extra tolls, taxes, and parking charges
                        apply.
                    </p>
                </div>

                <div className="row">
                    {taxis.map((taxi, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div
                                className="card shadow-lg"
                                style={{ borderRadius: '10px', overflow: 'hidden' }}
                            >
                                <img
                                    src={taxi.imgSrc}
                                    alt={`${taxi.title} Taxi`}
                                    style={{
                                        height: '200px',
                                        objectFit: 'cover',
                                        width: '100%',
                                    }}
                                />
                                <div
                                    style={{
                                        background: taxi.bgColor,
                                        color: '#fff',
                                        padding: '15px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <h3>{taxi.title}</h3>
                                    <p style={{ fontSize: '14px' }}>{taxi.subtitle}</p>
                                </div>
                                <div
                                    className="card-body"
                                    style={{ backgroundColor: '#fff' }}
                                >
                                    <h4 style={{ color: '#333', fontWeight: 'bold' }}>
                                        {taxi.price}
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#555' }}>
                                        Minimum 300 km per day
                                    </p>
                                    <p style={{ fontSize: '14px', color: '#555' }}>
                                        Driver Charges: ₹250/day
                                    </p>
                                    <div className="d-flex justify-content-between mt-3">
                                        <a
                                            href="tel:+919520578080"
                                            className="btn btn-primary"
                                            style={{ flex: 1, marginRight: '5px' }}
                                        >
                                            Call Us
                                        </a>
                                        <button
                                            className="btn btn-success flex-fill m-1"
                                            style={{ color: 'white' }}
                                            onClick={() => {
                                                // Replace with your modal trigger
                                                alert('Open enquiry modal');
                                            }}
                                        >
                                            Enquiry
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="info-box mt-5 p-4"
                    style={{
                        backgroundColor: '#e9ecef',
                        borderRadius: '10px',
                        marginTop: '3rem',
                    }}
                >
                    <h4 style={{ color: '#333', fontWeight: 'bold' }}>
                        Additional Charges
                    </h4>
                    <p style={{ fontSize: '16px', color: '#555' }}>
                        Note that tolls, taxes, and parking fees are not included and will
                        be charged separately as applicable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TaxiServices;
