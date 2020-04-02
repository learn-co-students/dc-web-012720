import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox'

//class components need to inherit from Component class
//class components need to have a render instance method
//render method RETURNS some JSX
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{ 1 + 1 }</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <CommentBox />
      </div>
    )
  }
}

export default App;
