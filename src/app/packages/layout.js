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
                                    <li><Link href="/packages/haridwar-ganga-aarti-har-ki-pauri-temples">Haridwar – Ganga Aarti, Har Ki Pauri, Temples</Link></li>
                                    <li><Link href="/packages/rishikesh-yoga-capital-ganga-aarti-rafting">Rishikesh – Yoga Capital, Ganga Aarti, Rafting</Link></li>
                                    <li><Link href="/packages/kedarnath-one-of-the-char-dham-shiva-temple">Kedarnath – One of the Char Dham, Shiva Temple</Link></li>
                                    <li><Link href="/packages/badrinath-vishnu-temple-char-dham">Badrinath – Vishnu Temple, Char Dham</Link></li>
                                    <li><Link href="/packages/gangotri-origin-of-river-ganga">Gangotri – Origin of River Ganga</Link></li>
                                    <li><Link href="/packages/yamunotri-source-of-river-yamuna">Yamunotri – Source of River Yamuna</Link></li>
                                    <li><Link href="/packages/jageshwar-cluster-of-ancient-shiva-temples">Jageshwar – Ancient Shiva Temples</Link></li>
                                    <li><Link href="/packages/hemkund-sahib-sikh-pilgrimage-site-in-the-himalayas">Hemkund Sahib – Sikh Pilgrimage</Link></li>
                                    <li><Link href="/packages/nainital-lakes-boating-mall-road-ropeway">Nainital – Lakes & Ropeway</Link></li>
                                    <li><Link href="/packages/mussoorie-queen-of-hills-kempty-falls-mall-road">Mussoorie – Queen of Hills</Link></li>
                                    <li><Link href="/packages/almora-culture-views-peaceful-town">Almora – Culture & Views</Link></li>
                                    <li><Link href="/packages/ranikhet-forests-golf-course-temples">Ranikhet – Golf Course & Temples</Link></li>
                                </ul>

                            </div>




                            <div className="sidebar-widget">
                                <div className="col-md-12 col-sm-12 pt-4 text-link pb-4 my-de">
                                    <h4>Contact Details</h4>
                                    <ul>
                                        <li><a href="tel:+919759071258"><i className="fa fa-phone" aria-hidden="true"></i>
                                            +91-9759071258</a></li>
                                        <li><a href="https://wa.me/+919759071258"><i className="fa fa-whatsapp"
                                            aria-hidden="true"></i> +91-9759071258</a></li>
                                        <li> <a href="mailto:info@mathuravrindavantaxiservices.com"><i
                                            className="fa fa-envelope" aria-hidden="true"></i> Email us (Click Here)</a>
                                        </li>
                                    </ul>
                                    <br />

                                    <h4>Address</h4>
                                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> 35-A Mayur Vihar, Dholi Pyau
                                        Road,
                                        Mathura (U.P.) 281001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}