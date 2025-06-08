import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/mussoorie-hill-station.png";

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
                      alt="Dehradun to Mussoorie Taxi Hire on Rent"
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
              <h2>Book Dehradun to Mussoorie Taxi/Cab</h2>

              <p>Planning a relaxing getaway to Mussoorie? Our Dehradun to Mussoorie taxi service provides a seamless and comfortable ride through the scenic hills. Whether it’s a weekend trip or a family vacation, we offer reliable cabs to suit all your needs.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Dehradun To Mussoorie Taxi Fare (Per KM)</h2>
                  <p>Per kilometer charges are exclusive of toll, parking, and driver allowance.</p>
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
                  <h2>Dehradun to Mussoorie Taxi – One Way and Round Trip Fares</h2>
                  <p>Fares mentioned below are all-inclusive of tolls, taxes, and driver allowances.</p>
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
                        <td>Rs. 1,499/-</td>
                        <td>Rs. 2,499/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 1,999/-</td>
                        <td>Rs. 3,499/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 2,499/-</td>
                        <td>Rs. 4,499/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Dehradun and Mussoorie</h3>
                <p>The distance from Dehradun to Mussoorie is about <strong>35 km</strong>, and the journey takes around 1.5 to 2 hours depending on traffic and road conditions.</p>

                <h3>Popular Stops Along the Way</h3>
                <p>Enjoy scenic viewpoints, Maggi points, and attractions like Robber’s Cave, Sahastradhara, and Bhatta Falls en route to Mussoorie.</p>

                <h3>Why Choose Our Taxi Service?</h3>
                <ul>
                  <li><strong>Experienced Drivers:</strong> Skilled in hilly terrain and friendly in nature.</li>
                  <li><strong>Clean Cars:</strong> Sanitized, neat vehicles with A/C and music system.</li>
                  <li><strong>Affordable Rates:</strong> Competitive pricing with no hidden charges.</li>
                  <li><strong>Easy Booking:</strong> Online or WhatsApp booking available 24/7.</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>Is Mussoorie a good weekend destination?</b></p>
                <p>Absolutely. It’s one of the most popular and accessible hill stations from Dehradun.</p>

                <p><b>Is the road to Mussoorie safe?</b></p>
                <p>Yes, the road is safe year-round, though monsoon season requires extra caution due to slippery conditions.</p>

                <p><b>Can I get a same-day return trip?</b></p>
                <p>Yes. We offer same-day return packages, customizable to your schedule.</p>

                <p><b>Do you allow pickup from Jolly Grant Airport?</b></p>
                <p>Yes, we offer airport pickups and direct transfers to Mussoorie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
