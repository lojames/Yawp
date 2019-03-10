import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantIcon, nightlifeIcon, homeservicesIcon, deliveryIcon, triangledownIcon } from '../../util/icons';
import { getUserLocation } from '../../util/search_util';

const SplashSearchNavBar = () => {
  const userLocationObj = getUserLocation();
  const lat = userLocationObj.lat
  const lon = userLocationObj.lon
  const userLocation = userLocationObj.loc

  return (
    <div className="splash-search-nav-bar">
      <ul>
        <li className="splash-search-nav-restaurants">
          {restaurantIcon(18, "white")}
          <Link
            to={{
              pathname: `/search`,
              search: `?query=restaurants&lat=${lat}&lon=${lon}&loc=${userLocation}&filters=l`
            }}
            >Restaurants
          </Link>
        </li>

        <li className="splash-search-nav-nightlife">
          {nightlifeIcon(18, "white")}
          <Link
            to={{
              pathname: `/search`,
              search: `?query=nightlife&lat=${lat}&lon=${lon}&loc=${userLocation}`
            }}
            >Nightlife
          </Link>
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

                <li>
                  <Link
                    to={{
                      pathname: `/search`,
                      search: `?query=hvac&lat=${lat}&lon=${lon}&loc=${userLocation}`
                    }}
                    >Air Conditioning & Heating
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: `/search`,
                      search: `?query=contractors&lat=${lat}&lon=${lon}&loc=${userLocation}`
                    }}
                    >Contractors
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: `/search`,
                      search: `?query=electricians&lat=${lat}&lon=${lon}&loc=${userLocation}`
                    }}
                    >Electricians
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: `/search`,
                      search: `?query=homecleaning&lat=${lat}&lon=${lon}&loc=${userLocation}`
                    }}
                    >Home Cleaners
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: `/search`,
                      search: `?query=landscaping&lat=${lat}&lon=${lon}&loc=${userLocation}`
                    }}
                    >Landscapers
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: `/search`,
                      search: `?query=locksmiths&lat=${lat}&lon=${lon}&loc=${userLocation}`
                    }}
                    >Locksmiths
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: `/search`,
                      search: `?query=movers&lat=${lat}&lon=${lon}&loc=${userLocation}`
                    }}
                    >Movers
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: `/search`,
                      search: `?query=painters&lat=${lat}&lon=${lon}&loc=${userLocation}`
                    }}
                    >Painters
                  </Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: `/search`,
                      search: `?query=plumbing&lat=${lat}&lon=${lon}&loc=${userLocation}`
                    }}
                    >Plumbers
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </li>

        <li className="splash-search-nav-delivery">
          {deliveryIcon(18, "white")}
          <Link
            to={{
              pathname: `/search`,
              search: `?query=delivery&lat=${lat}&lon=${lon}&loc=${userLocation}`
            }}
            >Delivery
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SplashSearchNavBar;
