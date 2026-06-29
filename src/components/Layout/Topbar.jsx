import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import './Layout.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-container">
        <div className="topbar-left">
          <div className="topbar-item">
            <MapPin size={14} className="color-accent" />
            <span>H# 20/A, Indira Road, Sher-E-Bangla Nagar, Dhaka- 1215.</span>
          </div>
          <span className="topbar-separator">|</span>
          <div className="topbar-item">
            <Mail size={14} className="color-accent" />
            <a href="mailto:info@hotelshuktara.com">info@hotelshuktara.com</a>
          </div>
          <span className="topbar-separator">|</span>
          <div className="topbar-item">
            <Phone size={14} className="color-accent" />
            <a href="tel:+8801400334422">+8801400334422</a>
            <span style={{ margin: '0 4px' }}>/</span>
            <a href="tel:+8801998888777">+8801998888777</a>
          </div>
        </div>
        
        <div className="topbar-right">
          <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" className="topbar-social-link" title="Twitter">
            {/* Custom Twitter Icon */}
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/HotelShuktara/" target="_blank" rel="noopener noreferrer" className="topbar-social-link" title="Facebook">
            {/* Custom Facebook Icon */}
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer" className="topbar-social-link" title="TripAdvisor">
            {/* Custom TripAdvisor Owl Icon */}
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <circle cx="7" cy="12" r="3.5" />
              <circle cx="17" cy="12" r="3.5" />
              <circle cx="7" cy="12" r="1.5" fill="currentColor" />
              <circle cx="17" cy="12" r="1.5" fill="currentColor" />
              <path d="M12 11.5v2" />
              <path d="M7 8.5a7 7 0 0 1 10 0" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
