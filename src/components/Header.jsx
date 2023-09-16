// Header.js
import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <header>
      <div className="top-row">
        <div className="switch" onClick={toggleDarkMode}>
          <div className="flicker"></div>
          <div className="moon"></div>
        </div>

        <Navigation
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      </div>
    </header>
  );
}

export default Header;
