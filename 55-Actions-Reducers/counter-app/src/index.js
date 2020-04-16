import React, { Component } from 'react';         //  App
import ReactDOM from 'react-dom';                 //   |- Header
import './index.css';                             //   |- Counter *state
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

//1. create a redux store and reducer and set up the state in that store
function reducer(oldstate = {count: 123}, action){
  console.log("what is oldstate:", oldstate, "what is action:", action)
  switch(action.type){
    case "INCREASE_COUNTER":
      return {count: oldstate.count + action.payload}
    case "DECREASE_COUNTER":
      return {count: oldstate.count - action.payload}
    default:
      return oldstate
  }
}

//DISPATCHING AN ACTION => REDUCER IS INVOKED

const store = createStore(reducer)

//store.getState() read from the store state
//store.dispatch() update the store state

//*********************************************************
class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  increment = (num) => {
    store.dispatch( {type: "INCREASE_COUNTER", payload: num} )
  }

  decrement = (num) => {
    store.dispatch( {type: "DECREASE_COUNTER", payload: num} )
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={  () => this.decrement(5)  }> -5 </button>
        <button onClick={ () => this.decrement(1) }> - </button>
        <button onClick={ () => this.increment(1) }> + </button>
        <button onClick={ () => this.increment(3) }> +3 </button>
        <h3>{`The current count is less than ${store.getState().count + (5 - (store.getState().count % 5))}`}</h3>

      </header>
    );
  }
}

class Counter extends Component {


  render() { //the React state changes, props, changes, or forceUpdate
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
