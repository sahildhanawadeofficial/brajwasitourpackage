
import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const Page = () => {
  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <div className="single-blog">
          <div className="blog-image">
            <Image
              src="/tour/mathura-bharatpur-tour.webp"
              alt="Mathura Bharatpur Tour"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="blog-text">
            <ul>
              <li>
                <div>
                  <strong>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;&nbsp;
                  </strong>
                  1 Nights | 2 Day
                </div>
              </li>
              <li>
                <div>
                  <strong>
                    <i className="fa fa-clock-o" aria-hidden="true"></i> Route:&nbsp;&nbsp;
                  </strong>
                  Delhi - Mathura - Vrindavan - Bharatpur - Delhi
                </div>
              </li>
              <li>
                <div>
                  <strong>
                    <i className="fa fa-car" aria-hidden="true"></i> Transport :
                  </strong>
                  &nbsp; Hatchback - Sedan - SUV (Car)
                </div>
              </li>
              <li>
                <div>
                  <strong>
                    <i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:
                  </strong>
                  &nbsp; Breakfast
                </div>
              </li>
            </ul>

            <h2>Description :</h2>
            <p>
              The Bharatpur-Mathura Tour includes Bharatpur, Mathura and Agra. These lively cities have the
              most historic destinations for tourists as well as the local natives...
            </p>

            <div className="row py-4">
              <div className="col-md-12">
                <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                  Package Inclusion | Exclusion
                </h5>
              </div>

              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                {['Guide Services', 'Entrance Fees', 'All transportation in destination location', 'Toll Tax, State Tax, Driver Batta (Charges)'].map((item, idx) => (
                  <div key={idx} className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'green' }}></i> {item}
                  </div>
                ))}
              </div>

              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                {['Flight & train ticket.', 'Camera Charges', 'Elephant Ride.', 'Room Service Fees'].map((item, idx) => (
                  <div key={idx} className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'red' }}></i> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="call-box-inner12">
              <h3>Itinerary : 2 Days Mathura Tour With Bharatpur</h3>

              <h4>
                <strong>Day 1</strong>&nbsp;:&nbsp;
                <span style={{ color: 'rgb(236, 51, 35)' }}>Delhi to Bharatpur</span>
              </h4>
              <p>
                Bharatpur is quite close to Delhi. The journey for this tour begins from here...
              </p>

              <h4>
                <strong>Day 2</strong>&nbsp;:&nbsp;
                <span style={{ color: 'rgb(236, 51, 35)' }}>Mathura - Gokul - Vrindavan</span>
              </h4>
              <p>
                The next day, after you take your breakfast you can start your tour...
              </p>
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
                      ['45 Seater Bus', 'Ask For Price']
                    ].map(([type, price], index) => (
                      <tr key={index}>
                        <td>{type}</td>
                        <td>{price}</td>
                        <td>₹250/-</td>
                        <td>
                          <button className="btn btn-danger btn-sm">Enquiry Now</button>
                          {/* Replace with modal logic or routing */}
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
