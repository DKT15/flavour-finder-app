
function Card(props){
    return (
        <div className="card">
            <img className="card-image" src="hhtps://via.placeholder.com/150" alt="Resataurant image"></img>
            <h2 className="card-title">{props.item.name}</h2>
            <p className="card-cuisine">{props.item.cuisine}</p>
            <p className="card-city">{props.item.city}</p>
            <p className="card-country">{props.item.country}</p>
        </div>
    );
}

export default Card

