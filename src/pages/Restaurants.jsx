import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { data } from "../data";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(data);
  }, []);

  return (
    <div className="restaurants">
      {restaurants.map((data) => (
        <Card key={data.restaurant_id} item={data} />
      ))}
    </div>
  );
}

export default Restaurants;
