import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card(props) {
  const {
    restaurant_id,
    restaurant_name,
    restaurant_type,
    city,
    country,
    image,
  } = props.item;

  return (
    <Link to={`/restaurant/${restaurant_id}`} className="card-link text-decoration-none">
      <div className="card restaurent-card rounded-3 shadow">
        <div className="restaurent-img mb-2">
          <img
          className="m"
          src={image}
          alt={`${restaurant_name} image`}
          />
        </div>
       
        <h2 className="">{restaurant_name}</h2>
        <p className="">{restaurant_type}</p>
        <p className="">{city}</p>
        <p className="">{country}</p>
      </div>
    </Link>
  );
}

export default Card;
