'use client';

import React, { useEffect } from 'react';
import QuickInquiry from '@/components/QuickInquiry';

const Page = () => {

  return (
    <>
      <div className="col-lg-9">
        <div className="blog-page-left">
          <div className="single-blog">
            <div className="blog-image">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="/tour/5-days-complete-mathura-tour.webp" alt="Mathura tour" />
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
                <li><div><strong><i className="fa fa-map-marker" aria-hidden="true"></i> Destination: </strong> 4 Nights | 5 Days</div></li>
                <li><div><strong><i className="fa fa-clock-o" aria-hidden="true"></i> Route: </strong> Delhi - Mathura - Vrindavan - Delhi</div></li>
                <li><div><strong><i className="fa fa-car" aria-hidden="true"></i> Transport:</strong> Hatchback - Sedan - SUV</div></li>
                <li><div><strong><i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan:</strong> Breakfast</div></li>
              </ul>

              <h2>Description :</h2>
              <p>
                Devotees of Lord Krishna visit Mathura Vrindavan cities to seek solace in the sacred cities where Lord Krishna himself spent major part of his life.
                Mathura is an ancient city with narrow lanes, bustling bazaars, and temples. The city boasts many temples dedicated to Lord Krishna and Radha.
              </p>

              <div className="row">
                <div className="col-md-12 py-4">
                  <h5 id="scroll-description" className="font-size-21 font-weight-bold text-dark mb-4">
                    Package Inclusion | Exclusion
                  </h5>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Inclusion</div>
                  <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: '24px', color: 'green' }}></i> Guide Services</div>
                  <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: '24px', color: 'green' }}></i> Entrance Fees</div>
                  <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: '24px', color: 'green' }}></i> All transportation at destination</div>
                  <div className="mb-3 text-gray-1"><i className="fa fa-check" style={{ fontSize: '24px', color: 'green' }}></i> Toll Tax, State Tax, Driver Charges</div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="font-weight-bold text-dark mb-3">Package Exclusion</div>
                  <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: '24px', color: 'red' }}></i> Flight & train ticket</div>
                  <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: '24px', color: 'red' }}></i> Camera Charges</div>
                  <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: '24px', color: 'red' }}></i> Elephant Ride</div>
                  <div className="mb-3 text-gray-1"><i className="fa fa-close" style={{ fontSize: '24px', color: 'red' }}></i> Room Service Fees</div>
                </div>
              </div>

              <div className="row">
                <div className="call-box-inner12">
                  <h3>Itinerary: 5D Complete Mathura Vrindavan Tour Package</h3>

                  <h4><strong>Day 1: </strong><span style={{ color: '#ec3323' }}>Delhi - Mathura</span></h4>
                  <p>Arrive at Mathura from Delhi. Visit Govardhan hill, Shri Krishna Janmasthan, Dwarkadhish Temple, and more. Overnight at hotel.</p>

                  <h4><strong>Day 2: </strong><span style={{ color: '#ec3323' }}>Mathura Sightseeing</span></h4>
                  <p>Explore Radha Kund, Kusum Sarovar, Radha Vallabh Mandir, Kokilavan, and others. Overnight stay.</p>

                  <h4><strong>Day 3: </strong><span style={{ color: '#ec3323' }}>Mathura - Vrindavan</span></h4>
                  <p>Visit Banke Bihari, Prem Mandir, ISKCON Vrindavan, etc. Return to Mathura hotel for dinner and overnight.</p>

                  <h4><strong>Day 4: </strong><span style={{ color: '#ec3323' }}>Vrindavan Sightseeing</span></h4>
                  <p>Visit Katyayani temple, Govind Devji, Gokulnanda temple, etc. Overnight in Mathura.</p>

                  <h4><strong>Day 5: </strong><span style={{ color: '#ec3323' }}>Mathura - Delhi</span></h4>
                  <p>Visit Jai Gurudev Mandir. After breakfast, return journey to Delhi.</p>
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

export default Page;
