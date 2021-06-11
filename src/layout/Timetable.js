import React from 'react'
import moment from 'moment'

const TimeTable = ({ time }) => {
  return (
    <>
      <tr>
        <td>
          {moment
            .utc(moment.duration(time, 'seconds').asMilliseconds())
            .format('HH:mm')}
        </td>
      </tr>
    </>
  )
}

export default TimeTable
