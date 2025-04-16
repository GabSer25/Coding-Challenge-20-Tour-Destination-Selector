// components/TourCard.jsx
import React from 'react';

// TourCard component displays individual tour information
const TourCard = ({ tour, onRemove }) => {
  // Destructure tour object properties for easier access
  const { id, name, info, image, price } = tour;

  return (
    <div className="card">
      <img src={image} alt={name} width="300" />
      <h2>{name}</h2>
      <p>{info}</p>
      <h4>${price}</h4>
      <button onClick={() => onRemove(id)}>Not Interested</button>
    </div>
  );
};

export default TourCard;
