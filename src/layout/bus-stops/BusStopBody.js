import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { CardBody, ListGroup, ListGroupItem } from 'reactstrap'
import { isEmpty } from '../../helper/isEmpty'
import EmptyBox from '../../components/EmptyBox'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import bus from '../../img/front-of-bus.svg'
import { Calendar, RefreshCw } from 'react-feather'
import moment from 'moment'

const BusStopBody = (props) => {
  const { lines, routes } = useSelector((state) => state.app)
  const {
    stopLines,
    loadingStopLines,
    onRefresh,
    stopId,
    isRefresh,
    openTimeline
  } = props

  const getLine = useCallback(
    (lineId) => {
      const line = lines.find((l) => l.id === lineId)
      return line
    },
    [lines]
  )

  const getRoute = useCallback(
    (routeId) => {
      const route = routes.find((r) => r.id === routeId)
      return route
    },
    [routes]
  )

  return (
    <CardBody>
      {loadingStopLines && !isRefresh ? (
        <h6>loading..</h6>
      ) : (
        <div className="lines-container">
          {isEmpty(stopLines) ? (
            <EmptyBox />
          ) : (
            <ListGroup>
              <RefreshCw size={20} onClick={() => onRefresh(stopId)} />
              <PerfectScrollbar>
                {stopLines.map((stopLine, index) => (
                  <ListGroupItem key={index}>
                    <img alt="" src={bus} />
                    <div>
                      <div className="display-names">
                        <h4>{getLine(stopLine.lineId).name}</h4>
                        <h5>{getRoute(stopLine.routeId).name}</h5>
                      </div>
                      <div className="display-info">
                        <h4>
                          Estimated time of arrival:{' '}
                          {stopLine.remainingTime.map((t) => (
                            <span key={t}>
                              {moment
                                .utc(
                                  moment.duration(t, 'seconds').asMilliseconds()
                                )
                                .format('mm')
                                .toString() + ', '}
                            </span>
                          ))}
                          minutes
                        </h4>
                      </div>
                    </div>
                    <Calendar
                      onClick={() =>
                        openTimeline(stopLine.stopId, stopLine.routeId)
                      }
                    />
                  </ListGroupItem>
                ))}
              </PerfectScrollbar>
            </ListGroup>
          )}
        </div>
      )}
    </CardBody>
  )
}

export default BusStopBody
