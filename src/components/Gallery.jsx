// components/Gallery.jsx
import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, loading, error, onRemove, onRefresh }) => {
  if (loading) return <p>Loading tours...</p>;
  if (error) return <p>Error: {error}</p>;

  if (tours.length === 0) {
    return (
      <div>
        <p>No tours left. Refresh to reload.</p>
        <button onClick={onRefresh}>🔄 Refresh</button>
      </div>
    );
  }

  return (
    <section>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;
