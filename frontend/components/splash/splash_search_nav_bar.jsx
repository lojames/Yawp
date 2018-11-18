import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantIcon, nightlifeIcon, homeservicesIcon, deliveryIcon } from '../../util/icons'

const iconSize = "18";

const SplashSearchNavBar = () => {
  return (
    <>
      {restaurantIcon(18, "pink")}
      {nightlifeIcon(18, "red")}
      {homeservicesIcon(50, "blue")}
      {deliveryIcon(18, "red")}

    </>
  );
}

export default SplashSearchNavBar;
