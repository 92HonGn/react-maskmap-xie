import React, { ReactNode, ReactNodeArray } from "react";
import { Map, TileLayer, MapProps } from "react-leaflet";

const MapWrapper = (props) => {
  return (
    <Map {...props}>
      <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
      {props.children}
    </Map>
  );
};

export default MapWrapper;
