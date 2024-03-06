// Import Axios for making HTTP requests
import axios from "axios";

// Base URL for the API
const baseURL = "https://flavourfinder.tjthouhid.com";
const apiKey = "tj120rrgssqqaa";
// Function to get all restaurants
export async function getAllRestaurants() {
  try {
    const response = await axios.get(`${baseURL}/restaurent.php`, {
      params: { api_key: apiKey },
    });
    return response.data.restaurants;
  } catch (error) {
    console.error("Error fetching all restaurants:", error);
    return null;
  }
}

// Function to get restaurant by title
export async function getRestaurantByTitle(title) {
  try {
    const response = await axios.get(`${baseURL}/restaurent.php`, {
      params: { api_key: apiKey, restaurant_name: title },
    });
    return response.data.restaurants;
  } catch (error) {
    console.error("Error fetching restaurant by title:", error);
    return null;
  }
}

// Function to get restaurant by city
export async function getRestaurantByCity(city) {
  try {
    const response = await axios.get(`${baseURL}/restaurent.php`, {
      params: { api_key: apiKey, city },
    });
    return response.data.restaurants;
  } catch (error) {
    console.error("Error fetching restaurant by city:", error);
    return null;
  }
}

// Function to get restaurant by country
export async function getRestaurantByCountry(country) {
  try {
    const response = await axios.get(`${baseURL}/restaurent.php`, {
      params: { api_key: apiKey, country },
    });
    return response.data.restaurants;
  } catch (error) {
    console.error("Error fetching restaurant by country:", error);
    return null;
  }
}

// Function to get restaurant by ID
export async function getRestaurantById(id) {
  try {
    const response = await axios.get(
      `${baseURL}/restaurent.php?restaurant_id=${id}`,
      {
        params: { api_key: apiKey },
      }
    );
    return response.data.restaurant;
  } catch (error) {
    console.error("Error fetching restaurant by ID:", error);
    return null;
  }
}

// Function to get restaurant by city and country
export async function getRestaurantByCityAndCountry(city, country) {
  try {
    const response = await axios.get(`${baseURL}/restaurent.php`, {
      params: { api_key: apiKey, city, country },
    });
    return response.data.restaurants;
  } catch (error) {
    console.error("Error fetching restaurant by city and country:", error);
    return null;
  }
}


// Function to get reviews by restaurant ID
export async function getReviewsByRestaurantId(restaurantId) {
  try {
    const response = await axios.get(`${baseURL}/reviews.php`, {
      params: {
        api_key: apiKey,
        restaurant_id: restaurantId
      }
    });
    return response.data.reviews;
  } catch (error) {
    console.error("Error fetching reviews by restaurant ID:", error);
    return null;
  }
}

// Function to add a review
export async function addReview(reviewData) {
  
  try {
    const requestData = {
      ...reviewData,
      api_key: apiKey
    };
    const response = await axios.post(`${baseURL}/reviews.php`, reviewData, {
      params: requestData,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    return null;
  }
}
