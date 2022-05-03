import "./App.css";
import React, { useState, useEffect } from "react";
import MediaCard from "./Components/MediaCard";
import DetailView from "./DetailView";
import Navigation from "./Components/Navigation";
import ErrorPage from "./Components/ErrorPage";
import { Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";

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

  return (
    <>
      <NavLink activeclassname="active" to="/">
        Home
      </NavLink>
      <NavLink activeclassname="active" to="details">
        Details
      </NavLink>
      <Routes>
        <Route path="/" element={<MediaCard />} />
        <Route path="details" element={<DetailView />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* <Navigation />
      <div className="card">
        <MediaCard />
      </div> */}
    </>
  );
}

export default App;
