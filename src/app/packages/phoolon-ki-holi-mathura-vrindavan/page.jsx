import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';

const Phoolon_ki_holi_mathura_vrindavan = () => {
  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <div className="single-blog">
          <div className="blog-image">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="/tour/phoolon-ki-holi.webp" alt="Phoolon Ki Holi Tour" />
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
              <li><strong><i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;</strong>Mathura – Vrindavan – Barsana – Nandgaon</li>
              <li><strong><i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;</strong>4-Days</li>
              <li><strong><i className="fa fa-car" aria-hidden="true"></i> Transport:&nbsp;</strong>Private AC Vehicle</li>
              <li><strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:&nbsp;</strong>Breakfast Included</li>
            </ul>

            <h2>Description :</h2>
            <p>
              Celebrate the most vibrant Holi festival with Phoolon Ki Holi in Vrindavan and the grand festivities in Mathura, Barsana, and Nandgaon...
            </p>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                {[
                  "Accommodation in a well-rated hotel (3 Nights)",
                  "Daily breakfast",
                  "Private transportation for the entire tour",
                  "Local guide for Holi celebrations",
                  "Entry fees to temples and Holi events"
                ].map((item, index) => (
                  <div className="flex-horizontal-center mb-3 text-gray-1" key={index}>
                    <i className="fa fa-check" style={{ fontSize: 24, color: "green" }}></i>&nbsp;{item}
                  </div>
                ))}
              </div>

              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                {[
                  "Personal expenses (shopping, tips, etc.)",
                  "Camera/video charges at temples",
                  "Any meals not mentioned in inclusions",
                  "Travel insurance"
                ].map((item, index) => (
                  <div className="flex-horizontal-center mb-3 text-gray-1" key={index}>
                    <i className="fa fa-close" style={{ fontSize: 24, color: "red" }}></i>&nbsp;{item}
                  </div>
                ))}
              </div>
            </div>

            <div className="call-box-inner12">
              <h3>Itinerary : Phoolon Ki Holi & Vrindavan Holi Festival Tour</h3>

              <h4><strong>Day 1</strong>: <span style={{ color: "rgb(236, 51, 35)" }}>Arrival in Mathura & Exploring Krishna’s Birthplace</span></h4>
              <p>Upon arrival in Mathura... check into our hotel for an overnight stay in Mathura or Vrindavan.</p>

              <h4><strong>Day 2</strong>: <span style={{ color: "rgb(236, 51, 35)" }}>Phoolon Ki Holi & Vrindavan’s Spiritual Festivities</span></h4>
              <p>The day begins with a visit to Vrindavan... preparing for the exciting Lathmar Holi the next day.</p>

              <h4><strong>Day 3</strong>: <span style={{ color: "rgb(236, 51, 35)" }}>Lathmar Holi in Barsana – A Unique & Playful Celebration</span></h4>
              <p>After breakfast, we head to Barsana... return to Mathura for an overnight stay.</p>

              <h4><strong>Day 4</strong>: <span style={{ color: "rgb(236, 51, 35)" }}>Nandgaon Holi & Farewell</span></h4>
              <p>On the final day... we bid farewell, carrying the memories of this divine and colorful Holi celebration.</p>
            </div>

            <div className="mytable container">
              <h3>Pricing for Taxi/Cab Service</h3>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>Taxi Type</th>
                      <th>Price (Per Day)</th>
                      <th>Driver Charges (Per Day)</th>
                      <th>Enquiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Sedan", "₹11/km"],
                      ["Ertiga", "₹13/km"],
                      ["Kia", "₹16/km"],
                      ["Innova", "₹18/km"],
                      ["Innova Crysta", "₹18/km"],
                      ["12 Seater Tempo Traveller", "₹22/km"],
                      ["Mini Bus", "Ask For Price"],
                      ["45 Seater Bus", "Ask For Price"]
                    ].map(([type, price], index) => (
                      <tr key={index}>
                        <td>{type}</td>
                        <td>{price}</td>
                        <td>₹250/-</td>
                        <td>
                          <a href="#" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#exampleModal">
                            Enquiry Now
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <QuickInquiry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phoolon_ki_holi_mathura_vrindavan;
