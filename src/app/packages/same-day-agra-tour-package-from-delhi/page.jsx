import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';
import Image from 'next/image';


const SameDayAgraTourPackageFromDelhi = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      className="d-block w-100"
                      src="/tour/same-day-agra-tour-from-delhi.webp"
                      alt="Same Day Agra Tour from Delhi"
                      width={800}
                      height={400}
                      layout="responsive"
                    />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

            <div className="blog-text">
              <ul>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;&nbsp;
                    </strong>
                    1 Nights | 2 Day
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-clock-o" aria-hidden="true"></i> Destination:&nbsp;&nbsp;
                    </strong>
                    Delhi - Agra - Delhi
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-car" aria-hidden="true"></i> Transport :
                    </strong>
                    &nbsp; &nbsp;Hatchback - Sedan - SUV (Car)
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      <i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:
                    </strong>
                    &nbsp; &nbsp;Breakfast
                  </div>
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                Agra is located on the banks of the famous Indian River Yamuna. Widely popular among
                the history buffs as well as among the architectural buffs, this city takes you down
                the timeline to explore the bests of the Mughal art and culture.
              </p>
              <p>
                This city is referred to for its engineering wonders as well as astounding treats.
                These Same Day Agra tour from Delhi by car packages are organized in such a way that
                you can cover all major tourist attractions in Agra efficiently.
              </p>

              <div className="row mt-4">
                <div className="col-md-12 py-4">
                  <h5 className="font-size-21 font-weight-bold text-dark mb-4">
                    Package Inclusion | Exclusion
                  </h5>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Guide Services
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Entrance Fees
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> All transportation in destination location
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Toll Tax, State Tax, Driver Batta (Charges)
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Flight & train ticket.
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Camera Charges
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Elephant Ride.
                  </div>
                  <div className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Room Service Fees
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="call-box-inner12">
                  <h3>Itinerary : Same Day Agra Tour From Delhi</h3>
                  <br />
                  <br />
                  <h4>
                    <strong>Day 1</strong>
                    <strong>&nbsp;:&nbsp;&nbsp;</strong>
                    <span style={{ color: 'rgb(236, 51, 35)' }}>
                      Early Morning Transfer to Agra
                    </span>
                  </h4>
                  <br />
                  <p>
                    Early morning pick up (6:00 AM) from DELHI and proceed towards Agra by Car via
                    Yamuna Expressway. After a 3.5-hour journey, visit the Taj Mahal, Agra Fort, and
                    optionally Baby Taj or Sikandra Fort. By 8:00 PM, proceed to Delhi for return.
                  </p>
                </div>
              </div>

              <QuickInquiry />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SameDayAgraTourPackageFromDelhi;
