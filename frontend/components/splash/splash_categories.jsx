import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from "../../util/icons"
import { getCookie, setCookie } from '../../util/cookies';

const showHideDiv = () => {
  const text = document.getElementById("render-text");
  const div = document.getElementById("render-div");
  if (div.style.height === "0px") {
    text.innerHTML = "Fewer Categories";
    div.style.height = "248px";
  } else {
    text.innerHTML = "More Categories";
    div.style.height = "0";
  }
};

const SplashCategories = () => {
  const lat = getCookie("lat");
  const lon = getCookie("lon");
  const userLocation = getCookie("userLocation");

  return (
    <div className='splash-business-categories'>
      <h1>Browse Businesses by Category</h1>
      <div className='splash-business-categories-row1'>
        <Link
          to={{
            pathname: `/search`,
            search: `?query=restaurants&lat=${lat}&lon=${lon}&loc=${userLocation}`
          }}className='splash-business-icon-outer'>
          <div>
            <div>
              <img src='icon_restaurants.png'/>
              <h2>Restaurants</h2>
            </div>
          </div>
        </Link>
        <Link
          to={{
            pathname: `/search`,
            search: `?query=shopping&lat=${lat}&lon=${lon}&loc=${userLocation}`
          }}className='splash-business-icon-outer'>
          <div>
            <div>
              <img src='icon_shopping.png'/>
              <h2>Shopping</h2>
            </div>
          </div>
        </Link>
        <Link
          to={{
            pathname: `/search`,
            search: `?query=nightlife&lat=${lat}&lon=${lon}&loc=${userLocation}`
          }}className='splash-business-icon-outer'>
          <div>
            <div>
              <img src='icon_nightlife.png'/>
              <h2>Nightlife</h2>
            </div>
          </div>
        </Link>

        <Link
          to={{
            pathname: `/search`,
            search: `?query=active&lat=${lat}&lon=${lon}&loc=${userLocation}`
          }}className='splash-business-icon-outer'>
          <div>
            <div>
              <img src='icon_active.png'/>
              <h2>Active Life</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className='splash-business-categories-row2'>
        <Link
          to={{
            pathname: `/search`,
            search: `?query=beautysvc&lat=${lat}&lon=${lon}&loc=${userLocation}`
          }}className='splash-business-icon-outer'>
          <div>
            <div>
              <img src='icon_beauty.png'/>
              <h2>Beauty &amp; Spas</h2>
            </div>
          </div>
        </Link>
        <Link
          to={{
            pathname: `/search`,
            search: `?query=auto&lat=${lat}&lon=${lon}&loc=${userLocation}`
          }}className='splash-business-icon-outer'>
          <div>
            <div>
              <img src='icon_automotive.png'/>
              <h2>Automotive</h2>
            </div>
          </div>
        </Link>
        <Link
          to={{
            pathname: `/search`,
            search: `?query=homeservices&lat=${lat}&lon=${lon}&loc=${userLocation}`
          }}className='splash-business-icon-outer'>
          <div>
            <div>
              <img src='icon_homeservices.png'/>
              <h2>Home Services</h2>
            </div>
          </div>
        </Link>
        <a onClick={showHideDiv} className='splash-business-icon-outer'>
          <div>
            <div>
              <img src='icon_more.png'/>
              <h2 id="render-text">More Categories</h2>
            </div>
          </div>
        </a>
      </div>
      <div className='splash-business-categories-more' id='render-div' style={{display:"block", height: "0", overflow: "hidden"}}>
        <div>
          <div className = "splash-business-categories-more-row">
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=coffee&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.coffeeIcon(24,"rgb(0, 115, 187)")}<strong>Coffee &amp; Tea</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=food&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.restaurantIcon(24,"rgb(0, 115, 187)")}<strong>Food</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=arts&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.artsIcon(24,"rgb(0, 115, 187)")}<strong>Arts &amp; Entertainment</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=heatlh&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.medicalIcon(24,"rgb(0, 115, 187)")}<strong>Health &amp; Hospital</strong></Link>
            </div>
          </div>

          <div className = "splash-business-categories-more-row">
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=professional&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.professionalServicesIcon(24,"rgb(0, 115, 187)")}<strong>Professional Services</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=pets&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.petsIcon(24,"rgb(0, 115, 187)")}<strong>Pets</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=realestate&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.realEstateIcon(24,"rgb(0, 115, 187)")}<strong>Real Estate</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=hotelstravel&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.travelIcon(24,"rgb(0, 115, 187)")}<strong>Hotels &amp; Travel</strong></Link>
            </div>
          </div>

          <div className = "splash-business-categories-more-row">
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=localservices&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.localServicesIcon(24,"rgb(0, 115, 187)")}<strong>Local Services</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=eventservices&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.eventPlanningIcon(24,"rgb(0, 115, 187)")}<strong>Event Planning &amp; Services</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=publicservicesgovt&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.governmentIcon(24,"rgb(0, 115, 187)")}<strong>Public Services &amp; Gover...</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=financialservices&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.financialServicesIcon(24,"rgb(0, 115, 187)")}<strong>Financial Services</strong></Link>
            </div>
          </div>

          <div className = "splash-business-categories-more-row">
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=education&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.educationIcon(24,"rgb(0, 115, 187)")}<strong>Education</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=religiousorgs&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.religiousIcon(24,"rgb(0, 115, 187)")}<strong>Religious Organizations</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=localflavor&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.localFlavorIcon(24,"rgb(0, 115, 187)")}<strong>Local Flavor</strong></Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/search`,
                  search: `?query=massmedia&lat=${lat}&lon=${lon}&loc=${userLocation}`
                }}>{Icons.massMediaIcon(24,"rgb(0, 115, 187)")}<strong>Mass Media</strong></Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SplashCategories;
