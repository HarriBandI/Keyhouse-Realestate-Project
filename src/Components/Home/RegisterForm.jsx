import React, { useState } from 'react';
import './Home.css';
import Swal from 'sweetalert2';
import StripeCheckout from 'react-stripe-checkout';

function RegisterForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    reference: "" // Added reference state
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email && values.phoneNumber && values.reference) {
      setValid(true);
      setSubmitted(true);
      Swal.fire({
        title: "Registered successfully",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      Swal.fire({
        title: "Please enter your details",
        icon: "error",
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const onToken = (token) => {
    // Perform payment validation logic here
    if (token) {
      Swal.fire({
        title: "Payment successful",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      Swal.fire({
        title: "Payment failed",
        icon: "error",
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>Welcome {values.firstName} {values.lastName}</h3>
            <div>Your registration was successful!</div>
          </div>
        )}

        <input
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleInputChange}
        />
        {submitted && !values.firstName && (
          <span className="error-message">Please enter your first name</span>
        )}

        <input
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleInputChange}
        />
        {submitted && !values.lastName && (
          <span className="error-message">Please enter your last name</span>
        )}

        <input
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        {submitted && !values.email && (
          <span className="error-message">Please enter your email</span>
        )}

        <input
          className="form-field"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleInputChange}
        />
        {submitted && !values.phoneNumber && (
          <span className="error-message">Please enter your phone number</span>
        )}

        <select
          className="form-field"
          name="reference"
          value={values.reference}
          onChange={handleInputChange}
        >
          <option value="">Select Reference Platform</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Instagram">Instagram</option>
          <option value="LinkedIn">Youtube</option>
          <option value="Instagram">facebook</option>
        </select>
        {submitted && !values.reference && (
          <span className="error-message">Please select a reference platform</span>
        )}

        <StripeCheckout
          token={onToken}
          name="Keyhouse"
          currency='Inr'
          amount='600'
          stripeKey="pk_test_51OzuFtSFVyGIeUltBDzArE7jqFzhaN5SsFuMxUO3Sfh6Uh7mnwtBGBbwIKrCH6ZqKyS2nik2Z7rjXMZqC02lmk4E008xeoJlgQ"
        />
        <br/>

        <button className="box" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
