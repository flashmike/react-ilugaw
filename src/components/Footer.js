import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
      </div>
      <p className="reactified">&copy; 2022 iLUGAW.com | All Rights Reserved.</p>
      <p className="reactified">Reactified by <a href="https://flashmike.com" target="_blank" rel="noopener noreferrer">flashmike.com</a></p>
    </div>
  );
}

export default Footer;
