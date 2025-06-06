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
            {/* Carousel */}
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      className="d-block w-100"
                      src="/tour/mathura-vrindavan-weekend-tour.webp"
                      alt="Mathura Vrindavan Tour"
                      width={1200}
                      height={600}
                    />
                  </div>
                </div>
                {/* Carousel Controls (non-functional without JS) */}
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

            {/* Tour Info */}
            <div className="blog-text">
              <ul>
                <li>
                  <div>
                    <strong><i className="fa fa-map-marker" /> Destination:&nbsp;&nbsp;</strong>1 Nights | 2 Day
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-clock-o" /> Destination:&nbsp;&nbsp;</strong>
                    Delhi - Mathura - Vrindavan - Delhi
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-car" /> Transport :</strong>&nbsp; Hatchback - Sedan - SUV (Car)
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-cutlery" /> Meal Plan:</strong>&nbsp; Breakfast
                  </div>
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                The driver will pick you up from your location in Delhi at 6:00 AM. Start your 2 Days{' '}
                <a href="https://www.mathuravrindavantour.com/2-days-mathura-vrindavan-weekend-tour-package.html">
                  Mathura Vrindavan Weekend Tour Package
                </a>. After a 2-hour drive, reach Mathura and visit Sri Krishna Janmasthan, Dwarikadheesh Temple,
                then Gokul (Chinta Haran Temple, Brahmand Ghat, Chaurasi Khamba). Continue to Goverdhan to visit
                religious sites like Goverdhan Temple, Radha Kund, and Kusum Sarovar. End the day with Yamuna Aarti.
              </p>
              <p>
                Day 1 ends with an overnight stay at a hotel. Day 2 is full Vrindavan sightseeing — visit temples like
                Mata Vaishno Devi, Banke Bihari, Radhavallabh, Prem Mandir, and return to Delhi by evening.
              </p>

              {/* Inclusion/Exclusion */}
              <div className="row">
                <div className="col-md-12 py-4">
                  <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div><i className="fa fa-check" style={{ color: 'green' }} /> Guide Services</div>
                  <div><i className="fa fa-check" style={{ color: 'green' }} /> Entrance Fees</div>
                  <div><i className="fa fa-check" style={{ color: 'green' }} /> Transportation</div>
                  <div><i className="fa fa-check" style={{ color: 'green' }} /> Toll Tax, Driver Charges</div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div><i className="fa fa-close" style={{ color: 'red' }} /> Flight & Train Ticket</div>
                  <div><i className="fa fa-close" style={{ color: 'red' }} /> Camera Charges</div>
                  <div><i className="fa fa-close" style={{ color: 'red' }} /> Elephant Ride</div>
                  <div><i className="fa fa-close" style={{ color: 'red' }} /> Room Service Fees</div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary : 2 Days Mathura Vrindavan Tour</h3>
                  <h4><strong>Day 1: </strong>Travel To Mathura & Sightseeing</h4>
                  <p>
                    Depart at 6 AM from Delhi, reach Mathura, visit temples and Gokul, and attend Yamuna Aarti.
                    Stay overnight.
                  </p>
                  <h4><strong>Day 2: </strong>Vrindavan Sightseeing & Return</h4>
                  <p>
                    Explore Vrindavan (Prem Mandir, Banke Bihari, etc.) and return to Delhi by evening.
                  </p>
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
                      ].map(([type, price], idx) => (
                        <tr key={idx}>
                          <td>{type}</td>
                          <td>{price}</td>
                          <td>₹250/-</td>
                          <td><button className="btn btn-danger btn-sm">Enquiry Now</button></td>
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
