import React from 'react'
import { CardBody, ListGroup, ListGroupItem } from 'reactstrap'
import { isEmpty } from '../../helper/isEmpty'
import EmptyBox from '../../components/EmptyBox'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Calendar, MapPin } from 'react-feather'

const BusLineBody = (props) => {
  const { stops, openTimeline, route, setMarker } = props

  return (
    <CardBody>
      {isEmpty(stops) ? (
        <EmptyBox />
      ) : (
        <ListGroup>
          <PerfectScrollbar>
            {stops.map((stop, index) => (
              <ListGroupItem key={index}>
                <h4 style={{ fontSize: '0.85rem' }}>
                  <MapPin className="map-pin" />
                  {stop.name}
                </h4>

                <div>
                  <MapPin
                    className="calendar"
                    onClick={() => setMarker(stop)}
                  />
                  <Calendar
                    onClick={() => openTimeline(stop.id, route.id)}
                    className="calendar"
                  />
                </div>
              </ListGroupItem>
            ))}
          </PerfectScrollbar>
        </ListGroup>
      )}
    </CardBody>
  )
}

export default BusLineBody
