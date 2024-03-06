import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import RestaurantFilter from "./components/filter/RestaurantFilter";
import RestaurantDetails from "./components/RestaurantDetails"; // Import the RestaurantDetails component

function App() {
  return (
    <Router>
      <HeroSection />
      <Routes>
        <Route path="/" element={<RestaurantFilter />} /> {/* Use element prop to render component */}
        <Route path="/restaurant/:id" element={<RestaurantDetails />} /> {/* Use element prop to render component */}
      </Routes>
    </Router>
  );
}

export default App;
