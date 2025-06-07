'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaBookmark } from "react-icons/fa";
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
                  Need Help?: <FaPhone /> Call: +91 9520578080
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-top-right">
                <Link href="#"><FaEnvelope className="icon" /> gotaxibooking@gmail.com</Link>
                <Link href="#"><FaPhone className="icon" /> Call us: +91-9520578080</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Header Top Area End */}

      {/* Marquee Area */}
      <div className="marquee">
        <marquee behavior="scroll" direction="left">
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
                    src="/images/yatra-uk-logo2.jpeg"
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
                <Link href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <FaBookmark className="icon" /> MAKE ENQUIRY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Header Area End */}

      {/* Mainmenu Area Start */}
      <BootstrapNavbar />
      {/* Mainmenu Area End */}
    </>
  );
};

export default Header;
