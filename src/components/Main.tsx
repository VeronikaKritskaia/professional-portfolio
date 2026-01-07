// import React from "react";
import '../assets/styles/Main.scss';
import photo from '../assets/images/my_photo.png';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={photo} alt="Avatar" />
        </div>
        <div className="content">
          <p>Data Scientist</p>
          <h1>Veronika Kritskaia</h1>

          {/* The main button is now wrapped for better layout control */}
          <div className="hero-action-area">
            <a 
              href={`${process.env.PUBLIC_URL}/Veronika_Resume.pdf`} 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          {/* New container for the social links */}
          <div className="social-links">
            <a href="#contact" className="social-icon" aria-label="Email">
              <EmailIcon />
            </a>
            <a 
              href="https://www.linkedin.com/in/veronika-kritskaia/" // <-- TODO: Add your LinkedIn URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            {/* <a 
              href="https://github.com/VeronikaKritskaia" // <-- TODO: Add your GitHub URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a> */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;