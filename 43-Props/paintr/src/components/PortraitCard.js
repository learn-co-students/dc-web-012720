import React from 'react'

//functional component
//just a function returns JSX
//have props as a paramater
//DO NOT use this.props, just use props
const PortraitCard= ({painting: {title, image, artist: {name}, dimensions: {height, width}}}) => {
  // let {painting: {title, image, artist: {name}, dimensions: {height, width}}} = props
  // let {title, image, artist: {name}, dimensions: {height, width}} = props.painting
  return (
    <div className="ui card">
    	<div>
    		<img src={image} alt={title}/>
    	</div>
    	<p>{title} by {name}</p>
    	<p>Height: {height} x Width: {width}</p>
    </div>
  )
}
//no juggling `this`
//don't need the render()
//don't need to import {Component}
//functional components are more Succint!!!

//

export default PortraitCard
