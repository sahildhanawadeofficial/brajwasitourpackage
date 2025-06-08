'use client';

import Link from 'next/link';

const taxiRoutes = [
    { href: "/popularroutes/dehradun-to-rishikesh-taxi-hire-on-rent", text: "Dehradun to Rishikesh" },
    { href: "/popularroutes/dehradun-to-mussoorie-taxi-hire-on-rent", text: "Dehradun to Mussoorie" },
    { href: "/popularroutes/haridwar-to-badrinath-taxi-hire-on-rent", text: "Haridwar to Badrinath" },
    { href: "/popularroutes/haridwar-to-kedarnath-taxi-hire-on-rent", text: "Haridwar to Kedarnath" },
    { href: "/popularroutes/rishikesh-to-gangotri-taxi-hire-on-rent", text: "Rishikesh to Gangotri" },
    { href: "/popularroutes/rishikesh-to-yamunotri-taxi-hire-on-rent", text: "Rishikesh to Yamunotri" },
    { href: "/popularroutes/dehradun-to-auli-taxi-hire-on-rent", text: "Dehradun to Auli" },
    { href: "/popularroutes/haridwar-to-joshimath-taxi-hire-on-rent", text: "Haridwar to Joshimath" },
    { href: "/popularroutes/dehradun-to-nainital-taxi-hire-on-rent", text: "Dehradun to Nainital" },
    { href: "/popularroutes/kathgodam-to-nainital-taxi-hire-on-rent", text: "Kathgodam to Nainital" },
    { href: "/popularroutes/kathgodam-to-bhimtal-taxi-hire-on-rent", text: "Kathgodam to Bhimtal" },
    { href: "/popularroutes/kathgodam-to-ranikhet-taxi-hire-on-rent", text: "Kathgodam to Ranikhet" },
];

// Helper function to chunk routes for layout
const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
}

export default function PopularTaxiRoutes() {
    const chunkedRoutes = chunkArray(taxiRoutes, Math.ceil(taxiRoutes.length / 3));

    return (
        <section className="gauto-taxi-route section_70" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="site-heading">
                            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
                                Popular Uttarakhand Taxi Routes
                            </h2>
                            <p style={{ color: '#777' }}>
                                Book taxis to the most sacred and scenic destinations across Uttarakhand with ease and comfort.
                            </p>
                            <hr style={{ width: '100px', border: '2px solid #ff6f00', margin: '20px auto' }} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {chunkedRoutes.map((columnRoutes, colIndex) => (
                        <div className="col-md-4" key={colIndex}>
                            <ul className="dropdown-menu" aria-labelledby="routesDropdown" style={{ listStyle: 'none', paddingLeft: '0' }}>
                                {columnRoutes.map((route, index) => (
                                    <li key={index}>
                                        <Link href={route.href} passHref legacyBehavior>
                                            <a className="dropdown-item" style={{ padding: '10px 15px', display: 'block', color: '#333', textDecoration: 'none' }}>
                                                {route.text}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
