import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';

const Days_braj_84_kos_yatra = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="/tour/7-days-braj.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
                    />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </div>

            <div className="blog-text">
              <ul>
                <li>
                  <strong><i className="fa fa-map-marker" aria-hidden="true" /> Destination:&nbsp;&nbsp;</strong>
                  Mathura Vrindavan - Barsana - Nandgaon - Govardhan - Gokul & More
                </li>
                <li>
                  <strong><i className="fa fa-clock-o" aria-hidden="true" /> Duration:&nbsp;&nbsp;</strong>
                  7-Days
                </li>
                <li>
                  <strong><i className="fa fa-car" aria-hidden="true" /> Transport:</strong>&nbsp;&nbsp;
                  AC Vehicle
                </li>
                <li>
                  <strong><i className="fa fa-cutlery" aria-hidden="true" /> Meal Plan:</strong>&nbsp;&nbsp;
                  Breakfast & Dinner
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                Embark on a sacred journey covering the 84 Kos Parikrama of Braj, a divine circumambulation of Mathura, Vrindavan, Barsana, Nandgaon, Govardhan, Gokul, and other sacred places associated with Lord Krishna...
              </p>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  {[
                    'AC transportation for the entire yatra',
                    'Accommodation in 3-star hotels',
                    'Guided temple visits and parikrama',
                    'Daily vegetarian breakfast and dinner',
                    'Entry fees to temples and sacred sites'
                  ].map((item, index) => (
                    <div className="flex-horizontal-center mb-3 text-gray-1" key={index}>
                      <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> {item}
                    </div>
                  ))}
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  {[
                    'Personal expenses (shopping, snacks)',
                    'Tips to guides/drivers',
                    'Additional meals not mentioned',
                    'Travel to and from Mathura (starting city)'
                  ].map((item, index) => (
                    <div className="flex-horizontal-center mb-3 text-gray-1" key={index}>
                      <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }} /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary : 7-Day Braj 84 Kos Yatra</h3>
                  <br />
                  {[
                    {
                      day: 'Day 1',
                      title: 'Arrival in Mathura & Temple Visits',
                      content:
                        'Upon arrival in Mathura, you will check into your hotel and prepare for a day of spiritual exploration...'
                    },
                    {
                      day: 'Day 2',
                      title: 'Vrindavan & Gokul Exploration',
                      content:
                        'Start your morning in Vrindavan, visiting the Banke Bihari Temple...'
                    },
                    {
                      day: 'Day 3',
                      title: 'Govardhan Parikrama & Radha Kund',
                      content:
                        'Begin your day early with the Govardhan Parikrama, a sacred 21 km circumambulation...'
                    },
                    {
                      day: 'Day 4',
                      title: 'Barsana & Nandgaon',
                      content:
                        'Your journey continues to Barsana, the village of Radha Rani...'
                    },
                    {
                      day: 'Day 5',
                      title: 'Baldeo & Radhakund Special Visit',
                      content:
                        'Travel to Baldeo, where you will visit Dauji Temple, dedicated to Balarama...'
                    },
                    {
                      day: 'Day 6',
                      title: 'Sacred Temples in Braj Region',
                      content:
                        'Explore Kokilavan, where the famous Shani Dev Temple is located...'
                    },
                    {
                      day: 'Day 7',
                      title: 'Departure with Final Darshan',
                      content:
                        'On your last day, visit the Krishna Janmabhoomi Temple for one final darshan...'
                    }
                  ].map((dayObj, index) => (
                    <div key={index}>
                      <h4>
                        <strong>{dayObj.day}</strong>&nbsp;:&nbsp;
                        <span style={{ color: 'rgb(236, 51, 35)' }}>{dayObj.title}</span>
                      </h4>
                      <br />
                      <p>{dayObj.content}</p>
                      <br />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mytable container">
                <h3>Pricing for Taxi/Cab Service</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Taxi Type</th>
                        <th>Price (Per KM)</th>
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
                        ['45 Seater Bus', 'Ask For Price']
                      ].map(([type, price], index) => (
                        <tr key={index}>
                          <td>{type}</td>
                          <td>{price}</td>
                          <td>₹250/-</td>
                          <td>
                            <a
                              href="#"
                              className="btn btn-danger btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
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

export default Days_braj_84_kos_yatra;
