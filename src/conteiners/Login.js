import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

class Login extends Component {
	constructor(props) {
	super(props);
	this.state = {
		username: '',
		password: ''
	};
	};

	handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  	};

	handleSubmit = (e) => {
	  e.preventDefault();
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
