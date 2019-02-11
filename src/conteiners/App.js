import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Login from '../component/Login';
import Registration from '../component/Registration';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';

const client = new ApolloClient({
  uri: "https://localhost:3000"
});


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
      <ApolloProvider client={client}>
      <div className="container">
      <Particles className='particles' params={particleOptions} />
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
      </ApolloProvider>
      )
    }
}

export default App;
