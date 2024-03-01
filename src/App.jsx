import React, { useState, useEffect } from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(data.restaurants);
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="app">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.restaurant_id} item={restaurant} />
        ))}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
