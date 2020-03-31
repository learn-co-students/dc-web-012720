import React, {Component} from 'react'
import Painting from '../component/Painting'

class PaintingsContainer extends Component{

  render(){
    console.log("Inside PaintingsContainer", this.props)

    return (
      <div>
        {this.props.paintings.map(painting =>
          <Painting
            key={painting.id}
            paintingObj={painting}
            anotherFunction={this.props.myFunction}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
