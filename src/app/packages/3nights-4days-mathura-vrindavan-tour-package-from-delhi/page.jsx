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
                      src="/tour/mathura-vrindavan-tour-from-delhi.webp"
                      className="d-block w-100"
                      alt="Mathura Vrindavan Tour from Delhi"
                      width={800}
                      height={400}
                      layout="responsive"
                    />
                  </div>
                </div>
                {/* Carousel Controls (non-functional unless JS is added) */}
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
                  <strong><i className="fa fa-map-marker" /> Destination: </strong>3 Nights | 4 Days
                </li>
                <li>
                  <strong><i className="fa fa-clock-o" /> Destination: </strong>Delhi - Mathura - Delhi
                </li>
                <li>
                  <strong><i className="fa fa-car" /> Transport: </strong> Hatchback - Sedan - SUV (Car)
                </li>
                <li>
                  <strong><i className="fa fa-cutlery" /> Meal Plan: </strong> Breakfast
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                Mathura and Vrindavan are the best places to connect ourselves with spirituality. ...
              </p>

              <div className="row py-4">
                <div className="col-md-12">
                  <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                    Package Inclusion | Exclusion
                  </h5>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div><i className="fa fa-check text-success" /> Guide Services</div>
                  <div><i className="fa fa-check text-success" /> Entrance Fees</div>
                  <div><i className="fa fa-check text-success" /> All transportation in destination</div>
                  <div><i className="fa fa-check text-success" /> Toll Tax, State Tax, Driver Batta</div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div><i className="fa fa-close text-danger" /> Flight & Train Ticket</div>
                  <div><i className="fa fa-close text-danger" /> Camera Charges</div>
                  <div><i className="fa fa-close text-danger" /> Elephant Ride</div>
                  <div><i className="fa fa-close text-danger" /> Room Service Fees</div>
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary: 4 Days Mathura Vrindavan Tour Package</h3>

                  <h4><strong>Day 1: </strong> <span className="text-danger">Delhi - Mathura Transfer</span></h4>
                  <p>Delhi is quite close to Mathura... [rest content]</p>

                  <h4><strong>Day 2: </strong> <span className="text-danger">Mathura - Vrindavan - Mathura</span></h4>
                  <p>The next day... [rest content]</p>

                  <h4><strong>Day 3: </strong> <span className="text-danger">Govardhan - Nandgaon - Barsana</span></h4>
                  <p>Once you have breakfast... [rest content]</p>

                  <h4><strong>Day 4: </strong> <span className="text-danger">Mathura - Delhi Transfer</span></h4>
                  <p>Have your breakfast... [rest content]</p>
                </div>
              </div>

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
                        ['Sedan', '₹11/km'],
                        ['Ertiga', '₹13/km'],
                        ['Kia', '₹16/km'],
                        ['Innova', '₹18/km'],
                        ['Innova Crysta', '₹18/km'],
                        ['12 Seater Tempo Traveller', '₹22/km'],
                        ['Mini Bus', 'Ask For Price'],
                        ['45 Seater Bus', 'Ask For Price'],
                      ].map(([type, price]) => (
                        <tr key={type}>
                          <td>{type}</td>
                          <td>{price}</td>
                          <td>₹250/-</td>
                          <td><a href="#" className="btn btn-danger btn-sm">Enquiry Now</a></td>
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
