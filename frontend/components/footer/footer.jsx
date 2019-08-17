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
            <li><Link to="https://github.com/lojames/Yawp/#yawp">About Yawp</Link></li>
            <li><Link to="https://github.com/lojames/Yawp/#location">Geolocation</Link></li>
            <li><Link to="https://github.com/lojames/Yawp/#search">Search</Link></li>
            <li style={{display: "none"}}><Link to="/">Images</Link></li>
            <li style={{display: "none"}}><Link to="/">Dataset</Link></li>
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
                  search: '?query=&lat=40.7309&lon=-73.9872&loc=New%20York&filters='
                }}
                onClick={window.scrollTo(0, 0)}
                >New York
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=34.0537&lon=-118.243&loc=Los%20Angeles%2C%20California&filters='
                }}
                onClick={window.scrollTo(0, 0)}
                >Los Angeles
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=41.8756&lon=-87.6244&loc=Chicago%2C%20Illinois&filters='
                }}
                onClick={window.scrollTo(0, 0)}
                >Chicago
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=29.7589&lon=-95.3677&loc=Houston%2C%20Texas&filters='
                }}
                onClick={window.scrollTo(0, 0)}
                >Houston
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=33.4486&lon=-112.077&loc=Phoenix%2C%20Arizona&filters='
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
                  search: '?query=&lat=39.9524&lon=-75.1636&loc=Philadelphia%2C%20Pennsylvania&filters='
                }}
                onClick={window.scrollTo(0, 0)}
                >Philadelphia
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=29.4246&lon=-98.4951&loc=San%20Antonio%2C%20Texas&filters='
                }}
                onClick={window.scrollTo(0, 0)}
                >San Antonio
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=32.7174&lon=-117.163&loc=San%20Diego%2C%20California&filters='
                }}
                onClick={window.scrollTo(0, 0)}
                >San Diego
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=32.7763&lon=-96.7969&loc=Dallas%2C%20Texas&filters='
                }}
                onClick={window.scrollTo(0, 0)}
                >Dallas
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/search`,
                  search: '?query=&lat=37.7749&lon=-122.41941&loc=San%20Francisco%2C%20California&filters='
                }}
                onClick={window.scrollTo(0, 0)}
                >San Francisco
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
