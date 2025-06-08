import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/rishikesh-aarti-rafting.png";

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
                      alt="Dehradun to Rishikesh Taxi Hire on Rent"
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
              <h2>Book Dehradun to Rishikesh Taxi/Cab</h2>

              <p>Looking for a smooth ride to the spiritual town of Rishikesh? Our Dehradun to Rishikesh taxi hire service is perfect for individuals, families, or groups seeking a comfortable journey with timely pickups and professional drivers.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Dehradun To Rishikesh Taxi Fare (Per KM)</h2>
                  <p>Rates mentioned below exclude tolls, parking, and driver allowances.</p>
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
                  <h2>Dehradun to Rishikesh Taxi – One Way and Round Trip</h2>
                  <p>Our fixed fare options for one way and round trip cover all basic charges including toll and driver allowance.</p>
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
                        <td>Rs. 1,999/-</td>
                        <td>Rs. 3,499/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Dehradun and Rishikesh</h3>
                <p>The distance between Dehradun and Rishikesh is about <strong>45 km</strong>. The drive usually takes around 1.5 to 2 hours, depending on traffic.</p>

                <h3>Best Places to Visit in Rishikesh</h3>
                <ul>
                  <li>Ram Jhula & Laxman Jhula</li>
                  <li>Triveni Ghat Ganga Aarti</li>
                  <li>Parmarth Niketan Ashram</li>
                  <li>Neelkanth Mahadev Temple</li>
                  <li>Adventure sports like rafting and bungee jumping</li>
                </ul>

                <h3>Why Choose Our Taxi Service?</h3>
                <ul>
                  <li><strong>Doorstep Pickup:</strong> From home, hotel, or airport in Dehradun</li>
                  <li><strong>Experienced Drivers:</strong> Well-trained for hill driving and safety</li>
                  <li><strong>No Hidden Charges:</strong> Transparent and fixed pricing</li>
                  <li><strong>Clean & Sanitized Cabs:</strong> Hygiene guaranteed</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>How do I book a cab from Dehradun to Rishikesh?</b></p>
                <p>You can book via call, WhatsApp, or our quick inquiry form.</p>

                <p><b>Do you offer airport pickup?</b></p>
                <p>Yes, we provide cab services from Jolly Grant Airport to Rishikesh.</p>

                <p><b>Is this a shared or private cab?</b></p>
                <p>All our cabs are private and not shared with other passengers.</p>

                <p><b>Is the cab available at night?</b></p>
                <p>Yes, we offer 24x7 cab services for Dehradun to Rishikesh.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
