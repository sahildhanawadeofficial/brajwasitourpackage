import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // For example, if the image is at `public/tour/delhi-to-mathura-taxi-hire-on-rent-1.webp`
  const carouselImageSrc = "/tour/delhi-to-mathura-taxi-hire-on-rent-1.webp";

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
                      alt="Delhi to Mathura Taxi Hire on Rent" // Added a descriptive alt text
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
              <h2>Book Delhi to Mathura Taxi/Cab</h2>

              <p>The distance from Delhi to Mathura is 165 km through road and can be easily travelled by road. With comfortable **Delhi to Mathura taxi services**, travelers can also book a one-way and travel most comfortably.
                So, if you are planning to travel from Delhi to Mathura you can book a cab to Mathura from major cities in Delhi like Greater Noida, Gurgaon, Noida and many more places.
              </p>
              <br /> {/* Self-closing br tag */}
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <h2>Delhi To Mathura Taxi fares according to Per/KM </h2>
                  <p>If you hire a taxi on a per kilometre basis, you have to pay separately the charges like driver charges, toll tax, and parking etc.</p>
                  <br /> {/* Self-closing br tag */}
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
              <div className="row"> {/* Changed 'class' to 'className' */}
                <div className="call-box-inner12"> {/* Changed 'class' to 'className' */}
                  <h2>Delhi To Mathura Taxi One Way and Round Trip Fares</h2>
                  <p>If you hire a one way or round trip taxi then all the charges are included in it like toll tax, state tax etc. You have to make a full payment once.</p>
                  <br /> {/* Self-closing br tag */}
                  <table border="1" width="100%">
                    <thead> {/* Added for semantic HTML */}
                      <tr><th>Select Car</th><th>One Way</th><th>Round Trip</th></tr>
                    </thead>
                    <tbody> {/* Added for semantic HTML */}
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

                <h3>Delhi to Mathura Car Rental Services</h3>
                <p>Mathura is a very popular devotional tourist spot in India. Most people come to Mathura to see the temples of Shri Krishna. There are many more temples in Mathura to visit. The distance from Delhi to Mathura is 164 km by road and can be easily travelled by road.</p>
                <p>You can travel from Delhi to Mathura by a booked taxi or with a comfortable <a href="https://indiarentacar.com/outstation/delhi-to-mathura-cab-taxi/" target="_blank" rel="noopener noreferrer">Delhi to Mathura taxi</a>. Taxi Services are **available for one-way journeys** or for round trips. Mathura is crowded mostly during the festival of Holi.</p>
                <p>Mathura is celebrated in a very unique way in Mathura and most of the people come here to be a part of the Holi celebration. And if you are planning to visit Mathura during the festive season of the year, you should definitely book your taxi in advance to avoid the last-minute rush.
                  The prices of the taxis also may hike during the festival and they can be conveniently low during the non-festive season.</p>
                <h3>Taxis available from Delhi to Mathura</h3>
                <p>The most common book taxis are **Sedan cars, SUV cars, and Crysta car**. People find it convenient to book these taxis because they come at a very convenient price and are very comfortable during the journey.</p>
                <p><strong>Know these things before booking a taxi:-</strong> These taxis are always in demand and you must book them one or two weeks in advance to get the desired taxi of your choice. Instant booking of taxis may cost a bit higher than the normal price. Also because the taxis are in heavy demand during some time of the year, the price may fluctuate accordingly. </p>
                <p><strong>Benefits of hiring taxi:-</strong> Most people choose to book taxis from Delhi to Mathura because it is a very convenient means of transport at an affordable price. You don't have to spend a lot of money and many people can travel together by booking a taxi. </p>
                <p>Travelling from Delhi to Mathura is the most commonly chosen journey during March around the festival of Holi. Many people visit Mathura to see the festival of Holi in the Krishna temple. You can travel comfortably with your family, friends and close ones. The journey is already planned and you don't have to think about covering all the places.</p>
                <br /> {/* Self-closing br tag */}
                <h3>About Delhi to Mathura Taxi</h3>
                <p>There are many high-quality **Delhi to Mathura taxi** and cabs services available on <a href="/" target="_blank" rel="noopener noreferrer">mathuravrindavantaxiservices.com</a> at pocket-friendly fares. However, travelers can also book a one-way cab fare from Delhi to Mathura or a round trip cab. Most people like to travel in luxurious and comfortable taxis to make their journey memorable. The price of the taxi varies according to the sitting capacity of passengers and the facilities provided.</p>
                <br /> {/* Self-closing br tag */}
                <p>You will get the best taxi service to travel the distance most comfortably and also budget-friendly. There are also a wide variety of services for your comfortable travel experience from <a href="https://en.wikipedia.org/wiki/Delhi" target="_blank" rel="noopener noreferrer">Delhi</a> to Mathura.
                  For booking a cab, you will get a list of cabs with their price and you can choose one from it according to the passenger capacity and your budget.</p>
                <br /> {/* Self-closing br tag */}
                <h3>Why choose us</h3>
                <p>mathuravrindavantaxiservices.com is a popular travel company that offers a wide range of travel services, including cab bookings. Some reasons why you may choose to book a cab through Mathuravrindavantaxiservices include:</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Convenience:</b> Mathuravrindavantaxiservices allows you to book a cab online, which is convenient and saves time. You can easily compare prices and options, and make a booking without having to go to a physical location.</p><br /> {/* Self-closing br tag */}
                <p><b>Wide range of options:</b> We have a variety of cabs, so you can choose from a range of options that suit your budget and preferences.</p><br /> {/* Self-closing br tag */}
                <p><b>24/7 customer support:</b> We offers 24/7 customer support, so you can contact them at any time if you have any issues or concerns with your booking.</p><br /> {/* Self-closing br tag */}
                <p><b>Transparent pricing:</b> Mathuravrindavantaxiservices pricing is transparent, so you know exactly what you're paying for and there are no hidden charges.</p><br /> {/* Self-closing br tag */}
                <p><b>Discounts and Offers:</b> We offers discounts and special deals on cab bookings from time to time, which can help you save money.</p>
                <br /> {/* Self-closing br tag */}
                <h3>FAQ</h3>
                <p><b>How long does it take to travel from Delhi to Mathura by taxi?</b></p>
                <p>The approximate driving distance between Delhi and Mathura is around 200km and it takes around 4-5 hours by taxi, depending on traffic conditions.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>What are the different types of taxis available for the Delhi to Mathura route?</b></p>
                <p>The different types of taxis available for the Delhi to Mathura route include Sedan, SUV, and Tempo Traveller.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Are there any toll charges on the route from Delhi to Mathura?</b></p>
                <p>Yes, there are toll charges on the route from Delhi to Mathura which will be paid by the passenger.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Are the taxis air-conditioned?</b></p>
                <p>Yes, all taxis are air-conditioned.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Can I book a round trip taxi from Delhi to Mathura?</b></p>
                <p>Yes, you can book a round trip taxi from Delhi to Mathura. You can either book a taxi for one-way or round trip as per your requirement.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Which is the most economical cab available for Delhi to Mathura?</b></p>
                <p>HATCHBACK Cars like Indica and Swift are most economical cab for Delhi to Mathura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;