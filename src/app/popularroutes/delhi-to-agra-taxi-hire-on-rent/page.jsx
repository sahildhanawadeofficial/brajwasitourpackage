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
                      alt="Delhi to Agra Taxi Hire on Rent" // Added a descriptive alt text
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
              <h2>Book Delhi to Agra Taxi/Cab</h2>

              <p>Agra is a beautiful tourist destination in India. Most of the people from different parts of the
                world visit Agra to see the beautiful Taj Mahal. You can have an enjoyable time with your family and
                friends there. You can book a **Delhi to Agra Taxi** and visit its various tourist
                places. <a href="/">mathuravrindavantaxiservices.com</a> {/* Changed 'index.html' to '/' for Next.js internal link */}
                has a lot of transport cab options by which you can reach Agra.</p>
              <br /> {/* Self-closing br tag */}
              <h2>Delhi To Agra Taxi Fares According To Per/KM</h2>
              <p>If you hire a taxi on a per kilometre basis, you have to pay separately the charges like driver
                charges, toll tax, and parking etc.</p>
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
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <h2>Delhi To Agra Taxi One Way and Round Trip Fares</h2>
                  <p>If you hire a one way or round trip taxi then all the charges are included in it like toll tax,
                    state tax etc. You have to make a full payment once.</p>
                  <br /> {/* Self-closing br tag */}
                  <table border="1" width="100%">
                    <tbody>
                      <tr>
                        <th>Select Car</th>
                        <th>One Way</th>
                        <th>Round Trip</th>
                      </tr>
                      <tr>
                        <td>SEDAN- Swif Dzire/Etios/Similar </td>
                        <td>Rs. 2,399/-</td>
                        <td>Rs. 5,499/-</td>
                      </tr>
                      <tr>
                        <td>HATCHBACK- Indica/Swift/Similar</td>
                        <td>Rs. 2,599/-</td>
                        <td>Rs. 4,999/-</td>
                      </tr>
                      <tr>
                        <td>SUV- Xylo/Ertiga/Similar</td>
                        <td>Rs. 3,699/-</td>
                        <td>Rs. 6,499/-</td>
                      </tr>
                      <tr>
                        <td>SUV- Inova Crysta</td>
                        <td>Rs. 4,999/-</td>
                        <td>Rs. 8,499/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />
              <div className="gauto-leave-comment"> {/* Changed 'class' to 'className' */}

                <h3>Distance Covered by Delhi to Agra Taxi</h3>
                <p>The distance between Delhi to Agra by Taxi is around **243 km**. And the time taken is
                  around 4 to 5 hours. The distance will of course change if you change the route. The time can also
                  differ according to the traffic conditions. The time taken to cover also depends on your speed and
                  your stoppage time during the journey. </p>
                <br /> {/* Self-closing br tag */}
                <h2>Type of Delhi to Agra Taxi available are</h2>
                <p> Delhi to <a
                  href="/delhi-to-agra-taxi-hire-on-rent">Agra</a> {/* Changed 'delhi-to-agra-taxi-hire-on-rent.html' to '/delhi-to-agra-taxi-hire-on-rent' for Next.js internal link */}
                  cab options range from 4-seater to 16 seater. The price of the vehicle also very according to the
                  passenger capacity and luggages.
                  You will get Delhi to Agra taxi fully air-conditioned and the drivers which you will get for your
                  journey or really experienced and drivers ensure your safety on the journey.</p>
                <br /> {/* Self-closing br tag */}
                <h3>FAQ</h3>
                <p><b>How long does it take to travel from Delhi to Agra by taxi?</b></p>
                <p>The approximate driving distance between Delhi and Agra is around 210km and it takes around 4-5
                  hours by taxi, depending on traffic conditions.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>What are the different types of taxis available for the Delhi to Agra route?</b></p>
                <p>The different types of taxis available for the Delhi to Agra route include Sedan, SUV, and Tempo
                  Traveller.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Are there any toll charges on the route from Delhi to Agra?</b></p>
                <p>Yes, there are toll charges on the route from Delhi to Agra which will be paid by the passenger.
                </p>
                <br /> {/* Self-closing br tag */}
                <p><b>Are the taxis air-conditioned?</b></p>
                <p>Most taxis are air-conditioned.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Is there any provision for pickup and drop-off service?</b></p>
                <p>Yes, pickup and drop-off service is available.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Are the drivers well-trained and experienced?</b></p>
                <p>Yes, the drivers are well-trained and experienced.</p>
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