import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Topbar />
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
