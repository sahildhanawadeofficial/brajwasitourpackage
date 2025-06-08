"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlus, FaMinus } from 'react-icons/fa'; // ← React Icons

const faqs = [
    {
        id: 'one',
        question: 'How do I book the Char Dham Yatra with Uttarakhand Yatra?',
        answer: (
            <>
                You can easily book your Char Dham Yatra through our website or by calling our 24x7 support number:
                <Link href="tel:+919634656654" passHref legacyBehavior>
                    <a> +91 9634656654</a>
                </Link>.
                <p>The booking process is simple:</p>
                <p> ● Choose your preferred yatra package (Economy, Standard, or Deluxe).</p>
                <p> ● Confirm the number of travelers and travel dates.</p>
                <p> ● Make a partial payment to confirm your booking. The rest can be paid during the trip.</p>
                <p> ● You’ll receive confirmation along with detailed itinerary and packing checklist via WhatsApp/email.</p>
            </>
        ),
    },
    {
        id: 'two',
        question: 'What is the best time for Char Dham Yatra?',
        answer: (
            <>
                The best time for Char Dham Yatra is between <strong>May to June</strong> and <strong>September to mid-November</strong>.
                <p>● The yatra starts in <strong>late April or early May</strong> every year, depending on temple openings.</p>
                <p>● Avoid peak monsoon season (July–August) due to landslides and heavy rainfall.</p>
            </>
        ),
    },
    {
        id: 'three',
        question: 'What is included in the Char Dham Yatra package?',
        answer: (
            <>
                Our packages include:
                <p>● Transport (Tempo Traveller/Innova/Jeep)</p>
                <p>● Hotel accommodation on double/triple sharing</p>
                <p>● Daily meals (Breakfast & Dinner)</p>
                <p>● Driver cum guide</p>
                <p>● Sightseeing as per itinerary</p>
                <p>● All tolls, parking, and fuel costs</p>
                <p><strong>Note:</strong> Helicopter tickets, pony/palki and personal expenses are not included by default.</p>
            </>
        ),
    },
    {
        id: 'four',
        question: 'Is Char Dham Yatra physically demanding?',
        answer: (
            <>
                Yes, some parts of the yatra involve moderate to high physical activity, especially in Kedarnath and Yamunotri.
                <p>● Trekking distance for Kedarnath is ~16 km from Gaurikund (helicopter/palki options available).</p>
                <p>● Yamunotri involves a 6 km uphill trek from Janki Chatti.</p>
                <p><strong>We recommend:</strong> Senior citizens and people with health issues consult a doctor before the trip.</p>
            </>
        ),
    },
    {
        id: 'five',
        question: 'Is registration mandatory for Char Dham Yatra?',
        answer: (
            <>
                Yes, <strong>registration is mandatory</strong> for every yatri by the Uttarakhand Government.
                <p>We assist you with registration after your booking is confirmed.</p>
                <p>You’ll need a valid <strong>photo ID proof</strong>, <strong>passport-sized photo</strong>, and <strong>COVID vaccination certificate</strong> (if applicable).</p>
            </>
        ),
    },
    {
        id: 'six',
        question: 'What type of accommodation is provided?',
        answer: (
            <>
                We provide clean and hygienic hotels/guest houses based on your selected package.
                <p>● Basic/Economy: Budget guest houses or dharamshalas</p>
                <p>● Standard: 2-3 star category hotels</p>
                <p>● Deluxe: Premium stays wherever available</p>
                <p>We ensure hot water availability, clean bedding, and proximity to temples wherever possible.</p>
            </>
        ),
    },
];

export default function FaqSection() {
    const [openItemId, setOpenItemId] = useState(faqs[0]?.id || null);

    const togglePanel = (id) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <div className="container myfaq" style={{ padding: '20px 0' }}>
            <h3>Frequently Asked Questions</h3>
            <div className="panel-group wrap" id="bs-collapse">
                {faqs.map((faq) => {
                    const isOpen = openItemId === faq.id;
                    return (
                        <div className="panel" key={faq.id}>
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a
                                        href={`#${faq.id}`}
                                        aria-expanded={isOpen ? 'true' : 'false'}
                                        className={isOpen ? '' : 'collapsed'}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            togglePanel(faq.id);
                                        }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '10px 15px',
                                            backgroundColor: '#f8f8f8',
                                            borderBottom: '1px solid #eee',
                                            textDecoration: 'none',
                                            color: '#333',
                                            fontWeight: 'bold',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <span>Q. {faq.question}</span>
                                        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
                                    </a>
                                </h4>
                            </div>
                            <div
                                id={faq.id}
                                className={`panel-collapse collapse ${isOpen ? 'show' : ''}`}
                                aria-expanded={isOpen ? 'true' : 'false'}
                                style={{ height: isOpen ? 'auto' : '0px', overflow: 'hidden' }}
                            >
                                <div
                                    className="panel-body"
                                    style={{
                                        padding: '15px',
                                        border: '1px solid #eee',
                                        borderTop: 'none',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
