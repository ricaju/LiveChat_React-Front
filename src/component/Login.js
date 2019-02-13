import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';
<<<<<<< HEAD
import './Login.css';
import Logo from '../component/Logo/Logo.js';
=======
>>>>>>> parent of a282da6... version 1.1

class Login extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
  		username: '',
  		password: ''
  	}
	};

	handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  	};

	handleSubmit = (e) => {
	  e.preventDefault();
    axios.post('/getToken', {   //token
      email: this.state.username,
      password: this.state.password
    }).then(res => sessionStorage.setItem('MP-jwt', res.data)); //MP = "moj prvi :)"
	};

	render() {
    return (
      <div className="Login">
<<<<<<< HEAD
      <div className="col-md-10" id='bc-login'>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Label className= 'white' htmlFor="username">Username</Label>
              <Input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="Type your username"
                value={this.state.username}
                onChange = {e => this.handleChange(e)} />
=======
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" size="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              type="username"
              onChange={e => this.handleChange(e)}
            />
>>>>>>> parent of a282da6... version 1.1
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
      </div>
    );
  }
}


export default Login;
