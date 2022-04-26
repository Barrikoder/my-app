import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "pswo94mknuin",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "4aNCbkAhlMxIboRs-rB6e0w5MgkS2H4h-D7WMffuns4"
});

client.getEntries('cookbookBlog') //right function which takes the object - look documentation. 
  .then((contentType) => console.log(contentType))
  .catch(console.error)

  const fetchData = async() => { //is a function with await inside of it
    const response = await (client.getEntries()) //function provided by contentful. they will call url for me. one can use await only inside the function
    // return response.items
    console.log(response.items)
  }

  fetchData()
  .then()
  

  // const fetchData = () =>
  // fetch(client)
  //   .then((res) => res.json())
  //   .then(data => data.text)
  //   .then((text) => )
    // .then((json) => setText(json.description));


const Description = () => {
  const [text, setText] = useState("Here we go")
  useEffect(() => {
    fetchData(setText);
  }, []);
  return <button onClick={() => Description()}>Text</button>

}

function App() {
  return (
    <div className="App">

      <Description />
    </div>
  );
}

export default App;
