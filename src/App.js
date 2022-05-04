import "./App.css";
import React, { useState, useEffect } from "react";
import MediaCard from "./Components/MediaCard";
import DetailView from "./DetailView";
import Navigation from "./Components/Navigation";
import ErrorPage from "./Components/ErrorPage";
import { Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";
import AnotherDoner from "./Components/AnotherDoner";


const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.REACT_APP_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

function App() {
  // const [text, setText] = useState("Here we go");

  // const fetchData = () => {
  //   client
  //     .getEntries() //right function which takes the object - look documentation.
  //     .then((entries) => {
  //       setText(entries.items[0].fields.header);
  //       console.log(entries);
  //     })
  //     .catch(console.error);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [data, setData] = useState([]);
  const fetchData = () => {
    client
      .getEntries() //right function which takes the object - look documentation.
      .then((entries) => {
        setData(entries.items);
        console.log(entries);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
          <Navigation />

      {/* <NavLink activeclassname="active" to="/">
        Home
      </NavLink>
      <NavLink activeclassname="active" to="details">
        Details
      </NavLink> */}
      <Routes>
        <Route path="anotherDoner" element={<AnotherDoner  data={data}/>} />
        <Route path="/" element={<MediaCard  data={data}/>} />
        <Route path="details/:id" element={<DetailView data={data} />} />
        <Route path="anotherDoner/details/:id" element={<DetailView data={data}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* <div className="card">
        <MediaCard />
      </div> */}
    </>
  );
}

export default App;
