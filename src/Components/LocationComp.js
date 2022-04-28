import React from "react";
import { useState, useEffect, useParams } from "react";
import App from "../App";

export default function LocationComp() {
  const locationData = useParams();
  console.log(locationData);

  const fetchData = () => {
    locationData
      .getEntries() //right function which takes the object - look documentation.
      .then((entries) => {
        setLocation(entries.items[0].fields.location);
        console.log(entries);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>{Location}</div>
    </div>
  );
}
