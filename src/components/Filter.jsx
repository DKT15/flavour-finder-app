import React, { useState } from "react";
import "../App.css";
import "../filter";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { event } from "jquery";

const Autocomplete = () => {
  const [value, setValue] = useState(null);

  function handleSubmit(event) {
    console.log(event);
  }

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyAfWDFWa3EWbgnulEmUixdPCrsHlPYWmtY"
        selectProps={{
          value,
          placeholder: "Enter location",
          onChange: setValue,
          OnClick: handleSubmit(event),
        }}
        apiOptions={{ language: "en-GB", region: "uk" }}
      />
    </div>
  );
};

export default Autocomplete;
