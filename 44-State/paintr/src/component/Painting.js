import React from 'react'

const Painting = (props) => {
  // console.log("what are the props in Painting?", props.paintingObj)
  let {paintingObj: {title, artist: {name}}} = props
  return (
    <div className="ui card" onClick={ () => props.anotherFunction(props.paintingObj) } >
      <p>{`${title} by ${name}`}</p>
    </div>
  )
}

//.addEventListener("click", () => anotherFunction(paintingObj) )

export default Painting
