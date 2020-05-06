import React from 'react'
import MapWrapper from '../components/MapWrapper'
import PopupWrapper from '../components/PopupWrapper'

const defaultCenter = [23.1, 120.6];

export default function MaskMap({mapData}) {
  return (
      <MapWrapper
        viewport={{
          center: defaultCenter,
          zoom: 13
        }}
      >
        <PopupWrapper position={defaultCenter}>
          {"Some content Here"}
        </PopupWrapper>
      </MapWrapper>
  );
}
