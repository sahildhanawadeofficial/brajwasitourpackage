import React from "react";
import Link from "next/link";
import Image from "next/image";
import ResponsiveHeader from "./ResponsiveHeader";
import BootstrapNavbar from "./BootstrapNavbar";


const Header = () => {



  return (
    <>
      {/* Header Top Area Start */}
      <section className="gauto-header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="header-top-left">
                <p>
                  Need Help?: <i className="fa fa-phone"></i> Call: +91 9520578080
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-top-right">
                <Link href="#"><i className="fa fa-envelope" aria-hidden="true"></i> gotaxibooking@gmail.com</Link>
                <Link href="#"><i className="fa fa-phone" aria-hidden="true"></i> Call us: +91-9520578080</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Header Top Area End */}

      {/* Marquee Area */}
      <div className="marquee">
        <marquee behavior="scroll" direction="left" >
          🌸 हमारी वेबसाइट पर आपका हार्दिक स्वागत है! 🌸 अब आनंद लें मथुरा-वृंदावन टूर पैकेज के नवीनतम ऑफ़र का।
          हम आपको कराते हैं दर्शन — वृंदावन, मथुरा, बरसाना, गोवर्धन, नंदगांव, 84 कोस यात्रा, पारिवारिक टूर, वरिष्ठ नागरिक दर्शन टूर, और मथुरा-वृंदावन से अयोध्या तक के विशेष टूर।
          🚕 नई टूर पैकेज और कैब सेवाएं अब उपलब्ध हैं — अभी बुक करें और भक्ति के इस सुंदर सफर का हिस्सा बनें!
        </marquee>
      </div>

      {/* Main Header Area Start */}
      <header className="gauto-main-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="site-logo">
                <Link href="/">
                  <Image
                    src="https://i.ibb.co/PsksSKgG/go-taxi-booking-logo-1.png"
                    alt="gauto"
                    width={200}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-9">
              <div className="header-promo d-flex">
                <div className="single-header-promo d-flex">
                  <div className="header-promo-icon">
                    <Image
                      src="https://www.freeiconspng.com/uploads/red-location-icon-1.png"
                      width={50}
                      height={50}
                      alt="location"
                    />
                  </div>
                  <div className="header-promo-info">
                    <h3>Janambhoomi Link Road,</h3>
                    <p>Mathura (U.P.) 281004</p>
                  </div>
                </div>
                <div className="single-header-promo d-flex">
                  <div className="header-promo-icon">
                    <Image
                      src="https://icons.veryicon.com/png/Business/Flatastic%205/24%207.png"
                      width={50}
                      height={50}
                      alt="clock"
                    />
                  </div>
                  <div className="header-promo-info">
                    <p>24X7 Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="header-action">
                <Link href="#" data-toggle="modal" data-target="#exampleModal">
                  <i className="fa fa-bookmark" aria-hidden="true"></i> MAKE ENQUIRY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Header Area End */}

      {/* Mainmenu Area Start */}
      {/* <section className="gauto-mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="mainmenu">
                <nav>
                  <ul id="gauto_navigation">
                    <li className="active">
                      <Link href="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                    </li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Service</Link></li>
                    <li>
                      <Link href="/packages">Packages</Link>
                      <ul>
                        <li><Link href="/same-day-agra-mathura-vrindavan-tour">Same day Agra Mathura tour</Link></li>
                        <li><Link href="/same-day-agra-tour-package-from-delhi">Same day Agra tour from Delhi</Link></li>
                        <li><Link href="/2-days-mathura-vrindavan-weekend-package-from-delhi">2 Days Mathura weekend tour</Link></li>
                        <li><Link href="/2-days-mathura-with-bharatpur-tour-package">2 Days Mathura Bharatpur tour</Link></li>
                        <li><Link href="/3-days-royal-spiritual-mathura-bharatpur-agra-tour-package">3 Days Mathura Bharatpur with Agra</Link></li>
                        <li><Link href="/3-days-spritual-mathura-vrindavan-tour-package-via-gokul">3 Days Mathura Tour via Gokul</Link></li>
                        <li><Link href="/3nights-4days-delhi-agra-jaipur-via-vrindavan-tour-package">4 Days Delhi Agra Jaipur with Vrindavan</Link></li>
                        <li><Link href="/3nights-4days-mathura-bharatpur-agra-memorable-tour-package">4 Days Mathura Bharatpur with Agra</Link></li>
                        <li><Link href="/3nights-4days-mathura-vrindavan-tour-package-from-delhi">4 Days Mathura from Delhi</Link></li>
                        <li><Link href="/4-days-mathura-vrindavan-tour-package-via-taj-mahal">4 Days Mathura with Taj Mahal</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#" data-toggle="modal" data-target="#exampleModal">
                        Taxi / Car Booking
                      </Link>
                    </li>
                    <li>
                      <Link href="#">Popular Routes</Link>
                      <ul>
                        <li><Link href="/agra-to-delhi-taxi-hire-on-rent">Agra to Delhi</Link></li>
                        <li><Link href="/agra-to-jaipur-taxi-hire-on-rent">Agra to Jaipur</Link></li>
                        <li><Link href="/agra-to-mathura-taxi-hire-on-rent">Agra to Mathura</Link></li>
                        <li><Link href="/delhi-to-agra-taxi-hire-on-rent">Delhi to Agra</Link></li>
                        <li><Link href="/delhi-to-jaipur-taxi-hire-on-rent">Delhi to Jaipur</Link></li>
                        <li><Link href="/delhi-to-mathura-taxi-hire-on-rent">Delhi to Mathura</Link></li>
                        <li><Link href="/jaipur-to-agra-taxi-hire-on-rent">Jaipur to Agra</Link></li>
                        <li><Link href="/jaipur-to-delhi-taxi-hire-on-rent">Jaipur to Delhi</Link></li>
                        <li><Link href="/jaipur-to-mathura-taxi-hire-on-rent">Jaipur to Mathura</Link></li>
                        <li><Link href="/mathura-to-agra-taxi-hire-on-rent">Mathura to Agra</Link></li>
                        <li><Link href="/mathura-to-delhi-taxi-hire-on-rent">Mathura to Delhi</Link></li>
                        <li><Link href="/mathura-to-jaipur-taxi-hire-on-rent">Mathura to Jaipur</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/payment">Payment</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-1 col-sm-12">
              <div className="main-search-right">
                <div className="gauto-responsive-menu">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



      <BootstrapNavbar />





      {/* <ResponsiveHeader /> */}
      {/* Mainmenu Area End */}
    </>
  );
};

export default Header;
