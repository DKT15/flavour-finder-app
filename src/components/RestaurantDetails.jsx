import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link from react-router-dom
import { getRestaurantById } from "../api/restaurants";
import { addReview, getReviewsByRestaurantId } from "../api/restaurants";
import ReviewForm from "./reviews/ReviewForm";
import "./RestaurantDetails.css";

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch restaurant data by ID
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await getRestaurantById(id);
        setRestaurant(data);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurant();
  }, [id]);

  // Function to fetch reviews for the current restaurant
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviewsByRestaurantId(id);
        setReviews(reviewsData);
        setLoading(false); // Set loading to false when reviews are fetched
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [id]);

  // Function to handle review submission
  const handleReviewSubmit = async (formData) => {
    try {
      await addReview({
        ...formData,
        restaurant_id: id, // Include restaurant ID in review data
      });
      // Refetch reviews after submission to update the list
      const reviewsData = await getReviewsByRestaurantId(id);
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error submitting review:", error);
      // Handle error if needed
    }
  };

  // Render loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="restaurant-details">
      {restaurant && (
        <div>
          <h2>{restaurant.restaurant_name}</h2>
          <p>Restaurant Type: {restaurant.restaurant_type}</p>
          <p>City: {restaurant.city}</p>
          <p>Country: {restaurant.country}</p>
          <img
            src={restaurant.image}
            alt={restaurant.restaurant_name}
            className="restaurant-image"
          />
        </div>
      )}

      <hr />

      <h3>Reviews</h3>
      {reviews && reviews.length > 0 ? (
        <ul className="reviews-list">
            {reviews.map((review) => (
            <li key={review.review_id} className="review-item">
                <div className="review-header">
                <p className="reviewer-name">Name: {review.reviewer_name}</p>
                <p className="reviewer-email">Email: {review.reviewer_email}</p>
                </div>
                <div className="review-body">
                <p className="review-rating">Rating: {review.star_rating}</p>
                <p className="review-comment">Comment: {review.comment}</p>
                </div>
            </li>
            ))}
        </ul>
        ) : (
        <p>No reviews found.</p>
    )}

      <hr />

      <h3>Leave a Review</h3>
      <ReviewForm onSubmit={handleReviewSubmit} restaurant_id={id} />

      {/* Back button to navigate to the root URL */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default RestaurantDetails;
