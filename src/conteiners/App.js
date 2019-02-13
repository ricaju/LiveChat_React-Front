import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../component/Login';
import Registration from '../component/Registration';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';

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
      <Particles className='particles' params={particleOptions} />
        <Router>
          <Container>
            <Row>
              <Col xs="6"> Prvi Kontejner </Col>
              <Col xs="6">
              <Button className="float-right" onClick={this.handeLog}>Login</Button>
              {this.state.login ? <Login/> : null}
              <Button className="float-left" onClick={this.handleReg}>Registration</Button>
              {this.state.registration ? <Registration/> : null}
              </Col>
            </Row>



          </Container>
        </Router>
      </div>
      )
    }
}

export default App;
