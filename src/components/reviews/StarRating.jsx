import React from "react";
import { StarFill, Star } from "react-bootstrap-icons";

function StarRating({ rating, onRatingChange }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={ratingValue}
            onClick={() => onRatingChange(ratingValue)}
            style={{ cursor: "pointer" }}
          >
            {ratingValue <= rating ? (
              <StarFill color="#ffc107" />
            ) : (
              <Star color="#ffc107" />
            )}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
