import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Login from '../component/Login';
import Registration from '../component/Registration';
import ChatContainerSending from '../component/ChatContainerSending';
import {PrivateRoute} from '../component/PrivateRoute';
import ChatContainer from '../component/ChatContainer';
import './App.css';
import Logo from '../component/Logo/Logo.js';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import {SubscriptionClient} from 'subscriptions-transport-ws';

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

  handleMainChat = () => {
    this.setState({
      container: false
    })
  }

  handleTriger = () => {
    this.setState({
      redirect: true
    })

    const WSClient = new SubscriptionClient(`ws://localhost:4000/subscriptions`, {
      reconnect: true,
      connectionParams: {
      }
    });

    const GraphQLClient = new ApolloClient({
      link: WSClient,
      cache: new InMemoryCache()
    });
  }



  render() {
    if(this.state.redirect){
      return(
      <Router>
        <div>
          <Redirect to="/ChatContainerSending" />
          <PrivateRoute path="/ChatContainerSending" exact={true} component={ChatContainerSending} />
        </div>
      </Router>)
    }
    else {
      return(
      <div>
        <ApolloProvider client={client}>
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
