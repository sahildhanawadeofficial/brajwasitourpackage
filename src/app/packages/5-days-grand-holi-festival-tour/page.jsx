import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';

const DaysGrandHoliFestivalTour = () => {
  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <article className="single-blog">
          <div className="blog-image">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="/tour/5-days-grand-holi.webp"
                    alt="Delhi Agra Jaipur via Vrindavan tour"
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="blog-text">
            <ul>
              <li><strong><i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;</strong>Mathura – Vrindavan – Barsana – Nandgaon – Gokul – Govardhan</li>
              <li><strong><i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;</strong>5-Days</li>
              <li><strong><i className="fa fa-car" aria-hidden="true"></i> Transport:&nbsp;</strong>Private AC Vehicle</li>
              <li><strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:&nbsp;</strong>Breakfast Included</li>
            </ul>

            <h2>Description :</h2>
            <p>
              Celebrate the most vibrant and grand Holi festival with this 5-day tour across Mathura, Vrindavan, Barsana, Nandgaon, Gokul, and Govardhan. Witness the famous Phoolon Ki Holi, Lathmar Holi, and divine festivities that bring Krishna’s traditions to life.
            </p>

            <div className="row py-4">
              <div className="col-md-12 mb-4">
                <h5 className="font-size-21 font-weight-bold text-dark">Package Inclusion | Exclusion</h5>
              </div>

              <div className="col-md-6 mb-4">
                <h6 className="font-weight-bold text-dark mb-3">Package Inclusion</h6>
                {[
                  "Accommodation in a well-rated hotel (4 Nights)",
                  "Daily breakfast",
                  "Private transportation for the entire tour",
                  "Local guide for Holi celebrations",
                  "Entry fees to temples and special Holi events"
                ].map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center mb-2 text-gray-1">
                    <i className="fa fa-check me-2" style={{ fontSize: 20, color: "green" }}></i> {item}
                  </div>
                ))}
              </div>

              <div className="col-md-6 mb-4">
                <h6 className="font-weight-bold text-dark mb-3">Package Exclusion</h6>
                {[
                  "Personal expenses (shopping, tips, etc.)",
                  "Camera/video charges at temples",
                  "Any meals not mentioned in inclusions",
                  "Travel insurance"
                ].map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center mb-2 text-gray-1">
                    <i className="fa fa-close me-2" style={{ fontSize: 20, color: "red" }}></i> {item}
                  </div>
                ))}
              </div>
            </div>

            <section className="itinerary">
              <h3>Itinerary: 5-Days Grand Holi Festival Tour</h3>
              {[
                ["Day 1", "Arrival in Mathura", "Visit Shri Krishna Janmabhoomi, Dwarkadhish Temple, Birla Temple, Gita Mandir, and evening Yamuna Aarti."],
                ["Day 2", "Phoolon Ki Holi & Vrindavan’s Divine Festivities", "Attend Phoolon Ki Holi at Banke Bihari Temple, ISKCON, Prem Mandir, Radha Vallabh Temple."],
                ["Day 3", "Lathmar Holi in Barsana", "Celebrate at Radha Rani Temple, Shri Ji Mandir, enjoy local delicacies."],
                ["Day 4", "Nandgaon Holi", "Visit Nandgaon, play Holi, visit Nand Bhavan, optional stop at Gokul."],
                ["Day 5", "Govardhan Parikrama & Departure", "Perform Parikrama, visit Radha Kund, Kusum Sarovar, depart from Mathura."]
              ].map(([day, title, desc], idx) => (
                <div key={idx}>
                  <h4><strong>{day}</strong>: <span style={{ color: '#EC3323' }}>{title}</span></h4>
                  <p>{desc}</p>
                </div>
              ))}
            </section>

            <section className="mytable container">
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
                    ].map(([type, price], idx) => (
                      <tr key={idx}>
                        <td>{type}</td>
                        <td>{price}</td>
                        <td>₹250/-</td>
                        <td>
                          <a href="#" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Enquiry Now
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <QuickInquiry />
          </div>
        </article>
      </div>
    </div>
  );
};

export default DaysGrandHoliFestivalTour;
