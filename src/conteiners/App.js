import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Login from '../component/Login';
import Registration from '../component/Registration';
import ChatContainer from '../component/ChatContainer';
import './App.css';
import Logo from '../component/Logo/Logo.js';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import cors from 'cors';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


const particleOptions= {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        "color": {
          "value": "random"
        }
      }
    }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      registration: false
    }
  }

  handeLog = () => {
    this.setState({
      login: true,
      registration: false
    });
  }
  handleReg = () => {
    this.setState({
      login: false,
      registration: true
    })
  }
  render() {
    return(
      <div>
      <Router>
        <div>
          <Link to="/ChatContainer">ChatContainer</Link>
          <Route path="/ChatContainer" component={ChatContainer} />
        </div>
      </Router>

      <ApolloProvider client={client}>
      <Particles className='particles' params={particleOptions} />
          <Container>
            <Row>
              <Col xs="6">  <Logo /> </Col>
              <Col xs="6" >
              <Row className="red">
              <Button id='login' onClick={this.handeLog}>Login</Button>
              <Button id='registration' onClick={this.handleReg}>Registration</Button>
                {this.state.login ? <Login/> : null}
                {this.state.registration ? <Registration/> : null}
                </Row>
              </Col>
            </Row>

          </Container>
        </ApolloProvider>
      </div>
      );
    }
}

export default App;
