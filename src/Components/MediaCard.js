import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageCard from "./ImageCard";
import PigeonMaps from "./MyMaps";

const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.REACT_APP_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});



export default function MediaCard() {

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
    <div>
      {data &&
        data.map((entry) => { // data ? data.map : <spinner /> -> (for that useState(false))
          console.log(entry);

          return (
            <>
              <div>
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    component="img"
                    height="400"
                    width="600"
                    img
                    src={entry.fields.image.fields.file.url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                      {entry.fields.header}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {entry.fields.mainImageText}
                    </Typography>
                  </CardContent>
                  <PigeonMaps
                    lat={entry.fields.location.lat}
                    lng={entry.fields.location.lon}
                  />
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
              <br />
            </>
          );
        })}
    </div>
  );
}
