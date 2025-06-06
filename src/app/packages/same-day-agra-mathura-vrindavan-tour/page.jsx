

import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const SameDayAgraMathuraVrindavanTour = () => {
  return (
    <>

      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      className="d-block w-100"
                      src="/tour/same-day-agra-mathura-vrindavan-tour.webp"
                      alt="Same Day Agra Mathura Vrindavan Tour"
                      width={1200}
                      height={600}
                      layout="responsive"
                    />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
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
                      <i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;&nbsp;
                    </strong>
                    Delhi - Agra - Mathura - Vrindavan - Delhi
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;&nbsp;
                    </strong>
                    Same Day
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-car" aria-hidden="true"></i> Transport:
                    </strong>
                    &nbsp;&nbsp;Hatchback - Sedan - SUV (Car)
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:
                    </strong>
                    &nbsp;&nbsp;Breakfast
                  </div>
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                The driver which we will provide will arrive at your convenient location in Delhi
                (6:00 A.M.) to pick you up then after a 2 hours drive, you will reach Mathura. You
                can start your{' '}
                <a
                  href="https://www.brajbhoomitourandtravels.com/same-day-agra-mathura-vrindavan-tour-package.html"
                  target="_blank"
                >
                  Same Day Agra Mathura Vrindavan Tour
                </a>{' '}
                from visiting Sri Krishna Janmasthan, Dwarikadheesh Temple... (continued as needed)
              </p>

              <div className="row py-4">
                <div className="col-md-12">
                  <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                    Package Inclusion | Exclusion
                  </h5>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  {['Guide Services', 'Entrance Fees', 'All transportation in destination location', 'Toll Tax, State Tax, Driver Batta ( Charges )'].map((item, i) => (
                    <div className="flex-horizontal-center mb-3 text-gray-1" key={i}>
                      <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> {item}
                    </div>
                  ))}
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  {['Flight & train ticket.', 'Camera Charges', 'Elephant Ride.', 'Room Service Fees'].map((item, i) => (
                    <div className="flex-horizontal-center mb-3 text-gray-1" key={i}>
                      <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary : Agra Mathura Vrindavan Tour Package</h3>
                  <h4>
                    <strong>Day 1</strong>
                    <span style={{ color: 'rgb(236, 51, 35)' }}>
                      : Early Morning Transfer to Mathura
                    </span>
                  </h4>
                  <p>
                    You will be picked up early in the morning (5:45 AM) from DELHI and you will
                    proceed towards Agra by Car via Yamuna Expressway...
                  </p>
                  <p>
                    After Lunch you can proceed for Mathura Enroute Visit Gokul... (etc.)
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
                      ].map(([type, price], i) => (
                        <tr key={i}>
                          <td>{type}</td>
                          <td>{price}</td>
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

export default SameDayAgraMathuraVrindavanTour;
