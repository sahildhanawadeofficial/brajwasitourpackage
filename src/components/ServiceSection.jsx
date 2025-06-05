'use client';
import Image from 'next/image';
import React from 'react';

const services = [
    {
        number: '01',
        title: 'City Tour',
        img: '/img/city-transport.webp',
        alt: 'city transport',
        description:
            'Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.',
    },
    {
        number: '02',
        title: 'Airport Pickup & Drop',
        img: '/img/airport-transport.webp',
        alt: 'airport transport',
        description:
            'Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.',
    },
    {
        number: '03',
        title: 'Outstation Tour',
        img: '/img/hospital-transport.webp',
        alt: 'hospital transport',
        description:
            'Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.',
    },
    {
        number: '04',
        title: 'Same Day Mathura Tours',
        img: '/img/wedding-ceremony.webp',
        alt: 'wedding transport',
        description:
            'Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.',
    },
    {
        number: '05',
        title: 'Whole City Tour',
        img: '/img/hotel-transport.webp',
        alt: 'hotel transport',
        description:
            'Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.',
    },
    {
        number: '06',
        title: 'Baggage transport',
        img: '/img/luggege-transport.webp',
        alt: 'baggage transport',
        description:
            'Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.',
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
                            <h2>We are Providing Best and Budget Friendly Taxi Services in India</h2>
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
