import React from 'react';
import TitleBar from '../../components/Layout/TitleBar';
import hotelData from '../../data/hotelData.json';
import './Rooms.css';

export default function Rooms() {
  const { roomsContent, rooms } = hotelData;

  return (
    <div className="rooms-page">
      {/* Title Bar Section */}
      <TitleBar title={roomsContent.title} breadcrumbs={["Home", "Rooms"]} />

      {/* Description Section */}
      <section className="rooms-intro section">
        <div className="container intro-content">
          <span className="section-eyebrow intro-eyebrow">{roomsContent.eyebrow}</span>
          <h2 className="section-title intro-title">{roomsContent.title}</h2>
          <div className="gold-divider center" />
          <p className="rooms-intro-text">
            {roomsContent.description}
          </p>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section className="rooms-grid-section section section-bg">
        <div className="container">
          <div className="rooms-grid">
            {rooms.map((room) => (
              <div key={room.id} className="room-card-v2">
                
                {/* Image Display Area */}
                <div className="room-image-placeholder">
                  <img 
                    src={room.mainImage} 
                    alt={room.name}
                    className="room-card-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="placeholder-text-overlay">
                    FEATURED IMAGE 800X600
                  </div>
                  {/* Subtle hover overlay */}
                  <div className="room-card-overlay" />
                </div>

                {/* Content Area */}
                <div className="room-card-content">
                  <h3 className="room-card-name">{room.name}</h3>
                  <p className="room-card-desc">{room.description}</p>
                  <a href={`#/rooms/${room.id}`} className="btn-details">
                    Check Details
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
