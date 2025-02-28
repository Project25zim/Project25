import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@/css/navbar.css';

const menuItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about',
    submenu: [
      { title: 'Our Story', path: '/about#story' },
      { title: 'Our Team', path: '/about#team' },
      { title: 'Our Impact', path: '/about#impact' }
    ]
  },
  {
    title: 'Our Initiatives',
    path: '/ourinitiatives',
    submenu: [
      { title: 'Education Programs', path: '/initiative/1' },
      { title: 'Community Support', path: '/initiative/2' },
      { title: 'Youth Development', path: '/initiative/3' },
      { title: 'Health & Wellness', path: '/initiative/4' }
    ]
  },
  {
    title: 'Get Involved',
    path: '/volunteer',
    submenu: [
      { title: 'Volunteer', path: '/volunteer' },
      { title: 'Partner With Us', path: '/volunteer#partner' },
      { title: 'Careers', path: '/volunteer#careers' }
    ]
  },
  {
    title: 'Donate',
    path: '/donate',
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Project 25
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item">
              {item.submenu ? (
                <div className="dropdown-wrapper">
                  <Link to={item.path} className="navbar-link">
                    {item.title}
                    <span className="dropdown-arrow">▼</span>
                  </Link>
                  <ul className="dropdown-menu">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="dropdown-item">
                        <Link to={subItem.path} className="dropdown-link">
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to={item.path} className="navbar-link">
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;