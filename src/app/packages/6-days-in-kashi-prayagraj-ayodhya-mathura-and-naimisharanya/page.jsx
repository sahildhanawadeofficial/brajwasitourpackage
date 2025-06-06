import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const DaysInKashiPrayagrajAyodhyaMathuraAndNaimisharanya = () => {
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
                      src="/images/mathura-vrindavan-gokul-goverdhan-barsana-nanndgaon.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
                      width={800}
                      height={400}
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
                  <strong><i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;</strong>
                  Kashi - Prayagraj - Ayodhya - Mathura - Naimisharanya
                </li>
                <li>
                  <strong><i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;</strong>
                  6-Day Grand Pilgrimage
                </li>
                <li>
                  <strong><i className="fa fa-car" aria-hidden="true"></i> Transport:&nbsp;</strong>
                  Hatchback - Sedan - SUV (Car)
                </li>
                <li>
                  <strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:&nbsp;</strong>
                  Breakfast & Dinner
                </li>
              </ul>

              <h2>Description:</h2>
              <p>
                This 6-days grand pilgrimage covers the most revered spiritual sites in North India. From the ghats of Kashi to the spiritual vibrance of Prayagraj, the divinity of Ayodhya, the mystical charm of Mathura, and the ancient wisdom of Naimisharanya, this tour promises a deeply transformative experience.
              </p>

              <div className="row mt-4">
                <div className="col-md-12 py-4">
                  <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  {[
                    'Accommodation in 3-star hotels (5 nights)',
                    'All transportation in AC vehicle',
                    'Guided tours in all cities',
                    'Daily vegetarian breakfast and dinner',
                    'Entry fees to temples and monuments',
                    'Boat rides in Varanasi and Mathura'
                  ].map((item, index) => (
                    <div key={index} className="flex-horizontal-center mb-3 text-gray-1">
                      <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i>&nbsp;{item}
                    </div>
                  ))}
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  {[
                    'Personal expenses (shopping, snacks)',
                    'Tips to guides/drivers',
                    'Additional meals not mentioned',
                    'Travel to and from the starting city (Varanasi)'
                  ].map((item, index) => (
                    <div key={index} className="flex-horizontal-center mb-3 text-gray-1">
                      <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i>&nbsp;{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary : 6-Day Grand Pilgrimage – Kashi, Prayagraj, Ayodhya, Mathura & Naimisharanya</h3>

                  {[
                    ['Day 1', 'Arrival in Varanasi (Kashi)', 'Arrive in Varanasi, check into your hotel, and relax. Visit the Kashi Vishwanath Temple and attend the Ganga Aarti at Dashashwamedh Ghat. Overnight stay in Varanasi.'],
                    ['Day 2', 'Varanasi Sightseeing & Transfer to Prayagraj', 'Enjoy an early morning boat ride on the Ganges, followed by visits to Sarnath and Bharat Mata Mandir. After lunch, proceed to Prayagraj (approx. 3-hour drive). Check into your hotel and relax. Overnight stay in Prayagraj.'],
                    ['Day 3', 'Prayagraj & Transfer to Ayodhya', 'Take a holy dip at Triveni Sangam and visit Anand Bhavan. Post-lunch, head to Ayodhya (approx. 4-hour drive). Check into your hotel and unwind. Overnight stay in Ayodhya.'],
                    ['Day 4', 'Ayodhya Exploration & Transfer to Naimisharanya', 'Explore Ram Janmabhoomi, Hanuman Garhi, and Kanak Bhawan. After lunch, proceed to Naimisharanya (approx. 3-hour drive). Check into your hotel and rest. Overnight stay in Naimisharanya.'],
                    ['Day 5', 'Naimisharanya to Mathura', 'Visit Chakratirth, Lalita Devi Temple, and Vyasa Gaddi. Post-lunch, drive to Mathura (approx. 5-hour drive). Check into your hotel, have dinner, and relax for the night.'],
                    ['Day 6', 'Mathura Sightseeing & Departure', 'Visit Krishna Janmabhoomi Temple, Dwarkadhish Temple, and Vishram Ghat. Enjoy a boat ride on the Yamuna before concluding your tour. After lunch, check out and transfer to the railway station/airport for your onward journey.']
                  ].map(([day, title, desc], index) => (
                    <div key={index} className="my-3">
                      <h4><strong>{day}</strong>: <span style={{ color: '#ec3323' }}>{title}</span></h4>
                      <p>{desc}</p>
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
                        ['45 Seater Bus', 'Ask For Price']
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

export default DaysInKashiPrayagrajAyodhyaMathuraAndNaimisharanya;
