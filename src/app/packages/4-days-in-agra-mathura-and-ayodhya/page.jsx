'use client';

import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <div className="single-blog">
          <div className="blog-image">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    className="d-block w-100"
                    src="/tour/4-days-in-agra.webp"
                    alt="Delhi Agra Jaipur via Vrindavan tour"
                    width={1000}
                    height={600}
                    layout="responsive"
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="blog-text">
            <ul>
              <li>
                <strong><i className="fa fa-map-marker" aria-hidden="true" /> Destination:&nbsp;</strong>
                Agra - Mathura - Ayodhya
              </li>
              <li>
                <strong><i className="fa fa-clock-o" aria-hidden="true" /> Duration:&nbsp;</strong>
                4-Days Heritage & Pilgrimage Tour
              </li>
              <li>
                <strong><i className="fa fa-car" aria-hidden="true" /> Transport:&nbsp;</strong>
                Hatchback - Sedan - SUV (Car)
              </li>
              <li>
                <strong><i className="fa fa-cutlery" aria-hidden="true" /> Meal Plan:&nbsp;</strong>
                Breakfast & Dinner
              </li>
            </ul>

            <h2>Description :</h2>
            <p>
              This 4-days tour blends India’s rich historical heritage with its spiritual roots.
              Visit the iconic Taj Mahal in Agra, explore the birthplace of Lord Krishna in Mathura,
              and immerse yourself in the divine ambiance of Ayodhya, the land of Lord Rama.
              Perfect for those seeking a balance between historical exploration and spiritual discovery.
            </p>

            <div className="row py-4">
              <div className="col-md-12">
                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
              </div>

              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                {[
                  'Accommodation in 3-star hotels (3 nights)',
                  'All transportation in AC vehicle',
                  'Guided tours in Agra, Mathura, and Ayodhya',
                  'Daily vegetarian breakfast and dinner',
                  'Entry fees to monuments and temples',
                  'Boat ride in Mathura',
                ].map((item, i) => (
                  <div key={i} className="d-flex align-items-center mb-2 text-gray-1">
                    <i className="fa fa-check me-2" style={{ fontSize: 24, color: 'green' }}></i> {item}
                  </div>
                ))}
              </div>

              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                {[
                  'Personal expenses (shopping, snacks)',
                  'Tips to guides/drivers',
                  'Additional meals not mentioned',
                  'Travel to and from the starting city (Agra)',
                ].map((item, i) => (
                  <div key={i} className="d-flex align-items-center mb-2 text-gray-1">
                    <i className="fa fa-close me-2" style={{ fontSize: 24, color: 'red' }}></i> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="call-box-inner12">
              <h3>Itinerary : 4-Day Heritage & Pilgrimage Tour – Agra, Mathura & Ayodhya</h3>

              {[
                {
                  day: 'Day 1',
                  title: 'Arrival in Agra & Sightseeing',
                  desc:
                    'Arrive in Agra and check into your hotel. Visit the Taj Mahal, the epitome of love, and the Agra Fort, a UNESCO World Heritage site. After lunch, explore Mehtab Bagh for a sunset view of the Taj Mahal. Dinner and overnight stay in Agra.',
                },
                {
                  day: 'Day 2',
                  title: 'Agra to Mathura',
                  desc:
                    'After breakfast, depart for Mathura (approx. 1-hour drive). Visit the Krishna Janmabhoomi Temple, Dwarkadhish Temple, and Vishram Ghat. Enjoy a boat ride on the Yamuna River. Post lunch, explore Govardhan Hill and Radha Kund. Return to Mathura for dinner and overnight stay.',
                },
                {
                  day: 'Day 3',
                  title: 'Mathura to Ayodhya',
                  desc:
                    'Post breakfast, drive to Ayodhya (approx. 5-hour drive). Check into your hotel and relax. Visit Ram Janmabhoomi, Hanuman Garhi, and Kanak Bhawan. Attend the evening aarti on the banks of the Saryu River. Dinner and overnight stay in Ayodhya.',
                },
                {
                  day: 'Day 4',
                  title: 'Ayodhya & Departure',
                  desc:
                    'After breakfast, explore remaining sites in Ayodhya or indulge in personal activities. Post lunch, check out and transfer to the nearest railway station/airport for your onward journey.',
                },
              ].map((item, i) => (
                <div key={i}>
                  <h4>
                    <strong>{item.day}</strong>: <span style={{ color: 'rgb(236, 51, 35)' }}>{item.title}</span>
                  </h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mytable container mt-5">
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
                      ['Sedan', '₹11/km', '₹250/-'],
                      ['Ertiga', '₹13/km', '₹250/-'],
                      ['Kia', '₹16/km', '₹250/-'],
                      ['Innova', '₹18/km', '₹250/-'],
                      ['Innova Crysta', '₹18/km', '₹250/-'],
                      ['12 Seater Tempo Traveller', '₹22/km', '₹250/-'],
                      ['Mini Bus', 'Ask For Price', '₹250/-'],
                      ['45 Seater Bus', 'Ask For Price', '₹250/-'],
                    ].map(([type, price, driver], i) => (
                      <tr key={i}>
                        <td>{type}</td>
                        <td>{price}</td>
                        <td>{driver}</td>
                        <td>
                          <button className="btn btn-danger btn-sm" type="button">
                            Enquiry Now
                          </button>
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
