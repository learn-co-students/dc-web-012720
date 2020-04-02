import React, {Component} from 'react'

//class component
class Navbar extends Component {
  render(){
    // console.log("Inside Navbar", this.props)
    return (
      <div className={`ui inverted ${this.props.color} menu navbar`}>
        <div className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`}></i>
            <div className="content">Painter</div>
            <div className="sub header">{this.props.name}</div>
          </h2>
        </div>
      </div>
    )
  }
}

export default Navbar
