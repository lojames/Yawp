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
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=40.7309&lon=-73.9872&loc=New%20York&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >New York
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=34.0537&lon=-118.243&loc=Los%20Angeles%2C%20California&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >Los Angeles
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=41.8756&lon=-87.6244&loc=Chicago%2C%20Illinois&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >Chicago
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=29.7589&lon=-95.3677&loc=Houston%2C%20Texas&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >Houston
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=33.4486&lon=-112.077&loc=Phoenix%2C%20Arizona&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >Phoenix
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-cities-2">
          <div className="footer-main-header" style={{height:"18px"}}>
          </div>
          <ul className="footer-main-content">
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=39.9524&lon=-75.1636&loc=Philadelphia%2C%20Pennsylvania&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >Philadelphia
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=29.4246&lon=-98.4951&loc=San%20Antonio%2C%20Texas&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >San Antonio
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=32.7174&lon=-117.163&loc=San%20Diego%2C%20California&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >San Diego
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=32.7763&lon=-96.7969&loc=Dallas%2C%20Texas&filters=&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >Dallas
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=37.3362&lon=-121.891&loc=San%20José%2C%20California&filters=l'
                }}
                onClick={window.scrollTo(0, 0)}
                >San Hose
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-developer">
          <div className="footer-main-header">
            About the Dev
          </div>
          <ul className="footer-main-content">
            <li><a href="https://lojames.github.io/">About Me</a></li>
            <li><a href="https://github.com/lojames">Github</a></li>
            <li><a href="http://linkedin.com/in/james-lo-254a48b6">LinkedIn</a></li>
            <li><a href="mailto:lo.jamess@gmail.com">Contact</a></li>
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
