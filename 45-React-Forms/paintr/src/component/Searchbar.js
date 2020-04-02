import React from 'react'

//function components
//need to take in props
//return some JSX
const Searchbar = (props) => {
  return  (
    <input
      type="text"
      placeholder="Search..."
      onChange={props.changingSearch}
      value={props.searchText}
    />
  )
}

export default Searchbar
