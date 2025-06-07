'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
// Assuming 'bootstrap/dist/css/bootstrap.min.css' is imported globally or in a layout file
// If not, ensure it's imported correctly for the styles to apply.

const FindTaxiForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        number: '',
        selecttempo: '',
        arriavaldate: '',
        journeyTime: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        setLoading(true);
        setMessage('');
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
                toast.success('Inquiry sent! We will contact you soon.')

                setMessage(result.message || "Your enquiry has been sent successfully!");
                setIsError(false);
                // Reset form fields on successful submission
                setFormData({
                    email: '',
                    number: '',
                    selecttempo: '',
                    arriavaldate: '',
                    journeyTime: ''
                });
            } else {
                setMessage(result.error || "Failed to send enquiry. Please try again.");
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
        <section className="gauto-find-area py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="find-box p-4 shadow-sm rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="find-text">
                                        <h3>Book your best <br />taxi here.</h3>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <input
                                                    type="email" // Changed type to email for better validation
                                                    name="email"
                                                    placeholder="Email"
                                                    className="form-control"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required // Added required attribute
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input
                                                    type="tel" // Changed type to tel for phone numbers
                                                    name="number"
                                                    placeholder="Contact Number"
                                                    className="form-control"
                                                    value={formData.number}
                                                    onChange={handleChange}
                                                    required // Added required attribute
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <select
                                                    id="select"
                                                    className="form-control"
                                                    name="selecttempo"
                                                    value={formData.selecttempo}
                                                    onChange={handleChange}
                                                    required // Added required attribute
                                                >
                                                    <option value="">Select Vehicle</option>
                                                    <option value="Indigo">Indigo</option>
                                                    <option value="Swift Dzire">Swift Dzire</option>
                                                    <option value="Etios">Etios</option>
                                                    <option value="Innova">Innova</option>
                                                    <option value="Innova Crysta">Innova Crysta</option>
                                                    <option value="Maruti Ertiga">Maruti Ertiga</option>
                                                    <option value="Tempo Traveller 12 Seater">Tempo Traveller 12 Seater</option>
                                                    <option value="Ac Coach 35 to 45 Seater">Ac Coach 35 to 45 Seater</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <input
                                                    id="arriavaldate"
                                                    name="arriavaldate"
                                                    type="date"
                                                    className="form-control"
                                                    value={formData.arriavaldate}
                                                    onChange={handleChange}
                                                    required // Added required attribute
                                                    placeholder="Date"

                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input
                                                    type="time"
                                                    name="journeyTime"
                                                    className="form-control"
                                                    placeholder="Journey Time"
                                                    value={formData.journeyTime}
                                                    onChange={handleChange}
                                                    required // Added required attribute
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <button type="submit" className="gauto-theme-btn btn btn-primary w-100" disabled={loading}>
                                                    {loading ? 'Sending...' : 'Enquiry Now'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Display messages to the user */}
                                    {message && (
                                        <div className={`mt-3 alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
                                            {message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindTaxiForm;