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
                      alt="Haridwar to Mathura Taxi Services" // Original alt text preserved, ensure it's descriptive
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
              <h2>Book Haridwar to Mathura Taxi/Cab</h2>

              <p>If you are planning travel to Mathura from Haridwar, booking a taxi or cab will be the best option. **Haridwar to Mathura Taxi** fare varies depending on the cab you choose. Haridwar to Mathura cab booking will be hassle-free. You can get a cab that is budget-friendly. In case you want a luxurious trip, you can go for the expensive cabs that have good space and are air-conditioned. </p>
              <br /><br /> {/* Self-closing br tags */}
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <table border="1" width="100%">
                    <thead> {/* Added for semantic HTML */}
                      <tr><th>Select Car</th><th> Price</th><th> Booking Now</th></tr>
                    </thead>
                    <tbody> {/* Added for semantic HTML */}
                      <tr><td>Swift Dzire </td><td>Rs. 9/KM</td><td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr> {/* Changed 'class' to 'className' */}
                      <tr><td>Ertiga </td><td>Rs. 11/KM</td><td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr> {/* Changed 'class' to 'className' */}
                      <tr><td>Innova</td><td>Rs. 14/KM</td><td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr> {/* Changed 'class' to 'className' */}
                      <tr><td>Innova Crysta</td><td>Rs. 16/KM</td><td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr> {/* Changed 'class' to 'className' */}
                      <tr><td>Etios</td><td>Rs. 10/KM</td><td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr> {/* Changed 'class' to 'className' */}
                      <tr><td>Scorpio</td><td>Rs. 15/KM</td><td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr> {/* Changed 'class' to 'className' */}
                      <tr><td>Marazzo</td><td>Rs. 14/KM</td><td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr> {/* Changed 'class' to 'className' */}
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment"> {/* Changed 'class' to 'className' */}

                <h2>Distance Covered by Haridwar To Mathura Cab</h2>
                <p>The distance between Haridwar To Mathura by car is around **345 km**. And the time taken is around 5 to 6 hours. The distance will of course change if you change the route. The time can also differ according to the traffic conditions. The time taken to cover also depends on your speed and your stoppage time during the journey.
                </p>
                <br /> {/* Self-closing br tag */}
                <h3>Type of Haridwar To Mathura Taxi available are</h3>
                <p> Haridwar To Mathura Taxi options range from 4-seater to 16-seater. The price of the vehicle also varies according to the passenger capacity and luggage.
                  You will get a Haridwar To Mathura taxi fully air-conditioned and the drivers which you will get for your journey are really experienced and ensure your safety on the journey.
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