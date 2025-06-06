import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const Same_day_vrindavan_to_nandgaon_barsana_govardhan = () => {
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
                      src="/tour/nandgaon-barsana-govardhan.webp"
                      alt="Delhi Agra Jaipur via Vrindavan tour"
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
                  <strong><i className="fa fa-map-marker" /> Destination:&nbsp;</strong> Vrindavan - Nandgaon - Barsana - Govardhan
                </li>
                <li>
                  <strong><i className="fa fa-clock-o" /> Duration:&nbsp;</strong> Same-Day
                </li>
                <li>
                  <strong><i className="fa fa-car" /> Transport:&nbsp;</strong> AC Vehicle
                </li>
                <li>
                  <strong><i className="fa fa-cutlery" /> Meal Plan:&nbsp;</strong> Vegetarian Lunch
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                This same-day tour from Vrindavan to Nandgaon, Barsana, and Govardhan takes you through the sacred sites
                associated with Lord Krishna’s life and Radha’s divine presence. Explore the birthplace of Radha Rani in
                Barsana, visit Nandgaon, the childhood home of Krishna, and conclude with the sacred Govardhan Parikrama.
                Perfect for devotees seeking a deep spiritual connection in a single day.
              </p>

              <div className="row mt-4">
                <div className="col-md-6 mb-4">
                  <h5 className="text-dark font-weight-bold mb-3">Package Inclusion</h5>
                  {[
                    "AC transportation from Vrindavan to Nandgaon, Barsana & Govardhan and back",
                    "Guided tours at Nand Bhavan, Radha Rani Temple, and Govardhan Hill",
                    "Entry fees to temples and monuments",
                    "Vegetarian lunch at a local restaurant",
                    "Govardhan Parikrama with guide"
                  ].map((item, index) => (
                    <div className="flex-horizontal-center mb-3 text-gray-1" key={index}>
                      <i className="fa fa-check" style={{ fontSize: 24, color: "green" }} />&nbsp;{item}
                    </div>
                  ))}
                </div>

                <div className="col-md-6 mb-4">
                  <h5 className="text-dark font-weight-bold mb-3">Package Exclusion</h5>
                  {[
                    "Personal expenses (shopping, snacks)",
                    "Tips to guides/drivers",
                    "Additional meals not mentioned",
                    "Travel to and from Vrindavan (for those not starting in Vrindavan)"
                  ].map((item, index) => (
                    <div className="flex-horizontal-center mb-3 text-gray-1" key={index}>
                      <i className="fa fa-close" style={{ fontSize: 24, color: "red" }} />&nbsp;{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="call-box-inner12">
                <h3>Itinerary : Same-Day Vrindavan to Nandgaon, Barsana & Govardhan Tour</h3>
                <br />
                {[
                  ["6:00 AM", "Departure from Vrindavan", "Begin your journey early with a comfortable drive from Vrindavan to Nandgaon (approx. 1-hour drive)."],
                  ["7:00 AM", "Visit Nandgaon – Nand Bhavan", "Arrive at Nandgaon, the village where Lord Krishna spent his early years..."],
                  ["9:00 AM", "Drive to Barsana", "Head to Barsana (approx. 30-minute drive), the birthplace of Radha Rani."],
                  ["9:30 AM", "Visit Radha Rani Temple & Rangili Mahal", "Climb the sacred steps to the Radha Rani Temple..."],
                  ["11:30 AM", "Drive to Govardhan", "Continue to Govardhan (approx. 1-hour drive)..."],
                  ["12:30 PM", "Lunch at Govardhan", "Enjoy a pure vegetarian lunch at a local restaurant..."],
                  ["1:30 PM", "Govardhan Parikrama & Visit to Kusum Sarovar", "Embark on the sacred Govardhan Parikrama..."],
                  ["4:00 PM", "Return to Vrindavan", "Drive back to Vrindavan (approx. 1-hour drive), arriving by early evening."]
                ].map(([time, title, desc], index) => (
                  <div key={index}>
                    <h4>
                      <strong>{time}</strong>&nbsp;:&nbsp;
                      <span style={{ color: "#ec3323" }}>{title}</span>
                    </h4>
                    <p>{desc}</p>
                    <br />
                  </div>
                ))}
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
                        ["Sedan", "1+4", "₹2,500/-"],
                        ["Ertiga", "1+5", "₹3,000/-"],
                        ["Kia", "1+5", "₹3,000/-"],
                        ["Innova", "1+5", "₹3,000/-"],
                        ["Innova Crysta", "1+5", "₹3,000/-"],
                        ["12 Seater Tempo Traveller", "11+1", "Ask for Price"],
                        ["Mini Bus", "", "Ask for Price"],
                        ["45 Seater Bus", "25+1", "Ask for Price"]
                      ].map(([type, seating, price], index) => (
                        <tr key={index}>
                          <td>{type}</td>
                          <td>{seating}</td>
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

export default Same_day_vrindavan_to_nandgaon_barsana_govardhan;
