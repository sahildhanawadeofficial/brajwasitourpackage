'use client';

import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const Page = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            <div className="blog-image">
              {/* Bootstrap carousel */}
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      className="d-block w-100"
                      src="/tour/7-days-braj.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
                      width={1000}
                      height={500}
                      layout="responsive"
                    />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="blog-text">
              <ul>
                <li>
                  <div>
                    <strong><i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;&nbsp;</strong>
                    Mathura Vrindavan - Gokul - Govardhan - Barsana - Nandgaon & More
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;&nbsp;</strong>
                    5-Days
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-car" aria-hidden="true"></i> Transport:</strong>&nbsp;&nbsp;
                    AC Vehicle
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:</strong>&nbsp;&nbsp;
                    Breakfast & Dinner
                  </div>
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                The 3-Days Braj 84 Kos Express Yatra is a condensed yet spiritually fulfilling...
              </p>

              {/* Package Inclusion and Exclusion */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="fw-bold text-dark mb-3">Package Inclusion</div>
                  {[
                    'AC transportation for the entire yatra',
                    'Accommodation in 3-star hotels',
                    'Guided temple visits and parikrama',
                    'Daily vegetarian breakfast and dinner',
                    'Entry fees to temples and sacred sites',
                  ].map((item, i) => (
                    <div className="d-flex align-items-center mb-3 text-gray-1" key={i}>
                      <i className="fa fa-check me-2" style={{ fontSize: 24, color: 'green' }}></i> {item}
                    </div>
                  ))}
                </div>

                <div className="col-md-6 mb-4">
                  <div className="fw-bold text-dark mb-3">Package Exclusion</div>
                  {[
                    'Personal expenses (shopping, snacks)',
                    'Tips to guides/drivers',
                    'Additional meals not mentioned',
                    'Travel to and from Mathura (starting city)',
                  ].map((item, i) => (
                    <div className="d-flex align-items-center mb-3 text-gray-1" key={i}>
                      <i className="fa fa-close me-2" style={{ fontSize: 24, color: 'red' }}></i> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="call-box-inner12">
                <h3>Itinerary : 5-Day Braj 84 Kos Yatra</h3>
                {[1, 2, 3].map((day) => (
                  <div key={day}>
                    <h4>
                      <strong>Day {day}</strong>:{' '}
                      <span style={{ color: 'rgb(236, 51, 35)' }}>
                        {day === 1
                          ? 'Mathura Vrindavan – Gokul – Mahavan'
                          : day === 2
                            ? 'Govardhan – Radha Kund – Barsana – Nandgaon'
                            : 'Dauji–Raval–Kamyavan–Vrindavan(Revisit)– Completion of Yatra'}
                      </span>
                    </h4>
                    <p>
                      {/* You can add individual paragraph content per day if needed */}
                      Description for day {day} goes here...
                    </p>
                  </div>
                ))}
              </div>

              {/* Pricing Table */}
              <div className="mytable container">
                <h3>Pricing for Taxi/Cab Service</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Taxi Type</th>
                        <th>Price (Per KM)</th>
                        <th>Driver Charges</th>
                        <th>Enquiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Sedan', '₹11/km'],
                        ['Ertiga', '₹13/km'],
                        ['Kia', '₹16/km'],
                        ['Innova', '₹18/km'],
                        ['Innova Crysta', '₹18/km'],
                        ['12 Seater Tempo Traveller', '₹22/km'],
                        ['Mini Bus', 'Ask For Price'],
                        ['45 Seater Bus', 'Ask For Price'],
                      ].map(([type, price], i) => (
                        <tr key={i}>
                          <td>{type}</td>
                          <td>{price}</td>
                          <td>₹250/-</td>
                          <td>
                            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Enquiry Now
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Inquiry Modal Component */}
              <QuickInquiry />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
