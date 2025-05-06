import React, { useState } from 'react';
import './Header.css';
import DonationPopup from '../DonationPopup/DonationPopup';
import { useNavigate } from 'react-router-dom';

const Header = ({
  bgImage,
  variant = 'light',
  showHero = true,
  customTitle = 'WE MAKE A BIG CHANGE',
}) => {
  const navigate = useNavigate();
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);
  const headerStyle = bgImage
    ? { backgroundImage: `url(${bgImage})` }
    : {};

  return (
    <header className={`header header-${variant}`} style={headerStyle}>
      <div className="navbar">
        <div className="nav-right">
          <button className="register-btn" onClick={() => navigate('/auth/register')}>Register</button>
        </div>
      </div>
      {showHero && (
        <div className="hero">
          <h1 className="hero-title">{customTitle}</h1>
          {customTitle === 'WE MAKE A BIG CHANGE' && (
            <>
              <p className="hero-text">
                Join us in making a big change for the homeless and shaping a brighter future together
              </p>
              <button className="donate-btn" onClick={() => setIsDonationPopupOpen(true)}>MAKE A DONATION</button>
            </>
          )}
        </div>
      )}
      <DonationPopup isOpen={isDonationPopupOpen} onClose={() => setIsDonationPopupOpen(false)} />
    </header>
  );
};

export default Header;
