import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry'; // Ensure this path is correct

const Page = () => {
  // Define the image path. Assuming your image is in the 'public' folder.
  // CRITICAL: The alt text is "Rajkot to Mathura", but the src is still likely a generic one.
  // If you have a specific image for Rajkot to Mathura, update this path.
  const carouselImageSrc = "/tour/rajkot-to-mathura-tour-by-car.webp";

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
                      alt="Rajkot to Mathura Tour By Car" // Alt text is good
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
              <h2>Mumbai to Mathura Tour</h2> {/* This heading might need to be updated to "Rajkot to Mathura Tour" if content changes */}

              <p>You'll need to arrange your travel from **Mumbai to Delhi** independently. Our cab will pick you up from the airport or station in Delhi. After that, your **Mathura Vrindavan tour by car** will begin from Delhi.</p>
              <br /> {/* Self-closing br tag */}

              <p>
                <strong>Day 1: Mumbai to Delhi &amp; Onward to Mathura</strong>
                <br /> {/* Self-closing br tag */}
                Take a flight from Mumbai to New Delhi.
                <br /> {/* Self-closing br tag */}
                Drive to Mathura (approximately 1.5 hours).
                <br /> {/* Self-closing br tag */}
                Check in to your hotel in Mathura.
              </p>
              <br /> {/* Self-closing br tag */}

              <p>
                <strong>Day 2: Mathura Exploration</strong>
                <br /> {/* Self-closing br tag */}
                After breakfast, visit the Shri Krishna Janmabhoomi temple and other nearby temples.
                <br /> {/* Self-closing br tag */}
                Drive to Vrindavan (approximately 30 minutes).
                <br /> {/* Self-closing br tag */}
                Visit the Banke Bihari Temple, ISKCON temple, and other temples in Vrindavan.
              </p>
              <br /> {/* Self-closing br tag */}

              <p>
                <strong>Day 3: Vrindavan to Delhi &amp; Return to Mumbai</strong>
                <br /> {/* Self-closing br tag */}
                Fly back to Mumbai.
              </p>

              <QuickInquiry />

            </div> {/* Closing blog-text div */}
          </div> {/* Closing single-blog div */}
        </div> {/* Closing blog-page-left div */}
      </div> {/* Closing col-lg-9 div */}
    </>
  );
};

export default Page;