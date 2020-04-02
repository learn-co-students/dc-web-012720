import React, {Component} from 'react'


class HogCard extends Component {

  constructor() {
    super()
    this.state = {
      display: false
    }
  }

  getHogImage = (hogName) => {
    let formatName = hogName.split(" ").join("_").toLowerCase()
     let image = require(`../hog-imgs/${formatName}.jpg`)
     return image
  }

  handleDetails = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    return (
      <div className="four wide column">
        {this.props.hog.name}
        <img src={this.getHogImage(this.props.hog.name)}></img>
        <input type="checkbox" checked={this.props.hog.greased} />
        {this.state.display ? (
          <button onClick={this.handleDetails}>Hide Details</button>
        ) : (
          <button onClick={this.handleDetails}>Show Details</button>
        )}
      

        {this.state.display ? (
          <div>
            <ul>
              <li> {this.props.hog.weight}</li>
              <li> {this.props.hog.specialty}</li>
              <li> {this.props.hog["highest medal achieved"]}</li>
            </ul>
          </div>
          ) : null}
        
      </div>
    )
  }

}

export default HogCard