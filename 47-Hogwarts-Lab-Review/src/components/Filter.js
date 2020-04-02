import React, {Component} from 'react'


class Filter extends Component {
  render() {
    return (
      <div>
       <select onChange={this.props.changeSelect}>
        <option value="all">Choose type</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>

      
      <label for="greased">Greased</label>
      <input onChange={this.props.changeGreased} type="checkbox" id="greased" name="greased" value="greased"/>
      </div>
    )
  }
}

export default Filter