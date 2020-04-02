import React from 'react'

const PaintingDetails = (props) => {
  let {paintingObj: {title, image, artist: {name}, dimensions: {height, width}}} = props
  return (
    <div className="ui card">
      <div>
        <img alt={title} src={image} />
      </div>
      <p>{`${title} by ${name}`}</p>
      <p>{`Height: ${height} x Width: ${width}`}</p>
    </div>
  )
}

export default PaintingDetails
