import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // For example, if the image is at `public/tour/delhi-to-agra-taxi-hire-on-rent-1.webp`
  const carouselImageSrc = "/tour/delhi-to-agra-taxi-hire-on-rent-1.webp";

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
                      alt="Delhi to Jaipur Taxi Hire on Rent" // Added a descriptive alt text
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
              <h2>Book Delhi to Jaipur Taxi/Cab</h2>

              <p>The distance between Delhi to Jaipur is **260 km** which takes around 5 hours. **Delhi to Jaipur Taxi** will be a very good option if you are planning a trip to Jaipur.
                **Delhi to Jaipur cab fare** varies according to the vehicle you choose. While you are having a road trip you will pass through Neemrana, Amer and Sariska National Park. </p>
              <p>There are two ways to reach Jaipur - first is via NH 48 and second is NH 12. You can book your Delhi to Jaipur cab online. You can <a href="#" data-toggle="modal" data-target="#exampleModal"><strong>book a cab</strong></a> according to your budget.
              </p>
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

                <h2>Advantages of Delhi to Jaipur Taxi</h2>
                <br /> {/* Self-closing br tag */}
                <p><strong>&#x2022;</strong> Booking from Delhi to Jaipur Taxi will be hassle-free and completely transparent.</p>
                <p><strong>&#x2022;</strong> Cabs do not charge any cancellation fee at all.</p>
                <p><strong>&#x2022;</strong> The drivers that are provided are experienced and very much trustworthy.</p>
                <p><strong>&#x2022;</strong> You also have an option to book a round-trip cab. The taxi fare for a round trip is around 5,550. If you book a cab for one way it will cost you Rs 2,788 approximately.</p>
                <br /> {/* Self-closing br tag */}
                <h3>There are various places you can visit in Jaipur.</h3>
                <p>Amer Palace, Jaigarh Fort, <a href="https://en.wikipedia.org/wiki/Hawa_Mahal" target="_blank" rel="noopener noreferrer">Hawa Mahal</a>, City Palace,
                  The Lal Maas, a famous Rajasthani mutton preparation,
                  Jantar Mantar,
                  Jal Mahal, Albert Hall Museum and many more.
                </p>
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