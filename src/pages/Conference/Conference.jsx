import React from 'react';
import TitleBar from '../../components/Layout/TitleBar';
import hotelData from '../../data/hotelData.json';
import './Conference.css';

export default function Conference() {
  const { conference, hotelInfo } = hotelData;

  return (
    <div className="conference-page">
      {/* Title Bar Section */}
      <TitleBar title="CONFERENCE ROOM" breadcrumbs={["Home", "CONFERENCE ROOM"]} />

      {/* Main Split Section */}
      <section className="conference-main-section section">
        <div className="container">
          <div className="conference-split">

            {/* Left Image */}
            <div className="conference-image-box">
              <img
                src={conference.image}
                alt="Hotel Shuktara Conference Room"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            {/* Right Text Content */}
            <div className="conference-content-box">
              <div className="conference-title-row">
                <h1 className="conference-title">{conference.name.toUpperCase()}</h1>
                <span className="title-rule" />
              </div>
              <p className="conference-desc">{conference.description}</p>

              {/* Action Button matching screenshot */}
              <div className="conference-actions">
                <a href={`tel:${hotelInfo.phones[0]}`} className="btn-conference btn-contact">
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
