import { Geist, Geist_Mono } from "next/font/google";
// import "@/styles/animate.min.css";
import "@/styles/bootstrap.css";
// import "@/styles/font-awesome.min.css";
// import "@/styles/jquery.datepicker.css";
// import "@/styles/jquery-clockpicker.min.css";
// import "@/styles/lightgallery.min.css";
// import "@/styles/magnific-popup.css";
// import "@/styles/nice-select.css";
// import "@/styles/owl.carousel.min.css";
// import "@/styles/owl.theme.default.min.css";
import "@/styles/style.scss";
import "@/styles/responsive.scss";
import "@/styles/slicknav.min.css";

import { ToastContainer } from 'react-toastify';



import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "@/components/header";
import Footer from "@/components/footer";


import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yatra UK – Explore the Divine Beauty of Uttarakhand",
  description: "Discover top pilgrimage routes, scenic hill stations, and adventure destinations across Uttarakhand with Yatra UK. Plan your spiritual and nature-filled journey today.",
  keywords: [
    "Yatra UK", "Uttarakhand tourism", "Char Dham Yatra", "Uttarakhand taxi services",
    "Hill stations in India", "Pilgrimage travel", "Adventure in Uttarakhand", "Tour packages"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <ToastContainer
          style={{ fontSize: "20px" }}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          fontSize="2em"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
