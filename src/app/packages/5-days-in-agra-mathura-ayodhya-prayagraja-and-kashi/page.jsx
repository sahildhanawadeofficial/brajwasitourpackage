'use client';

import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const DaysInAgraMathuraAyodhyaPrayagrajKashi = () => {
  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <div className="single-blog">
          <div className="blog-image">
            <div id="carouselExampleControls" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    className="d-block w-100"
                    src="/tour/5-days-in-agra-mathura.webp"
                    alt="Delhi Agra Jaipur via Vrindavan tour"
                    width={800}
                    height={450}
                    layout="responsive"
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next" type="button">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>

          <div className="blog-text">
            <ul>
              <li>
                <strong><i className="fa fa-map-marker" aria-hidden="true" /> Destination:</strong> Agra - Mathura - Ayodhya - Prayagraj - Kashi
              </li>
              <li>
                <strong><i className="fa fa-clock-o" aria-hidden="true" /> Duration:</strong> 5-Days Divine Circuit
              </li>
              <li>
                <strong><i className="fa fa-car" aria-hidden="true" /> Transport:</strong> Hatchback - Sedan - SUV (Car)
              </li>
              <li>
                <strong><i className="fa fa-cutlery" aria-hidden="true" /> Meal Plan:</strong> Breakfast & Dinner
              </li>
            </ul>

            <h2>Description:</h2>
            <p>
              This 5-day tour offers a perfect blend of historical wonders and spiritual sanctity. Visit the Taj Mahal in Agra, immerse yourself in the divine energy of Mathura and Ayodhya, take a holy dip at the Triveni Sangam in Prayagraj, and experience the timeless spirituality of Kashi.
            </p>

            <div className="row py-4">
              <div className="col-md-6 mb-4">
                <h5>Package Inclusions</h5>
                <ul className="text-gray-1">
                  {[
                    "Accommodation in 3-star hotels (4 nights)",
                    "All transportation in AC vehicle",
                    "Guided tours in all cities",
                    "Daily vegetarian breakfast and dinner",
                    "Entry fees to monuments and temples",
                    "Boat rides in Mathura and Varanasi",
                  ].map((item, index) => (
                    <li key={index}>
                      <i className="fa fa-check" style={{ color: 'green', fontSize: 20 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-6 mb-4">
                <h5>Package Exclusions</h5>
                <ul className="text-gray-1">
                  {[
                    "Personal expenses (shopping, snacks)",
                    "Tips to guides/drivers",
                    "Additional meals not mentioned",
                    "Travel to and from the starting city (Agra)",
                  ].map((item, index) => (
                    <li key={index}>
                      <i className="fa fa-close" style={{ color: 'red', fontSize: 20 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="call-box-inner12">
              <h3>Itinerary: 5-Days Divine Circuit – Agra, Mathura, Ayodhya, Prayagraj & Kashi</h3>

              {[
                {
                  day: 1,
                  title: 'Arrival in Agra & Sightseeing',
                  desc: 'Arrive in Agra and check into your hotel. Visit the Taj Mahal, Agra Fort, and Mehtab Bagh for a sunset view. Dinner and overnight stay in Agra.',
                },
                {
                  day: 2,
                  title: 'Agra to Mathura',
                  desc: 'Visit Krishna Janmabhoomi Temple, Dwarkadhish Temple, Yamuna boat ride, Govardhan Hill, and Radha Kund. Dinner and overnight in Mathura.',
                },
                {
                  day: 3,
                  title: 'Mathura to Ayodhya',
                  desc: 'Visit Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, and attend Saryu Aarti. Overnight in Ayodhya.',
                },
                {
                  day: 4,
                  title: 'Ayodhya to Prayagraj & Varanasi',
                  desc: 'Visit Triveni Sangam, Anand Bhavan, Allahabad Fort. Continue to Varanasi for evening Ganga Aarti. Overnight in Varanasi.',
                },
                {
                  day: 5,
                  title: 'Varanasi Sightseeing & Departure',
                  desc: 'Morning boat ride, Kashi Vishwanath Temple, Sarnath. Departure post lunch.',
                },
              ].map((item) => (
                <div key={item.day}>
                  <h4><strong>Day {item.day}</strong>: <span style={{ color: '#ec3323' }}>{item.title}</span></h4>
                  <p>{item.desc}</p>
                </div>
              ))}
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
                      { type: 'Sedan', price: '₹11/km' },
                      { type: 'Ertiga', price: '₹13/km' },
                      { type: 'Kia', price: '₹16/km' },
                      { type: 'Innova', price: '₹18/km' },
                      { type: 'Innova Crysta', price: '₹18/km' },
                      { type: '12 Seater Tempo Traveller', price: '₹22/km' },
                      { type: 'Mini Bus', price: 'Ask For Price' },
                      { type: '45 Seater Bus', price: 'Ask For Price' },
                    ].map(({ type, price }, index) => (
                      <tr key={index}>
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

export default DaysInAgraMathuraAyodhyaPrayagrajKashi;
