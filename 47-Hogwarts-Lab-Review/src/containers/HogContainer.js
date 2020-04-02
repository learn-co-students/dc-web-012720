import React , {Component} from "react"
import HogCard from "../components/HogCard"

class HogContainer extends Component {
  
  render() {
    return (
      <div className="ui grid hog-box">
        {this.props.hogs.map(hogObj => (
          <HogCard hog={hogObj} />
        ))}
      </div>
    )
  }
}

export default HogContainer