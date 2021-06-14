import React, { Fragment, useState, useCallback, useEffect } from 'react'
import Search from './Search'
import { useSelector } from 'react-redux'
import { Collapse, Card, CardHeader } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { BusLinesLayout, LoadMoreLayout } from '../Style'
import 'react-perfect-scrollbar/dist/css/styles.css'
import bus from '../../img/front-of-bus.svg'
import { isEmpty } from '../../helper/isEmpty'
import { RefreshCw, MapPin } from 'react-feather'
import BusLineBody from './BusLineBody'

const BusLines = (props) => {
  const { openTimeline, setMarker, setShowAllMarkers, toggleAllMarkers } = props
  const appStore = useSelector((state) => state.app)
  const { lines, routes, stops } = appStore
  const [items, setItems] = useState([])
  const [collapse, setCollapse] = useState(0)
  const [lineRoutes, setLineRoutes] = useState([])
  const [routeStops, setRouteStops] = useState([])
  const [addIndex, setAddIndex] = useState(0)
  const [route, setRoute] = useState(null)
  const [offset, setOffset] = useState(0)
  const [page] = useState(50)

  const cleanUp = useCallback(() => {
    setItems([])
  }, [])

  useEffect(() => {
    setItems(lines.slice(offset, page))
    setOffset(offset + page)

    return () => {
      cleanUp()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadMore = useCallback(() => {
    setItems([...items, ...lines.slice(offset, offset + page)])
    setOffset(offset + page)
  }, [offset, page, items, lines])

  const onLoadStops = useCallback(
    (stopIds) => {
      setShowAllMarkers(false)
      let routeStops = []
      if (!isEmpty(stopIds)) {
        for (let i = 0; i < stopIds.length; i++) {
          if (!isEmpty(stops)) {
            const stop = stops.find((s) => s.id === stopIds[i])
            if (stop !== undefined) {
              routeStops.push(stop)
            }
          }
        }
        setRouteStops(routeStops)
      }
    },
    [setShowAllMarkers, stops]
  )

  const onLoadRoutes = useCallback(
    (routeIds) => {
      setRouteStops([])
      let lineRoutes = []
      if (!isEmpty(routeIds)) {
        for (let i = 0; i < routeIds.length; i++) {
          if (!isEmpty(routes)) {
            const route = routes.find((r) => r.id === routeIds[i])
            if (route !== undefined) {
              lineRoutes.push(route)
            }
          }
        }
        setLineRoutes(lineRoutes)
        setRoute(lineRoutes[0])
        const stopIds = lineRoutes[0].stopIds
        onLoadStops(stopIds)
      }
    },
    [onLoadStops, routes]
  )

  const toggle = useCallback(
    (lineId, routeIds) => {
      setCollapse(collapse === Number(lineId) ? 0 : Number(lineId))
      onLoadRoutes(routeIds)
    },
    [collapse, onLoadRoutes]
  )

  const onSearch = useCallback(
    (e) => {
      let filtered = []
      const { value } = e.target
      if (value) {
        filtered = lines.filter((s) => {
          const name = s.name.toLowerCase()
          const number = s.number
          return name.includes(value), number.includes(value)
        })
        setItems(filtered)
      } else {
        setItems(lines.slice(0, 50))
      }
    },
    [lines]
  )

  const manipulateRouteIndex = useCallback(() => {
    const total = lineRoutes.length
    if (addIndex < total - 1) {
      setRoute(lineRoutes[addIndex + 1])
      setAddIndex(addIndex + 1)
      const stopIds = lineRoutes[addIndex + 1].stopIds
      onLoadStops(stopIds)
    } else if (addIndex === total - 1) {
      setAddIndex(0)
      setRoute(lineRoutes[0])
      const stopIds = lineRoutes[0].stopIds
      onLoadStops(stopIds)
    }
  }, [addIndex, lineRoutes, onLoadStops])

  return (
    <Fragment>
      <Search onSearch={onSearch} />
      <BusLinesLayout>
        <PerfectScrollbar>
          {items.map((item, index) => {
            return (
              <Card key={index}>
                <CardHeader onClick={() => toggle(item.id, item.routeIds)}>
                  <h4>
                    <img alt="" src={bus} />
                    {item.name}
                  </h4>
                  <h5>({item.number})</h5>
                </CardHeader>
                <Collapse isOpen={collapse === item.id}>
                  {!isEmpty(lineRoutes) ? (
                    <div className="d-flex justify-content-between">
                      <div>
                        <RefreshCw
                          size={13}
                          style={{
                            color: '#a20c25',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                          onClick={() => manipulateRouteIndex()}
                        />{' '}
                        <span
                          style={{
                            fontSize: '0.8rem',
                            color: '#a20c25',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                          onClick={() => manipulateRouteIndex()}
                        >
                          {`${route.name} (${addIndex + 1}/${
                            lineRoutes.length
                          })`}
                        </span>
                      </div>
                      <div>
                        <MapPin
                          onClick={() => toggleAllMarkers(routeStops)}
                          style={{ cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  ) : null}

                  <BusLineBody
                    stops={routeStops}
                    openTimeline={openTimeline}
                    route={route}
                    setMarker={setMarker}
                  />
                </Collapse>
              </Card>
            )
          })}
        </PerfectScrollbar>
        {items.length < lines.length ? (
          <LoadMoreLayout onClick={() => loadMore()}>
            Load More +
          </LoadMoreLayout>
        ) : null}
      </BusLinesLayout>
    </Fragment>
  )
}

export default BusLines
