import React from 'react';

const BusinessHour = ({ businessHour }) => {
  return (
    <tr>
      <th>{businessHour[0]}</th>
      <td>{businessHour[1]}</td>
    </tr>
  );
}

export default BusinessHour;
