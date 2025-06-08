'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
// If you're using Bootstrap's JS for modal functionality, ensure it's loaded in your app.
// For example, in layout.js, you might have:

const CarBookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        selecttempo: '',
        noofperson: '',
        arriavaldate: '',
        form_message: '',
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        setLoading(true);
        setMessage(''); // Clear previous messages
        setIsError(false);

        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                // Improved success message
                toast.success('Inquiry sent! We will contact you soon.')

                setMessage('Thanks! We\'ve received your message and will be in touch shortly.');
                setIsError(false);
                // Optionally, close the modal after success. This assumes you have access to a close function.
                // For a Bootstrap modal, you might use: $('#exampleModal').modal('hide');
                // Or if using react-bootstrap, you'd call a prop like `onClose()`.

                // Reset form fields
                setFormData({
                    name: '',
                    number: '',
                    email: '',
                    selecttempo: '',
                    noofperson: '',
                    arriavaldate: '',
                    form_message: '',
                });
            } else {
                setMessage(result.error || "Failed to send inquiry. Please try again.");
                setIsError(true);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setMessage("Network error. Please check your connection and try again.");
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        // The modal structure itself.
        // For this to function as a modal, you'd typically have a button somewhere on your page
        // that triggers this modal, e.g., using Bootstrap's data-toggle attributes.
        // Example: <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Open Enquiry</button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Make Enquiry Here</h5>
                        <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal" // Changed from data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body contact-left">
                        <form onSubmit={handleSubmit}> {/* Use onSubmit for React */}
                            <div className="modal-body">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name" className="font88">Enter Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name" // Changed ID to be unique for better accessibility
                                            placeholder="Enter Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="number" className="font88">Contact No.</label>
                                        <input
                                            type="tel" // Use type="tel" for phone numbers
                                            name="number"
                                            className="form-control"
                                            id="number" // Changed ID
                                            placeholder="Enter Number"
                                            value={formData.number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email" className="font88">Enter Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email" // Changed ID
                                            placeholder="Enter Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="selectVehicle" className="font88">Select Vehicle</label> {/* Changed htmlFor and id */}
                                        <select
                                            id="selectVehicle"
                                            className="form-control"
                                            name="selecttempo"
                                            value={formData.selecttempo}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Select Vehicle</option> {/* Added disabled for initial option */}
                                            <option value="sedan car">Sedan Car</option>
                                            <option value="muv car">MUV Car</option>
                                            <option value="xuv car">XUV Car</option>
                                            <option value="tempo traveller">Tempo Traveller</option>
                                            <option value="bus">Bus</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="noofperson" className="font88">No. of Person</label>
                                        <input
                                            type="number" // Changed to number type
                                            name="noofperson"
                                            className="form-control"
                                            id="noofperson" // Changed ID
                                            placeholder="Enter No. of Person"
                                            value={formData.noofperson}
                                            onChange={handleChange}
                                            min="1" // Optional: Minimum 1 person
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="arriavaldate" className="font88">Arrival Date</label>
                                        <input
                                            type="date"
                                            name="arriavaldate"
                                            className="form-control"
                                            id="arriavaldate" // Changed ID
                                            placeholder="Arrival Date"
                                            value={formData.arriavaldate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <textarea
                                            rows="3"
                                            name="form_message"
                                            placeholder="Message"
                                            value={formData.form_message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Removed the "What is 5 + 1 ?" validation question */}

                                </div>
                            </div>
                            <div className="modal-footer border-top-0 d-flex justify-content-center">
                                <button type="submit" className="btn btn-success btn-block" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </div>
                            {/* Display feedback message */}
                            {message && (
                                <div className={`mt-3 p-2 text-center alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarBookingForm;