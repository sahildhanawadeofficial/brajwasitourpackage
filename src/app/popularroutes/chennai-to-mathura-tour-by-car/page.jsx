import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // For example, if the image is at `public/tour/Chennai-to-Mathura-tour-by-car.webp`
  const carouselImageSrc = "/tour/Chennai-to-Mathura-tour-by-car.webp";

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
                      alt="Chennai to Mathura Taxi Hire on Rent" // Kept your descriptive alt text
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
              <h2>Chennai to Mathura Tour</h2>
              <p>You have to come yourself from Chennai to Delhi. Our cab will pick you up from the airport or
                station. After that, your Mathura Vrindavan tour by car will start from Delhi.</p><br /> {/* Self-closing br tag */}
              <p><strong>Day 1: Chennai to Delhi :</strong> <br /> {/* Self-closing br tag */}
                Take a flight from Chennai to New Delhi<br /> {/* Self-closing br tag */}
                Drive to Mathura (approximately 1.5 hours)<br /> {/* Self-closing br tag */}
                Checken in Hotel in Mathura</p><br /> {/* Self-closing br tag */}
              <p><strong>Day 2: Mathura :</strong> <br /> {/* Self-closing br tag */}
                After breakfast Visit the Shri Krishna Janmabhoomi
                temple and other nearby temples.<br /> {/* Self-closing br tag */}
                Drive to Vrindavan (approximately 30 minutes)
                Visit the Banke Bihari Temple, ISKCON temple, and other temples in Vrindavan</p><br /> {/* Self-closing br tag */}
              <p><strong>Day 3: Vrindavan to Delhi</strong><br /> {/* Self-closing br tag */}
                Fly back to Chennai</p>

              <QuickInquiry />

              <div className="gauto-leave-comment"> {/* Changed 'class' to 'className' */}
                <p><strong>Note:</strong> This itinerary can be customized based on your preferences and time
                  availability. Also, do check the current COVID-19 restrictions before planning your trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;