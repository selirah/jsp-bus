import React from 'react'
import { EmptyBoxLayout } from './Style'

const EmptyBox = () => {
  return (
    <EmptyBoxLayout>
      <div className="empty-box">
        <h4>Empty Data</h4>
        <p>There are no results found</p>
      </div>
    </EmptyBoxLayout>
  )
}
export default EmptyBox
