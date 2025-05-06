import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/C-blanc.png';

const Navbar = ({ linkColor = "#FFFFFF", logoSrc = logo }) => {
  const location = useLocation();
  const [isInscription, setIsInscription] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (location.pathname === "/inscription") {
      setIsInscription(true);
    } else {
      setIsInscription(false);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`custom-navbar ${isInscription ? 'inscription-navbar' : ''}`}>
      <img src={logoSrc} alt="Logo" className="custom-logo" />

      {isMobile && (
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
      )}

      <ul className={`custom-nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <li><Link to="/" style={{ color: linkColor }}>HOME</Link></li>
        <li><Link to="/product" style={{ color: linkColor }}>PRODUCT</Link></li>
        <li><Link to="/map" style={{ color: linkColor }}>MAP</Link></li>
        <li><Link to="/contact" style={{ color: linkColor }}>CONTACT</Link></li>
      </ul>

      <div className="custom-right">
        <Link to="/donation">
          <span className="cart-icon">🛒</span>
        </Link>
        <Link to="/inscription">
          <button className="join-btn">JOIN US</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;