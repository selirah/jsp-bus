import React from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'
import StopInfoWindow from './StopInfoWindow'

const StopMarker = (props) => {
  const { stop, showInfo, onClickMarker, onCloseInfoWindow } = props

  const position = {
    lat: parseFloat(stop.lat),
    lng: parseFloat(stop.Lon)
  }

  const icon = {
    url:
      stop.areaId === 1
        ? require('../../img/bus-stop-red.png').default
        : require('../../img/bus-stop-black.png').default,
    scaledSize: new window.google.maps.Size(40, 40),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(15, 15)
  }

  return (
    <Marker
      onClick={onClickMarker}
      position={position}
      title={stop.name}
      icon={icon}
    >
      {showInfo && (
        <InfoWindow position={position} onCloseClick={onCloseInfoWindow}>
          <StopInfoWindow stop={stop} />
        </InfoWindow>
      )}
    </Marker>
  )
}

export default StopMarker
