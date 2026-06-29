import React, { useState } from 'react';
import TitleBar from '../../components/Layout/TitleBar';
import hotelData from '../../data/hotelData.json';
import { X, PhoneCall, Mail, Utensils, Download } from 'lucide-react';
import './Restaurant.css';

export default function Restaurant() {
  const { restaurant } = hotelData;
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const toggleMenuModal = () => {
    setIsMenuModalOpen(!isMenuModalOpen);
  };

  return (
    <div className="restaurant-page">
      {/* Title Bar Section */}
      <TitleBar title="RASUN RESTAURANT" breadcrumbs={["Home", "RASUN RESTAURANT"]} />

      {/* Main Split Section matching screenshot */}
      <section className="restaurant-main-section section">
        <div className="container">
          <div className="restaurant-split">
            
            {/* Left Image */}
            <div className="restaurant-image-box">
              <img
                src={restaurant.signImage}
                alt="Rasun Restaurant"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            {/* Right Text Content */}
            <div className="restaurant-content-box">
              <span className="restaurant-eyebrow">{restaurant.eyebrow}</span>
              <div className="restaurant-title-row">
                <h1 className="restaurant-title">{restaurant.name.toUpperCase()}</h1>
                <span className="title-rule" />
              </div>
              <p className="restaurant-desc">{restaurant.description}</p>

              {/* Action Buttons */}
              <div className="restaurant-actions">
                <a href={`tel:${restaurant.phone}`} className="btn-restaurant btn-contact">
                  CONTACT US <span className="arrow">➔</span>
                </a>
                <button onClick={toggleMenuModal} className="btn-restaurant btn-menu">
                  FOOD MENU <span className="arrow">➔</span>
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Contact Details Strip matching screenshot */}
          <div className="restaurant-contact-strip">
            
            {/* Phone Block */}
            <div className="contact-block">
              <div className="contact-icon-circle phone-circle">
                <PhoneCall size={24} />
              </div>
              <div className="contact-block-text">
                <div className="contact-header-line">
                  <span className="contact-label">PHONE: {restaurant.phone}</span>
                  <span className="contact-inline-rule" />
                </div>
                <span className="contact-subtext">{restaurant.phoneTiming}</span>
              </div>
            </div>

            {/* Email Block */}
            <div className="contact-block">
              <div className="contact-icon-circle email-circle">
                <Mail size={24} />
              </div>
              <div className="contact-block-text">
                <div className="contact-header-line">
                  <span className="contact-label">EMAIL US</span>
                  <span className="contact-inline-rule" />
                </div>
                <a href={`mailto:${restaurant.email}`} className="contact-subtext email-link">
                  {restaurant.email}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTERACTIVE FOOD MENU MODAL / VIEWER
      ═══════════════════════════════════════════ */}
      {isMenuModalOpen && (
        <div className="menu-modal-overlay" onClick={toggleMenuModal}>
          <div className="menu-modal-container" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="menu-modal-header">
              <div className="header-title-group">
                <Utensils className="menu-icon" size={24} />
                <h2>{restaurant.name} — Authentic Menu</h2>
              </div>
              <button className="menu-modal-close" onClick={toggleMenuModal} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            {/* Category Tabs */}
            <div className="menu-tabs-bar">
              {restaurant.menuCategories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`menu-tab-btn ${idx === activeCategoryIndex ? 'active' : ''}`}
                  onClick={() => setActiveCategoryIndex(idx)}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="menu-modal-body">
              <div className="menu-grid">
                {restaurant.menuCategories[activeCategoryIndex].items.map((item) => (
                  <div key={item.id} className="menu-card">
                    <div className="menu-card-header">
                      <h4 className="menu-platter-name">
                        {item.name}
                        {item.isVeg && <span className="veg-badge" title="Vegetarian">🌱 Veg</span>}
                      </h4>
                      <span className="menu-platter-price">{item.price}</span>
                    </div>
                    <ul className="menu-item-list">
                      {item.items.map((food, i) => (
                        <li key={i}>• {food}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer with PDF Download Link */}
            <div className="menu-modal-footer">
              <div className="pdf-notice">
                <span>Looking for the printed physical menu PDF?</span>
              </div>
              <a 
                href="/menu/Rasun_Restaurant_Menu.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-download-pdf"
                onClick={(e) => {
                  // Fallback alert if local PDF file is not uploaded yet
                  fetch('/menu/Rasun_Restaurant_Menu.pdf', { method: 'HEAD' })
                    .catch(() => alert("PDF downloaded/viewed. You can place your custom Rasun_Restaurant_Menu.pdf file inside public/menu/ folder!"));
                }}
              >
                <Download size={16} /> Download / View Menu PDF
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
