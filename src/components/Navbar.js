import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">alyssa anastasi</Link>
      <ul>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
