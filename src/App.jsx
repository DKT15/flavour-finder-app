import "./App.css";
import Filter from "./components/Filter";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(data.restaurants);
  }, []);

  return (
    <>
      <Filter />
      <div className="app">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.restaurant_id} item={restaurant} />
        ))}
      </div>
      <div className="card"></div>
    </>
  );
}

export default App;
