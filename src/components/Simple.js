import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default function SimpleExample (){
  const [position] = useState({
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  });

  return (
    <Map center={position} zoom={position.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
    </Map>
  );
}

