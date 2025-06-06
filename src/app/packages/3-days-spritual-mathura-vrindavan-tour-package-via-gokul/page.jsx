'use client';

import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const Page = () => {
  // Ensure Bootstrap JS works for carousel
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <div className="single-blog">
          {/* Carousel */}
          <div className="blog-image">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    className="d-block w-100"
                    src="/tour/mathura-vrindavan-tour-via-gokul.webp"
                    alt="Mathura Vrindavan Tour via Gokul"
                    width={800}
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

          {/* Tour Info */}
          <div className="blog-text">
            <ul>
              <li>
                <div>
                  <strong><i className="fa fa-map-marker" /> Destination: </strong>2 Nights | 3 Day
                </div>
              </li>
              <li>
                <div>
                  <strong><i className="fa fa-clock-o" /> Destination: </strong>Delhi - Mathura - Vrindavan - Delhi
                </div>
              </li>
              <li>
                <div>
                  <strong><i className="fa fa-car" /> Transport: </strong> Hatchback - Sedan - SUV (Car)
                </div>
              </li>
              <li>
                <div>
                  <strong><i className="fa fa-cutlery" /> Meal Plan: </strong> Breakfast
                </div>
              </li>
            </ul>

            <h2>Description :</h2>
            <p>
              The driver will come to your location in Delhi at 6:00 AM. After 2 hours of drive, you will reach Mathura.
              Then start your Mathura Gokul Vrindavan tour package via Gokul...
            </p>
            <p>
              After this, you can proceed to Govardhan and visit Goverdhan Temple, Radha Kund, Kusum Sarovar, and enjoy
              Yamuna aarti at Vishram Ghat, Mathura.
            </p>

            <div className="row">
              <div className="col-md-12 py-4">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                  Package Inclusion | Exclusion
                </h5>
              </div>
              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ color: 'green' }} /> Guide Services</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ color: 'green' }} /> Entrance Fees</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ color: 'green' }} /> All transportation</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ color: 'green' }} /> Toll Tax, Driver Charges</div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ color: 'red' }} /> Flight & train ticket</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ color: 'red' }} /> Camera Charges</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ color: 'red' }} /> Elephant Ride</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ color: 'red' }} /> Room Service Fees</div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="call-box-inner12">
              <h3>Itinerary : 3 Days Mathura Vrindavan Tour Package via Gokul</h3>
              <h4><strong>Day 1: </strong><span style={{ color: '#ec3323' }}>Delhi - Mathura Transfer</span></h4>
              <p>Visit Gokul, Raman Reti, Chinta Haran Temple, etc., then Dwarkadheesh Temple, overnight stay.</p>

              <h4><strong>Day 2: </strong><span style={{ color: '#ec3323' }}>Mathura - Vrindavan</span></h4>
              <p>Visit Banke Bihari Temple, ISKCON, Ranga Ji, Pagal Baba Temple, Nidhivan, Prem Mandir light show.</p>

              <h4><strong>Day 3: </strong><span style={{ color: '#ec3323' }}>Mathura - Delhi Transfer</span></h4>
              <p>After breakfast, drive back to Delhi.</p>
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
                    ].map(({ type, price }, i) => (
                      <tr key={i}>
                        <td>{type}</td>
                        <td>{price}</td>
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
