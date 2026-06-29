import React from 'react';
import './Home.css';
import hotelData from '../../data/hotelData.json';

export default function Home() {
  const { hotelInfo, stats, amenities, rooms } = hotelData;

  // Featured rooms — show first 3
  const featuredRooms = rooms.slice(0, 3);

  // Gallery entries
  const gallery = [
    {
      label: 'Skylight Rooftop',
      sublabel: 'Relax and enjoy the open sky above the city.',
      img: '/images/rooftop.jpg',
      fallback: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
      size: 'large',
    },
    {
      label: 'Premium Living',
      sublabel: 'Elegant rooms, every night.',
      img: '/images/room-deluxe-king.jpg',
      fallback: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80',
      size: 'top-right',
    },
    {
      label: 'Lobby Lounge',
      sublabel: 'A warm welcome awaits.',
      img: '/images/lobby.jpg',
      fallback: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
      size: 'bottom-mid',
    },
    {
      label: 'Rasun Cuisine',
      sublabel: 'World-class authentic flavours.',
      img: '/images/restaurant.jpg',
      fallback: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
      size: 'bottom-right',
    },
  ];

  return (
    <div className="home-page">

      {/* ═══════════════════════════════════════════
          HERO — Full-width cinematic banner
      ═══════════════════════════════════════════ */}
      <section className="hero-section" id="home">
        <div className="hero-bg">
          <img
            src="/images/hero-reception.jpg"
            alt="Hotel Shuktara — A Tradition of Gracious Hospitality"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=85';
            }}
          />
        </div>
        <div className="hero-overlay" />

        <div className="container hero-content">
          <p className="hero-eyebrow">WELCOME TO EXCELLENCE</p>
          <h1 className="hero-title">A Tradition of Gracious Hospitality</h1>
          <p className="hero-desc">
            Experience formal elegance and local warmth in the heart of Dhaka's Farmgate.
          </p>
          <div className="hero-cta">
            <a href="#/rooms" className="btn-hero-primary">DISCOVER SUITES</a>
            <a href="#about" className="btn-hero-ghost">VIEW GALLERY</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT — Split image + text
      ═══════════════════════════════════════════ */}
      <section className="about-section section" id="about">
        <div className="container about-grid">

          {/* Left: Image with stat card overlay */}
          <div className="about-image-col">
            <div className="about-img-wrap">
              <img
                src="/images/lobby.jpg"
                alt="Hotel Shuktara Lobby"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="about-stat-card">
                <span className="about-stat-num">15+</span>
                <span className="about-stat-label">Years of<br />Excellence</span>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="about-content">
            <span className="section-eyebrow">ABOUT US</span>
            <h2 className="about-heading">In the Heart of Dhaka City</h2>
            <div className="about-rule" />
            <p className="about-desc">
              Hotel Shuktara is a full-service boutique hotel located in the strategic heart of Farmgate. We bridge the gap between global standards and local warmth, pioneering premium residential hotel experiences in Bangladesh.
            </p>
            <p className="about-desc">
              Strategically positioned near corporate hubs, our facilities support the modern traveller's needs while offering the tranquillity expected in a top-class hotel. We believe that every guest deserves exceptional service.
            </p>
            <a href="#/rooms" className="about-link">
              LEARN MORE ABOUT OUR STORY <span className="about-link-arrow">→</span>
            </a>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AMENITIES — 3×2 grid cards
      ═══════════════════════════════════════════ */}
      <section className="amenities-section section section-bg">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">WORLD-CLASS FACILITIES</span>
            <h2 className="section-title">Curated For Your Comfort</h2>
          </div>
          <div className="amenities-grid">
            {amenities.map((a, i) => (
              <div className="amenity-card" key={i}>
                <span className="amenity-icon" role="img" aria-label={a.label}>{a.icon}</span>
                <h3 className="amenity-label">{a.label}</h3>
                <p className="amenity-desc">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GALLERY — Unforgettable Experiences
      ═══════════════════════════════════════════ */}
      <section className="gallery-section section">
        <div className="container">
          <div className="gallery-header">
            <div>
              <span className="section-eyebrow">CURATED LIFESTYLE STAY</span>
              <h2 className="section-title">Unforgettable Experiences</h2>
            </div>
            <a href="#/rooms" className="gallery-explore-link">
              EXPLORE OUR STORY <span>→</span>
            </a>
          </div>

          <div className="gallery-grid">
            {/* Large left card */}
            <div className="gallery-card gallery-large">
              <img
                src={gallery[0].img}
                alt={gallery[0].label}
                onError={(e) => { e.target.src = gallery[0].fallback; }}
              />
              <div className="gallery-card-overlay" />
              <div className="gallery-card-label">
                <span className="gc-title">{gallery[0].label}</span>
                <span className="gc-sub">{gallery[0].sublabel}</span>
              </div>
            </div>

            {/* Right column: 1 top + 2 bottom */}
            <div className="gallery-right-col">
              <div className="gallery-card gallery-top-right">
                <img
                  src={gallery[1].img}
                  alt={gallery[1].label}
                  onError={(e) => { e.target.src = gallery[1].fallback; }}
                />
                <div className="gallery-card-overlay" />
                <div className="gallery-card-label">
                  <span className="gc-title">{gallery[1].label}</span>
                  <span className="gc-sub">{gallery[1].sublabel}</span>
                </div>
              </div>

              <div className="gallery-bottom-row">
                <div className="gallery-card gallery-bottom">
                  <img
                    src={gallery[2].img}
                    alt={gallery[2].label}
                    onError={(e) => { e.target.src = gallery[2].fallback; }}
                  />
                  <div className="gallery-card-overlay" />
                  <div className="gallery-card-label">
                    <span className="gc-title">{gallery[2].label}</span>
                    <span className="gc-sub">{gallery[2].sublabel}</span>
                  </div>
                </div>

                <div className="gallery-card gallery-bottom">
                  <img
                    src={gallery[3].img}
                    alt={gallery[3].label}
                    onError={(e) => { e.target.src = gallery[3].fallback; }}
                  />
                  <div className="gallery-card-overlay" />
                  <div className="gallery-card-label">
                    <span className="gc-title">{gallery[3].label}</span>
                    <span className="gc-sub">{gallery[3].sublabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS STRIP — dark teal band
      ═══════════════════════════════════════════ */}
      <div className="stats-strip">
        <div className="container stats-inner">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label.toUpperCase()}</span>
              </div>
              {i < stats.length - 1 && <div className="stat-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          ROOMS — Luxury Accommodations
      ═══════════════════════════════════════════ */}
      <section className="rooms-section section" id="rooms">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">OUR ACCOMMODATIONS</span>
            <h2 className="section-title">Luxury Accommodations</h2>
          </div>

          <div className="rooms-grid">
            {featuredRooms.map((room) => (
              <div className="room-card" key={room.id}>
                <div className="room-card-img">
                  <img
                    src={room.mainImage}
                    alt={room.name}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
                <div className="room-card-body">
                  <h3 className="room-card-name">{room.name}</h3>
                  <p className="room-card-desc">{room.description}</p>
                  <a href={`#/rooms/${room.id}`} className="btn-view-detail">
                    VIEW DETAIL
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
