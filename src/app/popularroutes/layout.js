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
                                <li><Link href="/popularroutes/mathura-to-vrindavan-taxi-hire-on-rent">Mathura to Vrindavan</Link></li>
                                <li><Link href="/popularroutes/mathura-to-gokul-taxi-hire-on-rent">Mathura to Gokul</Link></li>
                                <li><Link href="/popularroutes/mathura-to-govardhan-taxi-hire-on-rent">Mathura to Govardhan</Link></li>
                                <li><Link href="/popularroutes/mathura-to-barsana-taxi-hire-on-rent">Mathura to Barsana</Link></li>
                                <li><Link href="/popularroutes/mathura-to-nandgaon-taxi-hire-on-rent">Mathura to Nandgaon</Link></li>
                                <li><Link href="/popularroutes/mathura-to-radhakund-taxi-hire-on-rent">Mathura to Radhakund</Link></li>
                                <li><Link href="/popularroutes/mathura-to-prem-mandir-vrindavan-taxi-hire-on-rent">Mathura to Prem Mandir Vrindavan</Link></li>
                                <li><Link href="/popularroutes/mathura-to-iskcon-temple-vrindavan-taxi-hire-on-rent">Mathura to ISKCON Temple Vrindavan</Link></li>
                                <li><Link href="/popularroutes/vrindavan-to-gokul-taxi-hire-on-rent">Vrindavan to Gokul</Link></li>
                                <li><Link href="/popularroutes/vrindavan-to-govardhan-taxi-hire-on-rent">Vrindavan to Govardhan</Link></li>
                                <li><Link href="/popularroutes/vrindavan-to-barsana-taxi-hire-on-rent">Vrindavan to Barsana</Link></li>
                                <li><Link href="/popularroutes/vrindavan-to-nandgaon-taxi-hire-on-rent">Vrindavan to Nandgaon</Link></li>


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