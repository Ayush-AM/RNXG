import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>RNXG</h1>
      </div>
      <ul className="navbar-links" role="navigation">
        <li><a href="#about">About</a></li>
        <li><a href="#mission">Mission</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#join">Join Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;