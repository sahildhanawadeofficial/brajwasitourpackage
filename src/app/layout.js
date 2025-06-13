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
  title: "Brajwasi Tour Package – Experience the Divine Land of Braj",
  description: "Explore the sacred cities of Mathura, Vrindavan, Barsana, Nandgaon and more with Brajwasi Tour Package. Book your spiritual journey and customized travel experiences in the land of Shri Krishna.",
  keywords: [
    "Brajwasi Tour Package", "Mathura Vrindavan tour", "Barsana Nandgaon tourism",
    "Krishna Bhumi travel", "Braj tour packages", "Phoolon ki Holi",
    "Vrindavan taxi service", "Spiritual tour Mathura", "Customized Braj packages"
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
