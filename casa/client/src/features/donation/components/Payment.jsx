import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit Card', icon: '💳' },
  { id: 'bank', name: 'Bank Transfer', icon: '🏦' },
  { id: 'cash', name: 'Cash on Delivery', icon: '💵' }
];

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const checkoutData = location.state?.checkoutData;

  if (!checkoutData) {
    navigate('/donation');
    return null;
  }

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Navigate to success page or handle errors
    navigate('/profile/orders', { 
      state: { 
        success: true,
        message: 'Thank you for your donation!' 
      } 
    });
  };

  return (
    <div className="payment-container">
      <div className="payment-summary">
        <h2>Payment Summary</h2>
        <div className="order-details">
          <div className="detail-row">
            <span>Items Total:</span>
            <span>{checkoutData.totalAmount} DT</span>
          </div>
          <div className="detail-row">
            <span>Delivery:</span>
            <span>Free</span>
          </div>
          <div className="detail-row total">
            <span>Total:</span>
            <span>{checkoutData.totalAmount} DT</span>
          </div>
        </div>
      </div>

      <div className="payment-methods">
        <h2>Select Payment Method</h2>
        <div className="methods-grid">
          {PAYMENT_METHODS.map(method => (
            <div 
              key={method.id}
              className={`method-card ${selectedMethod === method.id ? 'selected' : ''}`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <span className="method-icon">{method.icon}</span>
              <span className="method-name">{method.name}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handlePayment} className="payment-form">
          {selectedMethod === 'card' && (
            <>
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="123" required />
                </div>
              </div>
            </>
          )}

          <button 
            type="submit" 
            className="confirm-payment" 
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Confirm Payment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;