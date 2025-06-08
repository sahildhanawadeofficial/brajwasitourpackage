import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const taxiImage = "/tour/haridwar-ganga-aarti.png";

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
                      alt="Haridwar to Joshimath Taxi Hire on Rent"
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
              <h2>Book Haridwar to Joshimath Taxi/Cab</h2>

              <p>Need a taxi from Haridwar to Joshimath? We provide safe and comfortable taxi services at affordable rates. Whether you’re heading for a spiritual retreat, skiing in Auli, or en route to Badrinath, our experienced drivers and clean cars ensure a smooth ride through the mountains.</p>

              <div className="row">
                <div className="call-box-inner12">
                  <h2>Haridwar To Joshimath Taxi Fare (Per KM)</h2>
                  <p>Below are our per kilometre rates. Additional charges like toll, parking, and driver night stay may apply.</p>
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
                  <h2>Haridwar to Joshimath Taxi – One Way and Round Trip</h2>
                  <p>Choose from our all-inclusive packages below. No hidden charges.</p>
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
                        <td>Rs. 5,999/-</td>
                        <td>Rs. 11,999/-</td>
                      </tr>
                      <tr>
                        <td>SUV (Ertiga/Xylo)</td>
                        <td>Rs. 7,499/-</td>
                        <td>Rs. 13,999/-</td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 8,499/-</td>
                        <td>Rs. 15,999/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment">
                <h3>Distance Between Haridwar and Joshimath</h3>
                <p>The distance from Haridwar to Joshimath is approximately <strong>280 km</strong>. It takes around 9 to 10 hours depending on the traffic and weather conditions.</p>

                <h3>Popular Spots on the Way</h3>
                <ul>
                  <li>Devprayag – confluence of Alaknanda and Bhagirathi rivers</li>
                  <li>Srinagar – scenic views and lunch stop</li>
                  <li>Karnaprayag and Nandaprayag – sacred river confluences</li>
                  <li>Chamoli – beautiful valley views</li>
                </ul>

                <h3>Why Choose Our Haridwar to Joshimath Cab Service?</h3>
                <ul>
                  <li><strong>Well-Maintained Cars:</strong> Clean and regularly serviced</li>
                  <li><strong>Experienced Drivers:</strong> Local and knowledgeable</li>
                  <li><strong>Transparent Pricing:</strong> No hidden fees or last-minute surprises</li>
                  <li><strong>Flexible Pickup:</strong> From hotel, railway station, or doorstep</li>
                </ul>

                <h3>FAQs</h3>
                <p><b>Is it safe to travel to Joshimath by taxi?</b></p>
                <p>Yes, it is safe. We assign skilled drivers familiar with hilly terrain and weather patterns.</p>

                <p><b>Can I book a same-day return taxi?</b></p>
                <p>Yes, if you're planning a quick visit to Auli or Joshimath. Round trips are available for the same or next day.</p>

                <p><b>Can I get a taxi directly to Auli?</b></p>
                <p>Yes, we also offer direct Haridwar to Auli taxi services. Let us know while booking.</p>

                <p><b>Are stops allowed during the journey?</b></p>
                <p>Yes, you can stop for meals, sightseeing, or photos. Just inform the driver ahead of time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
