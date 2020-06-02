import React from 'react'
import MapWrapper from '../components/MapWrapper'
import PopupWrapper from '../components/PopupWrapper'

export default function MaskMap({mapData, latitude, longitude}) {
  const a = 24.9931677;
  const b = 121.476626;
  const defaultCenter = [a, b];
  // console.log(latitude, longitude);
  return (
      <MapWrapper
        viewport={{
          center: defaultCenter,
          zoom: 16
        }}
      >
        {mapData.map((el,i) => (
          <PopupWrapper
            key={i} 
            position={[el.geometry.coordinates[1], el.geometry.coordinates[0]]}>
              {el.properties.name}
              <br/>
              {el.properties.phone}
              <br/>
              {el.properties.address}
          </PopupWrapper>
        ))}
      </MapWrapper>
  );
}
