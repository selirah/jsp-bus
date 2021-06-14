import React, { Fragment, useState, useCallback, useEffect } from 'react'
import Search from './Search'
import { useSelector, useDispatch } from 'react-redux'
import { Collapse, Card, CardHeader } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { BusStopsLayout, LoadMoreLayout } from '../Style'
import { MapPin } from 'react-feather'
import 'react-perfect-scrollbar/dist/css/styles.css'
import BusStopBody from './BusStopBody'
import appActions from '../../store/app/actions'

const { getStopLinesRequest } = appActions

const BusStops = ({ openTimeline }) => {
  const dispatch = useDispatch()
  const appStore = useSelector((state) => state.app)
  const { stops } = appStore
  const [items, setItems] = useState([])
  const [collapse, setCollapse] = useState(0)
  const [stopLines, setStopLines] = useState([])
  const [loadingStopLines, setLoadingStopLines] = useState(false)
  const [id, setId] = useState(null)
  const [isRefresh, setIsRefresh] = useState(false)
  const [offset, setOffset] = useState(0)
  const [page] = useState(50)

  const cleanUp = useCallback(() => {
    setItems([])
  }, [])

  useEffect(() => {
    setItems(stops.slice(offset, page))
    setOffset(offset + page)

    return () => {
      cleanUp()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadMore = useCallback(() => {
    setItems([...items, ...stops.slice(offset, offset + page)])
    setOffset(offset + page)
  }, [offset, page, items, stops])

  const toggle = useCallback(
    (stopId) => {
      setCollapse(collapse === Number(stopId) ? 0 : Number(stopId))
      setId(stopId)
      setIsRefresh(false)
      dispatch(getStopLinesRequest(stopId))
    },
    [collapse, dispatch]
  )

  const onRefresh = useCallback(
    (stopId) => {
      dispatch(getStopLinesRequest(stopId))
      setIsRefresh(true)
    },
    [dispatch]
  )

  const onSearch = useCallback(
    (e) => {
      let filtered = []
      const { value } = e.target
      if (value) {
        filtered = stops.filter((s) => {
          const name = s.name.toLowerCase()
          const number = s.number
          return name.includes(value), number.includes(value)
        })
        setItems(filtered)
      } else {
        setItems(stops.slice(0, 50))
      }
    },
    [stops]
  )

  useEffect(() => {
    const { stopLines, loadingStopLines } = appStore
    setLoadingStopLines(loadingStopLines)
    setStopLines(stopLines)
  }, [appStore])

  return (
    <Fragment>
      <Search onSearch={onSearch} />
      <BusStopsLayout>
        <PerfectScrollbar>
          {items.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader onClick={() => toggle(item.id)}>
                  <h4>
                    <MapPin size={20} />
                    {item.name}
                  </h4>
                  <h5>({item.number})</h5>
                </CardHeader>
                <Collapse isOpen={collapse === item.id}>
                  <BusStopBody
                    stopLines={stopLines}
                    loadingStopLines={loadingStopLines}
                    onRefresh={onRefresh}
                    stopId={id}
                    isRefresh={isRefresh}
                    openTimeline={openTimeline}
                  />
                </Collapse>
              </Card>
            )
          })}
        </PerfectScrollbar>
      </BusStopsLayout>
      {items.length < stops.length ? (
        <LoadMoreLayout onClick={() => loadMore()}>Load More +</LoadMoreLayout>
      ) : null}
    </Fragment>
  )
}

export default BusStops
