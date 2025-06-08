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
                                <h3>Related Routes</h3>
                                <ul className="service-menu">
                                    <li><Link href="/popularroutes/dehradun-to-rishikesh-taxi-hire-on-rent">Dehradun to Rishikesh</Link></li>
                                    <li><Link href="/popularroutes/dehradun-to-mussoorie-taxi-hire-on-rent">Dehradun to Mussoorie</Link></li>
                                    <li><Link href="/popularroutes/haridwar-to-badrinath-taxi-hire-on-rent">Haridwar to Badrinath</Link></li>
                                    <li><Link href="/popularroutes/haridwar-to-kedarnath-taxi-hire-on-rent">Haridwar to Kedarnath</Link></li>
                                    <li><Link href="/popularroutes/rishikesh-to-gangotri-taxi-hire-on-rent">Rishikesh to Gangotri</Link></li>
                                    <li><Link href="/popularroutes/rishikesh-to-yamunotri-taxi-hire-on-rent">Rishikesh to Yamunotri</Link></li>
                                    <li><Link href="/popularroutes/dehradun-to-auli-taxi-hire-on-rent">Dehradun to Auli</Link></li>
                                    <li><Link href="/popularroutes/haridwar-to-joshimath-taxi-hire-on-rent">Haridwar to Joshimath</Link></li>
                                    <li><Link href="/popularroutes/dehradun-to-nainital-taxi-hire-on-rent">Dehradun to Nainital</Link></li>
                                    <li><Link href="/popularroutes/kathgodam-to-nainital-taxi-hire-on-rent">Kathgodam to Nainital</Link></li>
                                    <li><Link href="/popularroutes/kathgodam-to-bhimtal-taxi-hire-on-rent">Kathgodam to Bhimtal</Link></li>
                                    <li><Link href="/popularroutes/kathgodam-to-ranikhet-taxi-hire-on-rent">Kathgodam to Ranikhet</Link></li>
                                </ul>

                            </div>




                            <div className="sidebar-widget">
                                <div className="col-md-12 col-sm-12 pt-4 text-link pb-4 my-de">
                                    <h4>Contact Details</h4>
                                    <ul>
                                        <li><a href="tel:+919634656654"><i className="fa fa-phone" aria-hidden="true"></i>
                                            +91-9634656654</a></li>
                                        <li><a href="https://wa.me/+919634656654"><i className="fa fa-whatsapp"
                                            aria-hidden="true"></i> +91-9634656654</a></li>
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