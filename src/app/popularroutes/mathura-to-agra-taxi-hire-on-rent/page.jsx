import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
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
                      alt="Mathura to Agra Taxi Hire on Rent" // Added a descriptive alt text
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
              <h2>Book Mathura to Agra Taxi/Cab</h2>

              <p>You can book a **Mathura to Agra Taxi** and explore its various beautiful spots. There are a lot of private and public transportation options by which you can reach Agra, but traveling via a cab is the best option you can choose. Most people plan a short vacation to some beautiful destination during holidays. Where better to go for a lovely holiday than to the great example of architecture, A visit to Agra wouldn’t be complete without it. If you are planning to see Taj Mahal, then the best option is to book a **cab from Mathura to Agra**.</p>
              <br /> {/* Self-closing br tag */}
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <h2>Mathura To Agra Taxi fares according to Per/KM </h2>
                  <p>If you hire a taxi on a per kilometer basis, you have to pay separately the charges like driver charges, toll tax, and parking etc.</p>
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
                  <h2>Mathura To Agra Taxi One Way and Round Trip Fares</h2>
                  <p>If you hire a one-way or round trip taxi, all the charges are included in it, like toll tax, state tax etc. You have to make a full payment once.</p>
                  <br /> {/* Self-closing br tag */}
                  <table border="1" width="100%">
                    <thead> {/* Added for semantic HTML */}
                      <tr><th>Select Car</th><th>One Way</th><th>Round Trip</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>SEDAN- Swift Dzire/Etios/Similar </td><td>-</td><td>Rs. 2,600/-</td></tr>
                      <tr><td>HATCHBACK- Indica/Swift/Similar</td><td>-</td><td>Rs. 2,700/-</td></tr>
                      <tr><td>SUV- Xylo/Ertiga/Similar</td><td>-</td><td>Rs. 3,700/-</td></tr>
                      <tr><td>SUV- Innova Crysta</td><td>-</td><td>Rs. 4,500/-</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <QuickInquiry />
              <div className="gauto-leave-comment"> {/* Changed 'class' to 'className' */}

                <h3>Mathura to Agra Car Rental Services</h3>
                <p>Agra is a very popular tourist destination for people around the world. Most people come to Agra to see the beauty of the Taj Mahal and it is crowded with tourists all over the year.</p>
                <p>**How to make our journey comfortable** :- For a convenient and comfortable journey, **Mathura to Agra taxi service** is available at a very convenient price. Booking a taxi from Mathura to Agra is a very convenient way to travel. Avoid the crowd on public transport and have a comfortable journey with your loved ones. Most people opt for car rental services from Mathura to Agra. People book their taxi or cab online which comes to their location to start the journey. </p>
                <p>**Fact About Taxi Booking**:- The booking taxi service from Mathura to Agra is available at any time during the year but most people book during the weekends. Prices of the car rental service also vary according to the time when you book it. The prices are high during the weekends because service is mostly in demand during that time. You will get the same cars at a comparatively low rate during the weekdays.</p>
                <h3>Mathura to Agra Car Rental Services</h3> {/* Duplicate heading, consider consolidating or rephrasing */}
                <p>Booking **Mathura to Agra taxi service** will assure you a reliable and safe journey. We have a wide range of options available for taxis to book online. By booking any of the taxi services, you will have a great trip with your family and friends. The most common type of cabs which people book are **Swift Dzire, Etios, Ertiga, and Innova Crysta**. Many more options are also available but these are the most commonly chosen.</p>
                <p>mathuravrindavantaxiservices.com is the best taxi provider for your journey. You will get a well-experienced driver for your journey who will take you from Mathura to Agra and ensure your safety during the journey. You will also get a short break during your road trip. You can choose the halt according to your choice. Various stoppages are made during the journey where you can freshen up and have food. You will get a trustworthy driver for your journey who knows the route and destination very well. You can also direct him to visit places according to your choice.</p>
                <h3>Taxis available from Mathura to Delhi</h3> {/* This section seems out of place as the page is about Mathura to Agra. Consider removing or renaming. */}
                <p>The best time to book a car or taxi is to book it at least one or two weeks ahead in advance so that you can get it at the best price and also the car of your choice. Last-minute rental services are always expensive and there is a very high chance that you won't get the car of your choice. Also, if you're planning for a weekend trip, you must book it in advance because there is a rush of booking during the weekends. Taxis are also available according to passenger capacity. Most people book taxis when they are going with their close friends or family.</p>
                <p>There is a list of many taxis available on the company's website where you can see the rating of each car and book it according to your choice. The most popular car services which are booked are Swift Dzire, Etios, Ertiga, and Innova Crysta. Most people go for these cars. These are some of the most comfortable cars on rent available from Mathura to Delhi. {/* Again, 'Mathura to Delhi' here. */}
                  The taxis you will get are in very good condition and very comfortable. </p>
                <br /> {/* Self-closing br tag */}
                <h3>Distance Covered by Mathura to Agra Taxi</h3> {/* Corrected Marhura to Mathura */}
                <p>Distance between Mathura and Agra is **60 KM** which will take around 1 to 1.5 hours to reach. You get to experience beautiful views during the road trip from Mathura to Agra. You can experience a comfortable and hassle-free ride at affordable prices by booking a **Mathura to Agra cab online** from <a href="/" target="_blank" rel="noopener noreferrer">mathuravrindavantaxiservices.com</a>.</p> {/* Updated internal link and added best practices */}
                <br /> {/* Self-closing br tag */}
                <h3>Why Choose Us</h3> {/* Capitalized for consistency */}
                <p>mathuravrindavantaxiservices.com is a popular travel company that offers a wide range of travel services, including cab bookings. Some reasons why you may choose to book a cab through Mathuravrindavantaxiservices include:</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Convenience:</b> Mathuravrindavantaxiservices allows you to book a cab online, which is convenient and saves time. You can easily compare prices and options, and make a booking without having to go to a physical location.</p><br /> {/* Self-closing br tag */}
                <p><b>Wide range of options:</b> We have a variety of cabs, so you can choose from a range of options that suit your budget and preferences.</p><br /> {/* Self-closing br tag */}
                <p><b>24/7 customer support:</b> We offer 24/7 customer support, so you can contact us at any time if you have any issues or concerns with your booking.</p><br /> {/* Self-closing br tag and 'We offers' to 'We offer' */}
                <p><b>Transparent pricing:</b> Mathuravrindavantaxiservices pricing is transparent, so you know exactly what you're paying for and there are no hidden charges.</p><br /> {/* Self-closing br tag */}
                <p><b>Discounts and Offers:</b> We offer discounts and special deals on cab bookings from time to time, which can help you save money.</p>
                <br /> {/* Self-closing br tag */}
                <h2>About Agra</h2> {/* Capitalized for consistency */}
                <p><a href="https://en.wikipedia.org/wiki/Agra" target="_blank" rel="noopener noreferrer"><b>Agra</b></a> is a beautiful tourist destination in India. You can have an enjoyable time with your family and friends there. Also, you will get to visit many monuments which are examples of beautiful architecture. The Taj Mahal, with its mesmerizing beauty, explains why it’s regarded as one of the eight wonders of the world, built by the Mughal Emperor Shah Jahan in memory of his late wife Mumtaz Mahal.</p> {/* Added target and rel for external link, corrected spacing */}
                <br /> {/* Self-closing br tag */}
                <h3>FAQ</h3>
                <p><b>How many types of cabs are available for Mathura to Agra?</b></p>
                <p>The different types of taxis available for the Mathura to Agra route include Sedan, SUV, and Tempo Traveller.</p> {/* Corrected "Delhi to Mathura" to "Mathura to Agra" */}
                <br /> {/* Self-closing br tag */}
                <p><b>Which is the most economical cab available for Mathura to Agra?</b></p>
                <p>Hatchback like Indica and Swift is the most economical cab for Mathura to Agra.</p> {/* Corrected "Like Like" to "like" */}
                <br /> {/* Self-closing br tag */}
                <p><b>What are the cab booking options available?</b></p>
                <p>For advance booking, you have to make 30 to 40% payment online by Paytm, PhonePe, Google Pay, etc.</p> {/* Corrected capitalization of payment apps */}
                <br /> {/* Self-closing br tag */}
                <p><b>How long does it take to travel from Mathura to Agra by taxi?</b></p>
                <p>The approximate driving distance between Mathura and Agra is around 65km and it takes around 1.5 to 2 hours by taxi, depending on traffic conditions.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Are there any toll charges on the route from Mathura to Agra?</b></p>
                <p>Yes, there are toll charges on the route from Mathura to Agra which will be paid by the passenger.</p> {/* Added period */}
                <br /> {/* Self-closing br tag */}
                <p><b>Is there any provision for pickup and drop-off service?</b></p>
                <p>Yes, pickup and drop-off service is available.</p>
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