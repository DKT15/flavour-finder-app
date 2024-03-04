import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "../App.css";
import Restaurants from "./Restaurants";

const Autocomplete = () => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyAfWDFWa3EWbgnulEmUixdPCrsHlPYWmtY"
        selectProps={{
          value,
          placeholder: "Enter location",
          onChange: setValue,
        }}
        apiOptions={{ language: "en-GB", region: "uk" }}
      />
      <Restaurants filter={value} />
    </div>
  );
};

export default Autocomplete;
