import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [showWarning, setShowWarning] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setShowWarning(method === 'local');
  };

  return (
    <div className="payment-container">
      <div className="payment-section">
        <h2>PAYMENT</h2>
        
        <div className="payment-methods">
          <button
            className={paymentMethod === 'local' ? 'active' : ''}
            onClick={() => handlePaymentMethodChange('local')}
          >
            At Local
          </button>
          <button
            className={paymentMethod === 'online' ? 'active' : ''}
            onClick={() => handlePaymentMethodChange('online')}
          >
            Online
          </button>
        </div>

        {showWarning ? (
          <div className="payment-info">
            <p className="warning-text">
              Payment at Our Location
              <br />
              Please do not exceed the deadline for your presence at our location.
              <br />
              (The deadline is 3 days).
              <br />
              <span style={{ color: 'red' }}>
                After this deadline, your order will be canceled.
              </span>
            </p>
            <button className="next-btn">NEXT</button>
          </div>
        ) : (
          <div className="payment-info">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card Security Code" />
            <input type="text" placeholder="Expiration Date" />
            <button className="pay-btn">PAY WITH CARD</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;