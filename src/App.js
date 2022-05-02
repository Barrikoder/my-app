import './App.css';
import React, { useState, useEffect } from 'react';
import MediaCard from "./Components/MediaCard";
import ImageCard from "./Components/ImageCard";


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
    <div className="card">
    <MediaCard />
    </div>
  </>
  );

}

export default App;
