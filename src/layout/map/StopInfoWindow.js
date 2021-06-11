import React from 'react'
import { StopInfoWindowWrapper } from '../Style'

const StopInfoWindow = ({ stop }) => {
  return (
    <StopInfoWindowWrapper>
      <b>{stop.name}</b>
    </StopInfoWindowWrapper>
  )
}

export default StopInfoWindow
