import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import linkedIn from './assets/linkedin.png';
import gitHub from './assets/github.png';
import goodReads from './assets/goodreads.png';
import spotify from './assets/spotify.png';
import resumeIcon from './assets/resume.png';
import resume from './assets/resume.pdf';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">home</Link>
      <div className="navbar-links">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <img src={resumeIcon} alt="Resume Icon" className="navbar-logo" />
        </a>
        <a href="https://www.linkedin.com/in/alyssaranastasi" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="LinkedIn Logo" className="navbar-logo" />
        </a>
         <a href="https://github.com/alyssaanastasi" target="_blank" rel="noopener noreferrer">
          <img src={gitHub} alt="GitHub Logo" className="navbar-logo" />
        </a>
        <a href="https://www.goodreads.com/user/show/32751283-alyssa" target="_blank" rel="noopener noreferrer">
          <img src={goodReads} alt="Goodreads Logo" className="navbar-logo" />
        </a>
        <a href="https://open.spotify.com/user/ynhy38lxi84d7a5khthxy2rgy?si=386ab85e5a704398" target="_blank" rel="noopener noreferrer">
          <img src={spotify} alt="Spotify Logo" className="navbar-logo" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
