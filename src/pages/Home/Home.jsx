import React, { useState, useEffect } from 'react';
import './Home.css';
import hotelData from '../../data/hotelData.json';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { hotelInfo, stats, facilities, amenities } = hotelData;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="home-page">

      {/* ═══════════════════════════════════════════
          HERO — FORMAL SPLIT PANEL
      ═══════════════════════════════════════════ */}
      <section className="hero-formal">

        {/* LEFT — Brand Panel */}
        <div className="hero-brand-panel">
          <div className="hero-brand-inner">

            {/* Ornamental top line */}
            <div className="ornament-line">
              <span className="ornament-dash" />
              <span className="ornament-diamond">◆</span>
              <span className="ornament-dash" />
            </div>

            <p className="hero-established">Established · {hotelInfo.established}</p>

            <h1 className="hero-formal-title">
              A Tradition<br />
              <em>of Gracious</em><br />
              Hospitality
            </h1>

            <div className="hero-gold-rule" />

            <p className="hero-formal-desc">
              {hotelInfo.name.toUpperCase()} — where every guest is treated as an honoured
              guest. Experience world-class comfort in the heart of Dhaka.
            </p>

            {/* Key info pills */}
            <div className="hero-info-pills">
              <span className="info-pill">⭐ 3-Star Certified</span>
              <span className="info-pill">📍 Farmgate, Dhaka</span>
            </div>

            {/* CTA */}
            <div className="hero-formal-cta">
              <a href="#book-now" className="btn-formal-primary">
                <span className="btn-icon">◆</span>
                Book Your Stay
              </a>
              <a href={`tel:${hotelInfo.phones[0]}`} className="btn-formal-ghost">
                ☎ &nbsp;{hotelInfo.phones[0]}
              </a>
            </div>

            {/* Bottom ornament */}
            <div className="ornament-line" style={{ marginTop: 'auto', paddingTop: '36px' }}>
              <span className="ornament-dash" />
              <span className="ornament-diamond">◆</span>
              <span className="ornament-dash" />
            </div>
          </div>
        </div>

        {/* RIGHT — Photo Collage Stack */}
        <div className="hero-photo-panel">

          {/* Main large photo — reception */}
          <div className="hero-main-photo">
            <img
              src="/images/reception.jpg"
              alt="Hotel Shuktara — Front Desk"
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85';
              }}
            />
            <div className="photo-teal-wash" />
          </div>

          {/* Floating badge — top right */}
          <div className="hero-float-badge">
            <span className="float-badge-star">★★★</span>
            <span className="float-badge-label">Premium<br />Hotel</span>
          </div>

          {/* Small inset photo — bottom-left */}
          <div className="hero-inset-photo">
            <img
              src="/images/room.jpg"
              alt="Hotel Shuktara Room"
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80';
              }}
            />
            <div className="inset-label">Superior Rooms</div>
          </div>

          {/* Teal geometric accent strip */}
          <div className="hero-geo-strip" />
        </div>

      </section>

      {/* ═══════════════════════════════════════════
          FACILITY STRIP — 4 panels
      ═══════════════════════════════════════════ */}
      <section className="facility-strip" id="facilities">
        {facilities.map((f, i) => (
          <div className="facility-panel" key={i}>
            <img
              src={f.img}
              alt={f.label}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80';
              }}
            />
            <div className="facility-overlay" />
            <div className="facility-label-box">
              <span className="facility-sub">{f.sublabel}</span>
              <span className="facility-name">{f.label}</span>
              <span className="facility-line" />
            </div>
          </div>
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          WELCOME — ABOUT SECTION
      ═══════════════════════════════════════════ */}
      <section className="welcome-section section" id="about">
        <div className="container welcome-grid">

          {/* Images side */}
          <div className="welcome-images">
            <div className="welcome-img-main">
              <img
                src="/images/lobby.jpg"
                alt="Hotel Shuktara Lobby"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="welcome-img-accent">
              <img
                src="/images/restaurant.jpg"
                alt="Rasun Restaurant"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80';
                }}
              />
              <div className="welcome-badge-card">
                <span className="badge-number">{hotelInfo.rating}</span>
                <span className="badge-text">{hotelInfo.ratingLabel.split(' ')[0]}<br />{hotelInfo.ratingLabel.split(' ').slice(1).join(' ')}</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="welcome-text">
            <span className="section-eyebrow">About Hotel Shuktara</span>
            <h2 className="section-title">The Finest Safe Hotel<br />In The Heart of Dhaka</h2>
            <div className="gold-divider" />
            <p className="welcome-desc">
              Hotel Shuktara offers a perfect blend of comfort, elegance, and value.
              Situated at 20/A Indira Road, Farmgate — one of Dhaka's most accessible
              locations — we provide a warm, welcoming atmosphere for both leisure
              and business travellers.
            </p>
            <p className="welcome-desc">
              From spacious rooms to world-class dining at our Rasun Restaurant, a
              modern fitness centre, and well-equipped conference facilities — every
              detail at Shuktara is curated for your complete satisfaction.
            </p>

            {/* Amenity tags */}
            <div className="amenity-tags">
              {amenities.map((a, i) => (
                <span className="amenity-tag" key={i}>
                  {a.icon} {a.label}
                </span>
              ))}
            </div>

            <div className="welcome-highlights">
              <div className="highlight-row">
                <span className="highlight-icon">🕐</span>
                <span>Check-in {hotelInfo.checkIn} &nbsp;·&nbsp; Check-out {hotelInfo.checkOut}</span>
              </div>
              <div className="highlight-row">
                <span className="highlight-icon">📍</span>
                <span>{hotelInfo.address}</span>
              </div>
              <div className="highlight-row">
                <span className="highlight-icon">📞</span>
                <span>{hotelInfo.phones.join(' \u00a0·\u00a0 ')}</span>
              </div>
            </div>

            <a href="#book-now" className="btn btn-primary mt-btn">
              Reserve a Room
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="stats-strip">
        <div className="container stats-inner">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {i < stats.length - 1 && <div className="stat-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── BOOK NOW CTA ── */}
      <section className="cta-section" id="book-now">
        <div className="cta-overlay" />
        <div className="container cta-inner">
          <div className="cta-text">
            <div className="ornament-line cta-ornament">
              <span className="ornament-dash light" />
              <span className="ornament-diamond light">◆</span>
              <span className="ornament-dash light" />
            </div>
            <h2 className="cta-title">Ready for an Unforgettable Stay?</h2>
            <p className="cta-desc">
              Contact us directly to check room availability and book your
              perfect getaway in the heart of Dhaka.
            </p>
          </div>
          <div className="cta-actions">
            <a href={`tel:${hotelInfo.phones[0]}`} className="btn btn-accent cta-btn">
              📞 Call to Book
            </a>
            <a href={`mailto:${hotelInfo.email}`} className="btn btn-cta-outline cta-btn">
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
