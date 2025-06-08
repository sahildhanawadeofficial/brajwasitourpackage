import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/ranikhet-golf-temple.png";

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
                      alt="Kathgodam to Ranikhet Taxi Hire on Rent"
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
              <h2>Book Kathgodam to Ranikhet Taxi/Cab</h2>

              <p>Need a hassle-free taxi from Kathgodam to Ranikhet? Our reliable taxi service offers comfortable and safe rides from Kathgodam Railway Station or city locations to the serene hill station of Ranikhet. Enjoy the scenic Himalayan route with professional drivers and clean vehicles.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Kathgodam To Ranikhet Taxi Fare (Per KM)</h2>
                  <p>Pricing is distance-based. Additional charges for tolls, parking, and driver allowances may apply.</p>
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
                        <td>Rs. 11/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                      <tr>
                        <td>Ertiga</td>
                        <td>Rs. 13/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                      <tr>
                        <td>Innova</td>
                        <td>Rs. 16/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 18/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Kathgodam to Ranikhet Cab – One Way & Round Trip</h2>
                  <p>Perfect for tourists and groups looking for a convenient and comfortable trip to Ranikhet. Choose from one-way or round trip options at competitive rates.</p>
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
                        <td>Rs. 1,199/-</td>
                        <td>Rs. 2,199/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 1,499/-</td>
                        <td>Rs. 2,799/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 1,899/-</td>
                        <td>Rs. 3,499/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Kathgodam and Ranikhet</h3>
                <p>The approximate driving distance is <strong>60 km</strong>, with a travel time of around <strong>2 hours</strong>, depending on traffic and weather conditions.</p>

                <h3>Popular Attractions Enroute</h3>
                <ul>
                  <li>Kathgodam Market</li>
                  <li>Binsar Wildlife Sanctuary</li>
                  <li>Jhula Devi Temple</li>
                </ul>

                <h3>Why Choose Our Kathgodam to Ranikhet Taxi Service?</h3>
                <ul>
                  <li><strong>Professional Drivers:</strong> Experienced in hill driving and local routes</li>
                  <li><strong>Comfort & Safety:</strong> Well-maintained and sanitized vehicles</li>
                  <li><strong>Affordable Pricing:</strong> Transparent fares with no hidden charges</li>
                  <li><strong>Flexible Booking:</strong> Easy one-way and round-trip options</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>How do I book the taxi?</b></p>
                <p>You can book via our online form or call our support team. Advance booking is recommended.</p>

                <p><b>Are toll and parking charges included?</b></p>
                <p>Toll and parking charges are extra and will be charged as applicable.</p>

                <p><b>Can I get a pickup from Kathgodam railway station?</b></p>
                <p>Yes, we offer pickup from Kathgodam railway station or any other local address.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
