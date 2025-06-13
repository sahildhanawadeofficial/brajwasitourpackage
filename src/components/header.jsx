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
                  Need Help?: <FaPhone /> Call: +91 8126990023
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-top-right">
                <Link href="mailto:brajwasitourpackage@gmail.com">
                  <FaEnvelope className="icon" /> brajwasitourpackage@gmail.com
                </Link>

                <Link href="tel:+918126990023">
                  <FaPhone className="icon" /> Call us: +91-8126990023
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Header Top Area End */}

      {/* Marquee Area */}
      <div className="marquee">
        <marquee behavior="scroll" direction="left">
          🚩 ब्रजवासी टूर पैकेज में आपका स्वागत है 🚩 84 कोस यात्रा, बरसाना, नंदगांव, गोकुल, वृंदावन, मथुरा और गोवर्धन यात्रा के लिए अभी बुक करें। 🚕 अनुभवी ड्राइवर, स्वच्छ गाड़ियाँ और धार्मिक अनुभव की गारंटी। 📞 संपर्क करें: +91 8126990023 | ✉️ brajwasitourpackage@gmail.com
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
                    src="/images/brajwasi-logo.jpeg"
                    alt="Brajwasi Tour Package Logo"
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
                    <h3>Near Prem Mandir, Vrindavan, Mathura</h3>
                    <p>Uttar Pradesh, 281121</p>
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
                    <p>24x7 Pilgrimage Support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="header-action">
                <Link href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <FaBookmark className="icon" /> ENQUIRE NOW
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
