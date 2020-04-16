import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import App from './components/App'
import myReduxStore from './redux/store'

ReactDOM.render(<Provider store={myReduxStore}><App /></Provider>, document.getElementById('root'));








//
