import React from 'react';
import './Home.css';
import hotelData from '../../data/hotelData.json';

export default function Home() {
  const { hotelInfo, stats, amenities, rooms } = hotelData;

  // Featured rooms — exclude Superior Twin
  const featuredRooms = rooms.filter(r => r.id !== 'superior-twin').slice(0, 2);

  const gallery = [
    {
      label: 'Skylight Rooftop',
      sublabel: 'Open sky above the city',
      img: '/images/rooftop.jpg',
      fallback: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Premium Living',
      sublabel: 'Elegant rooms, every night',
      img: '/images/room-deluxe-king.jpg',
      fallback: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Lobby Lounge',
      sublabel: 'A warm welcome awaits',
      img: '/images/lobby.jpg',
      fallback: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=700&q=80',
    },
    {
      label: 'Rasun Cuisine',
      sublabel: 'World-class authentic flavours',
      img: '/images/restaurant.jpg',
      fallback: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <div className="home-page">

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="hero-section" id="home">
        <div className="hero-media hero-media--empty" />
        <div className="hero-grain" />
        <div className="hero-frame" aria-hidden="true">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
        </div>

        <div className="container hero-content">
          <span className="hero-index">No. 01 — FARMGATE, DHAKA</span>
          <h1 className="hero-title">
            A Tradition of<br />
            <em>Gracious</em> Hospitality
          </h1>
          <p className="hero-desc">
            Formal elegance and local warmth, held together in the heart of the city —
            a residential hotel built the way hospitality used to be practised.
          </p>
          <div className="hero-cta">
            <a href="#/rooms" className="btn-hero-primary">
              <span>Discover Suites</span>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5H15M15 5L10.5 1M15 5L10.5 9" stroke="currentColor" strokeWidth="1.4"/></svg>
            </a>
            <a href="#about" className="btn-hero-ghost">View Gallery</a>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span className="hero-scroll-line" />
          <span className="hero-scroll-text">SCROLL</span>
        </div>
      </section>

      {/* Running heritage marquee */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {Array(2).fill(0).map((_, i) => (
            <span className="marquee-set" key={i}>
              FARMGATE · DHAKA&nbsp;&nbsp;◆&nbsp;&nbsp;EST. TRADITION&nbsp;&nbsp;◆&nbsp;&nbsp;GRACIOUS HOSPITALITY&nbsp;&nbsp;◆&nbsp;&nbsp;RASUN CUISINE&nbsp;&nbsp;◆&nbsp;&nbsp;SKYLIGHT ROOFTOP&nbsp;&nbsp;◆&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════ */}
      <section className="about-section section" id="about">
        <div className="container about-grid">

          <div className="about-image-col">
            <div className="about-img-wrap">
              <img
                src="/images/lobby.jpg"
                alt="Hotel Shuktara Lobby"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="about-stat-plate">
              <span className="about-stat-num">15+</span>
              <span className="about-stat-label">Years of<br />Excellence</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-eyebrow">About the House</span>
            <h2 className="about-heading">
              In the Heart<br />of Dhaka City
            </h2>
            <p className="about-desc about-desc--lead">
              <span className="drop-cap">H</span>otel Shuktara is a full‑service boutique
              hotel positioned in the strategic heart of Farmgate, bridging global
              standards with unmistakably local warmth.
            </p>
            <p className="about-desc">
              We were among the first to pioneer premium residential hotel experiences
              in Bangladesh — set close to corporate hubs, built for the modern
              traveller, and tempered with the tranquillity every guest deserves.
            </p>
            <a href="#/rooms" className="about-link">
              Learn More About Our Story <span className="about-link-arrow">→</span>
            </a>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS — brass ribbon
      ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          AMENITIES — editorial index list
      ═══════════════════════════════════════════ */}
      <section className="amenities-section section">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow">Curated For You</span>
              <h2 className="section-title">World‑Class Facilities</h2>
            </div>
            <p className="section-header-note">
              Every amenity considered, so that comfort is never an afterthought.
            </p>
          </div>

          <div className="amenity-index">
            {amenities.map((a, i) => (
              <div className="amenity-row" key={i}>
                <span className="amenity-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="amenity-icon" role="img" aria-label={a.label}>{a.icon}</span>
                <div className="amenity-text">
                  <h3 className="amenity-label">{a.label}</h3>
                  <p className="amenity-desc">{a.description}</p>
                </div>
                <span className="amenity-row-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GALLERY
      ═══════════════════════════════════════════ */}
      <section className="gallery-section section">
        <div className="container">
          <div className="gallery-header">
            <div>
              <span className="section-eyebrow">Curated Lifestyle Stay</span>
              <h2 className="section-title">Unforgettable Experiences</h2>
            </div>
            <a href="#/rooms" className="gallery-explore-link">
              Explore Our Story <span>→</span>
            </a>
          </div>

          <div className="gallery-grid">
            {gallery.map((g, i) => (
              <div className={`gallery-card gallery-card-${i}`} key={i}>
                <div className="gallery-card-media">
                  <img
                    src={g.img}
                    alt={g.label}
                    onError={(e) => { e.target.src = g.fallback; }}
                  />
                </div>
                <div className="gallery-card-overlay" />
                <span className="gallery-card-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="gallery-card-label">
                  <span className="gc-title">{g.label}</span>
                  <span className="gc-sub">{g.sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ROOMS
      ═══════════════════════════════════════════ */}
      <section className="rooms-section section" id="rooms">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Our Accommodations</span>
            <h2 className="section-title">Luxury Accommodations</h2>
          </div>

          <div className="rooms-grid">
            {featuredRooms.map((room, i) => (
              <div className="room-card" key={room.id}>
                <div className="room-card-img">
                  <div className="room-card-media">
                    {room.id !== 'superior-twin' ? (
                      <img
                        src={room.mainImage}
                        alt={room.name}
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                    ) : (
                      <div className="room-card-media-placeholder" />
                    )}
                  </div>
                  <span className="room-card-tag">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="room-card-body">
                  <h3 className="room-card-name">{room.name}</h3>
                  <p className="room-card-desc">{room.description}</p>
                  <a href={`#/rooms/${room.id}`} className="btn-view-detail">
                    <span>View Detail</span>
                    <svg width="14" height="9" viewBox="0 0 16 10" fill="none"><path d="M1 5H15M15 5L10.5 1M15 5L10.5 9" stroke="currentColor" strokeWidth="1.4"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BAND
      ═══════════════════════════════════════════ */}
      <section className="cta-band">
        <div className="container cta-inner">
          <span className="section-eyebrow section-eyebrow--light">Reserve Your Stay</span>
          <h2 className="cta-title">Your Room at Shuktara<br />Is Waiting</h2>
          <a href="#/rooms" className="btn-hero-primary btn-cta">
            <span>Book Your Stay</span>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5H15M15 5L10.5 1M15 5L10.5 9" stroke="currentColor" strokeWidth="1.4"/></svg>
          </a>
        </div>
      </section>

    </div>
  );
}