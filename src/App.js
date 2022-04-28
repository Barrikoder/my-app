import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Location from "./Components/LocationComp";
import { BrowserRouter } from "react-router-dom";

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "pswo94mknuin",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "4aNCbkAhlMxIboRs-rB6e0w5MgkS2H4h-D7WMffuns4",
});

//put fetch data inside use effect

// const fetchData = async() => { //is a function with await inside of it
//   const response = await (client.getEntries()) //function provided by contentful. they will call url for me. one can use await only inside the function
//   // return response.items
//   console.log(response.items)
// }

// const fetchData = () =>
// fetch(client)
//   .then((res) => res.json())
//   .then(data => data.text)
//   .then((text) => )
// .then((json) => setText(json.description));

function App() {
  const [text, setText] = useState("Here we go");

  const fetchData = () => {
    client
      .getEntries() //right function which takes the object - look documentation.
      .then((entries) => {
        setText(entries.items[0].fields.header);
        console.log(entries);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>{text}</h1>
        <div>{Location}</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
