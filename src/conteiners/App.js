import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Login from '../component/Login';
import Registration from '../component/Registration';
import ChatContainerSending from '../component/ChatContainerSending';
import { PrivateRoute } from '../component/PrivateRoute';
import './App.css';
import Logo from '../component/Logo/Logo.js';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Redirect} from "react-router-dom";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from "apollo-link-http";
import { split } from 'apollo-client-preset'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/subscriptions',
  options: {
    reconnect: true
  }
})

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

const link = split(
  ({query}) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

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
      registration: false,
      container: true,
      redirect: false,
    }
  }

  handleLog = () => {
    this.setState({
      login: true,
      registration: false
    })
  }

  handleReg = () => {
    this.setState({
      login: false,
      registration: true
    })
  }

  handleTriger = async () => {
    this.setState({
      redirect: true,
    })
  }



  render() {
    if(this.state.redirect){
      return(
      <Router>
        <div>
        <ApolloProvider client={ client }>
          <Redirect to="/ChatContainerSending" />
          <PrivateRoute path="/ChatContainerSending" exact={true} component={ChatContainerSending} />
        </ApolloProvider> 
        </div>
      </Router>)
    }
    else {
      return(
      <div>
        <ApolloProvider client={ client }>
          <Particles className='particles' params={particleOptions} />
            {this.state.container ?                                     // testing Main
              <Container>
                <Row>
                  <Col xs="6">  <Logo /> </Col>
                  <Col xs="6" >
                  <Row className="red">
                  <Button id='login' onClick={this.handleLog}>Login</Button>
                  <Button id='registration' onClick={this.handleReg}>Registration</Button>
                    {this.state.login ? <Login trigerChat={this.handleTriger}  /> : null}
                    {this.state.registration ? <Registration trigerChat={this.handleTriger} /> : null}
                    </Row>
                  </Col>
                </Row>
              </Container> : null
            }
          </ApolloProvider>
      </div>
      );
    }
  }
}

export default App;
