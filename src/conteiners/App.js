import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import './App.css';

const particleOptions= {  
      particles: {
        number: {
          value: 80, 
          density: {
            enable: true,
            value_area: 1000
          }
        }
      }
    }

class App extends Component {
  render() {
    return(
      <div className="container">
      <Particles className='particles' params={particleOptions} />
      <div>
        <Router>
          <div className="conteiner">
            <ul>
              <li><Link to="/Login">Login</Link></li>
              <li><Link to="/Registration">Registration</Link></li>
            </ul>

          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />



          </div>
        </Router>
      </div>
      </div>
      )
    }
}

export default App;
