// Navigation.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navigation({ isMenuOpen, toggleMenu, closeMenu }) {
  const navigate = useNavigate();
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Me', to: '/about-me' },
    { label: 'Projects', to: '/projects' },
    { label: 'Resume', to: '/resume' },
    { label: 'Client Work', to: '/client' },
    { label: 'Testimonials', to: '/testimonials' },
  ];

  return (
    <nav>
      <div className={`menu-icon-container ${isMenuOpen ? 'open' : ''}`}>
        <div
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </div>
      </div>
      <div
        className={`navigation ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      >
        <ul className="nav__list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
