import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-grid">

        <div className="contact-left">
           <Typography variant="body1" className="contact-message">
            <p> I’m always open to new opportunities, collaborations, or simply having a conversation.
             Feel free to reach out or check out my resume.</p>
           </Typography>
           <Button
             variant="outlined"
             startIcon={<DescriptionIcon />}
             href="/Veronika_Resume.pdf"
             target="_blank"
            rel="noopener noreferrer"
           >Download CV
          </Button>
         </div>

         <div className="contact-right">
           <div className="contact-item">
             <LocationOnIcon />
           <span>Utrecht, Netherlands</span>
         </div>
          <div className="contact-item">
            <PhoneIcon />
            <span>+31 6 14 46 8164</span>
          </div>
          <div className="contact-item">
           <EmailIcon />
             <a href="mailto:v.kritskaya99@gmail.com">v.kritskaya99@gmail.com</a>
           </div>
       </div>
      </div>
    </div>

  );
}

export default Contact;