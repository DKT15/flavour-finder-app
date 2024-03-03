import React, { useState, useEffect } from "react";
import Card from "./Card";
import { data } from "../data";

function Restaurants(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (props.filter?.label) {
      setRestaurants(
        data.filter((item) => {
          return item.city === props.filter?.label;
        })
      );
    } else {
      setRestaurants(data);
    }
  }, [props.filter?.label]);

  return (
    <div className="restaurants">
      {restaurants.map((data) => {
        return <Card key={data.restaurant_id} item={data} />;
      })}
    </div>
  );
}

export default Restaurants;
