import React from 'react';

export const restaurantIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="restaurant-icon">
      <svg height={iconSize} width={iconSize} viewBox={"0 0 18 18"}
        style={iconStyle}>
        <path d="M13.61 17h-.007a1.39 1.39 0 0 1-1.376-1.587L13 10l-2-1c0-5.373
          1.375-8 3.25-8 .497 0 .75.336.75.75v13.86A1.39 1.39 0 0 1 13.61
          17zM6.557 9.912l.35 5.59a1.41 1.41 0 1 1-2.813 0l.35-5.59A1.994 1.994
          0 0 1 3 8V1.5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5
          0 0 0 1 0v-5a.5.5 0 0 1 1 0V8c0 .91-.61 1.67-1.443 1.912z">
        </path>
      </svg>
    </span>
  );
}

export const nightlifeIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="nightlife-icon">
      <svg height={iconSize} width={iconSize} viewBox={"0 0 18 18"}
        style={iconStyle}>
        <path d="M15.55 3.66c.565-.648.105-1.66-.754-1.66H3.204a1 1 0 0 0-.753
          1.66L8 9v5H6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V9l5.55-5.34zM11 3a1 1
          0 1 1 0 2 1 1 0 0 1 0-2z">
        </path>
      </svg>
    </span>
  );
}


export const homeservicesIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="homeservices-icon">
      <svg height={iconSize} width={iconSize} viewBox={"0 0 18 18"}
        style={iconStyle}>
        <path d="M12.772 8.594c-.337 0-.656-.067-.962-.164l-6.99 7.116a1.472
          1.472 0 0 1-2.11 0 1.538 1.538 0 0 1 0-2.15L9.697 6.28a3.34 3.34 0 0
          1-.16-.98c0-1.82 1.447-3.294 3.234-3.294.338 0 .657.068.963.165L11.93
          4.01l2.11 2.15 1.806-1.837c.095.312.162.637.162.98 0 1.82-1.45
          3.294-3.236 3.294zM4.955 6.198L3.54 5.21 1.998 3.64l1.565-1.59 1.54 1.57.905
          1.508L7.71 6.86 6.658 7.932 4.955 6.198zm10.006 7.198a1.54 1.54 0 0 1
          0 2.15 1.475 1.475 0 0 1-2.11 0l-3.314-3.374 2.11-2.15 3.316 3.374z">
        </path>
      </svg>
    </span>
  );
}


export const deliveryIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="delivery-icon">
      <svg height={iconSize} width={iconSize} viewBox={"0 0 18 18"}
        style={iconStyle}>
        <g><path d="M4 4V3h3v1H4m4-2H3v2H2a1 1 0 0 0-1 1v7h9V5a1 1 0 0 0-1-1H8V2"
          opacity=".502"></path><path d="M17 10.93L15 9.5V4h-5v8H7.49a2.49 2.49
          0 0 0-1.99-1 2.49 2.49 0 0 0-1.99 1H1v2h2.05a2.502 2.502 0 0 0 4.9
          0h3.1a2.5 2.5 0 0 0 4.9 0H17v-3.07zM5.5 14.75a1.25 1.25 0 1 1 0-2.5
          1.25 1.25 0 0 1 0 2.5zM12 6h1v3h-1V6zm1.5 8.75a1.25 1.25 0 1 1 0-2.5
          1.25 1.25 0 0 1 0 2.5z">
        </path>
      </g>
      </svg>
    </span>
  );
}
