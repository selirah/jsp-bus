import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  Fragment
} from 'react'
import { useLoadScript } from '@react-google-maps/api'
import { useSelector, useDispatch } from 'react-redux'
import appActions from '../store/app/actions'
import Loader from './Loader'
import { MainWrapper, TabsLayout, MapLayout } from './Style'
import { isEmpty } from '../helper/isEmpty'
import Map from './Map'
import Tabs from './Tabs'

const { getLinesRequest, getStopsRequest, getRoutesRequest } = appActions

const libraries = ['places']

const Main = () => {
  const dispatch = useDispatch()
  const appStore = useSelector((state) => state.app)
  const { isLoaded } = useLoadScript({
    id: 'google-map',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    libraries
  })
  const mapRef = useRef()
  const [loadingLines, setLoadingLines] = useState(false)
  const [loadingRoutes, setLoadingRoutes] = useState(false)
  const [loadingStops, setLoadingStops] = useState(false)
  const [lines, setLines] = useState([])
  const [routes, setRoutes] = useState([])
  const [stops, setStops] = useState([])
  const [showInfo, setShowInfo] = useState(false)
  const [showAllMarkers, setShowAllMarkers] = useState(false)
  const [stop, setStop] = useState(null)

  useEffect(() => {
    dispatch(getLinesRequest())
    dispatch(getRoutesRequest())
    dispatch(getStopsRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { loadingLines, loadingRoutes, loadingStops, lines, routes, stops } =
      appStore
    setLoadingLines(loadingLines)
    setLoadingRoutes(loadingRoutes)
    setLoadingStops(loadingStops)
    setLines(lines)
    setRoutes(routes)
    setStops(stops)
  }, [appStore])

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng })
    mapRef.current.setZoom(14)
  }, [])

  const onLoadMapMarker = useCallback(
    (stop) => {
      setStop(stop)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          panTo({
            lat: parseFloat(stop.lat),
            lng: parseFloat(stop.Lon)
          })
        },
        () => null
      )
    },
    [panTo]
  )

  const onClickMarker = useCallback(() => {
    setShowInfo(true)
  }, [])

  const onLoadMap = useCallback((map) => {
    mapRef.current = map
  }, [])

  const onCloseInfoWindow = useCallback(() => {
    setShowInfo(false)
  }, [])

  const toggleAllMarkers = useCallback(
    (stops) => {
      if (showAllMarkers) {
        setStops([])
      } else {
        setStops(stops)
      }
      setShowAllMarkers(!showAllMarkers)
    },
    [showAllMarkers]
  )

  return (
    <Fragment>
      {!isLoaded ||
      (isEmpty(lines) && loadingLines) ||
      (isEmpty(routes) && loadingRoutes) ||
      (isEmpty(stops) && loadingStops) ? (
        <Loader />
      ) : (
        <MainWrapper>
          <TabsLayout>
            <Tabs
              setMarker={onLoadMapMarker}
              setShowAllMarkers={(value) => setShowAllMarkers(value)}
              toggleAllMarkers={toggleAllMarkers}
            />
          </TabsLayout>
          <MapLayout>
            <Map
              stop={stop}
              onClickMarker={onClickMarker}
              onCloseInfoWindow={onCloseInfoWindow}
              onLoadMap={onLoadMap}
              showAllMarkers={showAllMarkers}
              map={mapRef}
              showInfo={showInfo}
              stops={stops}
            />
          </MapLayout>
        </MainWrapper>
      )}
    </Fragment>
  )
}

export default Main
