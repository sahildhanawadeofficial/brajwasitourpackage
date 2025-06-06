import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // E.g., if the image is at `public/tour/ahmedabad-to-mathura-tour-by-car.webp`
  const carouselImageSrc = "/tour/ahmedabad-to-mathura-tour-by-car.webp";

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
                      alt="Ahmedabad to Mathura Tour By Car" // Kept your descriptive alt text
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
              <h2>Ahmedabad to Mathura Tour</h2>
              <p>You have to come yourself from Ahmedabad to Delhi. Our cab will pick you up from the airport
                or station. After that, your Mathura Vrindavan tour by car will start from Delhi.</p><br /> {/* Self-closing br tag */}
              <p><strong>Day 1: Ahmedabad to Delhi :</strong> <br />
                Take a flight from Ahmedabad to New Delhi<br />
                Drive to Mathura (approximately 1.5 hours)<br />
                Checken in Hotel in Mathura</p><br /> {/* Self-closing br tag */}
              <p><strong>Day 2: Mathura :</strong> <br />
                After breakfast Visit the Shri Krishna Janmabhoomi
                temple and other nearby temples.<br />
                Drive to Vrindavan (approximately 30 minutes)<br />
                Visit the Banke Bihari Temple, ISKCON temple, and other temples in Vrindavan</p><br /> {/* Self-closing br tag */}
              <p><strong>Day 3: Vrindavan to Delhi</strong><br />
                Fly back to Ahmedabad</p>

              <QuickInquiry />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;