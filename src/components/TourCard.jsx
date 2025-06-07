import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TourCard = ({ tour }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="tour-card">
                <Link href={tour.detailsLink}>
                    <Image
                        src={tour.imageSrc}
                        alt={tour.imageAlt}
                        width={400} // Adjust width as needed for your image
                        height={250} // Adjust height as needed for your image
                        layout="responsive" // This makes the image responsive
                    />
                </Link>
                <h3>{tour.title}</h3>
                <div className="tour-info">
                    <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa fa-star"></i>
                        ))}
                    </div>
                    <div className="duration12">
                        <i className="fa fa-clock"></i> <span>{tour.duration}</span>
                    </div>
                </div>
                <table>
                    <tbody>
                        {tour.pricing.map((priceOption, index) => (
                            <tr key={index}>
                                <td>{priceOption.type}</td>
                                <td>{priceOption.price}</td>
                                <td>
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <Link href={`/packages/${tour.detailsLink}`} className="btn btn-primary flex-fill m-1">
                                            Details
                                        </Link>
                                        {/* For the Enquiry button, you'd typically have a modal component here */}
                                        <button
                                            type="button"
                                            className="btn btn-success flex-fill m-1"
                                            style={{ color: 'white' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        // You'll need to implement modal logic in the parent component or a separate modal component
                                        >
                                            Enquiry
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TourCard;