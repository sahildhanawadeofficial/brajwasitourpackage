import React from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

const GallerySection = () => {
    const imageBasePath = "/tour";

    const imageFileNames = [
        "almora-town-view.png",
        "auli-skiing-cable-car.png",
        "badrinath-dham.png",
        "binsar-mountain-wildlife.png",
        "chaukori-tea-gardens-himalayas.png",
        "chopta-mini-switzerland.png",
        "dhanaulti-camping.png",
        "gangotri-ganga-origin.png",
        "haridwar-ganga-aarti.png",
        "hemkund-sahib.png",
        "jageshwar-temples.png",
        "jim-corbett-national-park.png",
        "kausani-himalayan-tea.png",
        "kedarnath-dham.png",
        "khirsu-quiet-hill-town.png",
        "lansdowne-pine-forests.png",
        "mukteshwar-trekking.png",
        "munsiyari-johar-valley-trekking.png",
        "mussoorie-hill-station.png",
        "nainital-boating-ropeway.png",
        "peora-kumaon-hidden-gem.png",
        "pithoragarh-nepal-border-views.png",
        "ranikhet-golf-temple.png",
        "rishikesh-aarti-rafting.png",
        "valley-of-flowers.png",
        "yamunotri-yamuna-source.png",
    ];

    const galleryImages = imageFileNames.map((filename, index) => ({
        id: index + 1,
        src: `${imageBasePath}/${filename}`,
        alt: filename
            .replace(/[-.]/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase()), // Capitalize for readable alt
        width: 600,
        height: 400,
    }));

    return (
        <>
            <Breadcrumb />

            <section className="gauto-gallery-area section_70">
                <div className="container">
                    <div className="row" id="lightgallery">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="col-lg-4 col-md-6 mb-4"
                                data-src={image.src}
                            >
                                <div className="single-gallery">
                                    <div className="img-holder">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            layout="responsive"
                                            objectFit="cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.791381195055!2d82.714759!3d20.996818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9d58284b057e319!2sMathura-Vrindavan%20taxi%20service!5e0!3m2!1sen!2sin!4v1636717249673!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location on Google Maps"
            ></iframe>
        </>
    );
};

export default GallerySection;
