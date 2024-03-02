import React, { useState } from "react";
import "../App.css";
import "../filter";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { event } from "jquery";
import { data } from "../data";

console.log(data);

const Autocomplete = () => {
  const [value, setValue] = useState(null);

  // {data
  //   .filter((res) => {
  //     return value.toLowerCase() === ""
  //       ? res
  //       : res.city.toLowerCase().includes(value);
  //   })
  //   .map((res) => ())}

  function handleSubmit(event) {
    //If the value is equal to the cards city, only show that elements/cards and hide the others.
    // If(value === "London") {
    //   console.log(event)
    // }
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
