import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/auli-skiing-cable-car.png";

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
                      alt="Dehradun to Auli Taxi Hire on Rent"
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
              <h2>Book Dehradun to Auli Taxi/Cab</h2>

              <p>Traveling from Dehradun to Auli by taxi offers a comfortable and scenic journey through the majestic hills of Uttarakhand. Whether you're heading for skiing in winter or trekking in summer, booking a cab with us ensures a stress-free experience.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Dehradun To Auli Taxi Fare (Per KM)</h2>
                  <p>Charges on a per kilometer basis exclude toll, parking, and driver allowance.</p>
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
                  <h2>Dehradun to Auli Taxi – One Way and Round Trip Fares</h2>
                  <p>All-inclusive pricing for one-way and round trip packages covering tolls, taxes, and driver fees.</p>
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
                        <td>Rs. 4,999/-</td>
                        <td>Rs. 9,999/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 6,999/-</td>
                        <td>Rs. 11,499/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 8,499/-</td>
                        <td>Rs. 13,999/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Dehradun and Auli</h3>
                <p>The road distance from Dehradun to Auli is approximately <strong>295 km</strong>, which takes around 9 to 10 hours to travel via NH7, depending on road and weather conditions.</p>

                <h3>Highlights of the Route</h3>
                <p>The route passes through Rishikesh, Devprayag, Srinagar, Rudraprayag, Karnaprayag, and Joshimath—each offering its own charm and scenic views of the Himalayas.</p>

                <h3>Why Book With Us?</h3>
                <ul>
                  <li><strong>Reliable Fleet:</strong> Well-maintained, sanitized vehicles with experienced drivers.</li>
                  <li><strong>Transparent Pricing:</strong> No hidden charges. Full upfront disclosure of fares.</li>
                  <li><strong>24x7 Assistance:</strong> Friendly support team always available for help and rescheduling.</li>
                  <li><strong>Online Booking:</strong> Easy and instant booking with confirmation.</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>Is snow present in Auli year-round?</b></p>
                <p>Snowfall usually occurs between December and March. The rest of the year offers stunning green views.</p>

                <p><b>Is Dehradun to Auli route safe?</b></p>
                <p>Yes, the route is mostly safe year-round, but caution is advised during monsoons due to landslides.</p>

                <p><b>Can I book a round trip cab?</b></p>
                <p>Yes, you can book round trip or multi-day packages depending on your itinerary.</p>

                <p><b>What payment methods do you accept?</b></p>
                <p>We accept online UPI, Netbanking, Wallets, and Cash.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
