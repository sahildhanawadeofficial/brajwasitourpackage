'use client';
import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';

const DaysInKashiAyodhyaPrayagrajAndMathura = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            {/* Carousel Section */}
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="/tour/5-days-in-kashi-ayodhya.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
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

            {/* Tour Details */}
            <div className="blog-text">
              <ul>
                <li>
                  <strong>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;&nbsp;
                  </strong>
                  Kashi - Ayodhya - Prayagraj - Mathura
                </li>
                <li>
                  <strong>
                    <i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;&nbsp;
                  </strong>
                  5-Days Spiritual Sojourn
                </li>
                <li>
                  <strong>
                    <i className="fa fa-car" aria-hidden="true"></i> Transport:
                  </strong>
                  &nbsp;&nbsp;Hatchback - Sedan - SUV (Car)
                </li>
                <li>
                  <strong>
                    <i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:
                  </strong>
                  &nbsp;&nbsp;Breakfast & Dinner
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                This 5-days pilgrimage tour offers an immersive journey into the sacred cities of
                Kashi, Ayodhya, Prayagraj, and Mathura. Experience the spiritual vibrance of
                Varanasi’s ghats, the divine aura of Ram Janmabhoomi in Ayodhya, the confluence of
                sacred rivers in Prayagraj, and the birthplace of Lord Krishna in Mathura.
              </p>

              {/* Inclusions & Exclusions */}
              <div className="row py-4">
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  {[
                    'Accommodation in well-rated hotels',
                    'All transportation in AC vehicle',
                    'Guided city tours and temple visits',
                    'Boating experience in Kashi and Mathura',
                    '2 Vegetarian meals per day (Breakfast & Dinner)',
                    'Entry fees to temples and monuments',
                    'Professional tour guide services',
                  ].map((item, i) => (
                    <div key={i} className="flex-horizontal-center mb-3 text-gray-1">
                      <i className="fa fa-check" style={{ fontSize: '24px', color: 'green' }}></i> {item}
                    </div>
                  ))}
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  {[
                    'Personal expenses (shopping, snacks)',
                    'Tips to guides/drivers',
                    'Additional meals not mentioned',
                    'Travel to and from the starting point of the tour',
                  ].map((item, i) => (
                    <div key={i} className="flex-horizontal-center mb-3 text-gray-1">
                      <i className="fa fa-close" style={{ fontSize: '24px', color: 'red' }}></i> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary Section */}
              <div className="call-box-inner12">
                <h3>Itinerary : 5-Days in Kashi, Ayodhya, Prayagraj & Mathura</h3>
                <br />
                {[
                  {
                    day: 'Day 1',
                    title: 'Arrival in Varanasi (Kashi)',
                    desc: `Arrive in Varanasi, check into your hotel and visit the Kashi Vishwanath Temple. In the evening, witness the Ganga Aarti at Dashashwamedh Ghat.`,
                  },
                  {
                    day: 'Day 2',
                    title: 'Varanasi Sightseeing & Transfer to Ayodhya',
                    desc: `Morning boat ride on the Ganges. Visit Sarnath. Post-lunch, drive to Ayodhya. Overnight stay in Ayodhya.`,
                  },
                  {
                    day: 'Day 3',
                    title: 'Ayodhya Exploration & Transfer to Prayagraj',
                    desc: `Explore Ram Janmabhoomi and Hanuman Garhi. After lunch, head to Prayagraj. Overnight stay there.`,
                  },
                  {
                    day: 'Day 4',
                    title: 'Prayagraj Sightseeing & Transfer to Mathura',
                    desc: `Visit Triveni Sangam and Anand Bhavan. Later, travel to Mathura. Overnight stay in Mathura.`,
                  },
                  {
                    day: 'Day 5',
                    title: 'Mathura & Departure',
                    desc: `Visit Krishna Janmabhoomi and Dwarkadhish Temple. Post lunch, depart for airport/railway station.`,
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h4>
                      <strong>{item.day}</strong> :{' '}
                      <span style={{ color: 'rgb(236, 51, 35)' }}>{item.title}</span>
                    </h4>
                    <p>{item.desc}</p>
                    <br />
                  </div>
                ))}
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
                      ].map((taxi, i) => (
                        <tr key={i}>
                          <td>{taxi.type}</td>
                          <td>{taxi.price}</td>
                          <td>₹250/-</td>
                          <td>
                            <a
                              href="#"
                              className="btn btn-danger btn-sm"
                              data-toggle="modal"
                              data-target="#exampleModal"
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

              {/* Quick Inquiry Component */}
              <QuickInquiry />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaysInKashiAyodhyaPrayagrajAndMathura;
