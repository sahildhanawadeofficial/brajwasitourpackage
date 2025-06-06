import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // For example, if the image is at `public/tour/agra-to-jaipur-taxi-hire-on-rent-1.webp`
  const carouselImageSrc = "/tour/agra-to-jaipur-taxi-hire-on-rent-1.webp";

  return (
    <>
      <div className="col-lg-9"> {/* Changed 'class' to 'className' */}
        <div className="blog-page-left"> {/* Changed 'class' to 'className' */}
          <div className="single-blog"> {/* Changed 'class' to 'className' */}
            <div className="blog-image"> {/* Changed 'class' to 'className' */}
              {/* Note: Bootstrap Carousel JavaScript needs to be loaded client-side for full functionality.
                  In Next.js, consider using react-bootstrap or dynamically importing Bootstrap JS. */}
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"> {/* Changed 'class' to 'className' */}
                <div className="carousel-inner"> {/* Changed 'class' to 'className' */}
                  <div className="carousel-item active"> {/* Changed 'class' to 'className' */}
                    {/* Using Next.js Image component for optimized images */}
                    <Image
                      className="d-block w-100" // Changed 'class' to 'className'
                      src={carouselImageSrc}
                      alt="Agra to Jaipur Taxi Hire on Rent" // IMPORTANT: Added descriptive alt text
                      width={800} // IMPORTANT: Replace with actual width of your image
                      height={500} // IMPORTANT: Replace with actual height of your image
                      priority // Use priority if this is an important image above the fold
                    />
                  </div>
                  {/* Add more carousel-item divs here if you have more images */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> {/* Changed 'class' to 'className' */}
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span> {/* Changed 'class' to 'className' */}
                  <span className="sr-only">Previous</span> {/* Changed 'class' to 'className' */}
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> {/* Changed 'class' to 'className' */}
                  <span className="carousel-control-next-icon" aria-hidden="true"></span> {/* Changed 'class' to 'className' */}
                  <span className="sr-only">Next</span> {/* Changed 'class' to 'className' */}
                </a>
              </div>
            </div>
            <div className="blog-text"> {/* Changed 'class' to 'className' */}
              <h2>Book Agra to Jaipur Taxi/Cab</h2>

              <p>If you are planning to travel to Agra from Jaipur, booking a taxi or cab will be the best
                option. <strong>Agra to Jaipur taxi</strong> fare varies depending on the cab you choose. <a
                  href="#" data-toggle="modal" data-target="#exampleModal"><strong>Agra to Jaipur cab
                    booking</strong></a> will be hassle - free. You can get a cab that is budget friendly.
                In case you want a luxurious trip you can go for the expensive Taxi with <a
                  href="index.html">mathuravrindavantaxiservices.com</a>
                that have good space and are features.</p>
              <br /> {/* Self-closing br tag */}
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <table border="1" width="100%">
                    <thead> {/* Added for semantic HTML */}
                      <tr>
                        <th>Select Car</th>
                        <th> Price</th>
                        <th> Booking Now</th>
                      </tr>
                    </thead>
                    <tbody> {/* Added for semantic HTML */}
                      <tr>
                        <td>Swift Dzire </td>
                        <td>Rs. 9/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Ertiga </td>
                        <td>Rs. 11/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Innova</td>
                        <td>Rs. 14/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 16/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Etios</td>
                        <td>Rs. 10/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Scorpio</td>
                        <td>Rs. 15/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Marazzo</td>
                        <td>Rs. 14/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment"> {/* Changed 'class' to 'className' */}

                <h2>About Agra to Jaipur road trip</h2>
                <p>The distance between <strong>Agra to Jaipur is around 240 km</strong> which will take
                  around 4.5 hours to reach the destination. While you are traveling from Agra to Jaipur via
                  cab there are places that are of historic and have its own cultural importance. While
                  travelling from Agra to Jaipur you will pass through towns like <a
                    href="index.html">Bharatpur</a>, Halaina,
                  Mahwa, Sakrai, Dausa, Basi, and Kanota. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;