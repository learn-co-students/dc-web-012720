import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushis: [],
      firstIndex: 0,
      eatenSushis: [],
      wallet: 100
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => this.setState({
      allSushis: sushiData
    }))
  }

  getMoreSushi = () => {
    this.setState({
      firstIndex: this.state.firstIndex + 4
    })
  }

  eatSushi= (sushiObj) => {

    if(this.state.wallet > sushiObj.price) {
      let copyEatenSushis = [...this.state.eatenSushis]
      copyEatenSushis.push(sushiObj)
  
      let currentWallet = this.state.wallet
      currentWallet -= sushiObj.price
  
      this.setState({
        eatenSushis: copyEatenSushis,
        wallet: currentWallet
      })
    } else {
      alert("No money")
    }

  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer 
          currentSushi={this.state.allSushis.slice(this.state.firstIndex, this.state.firstIndex + 4)} 
          getMore={this.getMoreSushi } 
          eatSushi={this.eatSushi}
          removedSushis={this.state.eatenSushis}
        />
        <Table wallet={this.state.wallet} eatenSushis={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;