import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  const carouselImageSrc = "/tour/mathura-to-delhi-taxi-hire-on-rent-1.webp";

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
                      alt="Mathura to Delhi Taxi Hire on Rent" // Added a descriptive alt text
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
              <h2>Book Mathura to Delhi Taxi/Cab</h2>

              <p>If you're planning to book a **Mathura to Delhi Taxi** for your return trip or a visit to Delhi from Mathura, hiring a cab is an excellent option. Traveling by a booked cab with <a href="/" target="_blank" rel="noopener noreferrer">mathuravrindavantaxiservices.com</a> will make your journey interesting and amazing without much struggle or hustle.</p>
              <br /> {/* Self-closing br tag */}
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <h2>Mathura To Delhi Taxi Fares (Per KM) </h2>
                  <p>If you hire a taxi on a per kilometer basis, you'll need to pay separately for charges like driver allowance, toll tax, and parking, etc.</p>
                  <br /> {/* Self-closing br tag */}
                  <table border="1" width="100%">
                    <thead> {/* Added for semantic HTML */}
                      <tr><th>Select Car</th><th> Price</th><th> Booking Now</th></tr>
                    </thead>
                    <tbody>
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
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <h2>Mathura To Delhi Taxi One Way and Round Trip Fares</h2>
                  <p>If you hire a one-way or round trip taxi, all the charges, including toll tax and state tax, are included in the fare. You'll make one full payment.</p>
                  <br /> {/* Self-closing br tag */}
                  <table border="1" width="100%">
                    <thead> {/* Added for semantic HTML */}
                      <tr><th>Select Car</th><th>One Way</th><th>Round Trip</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>SEDAN- Swift Dzire/Etios/Similar </td><td>Rs. 1,999/-</td><td>Rs. 4,399/-</td></tr>
                      <tr><td>HATCHBACK- Indica/Swift/Similar</td><td>Rs. 1,899/-</td><td>Rs. 4,000/-</td></tr>
                      <tr><td>SUV- Xylo/Ertiga/Similar</td><td>Rs. 2,999/-</td><td>Rs. 5,890/-</td></tr>
                      <tr><td>SUV- Innova Crysta</td><td>Rs. 4000/-</td><td>Rs. 6,900/-</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />
              <div className="gauto-leave-comment"> {/* Changed 'class' to 'className' */}

                <h3>Mathura to Delhi Car Rental Services</h3>
                <p>Delhi is one of the most visited places in India by tourists. It's a beautiful tourist destination where you can have a great time with your friends and family. You can book a **Mathura to Delhi taxi service** to explore various tourist spots in Delhi. The distance between Mathura and Delhi is approximately 165 km, and it also depends on the route you take to reach your destination.</p>
                <p>Most people choose a car rental service to visit Delhi from Mathura. It's convenient to travel to Delhi from Mathura by road. While traveling from Mathura to Delhi, you can also choose some stoppages where you can take a break and freshen up.</p>
                <h3>Taxis available from Mathura to Delhi</h3>
                <p>There's a list of many taxis available on **mathuravrindavantaxiservices.com** where you can see the rating of each car and book it according to your choice. The most popular car services booked are **Swift Dzire, Etios, Ertiga, and Innova Crysta**. Most people opt for these cars, as they are among the most comfortable options available for rent from Mathura to Delhi.</p>
                <p>**Tips for Booking a Taxi**:- The best time to book a car or taxi is at least one or two weeks in advance. This ensures you get the best price and the car of your choice. Last-minute rental services are almost always more expensive, and there's a very high chance you won't get your preferred car.</p>
                <p>**Purposes of Taxi Booking**:- There can be many purposes for hiring a taxi, including airport transfers. If you're planning a weekend trip, you should definitely book in advance because there's usually a rush during weekends. Taxis are also available according to passenger capacity. Most people book taxis when they are traveling with close friends or family.</p>
                <br /> {/* Self-closing br tag */}
                <h3>About Mathura to Delhi Taxi</h3>
                <p>If you're planning to book a **Mathura to Delhi Taxi** for your return trip or a visit to Delhi from Mathura, hiring a cab is a good option. Traveling by a booked cab will make your journey interesting and amazing without much struggle or hustle.</p>
                <br /> {/* Self-closing br tag */}
                <h2>Mathura to Delhi Distance</h2>
                <p>The distance from **Mathura to Delhi is 183 km** by <a href="https://en.wikipedia.org/wiki/Yamuna_Expressway" target="_blank" rel="noopener noreferrer">Yamuna Expressway</a> and can be easily traveled with a booked cab or comfortable Mathura to Delhi taxi services. Cab services are available for one-way journeys or for a round trip.
                  So, if you are planning to travel from Mathura to Delhi, you can book a cab from Mathura to visit major cities in Delhi like Greater Noida, Gurgaon, Noida, and many more interesting places. Delhi has many monuments to visit and some very beautiful cafeterias and restaurants that you must visit on your trip.</p>
                <br /> {/* Self-closing br tag */}
                <h3>Why Choose Us</h3>
                <p>**mathuravrindavantaxiservices.com** is a popular travel company that offers a wide range of travel services, including cab bookings. Here are some reasons why you may choose to book a cab through Mathuravrindavantaxiservices:</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Convenience:</b> Mathuravrindavantaxiservices allows you to book a cab online, which is convenient and saves time. You can easily compare prices and options, and make a booking without having to go to a physical location.</p><br /> {/* Self-closing br tag */}
                <p><b>Wide range of options:</b> We have a variety of cabs, so you can choose from a range of options that suit your budget and preferences.</p><br /> {/* Self-closing br tag */}
                <p><b>24/7 customer support:</b> We offer 24/7 customer support, so you can contact us at any time if you have any issues or concerns with your booking.</p><br /> {/* Self-closing br tag */}
                <p><b>Transparent pricing:</b> Mathuravrindavantaxiservices pricing is transparent, so you know exactly what you're paying for, and there are no hidden charges.</p><br /> {/* Self-closing br tag */}
                <p><b>Discounts and Offers:</b> We offer discounts and special deals on cab bookings from time to time, which can help you save money.</p>
                <br /> {/* Self-closing br tag */}
                <h3>FAQ</h3>
                <p><b>How many types of cabs are available from Mathura to Delhi?</b></p>
                <p>The different types of taxis available for the Mathura to Delhi route include Sedan, Hatchback, and SUV.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Which is the most economical cab available for Mathura to Delhi?</b></p>
                <p>Hatchback like Indica and Swift are the most economical cabs for Mathura to Delhi.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>What is the minimum cab fare from Mathura to Delhi?</b></p>
                <p>The minimum cab fare from Mathura to Delhi is Rs. 1,899/- only.</p> {/* Corrected content to match title */}
                <br /> {/* Self-closing br tag */}
                <p><b>Is there any provision for pickup and drop-off service?</b></p>
                <p>Yes, pickup and drop-off service is available.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Are the taxis air-conditioned?</b></p>
                <p>Most taxis are air-conditioned.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Are there any toll charges on the route from Mathura to Delhi?</b></p>
                <p>Yes, there are toll charges on the route from Mathura to Delhi which will be paid by the passenger.</p>
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