// App.jsx
import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import DestinationSelector from './components/DestinationSelector';
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState('All Destinations');

  // Fetch Tour Data When Component Mounts & Fix for CORS Error
  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
      if (!res.ok) throw new Error('Load failed');
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
  // Filter Logic
  const filteredTours =
    selected === 'All Destinations'
      ? tours
      : tours.filter((tour) => tour.name === selected);

  // Remove Tour From List
  const handleRemove = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      {/* Original Vite + React logos */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tour Destination Selector</h1>

      {/* Your App Starts Here */}
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
}

export default App;
