import React from 'react'
import New from './New'

const NewsListing = ({ news }) => {
  return (
    <div className="row">
      {news.map((pieceOfNews) => (
        <New 
        key={pieceOfNews.url}
        pieceOfNews= {pieceOfNews}
        />
      ))}
    </div>
  )
}

export default NewsListing
