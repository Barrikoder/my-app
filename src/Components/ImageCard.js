import React, { useState, useEffect } from 'react';

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "pswo94mknuin",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "4aNCbkAhlMxIboRs-rB6e0w5MgkS2H4h-D7WMffuns4",
});

export default function ImageCard(props) {
  const [image, setImage] = useState();

  const fetchData = () => {
    client
      .getEntries() //right function which takes the object - look documentation.
      .then((entries) => {
        setImage(entries.items[0].fields.image.fields.file.url);
        console.log(entries);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>{props.image}</div>
  );
};

