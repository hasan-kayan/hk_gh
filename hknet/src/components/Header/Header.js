import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS you'll write

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">My Portfolio</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item"><Link to="/">Home</Link></li>
          <li className="header-nav-item"><Link to="/projects">Projects</Link></li>
          <li className="header-nav-item"><Link to="/about">About Me</Link></li>
          <li className="header-nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
