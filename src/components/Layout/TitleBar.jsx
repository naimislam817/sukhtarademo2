import React from 'react';
import './Layout.css';

export default function TitleBar({ title = "Hotel Shuktara (Pvt.) Ltd.", breadcrumbs = ["Home"] }) {
  return (
    <div className="page-title-bar">
      <div className="container title-bar-container">
        <h5 className="page-title">{title}</h5>
        <div className="breadcrumbs">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx}>
              {idx > 0 && <span style={{ margin: '0 8px' }}>&gt;</span>}
              {idx === breadcrumbs.length - 1 ? (
                <span className="breadcrumbs-current">{crumb}</span>
              ) : (
                <a href="/">{crumb}</a>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
