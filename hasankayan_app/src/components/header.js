import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini içe aktarın
import './style/header.css'; // Header bileşenine özgü CSS dosyasını içe aktarın

function Header() {
  return (
    <header className="header">
      <Link to="/about" className="custom-button">About</Link>
      <Link to="/projects" className="custom-button">Projects</Link>
      <Link to="/contact" className="custom-button">Contact</Link>
      {/* Diğer butonlar */}
    </header>
  );
}

export default Header;
