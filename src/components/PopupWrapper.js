import React, { ChangeEvent, useImperativeHandle, ReactNode } from "react";
import { Popup, Marker } from "react-leaflet";

const PopupWrapper = (props) => {
  return (
    <Marker key={props.key} position={props.position}>
      <Popup>{props.children}</Popup>
    </Marker>
  );
};

export default PopupWrapper;
