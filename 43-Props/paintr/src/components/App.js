import React from 'react';
import '../App.css';
import Nav from './Navbar'
import PortraitBox from './PortraitBox'

//cohort name is Live Fast Pry Young
//color navy blue
//icon is coffee

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav
          name="Live Fast Pry Young"
          color="blue"
          icon="coffee"
        />
        <PortraitBox />
      </div>
    )
  }
}

export default App;
