import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoBlanc from '../../../assets/C-blanc.png';

const NAVBAR_CONFIGS = {
  default: {
    logo: logoBlanc,
    links: [
      { to: '/', label: 'Home' },
      { to: '/products', label: 'Products' },
      { to: '/map', label: 'Map' },
      { to: '/contact', label: 'Contact' }
    ]
  },
  profile: {
    logo: logoBlanc,
    links: [
      { to: '/profile/orders', label: 'Orders' },
      { to: '/profile/traceability', label: 'Traceability' },
      { to: '/profile/account', label: 'Account' }
    ]
  },
  donation: {
    logo: logoBlanc,
    links: [
      { to: '/donation/box', label: 'Box' },
      { to: '/donation/checkout', label: 'Checkout' },
      { to: '/donation/payment', label: 'Payment' }
    ]
  }
};

const Navbar = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const config = NAVBAR_CONFIGS[variant];

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

  return (
    <nav className={`custom-navbar ${variant === 'inscription' ? 'inscription-navbar' : ''}`}>
      <img src={config.logo} alt="Logo" className="custom-logo" />
      
      {isMobile && (
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
      )}

      <ul className={`custom-nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        {config.links.map(link => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="custom-right">
        <Link to="/cart" className="cart-icon">🛒</Link>
        <Link to="/join" className="join-btn">Join Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;