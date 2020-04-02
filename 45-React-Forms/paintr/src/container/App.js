import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Nav from '../component/Navbar'
import PaintingDetails from '../component/PaintingDetails'
import paintingsData from '../data/paintings'
import Searchbar from '../component/Searchbar'

//paintingsData is a static [] of 100 paintings
//textField: "Gold"
//paintingsListToShow: [{}, {}]

class App extends Component {
  constructor(){
    super()
    this.state = {
      activePainting: null,
      textField: ""
    }
  }

  //change textField I can only do that in App
  //state changing callback
  changeTextField = (event) => {
    // console.log(event.target.value)
    this.setState( {textField: event.target.value} )
  }

  //state changing callback as an arrow function to bind `this`
  changeActivePainting = (painting) => {
    this.setState( {activePainting: painting} )
  }

  //helper method
  getFilteredPaintings(){
    return paintingsData.filter( (painting) => {return painting.title.toLowerCase().includes(this.state.textField.toLowerCase()) })
  }

  render() {
    //this is our App
    return (
      <div className="App">
        <Nav/>
        <Searchbar
          changingSearch={this.changeTextField} //func
          searchText={this.state.textField} //data
        />
        {
          this.state.activePainting ? <PaintingDetails paintingObj={this.state.activePainting}/> : null
        }
        <PaintingsContainer
          paintings={this.getFilteredPaintings()} //data
          myFunction={this.changeActivePainting} //function
        />
      </div>
    );
  }
}

export default App;
