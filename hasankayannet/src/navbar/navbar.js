import React from "react";
import "./navbar.css";
import hasanImage from "./hasan.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-image" src={hasanImage} alt="Hasan Kayan" />
        <div className="text-wrapper">Hasan Kayan</div>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a href="#">CONTACT</a>
        </li>
        <li className="nav-item">
          <a href="#">PROJECTS</a>
        </li>
        <li className="nav-item">
          <a href="#">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
