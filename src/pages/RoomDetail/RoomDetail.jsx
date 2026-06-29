import React, { useState } from 'react';
import TitleBar from '../../components/Layout/TitleBar';
import hotelData from '../../data/hotelData.json';
import './RoomDetail.css';

export default function RoomDetail({ roomId }) {
  const { rooms, hotelInfo } = hotelData;
  const room = rooms.find((r) => r.id === roomId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) {
    return (
      <div className="room-not-found section container text-center">
        <h2>Room Not Found</h2>
        <p>The requested room category could not be found.</p>
        <a href="#/rooms" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to All Rooms
        </a>
      </div>
    );
  }

  // Gallery list combining main image and extra gallery items if present
  const galleryImages = [room.mainImage, ...(room.gallery || [])];

  return (
    <div className="room-detail-page">
      {/* Title Bar Section */}
      <TitleBar title={room.name.toUpperCase()} breadcrumbs={["Home", "Rooms", room.name]} />

      <section className="room-detail-body section">
        <div className="container">
          <div className="room-detail-grid">
            
            {/* LEFT COLUMN — Media Gallery & Descriptions */}
            <div className="room-main-col">
              
              {/* Main Image Viewport */}
              <div className="room-gallery-main">
                <div className="room-image-viewport">
                  <img 
                    src={galleryImages[activeImageIndex]} 
                    alt={room.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="room-image-fallback-placeholder" style={{ display: 'none' }}>
                    FEATURED IMAGE 800X600
                  </div>
                  <div className="room-image-fallback-placeholder default-placeholder">
                    FEATURED IMAGE 800X600
                  </div>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              <div className="room-thumbnails-strip">
                {galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    className={`thumbnail-btn ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <div className="thumb-placeholder">
                      <span>IMG {idx + 1}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Room Information Section */}
              <div className="room-info-box">
                <h2 className="info-box-title">Room Details & Information</h2>
                <div className="gold-divider" />
                <p className="info-box-text">{room.information}</p>
              </div>

              {/* Room Features & Amenities Checklist */}
              <div className="room-features-box">
                <h3 className="features-box-title">Room Amenities & Features</h3>
                <ul className="features-checklist">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="feature-check-item">
                      <span className="check-mark">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN — Booking & Specifications Sidebar */}
            <div className="room-sidebar-col">
              <div className="sidebar-card">
                <h3 className="sidebar-title">Room Overview</h3>
                <div className="sidebar-divider" />

                <div className="spec-list">
                  <div className="spec-item">
                    <span className="spec-label">Capacity</span>
                    <span className="spec-value">{room.capacity}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Bed Type</span>
                    <span className="spec-value">{room.bedType}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Housekeeping</span>
                    <span className="spec-value">Daily Cleaned</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Room Service</span>
                    <span className="spec-value">24/7 Available</span>
                  </div>
                </div>

                <div className="sidebar-actions">
                  <a href="#book-now" className="btn btn-accent sidebar-book-btn">
                    Book This Room
                  </a>
                  <a href={`tel:${hotelInfo.phones[0]}`} className="btn btn-outline sidebar-call-btn">
                    📞 Call Front Desk
                  </a>
                </div>

                <div className="sidebar-help-note">
                  <p>Need assistance with booking? Contact our reservation team anytime.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
