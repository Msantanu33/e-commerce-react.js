import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import ig from "../Assets/instagram_icon.png";
import pin from "../Assets/pintester_icon.png";
import wp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer Logo" />
        <p>Mshop</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={ig} alt="insta" />
        </div>
        <div className="footer-icons-container">
          <img src={pin} alt="pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={wp} alt="whatsapp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
