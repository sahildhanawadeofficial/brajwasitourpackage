// components/PopularTaxiRoutes.jsx
import Link from 'next/link';

// Define the taxi route data
const taxiRoutes = [
    {
        href: '/mathura-to-delhi-airport-drop-taxi-hire.html', // Use relative paths for internal links
        iconClass: 'fa fa-plane',
        text: 'Mathura to Delhi Airport Drop Taxi',
    },
    {
        href: '/mathura-to-jaipur-taxi-hire.html',
        iconClass: 'fa fa-map-marker',
        text: 'Mathura to Jaipur Taxi',
    },
    {
        href: '/', // Assuming index.html translates to the root path in Next.js
        iconClass: 'fa fa-university',
        text: 'Mathura to Agra Taxi',
    },
    {
        href: '/mathura-to-nainital-taxi-hire.html',
        iconClass: 'fa fa-tree',
        text: 'Mathura to Nainital Taxi',
    },
    {
        href: '/mathura-to-haridwar-taxi-hire.html',
        iconClass: 'fa fa-ship',
        text: 'Mathura to Haridwar Taxi',
    },
    {
        href: '/mathura-to-varanasi-taxi-hire.html',
        iconClass: 'fa fa-road',
        text: 'Mathura to Varanasi Taxi',
    },
    {
        href: '/mathura-to-mussoorie-taxi-hire.html',
        iconClass: 'fa fa-cloud',
        text: 'Mathura to Mussoorie Taxi',
    },
    {
        href: '/mathura-to-ghaziabad-taxi-hire.html',
        iconClass: 'fa fa-building',
        text: 'Mathura to Ghaziabad Taxi',
    },
    {
        href: '/mathura-to-lucknow-taxi-hire.html',
        iconClass: 'fa fa-star',
        text: 'Mathura to Lucknow Taxi',
    },
    {
        href: '/mathura-to-bhopal-taxi-hire.html',
        iconClass: 'fa fa-road',
        text: 'Mathura to Bhopal Taxi',
    },
    {
        href: '/mathura-to-allahabad-taxi-hire.html',
        iconClass: 'fa fa-university',
        text: 'Mathura to Allahabad Taxi',
    },
    {
        href: '/mathura-to-kedarnath-taxi-hire.html',
        iconClass: 'fa fa-mountain',
        text: 'Mathura to Kedarnath Taxi',
    },
];

export default function PopularTaxiRoutes() {
    // Function to chunk the array into columns (e.g., 3 columns)
    const chunkArray = (arr, chunkSize) => {
        const R = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    };

    // Divide routes into 3 columns, assuming maximum 4 items per column for even distribution
    const chunkedRoutes = chunkArray(taxiRoutes, Math.ceil(taxiRoutes.length / 3));

    return (
        <section className="gauto-taxi-route section_70" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="site-heading">
                            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>
                                Popular Taxi Routes from Mathura
                            </h2>
                            <p style={{ color: '#777' }}>
                                Explore a wide range of taxi services from Mathura to various popular
                                destinations with comfort and ease.
                            </p>
                            <hr style={{ width: '100px', border: '2px solid #ff6f00', margin: '20px auto' }} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {chunkedRoutes.map((columnRoutes, colIndex) => (
                        <div className="col-md-4" key={colIndex}>
                            <ul className="route-links" style={{ listStyle: 'none', padding: '0' }}>
                                {columnRoutes.map((route, routeIndex) => (
                                    <li key={routeIndex}>
                                        <Link href={route.href} passHref legacyBehavior>
                                            <a
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '15px',
                                                    backgroundColor: '#fff',
                                                    borderRadius: '10px',
                                                    marginBottom: '10px',
                                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                    textDecoration: 'none',
                                                    color: '#333',
                                                    transition: '0.3s',
                                                }}
                                            >
                                                {/* Font Awesome icons are typically rendered using a CSS class */}
                                                <i className={route.iconClass} style={{ fontSize: '24px', color: '#ff6f00', marginRight: '15px' }}></i>
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