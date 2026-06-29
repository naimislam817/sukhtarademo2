import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import './Layout.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileSubmenuOpen(false); // Close submenu when closing main menu
    }
  };

  const logoUrl = "https://demo.hotelshuktara.com/wp-content/uploads/2024/05/Hotel-Shuktara-Just-Logo-300px.png";

  return (
    <>
      <header className="header-main">
        <div className="container navbar-container">
          {/* Logo */}
          <a href="#/" className="logo-link">
            <img src={logoUrl} alt="Hotel Shuktara Logo" className="logo-image" />
          </a>

          {/* Desktop Navigation */}
          <div className="nav-actions">
            <nav className="nav-menu">
              <div className="nav-item">
                <a href="#/rooms" className="nav-link">Rooms</a>
              </div>
              <div className="nav-item" 
                   onMouseEnter={() => setIsDropdownOpen(true)}
                   onMouseLeave={() => setIsDropdownOpen(false)}>
                <span className="nav-link">
                  Facilities & Services <ChevronDown size={14} />
                </span>
                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <a href="#/restaurant" className="dropdown-link">Rasun Restaurant</a>
                  <a href="#/gym" className="dropdown-link">Gym</a>
                  <a href="#/conference" className="dropdown-link">Conference Room</a>
                </div>
              </div>
            </nav>

            {/* Book Now Button Desktop */}
            <a href="#/book-now" className="btn navbar-book-btn nav-menu">
              Book Now
            </a>

            {/* Mobile Menu Opener */}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>

      {/* Mobile Drawer Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-logo-area">
          <a href="#/" onClick={toggleMobileMenu}>
            <img src={logoUrl} alt="Hotel Shuktara Logo" className="logo-image" style={{ height: '50px' }} />
          </a>
          <button className="mobile-close-btn" onClick={toggleMobileMenu} aria-label="Close Menu">
            <X size={28} />
          </button>
        </div>

        <nav className="mobile-menu-links">
          <div className="mobile-nav-item">
            <a href="#/rooms" className="mobile-nav-link" onClick={toggleMobileMenu}>
              Rooms
            </a>
          </div>
          <div className="mobile-nav-item">
            <button className="mobile-nav-link" onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}>
              <span>Facilities & Services</span>
              {isMobileSubmenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            
            {isMobileSubmenuOpen && (
              <div className="mobile-submenu">
                <a href="#/restaurant" className="mobile-submenu-link" onClick={toggleMobileMenu}>
                  Rasun Restaurant
                </a>
                <a href="#/gym" className="mobile-submenu-link" onClick={toggleMobileMenu}>
                  Gym
                </a>
                <a href="#/conference" className="mobile-submenu-link" onClick={toggleMobileMenu}>
                  Conference Room
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Book Now Button Mobile */}
        <a href="#/book-now" className="btn btn-primary mobile-book-btn" onClick={toggleMobileMenu} style={{ borderRadius: '85px' }}>
          Book Now
        </a>
      </div>
    </>
  );
}
