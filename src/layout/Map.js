import React from 'react'
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer
} from '@react-google-maps/api'
import StopMarker from './map/StopMarker'
import { isEmpty } from '../helper/isEmpty'
import MapStyles from './MapStyles'
// import { useSelector } from 'react-redux'

const mapContainerStyle = {
  width: '100%',
  height: '100vh'
}

const center = {
  lat: 41.997345,
  lng: 21.427996
}

const options = {
  styles: MapStyles,
  disableDefaultUI: false,
  zoomControl: true
}

const Map = (props) => {
  const {
    onLoadMap,
    stop,
    onClickMarker,
    onCloseInfoWindow,
    showAllMarkers,
    map,
    showInfo,
    stops,
    addressInput,
    directionsCallback,
    directionResponse
  } = props
  const directionsService = new window.google.maps.DirectionsService()
  const directionsDisplay = new window.google.maps.DirectionsRenderer()

  if (showAllMarkers && !isEmpty(stops)) {
    let bounds = new window.google.maps.LatLngBounds()
    for (let i = 0; i < stops.length; i++) {
      bounds.extend({
        lat: stops[i].lat,
        lng: stops[i].Lon
      })
    }
    map.current.fitBounds(bounds)
  }

  let content
  if (addressInput) {
    const { origin, destination } = addressInput
    content = (
      <>
        <DirectionsService
          options={{
            origin: new window.google.maps.LatLng(origin.lat, origin.lng),
            destination: new window.google.maps.LatLng(
              destination.lat,
              destination.lng
            ),
            travelMode: 'DRIVING'
          }}
          callback={directionsCallback}
          onLoad={onLoadMap}
        />
        {directionResponse && (
          <DirectionsRenderer
            options={{ directions: directionResponse }}
            onLoad={onLoadMap}
          />
        )}
      </>
    )
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
      onLoad={onLoadMap}
      options={options}
    >
      {!showAllMarkers ? (
        <>
          {stop ? (
            <StopMarker
              key={`bs-marker-${stop.id}`}
              stop={stop}
              onCloseInfoWindow={onCloseInfoWindow}
              onClickMarker={onClickMarker}
              showInfo={showInfo}
            />
          ) : null}
          {content}
        </>
      ) : (
        stops.map((bs, index) => (
          <StopMarker
            key={`bs-marker-${index}`}
            stop={bs}
            onCloseInfoWindow={onCloseInfoWindow}
            onClickMarker={onClickMarker}
            showInfo={showInfo}
          />
        ))
      )}
    </GoogleMap>
  )
}

export default Map
