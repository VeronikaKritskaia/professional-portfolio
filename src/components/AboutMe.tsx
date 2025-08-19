import React from 'react';
// Import the SCSS file we will create next
import '../assets/styles/AboutMe.scss';

const About = () => {
  return (
      <div className="about-me-container" id="about">
      <h1>About Me</h1>
      <p className="about-description">
        Data Scientist with 3+ years of experience delivering end-to-end machine learning solutions in 
        retail and e-commerce. Skilled in computer vision, NLP, and large language models, with hands-on expertise 
        in MLOps, deployment, and cloud platforms (AWS, GCP, Databricks). Proven track record of automating processes, 
        improving efficiency, and scaling AI systems into production. Strong collaborator with business stakeholders and 
        mentor to junior colleagues, combining technical depth with business impact.

      </p>
      </div>
  );
};

export default About;