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
                                <h3>Related Blogs</h3>
                                <ul className="service-menu">
                                    <li><Link href="/blog/top-places-to-visit-in-braj-bhoomi">Top Places to Visit in Braj Bhoomi</Link></li>
                                    <li><Link href="/blog/84-kosi-parikrama-guide">Complete Guide to 84 Kosi Parikrama</Link></li>
                                    <li><Link href="/blog/lathmar-holi-barsana-nandgaon">Lathmar Holi: Barsana and Nandgaon Experience</Link></li>
                                    <li><Link href="/blog/vrindavan-temple-darshan-guide">Top Temples to Visit in Vrindavan</Link></li>
                                    <li><Link href="/blog/why-choose-brajwasi-tour-package">Why Choose Brajwasi Tour Package?</Link></li>
                                    <li><Link href="/blog/mathura-vrindavan-tour-itinerary">Mathura-Vrindavan 2-Day Tour Itinerary</Link></li>
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