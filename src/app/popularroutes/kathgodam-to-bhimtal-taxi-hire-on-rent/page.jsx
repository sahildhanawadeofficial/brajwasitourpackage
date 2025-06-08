import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/kathgodam-to-bhimtal-taxi-hire-on-rent-1.webp";

const Page = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      className="d-block w-100"
                      src={taxiImage}
                      alt="Kathgodam to Bhimtal Taxi Hire on Rent"
                      width={800}
                      height={500}
                      priority
                    />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button">
                  <FiChevronLeft size={32} className="text-dark" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button">
                  <FiChevronRight size={32} className="text-dark" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="blog-text">
              <h2>Book Kathgodam to Bhimtal Taxi/Cab</h2>

              <p>Looking for a reliable taxi from Kathgodam to Bhimtal? Whether you're traveling for leisure or work, our cabs offer the most comfortable and convenient way to reach Bhimtal from Kathgodam. Enjoy the scenic beauty of the Kumaon hills as our experienced drivers take you on a smooth ride to your destination.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Kathgodam To Bhimtal Taxi Fare (Per KM)</h2>
                  <p>We offer transparent pricing on per kilometer basis. Toll, parking, and driver charges are extra (if applicable).</p>
                  <table border="1" width="100%">
                    <thead>
                      <tr>
                        <th>Select Car</th>
                        <th>Price</th>
                        <th>Booking Now</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Swift Dzire</td>
                        <td>Rs. 10/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                      <tr>
                        <td>Ertiga</td>
                        <td>Rs. 12/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                      <tr>
                        <td>Innova</td>
                        <td>Rs. 15/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 17/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Kathgodam to Bhimtal Taxi – One Way & Round Trip</h2>
                  <p>Ideal for tourists visiting Bhimtal Lake, resorts, or nearby attractions. One-way and return trip packages available at fixed prices.</p>
                  <table border="1" width="100%">
                    <thead>
                      <tr>
                        <th>Select Car</th>
                        <th>One Way</th>
                        <th>Round Trip</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SEDAN (Dzire/Etios)</td>
                        <td>Rs. 999/-</td>
                        <td>Rs. 1,899/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 1,299/-</td>
                        <td>Rs. 2,499/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 1,699/-</td>
                        <td>Rs. 3,199/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Kathgodam and Bhimtal</h3>
                <p>The driving distance is only around <strong>22 km</strong>, and it takes about <strong>45 minutes</strong> to reach Bhimtal by road depending on traffic and weather.</p>

                <h3>Popular Enroute Spots</h3>
                <ul>
                  <li>Gaula River Viewpoints</li>
                  <li>Tea Gardens and Hill Views</li>
                  <li>Lake View Points near Bhimtal</li>
                </ul>

                <h3>Why Choose Our Kathgodam to Bhimtal Taxi?</h3>
                <ul>
                  <li><strong>Reliable Service:</strong> On-time pickup and drop</li>
                  <li><strong>Local Drivers:</strong> Knowledge of terrain and tourist spots</li>
                  <li><strong>Clean Cars:</strong> Sanitized and well-maintained cabs</li>
                  <li><strong>Budget-Friendly:</strong> Best value for short-distance travel</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>Can I book a same-day return trip?</b></p>
                <p>Yes, Bhimtal is close enough for a comfortable same-day return. You can opt for a round trip while booking.</p>

                <p><b>Are there any stops along the way?</b></p>
                <p>You may request a quick stop for photos or tea; extra waiting time will be chargeable after a grace period.</p>

                <p><b>Do you offer luxury or tempo traveller vehicles?</b></p>
                <p>Yes, on request we can provide tempo travellers, luxury cars, and larger group vehicles for family or corporate travel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
