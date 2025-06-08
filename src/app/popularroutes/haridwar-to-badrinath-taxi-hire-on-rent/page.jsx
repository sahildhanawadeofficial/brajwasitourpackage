import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/badrinath-dham.png";

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
                      alt="Haridwar to Badrinath Taxi Hire on Rent"
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
              <h2>Book Haridwar to Badrinath Taxi/Cab</h2>

              <p>Planning a divine journey to Badrinath from Haridwar? We offer reliable Haridwar to Badrinath taxi services for solo travelers, families, and groups. Enjoy a safe, scenic, and comfortable drive through the Himalayas with experienced drivers and well-maintained vehicles.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Haridwar To Badrinath Taxi Fare (Per KM)</h2>
                  <p>Below are the per km rates for different car categories. Toll, parking, and driver charges are extra.</p>
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
                  <h2>Haridwar to Badrinath Taxi – One Way and Round Trip</h2>
                  <p>These are fixed fare packages which include fuel, tolls, and driver allowances.</p>
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
                        <td>Rs. 6,999/-</td>
                        <td>Rs. 13,499/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 8,499/-</td>
                        <td>Rs. 15,999/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 9,999/-</td>
                        <td>Rs. 17,999/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Haridwar and Badrinath</h3>
                <p>The distance from Haridwar to Badrinath is approximately <strong>320 km</strong>. Travel time is around 10 to 12 hours depending on weather and road conditions.</p>

                <h3>Must-Visit Places Enroute & in Badrinath</h3>
                <ul>
                  <li>Rudraprayag, Karnaprayag, and Joshimath</li>
                  <li>Badrinath Temple</li>
                  <li>Tapt Kund (hot water spring)</li>
                  <li>Mana Village – India’s last village</li>
                  <li>Vasudhara Falls and Charan Paduka</li>
                </ul>

                <h3>Why Choose Our Haridwar to Badrinath Cab?</h3>
                <ul>
                  <li><strong>Certified Hill Drivers:</strong> Trained and experienced for tough terrains</li>
                  <li><strong>Safe & Clean Vehicles:</strong> Sanitized before every ride</li>
                  <li><strong>No Hidden Charges:</strong> Transparent fare and billing</li>
                  <li><strong>24x7 Customer Support:</strong> Book anytime, from anywhere</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>Can I book a cab for the Char Dham Yatra?</b></p>
                <p>Yes, we offer packages for Char Dham and Ek Dham (Badrinath only) trips.</p>

                <p><b>Is night travel allowed on this route?</b></p>
                <p>Due to hilly terrain and landslide-prone zones, night travel is not recommended and may be restricted in some areas.</p>

                <p><b>Are your taxis available for groups?</b></p>
                <p>Yes, we have larger vehicles like Innova Crysta and Tempo Travellers available on request.</p>

                <p><b>What documents are required for temple entry?</b></p>
                <p>A valid photo ID is usually required. For group bookings, carry photocopies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
