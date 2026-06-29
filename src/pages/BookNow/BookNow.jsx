import React, { useState } from 'react';
import hotelData from '../../data/hotelData.json';
import './BookNow.css';

const ROOM_OPTIONS = [
  'Premium Triple',
  'Deluxe Twin',
  'Superior Twin',
  'Premium Deluxe King',
  'Deluxe King',
  'Superior King',
  'Standard Single',
];

const INITIAL_FORM = {
  fullName: '',
  email: '',
  checkIn: '',
  checkOut: '',
  roomPreference: '',
  numberOfRooms: 1,
  specialRequest: '',
};

export default function BookNow() {
  const { hotelInfo } = hotelData;
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [globalError, setGlobalError] = useState('');

  const logoUrl =
    'https://demo.hotelshuktara.com/wp-content/uploads/2024/05/Hotel-Shuktara-Just-Logo-300px.png';

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address.';
    if (!form.checkIn) errs.checkIn = 'Check-in date is required.';
    if (!form.checkOut) errs.checkOut = 'Check-out date is required.';
    else if (form.checkIn && form.checkOut <= form.checkIn)
      errs.checkOut = 'Check-out must be after check-in.';
    if (!form.roomPreference) errs.roomPreference = 'Please select a room preference.';
    if (!form.numberOfRooms || form.numberOfRooms < 1)
      errs.numberOfRooms = 'Enter at least 1 room.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for field on change
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setGlobalError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setGlobalError('One or more fields have an error. Please check and try again.');
      return;
    }
    setErrors({});
    setGlobalError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booknow-page">
        {/* Hero Title Bar */}
        <div className="booknow-hero">
          <p className="booknow-hero-eyebrow">Gracious Hospitality</p>
          <h1 className="booknow-hero-title">BOOK NOW</h1>
          <span className="booknow-hero-rule" />
        </div>

        <section className="booknow-section section">
          <div className="container">
            <div className="booknow-success">
              <div className="success-icon">✓</div>
              <h2>Booking Request Received!</h2>
              <p>
                Thank you, <strong>{form.fullName}</strong>. We have received your booking request
                for a <strong>{form.roomPreference}</strong> room. Our team will contact you at{' '}
                <strong>{form.email}</strong> shortly to confirm your reservation.
              </p>
              <a href="#/" className="btn-book-submit" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
                BACK TO HOME
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="booknow-page">
      {/* Hero Title Bar — matches screenshot */}
      <div className="booknow-hero">
        <p className="booknow-hero-eyebrow">Gracious Hospitality</p>
        <h1 className="booknow-hero-title">BOOK NOW</h1>
        <span className="booknow-hero-rule" />
      </div>

      {/* Main Content */}
      <section className="booknow-section section">
        <div className="container">
          <div className="booknow-layout">

            {/* Left: Info Panel */}
            <div className="booknow-info">
              <h2 className="booknow-info-title">BOOK NOW</h2>
              <p className="booknow-info-sub">Feel free to reach out to us</p>
              <div className="booknow-info-logo">
                <img src={logoUrl} alt="Hotel Shuktara Logo" />
              </div>
            </div>

            {/* Right: Booking Form */}
            <form className="booknow-form" onSubmit={handleSubmit} noValidate>

              {/* Full Name */}
              <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
                <label htmlFor="fullName">Full Name<span className="req">*</span></label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder=""
                  value={form.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
              </div>

              {/* Email */}
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email">Email<span className="req">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=""
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>



              {/* Check In / Check Out — two column */}
              <div className="form-row">
                <div className={`form-group ${errors.checkIn ? 'has-error' : ''}`}>
                  <label htmlFor="checkIn">Check In Date<span className="req">*</span></label>
                  <input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={form.checkIn}
                    onChange={handleChange}
                  />
                  {errors.checkIn && <span className="field-error">{errors.checkIn}</span>}
                </div>
                <div className={`form-group ${errors.checkOut ? 'has-error' : ''}`}>
                  <label htmlFor="checkOut">Check Out Date<span className="req">*</span></label>
                  <input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={form.checkOut}
                    onChange={handleChange}
                  />
                  {errors.checkOut && <span className="field-error">{errors.checkOut}</span>}
                </div>
              </div>

              {/* Room Preference */}
              <div className={`form-group ${errors.roomPreference ? 'has-error' : ''}`}>
                <label htmlFor="roomPreference">Room Preference<span className="req">*</span></label>
                <select
                  id="roomPreference"
                  name="roomPreference"
                  value={form.roomPreference}
                  onChange={handleChange}
                >
                  <option value="">Superior Twin</option>
                  {ROOM_OPTIONS.map((room) => (
                    <option key={room} value={room}>{room}</option>
                  ))}
                </select>
                {errors.roomPreference && (
                  <span className="field-error">{errors.roomPreference}</span>
                )}
              </div>

              {/* Number of Rooms */}
              <div className={`form-group ${errors.numberOfRooms ? 'has-error' : ''}`}>
                <label htmlFor="numberOfRooms">Number of Rooms<span className="req">*</span></label>
                <input
                  id="numberOfRooms"
                  name="numberOfRooms"
                  type="number"
                  min="1"
                  max="20"
                  value={form.numberOfRooms}
                  onChange={handleChange}
                />
                {errors.numberOfRooms && (
                  <span className="field-error">{errors.numberOfRooms}</span>
                )}
              </div>

              {/* Special Request */}
              <div className="form-group">
                <label htmlFor="specialRequest">Special Request<span className="req">*</span></label>
                <textarea
                  id="specialRequest"
                  name="specialRequest"
                  rows="5"
                  value={form.specialRequest}
                  onChange={handleChange}
                />
              </div>

              {/* Global Error */}
              {globalError && (
                <div className="global-error">{globalError}</div>
              )}

              {/* Submit */}
              <button type="submit" className="btn-book-submit">
                BOOK NOW
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
