import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/kedarnath-dham.png";

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
                      alt="Haridwar to Kedarnath Taxi Hire on Rent"
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
              <h2>Book Haridwar to Kedarnath Taxi/Cab</h2>

              <p>Looking for a taxi from Haridwar to Kedarnath? Our reliable and comfortable taxi service ensures a smooth journey to one of the holiest shrines of Lord Shiva. Choose from multiple vehicle options and experienced hill drivers for a safe trip to Sonprayag or Gaurikund—the last drivable point before the trek to Kedarnath.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Haridwar To Kedarnath Taxi Fare (Per KM)</h2>
                  <p>Below are standard per kilometre rates. Toll, parking, and driver accommodation (if overnight) are extra.</p>
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
                  <h2>Haridwar to Kedarnath Taxi – One Way & Round Trip</h2>
                  <p>Fixed fare packages for pilgrims and tourists visiting Kedarnath Dham.</p>
                  <table border="1" width="100%">
                    <thead>
                      <tr>
                        <th>Select Car</th>
                        <th>One Way (to Sonprayag)</th>
                        <th>Round Trip</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SEDAN (Dzire/Etios)</td>
                        <td>Rs. 5,499/-</td>
                        <td>Rs. 10,999/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 6,999/-</td>
                        <td>Rs. 13,499/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 8,499/-</td>
                        <td>Rs. 15,499/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Haridwar and Kedarnath</h3>
                <p>The driving distance from Haridwar to Sonprayag (base point for Kedarnath trek) is approximately <strong>240 km</strong>. It usually takes 8–9 hours depending on traffic and weather.</p>

                <h3>Important Route Stops</h3>
                <ul>
                  <li>Devprayag – Confluence of Alaknanda and Bhagirathi rivers</li>
                  <li>Srinagar – Great for meals and rest</li>
                  <li>Rudraprayag – Junction for Kedarnath & Badrinath routes</li>
                  <li>Guptkashi – Popular overnight stay before Kedarnath trek</li>
                </ul>

                <h3>Why Choose Our Haridwar to Kedarnath Cab?</h3>
                <ul>
                  <li><strong>Comfortable Rides:</strong> Well-maintained AC/non-AC cars</li>
                  <li><strong>Experienced Drivers:</strong> Specialized in hilly terrain</li>
                  <li><strong>Transparent Charges:</strong> No hidden fees</li>
                  <li><strong>Flexible Options:</strong> One-way, round trip, group travel</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>Does the taxi go all the way to Kedarnath temple?</b></p>
                <p>No, taxis go only up to Sonprayag. From there, take a local jeep to Gaurikund and then trek 16 km to Kedarnath temple.</p>

                <p><b>Is overnight stay provided?</b></p>
                <p>We provide packages with night halt at Guptkashi or Sitapur if requested.</p>

                <p><b>Can I book a same-day return taxi?</b></p>
                <p>It is not recommended. Plan at least a 2-day trip for Kedarnath due to trekking time.</p>

                <p><b>Is Kedarnath accessible year-round?</b></p>
                <p>No, the temple is open only from late April/May to November due to heavy snowfall in winter.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
