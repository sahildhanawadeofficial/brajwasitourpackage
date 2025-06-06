import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const SameDayVrindavanToMathuraGokulRamanReti = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="/tour/mathura-gokul-raman-reti.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
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
                  <strong><i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;</strong>
                  Vrindavan - Mathura - Gokul - Raman Reti
                </li>
                <li>
                  <strong><i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;</strong>
                  Same-Day
                </li>
                <li>
                  <strong><i className="fa fa-car" aria-hidden="true"></i> Transport:&nbsp;</strong>
                  AC Vehicle
                </li>
                <li>
                  <strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:&nbsp;</strong>
                  Vegetarian Lunch
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                Embark on a spiritually enriching journey from Vrindavan to Mathura, Gokul, and Raman Reti in a single day...
              </p>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  {[
                    "AC transportation from Vrindavan to Mathura, Gokul & back",
                    "Guided temple tours in Mathura, Gokul, and Vrindavan",
                    "Entry fees to temples",
                    "Vegetarian lunch at a local restaurant"
                  ].map((item, idx) => (
                    <div key={idx} className="flex-horizontal-center mb-3 text-gray-1">
                      <i className="fa fa-check" style={{ fontSize: 24, color: "green" }}></i> {item}
                    </div>
                  ))}
                </div>

                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  {[
                    "Personal expenses (shopping, snacks)",
                    "Tips to guides/drivers",
                    "Additional meals not mentioned",
                    "Travel to and from Vrindavan (for those not starting in Vrindavan)"
                  ].map((item, idx) => (
                    <div key={idx} className="flex-horizontal-center mb-3 text-gray-1">
                      <i className="fa fa-close" style={{ fontSize: 24, color: "red" }}></i> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary : Same-Day Vrindavan to Mathura, Gokul & Raman Reti Tour</h3>
                  <br />
                  {[
                    { time: "6:00 AM", title: "Departure from Vrindavan", desc: "Begin your day with a comfortable drive..." },
                    { time: "6:30 AM", title: "Visit Krishna Janmabhoomi Temple, Mathura", desc: "Start your spiritual journey..." },
                    { time: "8:00 AM", title: "Visit Dwarkadhish Temple & Vishram Ghat", desc: "Head to the Dwarkadhish Temple..." },
                    { time: "9:30 AM", title: "Drive to Gokul", desc: "Depart for Gokul (approx. 20-minute drive)..." },
                    { time: "10:00 AM", title: "Visit Gokulnath Temple & Raman Reti", desc: "Visit the Gokulnath Temple..." },
                    { time: "12:00 PM", title: "Lunch at a Local Restaurant in Gokul", desc: "Enjoy a pure vegetarian lunch..." },
                    { time: "1:30 PM", title: "Return to Vrindavan", desc: "Drive back to Vrindavan..." },
                    { time: "2:00 PM", title: "Visit Banke Bihari Temple & ISKCON Temple", desc: "Conclude your day with visits..." },
                    { time: "4:00 PM", title: "Free Time for Shopping & Local Exploration", desc: "Spend some leisure time..." },
                    { time: "5:00 PM", title: "Return to Hotel or Departure", desc: "Your spiritually enriching day concludes..." }
                  ].map(({ time, title, desc }, idx) => (
                    <div key={idx}>
                      <h4><strong>{time}</strong> : <span style={{ color: "rgb(236, 51, 35)" }}>{title}</span></h4>
                      <p>{desc}</p>
                      <br />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mytable container">
                <h3>Pricing for Taxi/Cab Service</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Taxi Type</th>
                        <th>Seating</th>
                        <th>Price</th>
                        <th>Enquiry</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Sedan", seat: "1+4", price: "₹2,500/-" },
                        { type: "Ertiga", seat: "1+5", price: "₹3,000/-" },
                        { type: "Kia", seat: "1+5", price: "₹3,000/-" },
                        { type: "Innova", seat: "1+5", price: "₹3,000/-" },
                        { type: "Innova Crysta", seat: "1+5", price: "₹3,000/-" },
                        { type: "12 Seater Tempo Traveller", seat: "11+1", price: "Ask for Price" },
                        { type: "Mini Bus", seat: "", price: "Ask for Price" },
                        { type: "45 Seater Bus", seat: "25+1", price: "Ask for Price" }
                      ].map(({ type, seat, price }, idx) => (
                        <tr key={idx}>
                          <td>{type}</td>
                          <td>{seat}</td>
                          <td>{price}</td>
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
    </>
  );
};

export default SameDayVrindavanToMathuraGokulRamanReti;
