import React from 'react'
import MapWrapper from '../components/MapWrapper'
import PopupWrapper from '../components/PopupWrapper'

const defaultCenter = [25.0036731, 121.52557030000001];

export default function MaskMap({mapData}) {
  return (
      <MapWrapper
        viewport={{
          center: defaultCenter,
          zoom: 16
        }}
      >
        {mapData.map(el => (
          <PopupWrapper
            key={el.properties.id} 
            position={[el.geometry.coordinates[1], el.geometry.coordinates[0]]}>
              {"Some content Here"}
          </PopupWrapper>
        ))}
      </MapWrapper>
  );
}
