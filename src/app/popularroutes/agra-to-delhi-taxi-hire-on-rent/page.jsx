import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Assuming QuickInquiry.jsx exists in src/components

// You'll need to adjust the import path for your image based on its actual location.
// For example, if your image is in `public/tour/agra-to-delhi-taxi-hire-on-rent-1.webp`
// then you would just reference `/tour/agra-to-delhi-taxi-hire-on-rent-1.webp` directly in the src prop
// and Next.js will handle it, or import it if it's in the `src` directory.

// For demonstration, let's assume the image is in the 'public' folder.
// If it's in `public/tour/agra-to-delhi-taxi-hire-on-rent-1.webp`,
// you can directly use the path in the `src` prop for the <Image> component.
// You MUST provide width and height for next/image. If you don't know them,
// you can set `fill` or use a library to get them dynamically.
// For this example, I'll use arbitrary values; please replace them with actual dimensions.
const taxiImage = "/tour/agra-to-delhi-taxi-hire-on-rent-1.webp"; // Path from the 'public' directory

const Page = () => {
  return (
    <>
      <div className="col-lg-9"> {/* Changed class to className */}
        <div className="blog-page-left"> {/* Changed class to className */}
          <div className="single-blog"> {/* Changed class to className */}
            <div className="blog-image"> {/* Changed class to className */}
              {/* Note: Bootstrap Carousel needs Bootstrap JS and jQuery to function.
                  Ensure they are loaded in your _app.js or a custom Document.
                  For Next.js, it's often better to use react-bootstrap components
                  or manage state for carousel logic. */}
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"> {/* Changed class to className */}
                <div className="carousel-inner"> {/* Changed class to className */}
                  <div className="carousel-item active"> {/* Changed class to className */}
                    {/* Using Next.js Image component for optimization */}
                    <Image
                      className="d-block w-100" // Changed class to className
                      src={taxiImage}
                      alt="Agra to Delhi Taxi Hire on Rent"
                      width={800} // IMPORTANT: Replace with actual width of your image
                      height={500} // IMPORTANT: Replace with actual height of your image
                      priority // Use priority if this is an LCP image
                    />
                  </div>
                  {/* If you have more carousel items, add them here */}
                  {/* <div className="carousel-item">...</div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> {/* Changed class to className */}
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span> {/* Changed class to className */}
                  <span className="sr-only">Previous</span> {/* Changed class to className */}
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> {/* Changed class to className */}
                  <span className="carousel-control-next-icon" aria-hidden="true"></span> {/* Changed class to className */}
                  <span className="sr-only">Next</span> {/* Changed class to className */}
                </a>
              </div>
            </div>
            <div className="blog-text"> {/* Changed class to className */}
              <h2>Book Agra to Delhi Taxi/cab</h2>

              <p>If you are planning to travel to Delhi from Agra, booking a taxi or cab will be the best option.
                <strong>Agra to Delhi taxi</strong> fare varies depending on the cab you choose. <a
                  href="https://www.duracabs.com/route/agra-uttar-pradesh-to-new-delhi-delhi"> Agra to Delhi cab
                  booking</a> will be hassle - free. You can get a cab that is budget friendly. In case you want a
                luxurious trip you can go for the expensive cabs that have good space and are air - conditioned.</p>
              <br /> {/* Self-closing br tag */}
              <div className="row"> {/* Changed class to className */}
                <div className="call-box-inner12"> {/* Changed class to className */}
                  <h2>Agra To Delhi Taxi fares according to Per/KM </h2>
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
                    <tbody> {/* Added tbody for semantic HTML */}
                      <tr>
                        <td>Swift Dzire </td>
                        <td>Rs. 9/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book {/* Changed class to className */}
                          Now</a></td>
                      </tr>
                      <tr>
                        <td>Ertiga </td>
                        <td>Rs. 11/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book {/* Changed class to className */}
                          Now</a></td>
                      </tr>
                      <tr>
                        <td>Innova</td>
                        <td>Rs. 14/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book {/* Changed class to className */}
                          Now</a></td>
                      </tr>
                      <tr>
                        <td>Innova Crysta</td>
                        <td>Rs. 16/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book {/* Changed class to className */}
                          Now</a></td>
                      </tr>
                      <tr>
                        <td>Etios</td>
                        <td>Rs. 10/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book {/* Changed class to className */}
                          Now</a></td>
                      </tr>
                      <tr>
                        <td>Scorpio</td>
                        <td>Rs. 15/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book {/* Changed class to className */}
                          Now</a></td>
                      </tr>
                      <tr>
                        <td>Marazzo</td>
                        <td>Rs. 14/KM</td>
                        <td><a href="#" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book {/* Changed class to className */}
                          Now</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row"> {/* Changed class to className */}
                <div className="call-box-inner12"> {/* Changed class to className */}
                  <h2>Agra To Delhi Taxi One Way and Round Trip Fares</h2>
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
                    <tbody> {/* Added tbody for semantic HTML */}
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

              <div className="gauto-leave-comment"> {/* Changed class to className */}

                <h3>Agra to Delhi Distance by taxi</h3>
                <p>The distance between Agra to Delhi is around <strong>233 km</strong> which will take around 5 hours
                  to reach the destination. There are two routes to reach Delhi, first is via NH 19 and NH 44 and the
                  second is Yamuna expressway.
                  The Yamuna expressway is the new route which takes less time to reach the destination. Usually cabs
                  take this route as it takes less time and provides a better journey.
                </p>
                <br /> {/* Self-closing br tag */}
                <h3>Places on the way while traveling from Agra to Delhi.</h3>
                <p>While you are traveling from Agra to Delhi via cab there are places that are of historic,
                  religious, and have its own cultural importance. While travelling from Agra to Delhi you will pass
                  through towns like Gokul, Vrindavan, Mathura, and Aligarh. You can also stop by the famous temples
                  and the iconic places that lie on the way. You can also explore tourist places such as
                  Maqbara-e-Paik
                  Baradari at Qudsia Garden, Ghalib Haveli, Safdarjung Fort, <a href="https://www.w3schools.com/">Jahaz
                    Mahal</a>, Mutiny Memorial at Northern Bridge and many more.
                </p>
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
                <h3>FAQ</h3>
                <p><b>How long does it take to travel from Agra to Delhi by taxi?</b></p>
                <p>The approximate driving distance between Agra to Delhi is around 230km and it takes around 4-5
                  hours by taxi, depending on traffic conditions.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>What are the different types of taxis available for the Agra to Delhi route?</b></p>
                <p>The different types of taxis available for the Agra to Delhi route include Hatchback, Sedan, SUV,
                  and Tempo Traveller.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Which is the most economical cab available for Agra to Delhi?</b></p>
                <p>Hatchback and Sedan most economical cabs from Agra to Delhi Trip.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>What are the payment options for booking a cab ?</b></p>
                <p>For advance booking you have to make 30 to 40% payment online by paytm, phonepe, googlepay etc.</p>
                <br /> {/* Self-closing br tag */}
                <p><b>Can I book a round trip taxi from Agra to Delhi?</b></p>
                <p>Yes, you can book a round trip taxi from Agra to Delhi. You can either book a taxi for one-way or
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