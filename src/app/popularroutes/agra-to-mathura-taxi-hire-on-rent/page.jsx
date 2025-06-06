import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct based on your project structure

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // For example, if the image is at `public/tour/agra-to-mathura-taxi-hire-on-rent-1.webp`
  const carouselImageSrc = "/tour/agra-to-mathura-taxi-hire-on-rent-1.webp";

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
                      alt="Agra to Mathura Taxi Hire on Rent" // IMPORTANT: Added descriptive alt text
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
              <h2>Book Agra to Mathura Taxi/Cab</h2>

              <p>The distance between <strong>Agra to Mathura Taxi</strong> is around 58 km. And the time taken to
                travel this distance is around 1 to 1.5 hours which also depends on the traffic condition. The
                distance will change if you change the route. The time taken to cover also depends on your speed and
                your stoppage time and traffic condition during the journey. </p>
              <br /> {/* Self-closing br tag */}
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <h2>Agra To Mathura Taxi fares according to Per/KM </h2>
                  <p>If you hire a taxi on a per kilometre basis, you have to pay separately the charges like driver
                    charges, toll tax, and parking etc.</p>
                  <br /> {/* Self-closing br tag */}
                  <table border="1" width="100%">
                    <thead> {/* Added thead for semantic HTML */}
                      <tr>
                        <th>Select Car</th>
                        <th> Price</th>
                        <th> Booking Now</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Swift Dzire </td>
                        <td>Rs. 9/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book
                          Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Ertiga </td>
                        <td>Rs. 11/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book
                          Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Innova</td>
                        <td>Rs. 14/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book
                          Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 16/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book
                          Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Etios</td>
                        <td>Rs. 10/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book
                          Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Scorpio</td>
                        <td>Rs. 15/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book
                          Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                      <tr>
                        <td>Marazzo</td>
                        <td>Rs. 14/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book
                          Now</a></td> {/* Changed 'class' to 'className' */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <h2>Agra To Mathura Taxi One Way and Round Trip Fares</h2>
                  <p>If you hire a one way or round trip taxi then all the charges are included in it like toll tax,
                    state tax etc. You have to make a full payment once.</p>
                  <br /> {/* Self-closing br tag */}
                  <table border="1" width="100%">
                    <thead> {/* Added thead for semantic HTML */}
                      <tr>
                        <th>Select Car</th>
                        <th>One Way</th>
                        <th>Round Trip</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SEDAN- Swif Dzire/Etios/Similar </td>
                        <td>-</td>
                        <td>Rs. 2,600/-</td>
                      </tr>
                      <tr>
                        <td>HATCHBACK- Indica/Swift/Similar</td>
                        <td>-</td>
                        <td>Rs. 2,700/-</td>
                      </tr>
                      <tr>
                        <td>SUV- Xylo/Ertiga/Similar</td>
                        <td>-</td>
                        <td>Rs. 3,700/-</td>
                      </tr>
                      <tr>
                        <td>SUV- Inova Crysta</td>
                        <td>-</td>
                        <td>Rs. 4,500/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />

              <div className="gauto-leave-comment"> {/* Changed 'class' to 'className' */}
                <h3>Agra to Mathura Car Rental Services</h3>
                <p>Mathura is a very popular tourist destination in India. The distance between <b>Agra and Mathura is
                  about 58 km</b>. You can have a Very good <a
                    href="same-day-agra-mathura-vrindavan-tour.html">Agra
                    to Mathura trip</a> with your family and friends.</p>
                <p>If You book <b>Agra to Mathura taxi</b> for visiting all the tourist spots in Mathura. By booking
                  Agra to Mathura taxi you can have a hustle-free ride at a very affordable price.</p>
                <p>You can book the cab for one side trip and also for a round trip. Your vehicle will reach your
                  location on time to start your journey. Throughout your journey, you will get various stoppages
                  where you can freshen up and have a journey break. Also, you will get a very experienced driver
                  which will drive your vehicle. You can also see the driver's profile on the company's website.</p>
                <h3>Taxis available from Agra to Mathura</h3>
                <p>There are different taxi services available from Agra to Mathura. Agra to Mathura taxi is available
                  depending on the price you want to spend on your vehicle. The most popular types of cars available
                  are <b>sedans, SUVs and Crysta cars</b>. Depending on your requirement you can book any of these
                  cars.</p>
                <p>Also, the other model of cars is listed on the list available on the company website. check the
                  rates of different cars before booking one. Then find a taxi from Agra to Mathura at any time during
                  the whole year. You can also choose a vehicle according to the sitting capacity. We have a very
                  convenient booking process for each cab or taxi booking from Agra to Mathura. The process is really
                  simple you just have to go to the website and choose a car from the list. You can also choose a car
                  according to its rating and book it online. Prices of the car are also available on the list.</p>
                <p>Also, other models of cars are listed in the list available at the top of the page. check the rates
                  of different cars before booking one. Then find a taxi from Agra to Mathura at any time during the
                  whole year. You can also choose a vehicle according to the sitting capacity. We have a very
                  convenient booking process for each cab or taxi booking from Agra to Mathura.</p>
                <p>The process is really simple you just have to go to the website and choose a car from the list. You
                  can also choose a car according to its rating and book it online. Prices of the car are also
                  available on the list.</p>
                <p>The charges for booking a taxi may differ depending on the time and date of your journey. Mostly
                  the prices are high during the weekends and holidays whereas it is comparatively low on the
                  weekdays. Instant booking of taxi service is also available but it is advisable to book the taxi
                  advance. Because booking a taxi instantly may cost a bit higher than the normal charge. Online
                  booking of taxis makes your journey easier, you can book your taxi and it will reach you at your
                  desired location.</p>
                <h3>Distance Covered By Agra To Mathura Taxi</h3>
                <p>There are different <strong>Agra to Mathura Taxi</strong> rental services available from where you
                  can hire a cab. But by booking your cab from <a
                    href="index.html">mathuravrindavantaxiservices.com</a> you can
                  get exciting discounts and offers. For a one-way trip or a round trip the <strong>Agra to Mathura
                    Cab</strong> fare starts from 1500 and upto 4500. The charges to book a cab may differ depending
                  on the date and time of your journey and the type of car you are choosing to travel from Agra to
                  Mathura.</p>
                <br /> {/* Self-closing br tag */}
                <h3>why choose us</h3>
                <p>mathuravrindavantaxiservices.com is a popular travel company that offers a wide range of travel
                  services, including cab bookings. Some reasons why you may choose to book a cab through
                  Mathuravrindavantaxiservices include:</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Convenience:</b> Mathuravrindavantaxiservices allows you to book a cab online, which is
                  convenient and saves time. You can easily compare prices and options, and make a booking without
                  having to go to a physical location.</p><br /> {/* Self-closing br tag */}
                <p><b>Wide range of options:</b> We have a variety of cabs, so you can choose from a range of options
                  that suit your budget and preferences.</p><br /> {/* Self-closing br tag */}
                <p><b>24/7 customer support:</b> We offers 24/7 customer support, so you can contact them at any time
                  if you have any issues or concerns with your booking.</p><br /> {/* Self-closing br tag */}
                <p><b>Transparent pricing:</b> Mathuravrindavantaxiservices pricing is transparent, so you know
                  exactly what you're paying for and there are no hidden charges.</p><br /> {/* Self-closing br tag */}
                <p><b>Discounts and Offers:</b> We offers discounts and special deals on cab bookings from time to
                  time, which can help you save money.</p>
                <br /> {/* Self-closing br tag */}
                <h3> About Mathura</h3>
                <p>Shri Krishna Janmabhumi , the birthplace of Krishna, is the most famous tourist attraction in
                  Mathura, as this place is believed to be the exact place where Lord Krishna was born. <a
                    href="https://en.wikipedia.org/wiki/Mathura"><b>Mathura</b></a> has many temples, both big and
                  small, surrounding the entire city, with many of these temples being dedicated to Lord Krishna. The
                  two most important temples in town are the Dwarkadheesh Temple and the Gita Mandir and these are
                  visited by most of the devotees who visit Mathura.</p>
                <br /> {/* Self-closing br tag */}
                <h3>FAQ</h3>
                <p><b>How many types of cabs are available for agra to Mathura?</b></p>
                <p>The different types of taxis available for the Agra to Mathura route include Sedan, SUV, and Tempo
                  Traveller.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Which is the most economical cab available in Agra from Mathura?</b></p>
                <p>Hatchback and Sedan most economical cabs from Agra to Mathura Trip.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>What are the payment options for booking a cab?</b></p>
                <p>For advance booking you have to make 30 to 40% payment online by paytm, phonepe, googlepay etc.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Is there any provision for pickup and drop-off service?</b></p>
                <p>Yes, pickup and drop-off service is available.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Can I book a round trip taxi from Agra to Mathura?</b></p>
                <p>Yes, you can book a round trip taxi from Agra to Mathura. You can either book a taxi for one-way or
                  round trip as per your requirement.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Can I book a taxi for one day or more than one day?</b></p>
                <p>Yes, you can book a taxi for one day or more than one day as per your requirement.</p>
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