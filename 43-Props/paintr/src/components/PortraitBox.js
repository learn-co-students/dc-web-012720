import React from 'react'
import PortraitCard from './PortraitCard'
import paintingsData from '../data/paintings'

class PortraitBox extends React.Component{
  //render = () => {}

  render(){
    return (
      <div> PortraitBox here
        { paintingsData.map(
            paintingObj => <PortraitCard
              painting={paintingObj}
              key={paintingObj.id}
            />
          )
        }
      </div>
    )
  }
}

//paintingsData = [{}, {}, {}]
// [<PortraitCard/>, <PortraitCard/>, <PortraitCard/>,...]

export default PortraitBox
