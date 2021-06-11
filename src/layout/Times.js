import React from 'react'
import { isEmpty } from '../helper/isEmpty'
import { TimesLayout } from './Style'
import TimeTable from './Timetable'
// import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

const Times = (props) => {
  const { timelines, closeTimeline, loadingTimelines } = props

  return (
    <TimesLayout>
      <div className="close-button">
        <button onClick={() => closeTimeline()}>X</button>
      </div>
      <div className="content">
        {loadingTimelines ? (
          <h6>loading..</h6>
        ) : (
          <div className="table-list">
            <table className="table bordered">
              <tbody>
                {/* <PerfectScrollbar> */}
                {!isEmpty(timelines) &&
                  timelines.map((t) => (
                    <TimeTable key={Math.random()} time={t} />
                  ))}
                {/* </PerfectScrollbar> */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </TimesLayout>
  )
}

export default Times
