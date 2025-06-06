'use client';
import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const Page = () => {
  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <div className="single-blog">
          <div className="blog-image">
            <div className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="/tour/4-days-mathura-bharatpur-agra-tour.webp"
                    alt="Mathura Bharatpur Agra Tour"
                  />
                </div>
              </div>
              {/* Carousel controls - non-functional unless you wire up JS */}
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="blog-text">
            <ul>
              <li>
                <div>
                  <strong>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    Destination:&nbsp;&nbsp;
                  </strong>
                  2 Nights | 3 Day
                </div>
              </li>
              <li>
                <div>
                  <strong>
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    Destination:&nbsp;&nbsp;
                  </strong>
                  Delhi - Mathura - Vrindavan - Bharatpur - Agra
                </div>
              </li>
              <li>
                <div>
                  <strong>
                    <i className="fa fa-car" aria-hidden="true" />
                    Transport :
                  </strong>
                  &nbsp; Hatchback - Sedan - SUV (Car)
                </div>
              </li>
              <li>
                <div>
                  <strong>
                    <i className="fa fa-cutlery" aria-hidden="true" />
                    Meal Plan:
                  </strong>
                  &nbsp; Breakfast
                </div>
              </li>
            </ul>

            <h2>Description :</h2>
            <p>
              Tour Package for spiritual places allows you to come closer to your Gods...
              (same text here)...
            </p>

            <div className="row">
              <div className="col-md-12 py-4">
                <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                  Package Inclusion | Exclusion
                </h5>
              </div>
              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                {['Guide Services', 'Entrance Fees', 'All transportation in destination location', 'Toll Tax, State Tax, Driver Batta ( Charges )'].map((item, i) => (
                  <div className="flex-horizontal-center mb-3 text-gray-1" key={i}>
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} />
                    &nbsp;{item}
                  </div>
                ))}
              </div>
              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                {['Flight & train ticket.', 'Camera Charges', 'Elephant Ride.', 'Room Service Fees'].map((item, i) => (
                  <div className="flex-horizontal-center mb-3 text-gray-1" key={i}>
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }} />
                    &nbsp;{item}
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="call-box-inner12">
                <h3>Itinerary : Agra Mathura Vrindavan Tour Package</h3>

                <h4>
                  <strong>Day 1</strong>:&nbsp;
                  <span style={{ color: '#ec3323' }}>Early Morning Transfer to Mathura</span>
                </h4>
                <p>Pickup from Delhi... Visit Taj Mahal... Return to Delhi.</p>

                <h4>
                  <strong>Day 2</strong>:&nbsp;
                  <span style={{ color: '#ec3323' }}>Mathura - Bharatpur</span>
                </h4>
                <p>Visit Bharatpur... Stay overnight in Agra.</p>

                <h4>
                  <strong>Day 3</strong>:&nbsp;
                  <span style={{ color: '#ec3323' }}>Agra - Delhi</span>
                </h4>
                <p>Checkout and sightseeing. Drop off in Delhi.</p>
              </div>
            </div>

            <div className="mytable container">
              <h3>Pricing for Taxi/Cab Service</h3>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>Taxi Type</th>
                      <th>Price (Per KM)</th>
                      <th>Driver Charges (Per Day)</th>
                      <th>Enquiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: 'Sedan', price: '₹11/km' },
                      { type: 'Ertiga', price: '₹13/km' },
                      { type: 'Kia', price: '₹16/km' },
                      { type: 'Innova', price: '₹18/km' },
                      { type: 'Innova Crysta', price: '₹18/km' },
                      { type: '12 Seater Tempo Traveller', price: '₹22/km' },
                      { type: 'Mini Bus', price: 'Ask For Price' },
                      { type: '45 Seater Bus', price: 'Ask For Price' },
                    ].map((item, index) => (
                      <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.price}</td>
                        <td>₹250/-</td>
                        <td>
                          <button className="btn btn-danger btn-sm">Enquiry Now</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <QuickInquiry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
