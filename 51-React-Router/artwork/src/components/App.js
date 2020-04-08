import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'
import About from './About'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: '',
        selectedPainting: null
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        paintingsList: json
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  //callback that changes selectedPainting state
  onSelectPainting = (painting) => {
    this.setState({
      selectedPainting: painting
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar
          title='Paintr'
          icon="paint brush"
          color="blue"
          subtitle="List of Paintings"
        />

        <Switch>

          <Route exact path="/paintings/:id" render={(props) => {
            let paintingId = props.match.params.id
            let foundPainting = this.state.paintingsList.find(p => p.id === paintingId)
            return <PaintingDetails painting={foundPainting}/>
          }}/>

          <Route exact path="/paintings" render={() => <PaintingsList
              onSearchHandler={this.onSearchHandler}
              filterTerm={this.state.searchTerm}
              paintings={this.state.paintingsList}
              onSelectPainting={this.onSelectPainting}
            />} />

          <Route path="/" component={About} />
          
        </Switch>
      </div>
    );
  }
}


/*

*/

export default App;
