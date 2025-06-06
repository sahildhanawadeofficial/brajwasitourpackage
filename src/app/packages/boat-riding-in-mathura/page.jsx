import React from 'react';
import QuickInquiry from '@/components/QuickInquiry';

const BoatRidingInMathura = () => {
  return (
    <div className="col-lg-9">
      <div className="blog-page-left">
        <div className="single-blog">
          <div className="blog-image">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="tour/boat-riding-in-mathura.webp" alt="Delhi Agra Jaipur via Vrindavan tour" />
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
              <li><strong><i className="fa fa-map-marker" aria-hidden="true"></i> Destination:&nbsp;&nbsp;</strong>Mathura - Vrindavan</li>
              <li><strong><i className="fa fa-clock-o" aria-hidden="true"></i> Duration:&nbsp;&nbsp;</strong>3 Hours</li>
              <li><strong><i className="fa fa-car" aria-hidden="true"></i> Transport:</strong>&nbsp;&nbsp;Hatchback - Sedan - SUV (Car)</li>
              <li><strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:</strong>&nbsp;&nbsp;Breakfast</li>
            </ul>

            <h2>Description :</h2>
            <p>
              Discover the spiritual heart of Mathura as you glide along the sacred Yamuna River...
            </p>

            <div className="row">
              <div className="col-md-12 py-4">
                <h5 className="font-size-21 font-weight-bold text-dark mb-4">Package Inclusion | Exclusion</h5>
              </div>

              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                {[
                  "Private traditional wooden boat for 3 hours",
                  "Local guide providing spiritual and historical insights",
                  "Life jackets and safety equipment",
                  "Complimentary bottled water",
                  "Breakfast at a local eatery (Kachori, Jalebi, Lassi)"
                ].map((item, idx) => (
                  <div key={idx} className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i>&nbsp;{item}
                  </div>
                ))}
              </div>

              <div className="col-md-6 mb-4">
                <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                {[
                  "Personal expenses and shopping",
                  "Entry fees for temples or monuments (if applicable)",
                  "Tips for boatman/guide",
                  "Transportation to and from Vishram Ghat"
                ].map((item, idx) => (
                  <div key={idx} className="flex-horizontal-center mb-3 text-gray-1">
                    <i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i>&nbsp;{item}
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="row">
              <div className="call-box-inner12">
                <h3>Itinerary : Boating Experience in Mathura</h3><br />
                {[
                  {
                    time: "8:00 AM",
                    title: "Arrival at Vishram Ghat",
                    description: "Begin your journey at Vishram Ghat..."
                  },
                  {
                    time: "8:30 AM",
                    title: "Sunrise Boat Ride on Yamuna",
                    description: "Hop onto a beautifully decorated traditional wooden boat..."
                  },
                  {
                    time: "9:30 AM",
                    title: "Visit to Nearby Ghats by Boat",
                    description: "Continue your cruise, stopping at important ghats..."
                  },
                  {
                    time: "10:00 AM",
                    title: "Return to Vishram Ghat & Breakfast",
                    description: "Conclude your boat ride back at Vishram Ghat..."
                  }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4>
                      <strong>{item.time}</strong>&nbsp;:&nbsp;
                      <span style={{ color: '#ec3323' }}>{item.title}</span>
                    </h4>
                    <p>{item.description}</p><br />
                  </div>
                ))}
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
                    {[
                      { type: "Sedan", price: "₹11/km" },
                      { type: "Ertiga", price: "₹13/km" },
                      { type: "Kia", price: "₹16/km" },
                      { type: "Innova", price: "₹18/km" },
                      { type: "Innova Crysta", price: "₹18/km" },
                      { type: "12 Seater Tempo Traveller", price: "₹22/km" },
                      { type: "Mini Bus", price: "Ask For Price" },
                      { type: "45 Seater Bus", price: "Ask For Price" }
                    ].map((taxi, idx) => (
                      <tr key={idx}>
                        <td>{taxi.type}</td>
                        <td>{taxi.price}</td>
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

export default BoatRidingInMathura;
