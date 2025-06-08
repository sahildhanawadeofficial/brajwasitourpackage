import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/gangotri-ganga-origin.png";

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
                      alt="Rishikesh to Gangotri Taxi Hire on Rent"
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
              <h2>Book Rishikesh to Gangotri Taxi/Cab</h2>

              <p>Planning a pilgrimage or adventure trip from Rishikesh to Gangotri? Hire a reliable taxi from us to enjoy a safe, comfortable, and scenic journey through the Himalayan foothills. Our experienced drivers ensure timely and hassle-free travel to the sacred town of Gangotri.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Rishikesh To Gangotri Taxi Fare (Per KM)</h2>
                  <p>Our taxi fares are calculated per kilometer, with clear pricing and no hidden fees. Toll and parking charges apply extra as per actuals.</p>
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
                  <h2>Rishikesh to Gangotri Cab – One Way & Round Trip</h2>
                  <p>Choose convenient one-way or round-trip taxi options for your journey to Gangotri, suitable for pilgrims, tourists, and adventure seekers.</p>
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
                        <td>Rs. 3,499/-</td>
                        <td>Rs. 6,499/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 3,899/-</td>
                        <td>Rs. 7,199/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 4,499/-</td>
                        <td>Rs. 8,499/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Rishikesh and Gangotri</h3>
                <p>The road distance is approximately <strong>250 km</strong>, and the journey usually takes around <strong>8 to 9 hours</strong>, depending on road and weather conditions.</p>

                <h3>Popular Stops Enroute</h3>
                <ul>
                  <li>Devprayag – Confluence of Alaknanda and Bhagirathi rivers</li>
                  <li>Uttarkashi – Gateway town to Gangotri</li>
                  <li>Yamunotri (optional detour)</li>
                </ul>

                <h3>Why Choose Our Rishikesh to Gangotri Taxi Service?</h3>
                <ul>
                  <li><strong>Experienced Drivers:</strong> Skilled in mountainous terrain and local routes</li>
                  <li><strong>Comfort & Safety:</strong> Well-maintained, sanitized vehicles for your comfort</li>
                  <li><strong>Transparent Pricing:</strong> No hidden charges; clear fare structure</li>
                  <li><strong>Flexible Options:</strong> One-way and round trip taxi rentals to suit your itinerary</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>How do I book the taxi?</b></p>
                <p>Booking can be done online through our form or by contacting our customer support. Early booking is recommended during pilgrimage seasons.</p>

                <p><b>Are toll and parking charges included in the fare?</b></p>
                <p>No, tolls and parking fees are additional and will be charged as applicable.</p>

                <p><b>Can I get pickup from Rishikesh railway station or airport?</b></p>
                <p>Yes, we offer pickup services from Rishikesh railway station, airport, or any specified local address.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
