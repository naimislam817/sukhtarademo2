import React from 'react';
import TitleBar from '../../components/Layout/TitleBar';
import hotelData from '../../data/hotelData.json';
import './Gym.css';

export default function Gym() {
  const { gym, hotelInfo } = hotelData;

  return (
    <div className="gym-page">
      {/* Title Bar Section */}
      <TitleBar title="GYM" breadcrumbs={["Home", "GYM"]} />

      {/* Main Split Section matching screenshot */}
      <section className="gym-main-section section">
        <div className="container">
          <div className="gym-split">
            
            {/* Left Image */}
            <div className="gym-image-box">
              <img
                src={gym.image}
                alt="Hotel Shuktara Gym"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            {/* Right Text Content */}
            <div className="gym-content-box">
              <div className="gym-title-row">
                <h1 className="gym-title">{gym.name.toUpperCase()}</h1>
                <span className="title-rule" />
              </div>
              <p className="gym-desc">{gym.description}</p>

              {/* Action Button matching screenshot */}
              <div className="gym-actions">
                <a href={`tel:${hotelInfo.phones[0]}`} className="btn-gym btn-contact">
                  CONTACT US <span className="arrow">➔</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
