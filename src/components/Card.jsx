import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { restaurant_id, restaurant_name, restaurant_type, city, country, image } = props.item;

  return (
    <Link to={`/restaurant/${restaurant_id}`} className="card-link">
      <div className="card">
        <img
          className="card-image"
          src={image}
          alt={`${restaurant_name} image`}
        />
        <h2 className="card-title">{restaurant_name}</h2>
        <p className="card-cuisine">{restaurant_type}</p>
        <p className="card-city">{city}</p>
        <p className="card-country">{country}</p>
      </div>
    </Link>
  );
}

export default Card;
