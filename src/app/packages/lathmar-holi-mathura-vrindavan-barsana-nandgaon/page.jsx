import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const LathmarHoliMathuraVrindavanBarsanaNandgaon = () => {
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
                      src="/tour/lathmar-holi-mathura.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
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
                  <strong><i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;&nbsp;</strong>
                  Mathura – Vrindavan – Barsana – Nandgaon
                </li>
                <li>
                  <strong><i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;&nbsp;</strong>
                  3-Days
                </li>
                <li>
                  <strong><i className="fa fa-car" aria-hidden="true"></i> Transport:</strong>&nbsp;&nbsp;Private AC Vehicle
                </li>
                <li>
                  <strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:</strong>&nbsp;&nbsp;Breakfast Included
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                Experience the vibrant and legendary Lathmar Holi in Barsana and Nandgaon, a unique celebration filled with colors, tradition, and devotion...
              </p>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <h5 className="font-weight-bold text-dark mb-3">Package Inclusion</h5>
                  {[
                    'Accommodation in a well-rated hotel (2 Nights)',
                    'Daily breakfast',
                    'Private transportation for the entire tour',
                    'Local guide for Holi celebrations',
                    'Entry fees to temples and special Holi events'
                  ].map((item, index) => (
                    <div className="flex-horizontal-center mb-3 text-gray-1" key={index}>
                      <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> {item}
                    </div>
                  ))}
                </div>

                <div className="col-md-6 mb-4">
                  <h5 className="font-weight-bold text-dark mb-3">Package Exclusion</h5>
                  {[
                    'Personal expenses (shopping, tips, etc.)',
                    'Camera/video charges at temples',
                    'Any meals not mentioned in inclusions',
                    'Travel insurance'
                  ].map((item, index) => (
                    <div className="flex-horizontal-center mb-3 text-gray-1" key={index}>
                      <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="row call-box-inner12">
                <h3>Itinerary : Lathmar Holi Tour – Barsana & Nandgaon Special</h3>

                <h4><strong>Day 1:</strong> <span style={{ color: '#EC3323' }}>Arrival in Mathura & Vrindavan – Immersing in the Holi Spirit</span></h4>
                <p>Upon arrival in Mathura, the birthplace of Lord Krishna, our tour begins with a visit to the Shri Krishna Janmabhoomi Temple...</p>

                <h4><strong>Day 2:</strong> <span style={{ color: '#EC3323' }}>Lathmar Holi in Barsana – The Ultimate Holi Experience</span></h4>
                <p>After an early breakfast, we embark on a journey to Barsana, the village of Radha, where the legendary Lathmar Holi takes place...</p>

                <h4><strong>Day 3:</strong> <span style={{ color: '#EC3323' }}>Nandgaon Holi & Departure</span></h4>
                <p>On the final day, after breakfast, we head to Nandgaon, Krishna’s village, where the Holi celebrations continue with a fascinating twist...</p>
              </div>

              <div className="mytable container">
                <h3>Pricing for Taxi/Cab Service</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Taxi Type</th>
                        <th>Price (Per Km)</th>
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
                      ].map(([type, price], index) => (
                        <tr key={index}>
                          <td>{type}</td>
                          <td>{price}</td>
                          <td>₹250/-</td>
                          <td>
                            <a href="#" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModal">
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

export default LathmarHoliMathuraVrindavanBarsanaNandgaon;
