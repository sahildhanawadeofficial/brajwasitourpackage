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
                      src="/tour/delhi-agra-vrindavan-tour.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
                      width={800}
                      height={400}
                      layout="responsive"
                    />
                  </div>
                </div>
                {/* Carousel buttons won't work unless you integrate Bootstrap JS */}
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

            <div className="blog-text">
              <ul>
                <li>
                  <div>
                    <strong><i className="fa fa-map-marker" aria-hidden="true"></i> Destination: </strong>
                    2 Nights | 3 Days
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-clock-o" aria-hidden="true"></i> Destination: </strong>
                    Delhi - Agra - Mathura - Vrindavan - Jaipur
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-car" aria-hidden="true"></i> Transport: </strong>
                    Hatchback - Sedan - SUV (Car)
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan: </strong>
                    Breakfast
                  </div>
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                In the morning once you have your delicious breakfast you can proceed towards Mathura...
              </p>

              <p>
                In the evening you can visit Prem Mandir... Stay overnight at the hotel room.
              </p>

              <div className="row">
                <div className="col-md-12 py-4">
                  <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Guide Services</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Entrance Fees</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> All transportation in destination location</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Toll Tax, State Tax, Driver Batta</div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Flight & train ticket</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Camera Charges</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Elephant Ride</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Room Service Fees</div>
                </div>
              </div>

              {/* Itinerary section simplified for brevity */}
              <div className="call-box-inner12">
                <h3>Itinerary : Delhi Agra Jaipur via Vrindavan Tour Package</h3>
                <h4><strong>Day 1:</strong> <span style={{ color: '#ec3323' }}>Delhi to Agra through Vrindavan</span></h4>
                <p>As you reach Delhi Airport... stay overnight.</p>

                <h4><strong>Day 2:</strong> <span style={{ color: '#ec3323' }}>Sightseeing in Agra</span></h4>
                <p>After breakfast... stay overnight in Delhi.</p>

                <h4><strong>Day 3:</strong> <span style={{ color: '#ec3323' }}>Delhi Sightseeing</span></h4>
                <p>In Delhi you can start your tour with... or avail your flight today.</p>

                <h4><strong>Day 4:</strong> <span style={{ color: '#ec3323' }}>Agra - Delhi</span></h4>
                <p>Complete your checkout formalities... take your drop at your convenient location in Delhi till 9 pm.</p>
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
                      ].map(([type, price], idx) => (
                        <tr key={idx}>
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
    </>
  );
};

export default Page;
