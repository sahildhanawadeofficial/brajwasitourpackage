// components/LocalTaxiServices.jsx
import Image from 'next/image'; // Import Next.js Image component for optimized images
import Link from 'next/link';   // Import Next.js Link component for client-side navigation

// const taxiPackages = [
//     {
//         type: 'Sedan',
//         image: '/images/swift-desire.webp', // Image paths are relative to the `public` directory in Next.js
//         alt: 'Sedan Taxi',
//         description: 'Swift Dzire, etc. (4-seater)',
//         price: '₹2000',
//         hours: '8 hours / 80 km',
//         additionalCharges: '₹11/km or ₹150/hour',
//         bgColor: '#ff6666',
//     },
//     {
//         type: 'MUV',
//         image: '/images/ertiga-car.webp',
//         alt: 'MUV Taxi',
//         description: 'Ertiga, etc. (6-seater)',
//         price: '₹2500',
//         hours: '8 hours / 80 km',
//         additionalCharges: '₹14/km or ₹150/hour',
//         bgColor: '#66b3ff',
//     },
//     {
//         type: 'XUV',
//         image: '/images/innova-crysta.webp',
//         alt: 'XUV Taxi',
//         description: 'Innova Crysta, etc. (6-seater)',
//         price: '₹3000',
//         hours: '8 hours / 80 km',
//         additionalCharges: '₹16/km or ₹150/hour',
//         bgColor: '#ffcc66',
//     },
// ];

export default function LocalTaxiServices({ taxiPackages }) {
    return (
        <section className="taxi-service" style={{ padding: '50px 0', backgroundColor: '#f7f7f9' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 style={{ fontSize: '36px', color: '#333', fontWeight: 'bold' }}>
                        Mathura Vrindavan Local Taxi Services
                    </h2>
                    <p style={{ fontSize: '18px', color: '#555' }}>
                        Choose from flexible 8-hour, 80-km taxi packages for a convenient and comfortable
                        journey. Extra hours and distance options are also available!
                    </p>
                </div>

                <div className="row">
                    {taxiPackages.map((pkg, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div className="card shadow-lg" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                <Image
                                    src={pkg.image}
                                    alt={pkg.alt}
                                    width={400} // Set appropriate width
                                    height={200} // Set appropriate height to maintain aspect ratio
                                    style={{ objectFit: 'cover', width: '100%' }}
                                />
                                <div
                                    style={{
                                        background: pkg.bgColor,
                                        color: '#fff',
                                        padding: '20px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}
                                >
                                    <h3>{pkg.type}</h3>
                                    <p style={{ fontSize: '14px' }}>{pkg.description}</p>
                                </div>
                                <div className="card-body" style={{ backgroundColor: '#fff' }}>
                                    <h4 style={{ color: '#333', fontWeight: 'bold' }}>{pkg.price}</h4>
                                    <p style={{ fontSize: '14px', color: '#555' }}>{pkg.hours}</p>
                                    <div className="extra-info" style={{ borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                                        <h5 style={{ fontSize: '14px', color: '#777' }}>Additional Charges:</h5>
                                        <p style={{ fontSize: '14px', color: '#555' }}>{pkg.additionalCharges}</p>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <Link href="tel:+919520578080" className="btn btn-primary" style={{ flex: 1, marginRight: '5px' }}>
                                            Call Us
                                        </Link>
                                        {/* For the Enquiry button, assuming it triggers a modal.
                        In Next.js, you'd typically manage modal state with React state.
                        Here's a placeholder, but you'd need to implement the modal component separately.
                    */}
                                        <button
                                            className="btn btn-success flex-fill m-1"
                                            style={{ color: 'white' }}
                                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >
                                            Enquiry
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}