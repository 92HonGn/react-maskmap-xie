import React, { useState, useRef } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default function EventsExample (){
  const [hasLocation, sethasLocation] = useState(false);

  const [latlng, setlatlng] = useState({
    lat: 51.505,
    lng: -0.09,
  });

  const mapRef = useRef();

  const marker = hasLocation ? (
    <Marker position={latlng}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null

  function handleClick() {
    const map = mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  function handleLocationFound(e){
    sethasLocation(!hasLocation);
    setlatlng(e.latlng);
  }

  return (
    <Map
        center={latlng}
        length={4}
        onClick={handleClick}
        onLocationfound={handleLocationFound}
        ref={mapRef}
        zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { marker }
    </Map>
  );
}

// type State = {
//   hasLocation: boolean,
//   latlng: {
//     lat: number,
//     lng: number,
//   },
// }

// export default class EventsExample extends Component<{}, State> {
//   state = {
//     hasLocation: false,
//     latlng: {
//       lat: 51.505,
//       lng: -0.09,
//     },
//   }

//   mapRef = createRef()

//   handleClick = () => {
//     const map = this.mapRef.current
//     if (map != null) {
//       map.leafletElement.locate()
//     }
//   }

//   handleLocationFound = (e: Object) => {
//     this.setState({
//       hasLocation: true,
//       latlng: e.latlng,
//     })
//   }

//   render() {
//     const marker = this.state.hasLocation ? (
//       <Marker position={this.state.latlng}>
//         <Popup>You are here</Popup>
//       </Marker>
//     ) : null

//     return (
//       <Map
//         center={this.state.latlng}
//         length={4}
//         onClick={this.handleClick}
//         onLocationfound={this.handleLocationFound}
//         ref={this.mapRef}
//         zoom={13}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {marker}
//       </Map>
//     )
//   }
// }