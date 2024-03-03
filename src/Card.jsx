import React from 'react';

function Card(props) {
  const { restaurant_name, restaurant_type, city, country, image } = props.item;

  return (
    <div className="card">
      <img className="card-image" src={image} alt={`${restaurant_name} image`} />
      <h2 className="card-title">{restaurant_name}</h2>
      <p className="card-cuisine">{restaurant_type}</p>
      <p className="card-city">{city}</p>
      <p className="card-country">{country}</p>
    </div>
  );
}

export default Card;

