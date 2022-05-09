import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PigeonMaps from "./MyMaps";
import { Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";

export default function MediaCard({ data }) {
  return (
    <div>
      {data &&
        data.map((entry) => {
          // data ? data.map : <spinner /> -> (for that useState(false))
          console.log(entry);

          return (
            <>
              <div>
                <h1>Longlines - Berlin</h1>
                <h3>
                  One of the perks of visiting a tourist attraction is standing
                  in an everlasting long lines for
                  <br />
                  ...whatever, MAKE STANDING LINE AN ATTRACTION! got some food,
                  get some drinks and get to know your line neighbors, Tap on
                  the attraction you are at, and find about the closest best
                  place to make waiting in line FUN!
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
