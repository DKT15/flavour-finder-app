import React, { useEffect, useState } from "react";
import { getAllRestaurants, getRestaurantByCity } from "../api/restaurants";
import Card from "./card/Card";

function Restaurants(props) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        let data;
        if (props.filter?.label) {
          data = await getRestaurantByCity(props.filter?.label);
        } else {
          data = await getAllRestaurants();
        }

        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    }
    fetchRestaurants();
  }, [props]);

  return (
    <div className="container restaurants">
      <div className="row row-cols-2 row-cols-md-4 gy-3">
        {restaurants.length === 0 ? (
          <p>No restaurants found</p>
        ) : (
          restaurants.map((restaurant) => {

            return (
              <div className="col">
                <Card key={restaurant.restaurant_id} item={restaurant} />
              </div>
            
            )
          })
        )}
      </div>
    </div>
  );
}

export default Restaurants;
