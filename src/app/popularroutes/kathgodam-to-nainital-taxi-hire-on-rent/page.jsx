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
                      alt="Kathgodam to Nainital Taxi Hire on Rent"
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
              <h2>Book Kathgodam to Nainital Taxi/Cab</h2>

              <p>Looking for a reliable and affordable taxi from Kathgodam to Nainital? We provide safe, comfortable, and timely cab services from Kathgodam Railway Station or anywhere in the city to Nainital. Whether you're a tourist or a local resident, enjoy the scenic drive to the lake city with our expert drivers.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Kathgodam To Nainital Taxi Fare (Per KM)</h2>
                  <p>Charges are based on distance. Toll, parking, and driver allowance (if any) are additional.</p>
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
                  <h2>Kathgodam to Nainital Cab – One Way & Round Trip</h2>
                  <p>Ideal for tourists, families, or groups visiting Nainital for leisure or business. Choose from one-way or round-trip packages at affordable prices.</p>
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
                <h3>Distance Between Kathgodam and Nainital</h3>
                <p>The driving distance is around <strong>35 km</strong>, and it takes approximately <strong>1 hour 15 minutes</strong> depending on road and weather conditions.</p>

                <h3>Popular Enroute Attractions</h3>
                <ul>
                  <li>Gola Barrage View</li>
                  <li>Mountain Curves and Scenic Stops</li>
                  <li>Pine Forests and Eco Points</li>
                </ul>

                <h3>Why Choose Our Kathgodam to Nainital Taxi?</h3>
                <ul>
                  <li><strong>Experienced Drivers:</strong> Professional and knowledgeable of local roads</li>
                  <li><strong>Hygienic Cabs:</strong> Well-maintained and regularly cleaned</li>
                  <li><strong>Safe Travel:</strong> Punctual and secure rides</li>
                  <li><strong>Affordable Pricing:</strong> Best for tourists and locals alike</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>How early should I book my cab?</b></p>
                <p>We recommend booking at least 1–2 days in advance for assured availability during tourist seasons.</p>

                <p><b>Is the fare fixed or based on meter?</b></p>
                <p>We offer both per km pricing and fixed one-way/round-trip packages.</p>

                <p><b>Can I get picked up from Kathgodam railway station?</b></p>
                <p>Yes, we provide doorstep pickup from the railway station or any preferred location in Kathgodam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
