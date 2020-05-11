import React from 'react'
import New from './New'

const NewsListing = ({ news }) => {
  return (
    <div className="row">
      {news.map((e) => (
        <New />
      ))}
    </div>
  )
}

export default NewsListing
