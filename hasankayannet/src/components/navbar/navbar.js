import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './navbar.css'; // Import your CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      {/* Use Link components with customized paths */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
