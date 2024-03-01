import React from 'react';

function Card(props) {
  const { name, cuisine, city, country, image } = props.item;

  return (
    <div className="card">
      <img className="card-image" src={image} alt={`${name} image`} />
      <h2 className="card-title">{name}</h2>
      <p className="card-cuisine">{cuisine}</p>
      <p className="card-city">{city}</p>
      <p className="card-country">{country}</p>
    </div>
  );
}

export default Card;

