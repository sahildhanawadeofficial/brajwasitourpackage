import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  const carouselImageSrc = "/tour/pune-to-mathura-tour-by-car.webp";

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
                      alt="Pune to Mathura Tour By Car" // Alt text is good
                      width={800} // IMPORTANT: Replace with the actual width of your image
                      height={500} // IMPORTANT: Replace with the actual height of your image
                      priority // Use priority if this is an important image above the fold
                    />
                  </div>
                  {/* Add more carousel-item divs here if you have more images */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> {/* Changed 'class' to 'className' */}
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span> {/* Changed 'class' to 'className' */}
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> {/* Changed 'class' to 'className' */}
                  <span className="carousel-control-next-icon" aria-hidden="true"></span> {/* Changed 'class' to 'className' */}
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="blog-text"> {/* Changed 'class' to 'className' */}
              <p>
                You'll need to arrange your travel from **Pune to Delhi** independently. Our cab service will then pick you up from the airport or railway station in Delhi. From there, your **Mathura Vrindavan tour by car** will officially begin.
              </p>
              <br /> {/* Self-closing br tag */}

              <h2>Book Pune to Mathura Taxi/Cab</h2>

              <p>
                If you are planning to travel to **Mathura from Pune**, booking a taxi or cab is an excellent option. The **Pune to Mathura taxi** fare varies depending on the cab you choose. Booking a **Pune to Mathura cab** will be hassle-free. You can find a cab that is budget-friendly, or if you prefer a luxurious trip, you can opt for more expensive, air-conditioned cabs that offer ample space.
              </p>
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

                <h2>Distance Covered By Pune To Mathura Cab</h2>
                <p>The distance between **Pune to Mathura** by car is approximately **1280 km**, and the travel time is around **24 to 25 hours**. The distance may change if you alter the route. The time can also differ according to traffic conditions. The time taken to cover the distance also depends on your average speed and any stoppage time during the journey.</p>
                <br /> {/* Self-closing br tag */}
                <h3>Types of Pune To Mathura Taxi Available</h3> {/* Corrected heading for grammar */}
                <p>**Pune To Mathura Taxi** options range from 4-seater to 16-seater. The price of the vehicle also varies according to the passenger capacity and luggage. All our taxis are fully air-conditioned, and the drivers are highly experienced, ensuring your safety throughout the journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;