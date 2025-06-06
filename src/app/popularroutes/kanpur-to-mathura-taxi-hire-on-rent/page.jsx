import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const Page = () => {
  return (
    <>  <div class="col-lg-9">
      <div class="blog-page-left">
        <div class="single-blog">
          <div class="blog-image">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="tour/mathura-to-agra-taxi-hire-on-rent-1.webp" alt="Kanpur to Mathura Taxi Hire on Rent">
                </div>


              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="blog-text">
            <h2>Book Kanpur to Mathura Taxi/Cab</h2>



            <p>If you are planning Travel to Mathura from kanpur, booking a taxi or cab will be the best option. Kanpur To Mathura Taxi fare varies depending on the cab you choose. Kanpur To Mathura cab booking will be hassle - free. You can get a cab that is budget friendly. In case you want a luxurious trip you can go for the expensive cabs that have good space and are air - conditioned.</p>
            <br><br>
              <div class="row">
                <div class="call-box-inner12">
                  <table border="1" width="100%">
                    <tr><th>Select Car</th><th> Price</th><th> Booking Now</th></tr>
                    <tr><td>Swift Dzire </td><td>Rs. 9/KM</td><td><a href="#" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr>
                    <tr><td>Ertiga </td><td>Rs. 11/KM</td><td><a href="#" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr>
                    <tr><td>Innova</td><td>Rs. 14/KM</td><td><a href="#" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr>
                    <tr><td>Innova Crysta</td><td>Rs. 16/KM</td><td><a href="#" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr>
                    <tr><td>Etios</td><td>Rs. 10/KM</td><td><a href="#" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr>
                    <tr><td>Scorpio</td><td>Rs. 15/KM</td><td><a href="#" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr>
                    <tr><td>Marazzo</td><td>Rs. 14/KM</td><td><a href="#" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> Book Now</a></td></tr>

                  </table>
                </div>
              </div>

              <QuickInquiry />
              <div class="gauto-leave-comment">

                <h2>Distance Covered by Kanpur To Mathura Cab</h2>
                <p>The distance between Kanpur To Mathura by car is around 337 km. And the time taken is around 5 to 6 hours. The distance will of course change if you change the route. The time can also differ according to the traffic conditions. The time taken to cover also depends on your speed and your stoppage time during the journey.
                </p>
                <br>
                  <h3>Type of Kanpur To Mathura Taxi available are</h3>
                  <p>Kanpur To Mathura Taxi options range from 4-seater to 16 seater. The price of the vehicle also very according to the passenger capacity and luggages.
                    You will get Kanpur To Mathura taxi fully air-conditioned and the drivers which you will get for your journey or really experienced and drivers ensure your safety on the journey.</p>
              </div>
            </div>

          </div>




        </div>
      </div> </>
      );
};

      export default Page;
