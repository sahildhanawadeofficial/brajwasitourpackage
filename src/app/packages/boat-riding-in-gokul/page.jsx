import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const BoatRidingInGokul = () => {
  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <div className="single-blog">
          <div className="blog-image">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="/tour/boat-riding-in-gokul.webp"
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
              <li><strong><i className="fa fa-map-marker" /> Destination: </strong>Mathura - Vrindavan</li>
              <li><strong><i className="fa fa-clock-o" /> Duration: </strong>2.5 Hours</li>
              <li><strong><i className="fa fa-car" /> Transport: </strong>Hatchback - Sedan - SUV (Car)</li>
              <li><strong><i className="fa fa-cutlery" /> Meal Plan: </strong>Breakfast</li>
            </ul>

            <h2>Description :</h2>
            <p>
              Step into the enchanting world of Gokul, the town where Lord Krishna spent his
              playful childhood... (content continues as-is)
            </p>

            {/* Package Inclusion / Exclusion */}
            <div className="row">
              <div className="col-md-12 py-4">
                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
              </div>
              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> Paddle boat decorated for sunset viewing</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> Local guide narrating Krishna’s tales</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> Life jackets and safety gear</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> Evening aarti participation (includes diya)</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }} /> Complimentary bottled water</div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }} /> Personal expenses (souvenirs, snacks)</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }} /> Entry fees to temples (if applicable)</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }} /> Transportation to and from Gokul</div>
                <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }} /> Tips for guide or boatman</div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="row">
              <div className="call-box-inner12">
                <h3>Itinerary : Evening Sunset Boating in Gokul</h3>
                <p><strong>4:30 PM:</strong> <span style={{ color: '#ec3323' }}>Arrival at Raman Reti Ghat, Gokul</span></p>
                <p>Start your journey at Raman Reti Ghat... (continue existing itinerary steps)</p>
              </div>
            </div>

            {/* Pricing Table */}
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
                    {["Sedan", "Ertiga", "Kia", "Innova", "Innova Crysta", "12 Seater Tempo Traveller", "Mini Bus", "45 Seater Bus"].map((type, index) => (
                      <tr key={index}>
                        <td>{type}</td>
                        <td>{type === "Mini Bus" || type === "45 Seater Bus" ? "Ask For Price" : `₹${type === "Sedan" ? 11 : type === "Ertiga" ? 13 : type === "Kia" ? 16 : 18}/km`}</td>
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

export default BoatRidingInGokul;