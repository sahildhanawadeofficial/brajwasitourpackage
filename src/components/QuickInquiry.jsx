"use client"
import React, { useRef } from 'react';


const QuickInquiry = () => {

    const validationRef = useRef(null);

    const validateForm = (e) => {
        e.preventDefault();
        if (validationRef.current.value.trim() === '6') {
            e.target.submit();
        } else {
            alert('Please answer the validation question correctly: What is 5 + 1?');
        }
    };

    return <>
        <div className="gauto-leave-comment">
            <h3>Quick Enquiry</h3>
            <p>We are happy to help you</p>
            <div className="form-design12">
                <form
                    name="contactForm"
                    method="post"
                    action="https://www.mathuravrindavantaxiservices.com/send-enquiry-main.php"
                    onSubmit={validateForm}
                >
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name" className="font88">Enter Full Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                aria-describedby="emailHelp"
                                placeholder="Enter Name"
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
                                aria-describedby="emailHelp"
                                placeholder="Enter Number"
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
                                aria-describedby="emailHelp"
                                placeholder="Enter Email"
                                required
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="select" className="font88">Select Vehicle</label>
                            <select id="select" className="form-control" name="selecttempo" required>
                                <option value="" selected disabled>Select Vehicle</option>
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
                                aria-describedby="emailHelp"
                                placeholder="Enter No. of Person"
                                required
                            />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="arrivaldate" className="font88">Arrival Date</label>
                            <input
                                type="date"
                                name="arriavaldate"
                                className="form-control"
                                id="arrivaldate"
                                aria-describedby="emailHelp"
                                placeholder="Arrival Date"
                                required
                            />
                        </div>

                        <div className="form-group col-md-12">
                            <textarea
                                rows="3"
                                name="form_message"
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="validate">What is 5 + 1 ?:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="validate"
                                id="validate"
                                ref={validationRef}
                                required
                            />
                        </div>

                        <div className="form-group col-md-12">
                            <button type="submit" className="btn btn-danger btn-block">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default QuickInquiry
