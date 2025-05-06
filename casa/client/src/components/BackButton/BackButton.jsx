import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = ({ bgColor, arrowColor, applyEffect, boxShadow, customClick }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (applyEffect) {
      setShow(true);
    }
  }, [applyEffect]);

  const handleClick = () => {
    if (customClick) {
      customClick();
    } else {
      navigate(-1); 
    }
  };

  return (
    <button
      className={`back-button ${show ? 'fade-in' : ''}`}
      style={{
        backgroundColor: bgColor,
        boxShadow: boxShadow || '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
      onClick={handleClick}
    >
      <span className="back-arrow" style={{ color: arrowColor }}>
        &lt;
      </span>
    </button>
  );
};

export default BackButton;