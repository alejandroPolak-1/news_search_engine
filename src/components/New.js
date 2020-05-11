import React from 'react'

const New = ({ pieceOfNews }) => {
  //destructuring info to get api
  const { urlToImage, url, title, description, source } = pieceOfNews

  //check if the news have a image
  const image = { urlToImage } ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}

        <div className="card-content grey">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-action grey">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn  "
          >
            See Full News
          </a>
        </div>
      </div>
    </div>
  )
}

export default New
