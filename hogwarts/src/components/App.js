import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from '../containers/HogContainer'
import Filter from './Filter'

class App extends Component {

  constructor() {
    super()
    this.state = {
      greased: false,
      select: ""
    }
  }

  changeGreased = () => {
    this.setState({
      greased: !this.state.greased
    })
  }

  filterHogs = () => {
    let sortedHogs = this.selectHogs()

    if (this.state.greased) {
      let greasedHogs = sortedHogs.filter(hog => {
        return hog.greased == true
      })
      return greasedHogs
    } else {
      return sortedHogs
    }
  }

  selectHogs = () => {
    if(this.state.select === "name") {
      let copyHogs = [...hogs]
    
      let sortedHogs = copyHogs.sort((curr,next) => {
        return curr.name.localeCompare(next.name)
      })

      return sortedHogs
    }

    else if (this.state.select == "weight") {
      let copyHogs = [...hogs]
      
      let sortedHogs = copyHogs.sort((curr, next) => {
        if(curr.weight < next.weight) {
          return -1
        } else {
          return 1
        }
      })

      return sortedHogs
    } else {
      
      return hogs
    }
  }

  changeSelect = (event) => {
    let value = event.target.value

    this.setState({
      select: value
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter changeGreased={this.changeGreased} changeSelect={this.changeSelect} />
        <HogContainer hogs={this.filterHogs()}  />
      </div>
    );
  }
}

export default App;
