import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import Restaurant from './pages/Restaurant/Restaurant';
import Gym from './pages/Gym/Gym';
import Conference from './pages/Conference/Conference';
import BookNow from './pages/BookNow/BookNow';

function App() {
  const [route, setRoute] = useState({ page: 'home', roomId: null });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.startsWith('#/rooms/')) {
        const parts = hash.split('#/rooms/');
        const roomId = parts[1] ? parts[1].replace(/\/$/, '') : null;
        if (roomId) {
          setRoute({ page: 'room-detail', roomId });
        } else {
          setRoute({ page: 'rooms', roomId: null });
        }
      } else if (hash.startsWith('#/rooms')) {
        setRoute({ page: 'rooms', roomId: null });
      } else if (hash.startsWith('#/restaurant')) {
        setRoute({ page: 'restaurant', roomId: null });
      } else if (hash.startsWith('#/gym')) {
        setRoute({ page: 'gym', roomId: null });
      } else if (hash.startsWith('#/conference')) {
        setRoute({ page: 'conference', roomId: null });
      } else if (hash.startsWith('#/book-now')) {
        setRoute({ page: 'book-now', roomId: null });
      } else {
        setRoute({ page: 'home', roomId: null });
      }
      
      // Scroll to top on page transition
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Layout>
      {route.page === 'rooms' && <Rooms />}
      {route.page === 'room-detail' && <RoomDetail roomId={route.roomId} />}
      {route.page === 'restaurant' && <Restaurant />}
      {route.page === 'gym' && <Gym />}
      {route.page === 'conference' && <Conference />}
      {route.page === 'book-now' && <BookNow />}
      {route.page === 'home' && <Home />}
    </Layout>
  );
}

export default App;
