import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-about">
          <div className="footer-main-header">
            About Yawp
          </div>
          <ul className="footer-main-content">
            <li><Link to="/">About Yawp</Link></li>
            <li><Link to="/">Geolcation</Link></li>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/">Images</Link></li>
            <li><Link to="/">Dataset</Link></li>
            <li><a href="https://github.com/lojames/Yawp">Github Project Page</a></li>
          </ul>
        </div>

        <div className="footer-cities-1">
          <div className="footer-main-header">
            Cities
          </div>
          <ul className="footer-main-content">
            <li><Link to="/">New York</Link></li>
            <li><Link to="/">Los Angelos</Link></li>
            <li><Link to="/">Chicago</Link></li>
            <li><Link to="/">Houston</Link></li>
            <li><Link to="/">Phoenix</Link></li>
          </ul>
        </div>

        <div className="footer-cities-2">
          <div className="footer-main-header" style={{height:"18px"}}>
          </div>
          <ul className="footer-main-content">
            <li><Link to="/">Philadelphia</Link></li>
            <li><Link to="/">San Antonio</Link></li>
            <li><Link to="/">San Diego</Link></li>
            <li><Link to="/">Dallas</Link></li>
            <li><Link to="/">San Hose</Link></li>
          </ul>
        </div>

        <div className="footer-developer">
          <div className="footer-main-header">
            About the Dev
          </div>
          <ul className="footer-main-content">
            <li><a href="/">About Me</a></li>
            <li><a href="https://github.com/lojames">Github</a></li>
            <li><a href="http://linkedin.com/in/james-lo-254a48b6">LinkedIn</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>

      <img src='./footer_cityscape.png' className="cityscape"/>

      <div className="footer-copyrights">
        <img src='./yelp_burst.png' className="yelp-burst-small" /> is a registered trademark of <a href="https://www.yelp.com">Yelp</a>.
      </div>

    </div>
  );
};

export default Footer;
