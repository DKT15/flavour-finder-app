import Jumbotron from './jumbotron'
import "./App.css";
import Filter from "./components/Filter";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(data.restaurants);
  }, []);

  return (
    <>
      <Jumbotron/>
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
