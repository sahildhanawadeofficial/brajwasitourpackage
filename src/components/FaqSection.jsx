"use client"
// components/FAQSection.jsx
import React, { useState } from 'react';
import Link from 'next/link';

// Define your FAQ data
const faqs = [
    {
        id: 'one',
        question: 'How to book an online Taxi in Mathura?',
        answer: (
            <>
                It's very easy to book an online taxi in Mathura. It can be booked either through the website or by calling our
                customer care service no. (<Link href="tel:+919520578080" passHref legacyBehavior><a>+91 9520578080</a></Link>) The
                customer care service is available 24*7. The process of booking or billing is totally transparent and easy.
                <p>You can book a cab in a few simple steps:</p>
                <p> ● Choose the type of booking you want; it can be 'intercity', 'local' or ''airport'.</p>
                <p> ● Select your preferred time for the pick-up. </p>
                <p> ● Select the cab that you prefer.</p>
                <p>● You can make payments from any type. Such as Credit Card, Debit Card, wallets, mobile payments, Netbanking, International Cards, etc. </p>
            </>
        ),
    },
    {
        id: 'two',
        question: 'How many types of Taxi are available in Mathura?',
        answer: (
            <>
                The company gotaxibooking.com provides various types of taxis in Mathura. Such as:
                <p>● Swift Dezire - It costs Rs 9 per km. </p>
                <p>● Etios Car - It costs Rs 10 per km. </p>
                <p>● Innova Car - It costs Rs 14 per km.</p>
                <p>● Innova Crysta - It costs Rs 16 per km.</p>
                <p>● Maruti Ertiga - It costs Rs 11 per km.</p>
                <p>● Mahindra Marazzo Car - It costs Rs 14 per km.</p>
            </>
        ),
    },
    // Add more FAQ items here following the same structure
    // {
    //   id: 'three',
    //   question: 'Another question?',
    //   answer: 'Another answer.'
    // }
];

export default function FaqSection() {
    // State to manage which FAQ item is currently open
    const [openItemId, setOpenItemId] = useState(faqs[0]?.id || null); // Opens the first FAQ by default, if available

    const togglePanel = (id) => {
        setOpenItemId(openItemId === id ? null : id); // Toggle or close if already open
    };

    return (
        <div className="container myfaq" style={{ padding: '20px 0' }}>
            <h3>Frequently Asked Questions</h3>
            <div className="panel-group wrap" id="bs-collapse">
                {faqs.map((faq) => (
                    <div className="panel" key={faq.id}>
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a
                                    data-toggle="collapse" // Retained for conceptual similarity, but logic handled by React
                                    data-parent="#"
                                    href={`#${faq.id}`}
                                    aria-expanded={openItemId === faq.id ? 'true' : 'false'}
                                    className={openItemId === faq.id ? '' : 'collapsed'}
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent default link behavior
                                        togglePanel(faq.id);
                                    }}
                                    style={{
                                        display: 'block', // Make the entire area clickable
                                        padding: '10px 15px',
                                        backgroundColor: '#f8f8f8',
                                        borderBottom: '1px solid #eee',
                                        textDecoration: 'none',
                                        color: '#333',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <span>Q.</span> {faq.question}
                                </a>
                            </h4>
                        </div>
                        <div
                            id={faq.id}
                            className={`panel-collapse collapse ${openItemId === faq.id ? 'show' : ''}`}
                            aria-expanded={openItemId === faq.id ? 'true' : 'false'}
                            // Controlled style for height transition if needed, though 'show' class typically handles this with CSS
                            style={{ height: openItemId === faq.id ? 'auto' : '0px', overflow: 'hidden' }}
                        >
                            <div className="panel-body" style={{ padding: '15px', border: '1px solid #eee', borderTop: 'none', backgroundColor: '#fff' }}>
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}