import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';
import Image from 'next/image';

const HaridwarRishikeshReligiousTour = () => {
  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <div className="single-blog">
          <div className="blog-image">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="/tour/haridwar-rishikesh-tour-with-mathura.webp"
                    alt="Haridwar Rishikesh tour with Mathura"
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
                <div><strong><i className="fa fa-map-marker" aria-hidden="true"></i> Duration:&nbsp;&nbsp;</strong>6 Nights | 7 Days</div>
              </li>
              <li>
                <div><strong><i className="fa fa-clock-o" aria-hidden="true"></i> Destination:&nbsp;&nbsp;</strong>Delhi - Mathura - Vrindavan - Haridwar - Rishikesh</div>
              </li>
              <li>
                <div><strong><i className="fa fa-car" aria-hidden="true"></i> Transport:</strong>&nbsp;Hatchback - Sedan - SUV</div>
              </li>
              <li>
                <div><strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:</strong>&nbsp;Breakfast</div>
              </li>
            </ul>

            <h2>Description :</h2>
            <p>
              Our Chauffeur/Driver will come to your desired location in Delhi (6:00 A.M.) and begin the drive to Mathura. Visit Sri Krishna Janamsthan, Dwarikadheesh Temple. In the afternoon, proceed to Gokul, covering Chinta Haran Temple, Brahmand Ghat, Gokul Temple, Chaurasi Khamba, then head to Goverdhan (Goverdhan Temple, Radha Kund, Kusum Sarovar). Evening Yamuna Aarti at Vishram Ghat, Mathura. Overnight stay.
            </p>

            <div className="row py-4">
              <div className="col-md-12">
                <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                  Package Inclusion | Exclusion
                </h5>
              </div>

              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                {['Guide Services', 'Entrance Fees', 'All transportation in destination location', 'Toll Tax, State Tax, Driver Batta (Charges)'].map((item, index) => (
                  <div key={index} className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> {item}
                  </div>
                ))}
              </div>

              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                {['Flight & train ticket.', 'Camera Charges', 'Elephant Ride.', 'Room Service Fees'].map((item, index) => (
                  <div key={index} className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="call-box-inner12">
                <h3>Itinerary : Haridwar Rishikesh With Agra Mathura Vrindavan</h3>
                <br />
                {[
                  ['Day 1', 'Delhi to Agra (220 kms / 5 hrs)', 'Meet at New Delhi Railway Station / Airport and transfer to Agra...'],
                  ['Day 2', 'Agra to Vrindavan (75 kms/ 2 Hrs)', 'Morning visit Taj Mahal for Sunrise View...'],
                  ['Day 3', 'Mathura Vrindavan Sightseeing', 'Wake up early in the morning...'],
                  ['Day 4', 'Vrindavan to Haridwar (350 kms/ 8 - 9 hrs)', 'Morning after Delicious breakfast...'],
                  ['Day 5', 'Haridwar Sightseeing', 'Morning after breakfast, Full day sightseeing of Haridwar...'],
                  ['Day 6', 'Haridwar to Rishikesh & Return (30 kms drive one way)', 'Morning after breakfast full day sightseeing of Rishikesh...'],
                  ['Day 7', 'Haridwar – Delhi', 'After breakfast you can take holy bath in River Ganga...']
                ].map(([day, title, description], index) => (
                  <div key={index}>
                    <h4><strong>{day}</strong> : <span style={{ color: '#ec3323' }}>{title}</span></h4>
                    <p>{description}</p>
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
  );
};

export default HaridwarRishikeshReligiousTour;
