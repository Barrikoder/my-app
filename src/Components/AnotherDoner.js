import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PigeonMaps from "./MyMaps";
import { Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";

export default function AnotherDoner({ data }) {
  return (
    <div>
      {data &&
        data.map((entry) => {
          // data ? data.map : <spinner /> -> (for that useState(false))
          console.log(entry);

          return (
            <>
              <div>
              <h1>Berlin Döner Blog</h1>
                <h3>
                  got hungry while standing in the longest line ever for a
                  tipical Berlin attraction? <br /> tap on the attraction you
                  are visiting to find out where you can eat the closest
                  sausage!
                </h3>
                <Card sx={{ maxWidth: 1000 }}>
                  <CardMedia
                    component="img"
                    height="400"
                    width="600"
                    img
                    src={entry.fields.image.fields.file.url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {entry.fields.date}
                    </Typography>
                    <NavLink to={`details/${entry.sys.id}`}>
                      <Typography gutterBottom variant="h2" component="div">
                        {entry.fields.header}
                      </Typography>
                    </NavLink>
                    <Typography variant="body2" color="text.secondary">
                      {entry.fields.mainImageText}
                    </Typography>
                  </CardContent>
                  {/* <PigeonMaps
                    lat={entry.fields.location.lat}
                    lng={entry.fields.location.lon}
                  /> */}
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
