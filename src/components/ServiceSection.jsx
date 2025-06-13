'use client';
import Image from 'next/image';
import React from 'react';

const services = [
    {
        number: '01',
        title: 'Brajwasi Tour',
        img: '/img/city-transport.webp',
        alt: 'city transport',
        description:
            'Explore Dehradun, Haridwar, Rishikesh, and more with our reliable taxi service designed for local sightseeing.',
    },
    {
        number: '02',
        title: 'Airport Pickup & Drop',
        img: '/img/airport-transport.webp',
        alt: 'airport transport',
        description:
            'Smooth transfers to and from Jolly Grant and Pantnagar Airports with punctual and courteous drivers.',
    },
    {
        number: '03',
        title: 'Outstation Tour from Brajwasi',
        img: '/img/hospital-transport.webp',
        alt: 'hospital transport',
        description:
            'Travel comfortably to Delhi, Chandigarh, Jaipur, and other cities with our well-maintained outstation cabs.',
    },
    {
        number: '04',
        title: 'Same Day Pilgrimage Tours',
        img: '/img/wedding-ceremony.webp',
        alt: 'wedding transport',
        description:
            'Visit sacred sites like Haridwar, Rishikesh, or Neelkanth Mahadev in a single day with our custom yatra taxis.',
    },
    {
        number: '05',
        title: 'Complete Hill Station Tour',
        img: '/img/hotel-transport.webp',
        alt: 'hotel transport',
        description:
            'Discover Nainital, Mussoorie, Almora, and Auli with our hill station packages tailored for comfort and views.',
    },
    {
        number: '06',
        title: 'Group & Luggage Transport',
        img: '/img/luggege-transport.webp',
        alt: 'baggage transport',
        description:
            'Need to move extra baggage or travel in groups for char dham or treks? We’ve got you covered with large taxis.',
    },
];

const ServiceSection = () => {
    return (
        <section className="gauto-service-area service-page-area section_70">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading">
                            <h4>Our Services</h4>
                            <h2>Best & Budget-Friendly Taxi Services in Brajwasi</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="single-service">
                                <span className="service-number">{service.number}</span>
                                <div className="service-icon">
                                    <Image
                                        src={service.img}
                                        alt={service.alt}
                                        width={80}
                                        height={80}
                                        layout="responsive"
                                    />
                                </div>
                                <div className="service-text">
                                    <a href="#">
                                        <h3>{service.title}</h3>
                                    </a>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
