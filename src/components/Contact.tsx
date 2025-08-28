import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h1>Get In Touch</h1>
      
      <Typography variant="body1" className="contact-message">
        I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions!
      </Typography>
      
      <Button
        className="MuiButton-outlined" 
        href={`${process.env.PUBLIC_URL}/Veronika_Resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </Button>
    </div>
  );
}

export default Contact;