import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'

export default function RootLayout({ children }) {
    return <>
        <Breadcrumb title="services" items={[
            { label: 'Home', href: '/' },
        ]} />
        <section className="gauto-blog-page-area section_70">
            <div className="container">
                <div className="row">

                    {children}


                    <div className="col-lg-3">
                        <div className="blog-page-right">

                            <div className="sidebar-widget">
                                <h3>Related Tour Packages</h3>
                                <ul className="service-menu">
                                    <li><Link className="dropdown-item" href="/packages/5-Day-Braj-84-Kosh-Yatra">5-Day Braj 84 Kosh Yatra</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/6-Day-Braj-84-Kosh-Yatra">6-Day Braj 84 Kosh Yatra</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/7-Day-Braj-84-Kosh-Yatra">7-Day Braj 84 Kosh Yatra</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/8-Day-Braj-84-Kosh-Yatra">8-Day Braj 84 Kosh Yatra</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/9-Day-Braj-84-Kosh-Yatra">9-Day Braj 84 Kosh Yatra</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/10-Day-Braj-84-Kosh-Yatra">10-Day Braj 84 Kosh Yatra</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/3-Day-Mathura-Vrindavan-With-Brijwasi-Lands-Inn">3-Day Mathura Vrindavan With Brijwasi Lands Inn</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/4-Day-Mathura-Vrindavan-Package">4-Day Mathura Vrindavan Package</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/Holi-Celebration-Tour-Package">Holi Celebration Tour Package</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/Phoolon-Ki-Holi-Tour-Package">Phoolon Ki Holi Tour Package</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/Customized-Mathura-Vrindavan-Package">Customized Mathura Vrindavan Package</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/Vrindavan-Tour-By-Car">Vrindavan Tour By Car</Link></li>
                                    <li><Link className="dropdown-item" href="/packages/Mathura-Vrindavan-Tour-From-Delhi">Mathura Vrindavan Tour From Delhi</Link></li>
                                </ul>

                            </div>




                            <div className="sidebar-widget">
                                <div className="col-md-12 col-sm-12 pt-4 text-link pb-4 my-de">
                                    <h4>Contact Details</h4>
                                    <ul>
                                        <li><a href="tel:+918126990023"><i className="fa fa-phone" aria-hidden="true"></i>
                                            +91-8126990023</a></li>
                                        <li><a href="https://wa.me/+918126990023"><i className="fa fa-whatsapp"
                                            aria-hidden="true"></i> +91-8126990023</a></li>
                                        <li> <a href="mailto:yatraukheaven@gmail.com"><i
                                            className="fa fa-envelope" aria-hidden="true"></i> Email us (Click Here) yatraukheaven@gmail.com</a>
                                        </li>
                                    </ul>
                                    <br />

                                    <h4>Address</h4>
                                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> Shop no.4 opposite Railway Station Devpura Haridwar, Uttarakhand (U.K.) 249401</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}