import React from 'react';
import './style/header.css'; // Header bileşenine özgü CSS dosyasını içe aktarın


function Header() {
    return (
      <header className="header">
        <button className="custom-button">Buton 1</button>
        <button className="custom-button">Buton 2</button>
        <button className="custom-button">Buton 3</button>
        {/* Diğer butonlar */}
      </header>
    );
  }
  
  export default Header;
  