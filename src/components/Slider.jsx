'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaxiSlider = () => {
    const slides = [
        {
            text: 'book a cab prices starts from Rs. 11 / KM',
            heading: <>Book Your Taxi DISCOUNT <span>50% Off</span></>,
            button: 'Book Now!',
        },
        {
            text: 'for rent car start from Rs. 12 / KM',
            heading: <>Reserved Now & Get <span>50% Off</span></>,
            button: 'Reserve Now!',
        },
        {
            text: 'for rent car start from Rs. 12 / KM',
            heading: <>Reserved Now & Get <span>50% Off</span></>,
            button: 'Reserve Now!',
        },
    ];

    return (
        <section className="gauto-slider-area fix position-relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                className="gauto-slide"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`gauto-main-slide slide-item-${index + 1}`}>
                            <div className="gauto-main-caption">
                                <div className="gauto-caption-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="slider-text">
                                                    <p>{slide.text}</p>
                                                    <h2>{slide.heading}</h2>
                                                    <a
                                                        href="#"
                                                        className="gauto-btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        {slide.button}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TaxiSlider;
