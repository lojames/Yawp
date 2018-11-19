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

export const triangledownIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="triangle-icon">
      <svg height={iconSize} viewBox="0 0 14 14"
        width={iconSize} style={iconStyle}>
        <path d="M7 9L3.5 5h7L7 9z">
        </path>
      </svg>
    </span>
  );
}

export const coffeeIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="coffee-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M19 13h-1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5h15a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3zm1-5c0-.55-.45-1-1-1h-1v4h1c.55 0 1-.45 1-1V8zm2 10a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1z">
        </path>
      </svg>
    </span>
  );
}

export const artsIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="arts-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M11.85 3c-4.73.08-8.7 3.99-8.85 8.72-.02.62.03 1.23.13 1.82A3.003 3.003 0 0 0 6.09 16H11c.55 0 1 .45 1 1v.19c0 2.3 2.49 3.76 4.49 2.61A9.002 9.002 0 0 0 11.85 3zM8 11.5c-.83 0-1.5-.67-1.5-1.5S7.17 8.5 8 8.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3 8c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z">
        </path>
      </svg>
    </span>
  );
}

export const professionalServicesIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="professional-services-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M19 20H5a3 3 0 0 1-3-3v-4h8v3h4v-3h8v4a3 3 0 0 1-3 3zM2 7h6V4h8v3h6v5H2V7zm8 0h4V6h-4v1z">
        </path>
      </svg>
    </span>
  );
}

export const petsIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="pets--icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M16.956 14.106l-7.07-7.07A2.5 2.5 0 0 0 6.35 3.498a2.49 2.49 0 0 0-.698 2.13 2.493 2.493 0 0 0-2.13.697A2.5 2.5 0 0 0 7.057 9.86l7.07 7.07a2.5 2.5 0 0 0 3.536 3.538 2.49 2.49 0 0 0 .698-2.13 2.49 2.49 0 0 0 2.134-.7 2.5 2.5 0 1 0-3.536-3.534z">
        </path>
    </svg>
    </span>
  );
}

export const realEstateIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="reaal-estate-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M12 3l-8.48 9.327C2.938 12.97 3.393 14 4.26 14H5v7h5v-5h4v5h5v-7h.74c.868 0 1.323-1.03.74-1.673L12 3z">
        </path>
      </svg>
    </span>
  );
}

export const localServicesIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="local-services-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M21 10h-8.35A5.996 5.996 0 0 0 1 12a5.996 5.996 0 0 0 11.65 2H14v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a2 2 0 0 0 0-4zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">
        </path>
      </svg>
    </span>
  );
}

export const eventPlanningIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="event-planning-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M15.14 14.96L17 18h-2v5h-1v-5h-2l1.86-3.04C10.85 14.586 8.5 11.616 8.5 8c0-3.87 2.69-7 6-7s6 3.13 6 7c0 3.617-2.35 6.587-5.36 6.96zM12.39 3.55c-.54-.14-1.14.39-1.36 1.19-.21.8.05 1.57.58 1.71.54.14 1.14-.39 1.36-1.19.21-.8-.05-1.57-.58-1.71zm-.45 11.89a4.737 4.737 0 0 1-2.82 1.49L10.5 19H9v4H8v-4H6.5l1.367-2.05c-2.53-.365-4.487-2.88-4.487-5.93 0-3.1 2.02-5.66 4.61-5.95-.32.91-.49 1.9-.49 2.93 0 3.38 1.84 6.27 4.44 7.44z">
        </path>
      </svg>
    </span>
  );
}

export const educationIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="education-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M9.994 18H19v1H9.993v-1zm7.004-1H8.493c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h9.505a1 1 0 0 1 0 2h-9.28c-1.812 0-3.467-1.277-3.7-3.075-.09-.7-.027-1.925-.027-1.925V4a2 2 0 0 1 2.004-2H17a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2z">
        </path>
      </svg>
    </span>
  );
}

export const religiousIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="religious-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M18.5 11L16 14.5v-6L12 3 8 8.5v6L5.5 11 3 14.5V21h7v-4h4v4h7v-6.5L18.5 11z">
        </path>
      </svg>
    </span>
  );
}

export const governmentIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="government-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M21 11V9h-1l-8-6-8 6H3v2h2v7H4v1H3v2h18v-2h-1v-1h-1v-7h2zm-8 7h-2v-7h2v7zm-6-7h2v7H7v-7zm10 7h-2v-7h2v7z">
        </path>
      </svg>
    </span>
  );
}

export const localFlavorIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="local-flavor-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M12 1.5l2.61 6.727 6.89.53-5.278 4.688 1.65 7.055L12 16.67 6.13 20.5l1.648-7.055L2.5 8.757l6.89-.53L12 1.5z">
        </path>
      </svg>
    </span>
  );
}

export const medicalIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="medical-icon">
    <svg height={iconSize} viewBox="0 0 24 24"
      width={iconSize} style={iconStyle}>
        <path d="M15 9V4H9v5H4v6h5v5h6v-5h5V9h-5z">
        </path>
      </svg>
    </span>
  );
}

export const travelIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="travel-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M20.4 13.61a1.924 1.924 0 0 0-1.825-.505l-2.203.55-3.228-3.227 5.973-4.887-.438-.436a1.92 1.92 0 0 0-2.117-.407L10.157 7.44 6.732 4.018c-.75-.75-2.644-1.43-3.394-.68-.75.75-.07 2.646.68 3.395l3.423 3.425-2.743 6.408a1.92 1.92 0 0 0 .407 2.114l.44.437 4.886-5.973 3.227 3.228-.55 2.203a1.92 1.92 0 0 0 .504 1.824l.59.586 2.717-4.073 4.073-2.716-.59-.59z">
        </path>
      </svg>
    </span>
  );
}


export const financialServicesIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="financial-services-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M6 19v-2h14V9h2v10H6zM2 5h16v10H2V5zm8 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z">
        </path>
      </svg>
    </span>
  );
}

export const massMediaIcon = (iconSize, iconColor) => {
  iconSize = iconSize.toString();
  const iconStyle = {color: iconColor, fill:"currentColor"};
  return (
    <span className="mass-media-icon">
      <svg height={iconSize} viewBox="0 0 24 24"
        width={iconSize} style={iconStyle}>
        <path d="M19 6h-6.586l2.293-2.293a1 1 0 1 0-1.414-1.414L10 5.586 6.707 2.293a1 1 0 1 0-1.414 1.414L7.586 6H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm-3 11c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v8zm3-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z">
        </path>
      </svg>
    </span>
  );
}
