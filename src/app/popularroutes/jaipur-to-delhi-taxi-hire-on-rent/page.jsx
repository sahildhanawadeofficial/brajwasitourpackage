import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // For example, if the image is at `public/tour/jaipur-to-delhi-taxi-hire-on-rent-1.webp`
  const carouselImageSrc = "/tour/jaipur-to-delhi-taxi-hire-on-rent-1.webp";

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
                      alt="Jaipur to Delhi Taxi Hire on Rent" // Added a descriptive alt text
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
              <h2>Book Jaipur to Delhi Taxi/Cab</h2>

              <p>The distance between Jaipur to Delhi by road is 261 kms which will take around 4 to 5 hours to reach the destination. If you are planning to visit Delhi, you can avail **Jaipur to Delhi taxi** as it is affordable and easily available. **Jaipur to Delhi cab** fare depends on the vehicle you choose. You can get cabs that are budget-friendly to luxurious. </p>
              <br /> {/* Self-closing br tag */}

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

                <h3>Routes to go from Jaipur to Delhi </h3>
                <br /> {/* Self-closing br tag */}
                <p>There are two ways to go to Delhi from Jaipur. First is via NH48, which is about **273 Km** and takes about 5.5 hours and the second is
                  via Alwar - Jaipur Road and NH 48, which is about 314 Km and takes about 6.5 hours.
                  Both the routes have beautiful local sightseeings. You can also stop at the sights and visit these places</p>
                <br /> {/* Self-closing br tag */}
                <h3>Places to visit in Delhi</h3>
                <br /> {/* Self-closing br tag */}
                <p><strong>&#x2022; Red Fort</strong></p>
                <p><strong>&#x2022; Qutub Minar</strong></p>
                <p><strong>&#x2022; India Gate</strong></p>
                <p><strong>&#x2022; Humayun’s Tomb</strong></p>
                <p><strong>&#x2022; Jama Masjid</strong></p>
                <p><strong>&#x2022; Rajpath</strong></p>
                <p><strong>&#x2022; Maqbara-e-Paik</strong></p>
                <p><strong>&#x2022; Baradari at Qudsia Garden</strong></p>
                <p><strong>&#x2022; Ghalib Haveli</strong></p>
                <p><strong>&#x2022; Safdarjung Fort</strong></p>
                <p><strong>&#x2022; Jahaz Mahal</strong></p>
                <p><strong>&#x2022; Mutiny Memorial at Northern Bridge</strong></p>
                <br /> {/* Self-closing br tag */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;