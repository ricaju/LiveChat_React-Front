import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';

class Login extends Component {
	constructor(props) {
	super(props);
	this.state = {
		username: '',
		password: ''
	}
	this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  	};

	handleSubmit = (e) => {
	  e.preventDefault();
    axios.post('/getToken', {   //token
      email: this.state.username,
      password: this.state.password
    }).then(res => localStorage.setItem('MP-jwt', res.data)); //MP = "moj prvi :)"
	};

	render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" size="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              type="username"
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <FormGroup controlId="password" size="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"        //value?
              onChange={e => this.handleChange(e)}
            />
          </FormGroup>
          <Button
            block
            size="large"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}


export default Login;
