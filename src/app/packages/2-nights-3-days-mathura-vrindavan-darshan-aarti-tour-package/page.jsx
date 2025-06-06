'use client';

import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';

const Page = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            <div className="blog-image">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="/tour/mathura-vrindavan-aarti-tour.webp"
                      alt="Mathura Vrindavan Aarti Tour"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

            <div className="blog-text">
              <ul>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Destination:&nbsp;&nbsp;
                    </strong>
                    2 Nights | 3 Days
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      &nbsp;Route:&nbsp;&nbsp;
                    </strong>
                    Delhi - Mathura - Vrindavan - Delhi
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-car" aria-hidden="true"></i>
                      &nbsp;Transport:
                    </strong>
                    &nbsp;Hatchback - Sedan - SUV
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-cutlery" aria-hidden="true"></i>
                      &nbsp;Meal Plan:
                    </strong>
                    &nbsp;Breakfast
                  </div>
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                Popularly known as the birthplace of Lord Krishna, Mathura and Vrindavan attract a lot of
                devotees and tourists year-round. If you’re looking for a spiritual getaway, these cities
                are perfect. Here’s a guide for your trip to ensure a smooth experience.
              </p>

              <div className="row">
                <div className="col-md-12 py-4">
                  <h5
                    id="scroll-description"
                    className="font-size-21 font-weight-bold text-dark mb-4"
                  >
                    Package Inclusion | Exclusion
                  </h5>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: '24px', color: 'green' }}></i>
                    &nbsp;Guide Services
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: '24px', color: 'green' }}></i>
                    &nbsp;Entrance Fees
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: '24px', color: 'green' }}></i>
                    &nbsp;All transportation in destination location
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: '24px', color: 'green' }}></i>
                    &nbsp;Toll Tax, State Tax, Driver Batta
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: '24px', color: 'red' }}></i>
                    &nbsp;Flight & train ticket
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: '24px', color: 'red' }}></i>
                    &nbsp;Camera Charges
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: '24px', color: 'red' }}></i>
                    &nbsp;Elephant Ride
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: '24px', color: 'red' }}></i>
                    &nbsp;Room Service Fees
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary: 3 Days Mathura Vrindavan Darshan Aarti Tour</h3>

                  <h4>
                    <strong>Day 1:</strong>{' '}
                    <span style={{ color: 'rgb(236, 51, 35)' }}>Mathura Vrindavan Transfer</span>
                  </h4>
                  <p>
                    Start your journey from Delhi to Mathura (~2-3 hrs). Visit famous temples like
                    Dwarkadheesh, Sri Krishna Janmabhoomi, and Vishram Ghat. Overnight stay in hotel.
                  </p>

                  <h4>
                    <strong>Day 2:</strong>{' '}
                    <span style={{ color: 'rgb(236, 51, 35)' }}>Vrindavan Sightseeing</span>
                  </h4>
                  <p>
                    After breakfast, visit Banke Bihari Temple, ISKCON, Ranga Ji, Kaanch Mandir, and
                    Vaishno Devi Temple. Enjoy a light show at Prem Mandir in the evening. Overnight at
                    hotel.
                  </p>

                  <h4>
                    <strong>Day 3:</strong>{' '}
                    <span style={{ color: 'rgb(236, 51, 35)' }}>Return to Delhi</span>
                  </h4>
                  <p>
                    After breakfast, checkout from hotel and return to Delhi. Trip ends with sweet
                    memories.
                  </p>
                </div>
              </div>

              <QuickInquiry />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
