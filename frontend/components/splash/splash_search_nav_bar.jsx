import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantIcon, nightlifeIcon, homeservicesIcon, deliveryIcon, triangledownIcon } from '../../util/icons'

const SplashSearchNavBar = () => {
  return (
    <div className="splash-search-nav-bar">
      <ul>
      <li className="splash-search-nav-restaurants">
        {restaurantIcon(18, "white")}
        <Link to="/">Restaurants</Link>
      </li>

      <li className="splash-search-nav-nightlife">
        {nightlifeIcon(18, "white")}
        <Link to="/">Nightlife</Link>
      </li>

      <li className="splash-search-nav-homeservices">
        {homeservicesIcon(18, "white")}
        <div className="homeservices-dropdown">
          Home Services
        </div>
        {triangledownIcon(14, "white")}
        <div className="homeservices-dropdown-border-container">
          <div className="homeservices-dropdown-container">
            <ul className="homeservices-dropdown-links">
              <li><Link to="/">Air Conditioning & Heating</Link></li>
              <li><Link to="/">Contractors</Link></li>
              <li><Link to="/">Electricians</Link></li>
              <li><Link to="/">Home Cleaners</Link></li>
              <li><Link to="/">Landscapers</Link></li>
              <li><Link to="/">Locksmiths</Link></li>
              <li><Link to="/">Movers</Link></li>
              <li><Link to="/">Painters</Link></li>
              <li><Link to="/">Plumbers</Link></li>
            </ul>
          </div>
        </div>
      </li>

      <li className="splash-search-nav-delivery">
        {deliveryIcon(18, "white")}
        <Link to="/">Delivery</Link>
      </li>
      </ul>
    </div>
  );
}

export default SplashSearchNavBar;
