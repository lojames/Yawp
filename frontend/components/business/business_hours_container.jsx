import React from 'react';
import BusinessHour from './business_hour'

const businessHoursRows = (businessHours) => {
  if (businessHours) {
    return (
      businessHours.map( businessHour => (
        <BusinessHour
          businessHour={businessHour}
          key={businessHour[0]}
        />
      ))
    )
  }
};

const BusinessHoursContainer = ({ businessHours }) => {

  return (
    <div className="business-hours">
      <h3>Hours</h3>
      <table>
        <tbody>
          {businessHoursRows(businessHours)}
        </tbody>
      </table>
    </div>
  );
}

export default BusinessHoursContainer;
