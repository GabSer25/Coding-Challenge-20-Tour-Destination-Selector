// components/DestinationSelector.jsx
import React from 'react';

  //Component for selecting a tour destination from a dropdown
const DestinationSelector = ({ tours, selected, setSelected }) => {
  // Extract unique destination names
  const uniqueNames = ['All Destinations', ...new Set(tours.map((t) => t.name))];

  return (
    <div>
      <label htmlFor="destination">Select Destination:</label>
      <select
        id="destination"
        value={selected}
        onChange={(e) => setSelected(e.target.value)} // Controlled select
      >
        {uniqueNames.map((name, idx) => (
          <option key={idx} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;
