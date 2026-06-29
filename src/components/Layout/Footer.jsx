import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import './Layout.css';

export default function Footer() {
  const whiteLogoUrl = "https://demo.hotelshuktara.com/wp-content/uploads/2024/03/Hotel-Shuktara-Logo-White-Transparent-750x1024.png";
  const paymentCardsUrl = "https://demo.hotelshuktara.com/wp-content/uploads/2024/03/payment-method-cards--e1711102782469.jpg";

  return (
    <footer className="footer">
      <div className="container footer-top">
        {/* Column 1: Logo, Bio & Payment */}
        <div className="footer-column">
          <img src={whiteLogoUrl} alt="Hotel Shuktara White Logo" className="footer-logo" />
          <h5 className="footer-title">Hotel Shuktara (Pvt.) Ltd.</h5>
          <p className="footer-text">
            Hotel Shuktara (Pvt.) Ltd is a modern residential secure hotel in Dhaka offering spacious rooms, dining facilities, a gym, and a gift shop. Located in the Farmgate area, it aims to cater to both local and foreign delegates, providing top-quality services at affordable prices.
          </p>
          <div className="footer-payment">
            <span className="footer-payment-title">We Accept</span>
            <img src={paymentCardsUrl} alt="Accepted Credit Cards" className="footer-payment-image" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column" style={{ paddingLeft: '20px' }}>
          <h5 className="footer-title">Quick Links</h5>
          <ul className="footer-links-list">
            <li><a href="#/rooms" className="footer-link">Accommodation</a></li>
            <li><a href="#gallery" className="footer-link">Gallery</a></li>
            <li><a href="#offers" className="footer-link">Special Offers</a></li>
            <li><a href="#terms" className="footer-link">Terms & Conditions</a></li>
            <li><a href="#payment-method" className="footer-link">Payment Method</a></li>
            <li><a href="#privacy" className="footer-link">Privacy Policies</a></li>
            <li><a href="#sitemap" className="footer-link">Site Map</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Socials */}
        <div className="footer-column">
          <h5 className="footer-title">Contact</h5>
          <div className="footer-contact-details">
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>H# 20/A, Indira Road, Sher-E-Bangla Nagar, Dhaka- 1215, Bangladesh.</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <a href="mailto:info@hotelshuktara.com">info@hotelshuktara.com</a>
                <br />
                <a href="mailto:reservation@hotelshuktara.com">reservation@hotelshuktara.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <a href="tel:+8801400334422">+8801400334422</a>,{' '}
                <a href="tel:+8801998888777">+8801998888777</a>
              </div>
            </div>
          </div>
          
          <hr className="footer-divider" />
          
          <div className="footer-social">
            <h5 className="footer-social-title">Stay Connected</h5>
            <p className="footer-social-text">Follow us in the social media</p>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/HotelShuktara/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Facebook">
                {/* Custom Facebook Icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Twitter">
                {/* Custom Twitter Icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="TripAdvisor">
                {/* Custom TripAdvisor Owl Icon */}
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <circle cx="7" cy="12" r="3.5" />
                  <circle cx="17" cy="12" r="3.5" />
                  <circle cx="7" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="17" cy="12" r="1.5" fill="currentColor" />
                  <path d="M12 11.5v2" />
                  <path d="M7 8.5a7 7 0 0 1 10 0" />
                </svg>
              </a>
              <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Instagram">
                {/* Custom Instagram Icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">© ALL RIGHTS RESERVED HOTEL SHUKTARA (PVT.) LTD.</p>
        </div>
      </div>
    </footer>
  );
}
