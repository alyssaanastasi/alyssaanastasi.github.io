import { Link } from 'react-router-dom';
import './Navbar.css';
import linkedIn from './assets/linkedin.png';
import gitHub from './assets/github.png';
import goodReads from './assets/goodreads.png';
import resumeIcon from './assets/resume.png';
import resume from './assets/resume.pdf';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-pages">
      <li><Link to="/" className="navbar-page">Home</Link></li>
      <li><Link to="/projects" className="navbar-page">Projects</Link></li>
      {/* <li><Link to="/about" className="navbar-page">about</Link></li> */}
      </ul>
      <div className="navbar-links">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <img src={resumeIcon} alt="Resume Icon"/>
        </a>
        {/* <a href={"mailto:aranastasi@wisc.edu"} target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Resume Icon"/>
        </a> */}
        <a href="https://www.linkedin.com/in/alyssaranastasi" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="LinkedIn Logo"/>
        </a>
         <a href="https://github.com/alyssaanastasi" target="_blank" rel="noopener noreferrer">
          <img src={gitHub} alt="GitHub Logo" />
        </a>
        <a href="https://www.goodreads.com/user/show/32751283-alyssa" target="_blank" rel="noopener noreferrer">
          <img src={goodReads} alt="Goodreads Logo" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
