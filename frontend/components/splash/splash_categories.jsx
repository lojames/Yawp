import React from 'react';
import * as Icons from "../../util/icons"

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
  return (
    <div className='splash-business-categories'>
      <h1>Browse Businesses by Category</h1>
      <div className='splash-business-categories-row1'>
        <div className='splash-business-icon-outer'>
          <a href="/">
            <div>
              <img src='icon_restaurants.png'/>
              <h2>Restaurants</h2>
            </div>
          </a>
        </div>
        <div className='splash-business-icon-outer'>
          <a href="/">
            <div>
              <img src='icon_shopping.png'/>
              <h2>Shopping</h2>
            </div>
          </a>
        </div>
        <div className='splash-business-icon-outer'>
          <a href="/">
            <div>
              <img src='icon_nightlife.png'/>
              <h2>Nightlife</h2>
            </div>
          </a>
        </div>
        <div className='splash-business-icon-outer'>
          <a href="/">
            <div>
              <img src='icon_active.png'/>
              <h2>Active Life</h2>
            </div>
          </a>
        </div>
      </div>
      <div className='splash-business-categories-row2'>
        <div className='splash-business-icon-outer'>
          <a href="/">
            <div>
              <img src='icon_beauty.png'/>
              <h2>Beauty &amp; Spas</h2>
            </div>
          </a>
        </div>
        <div className='splash-business-icon-outer'>
          <a href="/">
            <div>
              <img src='icon_automotive.png'/>
              <h2>Automotive</h2>
            </div>
          </a>
        </div>
        <div className='splash-business-icon-outer'>
          <a href="/">
            <div>
              <img src='icon_homeservices.png'/>
              <h2>Home Services</h2>
            </div>
          </a>
        </div>
        <div className='splash-business-icon-outer'>
          <a onClick={showHideDiv}>
            <div>
              <img src='icon_more.png'/>
              <h2 id="render-text">More Categories</h2>
            </div>
          </a>
        </div>
      </div>
      <div className='splash-business-categories-more' id='render-div' style={{display:"block", height: "0", overflow: "hidden"}}>
        <div>
          <div className = "splash-business-categories-more-row">
            <div>
              <a href="/">{Icons.coffeeIcon(24,"rgb(0, 115, 187)")}<strong>Coffee &amp; Tea</strong></a>
            </div>
            <div>
              <a href="/">{Icons.restaurantIcon(24,"rgb(0, 115, 187)")}<strong>Food</strong></a>
            </div>
            <div>
              <a href="/">{Icons.artsIcon(24,"rgb(0, 115, 187)")}<strong>Arts &amp; Entertainment</strong></a>
            </div>
            <div>
              <a href="/">{Icons.medicalIcon(24,"rgb(0, 115, 187)")}<strong>Health &amp; Hospital</strong></a>
            </div>
          </div>

          <div className = "splash-business-categories-more-row">
            <div>
              <a href="/">{Icons.professionalServicesIcon(24,"rgb(0, 115, 187)")}<strong>Professional Services</strong></a>
            </div>
            <div>
              <a href="/">{Icons.petsIcon(24,"rgb(0, 115, 187)")}<strong>Pets</strong></a>
            </div>
            <div>
              <a href="/">{Icons.realEstateIcon(24,"rgb(0, 115, 187)")}<strong>Real Estate</strong></a>
            </div>
            <div>
              <a href="/">{Icons.travelIcon(24,"rgb(0, 115, 187)")}<strong>Hotels &amp; Travel</strong></a>
            </div>
          </div>

          <div className = "splash-business-categories-more-row">
            <div>
              <a href="/">{Icons.localServicesIcon(24,"rgb(0, 115, 187)")}<strong>Local Services</strong></a>
            </div>
            <div>
              <a href="/">{Icons.eventPlanningIcon(24,"rgb(0, 115, 187)")}<strong>Event Planning &amp; Services</strong></a>
            </div>
            <div>
              <a href="/">{Icons.governmentIcon(24,"rgb(0, 115, 187)")}<strong>Public Services &amp; Gover...</strong></a>
            </div>
            <div>
              <a href="/">{Icons.financialServicesIcon(24,"rgb(0, 115, 187)")}<strong>Financial Services</strong></a>
            </div>
          </div>

          <div className = "splash-business-categories-more-row">
            <div>
              <a href="/">{Icons.educationIcon(24,"rgb(0, 115, 187)")}<strong>Education</strong></a>
            </div>
            <div>
              <a href="/">{Icons.religiousIcon(24,"rgb(0, 115, 187)")}<strong>Religious Organizations</strong></a>
            </div>
            <div>
              <a href="/">{Icons.localFlavorIcon(24,"rgb(0, 115, 187)")}<strong>Local Flavor</strong></a>
            </div>
            <div>
              <a href="/">{Icons.massMediaIcon(24,"rgb(0, 115, 187)")}<strong>Mass Media</strong></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SplashCategories;
