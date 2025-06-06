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
              <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      className="d-block w-100"
                      src="/tour/mathura-gokul-raman-reti.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
                      width={800}
                      height={500}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-text">
              <ul>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;&nbsp;
                    </strong>
                    Vrindavan - Mathura - Gokul - Raman Reti
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;&nbsp;
                    </strong>
                    2 Days
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-car" aria-hidden="true"></i> Transport:
                    </strong>
                    &nbsp;&nbsp;Luxury AC Vehicle
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:
                    </strong>
                    &nbsp;&nbsp;Gourmet Vegetarian Lunch
                  </div>
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                This spiritually enriching 2-day tour takes you through the divine sites of
                Vrindavan, Mathura, and Gokul...
              </p>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  {[
                    'AC vehicle',
                    'Private guided tours in Mathura, Gokul & Vrindavan',
                    'Boat ride at Vishram Ghat',
                    'Gourmet vegetarian lunch at a premium restaurant',
                    'Complimentary refreshments during travel'
                  ].map((item, i) => (
                    <div key={i} className="flex-horizontal-center mb-3 text-gray-1">
                      <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> {item}
                    </div>
                  ))}
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  {[
                    'Personal expenses (shopping, snacks)',
                    'Tips to guides/drivers',
                    'Additional meals not mentioned',
                    'Travel to and from Vrindavan'
                  ].map((item, i) => (
                    <div key={i} className="flex-horizontal-center mb-3 text-gray-1">
                      <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h3>
                    Itinerary : 2 Days Vrindavan to Mathura, Gokul & Raman Reti Premium Experience
                  </h3>
                  <br />
                  <h4>
                    <strong>Day 1:</strong>&nbsp;
                    <span style={{ color: '#ec3323' }}>
                      Vrindavan Darshan – The Divine Land of Krishna’s Leelas
                    </span>
                  </h4>
                  <p>
                    Your journey begins in Vrindavan... [Shorten or continue content]
                  </p>

                  <h4>
                    <strong>Day 2:</strong>&nbsp;
                    <span style={{ color: '#ec3323' }}>
                      Mathura, Gokul & Raman Reti – Walking in Krishna’s Footsteps
                    </span>
                  </h4>
                  <p>
                    After an early breakfast, we depart for Mathura... [Shorten or continue content]
                  </p>
                </div>
              </div>

              <div className="mytable container">
                <h3>Pricing for Taxi/Cab Service</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Taxi Type</th>
                        <th>Seating</th>
                        <th>Price</th>
                        <th>Enquiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Sedan', '1+4', '₹5,000/-'],
                        ['Ertiga', '1+5', '₹6,000/-'],
                        ['Kia', '1+5', '₹8,000/-'],
                        ['Innova Crysta', '1+5', '₹9,000/-'],
                        ['12 Seater Tempo Traveller', '11+1', '₹14,000/-'],
                        ['Mini Bus', '', '₹18,000/-'],
                        ['Bus', '', '₹22,000/-']
                      ].map(([type, seat, price], i) => (
                        <tr key={i}>
                          <td>{type}</td>
                          <td>{seat}</td>
                          <td>{price}</td>
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
    </>
  );
};

export default Page;
