import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-content">

        {/* --- Location Column --- */}
        <div className="footer-column">
          <div className="column-title">Location</div>
          <div className="column-text">Utrecht, Netherlands</div>
        </div>

        {/* --- Call Column --- */}
        <div className="footer-column">
          <div className="column-title">Call</div>
          <a href="tel:+31614468164" className="column-text">+31 6 14 46 8164</a>
        </div>

        {/* --- Write Column --- */}
        <div className="footer-column">
          <div className="column-title">Write</div>
          <a href="mailto:v.kritskaya99@gmail.com" className="column-text">v.kritskaya99@gmail.com</a>
        </div>

        {/* --- Follow Column --- */}
        <div className="footer-column">
          <div className="column-title">Follow</div>
          <div className="social-icons">
            <a href="https://github.com/VeronikaKritskaia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/veronika-kritskaia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            {/* The CV download is omitted in this design, as per the image.
                If you still want it, we'd need to find a place for it, perhaps under "Write" or a separate "CV" column. */}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;