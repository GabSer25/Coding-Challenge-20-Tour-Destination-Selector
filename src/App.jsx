// App.jsx
import React, { useEffect, useState } from 'react';
import DestinationSelector from './components/DestinationSelector';
import Gallery from './components/Gallery';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState('All Destinations');

  // Fetch tour data when the component mounts
  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://course-api.com/react-tours-project');
      if (!res.ok) throw new Error('Failed to fetch tours');
      const data = await res.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Filter logic
  const filteredTours =
    selected === 'All Destinations'
      ? tours
      : tours.filter((tour) => tour.name === selected);

  // Remove tour from list
  const handleRemove = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>🌍 Tour Destination Selector</h1>
      <DestinationSelector
        tours={tours}
        selected={selected}
        setSelected={setSelected}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={handleRemove}
        onRefresh={fetchTours}
      />
    </main>
  );
};

export default App;

