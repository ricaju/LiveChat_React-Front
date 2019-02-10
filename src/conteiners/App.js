import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

class App extends Component {
  render() {
    return(
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

      )
    }
}

export default App;
