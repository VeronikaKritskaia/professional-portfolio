import React from 'react';
// Import the SCSS file we will create next
import '../assets/styles/AboutMe.scss';

const About = () => {
  return (
      <div className="about-me-container" id="about">
      <h1>About Me</h1>
      <p className="about-description">
        Highly motivated and results-oriented Data Scientist with a proven track record of 
        success in developing and deploying innovative AI/ML solutions. 
        Expertise in computer vision, NLP, and machine learning techniques, with a 
        strong focus on data analysis, model development, and deployment.
      </p>
      </div>
  );
};

export default About;