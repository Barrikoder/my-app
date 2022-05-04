import "./App.css";
import React, { useState, useEffect } from "react";
import MediaCard from "./Components/MediaCard";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
import { SystemSecurityUpdate } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PigeonMaps from "./Components/MyMaps";

function DetailView({ data }) {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("params", id, data);
  // const oneParam = myParams.filter(param => {
  //   return
  // })
  // console.log(oneParam)
  //filter the data to retrieve only that one that has the same entry.sys.id as the myParams.id

  // if (!data) {
  //   return "Waiting!"
  // }

  const entry = data.find((param) => {
    return id === param.sys.id;
  });
  console.log(entry);

  //map over the object -> render jsx

  return (
    <>
      <div className="detailedCard">
        {/* <MediaCard /> */}
        <br />
        <h1>Hi this is the detailed view</h1>
        <button onClick={() => navigate(-1)}>back</button>
      </div>
      <div>
        <Card sx={{ maxWidth: 900 }}>
          <CardMedia
            component="img"
            height="400"
            width="900"
            img
            src={entry?.fields?.image?.fields?.file?.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {entry?.fields?.date}
            </Typography>
            <Typography gutterBottom variant="h2" component="div">
              {entry?.fields?.header}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {entry?.fields?.mainImageText}
            </Typography>
          </CardContent>
          <PigeonMaps
            lat={entry?.fields?.location?.lat}
            lng={entry?.fields?.location?.lon}
          />
          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      </div>
      <br />
    </>
  );
}

export default DetailView;
