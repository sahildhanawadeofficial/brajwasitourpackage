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
              {/* Replace with a working carousel if using Bootstrap JS or implement a React carousel */}
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="/tour/3-day-pramanand-maharaj-ji.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
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
                    Mathura - Vrindavan
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;&nbsp;</strong>
                    3 Days
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-car" aria-hidden="true"></i> Transport:</strong>&nbsp;&nbsp;
                    Hatchback - Sedan - SUV (Car)
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:</strong>&nbsp;&nbsp;
                    Breakfast
                  </div>
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                Deepen your spiritual journey with a 3-day retreat centered around Pramanand Maharaj
                Ji’s darshan and teachings...
              </p>

              {/* Package Inclusions/Exclusions */}
              <div className="row">
                <div className="col-md-12 py-4">
                  <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Paddle boat decorated for sunset viewing
                  </div>
                  {/* Repeat for other inclusions... */}
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Personal expenses (souvenirs, snacks)
                  </div>
                  {/* Repeat for other exclusions... */}
                </div>
              </div>

              {/* Itinerary */}
              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary : 3-Day Pramanand Maharaj Ji Darshan</h3>
                  <br />
                  <h4><strong>Day 1</strong>: <span style={{ color: '#ec3323' }}>Arrival in Mathura & Evening Darshan</span></h4>
                  <p>Upon arrival in Mathura, you’ll be greeted...</p>
                  <h4><strong>Day 2</strong>: <span style={{ color: '#ec3323' }}>Full Day Spiritual Immersion</span></h4>
                  <p>The day begins with early morning meditation...</p>
                  <h4><strong>Day 3</strong>: <span style={{ color: '#ec3323' }}>Final Darshan & Departure</span></h4>
                  <p>Your final day starts with one last morning darshan...</p>
                </div>
              </div>

              {/* Pricing Table */}
              <div className="mytable container">
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
                        { type: '45 Seater Bus', price: 'Ask For Price' },
                      ].map((car, idx) => (
                        <tr key={idx}>
                          <td>{car.type}</td>
                          <td>{car.price}</td>
                          <td>₹250/-</td>
                          <td>
                            <a href="#" className="btn btn-danger btn-sm">Enquiry Now</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Inquiry */}
              <QuickInquiry />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
