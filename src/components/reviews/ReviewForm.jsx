import React, { useState } from "react";
import { addReview } from "../../api/restaurants"; // Import the addReview function
import StarRating from "./StarRating";
import "./ReviewForm.css"; // Import CSS file for styling

function ReviewForm({ restaurant_id, onReviewSubmit }) {
  const [formData, setFormData] = useState({
    reviewer_name: "",
    reviewer_email: "",
    star_rating: 0,
    comment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview({ ...formData, restaurant_id }); // Submit review using addReview function
      // Clear form data after successful submission
      setFormData({
        reviewer_name: "",
        reviewer_email: "",
        star_rating: 0,
        comment: "",
      });
      alert("Review submitted successfully!");
      if(onReviewSubmit){
        onReviewSubmit();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Use "name" instead of "reviewer_name"
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (star_rating) => {
    setFormData({ ...formData, star_rating });
  };

  return (
    <div className="container reviewform-container">
      <h1>Leave a Review</h1>
      <form onSubmit={handleSubmit} id="reviewForm">
      <div className="form-group">
          <label htmlFor="reviewer_name">Name:</label>
          <input
            type="text"
            id="reviewer_name"
            name="reviewer_name"
            value={formData.reviewer_name}
            onChange={handleChange}
            required
          />

          <label htmlFor="reviewer_email">Email:</label>
          <input
            type="email"
            id="reviewer_email"
            name="reviewer_email"
            value={formData.reviewer_email}
            onChange={handleChange}
            required
          />

          {/* Ratings */}
          <label>Ratings:</label>
          <div className="ratings-wrapper">
            <StarRating
              rating={formData.star_rating}
              onRatingChange={handleRatingChange}
            />
          </div>

          <label htmlFor="comment">Review:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            placeholder="What'd you think?"
          ></textarea>

          <input type="submit" value="Submit Review" />
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
