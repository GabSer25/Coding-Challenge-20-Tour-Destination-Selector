// components/Gallery.jsx
import React from 'react';
import TourCard from './TourCard';

// Gallery component handles displaying all tour cards or related messages
const Gallery = ({ tours, loading, error, onRemove, onRefresh }) => {
 
  // Show loading message while fetching data
  if (loading) return <p>Loading tours...</p>;
  // Show error if fetch fails
  if (error) return <p>Error: {error}</p>;
 
  // If no tours left, show message and a refresh button
  if (tours.length === 0) {
    return (
      <div>
        <p>No tours left. Refresh to reload.</p>
        <button onClick={onRefresh}>🔄 Refresh</button>
      </div>
    );
  }
  // Render list of tours using the TourCard component
  return (
    <section>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;
