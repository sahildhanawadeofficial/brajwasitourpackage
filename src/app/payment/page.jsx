import Breadcrumb from '@/components/Breadcrumb';
import React from 'react';
import Image from 'next/image'; // Import the Image component

const Page = () => {
    // Define the common image source.
    const imageUrl = "https://i.ibb.co/sMLJwdp/apna-tours-scanner-payment-1.png";
    // Define the actual width and height of the image.
    // YOU MUST REPLACE THESE WITH THE ACTUAL DIMENSIONS OF YOUR IMAGE (apna-tours-scanner-payment-1.png)
    const imageWidth = 400; // Example width, please find the actual width
    const imageHeight = 400; // Example height, please find the actual height

    return (
        <>
            <Breadcrumb />
            <section className="gauto-contact-area section_70"> {/* Changed class to className */}
                <div className="container"> {/* Changed class to className */}
                    <div className="row"> {/* Changed class to className */}
                        <div className="col-lg-4"> {/* Changed class to className */}
                            <Image
                                src={imageUrl}
                                alt="Apna Tours QR Code Payment Scanner" // Added descriptive alt text
                                width={imageWidth}
                                height={imageHeight}
                                layout="responsive" // Optional: makes image scale with its parent, but explicit width/height are still needed
                                objectFit="contain" // Optional: ensures the entire image is visible, adjusts to fit
                            // You might also add 'priority' if these images are above the fold
                            />
                        </div>
                        <div className="col-lg-4"> {/* Changed class to className */}
                            <Image
                                src={imageUrl}
                                alt="Apna Tours QR Code Payment Scanner"
                                width={imageWidth}
                                height={imageHeight}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        <div className="col-lg-4"> {/* Changed class to className */}
                            <Image
                                src={imageUrl}
                                alt="Apna Tours QR Code Payment Scanner"
                                width={imageWidth}
                                height={imageHeight}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                    </div>

                    <div className="row"> {/* Changed class to className */}
                        <div className="col-lg-4"> {/* Changed class to className */}
                            <Image
                                src={imageUrl}
                                alt="Apna Tours QR Code Payment Scanner"
                                width={imageWidth}
                                height={imageHeight}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        <div className="col-lg-4"> {/* Changed class to className */}
                            <Image
                                src={imageUrl}
                                alt="Apna Tours QR Code Payment Scanner"
                                width={imageWidth}
                                height={imageHeight}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        <div className="col-lg-4"> {/* Changed class to className */}
                            <Image
                                src={imageUrl}
                                alt="Apna Tours QR Code Payment Scanner"
                                width={imageWidth}
                                height={imageHeight}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
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
    );
}

export default Page;