import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component {

  increment = (num) => {
    this.props.dispatch( {type: "INCREASE_COUNTER", payload: num} )
  }

  decrement = (num) => {
    this.props.dispatch( {type: "DECREASE_COUNTER", payload: num} )
  }

  render(){
    console.log("Counter's props:", this.props)
    return (
      <div className="Counter">
        <h1>{this.props.countValue}</h1>
        <button onClick={  () => this.decrement(5)  }> -5 </button>
        <button onClick={ () => this.decrement(1) }> - </button>
        <button onClick={ () => this.increment(1) }> + </button>
        <button onClick={ () => this.increment(3) }> +3 </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //prop : state.???
    countValue: state.count
  }
}

const withCount = connect(mapStateToProps)

const EnhancedCounter = withCount(Counter)

export default EnhancedCounter








//
