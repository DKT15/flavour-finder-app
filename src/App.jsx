import React from 'react';
import FlavourFinderApp from "./components/FlavourFinderApp";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "./components/jumbotron";
import ResturantFilter from "./components/RestaurantFilter";

function App() {
  return (
    <>
    <FlavourFinderApp/>;
      <Jumbotron />
      <ResturantFilter />
    </>
  );
}

export default App;
