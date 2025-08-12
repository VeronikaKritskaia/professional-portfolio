// import React from "react";
import '../assets/styles/Main.scss';
import photo from '../assets/images/my_photo.png';

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
          <div className="hero-buttons">
            <a 
              href="/Veronika_CV.pdf" 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;