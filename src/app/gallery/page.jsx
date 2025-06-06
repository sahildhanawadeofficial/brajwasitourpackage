import React from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

const GallerySection = () => {
    // Define a base path for your gallery images.
    // Assuming 'images/gallery/' is inside your 'public' directory.
    const imageBasePath = "/images/gallery/";

    // Array to hold image data for easier mapping
    const galleryImages = Array.from({ length: 22 }, (_, i) => ({
        id: i + 1,
        src: `${imageBasePath}${i + 1}.webp`,
        alt: "mathuravrindavantaxiservices", // Consistent alt text for all images
        // IMPORTANT: Replace these with the actual dimensions of your images
        width: 600, // Example width, please measure your actual image widths
        height: 400, // Example height, please measure your actual image heights
    }));

    return <>
        <Breadcrumb />

        <section className="gauto-gallery-area section_70">
            <div className="container">
                {/*
          The 'id="lightgallery"' is for LightGallery.js.
          To make LightGallery functional:
          1. Install LightGallery: npm install lightgallery or yarn add lightgallery
          2. Import its CSS: import 'lightgallery/css/lightgallery.css';
          3. Initialize LightGallery on component mount (e.g., using useEffect).
             Example:
             import lightGallery from 'lightgallery';
             import { useEffect } from 'react';

             useEffect(() => {
               const lg = lightGallery(document.getElementById('lightgallery'), {
                 // LightGallery options here
               });
               return () => {
                 lg.destroy(true); // Clean up on unmount
               };
             }, []);
        */}
                <div className="row" id="lightgallery">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="col-lg-4"
                            data-src={image.src} // Keep data-src for LightGallery
                        >
                            <div className="single-gallery">
                                <div className="img-holder">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                        layout="responsive" // Recommended for galleries, adjust as needed
                                        objectFit="cover" // Helps maintain aspect ratio and fill space
                                        blurDataURL={image.blurDataURL || undefined} // Provide actual blurDataURL if using
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.791381195055!2d82.714759!3d20.996818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9d58284b057e319!2sMathura-Vrindavan%20taxi%20service!5e0!3m2!1sen!2sin!4v1636717249673!5m2!1sen!2sin" // <-- REPLACE THIS SRC
            width="100%"
            height="450"
            style={{ border: 0 }} // Inline style in React uses camelCase and an object
            allowFullScreen=""
            loading="lazy"
            title="Our Location on Google Maps" // Add a title for accessibility
        ></iframe>
    </>
};

export default GallerySection;