'use client';

import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';

const Page = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            {/* Carousel */}
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="/tour/mathura-tour-with-tajmahal.webp"
                      alt="Mathura tour with Tajmahal"
                    />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

            {/* Trip Details */}
            <div className="blog-text">
              <ul>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;&nbsp;
                    </strong>
                    3 Nights | 4 Day
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-clock-o" aria-hidden="true"></i> Destination:&nbsp;&nbsp;
                    </strong>
                    Delhi - Mathura - Vrindavan - Delhi
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-car" aria-hidden="true"></i> Transport :
                    </strong>
                    &nbsp; &nbsp;Hatchback - Sedan - SUV (Car)
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:
                    </strong>
                    &nbsp; &nbsp;Breakfast
                  </div>
                </li>
              </ul>

              {/* Description */}
              <h2>Description :</h2>
              <p>
                Our Chauffeur/Driver will come to your desired location or anywhere in Delhi (6:00 A.M.) to pick you up
                & then 2 hours drive to Mathura. Visit Sri Krishna Janamsthan, Dwarikadheesh Temple. After Noon
                Proceed For Gokul Visit Chinta Haran Temple, Brahamand Ghaat, Gokul Temple, Chaurasi Khamba. After
                Sightseeing of Gokul Proceed For Goverdhan Visit Goverdhan Temple, Radha Kund, Kusum Sarovar. In
                afternoon visited all Temples. Now time to see the most Beautiful Yamuna Aarti at Vishram Ghaat,
                Mathura. Overnight Stay.
              </p>

              {/* Package Inclusion / Exclusion */}
              <div className="row py-4">
                <div className="col-md-12">
                  <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                    Package Inclusion | Exclusion
                  </h5>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div className="mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Guide Services
                  </div>
                  <div className="mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Entrance Fees
                  </div>
                  <div className="mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> All transportation in
                    destination location
                  </div>
                  <div className="mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Toll Tax, State Tax,
                    Driver Batta (Charges)
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div className="mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Flight & train ticket.
                  </div>
                  <div className="mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Camera Charges
                  </div>
                  <div className="mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Elephant Ride.
                  </div>
                  <div className="mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Room Service Fees
                  </div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="call-box-inner12">
                <h3>Itinerary : Mathura Vrindavan Tour via Taj Mahal</h3>
                <h4>
                  <strong>Day 1</strong>: <span style={{ color: '#EC3323' }}> Mathura - Gokul</span>
                </h4>
                <p>
                  Once you reach Delhi / Mathura, you would start your journey towards Mathura...
                </p>

                <h4>
                  <strong>Day 2</strong>: <span style={{ color: '#EC3323' }}>Vrindavan Temple Visit</span>
                </h4>
                <p>After breakfast... visit ISKCON, Prem Mandir...</p>

                <h4>
                  <strong>Day 3</strong>: <span style={{ color: '#EC3323' }}>Vrindavan to Agra</span>
                </h4>
                <p>Visit Taj Mahal, Agra Fort...</p>

                <h4>
                  <strong>Day 4</strong>: <span style={{ color: '#EC3323' }}>Agra to Delhi / Agra station</span>
                </h4>
                <p>Drop after breakfast for return journey.</p>
              </div>

              {/* Pricing Table */}
              <div className="mytable container mt-5">
                <h3>Pricing for Taxi/Cab Service</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Taxi Type</th>
                        <th>Price (Per Day)</th>
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
                        { type: '45 Seater Bus', price: 'Ask For Price' }
                      ].map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.type}</td>
                          <td>{item.price}</td>
                          <td>₹250/-</td>
                          <td>
                            <a href="#" className="btn btn-danger btn-sm">
                              Enquiry Now
                            </a>
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
    </>
  );
};

export default Page;
