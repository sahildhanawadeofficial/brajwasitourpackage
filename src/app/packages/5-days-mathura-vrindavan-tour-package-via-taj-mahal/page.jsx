import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';
import Image from 'next/image';

const DaysMathuraVrindavanTourPackageViaTajMahal = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            {/* Carousel */}
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="/tour/5-days-mathura-tour-with-tajmahal.webp"
                      alt="Mathura tour with Taj Mahal"
                    />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* Tour Info */}
            <div className="blog-text">
              <ul>
                <li><strong><i className="fa fa-map-marker" /> Duration:</strong> 4 Nights | 5 Days</li>
                <li><strong><i className="fa fa-clock-o" /> Destination:</strong> Delhi - Mathura - Vrindavan - Delhi</li>
                <li><strong><i className="fa fa-car" /> Transport:</strong> Hatchback - Sedan - SUV</li>
                <li><strong><i className="fa fa-cutlery" /> Meal Plan:</strong> Breakfast</li>
              </ul>

              <h2>Description :</h2>
              <p>Here's a suggested 5-day itinerary for a Mathura and Agra tour package from Delhi:</p>

              {/* Package Inclusion & Exclusion */}
              <div className="row py-4">
                <div className="col-md-12">
                  <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                    Package Inclusion | Exclusion
                  </h5>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> Guide Services</div>
                  <div><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> Entrance Fees</div>
                  <div><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> Transportation in destination</div>
                  <div><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> Toll, State Tax, Driver Batta</div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div><i className="fa fa-times" style={{ fontSize: 24, color: 'red' }} /> Flight & Train Tickets</div>
                  <div><i className="fa fa-times" style={{ fontSize: 24, color: 'red' }} /> Camera Charges</div>
                  <div><i className="fa fa-times" style={{ fontSize: 24, color: 'red' }} /> Elephant Ride</div>
                  <div><i className="fa fa-times" style={{ fontSize: 24, color: 'red' }} /> Room Service Fees</div>
                </div>
              </div>

              {/* Itinerary */}
              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary : 5 DAYS MATHURA VRINDAVAN TOUR</h3>

                  <h4><strong>Day 1: </strong><span style={{ color: '#ec3323' }}>Delhi to Mathura</span></h4>
                  <p>
                    Depart for Mathura from Delhi (approx. 3 hours)<br />
                    Visit Banke Bihari Temple<br />
                    Explore Mathura Museum<br />
                    Attend evening aarti at Dwarkadheesh Temple
                  </p>

                  <h4><strong>Day 2: </strong><span style={{ color: '#ec3323' }}>Mathura Sightseeing</span></h4>
                  <p>
                    Visit Shri Krishna Janmabhoomi<br />
                    Explore Kusum Sarovar & Radha Kund<br />
                    Visit Govardhan Hill
                  </p>

                  <h4><strong>Day 3: </strong><span style={{ color: '#ec3323' }}>Mathura to Agra</span></h4>
                  <p>
                    Depart for Agra (approx. 1.5 hours)<br />
                    Visit Taj Mahal at sunset
                  </p>

                  <h4><strong>Day 4: </strong><span style={{ color: '#ec3323' }}>Agra Sightseeing</span></h4>
                  <p>
                    Visit Agra Fort<br />
                    Explore Tomb of Itimad-ud-Daulah<br />
                    Visit Akbar's Tomb in Sikandra
                  </p>

                  <h4><strong>Day 5: </strong><span style={{ color: '#ec3323' }}>Return to Delhi</span></h4>
                  <p>Return to Delhi (approx. 3 hours drive)</p>
                </div>
              </div>

              {/* Inquiry Form */}
              <QuickInquiry />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaysMathuraVrindavanTourPackageViaTajMahal;
