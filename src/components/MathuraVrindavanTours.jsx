"use client"; // This is important for client-side interactivity like the toggle button

import React, { useState } from 'react';
import SiteHeading from './SiteHeading';
import TourTable from './TourTable';
import TourCard from './TourCard';

const delhiPickupTours = [
    {
        imageSrc: "/images/mathura-vrindavan-package-one-day-tour.webp",
        imageAlt: "Mathura Tour",
        title: "Same Day Mathura Vrindavan Tour by Car",
        duration: "Same Day",
        detailsLink: "/same-day-mathura-tour-from-delhi.html",
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
        detailsLink: "/same-day-agra-to-mathura-vrindavan.html",
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
        detailsLink: "/2-days-mathura-vrindavan-weekend-package-from-delhi.html",
        pricing: [
            { type: "Sedan", price: "₹6999" },
            { type: "MUV", price: "₹8499" },
            { type: "SUV", price: "₹10499" },
        ],
    },
];

const localSightseeingTours = [
    {
        imageSrc: "/tour/agra-mathura-vrindavan.jpg",
        imageAlt: "Mathura Tour",
        title: "Mathura Vrindavan Local Sightseeing Tour by Car",
        duration: "Same Day",
        detailsLink: "/vrindavan-local-sighseeing-tour.html",
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
        detailsLink: "/same-day-vrindavan-to-nandgaon-barsana-govardhan.html",
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
        detailsLink: "/same-day-vrindavan-to-mathura-gokul-raman-reti.html",
        pricing: [
            { type: "Sedan", price: "₹2500" },
            { type: "MUV", price: "₹3000" },
            { type: "SUV", price: "₹4000" },
        ],
    },
];









const delhiTourTableData = [
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
];

const localSightseeingTableData = [
    { packageName: "Mathura Vrindavan Local Sightseeing Tour", duration: "Same Day", sedanPrice: "₹2000", muvPrice: "₹2500", suvPrice: "₹3000" },
    { packageName: "Same Day Vrindavan to Nandgaon, Barsana & Govardhan Tour", duration: "Same Day", sedanPrice: "₹2500", muvPrice: "₹3000", suvPrice: "₹4000" },
    { packageName: "Same Day Vrindavan to Mathura, Gokul & Raman Reti Tour", duration: "Same Day", sedanPrice: "₹2500", muvPrice: "₹3000", suvPrice: "₹4000" },
];



const MathuraVrindavanTours = ({ TourTableData, PickupTours, para, morecontent, tagline, title }) => {
    const [showMoreContent, setShowMoreContent] = useState(false);

    const toggleContent = () => {
        setShowMoreContent(!showMoreContent);
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <SiteHeading
                                tagline={tagline}
                                title={title}
                            />
                        </div>
                    </div>
                    <div className="content-container">
                        <p>
                            {para}

                        </p>
                        {showMoreContent &&
                            <div>
                                {morecontent}
                                <TourTable data={TourTableData} />
                            </div>
                        }
                        <button className="toggle-button" onClick={toggleContent}>
                            {showMoreContent ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                    <div>
                        <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>Pick up/ Drop off from Delhi</h4>
                    </div>

                    <div className="row">
                        {PickupTours.map((tour, index) => (
                            <TourCard key={index} tour={tour} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default MathuraVrindavanTours;