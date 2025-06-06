"use client"

import React, { useState } from 'react'; // Removed useRef as it's no longer needed for validationRef
import { toast } from 'react-toastify';

const QuickInquiry = () => {
    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        selecttempo: '',
        noofperson: '',
        arriavaldate: '',
        form_message: '',
        // 'validate' state removed as the question is gone
    });

    // State for loading and error/success messages
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    // Handler for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission to handle it with JavaScript

        // Removed the validation logic here since the question is gone

        setLoading(true); // Show loading state
        setMessage(''); // Clear previous messages
        setIsError(false); // Reset error state

        try {
            // Send form data to your Next.js API route
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send the entire formData object as JSON
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Inquiry sent! We will contact you soon.')
                setMessage(result.message || "Your inquiry has been sent successfully!");
                setIsError(false);
                // Optionally clear the form after successful submission
                setFormData({
                    name: '',
                    number: '',
                    email: '',
                    selecttempo: '',
                    noofperson: '',
                    arriavaldate: '',
                    form_message: '',
                    // 'validate' state removed
                });
            } else {
                setMessage(result.error || "Something went wrong. Please try again.");
                setIsError(true);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setMessage("Network error. Please try again later.");
            setIsError(true);
        } finally {
            setLoading(false); // Hide loading state
        }
    };

    return (
        <>
            <div className="gauto-leave-comment">
                <h3>Quick Enquiry</h3>
                <p>We are happy to help you</p>
                <div className="form-design12">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name" className="font88">Enter Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="number" className="font88">Contact No.</label>
                                <input
                                    type="tel"
                                    name="number"
                                    className="form-control"
                                    id="number"
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
                                    id="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="selecttempo" className="font88">Select Vehicle</label>
                                <select
                                    id="selecttempo"
                                    className="form-control"
                                    name="selecttempo"
                                    value={formData.selecttempo}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select Vehicle</option>
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
                                    type="text"
                                    name="noofperson"
                                    className="form-control"
                                    id="noofperson"
                                    placeholder="Enter No. of Person"
                                    value={formData.noofperson}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="arriavaldate" className="font88">Arrival Date</label>
                                <input
                                    type="date"
                                    name="arriavaldate"
                                    className="form-control"
                                    id="arriavaldate"
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

                            {/* Removed the validation question input field */}

                            <div className="form-group col-md-12">
                                <button type="submit" className="btn btn-danger btn-block" disabled={loading}>
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* Display messages to the user */}
                    {message && (
                        <div className={`mt-3 alert ${isError ? 'alert-danger' : 'alert-success'}`}>
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default QuickInquiry;