import Breadcrumb from '@/components/Breadcrumb';

export default function RootLayout({ children }) {
    return (
        <>
            <Breadcrumb
                title="services"
                items={[{ label: 'Home', href: '/' }]}
            />
            <section className="gauto-blog-page-area section_70">
                <div className="container">
                    <div className="row">
                        {/* Main Content */}
                        <div className="col-lg-9">
                            {children}
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-3">
                            <div className="blog-page-right">
                                <div className="sidebar-widget">
                                    <h3>Popular Routes</h3>
                                    <ul className="service-menu">
                                        <li><a href="/popularroutes/mathura-to-delhi-taxi-hire-on-rent"><span>Mathura to Delhi Taxi</span></a></li>
                                        <li><a href="/popularroutes/mathura-to-agra-taxi-hire-on-rent"><span>Mathura to Agra Taxi </span></a></li>
                                        <li><a href="/popularroutes/mathura-to-jaipur-taxi-hire-on-rent"><span>Mathura to Jaipur Taxi</span></a></li>
                                        <li><a href="/popularroutes/delhi-to-mathura-taxi-hire-on-rent"><span>Delhi to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/delhi-to-agra-taxi-hire-on-rent"><span>Delhi to Agra Taxi</span></a></li>
                                        <li><a href="/popularroutes/delhi-to-jaipur-taxi-hire-on-rent"><span>Delhi to Jaipur Taxi</span></a></li>
                                        <li><a href="/popularroutes/jaipur-to-delhi-taxi-hire-on-rent"><span>Jaipur to Delhi Taxi</span></a></li>
                                        <li><a href="/popularroutes/jaipur-to-agra-taxi-hire-on-rent"><span>Jaipur to Agra Taxi</span></a></li>
                                        <li><a href="/popularroutes/jaipur-to-mathura-taxi-hire-on-rent"><span>Jaipur to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/agra-to-delhi-taxi-hire-on-rent"><span>Agra to Delhi Taxi</span></a></li>
                                        <li><a href="/popularroutes/agra-to-jaipur-taxi-hire-on-rent"><span>Agra to Jaipur Taxi</span></a></li>
                                        <li><a href="/popularroutes/agra-to-mathura-taxi-hire-on-rent"><span>Agra to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/ahmedabad-to-mathura-tour-by-car"><span>Ahmedabad to Mathura Tour</span></a></li>
                                        <li><a href="/popularroutes/aligarh-to-mathura-taxi-hire-on-rent"><span>Aligarh to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/allahabad-to-mathura-taxi-hire-on-rent"><span>Allahabad to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/ayodhya-to-mathura-taxi-hire-on-rent"><span>Ayodhya to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/bariely-to-mathura-taxi-hire-on-rent"><span>Bariely to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/bhopal-to-mathura-taxi-hire-on-rent"><span>Bhopal to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/chandigarh-to-mathura-taxi-hire-on-rent"><span>Chandigarh to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/chennai-to-mathura-tour-by-car"><span>Chennai to Mathura Tour</span></a></li>
                                        <li><a href="/popularroutes/dehradun-to-mathura-taxi-hire-on-rent"><span>Dehradun to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/ghaziabad-to-mathura-taxi-hire-on-rent"><span>Ghaziabad to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/haridwar-to-mathura-taxi-services"><span>Haridwar to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/indore-to-mathura-taxi-hire-on-rent"><span>Indore to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/jalandar-to-mathura-taxi-hire-on-rent"><span>Jalandar to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/kanpur-to-mathura-taxi-hire-on-rent"><span>Kanpur to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/kasganj-to-mathura-taxi-hire-on-rent"><span>Kasganj to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/lucknow-to-mathura-taxi-hire-on-rent"><span>Lucknow to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/meerut-to-mathura-taxi-hire-on-rent"><span>Meerut to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/moradabad-to-mathura-taxi-hire-on-rent"><span>Moradabad to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/mumbai-to-mathura-tour-by-car"><span>Mumbai to Mathura Tour</span></a></li>
                                        <li><a href="/popularroutes/noida-to-mathura-taxi-hire-on-rent"><span>Noida to Mathura Taxi</span></a></li>
                                        <li><a href="/popularroutes/pune-to-mathura-tour-by-car"><span>Pune to Mathura Tour</span></a></li>
                                        <li><a href="/popularroutes/rajkot-to-mathura-tour-by-car"><span>Rajkot to Mathura Tour</span></a></li>
                                        <li><a href="/popularroutes/surat-to-mathura-tour-by-car"><span>Surat to Mathura Tour</span></a></li>
                                        <li><a href="/popularroutes/varanasi-to-mathura-taxi-hire-on-rent"><span>Varanasi to Mathura Taxi</span></a></li>
                                    </ul>
                                </div>

                                <div className="sidebar-widget">
                                    <div className="col-md-12 col-sm-12 pt-4 text-link pb-4 my-de">
                                        <h4>Contact Details</h4>
                                        <ul>
                                            <li>
                                                <a href="tel:+919759071258">
                                                    <i className="fa fa-phone" aria-hidden="true"></i> +91-9759071258
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://wa.me/+919759071258">
                                                    <i className="fa fa-whatsapp" aria-hidden="true"></i> +91-9759071258
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:info@mathuravrindavantaxiservices.com">
                                                    <i className="fa fa-envelope" aria-hidden="true"></i> Email us (Click Here)
                                                </a>
                                            </li>
                                        </ul>

                                        <h4>Address</h4>
                                        <p>
                                            <i className="fa fa-map-marker" aria-hidden="true"></i> 35-A Mayur Vihar, Dholi Pyau Road,
                                            Mathura (U.P.) 281001
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
