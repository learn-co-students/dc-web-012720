import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Nav from '../component/Navbar'
import PaintingDetails from '../component/PaintingDetails'
import paintingsData from '../data/paintings'

class App extends Component {
  constructor(){
    super()
    this.state = {
      activePainting: null
    }
  }

  //state changing callback as an arrow function
  changeActivePainting = (painting) => {
    console.log("I have been clicked!!!", this)
    this.setState( {activePainting: painting} )
    //set the state of activePainting to be what was clicked
  }

  render() {
    // console.log("herhe")
    // console.log("herhe")
    // console.log("herhe")
    // console.log("herhe")
    //
    return (
      <div className="App">
        <Nav/>
        {
          this.state.activePainting ? <PaintingDetails paintingObj={this.state.activePainting}/> : null
        }
        <PaintingsContainer
          myFunction={this.changeActivePainting}/>
      </div>
    );
  }
}

export default App;
