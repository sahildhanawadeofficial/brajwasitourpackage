import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/yamunotri-yamuna-source.png";

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
                      alt="Rishikesh to Yamunotri Taxi Hire on Rent"
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
              <h2>Book Rishikesh to Yamunotri Taxi/Cab</h2>

              <p>Travel comfortably and safely from Rishikesh to the sacred shrine of Yamunotri with our reliable taxi services. Enjoy the scenic Himalayan route with experienced drivers who know the terrain well.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Rishikesh To Yamunotri Taxi Fare (Per KM)</h2>
                  <p>Transparent pricing per kilometer, with no hidden charges. Toll and parking fees will be extra as per actuals.</p>
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
                        <td>Rs. 14/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                      <tr>
                        <td>Ertiga</td>
                        <td>Rs. 16/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                      <tr>
                        <td>Innova</td>
                        <td>Rs. 19/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 21/KM</td>
                        <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Rishikesh to Yamunotri Cab – One Way & Round Trip</h2>
                  <p>Choose between one-way and round-trip taxi options for a hassle-free pilgrimage or sightseeing experience.</p>
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
                        <td>Rs. 3,199/-</td>
                        <td>Rs. 5,999/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 3,599/-</td>
                        <td>Rs. 6,799/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 3,999/-</td>
                        <td>Rs. 7,499/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Rishikesh and Yamunotri</h3>
                <p>The distance is about <strong>150 km</strong> and the journey usually takes <strong>5 to 6 hours</strong>, depending on road and weather conditions.</p>

                <h3>Popular Stops Enroute</h3>
                <ul>
                  <li>Devprayag – The sacred confluence of rivers Alaknanda and Bhagirathi</li>
                  <li>Uttarkashi – Important town before Yamunotri</li>
                  <li>Janki Chatti – Last motorable point before the trek to Yamunotri</li>
                </ul>

                <h3>Why Choose Our Rishikesh to Yamunotri Taxi Service?</h3>
                <ul>
                  <li><strong>Experienced Drivers:</strong> Skilled in mountain driving and familiar with local routes</li>
                  <li><strong>Comfort & Safety:</strong> Sanitized and well-maintained vehicles for a safe journey</li>
                  <li><strong>Transparent Pricing:</strong> No hidden fees; clear and competitive fares</li>
                  <li><strong>Flexible Options:</strong> One-way and round-trip taxi rentals tailored to your needs</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>How can I book the taxi?</b></p>
                <p>You can book online through the inquiry form or call us directly. We recommend booking in advance, especially during peak pilgrimage seasons.</p>

                <p><b>Are toll and parking charges included?</b></p>
                <p>No, toll and parking charges are extra and charged as per actuals.</p>

                <p><b>Do you offer pickups from Rishikesh railway station or airport?</b></p>
                <p>Yes, we provide pickups from Rishikesh railway station, airport, or any other specified location.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
