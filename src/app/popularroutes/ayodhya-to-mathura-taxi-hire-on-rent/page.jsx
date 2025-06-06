import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // For example, if the image is at `public/tour/mathura-to-agra-taxi-hire-on-rent-1.webp`
  const carouselImageSrc = "/tour/mathura-to-agra-taxi-hire-on-rent-1.webp";

  return (
    <>
      <div className="col-lg-9"> {/* Changed 'class' to 'className' */}
        <div className="blog-page-left"> {/* Changed 'class' to 'className' */}
          <div className="single-blog"> {/* Changed 'class' to 'className' */}
            <div className="blog-image"> {/* Changed 'class' to 'className' */}
              {/* Note: Bootstrap Carousel JavaScript needs to be loaded client-side for full functionality. */}
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"> {/* Changed 'class' to 'className' */}
                <div className="carousel-inner"> {/* Changed 'class' to 'className' */}
                  <div className="carousel-item active"> {/* Changed 'class' to 'className' */}
                    {/* Using Next.js Image component for optimized images */}
                    <Image
                      className="d-block w-100" // Changed 'class' to 'className'
                      src={carouselImageSrc}
                      alt="Ayodhya to Mathura Taxi Hire on Rent" // Kept your descriptive alt text
                      width={800} // IMPORTANT: Replace with the actual width of your image
                      height={500} // IMPORTANT: Replace with the actual height of your image
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
              <h2>Book Ayodhya to Mathura Taxi/Cab</h2>

              <p>If you are planning Travel to mathura from Ayodhya, booking a taxi or cab will be the best
                option. <strong>Ayodhya to Mathura Taxi</strong> fare varies depending on the cab you choose.
                Ayodhya to Mathura cab booking will be hassle - free. You can get a cab that is budget
                friendly. In case you want a luxurious trip you can go for the expensive cabs that have good
                space and are air - conditioned.</p>
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
                <h2>Distance Covered by Ayodhya To Mathura Cab</h2>
                <p>The distance between Ayodhya To Mathura by car is around <strong>530 km</strong>. And the
                  time taken is around 7 to 8 hours. The distance will of course change if you change the
                  route. The time can also differ according to the traffic conditions. The time taken to
                  cover also depends on your speed and your stoppage time during the journey.</p>
                <br /> {/* Self-closing br tag */}
                <h3>Type of Ayodhya to Mathura Taxi available are</h3>
                <p>Ayodhya to Mathura Taxi options range from 4-seater to 16 seater. The price of the vehicle
                  also very according to the passenger capacity and luggages.
                  You will get Ayodhya to Mathura taxi fully air-conditioned and the drivers which you will
                  get for your journey or really experienced and drivers ensure your safety on the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;