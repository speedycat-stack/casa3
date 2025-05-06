import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Updated navigation path to match the new nested route structure
    navigate("/donation/payment");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Checkout</h2>
        <p>Shipping Information</p>

        <div className="form-group">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" /> {/* Changed to tel type */}
          <input type="text" placeholder="Country" />
          <select>
            <option>Your Donation Area</option>
            {/* Add actual options here */}
          </select>
          <div>
            <input type="checkbox" id="save-info" />
            <label htmlFor="save-info">Save contact information</label>
          </div>
        </div>

        <button className="continue-btn" onClick={handleContinue}>
          CONTINUE TO PAYMENT {/* Updated button text */}
        </button>
      </div>
    </div>
  );
};

export default Checkout;