import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // For example, if the image is at `public/tour/jaipur-to-agra-taxi-hire-on-rent-1.webp`
  const carouselImageSrc = "/tour/jaipur-to-agra-taxi-hire-on-rent-1.webp";

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
                      alt="Jaipur to Agra Taxi Hire on Rent" // Added a descriptive alt text
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
              <h2>Book Jaipur to Agra Taxi/Cab</h2>

              <p>If you are planning a trip, avail **Jaipur to Agra taxi** as it is budget-friendly. The reason why you should choose Jaipur to Agra Cabs is <a href="/jaipur-to-agra-taxi-hire-on-rent" target="_blank" rel="noopener noreferrer">mathuravrindavantaxiservices.com's</a> top rated services, affordable prices, reliable drivers who are fluent in English, clean and spacious cabs, and much more.
              </p>
              <p>Jaipur, the capital of Rajasthan, was founded by Raja Jai Singh in 1727. The city is famous for its forts and royal palaces. The distance between **Jaipur to Agra is 238 kms** which will take around 4 to 5 hours to reach the destination. </p>
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

                <h2>Places while you are traveling from Jaipur to Agra via road
                </h2>
                <p><strong>&#x2022;</strong> The sunset of Jal Mahal is very beautiful. You must visit this place in the evening time.</p>
                <p><strong>&#x2022;</strong> In case you are willing to experience Rajasthani culture you can visit Chokhi Dhani.</p>
                <p><strong>&#x2022;</strong> There are various bazaars in Jaipur such as Johari bazaar, Chandpole bazaar and Tripolia bazar.</p>
                <p><strong>&#x2022;</strong> You can enjoy an elephant ride at Amer Fort.</p>
                <br /> {/* Self-closing br tag */}
                <h3>Here are some popular tourist places in Agra</h3>
                <p><strong>Once you reach Agra, You can visit many popular places such as -</strong></p>
                <br /> {/* Self-closing br tag */}
                <p><strong>&#x2022; <a href="https://en.wikipedia.org/wiki/Akbar%27s_tomb" target="_blank" rel="noopener noreferrer">Sikandra- Akbar's Tomb</a> -</strong> is a beautiful square garden of the four-plot plan which is divided into quarters by red sandstone. </p>
                <br /> {/* Self-closing br tag */}
                <p><strong>&#x2022; Soor Sarovar Bird Sanctuary -</strong> Soor Sarovar Bird Sanctuary is situated on the bank of river Yamuna. This site also has the famous sloth bear shelter home and a hospital for elephants.</p>
                <br /> {/* Self-closing br tag */}
                <p><strong>&#x2022; Mehtab Bagh -</strong> The Mehtab Bagh garden is a beautiful garden on the bank of the Yamuna river which is opposite the Taj Mahal.</p>
                <br /> {/* Self-closing br tag */}
                <p><strong>&#x2022; Tomb Of Salim Chishti -</strong> Tomb of Salim Chishti is one of the finest examples of Mughal architecture. The religious center for Muslims is the Dargah or Tomb of Sheikh Salim Chisti.</p>
                <br /> {/* Self-closing br tag */}
                <p><strong>&#x2022; Taj Museum -</strong> The Taj Museum is a small museum which is located inside the Taj Mahal complex. </p>
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