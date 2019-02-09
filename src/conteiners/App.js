import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

class App extends Component {
  render() {
    return(
      <Registration/>
      )
    }
}

export default App;
