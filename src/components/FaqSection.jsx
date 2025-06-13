"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        id: 'one',
        question: 'How do I book a Braj Darshan tour with Brajwasi Tour Packages?',
        answer: (
            <>
                You can book your Braj Darshan tour easily via our website or by calling our support number:
                <Link href="tel:+919634656654" passHref legacyBehavior>
                    <a> +91 9634656654</a>
                </Link>.
                <p>The booking process is simple:</p>
                <p> ● Select your preferred tour (1-day, 2-day, or festival special).</p>
                <p> ● Share the number of travelers and preferred travel dates.</p>
                <p> ● Confirm with a partial payment. Remaining amount is payable at the start of the trip.</p>
                <p> ● You'll receive full itinerary and travel guide over WhatsApp/email.</p>
            </>
        ),
    },
    {
        id: 'two',
        question: 'Which places are covered in the Braj Darshan tour?',
        answer: (
            <>
                Our tours include sacred destinations in the Braj region:
                <p>● Mathura (Shri Krishna Janmabhoomi)</p>
                <p>● Vrindavan (Banke Bihari, Prem Mandir, ISKCON)</p>
                <p>● Barsana (Shri Radha Rani Temple)</p>
                <p>● Nandgaon, Govardhan Parikrama, Gokul, and Radha Kund</p>
                <p>You can also request custom inclusions based on your interests.</p>
            </>
        ),
    },
    {
        id: 'three',
        question: 'What is included in the tour package?',
        answer: (
            <>
                Our packages typically include:
                <p>● Pickup/drop from Delhi, Agra, or Mathura Railway Station</p>
                <p>● Sightseeing via private taxi (Sedan, SUV, or Tempo Traveller)</p>
                <p>● Darshan coordination at key temples</p>
                <p>● Tour guide (on request)</p>
                <p><strong>Note:</strong> Meals and hotel stays are optional and depend on the package type.</p>
            </>
        ),
    },
    {
        id: 'four',
        question: 'Do you offer special festival tours like Holi or Janmashtami?',
        answer: (
            <>
                Yes! We offer specially curated packages during:
                <p>● Holi in Barsana & Nandgaon (Lathmar Holi)</p>
                <p>● Janmashtami celebrations in Mathura and Vrindavan</p>
                <p>● Radhashtami, Govardhan Puja, and other Braj festivals</p>
                <p>Book in advance — these dates fill fast and require pre-confirmation.</p>
            </>
        ),
    },
    {
        id: 'five',
        question: 'Can I customize the tour plan?',
        answer: (
            <>
                Absolutely. We specialize in customized group and family tours.
                <p>● You can choose travel start/end points, number of days, hotel class, and sightseeing priorities.</p>
                <p>● Just call us or message on WhatsApp to get a tailored itinerary within minutes.</p>
            </>
        ),
    },
    {
        id: 'six',
        question: 'What type of vehicles do you provide?',
        answer: (
            <>
                We provide clean, air-conditioned vehicles based on your group size and preference:
                <p>● Sedan (Dzire, Etios) – for 2–4 people</p>
                <p>● SUV (Innova, Ertiga) – for 5–7 people</p>
                <p>● Tempo Traveller – for 9 to 16 people</p>
                <p>● Bus (on request) – for larger groups and yatras</p>
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
