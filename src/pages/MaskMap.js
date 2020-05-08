import React from 'react'
import MapWrapper from '../components/MapWrapper'
import PopupWrapper from '../components/PopupWrapper'

const defaultCenter = [25.00, 121.48];

export default function MaskMap({mapData}) {
  return (
      <MapWrapper
        viewport={{
          center: defaultCenter,
          zoom: 15
        }}
      >
        {mapData.map(el => (
          <PopupWrapper
            key={el.properties.id} 
            position={[el.geometry.coordinates[1], el.geometry.coordinates[0]]}>
              {"Some content Here"}
          </PopupWrapper>
        ))}
        {/* {mapData.map(el => (
          <Marker key={el.properties.id} position={ [el.geometry.coordinates[1], el.geometry.coordinates[0]] }>
            <Popup>{"Some content Here"}</Popup>
          </Marker>
        ))} */}
      </MapWrapper>
  );
}
