import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/nainital-boating-ropeway.png";

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
                      alt="Dehradun to Nainital Taxi Hire on Rent"
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
              <h2>Book Dehradun to Nainital Taxi/Cab</h2>

              <p>Planning a trip to the lake city of Nainital? Our Dehradun to Nainital taxi hire service offers a safe, smooth, and comfortable ride through the scenic Uttarakhand hills. Choose from a wide range of cars and enjoy door-to-door pickup and drop services.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Dehradun To Nainital Taxi Fare (Per KM)</h2>
                  <p>Per KM charges are exclusive of toll, parking, and driver allowance.</p>
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
                  <h2>Dehradun to Nainital Taxi – One Way and Round Trip Fares</h2>
                  <p>Our one-way and round-trip fares are inclusive of toll, taxes, and driver allowance. Transparent pricing guaranteed.</p>
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
                        <td>Rs. 7,999/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 6,499/-</td>
                        <td>Rs. 9,999/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 7,499/-</td>
                        <td>Rs. 11,999/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Dehradun and Nainital</h3>
                <p>The distance from Dehradun to Nainital is approximately <strong>280 km</strong>, and the journey usually takes around 7 to 8 hours depending on road and traffic conditions.</p>

                <h3>Top Sights Along the Route</h3>
                <p>Enjoy views of the beautiful Kumaon hills, stop at Ranikhet or Corbett en route, or take a break in scenic Kathgodam or Haldwani.</p>

                <h3>Why Choose Our Taxi Service?</h3>
                <ul>
                  <li><strong>Hassle-Free Travel:</strong> No waiting, no delays. Private cab from doorstep.</li>
                  <li><strong>Professional Drivers:</strong> Courteous and experienced for long highway drives.</li>
                  <li><strong>Affordable Prices:</strong> Best-in-class rates with no hidden costs.</li>
                  <li><strong>24x7 Booking:</strong> Call, WhatsApp, or book online anytime.</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>Can I book a cab from Dehradun airport to Nainital?</b></p>
                <p>Yes, we provide pickup from Jolly Grant Airport with direct drop at your hotel or home in Nainital.</p>

                <p><b>Are round trip taxis available?</b></p>
                <p>Yes, you can book a round trip with flexible return dates and overnight stay options.</p>

                <p><b>Is the route safe for night travel?</b></p>
                <p>Yes, but we recommend day travel for better visibility and sightseeing.</p>

                <p><b>Can I customize the trip with stops?</b></p>
                <p>Absolutely. Let us know your preferences and we’ll plan a custom itinerary for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
