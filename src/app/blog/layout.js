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
                                    <li><Link href="/blog/top-5-places-to-visit-in-uttarakhand">Top 5 Places to Visit in Uttarakhand</Link></li>
                                    <li><Link href="/blog/how-to-prepare-for-char-dham-yatra">How to Prepare for Char Dham Yatra</Link></li>
                                    <li><Link href="/blog/best-time-to-visit-uttarakhand">Best Time to Visit Uttarakhand for a Taxi Tour</Link></li>
                                    <li><Link href="/blog/benefits-of-hiring-local-taxi-service-uttarakhand">Benefits of Hiring a Local Taxi Service in Uttarakhand</Link></li>
                                    <li><Link href="/blog/spiritual-temples-in-uttarakhand">Spiritual Journey Through Uttarakhand: Temples You Must Visit</Link></li>
                                    <li><Link href="/blog/scenic-routes-in-uttarakhand">Scenic Routes You Can Explore with a Private Taxi in Uttarakhand</Link></li>
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
                                            className="fa fa-envelope" aria-hidden="true"></i> Email us (Click Here)</a>
                                        </li>
                                    </ul>
                                    <br />

                                    <h4>Address</h4>
                                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> 35-A Mayur Vihar, Dholi Pyau
                                        Road,
                                        Uttarakhand (U.K.) 281001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}