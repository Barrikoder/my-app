import React from "react";
import { Map, Marker } from "pigeon-maps";
// import { osm } from "pigeon-maps/providers";
import { stamenToner } from "pigeon-maps/providers";
// import { stamenTerrain } from "pigeon-maps/providers";

export default function MyMap({ lat, lng }) {
  return (
    <Map
      // provider={osm}
      provider={stamenToner}
      // provider={stamenTerrain}
      height={500}
      width={500}
      defaultCenter={[lat, lng]}
      defaultZoom={13}
    >
      <Marker width={30} anchor={[lat, lng]} />
    </Map>
  );
}
