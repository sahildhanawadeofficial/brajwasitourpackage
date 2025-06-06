'use client';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FindTaxiForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        number: '',
        selecttempo: '',
        arriavaldate: '',
        journeyTime: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
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
                                    <form
                                        role="form"
                                        method="post"
                                        action="https://www.gotaxibooking.com/send-enquiry-home.php"
                                    >
                                        <div className="row mb-3">
                                            <div className="col-md-4">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder="Email"
                                                    className="form-control"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <input
                                                    type="text"
                                                    name="number"
                                                    placeholder="Contact Number"
                                                    className="form-control"
                                                    value={formData.number}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <select
                                                    id="select"
                                                    className="form-control"
                                                    name="selecttempo"
                                                    value={formData.selecttempo}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Vehicle</option>
                                                    <option>Indigo</option>
                                                    <option>Swift Dzire</option>
                                                    <option>Etios</option>
                                                    <option>Innova</option>
                                                    <option>Innova Crysta</option>
                                                    <option>Maruti Ertiga</option>
                                                    <option>Tempo Traveller 12 Seater</option>
                                                    <option>Ac Coach 35 to 45 Seater</option>
                                                    <option>Other</option>
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
                                                    required
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
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <button type="submit" className="gauto-theme-btn btn btn-primary w-100">
                                                    Enquiry Now
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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
