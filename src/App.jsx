import React from 'react';
import './App.scss';
import { useLocation, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';

function isLowerScreen() {
  return window.matchMedia('(max-width:800px)').matches;
}

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Set a minimum height for the App component to fill the space
  const minHeight = 'calc(100vh - 120px)'; // Adjust the value as needed

  return (
    <div style={{ minHeight }}>
      <Header />
      {isHome && <Introduction />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
