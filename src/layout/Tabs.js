import React, { Fragment, useEffect, useCallback, useState } from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap'
import classnames from 'classnames'
import BusStops from './bus-stops/BusStops'
import BusLines from './bus-lines/BusLines'
import Times from '../layout/Times'
import { useSelector, useDispatch } from 'react-redux'
import appActions from '../store/app/actions'

const { getStopTimesRequest } = appActions

const Tabs = (props) => {
  const { setMarker, setShowAllMarkers, toggleAllMarkers } = props
  const dispatch = useDispatch()
  const appStore = useSelector((state) => state.app)
  const [activeTab, setActiveTab] = useState('1')
  const [showTimeline, setShowTimeline] = useState(false)
  const [timelines, setTimelines] = useState([])
  const [loadingTimelines, setLoadingTimelines] = useState(false)

  const toggleTab = useCallback(
    (tab) => {
      if (activeTab !== tab) setActiveTab(tab)
    },
    [activeTab]
  )

  const openTimeline = useCallback(
    (stopId, routeId) => {
      setShowTimeline(true)
      const params = {
        stopId,
        routeId
      }
      dispatch(getStopTimesRequest(params))
    },
    [dispatch]
  )

  const closeTimeline = useCallback(() => {
    setShowTimeline(false)
  }, [])

  useEffect(() => {
    const { loadingTimes, times } = appStore
    setLoadingTimelines(loadingTimes)
    setTimelines(times)
  }, [appStore])

  return (
    <Fragment>
      <Nav tabs className="nav mb-3 justify-content-center">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggleTab('1')
            }}
          >
            <i className="fa fa-map-marker"></i> Bus Stations
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggleTab('2')
            }}
          >
            <i className="fa fa-bus"></i> Bus Lines
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggleTab('3')
            }}
          >
            <i className="fa fa-map-o"></i> Route Planner
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="tab-content">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              {showTimeline ? (
                <Times
                  closeTimeline={closeTimeline}
                  timelines={timelines}
                  loadingTimelines={loadingTimelines}
                />
              ) : (
                <BusStops openTimeline={openTimeline} />
              )}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              {showTimeline ? (
                <Times
                  closeTimeline={closeTimeline}
                  timelines={timelines}
                  loadingTimelines={loadingTimelines}
                />
              ) : (
                <BusLines
                  openTimeline={openTimeline}
                  setMarker={setMarker}
                  setShowAllMarkers={setShowAllMarkers}
                  toggleAllMarkers={toggleAllMarkers}
                />
              )}
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Fragment>
  )
}

export default Tabs
