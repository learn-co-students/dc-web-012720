import React, {Component} from 'react'
import {connect} from 'react-redux'

//Goal: want to inject Header with a prop called count => store.getState().count
class Header extends Component {
  render() {
    console.log("Header's props", this.props)
    return (
      <header className="App-header" >
        <h3 style={{color: this.props.color}}>{
          `The current count is less than ${this.props.countValue + (5 - (this.props.countValue % 5))}`
        }</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //prop : state.???
    countValue: state.count
  }
}

//Provider store={myReduxStore}
export default connect(mapStateToProps)(Header)


//const withCount = connect(mapStateToProps)
//const EnhancedHeaderWithCount = withCount(Header)
// export default EnhancedHeaderWithCount















//baby step number 1:
//Trick the header component into think its has a prop called color
//User HOC in order to inject addtional props called color into our Header

//goal: of React-Redux is to trick components into think that data in the store IS some type of props

// const withBlue = (SomeComponent) => {
//   //take SomeComponent transforms it so that it has an extra props color = "blue"
//   class EnhancedComponent extends React.Component {
//     render(){
//       return <SomeComponent {...this.props} color="blue"/>
//     }
//   }
//   return EnhancedComponent
// }
//
// //color = "blue"
// const EnhancedHeader = withBlue(Header);
//
// const withCount = (SomeComponent) => {
//   //create an exact clone of SomeComponent, BUT inject in additional props of count
//   class EnhancedComponent extends React.Component {
//     render(){
//       return <SomeComponent count={myReduxStore.getState().count}/>
//     }
//   }
//   return EnhancedComponent
// }
//
// const HeaderWithReduxCount = withCount(Header)
