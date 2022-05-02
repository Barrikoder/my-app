import './App.css';
import React, { useState, useEffect } from 'react';
import MediaCard from "./Components/MediaCard";
import DeafaultView from "./DetailView";
import { Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";
import DetailView from './DetailView';
import Navigation from './Components/Navigation';



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
  <Navigation />
   <div className="card">
    <MediaCard />
    </div>
  </>
  );

}

export default App;
