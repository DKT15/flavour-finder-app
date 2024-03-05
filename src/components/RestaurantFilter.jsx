import React, { useRef, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "../App.css";
import Restaurants from "./Restaurants";

const Autocomplete = () => {
  const autocompleteRef = useRef(null);
  const [value, setValue] = useState("");

  const handleCity = () => {
    setValue("");
  };

  const clearSearch = () => {
    setValue("");
    if (autocompleteRef.current) {
      autocompleteRef.current.clearValue();
    }
  };

  return (
    <div>
      <div className="input__wrapper">
        <GooglePlacesAutocomplete
          apiKey="AIzaSyAfWDFWa3EWbgnulEmUixdPCrsHlPYWmtY"
          selectProps={{
            value,
            ref: autocompleteRef,
            placeholder: "Enter location",
            onChange: setValue,
            onMenuOpen: handleCity,
          }}
          apiOptions={{ language: "en-GB", region: "uk" }}
        />
        <button className="clear__btn" onClick={clearSearch}>
          Clear Search
        </button>
      </div>
      <Restaurants filter={value} />
    </div>
  );
};

export default Autocomplete;
