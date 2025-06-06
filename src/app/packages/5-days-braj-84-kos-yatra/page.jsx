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
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="tour/7-days-braj.webp" alt="Delhi Agra Jaipur via Vrindavan tour" />
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
                    <strong><i className="fa fa-map-marker" aria-hidden="true"></i>Destination:&nbsp;&nbsp;</strong>Mathura Vrindavan - Gokul - Govardhan - Barsana - Nandgaon & More
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-clock-o" aria-hidden="true"></i>Duration:&nbsp;&nbsp;</strong>5-Days
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-car" aria-hidden="true"></i>Transport:</strong>&nbsp;&nbsp;AC Vehicle
                  </div>
                </li>
                <li>
                  <div>
                    <strong><i className="fa fa-cutlery" aria-hidden="true"></i>Meal Plan:</strong>&nbsp;&nbsp;Breakfast & Dinner
                  </div>
                </li>
              </ul>
              <h2>Description :</h2>

              <p>
                Braj 84 Kos Yatra is a sacred pilgrimage covering the revered sites associated with
                Lord Krishna in the Braj region. This spiritual journey spans approximately 252 km
                (84 Kos) and includes visits to temples, kunds (sacred ponds), and divine
                leelasthalis (pastime places) of Lord Krishna. Pilgrims walk or travel through these
                sites, experiencing divine bliss and devotion. The yatra includes the holy towns of
                Mathura, Vrindavan, Gokul, Govardhan, Barsana, Nandgaon, and many more, offering a
                deep spiritual connection with Lord Krishna's pastimes.
              </p>
              <br />
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> AC transportation for the entire yatra
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Accommodation in 3-star hotels
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Guided temple visits and parikrama
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Daily vegetarian breakfast and dinner
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Entry fees to temples and sacred sites
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Personal expenses (shopping, snacks)
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Tips to guides/drivers
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Additional meals not mentioned
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Travel to and from Mathura (starting city)
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="call-box-inner12">

                  <h3>Itinerary : 5-Day Braj 84 Kos Yatra</h3>
                  <br />
                  <h4><strong>Day 1</strong>&nbsp;:&nbsp;<span style={{ color: 'rgb(236, 51, 35)' }}>Mathura Vrindavan – Gokul – Mahavan</span></h4>
                  <br />
                  <p>The journey begins in Mathura, the birthplace of Lord Krishna...</p>
                  <br />
                  <h4><strong>Day 2</strong>&nbsp;:&nbsp;<span style={{ color: 'rgb(236, 51, 35)' }}>Govardhan – Radha Kund – Kusum Sarovar – Barsana</span></h4>
                  <br />
                  <p>Day two begins with a visit to Govardhan Hill...</p>
                  <br />
                  <h4><strong>Day 3</strong>&nbsp;:&nbsp;<span style={{ color: 'rgb(236, 51, 35)' }}>Nandgaon – Kosi – Raval – Baldev (Dauji)</span></h4>
                  <br />
                  <p>On the third day, we visit Nandgaon...</p>
                  <br />
                  <h4><strong>Day 4</strong>&nbsp;:&nbsp;<span style={{ color: 'rgb(236, 51, 35)' }}>Kamyavan – Vrindavan (Revisit) – Gahvar Van</span></h4>
                  <br />
                  <p>Day four begins with a visit to Kamyavan...</p>
                  <br />
                  <h4><strong>Day 5</strong>&nbsp;:&nbsp;<span style={{ color: 'rgb(236, 51, 35)' }}>Radhakund – Surya Kund – Varaha Kund – Completion of Yatra</span></h4>
                  <br />
                  <p>The final day of the yatra takes us to Radhakund...</p>
                  <br />
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
                        { type: 'Sedan', price: '₹11/km' },
                        { type: 'Ertiga', price: '₹13/km' },
                        { type: 'Kia', price: '₹16/km' },
                        { type: 'Innova', price: '₹18/km' },
                        { type: 'Innova Crysta', price: '₹18/km' },
                        { type: '12 Seater Tempo Traveller', price: '₹22/km' },
                        { type: 'Mini Bus', price: 'Ask For Price' },
                        { type: '45 Seater Bus', price: 'Ask For Price' },
                      ].map((item, index) => (
                        <tr key={index}>
                          <td>{item.type}</td>
                          <td>{item.price}</td>
                          <td>₹250/-</td>
                          <td><a href="#" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModal">Enquiry Now</a></td>
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
