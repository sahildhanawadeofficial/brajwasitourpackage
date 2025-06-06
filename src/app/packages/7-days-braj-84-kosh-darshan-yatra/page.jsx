import React from 'react';
import Image from 'next/image';
import QuickInquiry from '@/components/QuickInquiry';

const DaysBraj84KoshDarshanYatra = () => {
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
                      src="/tour/84-kos-yatra-package.webp"
                      alt="Braj 84 kos yatra package"
                      width={1000}
                      height={500}
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
                  <div><strong><i className="fa fa-map-marker" aria-hidden="true"></i> Duration:&nbsp;&nbsp;</strong>6 Nights | 7 Days</div>
                </li>
                <li>
                  <div><strong><i className="fa fa-clock-o" aria-hidden="true"></i> Destination:&nbsp;&nbsp;</strong>Delhi - Mathura - Vrindavan - Delhi</div>
                </li>
                <li>
                  <div><strong><i className="fa fa-car" aria-hidden="true"></i> Transport :</strong>&nbsp; Hatchback - Sedan - SUV</div>
                </li>
                <li>
                  <div><strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:</strong>&nbsp; Breakfast</div>
                </li>
              </ul>

              <h2>Description :</h2>
              <p>
                Visiting every shrine in Brij 84 Kos Yatra... The <strong>“84 Kosh Yatra” is a 252 kilometers</strong> (Chaurasi or 84 kos in Hindi) journey of the Braj Area which includes 12 Forests (Van), 24 Gardens, 20 Kunds (Ponds) and villages like Barsana, Nand Gaon, Vrindavan, Mathura, Kosi, Radha Kund, and Govardhan etc.
              </p>

              <div className="row">
                <div className="col-md-12 py-4">
                  <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                    Package Inclusion | Exclusion
                  </h5>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Guide Services</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Entrance Fees</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> All transportation in destination location</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: 24, color: 'green' }}></i> Toll Tax, State Tax, Driver Batta</div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Flight & train ticket</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Camera Charges</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Elephant Ride</div>
                  <div className="flex-horizontal-center mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: 24, color: 'red' }}></i> Room Service Fees</div>
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary : Braj 84 Kosh Yatra packages</h3>
                  {[
                    { day: "Day 1", title: "Yamuna Poojan", desc: "Yamuna Poojan, Belvan, Devrha Baba Bhajan Sthali..." },
                    { day: "Day 2", title: "Lohvan", desc: "Raskhan Samadhi, Lohvan, Jamuna Poojan..." },
                    { day: "Day 3", title: "Shantanu Kund", desc: "Shantanu Kund, Ras Mandal, Chandr Sarovar..." },
                    { day: "Day 4", title: "Radha Kund Parikrama", desc: "Radha Kund Parikrama, Radhakund poojan..." },
                    { day: "Day 5", title: "Hanuman Ji Darshan", desc: "Hakeek Patthar Se Nirmit Hanuman Ji Darshan..." },
                    { day: "Day 6", title: "Kamvan", desc: "Kamvan, Krishan Chandrama Ji, Madanmohan..." },
                    { day: "Day 7", title: "Barsana Parikrama", desc: "Barsana Parikrama, Sankari Khori, Gaehvar Van..." },
                  ].map(({ day, title, desc }) => (
                    <div key={day}>
                      <h4><strong>{day} :</strong> <span style={{ color: '#EC3323' }}>{title}</span></h4>
                      <p>{desc}</p>
                    </div>
                  ))}
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

export default DaysBraj84KoshDarshanYatra;
