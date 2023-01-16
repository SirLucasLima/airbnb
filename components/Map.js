import Image from 'next/image'
import { useState } from 'react';
import ReactMapGl from 'react-map-gl';

export default function Map(){

  const [viewport, SetViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: 37.7577,
    latitude: -122.4376,
    zoom: 11,
  })
  return(
    <ReactMapGl
      mapStyle={'mapbox://styles/sirlucaslima/clcxwcbeu000c14o70ich0agy'}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    >

    </ReactMapGl>
  )
}